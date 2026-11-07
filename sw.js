/**
 * Shell offline (PWA) do haila-web.
 *
 * Estrategia minima: guarda o `index.html` (app shell) e assets estaticos do
 * mesmo dominio; nunca intercepta APIs (GraphQL/REST) para nao competir com os
 * mocks dos testes nem esconder erros de rede das telas.
 *
 * Registrado apenas em producao e fora de automacao (ver
 * `src/services/offline-shell.service.ts`).
 *
 * Bump `CACHE_NAME` quando mudar a politica de cache: o `activate` apaga todos
 * os caches com nome diferente. Sem o bump, assets de deploys anteriores ficam
 * vivos para sempre e um shell antigo continua rodando em vez de falhar.
 */
const CACHE_NAME = 'haila-shell-v2'
const SHELL_ASSETS = ['/', '/index.html', '/favicon.svg', '/manifest.webmanifest']
const STATIC_PREFIXES = ['/assets/', '/icons/']

function isStaticPath(pathname) {
  if (pathname === '/favicon.svg' || pathname === '/manifest.webmanifest') return true
  return STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

function cachePut(request, response) {
  if (!response || !response.ok) return
  const copy = response.clone()
  caches
    .open(CACHE_NAME)
    .then((cache) => cache.put(request, copy))
    .catch(() => {})
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        cache.addAll(SHELL_ASSETS.map((asset) => new Request(asset, { cache: 'no-store' }))),
      )
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return

  let url
  try {
    url = new URL(request.url)
  } catch {
    return
  }
  if (url.origin !== self.location.origin) return
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/file-upload/')) return

  if (request.mode === 'navigate') {
    // `no-store` ignora o cache HTTP do browser (GitHub Pages manda
    // `max-age=600` no HTML). Sem isso, um deploy recente ainda pode bootar
    // o shell anterior por ate 10 min; os chunks antigos seguem no cache e a
    // app roda uma build velha em vez de recarregar.
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .then((response) => {
          cachePut('/index.html', response)
          return response
        })
        .catch(() =>
          caches.match('/index.html').then(
            (cached) =>
              cached ||
              new Response('<h1>Offline</h1>', {
                status: 503,
                headers: { 'Content-Type': 'text/html; charset=utf-8' },
              }),
          ),
        ),
    )
    return
  }

  if (!isStaticPath(url.pathname)) return

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          cachePut(request, response)
          return response
        }),
    ),
  )
})
