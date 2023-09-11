import { deprecationWarning } from 'craftjs-utils-with-improvements';
import React, { useEffect } from 'react';
import { Element } from './Element';
export const deprecateCanvasComponent = () =>
  deprecationWarning('<Canvas />', {
    suggest: '<Element canvas={true} />',
  });
export function Canvas({ ...props }) {
  useEffect(() => deprecateCanvasComponent(), []);
  return React.createElement(Element, { ...props, canvas: true });
}
//# sourceMappingURL=Canvas.js.map
