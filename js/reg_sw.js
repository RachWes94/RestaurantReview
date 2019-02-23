(function() {
  if (!navigator.serviceWorker) return;

  navigator.serviceWorker.register('./sw.js')
    .then(() => {
      console.log('The Service Worker has been registered');
    })
    .catch(() => {
      console.log('The Service Worker has failed to register');
    });
})()
