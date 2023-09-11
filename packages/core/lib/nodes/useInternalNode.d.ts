import { Node } from '../interfaces';
export declare function useInternalNode<S = null>(
  collect?: (node: Node) => S
): Omit<
  import('../editor/useInternalEditor').useInternalEditorReturnType<S>,
  'actions' | 'connectors' | 'query'
> & {
  id: string;
  related: boolean;
  inNodeContext: boolean;
  actions: {
    setProp: (cb: any, throttleRate?: number) => void;
    setCustom: (cb: any, throttleRate?: number) => void;
    setHidden: (bool: boolean) => void;
  };
  connectors: import('craftjs-utils-with-improvements').ChainableConnectors<
    {
      connect: (dom: HTMLElement) => HTMLElement;
      drag: (dom: HTMLElement) => HTMLElement;
    },
    | HTMLElement
    | import('react').ReactElement<
        any,
        string | import('react').JSXElementConstructor<any>
      >
  >;
};
