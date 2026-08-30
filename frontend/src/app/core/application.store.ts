import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Settings } from '../shared/models/settings.model';

type ApplicationState = {
  settings: Settings | null;
};

const initialSate: ApplicationState = {
  settings: null
};

export const ApplicationStore = signalStore(
  { providedIn: 'root' },
  withState(initialSate),
  withMethods((store) => ({
    updateSettings(settings: Settings): void {
      patchState(store, () => ({
        settings: settings
      }));
    }
  }))
);
