// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = v;
exports.Fragment = d;
exports.createRef = p;
exports.Component = y;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = A;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return h(n, o, l && l.key, l && l.ref);
}

function h(l, u, i, t) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function d(n) {
  return n.children;
}

function y(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(k);
}

function k() {
  var n, l, i, t, o, r, f;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (i = void 0, t = void 0, r = (o = (l = n).__v).__e, (f = l.__P) && (i = [], t = z(f, o, s({}, o), l.__n, void 0 !== f.ownerSVGElement, null, i, null == r ? m(o) : r), T(i, o), t != r && w(o)));
}

function _(n, l, u, i, t, o, r, c, s) {
  var v,
      h,
      p,
      d,
      y,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == f && (c = null != o ? o[0] : _ ? m(u, 0) : null), v = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[v]) || p && u.key == p.key && u.type === p.type) k[v] = void 0;else for (h = 0; h < _; h++) {
        if ((p = k[h]) && u.key == p.key && u.type === p.type) {
          k[h] = void 0;
          break;
        }

        p = null;
      }

      if (d = z(n, u, p = p || f, i, t, o, r, c, s), (h = u.ref) && p.ref != h && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(h, u.__c || d, u)), null != d) {
        var e;
        if (null == w && (w = d), void 0 !== u.__d) e = u.__d, u.__d = void 0;else if (o == p || d != c || null == d.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(d), e = null;else {
            for (y = c, h = 0; (y = y.nextSibling) && h < _; h += 2) if (y == d) break n;

            n.insertBefore(d, c), e = c;
          }

          "option" == l.type && (n.value = "");
        }
        c = void 0 !== e ? e : d.nextSibling, "function" == typeof l.type && (l.__d = c);
      }
    }

    return v++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (v = o.length; v--;) null != o[v] && a(o[v]);

  for (v = _; v--;) null != k[v] && A(k[v], k[v]);

  if (g) for (v = 0; v < g.length; v++) j(g[v], g[++v], g[++v]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) b(n[i], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? h(null, n, null, null) : null != n.__e || null != n.__c ? h(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, i, t) {
  var o;

  for (o in u) o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function C(n, l, u, i, t) {
  var o, r, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (r in i) u && r in u || P(o, r, "");
      if (u) for (f in u) i && u[f] === i[f] || P(o, f, u[f]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function z(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      p,
      m,
      w,
      g,
      k,
      b,
      x,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? g = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(k, x) : (u.__c = v = new y(k, x), v.constructor = P, v.render = D), b && b.sub(v), v.props = k, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(k, v.__s))), p = v.props, m = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && k !== p && null != v.componentWillReceiveProps && v.componentWillReceiveProps(k, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(k, v.__s, x)) {
          for (v.props = k, v.state = v.__s, v.__d = !1, v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(k, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(p, m, w);
        });
      }
      v.context = x, v.props = k, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), u.__k = null != a && a.type == d && null == a.key ? a.props.children : a, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(p, m)), _(l, u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), g && (v.__E = v.__ = null), v.__e = !1;
    } else u.__e = $(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, i);
  }

  return u.__e;
}

