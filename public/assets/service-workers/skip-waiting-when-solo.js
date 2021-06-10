self.addEventListener('message', (event) => {
  // Our special skip waiting function!
  if (event.data && event.data.type === 'SKIP_WAITING_WHEN_SOLO') {
    self.clients
      .matchAll({
        includeUncontrolled: true,
      })
      .then((clients) => {
        if (clients.length < 2) {
          self.skipWaiting();
        }
      });
  }
});
