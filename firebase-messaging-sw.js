// firebase-messaging-sw.js
// Place this file in the ROOT of your GitHub Pages repo (same level as index.html)

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyCePnTRSWFX-R0n4iIMLHIr0PZjk-WcHco",
  authDomain:        "msesalert-b972d.firebaseapp.com",
  databaseURL:       "https://msesalert-b972d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "msesalert-b972d",
  storageBucket:     "msesalert-b972d.firebasestorage.app",
  messagingSenderId: "992963491194",
  appId:             "1:992963491194:web:f0d0b95343114e067e52c3"
});

const messaging = firebase.messaging();

// Handle background messages (when tab is not in focus)
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || '⚠ Ward Alert', {
    body: body || 'An event was triggered in the ward system.',
    icon: 'https://em-content.zobj.net/source/google/387/hospital_1f3e5.png',
    badge: 'https://em-content.zobj.net/source/google/387/hospital_1f3e5.png',
    tag: 'ward-alert',
    renotify: true
  });
});
