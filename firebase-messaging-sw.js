/**
 * FCM background service worker (compat SDK) — mesmo papel de
 * `haila-condo-front/web/firebase-messaging-sw-<flavor>.js`.
 *
 * O flavor chega por query string no registro
 * (`/firebase-messaging-sw.js?flavor=haila`), feito em `src/services/push.service.ts`.
 * Configs iguais as de `src/config/firebase.ts` (projetos `hailaspaceapp` e
 * `condofront`).
 */
/* global importScripts, firebase */
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

var flavor = new URL(self.location.href).searchParams.get('flavor') || 'hsr'
var config = CONFIG_BY_FLAVOR[flavor]

if (config) {
  importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js')
  importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js')
  firebase.initializeApp(config)
  firebase.messaging()
}