function T(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function $(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      p,
      d = u.props,
      y = l.props;
  if (t = "svg" === l.type || t, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(y);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, y.is && {
      is: y.is
    }), o = null;
  }

  if (null === l.type) null != o && (o[o.indexOf(n)] = null), d !== y && n.data != y && (n.data = y);else if (l !== u) {
    if (null != o && (o[o.indexOf(n)] = null, o = e.slice.call(n.childNodes)), v = (d = u.props || f).dangerouslySetInnerHTML, h = y.dangerouslySetInnerHTML, !c) {
      if (d === f) for (d = {}, p = 0; p < n.attributes.length; p++) d[n.attributes[p].name] = n.attributes[p].value;
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    x(n, y, d, t, c), l.__k = l.props.children, h || _(n, l, u, i, "foreignObject" !== l.type && t, o, r, f, c), c || ("value" in y && void 0 !== y.value && y.value !== n.value && (n.value = null == y.value ? "" : y.value), "checked" in y && void 0 !== y.checked && y.checked !== n.checked && (n.checked = y.checked));
  }
  return n;
}

function j(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function A(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && A(t[r], u, i);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(d, null, [l]), c = [], z(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : e.slice.call(u.childNodes), c, i || f, t), T(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), h(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && i.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, y.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), g(this));
}, y.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, y.prototype.render = d, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = f, r = 0;
},{}],"../node_modules/linkstate/dist/linkstate.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function dlv(obj, key, def, p) {
  p = 0;
  key = key.split ? key.split('.') : key;

  while (obj && p < key.length) {
    obj = obj[key[p++]];
  }

  return obj === undefined ? def : obj;
}
/** Create an Event handler function that sets a given state property.
 *	@param {Component} component	The component whose state should be updated
 *	@param {string} key				A dot-notated key path to update in the component's state
 *	@param {string} eventPath		A dot-notated key path to the value that should be retrieved from the Event or component
 *	@returns {function} linkedStateHandler
 */


function linkState(component, key, eventPath) {
  var path = key.split('.'),
      cache = component.__lsc || (component.__lsc = {});
  return cache[key + eventPath] || (cache[key + eventPath] = function (e) {
    var t = e && e.target || this,
        state = {},
        obj = state,
        v = typeof eventPath === 'string' ? dlv(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e,
        i = 0;

    for (; i < path.length - 1; i++) {
      obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
    }

    obj[path[i]] = v;
    component.setState(state);
  });
}

var _default = linkState;
exports.default = _default;
},{}],"planet.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.G = void 0;
// export const G = 6.674e-11;
var G = 10000; // calculated to match https://phet.colorado.edu/sims/my-solar-system/my-solar-system_en.html

exports.G = G;

var Planet =
/** @class */
function () {
  function Planet(x, y, dx, dy, mass, red, green, blue, trailIndex) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.mass = mass;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.trailIndex = trailIndex;
    this.ax = 0;
    this.ay = 0;
    this.radius = Math.sqrt(mass + 16);
  }

  Planet.prototype.clearForces = function () {
    this.ax = 0;
    this.ay = 0;
  };

  Planet.prototype.applyGravity = function (_a) {
    var otherX = _a.x,
        otherY = _a.y,
        otherMass = _a.mass;
    if (otherMass == 0) return;
    var distanceSquared = Math.pow(this.x - otherX, 2) + Math.pow(this.y - otherY, 2),
        totalAccel = G * otherMass / distanceSquared,
        distance = Math.sqrt(distanceSquared),
        accelX = totalAccel * (otherX - this.x) / distance,
        accelY = totalAccel * (otherY - this.y) / distance;
    this.ax += accelX;
    this.ay += accelY;
  };

  Planet.prototype.move = function (dt) {
    this.x += this.dx * dt + 0.5 * this.ax * Math.pow(dt, 2);
    this.y += this.dy * dt + 0.5 * this.ay * Math.pow(dt, 2);
    this.dx += this.ax * dt;
    this.dy += this.ay * dt;
    this.clearForces();
  };

  Planet.prototype.willCollide = function (_a) {
    var otherX = _a.x,
        otherY = _a.y,
        otherRadius = _a.radius;
    var maxDistSquared = Math.pow(this.radius + otherRadius, 2),
        actualDistSquared = Math.pow(this.x - otherX, 2) + Math.pow(this.y - otherY, 2);
    return actualDistSquared < 0.5 * maxDistSquared;
  };

  return Planet;
}();

var _default = Planet;
exports.default = _default;
},{}],"util.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawTrail = exports.chooseColor = exports.collidePlanets = exports.drawPlanet = exports.findCOM = void 0;

