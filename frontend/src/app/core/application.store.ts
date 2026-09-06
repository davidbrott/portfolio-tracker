import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Settings } from '../shared/models/settings.model';

type ApplicationState = {
  settings: Settings | null;
  loggedIn: boolean;
};

const initialSate: ApplicationState = {
  settings: null,
  loggedIn: false
};

export const ApplicationStore = signalStore(
  { providedIn: 'root' },
  withState(initialSate),
  withMethods((store) => ({
    updateSettings(settings: Settings): void {
      patchState(store, () => ({
        settings: settings
      }));
    },
    setLoggedIn(loggedIn: boolean): void {
      patchState(store, () => ({
        loggedIn: loggedIn
      }));
    }
  }))
);
