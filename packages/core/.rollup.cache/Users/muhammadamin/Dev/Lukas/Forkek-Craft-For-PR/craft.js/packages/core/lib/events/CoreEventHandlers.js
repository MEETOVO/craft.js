import { DerivedEventHandlers, EventHandlers, } from 'meetovo-craftjs-utils';
export class CoreEventHandlers extends EventHandlers {
    handlers() {
        return {
            connect: (el, id) => { },
            select: (el, id) => { },
            hover: (el, id) => { },
            drag: (el, id) => { },
            drop: (el, id) => { },
            create: (el, UserElement, options) => { },
        };
    }
}
export class DerivedCoreEventHandlers extends DerivedEventHandlers {
}
//# sourceMappingURL=CoreEventHandlers.js.map