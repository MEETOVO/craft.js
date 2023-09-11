import { SubscriberAndCallbacksFor } from 'craftjs-utils-with-improvements';
import { createContext } from 'react';

import { LayerMethods } from './actions';

export type LayerStore = SubscriberAndCallbacksFor<typeof LayerMethods>;
export type LayerManagerContextType = {
  store: LayerStore;
};

export const LayerManagerContext = createContext<LayerManagerContextType>(
  {} as LayerManagerContextType
);