var _planet = _interopRequireDefault(require("./planet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findCOM = function findCOM(planets) {
  var totalX = 0,
      totalY = 0,
      totalMass = 0;

  for (var _i = 0, planets_1 = planets; _i < planets_1.length; _i++) {
    var _a = planets_1[_i],
        x = _a.x,
        y = _a.y,
        mass = _a.mass;
    totalX += x * mass;
    totalY += y * mass;
    totalMass += mass;
  }

  return [totalX / totalMass, totalY / totalMass];
};

exports.findCOM = findCOM;

var drawPlanet = function drawPlanet(_a, ctx) {
  var x = _a.x,
      y = _a.y,
      radius = _a.radius,
      red = _a.red,
      green = _a.green,
      blue = _a.blue;
  ctx.save();
  ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

exports.drawPlanet = drawPlanet;

var collidePlanets = function collidePlanets(p1, p2, nextIndex) {
  var mass = p1.mass + p2.mass,
      x = (p1.x * p1.mass + p2.x * p2.mass) / mass,
      y = (p1.y * p1.mass + p2.y * p2.mass) / mass,
      dx = (p1.dx * p1.mass + p2.dx * p2.mass) / mass,
      dy = (p1.dy * p1.mass + p2.dy * p2.mass) / mass,
      red = (p1.red * p1.mass + p2.red * p2.mass) / mass,
      green = (p1.green * p1.mass + p2.green * p2.mass) / mass,
      blue = (p1.blue * p1.mass + p2.blue * p2.mass) / mass;
  return new _planet.default(x, y, dx, dy, mass, red, green, blue, nextIndex);
};

exports.collidePlanets = collidePlanets;

var chooseColor = function chooseColor(i, n) {
  var x = i / n,
      red = Math.max(0, Math.min(1, 6 * Math.abs(x - 0.5) - 1)),
      green = Math.max(0, Math.min(1, -6 * Math.abs(x - 1 / 3) + 2)),
      blue = Math.max(0, Math.min(1, -6 * Math.abs(x - 2 / 3) + 2)),
      luminance = 0.299 * red + 0.587 * green + 0.114 * blue;
  var adjRed = red * 0.5 / luminance * 255,
      adjGreen = green * 0.5 / luminance * 255,
      adjBlue = blue * 0.5 / luminance * 255;
  console.log(luminance);
  return [adjRed, adjGreen, adjBlue];
};

exports.chooseColor = chooseColor;

var drawTrail = function drawTrail(_a, ctx) {
  var points = _a.points,
      red = _a.red,
      green = _a.green,
      blue = _a.blue,
      radius = _a.radius;
  ctx.save();
  ctx.strokeStyle = "rgb(" + red + "," + green + "," + blue + ")";
  ctx.lineWidth = radius / 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);

  for (var i = 1; i < points.length; i++) {
    ctx.lineTo(points[i][0], points[i][1]);
  }

  ctx.stroke();
  ctx.closePath();
  ctx.restore();
};

exports.drawTrail = drawTrail;
},{"./planet":"planet.ts"}],"simulation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _planet = _interopRequireDefault(require("./planet"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var Simulation =
/** @class */
function () {
  function Simulation(planets) {
    this.planets = planets.map(function (p, i) {
      return new (_planet.default.bind.apply(_planet.default, __spreadArrays([void 0], p, (0, _util.chooseColor)(i, planets.length), [i])))();
    });
    this.trails = this.planets.map(function (_a) {
      var red = _a.red,
          green = _a.green,
          blue = _a.blue,
          radius = _a.radius;
      return {
        points: [],
        red: red,
        green: green,
        blue: blue,
        radius: radius
      };
    });
  }

  Simulation.prototype.update = function (step, iterations) {
    for (var i = 0; i < iterations; i++) {
      for (var _i = 0, _a = this.planets; _i < _a.length; _i++) {
        var p1 = _a[_i];

        for (var _b = 0, _c = this.planets; _b < _c.length; _b++) {
          var p2 = _c[_b];
          if (p1 == p2) continue;
          p1.applyGravity(p2);
        }
      }

      for (var _d = 0, _e = this.planets; _d < _e.length; _d++) {
        var p1 = _e[_d];
        p1.move(step);
      }

      for (var i_1 = 0; i_1 < this.planets.length - 1; i_1++) {
        for (var j = i_1 + 1; j < this.planets.length; j++) {
          var p1 = this.planets[i_1],
              p2 = this.planets[j];

          if (p1.willCollide(p2)) {
            var newPlanet = (0, _util.collidePlanets)(p1, p2, this.trails.length);
            this.planets[i_1] = newPlanet;
            this.planets.splice(j, 1);

            var _f = (0, _util.findCOM)(this.planets),
                comX = _f[0],
                comY = _f[1];

            this.trails.push({
              points: [[newPlanet.x - comX, newPlanet.y - comY]],
              red: newPlanet.red,
              green: newPlanet.green,
              blue: newPlanet.blue,
              radius: newPlanet.radius
            });
            j--;
          }
        }
      }
    }
  };

  Simulation.prototype.draw = function (mainCtx, trailsCtx, scaleFactor) {
    var _a = (0, _util.findCOM)(this.planets),
        comX = _a[0],
        comY = _a[1];

    mainCtx.resetTransform();
    mainCtx.clearRect(0, 0, mainCtx.canvas.width, mainCtx.canvas.height);
    mainCtx.translate(mainCtx.canvas.width / 2, mainCtx.canvas.height / 2);
    mainCtx.scale(scaleFactor, scaleFactor);
    mainCtx.translate(-comX, -comY);
    trailsCtx.resetTransform();
    trailsCtx.clearRect(0, 0, trailsCtx.canvas.width, trailsCtx.canvas.height);
    trailsCtx.translate(trailsCtx.canvas.width / 2, trailsCtx.canvas.height / 2);
    trailsCtx.scale(scaleFactor, scaleFactor);

    for (var _i = 0, _b = this.planets; _i < _b.length; _i++) {
      var p = _b[_i];
      (0, _util.drawPlanet)(p, mainCtx);
      this.trails[p.trailIndex].points.push([p.x - comX, p.y - comY]);
    }

    for (var _c = 0, _d = this.trails; _c < _d.length; _c++) {
      var t = _d[_c];
      (0, _util.drawTrail)(t, trailsCtx);
    }
  };

  return Simulation;
}();

