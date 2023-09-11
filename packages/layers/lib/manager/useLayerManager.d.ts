import { LayerState } from '../interfaces';
export declare function useLayerManager<C>(
  collector?: (state: LayerState) => C
): {
  store: import('./context').LayerStore;
} & import('craftjs-utils-with-improvements').ConditionallyMergeRecordTypes<
  C,
  {
    actions: {
      toggleLayer: (id: string) => void;
      setExpandedState: (id: string, expanded: boolean) => void;
      setLayerEvent: (
        eventType: import('../interfaces').LayerEvents,
        id: string
      ) => void;
      registerLayer: (id: string) => void;
      setDOM: (
        id: string,
        domCollection: Partial<Record<'dom' | 'headingDom', HTMLElement>>
      ) => void;
      setIndicator: (indicator: any) => void;
    } & {
      history: {
        undo: () => void;
        redo: () => void;
        clear: () => void;
        throttle: (
          rate?: number
        ) => import('craftjs-utils-with-improvements').Delete<
          {
            toggleLayer: (id: string) => void;
            setExpandedState: (id: string, expanded: boolean) => void;
            setLayerEvent: (
              eventType: import('../interfaces').LayerEvents,
              id: string
            ) => void;
            registerLayer: (id: string) => void;
            setDOM: (
              id: string,
              domCollection: Partial<Record<'dom' | 'headingDom', HTMLElement>>
            ) => void;
            setIndicator: (indicator: any) => void;
          },
          never
        >;
        merge: () => import('craftjs-utils-with-improvements').Delete<
          {
            toggleLayer: (id: string) => void;
            setExpandedState: (id: string, expanded: boolean) => void;
            setLayerEvent: (
              eventType: import('../interfaces').LayerEvents,
              id: string
            ) => void;
            registerLayer: (id: string) => void;
            setDOM: (
              id: string,
              domCollection: Partial<Record<'dom' | 'headingDom', HTMLElement>>
            ) => void;
            setIndicator: (indicator: any) => void;
          },
          never
        >;
        ignore: () => import('craftjs-utils-with-improvements').Delete<
          {
            toggleLayer: (id: string) => void;
            setExpandedState: (id: string, expanded: boolean) => void;
            setLayerEvent: (
              eventType: import('../interfaces').LayerEvents,
              id: string
            ) => void;
            registerLayer: (id: string) => void;
            setDOM: (
              id: string,
              domCollection: Partial<Record<'dom' | 'headingDom', HTMLElement>>
            ) => void;
            setIndicator: (indicator: any) => void;
          },
          never
        >;
      };
    };
    query:
      | {}
      | ({
          [x: string]: (...payload: any[]) => any;
        } & {
          history: {
            canUndo: () => boolean;
            canRedo: () => boolean;
          };
        });
  }
>;
