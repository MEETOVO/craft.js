import e, {
  applyPatches as t,
  enableMapSet as n,
  enablePatches as r,
  produceWithPatches as i,
} from 'immer';
import o from 'lodash/isEqualWith';
import a, {
  useMemo as c,
  useRef as u,
  useCallback as s,
  useEffect as l,
  useState as f,
  cloneElement as d,
  isValidElement as h,
} from 'react';
import p from 'shallowequal';
import y from 'tiny-invariant';
import v from 'react-dom';
var b = 'ROOT',
  g = 'canvas-ROOT',
  m = 'Parent id cannot be ommited',
  E = 'Attempting to add a node with duplicated id',
  w = 'Node does not exist, it may have been removed',
  O =
    'A <Element /> that is used inside a User Component must specify an `id` prop, eg: <Element id="text_element">...</Element> ',
  R =
    'Placeholder required placement info (parent, index, or where) is missing',
  k = 'Node cannot be dropped into target parent',
  P = 'Target parent rejects incoming node',
  j = 'Current parent rejects outgoing node',
  T = 'Cannot move node that is not a direct child of a Canvas node',
  I = 'Cannot move node into a non-Canvas parent',
  C = 'A top-level Node cannot be moved',
  D = 'Root Node cannot be moved',
  S = 'Cannot move node into a descendant',
  A =
    'The component type specified for this node (%node_type%) does not exist in the resolver',
  H =
    "The component specified in the <Canvas> `is` prop has additional Canvas specified in it's render template.",
  x =
    'The node has specified a canDrag() rule that prevents it from being dragged',
  N = 'Invalid parameter Node Id specified',
  M = 'Attempting to delete a top-level Node',
  L =
    'Resolver in <Editor /> has to be an object. For (de)serialization Craft.js needs a list of all the User Components. \n    \nMore info: https://craft.js.org/r/docs/api/editor#props',
  _ =
    'An Error occurred while deserializing components: Cannot find component <%displayName% /> in resolver map. Please check your resolver in <Editor />\n\nAvailable components in resolver: %availableComponents%\n\nMore info: https://craft.js.org/r/docs/api/editor#props',
  U =
    'You can only use useEditor in the context of <Editor />. \n\nPlease only use useEditor in components that are children of the <Editor /> component.',
  q =
    'You can only use useNode in the context of <Editor />. \n\nPlease only use useNode in components that are children of the <Editor /> component.';
