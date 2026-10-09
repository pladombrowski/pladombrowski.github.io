/**
 * Shell offline (PWA) do haila-web.
 *
 * Estrategia minima: guarda o `index.html` (app shell) e assets estaticos do
 * mesmo dominio; nunca intercepta APIs (GraphQL/REST) para nao competir com os
 * mocks dos testes nem esconder erros de rede das telas.
 *
 * Registrado apenas em producao e fora de automacao (ver
 * `src/services/offline-shell.service.ts`).
 */
const CACHE_NAME = 'haila-shell-v1'
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
      .then((cache) => cache.addAll(SHELL_ASSETS))
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
    event.respondWith(
      fetch(request)
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
