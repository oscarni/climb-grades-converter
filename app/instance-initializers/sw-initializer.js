import { Workbox } from 'workbox-window';
import config from 'climb-grades-converter/config/environment';

export function initialize(appInstance) {
  if ('serviceWorker' in navigator) {
    if (!config['ember-cli-workbox'].enabled) {
      return;
    }
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

    window.addEventListener('beforeunload', async () => {
      if (appUpdaterService.hasUpdate) {
        wb.messageSW({
          type: 'SKIP_WAITING_WHEN_SOLO',
        });
      }
    });

    wb.register();
  }
}

export default {
  initialize,
};
