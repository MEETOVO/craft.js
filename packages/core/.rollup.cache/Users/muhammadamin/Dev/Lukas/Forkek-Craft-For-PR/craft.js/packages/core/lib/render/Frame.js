import { deprecationWarning, ROOT_NODE } from 'craftjs-utils-with-improvements';
import React, { useEffect, useRef } from 'react';
import { useInternalEditor } from '../editor/useInternalEditor';
import { NodeElement } from '../nodes/NodeElement';
const RenderRootNode = () => {
  const { timestamp } = useInternalEditor((state) => ({
    timestamp:
      state.nodes[ROOT_NODE] && state.nodes[ROOT_NODE]._hydrationTimestamp,
  }));
  if (!timestamp) {
    return null;
  }
  return React.createElement(NodeElement, { id: ROOT_NODE, key: timestamp });
};
/**
 * A React Component that defines the editable area
 */
export const Frame = ({ children, json, data }) => {
  const { actions, query } = useInternalEditor();
  if (!!json) {
    deprecationWarning('<Frame json={...} />', {
      suggest: '<Frame data={...} />',
    });
  }
  const initialState = useRef({
    initialChildren: children,
    initialData: data || json,
  });
  useEffect(() => {
    const { initialChildren, initialData } = initialState.current;
    if (initialData) {
      actions.history.ignore().deserialize(initialData);
    } else if (initialChildren) {
      const rootNode = React.Children.only(initialChildren);
      const node = query.parseReactElement(rootNode).toNodeTree((node, jsx) => {
        if (jsx === rootNode) {
          node.id = ROOT_NODE;
        }
        return node;
      });
      actions.history.ignore().addNodeTree(node);
    }
  }, [actions, query]);
  return React.createElement(RenderRootNode, null);
};
//# sourceMappingURL=Frame.js.map
