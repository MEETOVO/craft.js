import { NodeId } from '@craftjs/core';
import { EventHandlerConnectors } from 'craftjs-utils-with-improvements';
import React from 'react';
import { LayerHandlers } from '../events/LayerHandlers';
export type LayerContextType = {
    id: NodeId;
    depth: number;
    connectors: EventHandlerConnectors<LayerHandlers, React.ReactElement>;
};
export declare const LayerContext: React.Context<LayerContextType>;
