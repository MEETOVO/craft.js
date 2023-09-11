'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('immer'),
  t = require('lodash/isEqualWith'),
  n = require('react'),
  r = require('shallowequal'),
  o = require('tiny-invariant'),
  i = require('react-dom');
function a(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var s = a(e),
  c = a(t),
  u = a(n),
  l = a(r),
  f = a(o),
  d = a(i);
function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? p(Object(n), !0).forEach(function (t) {
          E(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : p(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function y(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function v(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, P(r.key), r);
  }
}
function b(e, t, n) {
  return (
    t && v(e.prototype, t),
    n && v(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function E(e, t, n) {
  return (
    (t = P(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function g(e) {
  return (
    (g = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    g(e)
  );
}
function O(e, t) {
  return (
    (O = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    O(e, t)
  );
}
function m(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function R() {
  return (
    (R =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, n) {
            var r = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = g(e));

              );
              return e;
            })(e, t);
            if (r) {
              var o = Object.getOwnPropertyDescriptor(r, t);
              return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value;
            }
          }),
    R.apply(this, arguments)
  );
}
function _(e, t) {
  return (
    T(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null != n) {
        var r,
          o,
          i,
          a,
          s = [],
          c = !0,
          u = !1;
        try {
          if (((i = (n = n.call(e)).next), 0 === t)) {
            if (Object(n) !== n) return;
            c = !1;
          } else
            for (
              ;
              !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t);
              c = !0
            );
        } catch (e) {
          (u = !0), (o = e);
        } finally {
          try {
            if (!c && null != n.return && ((a = n.return()), Object(a) !== a))
              return;
          } finally {
            if (u) throw o;
          }
        }
        return s;
      }
    })(e, t) ||
    I(e, t) ||
    D()
  );
}
function w(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return N(e);
    })(e) ||
    x(e) ||
    I(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function T(e) {
  if (Array.isArray(e)) return e;
}
function x(e) {
  if (
    ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e['@@iterator']
  )
    return Array.from(e);
}
function I(e, t) {
  if (e) {
    if ('string' == typeof e) return N(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? N(e, t)
        : void 0
    );
  }
}
function N(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function D() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function P(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, 'string');
      if ('object' != typeof r) return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(e);
  })(e);
  return 'symbol' == typeof t ? t : String(t);
}
var C = {
    UNDO: 'HISTORY_UNDO',
    REDO: 'HISTORY_REDO',
    THROTTLE: 'HISTORY_THROTTLE',
    IGNORE: 'HISTORY_IGNORE',
    MERGE: 'HISTORY_MERGE',
    CLEAR: 'HISTORY_CLEAR',
  },
  k = (function () {
    function t() {
      y(this, t), E(this, 'timeline', []), E(this, 'pointer', -1);
    }
    return (
      b(t, [
        {
          key: 'add',
          value: function (e, t) {
            (0 === e.length && 0 === t.length) ||
              ((this.pointer = this.pointer + 1),
              (this.timeline.length = this.pointer),
              (this.timeline[this.pointer] = {
                patches: e,
                inversePatches: t,
                timestamp: Date.now(),
              }));
          },
        },
        {
          key: 'throttleAdd',
          value: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 500;
            if (0 !== e.length || 0 !== t.length) {
              if (this.timeline.length && this.pointer >= 0) {
                var r = this.timeline[this.pointer],
                  o = r.patches,
                  i = r.inversePatches,
                  a = r.timestamp;
                if (new Date().getTime() - a < n)
                  return void (this.timeline[this.pointer] = {
                    timestamp: a,
                    patches: [].concat(w(o), w(e)),
                    inversePatches: [].concat(w(t), w(i)),
                  });
              }
              this.add(e, t);
            }
          },
        },
        {
          key: 'merge',
          value: function (e, t) {
            if (0 !== e.length || 0 !== t.length)
              if (this.timeline.length && this.pointer >= 0) {
                var n = this.timeline[this.pointer],
                  r = n.inversePatches;
                this.timeline[this.pointer] = {
                  timestamp: n.timestamp,
                  patches: [].concat(w(n.patches), w(e)),
                  inversePatches: [].concat(w(t), w(r)),
                };
              } else this.add(e, t);
          },
        },
        {
          key: 'clear',
          value: function () {
            (this.timeline = []), (this.pointer = -1);
          },
        },
        {
          key: 'canUndo',
          value: function () {
            return this.pointer >= 0;
          },
        },
        {
          key: 'canRedo',
          value: function () {
            return this.pointer < this.timeline.length - 1;
          },
        },
        {
          key: 'undo',
          value: function (t) {
            if (this.canUndo()) {
              var n = this.timeline[this.pointer].inversePatches;
              return (this.pointer = this.pointer - 1), e.applyPatches(t, n);
            }
          },
        },
        {
          key: 'redo',
          value: function (t) {
            if (this.canRedo())
              return (
                (this.pointer = this.pointer + 1),
                e.applyPatches(t, this.timeline[this.pointer].patches)
              );
          },
        },
      ]),
      t
    );
  })();
function A(e, t, n) {
  var r = Object.keys(e()).reduce(function (n, r) {
    return h(
      h({}, n),
      {},
      E({}, r, function () {
        var n;
        return (n = e(t()))[r].apply(n, arguments);
      })
    );
  }, {});
  return h(
    h({}, r),
    {},
    {
      history: {
        canUndo: function () {
          return n.canUndo();
        },
        canRedo: function () {
          return n.canRedo();
        },
      },
    }
  );
}
e.enableMapSet(), e.enablePatches();
var S,
  j = (function () {
    function e(t) {
      y(this, e),
        E(this, 'getState', void 0),
        E(this, 'subscribers', []),
        (this.getState = t);
    }
    return (
      b(e, [
        {
          key: 'subscribe',
          value: function (e, t, n) {
            var r = this,
              o = new H(
                function () {
                  return e(r.getState());
                },
                t,
                n
              );
            return this.subscribers.push(o), this.unsubscribe.bind(this, o);
          },
        },
        {
          key: 'unsubscribe',
          value: function (e) {
            if (this.subscribers.length) {
              var t = this.subscribers.indexOf(e);
              if (t > -1) return this.subscribers.splice(t, 1);
            }
          },
        },
        {
          key: 'notify',
          value: function () {
            this.subscribers.forEach(function (e) {
              return e.collect();
            });
          },
        },
      ]),
      e
    );
  })(),
  H = (function () {
    function e(t, n) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      y(this, e),
        E(this, 'collected', void 0),
        E(this, 'collector', void 0),
        E(this, 'onChange', void 0),
        E(this, 'id', void 0),
        (this.collector = t),
        (this.onChange = n),
        r && this.collect();
    }
    return (
      b(e, [
        {
          key: 'collect',
          value: function () {
            try {
              var e = this.collector();
              c.default(e, this.collected) ||
                ((this.collected = e),
                this.onChange && this.onChange(this.collected));
            } catch (e) {
              console.warn(e);
            }
          },
        },
      ]),
      e
    );
  })(),
  M = function () {
    var e = Date.now().toString(36),
      t = Math.random().toString(36).substring(2, 5);
    return ''.concat(e, '-').concat(t);
  },
  L = (function () {
    function e() {
      y(this, e),
        E(this, 'isEnabled', !0),
        E(this, 'elementIdMap', new WeakMap()),
        E(this, 'registry', new Map());
    }
    return (
      b(e, [
        {
          key: 'getElementId',
          value: function (e) {
            var t = this.elementIdMap.get(e);
            if (t) return t;
            var n = M();
            return this.elementIdMap.set(e, n), n;
          },
        },
        {
          key: 'getConnectorId',
          value: function (e, t) {
            var n = this.getElementId(e);
            return ''.concat(t, '--').concat(n);
          },
        },
        {
          key: 'register',
          value: function (e, t) {
            var n = this,
              r = this.getByElement(e, t.name);
            if (r) {
              if (l.default(t.required, r.required)) return r;
              this.getByElement(e, t.name).disable();
            }
            var o = null,
              i = this.getConnectorId(e, t.name);
            return (
              this.registry.set(i, {
                id: i,
                required: t.required,
                enable: function () {
                  o && o(), (o = t.connector(e, t.required, t.options));
                },
                disable: function () {
                  o && o();
                },
                remove: function () {
                  return n.remove(i);
                },
              }),
              this.isEnabled && this.registry.get(i).enable(),
              this.registry.get(i)
            );
          },
        },
        {
          key: 'get',
          value: function (e) {
            return this.registry.get(e);
          },
        },
        {
          key: 'remove',
          value: function (e) {
            var t = this.get(e);
            t && (t.disable(), this.registry.delete(t.id));
          },
        },
        {
          key: 'enable',
          value: function () {
            (this.isEnabled = !0),
              this.registry.forEach(function (e) {
                e.enable();
              });
          },
        },
        {
          key: 'disable',
          value: function () {
            (this.isEnabled = !1),
              this.registry.forEach(function (e) {
                e.disable();
              });
          },
        },
        {
          key: 'getByElement',
          value: function (e, t) {
            return this.get(this.getConnectorId(e, t));
          },
        },
        {
          key: 'removeByElement',
          value: function (e, t) {
            return this.remove(this.getConnectorId(e, t));
          },
        },
        {
          key: 'clear',
          value: function () {
            this.disable(),
              (this.elementIdMap = new WeakMap()),
              (this.registry = new Map());
          },
        },
      ]),
      e
    );
  })();
(exports.EventHandlerUpdates = void 0),
  ((S = exports.EventHandlerUpdates || (exports.EventHandlerUpdates = {}))[
    (S.HandlerDisabled = 0)
  ] = 'HandlerDisabled'),
  (S[(S.HandlerEnabled = 1)] = 'HandlerEnabled');
var U = (function () {
    function e(t) {
      y(this, e),
        E(this, 'options', void 0),
        E(this, 'registry', new L()),
        E(this, 'subscribers', new Set()),
        (this.options = t);
    }
    return (
      b(e, [
        {
          key: 'listen',
          value: function (e) {
            var t = this;
            return (
              this.subscribers.add(e),
              function () {
                return t.subscribers.delete(e);
              }
            );
          },
        },
        {
          key: 'disable',
          value: function () {
            this.onDisable && this.onDisable(),
              this.registry.disable(),
              this.subscribers.forEach(function (e) {
                e(exports.EventHandlerUpdates.HandlerDisabled);
              });
          },
        },
        {
          key: 'enable',
          value: function () {
            this.onEnable && this.onEnable(),
              this.registry.enable(),
              this.subscribers.forEach(function (e) {
                e(exports.EventHandlerUpdates.HandlerEnabled);
              });
          },
        },
        {
          key: 'cleanup',
          value: function () {
            this.disable(), this.subscribers.clear(), this.registry.clear();
          },
        },
        {
          key: 'addCraftEventListener',
          value: function (e, t, n, r) {
            var o = function (r) {
              (function (e, t, n) {
                e.craft ||
                  (e.craft = {
                    stopPropagation: function () {},
                    blockedEvents: {},
                  });
                for (
                  var r = (e.craft && e.craft.blockedEvents[t]) || [], o = 0;
                  o < r.length;
                  o++
                ) {
                  var i = r[o];
                  if (n !== i && n.contains(i)) return !0;
                }
                return !1;
              })(r, t, e) ||
                ((r.craft.stopPropagation = function () {
                  r.craft.blockedEvents[t] || (r.craft.blockedEvents[t] = []),
                    r.craft.blockedEvents[t].push(e);
                }),
                n(r));
            };
            return (
              e.addEventListener(t, o, r),
              function () {
                return e.removeEventListener(t, o, r);
              }
            );
          },
        },
        {
          key: 'createConnectorsUsage',
          value: function () {
            var e = this,
              t = this.handlers(),
              n = new Set(),
              r = !1,
              o = new Map();
            return {
              connectors: Object.entries(t).reduce(function (t, i) {
                var a = _(i, 2),
                  s = a[0],
                  c = a[1];
                return h(
                  h({}, t),
                  {},
                  E({}, s, function (t, i, a) {
                    var u = function () {
                      var r = e.registry.register(t, {
                        required: i,
                        name: s,
                        options: a,
                        connector: c,
                      });
                      return n.add(r.id), r;
                    };
                    return (
                      o.set(e.registry.getConnectorId(t, s), u), r && u(), t
                    );
                  })
                );
              }, {}),
              register: function () {
                (r = !0),
                  o.forEach(function (e) {
                    e();
                  });
              },
              cleanup: function () {
                (r = !1),
                  n.forEach(function (t) {
                    return e.registry.remove(t);
                  });
              },
            };
          },
        },
        {
          key: 'derive',
          value: function (e, t) {
            return new e(this, t);
          },
        },
        {
          key: 'createProxyHandlers',
          value: function (e, t) {
            var n = [],
              r = e.handlers(),
              o = new Proxy(r, {
                get: function (e, t, o) {
                  return t in r == 0
                    ? Reflect.get(e, t, o)
                    : function (e) {
                        for (
                          var o = arguments.length,
                            i = new Array(o > 1 ? o - 1 : 0),
                            a = 1;
                          a < o;
                          a++
                        )
                          i[a - 1] = arguments[a];
                        var s = r[t].apply(r, [e].concat(i));
                        s && n.push(s);
                      };
                },
              });
            return (
              t(o),
              function () {
                n.forEach(function (e) {
                  e();
                });
              }
            );
          },
        },
        {
          key: 'reflect',
          value: function (e) {
            return this.createProxyHandlers(this, e);
          },
        },
      ]),
      e
    );
  })(),
  V = (function (e) {
    !(function (e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && O(e, t);
    })(o, U);
    var t,
      n,
      r =
        ((t = o),
        (n = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()),
        function () {
          var e,
            r = g(t);
          if (n) {
            var o = g(this).constructor;
            e = Reflect.construct(r, arguments, o);
          } else e = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ('object' == typeof t || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return m(e);
          })(this, e);
        });
    function o(e, t) {
      var n;
      return (
        y(this, o),
        E(m((n = r.call(this, t))), 'derived', void 0),
        E(m(n), 'unsubscribeParentHandlerListener', void 0),
        (n.derived = e),
        (n.options = t),
        (n.unsubscribeParentHandlerListener = n.derived.listen(function (e) {
          switch (e) {
            case exports.EventHandlerUpdates.HandlerEnabled:
              return n.enable();
            case exports.EventHandlerUpdates.HandlerDisabled:
              return n.disable();
            default:
              return;
          }
        })),
        n
      );
    }
    return (
      b(o, [
        {
          key: 'inherit',
          value: function (e) {
            return this.createProxyHandlers(this.derived, e);
          },
        },
        {
          key: 'cleanup',
          value: function () {
            R(g(o.prototype), 'cleanup', this).call(this),
              this.unsubscribeParentHandlerListener();
          },
        },
      ]),
      o
    );
  })();
function q(e, t) {
  t && ('function' == typeof e ? e(t) : (e.current = t));
}
function G(e, t) {
  const r = e.ref;
  return (
    f.default(
      'string' != typeof r,
      'Cannot connect to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute'
    ),
    n.cloneElement(
      e,
      r
        ? {
            ref: (e) => {
              q(r, e), q(t, e);
            },
          }
        : { ref: t }
    )
  );
}
function B(e) {
  return (t = null, ...r) => {
    if (!n.isValidElement(t)) {
      if (!t) return;
      const n = t;
      return n && e(n, ...r), n;
    }
    const o = t;
    return (
      (function (e) {
        if ('string' != typeof e.type) throw new Error();
      })(o),
      G(o, e)
    );
  };
}
var Y = function () {
  return 'undefined' != typeof window;
};
(exports.DEPRECATED_ROOT_NODE = 'canvas-ROOT'),
  (exports.DerivedEventHandlers = V),
  (exports.ERROR_CANNOT_DRAG =
    'The node has specified a canDrag() rule that prevents it from being dragged'),
  (exports.ERROR_DELETE_TOP_LEVEL_NODE =
    'Attempting to delete a top-level Node'),
  (exports.ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER =
    'An Error occurred while deserializing components: Cannot find component <%displayName% /> in resolver map. Please check your resolver in <Editor />\n\nAvailable components in resolver: %availableComponents%\n\nMore info: https://craft.js.org/r/docs/api/editor#props'),
  (exports.ERROR_DUPLICATE_NODEID =
    'Attempting to add a node with duplicated id'),
  (exports.ERROR_INFINITE_CANVAS =
    "The component specified in the <Canvas> `is` prop has additional Canvas specified in it's render template."),
  (exports.ERROR_INVALID_NODEID =
    'Node does not exist, it may have been removed'),
  (exports.ERROR_INVALID_NODE_ID = 'Invalid parameter Node Id specified'),
  (exports.ERROR_MISSING_PLACEHOLDER_PLACEMENT =
    'Placeholder required placement info (parent, index, or where) is missing'),
  (exports.ERROR_MOVE_CANNOT_DROP =
    'Node cannot be dropped into target parent'),
  (exports.ERROR_MOVE_INCOMING_PARENT = 'Target parent rejects incoming node'),
  (exports.ERROR_MOVE_NONCANVAS_CHILD =
    'Cannot move node that is not a direct child of a Canvas node'),
  (exports.ERROR_MOVE_OUTGOING_PARENT = 'Current parent rejects outgoing node'),
  (exports.ERROR_MOVE_ROOT_NODE = 'Root Node cannot be moved'),
  (exports.ERROR_MOVE_TOP_LEVEL_NODE = 'A top-level Node cannot be moved'),
  (exports.ERROR_MOVE_TO_DESCENDANT = 'Cannot move node into a descendant'),
  (exports.ERROR_MOVE_TO_NONCANVAS_PARENT =
    'Cannot move node into a non-Canvas parent'),
  (exports.ERROR_NOPARENT = 'Parent id cannot be ommited'),
  (exports.ERROR_NOT_IN_RESOLVER =
    'The component type specified for this node (%node_type%) does not exist in the resolver'),
  (exports.ERROR_RESOLVER_NOT_AN_OBJECT =
    'Resolver in <Editor /> has to be an object. For (de)serialization Craft.js needs a list of all the User Components. \n    \nMore info: https://craft.js.org/r/docs/api/editor#props'),
  (exports.ERROR_TOP_LEVEL_ELEMENT_NO_ID =
    'A <Element /> that is used inside a User Component must specify an `id` prop, eg: <Element id="text_element">...</Element> '),
  (exports.ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT =
    'You can only use useEditor in the context of <Editor />. \n\nPlease only use useEditor in components that are children of the <Editor /> component.'),
  (exports.ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT =
    'You can only use useNode in the context of <Editor />. \n\nPlease only use useNode in components that are children of the <Editor /> component.'),
  (exports.EventHandlers = U),
  (exports.HISTORY_ACTIONS = C),
  (exports.History = k),
  (exports.ROOT_NODE = 'ROOT'),
  (exports.RenderIndicator = ({ style: e, parentDom: t }) => {
    const n = u.default.createElement('div', {
      style: {
        position: 'fixed',
        display: 'block',
        opacity: 1,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'transparent',
        zIndex: 99999,
        ...e,
      },
    });
    return t && t.ownerDocument !== document
      ? d.default.createPortal(n, t.ownerDocument.body)
      : n;
  }),
  (exports.cloneWithRef = G),
  (exports.createQuery = A),
  (exports.deprecationWarning = function (e, t) {
    var n = 'Deprecation warning: '.concat(
        e,
        ' will be deprecated in future relases.'
      ),
      r = t.suggest,
      o = t.doc;
    r && (n += ' Please use '.concat(r, ' instead.')),
      o && (n += '('.concat(o, ')')),
      console.warn(n);
  }),
  (exports.getDOMInfo = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.x,
      r = t.y,
      o = t.top,
      i = t.left,
      a = t.bottom,
      s = t.right,
      c = t.width,
      u = t.height,
      l = window.getComputedStyle(e),
      f = {
        left: parseInt(l.marginLeft),
        right: parseInt(l.marginRight),
        bottom: parseInt(l.marginBottom),
        top: parseInt(l.marginTop),
      },
      d = {
        left: parseInt(l.paddingLeft),
        right: parseInt(l.paddingRight),
        bottom: parseInt(l.paddingBottom),
        top: parseInt(l.paddingTop),
      };
    return {
      x: n,
      y: r,
      top: o,
      left: i,
      bottom: a,
      right: s,
      width: c,
      height: u,
      outerWidth: Math.round(c + f.left + f.right),
      outerHeight: Math.round(u + f.top + f.bottom),
      margin: f,
      padding: d,
      inFlow:
        e.parentElement &&
        !!(function (t) {
          var n = getComputedStyle(t);
          if (
            !(
              (l.overflow && 'visible' !== l.overflow) ||
              'none' !== n.float ||
              'grid' === n.display ||
              ('flex' === n.display && 'column' !== n['flex-direction'])
            )
          ) {
            switch (l.position) {
              case 'static':
              case 'relative':
                break;
              default:
                return;
            }
            switch (e.tagName) {
              case 'TR':
              case 'TBODY':
              case 'THEAD':
              case 'TFOOT':
                return !0;
            }
            switch (l.display) {
              case 'block':
              case 'list-item':
              case 'table':
              case 'flex':
              case 'grid':
                return !0;
            }
          }
        })(e.parentElement),
    };
  }),
  (exports.getRandomId = M),
  (exports.isChromium = function () {
    return Y() && /Chrome/i.test(window.navigator.userAgent);
  }),
  (exports.isClientSide = Y),
  (exports.isLinux = function () {
    return Y() && /Linux/i.test(window.navigator.userAgent);
  }),
  (exports.useCollector = function (e, t) {
    const { subscribe: r, getState: o, actions: i, query: a } = e,
      s = n.useRef(!0),
      c = n.useRef(null),
      u = n.useRef(t);
    u.current = t;
    const l = n.useCallback((e) => ({ ...e, actions: i, query: a }), [i, a]);
    s.current && t && ((c.current = t(o(), a)), (s.current = !1));
    const [f, d] = n.useState(l(c.current));
    return (
      n.useEffect(() => {
        let e;
        return (
          u.current &&
            (e = r(
              (e) => u.current(e, a),
              (e) => {
                d(l(e));
              }
            )),
          () => {
            e && e();
          }
        );
      }, [l, a, r]),
      f
    );
  }),
  (exports.useEffectOnce = (e) => {
    n.useEffect(e, []);
  }),
  (exports.useMethods = function (t, r, o, i) {
    var a,
      c = n.useMemo(function () {
        return new k();
      }, []),
      u = n.useRef([]),
      l = n.useRef();
    'function' == typeof t
      ? (a = t)
      : ((a = t.methods),
        (u.current = t.ignoreHistoryForActions),
        (l.current = t.normalizeHistory));
    var f = n.useRef(i);
    f.current = i;
    var d = n.useRef(r),
      p = n.useMemo(
        function () {
          var t = l.current,
            n = u.current,
            r = f.current;
          return function (i, u) {
            var l,
              f =
                o &&
                A(
                  o,
                  function () {
                    return i;
                  },
                  c
                ),
              d = _(
                e.produceWithPatches(i, function (e) {
                  var t, n;
                  switch (u.type) {
                    case C.UNDO:
                      return c.undo(e);
                    case C.REDO:
                      return c.redo(e);
                    case C.CLEAR:
                      return c.clear(), h({}, e);
                    case C.IGNORE:
                    case C.MERGE:
                    case C.THROTTLE:
                      var r,
                        o = T((n = u.payload)) || x(n) || I(n) || D(),
                        i = o[0],
                        s = o.slice(1);
                      (r = a(e, f))[i].apply(r, w(s));
                      break;
                    default:
                      (t = a(e, f))[u.type].apply(t, w(u.payload));
                  }
                }),
                3
              ),
              p = d[0],
              y = d[1],
              v = d[2];
            return (
              (l = p),
              r &&
                r(
                  p,
                  i,
                  { type: u.type, params: u.payload, patches: y },
                  f,
                  function (t) {
                    var n = e.produceWithPatches(p, t);
                    (l = n[0]),
                      (y = [].concat(w(y), w(n[1]))),
                      (v = [].concat(w(n[2]), w(v)));
                  }
                ),
              [C.UNDO, C.REDO].includes(u.type) && t && (l = s.default(l, t)),
              []
                .concat(w(n), [C.UNDO, C.REDO, C.IGNORE, C.CLEAR])
                .includes(u.type) ||
                (u.type === C.THROTTLE
                  ? c.throttleAdd(y, v, u.config && u.config.rate)
                  : u.type === C.MERGE
                  ? c.merge(y, v)
                  : c.add(y, v)),
              l
            );
          };
        },
        [c, a, o]
      ),
      y = n.useCallback(function () {
        return d.current;
      }, []),
      v = n.useMemo(
        function () {
          return new j(y);
        },
        [y]
      ),
      b = n.useCallback(
        function (e) {
          var t = p(d.current, e);
          (d.current = t), v.notify();
        },
        [p, v]
      );
    n.useEffect(
      function () {
        v.notify();
      },
      [v]
    );
    var E = n.useMemo(
        function () {
          return o
            ? A(
                o,
                function () {
                  return d.current;
                },
                c
              )
            : [];
        },
        [c, o]
      ),
      g = n.useMemo(
        function () {
          var e = Object.keys(a(null, null)),
            t = u.current;
          return h(
            h(
              {},
              e.reduce(function (e, t) {
                return (
                  (e[t] = function () {
                    for (
                      var e = arguments.length, n = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      n[r] = arguments[r];
                    return b({ type: t, payload: n });
                  }),
                  e
                );
              }, {})
            ),
            {},
            {
              history: {
                undo: function () {
                  return b({ type: C.UNDO });
                },
                redo: function () {
                  return b({ type: C.REDO });
                },
                clear: function () {
                  return b({ type: C.CLEAR });
                },
                throttle: function (n) {
                  return h(
                    {},
                    e
                      .filter(function (e) {
                        return !t.includes(e);
                      })
                      .reduce(function (e, t) {
                        return (
                          (e[t] = function () {
                            for (
                              var e = arguments.length, r = new Array(e), o = 0;
                              o < e;
                              o++
                            )
                              r[o] = arguments[o];
                            return b({
                              type: C.THROTTLE,
                              payload: [t].concat(r),
                              config: { rate: n },
                            });
                          }),
                          e
                        );
                      }, {})
                  );
                },
                ignore: function () {
                  return h(
                    {},
                    e
                      .filter(function (e) {
                        return !t.includes(e);
                      })
                      .reduce(function (e, t) {
                        return (
                          (e[t] = function () {
                            for (
                              var e = arguments.length, n = new Array(e), r = 0;
                              r < e;
                              r++
                            )
                              n[r] = arguments[r];
                            return b({
                              type: C.IGNORE,
                              payload: [t].concat(n),
                            });
                          }),
                          e
                        );
                      }, {})
                  );
                },
                merge: function () {
                  return h(
                    {},
                    e
                      .filter(function (e) {
                        return !t.includes(e);
                      })
                      .reduce(function (e, t) {
                        return (
                          (e[t] = function () {
                            for (
                              var e = arguments.length, n = new Array(e), r = 0;
                              r < e;
                              r++
                            )
                              n[r] = arguments[r];
                            return b({ type: C.MERGE, payload: [t].concat(n) });
                          }),
                          e
                        );
                      }, {})
                  );
                },
              },
            }
          );
        },
        [b, a]
      );
    return n.useMemo(
      function () {
        return {
          getState: y,
          subscribe: function (e, t, n) {
            return v.subscribe(e, t, n);
          },
          actions: g,
          query: E,
          history: c,
        };
      },
      [g, E, v, y, c]
    );
  }),
  (exports.wrapConnectorHooks = function (e) {
    return Object.keys(e).reduce(
      (t, n) => ((t[n] = B((...t) => e[n](...t))), t),
      {}
    );
  }),
  (exports.wrapHookToRecognizeElement = B);