function B(e, t) {
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
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? B(Object(n), !0).forEach(function (t) {
          F(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : B(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function Y(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function W(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, ie(r.key), r);
  }
}
function z(e, t, n) {
  return (
    t && W(e.prototype, t),
    n && W(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function F(e, t, n) {
  return (
    (t = ie(t)) in e
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
function $(e) {
  return (
    ($ = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    $(e)
  );
}
function J(e, t) {
  return (
    (J = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        }),
    J(e, t)
  );
}
function K(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Q() {
  return (
    (Q =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get.bind()
        : function (e, t, n) {
            var r = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = $(e));

              );
              return e;
            })(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
            }
          }),
    Q.apply(this, arguments)
  );
}
function V(e, t) {
  return (
    Z(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null != n) {
        var r,
          i,
          o,
          a,
          c = [],
          u = !0,
          s = !1;
        try {
          if (((o = (n = n.call(e)).next), 0 === t)) {
            if (Object(n) !== n) return;
            u = !1;
          } else
            for (
              ;
              !(u = (r = o.call(n)).done) && (c.push(r.value), c.length !== t);
              u = !0
            );
        } catch (e) {
          (s = !0), (i = e);
        } finally {
          try {
            if (!u && null != n.return && ((a = n.return()), Object(a) !== a))
              return;
          } finally {
            if (s) throw i;
          }
        }
        return c;
      }
    })(e, t) ||
    te(e, t) ||
    re()
  );
}
function X(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return ne(e);
    })(e) ||
    ee(e) ||
    te(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function Z(e) {
  if (Array.isArray(e)) return e;
}
function ee(e) {
  if (
    ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e['@@iterator']
  )
    return Array.from(e);
}
function te(e, t) {
  if (e) {
    if ('string' == typeof e) return ne(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? ne(e, t)
        : void 0
    );
  }
}
function ne(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function re() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function ie(e) {
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
var oe = {
    UNDO: 'HISTORY_UNDO',
    REDO: 'HISTORY_REDO',
    THROTTLE: 'HISTORY_THROTTLE',
    IGNORE: 'HISTORY_IGNORE',
    MERGE: 'HISTORY_MERGE',
    CLEAR: 'HISTORY_CLEAR',
  },
  ae = (function () {
    function e() {
      Y(this, e), F(this, 'timeline', []), F(this, 'pointer', -1);
    }
    return (
      z(e, [
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
                  i = r.patches,
                  o = r.inversePatches,
                  a = r.timestamp;
                if (new Date().getTime() - a < n)
                  return void (this.timeline[this.pointer] = {
                    timestamp: a,
                    patches: [].concat(X(i), X(e)),
                    inversePatches: [].concat(X(t), X(o)),
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
                  patches: [].concat(X(n.patches), X(e)),
                  inversePatches: [].concat(X(t), X(r)),
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
          value: function (e) {
            if (this.canUndo()) {
              var n = this.timeline[this.pointer].inversePatches;
              return (this.pointer = this.pointer - 1), t(e, n);
            }
          },
        },
        {
          key: 'redo',
          value: function (e) {
            if (this.canRedo())
              return (
                (this.pointer = this.pointer + 1),
                t(e, this.timeline[this.pointer].patches)
              );
          },
        },
      ]),
      e
    );
  })();
function ce(t, n, r, o) {
  var a,
    f = c(function () {
      return new ae();
    }, []),
    d = u([]),
    h = u();
  'function' == typeof t
    ? (a = t)
    : ((a = t.methods),
      (d.current = t.ignoreHistoryForActions),
      (h.current = t.normalizeHistory));
  var p = u(o);
  p.current = o;
  var y = u(n),
    v = c(
      function () {
        var t = h.current,
          n = d.current,
          o = p.current;
        return function (c, u) {
          var s,
            l =
              r &&
              ue(
                r,
                function () {
                  return c;
                },
                f
              ),
            d = V(
              i(c, function (e) {
                var t, n;
                switch (u.type) {
                  case oe.UNDO:
                    return f.undo(e);
                  case oe.REDO:
                    return f.redo(e);
                  case oe.CLEAR:
                    return f.clear(), G({}, e);
                  case oe.IGNORE:
                  case oe.MERGE:
                  case oe.THROTTLE:
                    var r,
                      i = Z((n = u.payload)) || ee(n) || te(n) || re(),
                      o = i[0],
                      c = i.slice(1);
                    (r = a(e, l))[o].apply(r, X(c));
                    break;
                  default:
                    (t = a(e, l))[u.type].apply(t, X(u.payload));
                }
              }),
              3
            ),
            h = d[0],
            p = d[1],
            y = d[2];
          return (
            (s = h),
            o &&
              o(
                h,
                c,
                { type: u.type, params: u.payload, patches: p },
                l,
                function (e) {
                  var t = i(h, e);
                  (s = t[0]),
                    (p = [].concat(X(p), X(t[1]))),
                    (y = [].concat(X(t[2]), X(y)));
                }
              ),
            [oe.UNDO, oe.REDO].includes(u.type) && t && (s = e(s, t)),
            []
              .concat(X(n), [oe.UNDO, oe.REDO, oe.IGNORE, oe.CLEAR])
              .includes(u.type) ||
              (u.type === oe.THROTTLE
                ? f.throttleAdd(p, y, u.config && u.config.rate)
                : u.type === oe.MERGE
                ? f.merge(p, y)
                : f.add(p, y)),
            s
          );
        };
      },
      [f, a, r]
    ),
    b = s(function () {
      return y.current;
    }, []),
    g = c(
      function () {
        return new se(b);
      },
      [b]
    ),
    m = s(
      function (e) {
        var t = v(y.current, e);
        (y.current = t), g.notify();
      },
      [v, g]
    );
  l(
    function () {
      g.notify();
    },
    [g]
  );
  var E = c(
      function () {
        return r
          ? ue(
              r,
              function () {
                return y.current;
              },
              f
            )
          : [];
      },
      [f, r]
    ),
    w = c(
      function () {
        var e = Object.keys(a(null, null)),
          t = d.current;
        return G(
          G(
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
                  return m({ type: t, payload: n });
                }),
                e
              );
            }, {})
          ),
          {},
          {
            history: {
              undo: function () {
                return m({ type: oe.UNDO });
              },
              redo: function () {
                return m({ type: oe.REDO });
              },
              clear: function () {
                return m({ type: oe.CLEAR });
              },
              throttle: function (n) {
                return G(
                  {},
                  e
                    .filter(function (e) {
                      return !t.includes(e);
                    })
                    .reduce(function (e, t) {
                      return (
                        (e[t] = function () {
                          for (
                            var e = arguments.length, r = new Array(e), i = 0;
                            i < e;
                            i++
                          )
                            r[i] = arguments[i];
                          return m({
                            type: oe.THROTTLE,
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
                return G(
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
                          return m({ type: oe.IGNORE, payload: [t].concat(n) });
                        }),
                        e
                      );
                    }, {})
                );
              },
              merge: function () {
                return G(
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
                          return m({ type: oe.MERGE, payload: [t].concat(n) });
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
      [m, a]
    );
  return c(
    function () {
      return {
        getState: b,
        subscribe: function (e, t, n) {
          return g.subscribe(e, t, n);
        },
        actions: w,
        query: E,
        history: f,
      };
    },
    [w, E, g, b, f]
  );
}
function ue(e, t, n) {
  var r = Object.keys(e()).reduce(function (n, r) {
    return G(
      G({}, n),
      {},
      F({}, r, function () {
        var n;
        return (n = e(t()))[r].apply(n, arguments);
      })
    );
  }, {});
  return G(
    G({}, r),
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
n(), r();
var se = (function () {
    function e(t) {
      Y(this, e),
        F(this, 'getState', void 0),
        F(this, 'subscribers', []),
        (this.getState = t);
    }
    return (
      z(e, [
        {
          key: 'subscribe',
          value: function (e, t, n) {
            var r = this,
              i = new le(
                function () {
                  return e(r.getState());
                },
                t,
                n
              );
            return this.subscribers.push(i), this.unsubscribe.bind(this, i);
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
  le = (function () {
    function e(t, n) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      Y(this, e),
        F(this, 'collected', void 0),
        F(this, 'collector', void 0),
        F(this, 'onChange', void 0),
        F(this, 'id', void 0),
        (this.collector = t),
        (this.onChange = n),
        r && this.collect();
    }
    return (
      z(e, [
        {
          key: 'collect',
          value: function () {
            try {
              var e = this.collector();
              o(e, this.collected) ||
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
  fe = function (e) {
    var t = e.getBoundingClientRect(),
      n = t.x,
      r = t.y,
      i = t.top,
      o = t.left,
      a = t.bottom,
      c = t.right,
      u = t.width,
      s = t.height,
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
      top: i,
      left: o,
      bottom: a,
      right: c,
      width: u,
      height: s,
      outerWidth: Math.round(u + f.left + f.right),
      outerHeight: Math.round(s + f.top + f.bottom),
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
  };
function de(e, t) {
  const { subscribe: n, getState: r, actions: i, query: o } = e,
    a = u(!0),
    c = u(null),
    d = u(t);
  d.current = t;
  const h = s((e) => ({ ...e, actions: i, query: o }), [i, o]);
  a.current && t && ((c.current = t(r(), o)), (a.current = !1));
  const [p, y] = f(h(c.current));
  return (
    l(() => {
      let e;
      return (
        d.current &&
          (e = n(
            (e) => d.current(e, o),
            (e) => {
              y(h(e));
            }
          )),
        () => {
          e && e();
        }
      );
    }, [h, o, n]),
    p
  );
}
var he,
  pe = function () {
    var e = Date.now().toString(36),
      t = Math.random().toString(36).substring(2, 5);
    return ''.concat(e, '-').concat(t);
  },
  ye = (function () {
    function e() {
      Y(this, e),
        F(this, 'isEnabled', !0),
        F(this, 'elementIdMap', new WeakMap()),
        F(this, 'registry', new Map());
    }
    return (
      z(e, [
        {
          key: 'getElementId',
          value: function (e) {
            var t = this.elementIdMap.get(e);
            if (t) return t;
            var n = pe();
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
              if (p(t.required, r.required)) return r;
              this.getByElement(e, t.name).disable();
            }
            var i = null,
              o = this.getConnectorId(e, t.name);
            return (
              this.registry.set(o, {
                id: o,
                required: t.required,
                enable: function () {
                  i && i(), (i = t.connector(e, t.required, t.options));
                },
                disable: function () {
                  i && i();
                },
                remove: function () {
                  return n.remove(o);
                },
              }),
              this.isEnabled && this.registry.get(o).enable(),
              this.registry.get(o)
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
!(function (e) {
  (e[(e.HandlerDisabled = 0)] = 'HandlerDisabled'),
    (e[(e.HandlerEnabled = 1)] = 'HandlerEnabled');
})(he || (he = {}));
var ve = (function () {
    function e(t) {
      Y(this, e),
        F(this, 'options', void 0),
        F(this, 'registry', new ye()),
        F(this, 'subscribers', new Set()),
        (this.options = t);
    }
    return (
      z(e, [
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
                e(he.HandlerDisabled);
              });
          },
        },
        {
          key: 'enable',
          value: function () {
            this.onEnable && this.onEnable(),
              this.registry.enable(),
              this.subscribers.forEach(function (e) {
                e(he.HandlerEnabled);
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
            var i = function (r) {
              (function (e, t, n) {
                e.craft ||
                  (e.craft = {
                    stopPropagation: function () {},
                    blockedEvents: {},
                  });
                for (
                  var r = (e.craft && e.craft.blockedEvents[t]) || [], i = 0;
                  i < r.length;
                  i++
                ) {
                  var o = r[i];
                  if (n !== o && n.contains(o)) return !0;
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
              e.addEventListener(t, i, r),
              function () {
                return e.removeEventListener(t, i, r);
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
              i = new Map();
            return {
              connectors: Object.entries(t).reduce(function (t, o) {
                var a = V(o, 2),
                  c = a[0],
                  u = a[1];
                return G(
                  G({}, t),
                  {},
                  F({}, c, function (t, o, a) {
                    var s = function () {
                      var r = e.registry.register(t, {
                        required: o,
                        name: c,
                        options: a,
                        connector: u,
                      });
                      return n.add(r.id), r;
                    };
                    return (
                      i.set(e.registry.getConnectorId(t, c), s), r && s(), t
                    );
                  })
                );
              }, {}),
              register: function () {
                (r = !0),
                  i.forEach(function (e) {
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
              i = new Proxy(r, {
                get: function (e, t, i) {
                  return t in r == 0
                    ? Reflect.get(e, t, i)
                    : function (e) {
                        for (
                          var i = arguments.length,
                            o = new Array(i > 1 ? i - 1 : 0),
                            a = 1;
                          a < i;
                          a++
                        )
                          o[a - 1] = arguments[a];
                        var c = r[t].apply(r, [e].concat(o));
                        c && n.push(c);
                      };
                },
              });
            return (
              t(i),
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
  be = (function (e) {
    !(function (e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && J(e, t);
    })(i, ve);
    var t,
      n,
      r =
        ((t = i),
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
            r = $(t);
          if (n) {
            var i = $(this).constructor;
            e = Reflect.construct(r, arguments, i);
          } else e = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ('object' == typeof t || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return K(e);
          })(this, e);
        });
    function i(e, t) {
      var n;
      return (
        Y(this, i),
        F(K((n = r.call(this, t))), 'derived', void 0),
        F(K(n), 'unsubscribeParentHandlerListener', void 0),
        (n.derived = e),
        (n.options = t),
        (n.unsubscribeParentHandlerListener = n.derived.listen(function (e) {
          switch (e) {
            case he.HandlerEnabled:
              return n.enable();
            case he.HandlerDisabled:
              return n.disable();
            default:
              return;
          }
        })),
        n
      );
    }
    return (
      z(i, [
        {
          key: 'inherit',
          value: function (e) {
            return this.createProxyHandlers(this.derived, e);
          },
        },
        {
          key: 'cleanup',
          value: function () {
            Q($(i.prototype), 'cleanup', this).call(this),
              this.unsubscribeParentHandlerListener();
          },
        },
      ]),
      i
    );
  })();
function ge(e, t) {
  t && ('function' == typeof e ? e(t) : (e.current = t));
}
function me(e, t) {
  const n = e.ref;
  return (
    y(
      'string' != typeof n,
      'Cannot connect to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute'
    ),
    d(
      e,
      n
        ? {
            ref: (e) => {
              ge(n, e), ge(t, e);
            },
          }
        : { ref: t }
    )
  );
}
function Ee(e) {
  return (t = null, ...n) => {
    if (!h(t)) {
      if (!t) return;
      const r = t;
      return r && e(r, ...n), r;
    }
    const r = t;
    return (
      (function (e) {
        if ('string' != typeof e.type) throw new Error();
      })(r),
      me(r, e)
    );
  };
}
function we(e) {
  return Object.keys(e).reduce(
    (t, n) => ((t[n] = Ee((...t) => e[n](...t))), t),
    {}
  );
}
const Oe = ({ style: e, parentDom: t }) => {
    const n = a.createElement('div', {
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
      ? v.createPortal(n, t.ownerDocument.body)
      : n;
  },
  Re = (e) => {
    l(e, []);
  };
var ke = function (e, t) {
    var n = 'Deprecation warning: '.concat(
        e,
        ' will be deprecated in future relases.'
      ),
      r = t.suggest,
      i = t.doc;
    r && (n += ' Please use '.concat(r, ' instead.')),
      i && (n += '('.concat(i, ')')),
      console.warn(n);
  },
  Pe = function () {
    return 'undefined' != typeof window;
  },
  je = function () {
    return Pe() && /Linux/i.test(window.navigator.userAgent);
  },
  Te = function () {
    return Pe() && /Chrome/i.test(window.navigator.userAgent);
  };
export {
  g as DEPRECATED_ROOT_NODE,
  be as DerivedEventHandlers,
  x as ERROR_CANNOT_DRAG,
  M as ERROR_DELETE_TOP_LEVEL_NODE,
  _ as ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER,
  E as ERROR_DUPLICATE_NODEID,
  H as ERROR_INFINITE_CANVAS,
  w as ERROR_INVALID_NODEID,
  N as ERROR_INVALID_NODE_ID,
  R as ERROR_MISSING_PLACEHOLDER_PLACEMENT,
  k as ERROR_MOVE_CANNOT_DROP,
  P as ERROR_MOVE_INCOMING_PARENT,
  T as ERROR_MOVE_NONCANVAS_CHILD,
  j as ERROR_MOVE_OUTGOING_PARENT,
  D as ERROR_MOVE_ROOT_NODE,
  C as ERROR_MOVE_TOP_LEVEL_NODE,
  S as ERROR_MOVE_TO_DESCENDANT,
  I as ERROR_MOVE_TO_NONCANVAS_PARENT,
  m as ERROR_NOPARENT,
  A as ERROR_NOT_IN_RESOLVER,
  L as ERROR_RESOLVER_NOT_AN_OBJECT,
  O as ERROR_TOP_LEVEL_ELEMENT_NO_ID,
  U as ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT,
  q as ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT,
  he as EventHandlerUpdates,
  ve as EventHandlers,
  oe as HISTORY_ACTIONS,
  ae as History,
  b as ROOT_NODE,
  Oe as RenderIndicator,
  me as cloneWithRef,
  ue as createQuery,
  ke as deprecationWarning,
  fe as getDOMInfo,
  pe as getRandomId,
  Te as isChromium,
  Pe as isClientSide,
  je as isLinux,
  de as useCollector,
  Re as useEffectOnce,
  ce as useMethods,
  we as wrapConnectorHooks,
  Ee as wrapHookToRecognizeElement,
};