import { Workbox } from 'workbox-window';

export function initialize(appInstance) {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');
    const appUpdaterService = appInstance.lookup('service:app-updater');

    wb.addEventListener('controlling', () => {
      // Reset update function when service worker is activated and controlling the page via another tab
      appUpdaterService.resetUpdateFunction();
    });

    const showSkipWaitingPrompt = () => {
      appUpdaterService.update = () => {
        wb.addEventListener('controlling', () => {
          // reload page once service worker is activated and controlling the page
          window.location.reload();
        });
        // activate service worker
        wb.messageSkipWaiting();
      };
      appUpdaterService.hasUpdate = true; // Triggers update dialog
    };
    wb.addEventListener('waiting', showSkipWaitingPrompt);

    wb.register();
  }
}

export default {
  initialize,
};
