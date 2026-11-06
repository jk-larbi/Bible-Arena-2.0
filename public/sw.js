// BibleArena 2.0 - Background Web Push Service Worker

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle incoming background push events
self.addEventListener('push', (event) => {
  let payload = {
    title: 'BibleArena Notification',
    body: 'You have a new update in BibleArena.',
    link: '/notifications',
    icon: '/assets/bible-arena-logo.png'
  };

  if (event.data) {
    try {
      const json = event.data.json();
      payload = {
        title: json.title || payload.title,
        body: json.body || json.message || payload.body,
        link: json.link || json.url || json.reference_id || payload.link,
        icon: json.icon || payload.icon,
        data: json
      };
    } catch {
      payload.body = event.data.text();
    }
  }

  const options = {
    body: payload.body,
    icon: payload.icon,
    badge: payload.icon,
    data: {
      link: payload.link
    },
    vibrate: [100, 50, 100]
  };

  event.waitUntil(
    self.registration.showNotification(payload.title, options)
  );
});

// Handle notification click to navigate user to the provided link
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetLink = event.notification.data?.link || '/notifications';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If a browser tab is already open, focus it and navigate
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(targetLink);
          return client.focus();
        }
      }
      // Otherwise open a new window
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetLink);
      }
    })
  );
});