var _default = Simulation;
exports.default = _default;
;
},{"./planet":"planet.ts","./util":"util.ts"}],"SimulationController.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _linkstate = _interopRequireDefault(require("linkstate"));

var _simulation = _interopRequireDefault(require("./simulation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var totalTime = 0;

var SimulationController =
/** @class */
function (_super) {
  __extends(SimulationController, _super);

  function SimulationController(_a) {
    var planets = _a.planets;

    var _this = _super.call(this) || this;

    _this.mainCanvasRef = (0, _preact.createRef)();
    _this.trailsCanvasRef = (0, _preact.createRef)();

    _this.draw = function () {
      var _a, _b;

      var mainCtx = (_a = _this.mainCanvasRef.current) === null || _a === void 0 ? void 0 : _a.getContext('2d'),
          trailsCtx = (_b = _this.trailsCanvasRef.current) === null || _b === void 0 ? void 0 : _b.getContext('2d');
      if (mainCtx && trailsCtx) _this.simulation.draw(mainCtx, trailsCtx, _this.state.scaleFactor);
    };

    _this.resizeHandler = function () {
      _this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        scaleFactor: window.devicePixelRatio
      });

      requestAnimationFrame(_this.draw);
    };

    _this.resume = function () {
      _this.setState({
        animationFrame: requestAnimationFrame(_this.tick),
        lastFrame: Date.now()
      });
    };

    _this.pause = function () {
      if (_this.state.animationFrame === undefined) return;
      cancelAnimationFrame(_this.state.animationFrame);

      _this.setState({
        animationFrame: undefined
      });
    };

    _this.tick = function () {
      var start = Date.now();

      if (_this.state.animationFrame !== undefined) {
        _this.setState({
          animationFrame: requestAnimationFrame(_this.tick),
          lastFrame: start
        });
      }

      _this.simulation.update(_this.state.step, _this.state.iterations);

      _this.draw();

      if (typeof _this.state.lastFrame == 'number') {
        var end = Date.now();
        var _a = _this.state,
            timeSimulating = _a.timeSimulating,
            timeTotal = _a.timeTotal,
            frameCounter = _a.frameCounter,
            utilization = _a.utilization;
        timeSimulating += end - start;
        timeTotal += start - _this.state.lastFrame;
        frameCounter++;

        if (frameCounter >= 60) {
          utilization = timeSimulating / timeTotal;
          frameCounter = 0;
          timeSimulating = 0;
          timeTotal = 0;
        }

        _this.setState({
          timeSimulating: timeSimulating,
          timeTotal: timeTotal,
          frameCounter: frameCounter,
          utilization: utilization
        });
      }
    };

    _this.simulation = new _simulation.default(planets);
    _this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      scaleFactor: window.devicePixelRatio,
      running: false,
      step: 0.0001,
      iterations: 250,
      timeSimulating: 0,
      timeTotal: 0,
      frameCounter: 0
    };
    return _this;
  }

  SimulationController.prototype.componentDidMount = function () {
    window.addEventListener('resize', this.resizeHandler, false);
    this.draw();
  };

  SimulationController.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.resizeHandler);
  };

  SimulationController.prototype.render = function (props, _a) {
    var width = _a.width,
        height = _a.height,
        scaleFactor = _a.scaleFactor,
        animationFrame = _a.animationFrame,
        step = _a.step,
        iterations = _a.iterations,
        utilization = _a.utilization;
    return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("canvas", {
      width: width * scaleFactor,
      height: height * scaleFactor,
      class: "trails",
      ref: this.trailsCanvasRef
    }), (0, _preact.h)("canvas", {
      width: width * scaleFactor,
      height: height * scaleFactor,
      ref: this.mainCanvasRef
    }), (0, _preact.h)("div", {
      id: "hud"
    }, (0, _preact.h)("details", {
      id: "initial-state"
    }, (0, _preact.h)("summary", null, "Initial State"), (0, _preact.h)("div", {
      class: "panel-contents"
    })), (0, _preact.h)("details", {
      id: "controls"
    }, (0, _preact.h)("summary", null, "Controls"), (0, _preact.h)("div", {
      class: "panel-contents"
    }, (0, _preact.h)("p", null, animationFrame === undefined ? (0, _preact.h)("button", {
      onClick: this.resume
    }, "Resume") : (0, _preact.h)("button", {
      onClick: this.pause
    }, "Pause")), (0, _preact.h)("p", null, "Step:", (0, _preact.h)("input", {
      type: "number",
      value: step,
      step: "any",
      onInput: (0, _linkstate.default)(this, 'step')
    }), (0, _preact.h)("br", null), "Iterations:", (0, _preact.h)("input", {
      type: "number",
      value: iterations,
      onInput: (0, _linkstate.default)(this, 'iterations')
    }), (0, _preact.h)("br", null), utilization && "Utilization: " + Math.round(utilization * 10000) / 100 + "%")))));
  };

  return SimulationController;
}(_preact.Component);

var _default = SimulationController;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","linkstate":"../node_modules/linkstate/dist/linkstate.es.js","./simulation":"simulation.ts"}],"main.tsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _SimulationController = _interopRequireDefault(require("./SimulationController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var planets = [[-100, 100, -50, -50, 120], [100, 100, -50, 50, 120], [100, -100, 50, 50, 120], [-100, -100, 50, -50, 120]];
var circle = [];

for (var angle = 0; angle < 23 / 12 * Math.PI; angle += Math.PI / 12) {
  circle.push([300 * Math.cos(angle), 300 * Math.sin(angle), 100 * Math.cos(angle + Math.PI / 4), 100 * Math.sin(angle + Math.PI / 4), 100 + 50 * Math.sin(angle)]);
}

(0, _preact.render)((0, _preact.h)(_SimulationController.default, {
  planets: circle
}), document.getElementById('app'));
},{"preact":"../node_modules/preact/dist/preact.module.js","./SimulationController":"SimulationController.tsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37051" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.tsx"], null)
//# sourceMappingURL=/main.186cb047.js.map