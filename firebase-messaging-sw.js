/**
 * FCM background service worker (compat SDK) — mesmo papel de
 * `haila-condo-front/web/firebase-messaging-sw-<flavor>.js`.
 *
 * O flavor chega por query string no registro
 * (`/firebase-messaging-sw.js?flavor=haila`), feito em `src/services/push.service.ts`.
 * Configs iguais as de `src/config/firebase.ts` (projetos `hailaspaceapp` e
 * `condofront`).
 *
 * Regras:
 * - mensagem com `notification` é exibida pelo próprio FCM (não duplicar);
 * - mensagem só com `data` é exibida aqui;
 * - clique abre/foca o app no `data.link` (ou `url`/`click_action`).
 */
/* global importScripts, firebase, clients */
var CONFIG_BY_FLAVOR = {
  haila: {
    apiKey: 'AIzaSyB52TgWZkH5lOxYHcOH9dMdWdvxwBliIsM',
    authDomain: 'hailaspaceapp.firebaseapp.com',
    projectId: 'hailaspaceapp',
    storageBucket: 'hailaspaceapp.firebasestorage.app',
    messagingSenderId: '634115106224',
    appId: '1:634115106224:web:1d612334966e4e7686a275',
  },
  hsr: {
    apiKey: 'AIzaSyDQSrhfFcKSsUqO3E9WuJW9QUI8UFd-MJM',
    authDomain: 'condofront.firebaseapp.com',
    projectId: 'condofront',
    storageBucket: 'condofront.firebasestorage.app',
    messagingSenderId: '297932944436',
    appId: '1:297932944436:web:6a26ef4315be0ea4b00661',
  },
}

var flavor = new URL(self.location.href).searchParams.get('flavor') || 'haila'
var config = CONFIG_BY_FLAVOR[flavor]
var DEFAULT_LINK = '/app/notificacoes'
var DEFAULT_TITLE = 'Haila'

function safeLink(value) {
  var link = typeof value === 'string' ? value.trim() : ''
  if (!link) return DEFAULT_LINK
  // Só caminho interno ou URL absoluta http(s): nada de javascript:.
  if (link.charAt(0) === '/') return link
  if (/^https?:\/\//i.test(link)) return link
  return DEFAULT_LINK
}

if (config) {
  importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js')
  importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js')
  firebase.initializeApp(config)

  try {
    var messaging = firebase.messaging()
    if (messaging && typeof messaging.onBackgroundMessage === 'function') {
      messaging.onBackgroundMessage(function (payload) {
        // Com `notification`, o FCM já mostrou: só o clique nos interessa.
        if (payload && payload.notification) return
        var data = (payload && payload.data) || {}
        var title = data.title || DEFAULT_TITLE
        var body = data.body || ''
        self.registration.showNotification(title, {
          body: body,
          icon: '/favicon.ico',
          data: {
            link: safeLink(data.link || data.url || data.click_action),
          },
        })
      })
    }
  } catch (error) {
    // SDK ausente/ bloqueado: o clique ainda funciona para notificações do FCM.
  }
}

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  var data = event.notification.data || {}
  var target = safeLink(data.link || data.url || data.click_action)
  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (windows) {
        for (var index = 0; index < windows.length; index += 1) {
          var client = windows[index]
          if ('focus' in client) {
            if ('navigate' in client) {
              return client.navigate(target).then(function () {
                return client.focus()
              })
            }
            return client.focus()
          }
        }
        if (clients.openWindow) return clients.openWindow(target)
        return undefined
      }),
  )
})
