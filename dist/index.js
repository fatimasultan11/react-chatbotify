import "./react-chatbotify.css";
import * as Te from "react";
import ao, { createContext as ns, useContext as os, useState as it, useEffect as qt, useRef as rn, isValidElement as nl, createElement as ol, forwardRef as nn } from "react";
import zs from "react-dom";
function Al(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function il(s) {
  if (s.__esModule)
    return s;
  var a = s.default;
  if (typeof a == "function") {
    var M = function D() {
      return this instanceof D ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments);
    };
    M.prototype = a.prototype;
  } else
    M = {};
  return Object.defineProperty(M, "__esModule", { value: !0 }), Object.keys(s).forEach(function(D) {
    var l = Object.getOwnPropertyDescriptor(s, D);
    Object.defineProperty(M, D, l.get ? l : {
      enumerable: !0,
      get: function() {
        return s[D];
      }
    });
  }), M;
}
var _u = { exports: {} }, Zi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function al() {
  if (cs)
    return Zi;
  cs = 1;
  var s = ao, a = Symbol.for("react.element"), M = Symbol.for("react.fragment"), D = Object.prototype.hasOwnProperty, l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(x, L, T) {
    var R, k = {}, ee = null, fe = null;
    T !== void 0 && (ee = "" + T), L.key !== void 0 && (ee = "" + L.key), L.ref !== void 0 && (fe = L.ref);
    for (R in L)
      D.call(L, R) && !E.hasOwnProperty(R) && (k[R] = L[R]);
    if (x && x.defaultProps)
      for (R in L = x.defaultProps, L)
        k[R] === void 0 && (k[R] = L[R]);
    return { $$typeof: a, type: x, key: ee, ref: fe, props: k, _owner: l.current };
  }
  return Zi.Fragment = M, Zi.jsx = b, Zi.jsxs = b, Zi;
}
var Vi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function ul() {
  return fs || (fs = 1, process.env.NODE_ENV !== "production" && function() {
    var s = ao, a = Symbol.for("react.element"), M = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), x = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), re = Symbol.iterator, Ae = "@@iterator";
    function W(j) {
      if (j === null || typeof j != "object")
        return null;
      var q = re && j[re] || j[Ae];
      return typeof q == "function" ? q : null;
    }
    var O = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(j) {
      {
        for (var q = arguments.length, ue = new Array(q > 1 ? q - 1 : 0), Se = 1; Se < q; Se++)
          ue[Se - 1] = arguments[Se];
        X("error", j, ue);
      }
    }
    function X(j, q, ue) {
      {
        var Se = O.ReactDebugCurrentFrame, He = Se.getStackAddendum();
        He !== "" && (q += "%s", ue = ue.concat([He]));
        var rt = ue.map(function(We) {
          return String(We);
        });
        rt.unshift("Warning: " + q), Function.prototype.apply.call(console[j], console, rt);
      }
    }
    var $ = !1, Q = !1, se = !1, ne = !1, Pe = !1, De;
    De = Symbol.for("react.module.reference");
    function Le(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === D || j === E || Pe || j === l || j === T || j === R || ne || j === fe || $ || Q || se || typeof j == "object" && j !== null && (j.$$typeof === ee || j.$$typeof === k || j.$$typeof === b || j.$$typeof === x || j.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === De || j.getModuleId !== void 0));
    }
    function je(j, q, ue) {
      var Se = j.displayName;
      if (Se)
        return Se;
      var He = q.displayName || q.name || "";
      return He !== "" ? ue + "(" + He + ")" : ue;
    }
    function Qe(j) {
      return j.displayName || "Context";
    }
    function _e(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && G("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
        case D:
          return "Fragment";
        case M:
          return "Portal";
        case E:
          return "Profiler";
        case l:
          return "StrictMode";
        case T:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case x:
            var q = j;
            return Qe(q) + ".Consumer";
          case b:
            var ue = j;
            return Qe(ue._context) + ".Provider";
          case L:
            return je(j, j.render, "ForwardRef");
          case k:
            var Se = j.displayName || null;
            return Se !== null ? Se : _e(j.type) || "Memo";
          case ee: {
            var He = j, rt = He._payload, We = He._init;
            try {
              return _e(We(rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ne = Object.assign, Ze = 0, Ge, $e, lt, At, J, K, le;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function pe() {
      {
        if (Ze === 0) {
          Ge = console.log, $e = console.info, lt = console.warn, At = console.error, J = console.group, K = console.groupCollapsed, le = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        Ze++;
      }
    }
    function ve() {
      {
        if (Ze--, Ze === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ne({}, j, {
              value: Ge
            }),
            info: Ne({}, j, {
              value: $e
            }),
            warn: Ne({}, j, {
              value: lt
            }),
            error: Ne({}, j, {
              value: At
            }),
            group: Ne({}, j, {
              value: J
            }),
            groupCollapsed: Ne({}, j, {
              value: K
            }),
            groupEnd: Ne({}, j, {
              value: le
            })
          });
        }
        Ze < 0 && G("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = O.ReactCurrentDispatcher, me;
    function ke(j, q, ue) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (He) {
            var Se = He.stack.trim().match(/\n( *(at )?)/);
            me = Se && Se[1] || "";
          }
        return `
` + me + j;
      }
    }
    var Ee = !1, xe;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new qe();
    }
    function ie(j, q) {
      if (!j || Ee)
        return "";
      {
        var ue = xe.get(j);
        if (ue !== void 0)
          return ue;
      }
      var Se;
      Ee = !0;
      var He = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var rt;
      rt = de.current, de.current = null, pe();
      try {
        if (q) {
          var We = function() {
            throw Error();
          };
          if (Object.defineProperty(We.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(We, []);
            } catch (Je) {
              Se = Je;
            }
            Reflect.construct(j, [], We);
          } else {
            try {
              We.call();
            } catch (Je) {
              Se = Je;
            }
            j.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            Se = Je;
          }
          j();
        }
      } catch (Je) {
        if (Je && Se && typeof Je.stack == "string") {
          for (var Be = Je.stack.split(`
`), ht = Se.stack.split(`
`), nt = Be.length - 1, ot = ht.length - 1; nt >= 1 && ot >= 0 && Be[nt] !== ht[ot]; )
            ot--;
          for (; nt >= 1 && ot >= 0; nt--, ot--)
            if (Be[nt] !== ht[ot]) {
              if (nt !== 1 || ot !== 1)
                do
                  if (nt--, ot--, ot < 0 || Be[nt] !== ht[ot]) {
                    var Tt = `
` + Be[nt].replace(" at new ", " at ");
                    return j.displayName && Tt.includes("<anonymous>") && (Tt = Tt.replace("<anonymous>", j.displayName)), typeof j == "function" && xe.set(j, Tt), Tt;
                  }
                while (nt >= 1 && ot >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, de.current = rt, ve(), Error.prepareStackTrace = He;
      }
      var Rt = j ? j.displayName || j.name : "", mt = Rt ? ke(Rt) : "";
      return typeof j == "function" && xe.set(j, mt), mt;
    }
    function Ke(j, q, ue) {
      return ie(j, !1);
    }
    function ut(j) {
      var q = j.prototype;
      return !!(q && q.isReactComponent);
    }
    function zt(j, q, ue) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return ie(j, ut(j));
      if (typeof j == "string")
        return ke(j);
      switch (j) {
        case T:
          return ke("Suspense");
        case R:
          return ke("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case L:
            return Ke(j.render);
          case k:
            return zt(j.type, q, ue);
          case ee: {
            var Se = j, He = Se._payload, rt = Se._init;
            try {
              return zt(rt(He), q, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, tr = {}, St = O.ReactDebugCurrentFrame;
    function Ot(j) {
      if (j) {
        var q = j._owner, ue = zt(j.type, j._source, q ? q.type : null);
        St.setExtraStackFrame(ue);
      } else
        St.setExtraStackFrame(null);
    }
    function Wt(j, q, ue, Se, He) {
      {
        var rt = Function.call.bind(wt);
        for (var We in j)
          if (rt(j, We)) {
            var Be = void 0;
            try {
              if (typeof j[We] != "function") {
                var ht = Error((Se || "React class") + ": " + ue + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              Be = j[We](q, We, Se, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Be = nt;
            }
            Be && !(Be instanceof Error) && (Ot(He), G("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", ue, We, typeof Be), Ot(null)), Be instanceof Error && !(Be.message in tr) && (tr[Be.message] = !0, Ot(He), G("Failed %s type: %s", ue, Be.message), Ot(null));
          }
      }
    }
    var Or = Array.isArray;
    function xt(j) {
      return Or(j);
    }
    function jt(j) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, ue = q && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return ue;
      }
    }
    function yt(j) {
      try {
        return dr(j), !1;
      } catch {
        return !0;
      }
    }
    function dr(j) {
      return "" + j;
    }
    function gr(j) {
      if (yt(j))
        return G("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jt(j)), dr(j);
    }
    var Pt = O.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mr, Tr, rr;
    rr = {};
    function pr(j) {
      if (wt.call(j, "ref")) {
        var q = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function nr(j) {
      if (wt.call(j, "key")) {
        var q = Object.getOwnPropertyDescriptor(j, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function Pr(j, q) {
      if (typeof j.ref == "string" && Pt.current && q && Pt.current.stateNode !== q) {
        var ue = _e(Pt.current.type);
        rr[ue] || (G('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _e(Pt.current.type), j.ref), rr[ue] = !0);
      }
    }
    function hr(j, q) {
      {
        var ue = function() {
          Mr || (Mr = !0, G("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ue.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function Zt(j, q) {
      {
        var ue = function() {
          Tr || (Tr = !0, G("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ue.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var yr = function(j, q, ue, Se, He, rt, We) {
      var Be = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: j,
        key: q,
        ref: ue,
        props: We,
        // Record the component responsible for creating this element.
        _owner: rt
      };
      return Be._store = {}, Object.defineProperty(Be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(Be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.freeze && (Object.freeze(Be.props), Object.freeze(Be)), Be;
    };
    function mr(j, q, ue, Se, He) {
      {
        var rt, We = {}, Be = null, ht = null;
        ue !== void 0 && (gr(ue), Be = "" + ue), nr(q) && (gr(q.key), Be = "" + q.key), pr(q) && (ht = q.ref, Pr(q, He));
        for (rt in q)
          wt.call(q, rt) && !pt.hasOwnProperty(rt) && (We[rt] = q[rt]);
        if (j && j.defaultProps) {
          var nt = j.defaultProps;
          for (rt in nt)
            We[rt] === void 0 && (We[rt] = nt[rt]);
        }
        if (Be || ht) {
          var ot = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          Be && hr(We, ot), ht && Zt(We, ot);
        }
        return yr(j, Be, ht, He, Se, Pt.current, We);
      }
    }
    var It = O.ReactCurrentOwner, ae = O.ReactDebugCurrentFrame;
    function Me(j) {
      if (j) {
        var q = j._owner, ue = zt(j.type, j._source, q ? q.type : null);
        ae.setExtraStackFrame(ue);
      } else
        ae.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function Ce(j) {
      return typeof j == "object" && j !== null && j.$$typeof === a;
    }
    function Ue() {
      {
        if (It.current) {
          var j = _e(It.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function Fe(j) {
      {
        if (j !== void 0) {
          var q = j.fileName.replace(/^.*[\\\/]/, ""), ue = j.lineNumber;
          return `

Check your code at ` + q + ":" + ue + ".";
        }
        return "";
      }
    }
    var Ye = {};
    function at(j) {
      {
        var q = Ue();
        if (!q) {
          var ue = typeof j == "string" ? j : j.displayName || j.name;
          ue && (q = `

Check the top-level render call using <` + ue + ">.");
        }
        return q;
      }
    }
    function ct(j, q) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var ue = at(q);
        if (Ye[ue])
          return;
        Ye[ue] = !0;
        var Se = "";
        j && j._owner && j._owner !== It.current && (Se = " It was passed a child from " + _e(j._owner.type) + "."), Me(j), G('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, Se), Me(null);
      }
    }
    function Xe(j, q) {
      {
        if (typeof j != "object")
          return;
        if (xt(j))
          for (var ue = 0; ue < j.length; ue++) {
            var Se = j[ue];
            Ce(Se) && ct(Se, q);
          }
        else if (Ce(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var He = W(j);
          if (typeof He == "function" && He !== j.entries)
            for (var rt = He.call(j), We; !(We = rt.next()).done; )
              Ce(We.value) && ct(We.value, q);
        }
      }
    }
    function kt(j) {
      {
        var q = j.type;
        if (q == null || typeof q == "string")
          return;
        var ue;
        if (typeof q == "function")
          ue = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === k))
          ue = q.propTypes;
        else
          return;
        if (ue) {
          var Se = _e(q);
          Wt(ue, j.props, "prop", Se, j);
        } else if (q.PropTypes !== void 0 && !ce) {
          ce = !0;
          var He = _e(q);
          G("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", He || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && G("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(j) {
      {
        for (var q = Object.keys(j.props), ue = 0; ue < q.length; ue++) {
          var Se = q[ue];
          if (Se !== "children" && Se !== "key") {
            Me(j), G("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Me(null);
            break;
          }
        }
        j.ref !== null && (Me(j), G("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var or = {};
    function vt(j, q, ue, Se, He, rt) {
      {
        var We = Le(j);
        if (!We) {
          var Be = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (Be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = Fe(He);
          ht ? Be += ht : Be += Ue();
          var nt;
          j === null ? nt = "null" : xt(j) ? nt = "array" : j !== void 0 && j.$$typeof === a ? (nt = "<" + (_e(j.type) || "Unknown") + " />", Be = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof j, G("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Be);
        }
        var ot = mr(j, q, ue, He, rt);
        if (ot == null)
          return ot;
        if (We) {
          var Tt = q.children;
          if (Tt !== void 0)
            if (Se)
              if (xt(Tt)) {
                for (var Rt = 0; Rt < Tt.length; Rt++)
                  Xe(Tt[Rt], j);
                Object.freeze && Object.freeze(Tt);
              } else
                G("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(Tt, j);
        }
        if (wt.call(q, "key")) {
          var mt = _e(j), Je = Object.keys(q).filter(function(Ct) {
            return Ct !== "key";
          }), Ft = Je.length > 0 ? "{key: someKey, " + Je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[mt + Ft]) {
            var Vt = Je.length > 0 ? "{" + Je.join(": ..., ") + ": ...}" : "{}";
            G(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ft, mt, Vt, mt), or[mt + Ft] = !0;
          }
        }
        return j === D ? Et(ot) : kt(ot), ot;
      }
    }
    function Xr(j, q, ue) {
      return vt(j, q, ue, !0);
    }
    function vn(j, q, ue) {
      return vt(j, q, ue, !1);
    }
    var Dn = vn, $t = Xr;
    Vi.Fragment = D, Vi.jsx = Dn, Vi.jsxs = $t;
  }()), Vi;
}
process.env.NODE_ENV === "production" ? _u.exports = al() : _u.exports = ul();
var Z = _u.exports;
const ks = ns({ botOptions: {}, setBotOptions: () => null }), _t = () => os(ks);
const sl = ({
  notificationToggledOn: s,
  audioToggledOn: a,
  handleToggleNotification: M,
  handleToggleAudio: D,
  handleToggleDrawer: l,
  drawerToggledOn: E
}) => {
  var k, ee, fe, re, Ae, W, O, G, X, $, Q, se, ne, Pe, De, Le;
  const { botOptions: b, setBotOptions: x } = _t(), L = {
    background: `linear-gradient(to right, ${(k = b.theme) == null ? void 0 : k.secondaryColor},
			${(ee = b.theme) == null ? void 0 : ee.primaryColor})`,
    ...b.headerStyle
  }, T = {
    headerAvatar: {
      backgroundImage: `url(${(fe = b.header) == null ? void 0 : fe.avatar})`
    },
    notificationIcon: {
      backgroundImage: `url(${(re = b.notification) == null ? void 0 : re.icon})`
    },
    audioIcon: {
      backgroundImage: `url(${(Ae = b.audio) == null ? void 0 : Ae.icon})`
    },
    closeChatIcon: {
      backgroundImage: `url(${(W = b.header) == null ? void 0 : W.closeChatIcon})`
    },
    drawerCloseIcon: {
      backgroundImage: `url(${(O = b.header) == null ? void 0 : O.drawerCloseIcon})`
    },
    drawerOpenIcon: {
      backgroundImage: `url(${(G = b.header) == null ? void 0 : G.drawerOpenIcon})`
    }
  }, R = () => {
    x({ ...b, isOpen: !1 });
  };
  return /* @__PURE__ */ Z.jsxs("div", { style: L, className: "rcb-chat-header-container", children: [
    ((X = b.header) == null ? void 0 : X.showDrawerButton) && /* @__PURE__ */ Z.jsx("div", { className: "rcb-chat-header", children: E ? /* @__PURE__ */ Z.jsx(
      "div",
      {
        style: T.drawerCloseIcon,
        onMouseDown: (je) => {
          je.stopPropagation(), l();
        },
        className: "rcb-close-chat-icon"
      }
    ) : /* @__PURE__ */ Z.jsx(
      "div",
      {
        style: T.drawerOpenIcon,
        onMouseDown: (je) => {
          je.stopPropagation(), l();
        },
        className: "rcb-close-chat-icon"
      }
    ) }),
    /* @__PURE__ */ Z.jsxs("div", { className: "rcb-chat-header", children: [
      (($ = b.header) == null ? void 0 : $.showAvatar) && /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: T.headerAvatar,
          className: (Q = b.header) != null && Q.showDrawerButton ? "rcb-bot-avatar-with-drawer-button" : "rcb-bot-avatar"
        }
      ),
      (se = b.header) == null ? void 0 : se.title
    ] }),
    /* @__PURE__ */ Z.jsxs("div", { className: "rcb-chat-header", children: [
      !((ne = b.notification) != null && ne.disabled) && !((Pe = b.theme) != null && Pe.embedded) && /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: T.notificationIcon,
          onMouseDown: (je) => {
            je.preventDefault(), M();
          },
          className: `rcb-notification-icon-${s ? "on" : "off"}`
        }
      ),
      !((De = b.audio) != null && De.disabled) && /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: T.audioIcon,
          onMouseDown: (je) => {
            je.preventDefault(), D();
          },
          className: `rcb-audio-icon-${a ? "on" : "off"}`
        }
      ),
      !((Le = b.theme) != null && Le.embedded) && /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: T.closeChatIcon,
          onMouseDown: (je) => {
            je.stopPropagation(), R();
          },
          className: "rcb-close-chat-icon"
        }
      )
    ] })
  ] });
};
const ll = ({
  chatBodyRef: s,
  isScrolling: a,
  setIsScrolling: M,
  unreadCount: D
}) => {
  var fe, re, Ae;
  const { botOptions: l } = _t(), [E, b] = it(!1), x = {
    color: (fe = l.theme) == null ? void 0 : fe.primaryColor,
    borderColor: (re = l.theme) == null ? void 0 : re.primaryColor,
    ...l.chatMessagePromptHoveredStyle
  }, L = () => {
    b(!0);
  }, T = () => {
    b(!1);
  };
  function R(W) {
    if (!s.current)
      return;
    const O = s.current.scrollTop, X = s.current.scrollHeight - s.current.clientHeight - O, $ = 20;
    let Q = 0;
    function se() {
      if (!s.current)
        return;
      Q += $;
      const ne = k(Q, O, X, W);
      s.current.scrollTop = ne, Q < W ? requestAnimationFrame(se) : M(!1);
    }
    se();
  }
  const k = (W, O, G, X) => (W /= X / 2, W < 1 ? G / 2 * W * W + O : (W--, -G / 2 * (W * (W - 2) - 1) + O)), ee = () => {
    var O;
    return s.current && ((O = l.chatWindow) == null ? void 0 : O.showMessagePrompt) && a && D > 0 ? "visible" : "hidden";
  };
  return /* @__PURE__ */ Z.jsx("div", { className: `rcb-message-prompt-container ${ee()}`, children: /* @__PURE__ */ Z.jsx(
    "div",
    {
      onMouseEnter: L,
      onMouseLeave: T,
      style: E ? x : l.chatMessagePromptStyle,
      onMouseDown: (W) => {
        W.preventDefault(), R(600);
      },
      className: "rcb-message-prompt-text",
      children: (Ae = l.chatWindow) == null ? void 0 : Ae.messagePromptText
    }
  ) });
}, Os = ns({ messages: [], setMessages: () => null }), Ps = () => os(Os);
const cl = ({
  chatBodyRef: s,
  isBotTyping: a,
  isLoadingChatHistory: M,
  chatScrollHeight: D,
  setChatScrollHeight: l,
  setIsLoadingChatHistory: E,
  isScrolling: b,
  setIsScrolling: x,
  unreadCount: L,
  setUnreadCount: T
}) => {
  var $, Q, se, ne, Pe, De, Le, je, Qe, _e;
  const { botOptions: R } = _t(), { messages: k } = Ps(), ee = {
    ...R == null ? void 0 : R.bodyStyle,
    scrollbarWidth: ($ = R.chatWindow) != null && $.showScrollbar ? "auto" : "none"
  }, fe = {
    backgroundColor: (Q = R.theme) == null ? void 0 : Q.primaryColor,
    color: "#fff",
    maxWidth: (se = R.userBubble) != null && se.showAvatar ? "65%" : "70%",
    ...R.userBubbleStyle
  }, re = (ne = R.userBubble) != null && ne.animate ? "rcb-user-message-entry" : "", Ae = {
    backgroundColor: (Pe = R.theme) == null ? void 0 : Pe.secondaryColor,
    color: "#fff",
    maxWidth: (De = R.botBubble) != null && De.showAvatar ? "65%" : "70%",
    ...R.botBubbleStyle
  }, W = (Le = R.botBubble) != null && Le.animate ? "rcb-bot-message-entry" : "";
  qt(() => {
    var Ne;
    if (s.current) {
      if (M) {
        const { scrollHeight: Ze } = s.current, Ge = Ze - D;
        s.current.scrollTop = s.current.scrollTop + Ge, E(!1);
        return;
      }
      ((Ne = R.chatWindow) != null && Ne.autoJumpToBottom || !b) && (s.current.scrollTop = s.current.scrollHeight, R.isOpen && T(0));
    }
  }, [k.length, a]), qt(() => {
    s.current && (l(s.current.scrollHeight), b || (s.current.scrollTop = s.current.scrollHeight, R.isOpen && T(0)));
  }, [(je = s.current) == null ? void 0 : je.scrollHeight]), qt(() => {
    b || T(0);
  }, [b]);
  const O = () => {
    var $e;
    if (!s.current)
      return;
    const { scrollTop: Ne, clientHeight: Ze, scrollHeight: Ge } = s.current;
    x(
      Ne + Ze < Ge - ((($e = R.chatWindow) == null ? void 0 : $e.messagePromptOffset) || 30)
    ), !b && Ne + Ze >= Ge - 1 && (s.current.scrollTop = Ge - Ze - 1);
  }, G = (Ne) => {
    var Ze, Ge, $e;
    return /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
      (Ze = R == null ? void 0 : R.userBubble) != null && Ze.dangerouslySetInnerHtml ? /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: { ...fe, display: "inline" },
          className: `rcb-user-message ${re}`,
          dangerouslySetInnerHTML: { __html: Ne.content }
        }
      ) : /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: fe,
          className: `rcb-user-message ${re}`,
          children: Ne.content
        }
      ),
      ((Ge = R.userBubble) == null ? void 0 : Ge.showAvatar) && /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: { backgroundImage: `url(${($e = R.userBubble) == null ? void 0 : $e.avatar})` },
          className: "rcb-message-user-avatar"
        }
      )
    ] });
  }, X = (Ne) => {
    var Ze, Ge, $e;
    return /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
      ((Ze = R.botBubble) == null ? void 0 : Ze.showAvatar) && /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(Ge = R.botBubble) == null ? void 0 : Ge.avatar})` },
          className: "rcb-message-bot-avatar"
        }
      ),
      ($e = R == null ? void 0 : R.botBubble) != null && $e.dangerouslySetInnerHtml ? /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: { ...Ae, display: "inline" },
          className: `rcb-bot-message ${W}`,
          dangerouslySetInnerHTML: { __html: Ne.content }
        }
      ) : /* @__PURE__ */ Z.jsx(
        "div",
        {
          style: Ae,
          className: `rcb-bot-message ${W}`,
          children: Ne.content
        }
      )
    ] });
  };
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      style: ee,
      className: "rcb-chat-body-container",
      ref: s,
      onScroll: O,
      children: [
        k.map((Ne, Ze) => typeof Ne.content != "string" ? /* @__PURE__ */ Z.jsx("div", { children: Ne.content }, Ze) : /* @__PURE__ */ Z.jsx(
          "div",
          {
            className: Ne.sender === "user" ? "rcb-user-message-container" : "rcb-bot-message-container",
            children: Ne.sender === "user" ? G(Ne) : X(Ne)
          },
          Ze
        )),
        a && /* @__PURE__ */ Z.jsxs("div", { className: "rcb-bot-message-container", children: [
          ((Qe = R.botBubble) == null ? void 0 : Qe.showAvatar) && /* @__PURE__ */ Z.jsx(
            "div",
            {
              style: { backgroundImage: `url(${(_e = R.botBubble) == null ? void 0 : _e.avatar})` },
              className: "rcb-message-bot-avatar"
            }
          ),
          /* @__PURE__ */ Z.jsx(
            "div",
            {
              onMouseDown: (Ne) => {
                Ne.preventDefault();
              },
              className: `rcb-bot-message ${W}`,
              children: /* @__PURE__ */ Z.jsxs("div", { className: "rcb-typing-indicator", children: [
                /* @__PURE__ */ Z.jsx("span", { className: "rcb-dot" }),
                /* @__PURE__ */ Z.jsx("span", { className: "rcb-dot" }),
                /* @__PURE__ */ Z.jsx("span", { className: "rcb-dot" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ Z.jsx(
          ll,
          {
            chatBodyRef: s,
            isScrolling: b,
            setIsScrolling: x,
            unreadCount: L
          }
        )
      ]
    }
  );
};
const fl = ({
  handleSubmit: s
}) => {
  var T, R, k;
  const { botOptions: a } = _t(), [M, D] = it(!1), l = {
    backgroundColor: (T = a.theme) == null ? void 0 : T.primaryColor,
    ...a.sendButtonStyle
  }, E = {
    backgroundColor: (R = a.theme) == null ? void 0 : R.secondaryColor,
    ...a.sendButtonHoveredStyle
  }, b = {
    backgroundImage: `url(${(k = a.chatInput) == null ? void 0 : k.sendButtonIcon})`
  }, x = () => {
    D(!0);
  }, L = () => {
    D(!1);
  };
  return /* @__PURE__ */ Z.jsx(
    "div",
    {
      onMouseEnter: x,
      onMouseLeave: L,
      style: M ? E : l,
      onMouseDown: s,
      className: "rcb-send-button",
      children: /* @__PURE__ */ Z.jsx("span", { className: "rcb-send-icon", style: b })
    }
  );
}, ds = window.SpeechRecognition || window.webkitSpeechRecognition, pn = ds != null ? new ds() : null;
let oo, Uu, VA = !1;
const dl = (s, a, M, D, l) => {
  var x, L;
  if (!pn)
    return;
  if (!VA)
    try {
      VA = !0, pn.start();
    } catch {
    }
  const E = (x = s.voice) == null ? void 0 : x.timeoutPeriod, b = (L = s.voice) == null ? void 0 : L.autoSendPeriod;
  pn.onresult = (T) => {
    var k, ee;
    clearTimeout(oo), oo = null, clearTimeout(Uu);
    const R = T.results[T.results.length - 1][0].transcript;
    if (l.current) {
      const fe = (k = s.chatInput) == null ? void 0 : k.characterLimit, re = l.current.value + R;
      fe != null && fe >= 0 && re.length > fe ? l.current.value = re.slice(0, fe) : l.current.value = re, D(l.current.value.length);
    }
    oo = setTimeout(() => Ru(a), E), (ee = s.voice) != null && ee.autoSendDisabled || (Uu = setTimeout(M, b));
  }, pn.onend = () => {
    VA ? (pn.start(), oo || (oo = setTimeout(() => Ru(a), E))) : (clearTimeout(oo), oo = null, clearTimeout(Uu));
  }, oo = setTimeout(() => Ru(a), E);
}, As = () => {
  pn && (VA = !1, pn && pn.stop());
}, Yu = (s, a) => {
  var M, D;
  (M = a.voice) != null && M.disabled || !((D = a.chatInput) != null && D.blockSpam) || !pn || (s && !VA ? (VA = !0, pn.start()) : s || As());
}, Ru = (s) => {
  s(), As();
};
const gl = ({
  inputRef: s,
  textAreaDisabled: a,
  voiceToggledOn: M,
  handleToggleVoice: D,
  triggerSendVoiceInput: l,
  setInputLength: E
}) => {
  var x;
  const { botOptions: b } = _t();
  return qt(() => {
    M ? dl(b, D, l, E, s) : As();
  }, [M]), /* @__PURE__ */ Z.jsx(
    "div",
    {
      onMouseDown: (L) => {
        L.preventDefault(), D();
      },
      className: M && !a ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
      children: /* @__PURE__ */ Z.jsx(
        "span",
        {
          className: M && !a ? "rcb-voice-icon-on" : "rcb-voice-icon-off",
          style: { backgroundImage: `url(${(x = b.voice) == null ? void 0 : x.icon})` }
        }
      )
    }
  );
}, Fu = ["Quickstart", "API Docs", "Examples", "Github", "Discord"], Ml = {
  start: {
    message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
    transition: { duration: 1e3 },
    path: "show_options"
  },
  show_options: {
    message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
    options: Fu,
    path: "process_options"
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: Fu,
    path: "process_options"
  },
  unknown_input: {
    message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
    options: Fu,
    path: "process_options"
  },
  process_options: {
    transition: { duration: 0 },
    path: (s) => {
      let a = "";
      switch (s.userInput) {
        case "Quickstart":
          a = "https://react-chatbotify.tjtanjin.com/docs/introduction/quickstart/";
          break;
        case "API Docs":
          a = "https://react-chatbotify.tjtanjin.com/docs/api/bot_options";
          break;
        case "Examples":
          a = "https://react-chatbotify.tjtanjin.com/docs/examples/basic_form";
          break;
        case "Github":
          a = "https://github.com/tjtanjin/react-chatbotify/";
          break;
        case "Discord":
          a = "https://discord.gg/6R4DK4G5Zh";
          break;
        default:
          return "unknown_input";
      }
      return s.injectMessage("Sit tight! I'll send you right there!"), setTimeout(() => {
        window.open(a);
      }, 1e3), "repeat";
    }
  },
  repeat: {
    transition: { duration: 3e3 },
    path: "prompt_again"
  }
}, Gr = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), pl = (s) => {
  const a = [];
  let M = "", D = !1;
  for (let l = 0; l < s.length; l++) {
    const E = s[l];
    E === "<" ? D ? (a.push(M), M = E) : (D = !0, M = E) : E === ">" ? (M += E, a.push(M), M = "", D = !1) : D ? M += E : a.push(E);
  }
  return M !== "" && a.push(M), a;
}, gs = (s) => {
  if (!s)
    return !1;
  const a = s.getBoundingClientRect(), M = window.innerHeight || document.documentElement.clientHeight, D = window.innerWidth || document.documentElement.clientWidth;
  return a.top >= 0 && a.left >= 0 && a.bottom <= M && a.right <= D;
};
const hl = ({
  inputRef: s,
  textAreaDisabled: a,
  textAreaSensitiveMode: M,
  voiceToggledOn: D,
  getCurrPath: l,
  handleToggleVoice: E,
  handleActionInput: b
}) => {
  var Le, je, Qe, _e, Ne, Ze, Ge, $e, lt, At, J;
  const { botOptions: x } = _t(), [L, T] = it(!1), [R, k] = it(0), [ee, fe] = it(!1);
  qt(() => {
    var le;
    const K = l();
    K && (b(K, (le = s.current) == null ? void 0 : le.value), k(0));
  }, [ee]);
  const re = {
    boxSizing: Gr ? "content-box" : "border-box",
    ...x.chatInputAreaStyle
  }, Ae = {
    outline: a ? "" : "none",
    boxShadow: a ? "" : `0 0 5px ${(Le = x.theme) == null ? void 0 : Le.primaryColor}`,
    boxSizing: Gr ? "content-box" : "border-box",
    ...x.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...x.chatInputAreaFocusedStyle
  }, W = {
    cursor: `url(${(je = x.theme) == null ? void 0 : je.actionDisabledIcon}), auto`,
    caretColor: "transparent",
    boxSizing: Gr ? "content-box" : "border-box",
    ...x.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...x.chatInputAreaDisabledStyle
  }, O = {
    color: "#989898",
    ...x.characterLimitStyle
  }, G = {
    color: "#ff0000",
    ...x.characterLimitReachedStyle
  }, X = a ? (Qe = x.chatInput) == null ? void 0 : Qe.disabledPlaceholderText : (_e = x.chatInput) == null ? void 0 : _e.enabledPlaceholderText, $ = () => {
    a || T(!0);
  }, Q = () => {
    T(!1);
  }, se = (K) => {
    var le;
    if (K.key === "Enter") {
      if (K.shiftKey) {
        (le = x.chatInput) != null && le.allowNewline || K.preventDefault();
        return;
      }
      Pe(K);
    }
  }, ne = (K) => {
    var le, Ie;
    if (a && s.current) {
      s.current.value = "";
      return;
    }
    if (s.current) {
      const pe = (le = x.chatInput) == null ? void 0 : le.characterLimit, de = ((Ie = x.chatInput) == null ? void 0 : Ie.allowNewline) ? K.target.value : K.target.value.replace(/\n/g, " ");
      pe != null && pe >= 0 && de.length > pe ? s.current.value = de.slice(0, pe) : s.current.value = de, k(s.current.value.length);
    }
  }, Pe = (K) => {
    var Ie;
    K.preventDefault();
    const le = l();
    le && (b(le, (Ie = s.current) == null ? void 0 : Ie.value), k(0));
  }, De = () => {
    fe((K) => !K);
  };
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      onMouseDown: (K) => {
        K.stopPropagation();
      },
      style: x.chatInputContainerStyle,
      className: "rcb-chat-input",
      children: [
        M && ((Ne = x.sensitiveInput) != null && Ne.maskInTextArea) ? /* @__PURE__ */ Z.jsx(
          "input",
          {
            ref: s,
            type: "password",
            className: "rcb-chat-input-textarea",
            style: a ? W : L ? Ae : re,
            placeholder: X,
            onChange: ne,
            onKeyDown: se,
            onFocus: $,
            onBlur: Q
          }
        ) : /* @__PURE__ */ Z.jsx(
          "textarea",
          {
            ref: s,
            style: a ? W : L ? Ae : re,
            rows: 1,
            className: "rcb-chat-input-textarea",
            placeholder: X,
            onChange: ne,
            onKeyDown: se,
            onFocus: $,
            onBlur: Q
          }
        ),
        /* @__PURE__ */ Z.jsxs("div", { className: "rcb-chat-input-button-container", children: [
          !((Ze = x.voice) != null && Ze.disabled) && Gr && /* @__PURE__ */ Z.jsx(
            gl,
            {
              inputRef: s,
              textAreaDisabled: a,
              voiceToggledOn: D,
              handleToggleVoice: E,
              triggerSendVoiceInput: De,
              setInputLength: k
            }
          ),
          /* @__PURE__ */ Z.jsx(fl, { handleSubmit: Pe }),
          ((Ge = x.chatInput) == null ? void 0 : Ge.showCharacterCount) && (($e = x.chatInput) == null ? void 0 : $e.characterLimit) != null && ((lt = x.chatInput) == null ? void 0 : lt.characterLimit) > 0 && /* @__PURE__ */ Z.jsxs(
            "div",
            {
              className: "rcb-chat-input-char-counter",
              style: R >= ((At = x.chatInput) == null ? void 0 : At.characterLimit) ? G : O,
              children: [
                R,
                "/",
                (J = x.chatInput) == null ? void 0 : J.characterLimit
              ]
            }
          )
        ] })
      ]
    }
  );
};
const yl = ({
  inputRef: s,
  textAreaDisabled: a
}) => {
  var R, k, ee, fe;
  const { botOptions: M } = _t(), D = rn(null), l = rn(null), [E, b] = it(!1), x = {
    cursor: `url(${(R = M.theme) == null ? void 0 : R.actionDisabledIcon}), auto`
  };
  qt(() => {
    const re = (O) => {
      D.current && !D.current.contains(O.target) && l.current && !l.current.contains(O.target) && b(!1);
    }, Ae = () => {
      if (D.current && l.current) {
        const O = l.current.getBoundingClientRect(), G = D.current.offsetHeight, X = O.top - G - 8;
        D.current.style.left = `${O.left}px`, D.current.style.top = `${X}px`;
      }
    }, W = () => {
      Ae();
    };
    return document.addEventListener("mousedown", re), window.addEventListener("resize", W), () => {
      document.removeEventListener("mousedown", re), window.removeEventListener("resize", W);
    };
  }, []);
  const L = (re, Ae) => {
    re.preventDefault(), s.current && (s.current.value = s.current.value + Ae, setTimeout(() => {
      const W = s.current;
      if (W) {
        W.focus();
        const O = W.value.length;
        W.setSelectionRange(O, O);
      }
    }, 50)), b(!1);
  }, T = (re) => {
    re.preventDefault(), b(a ? !1 : !E);
  };
  return /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
    /* @__PURE__ */ Z.jsx(
      "div",
      {
        ref: l,
        style: a ? x : {},
        className: `${a ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"}`,
        onMouseDown: T,
        children: /* @__PURE__ */ Z.jsx(
          "span",
          {
            style: { backgroundImage: `url(${(k = M.emoji) == null ? void 0 : k.icon})` },
            className: `${a ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`
          }
        )
      }
    ),
    E && /* @__PURE__ */ Z.jsx("div", { className: "rcb-emoji-picker-popup", ref: D, children: (fe = (ee = M.emoji) == null ? void 0 : ee.list) == null ? void 0 : fe.map((re, Ae) => /* @__PURE__ */ Z.jsx(
      "span",
      {
        className: "rcb-emoji",
        onMouseDown: (W) => L(W, re),
        children: re
      },
      Ae
    )) })
  ] });
}, Qs = ns({ paths: [], setPaths: () => null }), Ra = () => os(Qs);
const vl = ({
  inputRef: s,
  flow: a,
  injectMessage: M,
  streamMessage: D,
  openChat: l,
  getCurrPath: E,
  getPrevPath: b,
  handleActionInput: x,
  openDrawer: L
}) => {
  var re, Ae, W, O, G;
  const { botOptions: T } = _t(), { paths: R } = Ra(), [k, ee] = it(!1);
  qt(() => {
    const X = E();
    if (!X)
      return;
    const $ = a[X];
    $ && ee(typeof $.file == "function");
  }, [R]);
  const fe = async (X) => {
    var Pe, De;
    const $ = X.target.files;
    if (!$)
      return;
    const Q = E();
    if (!Q)
      return;
    const se = a[Q];
    if (!se)
      return;
    const ne = se.file;
    if (ne != null) {
      const Le = [];
      for (let je = 0; je < $.length; je++)
        Le.push($[je].name);
      await x(Q, "📄 " + Le.join(", "), (Pe = T.chatInput) == null ? void 0 : Pe.sendAttachmentOutput), await ne({
        userInput: (De = s.current) == null ? void 0 : De.value,
        prevPath: b(),
        injectMessage: M,
        streamMessage: D,
        openChat: l,
        openDrawer: L,
        files: $
      });
    }
  };
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: k ? /* @__PURE__ */ Z.jsxs("label", { className: "rcb-attach-button-enabled", children: [
    /* @__PURE__ */ Z.jsx(
      "input",
      {
        className: "rcb-attach-input",
        type: "file",
        onChange: fe,
        multiple: (re = T.fileAttachment) == null ? void 0 : re.multiple,
        accept: (Ae = T.fileAttachment) == null ? void 0 : Ae.accept
      }
    ),
    /* @__PURE__ */ Z.jsx(
      "span",
      {
        style: { backgroundImage: `url(${(W = T.fileAttachment) == null ? void 0 : W.icon})` },
        className: "rcb-attach-icon-enabled"
      }
    )
  ] }) : /* @__PURE__ */ Z.jsxs(
    "label",
    {
      className: "rcb-attach-button-disabled",
      style: { cursor: `url(${(O = T.theme) == null ? void 0 : O.actionDisabledIcon}), auto` },
      children: [
        /* @__PURE__ */ Z.jsx("input", { disabled: !0, type: "file" }),
        /* @__PURE__ */ Z.jsx(
          "span",
          {
            style: {
              backgroundImage: `url(${(G = T.fileAttachment) == null ? void 0 : G.icon})`
            },
            className: "rcb-attach-icon-disabled"
          }
        )
      ]
    }
  ) });
};
const Dl = ({
  inputRef: s,
  flow: a,
  textAreaDisabled: M,
  injectMessage: D,
  streamMessage: l,
  openChat: E,
  getCurrPath: b,
  getPrevPath: x,
  handleActionInput: L,
  openDrawer: T
}) => {
  var k, ee, fe;
  const { botOptions: R } = _t();
  return /* @__PURE__ */ Z.jsxs("div", { style: R.footerStyle, className: "rcb-chat-footer-container", children: [
    /* @__PURE__ */ Z.jsxs("div", { className: "rcb-chat-footer", children: [
      !((k = R.fileAttachment) != null && k.disabled) && /* @__PURE__ */ Z.jsx(
        vl,
        {
          inputRef: s,
          flow: a,
          getCurrPath: b,
          openChat: E,
          getPrevPath: x,
          handleActionInput: L,
          injectMessage: D,
          streamMessage: l,
          openDrawer: T
        }
      ),
      !((ee = R.emoji) != null && ee.disabled) && /* @__PURE__ */ Z.jsx(yl, { inputRef: s, textAreaDisabled: M })
    ] }),
    /* @__PURE__ */ Z.jsx("span", { children: (fe = R.footer) == null ? void 0 : fe.text })
  ] });
};
const Ll = ({
  unreadCount: s
}) => {
  var E, b, x, L;
  const { botOptions: a, setBotOptions: M } = _t(), D = () => {
    M({ ...a, isOpen: !a.isOpen });
  }, l = {
    backgroundImage: `url(${(E = a.chatButton) == null ? void 0 : E.icon})`,
    height: 75,
    width: 75,
    ...a.chatButtonStyle
  };
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: !((b = a.theme) != null && b.embedded) && /* @__PURE__ */ Z.jsx(
    "button",
    {
      "aria-label": "Open Chat",
      style: l,
      className: `rcb-toggle-button ${a.isOpen ? "rcb-button-hide" : "rcb-button-show"}`,
      onClick: D,
      children: !((x = a.notification) != null && x.disabled) && ((L = a.notification) == null ? void 0 : L.showCount) && /* @__PURE__ */ Z.jsx("span", { style: a.notificationBadgeStyle, className: "rcb-badge", children: s })
    }
  ) });
};
const Nl = () => {
  var R, k, ee, fe, re;
  const { botOptions: s, setBotOptions: a } = _t(), [M, D] = it(!1), [l, E] = it(!1), [b, x] = it(0);
  qt(() => {
    var W, O, G;
    const Ae = (W = s.tooltip) == null ? void 0 : W.mode;
    if (Ae === "ALWAYS")
      if (Gr) {
        let X;
        s.isOpen ? X = (((O = s.chatWindowStyle) == null ? void 0 : O.width) || 375) - (((G = s.chatButtonStyle) == null ? void 0 : G.width) || 75) : X = 0, x(X), D(!0);
      } else
        s.isOpen ? D(!1) : D(!0);
    else
      Ae === "NEVER" ? D(!1) : Ae === "START" ? l ? D(!1) : (E(!0), D(!0)) : Ae === "CLOSE" && D(!s.isOpen);
  }, [s.isOpen]);
  const L = {
    transform: `translateX(-${b}px)`,
    right: (((R = s.chatButtonStyle) == null ? void 0 : R.width) || 75) + 40,
    bottom: 30,
    backgroundColor: (k = s.theme) == null ? void 0 : k.secondaryColor,
    color: (ee = s.theme) == null ? void 0 : ee.secondaryColor,
    ...s.tooltipStyle
  }, T = {
    borderColor: `transparent transparent transparent ${L.backgroundColor}`
  };
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: !((fe = s.theme) != null && fe.embedded) && /* @__PURE__ */ Z.jsxs(
    "div",
    {
      style: L,
      className: `rcb-chat-tooltip ${M ? "rcb-tooltip-show" : "rcb-tooltip-hide"}`,
      onClick: () => a({ ...s, isOpen: !0 }),
      children: [
        /* @__PURE__ */ Z.jsx("span", { style: { color: "#fff" }, children: (re = s.tooltip) == null ? void 0 : re.text }),
        /* @__PURE__ */ Z.jsx("span", { className: "rcb-chat-tooltip-tail", style: T })
      ]
    }
  ) });
};
const Il = ({
  chatHistory: s,
  showChatHistory: a
}) => {
  var L, T, R;
  const { botOptions: M } = _t(), [D, l] = it(!1), E = {
    color: (L = M.theme) == null ? void 0 : L.primaryColor,
    borderColor: (T = M.theme) == null ? void 0 : T.primaryColor,
    ...M.chatHistoryButtonHoveredStyle
  }, b = () => {
    l(!0);
  }, x = () => {
    l(!1);
  };
  return /* @__PURE__ */ Z.jsx("div", { className: "rcb-view-history-container", children: /* @__PURE__ */ Z.jsx(
    "div",
    {
      onMouseEnter: b,
      onMouseLeave: x,
      style: D ? E : M.chatHistoryButtonStyle,
      onMouseDown: (k) => {
        k.preventDefault(), a(s);
      },
      className: "rcb-view-history-button",
      children: /* @__PURE__ */ Z.jsx("p", { children: (R = M.chatHistory) == null ? void 0 : R.viewChatHistoryButtonText })
    }
  ) });
};
const wl = ({
  checkboxes: s,
  checkedItems: a,
  path: M,
  handleActionInput: D
}) => {
  var Ae, W, O, G, X, $, Q, se, ne, Pe, De;
  const { botOptions: l } = _t(), { paths: E } = Ra(), [b, x] = it(/* @__PURE__ */ new Set()), [L, T] = it(!1), R = {
    cursor: L ? `url(${(Ae = l.theme) == null ? void 0 : Ae.actionDisabledIcon}), auto` : "pointer",
    color: (W = l.theme) == null ? void 0 : W.primaryColor,
    borderColor: (O = l.theme) == null ? void 0 : O.primaryColor,
    ...l.botCheckboxRowStyle
  }, k = {
    cursor: L || b.size < s.min ? `url(${(G = l.theme) == null ? void 0 : G.actionDisabledIcon}), auto` : "pointer",
    color: (X = l.theme) == null ? void 0 : X.primaryColor,
    borderColor: ($ = l.theme) == null ? void 0 : $.primaryColor,
    ...l.botCheckboxNextStyle
  }, ee = {
    cursor: L ? `url(${(Q = l.theme) == null ? void 0 : Q.actionDisabledIcon}), auto` : "pointer",
    color: "transparent",
    ...l.botCheckMarkStyle
  }, fe = {
    cursor: L ? `url(${(se = l.theme) == null ? void 0 : se.actionDisabledIcon}), auto` : "pointer",
    color: "#fff",
    borderColor: (ne = l.theme) == null ? void 0 : ne.primaryColor,
    backgroundColor: (Pe = l.theme) == null ? void 0 : Pe.primaryColor,
    ...l.botCheckMarkSelectedStyle
  };
  qt(() => {
    E.length > 0 && E[E.length - 1] !== M && T(!0);
  }, [E]);
  const re = (Le) => {
    L || x((je) => {
      const Qe = new Set(je);
      if (Qe.has(Le))
        a.delete(Le), Qe.delete(Le);
      else {
        if (b.size == s.max)
          return je;
        a.add(Le), Qe.add(Le);
      }
      return Qe;
    });
  };
  return /* @__PURE__ */ Z.jsxs("div", { className: `rcb-checkbox-container ${(De = l.botBubble) != null && De.showAvatar ? "rcb-checkbox-offset" : ""}`, children: [
    s.items.map((Le) => /* @__PURE__ */ Z.jsx(
      "div",
      {
        onMouseDown: (je) => {
          je.preventDefault(), re(Le);
        },
        style: R,
        className: "rcb-checkbox-row-container",
        children: /* @__PURE__ */ Z.jsxs("div", { className: "rcb-checkbox-row", children: [
          /* @__PURE__ */ Z.jsx(
            "div",
            {
              style: b.has(Le) ? fe : ee,
              className: "rcb-checkbox-mark"
            }
          ),
          /* @__PURE__ */ Z.jsx("div", { className: "rcb-checkbox-label", children: Le })
        ] })
      },
      Le
    )),
    /* @__PURE__ */ Z.jsx(
      "button",
      {
        style: k,
        className: "rcb-checkbox-next-button",
        disabled: L || b.size < s.min,
        onMouseDown: (Le) => {
          var Qe;
          Le.preventDefault();
          const je = Array.from(a).join(", ");
          T(!0), D(M, je, (Qe = l.chatInput) == null ? void 0 : Qe.sendCheckboxOutput);
        }
      }
    )
  ] });
}, Sl = (s, a, M, D) => {
  const l = s.checkboxes;
  if (!l || l.items.length == 0)
    return;
  l.min == null && (l.min = 1), l.max == null && (l.max = l.items.length), l.min > l.max && (l.min = l.max);
  const E = /* @__PURE__ */ new Set();
  M(/* @__PURE__ */ Z.jsx(
    wl,
    {
      checkboxes: l,
      checkedItems: E,
      path: a,
      handleActionInput: D
    }
  ));
}, jl = async (s, a) => {
  const M = s.function;
  if (!M)
    return;
  const D = M(a);
  return D instanceof Promise ? await D : D;
}, Tl = async (s, a) => {
  const M = s.message;
  if (!M)
    return;
  if (typeof M == "string") {
    M.trim() !== "" && await a.injectMessage(M);
    return;
  }
  let D = M(a);
  D instanceof Promise && (D = await D), D && D.trim() !== "" && await a.injectMessage(D);
};
const ml = ({
  options: s,
  path: a,
  handleActionInput: M
}) => {
  var fe, re, Ae, W, O, G;
  const { botOptions: D } = _t(), { paths: l } = Ra(), [E, b] = it([]), [x, L] = it(!1), T = {
    cursor: x ? `url(${(fe = D.theme) == null ? void 0 : fe.actionDisabledIcon}), auto` : "pointer",
    color: (re = D.theme) == null ? void 0 : re.primaryColor,
    borderColor: (Ae = D.theme) == null ? void 0 : Ae.primaryColor,
    backgroundColor: "#fff",
    ...D.botOptionStyle
  }, R = {
    color: "#fff",
    borderColor: (W = D.theme) == null ? void 0 : W.primaryColor,
    backgroundColor: (O = D.theme) == null ? void 0 : O.primaryColor,
    ...D.botOptionHoveredStyle
  };
  qt(() => {
    l.length > 0 && l[l.length - 1] !== a && L(!0);
  }, [l]);
  const k = (X) => {
    b(($) => {
      const Q = [...$];
      return Q[X] = !0, Q;
    });
  }, ee = (X) => {
    b(($) => {
      const Q = [...$];
      return Q[X] = !1, Q;
    });
  };
  return /* @__PURE__ */ Z.jsx("div", { className: `rcb-options-container ${(G = D.botBubble) != null && G.showAvatar ? "rcb-options-offset" : ""}`, children: s.map((X, $) => {
    const Q = E[$] && !x;
    return /* @__PURE__ */ Z.jsx(
      "div",
      {
        className: "rcb-options",
        style: Q ? R : T,
        onMouseEnter: () => k($),
        onMouseLeave: () => ee($),
        onMouseDown: (se) => {
          var ne;
          se.preventDefault(), !x && (L(!0), M(a, X, (ne = D.chatInput) == null ? void 0 : ne.sendOptionOutput));
        },
        children: X
      },
      X
    );
  }) });
}, El = (s, a, M, D) => {
  const l = s.options;
  if (!l)
    return;
  M(/* @__PURE__ */ Z.jsx(ml, { options: l, path: a, handleActionInput: D }));
}, Cl = async (s, a, M) => {
  const D = s.path;
  if (!D)
    return !1;
  if (typeof D == "string")
    return M((b) => [...b, D]), !0;
  let l = D(a);
  if (l instanceof Promise && (l = await l), !l)
    return !1;
  const E = l;
  return M((b) => [...b, E]), !0;
}, xl = async (s, a) => {
  const M = s.render;
  if (M) {
    if (typeof M == "function") {
      let D = M(a);
      if (D instanceof Promise && (D = await D), !D)
        return;
      await a.injectMessage(D);
      return;
    }
    await a.injectMessage(M);
  }
}, bl = async (s, a, M, D, l) => {
  const E = s[a];
  if (!E)
    throw new Error("block is not valid.");
  const b = E.transition;
  let x;
  if (typeof b == "function" ? (x = b(M), x instanceof Promise && (x = await x)) : x = b, !x || x instanceof Promise || x.duration == null || typeof x.duration != "number")
    return;
  x.interruptable || (x.interruptable = !1);
  const L = setTimeout(async () => {
    await Bs(s, a, M, D);
  }, x.duration);
  x.interruptable && l(L);
}, zl = async (s, a, M, D, l, E, b, x) => {
  const L = s[a];
  if (!L)
    throw new Error("Block is not valid.");
  for (const T of Object.keys(L))
    switch (T) {
      case "message":
        await Tl(L, M);
        break;
      case "options":
        El(L, a, M.injectMessage, x);
        break;
      case "checkboxes":
        Sl(L, a, M.injectMessage, x);
        break;
      case "render":
        await xl(L, M);
        break;
      case "chatDisabled":
        L.chatDisabled && D(L.chatDisabled);
        break;
      case "isSensitive":
        L.isSensitive && l(L.isSensitive);
        break;
      case "transition":
        await bl(s, a, M, E, b);
    }
}, Bs = async (s, a, M, D) => {
  const l = s[a];
  if (!l)
    throw new Error("Block is not valid.");
  const E = Object.keys(l);
  for (const b of E)
    b === "function" && await jl(l, M);
  return E.includes("path") ? await Cl(l, M, D) : !1;
};
var Vo = {}, Ho = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function kl() {
  if (Ms)
    return Ho;
  Ms = 1;
  var s = ao;
  function a(o) {
    for (var f = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, y = 1; y < arguments.length; y++)
      f += "&args[]=" + encodeURIComponent(arguments[y]);
    return "Minified React error #" + o + "; visit " + f + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var M = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, l = {}, E = {};
  function b(o) {
    return M.call(E, o) ? !0 : M.call(l, o) ? !1 : D.test(o) ? E[o] = !0 : (l[o] = !0, !1);
  }
  function x(o, f, y, N, B, z, H) {
    this.acceptsBooleans = f === 2 || f === 3 || f === 4, this.attributeName = N, this.attributeNamespace = B, this.mustUseProperty = y, this.propertyName = o, this.type = f, this.sanitizeURL = z, this.removeEmptyString = H;
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    L[o] = new x(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var f = o[0];
    L[f] = new x(f, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    L[o] = new x(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    L[o] = new x(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    L[o] = new x(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    L[o] = new x(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    L[o] = new x(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    L[o] = new x(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    L[o] = new x(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function R(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var f = o.replace(
      T,
      R
    );
    L[f] = new x(f, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var f = o.replace(T, R);
    L[f] = new x(f, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var f = o.replace(T, R);
    L[f] = new x(f, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    L[o] = new x(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), L.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    L[o] = new x(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var k = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ee = ["Webkit", "ms", "Moz", "O"];
  Object.keys(k).forEach(function(o) {
    ee.forEach(function(f) {
      f = f + o.charAt(0).toUpperCase() + o.substring(1), k[f] = k[o];
    });
  });
  var fe = /["'&<>]/;
  function re(o) {
    if (typeof o == "boolean" || typeof o == "number")
      return "" + o;
    o = "" + o;
    var f = fe.exec(o);
    if (f) {
      var y = "", N, B = 0;
      for (N = f.index; N < o.length; N++) {
        switch (o.charCodeAt(N)) {
          case 34:
            f = "&quot;";
            break;
          case 38:
            f = "&amp;";
            break;
          case 39:
            f = "&#x27;";
            break;
          case 60:
            f = "&lt;";
            break;
          case 62:
            f = "&gt;";
            break;
          default:
            continue;
        }
        B !== N && (y += o.substring(B, N)), B = N + 1, y += f;
      }
      o = B !== N ? y + o.substring(B, N) : y;
    }
    return o;
  }
  var Ae = /([A-Z])/g, W = /^ms-/, O = Array.isArray;
  function G(o, f) {
    return { insertionMode: o, selectedValue: f };
  }
  function X(o, f, y) {
    switch (f) {
      case "select":
        return G(1, y.value != null ? y.value : y.defaultValue);
      case "svg":
        return G(2, null);
      case "math":
        return G(3, null);
      case "foreignObject":
        return G(1, null);
      case "table":
        return G(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return G(5, null);
      case "colgroup":
        return G(7, null);
      case "tr":
        return G(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? G(1, null) : o;
  }
  var $ = /* @__PURE__ */ new Map();
  function Q(o, f, y) {
    if (typeof y != "object")
      throw Error(a(62));
    f = !0;
    for (var N in y)
      if (M.call(y, N)) {
        var B = y[N];
        if (B != null && typeof B != "boolean" && B !== "") {
          if (N.indexOf("--") === 0) {
            var z = re(N);
            B = re(("" + B).trim());
          } else {
            z = N;
            var H = $.get(z);
            H !== void 0 || (H = re(z.replace(Ae, "-$1").toLowerCase().replace(W, "-ms-")), $.set(z, H)), z = H, B = typeof B == "number" ? B === 0 || M.call(k, N) ? "" + B : B + "px" : re(("" + B).trim());
          }
          f ? (f = !1, o.push(' style="', z, ":", B)) : o.push(";", z, ":", B);
        }
      }
    f || o.push('"');
  }
  function se(o, f, y, N) {
    switch (y) {
      case "style":
        Q(o, f, N);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < y.length) || y[0] !== "o" && y[0] !== "O" || y[1] !== "n" && y[1] !== "N") {
      if (f = L.hasOwnProperty(y) ? L[y] : null, f !== null) {
        switch (typeof N) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!f.acceptsBooleans)
              return;
        }
        switch (y = f.attributeName, f.type) {
          case 3:
            N && o.push(" ", y, '=""');
            break;
          case 4:
            N === !0 ? o.push(" ", y, '=""') : N !== !1 && o.push(" ", y, '="', re(N), '"');
            break;
          case 5:
            isNaN(N) || o.push(" ", y, '="', re(N), '"');
            break;
          case 6:
            !isNaN(N) && 1 <= N && o.push(" ", y, '="', re(N), '"');
            break;
          default:
            f.sanitizeURL && (N = "" + N), o.push(" ", y, '="', re(N), '"');
        }
      } else if (b(y)) {
        switch (typeof N) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (f = y.toLowerCase().slice(0, 5), f !== "data-" && f !== "aria-")
              return;
        }
        o.push(" ", y, '="', re(N), '"');
      }
    }
  }
  function ne(o, f, y) {
    if (f != null) {
      if (y != null)
        throw Error(a(60));
      if (typeof f != "object" || !("__html" in f))
        throw Error(a(61));
      f = f.__html, f != null && o.push("" + f);
    }
  }
  function Pe(o) {
    var f = "";
    return s.Children.forEach(o, function(y) {
      y != null && (f += y);
    }), f;
  }
  function De(o, f, y, N) {
    o.push(Qe(y));
    var B = y = null, z;
    for (z in f)
      if (M.call(f, z)) {
        var H = f[z];
        if (H != null)
          switch (z) {
            case "children":
              y = H;
              break;
            case "dangerouslySetInnerHTML":
              B = H;
              break;
            default:
              se(o, N, z, H);
          }
      }
    return o.push(">"), ne(o, B, y), typeof y == "string" ? (o.push(re(y)), null) : y;
  }
  var Le = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, je = /* @__PURE__ */ new Map();
  function Qe(o) {
    var f = je.get(o);
    if (f === void 0) {
      if (!Le.test(o))
        throw Error(a(65, o));
      f = "<" + o, je.set(o, f);
    }
    return f;
  }
  function _e(o, f, y, N, B) {
    switch (f) {
      case "select":
        o.push(Qe("select"));
        var z = null, H = null;
        for (we in y)
          if (M.call(y, we)) {
            var te = y[we];
            if (te != null)
              switch (we) {
                case "children":
                  z = te;
                  break;
                case "dangerouslySetInnerHTML":
                  H = te;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  se(o, N, we, te);
              }
          }
        return o.push(">"), ne(o, H, z), z;
      case "option":
        H = B.selectedValue, o.push(Qe("option"));
        var he = te = null, be = null, we = null;
        for (z in y)
          if (M.call(y, z)) {
            var et = y[z];
            if (et != null)
              switch (z) {
                case "children":
                  te = et;
                  break;
                case "selected":
                  be = et;
                  break;
                case "dangerouslySetInnerHTML":
                  we = et;
                  break;
                case "value":
                  he = et;
                default:
                  se(o, N, z, et);
              }
          }
        if (H != null)
          if (y = he !== null ? "" + he : Pe(te), O(H)) {
            for (N = 0; N < H.length; N++)
              if ("" + H[N] === y) {
                o.push(' selected=""');
                break;
              }
          } else
            "" + H === y && o.push(' selected=""');
        else
          be && o.push(' selected=""');
        return o.push(">"), ne(o, we, te), te;
      case "textarea":
        o.push(Qe("textarea")), we = H = z = null;
        for (te in y)
          if (M.call(y, te) && (he = y[te], he != null))
            switch (te) {
              case "children":
                we = he;
                break;
              case "value":
                z = he;
                break;
              case "defaultValue":
                H = he;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(a(91));
              default:
                se(
                  o,
                  N,
                  te,
                  he
                );
            }
        if (z === null && H !== null && (z = H), o.push(">"), we != null) {
          if (z != null)
            throw Error(a(92));
          if (O(we) && 1 < we.length)
            throw Error(a(93));
          z = "" + we;
        }
        return typeof z == "string" && z[0] === `
` && o.push(`
`), z !== null && o.push(re("" + z)), null;
      case "input":
        o.push(Qe("input")), he = we = te = z = null;
        for (H in y)
          if (M.call(y, H) && (be = y[H], be != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(399, "input"));
              case "defaultChecked":
                he = be;
                break;
              case "defaultValue":
                te = be;
                break;
              case "checked":
                we = be;
                break;
              case "value":
                z = be;
                break;
              default:
                se(o, N, H, be);
            }
        return we !== null ? se(o, N, "checked", we) : he !== null && se(o, N, "checked", he), z !== null ? se(o, N, "value", z) : te !== null && se(o, N, "value", te), o.push("/>"), null;
      case "menuitem":
        o.push(Qe("menuitem"));
        for (var Gt in y)
          if (M.call(y, Gt) && (z = y[Gt], z != null))
            switch (Gt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(400));
              default:
                se(o, N, Gt, z);
            }
        return o.push(">"), null;
      case "title":
        o.push(Qe("title")), z = null;
        for (et in y)
          if (M.call(y, et) && (H = y[et], H != null))
            switch (et) {
              case "children":
                z = H;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(a(434));
              default:
                se(o, N, et, H);
            }
        return o.push(">"), z;
      case "listing":
      case "pre":
        o.push(Qe(f)), H = z = null;
        for (he in y)
          if (M.call(y, he) && (te = y[he], te != null))
            switch (he) {
              case "children":
                z = te;
                break;
              case "dangerouslySetInnerHTML":
                H = te;
                break;
              default:
                se(o, N, he, te);
            }
        if (o.push(">"), H != null) {
          if (z != null)
            throw Error(a(60));
          if (typeof H != "object" || !("__html" in H))
            throw Error(a(61));
          y = H.__html, y != null && (typeof y == "string" && 0 < y.length && y[0] === `
` ? o.push(`
`, y) : o.push("" + y));
        }
        return typeof z == "string" && z[0] === `
` && o.push(`
`), z;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        o.push(Qe(f));
        for (var Qt in y)
          if (M.call(y, Qt) && (z = y[Qt], z != null))
            switch (Qt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(399, f));
              default:
                se(o, N, Qt, z);
            }
        return o.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return De(
          o,
          y,
          f,
          N
        );
      case "html":
        return B.insertionMode === 0 && o.push("<!DOCTYPE html>"), De(o, y, f, N);
      default:
        if (f.indexOf("-") === -1 && typeof y.is != "string")
          return De(o, y, f, N);
        o.push(Qe(f)), H = z = null;
        for (be in y)
          if (M.call(y, be) && (te = y[be], te != null))
            switch (be) {
              case "children":
                z = te;
                break;
              case "dangerouslySetInnerHTML":
                H = te;
                break;
              case "style":
                Q(o, N, te);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                b(be) && typeof te != "function" && typeof te != "symbol" && o.push(" ", be, '="', re(te), '"');
            }
        return o.push(">"), ne(o, H, z), z;
    }
  }
  function Ne(o, f, y) {
    if (o.push('<!--$?--><template id="'), y === null)
      throw Error(a(395));
    return o.push(y), o.push('"></template>');
  }
  function Ze(o, f, y, N) {
    switch (y.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(f.segmentPrefix), f = N.toString(16), o.push(f), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(f.segmentPrefix), f = N.toString(16), o.push(f), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(f.segmentPrefix), f = N.toString(16), o.push(f), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(f.segmentPrefix), f = N.toString(16), o.push(f), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(f.segmentPrefix), f = N.toString(16), o.push(f), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(f.segmentPrefix), f = N.toString(16), o.push(f), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(f.segmentPrefix), f = N.toString(16), o.push(f), o.push('">');
      default:
        throw Error(a(397));
    }
  }
  function Ge(o, f) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return o.push("</div>");
      case 2:
        return o.push("</svg>");
      case 3:
        return o.push("</math>");
      case 4:
        return o.push("</table>");
      case 5:
        return o.push("</tbody></table>");
      case 6:
        return o.push("</tr></table>");
      case 7:
        return o.push("</colgroup></table>");
      default:
        throw Error(a(397));
    }
  }
  var $e = /[<\u2028\u2029]/g;
  function lt(o) {
    return JSON.stringify(o).replace($e, function(f) {
      switch (f) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function At(o, f) {
    return f = f === void 0 ? "" : f, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: f + "P:", segmentPrefix: f + "S:", boundaryPrefix: f + "B:", idPrefix: f, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function J(o, f, y, N) {
    return y.generateStaticMarkup ? (o.push(re(f)), !1) : (f === "" ? o = N : (N && o.push("<!-- -->"), o.push(re(f)), o = !0), o);
  }
  var K = Object.assign, le = Symbol.for("react.element"), Ie = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), ve = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), ke = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), xe = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), ut = Symbol.for("react.scope"), zt = Symbol.for("react.debug_trace_mode"), wt = Symbol.for("react.legacy_hidden"), tr = Symbol.for("react.default_value"), St = Symbol.iterator;
  function Ot(o) {
    if (o == null)
      return null;
    if (typeof o == "function")
      return o.displayName || o.name || null;
    if (typeof o == "string")
      return o;
    switch (o) {
      case pe:
        return "Fragment";
      case Ie:
        return "Portal";
      case de:
        return "Profiler";
      case ve:
        return "StrictMode";
      case xe:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof o == "object")
      switch (o.$$typeof) {
        case ke:
          return (o.displayName || "Context") + ".Consumer";
        case me:
          return (o._context.displayName || "Context") + ".Provider";
        case Ee:
          var f = o.render;
          return o = o.displayName, o || (o = f.displayName || f.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
        case ie:
          return f = o.displayName || null, f !== null ? f : Ot(o.type) || "Memo";
        case Ke:
          f = o._payload, o = o._init;
          try {
            return Ot(o(f));
          } catch {
          }
      }
    return null;
  }
  var Wt = {};
  function Or(o, f) {
    if (o = o.contextTypes, !o)
      return Wt;
    var y = {}, N;
    for (N in o)
      y[N] = f[N];
    return y;
  }
  var xt = null;
  function jt(o, f) {
    if (o !== f) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var y = f.parent;
      if (o === null) {
        if (y !== null)
          throw Error(a(401));
      } else {
        if (y === null)
          throw Error(a(401));
        jt(o, y);
      }
      f.context._currentValue2 = f.value;
    }
  }
  function yt(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && yt(o);
  }
  function dr(o) {
    var f = o.parent;
    f !== null && dr(f), o.context._currentValue2 = o.value;
  }
  function gr(o, f) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null)
      throw Error(a(402));
    o.depth === f.depth ? jt(o, f) : gr(o, f);
  }
  function Pt(o, f) {
    var y = f.parent;
    if (y === null)
      throw Error(a(402));
    o.depth === y.depth ? jt(o, y) : Pt(o, y), f.context._currentValue2 = f.value;
  }
  function pt(o) {
    var f = xt;
    f !== o && (f === null ? dr(o) : o === null ? yt(f) : f.depth === o.depth ? jt(f, o) : f.depth > o.depth ? gr(f, o) : Pt(f, o), xt = o);
  }
  var Mr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, f) {
    o = o._reactInternals, o.queue !== null && o.queue.push(f);
  }, enqueueReplaceState: function(o, f) {
    o = o._reactInternals, o.replace = !0, o.queue = [f];
  }, enqueueForceUpdate: function() {
  } };
  function Tr(o, f, y, N) {
    var B = o.state !== void 0 ? o.state : null;
    o.updater = Mr, o.props = y, o.state = B;
    var z = { queue: [], replace: !1 };
    o._reactInternals = z;
    var H = f.contextType;
    if (o.context = typeof H == "object" && H !== null ? H._currentValue2 : N, H = f.getDerivedStateFromProps, typeof H == "function" && (H = H(y, B), B = H == null ? B : K({}, B, H), o.state = B), typeof f.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function"))
      if (f = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), f !== o.state && Mr.enqueueReplaceState(o, o.state, null), z.queue !== null && 0 < z.queue.length)
        if (f = z.queue, H = z.replace, z.queue = null, z.replace = !1, H && f.length === 1)
          o.state = f[0];
        else {
          for (z = H ? f[0] : o.state, B = !0, H = H ? 1 : 0; H < f.length; H++) {
            var te = f[H];
            te = typeof te == "function" ? te.call(o, z, y, N) : te, te != null && (B ? (B = !1, z = K({}, z, te)) : K(z, te));
          }
          o.state = z;
        }
      else
        z.queue = null;
  }
  var rr = { id: 1, overflow: "" };
  function pr(o, f, y) {
    var N = o.id;
    o = o.overflow;
    var B = 32 - nr(N) - 1;
    N &= ~(1 << B), y += 1;
    var z = 32 - nr(f) + B;
    if (30 < z) {
      var H = B - B % 5;
      return z = (N & (1 << H) - 1).toString(32), N >>= H, B -= H, { id: 1 << 32 - nr(f) + B | y << B | N, overflow: z + o };
    }
    return { id: 1 << z | y << B | N, overflow: o };
  }
  var nr = Math.clz32 ? Math.clz32 : Zt, Pr = Math.log, hr = Math.LN2;
  function Zt(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Pr(o) / hr | 0) | 0;
  }
  function yr(o, f) {
    return o === f && (o !== 0 || 1 / o === 1 / f) || o !== o && f !== f;
  }
  var mr = typeof Object.is == "function" ? Object.is : yr, It = null, ae = null, Me = null, ce = null, Ce = !1, Ue = !1, Fe = 0, Ye = null, at = 0;
  function ct() {
    if (It === null)
      throw Error(a(321));
    return It;
  }
  function Xe() {
    if (0 < at)
      throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function kt() {
    return ce === null ? Me === null ? (Ce = !1, Me = ce = Xe()) : (Ce = !0, ce = Me) : ce.next === null ? (Ce = !1, ce = ce.next = Xe()) : (Ce = !0, ce = ce.next), ce;
  }
  function Et() {
    ae = It = null, Ue = !1, Me = null, at = 0, ce = Ye = null;
  }
  function or(o, f) {
    return typeof f == "function" ? f(o) : f;
  }
  function vt(o, f, y) {
    if (It = ct(), ce = kt(), Ce) {
      var N = ce.queue;
      if (f = N.dispatch, Ye !== null && (y = Ye.get(N), y !== void 0)) {
        Ye.delete(N), N = ce.memoizedState;
        do
          N = o(N, y.action), y = y.next;
        while (y !== null);
        return ce.memoizedState = N, [N, f];
      }
      return [ce.memoizedState, f];
    }
    return o = o === or ? typeof f == "function" ? f() : f : y !== void 0 ? y(f) : f, ce.memoizedState = o, o = ce.queue = { last: null, dispatch: null }, o = o.dispatch = vn.bind(null, It, o), [ce.memoizedState, o];
  }
  function Xr(o, f) {
    if (It = ct(), ce = kt(), f = f === void 0 ? null : f, ce !== null) {
      var y = ce.memoizedState;
      if (y !== null && f !== null) {
        var N = y[1];
        e:
          if (N === null)
            N = !1;
          else {
            for (var B = 0; B < N.length && B < f.length; B++)
              if (!mr(f[B], N[B])) {
                N = !1;
                break e;
              }
            N = !0;
          }
        if (N)
          return y[0];
      }
    }
    return o = o(), ce.memoizedState = [o, f], o;
  }
  function vn(o, f, y) {
    if (25 <= at)
      throw Error(a(301));
    if (o === It)
      if (Ue = !0, o = { action: y, next: null }, Ye === null && (Ye = /* @__PURE__ */ new Map()), y = Ye.get(f), y === void 0)
        Ye.set(f, o);
      else {
        for (f = y; f.next !== null; )
          f = f.next;
        f.next = o;
      }
  }
  function Dn() {
    throw Error(a(394));
  }
  function $t() {
  }
  var j = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return ct(), o._currentValue2;
  }, useMemo: Xr, useReducer: vt, useRef: function(o) {
    It = ct(), ce = kt();
    var f = ce.memoizedState;
    return f === null ? (o = { current: o }, ce.memoizedState = o) : f;
  }, useState: function(o) {
    return vt(or, o);
  }, useInsertionEffect: $t, useLayoutEffect: function() {
  }, useCallback: function(o, f) {
    return Xr(function() {
      return o;
    }, f);
  }, useImperativeHandle: $t, useEffect: $t, useDebugValue: $t, useDeferredValue: function(o) {
    return ct(), o;
  }, useTransition: function() {
    return ct(), [
      !1,
      Dn
    ];
  }, useId: function() {
    var o = ae.treeContext, f = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - nr(o) - 1)).toString(32) + f;
    var y = q;
    if (y === null)
      throw Error(a(404));
    return f = Fe++, o = ":" + y.idPrefix + "R" + o, 0 < f && (o += "H" + f.toString(32)), o + ":";
  }, useMutableSource: function(o, f) {
    return ct(), f(o._source);
  }, useSyncExternalStore: function(o, f, y) {
    if (y === void 0)
      throw Error(a(407));
    return y();
  } }, q = null, ue = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Se(o) {
    return console.error(o), null;
  }
  function He() {
  }
  function rt(o, f, y, N, B, z, H, te, he) {
    var be = [], we = /* @__PURE__ */ new Set();
    return f = { destination: null, responseState: f, progressiveChunkSize: N === void 0 ? 12800 : N, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: we, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: B === void 0 ? Se : B, onAllReady: z === void 0 ? He : z, onShellReady: H === void 0 ? He : H, onShellError: te === void 0 ? He : te, onFatalError: he === void 0 ? He : he }, y = Be(f, 0, null, y, !1, !1), y.parentFlushed = !0, o = We(f, o, null, y, we, Wt, null, rr), be.push(o), f;
  }
  function We(o, f, y, N, B, z, H, te) {
    o.allPendingTasks++, y === null ? o.pendingRootTasks++ : y.pendingTasks++;
    var he = { node: f, ping: function() {
      var be = o.pingedTasks;
      be.push(he), be.length === 1 && Ht(o);
    }, blockedBoundary: y, blockedSegment: N, abortSet: B, legacyContext: z, context: H, treeContext: te };
    return B.add(he), he;
  }
  function Be(o, f, y, N, B, z) {
    return { status: 0, id: -1, index: f, parentFlushed: !1, chunks: [], children: [], formatContext: N, boundary: y, lastPushedText: B, textEmbedded: z };
  }
  function ht(o, f) {
    if (o = o.onError(f), o != null && typeof o != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function nt(o, f) {
    var y = o.onShellError;
    y(f), y = o.onFatalError, y(f), o.destination !== null ? (o.status = 2, o.destination.destroy(f)) : (o.status = 1, o.fatalError = f);
  }
  function ot(o, f, y, N, B) {
    for (It = {}, ae = f, Fe = 0, o = y(N, B); Ue; )
      Ue = !1, Fe = 0, at += 1, ce = null, o = y(N, B);
    return Et(), o;
  }
  function Tt(o, f, y, N) {
    var B = y.render(), z = N.childContextTypes;
    if (z != null) {
      var H = f.legacyContext;
      if (typeof y.getChildContext != "function")
        N = H;
      else {
        y = y.getChildContext();
        for (var te in y)
          if (!(te in z))
            throw Error(a(108, Ot(N) || "Unknown", te));
        N = K({}, H, y);
      }
      f.legacyContext = N, Je(o, f, B), f.legacyContext = H;
    } else
      Je(o, f, B);
  }
  function Rt(o, f) {
    if (o && o.defaultProps) {
      f = K({}, f), o = o.defaultProps;
      for (var y in o)
        f[y] === void 0 && (f[y] = o[y]);
      return f;
    }
    return f;
  }
  function mt(o, f, y, N, B) {
    if (typeof y == "function")
      if (y.prototype && y.prototype.isReactComponent) {
        B = Or(y, f.legacyContext);
        var z = y.contextType;
        z = new y(N, typeof z == "object" && z !== null ? z._currentValue2 : B), Tr(z, y, N, B), Tt(o, f, z, y);
      } else {
        z = Or(y, f.legacyContext), B = ot(o, f, y, N, z);
        var H = Fe !== 0;
        if (typeof B == "object" && B !== null && typeof B.render == "function" && B.$$typeof === void 0)
          Tr(B, y, N, z), Tt(o, f, B, y);
        else if (H) {
          N = f.treeContext, f.treeContext = pr(N, 1, 0);
          try {
            Je(o, f, B);
          } finally {
            f.treeContext = N;
          }
        } else
          Je(o, f, B);
      }
    else if (typeof y == "string") {
      switch (B = f.blockedSegment, z = _e(B.chunks, y, N, o.responseState, B.formatContext), B.lastPushedText = !1, H = B.formatContext, B.formatContext = X(H, y, N), Vt(o, f, z), B.formatContext = H, y) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          B.chunks.push("</", y, ">");
      }
      B.lastPushedText = !1;
    } else {
      switch (y) {
        case wt:
        case zt:
        case ve:
        case de:
        case pe:
          Je(o, f, N.children);
          return;
        case qe:
          Je(o, f, N.children);
          return;
        case ut:
          throw Error(a(343));
        case xe:
          e: {
            y = f.blockedBoundary, B = f.blockedSegment, z = N.fallback, N = N.children, H = /* @__PURE__ */ new Set();
            var te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: H, errorDigest: null }, he = Be(o, B.chunks.length, te, B.formatContext, !1, !1);
            B.children.push(he), B.lastPushedText = !1;
            var be = Be(o, 0, null, B.formatContext, !1, !1);
            be.parentFlushed = !0, f.blockedBoundary = te, f.blockedSegment = be;
            try {
              if (Vt(
                o,
                f,
                N
              ), o.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, vr(te, be), te.pendingTasks === 0)
                break e;
            } catch (we) {
              be.status = 4, te.forceClientRender = !0, te.errorDigest = ht(o, we);
            } finally {
              f.blockedBoundary = y, f.blockedSegment = B;
            }
            f = We(o, z, y, he, H, f.legacyContext, f.context, f.treeContext), o.pingedTasks.push(f);
          }
          return;
      }
      if (typeof y == "object" && y !== null)
        switch (y.$$typeof) {
          case Ee:
            if (N = ot(o, f, y.render, N, B), Fe !== 0) {
              y = f.treeContext, f.treeContext = pr(y, 1, 0);
              try {
                Je(o, f, N);
              } finally {
                f.treeContext = y;
              }
            } else
              Je(o, f, N);
            return;
          case ie:
            y = y.type, N = Rt(y, N), mt(o, f, y, N, B);
            return;
          case me:
            if (B = N.children, y = y._context, N = N.value, z = y._currentValue2, y._currentValue2 = N, H = xt, xt = N = { parent: H, depth: H === null ? 0 : H.depth + 1, context: y, parentValue: z, value: N }, f.context = N, Je(o, f, B), o = xt, o === null)
              throw Error(a(403));
            N = o.parentValue, o.context._currentValue2 = N === tr ? o.context._defaultValue : N, o = xt = o.parent, f.context = o;
            return;
          case ke:
            N = N.children, N = N(y._currentValue2), Je(o, f, N);
            return;
          case Ke:
            B = y._init, y = B(y._payload), N = Rt(y, N), mt(
              o,
              f,
              y,
              N,
              void 0
            );
            return;
        }
      throw Error(a(130, y == null ? y : typeof y, ""));
    }
  }
  function Je(o, f, y) {
    if (f.node = y, typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case le:
          mt(o, f, y.type, y.props, y.ref);
          return;
        case Ie:
          throw Error(a(257));
        case Ke:
          var N = y._init;
          y = N(y._payload), Je(o, f, y);
          return;
      }
      if (O(y)) {
        Ft(o, f, y);
        return;
      }
      if (y === null || typeof y != "object" ? N = null : (N = St && y[St] || y["@@iterator"], N = typeof N == "function" ? N : null), N && (N = N.call(y))) {
        if (y = N.next(), !y.done) {
          var B = [];
          do
            B.push(y.value), y = N.next();
          while (!y.done);
          Ft(o, f, B);
        }
        return;
      }
      throw o = Object.prototype.toString.call(y), Error(a(31, o === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : o));
    }
    typeof y == "string" ? (N = f.blockedSegment, N.lastPushedText = J(f.blockedSegment.chunks, y, o.responseState, N.lastPushedText)) : typeof y == "number" && (N = f.blockedSegment, N.lastPushedText = J(f.blockedSegment.chunks, "" + y, o.responseState, N.lastPushedText));
  }
  function Ft(o, f, y) {
    for (var N = y.length, B = 0; B < N; B++) {
      var z = f.treeContext;
      f.treeContext = pr(z, N, B);
      try {
        Vt(o, f, y[B]);
      } finally {
        f.treeContext = z;
      }
    }
  }
  function Vt(o, f, y) {
    var N = f.blockedSegment.formatContext, B = f.legacyContext, z = f.context;
    try {
      return Je(o, f, y);
    } catch (he) {
      if (Et(), typeof he == "object" && he !== null && typeof he.then == "function") {
        y = he;
        var H = f.blockedSegment, te = Be(o, H.chunks.length, null, H.formatContext, H.lastPushedText, !0);
        H.children.push(te), H.lastPushedText = !1, o = We(o, f.node, f.blockedBoundary, te, f.abortSet, f.legacyContext, f.context, f.treeContext).ping, y.then(o, o), f.blockedSegment.formatContext = N, f.legacyContext = B, f.context = z, pt(z);
      } else
        throw f.blockedSegment.formatContext = N, f.legacyContext = B, f.context = z, pt(z), he;
    }
  }
  function Ct(o) {
    var f = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, Dr(this, f, o);
  }
  function on(o, f, y) {
    var N = o.blockedBoundary;
    o.blockedSegment.status = 3, N === null ? (f.allPendingTasks--, f.status !== 2 && (f.status = 2, f.destination !== null && f.destination.push(null))) : (N.pendingTasks--, N.forceClientRender || (N.forceClientRender = !0, o = y === void 0 ? Error(a(432)) : y, N.errorDigest = f.onError(o), N.parentFlushed && f.clientRenderedBoundaries.push(N)), N.fallbackAbortableTasks.forEach(function(B) {
      return on(B, f, y);
    }), N.fallbackAbortableTasks.clear(), f.allPendingTasks--, f.allPendingTasks === 0 && (N = f.onAllReady, N()));
  }
  function vr(o, f) {
    if (f.chunks.length === 0 && f.children.length === 1 && f.children[0].boundary === null) {
      var y = f.children[0];
      y.id = f.id, y.parentFlushed = !0, y.status === 1 && vr(o, y);
    } else
      o.completedSegments.push(f);
  }
  function Dr(o, f, y) {
    if (f === null) {
      if (y.parentFlushed) {
        if (o.completedRootSegment !== null)
          throw Error(a(389));
        o.completedRootSegment = y;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = He, f = o.onShellReady, f());
    } else
      f.pendingTasks--, f.forceClientRender || (f.pendingTasks === 0 ? (y.parentFlushed && y.status === 1 && vr(f, y), f.parentFlushed && o.completedBoundaries.push(f), f.fallbackAbortableTasks.forEach(Ct, o), f.fallbackAbortableTasks.clear()) : y.parentFlushed && y.status === 1 && (vr(f, y), f.completedSegments.length === 1 && f.parentFlushed && o.partialBoundaries.push(f)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function Ht(o) {
    if (o.status !== 2) {
      var f = xt, y = ue.current;
      ue.current = j;
      var N = q;
      q = o.responseState;
      try {
        var B = o.pingedTasks, z;
        for (z = 0; z < B.length; z++) {
          var H = B[z], te = o, he = H.blockedSegment;
          if (he.status === 0) {
            pt(H.context);
            try {
              Je(te, H, H.node), te.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), H.abortSet.delete(H), he.status = 1, Dr(te, H.blockedBoundary, he);
            } catch (Bt) {
              if (Et(), typeof Bt == "object" && Bt !== null && typeof Bt.then == "function") {
                var be = H.ping;
                Bt.then(be, be);
              } else {
                H.abortSet.delete(H), he.status = 4;
                var we = H.blockedBoundary, et = Bt, Gt = ht(te, et);
                if (we === null ? nt(te, et) : (we.pendingTasks--, we.forceClientRender || (we.forceClientRender = !0, we.errorDigest = Gt, we.parentFlushed && te.clientRenderedBoundaries.push(we))), te.allPendingTasks--, te.allPendingTasks === 0) {
                  var Qt = te.onAllReady;
                  Qt();
                }
              }
            } finally {
            }
          }
        }
        B.splice(0, z), o.destination !== null && Br(o, o.destination);
      } catch (Bt) {
        ht(o, Bt), nt(o, Bt);
      } finally {
        q = N, ue.current = y, y === j && pt(f);
      }
    }
  }
  function Er(o, f, y) {
    switch (y.parentFlushed = !0, y.status) {
      case 0:
        var N = y.id = o.nextSegmentId++;
        return y.lastPushedText = !1, y.textEmbedded = !1, o = o.responseState, f.push('<template id="'), f.push(o.placeholderPrefix), o = N.toString(16), f.push(o), f.push('"></template>');
      case 1:
        y.status = 2;
        var B = !0;
        N = y.chunks;
        var z = 0;
        y = y.children;
        for (var H = 0; H < y.length; H++) {
          for (B = y[H]; z < B.index; z++)
            f.push(N[z]);
          B = Qr(o, f, B);
        }
        for (; z < N.length - 1; z++)
          f.push(N[z]);
        return z < N.length && (B = f.push(N[z])), B;
      default:
        throw Error(a(390));
    }
  }
  function Qr(o, f, y) {
    var N = y.boundary;
    if (N === null)
      return Er(o, f, y);
    if (N.parentFlushed = !0, N.forceClientRender)
      return o.responseState.generateStaticMarkup || (N = N.errorDigest, f.push("<!--$!-->"), f.push("<template"), N && (f.push(' data-dgst="'), N = re(N), f.push(N), f.push('"')), f.push("></template>")), Er(o, f, y), o = o.responseState.generateStaticMarkup ? !0 : f.push("<!--/$-->"), o;
    if (0 < N.pendingTasks) {
      N.rootSegmentID = o.nextSegmentId++, 0 < N.completedSegments.length && o.partialBoundaries.push(N);
      var B = o.responseState, z = B.nextSuspenseID++;
      return B = B.boundaryPrefix + z.toString(16), N = N.id = B, Ne(f, o.responseState, N), Er(o, f, y), f.push("<!--/$-->");
    }
    if (N.byteSize > o.progressiveChunkSize)
      return N.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(N), Ne(f, o.responseState, N.id), Er(o, f, y), f.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || f.push("<!--$-->"), y = N.completedSegments, y.length !== 1)
      throw Error(a(391));
    return Qr(o, f, y[0]), o = o.responseState.generateStaticMarkup ? !0 : f.push("<!--/$-->"), o;
  }
  function Ln(o, f, y) {
    return Ze(f, o.responseState, y.formatContext, y.id), Qr(o, f, y), Ge(f, y.formatContext);
  }
  function Nn(o, f, y) {
    for (var N = y.completedSegments, B = 0; B < N.length; B++)
      An(o, f, y, N[B]);
    if (N.length = 0, o = o.responseState, N = y.id, y = y.rootSegmentID, f.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? f.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, f.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), N === null)
      throw Error(a(395));
    return y = y.toString(16), f.push(N), f.push('","'), f.push(o.segmentPrefix), f.push(y), f.push('")<\/script>');
  }
  function An(o, f, y, N) {
    if (N.status === 2)
      return !0;
    var B = N.id;
    if (B === -1) {
      if ((N.id = y.rootSegmentID) === -1)
        throw Error(a(392));
      return Ln(o, f, N);
    }
    return Ln(o, f, N), o = o.responseState, f.push(o.startInlineScript), o.sentCompleteSegmentFunction ? f.push('$RS("') : (o.sentCompleteSegmentFunction = !0, f.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), f.push(o.segmentPrefix), B = B.toString(16), f.push(B), f.push('","'), f.push(o.placeholderPrefix), f.push(B), f.push('")<\/script>');
  }
  function Br(o, f) {
    try {
      var y = o.completedRootSegment;
      if (y !== null && o.pendingRootTasks === 0) {
        Qr(o, f, y), o.completedRootSegment = null;
        var N = o.responseState.bootstrapChunks;
        for (y = 0; y < N.length - 1; y++)
          f.push(N[y]);
        y < N.length && f.push(N[y]);
      }
      var B = o.clientRenderedBoundaries, z;
      for (z = 0; z < B.length; z++) {
        var H = B[z];
        N = f;
        var te = o.responseState, he = H.id, be = H.errorDigest, we = H.errorMessage, et = H.errorComponentStack;
        if (N.push(te.startInlineScript), te.sentClientRenderFunction ? N.push('$RX("') : (te.sentClientRenderFunction = !0, N.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null)
          throw Error(a(395));
        if (N.push(he), N.push('"'), be || we || et) {
          N.push(",");
          var Gt = lt(be || "");
          N.push(Gt);
        }
        if (we || et) {
          N.push(",");
          var Qt = lt(we || "");
          N.push(Qt);
        }
        if (et) {
          N.push(",");
          var Bt = lt(et);
          N.push(Bt);
        }
        if (!N.push(")<\/script>")) {
          o.destination = null, z++, B.splice(0, z);
          return;
        }
      }
      B.splice(0, z);
      var Cr = o.completedBoundaries;
      for (z = 0; z < Cr.length; z++)
        if (!Nn(o, f, Cr[z])) {
          o.destination = null, z++, Cr.splice(0, z);
          return;
        }
      Cr.splice(0, z);
      var Ar = o.partialBoundaries;
      for (z = 0; z < Ar.length; z++) {
        var sn = Ar[z];
        e: {
          B = o, H = f;
          var Ur = sn.completedSegments;
          for (te = 0; te < Ur.length; te++)
            if (!An(B, H, sn, Ur[te])) {
              te++, Ur.splice(0, te);
              var Jr = !1;
              break e;
            }
          Ur.splice(0, te), Jr = !0;
        }
        if (!Jr) {
          o.destination = null, z++, Ar.splice(0, z);
          return;
        }
      }
      Ar.splice(0, z);
      var xr = o.completedBoundaries;
      for (z = 0; z < xr.length; z++)
        if (!Nn(o, f, xr[z])) {
          o.destination = null, z++, xr.splice(0, z);
          return;
        }
      xr.splice(0, z);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && f.push(null);
    }
  }
  function In(o, f) {
    try {
      var y = o.abortableTasks;
      y.forEach(function(N) {
        return on(N, o, f);
      }), y.clear(), o.destination !== null && Br(o, o.destination);
    } catch (N) {
      ht(o, N), nt(o, N);
    }
  }
  function an() {
  }
  function un(o, f, y, N) {
    var B = !1, z = null, H = "", te = { push: function(be) {
      return be !== null && (H += be), !0;
    }, destroy: function(be) {
      B = !0, z = be;
    } }, he = !1;
    if (o = rt(o, At(y, f ? f.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, an, void 0, function() {
      he = !0;
    }, void 0, void 0), Ht(o), In(o, N), o.status === 1)
      o.status = 2, te.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = te;
      try {
        Br(o, te);
      } catch (be) {
        ht(o, be), nt(o, be);
      }
    }
    if (B)
      throw z;
    if (!he)
      throw Error(a(426));
    return H;
  }
  return Ho.renderToNodeStream = function() {
    throw Error(a(207));
  }, Ho.renderToStaticMarkup = function(o, f) {
    return un(o, f, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ho.renderToStaticNodeStream = function() {
    throw Error(a(208));
  }, Ho.renderToString = function(o, f) {
    return un(o, f, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ho.version = "18.3.1", Ho;
}
var Pa = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function Ol() {
  if (ps)
    return Pa;
  ps = 1;
  var s = ao;
  function a(A) {
    for (var d = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, h = 1; h < arguments.length; h++)
      d += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + A + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var M = null, D = 0;
  function l(A, d) {
    if (d.length !== 0)
      if (512 < d.length)
        0 < D && (A.enqueue(new Uint8Array(M.buffer, 0, D)), M = new Uint8Array(512), D = 0), A.enqueue(d);
      else {
        var h = M.length - D;
        h < d.length && (h === 0 ? A.enqueue(M) : (M.set(d.subarray(0, h), D), A.enqueue(M), d = d.subarray(h)), M = new Uint8Array(512), D = 0), M.set(d, D), D += d.length;
      }
  }
  function E(A, d) {
    return l(A, d), !0;
  }
  function b(A) {
    M && 0 < D && (A.enqueue(new Uint8Array(M.buffer, 0, D)), M = null, D = 0);
  }
  var x = new TextEncoder();
  function L(A) {
    return x.encode(A);
  }
  function T(A) {
    return x.encode(A);
  }
  function R(A, d) {
    typeof A.error == "function" ? A.error(d) : A.close();
  }
  var k = Object.prototype.hasOwnProperty, ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = {}, re = {};
  function Ae(A) {
    return k.call(re, A) ? !0 : k.call(fe, A) ? !1 : ee.test(A) ? re[A] = !0 : (fe[A] = !0, !1);
  }
  function W(A, d, h, I, U, P, V) {
    this.acceptsBooleans = d === 2 || d === 3 || d === 4, this.attributeName = I, this.attributeNamespace = U, this.mustUseProperty = h, this.propertyName = A, this.type = d, this.sanitizeURL = P, this.removeEmptyString = V;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
    O[A] = new W(A, 0, !1, A, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
    var d = A[0];
    O[d] = new W(d, 1, !1, A[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
    O[A] = new W(A, 2, !1, A.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
    O[A] = new W(A, 2, !1, A, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
    O[A] = new W(A, 3, !1, A.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(A) {
    O[A] = new W(A, 3, !0, A, null, !1, !1);
  }), ["capture", "download"].forEach(function(A) {
    O[A] = new W(A, 4, !1, A, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(A) {
    O[A] = new W(A, 6, !1, A, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(A) {
    O[A] = new W(A, 5, !1, A.toLowerCase(), null, !1, !1);
  });
  var G = /[\-:]([a-z])/g;
  function X(A) {
    return A[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
    var d = A.replace(
      G,
      X
    );
    O[d] = new W(d, 1, !1, A, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
    var d = A.replace(G, X);
    O[d] = new W(d, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
    var d = A.replace(G, X);
    O[d] = new W(d, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(A) {
    O[A] = new W(A, 1, !1, A.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new W("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(A) {
    O[A] = new W(A, 1, !1, A.toLowerCase(), null, !0, !0);
  });
  var $ = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Q = ["Webkit", "ms", "Moz", "O"];
  Object.keys($).forEach(function(A) {
    Q.forEach(function(d) {
      d = d + A.charAt(0).toUpperCase() + A.substring(1), $[d] = $[A];
    });
  });
  var se = /["'&<>]/;
  function ne(A) {
    if (typeof A == "boolean" || typeof A == "number")
      return "" + A;
    A = "" + A;
    var d = se.exec(A);
    if (d) {
      var h = "", I, U = 0;
      for (I = d.index; I < A.length; I++) {
        switch (A.charCodeAt(I)) {
          case 34:
            d = "&quot;";
            break;
          case 38:
            d = "&amp;";
            break;
          case 39:
            d = "&#x27;";
            break;
          case 60:
            d = "&lt;";
            break;
          case 62:
            d = "&gt;";
            break;
          default:
            continue;
        }
        U !== I && (h += A.substring(U, I)), U = I + 1, h += d;
      }
      A = U !== I ? h + A.substring(U, I) : h;
    }
    return A;
  }
  var Pe = /([A-Z])/g, De = /^ms-/, Le = Array.isArray, je = T("<script>"), Qe = T("<\/script>"), _e = T('<script src="'), Ne = T('<script type="module" src="'), Ze = T('" async=""><\/script>'), Ge = /(<\/|<)(s)(cript)/gi;
  function $e(A, d, h, I) {
    return "" + d + (h === "s" ? "\\u0073" : "\\u0053") + I;
  }
  function lt(A, d, h, I, U) {
    A = A === void 0 ? "" : A, d = d === void 0 ? je : T('<script nonce="' + ne(d) + '">');
    var P = [];
    if (h !== void 0 && P.push(d, L(("" + h).replace(Ge, $e)), Qe), I !== void 0)
      for (h = 0; h < I.length; h++)
        P.push(_e, L(ne(I[h])), Ze);
    if (U !== void 0)
      for (I = 0; I < U.length; I++)
        P.push(Ne, L(ne(U[I])), Ze);
    return { bootstrapChunks: P, startInlineScript: d, placeholderPrefix: T(A + "P:"), segmentPrefix: T(A + "S:"), boundaryPrefix: A + "B:", idPrefix: A, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function At(A, d) {
    return { insertionMode: A, selectedValue: d };
  }
  function J(A) {
    return At(A === "http://www.w3.org/2000/svg" ? 2 : A === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function K(A, d, h) {
    switch (d) {
      case "select":
        return At(1, h.value != null ? h.value : h.defaultValue);
      case "svg":
        return At(2, null);
      case "math":
        return At(3, null);
      case "foreignObject":
        return At(1, null);
      case "table":
        return At(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return At(5, null);
      case "colgroup":
        return At(7, null);
      case "tr":
        return At(6, null);
    }
    return 4 <= A.insertionMode || A.insertionMode === 0 ? At(1, null) : A;
  }
  var le = T("<!-- -->");
  function Ie(A, d, h, I) {
    return d === "" ? I : (I && A.push(le), A.push(L(ne(d))), !0);
  }
  var pe = /* @__PURE__ */ new Map(), ve = T(' style="'), de = T(":"), me = T(";");
  function ke(A, d, h) {
    if (typeof h != "object")
      throw Error(a(62));
    d = !0;
    for (var I in h)
      if (k.call(h, I)) {
        var U = h[I];
        if (U != null && typeof U != "boolean" && U !== "") {
          if (I.indexOf("--") === 0) {
            var P = L(ne(I));
            U = L(ne(("" + U).trim()));
          } else {
            P = I;
            var V = pe.get(P);
            V !== void 0 || (V = T(ne(P.replace(Pe, "-$1").toLowerCase().replace(De, "-ms-"))), pe.set(P, V)), P = V, U = typeof U == "number" ? U === 0 || k.call($, I) ? L("" + U) : L(U + "px") : L(ne(("" + U).trim()));
          }
          d ? (d = !1, A.push(ve, P, de, U)) : A.push(me, P, de, U);
        }
      }
    d || A.push(qe);
  }
  var Ee = T(" "), xe = T('="'), qe = T('"'), ie = T('=""');
  function Ke(A, d, h, I) {
    switch (h) {
      case "style":
        ke(A, d, I);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (d = O.hasOwnProperty(h) ? O[h] : null, d !== null) {
        switch (typeof I) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!d.acceptsBooleans)
              return;
        }
        switch (h = L(d.attributeName), d.type) {
          case 3:
            I && A.push(Ee, h, ie);
            break;
          case 4:
            I === !0 ? A.push(Ee, h, ie) : I !== !1 && A.push(Ee, h, xe, L(ne(I)), qe);
            break;
          case 5:
            isNaN(I) || A.push(Ee, h, xe, L(ne(I)), qe);
            break;
          case 6:
            !isNaN(I) && 1 <= I && A.push(Ee, h, xe, L(ne(I)), qe);
            break;
          default:
            d.sanitizeURL && (I = "" + I), A.push(Ee, h, xe, L(ne(I)), qe);
        }
      } else if (Ae(h)) {
        switch (typeof I) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (d = h.toLowerCase().slice(0, 5), d !== "data-" && d !== "aria-")
              return;
        }
        A.push(Ee, L(h), xe, L(ne(I)), qe);
      }
    }
  }
  var ut = T(">"), zt = T("/>");
  function wt(A, d, h) {
    if (d != null) {
      if (h != null)
        throw Error(a(60));
      if (typeof d != "object" || !("__html" in d))
        throw Error(a(61));
      d = d.__html, d != null && A.push(L("" + d));
    }
  }
  function tr(A) {
    var d = "";
    return s.Children.forEach(A, function(h) {
      h != null && (d += h);
    }), d;
  }
  var St = T(' selected=""');
  function Ot(A, d, h, I) {
    A.push(jt(h));
    var U = h = null, P;
    for (P in d)
      if (k.call(d, P)) {
        var V = d[P];
        if (V != null)
          switch (P) {
            case "children":
              h = V;
              break;
            case "dangerouslySetInnerHTML":
              U = V;
              break;
            default:
              Ke(A, I, P, V);
          }
      }
    return A.push(ut), wt(A, U, h), typeof h == "string" ? (A.push(L(ne(h))), null) : h;
  }
  var Wt = T(`
`), Or = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xt = /* @__PURE__ */ new Map();
  function jt(A) {
    var d = xt.get(A);
    if (d === void 0) {
      if (!Or.test(A))
        throw Error(a(65, A));
      d = T("<" + A), xt.set(A, d);
    }
    return d;
  }
  var yt = T("<!DOCTYPE html>");
  function dr(A, d, h, I, U) {
    switch (d) {
      case "select":
        A.push(jt("select"));
        var P = null, V = null;
        for (Re in h)
          if (k.call(h, Re)) {
            var oe = h[Re];
            if (oe != null)
              switch (Re) {
                case "children":
                  P = oe;
                  break;
                case "dangerouslySetInnerHTML":
                  V = oe;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Ke(A, I, Re, oe);
              }
          }
        return A.push(ut), wt(A, V, P), P;
      case "option":
        V = U.selectedValue, A.push(jt("option"));
        var ze = oe = null, Ve = null, Re = null;
        for (P in h)
          if (k.call(h, P)) {
            var Mt = h[P];
            if (Mt != null)
              switch (P) {
                case "children":
                  oe = Mt;
                  break;
                case "selected":
                  Ve = Mt;
                  break;
                case "dangerouslySetInnerHTML":
                  Re = Mt;
                  break;
                case "value":
                  ze = Mt;
                default:
                  Ke(A, I, P, Mt);
              }
          }
        if (V != null)
          if (h = ze !== null ? "" + ze : tr(oe), Le(V)) {
            for (I = 0; I < V.length; I++)
              if ("" + V[I] === h) {
                A.push(St);
                break;
              }
          } else
            "" + V === h && A.push(St);
        else
          Ve && A.push(St);
        return A.push(ut), wt(A, Re, oe), oe;
      case "textarea":
        A.push(jt("textarea")), Re = V = P = null;
        for (oe in h)
          if (k.call(h, oe) && (ze = h[oe], ze != null))
            switch (oe) {
              case "children":
                Re = ze;
                break;
              case "value":
                P = ze;
                break;
              case "defaultValue":
                V = ze;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(a(91));
              default:
                Ke(A, I, oe, ze);
            }
        if (P === null && V !== null && (P = V), A.push(ut), Re != null) {
          if (P != null)
            throw Error(a(92));
          if (Le(Re) && 1 < Re.length)
            throw Error(a(93));
          P = "" + Re;
        }
        return typeof P == "string" && P[0] === `
` && A.push(Wt), P !== null && A.push(L(ne("" + P))), null;
      case "input":
        A.push(jt("input")), ze = Re = oe = P = null;
        for (V in h)
          if (k.call(h, V) && (Ve = h[V], Ve != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(399, "input"));
              case "defaultChecked":
                ze = Ve;
                break;
              case "defaultValue":
                oe = Ve;
                break;
              case "checked":
                Re = Ve;
                break;
              case "value":
                P = Ve;
                break;
              default:
                Ke(A, I, V, Ve);
            }
        return Re !== null ? Ke(
          A,
          I,
          "checked",
          Re
        ) : ze !== null && Ke(A, I, "checked", ze), P !== null ? Ke(A, I, "value", P) : oe !== null && Ke(A, I, "value", oe), A.push(zt), null;
      case "menuitem":
        A.push(jt("menuitem"));
        for (var Kt in h)
          if (k.call(h, Kt) && (P = h[Kt], P != null))
            switch (Kt) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(400));
              default:
                Ke(A, I, Kt, P);
            }
        return A.push(ut), null;
      case "title":
        A.push(jt("title")), P = null;
        for (Mt in h)
          if (k.call(h, Mt) && (V = h[Mt], V != null))
            switch (Mt) {
              case "children":
                P = V;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(a(434));
              default:
                Ke(A, I, Mt, V);
            }
        return A.push(ut), P;
      case "listing":
      case "pre":
        A.push(jt(d)), V = P = null;
        for (ze in h)
          if (k.call(h, ze) && (oe = h[ze], oe != null))
            switch (ze) {
              case "children":
                P = oe;
                break;
              case "dangerouslySetInnerHTML":
                V = oe;
                break;
              default:
                Ke(A, I, ze, oe);
            }
        if (A.push(ut), V != null) {
          if (P != null)
            throw Error(a(60));
          if (typeof V != "object" || !("__html" in V))
            throw Error(a(61));
          h = V.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? A.push(Wt, L(h)) : A.push(L("" + h)));
        }
        return typeof P == "string" && P[0] === `
` && A.push(Wt), P;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        A.push(jt(d));
        for (var ar in h)
          if (k.call(h, ar) && (P = h[ar], P != null))
            switch (ar) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(399, d));
              default:
                Ke(A, I, ar, P);
            }
        return A.push(zt), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ot(A, h, d, I);
      case "html":
        return U.insertionMode === 0 && A.push(yt), Ot(A, h, d, I);
      default:
        if (d.indexOf("-") === -1 && typeof h.is != "string")
          return Ot(A, h, d, I);
        A.push(jt(d)), V = P = null;
        for (Ve in h)
          if (k.call(h, Ve) && (oe = h[Ve], oe != null))
            switch (Ve) {
              case "children":
                P = oe;
                break;
              case "dangerouslySetInnerHTML":
                V = oe;
                break;
              case "style":
                ke(A, I, oe);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                Ae(Ve) && typeof oe != "function" && typeof oe != "symbol" && A.push(Ee, L(Ve), xe, L(ne(oe)), qe);
            }
        return A.push(ut), wt(A, V, P), P;
    }
  }
  var gr = T("</"), Pt = T(">"), pt = T('<template id="'), Mr = T('"></template>'), Tr = T("<!--$-->"), rr = T('<!--$?--><template id="'), pr = T('"></template>'), nr = T("<!--$!-->"), Pr = T("<!--/$-->"), hr = T("<template"), Zt = T('"'), yr = T(' data-dgst="');
  T(' data-msg="'), T(' data-stck="');
  var mr = T("></template>");
  function It(A, d, h) {
    if (l(A, rr), h === null)
      throw Error(a(395));
    return l(A, h), E(A, pr);
  }
  var ae = T('<div hidden id="'), Me = T('">'), ce = T("</div>"), Ce = T('<svg aria-hidden="true" style="display:none" id="'), Ue = T('">'), Fe = T("</svg>"), Ye = T('<math aria-hidden="true" style="display:none" id="'), at = T('">'), ct = T("</math>"), Xe = T('<table hidden id="'), kt = T('">'), Et = T("</table>"), or = T('<table hidden><tbody id="'), vt = T('">'), Xr = T("</tbody></table>"), vn = T('<table hidden><tr id="'), Dn = T('">'), $t = T("</tr></table>"), j = T('<table hidden><colgroup id="'), q = T('">'), ue = T("</colgroup></table>");
  function Se(A, d, h, I) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return l(A, ae), l(A, d.segmentPrefix), l(A, L(I.toString(16))), E(A, Me);
      case 2:
        return l(A, Ce), l(A, d.segmentPrefix), l(A, L(I.toString(16))), E(A, Ue);
      case 3:
        return l(A, Ye), l(A, d.segmentPrefix), l(A, L(I.toString(16))), E(A, at);
      case 4:
        return l(A, Xe), l(A, d.segmentPrefix), l(A, L(I.toString(16))), E(A, kt);
      case 5:
        return l(A, or), l(A, d.segmentPrefix), l(A, L(I.toString(16))), E(A, vt);
      case 6:
        return l(A, vn), l(A, d.segmentPrefix), l(A, L(I.toString(16))), E(A, Dn);
      case 7:
        return l(
          A,
          j
        ), l(A, d.segmentPrefix), l(A, L(I.toString(16))), E(A, q);
      default:
        throw Error(a(397));
    }
  }
  function He(A, d) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return E(A, ce);
      case 2:
        return E(A, Fe);
      case 3:
        return E(A, ct);
      case 4:
        return E(A, Et);
      case 5:
        return E(A, Xr);
      case 6:
        return E(A, $t);
      case 7:
        return E(A, ue);
      default:
        throw Error(a(397));
    }
  }
  var rt = T('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), We = T('$RS("'), Be = T('","'), ht = T('")<\/script>'), nt = T('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), ot = T('$RC("'), Tt = T('","'), Rt = T('")<\/script>'), mt = T('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Je = T('$RX("'), Ft = T('"'), Vt = T(")<\/script>"), Ct = T(","), on = /[<\u2028\u2029]/g;
  function vr(A) {
    return JSON.stringify(A).replace(on, function(d) {
      switch (d) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Dr = Object.assign, Ht = Symbol.for("react.element"), Er = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), Ln = Symbol.for("react.strict_mode"), Nn = Symbol.for("react.profiler"), An = Symbol.for("react.provider"), Br = Symbol.for("react.context"), In = Symbol.for("react.forward_ref"), an = Symbol.for("react.suspense"), un = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), y = Symbol.for("react.scope"), N = Symbol.for("react.debug_trace_mode"), B = Symbol.for("react.legacy_hidden"), z = Symbol.for("react.default_value"), H = Symbol.iterator;
  function te(A) {
    if (A == null)
      return null;
    if (typeof A == "function")
      return A.displayName || A.name || null;
    if (typeof A == "string")
      return A;
    switch (A) {
      case Qr:
        return "Fragment";
      case Er:
        return "Portal";
      case Nn:
        return "Profiler";
      case Ln:
        return "StrictMode";
      case an:
        return "Suspense";
      case un:
        return "SuspenseList";
    }
    if (typeof A == "object")
      switch (A.$$typeof) {
        case Br:
          return (A.displayName || "Context") + ".Consumer";
        case An:
          return (A._context.displayName || "Context") + ".Provider";
        case In:
          var d = A.render;
          return A = A.displayName, A || (A = d.displayName || d.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
        case o:
          return d = A.displayName || null, d !== null ? d : te(A.type) || "Memo";
        case f:
          d = A._payload, A = A._init;
          try {
            return te(A(d));
          } catch {
          }
      }
    return null;
  }
  var he = {};
  function be(A, d) {
    if (A = A.contextTypes, !A)
      return he;
    var h = {}, I;
    for (I in A)
      h[I] = d[I];
    return h;
  }
  var we = null;
  function et(A, d) {
    if (A !== d) {
      A.context._currentValue = A.parentValue, A = A.parent;
      var h = d.parent;
      if (A === null) {
        if (h !== null)
          throw Error(a(401));
      } else {
        if (h === null)
          throw Error(a(401));
        et(A, h);
      }
      d.context._currentValue = d.value;
    }
  }
  function Gt(A) {
    A.context._currentValue = A.parentValue, A = A.parent, A !== null && Gt(A);
  }
  function Qt(A) {
    var d = A.parent;
    d !== null && Qt(d), A.context._currentValue = A.value;
  }
  function Bt(A, d) {
    if (A.context._currentValue = A.parentValue, A = A.parent, A === null)
      throw Error(a(402));
    A.depth === d.depth ? et(A, d) : Bt(A, d);
  }
  function Cr(A, d) {
    var h = d.parent;
    if (h === null)
      throw Error(a(402));
    A.depth === h.depth ? et(A, h) : Cr(A, h), d.context._currentValue = d.value;
  }
  function Ar(A) {
    var d = we;
    d !== A && (d === null ? Qt(A) : A === null ? Gt(d) : d.depth === A.depth ? et(d, A) : d.depth > A.depth ? Bt(d, A) : Cr(d, A), we = A);
  }
  var sn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(A, d) {
    A = A._reactInternals, A.queue !== null && A.queue.push(d);
  }, enqueueReplaceState: function(A, d) {
    A = A._reactInternals, A.replace = !0, A.queue = [d];
  }, enqueueForceUpdate: function() {
  } };
  function Ur(A, d, h, I) {
    var U = A.state !== void 0 ? A.state : null;
    A.updater = sn, A.props = h, A.state = U;
    var P = { queue: [], replace: !1 };
    A._reactInternals = P;
    var V = d.contextType;
    if (A.context = typeof V == "object" && V !== null ? V._currentValue : I, V = d.getDerivedStateFromProps, typeof V == "function" && (V = V(h, U), U = V == null ? U : Dr({}, U, V), A.state = U), typeof d.getDerivedStateFromProps != "function" && typeof A.getSnapshotBeforeUpdate != "function" && (typeof A.UNSAFE_componentWillMount == "function" || typeof A.componentWillMount == "function"))
      if (d = A.state, typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount(), d !== A.state && sn.enqueueReplaceState(A, A.state, null), P.queue !== null && 0 < P.queue.length)
        if (d = P.queue, V = P.replace, P.queue = null, P.replace = !1, V && d.length === 1)
          A.state = d[0];
        else {
          for (P = V ? d[0] : A.state, U = !0, V = V ? 1 : 0; V < d.length; V++) {
            var oe = d[V];
            oe = typeof oe == "function" ? oe.call(A, P, h, I) : oe, oe != null && (U ? (U = !1, P = Dr({}, P, oe)) : Dr(P, oe));
          }
          A.state = P;
        }
      else
        P.queue = null;
  }
  var Jr = { id: 1, overflow: "" };
  function xr(A, d, h) {
    var I = A.id;
    A = A.overflow;
    var U = 32 - wn(I) - 1;
    I &= ~(1 << U), h += 1;
    var P = 32 - wn(d) + U;
    if (30 < P) {
      var V = U - U % 5;
      return P = (I & (1 << V) - 1).toString(32), I >>= V, U -= V, { id: 1 << 32 - wn(d) + U | h << U | I, overflow: P + A };
    }
    return { id: 1 << P | h << U | I, overflow: A };
  }
  var wn = Math.clz32 ? Math.clz32 : uo, GA = Math.log, XA = Math.LN2;
  function uo(A) {
    return A >>>= 0, A === 0 ? 32 : 31 - (GA(A) / XA | 0) | 0;
  }
  function JA(A, d) {
    return A === d && (A !== 0 || 1 / A === 1 / d) || A !== A && d !== d;
  }
  var so = typeof Object.is == "function" ? Object.is : JA, br = null, Sn = null, Bn = null, ft = null, Yr = !1, Xt = !1, Kr = 0, Rr = null, Un = 0;
  function Fr() {
    if (br === null)
      throw Error(a(321));
    return br;
  }
  function ir() {
    if (0 < Un)
      throw Error(a(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function lo() {
    return ft === null ? Bn === null ? (Yr = !1, Bn = ft = ir()) : (Yr = !0, ft = Bn) : ft.next === null ? (Yr = !1, ft = ft.next = ir()) : (Yr = !0, ft = ft.next), ft;
  }
  function co() {
    Sn = br = null, Xt = !1, Bn = null, Un = 0, ft = Rr = null;
  }
  function Xo(A, d) {
    return typeof d == "function" ? d(A) : d;
  }
  function Jo(A, d, h) {
    if (br = Fr(), ft = lo(), Yr) {
      var I = ft.queue;
      if (d = I.dispatch, Rr !== null && (h = Rr.get(I), h !== void 0)) {
        Rr.delete(I), I = ft.memoizedState;
        do
          I = A(I, h.action), h = h.next;
        while (h !== null);
        return ft.memoizedState = I, [I, d];
      }
      return [ft.memoizedState, d];
    }
    return A = A === Xo ? typeof d == "function" ? d() : d : h !== void 0 ? h(d) : d, ft.memoizedState = A, A = ft.queue = { last: null, dispatch: null }, A = A.dispatch = KA.bind(null, br, A), [ft.memoizedState, A];
  }
  function Ko(A, d) {
    if (br = Fr(), ft = lo(), d = d === void 0 ? null : d, ft !== null) {
      var h = ft.memoizedState;
      if (h !== null && d !== null) {
        var I = h[1];
        e:
          if (I === null)
            I = !1;
          else {
            for (var U = 0; U < I.length && U < d.length; U++)
              if (!so(d[U], I[U])) {
                I = !1;
                break e;
              }
            I = !0;
          }
        if (I)
          return h[0];
      }
    }
    return A = A(), ft.memoizedState = [A, d], A;
  }
  function KA(A, d, h) {
    if (25 <= Un)
      throw Error(a(301));
    if (A === br)
      if (Xt = !0, A = { action: h, next: null }, Rr === null && (Rr = /* @__PURE__ */ new Map()), h = Rr.get(d), h === void 0)
        Rr.set(d, A);
      else {
        for (d = h; d.next !== null; )
          d = d.next;
        d.next = A;
      }
  }
  function qA() {
    throw Error(a(394));
  }
  function Yn() {
  }
  var Rn = { readContext: function(A) {
    return A._currentValue;
  }, useContext: function(A) {
    return Fr(), A._currentValue;
  }, useMemo: Ko, useReducer: Jo, useRef: function(A) {
    br = Fr(), ft = lo();
    var d = ft.memoizedState;
    return d === null ? (A = { current: A }, ft.memoizedState = A) : d;
  }, useState: function(A) {
    return Jo(Xo, A);
  }, useInsertionEffect: Yn, useLayoutEffect: function() {
  }, useCallback: function(A, d) {
    return Ko(function() {
      return A;
    }, d);
  }, useImperativeHandle: Yn, useEffect: Yn, useDebugValue: Yn, useDeferredValue: function(A) {
    return Fr(), A;
  }, useTransition: function() {
    return Fr(), [!1, qA];
  }, useId: function() {
    var A = Sn.treeContext, d = A.overflow;
    A = A.id, A = (A & ~(1 << 32 - wn(A) - 1)).toString(32) + d;
    var h = Fn;
    if (h === null)
      throw Error(a(404));
    return d = Kr++, A = ":" + h.idPrefix + "R" + A, 0 < d && (A += "H" + d.toString(32)), A + ":";
  }, useMutableSource: function(A, d) {
    return Fr(), d(A._source);
  }, useSyncExternalStore: function(A, d, h) {
    if (h === void 0)
      throw Error(a(407));
    return h();
  } }, Fn = null, jn = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function _A(A) {
    return console.error(A), null;
  }
  function Tn() {
  }
  function fo(A, d, h, I, U, P, V, oe, ze) {
    var Ve = [], Re = /* @__PURE__ */ new Set();
    return d = { destination: null, responseState: d, progressiveChunkSize: I === void 0 ? 12800 : I, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Re, pingedTasks: Ve, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: U === void 0 ? _A : U, onAllReady: P === void 0 ? Tn : P, onShellReady: V === void 0 ? Tn : V, onShellError: oe === void 0 ? Tn : oe, onFatalError: ze === void 0 ? Tn : ze }, h = ln(d, 0, null, h, !1, !1), h.parentFlushed = !0, A = go(d, A, null, h, Re, he, null, Jr), Ve.push(A), d;
  }
  function go(A, d, h, I, U, P, V, oe) {
    A.allPendingTasks++, h === null ? A.pendingRootTasks++ : h.pendingTasks++;
    var ze = { node: d, ping: function() {
      var Ve = A.pingedTasks;
      Ve.push(ze), Ve.length === 1 && rA(A);
    }, blockedBoundary: h, blockedSegment: I, abortSet: U, legacyContext: P, context: V, treeContext: oe };
    return U.add(ze), ze;
  }
  function ln(A, d, h, I, U, P) {
    return { status: 0, id: -1, index: d, parentFlushed: !1, chunks: [], children: [], formatContext: I, boundary: h, lastPushedText: U, textEmbedded: P };
  }
  function cn(A, d) {
    if (A = A.onError(d), A != null && typeof A != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof A + '" instead');
    return A;
  }
  function Hn(A, d) {
    var h = A.onShellError;
    h(d), h = A.onFatalError, h(d), A.destination !== null ? (A.status = 2, R(A.destination, d)) : (A.status = 1, A.fatalError = d);
  }
  function qo(A, d, h, I, U) {
    for (br = {}, Sn = d, Kr = 0, A = h(I, U); Xt; )
      Xt = !1, Kr = 0, Un += 1, ft = null, A = h(I, U);
    return co(), A;
  }
  function Mo(A, d, h, I) {
    var U = h.render(), P = I.childContextTypes;
    if (P != null) {
      var V = d.legacyContext;
      if (typeof h.getChildContext != "function")
        I = V;
      else {
        h = h.getChildContext();
        for (var oe in h)
          if (!(oe in P))
            throw Error(a(108, te(I) || "Unknown", oe));
        I = Dr({}, V, h);
      }
      d.legacyContext = I, Jt(A, d, U), d.legacyContext = V;
    } else
      Jt(A, d, U);
  }
  function _o(A, d) {
    if (A && A.defaultProps) {
      d = Dr({}, d), A = A.defaultProps;
      for (var h in A)
        d[h] === void 0 && (d[h] = A[h]);
      return d;
    }
    return d;
  }
  function Wn(A, d, h, I, U) {
    if (typeof h == "function")
      if (h.prototype && h.prototype.isReactComponent) {
        U = be(h, d.legacyContext);
        var P = h.contextType;
        P = new h(I, typeof P == "object" && P !== null ? P._currentValue : U), Ur(P, h, I, U), Mo(A, d, P, h);
      } else {
        P = be(h, d.legacyContext), U = qo(A, d, h, I, P);
        var V = Kr !== 0;
        if (typeof U == "object" && U !== null && typeof U.render == "function" && U.$$typeof === void 0)
          Ur(U, h, I, P), Mo(A, d, U, h);
        else if (V) {
          I = d.treeContext, d.treeContext = xr(I, 1, 0);
          try {
            Jt(A, d, U);
          } finally {
            d.treeContext = I;
          }
        } else
          Jt(A, d, U);
      }
    else if (typeof h == "string") {
      switch (U = d.blockedSegment, P = dr(U.chunks, h, I, A.responseState, U.formatContext), U.lastPushedText = !1, V = U.formatContext, U.formatContext = K(V, h, I), Zn(A, d, P), U.formatContext = V, h) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          U.chunks.push(gr, L(h), Pt);
      }
      U.lastPushedText = !1;
    } else {
      switch (h) {
        case B:
        case N:
        case Ln:
        case Nn:
        case Qr:
          Jt(A, d, I.children);
          return;
        case un:
          Jt(A, d, I.children);
          return;
        case y:
          throw Error(a(343));
        case an:
          e: {
            h = d.blockedBoundary, U = d.blockedSegment, P = I.fallback, I = I.children, V = /* @__PURE__ */ new Set();
            var oe = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, ze = ln(A, U.chunks.length, oe, U.formatContext, !1, !1);
            U.children.push(ze), U.lastPushedText = !1;
            var Ve = ln(A, 0, null, U.formatContext, !1, !1);
            Ve.parentFlushed = !0, d.blockedBoundary = oe, d.blockedSegment = Ve;
            try {
              if (Zn(
                A,
                d,
                I
              ), Ve.lastPushedText && Ve.textEmbedded && Ve.chunks.push(le), Ve.status = 1, Vn(oe, Ve), oe.pendingTasks === 0)
                break e;
            } catch (Re) {
              Ve.status = 4, oe.forceClientRender = !0, oe.errorDigest = cn(A, Re);
            } finally {
              d.blockedBoundary = h, d.blockedSegment = U;
            }
            d = go(A, P, h, ze, V, d.legacyContext, d.context, d.treeContext), A.pingedTasks.push(d);
          }
          return;
      }
      if (typeof h == "object" && h !== null)
        switch (h.$$typeof) {
          case In:
            if (I = qo(A, d, h.render, I, U), Kr !== 0) {
              h = d.treeContext, d.treeContext = xr(h, 1, 0);
              try {
                Jt(A, d, I);
              } finally {
                d.treeContext = h;
              }
            } else
              Jt(A, d, I);
            return;
          case o:
            h = h.type, I = _o(h, I), Wn(A, d, h, I, U);
            return;
          case An:
            if (U = I.children, h = h._context, I = I.value, P = h._currentValue, h._currentValue = I, V = we, we = I = { parent: V, depth: V === null ? 0 : V.depth + 1, context: h, parentValue: P, value: I }, d.context = I, Jt(A, d, U), A = we, A === null)
              throw Error(a(403));
            I = A.parentValue, A.context._currentValue = I === z ? A.context._defaultValue : I, A = we = A.parent, d.context = A;
            return;
          case Br:
            I = I.children, I = I(h._currentValue), Jt(A, d, I);
            return;
          case f:
            U = h._init, h = U(h._payload), I = _o(h, I), Wn(A, d, h, I, void 0);
            return;
        }
      throw Error(a(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function Jt(A, d, h) {
    if (d.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ht:
          Wn(A, d, h.type, h.props, h.ref);
          return;
        case Er:
          throw Error(a(257));
        case f:
          var I = h._init;
          h = I(h._payload), Jt(A, d, h);
          return;
      }
      if (Le(h)) {
        $o(A, d, h);
        return;
      }
      if (h === null || typeof h != "object" ? I = null : (I = H && h[H] || h["@@iterator"], I = typeof I == "function" ? I : null), I && (I = I.call(h))) {
        if (h = I.next(), !h.done) {
          var U = [];
          do
            U.push(h.value), h = I.next();
          while (!h.done);
          $o(A, d, U);
        }
        return;
      }
      throw A = Object.prototype.toString.call(h), Error(a(31, A === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : A));
    }
    typeof h == "string" ? (I = d.blockedSegment, I.lastPushedText = Ie(d.blockedSegment.chunks, h, A.responseState, I.lastPushedText)) : typeof h == "number" && (I = d.blockedSegment, I.lastPushedText = Ie(d.blockedSegment.chunks, "" + h, A.responseState, I.lastPushedText));
  }
  function $o(A, d, h) {
    for (var I = h.length, U = 0; U < I; U++) {
      var P = d.treeContext;
      d.treeContext = xr(P, I, U);
      try {
        Zn(A, d, h[U]);
      } finally {
        d.treeContext = P;
      }
    }
  }
  function Zn(A, d, h) {
    var I = d.blockedSegment.formatContext, U = d.legacyContext, P = d.context;
    try {
      return Jt(A, d, h);
    } catch (ze) {
      if (co(), typeof ze == "object" && ze !== null && typeof ze.then == "function") {
        h = ze;
        var V = d.blockedSegment, oe = ln(A, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(oe), V.lastPushedText = !1, A = go(A, d.node, d.blockedBoundary, oe, d.abortSet, d.legacyContext, d.context, d.treeContext).ping, h.then(A, A), d.blockedSegment.formatContext = I, d.legacyContext = U, d.context = P, Ar(P);
      } else
        throw d.blockedSegment.formatContext = I, d.legacyContext = U, d.context = P, Ar(P), ze;
    }
  }
  function $A(A) {
    var d = A.blockedBoundary;
    A = A.blockedSegment, A.status = 3, tA(this, d, A);
  }
  function eA(A, d, h) {
    var I = A.blockedBoundary;
    A.blockedSegment.status = 3, I === null ? (d.allPendingTasks--, d.status !== 2 && (d.status = 2, d.destination !== null && d.destination.close())) : (I.pendingTasks--, I.forceClientRender || (I.forceClientRender = !0, A = h === void 0 ? Error(a(432)) : h, I.errorDigest = d.onError(A), I.parentFlushed && d.clientRenderedBoundaries.push(I)), I.fallbackAbortableTasks.forEach(function(U) {
      return eA(U, d, h);
    }), I.fallbackAbortableTasks.clear(), d.allPendingTasks--, d.allPendingTasks === 0 && (I = d.onAllReady, I()));
  }
  function Vn(A, d) {
    if (d.chunks.length === 0 && d.children.length === 1 && d.children[0].boundary === null) {
      var h = d.children[0];
      h.id = d.id, h.parentFlushed = !0, h.status === 1 && Vn(A, h);
    } else
      A.completedSegments.push(d);
  }
  function tA(A, d, h) {
    if (d === null) {
      if (h.parentFlushed) {
        if (A.completedRootSegment !== null)
          throw Error(a(389));
        A.completedRootSegment = h;
      }
      A.pendingRootTasks--, A.pendingRootTasks === 0 && (A.onShellError = Tn, d = A.onShellReady, d());
    } else
      d.pendingTasks--, d.forceClientRender || (d.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Vn(d, h), d.parentFlushed && A.completedBoundaries.push(d), d.fallbackAbortableTasks.forEach($A, A), d.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Vn(d, h), d.completedSegments.length === 1 && d.parentFlushed && A.partialBoundaries.push(d)));
    A.allPendingTasks--, A.allPendingTasks === 0 && (A = A.onAllReady, A());
  }
  function rA(A) {
    if (A.status !== 2) {
      var d = we, h = jn.current;
      jn.current = Rn;
      var I = Fn;
      Fn = A.responseState;
      try {
        var U = A.pingedTasks, P;
        for (P = 0; P < U.length; P++) {
          var V = U[P], oe = A, ze = V.blockedSegment;
          if (ze.status === 0) {
            Ar(V.context);
            try {
              Jt(oe, V, V.node), ze.lastPushedText && ze.textEmbedded && ze.chunks.push(le), V.abortSet.delete(V), ze.status = 1, tA(oe, V.blockedBoundary, ze);
            } catch (ur) {
              if (co(), typeof ur == "object" && ur !== null && typeof ur.then == "function") {
                var Ve = V.ping;
                ur.then(Ve, Ve);
              } else {
                V.abortSet.delete(V), ze.status = 4;
                var Re = V.blockedBoundary, Mt = ur, Kt = cn(oe, Mt);
                if (Re === null ? Hn(oe, Mt) : (Re.pendingTasks--, Re.forceClientRender || (Re.forceClientRender = !0, Re.errorDigest = Kt, Re.parentFlushed && oe.clientRenderedBoundaries.push(Re))), oe.allPendingTasks--, oe.allPendingTasks === 0) {
                  var ar = oe.onAllReady;
                  ar();
                }
              }
            } finally {
            }
          }
        }
        U.splice(0, P), A.destination !== null && po(A, A.destination);
      } catch (ur) {
        cn(A, ur), Hn(A, ur);
      } finally {
        Fn = I, jn.current = h, h === Rn && Ar(d);
      }
    }
  }
  function Gn(A, d, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var I = h.id = A.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, A = A.responseState, l(d, pt), l(d, A.placeholderPrefix), A = L(I.toString(16)), l(d, A), E(d, Mr);
      case 1:
        h.status = 2;
        var U = !0;
        I = h.chunks;
        var P = 0;
        h = h.children;
        for (var V = 0; V < h.length; V++) {
          for (U = h[V]; P < U.index; P++)
            l(d, I[P]);
          U = Xn(A, d, U);
        }
        for (; P < I.length - 1; P++)
          l(d, I[P]);
        return P < I.length && (U = E(d, I[P])), U;
      default:
        throw Error(a(390));
    }
  }
  function Xn(A, d, h) {
    var I = h.boundary;
    if (I === null)
      return Gn(A, d, h);
    if (I.parentFlushed = !0, I.forceClientRender)
      I = I.errorDigest, E(d, nr), l(d, hr), I && (l(d, yr), l(d, L(ne(I))), l(d, Zt)), E(d, mr), Gn(A, d, h);
    else if (0 < I.pendingTasks) {
      I.rootSegmentID = A.nextSegmentId++, 0 < I.completedSegments.length && A.partialBoundaries.push(I);
      var U = A.responseState, P = U.nextSuspenseID++;
      U = T(U.boundaryPrefix + P.toString(16)), I = I.id = U, It(d, A.responseState, I), Gn(A, d, h);
    } else if (I.byteSize > A.progressiveChunkSize)
      I.rootSegmentID = A.nextSegmentId++, A.completedBoundaries.push(I), It(d, A.responseState, I.id), Gn(A, d, h);
    else {
      if (E(d, Tr), h = I.completedSegments, h.length !== 1)
        throw Error(a(391));
      Xn(A, d, h[0]);
    }
    return E(d, Pr);
  }
  function nA(A, d, h) {
    return Se(d, A.responseState, h.formatContext, h.id), Xn(A, d, h), He(d, h.formatContext);
  }
  function oA(A, d, h) {
    for (var I = h.completedSegments, U = 0; U < I.length; U++)
      AA(A, d, h, I[U]);
    if (I.length = 0, A = A.responseState, I = h.id, h = h.rootSegmentID, l(d, A.startInlineScript), A.sentCompleteBoundaryFunction ? l(d, ot) : (A.sentCompleteBoundaryFunction = !0, l(d, nt)), I === null)
      throw Error(a(395));
    return h = L(h.toString(16)), l(d, I), l(d, Tt), l(d, A.segmentPrefix), l(d, h), E(d, Rt);
  }
  function AA(A, d, h, I) {
    if (I.status === 2)
      return !0;
    var U = I.id;
    if (U === -1) {
      if ((I.id = h.rootSegmentID) === -1)
        throw Error(a(392));
      return nA(A, d, I);
    }
    return nA(A, d, I), A = A.responseState, l(d, A.startInlineScript), A.sentCompleteSegmentFunction ? l(d, We) : (A.sentCompleteSegmentFunction = !0, l(d, rt)), l(d, A.segmentPrefix), U = L(U.toString(16)), l(d, U), l(d, Be), l(d, A.placeholderPrefix), l(d, U), E(d, ht);
  }
  function po(A, d) {
    M = new Uint8Array(512), D = 0;
    try {
      var h = A.completedRootSegment;
      if (h !== null && A.pendingRootTasks === 0) {
        Xn(A, d, h), A.completedRootSegment = null;
        var I = A.responseState.bootstrapChunks;
        for (h = 0; h < I.length - 1; h++)
          l(d, I[h]);
        h < I.length && E(d, I[h]);
      }
      var U = A.clientRenderedBoundaries, P;
      for (P = 0; P < U.length; P++) {
        var V = U[P];
        I = d;
        var oe = A.responseState, ze = V.id, Ve = V.errorDigest, Re = V.errorMessage, Mt = V.errorComponentStack;
        if (l(I, oe.startInlineScript), oe.sentClientRenderFunction ? l(I, Je) : (oe.sentClientRenderFunction = !0, l(
          I,
          mt
        )), ze === null)
          throw Error(a(395));
        l(I, ze), l(I, Ft), (Ve || Re || Mt) && (l(I, Ct), l(I, L(vr(Ve || "")))), (Re || Mt) && (l(I, Ct), l(I, L(vr(Re || "")))), Mt && (l(I, Ct), l(I, L(vr(Mt)))), E(I, Vt);
      }
      U.splice(0, P);
      var Kt = A.completedBoundaries;
      for (P = 0; P < Kt.length; P++)
        oA(A, d, Kt[P]);
      Kt.splice(0, P), b(d), M = new Uint8Array(512), D = 0;
      var ar = A.partialBoundaries;
      for (P = 0; P < ar.length; P++) {
        var ur = ar[P];
        e: {
          U = A, V = d;
          var Jn = ur.completedSegments;
          for (oe = 0; oe < Jn.length; oe++)
            if (!AA(
              U,
              V,
              ur,
              Jn[oe]
            )) {
              oe++, Jn.splice(0, oe);
              var aA = !1;
              break e;
            }
          Jn.splice(0, oe), aA = !0;
        }
        if (!aA) {
          A.destination = null, P++, ar.splice(0, P);
          return;
        }
      }
      ar.splice(0, P);
      var ho = A.completedBoundaries;
      for (P = 0; P < ho.length; P++)
        oA(A, d, ho[P]);
      ho.splice(0, P);
    } finally {
      b(d), A.allPendingTasks === 0 && A.pingedTasks.length === 0 && A.clientRenderedBoundaries.length === 0 && A.completedBoundaries.length === 0 && d.close();
    }
  }
  function iA(A, d) {
    try {
      var h = A.abortableTasks;
      h.forEach(function(I) {
        return eA(I, A, d);
      }), h.clear(), A.destination !== null && po(A, A.destination);
    } catch (I) {
      cn(A, I), Hn(A, I);
    }
  }
  return Pa.renderToReadableStream = function(A, d) {
    return new Promise(function(h, I) {
      var U, P, V = new Promise(function(Re, Mt) {
        P = Re, U = Mt;
      }), oe = fo(A, lt(d ? d.identifierPrefix : void 0, d ? d.nonce : void 0, d ? d.bootstrapScriptContent : void 0, d ? d.bootstrapScripts : void 0, d ? d.bootstrapModules : void 0), J(d ? d.namespaceURI : void 0), d ? d.progressiveChunkSize : void 0, d ? d.onError : void 0, P, function() {
        var Re = new ReadableStream({ type: "bytes", pull: function(Mt) {
          if (oe.status === 1)
            oe.status = 2, R(Mt, oe.fatalError);
          else if (oe.status !== 2 && oe.destination === null) {
            oe.destination = Mt;
            try {
              po(oe, Mt);
            } catch (Kt) {
              cn(oe, Kt), Hn(oe, Kt);
            }
          }
        }, cancel: function() {
          iA(oe);
        } }, { highWaterMark: 0 });
        Re.allReady = V, h(Re);
      }, function(Re) {
        V.catch(function() {
        }), I(Re);
      }, U);
      if (d && d.signal) {
        var ze = d.signal, Ve = function() {
          iA(oe, ze.reason), ze.removeEventListener("abort", Ve);
        };
        ze.addEventListener("abort", Ve);
      }
      rA(oe);
    });
  }, Pa.version = "18.3.1", Pa;
}
var Wo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function Pl() {
  return hs || (hs = 1, process.env.NODE_ENV !== "production" && function() {
    var s = ao, a = "18.3.1", M = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        E("warn", e, i);
      }
    }
    function l(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        E("error", e, i);
      }
    }
    function E(e, r, i) {
      {
        var c = M.ReactDebugCurrentFrame, p = c.getStackAddendum();
        p !== "" && (r += "%s", i = i.concat([p]));
        var w = i.map(function(m) {
          return String(m);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    function b(e) {
      e();
    }
    function x(e) {
    }
    function L(e, r) {
      T(e, r);
    }
    function T(e, r) {
      return e.push(r);
    }
    function R(e) {
    }
    function k(e) {
      e.push(null);
    }
    function ee(e) {
      return e;
    }
    function fe(e) {
      return e;
    }
    function re(e, r) {
      e.destroy(r);
    }
    function Ae(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function W(e) {
      try {
        return O(e), !1;
      } catch {
        return !0;
      }
    }
    function O(e) {
      return "" + e;
    }
    function G(e, r) {
      if (W(e))
        return l("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", r, Ae(e)), O(e);
    }
    function X(e, r) {
      if (W(e))
        return l("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", r, Ae(e)), O(e);
    }
    function $(e) {
      if (W(e))
        return l("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ae(e)), O(e);
    }
    var Q = Object.prototype.hasOwnProperty, se = 0, ne = 1, Pe = 2, De = 3, Le = 4, je = 5, Qe = 6, _e = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = _e + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ze = new RegExp("^[" + _e + "][" + Ne + "]*$"), Ge = {}, $e = {};
    function lt(e) {
      return Q.call($e, e) ? !0 : Q.call(Ge, e) ? !1 : Ze.test(e) ? ($e[e] = !0, !0) : (Ge[e] = !0, l("Invalid attribute name: `%s`", e), !1);
    }
    function At(e, r, i, c) {
      if (i !== null && i.type === se)
        return !1;
      switch (typeof r) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (c)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var p = e.toLowerCase().slice(0, 5);
          return p !== "data-" && p !== "aria-";
        }
        default:
          return !1;
      }
    }
    function J(e) {
      return le.hasOwnProperty(e) ? le[e] : null;
    }
    function K(e, r, i, c, p, w, m) {
      this.acceptsBooleans = r === Pe || r === De || r === Le, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = i, this.propertyName = e, this.type = r, this.sanitizeURL = w, this.removeEmptyString = m;
    }
    var le = {}, Ie = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ie.forEach(function(e) {
      le[e] = new K(
        e,
        se,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var r = e[0], i = e[1];
      le[r] = new K(
        r,
        ne,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      le[e] = new K(
        e,
        Pe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      le[e] = new K(
        e,
        Pe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      le[e] = new K(
        e,
        De,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      le[e] = new K(
        e,
        De,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      le[e] = new K(
        e,
        Le,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      le[e] = new K(
        e,
        Qe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      le[e] = new K(
        e,
        je,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var pe = /[\-\:]([a-z])/g, ve = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(pe, ve);
      le[r] = new K(
        r,
        ne,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(pe, ve);
      le[r] = new K(
        r,
        ne,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var r = e.replace(pe, ve);
      le[r] = new K(
        r,
        ne,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      le[e] = new K(
        e,
        ne,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var de = "xlinkHref";
    le[de] = new K(
      "xlinkHref",
      ne,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      le[e] = new K(
        e,
        ne,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var me = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function ke(e, r) {
      return e + r.charAt(0).toUpperCase() + r.substring(1);
    }
    var Ee = ["Webkit", "ms", "Moz", "O"];
    Object.keys(me).forEach(function(e) {
      Ee.forEach(function(r) {
        me[ke(r, e)] = me[e];
      });
    });
    var xe = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qe(e, r) {
      xe[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || l("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), r.onChange || r.readOnly || r.disabled || r.checked == null || l("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ie(e, r) {
      if (e.indexOf("-") === -1)
        return typeof r.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ke = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ut = {}, zt = new RegExp("^(aria)-[" + Ne + "]*$"), wt = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
    function tr(e, r) {
      {
        if (Q.call(ut, r) && ut[r])
          return !0;
        if (wt.test(r)) {
          var i = "aria-" + r.slice(4).toLowerCase(), c = Ke.hasOwnProperty(i) ? i : null;
          if (c == null)
            return l("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", r), ut[r] = !0, !0;
          if (r !== c)
            return l("Invalid ARIA attribute `%s`. Did you mean `%s`?", r, c), ut[r] = !0, !0;
        }
        if (zt.test(r)) {
          var p = r.toLowerCase(), w = Ke.hasOwnProperty(p) ? p : null;
          if (w == null)
            return ut[r] = !0, !1;
          if (r !== w)
            return l("Unknown ARIA attribute `%s`. Did you mean `%s`?", r, w), ut[r] = !0, !0;
        }
      }
      return !0;
    }
    function St(e, r) {
      {
        var i = [];
        for (var c in r) {
          var p = tr(e, c);
          p || i.push(c);
        }
        var w = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? l("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", w, e) : i.length > 1 && l("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", w, e);
      }
    }
    function Ot(e, r) {
      ie(e, r) || St(e, r);
    }
    var Wt = !1;
    function Or(e, r) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        r != null && r.value === null && !Wt && (Wt = !0, e === "select" && r.multiple ? l("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : l("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var xt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, jt = function() {
    };
    {
      var yt = {}, dr = /^on./, gr = /^on[^A-Z]/, Pt = new RegExp("^(aria)-[" + Ne + "]*$"), pt = new RegExp("^(aria)[A-Z][" + Ne + "]*$");
      jt = function(e, r, i, c) {
        if (Q.call(yt, r) && yt[r])
          return !0;
        var p = r.toLowerCase();
        if (p === "onfocusin" || p === "onfocusout")
          return l("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yt[r] = !0, !0;
        if (c != null) {
          var w = c.registrationNameDependencies, m = c.possibleRegistrationNames;
          if (w.hasOwnProperty(r))
            return !0;
          var Y = m.hasOwnProperty(p) ? m[p] : null;
          if (Y != null)
            return l("Invalid event handler property `%s`. Did you mean `%s`?", r, Y), yt[r] = !0, !0;
          if (dr.test(r))
            return l("Unknown event handler property `%s`. It will be ignored.", r), yt[r] = !0, !0;
        } else if (dr.test(r))
          return gr.test(r) && l("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", r), yt[r] = !0, !0;
        if (Pt.test(r) || pt.test(r))
          return !0;
        if (p === "innerhtml")
          return l("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yt[r] = !0, !0;
        if (p === "aria")
          return l("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yt[r] = !0, !0;
        if (p === "is" && i !== null && i !== void 0 && typeof i != "string")
          return l("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), yt[r] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return l("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", r), yt[r] = !0, !0;
        var _ = J(r), ge = _ !== null && _.type === se;
        if (xt.hasOwnProperty(p)) {
          var ye = xt[p];
          if (ye !== r)
            return l("Invalid DOM property `%s`. Did you mean `%s`?", r, ye), yt[r] = !0, !0;
        } else if (!ge && r !== p)
          return l("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", r, p), yt[r] = !0, !0;
        return typeof i == "boolean" && At(r, i, _, !1) ? (i ? l('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, r, r, i, r) : l('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, r, r, i, r, r, r), yt[r] = !0, !0) : ge ? !0 : At(r, i, _, !1) ? (yt[r] = !0, !1) : ((i === "false" || i === "true") && _ !== null && _.type === De && (l("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, r, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', r, i), yt[r] = !0), !0);
      };
    }
    var Mr = function(e, r, i) {
      {
        var c = [];
        for (var p in r) {
          var w = jt(e, p, r[p], i);
          w || c.push(p);
        }
        var m = c.map(function(Y) {
          return "`" + Y + "`";
        }).join(", ");
        c.length === 1 ? l("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : c.length > 1 && l("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function Tr(e, r, i) {
      ie(e, r) || Mr(e, r, i);
    }
    var rr = function() {
    };
    {
      var pr = /^(?:webkit|moz|o)[A-Z]/, nr = /^-ms-/, Pr = /-(.)/g, hr = /;\s*$/, Zt = {}, yr = {}, mr = !1, It = !1, ae = function(e) {
        return e.replace(Pr, function(r, i) {
          return i.toUpperCase();
        });
      }, Me = function(e) {
        Zt.hasOwnProperty(e) && Zt[e] || (Zt[e] = !0, l(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ae(e.replace(nr, "ms-"))
        ));
      }, ce = function(e) {
        Zt.hasOwnProperty(e) && Zt[e] || (Zt[e] = !0, l("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ce = function(e, r) {
        yr.hasOwnProperty(r) && yr[r] || (yr[r] = !0, l(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, r.replace(hr, "")));
      }, Ue = function(e, r) {
        mr || (mr = !0, l("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Fe = function(e, r) {
        It || (It = !0, l("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rr = function(e, r) {
        e.indexOf("-") > -1 ? Me(e) : pr.test(e) ? ce(e) : hr.test(r) && Ce(e, r), typeof r == "number" && (isNaN(r) ? Ue(e, r) : isFinite(r) || Fe(e, r));
      };
    }
    var Ye = rr, at = /["'&<>]/;
    function ct(e) {
      $(e);
      var r = "" + e, i = at.exec(r);
      if (!i)
        return r;
      var c, p = "", w, m = 0;
      for (w = i.index; w < r.length; w++) {
        switch (r.charCodeAt(w)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        m !== w && (p += r.substring(m, w)), m = w + 1, p += c;
      }
      return m !== w ? p + r.substring(m, w) : p;
    }
    function Xe(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : ct(e);
    }
    var kt = /([A-Z])/g, Et = /^ms-/;
    function or(e) {
      return e.replace(kt, "-$1").toLowerCase().replace(Et, "-ms-");
    }
    var vt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Xr = !1;
    function vn(e) {
      !Xr && vt.test(e) && (Xr = !0, l("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var Dn = Array.isArray;
    function $t(e) {
      return Dn(e);
    }
    var j = "<script>", q = "<\/script>", ue = '<script src="', Se = '<script type="module" src="', He = '" async=""><\/script>';
    function rt(e) {
      return $(e), ("" + e).replace(We, Be);
    }
    var We = /(<\/|<)(s)(cript)/gi, Be = function(e, r, i, c) {
      return "" + r + (i === "s" ? "\\u0073" : "\\u0053") + c;
    };
    function ht(e, r, i, c, p) {
      var w = e === void 0 ? "" : e, m = r === void 0 ? j : '<script nonce="' + Xe(r) + '">', Y = [];
      if (i !== void 0 && Y.push(m, rt(i), q), c !== void 0)
        for (var _ = 0; _ < c.length; _++)
          Y.push(ue, Xe(c[_]), He);
      if (p !== void 0)
        for (var ge = 0; ge < p.length; ge++)
          Y.push(Se, Xe(p[ge]), He);
      return {
        bootstrapChunks: Y,
        startInlineScript: m,
        placeholderPrefix: w + "P:",
        segmentPrefix: w + "S:",
        boundaryPrefix: w + "B:",
        idPrefix: w,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var nt = 0, ot = 1, Tt = 2, Rt = 3, mt = 4, Je = 5, Ft = 6, Vt = 7;
    function Ct(e, r) {
      return {
        insertionMode: e,
        selectedValue: r
      };
    }
    function on(e, r, i) {
      switch (r) {
        case "select":
          return Ct(ot, i.value != null ? i.value : i.defaultValue);
        case "svg":
          return Ct(Tt, null);
        case "math":
          return Ct(Rt, null);
        case "foreignObject":
          return Ct(ot, null);
        case "table":
          return Ct(mt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ct(Je, null);
        case "colgroup":
          return Ct(Vt, null);
        case "tr":
          return Ct(Ft, null);
      }
      return e.insertionMode >= mt || e.insertionMode === nt ? Ct(ot, null) : e;
    }
    var vr = null;
    function Dr(e) {
      var r = e.nextSuspenseID++;
      return e.boundaryPrefix + r.toString(16);
    }
    function Ht(e, r, i) {
      var c = e.idPrefix, p = ":" + c + "R" + r;
      return i > 0 && (p += "H" + i.toString(32)), p + ":";
    }
    function Er(e) {
      return Xe(e);
    }
    var Qr = "<!-- -->";
    function Ln(e, r, i, c) {
      return r === "" ? c : (c && e.push(Qr), e.push(Er(r)), !0);
    }
    function Nn(e, r, i, c) {
      i && c && e.push(Qr);
    }
    var An = /* @__PURE__ */ new Map();
    function Br(e) {
      var r = An.get(e);
      if (r !== void 0)
        return r;
      var i = Xe(or(e));
      return An.set(e, i), i;
    }
    var In = ' style="', an = ":", un = ";";
    function o(e, r, i) {
      if (typeof i != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var c = !0;
      for (var p in i)
        if (Q.call(i, p)) {
          var w = i[p];
          if (!(w == null || typeof w == "boolean" || w === "")) {
            var m = void 0, Y = void 0, _ = p.indexOf("--") === 0;
            _ ? (m = Xe(p), X(w, p), Y = Xe(("" + w).trim())) : (Ye(p, w), m = Br(p), typeof w == "number" ? w !== 0 && !Q.call(me, p) ? Y = w + "px" : Y = "" + w : (X(w, p), Y = Xe(("" + w).trim()))), c ? (c = !1, e.push(In, m, an, Y)) : e.push(un, m, an, Y);
          }
        }
      c || e.push(N);
    }
    var f = " ", y = '="', N = '"', B = '=""';
    function z(e, r, i, c) {
      switch (i) {
        case "style": {
          o(e, r, c);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(i.length > 2 && (i[0] === "o" || i[0] === "O") && (i[1] === "n" || i[1] === "N"))
      ) {
        var p = J(i);
        if (p !== null) {
          switch (typeof c) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!p.acceptsBooleans)
                return;
          }
          var w = p.attributeName, m = w;
          switch (p.type) {
            case De:
              c && e.push(f, m, B);
              return;
            case Le:
              c === !0 ? e.push(f, m, B) : c === !1 || e.push(f, m, y, Xe(c), N);
              return;
            case je:
              isNaN(c) || e.push(f, m, y, Xe(c), N);
              break;
            case Qe:
              !isNaN(c) && c >= 1 && e.push(f, m, y, Xe(c), N);
              break;
            default:
              p.sanitizeURL && (G(c, w), c = "" + c, vn(c)), e.push(f, m, y, Xe(c), N);
          }
        } else if (lt(i)) {
          switch (typeof c) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Y = i.toLowerCase().slice(0, 5);
              if (Y !== "data-" && Y !== "aria-")
                return;
            }
          }
          e.push(f, i, y, Xe(c), N);
        }
      }
    }
    var H = ">", te = "/>";
    function he(e, r, i) {
      if (r != null) {
        if (i != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof r != "object" || !("__html" in r))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var c = r.__html;
        c != null && ($(c), e.push("" + c));
      }
    }
    var be = !1, we = !1, et = !1, Gt = !1, Qt = !1, Bt = !1, Cr = !1;
    function Ar(e, r) {
      {
        var i = e[r];
        if (i != null) {
          var c = $t(i);
          e.multiple && !c ? l("The `%s` prop supplied to <select> must be an array if `multiple` is true.", r) : !e.multiple && c && l("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", r);
        }
      }
    }
    function sn(e, r, i) {
      qe("select", r), Ar(r, "value"), Ar(r, "defaultValue"), r.value !== void 0 && r.defaultValue !== void 0 && !et && (l("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), et = !0), e.push(Xt("select"));
      var c = null, p = null;
      for (var w in r)
        if (Q.call(r, w)) {
          var m = r[w];
          if (m == null)
            continue;
          switch (w) {
            case "children":
              c = m;
              break;
            case "dangerouslySetInnerHTML":
              p = m;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              z(e, i, w, m);
              break;
          }
        }
      return e.push(H), he(e, p, c), c;
    }
    function Ur(e) {
      var r = "";
      return s.Children.forEach(e, function(i) {
        i != null && (r += i, !Qt && typeof i != "string" && typeof i != "number" && (Qt = !0, l("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), r;
    }
    var Jr = ' selected=""';
    function xr(e, r, i, c) {
      var p = c.selectedValue;
      e.push(Xt("option"));
      var w = null, m = null, Y = null, _ = null;
      for (var ge in r)
        if (Q.call(r, ge)) {
          var ye = r[ge];
          if (ye == null)
            continue;
          switch (ge) {
            case "children":
              w = ye;
              break;
            case "selected":
              Y = ye, Cr || (l("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Cr = !0);
              break;
            case "dangerouslySetInnerHTML":
              _ = ye;
              break;
            case "value":
              m = ye;
            default:
              z(e, i, ge, ye);
              break;
          }
        }
      if (p != null) {
        var Oe;
        if (m !== null ? (G(m, "value"), Oe = "" + m) : (_ !== null && (Bt || (Bt = !0, l("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Oe = Ur(w)), $t(p))
          for (var Lt = 0; Lt < p.length; Lt++) {
            G(p[Lt], "value");
            var Yt = "" + p[Lt];
            if (Yt === Oe) {
              e.push(Jr);
              break;
            }
          }
        else
          G(p, "select.value"), "" + p === Oe && e.push(Jr);
      } else
        Y && e.push(Jr);
      return e.push(H), he(e, _, w), w;
    }
    function wn(e, r, i) {
      qe("input", r), r.checked !== void 0 && r.defaultChecked !== void 0 && !we && (l("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), we = !0), r.value !== void 0 && r.defaultValue !== void 0 && !be && (l("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", r.type), be = !0), e.push(Xt("input"));
      var c = null, p = null, w = null, m = null;
      for (var Y in r)
        if (Q.call(r, Y)) {
          var _ = r[Y];
          if (_ == null)
            continue;
          switch (Y) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              m = _;
              break;
            case "defaultValue":
              p = _;
              break;
            case "checked":
              w = _;
              break;
            case "value":
              c = _;
              break;
            default:
              z(e, i, Y, _);
              break;
          }
        }
      return w !== null ? z(e, i, "checked", w) : m !== null && z(e, i, "checked", m), c !== null ? z(e, i, "value", c) : p !== null && z(e, i, "value", p), e.push(te), null;
    }
    function GA(e, r, i) {
      qe("textarea", r), r.value !== void 0 && r.defaultValue !== void 0 && !Gt && (l("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Gt = !0), e.push(Xt("textarea"));
      var c = null, p = null, w = null;
      for (var m in r)
        if (Q.call(r, m)) {
          var Y = r[m];
          if (Y == null)
            continue;
          switch (m) {
            case "children":
              w = Y;
              break;
            case "value":
              c = Y;
              break;
            case "defaultValue":
              p = Y;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              z(e, i, m, Y);
              break;
          }
        }
      if (c === null && p !== null && (c = p), e.push(H), w != null) {
        if (l("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), c != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if ($t(w)) {
          if (w.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          $(w[0]), c = "" + w[0];
        }
        $(w), c = "" + w;
      }
      return typeof c == "string" && c[0] === `
` && e.push(Sn), c !== null && (G(c, "value"), e.push(Er("" + c))), null;
    }
    function XA(e, r, i, c) {
      e.push(Xt(i));
      for (var p in r)
        if (Q.call(r, p)) {
          var w = r[p];
          if (w == null)
            continue;
          switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(i + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              z(e, c, p, w);
              break;
          }
        }
      return e.push(te), null;
    }
    function uo(e, r, i) {
      e.push(Xt("menuitem"));
      for (var c in r)
        if (Q.call(r, c)) {
          var p = r[c];
          if (p == null)
            continue;
          switch (c) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              z(e, i, c, p);
              break;
          }
        }
      return e.push(H), null;
    }
    function JA(e, r, i) {
      e.push(Xt("title"));
      var c = null;
      for (var p in r)
        if (Q.call(r, p)) {
          var w = r[p];
          if (w == null)
            continue;
          switch (p) {
            case "children":
              c = w;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              z(e, i, p, w);
              break;
          }
        }
      e.push(H);
      {
        var m = Array.isArray(c) && c.length < 2 ? c[0] || null : c;
        Array.isArray(c) && c.length > 1 ? l("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : m != null && m.$$typeof != null ? l("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : m != null && typeof m != "string" && typeof m != "number" && l("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return c;
    }
    function so(e, r, i, c) {
      e.push(Xt(i));
      var p = null, w = null;
      for (var m in r)
        if (Q.call(r, m)) {
          var Y = r[m];
          if (Y == null)
            continue;
          switch (m) {
            case "children":
              p = Y;
              break;
            case "dangerouslySetInnerHTML":
              w = Y;
              break;
            default:
              z(e, c, m, Y);
              break;
          }
        }
      return e.push(H), he(e, w, p), typeof p == "string" ? (e.push(Er(p)), null) : p;
    }
    function br(e, r, i, c) {
      e.push(Xt(i));
      var p = null, w = null;
      for (var m in r)
        if (Q.call(r, m)) {
          var Y = r[m];
          if (Y == null)
            continue;
          switch (m) {
            case "children":
              p = Y;
              break;
            case "dangerouslySetInnerHTML":
              w = Y;
              break;
            case "style":
              o(e, c, Y);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              lt(m) && typeof Y != "function" && typeof Y != "symbol" && e.push(f, m, y, Xe(Y), N);
              break;
          }
        }
      return e.push(H), he(e, w, p), p;
    }
    var Sn = `
`;
    function Bn(e, r, i, c) {
      e.push(Xt(i));
      var p = null, w = null;
      for (var m in r)
        if (Q.call(r, m)) {
          var Y = r[m];
          if (Y == null)
            continue;
          switch (m) {
            case "children":
              p = Y;
              break;
            case "dangerouslySetInnerHTML":
              w = Y;
              break;
            default:
              z(e, c, m, Y);
              break;
          }
        }
      if (e.push(H), w != null) {
        if (p != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof w != "object" || !("__html" in w))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var _ = w.__html;
        _ != null && (typeof _ == "string" && _.length > 0 && _[0] === `
` ? e.push(Sn, _) : ($(_), e.push("" + _)));
      }
      return typeof p == "string" && p[0] === `
` && e.push(Sn), p;
    }
    var ft = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Yr = /* @__PURE__ */ new Map();
    function Xt(e) {
      var r = Yr.get(e);
      if (r === void 0) {
        if (!ft.test(e))
          throw new Error("Invalid tag: " + e);
        r = "<" + e, Yr.set(e, r);
      }
      return r;
    }
    var Kr = "<!DOCTYPE html>";
    function Rr(e, r, i, c, p) {
      switch (Ot(r, i), Or(r, i), Tr(r, i, null), !i.suppressContentEditableWarning && i.contentEditable && i.children != null && l("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), p.insertionMode !== Tt && p.insertionMode !== Rt && r.indexOf("-") === -1 && typeof i.is != "string" && r.toLowerCase() !== r && l("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", r), r) {
        case "select":
          return sn(e, i, c);
        case "option":
          return xr(e, i, c, p);
        case "textarea":
          return GA(e, i, c);
        case "input":
          return wn(e, i, c);
        case "menuitem":
          return uo(e, i, c);
        case "title":
          return JA(e, i, c);
        case "listing":
        case "pre":
          return Bn(e, i, r, c);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return XA(e, i, r, c);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return so(e, i, r, c);
        case "html":
          return p.insertionMode === nt && e.push(Kr), so(e, i, r, c);
        default:
          return r.indexOf("-") === -1 && typeof i.is != "string" ? so(e, i, r, c) : br(e, i, r, c);
      }
    }
    var Un = "</", Fr = ">";
    function ir(e, r, i) {
      switch (r) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(Un, r, Fr);
      }
    }
    function lo(e, r) {
      for (var i = r.bootstrapChunks, c = 0; c < i.length - 1; c++)
        L(e, i[c]);
      return c < i.length ? T(e, i[c]) : !0;
    }
    var co = '<template id="', Xo = '"></template>';
    function Jo(e, r, i) {
      L(e, co), L(e, r.placeholderPrefix);
      var c = i.toString(16);
      return L(e, c), T(e, Xo);
    }
    var Ko = "<!--$-->", KA = '<!--$?--><template id="', qA = '"></template>', Yn = "<!--$!-->", Rn = "<!--/$-->", Fn = "<template", jn = '"', _A = ' data-dgst="', Tn = ' data-msg="', fo = ' data-stck="', go = "></template>";
    function ln(e, r) {
      return T(e, Ko);
    }
    function cn(e, r, i) {
      if (L(e, KA), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return L(e, i), T(e, qA);
    }
    function Hn(e, r, i, c, p) {
      var w;
      return w = T(e, Yn), L(e, Fn), i && (L(e, _A), L(e, Xe(i)), L(e, jn)), c && (L(e, Tn), L(e, Xe(c)), L(e, jn)), p && (L(e, fo), L(e, Xe(p)), L(e, jn)), w = T(e, go), w;
    }
    function qo(e, r) {
      return T(e, Rn);
    }
    function Mo(e, r) {
      return T(e, Rn);
    }
    function _o(e, r) {
      return T(e, Rn);
    }
    var Wn = '<div hidden id="', Jt = '">', $o = "</div>", Zn = '<svg aria-hidden="true" style="display:none" id="', $A = '">', eA = "</svg>", Vn = '<math aria-hidden="true" style="display:none" id="', tA = '">', rA = "</math>", Gn = '<table hidden id="', Xn = '">', nA = "</table>", oA = '<table hidden><tbody id="', AA = '">', po = "</tbody></table>", iA = '<table hidden><tr id="', A = '">', d = "</tr></table>", h = '<table hidden><colgroup id="', I = '">', U = "</colgroup></table>";
    function P(e, r, i, c) {
      switch (i.insertionMode) {
        case nt:
        case ot:
          return L(e, Wn), L(e, r.segmentPrefix), L(e, c.toString(16)), T(e, Jt);
        case Tt:
          return L(e, Zn), L(e, r.segmentPrefix), L(e, c.toString(16)), T(e, $A);
        case Rt:
          return L(e, Vn), L(e, r.segmentPrefix), L(e, c.toString(16)), T(e, tA);
        case mt:
          return L(e, Gn), L(e, r.segmentPrefix), L(e, c.toString(16)), T(e, Xn);
        case Je:
          return L(e, oA), L(e, r.segmentPrefix), L(e, c.toString(16)), T(e, AA);
        case Ft:
          return L(e, iA), L(e, r.segmentPrefix), L(e, c.toString(16)), T(e, A);
        case Vt:
          return L(e, h), L(e, r.segmentPrefix), L(e, c.toString(16)), T(e, I);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function V(e, r) {
      switch (r.insertionMode) {
        case nt:
        case ot:
          return T(e, $o);
        case Tt:
          return T(e, eA);
        case Rt:
          return T(e, rA);
        case mt:
          return T(e, nA);
        case Je:
          return T(e, po);
        case Ft:
          return T(e, d);
        case Vt:
          return T(e, U);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var oe = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", ze = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Ve = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Re = oe + ';$RS("', Mt = '$RS("', Kt = '","', ar = '")<\/script>';
    function ur(e, r, i) {
      L(e, r.startInlineScript), r.sentCompleteSegmentFunction ? L(e, Mt) : (r.sentCompleteSegmentFunction = !0, L(e, Re)), L(e, r.segmentPrefix);
      var c = i.toString(16);
      return L(e, c), L(e, Kt), L(e, r.placeholderPrefix), L(e, c), T(e, ar);
    }
    var Jn = ze + ';$RC("', aA = '$RC("', ho = '","', Va = '")<\/script>';
    function Ga(e, r, i, c) {
      if (L(e, r.startInlineScript), r.sentCompleteBoundaryFunction ? L(e, aA) : (r.sentCompleteBoundaryFunction = !0, L(e, Jn)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var p = c.toString(16);
      return L(e, i), L(e, ho), L(e, r.segmentPrefix), L(e, p), T(e, Va);
    }
    var Xa = Ve + ';$RX("', Ja = '$RX("', Ka = '"', qa = ")<\/script>", ei = ",";
    function _a(e, r, i, c, p, w) {
      if (L(e, r.startInlineScript), r.sentClientRenderFunction ? L(e, Ja) : (r.sentClientRenderFunction = !0, L(e, Xa)), i === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return L(e, i), L(e, Ka), (c || p || w) && (L(e, ei), L(e, ti(c || ""))), (p || w) && (L(e, ei), L(e, ti(p || ""))), w && (L(e, ei), L(e, ti(w))), T(e, qa);
    }
    var $a = /[<\u2028\u2029]/g;
    function ti(e) {
      var r = JSON.stringify(e);
      return r.replace($a, function(i) {
        switch (i) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function eu(e, r) {
      var i = ht(r, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: i.bootstrapChunks,
        startInlineScript: i.startInlineScript,
        placeholderPrefix: i.placeholderPrefix,
        segmentPrefix: i.segmentPrefix,
        boundaryPrefix: i.boundaryPrefix,
        idPrefix: i.idPrefix,
        nextSuspenseID: i.nextSuspenseID,
        sentCompleteSegmentFunction: i.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: i.sentCompleteBoundaryFunction,
        sentClientRenderFunction: i.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function ri() {
      return {
        insertionMode: ot,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Xi(e, r, i, c) {
      return i.generateStaticMarkup ? (e.push(Xe(r)), !1) : Ln(e, r, i, c);
    }
    function Ji(e, r, i, c) {
      if (!r.generateStaticMarkup)
        return Nn(e, r, i, c);
    }
    function ni(e, r) {
      return r.generateStaticMarkup ? !0 : ln(e);
    }
    function Lr(e, r, i, c, p) {
      return r.generateStaticMarkup ? !0 : Hn(e, r, i, c, p);
    }
    function tu(e, r) {
      return r.generateStaticMarkup ? !0 : qo(e);
    }
    function Ki(e, r) {
      return r.generateStaticMarkup ? !0 : _o(e);
    }
    var sr = Object.assign, qi = Symbol.for("react.element"), oi = Symbol.for("react.portal"), uA = Symbol.for("react.fragment"), sA = Symbol.for("react.strict_mode"), lA = Symbol.for("react.profiler"), yo = Symbol.for("react.provider"), vo = Symbol.for("react.context"), Do = Symbol.for("react.forward_ref"), Kn = Symbol.for("react.suspense"), Ai = Symbol.for("react.suspense_list"), ii = Symbol.for("react.memo"), cA = Symbol.for("react.lazy"), ru = Symbol.for("react.scope"), _i = Symbol.for("react.debug_trace_mode"), nu = Symbol.for("react.legacy_hidden"), ou = Symbol.for("react.default_value"), $i = Symbol.iterator, ea = "@@iterator";
    function Nt(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $i && e[$i] || e[ea];
      return typeof r == "function" ? r : null;
    }
    function Lo(e, r, i) {
      var c = e.displayName;
      if (c)
        return c;
      var p = r.displayName || r.name || "";
      return p !== "" ? i + "(" + p + ")" : i;
    }
    function ai(e) {
      return e.displayName || "Context";
    }
    function Dt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case uA:
          return "Fragment";
        case oi:
          return "Portal";
        case lA:
          return "Profiler";
        case sA:
          return "StrictMode";
        case Kn:
          return "Suspense";
        case Ai:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case vo:
            var r = e;
            return ai(r) + ".Consumer";
          case yo:
            var i = e;
            return ai(i._context) + ".Provider";
          case Do:
            return Lo(e, e.render, "ForwardRef");
          case ii:
            var c = e.displayName || null;
            return c !== null ? c : Dt(e.type) || "Memo";
          case cA: {
            var p = e, w = p._payload, m = p._init;
            try {
              return Dt(m(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qn = 0, ui, si, li, ci, fi, ta, ra;
    function fA() {
    }
    fA.__reactDisabledLog = !0;
    function di() {
      {
        if (qn === 0) {
          ui = console.log, si = console.info, li = console.warn, ci = console.error, fi = console.group, ta = console.groupCollapsed, ra = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fA,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        qn++;
      }
    }
    function No() {
      {
        if (qn--, qn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: sr({}, e, {
              value: ui
            }),
            info: sr({}, e, {
              value: si
            }),
            warn: sr({}, e, {
              value: li
            }),
            error: sr({}, e, {
              value: ci
            }),
            group: sr({}, e, {
              value: fi
            }),
            groupCollapsed: sr({}, e, {
              value: ta
            }),
            groupEnd: sr({}, e, {
              value: ra
            })
          });
        }
        qn < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Io = M.ReactCurrentDispatcher, _n;
    function wo(e, r, i) {
      {
        if (_n === void 0)
          try {
            throw Error();
          } catch (p) {
            var c = p.stack.trim().match(/\n( *(at )?)/);
            _n = c && c[1] || "";
          }
        return `
` + _n + e;
      }
    }
    var So = !1, dA;
    {
      var na = typeof WeakMap == "function" ? WeakMap : Map;
      dA = new na();
    }
    function gi(e, r) {
      if (!e || So)
        return "";
      {
        var i = dA.get(e);
        if (i !== void 0)
          return i;
      }
      var c;
      So = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = Io.current, Io.current = null, di();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (Sr) {
              c = Sr;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (Sr) {
              c = Sr;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Sr) {
            c = Sr;
          }
          e();
        }
      } catch (Sr) {
        if (Sr && c && typeof Sr.stack == "string") {
          for (var Y = Sr.stack.split(`
`), _ = c.stack.split(`
`), ge = Y.length - 1, ye = _.length - 1; ge >= 1 && ye >= 0 && Y[ge] !== _[ye]; )
            ye--;
          for (; ge >= 1 && ye >= 0; ge--, ye--)
            if (Y[ge] !== _[ye]) {
              if (ge !== 1 || ye !== 1)
                do
                  if (ge--, ye--, ye < 0 || Y[ge] !== _[ye]) {
                    var Oe = `
` + Y[ge].replace(" at new ", " at ");
                    return e.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", e.displayName)), typeof e == "function" && dA.set(e, Oe), Oe;
                  }
                while (ge >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        So = !1, Io.current = w, No(), Error.prepareStackTrace = p;
      }
      var Lt = e ? e.displayName || e.name : "", Yt = Lt ? wo(Lt) : "";
      return typeof e == "function" && dA.set(e, Yt), Yt;
    }
    function Mi(e, r, i) {
      return gi(e, !0);
    }
    function pi(e, r, i) {
      return gi(e, !1);
    }
    function oa(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $n(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return gi(e, oa(e));
      if (typeof e == "string")
        return wo(e);
      switch (e) {
        case Kn:
          return wo("Suspense");
        case Ai:
          return wo("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Do:
            return pi(e.render);
          case ii:
            return $n(e.type, r, i);
          case cA: {
            var c = e, p = c._payload, w = c._init;
            try {
              return $n(w(p), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var hi = {}, gA = M.ReactDebugCurrentFrame;
    function mn(e) {
      if (e) {
        var r = e._owner, i = $n(e.type, e._source, r ? r.type : null);
        gA.setExtraStackFrame(i);
      } else
        gA.setExtraStackFrame(null);
    }
    function yi(e, r, i, c, p) {
      {
        var w = Function.call.bind(Q);
        for (var m in e)
          if (w(e, m)) {
            var Y = void 0;
            try {
              if (typeof e[m] != "function") {
                var _ = Error((c || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              Y = e[m](r, m, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              Y = ge;
            }
            Y && !(Y instanceof Error) && (mn(p), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, m, typeof Y), mn(null)), Y instanceof Error && !(Y.message in hi) && (hi[Y.message] = !0, mn(p), l("Failed %s type: %s", i, Y.message), mn(null));
          }
      }
    }
    var vi;
    vi = {};
    var fn = {};
    Object.freeze(fn);
    function Aa(e, r) {
      {
        var i = e.contextTypes;
        if (!i)
          return fn;
        var c = {};
        for (var p in i)
          c[p] = r[p];
        {
          var w = Dt(e) || "Unknown";
          yi(i, c, "context", w);
        }
        return c;
      }
    }
    function En(e, r, i, c) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var p = Dt(r) || "Unknown";
            vi[p] || (vi[p] = !0, l("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return i;
        }
        var w = e.getChildContext();
        for (var m in w)
          if (!(m in c))
            throw new Error((Dt(r) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var Y = Dt(r) || "Unknown";
          yi(c, w, "child context", Y);
        }
        return sr({}, i, w);
      }
    }
    var Cn;
    Cn = {};
    var Di = null, Hr = null;
    function MA(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function pA(e) {
      e.context._currentValue2 = e.value;
    }
    function jo(e, r) {
      if (e !== r) {
        MA(e);
        var i = e.parent, c = r.parent;
        if (i === null) {
          if (c !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (c === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          jo(i, c);
        }
        pA(r);
      }
    }
    function Li(e) {
      MA(e);
      var r = e.parent;
      r !== null && Li(r);
    }
    function To(e) {
      var r = e.parent;
      r !== null && To(r), pA(e);
    }
    function ia(e, r) {
      MA(e);
      var i = e.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      i.depth === r.depth ? jo(i, r) : ia(i, r);
    }
    function aa(e, r) {
      var i = r.parent;
      if (i === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === i.depth ? jo(e, i) : aa(e, i), pA(r);
    }
    function hA(e) {
      var r = Hr, i = e;
      r !== i && (r === null ? To(i) : i === null ? Li(r) : r.depth === i.depth ? jo(r, i) : r.depth > i.depth ? ia(r, i) : aa(r, i), Hr = i);
    }
    function mo(e, r) {
      var i;
      i = e._currentValue2, e._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Cn && l("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Cn;
      var c = Hr, p = {
        parent: c,
        depth: c === null ? 0 : c.depth + 1,
        context: e,
        parentValue: i,
        value: r
      };
      return Hr = p, p;
    }
    function Ni(e) {
      var r = Hr;
      if (r === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      r.context !== e && l("The parent context is not the expected context. This is probably a bug in React.");
      {
        var i = r.parentValue;
        i === ou ? r.context._currentValue2 = r.context._defaultValue : r.context._currentValue2 = i, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Cn && l("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Cn;
      }
      return Hr = r.parent;
    }
    function Au() {
      return Hr;
    }
    function eo(e) {
      var r = e._currentValue2;
      return r;
    }
    function yA(e) {
      return e._reactInternals;
    }
    function Ii(e, r) {
      e._reactInternals = r;
    }
    var vA = {}, DA = {}, Eo, LA, to, Co, NA, ro, IA, wA, SA;
    {
      Eo = /* @__PURE__ */ new Set(), LA = /* @__PURE__ */ new Set(), to = /* @__PURE__ */ new Set(), IA = /* @__PURE__ */ new Set(), Co = /* @__PURE__ */ new Set(), wA = /* @__PURE__ */ new Set(), SA = /* @__PURE__ */ new Set();
      var ua = /* @__PURE__ */ new Set();
      ro = function(e, r) {
        if (!(e === null || typeof e == "function")) {
          var i = r + "_" + e;
          ua.has(i) || (ua.add(i), l("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", r, e));
        }
      }, NA = function(e, r) {
        if (r === void 0) {
          var i = Dt(e) || "Component";
          Co.has(i) || (Co.add(i), l("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      };
    }
    function sa(e, r) {
      {
        var i = e.constructor, c = i && Dt(i) || "ReactClass", p = c + "." + r;
        if (vA[p])
          return;
        l(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, r, r, c), vA[p] = !0;
      }
    }
    var la = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, r, i) {
        var c = yA(e);
        c.queue === null ? sa(e, "setState") : (c.queue.push(r), i != null && ro(i, "setState"));
      },
      enqueueReplaceState: function(e, r, i) {
        var c = yA(e);
        c.replace = !0, c.queue = [r], i != null && ro(i, "setState");
      },
      enqueueForceUpdate: function(e, r) {
        var i = yA(e);
        i.queue === null ? sa(e, "forceUpdate") : r != null && ro(r, "setState");
      }
    };
    function iu(e, r, i, c, p) {
      var w = i(p, c);
      NA(r, w);
      var m = w == null ? c : sr({}, c, w);
      return m;
    }
    function au(e, r, i) {
      var c = fn, p = e.contextType;
      if ("contextType" in e) {
        var w = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === vo && p._context === void 0
        );
        if (!w && !SA.has(e)) {
          SA.add(e);
          var m = "";
          p === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? m = " However, it is set to a " + typeof p + "." : p.$$typeof === yo ? m = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", l("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Dt(e) || "Component", m);
        }
      }
      typeof p == "object" && p !== null ? c = eo(p) : c = i;
      var Y = new e(r, c);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (Y.state === null || Y.state === void 0)) {
          var _ = Dt(e) || "Component";
          Eo.has(_) || (Eo.add(_), l("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, Y.state === null ? "null" : "undefined", _));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof Y.getSnapshotBeforeUpdate == "function") {
          var ge = null, ye = null, Oe = null;
          if (typeof Y.componentWillMount == "function" && Y.componentWillMount.__suppressDeprecationWarning !== !0 ? ge = "componentWillMount" : typeof Y.UNSAFE_componentWillMount == "function" && (ge = "UNSAFE_componentWillMount"), typeof Y.componentWillReceiveProps == "function" && Y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ye = "componentWillReceiveProps" : typeof Y.UNSAFE_componentWillReceiveProps == "function" && (ye = "UNSAFE_componentWillReceiveProps"), typeof Y.componentWillUpdate == "function" && Y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Oe = "componentWillUpdate" : typeof Y.UNSAFE_componentWillUpdate == "function" && (Oe = "UNSAFE_componentWillUpdate"), ge !== null || ye !== null || Oe !== null) {
            var Lt = Dt(e) || "Component", Yt = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            to.has(Lt) || (to.add(Lt), l(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Lt, Yt, ge !== null ? `
  ` + ge : "", ye !== null ? `
  ` + ye : "", Oe !== null ? `
  ` + Oe : ""));
          }
        }
      }
      return Y;
    }
    function ca(e, r, i) {
      {
        var c = Dt(r) || "Component", p = e.render;
        p || (r.prototype && typeof r.prototype.render == "function" ? l("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : l("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && l("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && l("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), e.propTypes && l("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), e.contextType && l("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), e.contextTypes && l("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), r.contextType && r.contextTypes && !wA.has(r) && (wA.add(r), l("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof e.componentShouldUpdate == "function" && l("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), r.prototype && r.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && l("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Dt(r) || "A pure component"), typeof e.componentDidUnmount == "function" && l("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof e.componentDidReceiveProps == "function" && l("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof e.componentWillRecieveProps == "function" && l("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof e.UNSAFE_componentWillRecieveProps == "function" && l("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var w = e.props !== i;
        e.props !== void 0 && w && l("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), e.defaultProps && l("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !LA.has(r) && (LA.add(r), l("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Dt(r))), typeof e.getDerivedStateFromProps == "function" && l("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof e.getDerivedStateFromError == "function" && l("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof r.getSnapshotBeforeUpdate == "function" && l("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var m = e.state;
        m && (typeof m != "object" || $t(m)) && l("%s.state: must be set to an object or null", c), typeof e.getChildContext == "function" && typeof r.childContextTypes != "object" && l("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function uu(e, r) {
      var i = r.state;
      if (typeof r.componentWillMount == "function") {
        if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
          var c = Dt(e) || "Unknown";
          DA[c] || (D(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            c
          ), DA[c] = !0);
        }
        r.componentWillMount();
      }
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), i !== r.state && (l("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Dt(e) || "Component"), la.enqueueReplaceState(r, r.state, null));
    }
    function su(e, r, i, c) {
      if (e.queue !== null && e.queue.length > 0) {
        var p = e.queue, w = e.replace;
        if (e.queue = null, e.replace = !1, w && p.length === 1)
          r.state = p[0];
        else {
          for (var m = w ? p[0] : r.state, Y = !0, _ = w ? 1 : 0; _ < p.length; _++) {
            var ge = p[_], ye = typeof ge == "function" ? ge.call(r, m, i, c) : ge;
            ye != null && (Y ? (Y = !1, m = sr({}, m, ye)) : sr(m, ye));
          }
          r.state = m;
        }
      } else
        e.queue = null;
    }
    function jA(e, r, i, c) {
      ca(e, r, i);
      var p = e.state !== void 0 ? e.state : null;
      e.updater = la, e.props = i, e.state = p;
      var w = {
        queue: [],
        replace: !1
      };
      Ii(e, w);
      var m = r.contextType;
      if (typeof m == "object" && m !== null ? e.context = eo(m) : e.context = c, e.state === i) {
        var Y = Dt(r) || "Component";
        IA.has(Y) || (IA.add(Y), l("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Y));
      }
      var _ = r.getDerivedStateFromProps;
      typeof _ == "function" && (e.state = iu(e, r, _, p, i)), typeof r.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (uu(r, e), su(w, e, i, c));
    }
    var TA = {
      id: 1,
      overflow: ""
    };
    function lu(e) {
      var r = e.overflow, i = e.id, c = i & ~cu(i);
      return c.toString(32) + r;
    }
    function wi(e, r, i) {
      var c = e.id, p = e.overflow, w = mA(c) - 1, m = c & ~(1 << w), Y = i + 1, _ = mA(r) + w;
      if (_ > 30) {
        var ge = w - w % 5, ye = (1 << ge) - 1, Oe = (m & ye).toString(32), Lt = m >> ge, Yt = w - ge, Sr = mA(r) + Yt, za = Y << Yt, ka = za | Lt, Oa = Oe + p;
        return {
          id: 1 << Sr | ka,
          overflow: Oa
        };
      } else {
        var WA = Y << w, tl = WA | m, rl = p;
        return {
          id: 1 << _ | tl,
          overflow: rl
        };
      }
    }
    function mA(e) {
      return 32 - fu(e);
    }
    function cu(e) {
      return 1 << mA(e) - 1;
    }
    var fu = Math.clz32 ? Math.clz32 : qr, du = Math.log, gu = Math.LN2;
    function qr(e) {
      var r = e >>> 0;
      return r === 0 ? 32 : 31 - (du(r) / gu | 0) | 0;
    }
    function Si(e, r) {
      return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
    }
    var EA = typeof Object.is == "function" ? Object.is : Si, tt = null, xn = null, bn = null, st = null, Nr = !1, zn = !1, CA = 0, Ut = null, _r = 0, kn = 25, Wr = !1, On;
    function $r() {
      if (tt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Wr && l("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), tt;
    }
    function Mu(e, r) {
      if (r === null)
        return l("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", On), !1;
      e.length !== r.length && l(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, On, "[" + e.join(", ") + "]", "[" + r.join(", ") + "]");
      for (var i = 0; i < r.length && i < e.length; i++)
        if (!EA(e[i], r[i]))
          return !1;
      return !0;
    }
    function fa() {
      if (_r > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function xA() {
      return st === null ? bn === null ? (Nr = !1, bn = st = fa()) : (Nr = !0, st = bn) : st.next === null ? (Nr = !1, st = st.next = fa()) : (Nr = !0, st = st.next), st;
    }
    function ji(e, r) {
      tt = r, xn = e, Wr = !1, CA = 0;
    }
    function pu(e, r, i, c) {
      for (; zn; )
        zn = !1, CA = 0, _r += 1, st = null, i = e(r, c);
      return xo(), i;
    }
    function da() {
      var e = CA !== 0;
      return e;
    }
    function xo() {
      Wr = !1, tt = null, xn = null, zn = !1, bn = null, _r = 0, Ut = null, st = null;
    }
    function hu(e) {
      return Wr && l("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), eo(e);
    }
    function ga(e) {
      return On = "useContext", $r(), eo(e);
    }
    function bA(e, r) {
      return typeof r == "function" ? r(e) : r;
    }
    function yu(e) {
      return On = "useState", Ma(
        bA,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Ma(e, r, i) {
      if (e !== bA && (On = "useReducer"), tt = $r(), st = xA(), Nr) {
        var c = st.queue, p = c.dispatch;
        if (Ut !== null) {
          var w = Ut.get(c);
          if (w !== void 0) {
            Ut.delete(c);
            var m = st.memoizedState, Y = w;
            do {
              var _ = Y.action;
              Wr = !0, m = e(m, _), Wr = !1, Y = Y.next;
            } while (Y !== null);
            return st.memoizedState = m, [m, p];
          }
        }
        return [st.memoizedState, p];
      } else {
        Wr = !0;
        var ge;
        e === bA ? ge = typeof r == "function" ? r() : r : ge = i !== void 0 ? i(r) : r, Wr = !1, st.memoizedState = ge;
        var ye = st.queue = {
          last: null,
          dispatch: null
        }, Oe = ye.dispatch = Lu.bind(null, tt, ye);
        return [st.memoizedState, Oe];
      }
    }
    function pa(e, r) {
      tt = $r(), st = xA();
      var i = r === void 0 ? null : r;
      if (st !== null) {
        var c = st.memoizedState;
        if (c !== null && i !== null) {
          var p = c[1];
          if (Mu(i, p))
            return c[0];
        }
      }
      Wr = !0;
      var w = e();
      return Wr = !1, st.memoizedState = [w, i], w;
    }
    function vu(e) {
      tt = $r(), st = xA();
      var r = st.memoizedState;
      if (r === null) {
        var i = {
          current: e
        };
        return Object.seal(i), st.memoizedState = i, i;
      } else
        return r;
    }
    function Du(e, r) {
      On = "useLayoutEffect", l("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Lu(e, r, i) {
      if (_r >= kn)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === tt) {
        zn = !0;
        var c = {
          action: i,
          next: null
        };
        Ut === null && (Ut = /* @__PURE__ */ new Map());
        var p = Ut.get(r);
        if (p === void 0)
          Ut.set(r, c);
        else {
          for (var w = p; w.next !== null; )
            w = w.next;
          w.next = c;
        }
      }
    }
    function Nu(e, r) {
      return pa(function() {
        return e;
      }, r);
    }
    function Iu(e, r, i) {
      return $r(), r(e._source);
    }
    function wu(e, r, i) {
      if (i === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return i();
    }
    function Su(e) {
      return $r(), e;
    }
    function zA() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ha() {
      return $r(), [!1, zA];
    }
    function Ti() {
      var e = xn, r = lu(e.treeContext), i = zo;
      if (i === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var c = CA++;
      return Ht(i, r, c);
    }
    function bo() {
    }
    var ya = {
      readContext: hu,
      useContext: ga,
      useMemo: pa,
      useReducer: Ma,
      useRef: vu,
      useState: yu,
      useInsertionEffect: bo,
      useLayoutEffect: Du,
      useCallback: Nu,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: bo,
      // Effects are not run in the server environment.
      useEffect: bo,
      // Debugging effect
      useDebugValue: bo,
      useDeferredValue: Su,
      useTransition: ha,
      useId: Ti,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Iu,
      useSyncExternalStore: wu
    }, zo = null;
    function kA(e) {
      zo = e;
    }
    function mi(e) {
      try {
        var r = "", i = e;
        do {
          switch (i.tag) {
            case 0:
              r += wo(i.type, null, null);
              break;
            case 1:
              r += pi(i.type, null, null);
              break;
            case 2:
              r += Mi(i.type, null, null);
              break;
          }
          i = i.parent;
        } while (i);
        return r;
      } catch (c) {
        return `
Error generating stack: ` + c.message + `
` + c.stack;
      }
    }
    var dn = M.ReactCurrentDispatcher, OA = M.ReactDebugCurrentFrame, PA = 0, Pn = 1, va = 2, Ei = 3, Qn = 4, ju = 0, Da = 1, Zr = 2, Tu = 12800;
    function mu(e) {
      return console.error(e), null;
    }
    function ko() {
    }
    function Ci(e, r, i, c, p, w, m, Y, _) {
      var ge = [], ye = /* @__PURE__ */ new Set(), Oe = {
        destination: null,
        responseState: r,
        progressiveChunkSize: c === void 0 ? Tu : c,
        status: ju,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: ye,
        pingedTasks: ge,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: p === void 0 ? mu : p,
        onAllReady: w === void 0 ? ko : w,
        onShellReady: m === void 0 ? ko : m,
        onShellError: Y === void 0 ? ko : Y,
        onFatalError: _ === void 0 ? ko : _
      }, Lt = gn(
        Oe,
        0,
        null,
        i,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      Lt.parentFlushed = !0;
      var Yt = Oo(Oe, e, null, Lt, ye, fn, Di, TA);
      return ge.push(Yt), Oe;
    }
    function QA(e, r) {
      var i = e.pingedTasks;
      i.push(r), i.length === 1 && b(function() {
        return xa(e);
      });
    }
    function en(e, r) {
      return {
        id: vr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: r,
        errorDigest: null
      };
    }
    function Oo(e, r, i, c, p, w, m, Y) {
      e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
      var _ = {
        node: r,
        ping: function() {
          return QA(e, _);
        },
        blockedBoundary: i,
        blockedSegment: c,
        abortSet: p,
        legacyContext: w,
        context: m,
        treeContext: Y
      };
      return _.componentStack = null, p.add(_), _;
    }
    function gn(e, r, i, c, p, w) {
      return {
        status: PA,
        id: -1,
        // lazily assigned later
        index: r,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: c,
        boundary: i,
        lastPushedText: p,
        textEmbedded: w
      };
    }
    var Vr = null;
    function xi() {
      return Vr === null || Vr.componentStack === null ? "" : mi(Vr.componentStack);
    }
    function Ir(e, r) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: r
      };
    }
    function no(e, r) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: r
      };
    }
    function bi(e, r) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: r
      };
    }
    function wr(e) {
      e.componentStack === null ? l("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Mn = null;
    function zi(e, r) {
      {
        var i;
        typeof r == "string" ? i = r : r && typeof r.message == "string" ? i = r.message : i = String(r);
        var c = Mn || xi();
        Mn = null, e.errorMessage = i, e.errorComponentStack = c;
      }
    }
    function Po(e, r) {
      var i = e.onError(r);
      if (i != null && typeof i != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
      return i;
    }
    function BA(e, r) {
      var i = e.onShellError;
      i(r);
      var c = e.onFatalError;
      c(r), e.destination !== null ? (e.status = Zr, re(e.destination, r)) : (e.status = Da, e.fatalError = r);
    }
    function La(e, r, i) {
      Ir(r, "Suspense");
      var c = r.blockedBoundary, p = r.blockedSegment, w = i.fallback, m = i.children, Y = /* @__PURE__ */ new Set(), _ = en(e, Y), ge = p.chunks.length, ye = gn(
        e,
        ge,
        _,
        p.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      p.children.push(ye), p.lastPushedText = !1;
      var Oe = gn(
        e,
        0,
        null,
        p.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Oe.parentFlushed = !0, r.blockedBoundary = _, r.blockedSegment = Oe;
      try {
        if (UA(e, r, m), Ji(Oe.chunks, e.responseState, Oe.lastPushedText, Oe.textEmbedded), Oe.status = Pn, Uo(_, Oe), _.pendingTasks === 0) {
          wr(r);
          return;
        }
      } catch (Yt) {
        Oe.status = Qn, _.forceClientRender = !0, _.errorDigest = Po(e, Yt), zi(_, Yt);
      } finally {
        r.blockedBoundary = c, r.blockedSegment = p;
      }
      var Lt = Oo(e, w, c, ye, Y, r.legacyContext, r.context, r.treeContext);
      Lt.componentStack = r.componentStack, e.pingedTasks.push(Lt), wr(r);
    }
    function Na(e, r, i, c) {
      Ir(r, i);
      var p = r.blockedSegment, w = Rr(p.chunks, i, c, e.responseState, p.formatContext);
      p.lastPushedText = !1;
      var m = p.formatContext;
      p.formatContext = on(m, i, c), UA(e, r, w), p.formatContext = m, ir(p.chunks, i), p.lastPushedText = !1, wr(r);
    }
    function Eu(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ki(e, r, i, c, p) {
      var w = {};
      ji(r, w);
      var m = i(c, p);
      return pu(i, c, m, p);
    }
    function Qo(e, r, i, c, p) {
      var w = i.render();
      i.props !== p && (Bi || l("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Dt(c) || "a component"), Bi = !0);
      {
        var m = c.childContextTypes;
        if (m != null) {
          var Y = r.legacyContext, _ = En(i, c, Y, m);
          r.legacyContext = _, cr(e, r, w), r.legacyContext = Y;
          return;
        }
      }
      cr(e, r, w);
    }
    function Ia(e, r, i, c) {
      bi(r, i);
      var p = Aa(i, r.legacyContext), w = au(i, c, p);
      jA(w, i, c, p), Qo(e, r, w, i, c), wr(r);
    }
    var Oi = {}, Bo = {}, Pi = {}, Qi = {}, Bi = !1, Ui = {}, wa = !1, Sa = !1, Yi = !1;
    function Cu(e, r, i, c) {
      var p;
      if (p = Aa(i, r.legacyContext), no(r, i), i.prototype && typeof i.prototype.render == "function") {
        var w = Dt(i) || "Unknown";
        Oi[w] || (l("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), Oi[w] = !0);
      }
      var m = ki(e, r, i, c, p), Y = da();
      if (typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var _ = Dt(i) || "Unknown";
        Bo[_] || (l("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Bo[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var ge = Dt(i) || "Unknown";
          Bo[ge] || (l("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", ge, ge, ge), Bo[ge] = !0);
        }
        jA(m, i, c, p), Qo(e, r, m, i, c);
      } else if (xu(i), Y) {
        var ye = r.treeContext, Oe = 1, Lt = 0;
        r.treeContext = wi(ye, Oe, Lt);
        try {
          cr(e, r, m);
        } finally {
          r.treeContext = ye;
        }
      } else
        cr(e, r, m);
      wr(r);
    }
    function xu(e) {
      {
        if (e && e.childContextTypes && l("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var r = Dt(e) || "Unknown";
          Ui[r] || (l("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", r), Ui[r] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var i = Dt(e) || "Unknown";
          Qi[i] || (l("%s: Function components do not support getDerivedStateFromProps.", i), Qi[i] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var c = Dt(e) || "Unknown";
          Pi[c] || (l("%s: Function components do not support contextType.", c), Pi[c] = !0);
        }
      }
    }
    function ja(e, r) {
      if (e && e.defaultProps) {
        var i = sr({}, r), c = e.defaultProps;
        for (var p in c)
          i[p] === void 0 && (i[p] = c[p]);
        return i;
      }
      return r;
    }
    function bu(e, r, i, c, p) {
      no(r, i.render);
      var w = ki(e, r, i.render, c, p), m = da();
      if (m) {
        var Y = r.treeContext, _ = 1, ge = 0;
        r.treeContext = wi(Y, _, ge);
        try {
          cr(e, r, w);
        } finally {
          r.treeContext = Y;
        }
      } else
        cr(e, r, w);
      wr(r);
    }
    function zu(e, r, i, c, p) {
      var w = i.type, m = ja(w, c);
      Fi(e, r, w, m, p);
    }
    function Ri(e, r, i, c) {
      i._context === void 0 ? i !== i.Consumer && (Yi || (Yi = !0, l("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var p = c.children;
      typeof p != "function" && l("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var w = eo(i), m = p(w);
      cr(e, r, m);
    }
    function ku(e, r, i, c) {
      var p = i._context, w = c.value, m = c.children, Y;
      Y = r.context, r.context = mo(p, w), cr(e, r, m), r.context = Ni(p), Y !== r.context && l("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function lr(e, r, i, c, p) {
      Ir(r, "Lazy");
      var w = i._payload, m = i._init, Y = m(w), _ = ja(Y, c);
      Fi(e, r, Y, _, p), wr(r);
    }
    function Fi(e, r, i, c, p) {
      if (typeof i == "function")
        if (Eu(i)) {
          Ia(e, r, i, c);
          return;
        } else {
          Cu(e, r, i, c);
          return;
        }
      if (typeof i == "string") {
        Na(e, r, i, c);
        return;
      }
      switch (i) {
        case nu:
        case _i:
        case sA:
        case lA:
        case uA: {
          cr(e, r, c.children);
          return;
        }
        case Ai: {
          Ir(r, "SuspenseList"), cr(e, r, c.children), wr(r);
          return;
        }
        case ru:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Kn: {
          La(e, r, c);
          return;
        }
      }
      if (typeof i == "object" && i !== null)
        switch (i.$$typeof) {
          case Do: {
            bu(e, r, i, c, p);
            return;
          }
          case ii: {
            zu(e, r, i, c, p);
            return;
          }
          case yo: {
            ku(e, r, i, c);
            return;
          }
          case vo: {
            Ri(e, r, i, c);
            return;
          }
          case cA: {
            lr(e, r, i, c);
            return;
          }
        }
      var w = "";
      throw (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (i == null ? i : typeof i) + "." + w));
    }
    function Ta(e, r) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (wa || l("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), wa = !0), e.entries === r && (Sa || l("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sa = !0);
    }
    function cr(e, r, i) {
      try {
        return Hi(e, r, i);
      } catch (c) {
        throw typeof c == "object" && c !== null && typeof c.then == "function" || (Mn = Mn !== null ? Mn : xi()), c;
      }
    }
    function Hi(e, r, i) {
      if (r.node = i, typeof i == "object" && i !== null) {
        switch (i.$$typeof) {
          case qi: {
            var c = i, p = c.type, w = c.props, m = c.ref;
            Fi(e, r, p, w, m);
            return;
          }
          case oi:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case cA: {
            var Y = i, _ = Y._payload, ge = Y._init, ye;
            try {
              ye = ge(_);
            } catch (WA) {
              throw typeof WA == "object" && WA !== null && typeof WA.then == "function" && Ir(r, "Lazy"), WA;
            }
            cr(e, r, ye);
            return;
          }
        }
        if ($t(i)) {
          ma(e, r, i);
          return;
        }
        var Oe = Nt(i);
        if (Oe) {
          Ta(i, Oe);
          var Lt = Oe.call(i);
          if (Lt) {
            var Yt = Lt.next();
            if (!Yt.done) {
              var Sr = [];
              do
                Sr.push(Yt.value), Yt = Lt.next();
              while (!Yt.done);
              ma(e, r, Sr);
              return;
            }
            return;
          }
        }
        var za = Object.prototype.toString.call(i);
        throw new Error("Objects are not valid as a React child (found: " + (za === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : za) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof i == "string") {
        var ka = r.blockedSegment;
        ka.lastPushedText = Xi(r.blockedSegment.chunks, i, e.responseState, ka.lastPushedText);
        return;
      }
      if (typeof i == "number") {
        var Oa = r.blockedSegment;
        Oa.lastPushedText = Xi(r.blockedSegment.chunks, "" + i, e.responseState, Oa.lastPushedText);
        return;
      }
      typeof i == "function" && l("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ma(e, r, i) {
      for (var c = i.length, p = 0; p < c; p++) {
        var w = r.treeContext;
        r.treeContext = wi(w, c, p);
        try {
          UA(e, r, i[p]);
        } finally {
          r.treeContext = w;
        }
      }
    }
    function Ou(e, r, i) {
      var c = r.blockedSegment, p = c.chunks.length, w = gn(
        e,
        p,
        null,
        c.formatContext,
        // Adopt the parent segment's leading text embed
        c.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      c.children.push(w), c.lastPushedText = !1;
      var m = Oo(e, r.node, r.blockedBoundary, w, r.abortSet, r.legacyContext, r.context, r.treeContext);
      r.componentStack !== null && (m.componentStack = r.componentStack.parent);
      var Y = m.ping;
      i.then(Y, Y);
    }
    function UA(e, r, i) {
      var c = r.blockedSegment.formatContext, p = r.legacyContext, w = r.context, m = null;
      m = r.componentStack;
      try {
        return cr(e, r, i);
      } catch (Y) {
        if (xo(), typeof Y == "object" && Y !== null && typeof Y.then == "function") {
          Ou(e, r, Y), r.blockedSegment.formatContext = c, r.legacyContext = p, r.context = w, hA(w), r.componentStack = m;
          return;
        } else
          throw r.blockedSegment.formatContext = c, r.legacyContext = p, r.context = w, hA(w), r.componentStack = m, Y;
      }
    }
    function YA(e, r, i, c) {
      var p = Po(e, c);
      if (r === null ? BA(e, c) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, r.errorDigest = p, zi(r, c), r.parentFlushed && e.clientRenderedBoundaries.push(r))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var w = e.onAllReady;
        w();
      }
    }
    function Ea(e) {
      var r = this, i = e.blockedBoundary, c = e.blockedSegment;
      c.status = Ei, Yo(r, i, c);
    }
    function Ca(e, r, i) {
      var c = e.blockedBoundary, p = e.blockedSegment;
      if (p.status = Ei, c === null)
        r.allPendingTasks--, r.status !== Zr && (r.status = Zr, r.destination !== null && k(r.destination));
      else {
        if (c.pendingTasks--, !c.forceClientRender) {
          c.forceClientRender = !0;
          var w = i === void 0 ? new Error("The render was aborted by the server without a reason.") : i;
          c.errorDigest = r.onError(w);
          {
            var m = "The server did not finish this Suspense boundary: ";
            w && typeof w.message == "string" ? w = m + w.message : w = m + String(w);
            var Y = Vr;
            Vr = e;
            try {
              zi(c, w);
            } finally {
              Vr = Y;
            }
          }
          c.parentFlushed && r.clientRenderedBoundaries.push(c);
        }
        if (c.fallbackAbortableTasks.forEach(function(ge) {
          return Ca(ge, r, i);
        }), c.fallbackAbortableTasks.clear(), r.allPendingTasks--, r.allPendingTasks === 0) {
          var _ = r.onAllReady;
          _();
        }
      }
    }
    function Uo(e, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null) {
        var i = r.children[0];
        i.id = r.id, i.parentFlushed = !0, i.status === Pn && Uo(e, i);
      } else {
        var c = e.completedSegments;
        c.push(r);
      }
    }
    function Yo(e, r, i) {
      if (r === null) {
        if (i.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = i;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = ko;
          var c = e.onShellReady;
          c();
        }
      } else if (r.pendingTasks--, !r.forceClientRender) {
        if (r.pendingTasks === 0)
          i.parentFlushed && i.status === Pn && Uo(r, i), r.parentFlushed && e.completedBoundaries.push(r), r.fallbackAbortableTasks.forEach(Ea, e), r.fallbackAbortableTasks.clear();
        else if (i.parentFlushed && i.status === Pn) {
          Uo(r, i);
          var p = r.completedSegments;
          p.length === 1 && r.parentFlushed && e.partialBoundaries.push(r);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var w = e.onAllReady;
        w();
      }
    }
    function RA(e, r) {
      var i = r.blockedSegment;
      if (i.status === PA) {
        hA(r.context);
        var c = null;
        c = Vr, Vr = r;
        try {
          cr(e, r, r.node), Ji(i.chunks, e.responseState, i.lastPushedText, i.textEmbedded), r.abortSet.delete(r), i.status = Pn, Yo(e, r.blockedBoundary, i);
        } catch (w) {
          if (xo(), typeof w == "object" && w !== null && typeof w.then == "function") {
            var p = r.ping;
            w.then(p, p);
          } else
            r.abortSet.delete(r), i.status = Qn, YA(e, r.blockedBoundary, i, w);
        } finally {
          Vr = c;
        }
      }
    }
    function xa(e) {
      if (e.status !== Zr) {
        var r = Au(), i = dn.current;
        dn.current = ya;
        var c;
        c = OA.getCurrentStack, OA.getCurrentStack = xi;
        var p = zo;
        kA(e.responseState);
        try {
          var w = e.pingedTasks, m;
          for (m = 0; m < w.length; m++) {
            var Y = w[m];
            RA(e, Y);
          }
          w.splice(0, m), e.destination !== null && HA(e, e.destination);
        } catch (_) {
          Po(e, _), BA(e, _);
        } finally {
          kA(p), dn.current = i, OA.getCurrentStack = c, i === ya && hA(r);
        }
      }
    }
    function Ro(e, r, i) {
      switch (i.parentFlushed = !0, i.status) {
        case PA: {
          var c = i.id = e.nextSegmentId++;
          return i.lastPushedText = !1, i.textEmbedded = !1, Jo(r, e.responseState, c);
        }
        case Pn: {
          i.status = va;
          for (var p = !0, w = i.chunks, m = 0, Y = i.children, _ = 0; _ < Y.length; _++) {
            for (var ge = Y[_]; m < ge.index; m++)
              L(r, w[m]);
            p = Fo(e, r, ge);
          }
          for (; m < w.length - 1; m++)
            L(r, w[m]);
          return m < w.length && (p = T(r, w[m])), p;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Fo(e, r, i) {
      var c = i.boundary;
      if (c === null)
        return Ro(e, r, i);
      if (c.parentFlushed = !0, c.forceClientRender)
        return Lr(r, e.responseState, c.errorDigest, c.errorMessage, c.errorComponentStack), Ro(e, r, i), Ki(r, e.responseState);
      if (c.pendingTasks > 0) {
        c.rootSegmentID = e.nextSegmentId++, c.completedSegments.length > 0 && e.partialBoundaries.push(c);
        var p = c.id = Dr(e.responseState);
        return cn(r, e.responseState, p), Ro(e, r, i), Mo(r, e.responseState);
      } else {
        if (c.byteSize > e.progressiveChunkSize)
          return c.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(c), cn(r, e.responseState, c.id), Ro(e, r, i), Mo(r, e.responseState);
        ni(r, e.responseState);
        var w = c.completedSegments;
        if (w.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var m = w[0];
        return Fo(e, r, m), tu(r, e.responseState);
      }
    }
    function Pu(e, r, i) {
      return _a(r, e.responseState, i.id, i.errorDigest, i.errorMessage, i.errorComponentStack);
    }
    function Wi(e, r, i) {
      return P(r, e.responseState, i.formatContext, i.id), Fo(e, r, i), V(r, i.formatContext);
    }
    function FA(e, r, i) {
      for (var c = i.completedSegments, p = 0; p < c.length; p++) {
        var w = c[p];
        ba(e, r, i, w);
      }
      return c.length = 0, Ga(r, e.responseState, i.id, i.rootSegmentID);
    }
    function Qu(e, r, i) {
      for (var c = i.completedSegments, p = 0; p < c.length; p++) {
        var w = c[p];
        if (!ba(e, r, i, w))
          return p++, c.splice(0, p), !1;
      }
      return c.splice(0, p), !0;
    }
    function ba(e, r, i, c) {
      if (c.status === va)
        return !0;
      var p = c.id;
      if (p === -1) {
        var w = c.id = i.rootSegmentID;
        if (w === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Wi(e, r, c);
      } else
        return Wi(e, r, c), ur(r, e.responseState, p);
    }
    function HA(e, r) {
      try {
        var i = e.completedRootSegment;
        i !== null && e.pendingRootTasks === 0 && (Fo(e, r, i), e.completedRootSegment = null, lo(r, e.responseState));
        var c = e.clientRenderedBoundaries, p;
        for (p = 0; p < c.length; p++) {
          var w = c[p];
          if (!Pu(e, r, w)) {
            e.destination = null, p++, c.splice(0, p);
            return;
          }
        }
        c.splice(0, p);
        var m = e.completedBoundaries;
        for (p = 0; p < m.length; p++) {
          var Y = m[p];
          if (!FA(e, r, Y)) {
            e.destination = null, p++, m.splice(0, p);
            return;
          }
        }
        m.splice(0, p);
        var _ = e.partialBoundaries;
        for (p = 0; p < _.length; p++) {
          var ge = _[p];
          if (!Qu(e, r, ge)) {
            e.destination = null, p++, _.splice(0, p);
            return;
          }
        }
        _.splice(0, p);
        var ye = e.completedBoundaries;
        for (p = 0; p < ye.length; p++) {
          var Oe = ye[p];
          if (!FA(e, r, Oe)) {
            e.destination = null, p++, ye.splice(0, p);
            return;
          }
        }
        ye.splice(0, p);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && l("There was still abortable task at the root when we closed. This is a bug in React."), k(r));
      }
    }
    function Bu(e) {
      b(function() {
        return xa(e);
      });
    }
    function t(e, r) {
      if (e.status === Da) {
        e.status = Zr, re(r, e.fatalError);
        return;
      }
      if (e.status !== Zr && e.destination === null) {
        e.destination = r;
        try {
          HA(e, r);
        } catch (i) {
          Po(e, i), BA(e, i);
        }
      }
    }
    function n(e, r) {
      try {
        var i = e.abortableTasks;
        i.forEach(function(c) {
          return Ca(c, e, r);
        }), i.clear(), e.destination !== null && HA(e, e.destination);
      } catch (c) {
        Po(e, c), BA(e, c);
      }
    }
    function u() {
    }
    function g(e, r, i, c) {
      var p = !1, w = null, m = "", Y = {
        push: function(Oe) {
          return Oe !== null && (m += Oe), !0;
        },
        destroy: function(Oe) {
          p = !0, w = Oe;
        }
      }, _ = !1;
      function ge() {
        _ = !0;
      }
      var ye = Ci(e, eu(i, r ? r.identifierPrefix : void 0), ri(), 1 / 0, u, void 0, ge, void 0, void 0);
      if (Bu(ye), n(ye, c), t(ye, Y), p)
        throw w;
      if (!_)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return m;
    }
    function v(e, r) {
      return g(e, r, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function S(e, r) {
      return g(e, r, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function C() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function F() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Wo.renderToNodeStream = C, Wo.renderToStaticMarkup = S, Wo.renderToStaticNodeStream = F, Wo.renderToString = v, Wo.version = a;
  }()), Wo;
}
var Qa = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ys;
function Ql() {
  return ys || (ys = 1, process.env.NODE_ENV !== "production" && function() {
    var s = ao, a = "18.3.1", M = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(t) {
      {
        for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), g = 1; g < n; g++)
          u[g - 1] = arguments[g];
        E("warn", t, u);
      }
    }
    function l(t) {
      {
        for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), g = 1; g < n; g++)
          u[g - 1] = arguments[g];
        E("error", t, u);
      }
    }
    function E(t, n, u) {
      {
        var g = M.ReactDebugCurrentFrame, v = g.getStackAddendum();
        v !== "" && (n += "%s", u = u.concat([v]));
        var S = u.map(function(C) {
          return String(C);
        });
        S.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, S);
      }
    }
    function b(t) {
      t();
    }
    var x = 512, L = null, T = 0;
    function R(t) {
      L = new Uint8Array(x), T = 0;
    }
    function k(t, n) {
      if (n.length !== 0) {
        if (n.length > x) {
          T > 0 && (t.enqueue(new Uint8Array(L.buffer, 0, T)), L = new Uint8Array(x), T = 0), t.enqueue(n);
          return;
        }
        var u = n, g = L.length - T;
        g < u.length && (g === 0 ? t.enqueue(L) : (L.set(u.subarray(0, g), T), t.enqueue(L), u = u.subarray(g)), L = new Uint8Array(x), T = 0), L.set(u, T), T += u.length;
      }
    }
    function ee(t, n) {
      return k(t, n), !0;
    }
    function fe(t) {
      L && T > 0 && (t.enqueue(new Uint8Array(L.buffer, 0, T)), L = null, T = 0);
    }
    function re(t) {
      t.close();
    }
    var Ae = new TextEncoder();
    function W(t) {
      return Ae.encode(t);
    }
    function O(t) {
      return Ae.encode(t);
    }
    function G(t, n) {
      typeof t.error == "function" ? t.error(n) : t.close();
    }
    function X(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, u = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function $(t) {
      try {
        return Q(t), !1;
      } catch {
        return !0;
      }
    }
    function Q(t) {
      return "" + t;
    }
    function se(t, n) {
      if ($(t))
        return l("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", n, X(t)), Q(t);
    }
    function ne(t, n) {
      if ($(t))
        return l("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", n, X(t)), Q(t);
    }
    function Pe(t) {
      if ($(t))
        return l("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", X(t)), Q(t);
    }
    var De = Object.prototype.hasOwnProperty, Le = 0, je = 1, Qe = 2, _e = 3, Ne = 4, Ze = 5, Ge = 6, $e = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", lt = $e + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", At = new RegExp("^[" + $e + "][" + lt + "]*$"), J = {}, K = {};
    function le(t) {
      return De.call(K, t) ? !0 : De.call(J, t) ? !1 : At.test(t) ? (K[t] = !0, !0) : (J[t] = !0, l("Invalid attribute name: `%s`", t), !1);
    }
    function Ie(t, n, u, g) {
      if (u !== null && u.type === Le)
        return !1;
      switch (typeof n) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (g)
            return !1;
          if (u !== null)
            return !u.acceptsBooleans;
          var v = t.toLowerCase().slice(0, 5);
          return v !== "data-" && v !== "aria-";
        }
        default:
          return !1;
      }
    }
    function pe(t) {
      return de.hasOwnProperty(t) ? de[t] : null;
    }
    function ve(t, n, u, g, v, S, C) {
      this.acceptsBooleans = n === Qe || n === _e || n === Ne, this.attributeName = g, this.attributeNamespace = v, this.mustUseProperty = u, this.propertyName = t, this.type = n, this.sanitizeURL = S, this.removeEmptyString = C;
    }
    var de = {}, me = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    me.forEach(function(t) {
      de[t] = new ve(
        t,
        Le,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
      var n = t[0], u = t[1];
      de[n] = new ve(
        n,
        je,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
      de[t] = new ve(
        t,
        Qe,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
      de[t] = new ve(
        t,
        Qe,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(t) {
      de[t] = new ve(
        t,
        _e,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      de[t] = new ve(
        t,
        _e,
        !0,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      de[t] = new ve(
        t,
        Ne,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      de[t] = new ve(
        t,
        Ge,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(t) {
      de[t] = new ve(
        t,
        Ze,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ke = /[\-\:]([a-z])/g, Ee = function(t) {
      return t[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(ke, Ee);
      de[n] = new ve(
        n,
        je,
        !1,
        // mustUseProperty
        t,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(ke, Ee);
      de[n] = new ve(
        n,
        je,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(t) {
      var n = t.replace(ke, Ee);
      de[n] = new ve(
        n,
        je,
        !1,
        // mustUseProperty
        t,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(t) {
      de[t] = new ve(
        t,
        je,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xe = "xlinkHref";
    de[xe] = new ve(
      "xlinkHref",
      je,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(t) {
      de[t] = new ve(
        t,
        je,
        !1,
        // mustUseProperty
        t.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var qe = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function ie(t, n) {
      return t + n.charAt(0).toUpperCase() + n.substring(1);
    }
    var Ke = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qe).forEach(function(t) {
      Ke.forEach(function(n) {
        qe[ie(n, t)] = qe[t];
      });
    });
    var ut = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function zt(t, n) {
      ut[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || l("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), n.onChange || n.readOnly || n.disabled || n.checked == null || l("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function wt(t, n) {
      if (t.indexOf("-") === -1)
        return typeof n.is == "string";
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var tr = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, St = {}, Ot = new RegExp("^(aria)-[" + lt + "]*$"), Wt = new RegExp("^(aria)[A-Z][" + lt + "]*$");
    function Or(t, n) {
      {
        if (De.call(St, n) && St[n])
          return !0;
        if (Wt.test(n)) {
          var u = "aria-" + n.slice(4).toLowerCase(), g = tr.hasOwnProperty(u) ? u : null;
          if (g == null)
            return l("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", n), St[n] = !0, !0;
          if (n !== g)
            return l("Invalid ARIA attribute `%s`. Did you mean `%s`?", n, g), St[n] = !0, !0;
        }
        if (Ot.test(n)) {
          var v = n.toLowerCase(), S = tr.hasOwnProperty(v) ? v : null;
          if (S == null)
            return St[n] = !0, !1;
          if (n !== S)
            return l("Unknown ARIA attribute `%s`. Did you mean `%s`?", n, S), St[n] = !0, !0;
        }
      }
      return !0;
    }
    function xt(t, n) {
      {
        var u = [];
        for (var g in n) {
          var v = Or(t, g);
          v || u.push(g);
        }
        var S = u.map(function(C) {
          return "`" + C + "`";
        }).join(", ");
        u.length === 1 ? l("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, t) : u.length > 1 && l("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, t);
      }
    }
    function jt(t, n) {
      wt(t, n) || xt(t, n);
    }
    var yt = !1;
    function dr(t, n) {
      {
        if (t !== "input" && t !== "textarea" && t !== "select")
          return;
        n != null && n.value === null && !yt && (yt = !0, t === "select" && n.multiple ? l("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : l("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
      }
    }
    var gr = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Pt = function() {
    };
    {
      var pt = {}, Mr = /^on./, Tr = /^on[^A-Z]/, rr = new RegExp("^(aria)-[" + lt + "]*$"), pr = new RegExp("^(aria)[A-Z][" + lt + "]*$");
      Pt = function(t, n, u, g) {
        if (De.call(pt, n) && pt[n])
          return !0;
        var v = n.toLowerCase();
        if (v === "onfocusin" || v === "onfocusout")
          return l("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pt[n] = !0, !0;
        if (g != null) {
          var S = g.registrationNameDependencies, C = g.possibleRegistrationNames;
          if (S.hasOwnProperty(n))
            return !0;
          var F = C.hasOwnProperty(v) ? C[v] : null;
          if (F != null)
            return l("Invalid event handler property `%s`. Did you mean `%s`?", n, F), pt[n] = !0, !0;
          if (Mr.test(n))
            return l("Unknown event handler property `%s`. It will be ignored.", n), pt[n] = !0, !0;
        } else if (Mr.test(n))
          return Tr.test(n) && l("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", n), pt[n] = !0, !0;
        if (rr.test(n) || pr.test(n))
          return !0;
        if (v === "innerhtml")
          return l("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pt[n] = !0, !0;
        if (v === "aria")
          return l("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pt[n] = !0, !0;
        if (v === "is" && u !== null && u !== void 0 && typeof u != "string")
          return l("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof u), pt[n] = !0, !0;
        if (typeof u == "number" && isNaN(u))
          return l("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", n), pt[n] = !0, !0;
        var e = pe(n), r = e !== null && e.type === Le;
        if (gr.hasOwnProperty(v)) {
          var i = gr[v];
          if (i !== n)
            return l("Invalid DOM property `%s`. Did you mean `%s`?", n, i), pt[n] = !0, !0;
        } else if (!r && n !== v)
          return l("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", n, v), pt[n] = !0, !0;
        return typeof u == "boolean" && Ie(n, u, e, !1) ? (u ? l('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', u, n, n, u, n) : l('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', u, n, n, u, n, n, n), pt[n] = !0, !0) : r ? !0 : Ie(n, u, e, !1) ? (pt[n] = !0, !1) : ((u === "false" || u === "true") && e !== null && e.type === _e && (l("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", u, n, u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', n, u), pt[n] = !0), !0);
      };
    }
    var nr = function(t, n, u) {
      {
        var g = [];
        for (var v in n) {
          var S = Pt(t, v, n[v], u);
          S || g.push(v);
        }
        var C = g.map(function(F) {
          return "`" + F + "`";
        }).join(", ");
        g.length === 1 ? l("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", C, t) : g.length > 1 && l("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", C, t);
      }
    };
    function Pr(t, n, u) {
      wt(t, n) || nr(t, n, u);
    }
    var hr = function() {
    };
    {
      var Zt = /^(?:webkit|moz|o)[A-Z]/, yr = /^-ms-/, mr = /-(.)/g, It = /;\s*$/, ae = {}, Me = {}, ce = !1, Ce = !1, Ue = function(t) {
        return t.replace(mr, function(n, u) {
          return u.toUpperCase();
        });
      }, Fe = function(t) {
        ae.hasOwnProperty(t) && ae[t] || (ae[t] = !0, l(
          "Unsupported style property %s. Did you mean %s?",
          t,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ue(t.replace(yr, "ms-"))
        ));
      }, Ye = function(t) {
        ae.hasOwnProperty(t) && ae[t] || (ae[t] = !0, l("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1)));
      }, at = function(t, n) {
        Me.hasOwnProperty(n) && Me[n] || (Me[n] = !0, l(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, n.replace(It, "")));
      }, ct = function(t, n) {
        ce || (ce = !0, l("`NaN` is an invalid value for the `%s` css style property.", t));
      }, Xe = function(t, n) {
        Ce || (Ce = !0, l("`Infinity` is an invalid value for the `%s` css style property.", t));
      };
      hr = function(t, n) {
        t.indexOf("-") > -1 ? Fe(t) : Zt.test(t) ? Ye(t) : It.test(n) && at(t, n), typeof n == "number" && (isNaN(n) ? ct(t, n) : isFinite(n) || Xe(t, n));
      };
    }
    var kt = hr, Et = /["'&<>]/;
    function or(t) {
      Pe(t);
      var n = "" + t, u = Et.exec(n);
      if (!u)
        return n;
      var g, v = "", S, C = 0;
      for (S = u.index; S < n.length; S++) {
        switch (n.charCodeAt(S)) {
          case 34:
            g = "&quot;";
            break;
          case 38:
            g = "&amp;";
            break;
          case 39:
            g = "&#x27;";
            break;
          case 60:
            g = "&lt;";
            break;
          case 62:
            g = "&gt;";
            break;
          default:
            continue;
        }
        C !== S && (v += n.substring(C, S)), C = S + 1, v += g;
      }
      return C !== S ? v + n.substring(C, S) : v;
    }
    function vt(t) {
      return typeof t == "boolean" || typeof t == "number" ? "" + t : or(t);
    }
    var Xr = /([A-Z])/g, vn = /^ms-/;
    function Dn(t) {
      return t.replace(Xr, "-$1").toLowerCase().replace(vn, "-ms-");
    }
    var $t = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, j = !1;
    function q(t) {
      !j && $t.test(t) && (j = !0, l("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(t)));
    }
    var ue = Array.isArray;
    function Se(t) {
      return ue(t);
    }
    var He = O("<script>"), rt = O("<\/script>"), We = O('<script src="'), Be = O('<script type="module" src="'), ht = O('" async=""><\/script>');
    function nt(t) {
      return Pe(t), ("" + t).replace(ot, Tt);
    }
    var ot = /(<\/|<)(s)(cript)/gi, Tt = function(t, n, u, g) {
      return "" + n + (u === "s" ? "\\u0073" : "\\u0053") + g;
    };
    function Rt(t, n, u, g, v) {
      var S = t === void 0 ? "" : t, C = n === void 0 ? He : O('<script nonce="' + vt(n) + '">'), F = [];
      if (u !== void 0 && F.push(C, W(nt(u)), rt), g !== void 0)
        for (var e = 0; e < g.length; e++)
          F.push(We, W(vt(g[e])), ht);
      if (v !== void 0)
        for (var r = 0; r < v.length; r++)
          F.push(Be, W(vt(v[r])), ht);
      return {
        bootstrapChunks: F,
        startInlineScript: C,
        placeholderPrefix: O(S + "P:"),
        segmentPrefix: O(S + "S:"),
        boundaryPrefix: S + "B:",
        idPrefix: S,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var mt = 0, Je = 1, Ft = 2, Vt = 3, Ct = 4, on = 5, vr = 6, Dr = 7;
    function Ht(t, n) {
      return {
        insertionMode: t,
        selectedValue: n
      };
    }
    function Er(t) {
      var n = t === "http://www.w3.org/2000/svg" ? Ft : t === "http://www.w3.org/1998/Math/MathML" ? Vt : mt;
      return Ht(n, null);
    }
    function Qr(t, n, u) {
      switch (n) {
        case "select":
          return Ht(Je, u.value != null ? u.value : u.defaultValue);
        case "svg":
          return Ht(Ft, null);
        case "math":
          return Ht(Vt, null);
        case "foreignObject":
          return Ht(Je, null);
        case "table":
          return Ht(Ct, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ht(on, null);
        case "colgroup":
          return Ht(Dr, null);
        case "tr":
          return Ht(vr, null);
      }
      return t.insertionMode >= Ct || t.insertionMode === mt ? Ht(Je, null) : t;
    }
    var Ln = null;
    function Nn(t) {
      var n = t.nextSuspenseID++;
      return O(t.boundaryPrefix + n.toString(16));
    }
    function An(t, n, u) {
      var g = t.idPrefix, v = ":" + g + "R" + n;
      return u > 0 && (v += "H" + u.toString(32)), v + ":";
    }
    function Br(t) {
      return vt(t);
    }
    var In = O("<!-- -->");
    function an(t, n, u, g) {
      return n === "" ? g : (g && t.push(In), t.push(W(Br(n))), !0);
    }
    function un(t, n, u, g) {
      u && g && t.push(In);
    }
    var o = /* @__PURE__ */ new Map();
    function f(t) {
      var n = o.get(t);
      if (n !== void 0)
        return n;
      var u = O(vt(Dn(t)));
      return o.set(t, u), u;
    }
    var y = O(' style="'), N = O(":"), B = O(";");
    function z(t, n, u) {
      if (typeof u != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var g = !0;
      for (var v in u)
        if (De.call(u, v)) {
          var S = u[v];
          if (!(S == null || typeof S == "boolean" || S === "")) {
            var C = void 0, F = void 0, e = v.indexOf("--") === 0;
            e ? (C = W(vt(v)), ne(S, v), F = W(vt(("" + S).trim()))) : (kt(v, S), C = f(v), typeof S == "number" ? S !== 0 && !De.call(qe, v) ? F = W(S + "px") : F = W("" + S) : (ne(S, v), F = W(vt(("" + S).trim())))), g ? (g = !1, t.push(y, C, N, F)) : t.push(B, C, N, F);
          }
        }
      g || t.push(he);
    }
    var H = O(" "), te = O('="'), he = O('"'), be = O('=""');
    function we(t, n, u, g) {
      switch (u) {
        case "style": {
          z(t, n, g);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(u.length > 2 && (u[0] === "o" || u[0] === "O") && (u[1] === "n" || u[1] === "N"))
      ) {
        var v = pe(u);
        if (v !== null) {
          switch (typeof g) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!v.acceptsBooleans)
                return;
          }
          var S = v.attributeName, C = W(S);
          switch (v.type) {
            case _e:
              g && t.push(H, C, be);
              return;
            case Ne:
              g === !0 ? t.push(H, C, be) : g === !1 || t.push(H, C, te, W(vt(g)), he);
              return;
            case Ze:
              isNaN(g) || t.push(H, C, te, W(vt(g)), he);
              break;
            case Ge:
              !isNaN(g) && g >= 1 && t.push(H, C, te, W(vt(g)), he);
              break;
            default:
              v.sanitizeURL && (se(g, S), g = "" + g, q(g)), t.push(H, C, te, W(vt(g)), he);
          }
        } else if (le(u)) {
          switch (typeof g) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var F = u.toLowerCase().slice(0, 5);
              if (F !== "data-" && F !== "aria-")
                return;
            }
          }
          t.push(H, W(u), te, W(vt(g)), he);
        }
      }
    }
    var et = O(">"), Gt = O("/>");
    function Qt(t, n, u) {
      if (n != null) {
        if (u != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof n != "object" || !("__html" in n))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var g = n.__html;
        g != null && (Pe(g), t.push(W("" + g)));
      }
    }
    var Bt = !1, Cr = !1, Ar = !1, sn = !1, Ur = !1, Jr = !1, xr = !1;
    function wn(t, n) {
      {
        var u = t[n];
        if (u != null) {
          var g = Se(u);
          t.multiple && !g ? l("The `%s` prop supplied to <select> must be an array if `multiple` is true.", n) : !t.multiple && g && l("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", n);
        }
      }
    }
    function GA(t, n, u) {
      zt("select", n), wn(n, "value"), wn(n, "defaultValue"), n.value !== void 0 && n.defaultValue !== void 0 && !Ar && (l("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ar = !0), t.push(ir("select"));
      var g = null, v = null;
      for (var S in n)
        if (De.call(n, S)) {
          var C = n[S];
          if (C == null)
            continue;
          switch (S) {
            case "children":
              g = C;
              break;
            case "dangerouslySetInnerHTML":
              v = C;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              we(t, u, S, C);
              break;
          }
        }
      return t.push(et), Qt(t, v, g), g;
    }
    function XA(t) {
      var n = "";
      return s.Children.forEach(t, function(u) {
        u != null && (n += u, !Ur && typeof u != "string" && typeof u != "number" && (Ur = !0, l("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), n;
    }
    var uo = O(' selected=""');
    function JA(t, n, u, g) {
      var v = g.selectedValue;
      t.push(ir("option"));
      var S = null, C = null, F = null, e = null;
      for (var r in n)
        if (De.call(n, r)) {
          var i = n[r];
          if (i == null)
            continue;
          switch (r) {
            case "children":
              S = i;
              break;
            case "selected":
              F = i, xr || (l("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xr = !0);
              break;
            case "dangerouslySetInnerHTML":
              e = i;
              break;
            case "value":
              C = i;
            default:
              we(t, u, r, i);
              break;
          }
        }
      if (v != null) {
        var c;
        if (C !== null ? (se(C, "value"), c = "" + C) : (e !== null && (Jr || (Jr = !0, l("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), c = XA(S)), Se(v))
          for (var p = 0; p < v.length; p++) {
            se(v[p], "value");
            var w = "" + v[p];
            if (w === c) {
              t.push(uo);
              break;
            }
          }
        else
          se(v, "select.value"), "" + v === c && t.push(uo);
      } else
        F && t.push(uo);
      return t.push(et), Qt(t, e, S), S;
    }
    function so(t, n, u) {
      zt("input", n), n.checked !== void 0 && n.defaultChecked !== void 0 && !Cr && (l("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), Cr = !0), n.value !== void 0 && n.defaultValue !== void 0 && !Bt && (l("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", n.type), Bt = !0), t.push(ir("input"));
      var g = null, v = null, S = null, C = null;
      for (var F in n)
        if (De.call(n, F)) {
          var e = n[F];
          if (e == null)
            continue;
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              C = e;
              break;
            case "defaultValue":
              v = e;
              break;
            case "checked":
              S = e;
              break;
            case "value":
              g = e;
              break;
            default:
              we(t, u, F, e);
              break;
          }
        }
      return S !== null ? we(t, u, "checked", S) : C !== null && we(t, u, "checked", C), g !== null ? we(t, u, "value", g) : v !== null && we(t, u, "value", v), t.push(Gt), null;
    }
    function br(t, n, u) {
      zt("textarea", n), n.value !== void 0 && n.defaultValue !== void 0 && !sn && (l("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), sn = !0), t.push(ir("textarea"));
      var g = null, v = null, S = null;
      for (var C in n)
        if (De.call(n, C)) {
          var F = n[C];
          if (F == null)
            continue;
          switch (C) {
            case "children":
              S = F;
              break;
            case "value":
              g = F;
              break;
            case "defaultValue":
              v = F;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              we(t, u, C, F);
              break;
          }
        }
      if (g === null && v !== null && (g = v), t.push(et), S != null) {
        if (l("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), g != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Se(S)) {
          if (S.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Pe(S[0]), g = "" + S[0];
        }
        Pe(S), g = "" + S;
      }
      return typeof g == "string" && g[0] === `
` && t.push(Kr), g !== null && (se(g, "value"), t.push(W(Br("" + g)))), null;
    }
    function Sn(t, n, u, g) {
      t.push(ir(u));
      for (var v in n)
        if (De.call(n, v)) {
          var S = n[v];
          if (S == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(u + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              we(t, g, v, S);
              break;
          }
        }
      return t.push(Gt), null;
    }
    function Bn(t, n, u) {
      t.push(ir("menuitem"));
      for (var g in n)
        if (De.call(n, g)) {
          var v = n[g];
          if (v == null)
            continue;
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              we(t, u, g, v);
              break;
          }
        }
      return t.push(et), null;
    }
    function ft(t, n, u) {
      t.push(ir("title"));
      var g = null;
      for (var v in n)
        if (De.call(n, v)) {
          var S = n[v];
          if (S == null)
            continue;
          switch (v) {
            case "children":
              g = S;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              we(t, u, v, S);
              break;
          }
        }
      t.push(et);
      {
        var C = Array.isArray(g) && g.length < 2 ? g[0] || null : g;
        Array.isArray(g) && g.length > 1 ? l("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : C != null && C.$$typeof != null ? l("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : C != null && typeof C != "string" && typeof C != "number" && l("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return g;
    }
    function Yr(t, n, u, g) {
      t.push(ir(u));
      var v = null, S = null;
      for (var C in n)
        if (De.call(n, C)) {
          var F = n[C];
          if (F == null)
            continue;
          switch (C) {
            case "children":
              v = F;
              break;
            case "dangerouslySetInnerHTML":
              S = F;
              break;
            default:
              we(t, g, C, F);
              break;
          }
        }
      return t.push(et), Qt(t, S, v), typeof v == "string" ? (t.push(W(Br(v))), null) : v;
    }
    function Xt(t, n, u, g) {
      t.push(ir(u));
      var v = null, S = null;
      for (var C in n)
        if (De.call(n, C)) {
          var F = n[C];
          if (F == null)
            continue;
          switch (C) {
            case "children":
              v = F;
              break;
            case "dangerouslySetInnerHTML":
              S = F;
              break;
            case "style":
              z(t, g, F);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              le(C) && typeof F != "function" && typeof F != "symbol" && t.push(H, W(C), te, W(vt(F)), he);
              break;
          }
        }
      return t.push(et), Qt(t, S, v), v;
    }
    var Kr = O(`
`);
    function Rr(t, n, u, g) {
      t.push(ir(u));
      var v = null, S = null;
      for (var C in n)
        if (De.call(n, C)) {
          var F = n[C];
          if (F == null)
            continue;
          switch (C) {
            case "children":
              v = F;
              break;
            case "dangerouslySetInnerHTML":
              S = F;
              break;
            default:
              we(t, g, C, F);
              break;
          }
        }
      if (t.push(et), S != null) {
        if (v != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof S != "object" || !("__html" in S))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var e = S.__html;
        e != null && (typeof e == "string" && e.length > 0 && e[0] === `
` ? t.push(Kr, W(e)) : (Pe(e), t.push(W("" + e))));
      }
      return typeof v == "string" && v[0] === `
` && t.push(Kr), v;
    }
    var Un = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Fr = /* @__PURE__ */ new Map();
    function ir(t) {
      var n = Fr.get(t);
      if (n === void 0) {
        if (!Un.test(t))
          throw new Error("Invalid tag: " + t);
        n = O("<" + t), Fr.set(t, n);
      }
      return n;
    }
    var lo = O("<!DOCTYPE html>");
    function co(t, n, u, g, v) {
      switch (jt(n, u), dr(n, u), Pr(n, u, null), !u.suppressContentEditableWarning && u.contentEditable && u.children != null && l("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), v.insertionMode !== Ft && v.insertionMode !== Vt && n.indexOf("-") === -1 && typeof u.is != "string" && n.toLowerCase() !== n && l("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", n), n) {
        case "select":
          return GA(t, u, g);
        case "option":
          return JA(t, u, g, v);
        case "textarea":
          return br(t, u, g);
        case "input":
          return so(t, u, g);
        case "menuitem":
          return Bn(t, u, g);
        case "title":
          return ft(t, u, g);
        case "listing":
        case "pre":
          return Rr(t, u, n, g);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Sn(t, u, n, g);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Yr(t, u, n, g);
        case "html":
          return v.insertionMode === mt && t.push(lo), Yr(t, u, n, g);
        default:
          return n.indexOf("-") === -1 && typeof u.is != "string" ? Yr(t, u, n, g) : Xt(t, u, n, g);
      }
    }
    var Xo = O("</"), Jo = O(">");
    function Ko(t, n, u) {
      switch (n) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          t.push(Xo, W(n), Jo);
      }
    }
    function KA(t, n) {
      for (var u = n.bootstrapChunks, g = 0; g < u.length - 1; g++)
        k(t, u[g]);
      return g < u.length ? ee(t, u[g]) : !0;
    }
    var qA = O('<template id="'), Yn = O('"></template>');
    function Rn(t, n, u) {
      k(t, qA), k(t, n.placeholderPrefix);
      var g = W(u.toString(16));
      return k(t, g), ee(t, Yn);
    }
    var Fn = O("<!--$-->"), jn = O('<!--$?--><template id="'), _A = O('"></template>'), Tn = O("<!--$!-->"), fo = O("<!--/$-->"), go = O("<template"), ln = O('"'), cn = O(' data-dgst="'), Hn = O(' data-msg="'), qo = O(' data-stck="'), Mo = O("></template>");
    function _o(t, n) {
      return ee(t, Fn);
    }
    function Wn(t, n, u) {
      if (k(t, jn), u === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(t, u), ee(t, _A);
    }
    function Jt(t, n, u, g, v) {
      var S;
      return S = ee(t, Tn), k(t, go), u && (k(t, cn), k(t, W(vt(u))), k(t, ln)), g && (k(t, Hn), k(t, W(vt(g))), k(t, ln)), v && (k(t, qo), k(t, W(vt(v))), k(t, ln)), S = ee(t, Mo), S;
    }
    function $o(t, n) {
      return ee(t, fo);
    }
    function Zn(t, n) {
      return ee(t, fo);
    }
    function $A(t, n) {
      return ee(t, fo);
    }
    var eA = O('<div hidden id="'), Vn = O('">'), tA = O("</div>"), rA = O('<svg aria-hidden="true" style="display:none" id="'), Gn = O('">'), Xn = O("</svg>"), nA = O('<math aria-hidden="true" style="display:none" id="'), oA = O('">'), AA = O("</math>"), po = O('<table hidden id="'), iA = O('">'), A = O("</table>"), d = O('<table hidden><tbody id="'), h = O('">'), I = O("</tbody></table>"), U = O('<table hidden><tr id="'), P = O('">'), V = O("</tr></table>"), oe = O('<table hidden><colgroup id="'), ze = O('">'), Ve = O("</colgroup></table>");
    function Re(t, n, u, g) {
      switch (u.insertionMode) {
        case mt:
        case Je:
          return k(t, eA), k(t, n.segmentPrefix), k(t, W(g.toString(16))), ee(t, Vn);
        case Ft:
          return k(t, rA), k(t, n.segmentPrefix), k(t, W(g.toString(16))), ee(t, Gn);
        case Vt:
          return k(t, nA), k(t, n.segmentPrefix), k(t, W(g.toString(16))), ee(t, oA);
        case Ct:
          return k(t, po), k(t, n.segmentPrefix), k(t, W(g.toString(16))), ee(t, iA);
        case on:
          return k(t, d), k(t, n.segmentPrefix), k(t, W(g.toString(16))), ee(t, h);
        case vr:
          return k(t, U), k(t, n.segmentPrefix), k(t, W(g.toString(16))), ee(t, P);
        case Dr:
          return k(t, oe), k(t, n.segmentPrefix), k(t, W(g.toString(16))), ee(t, ze);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Mt(t, n) {
      switch (n.insertionMode) {
        case mt:
        case Je:
          return ee(t, tA);
        case Ft:
          return ee(t, Xn);
        case Vt:
          return ee(t, AA);
        case Ct:
          return ee(t, A);
        case on:
          return ee(t, I);
        case vr:
          return ee(t, V);
        case Dr:
          return ee(t, Ve);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Kt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", ar = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', ur = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Jn = O(Kt + ';$RS("'), aA = O('$RS("'), ho = O('","'), Va = O('")<\/script>');
    function Ga(t, n, u) {
      k(t, n.startInlineScript), n.sentCompleteSegmentFunction ? k(t, aA) : (n.sentCompleteSegmentFunction = !0, k(t, Jn)), k(t, n.segmentPrefix);
      var g = W(u.toString(16));
      return k(t, g), k(t, ho), k(t, n.placeholderPrefix), k(t, g), ee(t, Va);
    }
    var Xa = O(ar + ';$RC("'), Ja = O('$RC("'), Ka = O('","'), qa = O('")<\/script>');
    function ei(t, n, u, g) {
      if (k(t, n.startInlineScript), n.sentCompleteBoundaryFunction ? k(t, Ja) : (n.sentCompleteBoundaryFunction = !0, k(t, Xa)), u === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var v = W(g.toString(16));
      return k(t, u), k(t, Ka), k(t, n.segmentPrefix), k(t, v), ee(t, qa);
    }
    var _a = O(ur + ';$RX("'), $a = O('$RX("'), ti = O('"'), eu = O(")<\/script>"), ri = O(",");
    function Xi(t, n, u, g, v, S) {
      if (k(t, n.startInlineScript), n.sentClientRenderFunction ? k(t, $a) : (n.sentClientRenderFunction = !0, k(t, _a)), u === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(t, u), k(t, ti), (g || v || S) && (k(t, ri), k(t, W(ni(g || "")))), (v || S) && (k(t, ri), k(t, W(ni(v || "")))), S && (k(t, ri), k(t, W(ni(S)))), ee(t, eu);
    }
    var Ji = /[<\u2028\u2029]/g;
    function ni(t) {
      var n = JSON.stringify(t);
      return n.replace(Ji, function(u) {
        switch (u) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var Lr = Object.assign, tu = Symbol.for("react.element"), Ki = Symbol.for("react.portal"), sr = Symbol.for("react.fragment"), qi = Symbol.for("react.strict_mode"), oi = Symbol.for("react.profiler"), uA = Symbol.for("react.provider"), sA = Symbol.for("react.context"), lA = Symbol.for("react.forward_ref"), yo = Symbol.for("react.suspense"), vo = Symbol.for("react.suspense_list"), Do = Symbol.for("react.memo"), Kn = Symbol.for("react.lazy"), Ai = Symbol.for("react.scope"), ii = Symbol.for("react.debug_trace_mode"), cA = Symbol.for("react.legacy_hidden"), ru = Symbol.for("react.default_value"), _i = Symbol.iterator, nu = "@@iterator";
    function ou(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = _i && t[_i] || t[nu];
      return typeof n == "function" ? n : null;
    }
    function $i(t, n, u) {
      var g = t.displayName;
      if (g)
        return g;
      var v = n.displayName || n.name || "";
      return v !== "" ? u + "(" + v + ")" : u;
    }
    function ea(t) {
      return t.displayName || "Context";
    }
    function Nt(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case sr:
          return "Fragment";
        case Ki:
          return "Portal";
        case oi:
          return "Profiler";
        case qi:
          return "StrictMode";
        case yo:
          return "Suspense";
        case vo:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case sA:
            var n = t;
            return ea(n) + ".Consumer";
          case uA:
            var u = t;
            return ea(u._context) + ".Provider";
          case lA:
            return $i(t, t.render, "ForwardRef");
          case Do:
            var g = t.displayName || null;
            return g !== null ? g : Nt(t.type) || "Memo";
          case Kn: {
            var v = t, S = v._payload, C = v._init;
            try {
              return Nt(C(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Lo = 0, ai, Dt, qn, ui, si, li, ci;
    function fi() {
    }
    fi.__reactDisabledLog = !0;
    function ta() {
      {
        if (Lo === 0) {
          ai = console.log, Dt = console.info, qn = console.warn, ui = console.error, si = console.group, li = console.groupCollapsed, ci = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: fi,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Lo++;
      }
    }
    function ra() {
      {
        if (Lo--, Lo === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Lr({}, t, {
              value: ai
            }),
            info: Lr({}, t, {
              value: Dt
            }),
            warn: Lr({}, t, {
              value: qn
            }),
            error: Lr({}, t, {
              value: ui
            }),
            group: Lr({}, t, {
              value: si
            }),
            groupCollapsed: Lr({}, t, {
              value: li
            }),
            groupEnd: Lr({}, t, {
              value: ci
            })
          });
        }
        Lo < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fA = M.ReactCurrentDispatcher, di;
    function No(t, n, u) {
      {
        if (di === void 0)
          try {
            throw Error();
          } catch (v) {
            var g = v.stack.trim().match(/\n( *(at )?)/);
            di = g && g[1] || "";
          }
        return `
` + di + t;
      }
    }
    var Io = !1, _n;
    {
      var wo = typeof WeakMap == "function" ? WeakMap : Map;
      _n = new wo();
    }
    function So(t, n) {
      if (!t || Io)
        return "";
      {
        var u = _n.get(t);
        if (u !== void 0)
          return u;
      }
      var g;
      Io = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = fA.current, fA.current = null, ta();
      try {
        if (n) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (m) {
              g = m;
            }
            Reflect.construct(t, [], C);
          } else {
            try {
              C.call();
            } catch (m) {
              g = m;
            }
            t.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            g = m;
          }
          t();
        }
      } catch (m) {
        if (m && g && typeof m.stack == "string") {
          for (var F = m.stack.split(`
`), e = g.stack.split(`
`), r = F.length - 1, i = e.length - 1; r >= 1 && i >= 0 && F[r] !== e[i]; )
            i--;
          for (; r >= 1 && i >= 0; r--, i--)
            if (F[r] !== e[i]) {
              if (r !== 1 || i !== 1)
                do
                  if (r--, i--, i < 0 || F[r] !== e[i]) {
                    var c = `
` + F[r].replace(" at new ", " at ");
                    return t.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", t.displayName)), typeof t == "function" && _n.set(t, c), c;
                  }
                while (r >= 1 && i >= 0);
              break;
            }
        }
      } finally {
        Io = !1, fA.current = S, ra(), Error.prepareStackTrace = v;
      }
      var p = t ? t.displayName || t.name : "", w = p ? No(p) : "";
      return typeof t == "function" && _n.set(t, w), w;
    }
    function dA(t, n, u) {
      return So(t, !0);
    }
    function na(t, n, u) {
      return So(t, !1);
    }
    function gi(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function Mi(t, n, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return So(t, gi(t));
      if (typeof t == "string")
        return No(t);
      switch (t) {
        case yo:
          return No("Suspense");
        case vo:
          return No("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case lA:
            return na(t.render);
          case Do:
            return Mi(t.type, n, u);
          case Kn: {
            var g = t, v = g._payload, S = g._init;
            try {
              return Mi(S(v), n, u);
            } catch {
            }
          }
        }
      return "";
    }
    var pi = {}, oa = M.ReactDebugCurrentFrame;
    function $n(t) {
      if (t) {
        var n = t._owner, u = Mi(t.type, t._source, n ? n.type : null);
        oa.setExtraStackFrame(u);
      } else
        oa.setExtraStackFrame(null);
    }
    function hi(t, n, u, g, v) {
      {
        var S = Function.call.bind(De);
        for (var C in t)
          if (S(t, C)) {
            var F = void 0;
            try {
              if (typeof t[C] != "function") {
                var e = Error((g || "React class") + ": " + u + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw e.name = "Invariant Violation", e;
              }
              F = t[C](n, C, g, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (r) {
              F = r;
            }
            F && !(F instanceof Error) && ($n(v), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", u, C, typeof F), $n(null)), F instanceof Error && !(F.message in pi) && (pi[F.message] = !0, $n(v), l("Failed %s type: %s", u, F.message), $n(null));
          }
      }
    }
    var gA;
    gA = {};
    var mn = {};
    Object.freeze(mn);
    function yi(t, n) {
      {
        var u = t.contextTypes;
        if (!u)
          return mn;
        var g = {};
        for (var v in u)
          g[v] = n[v];
        {
          var S = Nt(t) || "Unknown";
          hi(u, g, "context", S);
        }
        return g;
      }
    }
    function vi(t, n, u, g) {
      {
        if (typeof t.getChildContext != "function") {
          {
            var v = Nt(n) || "Unknown";
            gA[v] || (gA[v] = !0, l("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return u;
        }
        var S = t.getChildContext();
        for (var C in S)
          if (!(C in g))
            throw new Error((Nt(n) || "Unknown") + '.getChildContext(): key "' + C + '" is not defined in childContextTypes.');
        {
          var F = Nt(n) || "Unknown";
          hi(g, S, "child context", F);
        }
        return Lr({}, u, S);
      }
    }
    var fn;
    fn = {};
    var Aa = null, En = null;
    function Cn(t) {
      t.context._currentValue = t.parentValue;
    }
    function Di(t) {
      t.context._currentValue = t.value;
    }
    function Hr(t, n) {
      if (t !== n) {
        Cn(t);
        var u = t.parent, g = n.parent;
        if (u === null) {
          if (g !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (g === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Hr(u, g);
        }
        Di(n);
      }
    }
    function MA(t) {
      Cn(t);
      var n = t.parent;
      n !== null && MA(n);
    }
    function pA(t) {
      var n = t.parent;
      n !== null && pA(n), Di(t);
    }
    function jo(t, n) {
      Cn(t);
      var u = t.parent;
      if (u === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      u.depth === n.depth ? Hr(u, n) : jo(u, n);
    }
    function Li(t, n) {
      var u = n.parent;
      if (u === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === u.depth ? Hr(t, u) : Li(t, u), Di(n);
    }
    function To(t) {
      var n = En, u = t;
      n !== u && (n === null ? pA(u) : u === null ? MA(n) : n.depth === u.depth ? Hr(n, u) : n.depth > u.depth ? jo(n, u) : Li(n, u), En = u);
    }
    function ia(t, n) {
      var u;
      u = t._currentValue, t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fn && l("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fn;
      var g = En, v = {
        parent: g,
        depth: g === null ? 0 : g.depth + 1,
        context: t,
        parentValue: u,
        value: n
      };
      return En = v, v;
    }
    function aa(t) {
      var n = En;
      if (n === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      n.context !== t && l("The parent context is not the expected context. This is probably a bug in React.");
      {
        var u = n.parentValue;
        u === ru ? n.context._currentValue = n.context._defaultValue : n.context._currentValue = u, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fn && l("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fn;
      }
      return En = n.parent;
    }
    function hA() {
      return En;
    }
    function mo(t) {
      var n = t._currentValue;
      return n;
    }
    function Ni(t) {
      return t._reactInternals;
    }
    function Au(t, n) {
      t._reactInternals = n;
    }
    var eo = {}, yA = {}, Ii, vA, DA, Eo, LA, to, Co, NA, ro;
    {
      Ii = /* @__PURE__ */ new Set(), vA = /* @__PURE__ */ new Set(), DA = /* @__PURE__ */ new Set(), Co = /* @__PURE__ */ new Set(), Eo = /* @__PURE__ */ new Set(), NA = /* @__PURE__ */ new Set(), ro = /* @__PURE__ */ new Set();
      var IA = /* @__PURE__ */ new Set();
      to = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var u = n + "_" + t;
          IA.has(u) || (IA.add(u), l("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, LA = function(t, n) {
        if (n === void 0) {
          var u = Nt(t) || "Component";
          Eo.has(u) || (Eo.add(u), l("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", u));
        }
      };
    }
    function wA(t, n) {
      {
        var u = t.constructor, g = u && Nt(u) || "ReactClass", v = g + "." + n;
        if (eo[v])
          return;
        l(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, n, n, g), eo[v] = !0;
      }
    }
    var SA = {
      isMounted: function(t) {
        return !1;
      },
      enqueueSetState: function(t, n, u) {
        var g = Ni(t);
        g.queue === null ? wA(t, "setState") : (g.queue.push(n), u != null && to(u, "setState"));
      },
      enqueueReplaceState: function(t, n, u) {
        var g = Ni(t);
        g.replace = !0, g.queue = [n], u != null && to(u, "setState");
      },
      enqueueForceUpdate: function(t, n) {
        var u = Ni(t);
        u.queue === null ? wA(t, "forceUpdate") : n != null && to(n, "setState");
      }
    };
    function ua(t, n, u, g, v) {
      var S = u(v, g);
      LA(n, S);
      var C = S == null ? g : Lr({}, g, S);
      return C;
    }
    function sa(t, n, u) {
      var g = mn, v = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === sA && v._context === void 0
        );
        if (!S && !ro.has(t)) {
          ro.add(t);
          var C = "";
          v === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? C = " However, it is set to a " + typeof v + "." : v.$$typeof === uA ? C = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", l("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", C);
        }
      }
      typeof v == "object" && v !== null ? g = mo(v) : g = u;
      var F = new t(n, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && (F.state === null || F.state === void 0)) {
          var e = Nt(t) || "Component";
          Ii.has(e) || (Ii.add(e), l("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", e, F.state === null ? "null" : "undefined", e));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof F.getSnapshotBeforeUpdate == "function") {
          var r = null, i = null, c = null;
          if (typeof F.componentWillMount == "function" && F.componentWillMount.__suppressDeprecationWarning !== !0 ? r = "componentWillMount" : typeof F.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof F.componentWillReceiveProps == "function" && F.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? i = "componentWillReceiveProps" : typeof F.UNSAFE_componentWillReceiveProps == "function" && (i = "UNSAFE_componentWillReceiveProps"), typeof F.componentWillUpdate == "function" && F.componentWillUpdate.__suppressDeprecationWarning !== !0 ? c = "componentWillUpdate" : typeof F.UNSAFE_componentWillUpdate == "function" && (c = "UNSAFE_componentWillUpdate"), r !== null || i !== null || c !== null) {
            var p = Nt(t) || "Component", w = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            DA.has(p) || (DA.add(p), l(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, p, w, r !== null ? `
  ` + r : "", i !== null ? `
  ` + i : "", c !== null ? `
  ` + c : ""));
          }
        }
      }
      return F;
    }
    function la(t, n, u) {
      {
        var g = Nt(n) || "Component", v = t.render;
        v || (n.prototype && typeof n.prototype.render == "function" ? l("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", g) : l("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", g)), t.getInitialState && !t.getInitialState.isReactClassApproved && !t.state && l("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", g), t.getDefaultProps && !t.getDefaultProps.isReactClassApproved && l("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", g), t.propTypes && l("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", g), t.contextType && l("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", g), t.contextTypes && l("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", g), n.contextType && n.contextTypes && !NA.has(n) && (NA.add(n), l("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", g)), typeof t.componentShouldUpdate == "function" && l("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", g), n.prototype && n.prototype.isPureReactComponent && typeof t.shouldComponentUpdate < "u" && l("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(n) || "A pure component"), typeof t.componentDidUnmount == "function" && l("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", g), typeof t.componentDidReceiveProps == "function" && l("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", g), typeof t.componentWillRecieveProps == "function" && l("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", g), typeof t.UNSAFE_componentWillRecieveProps == "function" && l("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", g);
        var S = t.props !== u;
        t.props !== void 0 && S && l("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", g, g), t.defaultProps && l("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", g, g), typeof t.getSnapshotBeforeUpdate == "function" && typeof t.componentDidUpdate != "function" && !vA.has(n) && (vA.add(n), l("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(n))), typeof t.getDerivedStateFromProps == "function" && l("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", g), typeof t.getDerivedStateFromError == "function" && l("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", g), typeof n.getSnapshotBeforeUpdate == "function" && l("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", g);
        var C = t.state;
        C && (typeof C != "object" || Se(C)) && l("%s.state: must be set to an object or null", g), typeof t.getChildContext == "function" && typeof n.childContextTypes != "object" && l("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", g);
      }
    }
    function iu(t, n) {
      var u = n.state;
      if (typeof n.componentWillMount == "function") {
        if (n.componentWillMount.__suppressDeprecationWarning !== !0) {
          var g = Nt(t) || "Unknown";
          yA[g] || (D(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            g
          ), yA[g] = !0);
        }
        n.componentWillMount();
      }
      typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), u !== n.state && (l("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Nt(t) || "Component"), SA.enqueueReplaceState(n, n.state, null));
    }
    function au(t, n, u, g) {
      if (t.queue !== null && t.queue.length > 0) {
        var v = t.queue, S = t.replace;
        if (t.queue = null, t.replace = !1, S && v.length === 1)
          n.state = v[0];
        else {
          for (var C = S ? v[0] : n.state, F = !0, e = S ? 1 : 0; e < v.length; e++) {
            var r = v[e], i = typeof r == "function" ? r.call(n, C, u, g) : r;
            i != null && (F ? (F = !1, C = Lr({}, C, i)) : Lr(C, i));
          }
          n.state = C;
        }
      } else
        t.queue = null;
    }
    function ca(t, n, u, g) {
      la(t, n, u);
      var v = t.state !== void 0 ? t.state : null;
      t.updater = SA, t.props = u, t.state = v;
      var S = {
        queue: [],
        replace: !1
      };
      Au(t, S);
      var C = n.contextType;
      if (typeof C == "object" && C !== null ? t.context = mo(C) : t.context = g, t.state === u) {
        var F = Nt(n) || "Component";
        Co.has(F) || (Co.add(F), l("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", F));
      }
      var e = n.getDerivedStateFromProps;
      typeof e == "function" && (t.state = ua(t, n, e, v, u)), typeof n.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function" && (typeof t.UNSAFE_componentWillMount == "function" || typeof t.componentWillMount == "function") && (iu(n, t), au(S, t, u, g));
    }
    var uu = {
      id: 1,
      overflow: ""
    };
    function su(t) {
      var n = t.overflow, u = t.id, g = u & ~lu(u);
      return g.toString(32) + n;
    }
    function jA(t, n, u) {
      var g = t.id, v = t.overflow, S = TA(g) - 1, C = g & ~(1 << S), F = u + 1, e = TA(n) + S;
      if (e > 30) {
        var r = S - S % 5, i = (1 << r) - 1, c = (C & i).toString(32), p = C >> r, w = S - r, m = TA(n) + w, Y = F << w, _ = Y | p, ge = c + v;
        return {
          id: 1 << m | _,
          overflow: ge
        };
      } else {
        var ye = F << S, Oe = ye | C, Lt = v;
        return {
          id: 1 << e | Oe,
          overflow: Lt
        };
      }
    }
    function TA(t) {
      return 32 - wi(t);
    }
    function lu(t) {
      return 1 << TA(t) - 1;
    }
    var wi = Math.clz32 ? Math.clz32 : fu, mA = Math.log, cu = Math.LN2;
    function fu(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (mA(n) / cu | 0) | 0;
    }
    function du(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var gu = typeof Object.is == "function" ? Object.is : du, qr = null, Si = null, EA = null, tt = null, xn = !1, bn = !1, st = 0, Nr = null, zn = 0, CA = 25, Ut = !1, _r;
    function kn() {
      if (qr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ut && l("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), qr;
    }
    function Wr(t, n) {
      if (n === null)
        return l("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", _r), !1;
      t.length !== n.length && l(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, _r, "[" + t.join(", ") + "]", "[" + n.join(", ") + "]");
      for (var u = 0; u < n.length && u < t.length; u++)
        if (!gu(t[u], n[u]))
          return !1;
      return !0;
    }
    function On() {
      if (zn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function $r() {
      return tt === null ? EA === null ? (xn = !1, EA = tt = On()) : (xn = !0, tt = EA) : tt.next === null ? (xn = !1, tt = tt.next = On()) : (xn = !0, tt = tt.next), tt;
    }
    function Mu(t, n) {
      qr = n, Si = t, Ut = !1, st = 0;
    }
    function fa(t, n, u, g) {
      for (; bn; )
        bn = !1, st = 0, zn += 1, tt = null, u = t(n, g);
      return ji(), u;
    }
    function xA() {
      var t = st !== 0;
      return t;
    }
    function ji() {
      Ut = !1, qr = null, Si = null, bn = !1, EA = null, zn = 0, Nr = null, tt = null;
    }
    function pu(t) {
      return Ut && l("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), mo(t);
    }
    function da(t) {
      return _r = "useContext", kn(), mo(t);
    }
    function xo(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function hu(t) {
      return _r = "useState", ga(
        xo,
        // useReducer has a special case to support lazy useState initializers
        t
      );
    }
    function ga(t, n, u) {
      if (t !== xo && (_r = "useReducer"), qr = kn(), tt = $r(), xn) {
        var g = tt.queue, v = g.dispatch;
        if (Nr !== null) {
          var S = Nr.get(g);
          if (S !== void 0) {
            Nr.delete(g);
            var C = tt.memoizedState, F = S;
            do {
              var e = F.action;
              Ut = !0, C = t(C, e), Ut = !1, F = F.next;
            } while (F !== null);
            return tt.memoizedState = C, [C, v];
          }
        }
        return [tt.memoizedState, v];
      } else {
        Ut = !0;
        var r;
        t === xo ? r = typeof n == "function" ? n() : n : r = u !== void 0 ? u(n) : n, Ut = !1, tt.memoizedState = r;
        var i = tt.queue = {
          last: null,
          dispatch: null
        }, c = i.dispatch = pa.bind(null, qr, i);
        return [tt.memoizedState, c];
      }
    }
    function bA(t, n) {
      qr = kn(), tt = $r();
      var u = n === void 0 ? null : n;
      if (tt !== null) {
        var g = tt.memoizedState;
        if (g !== null && u !== null) {
          var v = g[1];
          if (Wr(u, v))
            return g[0];
        }
      }
      Ut = !0;
      var S = t();
      return Ut = !1, tt.memoizedState = [S, u], S;
    }
    function yu(t) {
      qr = kn(), tt = $r();
      var n = tt.memoizedState;
      if (n === null) {
        var u = {
          current: t
        };
        return Object.seal(u), tt.memoizedState = u, u;
      } else
        return n;
    }
    function Ma(t, n) {
      _r = "useLayoutEffect", l("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function pa(t, n, u) {
      if (zn >= CA)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (t === qr) {
        bn = !0;
        var g = {
          action: u,
          next: null
        };
        Nr === null && (Nr = /* @__PURE__ */ new Map());
        var v = Nr.get(n);
        if (v === void 0)
          Nr.set(n, g);
        else {
          for (var S = v; S.next !== null; )
            S = S.next;
          S.next = g;
        }
      }
    }
    function vu(t, n) {
      return bA(function() {
        return t;
      }, n);
    }
    function Du(t, n, u) {
      return kn(), n(t._source);
    }
    function Lu(t, n, u) {
      if (u === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return u();
    }
    function Nu(t) {
      return kn(), t;
    }
    function Iu() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function wu() {
      return kn(), [!1, Iu];
    }
    function Su() {
      var t = Si, n = su(t.treeContext), u = Ti;
      if (u === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var g = st++;
      return An(u, n, g);
    }
    function zA() {
    }
    var ha = {
      readContext: pu,
      useContext: da,
      useMemo: bA,
      useReducer: ga,
      useRef: yu,
      useState: hu,
      useInsertionEffect: zA,
      useLayoutEffect: Ma,
      useCallback: vu,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: zA,
      // Effects are not run in the server environment.
      useEffect: zA,
      // Debugging effect
      useDebugValue: zA,
      useDeferredValue: Nu,
      useTransition: wu,
      useId: Su,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Du,
      useSyncExternalStore: Lu
    }, Ti = null;
    function bo(t) {
      Ti = t;
    }
    function ya(t) {
      try {
        var n = "", u = t;
        do {
          switch (u.tag) {
            case 0:
              n += No(u.type, null, null);
              break;
            case 1:
              n += na(u.type, null, null);
              break;
            case 2:
              n += dA(u.type, null, null);
              break;
          }
          u = u.parent;
        } while (u);
        return n;
      } catch (g) {
        return `
Error generating stack: ` + g.message + `
` + g.stack;
      }
    }
    var zo = M.ReactCurrentDispatcher, kA = M.ReactDebugCurrentFrame, mi = 0, dn = 1, OA = 2, PA = 3, Pn = 4, va = 0, Ei = 1, Qn = 2, ju = 12800;
    function Da(t) {
      return console.error(t), null;
    }
    function Zr() {
    }
    function Tu(t, n, u, g, v, S, C, F, e) {
      var r = [], i = /* @__PURE__ */ new Set(), c = {
        destination: null,
        responseState: n,
        progressiveChunkSize: g === void 0 ? ju : g,
        status: va,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: i,
        pingedTasks: r,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: v === void 0 ? Da : v,
        onAllReady: S === void 0 ? Zr : S,
        onShellReady: C === void 0 ? Zr : C,
        onShellError: F === void 0 ? Zr : F,
        onFatalError: e === void 0 ? Zr : e
      }, p = QA(
        c,
        0,
        null,
        u,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      p.parentFlushed = !0;
      var w = Ci(c, t, null, p, i, mn, Aa, uu);
      return r.push(w), c;
    }
    function mu(t, n) {
      var u = t.pingedTasks;
      u.push(n), u.length === 1 && b(function() {
        return Uo(t);
      });
    }
    function ko(t, n) {
      return {
        id: Ln,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: n,
        errorDigest: null
      };
    }
    function Ci(t, n, u, g, v, S, C, F) {
      t.allPendingTasks++, u === null ? t.pendingRootTasks++ : u.pendingTasks++;
      var e = {
        node: n,
        ping: function() {
          return mu(t, e);
        },
        blockedBoundary: u,
        blockedSegment: g,
        abortSet: v,
        legacyContext: S,
        context: C,
        treeContext: F
      };
      return e.componentStack = null, v.add(e), e;
    }
    function QA(t, n, u, g, v, S) {
      return {
        status: mi,
        id: -1,
        // lazily assigned later
        index: n,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: g,
        boundary: u,
        lastPushedText: v,
        textEmbedded: S
      };
    }
    var en = null;
    function Oo() {
      return en === null || en.componentStack === null ? "" : ya(en.componentStack);
    }
    function gn(t, n) {
      t.componentStack = {
        tag: 0,
        parent: t.componentStack,
        type: n
      };
    }
    function Vr(t, n) {
      t.componentStack = {
        tag: 1,
        parent: t.componentStack,
        type: n
      };
    }
    function xi(t, n) {
      t.componentStack = {
        tag: 2,
        parent: t.componentStack,
        type: n
      };
    }
    function Ir(t) {
      t.componentStack === null ? l("Unexpectedly popped too many stack frames. This is a bug in React.") : t.componentStack = t.componentStack.parent;
    }
    var no = null;
    function bi(t, n) {
      {
        var u;
        typeof n == "string" ? u = n : n && typeof n.message == "string" ? u = n.message : u = String(n);
        var g = no || Oo();
        no = null, t.errorMessage = u, t.errorComponentStack = g;
      }
    }
    function wr(t, n) {
      var u = t.onError(n);
      if (u != null && typeof u != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof u + '" instead');
      return u;
    }
    function Mn(t, n) {
      var u = t.onShellError;
      u(n);
      var g = t.onFatalError;
      g(n), t.destination !== null ? (t.status = Qn, G(t.destination, n)) : (t.status = Ei, t.fatalError = n);
    }
    function zi(t, n, u) {
      gn(n, "Suspense");
      var g = n.blockedBoundary, v = n.blockedSegment, S = u.fallback, C = u.children, F = /* @__PURE__ */ new Set(), e = ko(t, F), r = v.chunks.length, i = QA(
        t,
        r,
        e,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      v.children.push(i), v.lastPushedText = !1;
      var c = QA(
        t,
        0,
        null,
        v.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      c.parentFlushed = !0, n.blockedBoundary = e, n.blockedSegment = c;
      try {
        if (Hi(t, n, C), un(c.chunks, t.responseState, c.lastPushedText, c.textEmbedded), c.status = dn, YA(e, c), e.pendingTasks === 0) {
          Ir(n);
          return;
        }
      } catch (w) {
        c.status = Pn, e.forceClientRender = !0, e.errorDigest = wr(t, w), bi(e, w);
      } finally {
        n.blockedBoundary = g, n.blockedSegment = v;
      }
      var p = Ci(t, S, g, i, F, n.legacyContext, n.context, n.treeContext);
      p.componentStack = n.componentStack, t.pingedTasks.push(p), Ir(n);
    }
    function Po(t, n, u, g) {
      gn(n, u);
      var v = n.blockedSegment, S = co(v.chunks, u, g, t.responseState, v.formatContext);
      v.lastPushedText = !1;
      var C = v.formatContext;
      v.formatContext = Qr(C, u, g), Hi(t, n, S), v.formatContext = C, Ko(v.chunks, u), v.lastPushedText = !1, Ir(n);
    }
    function BA(t) {
      return t.prototype && t.prototype.isReactComponent;
    }
    function La(t, n, u, g, v) {
      var S = {};
      Mu(n, S);
      var C = u(g, v);
      return fa(u, g, C, v);
    }
    function Na(t, n, u, g, v) {
      var S = u.render();
      u.props !== v && (Bo || l("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Nt(g) || "a component"), Bo = !0);
      {
        var C = g.childContextTypes;
        if (C != null) {
          var F = n.legacyContext, e = vi(u, g, F, C);
          n.legacyContext = e, lr(t, n, S), n.legacyContext = F;
          return;
        }
      }
      lr(t, n, S);
    }
    function Eu(t, n, u, g) {
      xi(n, u);
      var v = yi(u, n.legacyContext), S = sa(u, g, v);
      ca(S, u, g, v), Na(t, n, S, u, g), Ir(n);
    }
    var ki = {}, Qo = {}, Ia = {}, Oi = {}, Bo = !1, Pi = {}, Qi = !1, Bi = !1, Ui = !1;
    function wa(t, n, u, g) {
      var v;
      if (v = yi(u, n.legacyContext), Vr(n, u), u.prototype && typeof u.prototype.render == "function") {
        var S = Nt(u) || "Unknown";
        ki[S] || (l("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), ki[S] = !0);
      }
      var C = La(t, n, u, g, v), F = xA();
      if (typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0) {
        var e = Nt(u) || "Unknown";
        Qo[e] || (l("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", e, e, e), Qo[e] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0
      ) {
        {
          var r = Nt(u) || "Unknown";
          Qo[r] || (l("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", r, r, r), Qo[r] = !0);
        }
        ca(C, u, g, v), Na(t, n, C, u, g);
      } else if (Sa(u), F) {
        var i = n.treeContext, c = 1, p = 0;
        n.treeContext = jA(i, c, p);
        try {
          lr(t, n, C);
        } finally {
          n.treeContext = i;
        }
      } else
        lr(t, n, C);
      Ir(n);
    }
    function Sa(t) {
      {
        if (t && t.childContextTypes && l("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), t.defaultProps !== void 0) {
          var n = Nt(t) || "Unknown";
          Pi[n] || (l("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", n), Pi[n] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var u = Nt(t) || "Unknown";
          Oi[u] || (l("%s: Function components do not support getDerivedStateFromProps.", u), Oi[u] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = Nt(t) || "Unknown";
          Ia[g] || (l("%s: Function components do not support contextType.", g), Ia[g] = !0);
        }
      }
    }
    function Yi(t, n) {
      if (t && t.defaultProps) {
        var u = Lr({}, n), g = t.defaultProps;
        for (var v in g)
          u[v] === void 0 && (u[v] = g[v]);
        return u;
      }
      return n;
    }
    function Cu(t, n, u, g, v) {
      Vr(n, u.render);
      var S = La(t, n, u.render, g, v), C = xA();
      if (C) {
        var F = n.treeContext, e = 1, r = 0;
        n.treeContext = jA(F, e, r);
        try {
          lr(t, n, S);
        } finally {
          n.treeContext = F;
        }
      } else
        lr(t, n, S);
      Ir(n);
    }
    function xu(t, n, u, g, v) {
      var S = u.type, C = Yi(S, g);
      Ri(t, n, S, C, v);
    }
    function ja(t, n, u, g) {
      u._context === void 0 ? u !== u.Consumer && (Ui || (Ui = !0, l("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : u = u._context;
      var v = g.children;
      typeof v != "function" && l("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var S = mo(u), C = v(S);
      lr(t, n, C);
    }
    function bu(t, n, u, g) {
      var v = u._context, S = g.value, C = g.children, F;
      F = n.context, n.context = ia(v, S), lr(t, n, C), n.context = aa(v), F !== n.context && l("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function zu(t, n, u, g, v) {
      gn(n, "Lazy");
      var S = u._payload, C = u._init, F = C(S), e = Yi(F, g);
      Ri(t, n, F, e, v), Ir(n);
    }
    function Ri(t, n, u, g, v) {
      if (typeof u == "function")
        if (BA(u)) {
          Eu(t, n, u, g);
          return;
        } else {
          wa(t, n, u, g);
          return;
        }
      if (typeof u == "string") {
        Po(t, n, u, g);
        return;
      }
      switch (u) {
        case cA:
        case ii:
        case qi:
        case oi:
        case sr: {
          lr(t, n, g.children);
          return;
        }
        case vo: {
          gn(n, "SuspenseList"), lr(t, n, g.children), Ir(n);
          return;
        }
        case Ai:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case yo: {
          zi(t, n, g);
          return;
        }
      }
      if (typeof u == "object" && u !== null)
        switch (u.$$typeof) {
          case lA: {
            Cu(t, n, u, g, v);
            return;
          }
          case Do: {
            xu(t, n, u, g, v);
            return;
          }
          case uA: {
            bu(t, n, u, g);
            return;
          }
          case sA: {
            ja(t, n, u, g);
            return;
          }
          case Kn: {
            zu(t, n, u, g);
            return;
          }
        }
      var S = "";
      throw (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (u == null ? u : typeof u) + "." + S));
    }
    function ku(t, n) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      t[Symbol.toStringTag] === "Generator" && (Qi || l("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Qi = !0), t.entries === n && (Bi || l("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bi = !0);
    }
    function lr(t, n, u) {
      try {
        return Fi(t, n, u);
      } catch (g) {
        throw typeof g == "object" && g !== null && typeof g.then == "function" || (no = no !== null ? no : Oo()), g;
      }
    }
    function Fi(t, n, u) {
      if (n.node = u, typeof u == "object" && u !== null) {
        switch (u.$$typeof) {
          case tu: {
            var g = u, v = g.type, S = g.props, C = g.ref;
            Ri(t, n, v, S, C);
            return;
          }
          case Ki:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Kn: {
            var F = u, e = F._payload, r = F._init, i;
            try {
              i = r(e);
            } catch (ye) {
              throw typeof ye == "object" && ye !== null && typeof ye.then == "function" && gn(n, "Lazy"), ye;
            }
            lr(t, n, i);
            return;
          }
        }
        if (Se(u)) {
          Ta(t, n, u);
          return;
        }
        var c = ou(u);
        if (c) {
          ku(u, c);
          var p = c.call(u);
          if (p) {
            var w = p.next();
            if (!w.done) {
              var m = [];
              do
                m.push(w.value), w = p.next();
              while (!w.done);
              Ta(t, n, m);
              return;
            }
            return;
          }
        }
        var Y = Object.prototype.toString.call(u);
        throw new Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof u == "string") {
        var _ = n.blockedSegment;
        _.lastPushedText = an(n.blockedSegment.chunks, u, t.responseState, _.lastPushedText);
        return;
      }
      if (typeof u == "number") {
        var ge = n.blockedSegment;
        ge.lastPushedText = an(n.blockedSegment.chunks, "" + u, t.responseState, ge.lastPushedText);
        return;
      }
      typeof u == "function" && l("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ta(t, n, u) {
      for (var g = u.length, v = 0; v < g; v++) {
        var S = n.treeContext;
        n.treeContext = jA(S, g, v);
        try {
          Hi(t, n, u[v]);
        } finally {
          n.treeContext = S;
        }
      }
    }
    function cr(t, n, u) {
      var g = n.blockedSegment, v = g.chunks.length, S = QA(
        t,
        v,
        null,
        g.formatContext,
        // Adopt the parent segment's leading text embed
        g.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      g.children.push(S), g.lastPushedText = !1;
      var C = Ci(t, n.node, n.blockedBoundary, S, n.abortSet, n.legacyContext, n.context, n.treeContext);
      n.componentStack !== null && (C.componentStack = n.componentStack.parent);
      var F = C.ping;
      u.then(F, F);
    }
    function Hi(t, n, u) {
      var g = n.blockedSegment.formatContext, v = n.legacyContext, S = n.context, C = null;
      C = n.componentStack;
      try {
        return lr(t, n, u);
      } catch (F) {
        if (ji(), typeof F == "object" && F !== null && typeof F.then == "function") {
          cr(t, n, F), n.blockedSegment.formatContext = g, n.legacyContext = v, n.context = S, To(S), n.componentStack = C;
          return;
        } else
          throw n.blockedSegment.formatContext = g, n.legacyContext = v, n.context = S, To(S), n.componentStack = C, F;
      }
    }
    function ma(t, n, u, g) {
      var v = wr(t, g);
      if (n === null ? Mn(t, g) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = !0, n.errorDigest = v, bi(n, g), n.parentFlushed && t.clientRenderedBoundaries.push(n))), t.allPendingTasks--, t.allPendingTasks === 0) {
        var S = t.onAllReady;
        S();
      }
    }
    function Ou(t) {
      var n = this, u = t.blockedBoundary, g = t.blockedSegment;
      g.status = PA, Ea(n, u, g);
    }
    function UA(t, n, u) {
      var g = t.blockedBoundary, v = t.blockedSegment;
      if (v.status = PA, g === null)
        n.allPendingTasks--, n.status !== Qn && (n.status = Qn, n.destination !== null && re(n.destination));
      else {
        if (g.pendingTasks--, !g.forceClientRender) {
          g.forceClientRender = !0;
          var S = u === void 0 ? new Error("The render was aborted by the server without a reason.") : u;
          g.errorDigest = n.onError(S);
          {
            var C = "The server did not finish this Suspense boundary: ";
            S && typeof S.message == "string" ? S = C + S.message : S = C + String(S);
            var F = en;
            en = t;
            try {
              bi(g, S);
            } finally {
              en = F;
            }
          }
          g.parentFlushed && n.clientRenderedBoundaries.push(g);
        }
        if (g.fallbackAbortableTasks.forEach(function(r) {
          return UA(r, n, u);
        }), g.fallbackAbortableTasks.clear(), n.allPendingTasks--, n.allPendingTasks === 0) {
          var e = n.onAllReady;
          e();
        }
      }
    }
    function YA(t, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null) {
        var u = n.children[0];
        u.id = n.id, u.parentFlushed = !0, u.status === dn && YA(t, u);
      } else {
        var g = t.completedSegments;
        g.push(n);
      }
    }
    function Ea(t, n, u) {
      if (n === null) {
        if (u.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          t.completedRootSegment = u;
        }
        if (t.pendingRootTasks--, t.pendingRootTasks === 0) {
          t.onShellError = Zr;
          var g = t.onShellReady;
          g();
        }
      } else if (n.pendingTasks--, !n.forceClientRender) {
        if (n.pendingTasks === 0)
          u.parentFlushed && u.status === dn && YA(n, u), n.parentFlushed && t.completedBoundaries.push(n), n.fallbackAbortableTasks.forEach(Ou, t), n.fallbackAbortableTasks.clear();
        else if (u.parentFlushed && u.status === dn) {
          YA(n, u);
          var v = n.completedSegments;
          v.length === 1 && n.parentFlushed && t.partialBoundaries.push(n);
        }
      }
      if (t.allPendingTasks--, t.allPendingTasks === 0) {
        var S = t.onAllReady;
        S();
      }
    }
    function Ca(t, n) {
      var u = n.blockedSegment;
      if (u.status === mi) {
        To(n.context);
        var g = null;
        g = en, en = n;
        try {
          lr(t, n, n.node), un(u.chunks, t.responseState, u.lastPushedText, u.textEmbedded), n.abortSet.delete(n), u.status = dn, Ea(t, n.blockedBoundary, u);
        } catch (S) {
          if (ji(), typeof S == "object" && S !== null && typeof S.then == "function") {
            var v = n.ping;
            S.then(v, v);
          } else
            n.abortSet.delete(n), u.status = Pn, ma(t, n.blockedBoundary, u, S);
        } finally {
          en = g;
        }
      }
    }
    function Uo(t) {
      if (t.status !== Qn) {
        var n = hA(), u = zo.current;
        zo.current = ha;
        var g;
        g = kA.getCurrentStack, kA.getCurrentStack = Oo;
        var v = Ti;
        bo(t.responseState);
        try {
          var S = t.pingedTasks, C;
          for (C = 0; C < S.length; C++) {
            var F = S[C];
            Ca(t, F);
          }
          S.splice(0, C), t.destination !== null && FA(t, t.destination);
        } catch (e) {
          wr(t, e), Mn(t, e);
        } finally {
          bo(v), zo.current = u, kA.getCurrentStack = g, u === ha && To(n);
        }
      }
    }
    function Yo(t, n, u) {
      switch (u.parentFlushed = !0, u.status) {
        case mi: {
          var g = u.id = t.nextSegmentId++;
          return u.lastPushedText = !1, u.textEmbedded = !1, Rn(n, t.responseState, g);
        }
        case dn: {
          u.status = OA;
          for (var v = !0, S = u.chunks, C = 0, F = u.children, e = 0; e < F.length; e++) {
            for (var r = F[e]; C < r.index; C++)
              k(n, S[C]);
            v = RA(t, n, r);
          }
          for (; C < S.length - 1; C++)
            k(n, S[C]);
          return C < S.length && (v = ee(n, S[C])), v;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function RA(t, n, u) {
      var g = u.boundary;
      if (g === null)
        return Yo(t, n, u);
      if (g.parentFlushed = !0, g.forceClientRender)
        return Jt(n, t.responseState, g.errorDigest, g.errorMessage, g.errorComponentStack), Yo(t, n, u), $A(n, t.responseState);
      if (g.pendingTasks > 0) {
        g.rootSegmentID = t.nextSegmentId++, g.completedSegments.length > 0 && t.partialBoundaries.push(g);
        var v = g.id = Nn(t.responseState);
        return Wn(n, t.responseState, v), Yo(t, n, u), Zn(n, t.responseState);
      } else {
        if (g.byteSize > t.progressiveChunkSize)
          return g.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(g), Wn(n, t.responseState, g.id), Yo(t, n, u), Zn(n, t.responseState);
        _o(n, t.responseState);
        var S = g.completedSegments;
        if (S.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var C = S[0];
        return RA(t, n, C), $o(n, t.responseState);
      }
    }
    function xa(t, n, u) {
      return Xi(n, t.responseState, u.id, u.errorDigest, u.errorMessage, u.errorComponentStack);
    }
    function Ro(t, n, u) {
      return Re(n, t.responseState, u.formatContext, u.id), RA(t, n, u), Mt(n, u.formatContext);
    }
    function Fo(t, n, u) {
      for (var g = u.completedSegments, v = 0; v < g.length; v++) {
        var S = g[v];
        Wi(t, n, u, S);
      }
      return g.length = 0, ei(n, t.responseState, u.id, u.rootSegmentID);
    }
    function Pu(t, n, u) {
      for (var g = u.completedSegments, v = 0; v < g.length; v++) {
        var S = g[v];
        if (!Wi(t, n, u, S))
          return v++, g.splice(0, v), !1;
      }
      return g.splice(0, v), !0;
    }
    function Wi(t, n, u, g) {
      if (g.status === OA)
        return !0;
      var v = g.id;
      if (v === -1) {
        var S = g.id = u.rootSegmentID;
        if (S === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ro(t, n, g);
      } else
        return Ro(t, n, g), Ga(n, t.responseState, v);
    }
    function FA(t, n) {
      R();
      try {
        var u = t.completedRootSegment;
        u !== null && t.pendingRootTasks === 0 && (RA(t, n, u), t.completedRootSegment = null, KA(n, t.responseState));
        var g = t.clientRenderedBoundaries, v;
        for (v = 0; v < g.length; v++) {
          var S = g[v];
          xa(t, n, S);
        }
        g.splice(0, v);
        var C = t.completedBoundaries;
        for (v = 0; v < C.length; v++) {
          var F = C[v];
          Fo(t, n, F);
        }
        C.splice(0, v), fe(n), R(n);
        var e = t.partialBoundaries;
        for (v = 0; v < e.length; v++) {
          var r = e[v];
          if (!Pu(t, n, r)) {
            t.destination = null, v++, e.splice(0, v);
            return;
          }
        }
        e.splice(0, v);
        var i = t.completedBoundaries;
        for (v = 0; v < i.length; v++) {
          var c = i[v];
          Fo(t, n, c);
        }
        i.splice(0, v);
      } finally {
        fe(n), t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.abortableTasks.size !== 0 && l("There was still abortable task at the root when we closed. This is a bug in React."), re(n));
      }
    }
    function Qu(t) {
      b(function() {
        return Uo(t);
      });
    }
    function ba(t, n) {
      if (t.status === Ei) {
        t.status = Qn, G(n, t.fatalError);
        return;
      }
      if (t.status !== Qn && t.destination === null) {
        t.destination = n;
        try {
          FA(t, n);
        } catch (u) {
          wr(t, u), Mn(t, u);
        }
      }
    }
    function HA(t, n) {
      try {
        var u = t.abortableTasks;
        u.forEach(function(g) {
          return UA(g, t, n);
        }), u.clear(), t.destination !== null && FA(t, t.destination);
      } catch (g) {
        wr(t, g), Mn(t, g);
      }
    }
    function Bu(t, n) {
      return new Promise(function(u, g) {
        var v, S, C = new Promise(function(p, w) {
          S = p, v = w;
        });
        function F() {
          var p = new ReadableStream(
            {
              type: "bytes",
              pull: function(w) {
                ba(r, w);
              },
              cancel: function(w) {
                HA(r);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          p.allReady = C, u(p);
        }
        function e(p) {
          C.catch(function() {
          }), g(p);
        }
        var r = Tu(t, Rt(n ? n.identifierPrefix : void 0, n ? n.nonce : void 0, n ? n.bootstrapScriptContent : void 0, n ? n.bootstrapScripts : void 0, n ? n.bootstrapModules : void 0), Er(n ? n.namespaceURI : void 0), n ? n.progressiveChunkSize : void 0, n ? n.onError : void 0, S, F, e, v);
        if (n && n.signal) {
          var i = n.signal, c = function() {
            HA(r, i.reason), i.removeEventListener("abort", c);
          };
          i.addEventListener("abort", c);
        }
        Qu(r);
      });
    }
    Qa.renderToReadableStream = Bu, Qa.version = a;
  }()), Qa;
}
var Zo, $u;
process.env.NODE_ENV === "production" ? (Zo = kl(), $u = Ol()) : (Zo = Pl(), $u = Ql());
Vo.version = Zo.version;
Vo.renderToString = Zo.renderToString;
Vo.renderToStaticMarkup = Zo.renderToStaticMarkup;
Vo.renderToNodeStream = Zo.renderToNodeStream;
Vo.renderToStaticNodeStream = Zo.renderToStaticNodeStream;
Vo.renderToReadableStream = $u.renderToReadableStream;
const Bl = () => {
  var a;
  const { botOptions: s } = _t();
  return /* @__PURE__ */ Z.jsx("div", { className: "rcb-line-break-container", children: /* @__PURE__ */ Z.jsx("div", { style: s.chatHistoryLineBreakStyle, className: "rcb-line-break-text", children: (a = s.chatHistory) == null ? void 0 : a.chatHistoryLineBreakText }) });
};
const Ul = () => {
  var M;
  const { botOptions: s } = _t(), a = {
    borderTop: `4px solid ${(M = s.theme) == null ? void 0 : M.primaryColor}`,
    ...s.loadingSpinnerStyle
  };
  return /* @__PURE__ */ Z.jsx("div", { className: "rcb-spinner-container", children: /* @__PURE__ */ Z.jsx("div", { style: a, className: "rcb-spinner" }) });
};
let Us = !1, es = "rcb-history", Ya = 30, Ys = !1, ts = [];
const vs = async (s) => {
  if (Ys)
    return;
  const a = [], M = Us ? ts.length : 0;
  for (let l = s.length - 1; l >= M; l--) {
    const E = s[l];
    if (E.sender === "system" || (E.content !== "" && a.unshift(E), a.length === Ya))
      break;
  }
  let D = a.map(Fl);
  if (D.length < Ya) {
    const l = Ya - D.length;
    D = [...ts.slice(-l), ...D];
  }
  localStorage.setItem(es, JSON.stringify(D));
}, Yl = (s) => {
  if (s != null)
    try {
      return JSON.parse(s);
    } catch {
      return [];
    }
  return [];
}, Rl = (s) => {
  var a, M, D;
  es = (a = s.chatHistory) == null ? void 0 : a.storageKey, Ya = (M = s.chatHistory) == null ? void 0 : M.maxEntries, Ys = (D = s.chatHistory) == null ? void 0 : D.disabled, ts = Yl(localStorage.getItem(es));
}, Fl = (s) => nl(s.content) ? structuredClone({
  content: Vo.renderToString(s.content),
  type: "object",
  sender: s.sender
}) : { ...s, type: "string" }, Ds = (s, a, M, D) => {
  var l;
  if (Us = !0, a != null)
    try {
      M((b) => {
        const x = {
          content: /* @__PURE__ */ Z.jsx(Ul, {}),
          sender: "system"
        };
        return b.shift(), [x, ...b];
      });
      const E = JSON.parse(a).map((b) => {
        if (b.type === "object") {
          const x = Rs(b.content, s);
          return { ...b, content: x };
        }
        return b;
      });
      setTimeout(() => {
        var b;
        M((x) => {
          var T;
          x.shift();
          let L;
          return (T = s.chatHistory) != null && T.autoLoad ? L = {
            content: /* @__PURE__ */ Z.jsx(Z.Fragment, {}),
            sender: "system"
          } : L = {
            content: /* @__PURE__ */ Z.jsx(Bl, {}),
            sender: "system"
          }, [...E, L, ...x];
        }), D(((b = s.chatInput) == null ? void 0 : b.disabled) || !1);
      }, 500);
    } catch {
      localStorage.removeItem((l = s.chatHistory) == null ? void 0 : l.storageKey);
    }
}, Rs = (s, a) => {
  const D = new DOMParser().parseFromString(s, "text/html");
  return Array.from(D.body.childNodes).map((b, x) => {
    var L;
    if (b.nodeType === Node.TEXT_NODE)
      return b.textContent;
    {
      const T = b.tagName.toLowerCase();
      let R = Array.from(b.attributes).reduce((fe, re) => {
        const Ae = re.name.toLowerCase();
        if (Ae === "style") {
          const W = re.value.split(";").filter((G) => G.trim() !== ""), O = {};
          W.forEach((G) => {
            const [X, $] = G.split(":").map((se) => se.trim()), Q = X.replace(/-([a-z])/g, (se, ne) => ne.toUpperCase());
            O[Q] = $;
          }), fe[Ae] = O;
        } else
          fe[Ae] = re.value;
        return fe;
      }, {});
      const k = b.classList;
      (L = a.botBubble) != null && L.showAvatar && (R = Hl(k, R)), R = Wl(k, R, a), R = Zl(k, R, a), R = Vl(k, R, a);
      const ee = Rs(b.innerHTML, a);
      return ol(T, { key: x, ...R }, ee);
    }
  });
}, Hl = (s, a) => ((s.contains("rcb-options-container") || s.contains("rcb-checkbox-container")) && (Object.prototype.hasOwnProperty.call(a, "class") ? a.class = `${s.toString()} rcb-options-offset` : a.class = "rcb-options-offset"), a), Wl = (s, a, M) => {
  var D, l, E, b, x;
  return s.contains("rcb-options") && (a.style = {
    ...a.style,
    color: ((D = M.botOptionStyle) == null ? void 0 : D.color) || ((l = M.theme) == null ? void 0 : l.primaryColor),
    borderColor: ((E = M.botOptionStyle) == null ? void 0 : E.color) || ((b = M.theme) == null ? void 0 : b.primaryColor),
    cursor: `url(${(x = M.theme) == null ? void 0 : x.actionDisabledIcon}), auto`,
    ...M.botOptionStyle
  }), a;
}, Zl = (s, a, M) => {
  var D, l, E, b, x;
  return s.contains("rcb-checkbox-row-container") && (a.style = {
    ...a.style,
    color: ((D = M.botCheckboxRowStyle) == null ? void 0 : D.color) || ((l = M.theme) == null ? void 0 : l.primaryColor),
    borderColor: ((E = M.botCheckboxRowStyle) == null ? void 0 : E.color) || ((b = M.theme) == null ? void 0 : b.primaryColor),
    cursor: `url(${(x = M.theme) == null ? void 0 : x.actionDisabledIcon}), auto`,
    ...M.botCheckboxRowStyle
  }), a;
}, Vl = (s, a, M) => {
  var D, l, E, b, x;
  return s.contains("rcb-checkbox-next-button") && (a.style = {
    ...a.style,
    color: ((D = M.botCheckboxNextStyle) == null ? void 0 : D.color) || ((l = M.theme) == null ? void 0 : l.primaryColor),
    borderColor: ((E = M.botCheckboxNextStyle) == null ? void 0 : E.color) || ((b = M.theme) == null ? void 0 : b.primaryColor),
    cursor: `url(${(x = M.theme) == null ? void 0 : x.actionDisabledIcon}), auto`,
    ...M.botCheckboxNextStyle
  }), a;
}, Gl = (s, a, M, D, l) => {
  const E = new SpeechSynthesisUtterance();
  E.text = s, E.lang = a, E.rate = D, E.volume = l;
  let b = !1;
  for (const x in M)
    if (window.speechSynthesis.getVoices().find((L) => {
      if (L.name === x) {
        E.voice = L, window.speechSynthesis.speak(E), b = !0;
        return;
      }
    }), b)
      break;
  b || window.speechSynthesis.speak(E);
}, Xl = (s, a, M) => {
  var D, l, E, b, x, L;
  (D = s.audio) != null && D.disabled || M.sender === "user" || typeof M.content != "string" || !(s != null && s.isOpen) && !((l = s.theme) != null && l.embedded) || !a || Gl(
    M.content,
    (E = s.audio) == null ? void 0 : E.language,
    (b = s.audio) == null ? void 0 : b.voiceNames,
    (x = s.audio) == null ? void 0 : x.rate,
    (L = s.audio) == null ? void 0 : L.volume
  );
};
const Jl = ({
  isOpenDrawer: s,
  getCurrPath: a,
  flow: M
}) => {
  const D = a();
  if (!D)
    return;
  const l = M[D];
  if (l)
    return /* @__PURE__ */ Z.jsx("div", { children: /* @__PURE__ */ Z.jsx("div", { className: `rcb-chat-drawer-container ${s == !1 ? "open" : ""}`, children: /* @__PURE__ */ Z.jsx("div", { children: l.renderDrawerItems ? l.renderDrawerItems : null }) }) });
};
var Fa = { exports: {} }, Fs = {}, rs = { exports: {} }, Ba = { exports: {} }, dt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ls;
function Kl() {
  if (Ls)
    return dt;
  Ls = 1;
  var s = typeof Symbol == "function" && Symbol.for, a = s ? Symbol.for("react.element") : 60103, M = s ? Symbol.for("react.portal") : 60106, D = s ? Symbol.for("react.fragment") : 60107, l = s ? Symbol.for("react.strict_mode") : 60108, E = s ? Symbol.for("react.profiler") : 60114, b = s ? Symbol.for("react.provider") : 60109, x = s ? Symbol.for("react.context") : 60110, L = s ? Symbol.for("react.async_mode") : 60111, T = s ? Symbol.for("react.concurrent_mode") : 60111, R = s ? Symbol.for("react.forward_ref") : 60112, k = s ? Symbol.for("react.suspense") : 60113, ee = s ? Symbol.for("react.suspense_list") : 60120, fe = s ? Symbol.for("react.memo") : 60115, re = s ? Symbol.for("react.lazy") : 60116, Ae = s ? Symbol.for("react.block") : 60121, W = s ? Symbol.for("react.fundamental") : 60117, O = s ? Symbol.for("react.responder") : 60118, G = s ? Symbol.for("react.scope") : 60119;
  function X(Q) {
    if (typeof Q == "object" && Q !== null) {
      var se = Q.$$typeof;
      switch (se) {
        case a:
          switch (Q = Q.type, Q) {
            case L:
            case T:
            case D:
            case E:
            case l:
            case k:
              return Q;
            default:
              switch (Q = Q && Q.$$typeof, Q) {
                case x:
                case R:
                case re:
                case fe:
                case b:
                  return Q;
                default:
                  return se;
              }
          }
        case M:
          return se;
      }
    }
  }
  function $(Q) {
    return X(Q) === T;
  }
  return dt.AsyncMode = L, dt.ConcurrentMode = T, dt.ContextConsumer = x, dt.ContextProvider = b, dt.Element = a, dt.ForwardRef = R, dt.Fragment = D, dt.Lazy = re, dt.Memo = fe, dt.Portal = M, dt.Profiler = E, dt.StrictMode = l, dt.Suspense = k, dt.isAsyncMode = function(Q) {
    return $(Q) || X(Q) === L;
  }, dt.isConcurrentMode = $, dt.isContextConsumer = function(Q) {
    return X(Q) === x;
  }, dt.isContextProvider = function(Q) {
    return X(Q) === b;
  }, dt.isElement = function(Q) {
    return typeof Q == "object" && Q !== null && Q.$$typeof === a;
  }, dt.isForwardRef = function(Q) {
    return X(Q) === R;
  }, dt.isFragment = function(Q) {
    return X(Q) === D;
  }, dt.isLazy = function(Q) {
    return X(Q) === re;
  }, dt.isMemo = function(Q) {
    return X(Q) === fe;
  }, dt.isPortal = function(Q) {
    return X(Q) === M;
  }, dt.isProfiler = function(Q) {
    return X(Q) === E;
  }, dt.isStrictMode = function(Q) {
    return X(Q) === l;
  }, dt.isSuspense = function(Q) {
    return X(Q) === k;
  }, dt.isValidElementType = function(Q) {
    return typeof Q == "string" || typeof Q == "function" || Q === D || Q === T || Q === E || Q === l || Q === k || Q === ee || typeof Q == "object" && Q !== null && (Q.$$typeof === re || Q.$$typeof === fe || Q.$$typeof === b || Q.$$typeof === x || Q.$$typeof === R || Q.$$typeof === W || Q.$$typeof === O || Q.$$typeof === G || Q.$$typeof === Ae);
  }, dt.typeOf = X, dt;
}
var gt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ns;
function ql() {
  return Ns || (Ns = 1, process.env.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, a = s ? Symbol.for("react.element") : 60103, M = s ? Symbol.for("react.portal") : 60106, D = s ? Symbol.for("react.fragment") : 60107, l = s ? Symbol.for("react.strict_mode") : 60108, E = s ? Symbol.for("react.profiler") : 60114, b = s ? Symbol.for("react.provider") : 60109, x = s ? Symbol.for("react.context") : 60110, L = s ? Symbol.for("react.async_mode") : 60111, T = s ? Symbol.for("react.concurrent_mode") : 60111, R = s ? Symbol.for("react.forward_ref") : 60112, k = s ? Symbol.for("react.suspense") : 60113, ee = s ? Symbol.for("react.suspense_list") : 60120, fe = s ? Symbol.for("react.memo") : 60115, re = s ? Symbol.for("react.lazy") : 60116, Ae = s ? Symbol.for("react.block") : 60121, W = s ? Symbol.for("react.fundamental") : 60117, O = s ? Symbol.for("react.responder") : 60118, G = s ? Symbol.for("react.scope") : 60119;
    function X(ie) {
      return typeof ie == "string" || typeof ie == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ie === D || ie === T || ie === E || ie === l || ie === k || ie === ee || typeof ie == "object" && ie !== null && (ie.$$typeof === re || ie.$$typeof === fe || ie.$$typeof === b || ie.$$typeof === x || ie.$$typeof === R || ie.$$typeof === W || ie.$$typeof === O || ie.$$typeof === G || ie.$$typeof === Ae);
    }
    function $(ie) {
      if (typeof ie == "object" && ie !== null) {
        var Ke = ie.$$typeof;
        switch (Ke) {
          case a:
            var ut = ie.type;
            switch (ut) {
              case L:
              case T:
              case D:
              case E:
              case l:
              case k:
                return ut;
              default:
                var zt = ut && ut.$$typeof;
                switch (zt) {
                  case x:
                  case R:
                  case re:
                  case fe:
                  case b:
                    return zt;
                  default:
                    return Ke;
                }
            }
          case M:
            return Ke;
        }
      }
    }
    var Q = L, se = T, ne = x, Pe = b, De = a, Le = R, je = D, Qe = re, _e = fe, Ne = M, Ze = E, Ge = l, $e = k, lt = !1;
    function At(ie) {
      return lt || (lt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(ie) || $(ie) === L;
    }
    function J(ie) {
      return $(ie) === T;
    }
    function K(ie) {
      return $(ie) === x;
    }
    function le(ie) {
      return $(ie) === b;
    }
    function Ie(ie) {
      return typeof ie == "object" && ie !== null && ie.$$typeof === a;
    }
    function pe(ie) {
      return $(ie) === R;
    }
    function ve(ie) {
      return $(ie) === D;
    }
    function de(ie) {
      return $(ie) === re;
    }
    function me(ie) {
      return $(ie) === fe;
    }
    function ke(ie) {
      return $(ie) === M;
    }
    function Ee(ie) {
      return $(ie) === E;
    }
    function xe(ie) {
      return $(ie) === l;
    }
    function qe(ie) {
      return $(ie) === k;
    }
    gt.AsyncMode = Q, gt.ConcurrentMode = se, gt.ContextConsumer = ne, gt.ContextProvider = Pe, gt.Element = De, gt.ForwardRef = Le, gt.Fragment = je, gt.Lazy = Qe, gt.Memo = _e, gt.Portal = Ne, gt.Profiler = Ze, gt.StrictMode = Ge, gt.Suspense = $e, gt.isAsyncMode = At, gt.isConcurrentMode = J, gt.isContextConsumer = K, gt.isContextProvider = le, gt.isElement = Ie, gt.isForwardRef = pe, gt.isFragment = ve, gt.isLazy = de, gt.isMemo = me, gt.isPortal = ke, gt.isProfiler = Ee, gt.isStrictMode = xe, gt.isSuspense = qe, gt.isValidElementType = X, gt.typeOf = $;
  }()), gt;
}
var Is;
function Hs() {
  return Is || (Is = 1, process.env.NODE_ENV === "production" ? Ba.exports = Kl() : Ba.exports = ql()), Ba.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Hu, ws;
function _l() {
  if (ws)
    return Hu;
  ws = 1;
  var s = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
  function D(E) {
    if (E == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(E);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var E = new String("abc");
      if (E[5] = "de", Object.getOwnPropertyNames(E)[0] === "5")
        return !1;
      for (var b = {}, x = 0; x < 10; x++)
        b["_" + String.fromCharCode(x)] = x;
      var L = Object.getOwnPropertyNames(b).map(function(R) {
        return b[R];
      });
      if (L.join("") !== "0123456789")
        return !1;
      var T = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(R) {
        T[R] = R;
      }), Object.keys(Object.assign({}, T)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Hu = l() ? Object.assign : function(E, b) {
    for (var x, L = D(E), T, R = 1; R < arguments.length; R++) {
      x = Object(arguments[R]);
      for (var k in x)
        a.call(x, k) && (L[k] = x[k]);
      if (s) {
        T = s(x);
        for (var ee = 0; ee < T.length; ee++)
          M.call(x, T[ee]) && (L[T[ee]] = x[T[ee]]);
      }
    }
    return L;
  }, Hu;
}
var Wu, Ss;
function is() {
  if (Ss)
    return Wu;
  Ss = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wu = s, Wu;
}
var Zu, js;
function Ws() {
  return js || (js = 1, Zu = Function.call.bind(Object.prototype.hasOwnProperty)), Zu;
}
var Vu, Ts;
function $l() {
  if (Ts)
    return Vu;
  Ts = 1;
  var s = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var a = is(), M = {}, D = Ws();
    s = function(E) {
      var b = "Warning: " + E;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function l(E, b, x, L, T) {
    if (process.env.NODE_ENV !== "production") {
      for (var R in E)
        if (D(E, R)) {
          var k;
          try {
            if (typeof E[R] != "function") {
              var ee = Error(
                (L || "React class") + ": " + x + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ee.name = "Invariant Violation", ee;
            }
            k = E[R](b, R, L, x, null, a);
          } catch (re) {
            k = re;
          }
          if (k && !(k instanceof Error) && s(
            (L || "React class") + ": type specification of " + x + " `" + R + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof k + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), k instanceof Error && !(k.message in M)) {
            M[k.message] = !0;
            var fe = T ? T() : "";
            s(
              "Failed " + x + " type: " + k.message + (fe ?? "")
            );
          }
        }
    }
  }
  return l.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (M = {});
  }, Vu = l, Vu;
}
var Gu, ms;
function ec() {
  if (ms)
    return Gu;
  ms = 1;
  var s = Hs(), a = _l(), M = is(), D = Ws(), l = $l(), E = function() {
  };
  process.env.NODE_ENV !== "production" && (E = function(x) {
    var L = "Warning: " + x;
    typeof console < "u" && console.error(L);
    try {
      throw new Error(L);
    } catch {
    }
  });
  function b() {
    return null;
  }
  return Gu = function(x, L) {
    var T = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator";
    function k(J) {
      var K = J && (T && J[T] || J[R]);
      if (typeof K == "function")
        return K;
    }
    var ee = "<<anonymous>>", fe = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: G(),
      arrayOf: X,
      element: $(),
      elementType: Q(),
      instanceOf: se,
      node: Le(),
      objectOf: Pe,
      oneOf: ne,
      oneOfType: De,
      shape: Qe,
      exact: _e
    };
    function re(J, K) {
      return J === K ? J !== 0 || 1 / J === 1 / K : J !== J && K !== K;
    }
    function Ae(J, K) {
      this.message = J, this.data = K && typeof K == "object" ? K : {}, this.stack = "";
    }
    Ae.prototype = Error.prototype;
    function W(J) {
      if (process.env.NODE_ENV !== "production")
        var K = {}, le = 0;
      function Ie(ve, de, me, ke, Ee, xe, qe) {
        if (ke = ke || ee, xe = xe || me, qe !== M) {
          if (L) {
            var ie = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ie.name = "Invariant Violation", ie;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ke = ke + ":" + me;
            !K[Ke] && // Avoid spamming the console because they are often not actionable except for lib authors
            le < 3 && (E(
              "You are manually calling a React.PropTypes validation function for the `" + xe + "` prop on `" + ke + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), K[Ke] = !0, le++);
          }
        }
        return de[me] == null ? ve ? de[me] === null ? new Ae("The " + Ee + " `" + xe + "` is marked as required " + ("in `" + ke + "`, but its value is `null`.")) : new Ae("The " + Ee + " `" + xe + "` is marked as required in " + ("`" + ke + "`, but its value is `undefined`.")) : null : J(de, me, ke, Ee, xe);
      }
      var pe = Ie.bind(null, !1);
      return pe.isRequired = Ie.bind(null, !0), pe;
    }
    function O(J) {
      function K(le, Ie, pe, ve, de, me) {
        var ke = le[Ie], Ee = Ge(ke);
        if (Ee !== J) {
          var xe = $e(ke);
          return new Ae(
            "Invalid " + ve + " `" + de + "` of type " + ("`" + xe + "` supplied to `" + pe + "`, expected ") + ("`" + J + "`."),
            { expectedType: J }
          );
        }
        return null;
      }
      return W(K);
    }
    function G() {
      return W(b);
    }
    function X(J) {
      function K(le, Ie, pe, ve, de) {
        if (typeof J != "function")
          return new Ae("Property `" + de + "` of component `" + pe + "` has invalid PropType notation inside arrayOf.");
        var me = le[Ie];
        if (!Array.isArray(me)) {
          var ke = Ge(me);
          return new Ae("Invalid " + ve + " `" + de + "` of type " + ("`" + ke + "` supplied to `" + pe + "`, expected an array."));
        }
        for (var Ee = 0; Ee < me.length; Ee++) {
          var xe = J(me, Ee, pe, ve, de + "[" + Ee + "]", M);
          if (xe instanceof Error)
            return xe;
        }
        return null;
      }
      return W(K);
    }
    function $() {
      function J(K, le, Ie, pe, ve) {
        var de = K[le];
        if (!x(de)) {
          var me = Ge(de);
          return new Ae("Invalid " + pe + " `" + ve + "` of type " + ("`" + me + "` supplied to `" + Ie + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(J);
    }
    function Q() {
      function J(K, le, Ie, pe, ve) {
        var de = K[le];
        if (!s.isValidElementType(de)) {
          var me = Ge(de);
          return new Ae("Invalid " + pe + " `" + ve + "` of type " + ("`" + me + "` supplied to `" + Ie + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(J);
    }
    function se(J) {
      function K(le, Ie, pe, ve, de) {
        if (!(le[Ie] instanceof J)) {
          var me = J.name || ee, ke = At(le[Ie]);
          return new Ae("Invalid " + ve + " `" + de + "` of type " + ("`" + ke + "` supplied to `" + pe + "`, expected ") + ("instance of `" + me + "`."));
        }
        return null;
      }
      return W(K);
    }
    function ne(J) {
      if (!Array.isArray(J))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? E(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : E("Invalid argument supplied to oneOf, expected an array.")), b;
      function K(le, Ie, pe, ve, de) {
        for (var me = le[Ie], ke = 0; ke < J.length; ke++)
          if (re(me, J[ke]))
            return null;
        var Ee = JSON.stringify(J, function(qe, ie) {
          var Ke = $e(ie);
          return Ke === "symbol" ? String(ie) : ie;
        });
        return new Ae("Invalid " + ve + " `" + de + "` of value `" + String(me) + "` " + ("supplied to `" + pe + "`, expected one of " + Ee + "."));
      }
      return W(K);
    }
    function Pe(J) {
      function K(le, Ie, pe, ve, de) {
        if (typeof J != "function")
          return new Ae("Property `" + de + "` of component `" + pe + "` has invalid PropType notation inside objectOf.");
        var me = le[Ie], ke = Ge(me);
        if (ke !== "object")
          return new Ae("Invalid " + ve + " `" + de + "` of type " + ("`" + ke + "` supplied to `" + pe + "`, expected an object."));
        for (var Ee in me)
          if (D(me, Ee)) {
            var xe = J(me, Ee, pe, ve, de + "." + Ee, M);
            if (xe instanceof Error)
              return xe;
          }
        return null;
      }
      return W(K);
    }
    function De(J) {
      if (!Array.isArray(J))
        return process.env.NODE_ENV !== "production" && E("Invalid argument supplied to oneOfType, expected an instance of array."), b;
      for (var K = 0; K < J.length; K++) {
        var le = J[K];
        if (typeof le != "function")
          return E(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + lt(le) + " at index " + K + "."
          ), b;
      }
      function Ie(pe, ve, de, me, ke) {
        for (var Ee = [], xe = 0; xe < J.length; xe++) {
          var qe = J[xe], ie = qe(pe, ve, de, me, ke, M);
          if (ie == null)
            return null;
          ie.data && D(ie.data, "expectedType") && Ee.push(ie.data.expectedType);
        }
        var Ke = Ee.length > 0 ? ", expected one of type [" + Ee.join(", ") + "]" : "";
        return new Ae("Invalid " + me + " `" + ke + "` supplied to " + ("`" + de + "`" + Ke + "."));
      }
      return W(Ie);
    }
    function Le() {
      function J(K, le, Ie, pe, ve) {
        return Ne(K[le]) ? null : new Ae("Invalid " + pe + " `" + ve + "` supplied to " + ("`" + Ie + "`, expected a ReactNode."));
      }
      return W(J);
    }
    function je(J, K, le, Ie, pe) {
      return new Ae(
        (J || "React class") + ": " + K + " type `" + le + "." + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + pe + "`."
      );
    }
    function Qe(J) {
      function K(le, Ie, pe, ve, de) {
        var me = le[Ie], ke = Ge(me);
        if (ke !== "object")
          return new Ae("Invalid " + ve + " `" + de + "` of type `" + ke + "` " + ("supplied to `" + pe + "`, expected `object`."));
        for (var Ee in J) {
          var xe = J[Ee];
          if (typeof xe != "function")
            return je(pe, ve, de, Ee, $e(xe));
          var qe = xe(me, Ee, pe, ve, de + "." + Ee, M);
          if (qe)
            return qe;
        }
        return null;
      }
      return W(K);
    }
    function _e(J) {
      function K(le, Ie, pe, ve, de) {
        var me = le[Ie], ke = Ge(me);
        if (ke !== "object")
          return new Ae("Invalid " + ve + " `" + de + "` of type `" + ke + "` " + ("supplied to `" + pe + "`, expected `object`."));
        var Ee = a({}, le[Ie], J);
        for (var xe in Ee) {
          var qe = J[xe];
          if (D(J, xe) && typeof qe != "function")
            return je(pe, ve, de, xe, $e(qe));
          if (!qe)
            return new Ae(
              "Invalid " + ve + " `" + de + "` key `" + xe + "` supplied to `" + pe + "`.\nBad object: " + JSON.stringify(le[Ie], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(J), null, "  ")
            );
          var ie = qe(me, xe, pe, ve, de + "." + xe, M);
          if (ie)
            return ie;
        }
        return null;
      }
      return W(K);
    }
    function Ne(J) {
      switch (typeof J) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !J;
        case "object":
          if (Array.isArray(J))
            return J.every(Ne);
          if (J === null || x(J))
            return !0;
          var K = k(J);
          if (K) {
            var le = K.call(J), Ie;
            if (K !== J.entries) {
              for (; !(Ie = le.next()).done; )
                if (!Ne(Ie.value))
                  return !1;
            } else
              for (; !(Ie = le.next()).done; ) {
                var pe = Ie.value;
                if (pe && !Ne(pe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ze(J, K) {
      return J === "symbol" ? !0 : K ? K["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && K instanceof Symbol : !1;
    }
    function Ge(J) {
      var K = typeof J;
      return Array.isArray(J) ? "array" : J instanceof RegExp ? "object" : Ze(K, J) ? "symbol" : K;
    }
    function $e(J) {
      if (typeof J > "u" || J === null)
        return "" + J;
      var K = Ge(J);
      if (K === "object") {
        if (J instanceof Date)
          return "date";
        if (J instanceof RegExp)
          return "regexp";
      }
      return K;
    }
    function lt(J) {
      var K = $e(J);
      switch (K) {
        case "array":
        case "object":
          return "an " + K;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + K;
        default:
          return K;
      }
    }
    function At(J) {
      return !J.constructor || !J.constructor.name ? ee : J.constructor.name;
    }
    return fe.checkPropTypes = l, fe.resetWarningCache = l.resetWarningCache, fe.PropTypes = fe, fe;
  }, Gu;
}
var Xu, Es;
function tc() {
  if (Es)
    return Xu;
  Es = 1;
  var s = is();
  function a() {
  }
  function M() {
  }
  return M.resetWarningCache = a, Xu = function() {
    function D(b, x, L, T, R, k) {
      if (k !== s) {
        var ee = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ee.name = "Invariant Violation", ee;
      }
    }
    D.isRequired = D;
    function l() {
      return D;
    }
    var E = {
      array: D,
      bigint: D,
      bool: D,
      func: D,
      number: D,
      object: D,
      string: D,
      symbol: D,
      any: D,
      arrayOf: l,
      element: D,
      elementType: D,
      instanceOf: l,
      node: D,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: M,
      resetWarningCache: a
    };
    return E.PropTypes = E, E;
  }, Xu;
}
if (process.env.NODE_ENV !== "production") {
  var rc = Hs(), nc = !0;
  rs.exports = ec()(rc.isElement, nc);
} else
  rs.exports = tc()();
var Zs = rs.exports;
function Vs(s) {
  var a, M, D = "";
  if (typeof s == "string" || typeof s == "number")
    D += s;
  else if (typeof s == "object")
    if (Array.isArray(s))
      for (a = 0; a < s.length; a++)
        s[a] && (M = Vs(s[a])) && (D && (D += " "), D += M);
    else
      for (a in s)
        s[a] && (D && (D += " "), D += a);
  return D;
}
function Cs() {
  for (var s, a, M = 0, D = ""; M < arguments.length; )
    (s = arguments[M++]) && (a = Vs(s)) && (D && (D += " "), D += a);
  return D;
}
const oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Cs,
  default: Cs
}, Symbol.toStringTag, { value: "Module" })), Ac = /* @__PURE__ */ il(oc);
var bt = {}, hn = {};
Object.defineProperty(hn, "__esModule", {
  value: !0
});
hn.dontSetMe = lc;
hn.findInArray = ic;
hn.int = sc;
hn.isFunction = ac;
hn.isNum = uc;
function ic(s, a) {
  for (let M = 0, D = s.length; M < D; M++)
    if (a.apply(a, [s[M], M, s]))
      return s[M];
}
function ac(s) {
  return typeof s == "function" || Object.prototype.toString.call(s) === "[object Function]";
}
function uc(s) {
  return typeof s == "number" && !isNaN(s);
}
function sc(s) {
  return parseInt(s, 10);
}
function lc(s, a, M) {
  if (s[a])
    return new Error("Invalid prop ".concat(a, " passed to ").concat(M, " - do not set this, set it on the child."));
}
var Go = {};
Object.defineProperty(Go, "__esModule", {
  value: !0
});
Go.browserPrefixToKey = Xs;
Go.browserPrefixToStyle = cc;
Go.default = void 0;
Go.getPrefix = Gs;
const Ju = ["Moz", "Webkit", "O", "ms"];
function Gs() {
  var s;
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const M = (s = window.document) === null || s === void 0 || (s = s.documentElement) === null || s === void 0 ? void 0 : s.style;
  if (!M || a in M)
    return "";
  for (let D = 0; D < Ju.length; D++)
    if (Xs(a, Ju[D]) in M)
      return Ju[D];
  return "";
}
function Xs(s, a) {
  return a ? "".concat(a).concat(fc(s)) : s;
}
function cc(s, a) {
  return a ? "-".concat(a.toLowerCase(), "-").concat(s) : s;
}
function fc(s) {
  let a = "", M = !0;
  for (let D = 0; D < s.length; D++)
    M ? (a += s[D].toUpperCase(), M = !1) : s[D] === "-" ? M = !0 : a += s[D];
  return a;
}
Go.default = Gs();
Object.defineProperty(bt, "__esModule", {
  value: !0
});
bt.addClassName = qs;
bt.addEvent = Mc;
bt.addUserSelectStyles = jc;
bt.createCSSTransform = Nc;
bt.createSVGTransform = Ic;
bt.getTouch = wc;
bt.getTouchIdentifier = Sc;
bt.getTranslation = as;
bt.innerHeight = vc;
bt.innerWidth = Dc;
bt.matchesSelector = Ks;
bt.matchesSelectorAndParentsTo = gc;
bt.offsetXYFromParent = Lc;
bt.outerHeight = hc;
bt.outerWidth = yc;
bt.removeClassName = _s;
bt.removeEvent = pc;
bt.removeUserSelectStyles = Tc;
var kr = hn, xs = dc(Go);
function Js(s) {
  if (typeof WeakMap != "function")
    return null;
  var a = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
  return (Js = function(D) {
    return D ? M : a;
  })(s);
}
function dc(s, a) {
  if (!a && s && s.__esModule)
    return s;
  if (s === null || typeof s != "object" && typeof s != "function")
    return { default: s };
  var M = Js(a);
  if (M && M.has(s))
    return M.get(s);
  var D = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var E in s)
    if (E !== "default" && Object.prototype.hasOwnProperty.call(s, E)) {
      var b = l ? Object.getOwnPropertyDescriptor(s, E) : null;
      b && (b.get || b.set) ? Object.defineProperty(D, E, b) : D[E] = s[E];
    }
  return D.default = s, M && M.set(s, D), D;
}
let Ua = "";
function Ks(s, a) {
  return Ua || (Ua = (0, kr.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(M) {
    return (0, kr.isFunction)(s[M]);
  })), (0, kr.isFunction)(s[Ua]) ? s[Ua](a) : !1;
}
function gc(s, a, M) {
  let D = s;
  do {
    if (Ks(D, a))
      return !0;
    if (D === M)
      return !1;
    D = D.parentNode;
  } while (D);
  return !1;
}
function Mc(s, a, M, D) {
  if (!s)
    return;
  const l = {
    capture: !0,
    ...D
  };
  s.addEventListener ? s.addEventListener(a, M, l) : s.attachEvent ? s.attachEvent("on" + a, M) : s["on" + a] = M;
}
function pc(s, a, M, D) {
  if (!s)
    return;
  const l = {
    capture: !0,
    ...D
  };
  s.removeEventListener ? s.removeEventListener(a, M, l) : s.detachEvent ? s.detachEvent("on" + a, M) : s["on" + a] = null;
}
function hc(s) {
  let a = s.clientHeight;
  const M = s.ownerDocument.defaultView.getComputedStyle(s);
  return a += (0, kr.int)(M.borderTopWidth), a += (0, kr.int)(M.borderBottomWidth), a;
}
function yc(s) {
  let a = s.clientWidth;
  const M = s.ownerDocument.defaultView.getComputedStyle(s);
  return a += (0, kr.int)(M.borderLeftWidth), a += (0, kr.int)(M.borderRightWidth), a;
}
function vc(s) {
  let a = s.clientHeight;
  const M = s.ownerDocument.defaultView.getComputedStyle(s);
  return a -= (0, kr.int)(M.paddingTop), a -= (0, kr.int)(M.paddingBottom), a;
}
function Dc(s) {
  let a = s.clientWidth;
  const M = s.ownerDocument.defaultView.getComputedStyle(s);
  return a -= (0, kr.int)(M.paddingLeft), a -= (0, kr.int)(M.paddingRight), a;
}
function Lc(s, a, M) {
  const l = a === a.ownerDocument.body ? {
    left: 0,
    top: 0
  } : a.getBoundingClientRect(), E = (s.clientX + a.scrollLeft - l.left) / M, b = (s.clientY + a.scrollTop - l.top) / M;
  return {
    x: E,
    y: b
  };
}
function Nc(s, a) {
  const M = as(s, a, "px");
  return {
    [(0, xs.browserPrefixToKey)("transform", xs.default)]: M
  };
}
function Ic(s, a) {
  return as(s, a, "");
}
function as(s, a, M) {
  let {
    x: D,
    y: l
  } = s, E = "translate(".concat(D).concat(M, ",").concat(l).concat(M, ")");
  if (a) {
    const b = "".concat(typeof a.x == "string" ? a.x : a.x + M), x = "".concat(typeof a.y == "string" ? a.y : a.y + M);
    E = "translate(".concat(b, ", ").concat(x, ")") + E;
  }
  return E;
}
function wc(s, a) {
  return s.targetTouches && (0, kr.findInArray)(s.targetTouches, (M) => a === M.identifier) || s.changedTouches && (0, kr.findInArray)(s.changedTouches, (M) => a === M.identifier);
}
function Sc(s) {
  if (s.targetTouches && s.targetTouches[0])
    return s.targetTouches[0].identifier;
  if (s.changedTouches && s.changedTouches[0])
    return s.changedTouches[0].identifier;
}
function jc(s) {
  if (!s)
    return;
  let a = s.getElementById("react-draggable-style-el");
  a || (a = s.createElement("style"), a.type = "text/css", a.id = "react-draggable-style-el", a.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, a.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, s.getElementsByTagName("head")[0].appendChild(a)), s.body && qs(s.body, "react-draggable-transparent-selection");
}
function Tc(s) {
  if (s)
    try {
      if (s.body && _s(s.body, "react-draggable-transparent-selection"), s.selection)
        s.selection.empty();
      else {
        const a = (s.defaultView || window).getSelection();
        a && a.type !== "Caret" && a.removeAllRanges();
      }
    } catch {
    }
}
function qs(s, a) {
  s.classList ? s.classList.add(a) : s.className.match(new RegExp("(?:^|\\s)".concat(a, "(?!\\S)"))) || (s.className += " ".concat(a));
}
function _s(s, a) {
  s.classList ? s.classList.remove(a) : s.className = s.className.replace(new RegExp("(?:^|\\s)".concat(a, "(?!\\S)"), "g"), "");
}
var yn = {};
Object.defineProperty(yn, "__esModule", {
  value: !0
});
yn.canDragX = Cc;
yn.canDragY = xc;
yn.createCoreData = zc;
yn.createDraggableData = kc;
yn.getBoundPosition = mc;
yn.getControlPosition = bc;
yn.snapToGrid = Ec;
var zr = hn, ZA = bt;
function mc(s, a, M) {
  if (!s.props.bounds)
    return [a, M];
  let {
    bounds: D
  } = s.props;
  D = typeof D == "string" ? D : Oc(D);
  const l = us(s);
  if (typeof D == "string") {
    const {
      ownerDocument: E
    } = l, b = E.defaultView;
    let x;
    if (D === "parent" ? x = l.parentNode : x = E.querySelector(D), !(x instanceof b.HTMLElement))
      throw new Error('Bounds selector "' + D + '" could not find an element.');
    const L = x, T = b.getComputedStyle(l), R = b.getComputedStyle(L);
    D = {
      left: -l.offsetLeft + (0, zr.int)(R.paddingLeft) + (0, zr.int)(T.marginLeft),
      top: -l.offsetTop + (0, zr.int)(R.paddingTop) + (0, zr.int)(T.marginTop),
      right: (0, ZA.innerWidth)(L) - (0, ZA.outerWidth)(l) - l.offsetLeft + (0, zr.int)(R.paddingRight) - (0, zr.int)(T.marginRight),
      bottom: (0, ZA.innerHeight)(L) - (0, ZA.outerHeight)(l) - l.offsetTop + (0, zr.int)(R.paddingBottom) - (0, zr.int)(T.marginBottom)
    };
  }
  return (0, zr.isNum)(D.right) && (a = Math.min(a, D.right)), (0, zr.isNum)(D.bottom) && (M = Math.min(M, D.bottom)), (0, zr.isNum)(D.left) && (a = Math.max(a, D.left)), (0, zr.isNum)(D.top) && (M = Math.max(M, D.top)), [a, M];
}
function Ec(s, a, M) {
  const D = Math.round(a / s[0]) * s[0], l = Math.round(M / s[1]) * s[1];
  return [D, l];
}
function Cc(s) {
  return s.props.axis === "both" || s.props.axis === "x";
}
function xc(s) {
  return s.props.axis === "both" || s.props.axis === "y";
}
function bc(s, a, M) {
  const D = typeof a == "number" ? (0, ZA.getTouch)(s, a) : null;
  if (typeof a == "number" && !D)
    return null;
  const l = us(M), E = M.props.offsetParent || l.offsetParent || l.ownerDocument.body;
  return (0, ZA.offsetXYFromParent)(D || s, E, M.props.scale);
}
function zc(s, a, M) {
  const D = !(0, zr.isNum)(s.lastX), l = us(s);
  return D ? {
    node: l,
    deltaX: 0,
    deltaY: 0,
    lastX: a,
    lastY: M,
    x: a,
    y: M
  } : {
    node: l,
    deltaX: a - s.lastX,
    deltaY: M - s.lastY,
    lastX: s.lastX,
    lastY: s.lastY,
    x: a,
    y: M
  };
}
function kc(s, a) {
  const M = s.props.scale;
  return {
    node: a.node,
    x: s.state.x + a.deltaX / M,
    y: s.state.y + a.deltaY / M,
    deltaX: a.deltaX / M,
    deltaY: a.deltaY / M,
    lastX: s.state.x,
    lastY: s.state.y
  };
}
function Oc(s) {
  return {
    left: s.left,
    top: s.top,
    right: s.right,
    bottom: s.bottom
  };
}
function us(s) {
  const a = s.findDOMNode();
  if (!a)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return a;
}
var Ha = {}, Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.default = Pc;
function Pc() {
}
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = void 0;
var Ku = Bc(ao), jr = ss(Zs), Qc = ss(zs), er = bt, Ao = yn, qu = hn, Gi = ss(Wa);
function ss(s) {
  return s && s.__esModule ? s : { default: s };
}
function $s(s) {
  if (typeof WeakMap != "function")
    return null;
  var a = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
  return ($s = function(D) {
    return D ? M : a;
  })(s);
}
function Bc(s, a) {
  if (!a && s && s.__esModule)
    return s;
  if (s === null || typeof s != "object" && typeof s != "function")
    return { default: s };
  var M = $s(a);
  if (M && M.has(s))
    return M.get(s);
  var D = {}, l = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var E in s)
    if (E !== "default" && Object.prototype.hasOwnProperty.call(s, E)) {
      var b = l ? Object.getOwnPropertyDescriptor(s, E) : null;
      b && (b.get || b.set) ? Object.defineProperty(D, E, b) : D[E] = s[E];
    }
  return D.default = s, M && M.set(s, D), D;
}
function fr(s, a, M) {
  return a = Uc(a), a in s ? Object.defineProperty(s, a, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : s[a] = M, s;
}
function Uc(s) {
  var a = Yc(s, "string");
  return typeof a == "symbol" ? a : String(a);
}
function Yc(s, a) {
  if (typeof s != "object" || s === null)
    return s;
  var M = s[Symbol.toPrimitive];
  if (M !== void 0) {
    var D = M.call(s, a || "default");
    if (typeof D != "object")
      return D;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(s);
}
const tn = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
let io = tn.mouse, Za = class extends Ku.Component {
  constructor() {
    super(...arguments), fr(this, "dragging", !1), fr(this, "lastX", NaN), fr(this, "lastY", NaN), fr(this, "touchIdentifier", null), fr(this, "mounted", !1), fr(this, "handleDragStart", (a) => {
      if (this.props.onMouseDown(a), !this.props.allowAnyClick && typeof a.button == "number" && a.button !== 0)
        return !1;
      const M = this.findDOMNode();
      if (!M || !M.ownerDocument || !M.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: D
      } = M;
      if (this.props.disabled || !(a.target instanceof D.defaultView.Node) || this.props.handle && !(0, er.matchesSelectorAndParentsTo)(a.target, this.props.handle, M) || this.props.cancel && (0, er.matchesSelectorAndParentsTo)(a.target, this.props.cancel, M))
        return;
      a.type === "touchstart" && a.preventDefault();
      const l = (0, er.getTouchIdentifier)(a);
      this.touchIdentifier = l;
      const E = (0, Ao.getControlPosition)(a, l, this);
      if (E == null)
        return;
      const {
        x: b,
        y: x
      } = E, L = (0, Ao.createCoreData)(this, b, x);
      (0, Gi.default)("DraggableCore: handleDragStart: %j", L), (0, Gi.default)("calling", this.props.onStart), !(this.props.onStart(a, L) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, er.addUserSelectStyles)(D), this.dragging = !0, this.lastX = b, this.lastY = x, (0, er.addEvent)(D, io.move, this.handleDrag), (0, er.addEvent)(D, io.stop, this.handleDragStop));
    }), fr(this, "handleDrag", (a) => {
      const M = (0, Ao.getControlPosition)(a, this.touchIdentifier, this);
      if (M == null)
        return;
      let {
        x: D,
        y: l
      } = M;
      if (Array.isArray(this.props.grid)) {
        let x = D - this.lastX, L = l - this.lastY;
        if ([x, L] = (0, Ao.snapToGrid)(this.props.grid, x, L), !x && !L)
          return;
        D = this.lastX + x, l = this.lastY + L;
      }
      const E = (0, Ao.createCoreData)(this, D, l);
      if ((0, Gi.default)("DraggableCore: handleDrag: %j", E), this.props.onDrag(a, E) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const L = document.createEvent("MouseEvents");
          L.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(L);
        }
        return;
      }
      this.lastX = D, this.lastY = l;
    }), fr(this, "handleDragStop", (a) => {
      if (!this.dragging)
        return;
      const M = (0, Ao.getControlPosition)(a, this.touchIdentifier, this);
      if (M == null)
        return;
      let {
        x: D,
        y: l
      } = M;
      if (Array.isArray(this.props.grid)) {
        let L = D - this.lastX || 0, T = l - this.lastY || 0;
        [L, T] = (0, Ao.snapToGrid)(this.props.grid, L, T), D = this.lastX + L, l = this.lastY + T;
      }
      const E = (0, Ao.createCoreData)(this, D, l);
      if (this.props.onStop(a, E) === !1 || this.mounted === !1)
        return !1;
      const x = this.findDOMNode();
      x && this.props.enableUserSelectHack && (0, er.removeUserSelectStyles)(x.ownerDocument), (0, Gi.default)("DraggableCore: handleDragStop: %j", E), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, x && ((0, Gi.default)("DraggableCore: Removing handlers"), (0, er.removeEvent)(x.ownerDocument, io.move, this.handleDrag), (0, er.removeEvent)(x.ownerDocument, io.stop, this.handleDragStop));
    }), fr(this, "onMouseDown", (a) => (io = tn.mouse, this.handleDragStart(a))), fr(this, "onMouseUp", (a) => (io = tn.mouse, this.handleDragStop(a))), fr(this, "onTouchStart", (a) => (io = tn.touch, this.handleDragStart(a))), fr(this, "onTouchEnd", (a) => (io = tn.touch, this.handleDragStop(a)));
  }
  componentDidMount() {
    this.mounted = !0;
    const a = this.findDOMNode();
    a && (0, er.addEvent)(a, tn.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const a = this.findDOMNode();
    if (a) {
      const {
        ownerDocument: M
      } = a;
      (0, er.removeEvent)(M, tn.mouse.move, this.handleDrag), (0, er.removeEvent)(M, tn.touch.move, this.handleDrag), (0, er.removeEvent)(M, tn.mouse.stop, this.handleDragStop), (0, er.removeEvent)(M, tn.touch.stop, this.handleDragStop), (0, er.removeEvent)(a, tn.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, er.removeUserSelectStyles)(M);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var a, M;
    return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (M = this.props) === null || M === void 0 || (M = M.nodeRef) === null || M === void 0 ? void 0 : M.current : Qc.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ku.cloneElement(Ku.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
Ha.default = Za;
fr(Za, "displayName", "DraggableCore");
fr(Za, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: jr.default.bool,
  children: jr.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: jr.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: jr.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(s, a) {
    if (s[a] && s[a].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: jr.default.arrayOf(jr.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: jr.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: jr.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: jr.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: jr.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: jr.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: jr.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: jr.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: jr.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: qu.dontSetMe,
  style: qu.dontSetMe,
  transform: qu.dontSetMe
});
fr(Za, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return L.default;
    }
  }), s.default = void 0;
  var a = ee(ao), M = R(Zs), D = R(zs), l = R(Ac), E = bt, b = yn, x = hn, L = R(Ha), T = R(Wa);
  function R(G) {
    return G && G.__esModule ? G : { default: G };
  }
  function k(G) {
    if (typeof WeakMap != "function")
      return null;
    var X = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap();
    return (k = function(Q) {
      return Q ? $ : X;
    })(G);
  }
  function ee(G, X) {
    if (!X && G && G.__esModule)
      return G;
    if (G === null || typeof G != "object" && typeof G != "function")
      return { default: G };
    var $ = k(X);
    if ($ && $.has(G))
      return $.get(G);
    var Q = {}, se = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var ne in G)
      if (ne !== "default" && Object.prototype.hasOwnProperty.call(G, ne)) {
        var Pe = se ? Object.getOwnPropertyDescriptor(G, ne) : null;
        Pe && (Pe.get || Pe.set) ? Object.defineProperty(Q, ne, Pe) : Q[ne] = G[ne];
      }
    return Q.default = G, $ && $.set(G, Q), Q;
  }
  function fe() {
    return fe = Object.assign ? Object.assign.bind() : function(G) {
      for (var X = 1; X < arguments.length; X++) {
        var $ = arguments[X];
        for (var Q in $)
          Object.prototype.hasOwnProperty.call($, Q) && (G[Q] = $[Q]);
      }
      return G;
    }, fe.apply(this, arguments);
  }
  function re(G, X, $) {
    return X = Ae(X), X in G ? Object.defineProperty(G, X, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : G[X] = $, G;
  }
  function Ae(G) {
    var X = W(G, "string");
    return typeof X == "symbol" ? X : String(X);
  }
  function W(G, X) {
    if (typeof G != "object" || G === null)
      return G;
    var $ = G[Symbol.toPrimitive];
    if ($ !== void 0) {
      var Q = $.call(G, X || "default");
      if (typeof Q != "object")
        return Q;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (X === "string" ? String : Number)(G);
  }
  class O extends a.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(X, $) {
      let {
        position: Q
      } = X, {
        prevPropsPosition: se
      } = $;
      return Q && (!se || Q.x !== se.x || Q.y !== se.y) ? ((0, T.default)("Draggable: getDerivedStateFromProps %j", {
        position: Q,
        prevPropsPosition: se
      }), {
        x: Q.x,
        y: Q.y,
        prevPropsPosition: {
          ...Q
        }
      }) : null;
    }
    constructor(X) {
      super(X), re(this, "onDragStart", ($, Q) => {
        if ((0, T.default)("Draggable: onDragStart: %j", Q), this.props.onStart($, (0, b.createDraggableData)(this, Q)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), re(this, "onDrag", ($, Q) => {
        if (!this.state.dragging)
          return !1;
        (0, T.default)("Draggable: onDrag: %j", Q);
        const se = (0, b.createDraggableData)(this, Q), ne = {
          x: se.x,
          y: se.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: De,
            y: Le
          } = ne;
          ne.x += this.state.slackX, ne.y += this.state.slackY;
          const [je, Qe] = (0, b.getBoundPosition)(this, ne.x, ne.y);
          ne.x = je, ne.y = Qe, ne.slackX = this.state.slackX + (De - ne.x), ne.slackY = this.state.slackY + (Le - ne.y), se.x = ne.x, se.y = ne.y, se.deltaX = ne.x - this.state.x, se.deltaY = ne.y - this.state.y;
        }
        if (this.props.onDrag($, se) === !1)
          return !1;
        this.setState(ne);
      }), re(this, "onDragStop", ($, Q) => {
        if (!this.state.dragging || this.props.onStop($, (0, b.createDraggableData)(this, Q)) === !1)
          return !1;
        (0, T.default)("Draggable: onDragStop: %j", Q);
        const ne = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: De,
            y: Le
          } = this.props.position;
          ne.x = De, ne.y = Le;
        }
        this.setState(ne);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: X.position ? X.position.x : X.defaultPosition.x,
        y: X.position ? X.position.y : X.defaultPosition.y,
        prevPropsPosition: {
          ...X.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, X.position && !(X.onDrag || X.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.setState({
        dragging: !1
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var X, $;
      return (X = ($ = this.props) === null || $ === void 0 || ($ = $.nodeRef) === null || $ === void 0 ? void 0 : $.current) !== null && X !== void 0 ? X : D.default.findDOMNode(this);
    }
    render() {
      const {
        axis: X,
        bounds: $,
        children: Q,
        defaultPosition: se,
        defaultClassName: ne,
        defaultClassNameDragging: Pe,
        defaultClassNameDragged: De,
        position: Le,
        positionOffset: je,
        scale: Qe,
        ..._e
      } = this.props;
      let Ne = {}, Ze = null;
      const $e = !!!Le || this.state.dragging, lt = Le || se, At = {
        // Set left if horizontal drag is enabled
        x: (0, b.canDragX)(this) && $e ? this.state.x : lt.x,
        // Set top if vertical drag is enabled
        y: (0, b.canDragY)(this) && $e ? this.state.y : lt.y
      };
      this.state.isElementSVG ? Ze = (0, E.createSVGTransform)(At, je) : Ne = (0, E.createCSSTransform)(At, je);
      const J = (0, l.default)(Q.props.className || "", ne, {
        [Pe]: this.state.dragging,
        [De]: this.state.dragged
      });
      return /* @__PURE__ */ a.createElement(L.default, fe({}, _e, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ a.cloneElement(a.Children.only(Q), {
        className: J,
        style: {
          ...Q.props.style,
          ...Ne
        },
        transform: Ze
      }));
    }
  }
  s.default = O, re(O, "displayName", "Draggable"), re(O, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...L.default.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: M.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: M.default.oneOfType([M.default.shape({
      left: M.default.number,
      right: M.default.number,
      top: M.default.number,
      bottom: M.default.number
    }), M.default.string, M.default.oneOf([!1])]),
    defaultClassName: M.default.string,
    defaultClassNameDragging: M.default.string,
    defaultClassNameDragged: M.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: M.default.shape({
      x: M.default.number,
      y: M.default.number
    }),
    positionOffset: M.default.shape({
      x: M.default.oneOfType([M.default.number, M.default.string]),
      y: M.default.oneOfType([M.default.number, M.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: M.default.shape({
      x: M.default.number,
      y: M.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: x.dontSetMe,
    style: x.dontSetMe,
    transform: x.dontSetMe
  }), re(O, "defaultProps", {
    ...L.default.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
})(Fs);
const {
  default: el,
  DraggableCore: Rc
} = Fs;
Fa.exports = el;
Fa.exports.default = el;
Fa.exports.DraggableCore = Rc;
var Fc = Fa.exports;
const Hc = /* @__PURE__ */ Al(Fc), Wc = ({ flow: s }) => {
  var rr, pr, nr, Pr, hr, Zt, yr, mr, It;
  const { botOptions: a, setBotOptions: M } = _t(), { messages: D, setMessages: l } = Ps(), { paths: E, setPaths: b } = Ra(), x = rn(null), L = rn(null), T = rn(""), R = rn(!1), k = rn(!1), ee = rn(null), fe = rn(), re = rn(null), [Ae, W] = it(!1), [O, G] = it(!0), [X, $] = it(!1), [Q, se] = it(!0), [ne, Pe] = it(!1), [De, Le] = it(!1), [je, Qe] = it(!1), [_e, Ne] = it(!1), [Ze, Ge] = it(!1), [$e, lt] = it(0), [At, J] = it(!1), [K, le] = it(), [Ie, pe] = it(0), [ve, de] = it(((rr = window.visualViewport) == null ? void 0 : rr.height) || window.innerHeight), [me, ke] = it(((pr = window.visualViewport) == null ? void 0 : pr.width) || window.innerWidth), Ee = rn(0);
  qt(() => {
    var ae, Me, ce, Ce, Ue, Fe, Ye;
    if (window.addEventListener("click", ie), window.addEventListener("keydown", ie), window.addEventListener("touchstart", ie), qe(), Le((ae = a.chatInput) == null ? void 0 : ae.disabled), $((Me = a.audio) == null ? void 0 : Me.defaultToggledOn), Pe((ce = a.voice) == null ? void 0 : ce.defaultToggledOn), (Ce = a.chatHistory) != null && Ce.disabled)
      localStorage.removeItem((Ue = a.chatHistory) == null ? void 0 : Ue.storageKey);
    else {
      const at = localStorage.getItem((Fe = a.chatHistory) == null ? void 0 : Fe.storageKey);
      at != null && (l([{
        content: /* @__PURE__ */ Z.jsx(Il, { chatHistory: at, showChatHistory: Or }),
        sender: "system"
      }]), (Ye = a.chatHistory) != null && Ye.autoLoad && Ds(a, at, l, Le));
    }
    return () => {
      window.removeEventListener("click", ie), window.removeEventListener("keydown", ie), window.removeEventListener("touchstart", ie);
    };
  }, []), qt(() => {
    Rl(a);
  }, [(nr = a.chatHistory) == null ? void 0 : nr.storageKey, (Pr = a.chatHistory) == null ? void 0 : Pr.maxEntries, (hr = a.chatHistory) == null ? void 0 : hr.disabled]), qt(() => {
    var ae;
    Gr || (ae = a.theme) != null && ae.embedded || navigator.virtualKeyboard && (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (Me) => {
      if (!Me.target)
        return;
      const { x: ce, y: Ce, width: Ue, height: Fe } = Me.target.boundingRect;
      ce == 0 && Ce == 0 && Ue == 0 && Fe == 0 ? (setTimeout(() => {
        var Ye;
        de((Ye = window.visualViewport) == null ? void 0 : Ye.height);
      }, 101), setTimeout(() => {
        var Ye, at;
        ve != ((Ye = window.visualViewport) == null ? void 0 : Ye.height) && de((at = window.visualViewport) == null ? void 0 : at.height);
      }, 1001)) : setTimeout(() => {
        var Ye;
        de(((Ye = window.visualViewport) == null ? void 0 : Ye.height) - Fe);
      }, 101);
    }));
  }, []), qt(() => {
    vs(D), zt();
  }, [D.length]), qt(() => {
    R.current || vs(D);
  }, [R.current]), qt(() => {
    var Ue, Fe, Ye, at;
    if (a.isOpen && (pe(0), de((Ue = window.visualViewport) == null ? void 0 : Ue.height), ke((Fe = window.visualViewport) == null ? void 0 : Fe.width)), Gr)
      return;
    const ae = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), Me = () => Ee.current = window.scrollY, ce = () => {
      var ct, Xe;
      de((ct = window.visualViewport) == null ? void 0 : ct.height), ke((Xe = window.visualViewport) == null ? void 0 : Xe.width);
    }, Ce = () => {
      var ct;
      window.removeEventListener("scroll", ae), window.removeEventListener("scroll", Me), (ct = window.visualViewport) == null || ct.removeEventListener("resize", ce);
    };
    return a.isOpen ? (Ce(), document.body.style.position = "fixed", window.addEventListener("scroll", ae), (Ye = window.visualViewport) == null || Ye.addEventListener("resize", ce)) : (document.body.style.position = "static", Ce(), window.scrollTo({ top: Ee.current, left: 0, behavior: "auto" }), window.addEventListener("scroll", Me), (at = window.visualViewport) == null || at.removeEventListener("resize", ce)), Ce;
  }, [a.isOpen]), qt(() => {
    const ae = wt();
    if (!ae)
      return;
    const Me = s[ae];
    if (!Me) {
      J(!1);
      return;
    }
    const ce = {
      prevPath: tr(),
      userInput: T.current,
      injectMessage: St,
      streamMessage: Wt,
      openChat: Ke,
      openDrawer: ut
    };
    xe(ae, Me, ce);
  }, [E]);
  const xe = async (ae, Me, ce) => {
    ae === "start" && Le(!0), await zl(
      s,
      ae,
      ce,
      Le,
      Qe,
      b,
      le,
      Pt
    ), J(!1), xt(), Yu(k.current && !Me.chatDisabled, a), R.current = !1;
  }, qe = async () => {
    var Ce, Ue, Fe;
    G((Ce = a.notification) == null ? void 0 : Ce.defaultToggledOn);
    const ae = (Ue = a.notification) == null ? void 0 : Ue.sound;
    ee.current = new AudioContext();
    const Me = ee.current.createGain();
    Me.gain.value = ((Fe = a.notification) == null ? void 0 : Fe.volume) || 0.2, re.current = Me;
    let ce;
    if (ae != null && ae.startsWith("data:audio")) {
      const Ye = atob(ae.split(",")[1]), at = new ArrayBuffer(Ye.length), ct = new Uint8Array(at);
      for (let Xe = 0; Xe < Ye.length; Xe++)
        ct[Xe] = Ye.charCodeAt(Xe);
      ce = at;
    } else
      ce = await (await fetch(ae)).arrayBuffer();
    fe.current = await ee.current.decodeAudioData(ce);
  }, ie = () => {
    W(!0);
    const ae = new SpeechSynthesisUtterance();
    ae.text = "", ae.onend = () => {
      window.removeEventListener("click", ie), window.removeEventListener("keydown", ie), window.removeEventListener("touchstart", ie);
    }, window.speechSynthesis.speak(ae);
  }, Ke = (ae) => {
    M({ ...a, isOpen: ae });
  }, ut = (ae) => {
    M({ ...a, isOpenDrawer: ae });
  }, zt = () => {
    var Me, ce;
    if (!ee.current || D.length === 0)
      return;
    const ae = D[D.length - 1];
    if (!(!ae || ae.sender === "user" || At || (Me = a.theme) != null && Me.embedded && !gs(x.current)) && !(a.isOpen && !Ze) && (pe((Ce) => Ce + 1), !((ce = a.notification) != null && ce.disabled) && O && Ae && fe.current)) {
      const Ce = ee.current.createBufferSource();
      Ce.buffer = fe.current, Ce.connect(re.current).connect(ee.current.destination), Ce.start();
    }
  }, wt = () => E.length > 0 ? E[E.length - 1] : null, tr = () => E.length > 1 ? E[E.length - 2] : null, St = async (ae, Me = "bot") => {
    var Fe, Ye, at, ct, Xe, kt;
    const ce = { content: ae, sender: Me };
    Xl(a, X, ce);
    const Ce = typeof ce.content == "string" && ce.sender === "bot" && ((Fe = a == null ? void 0 : a.botBubble) == null ? void 0 : Fe.simStream), Ue = typeof ce.content == "string" && ce.sender === "user" && ((Ye = a == null ? void 0 : a.userBubble) == null ? void 0 : Ye.simStream);
    if (Ce) {
      const Et = (at = a.botBubble) == null ? void 0 : at.streamSpeed, or = (ct = a.botBubble) == null ? void 0 : ct.dangerouslySetInnerHtml;
      await Ot(ce, Et, or);
    } else if (Ue) {
      const Et = (Xe = a.userBubble) == null ? void 0 : Xe.streamSpeed, or = (kt = a.userBubble) == null ? void 0 : kt.dangerouslySetInnerHtml;
      await Ot(ce, Et, or);
    } else
      l((Et) => [...Et, ce]);
  }, Ot = async (ae, Me, ce) => {
    J(!1), l((at) => [...at, ae]), R.current = !0;
    let Ce = ae.content;
    ce && (Ce = pl(Ce));
    let Ue = 0;
    const Fe = Ce.length;
    ae.content = "", await new Promise((at) => {
      const ct = setInterval(() => {
        if (Ue >= Fe) {
          clearInterval(ct), at();
          return;
        }
        l((Xe) => {
          const kt = [...Xe];
          for (let Et = kt.length - 1; Et >= 0; Et--)
            if (kt[Et].sender === ae.sender && typeof kt[Et].content == "string") {
              ae.content += Ce[Ue], kt[Et] = ae, Ue++;
              break;
            }
          return kt;
        });
      }, Me);
    }), R.current = !1;
  }, Wt = async (ae, Me = "bot") => {
    const ce = { content: ae, sender: Me };
    if (!R.current) {
      J(!1), l((Ce) => [...Ce, ce]), R.current = !0;
      return;
    }
    l((Ce) => {
      const Ue = [...Ce];
      for (let Fe = Ue.length - 1; Fe >= 0; Fe--)
        if (Ue[Fe].sender === Me && typeof Ue[Fe].content == typeof ae) {
          Ue[Fe] = ce;
          break;
        }
      return Ue;
    });
  }, Or = (ae) => {
    Ne(!0), Le(!0), Ds(a, ae, l, Le);
  }, xt = () => {
    var Ce;
    const ae = wt();
    if (!ae)
      return;
    const Me = s[ae];
    if (!Me)
      return;
    const ce = Me.chatDisabled ? Me.chatDisabled : (Ce = a.chatInput) == null ? void 0 : Ce.disabled;
    Le(ce), ce || setTimeout(() => {
      var Ue, Fe, Ye;
      (Ue = a.theme) != null && Ue.embedded ? gs(x.current) && ((Fe = L.current) == null || Fe.focus()) : ae !== "start" && ((Ye = L.current) == null || Ye.focus());
    }, 100), Me.isSensitive ? Qe(Me.isSensitive) : Qe(!1);
  }, jt = () => {
    G((ae) => !ae);
  }, yt = () => {
    $((ae) => !ae);
  }, dr = () => {
    se((ae) => !ae), ut(Q);
  }, gr = () => {
    De || Pe((ae) => !ae);
  }, Pt = async (ae, Me, ce = !0) => {
    var Ce, Ue;
    clearTimeout(K), Me = Me.trim(), T.current = Me, Me !== "" && (ce && await pt(Me), x.current && (x.current.scrollTop = x.current.scrollHeight), L.current && (L.current.value = ""), (Ce = a.chatInput) != null && Ce.blockSpam && Le(!0), k.current = ne, Yu(!1, a), setTimeout(() => {
      J(!0);
    }, 400), setTimeout(async () => {
      const Fe = { prevPath: tr(), userInput: Me, injectMessage: St, streamMessage: Wt, openChat: Ke, openDrawer: ut };
      await Bs(s, ae, Fe, b) || (xt(), Yu(k.current, a), J(!1));
    }, (Ue = a.chatInput) == null ? void 0 : Ue.botDelay));
  }, pt = async (ae) => {
    var Ce, Ue, Fe;
    const Me = wt();
    if (!Me)
      return;
    const ce = s[Me];
    if (ce) {
      if (ce.isSensitive) {
        if ((Ce = a == null ? void 0 : a.sensitiveInput) != null && Ce.hideInUserBubble)
          return;
        if ((Ue = a == null ? void 0 : a.sensitiveInput) != null && Ue.maskInUserBubble) {
          await St("*".repeat(((Fe = a.sensitiveInput) == null ? void 0 : Fe.asterisksCount) || 10), "user");
          return;
        }
      }
      await St(ae, "user");
    }
  }, Mr = () => {
    var Me;
    const ae = "rcb-chat-bot ";
    return (Me = a.theme) != null && Me.embedded ? ae + "rcb-window-embedded" : a.isOpen ? ae + "rcb-window-open" : ae + "rcb-window-close";
  }, Tr = () => {
    var ae;
    return !Gr && !((ae = a.theme) != null && ae.embedded) ? {
      ...a.chatWindowStyle,
      borderRadius: "0px",
      left: "0px",
      right: "auto",
      top: "0px",
      bottom: "auto",
      width: `${me}px`,
      height: `${ve}px`
    } : a.chatWindowStyle;
  };
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      onMouseDown: (ae) => {
        var Me;
        Gr ? (Me = L.current) == null || Me.blur() : ae == null || ae.preventDefault();
      },
      className: Mr(),
      children: [
        /* @__PURE__ */ Z.jsx(Nl, {}),
        /* @__PURE__ */ Z.jsx(Ll, { unreadCount: Ie }),
        a.isOpen ? /* @__PURE__ */ Z.jsx(
          Jl,
          {
            isOpenDrawer: a.isOpenDrawer == null ? !1 : a.isOpenDrawer,
            getCurrPath: wt,
            flow: s
          }
        ) : null,
        a.isOpen && !Gr && !((Zt = a.theme) != null && Zt.embedded) && /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
          /* @__PURE__ */ Z.jsx("style", { children: `
							html {
								overflow: hidden !important;
								touch-action: none !important;
								scroll-behavior: auto !important;
							}
						` }),
          /* @__PURE__ */ Z.jsx(
            "div",
            {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                zIndex: 9999
              }
            }
          )
        ] }),
        /* @__PURE__ */ Z.jsx(Hc, { children: /* @__PURE__ */ Z.jsx("div", { className: "box rem-position-fix", style: { position: "absolute", right: "20px", bottom: "20px" }, children: /* @__PURE__ */ Z.jsxs(
          "div",
          {
            style: Tr(),
            className: "rcb-chat-window",
            children: [
              ((yr = a.theme) == null ? void 0 : yr.showHeader) && /* @__PURE__ */ Z.jsx(
                sl,
                {
                  notificationToggledOn: O,
                  handleToggleNotification: jt,
                  audioToggledOn: X,
                  handleToggleAudio: yt,
                  handleToggleDrawer: dr,
                  drawerToggledOn: Q
                }
              ),
              /* @__PURE__ */ Z.jsx(
                cl,
                {
                  chatBodyRef: x,
                  isBotTyping: At,
                  isLoadingChatHistory: _e,
                  chatScrollHeight: $e,
                  setChatScrollHeight: lt,
                  setIsLoadingChatHistory: Ne,
                  isScrolling: Ze,
                  setIsScrolling: Ge,
                  unreadCount: Ie,
                  setUnreadCount: pe
                }
              ),
              ((mr = a.theme) == null ? void 0 : mr.showInputRow) && /* @__PURE__ */ Z.jsx(
                hl,
                {
                  handleToggleVoice: gr,
                  handleActionInput: Pt,
                  inputRef: L,
                  textAreaDisabled: De,
                  textAreaSensitiveMode: je,
                  voiceToggledOn: ne,
                  getCurrPath: wt
                }
              ),
              ((It = a.theme) == null ? void 0 : It.showFooter) && /* @__PURE__ */ Z.jsx(
                Dl,
                {
                  inputRef: L,
                  flow: s,
                  textAreaDisabled: De,
                  handleActionInput: Pt,
                  injectMessage: St,
                  streamMessage: Wt,
                  getCurrPath: wt,
                  getPrevPath: tr,
                  openChat: Ke,
                  openDrawer: ut
                }
              )
            ]
          }
        ) }) })
      ]
    }
  );
}, Zc = "data:image/png;base64,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", Vc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE/SURBVDhPfZPBUcMwEEWFK0gJ0AFXbu6ApAJCBYQKGCoIVJBQQegAbhyBDtIB6QDek1ee2JH5M3/WlrRff1dS+g8fKZ3L+K3iLGIPEi4JN3AJZ44FXuHLVRd7DARIXhHW8AC/gn7rYg4VfELknjgEyQ/wF/7Aqu2jNbsY6sDAHJooXfAWUydgbh1rdJSaPJrSdcQLaI3tlEjYtzRLTQ0Lrat1kMkDXPC9dYy5DbGGZ+gJzXSggDWrmoHILUGR5YST94htKUHY7R4hUsqZcpIaFu6JJnv+A0Q5ioydWLIwN3d2Bz2B44vTI+b70zHCT79LCTbF5KrVUWO9AzoY3EhVN9Bd8vHU4K6xRkfZ7fgq68A3YG3u8A3LVfZ92CdPYIGr3PTaY1LgDo6basIj3JZkcSJQgJC7FhEvWdfxAVL6AwEQafmbqcSDAAAAAElFTkSuQmCC", bs = "data:image/png;base64,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", Gc = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 90, height: 90, viewBox: "0 0 90 90", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M 38.062 25.827 C 28.834 30.776, 28.834 45.224, 38.062 50.173 C 50.593 56.893, 63.893 43.593, 57.173 31.062 C 54.984 26.980, 49.846 24, 45 24 C 43.058 24, 39.936 24.822, 38.062 25.827 M 35 60.576 C 27.228 64.982, 23.960 69.562, 21.023 80.160 C 19.910 84.175, 19 88.031, 19 88.730 C 19 89.724, 24.647 90, 45 90 C 65.353 90, 71 89.724, 71 88.730 C 71 86.070, 66.879 72.741, 65.265 70.180 C 58.196 58.961, 45.149 54.821, 35 60.576", stroke: "none", fill: "#5c5c5c", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M 0 45 L 0 90 9.317 90 L 18.634 90 20.370 82.636 C 22.366 74.170, 25.057 68.651, 29.062 64.804 C 38.455 55.783, 51.545 55.783, 60.938 64.804 C 64.948 68.655, 67.634 74.172, 69.638 82.670 L 71.382 90.068 80.941 89.784 L 90.500 89.500 90.760 44.750 L 91.021 0 45.510 0 L 0 0 0 45 M 0.460 45.500 C 0.460 70.250, 0.590 80.232, 0.749 67.682 C 0.908 55.132, 0.908 34.882, 0.749 22.682 C 0.590 10.482, 0.460 20.750, 0.460 45.500 M 38.062 25.827 C 28.834 30.776, 28.834 45.224, 38.062 50.173 C 50.593 56.893, 63.893 43.593, 57.173 31.062 C 54.984 26.980, 49.846 24, 45 24 C 43.058 24, 39.936 24.822, 38.062 25.827", stroke: "none", fill: "#c4c4c4", fillRule: "evenodd" }));
nn(Gc);
const Xc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIiB2ZXJzaW9uPSIxLjEiPjxwYXRoIGQ9Ik0gMzguMDYyIDI1LjgyNyBDIDI4LjgzNCAzMC43NzYsIDI4LjgzNCA0NS4yMjQsIDM4LjA2MiA1MC4xNzMgQyA1MC41OTMgNTYuODkzLCA2My44OTMgNDMuNTkzLCA1Ny4xNzMgMzEuMDYyIEMgNTQuOTg0IDI2Ljk4MCwgNDkuODQ2IDI0LCA0NSAyNCBDIDQzLjA1OCAyNCwgMzkuOTM2IDI0LjgyMiwgMzguMDYyIDI1LjgyNyBNIDM1IDYwLjU3NiBDIDI3LjIyOCA2NC45ODIsIDIzLjk2MCA2OS41NjIsIDIxLjAyMyA4MC4xNjAgQyAxOS45MTAgODQuMTc1LCAxOSA4OC4wMzEsIDE5IDg4LjczMCBDIDE5IDg5LjcyNCwgMjQuNjQ3IDkwLCA0NSA5MCBDIDY1LjM1MyA5MCwgNzEgODkuNzI0LCA3MSA4OC43MzAgQyA3MSA4Ni4wNzAsIDY2Ljg3OSA3Mi43NDEsIDY1LjI2NSA3MC4xODAgQyA1OC4xOTYgNTguOTYxLCA0NS4xNDkgNTQuODIxLCAzNSA2MC41NzYiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzVjNWM1YyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTSAwIDQ1IEwgMCA5MCA5LjMxNyA5MCBMIDE4LjYzNCA5MCAyMC4zNzAgODIuNjM2IEMgMjIuMzY2IDc0LjE3MCwgMjUuMDU3IDY4LjY1MSwgMjkuMDYyIDY0LjgwNCBDIDM4LjQ1NSA1NS43ODMsIDUxLjU0NSA1NS43ODMsIDYwLjkzOCA2NC44MDQgQyA2NC45NDggNjguNjU1LCA2Ny42MzQgNzQuMTcyLCA2OS42MzggODIuNjcwIEwgNzEuMzgyIDkwLjA2OCA4MC45NDEgODkuNzg0IEwgOTAuNTAwIDg5LjUwMCA5MC43NjAgNDQuNzUwIEwgOTEuMDIxIDAgNDUuNTEwIDAgTCAwIDAgMCA0NSBNIDAuNDYwIDQ1LjUwMCBDIDAuNDYwIDcwLjI1MCwgMC41OTAgODAuMjMyLCAwLjc0OSA2Ny42ODIgQyAwLjkwOCA1NS4xMzIsIDAuOTA4IDM0Ljg4MiwgMC43NDkgMjIuNjgyIEMgMC41OTAgMTAuNDgyLCAwLjQ2MCAyMC43NTAsIDAuNDYwIDQ1LjUwMCBNIDM4LjA2MiAyNS44MjcgQyAyOC44MzQgMzAuNzc2LCAyOC44MzQgNDUuMjI0LCAzOC4wNjIgNTAuMTczIEMgNTAuNTkzIDU2Ljg5MywgNjMuODkzIDQzLjU5MywgNTcuMTczIDMxLjA2MiBDIDU0Ljk4NCAyNi45ODAsIDQ5Ljg0NiAyNCwgNDUgMjQgQyA0My4wNTggMjQsIDM5LjkzNiAyNC44MjIsIDM4LjA2MiAyNS44MjciIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2M0YzRjNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+", Jc = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 637 637", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M477.5 112.69c-4.4.776-10.025 1.806-12.5 2.287l-4.5.876 4.5-.343c2.475-.189 8.55-1.04 13.5-1.891 10.71-1.842 35.6-2.115 42.307-.464 2.581.636 5.581 1.761 6.666 2.5 1.084.74 2.422 1.345 2.972 1.345 2.337 0-4.024-3.335-8.772-4.599-6.741-1.795-33.352-1.621-44.173.289m56 5.878c1.1.813 4.749 3.483 8.109 5.934 7.15 5.215 20.391 17.897 20.391 19.53 0 1.549 7.128 12.173 7.75 11.551.275-.275-1.131-2.957-3.125-5.961-1.994-3.003-3.625-5.752-3.625-6.108 0-2.727-14.777-16.353-25.3-23.331-4.803-3.185-7.971-4.403-4.2-1.615M336 134.973c-3.575.378-7.6 1.048-8.945 1.487-1.345.439-12.82 2.499-25.5 4.578s-21.853 3.821-20.383 3.871c1.469.05 7.994-.802 14.5-1.893 6.505-1.092 14.303-2.248 17.328-2.57 3.025-.322 8.95-1.454 13.167-2.516 4.216-1.061 9.702-1.93 12.191-1.93 2.488 0 4.802-.45 5.142-1 .34-.55.254-.936-.191-.858-.445.078-3.734.452-7.309.831m-179.5 30.092c-2.75.448-7.475 1.299-10.5 1.89-3.025.591-8.65 1.498-12.5 2.015-13.282 1.784-33.152 6.247-34.484 7.745-.284.319.609.272 1.984-.105 6.031-1.652 26.983-5.828 33.435-6.664 3.886-.504 9.54-1.395 12.565-1.981a304.111 304.111 0 0 1 10.749-1.847c2.887-.431 5.55-1.083 5.917-1.451.777-.776-.347-.714-7.166.398m368.083 8.335c2.155 1.87 4.142 3.176 4.417 2.903.613-.611-6.05-6.303-7.379-6.303-.525 0 .808 1.53 2.962 3.4M439 178.604c-4.125.751-12.9 2.287-19.5 3.413-6.6 1.125-15.681 2.707-20.18 3.515-4.498.807-9.336 1.468-10.75 1.468-1.413 0-2.57.459-2.57 1.019 0 .561 1.012.807 2.25.549 1.238-.259 6.525-1.19 11.75-2.069s14.45-2.49 20.5-3.578c6.05-1.089 15.725-2.821 21.5-3.85s9.15-1.862 7.5-1.852c-1.65.011-6.375.634-10.5 1.385m-353.5 3.161c-6.421 3.4-17.5 13.26-17.5 15.574 0 .514 2.844-1.98 6.321-5.543 4.298-4.405 8.662-7.65 13.634-10.137 4.023-2.013 6.691-3.646 5.929-3.63-.761.016-4.534 1.697-8.384 3.736m442.148 12.14c-1.774 3.261-5.164 6.882-10.069 10.755-4.067 3.212-7.236 6.002-7.043 6.2.193.198 3.702-2.377 7.798-5.724 6.476-5.292 13.699-14.437 12.416-15.72-.235-.234-1.631 1.786-3.102 4.489M65.162 204.543c-.639 1.403-1.162 6.782-1.162 11.952 0 8.967.177 9.739 3.836 16.697 5.391 10.256 7.493 11.337 21.789 11.208 10.108-.091 15.296-.819 37.875-5.314l5-.995-6 .506c-3.3.279-10.494 1.43-15.986 2.558-5.793 1.189-14.401 2.112-20.5 2.198-12.985.182-15.809-1.147-20.989-9.873-3.236-5.45-3.553-6.697-3.872-15.212-.192-5.155.143-10.678.755-12.434 1.355-3.887.842-4.776-.746-1.291M400 205.892c3.044.546 3.476.979 3.318 3.324-.1 1.483-.929 4.27-1.842 6.193-2.301 4.849-35.368 38.867-76.967 79.181C271.773 345.696 205.29 412.326 187.402 432 165.85 455.704 165 456.74 165 459.339c0 2.753 5.833 8.661 8.552 8.661 4.298 0 14.77-7.579 37.996-27.5 4.489-3.85 12.14-10.375 17.002-14.5 4.862-4.125 10.89-9.345 13.395-11.6 2.505-2.255 7.881-6.631 11.945-9.725 4.065-3.094 9.785-7.692 12.712-10.219 2.926-2.526 7.026-5.732 9.109-7.124 2.084-1.392 5.139-3.771 6.789-5.286 1.65-1.516 5.025-4.119 7.5-5.785 4.687-3.154 8.619-6.975 7.909-7.685-.447-.447-4.339 2.673-14.641 11.736-3.633 3.196-7.893 6.477-9.467 7.291-3.262 1.687-25.775 19.47-33.333 26.33-2.767 2.512-8.807 7.717-13.421 11.567a1421.14 1421.14 0 0 0-17.04 14.5c-16.502 14.308-26.065 21.785-31.507 24.634l-5.469 2.864-3.699-3.699c-3.232-3.233-3.562-3.989-2.618-5.999 3.762-8.003 79.185-85.056 159.792-163.244C384.421 238.379 406 215.145 406 208.964c0-2.328-2.929-4.008-6.684-3.832-2.539.118-2.471.193.684.76m-121 2.676c-.825.184-11.625 2.194-24 4.466-12.375 2.272-22.95 4.594-23.5 5.161-.68.701-.361.839 1 .434 1.1-.328 12.8-2.63 26-5.116 13.2-2.485 24.675-4.69 25.5-4.9 1.847-.469-2.914-.512-5-.045m222.73 6.714c-3.173 2.32-11.498 8.496-18.5 13.724-7.001 5.228-14.007 10.326-15.567 11.33-1.56 1.003-2.615 2.046-2.343 2.317.506.506 5.876-3.087 16.908-11.313 3.449-2.573 8.192-6.064 10.539-7.759 4.668-3.37 15.484-11.524 16.15-12.174.229-.224.004-.393-.5-.375-.504.018-3.513 1.93-6.687 4.25m63.382 8.968c-9.314 16.694-25.482 31.665-56.712 52.513-6.042 4.033-10.905 8.066-10.37 8.599.423.421 3.986-2.058 16.47-11.454 2.2-1.656 7.15-5.071 11-7.589 15.608-10.209 27.983-22.409 39.688-39.124 4.894-6.99 5.458-8.195 3.832-8.195-.539 0-2.298 2.363-3.908 5.25M344 225.857c-3.575 1.457-8.951 3.885-11.946 5.396-2.996 1.511-5.921 2.755-6.5 2.765-.58.01-3.034 1.36-5.454 3-5.827 3.948-4.905 3.762 4.534-.916 10.214-5.063 15.665-7.46 22.116-9.727 2.887-1.014 5.25-2.189 5.25-2.61 0-1.072-.66-.899-8 2.092m-34.139 16.11c-3.107 2.588-1.42 2.618 1.866.033 1.399-1.1 2.082-2 1.519-2-.564 0-2.087.885-3.385 1.967m151 3c-1.299 1.081-1.868 1.981-1.266 2 .602.018 1.91-.867 2.905-1.967 2.316-2.559 1.415-2.577-1.639-.033M285.5 251.994c-11.824 5.665-25.091 11.81-30.28 14.025-2.905 1.239-5.123 2.411-4.93 2.604.397.397 10.812-3.967 27.71-11.61 6.325-2.86 12.288-5.436 13.25-5.724 1.692-.505 2.52-2.351 1-2.229-.413.033-3.45 1.354-6.75 2.934m159.489 4.865c-7.195 5.813-15.602 13.861-10.989 10.52 4.658-3.373 19.551-15.77 19.833-16.508.585-1.529-.187-1.006-8.844 5.988m-24.446 18.207c-2.705 2.236-5.819 4.546-6.918 5.135-2.093 1.12-3.591 2.24-6.537 4.89-2.463 2.214-31.084 23.048-42.463 30.909-9.468 6.541-23.958 19-22.097 19 .55 0 3.92-2.636 7.49-5.857 3.569-3.222 10.538-8.612 15.486-11.98 4.948-3.367 11.471-8.055 14.496-10.418 3.025-2.363 12.25-9.221 20.5-15.24s15.225-11.206 15.5-11.526c.275-.32 2.637-2.098 5.25-3.95 2.613-1.852 4.75-3.742 4.75-4.199 0-1.241-.14-1.157-5.457 3.236M234 275c-1.925 1.054-3.05 1.916-2.5 1.916.55 0 2.575-.862 4.5-1.916 1.925-1.054 3.05-1.916 2.5-1.916-.55 0-2.575.862-4.5 1.916m-13.75 5.745c-1.787.89-3.25 1.995-3.25 2.457 0 .461 1.8-.08 4-1.202 2.2-1.122 4-2.257 4-2.52 0-.792-1.324-.44-4.75 1.265m-7.25 3.188c-.825.448-4.65 2.173-8.5 3.832-15.829 6.822-17.477 7.591-17.094 7.974.471.472 8.543-2.695 17.363-6.813 3.448-1.609 6.88-2.926 7.627-2.926.748 0 1.919-.675 2.604-1.5 1.342-1.617.416-1.88-2-.567m254.486 23.66c-12.092 9.127-24.893 18.689-28.445 21.25-3.553 2.562-8.278 6.255-10.5 8.208-2.223 1.953-7.416 5.996-11.541 8.985-4.125 2.99-7.987 5.892-8.583 6.45-.596.558-6.344 4.839-12.774 9.514-6.43 4.675-16.293 12.255-21.917 16.845-5.624 4.59-10.901 8.601-11.726 8.913-.825.312-3.585 2.407-6.133 4.655s-7.16 5.794-10.25 7.879c-3.089 2.086-5.617 4.238-5.617 4.783 0 .544 2.403-.825 5.341-3.043 2.937-2.217 5.709-4.032 6.159-4.032.45 0 3.109-2.049 5.909-4.554 5.666-5.069 26.414-21.446 27.169-21.446.265 0 3.391-2.468 6.947-5.484s8.378-6.692 10.717-8.169c4.275-2.698 20.23-14.651 33.258-24.914 7.756-6.11 9.114-7.141 32-24.303 15.906-11.928 23.468-18.012 22.486-18.089-.282-.023-10.407 7.426-22.5 16.552M176 300c-1.925 1.054-3.05 1.916-2.5 1.916.55 0 2.575-.862 4.5-1.916 1.925-1.054 3.05-1.916 2.5-1.916-.55 0-2.575.862-4.5 1.916m-12.75 5.22c-1.238.597-2.25 1.478-2.25 1.958 0 .481 1.35.175 3-.678 4.522-2.339 3.844-3.495-.75-1.28M144 314.039c-3.025 1.605-6.187 2.927-7.026 2.939-.839.012-6.892 2.839-13.45 6.283-9.056 4.754-12.386 7.051-13.844 9.547-2.697 4.618-1.527 4.986 1.403.441 1.936-3.003 4.705-4.887 13.917-9.469 6.325-3.146 12.091-5.734 12.813-5.75 1.979-.045 12.187-5.232 12.187-6.192 0-1.056.454-1.222-6 2.201m177.5 35.465c-16.174 12.733-20.703 16.626-20.072 17.257.292.292 2.497-1.222 4.9-3.365 2.402-2.143 9.612-7.905 16.02-12.804 6.409-4.9 11.652-9.287 11.652-9.75 0-.463-.113-.829-.25-.813-.137.015-5.65 4.279-12.25 9.475m-206.384 34.687c-.064 1.48.334 2.969.884 3.309.55.34 1 1.761 1 3.158s.657 3.958 1.46 5.691c.802 1.733 1.624 5.176 1.825 7.651l.366 4.5.174-5.136c.1-2.943-.463-6.358-1.319-8-.821-1.575-1.496-4.011-1.5-5.414-.003-1.403-.412-2.978-.909-3.5-.497-.522-1.119-1.85-1.384-2.95-.371-1.542-.508-1.383-.597.691m221.777 22.46c-.766.935-4.807 4.238-8.979 7.339-4.172 3.101-11.597 8.86-16.5 12.797-25.317 20.334-31.616 25.274-39.414 30.916-4.675 3.382-9.85 7.304-11.5 8.715-1.65 1.411-7.95 6.432-14 11.158-6.05 4.725-15.275 12.097-20.5 16.381-14.848 12.175-18.059 14.448-25.524 18.067-6.713 3.255-7.428 3.384-18.976 3.429-11.81.046-12.1-.007-18.325-3.382-7.783-4.22-10.61-7.574-16.788-19.915-5.646-11.279-5.259-10.617-5.857-10.019-.259.259 1.631 4.721 4.2 9.917 5.153 10.42 11.888 18.11 19.345 22.087 4.003 2.134 5.664 2.357 17.425 2.343 12.966-.017 13.019-.026 20.11-3.653 7.2-3.681 14.469-8.843 26.519-18.831 7.043-5.838 22.65-18.081 42.371-33.237A2182.748 2182.748 0 0 0 313 427.23c5.225-4.233 12.936-10.252 17.136-13.375 4.2-3.123 7.958-6.198 8.35-6.833 1.178-1.906-.094-2.201-1.593-.371", fill: "#cbdce6", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M477.5 113.673c-4.4.767-12.725 2.038-18.5 2.825-5.775.786-15 2.32-20.5 3.409s-14.95 2.679-21 3.533a5480.74 5480.74 0 0 0-18.5 2.646c-4.125.6-10.251 1.437-13.614 1.86-3.362.422-6.731 1.149-7.485 1.615-.755.467-2.841.722-4.637.567-1.795-.155-3.264.103-3.264.572s-1.8.681-4 .471c-2.609-.248-4 .027-4 .791 0 .718-.776.926-2 .538-1.1-.349-2-.197-2 .337 0 .556-1.696.745-3.952.443-2.174-.292-4.762-.178-5.75.252-.989.431-2.327.701-2.973.599-.646-.101-1.46.278-1.809.842-.349.565-2.67 1.027-5.158 1.027-2.489 0-7.975.869-12.191 1.93-4.217 1.062-10.123 2.192-13.124 2.512-6.912.737-27.965 4.046-45.543 7.16-4.4.779-11.375 1.826-15.5 2.326s-10.65 1.594-14.5 2.429c-3.85.836-13.975 2.472-22.5 3.635-8.525 1.163-16.175 2.387-17 2.719-.825.333-2.096.506-2.824.386-.728-.12-2.001.343-2.828 1.029-.868.721-3.585 1.138-6.426.987-2.934-.156-4.922.162-4.922.788 0 .632-1.192.811-3 .449-1.763-.353-3-.18-3 .419 0 .561-1.012 1.048-2.25 1.083-3.754.107-11.221 1.3-25.75 4.113-3.025.586-8.65 1.475-12.5 1.977-3.85.501-11.725 1.868-17.5 3.036-23.362 4.728-33.038 8.985-42.581 18.736-7.792 7.962-9.797 13.773-9.275 26.884.323 8.121.68 9.49 3.881 14.881 5.137 8.655 8.044 10.05 20.628 9.899 5.723-.068 15.102-1.066 21.5-2.287A1132.846 1132.846 0 0 1 134 237.027c6.325-1.044 13.975-2.398 17-3.008 3.025-.61 11.575-2.262 19-3.671 7.425-1.409 13.95-2.834 14.499-3.168.55-.333 2.238-.476 3.75-.318 1.513.159 2.751-.153 2.751-.693 0-.54.9-.746 2-.459 1.1.288 2 .099 2-.42s1.35-.745 3-.503c1.888.277 3 .002 3-.741 0-.726.771-.936 2-.546 1.127.358 2 .18 2-.408 0-.615 1.18-.806 2.879-.466 1.585.317 3.172.101 3.532-.482.359-.581 1.314-.803 2.121-.493.807.309 2.255.221 3.218-.198.963-.418 2.538-.663 3.5-.544.963.119 1.75-.31 1.75-.953 0-.67.696-.903 1.627-.546.894.344 2.225.128 2.956-.479.731-.607 1.819-.801 2.417-.431.598.37 1.63.226 2.294-.32.663-.546 11.331-2.852 23.706-5.125s29.25-5.455 37.5-7.07c16.046-3.143 46.405-8.559 58.169-10.377 3.943-.609 7.474-1.414 7.848-1.789.373-.375 1.31-.439 2.081-.143.771.296 1.402.118 1.402-.396 0-.513 1.35-.735 3-.493 1.66.243 3-.016 3-.58 0-.561.9-.784 2-.497 1.1.288 2 .099 2-.42s1.35-.745 3-.503c1.827.268 3-.003 3-.693 0-.708.936-.897 2.5-.505 1.64.412 2.5.209 2.5-.588 0-.669.674-.956 1.5-.639.825.316 1.5.139 1.5-.393 0-.533 1.157-.969 2.57-.969 1.414 0 6.252-.658 10.75-1.462 19.335-3.455 32.203-5.629 47.68-8.054 9.075-1.422 19.742-3.263 23.705-4.093C492.612 168.807 519 166.408 519 169c0 .55.745 1 1.656 1 2.571 0 8.344 4.878 8.344 7.051 0 1.072.337 1.952.75 1.956.413.004.872 2.495 1.021 5.536.219 4.478-.229 6.383-2.36 10.019-2.354 4.017-15.995 16.424-18.082 16.447-.456.005-3.635 2.142-7.064 4.75-3.43 2.608-8.155 6.128-10.5 7.822a1070.254 1070.254 0 0 0-10.537 7.759c-10.072 7.51-16.145 11.66-17.063 11.66-.47 0-1.67.9-2.665 2-.995 1.1-2.307 2-2.914 2-.608 0-1.678.917-2.378 2.039-.7 1.121-1.67 1.793-2.155 1.494-.485-.3-1.033-.143-1.218.348-.562 1.498-20.247 17.103-21.585 17.111-.687.005-1.25.449-1.25.989 0 .539-1.125 1.263-2.5 1.608-1.375.345-2.5.953-2.5 1.35 0 .397-2.137 2.238-4.75 4.09-2.613 1.852-4.975 3.63-5.25 3.95-.275.32-7.25 5.507-15.5 11.526s-17.475 12.877-20.5 15.24c-3.025 2.363-9.548 7.051-14.496 10.418-4.948 3.368-11.917 8.758-15.486 11.98-3.57 3.221-7.011 5.857-7.647 5.857-.636 0-1.441.739-1.788 1.643-.346.904-.917 1.357-1.267 1.006-.35-.35-1.27.268-2.045 1.374-.774 1.106-1.827 1.751-2.339 1.435-.513-.317-.932-.171-.932.325 0 .495-5.243 4.909-11.652 9.809-6.408 4.899-13.546 10.596-15.862 12.658-2.315 2.062-4.722 3.75-5.348 3.75-.626 0-1.138.525-1.138 1.167 0 .641-.285.882-.633.534-.348-.348-1.507.478-2.576 1.837-1.068 1.359-4.046 3.884-6.617 5.611-2.571 1.728-6.024 4.381-7.674 5.897-1.65 1.515-4.705 3.894-6.789 5.286-2.083 1.392-6.183 4.598-9.109 7.124-2.927 2.527-8.647 7.125-12.712 10.219-4.064 3.094-9.44 7.47-11.945 9.725-2.505 2.255-8.533 7.475-13.395 11.6a5073.016 5073.016 0 0 0-17.002 14.5c-23.388 20.06-33.695 27.5-38.097 27.5-2.685 0-8.451-5.979-8.451-8.763 0-2.491.935-3.627 22.402-27.237 17.888-19.674 84.371-86.304 137.107-137.41 41.599-40.314 74.666-74.332 76.967-79.181.913-1.923 1.742-4.715 1.842-6.203.154-2.296-.258-2.756-2.724-3.037-1.598-.183-4.523.33-6.5 1.139-1.977.808-7.419 2.701-12.094 4.205s-9.625 3.202-11 3.773c-1.375.57-2.837.964-3.25.875-.413-.088-.75.316-.75.898 0 .582-.45.781-1 .441s-1-.115-1 .5-.45.84-1 .5c-.55-.34-1-.115-1 .5s-.48.821-1.067.459c-.586-.363-1.697.173-2.468 1.191-.771 1.017-1.416 1.48-1.433 1.029-.018-.452-.765-.089-1.661.807s-2.246 1.392-3 1.103c-.754-.289-1.371-.196-1.371.208 0 .403-2.363 1.564-5.25 2.578-6.451 2.267-11.902 4.664-22.116 9.727-4.326 2.144-8.428 3.898-9.115 3.898-.687 0-2.322.833-3.634 1.851-1.312 1.019-3.51 2.116-4.885 2.439-4.705 1.105-10 3.199-10 3.955 0 .415-.9.755-2 .755s-2 .398-2 .883c0 .486-.788 1.119-1.75 1.406-.962.288-6.925 2.864-13.25 5.726C261.024 264.696 245.848 271 244.333 271c-.733 0-1.333.34-1.333.755 0 .416-1.463 1.271-3.25 1.901-6.089 2.147-10.248 3.859-11.75 4.837-.825.537-1.725 1.004-2 1.037-.275.033-2.357 1.033-4.626 2.222-2.27 1.189-4.343 1.946-4.608 1.681-.264-.265-1.05.205-1.746 1.043S213.144 286 212.396 286c-.747 0-4.179 1.334-7.627 2.964-3.448 1.63-10.372 4.532-15.387 6.45-9.757 3.731-18.572 7.578-24.632 10.751-2.063 1.08-3.75 1.639-3.75 1.244s-.824.027-1.831.938c-1.007.912-2.132 1.356-2.5.989-.368-.368-.669-.158-.669.466s-.675.876-1.5.56c-.825-.317-1.5-.092-1.5.5 0 .591-.675.816-1.5.5-.825-.317-1.5-.151-1.5.369 0 1.038-10.086 6.251-12.187 6.299-.722.016-6.486 2.604-12.807 5.75-9.349 4.652-11.993 6.465-14.162 9.709-1.466 2.195-2.474 4.301-2.239 4.681.235.381-.03.974-.589 1.32-1.419.877-1.274 8.852.188 10.314.662.662 1.095 2.823.962 4.802-.133 1.978.314 4.268.994 5.087.68.819 1.137 2.971 1.015 4.782-.149 2.202.291 3.49 1.326 3.887 1.092.419 1.362 1.337.915 3.116-.374 1.492-.206 2.522.413 2.522.576 0 1.041.787 1.033 1.75-.026 3.525 1.242 9.754 2.177 10.689.529.529.961 2.04.961 3.36 0 1.319.635 3.817 1.412 5.55.776 1.733 1.628 6.23 1.892 9.993s.979 7.341 1.588 7.95c.61.61 1.108 2.278 1.108 3.708 0 1.43.389 3.028.865 3.55 2.919 3.204 9.088 25.58 10.673 38.713.383 3.17 1.051 5.983 1.485 6.251.434.268.553 1.39.265 2.492-.288 1.103.034 2.677.716 3.499.683.822.906 1.495.496 1.495-.41 0-.244.604.369 1.342.612.738.828 1.627.48 1.976-.349.348-.081 1.3.595 2.114.675.814.962 1.912.636 2.439-.326.527-.252 1.109.164 1.294.416.184 2.943 4.68 5.616 9.991 6.221 12.359 9.043 15.701 16.815 19.915 6.225 3.375 6.515 3.428 18.325 3.382 11.548-.045 12.263-.174 18.976-3.429 7.465-3.619 10.676-5.892 25.524-18.067 5.225-4.284 14.45-11.656 20.5-16.381 6.05-4.726 12.35-9.747 14-11.158 1.65-1.411 6.825-5.333 11.5-8.715 7.798-5.642 14.097-10.582 39.414-30.916 4.903-3.937 12.328-9.696 16.5-12.797 4.172-3.101 8.199-6.388 8.949-7.303.75-.916 1.715-1.448 2.146-1.182.43.266 1.017-.13 1.305-.88.287-.749 3.597-3.411 7.354-5.914 3.758-2.503 8.154-5.937 9.769-7.631 1.615-1.694 3.415-3.087 4-3.095.585-.008 5.89-3.946 11.789-8.75s15.986-12.56 22.416-17.235c6.431-4.675 12.179-8.956 12.775-9.514.596-.558 4.458-3.46 8.583-6.45 4.125-2.989 9.318-7.032 11.541-8.985 2.222-1.953 6.947-5.646 10.5-8.208 11.361-8.19 50.401-37.654 52.043-39.277.871-.861 2.06-1.566 2.643-1.566.582 0 1.329-.704 1.659-1.563.33-.86 1.053-1.284 1.607-.941.554.342 1.007.238 1.007-.231 0-.924 8.321-7.527 13.567-10.765 23.683-14.622 42.885-32.402 52.232-48.365 1.815-3.099 3.998-6.168 4.851-6.818.852-.651 1.254-1.664.891-2.25-.362-.587-.237-1.067.278-1.067 2.029 0 3.381-9.319 3.893-26.826.377-12.886.202-18.66-.588-19.45-.618-.618-1.124-2.355-1.124-3.859s-.525-4.002-1.166-5.55c-.642-1.548-1.204-3.049-1.25-3.335-.046-.286-1.771-3.062-3.834-6.169-2.062-3.108-3.75-5.941-3.75-6.297 0-1.638-5.653-7.741-12.899-13.928-11.727-10.012-20.551-15.42-28.601-17.528-5.584-1.462-33.368-1.064-43 .615", fill: "#fbfbfb", fillRule: "evenodd" }));
nn(Jc);
const Kc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYzNyA2MzciPjxwYXRoIGQ9Ik00NzcuNSAxMTIuNjljLTQuNC43NzYtMTAuMDI1IDEuODA2LTEyLjUgMi4yODdsLTQuNS44NzYgNC41LS4zNDNjMi40NzUtLjE4OSA4LjU1LTEuMDQgMTMuNS0xLjg5MSAxMC43MS0xLjg0MiAzNS42LTIuMTE1IDQyLjMwNy0uNDY0IDIuNTgxLjYzNiA1LjU4MSAxLjc2MSA2LjY2NiAyLjUgMS4wODQuNzQgMi40MjIgMS4zNDUgMi45NzIgMS4zNDUgMi4zMzcgMC00LjAyNC0zLjMzNS04Ljc3Mi00LjU5OS02Ljc0MS0xLjc5NS0zMy4zNTItMS42MjEtNDQuMTczLjI4OW01NiA1Ljg3OGMxLjEuODEzIDQuNzQ5IDMuNDgzIDguMTA5IDUuOTM0IDcuMTUgNS4yMTUgMjAuMzkxIDE3Ljg5NyAyMC4zOTEgMTkuNTMgMCAxLjU0OSA3LjEyOCAxMi4xNzMgNy43NSAxMS41NTEuMjc1LS4yNzUtMS4xMzEtMi45NTctMy4xMjUtNS45NjEtMS45OTQtMy4wMDMtMy42MjUtNS43NTItMy42MjUtNi4xMDggMC0yLjcyNy0xNC43NzctMTYuMzUzLTI1LjMtMjMuMzMxLTQuODAzLTMuMTg1LTcuOTcxLTQuNDAzLTQuMi0xLjYxNU0zMzYgMTM0Ljk3M2MtMy41NzUuMzc4LTcuNiAxLjA0OC04Ljk0NSAxLjQ4Ny0xLjM0NS40MzktMTIuODIgMi40OTktMjUuNSA0LjU3OHMtMjEuODUzIDMuODIxLTIwLjM4MyAzLjg3MWMxLjQ2OS4wNSA3Ljk5NC0uODAyIDE0LjUtMS44OTMgNi41MDUtMS4wOTIgMTQuMzAzLTIuMjQ4IDE3LjMyOC0yLjU3IDMuMDI1LS4zMjIgOC45NS0xLjQ1NCAxMy4xNjctMi41MTYgNC4yMTYtMS4wNjEgOS43MDItMS45MyAxMi4xOTEtMS45MyAyLjQ4OCAwIDQuODAyLS40NSA1LjE0Mi0xIC4zNC0uNTUuMjU0LS45MzYtLjE5MS0uODU4LS40NDUuMDc4LTMuNzM0LjQ1Mi03LjMwOS44MzFtLTE3OS41IDMwLjA5MmMtMi43NS40NDgtNy40NzUgMS4yOTktMTAuNSAxLjg5LTMuMDI1LjU5MS04LjY1IDEuNDk4LTEyLjUgMi4wMTUtMTMuMjgyIDEuNzg0LTMzLjE1MiA2LjI0Ny0zNC40ODQgNy43NDUtLjI4NC4zMTkuNjA5LjI3MiAxLjk4NC0uMTA1IDYuMDMxLTEuNjUyIDI2Ljk4My01LjgyOCAzMy40MzUtNi42NjQgMy44ODYtLjUwNCA5LjU0LTEuMzk1IDEyLjU2NS0xLjk4MWEzMDQuMTExIDMwNC4xMTEgMCAwIDEgMTAuNzQ5LTEuODQ3YzIuODg3LS40MzEgNS41NS0xLjA4MyA1LjkxNy0xLjQ1MS43NzctLjc3Ni0uMzQ3LS43MTQtNy4xNjYuMzk4bTM2OC4wODMgOC4zMzVjMi4xNTUgMS44NyA0LjE0MiAzLjE3NiA0LjQxNyAyLjkwMy42MTMtLjYxMS02LjA1LTYuMzAzLTcuMzc5LTYuMzAzLS41MjUgMCAuODA4IDEuNTMgMi45NjIgMy40TTQzOSAxNzguNjA0Yy00LjEyNS43NTEtMTIuOSAyLjI4Ny0xOS41IDMuNDEzLTYuNiAxLjEyNS0xNS42ODEgMi43MDctMjAuMTggMy41MTUtNC40OTguODA3LTkuMzM2IDEuNDY4LTEwLjc1IDEuNDY4LTEuNDEzIDAtMi41Ny40NTktMi41NyAxLjAxOSAwIC41NjEgMS4wMTIuODA3IDIuMjUuNTQ5IDEuMjM4LS4yNTkgNi41MjUtMS4xOSAxMS43NS0yLjA2OXMxNC40NS0yLjQ5IDIwLjUtMy41NzhjNi4wNS0xLjA4OSAxNS43MjUtMi44MjEgMjEuNS0zLjg1czkuMTUtMS44NjIgNy41LTEuODUyYy0xLjY1LjAxMS02LjM3NS42MzQtMTAuNSAxLjM4NW0tMzUzLjUgMy4xNjFjLTYuNDIxIDMuNC0xNy41IDEzLjI2LTE3LjUgMTUuNTc0IDAgLjUxNCAyLjg0NC0xLjk4IDYuMzIxLTUuNTQzIDQuMjk4LTQuNDA1IDguNjYyLTcuNjUgMTMuNjM0LTEwLjEzNyA0LjAyMy0yLjAxMyA2LjY5MS0zLjY0NiA1LjkyOS0zLjYzLS43NjEuMDE2LTQuNTM0IDEuNjk3LTguMzg0IDMuNzM2bTQ0Mi4xNDggMTIuMTRjLTEuNzc0IDMuMjYxLTUuMTY0IDYuODgyLTEwLjA2OSAxMC43NTUtNC4wNjcgMy4yMTItNy4yMzYgNi4wMDItNy4wNDMgNi4yLjE5My4xOTggMy43MDItMi4zNzcgNy43OTgtNS43MjQgNi40NzYtNS4yOTIgMTMuNjk5LTE0LjQzNyAxMi40MTYtMTUuNzItLjIzNS0uMjM0LTEuNjMxIDEuNzg2LTMuMTAyIDQuNDg5TTY1LjE2MiAyMDQuNTQzYy0uNjM5IDEuNDAzLTEuMTYyIDYuNzgyLTEuMTYyIDExLjk1MiAwIDguOTY3LjE3NyA5LjczOSAzLjgzNiAxNi42OTcgNS4zOTEgMTAuMjU2IDcuNDkzIDExLjMzNyAyMS43ODkgMTEuMjA4IDEwLjEwOC0uMDkxIDE1LjI5Ni0uODE5IDM3Ljg3NS01LjMxNGw1LS45OTUtNiAuNTA2Yy0zLjMuMjc5LTEwLjQ5NCAxLjQzLTE1Ljk4NiAyLjU1OC01Ljc5MyAxLjE4OS0xNC40MDEgMi4xMTItMjAuNSAyLjE5OC0xMi45ODUuMTgyLTE1LjgwOS0xLjE0Ny0yMC45ODktOS44NzMtMy4yMzYtNS40NS0zLjU1My02LjY5Ny0zLjg3Mi0xNS4yMTItLjE5Mi01LjE1NS4xNDMtMTAuNjc4Ljc1NS0xMi40MzQgMS4zNTUtMy44ODcuODQyLTQuNzc2LS43NDYtMS4yOTFNNDAwIDIwNS44OTJjMy4wNDQuNTQ2IDMuNDc2Ljk3OSAzLjMxOCAzLjMyNC0uMSAxLjQ4My0uOTI5IDQuMjctMS44NDIgNi4xOTMtMi4zMDEgNC44NDktMzUuMzY4IDM4Ljg2Ny03Ni45NjcgNzkuMTgxQzI3MS43NzMgMzQ1LjY5NiAyMDUuMjkgNDEyLjMyNiAxODcuNDAyIDQzMiAxNjUuODUgNDU1LjcwNCAxNjUgNDU2Ljc0IDE2NSA0NTkuMzM5YzAgMi43NTMgNS44MzMgOC42NjEgOC41NTIgOC42NjEgNC4yOTggMCAxNC43Ny03LjU3OSAzNy45OTYtMjcuNSA0LjQ4OS0zLjg1IDEyLjE0LTEwLjM3NSAxNy4wMDItMTQuNSA0Ljg2Mi00LjEyNSAxMC44OS05LjM0NSAxMy4zOTUtMTEuNiAyLjUwNS0yLjI1NSA3Ljg4MS02LjYzMSAxMS45NDUtOS43MjUgNC4wNjUtMy4wOTQgOS43ODUtNy42OTIgMTIuNzEyLTEwLjIxOSAyLjkyNi0yLjUyNiA3LjAyNi01LjczMiA5LjEwOS03LjEyNCAyLjA4NC0xLjM5MiA1LjEzOS0zLjc3MSA2Ljc4OS01LjI4NiAxLjY1LTEuNTE2IDUuMDI1LTQuMTE5IDcuNS01Ljc4NSA0LjY4Ny0zLjE1NCA4LjYxOS02Ljk3NSA3LjkwOS03LjY4NS0uNDQ3LS40NDctNC4zMzkgMi42NzMtMTQuNjQxIDExLjczNi0zLjYzMyAzLjE5Ni03Ljg5MyA2LjQ3Ny05LjQ2NyA3LjI5MS0zLjI2MiAxLjY4Ny0yNS43NzUgMTkuNDctMzMuMzMzIDI2LjMzLTIuNzY3IDIuNTEyLTguODA3IDcuNzE3LTEzLjQyMSAxMS41NjdhMTQyMS4xNCAxNDIxLjE0IDAgMCAwLTE3LjA0IDE0LjVjLTE2LjUwMiAxNC4zMDgtMjYuMDY1IDIxLjc4NS0zMS41MDcgMjQuNjM0bC01LjQ2OSAyLjg2NC0zLjY5OS0zLjY5OWMtMy4yMzItMy4yMzMtMy41NjItMy45ODktMi42MTgtNS45OTkgMy43NjItOC4wMDMgNzkuMTg1LTg1LjA1NiAxNTkuNzkyLTE2My4yNDRDMzg0LjQyMSAyMzguMzc5IDQwNiAyMTUuMTQ1IDQwNiAyMDguOTY0YzAtMi4zMjgtMi45MjktNC4wMDgtNi42ODQtMy44MzItMi41MzkuMTE4LTIuNDcxLjE5My42ODQuNzZtLTEyMSAyLjY3NmMtLjgyNS4xODQtMTEuNjI1IDIuMTk0LTI0IDQuNDY2LTEyLjM3NSAyLjI3Mi0yMi45NSA0LjU5NC0yMy41IDUuMTYxLS42OC43MDEtLjM2MS44MzkgMSAuNDM0IDEuMS0uMzI4IDEyLjgtMi42MyAyNi01LjExNiAxMy4yLTIuNDg1IDI0LjY3NS00LjY5IDI1LjUtNC45IDEuODQ3LS40NjktMi45MTQtLjUxMi01LS4wNDVtMjIyLjczIDYuNzE0Yy0zLjE3MyAyLjMyLTExLjQ5OCA4LjQ5Ni0xOC41IDEzLjcyNC03LjAwMSA1LjIyOC0xNC4wMDcgMTAuMzI2LTE1LjU2NyAxMS4zMy0xLjU2IDEuMDAzLTIuNjE1IDIuMDQ2LTIuMzQzIDIuMzE3LjUwNi41MDYgNS44NzYtMy4wODcgMTYuOTA4LTExLjMxMyAzLjQ0OS0yLjU3MyA4LjE5Mi02LjA2NCAxMC41MzktNy43NTkgNC42NjgtMy4zNyAxNS40ODQtMTEuNTI0IDE2LjE1LTEyLjE3NC4yMjktLjIyNC4wMDQtLjM5My0uNS0uMzc1LS41MDQuMDE4LTMuNTEzIDEuOTMtNi42ODcgNC4yNW02My4zODIgOC45NjhjLTkuMzE0IDE2LjY5NC0yNS40ODIgMzEuNjY1LTU2LjcxMiA1Mi41MTMtNi4wNDIgNC4wMzMtMTAuOTA1IDguMDY2LTEwLjM3IDguNTk5LjQyMy40MjEgMy45ODYtMi4wNTggMTYuNDctMTEuNDU0IDIuMi0xLjY1NiA3LjE1LTUuMDcxIDExLTcuNTg5IDE1LjYwOC0xMC4yMDkgMjcuOTgzLTIyLjQwOSAzOS42ODgtMzkuMTI0IDQuODk0LTYuOTkgNS40NTgtOC4xOTUgMy44MzItOC4xOTUtLjUzOSAwLTIuMjk4IDIuMzYzLTMuOTA4IDUuMjVNMzQ0IDIyNS44NTdjLTMuNTc1IDEuNDU3LTguOTUxIDMuODg1LTExLjk0NiA1LjM5Ni0yLjk5NiAxLjUxMS01LjkyMSAyLjc1NS02LjUgMi43NjUtLjU4LjAxLTMuMDM0IDEuMzYtNS40NTQgMy01LjgyNyAzLjk0OC00LjkwNSAzLjc2MiA0LjUzNC0uOTE2IDEwLjIxNC01LjA2MyAxNS42NjUtNy40NiAyMi4xMTYtOS43MjcgMi44ODctMS4wMTQgNS4yNS0yLjE4OSA1LjI1LTIuNjEgMC0xLjA3Mi0uNjYtLjg5OS04IDIuMDkybS0zNC4xMzkgMTYuMTFjLTMuMTA3IDIuNTg4LTEuNDIgMi42MTggMS44NjYuMDMzIDEuMzk5LTEuMSAyLjA4Mi0yIDEuNTE5LTItLjU2NCAwLTIuMDg3Ljg4NS0zLjM4NSAxLjk2N20xNTEgM2MtMS4yOTkgMS4wODEtMS44NjggMS45ODEtMS4yNjYgMiAuNjAyLjAxOCAxLjkxLS44NjcgMi45MDUtMS45NjcgMi4zMTYtMi41NTkgMS40MTUtMi41NzctMS42MzktLjAzM00yODUuNSAyNTEuOTk0Yy0xMS44MjQgNS42NjUtMjUuMDkxIDExLjgxLTMwLjI4IDE0LjAyNS0yLjkwNSAxLjIzOS01LjEyMyAyLjQxMS00LjkzIDIuNjA0LjM5Ny4zOTcgMTAuODEyLTMuOTY3IDI3LjcxLTExLjYxIDYuMzI1LTIuODYgMTIuMjg4LTUuNDM2IDEzLjI1LTUuNzI0IDEuNjkyLS41MDUgMi41Mi0yLjM1MSAxLTIuMjI5LS40MTMuMDMzLTMuNDUgMS4zNTQtNi43NSAyLjkzNG0xNTkuNDg5IDQuODY1Yy03LjE5NSA1LjgxMy0xNS42MDIgMTMuODYxLTEwLjk4OSAxMC41MiA0LjY1OC0zLjM3MyAxOS41NTEtMTUuNzcgMTkuODMzLTE2LjUwOC41ODUtMS41MjktLjE4Ny0xLjAwNi04Ljg0NCA1Ljk4OG0tMjQuNDQ2IDE4LjIwN2MtMi43MDUgMi4yMzYtNS44MTkgNC41NDYtNi45MTggNS4xMzUtMi4wOTMgMS4xMi0zLjU5MSAyLjI0LTYuNTM3IDQuODktMi40NjMgMi4yMTQtMzEuMDg0IDIzLjA0OC00Mi40NjMgMzAuOTA5LTkuNDY4IDYuNTQxLTIzLjk1OCAxOS0yMi4wOTcgMTkgLjU1IDAgMy45Mi0yLjYzNiA3LjQ5LTUuODU3IDMuNTY5LTMuMjIyIDEwLjUzOC04LjYxMiAxNS40ODYtMTEuOTggNC45NDgtMy4zNjcgMTEuNDcxLTguMDU1IDE0LjQ5Ni0xMC40MTggMy4wMjUtMi4zNjMgMTIuMjUtOS4yMjEgMjAuNS0xNS4yNHMxNS4yMjUtMTEuMjA2IDE1LjUtMTEuNTI2Yy4yNzUtLjMyIDIuNjM3LTIuMDk4IDUuMjUtMy45NSAyLjYxMy0xLjg1MiA0Ljc1LTMuNzQyIDQuNzUtNC4xOTkgMC0xLjI0MS0uMTQtMS4xNTctNS40NTcgMy4yMzZNMjM0IDI3NWMtMS45MjUgMS4wNTQtMy4wNSAxLjkxNi0yLjUgMS45MTYuNTUgMCAyLjU3NS0uODYyIDQuNS0xLjkxNiAxLjkyNS0xLjA1NCAzLjA1LTEuOTE2IDIuNS0xLjkxNi0uNTUgMC0yLjU3NS44NjItNC41IDEuOTE2bS0xMy43NSA1Ljc0NWMtMS43ODcuODktMy4yNSAxLjk5NS0zLjI1IDIuNDU3IDAgLjQ2MSAxLjgtLjA4IDQtMS4yMDIgMi4yLTEuMTIyIDQtMi4yNTcgNC0yLjUyIDAtLjc5Mi0xLjMyNC0uNDQtNC43NSAxLjI2NW0tNy4yNSAzLjE4OGMtLjgyNS40NDgtNC42NSAyLjE3My04LjUgMy44MzItMTUuODI5IDYuODIyLTE3LjQ3NyA3LjU5MS0xNy4wOTQgNy45NzQuNDcxLjQ3MiA4LjU0My0yLjY5NSAxNy4zNjMtNi44MTMgMy40NDgtMS42MDkgNi44OC0yLjkyNiA3LjYyNy0yLjkyNi43NDggMCAxLjkxOS0uNjc1IDIuNjA0LTEuNSAxLjM0Mi0xLjYxNy40MTYtMS44OC0yLS41NjdtMjU0LjQ4NiAyMy42NmMtMTIuMDkyIDkuMTI3LTI0Ljg5MyAxOC42ODktMjguNDQ1IDIxLjI1LTMuNTUzIDIuNTYyLTguMjc4IDYuMjU1LTEwLjUgOC4yMDgtMi4yMjMgMS45NTMtNy40MTYgNS45OTYtMTEuNTQxIDguOTg1LTQuMTI1IDIuOTktNy45ODcgNS44OTItOC41ODMgNi40NS0uNTk2LjU1OC02LjM0NCA0LjgzOS0xMi43NzQgOS41MTQtNi40MyA0LjY3NS0xNi4yOTMgMTIuMjU1LTIxLjkxNyAxNi44NDUtNS42MjQgNC41OS0xMC45MDEgOC42MDEtMTEuNzI2IDguOTEzLS44MjUuMzEyLTMuNTg1IDIuNDA3LTYuMTMzIDQuNjU1cy03LjE2IDUuNzk0LTEwLjI1IDcuODc5Yy0zLjA4OSAyLjA4Ni01LjYxNyA0LjIzOC01LjYxNyA0Ljc4MyAwIC41NDQgMi40MDMtLjgyNSA1LjM0MS0zLjA0MyAyLjkzNy0yLjIxNyA1LjcwOS00LjAzMiA2LjE1OS00LjAzMi40NSAwIDMuMTA5LTIuMDQ5IDUuOTA5LTQuNTU0IDUuNjY2LTUuMDY5IDI2LjQxNC0yMS40NDYgMjcuMTY5LTIxLjQ0Ni4yNjUgMCAzLjM5MS0yLjQ2OCA2Ljk0Ny01LjQ4NHM4LjM3OC02LjY5MiAxMC43MTctOC4xNjljNC4yNzUtMi42OTggMjAuMjMtMTQuNjUxIDMzLjI1OC0yNC45MTQgNy43NTYtNi4xMSA5LjExNC03LjE0MSAzMi0yNC4zMDMgMTUuOTA2LTExLjkyOCAyMy40NjgtMTguMDEyIDIyLjQ4Ni0xOC4wODktLjI4Mi0uMDIzLTEwLjQwNyA3LjQyNi0yMi41IDE2LjU1Mk0xNzYgMzAwYy0xLjkyNSAxLjA1NC0zLjA1IDEuOTE2LTIuNSAxLjkxNi41NSAwIDIuNTc1LS44NjIgNC41LTEuOTE2IDEuOTI1LTEuMDU0IDMuMDUtMS45MTYgMi41LTEuOTE2LS41NSAwLTIuNTc1Ljg2Mi00LjUgMS45MTZtLTEyLjc1IDUuMjJjLTEuMjM4LjU5Ny0yLjI1IDEuNDc4LTIuMjUgMS45NTggMCAuNDgxIDEuMzUuMTc1IDMtLjY3OCA0LjUyMi0yLjMzOSAzLjg0NC0zLjQ5NS0uNzUtMS4yOE0xNDQgMzE0LjAzOWMtMy4wMjUgMS42MDUtNi4xODcgMi45MjctNy4wMjYgMi45MzktLjgzOS4wMTItNi44OTIgMi44MzktMTMuNDUgNi4yODMtOS4wNTYgNC43NTQtMTIuMzg2IDcuMDUxLTEzLjg0NCA5LjU0Ny0yLjY5NyA0LjYxOC0xLjUyNyA0Ljk4NiAxLjQwMy40NDEgMS45MzYtMy4wMDMgNC43MDUtNC44ODcgMTMuOTE3LTkuNDY5IDYuMzI1LTMuMTQ2IDEyLjA5MS01LjczNCAxMi44MTMtNS43NSAxLjk3OS0uMDQ1IDEyLjE4Ny01LjIzMiAxMi4xODctNi4xOTIgMC0xLjA1Ni40NTQtMS4yMjItNiAyLjIwMW0xNzcuNSAzNS40NjVjLTE2LjE3NCAxMi43MzMtMjAuNzAzIDE2LjYyNi0yMC4wNzIgMTcuMjU3LjI5Mi4yOTIgMi40OTctMS4yMjIgNC45LTMuMzY1IDIuNDAyLTIuMTQzIDkuNjEyLTcuOTA1IDE2LjAyLTEyLjgwNCA2LjQwOS00LjkgMTEuNjUyLTkuMjg3IDExLjY1Mi05Ljc1IDAtLjQ2My0uMTEzLS44MjktLjI1LS44MTMtLjEzNy4wMTUtNS42NSA0LjI3OS0xMi4yNSA5LjQ3NW0tMjA2LjM4NCAzNC42ODdjLS4wNjQgMS40OC4zMzQgMi45NjkuODg0IDMuMzA5LjU1LjM0IDEgMS43NjEgMSAzLjE1OHMuNjU3IDMuOTU4IDEuNDYgNS42OTFjLjgwMiAxLjczMyAxLjYyNCA1LjE3NiAxLjgyNSA3LjY1MWwuMzY2IDQuNS4xNzQtNS4xMzZjLjEtMi45NDMtLjQ2My02LjM1OC0xLjMxOS04LS44MjEtMS41NzUtMS40OTYtNC4wMTEtMS41LTUuNDE0LS4wMDMtMS40MDMtLjQxMi0yLjk3OC0uOTA5LTMuNS0uNDk3LS41MjItMS4xMTktMS44NS0xLjM4NC0yLjk1LS4zNzEtMS41NDItLjUwOC0xLjM4My0uNTk3LjY5MW0yMjEuNzc3IDIyLjQ2Yy0uNzY2LjkzNS00LjgwNyA0LjIzOC04Ljk3OSA3LjMzOS00LjE3MiAzLjEwMS0xMS41OTcgOC44Ni0xNi41IDEyLjc5Ny0yNS4zMTcgMjAuMzM0LTMxLjYxNiAyNS4yNzQtMzkuNDE0IDMwLjkxNi00LjY3NSAzLjM4Mi05Ljg1IDcuMzA0LTExLjUgOC43MTUtMS42NSAxLjQxMS03Ljk1IDYuNDMyLTE0IDExLjE1OC02LjA1IDQuNzI1LTE1LjI3NSAxMi4wOTctMjAuNSAxNi4zODEtMTQuODQ4IDEyLjE3NS0xOC4wNTkgMTQuNDQ4LTI1LjUyNCAxOC4wNjctNi43MTMgMy4yNTUtNy40MjggMy4zODQtMTguOTc2IDMuNDI5LTExLjgxLjA0Ni0xMi4xLS4wMDctMTguMzI1LTMuMzgyLTcuNzgzLTQuMjItMTAuNjEtNy41NzQtMTYuNzg4LTE5LjkxNS01LjY0Ni0xMS4yNzktNS4yNTktMTAuNjE3LTUuODU3LTEwLjAxOS0uMjU5LjI1OSAxLjYzMSA0LjcyMSA0LjIgOS45MTcgNS4xNTMgMTAuNDIgMTEuODg4IDE4LjExIDE5LjM0NSAyMi4wODcgNC4wMDMgMi4xMzQgNS42NjQgMi4zNTcgMTcuNDI1IDIuMzQzIDEyLjk2Ni0uMDE3IDEzLjAxOS0uMDI2IDIwLjExLTMuNjUzIDcuMi0zLjY4MSAxNC40NjktOC44NDMgMjYuNTE5LTE4LjgzMSA3LjA0My01LjgzOCAyMi42NS0xOC4wODEgNDIuMzcxLTMzLjIzN0EyMTgyLjc0OCAyMTgyLjc0OCAwIDAgMCAzMTMgNDI3LjIzYzUuMjI1LTQuMjMzIDEyLjkzNi0xMC4yNTIgMTcuMTM2LTEzLjM3NSA0LjItMy4xMjMgNy45NTgtNi4xOTggOC4zNS02LjgzMyAxLjE3OC0xLjkwNi0uMDk0LTIuMjAxLTEuNTkzLS4zNzEiIGZpbGw9IiNjYmRjZTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik00NzcuNSAxMTMuNjczYy00LjQuNzY3LTEyLjcyNSAyLjAzOC0xOC41IDIuODI1LTUuNzc1Ljc4Ni0xNSAyLjMyLTIwLjUgMy40MDlzLTE0Ljk1IDIuNjc5LTIxIDMuNTMzYTU0ODAuNzQgNTQ4MC43NCAwIDAgMC0xOC41IDIuNjQ2Yy00LjEyNS42LTEwLjI1MSAxLjQzNy0xMy42MTQgMS44Ni0zLjM2Mi40MjItNi43MzEgMS4xNDktNy40ODUgMS42MTUtLjc1NS40NjctMi44NDEuNzIyLTQuNjM3LjU2Ny0xLjc5NS0uMTU1LTMuMjY0LjEwMy0zLjI2NC41NzJzLTEuOC42ODEtNCAuNDcxYy0yLjYwOS0uMjQ4LTQgLjAyNy00IC43OTEgMCAuNzE4LS43NzYuOTI2LTIgLjUzOC0xLjEtLjM0OS0yLS4xOTctMiAuMzM3IDAgLjU1Ni0xLjY5Ni43NDUtMy45NTIuNDQzLTIuMTc0LS4yOTItNC43NjItLjE3OC01Ljc1LjI1Mi0uOTg5LjQzMS0yLjMyNy43MDEtMi45NzMuNTk5LS42NDYtLjEwMS0xLjQ2LjI3OC0xLjgwOS44NDItLjM0OS41NjUtMi42NyAxLjAyNy01LjE1OCAxLjAyNy0yLjQ4OSAwLTcuOTc1Ljg2OS0xMi4xOTEgMS45My00LjIxNyAxLjA2Mi0xMC4xMjMgMi4xOTItMTMuMTI0IDIuNTEyLTYuOTEyLjczNy0yNy45NjUgNC4wNDYtNDUuNTQzIDcuMTYtNC40Ljc3OS0xMS4zNzUgMS44MjYtMTUuNSAyLjMyNnMtMTAuNjUgMS41OTQtMTQuNSAyLjQyOWMtMy44NS44MzYtMTMuOTc1IDIuNDcyLTIyLjUgMy42MzUtOC41MjUgMS4xNjMtMTYuMTc1IDIuMzg3LTE3IDIuNzE5LS44MjUuMzMzLTIuMDk2LjUwNi0yLjgyNC4zODYtLjcyOC0uMTItMi4wMDEuMzQzLTIuODI4IDEuMDI5LS44NjguNzIxLTMuNTg1IDEuMTM4LTYuNDI2Ljk4Ny0yLjkzNC0uMTU2LTQuOTIyLjE2Mi00LjkyMi43ODggMCAuNjMyLTEuMTkyLjgxMS0zIC40NDktMS43NjMtLjM1My0zLS4xOC0zIC40MTkgMCAuNTYxLTEuMDEyIDEuMDQ4LTIuMjUgMS4wODMtMy43NTQuMTA3LTExLjIyMSAxLjMtMjUuNzUgNC4xMTMtMy4wMjUuNTg2LTguNjUgMS40NzUtMTIuNSAxLjk3Ny0zLjg1LjUwMS0xMS43MjUgMS44NjgtMTcuNSAzLjAzNi0yMy4zNjIgNC43MjgtMzMuMDM4IDguOTg1LTQyLjU4MSAxOC43MzYtNy43OTIgNy45NjItOS43OTcgMTMuNzczLTkuMjc1IDI2Ljg4NC4zMjMgOC4xMjEuNjggOS40OSAzLjg4MSAxNC44ODEgNS4xMzcgOC42NTUgOC4wNDQgMTAuMDUgMjAuNjI4IDkuODk5IDUuNzIzLS4wNjggMTUuMTAyLTEuMDY2IDIxLjUtMi4yODdBMTEzMi44NDYgMTEzMi44NDYgMCAwIDEgMTM0IDIzNy4wMjdjNi4zMjUtMS4wNDQgMTMuOTc1LTIuMzk4IDE3LTMuMDA4IDMuMDI1LS42MSAxMS41NzUtMi4yNjIgMTktMy42NzEgNy40MjUtMS40MDkgMTMuOTUtMi44MzQgMTQuNDk5LTMuMTY4LjU1LS4zMzMgMi4yMzgtLjQ3NiAzLjc1LS4zMTggMS41MTMuMTU5IDIuNzUxLS4xNTMgMi43NTEtLjY5MyAwLS41NC45LS43NDYgMi0uNDU5IDEuMS4yODggMiAuMDk5IDItLjQyczEuMzUtLjc0NSAzLS41MDNjMS44ODguMjc3IDMgLjAwMiAzLS43NDEgMC0uNzI2Ljc3MS0uOTM2IDItLjU0NiAxLjEyNy4zNTggMiAuMTggMi0uNDA4IDAtLjYxNSAxLjE4LS44MDYgMi44NzktLjQ2NiAxLjU4NS4zMTcgMy4xNzIuMTAxIDMuNTMyLS40ODIuMzU5LS41ODEgMS4zMTQtLjgwMyAyLjEyMS0uNDkzLjgwNy4zMDkgMi4yNTUuMjIxIDMuMjE4LS4xOTguOTYzLS40MTggMi41MzgtLjY2MyAzLjUtLjU0NC45NjMuMTE5IDEuNzUtLjMxIDEuNzUtLjk1MyAwLS42Ny42OTYtLjkwMyAxLjYyNy0uNTQ2Ljg5NC4zNDQgMi4yMjUuMTI4IDIuOTU2LS40NzkuNzMxLS42MDcgMS44MTktLjgwMSAyLjQxNy0uNDMxLjU5OC4zNyAxLjYzLjIyNiAyLjI5NC0uMzIuNjYzLS41NDYgMTEuMzMxLTIuODUyIDIzLjcwNi01LjEyNXMyOS4yNS01LjQ1NSAzNy41LTcuMDdjMTYuMDQ2LTMuMTQzIDQ2LjQwNS04LjU1OSA1OC4xNjktMTAuMzc3IDMuOTQzLS42MDkgNy40NzQtMS40MTQgNy44NDgtMS43ODkuMzczLS4zNzUgMS4zMS0uNDM5IDIuMDgxLS4xNDMuNzcxLjI5NiAxLjQwMi4xMTggMS40MDItLjM5NiAwLS41MTMgMS4zNS0uNzM1IDMtLjQ5MyAxLjY2LjI0MyAzLS4wMTYgMy0uNTggMC0uNTYxLjktLjc4NCAyLS40OTcgMS4xLjI4OCAyIC4wOTkgMi0uNDJzMS4zNS0uNzQ1IDMtLjUwM2MxLjgyNy4yNjggMy0uMDAzIDMtLjY5MyAwLS43MDguOTM2LS44OTcgMi41LS41MDUgMS42NC40MTIgMi41LjIwOSAyLjUtLjU4OCAwLS42NjkuNjc0LS45NTYgMS41LS42MzkuODI1LjMxNiAxLjUuMTM5IDEuNS0uMzkzIDAtLjUzMyAxLjE1Ny0uOTY5IDIuNTctLjk2OSAxLjQxNCAwIDYuMjUyLS42NTggMTAuNzUtMS40NjIgMTkuMzM1LTMuNDU1IDMyLjIwMy01LjYyOSA0Ny42OC04LjA1NCA5LjA3NS0xLjQyMiAxOS43NDItMy4yNjMgMjMuNzA1LTQuMDkzQzQ5Mi42MTIgMTY4LjgwNyA1MTkgMTY2LjQwOCA1MTkgMTY5YzAgLjU1Ljc0NSAxIDEuNjU2IDEgMi41NzEgMCA4LjM0NCA0Ljg3OCA4LjM0NCA3LjA1MSAwIDEuMDcyLjMzNyAxLjk1Mi43NSAxLjk1Ni40MTMuMDA0Ljg3MiAyLjQ5NSAxLjAyMSA1LjUzNi4yMTkgNC40NzgtLjIyOSA2LjM4My0yLjM2IDEwLjAxOS0yLjM1NCA0LjAxNy0xNS45OTUgMTYuNDI0LTE4LjA4MiAxNi40NDctLjQ1Ni4wMDUtMy42MzUgMi4xNDItNy4wNjQgNC43NS0zLjQzIDIuNjA4LTguMTU1IDYuMTI4LTEwLjUgNy44MjJhMTA3MC4yNTQgMTA3MC4yNTQgMCAwIDAtMTAuNTM3IDcuNzU5Yy0xMC4wNzIgNy41MS0xNi4xNDUgMTEuNjYtMTcuMDYzIDExLjY2LS40NyAwLTEuNjcuOS0yLjY2NSAyLS45OTUgMS4xLTIuMzA3IDItMi45MTQgMi0uNjA4IDAtMS42NzguOTE3LTIuMzc4IDIuMDM5LS43IDEuMTIxLTEuNjcgMS43OTMtMi4xNTUgMS40OTQtLjQ4NS0uMy0xLjAzMy0uMTQzLTEuMjE4LjM0OC0uNTYyIDEuNDk4LTIwLjI0NyAxNy4xMDMtMjEuNTg1IDE3LjExMS0uNjg3LjAwNS0xLjI1LjQ0OS0xLjI1Ljk4OSAwIC41MzktMS4xMjUgMS4yNjMtMi41IDEuNjA4LTEuMzc1LjM0NS0yLjUuOTUzLTIuNSAxLjM1IDAgLjM5Ny0yLjEzNyAyLjIzOC00Ljc1IDQuMDktMi42MTMgMS44NTItNC45NzUgMy42My01LjI1IDMuOTUtLjI3NS4zMi03LjI1IDUuNTA3LTE1LjUgMTEuNTI2cy0xNy40NzUgMTIuODc3LTIwLjUgMTUuMjRjLTMuMDI1IDIuMzYzLTkuNTQ4IDcuMDUxLTE0LjQ5NiAxMC40MTgtNC45NDggMy4zNjgtMTEuOTE3IDguNzU4LTE1LjQ4NiAxMS45OC0zLjU3IDMuMjIxLTcuMDExIDUuODU3LTcuNjQ3IDUuODU3LS42MzYgMC0xLjQ0MS43MzktMS43ODggMS42NDMtLjM0Ni45MDQtLjkxNyAxLjM1Ny0xLjI2NyAxLjAwNi0uMzUtLjM1LTEuMjcuMjY4LTIuMDQ1IDEuMzc0LS43NzQgMS4xMDYtMS44MjcgMS43NTEtMi4zMzkgMS40MzUtLjUxMy0uMzE3LS45MzItLjE3MS0uOTMyLjMyNSAwIC40OTUtNS4yNDMgNC45MDktMTEuNjUyIDkuODA5LTYuNDA4IDQuODk5LTEzLjU0NiAxMC41OTYtMTUuODYyIDEyLjY1OC0yLjMxNSAyLjA2Mi00LjcyMiAzLjc1LTUuMzQ4IDMuNzUtLjYyNiAwLTEuMTM4LjUyNS0xLjEzOCAxLjE2NyAwIC42NDEtLjI4NS44ODItLjYzMy41MzQtLjM0OC0uMzQ4LTEuNTA3LjQ3OC0yLjU3NiAxLjgzNy0xLjA2OCAxLjM1OS00LjA0NiAzLjg4NC02LjYxNyA1LjYxMS0yLjU3MSAxLjcyOC02LjAyNCA0LjM4MS03LjY3NCA1Ljg5Ny0xLjY1IDEuNTE1LTQuNzA1IDMuODk0LTYuNzg5IDUuMjg2LTIuMDgzIDEuMzkyLTYuMTgzIDQuNTk4LTkuMTA5IDcuMTI0LTIuOTI3IDIuNTI3LTguNjQ3IDcuMTI1LTEyLjcxMiAxMC4yMTktNC4wNjQgMy4wOTQtOS40NCA3LjQ3LTExLjk0NSA5LjcyNS0yLjUwNSAyLjI1NS04LjUzMyA3LjQ3NS0xMy4zOTUgMTEuNmE1MDczLjAxNiA1MDczLjAxNiAwIDAgMC0xNy4wMDIgMTQuNWMtMjMuMzg4IDIwLjA2LTMzLjY5NSAyNy41LTM4LjA5NyAyNy41LTIuNjg1IDAtOC40NTEtNS45NzktOC40NTEtOC43NjMgMC0yLjQ5MS45MzUtMy42MjcgMjIuNDAyLTI3LjIzNyAxNy44ODgtMTkuNjc0IDg0LjM3MS04Ni4zMDQgMTM3LjEwNy0xMzcuNDEgNDEuNTk5LTQwLjMxNCA3NC42NjYtNzQuMzMyIDc2Ljk2Ny03OS4xODEuOTEzLTEuOTIzIDEuNzQyLTQuNzE1IDEuODQyLTYuMjAzLjE1NC0yLjI5Ni0uMjU4LTIuNzU2LTIuNzI0LTMuMDM3LTEuNTk4LS4xODMtNC41MjMuMzMtNi41IDEuMTM5LTEuOTc3LjgwOC03LjQxOSAyLjcwMS0xMi4wOTQgNC4yMDVzLTkuNjI1IDMuMjAyLTExIDMuNzczYy0xLjM3NS41Ny0yLjgzNy45NjQtMy4yNS44NzUtLjQxMy0uMDg4LS43NS4zMTYtLjc1Ljg5OCAwIC41ODItLjQ1Ljc4MS0xIC40NDFzLTEtLjExNS0xIC41LS40NS44NC0xIC41Yy0uNTUtLjM0LTEtLjExNS0xIC41cy0uNDguODIxLTEuMDY3LjQ1OWMtLjU4Ni0uMzYzLTEuNjk3LjE3My0yLjQ2OCAxLjE5MS0uNzcxIDEuMDE3LTEuNDE2IDEuNDgtMS40MzMgMS4wMjktLjAxOC0uNDUyLS43NjUtLjA4OS0xLjY2MS44MDdzLTIuMjQ2IDEuMzkyLTMgMS4xMDNjLS43NTQtLjI4OS0xLjM3MS0uMTk2LTEuMzcxLjIwOCAwIC40MDMtMi4zNjMgMS41NjQtNS4yNSAyLjU3OC02LjQ1MSAyLjI2Ny0xMS45MDIgNC42NjQtMjIuMTE2IDkuNzI3LTQuMzI2IDIuMTQ0LTguNDI4IDMuODk4LTkuMTE1IDMuODk4LS42ODcgMC0yLjMyMi44MzMtMy42MzQgMS44NTEtMS4zMTIgMS4wMTktMy41MSAyLjExNi00Ljg4NSAyLjQzOS00LjcwNSAxLjEwNS0xMCAzLjE5OS0xMCAzLjk1NSAwIC40MTUtLjkuNzU1LTIgLjc1NXMtMiAuMzk4LTIgLjg4M2MwIC40ODYtLjc4OCAxLjExOS0xLjc1IDEuNDA2LS45NjIuMjg4LTYuOTI1IDIuODY0LTEzLjI1IDUuNzI2QzI2MS4wMjQgMjY0LjY5NiAyNDUuODQ4IDI3MSAyNDQuMzMzIDI3MWMtLjczMyAwLTEuMzMzLjM0LTEuMzMzLjc1NSAwIC40MTYtMS40NjMgMS4yNzEtMy4yNSAxLjkwMS02LjA4OSAyLjE0Ny0xMC4yNDggMy44NTktMTEuNzUgNC44MzctLjgyNS41MzctMS43MjUgMS4wMDQtMiAxLjAzNy0uMjc1LjAzMy0yLjM1NyAxLjAzMy00LjYyNiAyLjIyMi0yLjI3IDEuMTg5LTQuMzQzIDEuOTQ2LTQuNjA4IDEuNjgxLS4yNjQtLjI2NS0xLjA1LjIwNS0xLjc0NiAxLjA0M1MyMTMuMTQ0IDI4NiAyMTIuMzk2IDI4NmMtLjc0NyAwLTQuMTc5IDEuMzM0LTcuNjI3IDIuOTY0LTMuNDQ4IDEuNjMtMTAuMzcyIDQuNTMyLTE1LjM4NyA2LjQ1LTkuNzU3IDMuNzMxLTE4LjU3MiA3LjU3OC0yNC42MzIgMTAuNzUxLTIuMDYzIDEuMDgtMy43NSAxLjYzOS0zLjc1IDEuMjQ0cy0uODI0LjAyNy0xLjgzMS45MzhjLTEuMDA3LjkxMi0yLjEzMiAxLjM1Ni0yLjUuOTg5LS4zNjgtLjM2OC0uNjY5LS4xNTgtLjY2OS40NjZzLS42NzUuODc2LTEuNS41NmMtLjgyNS0uMzE3LTEuNS0uMDkyLTEuNS41IDAgLjU5MS0uNjc1LjgxNi0xLjUuNS0uODI1LS4zMTctMS41LS4xNTEtMS41LjM2OSAwIDEuMDM4LTEwLjA4NiA2LjI1MS0xMi4xODcgNi4yOTktLjcyMi4wMTYtNi40ODYgMi42MDQtMTIuODA3IDUuNzUtOS4zNDkgNC42NTItMTEuOTkzIDYuNDY1LTE0LjE2MiA5LjcwOS0xLjQ2NiAyLjE5NS0yLjQ3NCA0LjMwMS0yLjIzOSA0LjY4MS4yMzUuMzgxLS4wMy45NzQtLjU4OSAxLjMyLTEuNDE5Ljg3Ny0xLjI3NCA4Ljg1Mi4xODggMTAuMzE0LjY2Mi42NjIgMS4wOTUgMi44MjMuOTYyIDQuODAyLS4xMzMgMS45NzguMzE0IDQuMjY4Ljk5NCA1LjA4Ny42OC44MTkgMS4xMzcgMi45NzEgMS4wMTUgNC43ODItLjE0OSAyLjIwMi4yOTEgMy40OSAxLjMyNiAzLjg4NyAxLjA5Mi40MTkgMS4zNjIgMS4zMzcuOTE1IDMuMTE2LS4zNzQgMS40OTItLjIwNiAyLjUyMi40MTMgMi41MjIuNTc2IDAgMS4wNDEuNzg3IDEuMDMzIDEuNzUtLjAyNiAzLjUyNSAxLjI0MiA5Ljc1NCAyLjE3NyAxMC42ODkuNTI5LjUyOS45NjEgMi4wNC45NjEgMy4zNiAwIDEuMzE5LjYzNSAzLjgxNyAxLjQxMiA1LjU1Ljc3NiAxLjczMyAxLjYyOCA2LjIzIDEuODkyIDkuOTkzcy45NzkgNy4zNDEgMS41ODggNy45NWMuNjEuNjEgMS4xMDggMi4yNzggMS4xMDggMy43MDggMCAxLjQzLjM4OSAzLjAyOC44NjUgMy41NSAyLjkxOSAzLjIwNCA5LjA4OCAyNS41OCAxMC42NzMgMzguNzEzLjM4MyAzLjE3IDEuMDUxIDUuOTgzIDEuNDg1IDYuMjUxLjQzNC4yNjguNTUzIDEuMzkuMjY1IDIuNDkyLS4yODggMS4xMDMuMDM0IDIuNjc3LjcxNiAzLjQ5OS42ODMuODIyLjkwNiAxLjQ5NS40OTYgMS40OTUtLjQxIDAtLjI0NC42MDQuMzY5IDEuMzQyLjYxMi43MzguODI4IDEuNjI3LjQ4IDEuOTc2LS4zNDkuMzQ4LS4wODEgMS4zLjU5NSAyLjExNC42NzUuODE0Ljk2MiAxLjkxMi42MzYgMi40MzktLjMyNi41MjctLjI1MiAxLjEwOS4xNjQgMS4yOTQuNDE2LjE4NCAyLjk0MyA0LjY4IDUuNjE2IDkuOTkxIDYuMjIxIDEyLjM1OSA5LjA0MyAxNS43MDEgMTYuODE1IDE5LjkxNSA2LjIyNSAzLjM3NSA2LjUxNSAzLjQyOCAxOC4zMjUgMy4zODIgMTEuNTQ4LS4wNDUgMTIuMjYzLS4xNzQgMTguOTc2LTMuNDI5IDcuNDY1LTMuNjE5IDEwLjY3Ni01Ljg5MiAyNS41MjQtMTguMDY3IDUuMjI1LTQuMjg0IDE0LjQ1LTExLjY1NiAyMC41LTE2LjM4MSA2LjA1LTQuNzI2IDEyLjM1LTkuNzQ3IDE0LTExLjE1OCAxLjY1LTEuNDExIDYuODI1LTUuMzMzIDExLjUtOC43MTUgNy43OTgtNS42NDIgMTQuMDk3LTEwLjU4MiAzOS40MTQtMzAuOTE2IDQuOTAzLTMuOTM3IDEyLjMyOC05LjY5NiAxNi41LTEyLjc5NyA0LjE3Mi0zLjEwMSA4LjE5OS02LjM4OCA4Ljk0OS03LjMwMy43NS0uOTE2IDEuNzE1LTEuNDQ4IDIuMTQ2LTEuMTgyLjQzLjI2NiAxLjAxNy0uMTMgMS4zMDUtLjg4LjI4Ny0uNzQ5IDMuNTk3LTMuNDExIDcuMzU0LTUuOTE0IDMuNzU4LTIuNTAzIDguMTU0LTUuOTM3IDkuNzY5LTcuNjMxIDEuNjE1LTEuNjk0IDMuNDE1LTMuMDg3IDQtMy4wOTUuNTg1LS4wMDggNS44OS0zLjk0NiAxMS43ODktOC43NXMxNS45ODYtMTIuNTYgMjIuNDE2LTE3LjIzNWM2LjQzMS00LjY3NSAxMi4xNzktOC45NTYgMTIuNzc1LTkuNTE0LjU5Ni0uNTU4IDQuNDU4LTMuNDYgOC41ODMtNi40NSA0LjEyNS0yLjk4OSA5LjMxOC03LjAzMiAxMS41NDEtOC45ODUgMi4yMjItMS45NTMgNi45NDctNS42NDYgMTAuNS04LjIwOCAxMS4zNjEtOC4xOSA1MC40MDEtMzcuNjU0IDUyLjA0My0zOS4yNzcuODcxLS44NjEgMi4wNi0xLjU2NiAyLjY0My0xLjU2Ni41ODIgMCAxLjMyOS0uNzA0IDEuNjU5LTEuNTYzLjMzLS44NiAxLjA1My0xLjI4NCAxLjYwNy0uOTQxLjU1NC4zNDIgMS4wMDcuMjM4IDEuMDA3LS4yMzEgMC0uOTI0IDguMzIxLTcuNTI3IDEzLjU2Ny0xMC43NjUgMjMuNjgzLTE0LjYyMiA0Mi44ODUtMzIuNDAyIDUyLjIzMi00OC4zNjUgMS44MTUtMy4wOTkgMy45OTgtNi4xNjggNC44NTEtNi44MTguODUyLS42NTEgMS4yNTQtMS42NjQuODkxLTIuMjUtLjM2Mi0uNTg3LS4yMzctMS4wNjcuMjc4LTEuMDY3IDIuMDI5IDAgMy4zODEtOS4zMTkgMy44OTMtMjYuODI2LjM3Ny0xMi44ODYuMjAyLTE4LjY2LS41ODgtMTkuNDUtLjYxOC0uNjE4LTEuMTI0LTIuMzU1LTEuMTI0LTMuODU5cy0uNTI1LTQuMDAyLTEuMTY2LTUuNTVjLS42NDItMS41NDgtMS4yMDQtMy4wNDktMS4yNS0zLjMzNS0uMDQ2LS4yODYtMS43NzEtMy4wNjItMy44MzQtNi4xNjktMi4wNjItMy4xMDgtMy43NS01Ljk0MS0zLjc1LTYuMjk3IDAtMS42MzgtNS42NTMtNy43NDEtMTIuODk5LTEzLjkyOC0xMS43MjctMTAuMDEyLTIwLjU1MS0xNS40Mi0yOC42MDEtMTcuNTI4LTUuNTg0LTEuNDYyLTMzLjM2OC0xLjA2NC00MyAuNjE1IiBmaWxsPSIjZmJmYmZiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", qc = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 120 120", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M56 4.407c-3.797 1.361-7.564 6.23-10.339 13.363C44.226 21.458 44 26.79 44 56.885c0 33.855.06 34.921 2.095 37.508 2.652 3.372 8.929 6.607 12.82 6.607 3.207 0 6.711-2.886 10.775-8.875C71.989 88.737 72 88.565 72 55.36V22H62l-.014 30.75c-.007 16.912-.261 31.672-.564 32.8-.687 2.558-3.841 4.61-5.882 3.827-1.344-.516-1.54-4.879-1.54-34.349 0-31.176.14-33.941 1.83-36.143 1.006-1.312 2.117-3.173 2.468-4.135.49-1.342 1.783-1.75 5.548-1.75 5.725 0 10.734 1.928 13.904 5.352C79.998 20.78 80 20.813 80 57.391 80 77.526 79.658 94 79.241 94c-.418 0-1.322.9-2.009 2-1.556 2.492-1.144 2.525 1.615.133C80.979 94.284 81 93.899 81 57.178V20.091l-2.666-2.666c-3.615-3.616-8.323-5.428-14.052-5.41-5.707.019-6.138.29-9.032 5.686C53.043 21.816 53 22.545 53 55.948 53 75.961 53.379 90 53.918 90c.505 0 1.547.241 2.315.536.769.295 2.605-.584 4.082-1.952L63 86.095V23h8v31.953c0 22.603-.351 32.771-1.198 34.75-2.011 4.693-7.979 10.261-11.018 10.28-4.059.025-9.081-2.743-11.572-6.379C45.036 90.429 45 89.823 45 56.317V22.258l3.127-7.078c2.753-6.233 3.647-7.324 7.489-9.129C62.471 2.828 70.71 3.24 78.767 7.206c10.764 5.299 10.225 2.682 10.229 49.64.004 39.363-.047 40.417-2.092 43.289-3.303 4.639-12.533 10.895-20.812 14.107-6.871 2.666-8.042 2.844-12.329 1.872-5.695-1.29-11.665-4.913-16.905-10.259C30.059 98.918 30 98.547 30 62.378V30h8v32.277c0 38.078-.713 35.502 11.86 42.859 3.395 1.987 6.719 3.137 9.065 3.137 3.977 0 10.861-3.284 15.015-7.163l2.56-2.39-3 1.932c-1.65 1.062-5.48 3.15-8.512 4.638-6.118 3.005-9.325 2.743-14.888-1.219-1.6-1.139-3.369-2.071-3.932-2.071-.562 0-2.405-1.678-4.095-3.728L39 94.544V29H29v33.941c0 21.549.365 34.167 1 34.559.55.34 1 1.337 1 2.215 0 .878 1.8 3.361 4 5.518 2.2 2.157 4 4.336 4 4.844s.638.923 1.417.923 1.566.337 1.75.75c.183.412 2.583 1.875 5.333 3.25 5.855 2.927 13.334 3.198 18 .65 1.65-.901 3.493-1.64 4.096-1.644 1.821-.01 7.404-3.086 7.404-4.079 0-.51.685-.927 1.522-.927.838 0 3.776-2.362 6.531-5.25l5.008-5.25-.281-42.276-.28-42.276-3.683-3.474c-2.026-1.911-4.276-3.477-5-3.481-.724-.003-2.667-.9-4.317-1.993-3.531-2.339-14.728-2.662-20.5-.593", fill: "#848484", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M55.376 6.101c-3.541 1.719-4.566 3.003-7.25 9.08L45 22.258v34.059c0 33.506.036 34.112 2.212 37.287 2.491 3.636 7.513 6.404 11.572 6.379 3.039-.019 9.007-5.587 11.018-10.28C70.649 87.724 71 77.556 71 54.953V23h-8v63.095l-2.685 2.489c-1.477 1.368-3.313 2.247-4.082 1.952-.768-.295-1.81-.536-2.315-.536C53.379 90 53 75.961 53 55.948c0-33.403.043-34.132 2.25-38.247 2.894-5.396 3.325-5.667 9.032-5.686 5.729-.018 10.437 1.794 14.052 5.41L81 20.091V93.99l-4.781 4.755c-5.979 5.946-12.481 9.528-17.294 9.528-2.346 0-5.67-1.15-9.065-3.137C37.287 97.779 38 100.355 38 62.277V30h-8v32.378c0 36.169.059 36.54 6.858 43.477 5.24 5.346 11.21 8.969 16.905 10.259 4.287.972 5.458.794 12.329-1.872 8.279-3.212 17.509-9.468 20.812-14.107 2.045-2.872 2.096-3.926 2.092-43.289-.004-46.958.535-44.341-10.229-49.64-7.992-3.935-16.712-4.346-23.391-1.105", fill: "#848484", fillRule: "evenodd" }));
nn(qc);
const _c = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyMCAxMjAiPjxwYXRoIGQ9Ik01NiA0LjQwN2MtMy43OTcgMS4zNjEtNy41NjQgNi4yMy0xMC4zMzkgMTMuMzYzQzQ0LjIyNiAyMS40NTggNDQgMjYuNzkgNDQgNTYuODg1YzAgMzMuODU1LjA2IDM0LjkyMSAyLjA5NSAzNy41MDggMi42NTIgMy4zNzIgOC45MjkgNi42MDcgMTIuODIgNi42MDcgMy4yMDcgMCA2LjcxMS0yLjg4NiAxMC43NzUtOC44NzVDNzEuOTg5IDg4LjczNyA3MiA4OC41NjUgNzIgNTUuMzZWMjJINjJsLS4wMTQgMzAuNzVjLS4wMDcgMTYuOTEyLS4yNjEgMzEuNjcyLS41NjQgMzIuOC0uNjg3IDIuNTU4LTMuODQxIDQuNjEtNS44ODIgMy44MjctMS4zNDQtLjUxNi0xLjU0LTQuODc5LTEuNTQtMzQuMzQ5IDAtMzEuMTc2LjE0LTMzLjk0MSAxLjgzLTM2LjE0MyAxLjAwNi0xLjMxMiAyLjExNy0zLjE3MyAyLjQ2OC00LjEzNS40OS0xLjM0MiAxLjc4My0xLjc1IDUuNTQ4LTEuNzUgNS43MjUgMCAxMC43MzQgMS45MjggMTMuOTA0IDUuMzUyQzc5Ljk5OCAyMC43OCA4MCAyMC44MTMgODAgNTcuMzkxIDgwIDc3LjUyNiA3OS42NTggOTQgNzkuMjQxIDk0Yy0uNDE4IDAtMS4zMjIuOS0yLjAwOSAyLTEuNTU2IDIuNDkyLTEuMTQ0IDIuNTI1IDEuNjE1LjEzM0M4MC45NzkgOTQuMjg0IDgxIDkzLjg5OSA4MSA1Ny4xNzhWMjAuMDkxbC0yLjY2Ni0yLjY2NmMtMy42MTUtMy42MTYtOC4zMjMtNS40MjgtMTQuMDUyLTUuNDEtNS43MDcuMDE5LTYuMTM4LjI5LTkuMDMyIDUuNjg2QzUzLjA0MyAyMS44MTYgNTMgMjIuNTQ1IDUzIDU1Ljk0OCA1MyA3NS45NjEgNTMuMzc5IDkwIDUzLjkxOCA5MGMuNTA1IDAgMS41NDcuMjQxIDIuMzE1LjUzNi43NjkuMjk1IDIuNjA1LS41ODQgNC4wODItMS45NTJMNjMgODYuMDk1VjIzaDh2MzEuOTUzYzAgMjIuNjAzLS4zNTEgMzIuNzcxLTEuMTk4IDM0Ljc1LTIuMDExIDQuNjkzLTcuOTc5IDEwLjI2MS0xMS4wMTggMTAuMjgtNC4wNTkuMDI1LTkuMDgxLTIuNzQzLTExLjU3Mi02LjM3OUM0NS4wMzYgOTAuNDI5IDQ1IDg5LjgyMyA0NSA1Ni4zMTdWMjIuMjU4bDMuMTI3LTcuMDc4YzIuNzUzLTYuMjMzIDMuNjQ3LTcuMzI0IDcuNDg5LTkuMTI5QzYyLjQ3MSAyLjgyOCA3MC43MSAzLjI0IDc4Ljc2NyA3LjIwNmMxMC43NjQgNS4yOTkgMTAuMjI1IDIuNjgyIDEwLjIyOSA0OS42NC4wMDQgMzkuMzYzLS4wNDcgNDAuNDE3LTIuMDkyIDQzLjI4OS0zLjMwMyA0LjYzOS0xMi41MzMgMTAuODk1LTIwLjgxMiAxNC4xMDctNi44NzEgMi42NjYtOC4wNDIgMi44NDQtMTIuMzI5IDEuODcyLTUuNjk1LTEuMjktMTEuNjY1LTQuOTEzLTE2LjkwNS0xMC4yNTlDMzAuMDU5IDk4LjkxOCAzMCA5OC41NDcgMzAgNjIuMzc4VjMwaDh2MzIuMjc3YzAgMzguMDc4LS43MTMgMzUuNTAyIDExLjg2IDQyLjg1OSAzLjM5NSAxLjk4NyA2LjcxOSAzLjEzNyA5LjA2NSAzLjEzNyAzLjk3NyAwIDEwLjg2MS0zLjI4NCAxNS4wMTUtNy4xNjNsMi41Ni0yLjM5LTMgMS45MzJjLTEuNjUgMS4wNjItNS40OCAzLjE1LTguNTEyIDQuNjM4LTYuMTE4IDMuMDA1LTkuMzI1IDIuNzQzLTE0Ljg4OC0xLjIxOS0xLjYtMS4xMzktMy4zNjktMi4wNzEtMy45MzItMi4wNzEtLjU2MiAwLTIuNDA1LTEuNjc4LTQuMDk1LTMuNzI4TDM5IDk0LjU0NFYyOUgyOXYzMy45NDFjMCAyMS41NDkuMzY1IDM0LjE2NyAxIDM0LjU1OS41NS4zNCAxIDEuMzM3IDEgMi4yMTUgMCAuODc4IDEuOCAzLjM2MSA0IDUuNTE4IDIuMiAyLjE1NyA0IDQuMzM2IDQgNC44NDRzLjYzOC45MjMgMS40MTcuOTIzIDEuNTY2LjMzNyAxLjc1Ljc1Yy4xODMuNDEyIDIuNTgzIDEuODc1IDUuMzMzIDMuMjUgNS44NTUgMi45MjcgMTMuMzM0IDMuMTk4IDE4IC42NSAxLjY1LS45MDEgMy40OTMtMS42NCA0LjA5Ni0xLjY0NCAxLjgyMS0uMDEgNy40MDQtMy4wODYgNy40MDQtNC4wNzkgMC0uNTEuNjg1LS45MjcgMS41MjItLjkyNy44MzggMCAzLjc3Ni0yLjM2MiA2LjUzMS01LjI1bDUuMDA4LTUuMjUtLjI4MS00Mi4yNzYtLjI4LTQyLjI3Ni0zLjY4My0zLjQ3NGMtMi4wMjYtMS45MTEtNC4yNzYtMy40NzctNS0zLjQ4MS0uNzI0LS4wMDMtMi42NjctLjktNC4zMTctMS45OTMtMy41MzEtMi4zMzktMTQuNzI4LTIuNjYyLTIwLjUtLjU5MyIgZmlsbD0iIzg0ODQ4NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTU1LjM3NiA2LjEwMWMtMy41NDEgMS43MTktNC41NjYgMy4wMDMtNy4yNSA5LjA4TDQ1IDIyLjI1OHYzNC4wNTljMCAzMy41MDYuMDM2IDM0LjExMiAyLjIxMiAzNy4yODcgMi40OTEgMy42MzYgNy41MTMgNi40MDQgMTEuNTcyIDYuMzc5IDMuMDM5LS4wMTkgOS4wMDctNS41ODcgMTEuMDE4LTEwLjI4QzcwLjY0OSA4Ny43MjQgNzEgNzcuNTU2IDcxIDU0Ljk1M1YyM2gtOHY2My4wOTVsLTIuNjg1IDIuNDg5Yy0xLjQ3NyAxLjM2OC0zLjMxMyAyLjI0Ny00LjA4MiAxLjk1Mi0uNzY4LS4yOTUtMS44MS0uNTM2LTIuMzE1LS41MzZDNTMuMzc5IDkwIDUzIDc1Ljk2MSA1MyA1NS45NDhjMC0zMy40MDMuMDQzLTM0LjEzMiAyLjI1LTM4LjI0NyAyLjg5NC01LjM5NiAzLjMyNS01LjY2NyA5LjAzMi01LjY4NiA1LjcyOS0uMDE4IDEwLjQzNyAxLjc5NCAxNC4wNTIgNS40MUw4MSAyMC4wOTFWOTMuOTlsLTQuNzgxIDQuNzU1Yy01Ljk3OSA1Ljk0Ni0xMi40ODEgOS41MjgtMTcuMjk0IDkuNTI4LTIuMzQ2IDAtNS42Ny0xLjE1LTkuMDY1LTMuMTM3QzM3LjI4NyA5Ny43NzkgMzggMTAwLjM1NSAzOCA2Mi4yNzdWMzBoLTh2MzIuMzc4YzAgMzYuMTY5LjA1OSAzNi41NCA2Ljg1OCA0My40NzcgNS4yNCA1LjM0NiAxMS4yMSA4Ljk2OSAxNi45MDUgMTAuMjU5IDQuMjg3Ljk3MiA1LjQ1OC43OTQgMTIuMzI5LTEuODcyIDguMjc5LTMuMjEyIDE3LjUwOS05LjQ2OCAyMC44MTItMTQuMTA3IDIuMDQ1LTIuODcyIDIuMDk2LTMuOTI2IDIuMDkyLTQzLjI4OS0uMDA0LTQ2Ljk1OC41MzUtNDQuMzQxLTEwLjIyOS00OS42NC03Ljk5Mi0zLjkzNS0xNi43MTItNC4zNDYtMjMuMzkxLTEuMTA1IiBmaWxsPSIjODQ4NDg0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", $c = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 102 102", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M27.488 9.924c-2.565 1.065-10.486 8.948-10.494 10.444-.004.622-.657 2.38-1.453 3.906-2.086 3.998-3.033 13.938-1.586 16.642 1.96 3.661 5.374 2.374 6.409-2.416.476-2.2 1.217-4.9 1.648-6 2.397-6.116 4.19-9.5 5.035-9.5.524 0 .953-.61.953-1.355s1.384-2.502 3.076-3.903c2.359-1.954 3-3.212 2.75-5.395-.352-3.071-2.655-3.951-6.338-2.423m41.179-.257c-1.708 1.707-.494 5.956 2.342 8.196C72.654 19.162 74 20.849 74 21.613c0 .763.429 1.387.953 1.387.845 0 2.638 3.384 5.035 9.5.431 1.1 1.172 3.8 1.648 6 1.035 4.79 4.449 6.077 6.409 2.416 1.447-2.704.5-12.644-1.586-16.642-.796-1.526-1.449-3.284-1.453-3.906-.009-1.635-8.046-9.433-10.801-10.48-2.782-1.058-4.628-1.132-5.538-.221M28 10.708c-2.784 1.021-9.056 8.256-10.912 12.587C13.296 32.141 13.246 42 16.992 42c1.373 0 2.01-1.053 2.542-4.202 1.026-6.074 4.047-12.574 8.256-17.765 2.022-2.493 4.021-4.683 4.443-4.866.422-.184.767-1.421.767-2.75 0-2.429-1.572-2.966-5-1.709m41 1.584c0 1.398.345 2.691.767 2.875.422.183 2.421 2.373 4.443 4.866 4.209 5.191 7.23 11.691 8.256 17.765.885 5.239 3.988 5.966 5.039 1.18 2.198-10.009-6.836-26.894-15.295-28.586-2.94-.588-3.21-.428-3.21 1.9m-20.291-.668c-.39.39-.71 1.422-.711 2.293-.002.982-2.446 2.671-6.442 4.45-7.376 3.284-9.028 5.738-10.732 15.931-3.317 19.851-3.567 20.5-10.532 27.295-7.324 7.147-7.959 10.098-2.969 13.808C20.048 77.427 21.226 77.5 51 77.5s30.952-.073 33.677-2.099c4.99-3.71 4.355-6.661-2.969-13.808-6.965-6.795-7.215-7.444-10.532-27.295-1.701-10.178-3.36-12.647-10.696-15.921-4.442-1.982-6.492-3.474-6.692-4.868-.286-1.997-3.7-3.264-5.079-1.885m.979 1.022c-.379.378-.688 1.402-.688 2.276 0 1.018-2.182 2.434-6.084 3.947-7.079 2.745-9.339 5.676-10.874 14.106-3.6 19.776-4.094 21.506-7.274 25.506-1.756 2.211-3.574 4.178-4.038 4.371-2.732 1.141-5.815 5.592-5.537 7.993C15.801 76.079 18.467 76.5 51 76.5s35.199-.421 35.807-5.655c.278-2.401-2.805-6.852-5.537-7.993-.464-.193-2.282-2.16-4.038-4.371-3.18-4-3.674-5.73-7.274-25.506-1.533-8.416-3.798-11.362-10.834-14.09-4.191-1.625-6.134-2.94-6.335-4.286-.307-2.061-1.956-3.099-3.101-1.953M43 81.923C43 84.904 48.678 90 52 90s9-5.096 9-8.077C61 80.168 60.213 80 52 80s-9 .168-9 1.923m1 .441c0 .75 1.186 2.55 2.636 4 3.417 3.417 7.311 3.417 10.728 0C61.855 81.873 60.982 81 52 81c-6.089 0-8 .326-8 1.364", fill: "#fcec3c", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M28 10.708c-2.784 1.021-9.056 8.256-10.912 12.587C13.296 32.141 13.246 42 16.992 42c1.373 0 2.01-1.053 2.542-4.202 1.026-6.074 4.047-12.574 8.256-17.765 2.022-2.493 4.021-4.683 4.443-4.866.422-.184.767-1.421.767-2.75 0-2.429-1.572-2.966-5-1.709m41 1.584c0 1.398.345 2.691.767 2.875.422.183 2.421 2.373 4.443 4.866 4.209 5.191 7.23 11.691 8.256 17.765.885 5.239 3.988 5.966 5.039 1.18 2.198-10.009-6.836-26.894-15.295-28.586-2.94-.588-3.21-.428-3.21 1.9m-19.312.354c-.379.378-.688 1.402-.688 2.276 0 1.018-2.182 2.434-6.084 3.947-7.079 2.745-9.339 5.676-10.874 14.106-3.6 19.776-4.094 21.506-7.274 25.506-1.756 2.211-3.574 4.178-4.038 4.371-2.732 1.141-5.815 5.592-5.537 7.993C15.801 76.079 18.467 76.5 51 76.5s35.199-.421 35.807-5.655c.278-2.401-2.805-6.852-5.537-7.993-.464-.193-2.282-2.16-4.038-4.371-3.18-4-3.674-5.73-7.274-25.506-1.533-8.416-3.798-11.362-10.834-14.09-4.191-1.625-6.134-2.94-6.335-4.286-.307-2.061-1.956-3.099-3.101-1.953M44 82.364c0 .75 1.186 2.55 2.636 4 3.417 3.417 7.311 3.417 10.728 0C61.855 81.873 60.982 81 52 81c-6.089 0-8 .326-8 1.364", fill: "#fcec3c", fillRule: "evenodd" }));
nn($c);
const ef = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMiAxMDIiPjxwYXRoIGQ9Ik0yNy40ODggOS45MjRjLTIuNTY1IDEuMDY1LTEwLjQ4NiA4Ljk0OC0xMC40OTQgMTAuNDQ0LS4wMDQuNjIyLS42NTcgMi4zOC0xLjQ1MyAzLjkwNi0yLjA4NiAzLjk5OC0zLjAzMyAxMy45MzgtMS41ODYgMTYuNjQyIDEuOTYgMy42NjEgNS4zNzQgMi4zNzQgNi40MDktMi40MTYuNDc2LTIuMiAxLjIxNy00LjkgMS42NDgtNiAyLjM5Ny02LjExNiA0LjE5LTkuNSA1LjAzNS05LjUuNTI0IDAgLjk1My0uNjEuOTUzLTEuMzU1czEuMzg0LTIuNTAyIDMuMDc2LTMuOTAzYzIuMzU5LTEuOTU0IDMtMy4yMTIgMi43NS01LjM5NS0uMzUyLTMuMDcxLTIuNjU1LTMuOTUxLTYuMzM4LTIuNDIzbTQxLjE3OS0uMjU3Yy0xLjcwOCAxLjcwNy0uNDk0IDUuOTU2IDIuMzQyIDguMTk2QzcyLjY1NCAxOS4xNjIgNzQgMjAuODQ5IDc0IDIxLjYxM2MwIC43NjMuNDI5IDEuMzg3Ljk1MyAxLjM4Ny44NDUgMCAyLjYzOCAzLjM4NCA1LjAzNSA5LjUuNDMxIDEuMSAxLjE3MiAzLjggMS42NDggNiAxLjAzNSA0Ljc5IDQuNDQ5IDYuMDc3IDYuNDA5IDIuNDE2IDEuNDQ3LTIuNzA0LjUtMTIuNjQ0LTEuNTg2LTE2LjY0Mi0uNzk2LTEuNTI2LTEuNDQ5LTMuMjg0LTEuNDUzLTMuOTA2LS4wMDktMS42MzUtOC4wNDYtOS40MzMtMTAuODAxLTEwLjQ4LTIuNzgyLTEuMDU4LTQuNjI4LTEuMTMyLTUuNTM4LS4yMjFNMjggMTAuNzA4Yy0yLjc4NCAxLjAyMS05LjA1NiA4LjI1Ni0xMC45MTIgMTIuNTg3QzEzLjI5NiAzMi4xNDEgMTMuMjQ2IDQyIDE2Ljk5MiA0MmMxLjM3MyAwIDIuMDEtMS4wNTMgMi41NDItNC4yMDIgMS4wMjYtNi4wNzQgNC4wNDctMTIuNTc0IDguMjU2LTE3Ljc2NSAyLjAyMi0yLjQ5MyA0LjAyMS00LjY4MyA0LjQ0My00Ljg2Ni40MjItLjE4NC43NjctMS40MjEuNzY3LTIuNzUgMC0yLjQyOS0xLjU3Mi0yLjk2Ni01LTEuNzA5bTQxIDEuNTg0YzAgMS4zOTguMzQ1IDIuNjkxLjc2NyAyLjg3NS40MjIuMTgzIDIuNDIxIDIuMzczIDQuNDQzIDQuODY2IDQuMjA5IDUuMTkxIDcuMjMgMTEuNjkxIDguMjU2IDE3Ljc2NS44ODUgNS4yMzkgMy45ODggNS45NjYgNS4wMzkgMS4xOCAyLjE5OC0xMC4wMDktNi44MzYtMjYuODk0LTE1LjI5NS0yOC41ODYtMi45NC0uNTg4LTMuMjEtLjQyOC0zLjIxIDEuOW0tMjAuMjkxLS42NjhjLS4zOS4zOS0uNzEgMS40MjItLjcxMSAyLjI5My0uMDAyLjk4Mi0yLjQ0NiAyLjY3MS02LjQ0MiA0LjQ1LTcuMzc2IDMuMjg0LTkuMDI4IDUuNzM4LTEwLjczMiAxNS45MzEtMy4zMTcgMTkuODUxLTMuNTY3IDIwLjUtMTAuNTMyIDI3LjI5NS03LjMyNCA3LjE0Ny03Ljk1OSAxMC4wOTgtMi45NjkgMTMuODA4QzIwLjA0OCA3Ny40MjcgMjEuMjI2IDc3LjUgNTEgNzcuNXMzMC45NTItLjA3MyAzMy42NzctMi4wOTljNC45OS0zLjcxIDQuMzU1LTYuNjYxLTIuOTY5LTEzLjgwOC02Ljk2NS02Ljc5NS03LjIxNS03LjQ0NC0xMC41MzItMjcuMjk1LTEuNzAxLTEwLjE3OC0zLjM2LTEyLjY0Ny0xMC42OTYtMTUuOTIxLTQuNDQyLTEuOTgyLTYuNDkyLTMuNDc0LTYuNjkyLTQuODY4LS4yODYtMS45OTctMy43LTMuMjY0LTUuMDc5LTEuODg1bS45NzkgMS4wMjJjLS4zNzkuMzc4LS42ODggMS40MDItLjY4OCAyLjI3NiAwIDEuMDE4LTIuMTgyIDIuNDM0LTYuMDg0IDMuOTQ3LTcuMDc5IDIuNzQ1LTkuMzM5IDUuNjc2LTEwLjg3NCAxNC4xMDYtMy42IDE5Ljc3Ni00LjA5NCAyMS41MDYtNy4yNzQgMjUuNTA2LTEuNzU2IDIuMjExLTMuNTc0IDQuMTc4LTQuMDM4IDQuMzcxLTIuNzMyIDEuMTQxLTUuODE1IDUuNTkyLTUuNTM3IDcuOTkzQzE1LjgwMSA3Ni4wNzkgMTguNDY3IDc2LjUgNTEgNzYuNXMzNS4xOTktLjQyMSAzNS44MDctNS42NTVjLjI3OC0yLjQwMS0yLjgwNS02Ljg1Mi01LjUzNy03Ljk5My0uNDY0LS4xOTMtMi4yODItMi4xNi00LjAzOC00LjM3MS0zLjE4LTQtMy42NzQtNS43My03LjI3NC0yNS41MDYtMS41MzMtOC40MTYtMy43OTgtMTEuMzYyLTEwLjgzNC0xNC4wOS00LjE5MS0xLjYyNS02LjEzNC0yLjk0LTYuMzM1LTQuMjg2LS4zMDctMi4wNjEtMS45NTYtMy4wOTktMy4xMDEtMS45NTNNNDMgODEuOTIzQzQzIDg0LjkwNCA0OC42NzggOTAgNTIgOTBzOS01LjA5NiA5LTguMDc3QzYxIDgwLjE2OCA2MC4yMTMgODAgNTIgODBzLTkgLjE2OC05IDEuOTIzbTEgLjQ0MWMwIC43NSAxLjE4NiAyLjU1IDIuNjM2IDQgMy40MTcgMy40MTcgNy4zMTEgMy40MTcgMTAuNzI4IDBDNjEuODU1IDgxLjg3MyA2MC45ODIgODEgNTIgODFjLTYuMDg5IDAtOCAuMzI2LTggMS4zNjQiIGZpbGw9IiNmY2VjM2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yOCAxMC43MDhjLTIuNzg0IDEuMDIxLTkuMDU2IDguMjU2LTEwLjkxMiAxMi41ODdDMTMuMjk2IDMyLjE0MSAxMy4yNDYgNDIgMTYuOTkyIDQyYzEuMzczIDAgMi4wMS0xLjA1MyAyLjU0Mi00LjIwMiAxLjAyNi02LjA3NCA0LjA0Ny0xMi41NzQgOC4yNTYtMTcuNzY1IDIuMDIyLTIuNDkzIDQuMDIxLTQuNjgzIDQuNDQzLTQuODY2LjQyMi0uMTg0Ljc2Ny0xLjQyMS43NjctMi43NSAwLTIuNDI5LTEuNTcyLTIuOTY2LTUtMS43MDltNDEgMS41ODRjMCAxLjM5OC4zNDUgMi42OTEuNzY3IDIuODc1LjQyMi4xODMgMi40MjEgMi4zNzMgNC40NDMgNC44NjYgNC4yMDkgNS4xOTEgNy4yMyAxMS42OTEgOC4yNTYgMTcuNzY1Ljg4NSA1LjIzOSAzLjk4OCA1Ljk2NiA1LjAzOSAxLjE4IDIuMTk4LTEwLjAwOS02LjgzNi0yNi44OTQtMTUuMjk1LTI4LjU4Ni0yLjk0LS41ODgtMy4yMS0uNDI4LTMuMjEgMS45bS0xOS4zMTIuMzU0Yy0uMzc5LjM3OC0uNjg4IDEuNDAyLS42ODggMi4yNzYgMCAxLjAxOC0yLjE4MiAyLjQzNC02LjA4NCAzLjk0Ny03LjA3OSAyLjc0NS05LjMzOSA1LjY3Ni0xMC44NzQgMTQuMTA2LTMuNiAxOS43NzYtNC4wOTQgMjEuNTA2LTcuMjc0IDI1LjUwNi0xLjc1NiAyLjIxMS0zLjU3NCA0LjE3OC00LjAzOCA0LjM3MS0yLjczMiAxLjE0MS01LjgxNSA1LjU5Mi01LjUzNyA3Ljk5M0MxNS44MDEgNzYuMDc5IDE4LjQ2NyA3Ni41IDUxIDc2LjVzMzUuMTk5LS40MjEgMzUuODA3LTUuNjU1Yy4yNzgtMi40MDEtMi44MDUtNi44NTItNS41MzctNy45OTMtLjQ2NC0uMTkzLTIuMjgyLTIuMTYtNC4wMzgtNC4zNzEtMy4xOC00LTMuNjc0LTUuNzMtNy4yNzQtMjUuNTA2LTEuNTMzLTguNDE2LTMuNzk4LTExLjM2Mi0xMC44MzQtMTQuMDktNC4xOTEtMS42MjUtNi4xMzQtMi45NC02LjMzNS00LjI4Ni0uMzA3LTIuMDYxLTEuOTU2LTMuMDk5LTMuMTAxLTEuOTUzTTQ0IDgyLjM2NGMwIC43NSAxLjE4NiAyLjU1IDIuNjM2IDQgMy40MTcgMy40MTcgNy4zMTEgMy40MTcgMTAuNzI4IDBDNjEuODU1IDgxLjg3MyA2MC45ODIgODEgNTIgODFjLTYuMDg5IDAtOCAuMzI2LTggMS4zNjQiIGZpbGw9IiNmY2VjM2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==", tf = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 124, height: 124, viewBox: "0 0 124 124", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M 17.667 16.667 C 17.300 17.033, 17 18.717, 17 20.407 C 17 23.062, 19.553 26.037, 35.740 42.241 L 54.481 61 35.165 80.335 C 16.849 98.669, 15.866 99.847, 16.174 103.085 C 16.480 106.292, 16.744 106.517, 20.500 106.783 C 24.468 107.065, 24.652 106.914, 43.490 88.033 L 62.481 69 81.570 88.070 C 100.452 106.933, 100.703 107.138, 104.580 106.821 C 108.236 106.522, 108.522 106.270, 108.826 103.085 C 109.134 99.847, 108.151 98.669, 89.835 80.335 L 70.519 61 89.335 42.165 C 107.162 24.319, 108.134 23.150, 107.826 19.915 C 107.522 16.730, 107.236 16.478, 103.580 16.180 C 99.706 15.863, 99.443 16.077, 81.070 34.430 L 62.480 53.001 44 34.500 C 26.879 17.361, 25.256 16, 21.927 16 C 19.950 16, 18.033 16.300, 17.667 16.667", stroke: "none", fill: "#fffcfc", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "", stroke: "none", fill: "#fcfcfc", fillRule: "evenodd" }));
nn(tf);
const rf = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiB2aWV3Qm94PSIwIDAgMTI0IDEyNCIgdmVyc2lvbj0iMS4xIj48cGF0aCBkPSJNIDE3LjY2NyAxNi42NjcgQyAxNy4zMDAgMTcuMDMzLCAxNyAxOC43MTcsIDE3IDIwLjQwNyBDIDE3IDIzLjA2MiwgMTkuNTUzIDI2LjAzNywgMzUuNzQwIDQyLjI0MSBMIDU0LjQ4MSA2MSAzNS4xNjUgODAuMzM1IEMgMTYuODQ5IDk4LjY2OSwgMTUuODY2IDk5Ljg0NywgMTYuMTc0IDEwMy4wODUgQyAxNi40ODAgMTA2LjI5MiwgMTYuNzQ0IDEwNi41MTcsIDIwLjUwMCAxMDYuNzgzIEMgMjQuNDY4IDEwNy4wNjUsIDI0LjY1MiAxMDYuOTE0LCA0My40OTAgODguMDMzIEwgNjIuNDgxIDY5IDgxLjU3MCA4OC4wNzAgQyAxMDAuNDUyIDEwNi45MzMsIDEwMC43MDMgMTA3LjEzOCwgMTA0LjU4MCAxMDYuODIxIEMgMTA4LjIzNiAxMDYuNTIyLCAxMDguNTIyIDEwNi4yNzAsIDEwOC44MjYgMTAzLjA4NSBDIDEwOS4xMzQgOTkuODQ3LCAxMDguMTUxIDk4LjY2OSwgODkuODM1IDgwLjMzNSBMIDcwLjUxOSA2MSA4OS4zMzUgNDIuMTY1IEMgMTA3LjE2MiAyNC4zMTksIDEwOC4xMzQgMjMuMTUwLCAxMDcuODI2IDE5LjkxNSBDIDEwNy41MjIgMTYuNzMwLCAxMDcuMjM2IDE2LjQ3OCwgMTAzLjU4MCAxNi4xODAgQyA5OS43MDYgMTUuODYzLCA5OS40NDMgMTYuMDc3LCA4MS4wNzAgMzQuNDMwIEwgNjIuNDgwIDUzLjAwMSA0NCAzNC41MDAgQyAyNi44NzkgMTcuMzYxLCAyNS4yNTYgMTYsIDIxLjkyNyAxNiBDIDE5Ljk1MCAxNiwgMTguMDMzIDE2LjMwMCwgMTcuNjY3IDE2LjY2NyIgc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmY2ZjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSIiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2ZjZmNmYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+", nf = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 85, height: 85, viewBox: "0 0 85 85", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M 2 2.774 C 2 3.199, 4.397 10.721, 7.326 19.489 L 12.651 35.430 24.555 38.388 C 31.103 40.015, 35.794 41.572, 34.980 41.846 C 34.166 42.121, 28.806 43.526, 23.068 44.968 L 12.636 47.591 7.214 63.858 C 4.232 72.805, 2.013 80.346, 2.284 80.617 C 2.554 80.887, 20.603 72.199, 42.391 61.309 L 82.007 41.508 42.753 21.809 C 21.164 10.974, 3.163 2.084, 2.750 2.054 C 2.337 2.024, 2 2.348, 2 2.774 M 3.228 4.186 C 3.498 4.909, 5.880 12.052, 8.521 20.060 L 13.323 34.620 24.745 37.560 C 31.027 39.177, 36.166 40.950, 36.166 41.500 C 36.166 42.050, 31.029 43.822, 24.751 45.438 L 13.335 48.376 8.191 63.879 C 5.362 72.405, 3.149 79.472, 3.274 79.583 C 3.398 79.694, 20.714 71.169, 41.753 60.638 L 80.007 41.491 41.372 22.182 C 20.123 11.561, 2.958 3.463, 3.228 4.186", stroke: "none", fill: "#fcfcfc", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M 3.228 4.186 C 3.498 4.909, 5.880 12.052, 8.521 20.060 L 13.323 34.620 24.745 37.560 C 31.027 39.177, 36.166 40.950, 36.166 41.500 C 36.166 42.050, 31.029 43.822, 24.751 45.438 L 13.335 48.376 8.191 63.879 C 5.362 72.405, 3.149 79.472, 3.274 79.583 C 3.398 79.694, 20.714 71.169, 41.753 60.638 L 80.007 41.491 41.372 22.182 C 20.123 11.561, 2.958 3.463, 3.228 4.186", stroke: "none", fill: "#fcfcfc", fillRule: "evenodd" }));
nn(nf);
const of = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NSIgaGVpZ2h0PSI4NSIgdmlld0JveD0iMCAwIDg1IDg1IiB2ZXJzaW9uPSIxLjEiPjxwYXRoIGQ9Ik0gMiAyLjc3NCBDIDIgMy4xOTksIDQuMzk3IDEwLjcyMSwgNy4zMjYgMTkuNDg5IEwgMTIuNjUxIDM1LjQzMCAyNC41NTUgMzguMzg4IEMgMzEuMTAzIDQwLjAxNSwgMzUuNzk0IDQxLjU3MiwgMzQuOTgwIDQxLjg0NiBDIDM0LjE2NiA0Mi4xMjEsIDI4LjgwNiA0My41MjYsIDIzLjA2OCA0NC45NjggTCAxMi42MzYgNDcuNTkxIDcuMjE0IDYzLjg1OCBDIDQuMjMyIDcyLjgwNSwgMi4wMTMgODAuMzQ2LCAyLjI4NCA4MC42MTcgQyAyLjU1NCA4MC44ODcsIDIwLjYwMyA3Mi4xOTksIDQyLjM5MSA2MS4zMDkgTCA4Mi4wMDcgNDEuNTA4IDQyLjc1MyAyMS44MDkgQyAyMS4xNjQgMTAuOTc0LCAzLjE2MyAyLjA4NCwgMi43NTAgMi4wNTQgQyAyLjMzNyAyLjAyNCwgMiAyLjM0OCwgMiAyLjc3NCBNIDMuMjI4IDQuMTg2IEMgMy40OTggNC45MDksIDUuODgwIDEyLjA1MiwgOC41MjEgMjAuMDYwIEwgMTMuMzIzIDM0LjYyMCAyNC43NDUgMzcuNTYwIEMgMzEuMDI3IDM5LjE3NywgMzYuMTY2IDQwLjk1MCwgMzYuMTY2IDQxLjUwMCBDIDM2LjE2NiA0Mi4wNTAsIDMxLjAyOSA0My44MjIsIDI0Ljc1MSA0NS40MzggTCAxMy4zMzUgNDguMzc2IDguMTkxIDYzLjg3OSBDIDUuMzYyIDcyLjQwNSwgMy4xNDkgNzkuNDcyLCAzLjI3NCA3OS41ODMgQyAzLjM5OCA3OS42OTQsIDIwLjcxNCA3MS4xNjksIDQxLjc1MyA2MC42MzggTCA4MC4wMDcgNDEuNDkxIDQxLjM3MiAyMi4xODIgQyAyMC4xMjMgMTEuNTYxLCAyLjk1OCAzLjQ2MywgMy4yMjggNC4xODYiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2ZjZmNmYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTSAzLjIyOCA0LjE4NiBDIDMuNDk4IDQuOTA5LCA1Ljg4MCAxMi4wNTIsIDguNTIxIDIwLjA2MCBMIDEzLjMyMyAzNC42MjAgMjQuNzQ1IDM3LjU2MCBDIDMxLjAyNyAzOS4xNzcsIDM2LjE2NiA0MC45NTAsIDM2LjE2NiA0MS41MDAgQyAzNi4xNjYgNDIuMDUwLCAzMS4wMjkgNDMuODIyLCAyNC43NTEgNDUuNDM4IEwgMTMuMzM1IDQ4LjM3NiA4LjE5MSA2My44NzkgQyA1LjM2MiA3Mi40MDUsIDMuMTQ5IDc5LjQ3MiwgMy4yNzQgNzkuNTgzIEMgMy4zOTggNzkuNjk0LCAyMC43MTQgNzEuMTY5LCA0MS43NTMgNjAuNjM4IEwgODAuMDA3IDQxLjQ5MSA0MS4zNzIgMjIuMTgyIEMgMjAuMTIzIDExLjU2MSwgMi45NTggMy40NjMsIDMuMjI4IDQuMTg2IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmY2ZjZmMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==", Af = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 108 108", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M37 21c0 .588 3.5 1 8.5 1 8.5 0 8.5 0 8.5 3.462 0 3.463 0 3.463-9.25 3.793-9.25.33-9.25.33 0 .537C54 30 54 30 54 33.464s0 3.464-9.75 3.79c-9.75.327-9.75.327.063.537 9.814.209 9.814.209 9.5 3.459-.313 3.25-.313 3.25-9.313 3.811-9 .561-9 .561-1.715.75 6.867.178 7.226.3 6.25 2.123-1.621 3.03-1.219 7.563.913 10.273 1.344 1.708 2.06 4.464 2.307 8.885.36 6.408.36 6.408.552.158.169-5.467.438-6.25 2.145-6.25 1.691 0 2 .839 2.308 6.25.355 6.25.355 6.25.547-.092.141-4.616.738-7.035 2.193-8.885 2.178-2.769 2.599-7.285.965-10.339-.979-1.829-.611-1.944 6.75-2.125 7.785-.192 7.785-.192-1.715-.75-9.5-.559-9.5-.559-9.811-3.773-.31-3.215-.31-3.215 10-3.539 10.311-.325 10.311-.325.061-.536C56 37 56 37 56 33.536s0-3.464 9.75-3.79c9.75-.327 9.75-.327 0-.537C56 29 56 29 56 25.5s0-3.5 8.5-3.5c5 0 8.5-.412 8.5-1 0-.63-6.667-1-18-1s-18 .37-18 1", fill: "#ec1c24", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M49.243 5.85c-4.078 1.175-9.259 6.193-11.773 11.403C36.112 20.07 35 22.515 35 22.687c0 .172 3.375.313 7.5.313 4.333 0 7.5.422 7.5 1 0 .57-2.959 1-6.878 1-4.893 0-7.236.433-8.122 1.5-2.394 2.885.52 4.5 8.122 4.5 3.919 0 6.878.43 6.878 1 0 .576-3.126 1-7.378 1-5.337 0-7.721.415-8.622 1.5-2.394 2.885.52 4.5 8.122 4.5 3.919 0 6.878.43 6.878 1 0 .562-2.793 1-6.378 1-4.449 0-6.754.454-7.622 1.5-2.11 2.542.535 4.477 6.372 4.663 5.128.163 5.128.163-.372.75s-5.5.587-5.146 6.424c.383 6.304 1.318 8.706 5.164 13.266C44.59 71.837 48.04 74 51.223 74 54 74 54 74 53.807 67.25c-.192-6.75-.192-6.75-.547-.5-.332 5.845-.512 6.25-2.773 6.25-3.056 0-9.053-5.209-11.405-9.905-.989-1.977-2.064-5.935-2.388-8.795-.588-5.199-.588-5.199 4.609-5.5 6.85-.396 6.659-2.167-.303-2.8-4-.364-5.5-.909-5.5-2 0-1.143 1.667-1.619 7-2s7-.857 7-2c0-1.156-1.722-1.615-7.5-2-5.778-.385-7.5-.844-7.5-2 0-1.167 1.778-1.611 8-2 6.222-.389 8-.833 8-2 0-1.156-1.722-1.615-7.5-2-5.778-.385-7.5-.844-7.5-2 0-1.156 1.722-1.615 7.5-2 5.778-.385 7.5-.844 7.5-2 0-1.166-1.589-1.565-7.139-1.792-7.139-.291-7.139-.291-5.163-4.5 7.238-15.415 26.223-15.338 34.485.14 2.173 4.07 2.173 4.07-5.505 4.361-6.029.229-7.678.613-7.678 1.791 0 1.167 1.778 1.611 8 2 6.222.389 8 .833 8 2s-1.778 1.611-8 2c-6.222.389-8 .833-8 2 0 1.176 1.833 1.608 8.5 2 6.667.392 8.5.824 8.5 2 0 1.167-1.778 1.611-8 2-6.222.389-8 .833-8 2 0 1.156 1.722 1.615 7.5 2 5.778.385 7.5.844 7.5 2 0 1.102-1.53 1.633-5.769 2-7.266.63-7.921 2.402-1.034 2.8 5.197.301 5.197.301 4.609 5.5-.324 2.86-1.408 6.836-2.41 8.836C68.759 67.405 62.098 73 59.154 73c-1.821 0-2.1-.723-2.414-6.25-.355-6.25-.355-6.25-.547.5-.19 6.649-.154 6.75 2.403 6.75 2.461 0 7.076-2.662 10.39-5.995 2.511-2.524 4.915-9.201 5.223-14.505.291-5 .291-5-5.209-5.587-5.5-.587-5.5-.587.128-.75 6.335-.183 9.057-2.03 6.872-4.663-.886-1.067-3.229-1.5-8.122-1.5C63.959 41 61 40.57 61 40c0-.576 3.126-1 7.378-1 8.107 0 11.072-1.548 8.622-4.5-.914-1.101-3.34-1.5-9.122-1.5C63.293 33 60 32.582 60 32c0-.576 3.126-1 7.378-1 8.107 0 11.072-1.548 8.622-4.5-.901-1.085-3.285-1.5-8.622-1.5C63.126 25 60 24.576 60 24c0-.576 3.111-1 7.333-1 4.034 0 7.602-.268 7.929-.596.807-.806-2.837-7.239-6.106-10.78-4.967-5.379-13.099-7.738-19.913-5.774M26.402 43.394c-.325.848-.434 5.944-.241 11.324.312 8.712.652 10.227 3.107 13.849 3.501 5.168 13.688 12.242 18.805 13.061C52 82.256 52 82.256 52 90.589s0 8.333-8.75 8.622c-8.59.284-8.75.335-8.75 2.789 0 2.5 0 2.5 20.5 2.5s20.5 0 20.5-2.5c0-2.454-.16-2.505-8.75-2.789-8.75-.289-8.75-.289-8.75-8.75 0-7.839.149-8.461 2.032-8.461 2.695 0 9.447-2.855 8.646-3.656-.346-.346-1.225-.135-1.953.47-.729.604-3.214 1.401-5.525 1.77-4.2.672-4.2.672-4.2 10.044S57 100 66 100c8.333 0 9 .148 9 2 0 1.933-.667 2-20 2s-20-.067-20-2c0-1.852.667-2 9-2 9 0 9 0 9-9.372s0-9.372-4.139-10.034c-5.197-.831-15.553-7.693-18.839-12.482-2.183-3.181-2.521-4.894-2.839-14.362-.312-9.306-.147-10.75 1.229-10.75 1.31 0 1.596 1.354 1.632 7.75.05 8.76 1.784 14.741 4.911 16.931 1.169.819 2.894 2.272 3.835 3.229 6.785 6.905 17.94 8.639 26.21 4.074 2.475-1.366 4.86-3.046 5.3-3.734.44-.687 1.267-1.25 1.839-1.25.572 0 1.924-1.013 3.005-2.25C78.755 63.614 80 59.329 80 51.032c0-6.473.291-8.032 1.5-8.032 2.247 0 2.16 18.613-.102 21.842-.881 1.258-1.364 2.525-1.074 2.816.291.29 1.253-.873 2.138-2.585 1.228-2.374 1.542-5.421 1.324-12.843-.264-8.968-.443-9.73-2.286-9.73-1.809 0-2.056.862-2.585 9-.71 10.919-1.638 13.34-6.584 17.172-12.856 9.96-19.798 10.52-31.26 2.518-8.431-5.885-9.333-7.59-9.997-18.904-.484-8.241-.848-9.817-2.327-10.099-.964-.184-2.019.359-2.345 1.207M74 74c-2.475 2.167-3.923 3.954-3.219 3.97.705.017 1.541-.645 1.857-1.47.317-.825 1.038-1.5 1.602-1.5.91 0 4.76-3.764 4.76-4.653 0-.652-.504-.284-5 3.653", fill: "#040404", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M49.357 6.85C44.516 8.319 38 15.261 38 18.95c0 .693 5.948 1.05 17.5 1.05 11 0 17.5.371 17.5 1 0 .55.442 1 .983 1 1.197 0-2.361-6.595-5.331-9.882-4.381-4.849-12.96-7.191-19.295-5.268m1.004 16.9c.118 1.482-.999 1.827-7.282 2.25-4.668.314-7.575.964-7.834 1.75-.31.942 1.952 1.25 9.172 1.25C54 29 54 29 54 25.5c0-2.765-.397-3.5-1.889-3.5-1.185 0-1.837.652-1.75 1.75M56 25.5C56 29 56 29 66.083 29c7.62 0 9.983-.305 9.671-1.25-.263-.8-3.264-1.43-8.333-1.75-6.759-.427-7.901-.757-7.782-2.25.087-1.098-.565-1.75-1.75-1.75-1.492 0-1.889.735-1.889 3.5m-5.639 6.25c.119 1.493-1.023 1.823-7.782 2.25-5.069.32-8.07.95-8.333 1.75-.312.945 2.051 1.25 9.671 1.25C54 37 54 37 54 33.5c0-2.765-.397-3.5-1.889-3.5-1.185 0-1.837.652-1.75 1.75M56 33.5C56 37 56 37 66.583 37c8.02 0 10.484-.303 10.171-1.25-.268-.812-3.363-1.425-8.833-1.75-7.235-.43-8.401-.747-8.282-2.25.087-1.098-.565-1.75-1.75-1.75-1.492 0-1.889.735-1.889 3.5m-6.639 6.25c.117 1.468-.975 1.83-6.783 2.25-4.388.317-7.077.972-7.346 1.789-.331 1.003 1.645 1.225 8.922 1C53.5 44.5 53.5 44.5 53.813 41.25c.277-2.868.026-3.25-2.139-3.25-1.721 0-2.41.521-2.313 1.75m6.826 1.5c.313 3.25.313 3.25 10.159 3.537 7.678.224 9.752.004 9.421-1-.274-.831-3.052-1.464-7.846-1.787-6.283-.423-7.4-.768-7.282-2.25.097-1.229-.592-1.75-2.313-1.75-2.165 0-2.416.382-2.139 3.25m-29.004 12.5c.318 9.468.656 11.181 2.839 14.362 3.286 4.789 13.642 11.651 18.839 12.482C53 81.256 53 81.256 53 90.628S53 100 44 100c-8.333 0-9 .148-9 2 0 1.933.667 2 20 2s20-.067 20-2c0-1.852-.667-2-9-2-9 0-9 0-9-9.372s0-9.372 4.044-10.019c2.224-.356 5.025-1.201 6.226-1.878 4.081-2.302 13.231-10.02 12.962-10.932-.148-.5.415-1.884 1.25-3.076C83.667 61.602 83.683 43 81.5 43c-1.209 0-1.5 1.559-1.5 8.032 0 8.297-1.245 12.582-4.856 16.718-1.081 1.237-2.433 2.25-3.005 2.25-.572 0-1.399.563-1.839 1.25-.44.688-2.825 2.368-5.3 3.734-8.27 4.565-19.425 2.831-26.21-4.074-.941-.957-2.666-2.41-3.835-3.229-3.127-2.19-4.861-8.171-4.911-16.931-.036-6.396-.322-7.75-1.632-7.75-1.376 0-1.541 1.444-1.229 10.75m19.067-6.5c.169.843-1.443 1.348-4.947 1.55-5.197.301-5.197.301-4.609 5.5.324 2.86 1.399 6.818 2.388 8.795C41.288 67.499 47.37 73 50.035 73 51.773 73 52 72.297 52 66.908c0-4.578-.497-6.724-2-8.635-2.178-2.769-2.599-7.285-.965-10.339.866-1.618.702-1.934-1-1.934-1.119 0-1.923.563-1.785 1.25m14.715.684c1.634 3.054 1.213 7.57-.965 10.339-1.503 1.911-2 4.057-2 8.635 0 7.261 1.138 7.735 7.144 2.978 4.811-3.81 7.385-8.727 8.162-15.586.588-5.199.588-5.199-4.609-5.5-3.504-.202-5.116-.707-4.947-1.55.138-.687-.666-1.25-1.785-1.25-1.702 0-1.866.316-1 1.934", fill: "#6f6f6f", fillRule: "evenodd" }));
nn(Af);
const af = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwOCAxMDgiPjxwYXRoIGQ9Ik0zNyAyMWMwIC41ODggMy41IDEgOC41IDEgOC41IDAgOC41IDAgOC41IDMuNDYyIDAgMy40NjMgMCAzLjQ2My05LjI1IDMuNzkzLTkuMjUuMzMtOS4yNS4zMyAwIC41MzdDNTQgMzAgNTQgMzAgNTQgMzMuNDY0czAgMy40NjQtOS43NSAzLjc5Yy05Ljc1LjMyNy05Ljc1LjMyNy4wNjMuNTM3IDkuODE0LjIwOSA5LjgxNC4yMDkgOS41IDMuNDU5LS4zMTMgMy4yNS0uMzEzIDMuMjUtOS4zMTMgMy44MTEtOSAuNTYxLTkgLjU2MS0xLjcxNS43NSA2Ljg2Ny4xNzggNy4yMjYuMyA2LjI1IDIuMTIzLTEuNjIxIDMuMDMtMS4yMTkgNy41NjMuOTEzIDEwLjI3MyAxLjM0NCAxLjcwOCAyLjA2IDQuNDY0IDIuMzA3IDguODg1LjM2IDYuNDA4LjM2IDYuNDA4LjU1Mi4xNTguMTY5LTUuNDY3LjQzOC02LjI1IDIuMTQ1LTYuMjUgMS42OTEgMCAyIC44MzkgMi4zMDggNi4yNS4zNTUgNi4yNS4zNTUgNi4yNS41NDctLjA5Mi4xNDEtNC42MTYuNzM4LTcuMDM1IDIuMTkzLTguODg1IDIuMTc4LTIuNzY5IDIuNTk5LTcuMjg1Ljk2NS0xMC4zMzktLjk3OS0xLjgyOS0uNjExLTEuOTQ0IDYuNzUtMi4xMjUgNy43ODUtLjE5MiA3Ljc4NS0uMTkyLTEuNzE1LS43NS05LjUtLjU1OS05LjUtLjU1OS05LjgxMS0zLjc3My0uMzEtMy4yMTUtLjMxLTMuMjE1IDEwLTMuNTM5IDEwLjMxMS0uMzI1IDEwLjMxMS0uMzI1LjA2MS0uNTM2QzU2IDM3IDU2IDM3IDU2IDMzLjUzNnMwLTMuNDY0IDkuNzUtMy43OWM5Ljc1LS4zMjcgOS43NS0uMzI3IDAtLjUzN0M1NiAyOSA1NiAyOSA1NiAyNS41czAtMy41IDguNS0zLjVjNSAwIDguNS0uNDEyIDguNS0xIDAtLjYzLTYuNjY3LTEtMTgtMXMtMTggLjM3LTE4IDEiIGZpbGw9IiNlYzFjMjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik00OS4yNDMgNS44NWMtNC4wNzggMS4xNzUtOS4yNTkgNi4xOTMtMTEuNzczIDExLjQwM0MzNi4xMTIgMjAuMDcgMzUgMjIuNTE1IDM1IDIyLjY4N2MwIC4xNzIgMy4zNzUuMzEzIDcuNS4zMTMgNC4zMzMgMCA3LjUuNDIyIDcuNSAxIDAgLjU3LTIuOTU5IDEtNi44NzggMS00Ljg5MyAwLTcuMjM2LjQzMy04LjEyMiAxLjUtMi4zOTQgMi44ODUuNTIgNC41IDguMTIyIDQuNSAzLjkxOSAwIDYuODc4LjQzIDYuODc4IDEgMCAuNTc2LTMuMTI2IDEtNy4zNzggMS01LjMzNyAwLTcuNzIxLjQxNS04LjYyMiAxLjUtMi4zOTQgMi44ODUuNTIgNC41IDguMTIyIDQuNSAzLjkxOSAwIDYuODc4LjQzIDYuODc4IDEgMCAuNTYyLTIuNzkzIDEtNi4zNzggMS00LjQ0OSAwLTYuNzU0LjQ1NC03LjYyMiAxLjUtMi4xMSAyLjU0Mi41MzUgNC40NzcgNi4zNzIgNC42NjMgNS4xMjguMTYzIDUuMTI4LjE2My0uMzcyLjc1cy01LjUuNTg3LTUuMTQ2IDYuNDI0Yy4zODMgNi4zMDQgMS4zMTggOC43MDYgNS4xNjQgMTMuMjY2QzQ0LjU5IDcxLjgzNyA0OC4wNCA3NCA1MS4yMjMgNzQgNTQgNzQgNTQgNzQgNTMuODA3IDY3LjI1Yy0uMTkyLTYuNzUtLjE5Mi02Ljc1LS41NDctLjUtLjMzMiA1Ljg0NS0uNTEyIDYuMjUtMi43NzMgNi4yNS0zLjA1NiAwLTkuMDUzLTUuMjA5LTExLjQwNS05LjkwNS0uOTg5LTEuOTc3LTIuMDY0LTUuOTM1LTIuMzg4LTguNzk1LS41ODgtNS4xOTktLjU4OC01LjE5OSA0LjYwOS01LjUgNi44NS0uMzk2IDYuNjU5LTIuMTY3LS4zMDMtMi44LTQtLjM2NC01LjUtLjkwOS01LjUtMiAwLTEuMTQzIDEuNjY3LTEuNjE5IDctMnM3LS44NTcgNy0yYzAtMS4xNTYtMS43MjItMS42MTUtNy41LTItNS43NzgtLjM4NS03LjUtLjg0NC03LjUtMiAwLTEuMTY3IDEuNzc4LTEuNjExIDgtMiA2LjIyMi0uMzg5IDgtLjgzMyA4LTIgMC0xLjE1Ni0xLjcyMi0xLjYxNS03LjUtMi01Ljc3OC0uMzg1LTcuNS0uODQ0LTcuNS0yIDAtMS4xNTYgMS43MjItMS42MTUgNy41LTIgNS43NzgtLjM4NSA3LjUtLjg0NCA3LjUtMiAwLTEuMTY2LTEuNTg5LTEuNTY1LTcuMTM5LTEuNzkyLTcuMTM5LS4yOTEtNy4xMzktLjI5MS01LjE2My00LjUgNy4yMzgtMTUuNDE1IDI2LjIyMy0xNS4zMzggMzQuNDg1LjE0IDIuMTczIDQuMDcgMi4xNzMgNC4wNy01LjUwNSA0LjM2MS02LjAyOS4yMjktNy42NzguNjEzLTcuNjc4IDEuNzkxIDAgMS4xNjcgMS43NzggMS42MTEgOCAyIDYuMjIyLjM4OSA4IC44MzMgOCAycy0xLjc3OCAxLjYxMS04IDJjLTYuMjIyLjM4OS04IC44MzMtOCAyIDAgMS4xNzYgMS44MzMgMS42MDggOC41IDIgNi42NjcuMzkyIDguNS44MjQgOC41IDIgMCAxLjE2Ny0xLjc3OCAxLjYxMS04IDItNi4yMjIuMzg5LTggLjgzMy04IDIgMCAxLjE1NiAxLjcyMiAxLjYxNSA3LjUgMiA1Ljc3OC4zODUgNy41Ljg0NCA3LjUgMiAwIDEuMTAyLTEuNTMgMS42MzMtNS43NjkgMi03LjI2Ni42My03LjkyMSAyLjQwMi0xLjAzNCAyLjggNS4xOTcuMzAxIDUuMTk3LjMwMSA0LjYwOSA1LjUtLjMyNCAyLjg2LTEuNDA4IDYuODM2LTIuNDEgOC44MzZDNjguNzU5IDY3LjQwNSA2Mi4wOTggNzMgNTkuMTU0IDczYy0xLjgyMSAwLTIuMS0uNzIzLTIuNDE0LTYuMjUtLjM1NS02LjI1LS4zNTUtNi4yNS0uNTQ3LjUtLjE5IDYuNjQ5LS4xNTQgNi43NSAyLjQwMyA2Ljc1IDIuNDYxIDAgNy4wNzYtMi42NjIgMTAuMzktNS45OTUgMi41MTEtMi41MjQgNC45MTUtOS4yMDEgNS4yMjMtMTQuNTA1LjI5MS01IC4yOTEtNS01LjIwOS01LjU4Ny01LjUtLjU4Ny01LjUtLjU4Ny4xMjgtLjc1IDYuMzM1LS4xODMgOS4wNTctMi4wMyA2Ljg3Mi00LjY2My0uODg2LTEuMDY3LTMuMjI5LTEuNS04LjEyMi0xLjVDNjMuOTU5IDQxIDYxIDQwLjU3IDYxIDQwYzAtLjU3NiAzLjEyNi0xIDcuMzc4LTEgOC4xMDcgMCAxMS4wNzItMS41NDggOC42MjItNC41LS45MTQtMS4xMDEtMy4zNC0xLjUtOS4xMjItMS41QzYzLjI5MyAzMyA2MCAzMi41ODIgNjAgMzJjMC0uNTc2IDMuMTI2LTEgNy4zNzgtMSA4LjEwNyAwIDExLjA3Mi0xLjU0OCA4LjYyMi00LjUtLjkwMS0xLjA4NS0zLjI4NS0xLjUtOC42MjItMS41QzYzLjEyNiAyNSA2MCAyNC41NzYgNjAgMjRjMC0uNTc2IDMuMTExLTEgNy4zMzMtMSA0LjAzNCAwIDcuNjAyLS4yNjggNy45MjktLjU5Ni44MDctLjgwNi0yLjgzNy03LjIzOS02LjEwNi0xMC43OC00Ljk2Ny01LjM3OS0xMy4wOTktNy43MzgtMTkuOTEzLTUuNzc0TTI2LjQwMiA0My4zOTRjLS4zMjUuODQ4LS40MzQgNS45NDQtLjI0MSAxMS4zMjQuMzEyIDguNzEyLjY1MiAxMC4yMjcgMy4xMDcgMTMuODQ5IDMuNTAxIDUuMTY4IDEzLjY4OCAxMi4yNDIgMTguODA1IDEzLjA2MUM1MiA4Mi4yNTYgNTIgODIuMjU2IDUyIDkwLjU4OXMwIDguMzMzLTguNzUgOC42MjJjLTguNTkuMjg0LTguNzUuMzM1LTguNzUgMi43ODkgMCAyLjUgMCAyLjUgMjAuNSAyLjVzMjAuNSAwIDIwLjUtMi41YzAtMi40NTQtLjE2LTIuNTA1LTguNzUtMi43ODktOC43NS0uMjg5LTguNzUtLjI4OS04Ljc1LTguNzUgMC03LjgzOS4xNDktOC40NjEgMi4wMzItOC40NjEgMi42OTUgMCA5LjQ0Ny0yLjg1NSA4LjY0Ni0zLjY1Ni0uMzQ2LS4zNDYtMS4yMjUtLjEzNS0xLjk1My40Ny0uNzI5LjYwNC0zLjIxNCAxLjQwMS01LjUyNSAxLjc3LTQuMi42NzItNC4yLjY3Mi00LjIgMTAuMDQ0UzU3IDEwMCA2NiAxMDBjOC4zMzMgMCA5IC4xNDggOSAyIDAgMS45MzMtLjY2NyAyLTIwIDJzLTIwLS4wNjctMjAtMmMwLTEuODUyLjY2Ny0yIDktMiA5IDAgOSAwIDktOS4zNzJzMC05LjM3Mi00LjEzOS0xMC4wMzRjLTUuMTk3LS44MzEtMTUuNTUzLTcuNjkzLTE4LjgzOS0xMi40ODItMi4xODMtMy4xODEtMi41MjEtNC44OTQtMi44MzktMTQuMzYyLS4zMTItOS4zMDYtLjE0Ny0xMC43NSAxLjIyOS0xMC43NSAxLjMxIDAgMS41OTYgMS4zNTQgMS42MzIgNy43NS4wNSA4Ljc2IDEuNzg0IDE0Ljc0MSA0LjkxMSAxNi45MzEgMS4xNjkuODE5IDIuODk0IDIuMjcyIDMuODM1IDMuMjI5IDYuNzg1IDYuOTA1IDE3Ljk0IDguNjM5IDI2LjIxIDQuMDc0IDIuNDc1LTEuMzY2IDQuODYtMy4wNDYgNS4zLTMuNzM0LjQ0LS42ODcgMS4yNjctMS4yNSAxLjgzOS0xLjI1LjU3MiAwIDEuOTI0LTEuMDEzIDMuMDA1LTIuMjVDNzguNzU1IDYzLjYxNCA4MCA1OS4zMjkgODAgNTEuMDMyYzAtNi40NzMuMjkxLTguMDMyIDEuNS04LjAzMiAyLjI0NyAwIDIuMTYgMTguNjEzLS4xMDIgMjEuODQyLS44ODEgMS4yNTgtMS4zNjQgMi41MjUtMS4wNzQgMi44MTYuMjkxLjI5IDEuMjUzLS44NzMgMi4xMzgtMi41ODUgMS4yMjgtMi4zNzQgMS41NDItNS40MjEgMS4zMjQtMTIuODQzLS4yNjQtOC45NjgtLjQ0My05LjczLTIuMjg2LTkuNzMtMS44MDkgMC0yLjA1Ni44NjItMi41ODUgOS0uNzEgMTAuOTE5LTEuNjM4IDEzLjM0LTYuNTg0IDE3LjE3Mi0xMi44NTYgOS45Ni0xOS43OTggMTAuNTItMzEuMjYgMi41MTgtOC40MzEtNS44ODUtOS4zMzMtNy41OS05Ljk5Ny0xOC45MDQtLjQ4NC04LjI0MS0uODQ4LTkuODE3LTIuMzI3LTEwLjA5OS0uOTY0LS4xODQtMi4wMTkuMzU5LTIuMzQ1IDEuMjA3TTc0IDc0Yy0yLjQ3NSAyLjE2Ny0zLjkyMyAzLjk1NC0zLjIxOSAzLjk3LjcwNS4wMTcgMS41NDEtLjY0NSAxLjg1Ny0xLjQ3LjMxNy0uODI1IDEuMDM4LTEuNSAxLjYwMi0xLjUuOTEgMCA0Ljc2LTMuNzY0IDQuNzYtNC42NTMgMC0uNjUyLS41MDQtLjI4NC01IDMuNjUzIiBmaWxsPSIjMDQwNDA0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNNDkuMzU3IDYuODVDNDQuNTE2IDguMzE5IDM4IDE1LjI2MSAzOCAxOC45NWMwIC42OTMgNS45NDggMS4wNSAxNy41IDEuMDUgMTEgMCAxNy41LjM3MSAxNy41IDEgMCAuNTUuNDQyIDEgLjk4MyAxIDEuMTk3IDAtMi4zNjEtNi41OTUtNS4zMzEtOS44ODItNC4zODEtNC44NDktMTIuOTYtNy4xOTEtMTkuMjk1LTUuMjY4bTEuMDA0IDE2LjljLjExOCAxLjQ4Mi0uOTk5IDEuODI3LTcuMjgyIDIuMjUtNC42NjguMzE0LTcuNTc1Ljk2NC03LjgzNCAxLjc1LS4zMS45NDIgMS45NTIgMS4yNSA5LjE3MiAxLjI1QzU0IDI5IDU0IDI5IDU0IDI1LjVjMC0yLjc2NS0uMzk3LTMuNS0xLjg4OS0zLjUtMS4xODUgMC0xLjgzNy42NTItMS43NSAxLjc1TTU2IDI1LjVDNTYgMjkgNTYgMjkgNjYuMDgzIDI5YzcuNjIgMCA5Ljk4My0uMzA1IDkuNjcxLTEuMjUtLjI2My0uOC0zLjI2NC0xLjQzLTguMzMzLTEuNzUtNi43NTktLjQyNy03LjkwMS0uNzU3LTcuNzgyLTIuMjUuMDg3LTEuMDk4LS41NjUtMS43NS0xLjc1LTEuNzUtMS40OTIgMC0xLjg4OS43MzUtMS44ODkgMy41bS01LjYzOSA2LjI1Yy4xMTkgMS40OTMtMS4wMjMgMS44MjMtNy43ODIgMi4yNS01LjA2OS4zMi04LjA3Ljk1LTguMzMzIDEuNzUtLjMxMi45NDUgMi4wNTEgMS4yNSA5LjY3MSAxLjI1QzU0IDM3IDU0IDM3IDU0IDMzLjVjMC0yLjc2NS0uMzk3LTMuNS0xLjg4OS0zLjUtMS4xODUgMC0xLjgzNy42NTItMS43NSAxLjc1TTU2IDMzLjVDNTYgMzcgNTYgMzcgNjYuNTgzIDM3YzguMDIgMCAxMC40ODQtLjMwMyAxMC4xNzEtMS4yNS0uMjY4LS44MTItMy4zNjMtMS40MjUtOC44MzMtMS43NS03LjIzNS0uNDMtOC40MDEtLjc0Ny04LjI4Mi0yLjI1LjA4Ny0xLjA5OC0uNTY1LTEuNzUtMS43NS0xLjc1LTEuNDkyIDAtMS44ODkuNzM1LTEuODg5IDMuNW0tNi42MzkgNi4yNWMuMTE3IDEuNDY4LS45NzUgMS44My02Ljc4MyAyLjI1LTQuMzg4LjMxNy03LjA3Ny45NzItNy4zNDYgMS43ODktLjMzMSAxLjAwMyAxLjY0NSAxLjIyNSA4LjkyMiAxQzUzLjUgNDQuNSA1My41IDQ0LjUgNTMuODEzIDQxLjI1Yy4yNzctMi44NjguMDI2LTMuMjUtMi4xMzktMy4yNS0xLjcyMSAwLTIuNDEuNTIxLTIuMzEzIDEuNzVtNi44MjYgMS41Yy4zMTMgMy4yNS4zMTMgMy4yNSAxMC4xNTkgMy41MzcgNy42NzguMjI0IDkuNzUyLjAwNCA5LjQyMS0xLS4yNzQtLjgzMS0zLjA1Mi0xLjQ2NC03Ljg0Ni0xLjc4Ny02LjI4My0uNDIzLTcuNC0uNzY4LTcuMjgyLTIuMjUuMDk3LTEuMjI5LS41OTItMS43NS0yLjMxMy0xLjc1LTIuMTY1IDAtMi40MTYuMzgyLTIuMTM5IDMuMjVtLTI5LjAwNCAxMi41Yy4zMTggOS40NjguNjU2IDExLjE4MSAyLjgzOSAxNC4zNjIgMy4yODYgNC43ODkgMTMuNjQyIDExLjY1MSAxOC44MzkgMTIuNDgyQzUzIDgxLjI1NiA1MyA4MS4yNTYgNTMgOTAuNjI4UzUzIDEwMCA0NCAxMDBjLTguMzMzIDAtOSAuMTQ4LTkgMiAwIDEuOTMzLjY2NyAyIDIwIDJzMjAtLjA2NyAyMC0yYzAtMS44NTItLjY2Ny0yLTktMi05IDAtOSAwLTktOS4zNzJzMC05LjM3MiA0LjA0NC0xMC4wMTljMi4yMjQtLjM1NiA1LjAyNS0xLjIwMSA2LjIyNi0xLjg3OCA0LjA4MS0yLjMwMiAxMy4yMzEtMTAuMDIgMTIuOTYyLTEwLjkzMi0uMTQ4LS41LjQxNS0xLjg4NCAxLjI1LTMuMDc2QzgzLjY2NyA2MS42MDIgODMuNjgzIDQzIDgxLjUgNDNjLTEuMjA5IDAtMS41IDEuNTU5LTEuNSA4LjAzMiAwIDguMjk3LTEuMjQ1IDEyLjU4Mi00Ljg1NiAxNi43MTgtMS4wODEgMS4yMzctMi40MzMgMi4yNS0zLjAwNSAyLjI1LS41NzIgMC0xLjM5OS41NjMtMS44MzkgMS4yNS0uNDQuNjg4LTIuODI1IDIuMzY4LTUuMyAzLjczNC04LjI3IDQuNTY1LTE5LjQyNSAyLjgzMS0yNi4yMS00LjA3NC0uOTQxLS45NTctMi42NjYtMi40MS0zLjgzNS0zLjIyOS0zLjEyNy0yLjE5LTQuODYxLTguMTcxLTQuOTExLTE2LjkzMS0uMDM2LTYuMzk2LS4zMjItNy43NS0xLjYzMi03Ljc1LTEuMzc2IDAtMS41NDEgMS40NDQtMS4yMjkgMTAuNzVtMTkuMDY3LTYuNWMuMTY5Ljg0My0xLjQ0MyAxLjM0OC00Ljk0NyAxLjU1LTUuMTk3LjMwMS01LjE5Ny4zMDEtNC42MDkgNS41LjMyNCAyLjg2IDEuMzk5IDYuODE4IDIuMzg4IDguNzk1QzQxLjI4OCA2Ny40OTkgNDcuMzcgNzMgNTAuMDM1IDczIDUxLjc3MyA3MyA1MiA3Mi4yOTcgNTIgNjYuOTA4YzAtNC41NzgtLjQ5Ny02LjcyNC0yLTguNjM1LTIuMTc4LTIuNzY5LTIuNTk5LTcuMjg1LS45NjUtMTAuMzM5Ljg2Ni0xLjYxOC43MDItMS45MzQtMS0xLjkzNC0xLjExOSAwLTEuOTIzLjU2My0xLjc4NSAxLjI1bTE0LjcxNS42ODRjMS42MzQgMy4wNTQgMS4yMTMgNy41Ny0uOTY1IDEwLjMzOS0xLjUwMyAxLjkxMS0yIDQuMDU3LTIgOC42MzUgMCA3LjI2MSAxLjEzOCA3LjczNSA3LjE0NCAyLjk3OCA0LjgxMS0zLjgxIDcuMzg1LTguNzI3IDguMTYyLTE1LjU4Ni41ODgtNS4xOTkuNTg4LTUuMTk5LTQuNjA5LTUuNS0zLjUwNC0uMjAyLTUuMTE2LS43MDctNC45NDctMS41NS4xMzgtLjY4Ny0uNjY2LTEuMjUtMS43ODUtMS4yNS0xLjcwMiAwLTEuODY2LjMxNi0xIDEuOTM0IiBmaWxsPSIjNmY2ZjZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", uf = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 128, height: 128, viewBox: "0 0 128 128", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "", stroke: "none", fill: "#888484", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M 50.275 13.539 C 27.688 19.622, 12 39.895, 12 63 C 12 91.033, 34.967 114, 63 114 C 95.918 114, 120.734 82.274, 112.511 50.703 C 105.357 23.236, 77.044 6.329, 50.275 13.539 M 52 21.360 C 33.022 26.527, 20.049 43.433, 20.049 63 C 20.049 86.859, 39.141 105.951, 63 105.951 C 90.669 105.951, 111.168 80.127, 104.940 53.115 C 101.406 37.784, 88.216 24.594, 72.885 21.060 C 67.044 19.713, 57.548 19.850, 52 21.360 M 40.455 42.455 C 38.907 44.002, 38 46.052, 38 48 C 38 49.948, 38.907 51.998, 40.455 53.545 C 42.002 55.093, 44.052 56, 46 56 C 52.991 56, 56.506 47.415, 51.545 42.455 C 49.998 40.907, 47.948 40, 46 40 C 44.052 40, 42.002 40.907, 40.455 42.455 M 74.455 42.455 C 72.907 44.002, 72 46.052, 72 48 C 72 49.948, 72.907 51.998, 74.455 53.545 C 79.415 58.506, 88 54.991, 88 48 C 88 43.889, 84.111 40, 80 40 C 78.052 40, 76.002 40.907, 74.455 42.455 M 31 73.335 C 31 76.979, 37.548 87.731, 40.260 88.540 C 41.492 88.908, 43.625 89.934, 45 90.821 C 49.563 93.764, 58.427 96.337, 64 96.337 C 69.573 96.337, 78.437 93.764, 83 90.821 C 84.375 89.934, 86.508 88.908, 87.740 88.540 C 90.452 87.731, 97 76.979, 97 73.335 C 97 70.929, 96.778 70.817, 93.250 71.439 C 91.188 71.804, 88.703 73.091, 87.730 74.301 C 86.756 75.510, 85.151 77.458, 84.162 78.630 C 79.558 84.087, 67.346 87.091, 57.791 85.118 C 54.376 84.412, 50.244 83.143, 48.608 82.297 C 45.814 80.853, 44.630 79.717, 40.270 74.301 C 39.297 73.091, 36.813 71.804, 34.750 71.439 C 31.222 70.817, 31 70.929, 31 73.335", stroke: "none", fill: "#848484", fillRule: "evenodd" }));
nn(uf);
const sf = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgdmVyc2lvbj0iMS4xIj48cGF0aCBkPSIiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzg4ODQ4NCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTSA1MC4yNzUgMTMuNTM5IEMgMjcuNjg4IDE5LjYyMiwgMTIgMzkuODk1LCAxMiA2MyBDIDEyIDkxLjAzMywgMzQuOTY3IDExNCwgNjMgMTE0IEMgOTUuOTE4IDExNCwgMTIwLjczNCA4Mi4yNzQsIDExMi41MTEgNTAuNzAzIEMgMTA1LjM1NyAyMy4yMzYsIDc3LjA0NCA2LjMyOSwgNTAuMjc1IDEzLjUzOSBNIDUyIDIxLjM2MCBDIDMzLjAyMiAyNi41MjcsIDIwLjA0OSA0My40MzMsIDIwLjA0OSA2MyBDIDIwLjA0OSA4Ni44NTksIDM5LjE0MSAxMDUuOTUxLCA2MyAxMDUuOTUxIEMgOTAuNjY5IDEwNS45NTEsIDExMS4xNjggODAuMTI3LCAxMDQuOTQwIDUzLjExNSBDIDEwMS40MDYgMzcuNzg0LCA4OC4yMTYgMjQuNTk0LCA3Mi44ODUgMjEuMDYwIEMgNjcuMDQ0IDE5LjcxMywgNTcuNTQ4IDE5Ljg1MCwgNTIgMjEuMzYwIE0gNDAuNDU1IDQyLjQ1NSBDIDM4LjkwNyA0NC4wMDIsIDM4IDQ2LjA1MiwgMzggNDggQyAzOCA0OS45NDgsIDM4LjkwNyA1MS45OTgsIDQwLjQ1NSA1My41NDUgQyA0Mi4wMDIgNTUuMDkzLCA0NC4wNTIgNTYsIDQ2IDU2IEMgNTIuOTkxIDU2LCA1Ni41MDYgNDcuNDE1LCA1MS41NDUgNDIuNDU1IEMgNDkuOTk4IDQwLjkwNywgNDcuOTQ4IDQwLCA0NiA0MCBDIDQ0LjA1MiA0MCwgNDIuMDAyIDQwLjkwNywgNDAuNDU1IDQyLjQ1NSBNIDc0LjQ1NSA0Mi40NTUgQyA3Mi45MDcgNDQuMDAyLCA3MiA0Ni4wNTIsIDcyIDQ4IEMgNzIgNDkuOTQ4LCA3Mi45MDcgNTEuOTk4LCA3NC40NTUgNTMuNTQ1IEMgNzkuNDE1IDU4LjUwNiwgODggNTQuOTkxLCA4OCA0OCBDIDg4IDQzLjg4OSwgODQuMTExIDQwLCA4MCA0MCBDIDc4LjA1MiA0MCwgNzYuMDAyIDQwLjkwNywgNzQuNDU1IDQyLjQ1NSBNIDMxIDczLjMzNSBDIDMxIDc2Ljk3OSwgMzcuNTQ4IDg3LjczMSwgNDAuMjYwIDg4LjU0MCBDIDQxLjQ5MiA4OC45MDgsIDQzLjYyNSA4OS45MzQsIDQ1IDkwLjgyMSBDIDQ5LjU2MyA5My43NjQsIDU4LjQyNyA5Ni4zMzcsIDY0IDk2LjMzNyBDIDY5LjU3MyA5Ni4zMzcsIDc4LjQzNyA5My43NjQsIDgzIDkwLjgyMSBDIDg0LjM3NSA4OS45MzQsIDg2LjUwOCA4OC45MDgsIDg3Ljc0MCA4OC41NDAgQyA5MC40NTIgODcuNzMxLCA5NyA3Ni45NzksIDk3IDczLjMzNSBDIDk3IDcwLjkyOSwgOTYuNzc4IDcwLjgxNywgOTMuMjUwIDcxLjQzOSBDIDkxLjE4OCA3MS44MDQsIDg4LjcwMyA3My4wOTEsIDg3LjczMCA3NC4zMDEgQyA4Ni43NTYgNzUuNTEwLCA4NS4xNTEgNzcuNDU4LCA4NC4xNjIgNzguNjMwIEMgNzkuNTU4IDg0LjA4NywgNjcuMzQ2IDg3LjA5MSwgNTcuNzkxIDg1LjExOCBDIDU0LjM3NiA4NC40MTIsIDUwLjI0NCA4My4xNDMsIDQ4LjYwOCA4Mi4yOTcgQyA0NS44MTQgODAuODUzLCA0NC42MzAgNzkuNzE3LCA0MC4yNzAgNzQuMzAxIEMgMzkuMjk3IDczLjA5MSwgMzYuODEzIDcxLjgwNCwgMzQuNzUwIDcxLjQzOSBDIDMxLjIyMiA3MC44MTcsIDMxIDcwLjkyOSwgMzEgNzMuMzM1IiBzdHJva2U9Im5vbmUiIGZpbGw9IiM4NDg0ODQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==", lf = (s, a) => /* @__PURE__ */ Te.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 120 120", ref: a, ...s }, /* @__PURE__ */ Te.createElement("path", { d: "M35.741 27.792 22 41.66v37.68l13.741 13.868c9.876 9.966 14.307 13.787 15.75 13.58 1.979-.284 2.009-.985 2.009-46.288s-.03-46.004-2.009-46.288c-1.443-.207-5.874 3.614-15.75 13.58m.461.541L23 41.666v37.668l13.202 13.333C43.464 100 50.214 106 51.202 106 52.906 106 53 103.627 53 60.5S52.906 15 51.202 15c-.988 0-7.738 6-15 13.333M80.75 19.08c-2.769 1.613-2.083 2.885 2.7 5.001C92.116 27.914 105 48.743 105 58.919c0 1.42-.657 5.507-1.461 9.081-3.453 15.36-7.504 21.868-16.246 26.1-4.832 2.339-5.02 2.781-2.501 5.892 1.673 2.066 2.088 2.131 6.25.985 8.291-2.284 10.812-3.916 14.303-9.258 8.58-13.13 10.985-34.891 5.335-48.288-3.62-8.585-13.078-19.938-19.126-22.96-5.314-2.655-8.033-3.005-10.804-1.391m.5.582c-2.201.889-1.351 2.08 2.616 3.668 2.424.97 5.424 3.527 8.045 6.858 2.298 2.922 4.721 5.987 5.384 6.812C101.629 42.397 106 53.383 106 58.881c0 3.585-2.516 14.488-4.836 20.955-2.245 6.255-7.571 12.265-13.15 14.837-4.438 2.046-4.54 2.225-2.706 4.734 1.164 1.592 1.796 1.656 5.75.581 5.145-1.399 9.018-3.064 10.442-4.488 2.582-2.582 6.427-9.478 7.806-14 4.502-14.76 4.629-27.979.365-38.09-6.248-14.815-20.677-26.872-28.421-23.748m-9 13.461c-.687.703-1.25 2.687-1.25 4.409 0 2.512.735 3.612 3.706 5.55C80.401 46.798 82.5 51.22 82.5 59.5s-2.099 12.702-7.794 16.418C71.532 77.988 71 78.867 71 82.045c0 10.639 12.361 6.19 18.184-6.545 1.922-4.204 2.284-6.672 2.276-15.5-.012-12.018-2.078-18.299-7.861-23.904-3.636-3.524-9.345-5.019-11.349-2.973m.5.456c-.412.415-.733 2.142-.711 3.838.029 2.355.788 3.556 3.212 5.083 11.534 7.267 11.514 26.802-.035 34-2.839 1.77-3.18 2.46-2.962 6 .243 3.947.296 3.998 4.055 3.881 4.792-.15 8.678-3.677 11.843-10.749 1.925-4.299 2.297-6.835 2.297-15.632 0-11.737-2.082-18.358-7.365-23.42-2.764-2.648-8.911-4.433-10.334-3.001m-14.083 9.088c-1.368 1.367-.6 5.267 1.299 6.597 6.61 4.63 6.577 17.866-.057 22.512-3.115 2.182-2.228 6.63 1.404 7.047 2.146.246 3.582-.492 6.05-3.109 7.461-7.911 7.494-22.482.068-30.356-2.962-3.14-7.057-4.398-8.764-2.691M59 45.465c0 1.384.82 2.903 1.87 3.465C63.451 50.312 66 56.06 66 60.5s-2.549 10.188-5.13 11.57c-1.05.562-1.87 2.081-1.87 3.465 0 3.589 4.375 3.345 7.912-.441 6.703-7.175 6.703-22.013 0-29.188C63.375 42.12 59 41.876 59 45.465m-51.925 3.82C3.315 54.264 3 55.167 3 60.952c0 5.887.253 6.572 4.137 11.211 3.727 4.452 4.494 4.911 7.75 4.639L18.5 76.5v-32l-3.675-.306c-3.408-.284-3.972.087-7.75 5.091m.51.599C4.383 54.247 4 55.429 4 60.966c0 5.642.325 6.593 3.62 10.616 2.982 3.638 4.217 4.418 7 4.418H18V45h-3.415c-2.931 0-3.923.692-7 4.884", fill: "#fcec3c", fillRule: "evenodd" }), /* @__PURE__ */ Te.createElement("path", { d: "M36.202 28.333 23 41.666v37.668l13.202 13.333C43.464 100 50.214 106 51.202 106 52.906 106 53 103.627 53 60.5S52.906 15 51.202 15c-.988 0-7.738 6-15 13.333m45.048-8.671c-2.201.889-1.351 2.08 2.616 3.668 2.424.97 5.424 3.527 8.045 6.858 2.298 2.922 4.721 5.987 5.384 6.812C101.629 42.397 106 53.383 106 58.881c0 3.585-2.516 14.488-4.836 20.955-2.245 6.255-7.571 12.265-13.15 14.837-4.438 2.046-4.54 2.225-2.706 4.734 1.164 1.592 1.796 1.656 5.75.581 5.145-1.399 9.018-3.064 10.442-4.488 2.582-2.582 6.427-9.478 7.806-14 4.502-14.76 4.629-27.979.365-38.09-6.248-14.815-20.677-26.872-28.421-23.748m-8.5 13.917c-.412.415-.733 2.142-.711 3.838.029 2.355.788 3.556 3.212 5.083 11.534 7.267 11.514 26.802-.035 34-2.839 1.77-3.18 2.46-2.962 6 .243 3.947.296 3.998 4.055 3.881 4.792-.15 8.678-3.677 11.843-10.749 1.925-4.299 2.297-6.835 2.297-15.632 0-11.737-2.082-18.358-7.365-23.42-2.764-2.648-8.911-4.433-10.334-3.001M59 45.465c0 1.384.82 2.903 1.87 3.465C63.451 50.312 66 56.06 66 60.5s-2.549 10.188-5.13 11.57c-1.05.562-1.87 2.081-1.87 3.465 0 3.589 4.375 3.345 7.912-.441 6.703-7.175 6.703-22.013 0-29.188C63.375 42.12 59 41.876 59 45.465M7.585 49.884C4.383 54.247 4 55.429 4 60.966c0 5.642.325 6.593 3.62 10.616 2.982 3.638 4.217 4.418 7 4.418H18V45h-3.415c-2.931 0-3.923.692-7 4.884", fill: "#fcec3c", fillRule: "evenodd" }));
nn(lf);
const cf = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyMCAxMjAiPjxwYXRoIGQ9Ik0zNS43NDEgMjcuNzkyIDIyIDQxLjY2djM3LjY4bDEzLjc0MSAxMy44NjhjOS44NzYgOS45NjYgMTQuMzA3IDEzLjc4NyAxNS43NSAxMy41OCAxLjk3OS0uMjg0IDIuMDA5LS45ODUgMi4wMDktNDYuMjg4cy0uMDMtNDYuMDA0LTIuMDA5LTQ2LjI4OGMtMS40NDMtLjIwNy01Ljg3NCAzLjYxNC0xNS43NSAxMy41OG0uNDYxLjU0MUwyMyA0MS42NjZ2MzcuNjY4bDEzLjIwMiAxMy4zMzNDNDMuNDY0IDEwMCA1MC4yMTQgMTA2IDUxLjIwMiAxMDYgNTIuOTA2IDEwNiA1MyAxMDMuNjI3IDUzIDYwLjVTNTIuOTA2IDE1IDUxLjIwMiAxNWMtLjk4OCAwLTcuNzM4IDYtMTUgMTMuMzMzTTgwLjc1IDE5LjA4Yy0yLjc2OSAxLjYxMy0yLjA4MyAyLjg4NSAyLjcgNS4wMDFDOTIuMTE2IDI3LjkxNCAxMDUgNDguNzQzIDEwNSA1OC45MTljMCAxLjQyLS42NTcgNS41MDctMS40NjEgOS4wODEtMy40NTMgMTUuMzYtNy41MDQgMjEuODY4LTE2LjI0NiAyNi4xLTQuODMyIDIuMzM5LTUuMDIgMi43ODEtMi41MDEgNS44OTIgMS42NzMgMi4wNjYgMi4wODggMi4xMzEgNi4yNS45ODUgOC4yOTEtMi4yODQgMTAuODEyLTMuOTE2IDE0LjMwMy05LjI1OCA4LjU4LTEzLjEzIDEwLjk4NS0zNC44OTEgNS4zMzUtNDguMjg4LTMuNjItOC41ODUtMTMuMDc4LTE5LjkzOC0xOS4xMjYtMjIuOTYtNS4zMTQtMi42NTUtOC4wMzMtMy4wMDUtMTAuODA0LTEuMzkxbS41LjU4MmMtMi4yMDEuODg5LTEuMzUxIDIuMDggMi42MTYgMy42NjggMi40MjQuOTcgNS40MjQgMy41MjcgOC4wNDUgNi44NTggMi4yOTggMi45MjIgNC43MjEgNS45ODcgNS4zODQgNi44MTJDMTAxLjYyOSA0Mi4zOTcgMTA2IDUzLjM4MyAxMDYgNTguODgxYzAgMy41ODUtMi41MTYgMTQuNDg4LTQuODM2IDIwLjk1NS0yLjI0NSA2LjI1NS03LjU3MSAxMi4yNjUtMTMuMTUgMTQuODM3LTQuNDM4IDIuMDQ2LTQuNTQgMi4yMjUtMi43MDYgNC43MzQgMS4xNjQgMS41OTIgMS43OTYgMS42NTYgNS43NS41ODEgNS4xNDUtMS4zOTkgOS4wMTgtMy4wNjQgMTAuNDQyLTQuNDg4IDIuNTgyLTIuNTgyIDYuNDI3LTkuNDc4IDcuODA2LTE0IDQuNTAyLTE0Ljc2IDQuNjI5LTI3Ljk3OS4zNjUtMzguMDktNi4yNDgtMTQuODE1LTIwLjY3Ny0yNi44NzItMjguNDIxLTIzLjc0OG0tOSAxMy40NjFjLS42ODcuNzAzLTEuMjUgMi42ODctMS4yNSA0LjQwOSAwIDIuNTEyLjczNSAzLjYxMiAzLjcwNiA1LjU1QzgwLjQwMSA0Ni43OTggODIuNSA1MS4yMiA4Mi41IDU5LjVzLTIuMDk5IDEyLjcwMi03Ljc5NCAxNi40MThDNzEuNTMyIDc3Ljk4OCA3MSA3OC44NjcgNzEgODIuMDQ1YzAgMTAuNjM5IDEyLjM2MSA2LjE5IDE4LjE4NC02LjU0NSAxLjkyMi00LjIwNCAyLjI4NC02LjY3MiAyLjI3Ni0xNS41LS4wMTItMTIuMDE4LTIuMDc4LTE4LjI5OS03Ljg2MS0yMy45MDQtMy42MzYtMy41MjQtOS4zNDUtNS4wMTktMTEuMzQ5LTIuOTczbS41LjQ1NmMtLjQxMi40MTUtLjczMyAyLjE0Mi0uNzExIDMuODM4LjAyOSAyLjM1NS43ODggMy41NTYgMy4yMTIgNS4wODMgMTEuNTM0IDcuMjY3IDExLjUxNCAyNi44MDItLjAzNSAzNC0yLjgzOSAxLjc3LTMuMTggMi40Ni0yLjk2MiA2IC4yNDMgMy45NDcuMjk2IDMuOTk4IDQuMDU1IDMuODgxIDQuNzkyLS4xNSA4LjY3OC0zLjY3NyAxMS44NDMtMTAuNzQ5IDEuOTI1LTQuMjk5IDIuMjk3LTYuODM1IDIuMjk3LTE1LjYzMiAwLTExLjczNy0yLjA4Mi0xOC4zNTgtNy4zNjUtMjMuNDItMi43NjQtMi42NDgtOC45MTEtNC40MzMtMTAuMzM0LTMuMDAxbS0xNC4wODMgOS4wODhjLTEuMzY4IDEuMzY3LS42IDUuMjY3IDEuMjk5IDYuNTk3IDYuNjEgNC42MyA2LjU3NyAxNy44NjYtLjA1NyAyMi41MTItMy4xMTUgMi4xODItMi4yMjggNi42MyAxLjQwNCA3LjA0NyAyLjE0Ni4yNDYgMy41ODItLjQ5MiA2LjA1LTMuMTA5IDcuNDYxLTcuOTExIDcuNDk0LTIyLjQ4Mi4wNjgtMzAuMzU2LTIuOTYyLTMuMTQtNy4wNTctNC4zOTgtOC43NjQtMi42OTFNNTkgNDUuNDY1YzAgMS4zODQuODIgMi45MDMgMS44NyAzLjQ2NUM2My40NTEgNTAuMzEyIDY2IDU2LjA2IDY2IDYwLjVzLTIuNTQ5IDEwLjE4OC01LjEzIDExLjU3Yy0xLjA1LjU2Mi0xLjg3IDIuMDgxLTEuODcgMy40NjUgMCAzLjU4OSA0LjM3NSAzLjM0NSA3LjkxMi0uNDQxIDYuNzAzLTcuMTc1IDYuNzAzLTIyLjAxMyAwLTI5LjE4OEM2My4zNzUgNDIuMTIgNTkgNDEuODc2IDU5IDQ1LjQ2NW0tNTEuOTI1IDMuODJDMy4zMTUgNTQuMjY0IDMgNTUuMTY3IDMgNjAuOTUyYzAgNS44ODcuMjUzIDYuNTcyIDQuMTM3IDExLjIxMSAzLjcyNyA0LjQ1MiA0LjQ5NCA0LjkxMSA3Ljc1IDQuNjM5TDE4LjUgNzYuNXYtMzJsLTMuNjc1LS4zMDZjLTMuNDA4LS4yODQtMy45NzIuMDg3LTcuNzUgNS4wOTFtLjUxLjU5OUM0LjM4MyA1NC4yNDcgNCA1NS40MjkgNCA2MC45NjZjMCA1LjY0Mi4zMjUgNi41OTMgMy42MiAxMC42MTYgMi45ODIgMy42MzggNC4yMTcgNC40MTggNyA0LjQxOEgxOFY0NWgtMy40MTVjLTIuOTMxIDAtMy45MjMuNjkyLTcgNC44ODQiIGZpbGw9IiNmY2VjM2MiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0zNi4yMDIgMjguMzMzIDIzIDQxLjY2NnYzNy42NjhsMTMuMjAyIDEzLjMzM0M0My40NjQgMTAwIDUwLjIxNCAxMDYgNTEuMjAyIDEwNiA1Mi45MDYgMTA2IDUzIDEwMy42MjcgNTMgNjAuNVM1Mi45MDYgMTUgNTEuMjAyIDE1Yy0uOTg4IDAtNy43MzggNi0xNSAxMy4zMzNtNDUuMDQ4LTguNjcxYy0yLjIwMS44ODktMS4zNTEgMi4wOCAyLjYxNiAzLjY2OCAyLjQyNC45NyA1LjQyNCAzLjUyNyA4LjA0NSA2Ljg1OCAyLjI5OCAyLjkyMiA0LjcyMSA1Ljk4NyA1LjM4NCA2LjgxMkMxMDEuNjI5IDQyLjM5NyAxMDYgNTMuMzgzIDEwNiA1OC44ODFjMCAzLjU4NS0yLjUxNiAxNC40ODgtNC44MzYgMjAuOTU1LTIuMjQ1IDYuMjU1LTcuNTcxIDEyLjI2NS0xMy4xNSAxNC44MzctNC40MzggMi4wNDYtNC41NCAyLjIyNS0yLjcwNiA0LjczNCAxLjE2NCAxLjU5MiAxLjc5NiAxLjY1NiA1Ljc1LjU4MSA1LjE0NS0xLjM5OSA5LjAxOC0zLjA2NCAxMC40NDItNC40ODggMi41ODItMi41ODIgNi40MjctOS40NzggNy44MDYtMTQgNC41MDItMTQuNzYgNC42MjktMjcuOTc5LjM2NS0zOC4wOS02LjI0OC0xNC44MTUtMjAuNjc3LTI2Ljg3Mi0yOC40MjEtMjMuNzQ4bS04LjUgMTMuOTE3Yy0uNDEyLjQxNS0uNzMzIDIuMTQyLS43MTEgMy44MzguMDI5IDIuMzU1Ljc4OCAzLjU1NiAzLjIxMiA1LjA4MyAxMS41MzQgNy4yNjcgMTEuNTE0IDI2LjgwMi0uMDM1IDM0LTIuODM5IDEuNzctMy4xOCAyLjQ2LTIuOTYyIDYgLjI0MyAzLjk0Ny4yOTYgMy45OTggNC4wNTUgMy44ODEgNC43OTItLjE1IDguNjc4LTMuNjc3IDExLjg0My0xMC43NDkgMS45MjUtNC4yOTkgMi4yOTctNi44MzUgMi4yOTctMTUuNjMyIDAtMTEuNzM3LTIuMDgyLTE4LjM1OC03LjM2NS0yMy40Mi0yLjc2NC0yLjY0OC04LjkxMS00LjQzMy0xMC4zMzQtMy4wMDFNNTkgNDUuNDY1YzAgMS4zODQuODIgMi45MDMgMS44NyAzLjQ2NUM2My40NTEgNTAuMzEyIDY2IDU2LjA2IDY2IDYwLjVzLTIuNTQ5IDEwLjE4OC01LjEzIDExLjU3Yy0xLjA1LjU2Mi0xLjg3IDIuMDgxLTEuODcgMy40NjUgMCAzLjU4OSA0LjM3NSAzLjM0NSA3LjkxMi0uNDQxIDYuNzAzLTcuMTc1IDYuNzAzLTIyLjAxMyAwLTI5LjE4OEM2My4zNzUgNDIuMTIgNTkgNDEuODc2IDU5IDQ1LjQ2NU03LjU4NSA0OS44ODRDNC4zODMgNTQuMjQ3IDQgNTUuNDI5IDQgNjAuOTY2YzAgNS42NDIuMzI1IDYuNTkzIDMuNjIgMTAuNjE2IDIuOTgyIDMuNjM4IDQuMjE3IDQuNDE4IDcgNC40MThIMThWNDVoLTMuNDE1Yy0yLjkzMSAwLTMuOTIzLjY5Mi03IDQuODg0IiBmaWxsPSIjZmNlYzNjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", ff = "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//", df = (s, a) => /* @__PURE__ */ Te.createElement("svg", { width: 38, height: 38, viewBox: "0 0 38 38", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: a, ...s }, /* @__PURE__ */ Te.createElement("g", { filter: "url(#filter0_d_4487_43367)" }, /* @__PURE__ */ Te.createElement("circle", { cx: 19, cy: 16, r: 13, transform: "rotate(-180 19 16)", fill: "#444546" })), /* @__PURE__ */ Te.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4219 10.5483C15.1481 10.2647 14.9966 9.88489 15.0001 9.49063C15.0035 9.09637 15.1616 8.71922 15.4403 8.44042C15.719 8.16162 16.096 8.00348 16.4901 8.00006C16.8842 7.99663 17.2639 8.1482 17.5474 8.42211L23.5599 14.4369C23.8417 14.7189 24 15.1013 24 15.5C24 15.8987 23.8417 16.2811 23.5599 16.5631L17.5474 22.5779C17.2639 22.8518 16.8842 23.0034 16.4901 22.9999C16.096 22.9965 15.719 22.8384 15.4403 22.5596C15.1616 22.2808 15.0035 21.9036 15.0001 21.5094C14.9966 21.1151 15.1481 20.7353 15.4219 20.4517L20.3718 15.5L15.4219 10.5483Z", fill: "#F0F0F0" }), /* @__PURE__ */ Te.createElement("defs", null, /* @__PURE__ */ Te.createElement("filter", { id: "filter0_d_4487_43367", x: 0, y: 0, width: 38, height: 38, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ Te.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ Te.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ Te.createElement("feOffset", { dy: 3 }), /* @__PURE__ */ Te.createElement("feGaussianBlur", { stdDeviation: 3 }), /* @__PURE__ */ Te.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ Te.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }), /* @__PURE__ */ Te.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_4487_43367" }), /* @__PURE__ */ Te.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_4487_43367", result: "shape" }))));
nn(df);
const gf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80NDg3XzQzMzY3KSI+CjxjaXJjbGUgY3g9IjE5IiBjeT0iMTYiIHI9IjEzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDE5IDE2KSIgZmlsbD0iIzQ0NDU0NiIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuNDIxOSAxMC41NDgzQzE1LjE0ODEgMTAuMjY0NyAxNC45OTY2IDkuODg0ODkgMTUuMDAwMSA5LjQ5MDYzQzE1LjAwMzUgOS4wOTYzNyAxNS4xNjE2IDguNzE5MjIgMTUuNDQwMyA4LjQ0MDQyQzE1LjcxOSA4LjE2MTYyIDE2LjA5NiA4LjAwMzQ4IDE2LjQ5MDEgOC4wMDAwNkMxNi44ODQyIDcuOTk2NjMgMTcuMjYzOSA4LjE0ODIgMTcuNTQ3NCA4LjQyMjExTDIzLjU1OTkgMTQuNDM2OUMyMy44NDE3IDE0LjcxODkgMjQgMTUuMTAxMyAyNCAxNS41QzI0IDE1Ljg5ODcgMjMuODQxNyAxNi4yODExIDIzLjU1OTkgMTYuNTYzMUwxNy41NDc0IDIyLjU3NzlDMTcuMjYzOSAyMi44NTE4IDE2Ljg4NDIgMjMuMDAzNCAxNi40OTAxIDIyLjk5OTlDMTYuMDk2IDIyLjk5NjUgMTUuNzE5IDIyLjgzODQgMTUuNDQwMyAyMi41NTk2QzE1LjE2MTYgMjIuMjgwOCAxNS4wMDM1IDIxLjkwMzYgMTUuMDAwMSAyMS41MDk0QzE0Ljk5NjYgMjEuMTE1MSAxNS4xNDgxIDIwLjczNTMgMTUuNDIxOSAyMC40NTE3TDIwLjM3MTggMTUuNUwxNS40MjE5IDEwLjU0ODNaIiBmaWxsPSIjRjBGMEYwIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDQ4N180MzM2NyIgeD0iMCIgeT0iMCIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjMiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ0ODdfNDMzNjciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDQ4N180MzM2NyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K", Mf = (s, a) => /* @__PURE__ */ Te.createElement("svg", { width: 38, height: 38, viewBox: "0 0 38 38", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: a, ...s }, /* @__PURE__ */ Te.createElement("g", { filter: "url(#filter0_d_4294_40549)" }, /* @__PURE__ */ Te.createElement("circle", { cx: 19, cy: 16, r: 13, fill: "#444546" })), /* @__PURE__ */ Te.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.5781 21.4517C22.8519 21.7353 23.0034 22.1151 22.9999 22.5094C22.9965 22.9036 22.8384 23.2808 22.5597 23.5596C22.281 23.8384 21.904 23.9965 21.5099 23.9999C21.1158 24.0034 20.7361 23.8518 20.4526 23.5779L14.4401 17.5631C14.1583 17.2811 14 16.8987 14 16.5C14 16.1013 14.1583 15.7189 14.4401 15.4369L20.4526 9.42211C20.7361 9.14819 21.1158 8.99663 21.5099 9.00006C21.904 9.00348 22.281 9.16162 22.5597 9.44042C22.8384 9.71922 22.9965 10.0964 22.9999 10.4906C23.0034 10.8849 22.8519 11.2647 22.5781 11.5483L17.6282 16.5L22.5781 21.4517Z", fill: "#F0F0F0" }), /* @__PURE__ */ Te.createElement("defs", null, /* @__PURE__ */ Te.createElement("filter", { id: "filter0_d_4294_40549", x: 0, y: 0, width: 38, height: 38, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ Te.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ Te.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ Te.createElement("feOffset", { dy: 3 }), /* @__PURE__ */ Te.createElement("feGaussianBlur", { stdDeviation: 3 }), /* @__PURE__ */ Te.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ Te.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }), /* @__PURE__ */ Te.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_4294_40549" }), /* @__PURE__ */ Te.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_4294_40549", result: "shape" }))));
nn(Mf);
const pf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80Mjk0XzQwNTQ5KSI+CjxjaXJjbGUgY3g9IjE5IiBjeT0iMTYiIHI9IjEzIiBmaWxsPSIjNDQ0NTQ2Ii8+CjwvZz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi41NzgxIDIxLjQ1MTdDMjIuODUxOSAyMS43MzUzIDIzLjAwMzQgMjIuMTE1MSAyMi45OTk5IDIyLjUwOTRDMjIuOTk2NSAyMi45MDM2IDIyLjgzODQgMjMuMjgwOCAyMi41NTk3IDIzLjU1OTZDMjIuMjgxIDIzLjgzODQgMjEuOTA0IDIzLjk5NjUgMjEuNTA5OSAyMy45OTk5QzIxLjExNTggMjQuMDAzNCAyMC43MzYxIDIzLjg1MTggMjAuNDUyNiAyMy41Nzc5TDE0LjQ0MDEgMTcuNTYzMUMxNC4xNTgzIDE3LjI4MTEgMTQgMTYuODk4NyAxNCAxNi41QzE0IDE2LjEwMTMgMTQuMTU4MyAxNS43MTg5IDE0LjQ0MDEgMTUuNDM2OUwyMC40NTI2IDkuNDIyMTFDMjAuNzM2MSA5LjE0ODE5IDIxLjExNTggOC45OTY2MyAyMS41MDk5IDkuMDAwMDZDMjEuOTA0IDkuMDAzNDggMjIuMjgxIDkuMTYxNjIgMjIuNTU5NyA5LjQ0MDQyQzIyLjgzODQgOS43MTkyMiAyMi45OTY1IDEwLjA5NjQgMjIuOTk5OSAxMC40OTA2QzIzLjAwMzQgMTAuODg0OSAyMi44NTE5IDExLjI2NDcgMjIuNTc4MSAxMS41NDgzTDE3LjYyODIgMTYuNUwyMi41NzgxIDIxLjQ1MTdaIiBmaWxsPSIjRjBGMEYwIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDI5NF80MDU0OSIgeD0iMCIgeT0iMCIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjMiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQyOTRfNDA1NDkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDI5NF80MDU0OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K", ls = {
  // tracks state of chat window, also the default state to load it in
  isOpen: !1,
  isOpenDrawer: !1,
  // configurations
  theme: {
    primaryColor: "#42b0c5",
    secondaryColor: "#491d8d",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    showHeader: !0,
    showFooter: !0,
    showInputRow: !0,
    actionDisabledIcon: Vc,
    embedded: !1,
    desktopEnabled: !0,
    mobileEnabled: !0
  },
  tooltip: {
    mode: "CLOSE",
    text: "Talk to me! 😊"
  },
  chatButton: {
    icon: Kc
  },
  header: {
    title: /* @__PURE__ */ Z.jsx("h3", { style: { cursor: "pointer", margin: 0 }, onClick: () => window.open("https://github.com/tjtanjin/"), children: "Tan Jin" }),
    showAvatar: !0,
    avatar: bs,
    closeChatIcon: rf,
    drawerOpenIcon: gf,
    drawerCloseIcon: pf
  },
  notification: {
    disabled: !1,
    defaultToggledOn: !0,
    volume: 0.2,
    icon: ef,
    sound: ff,
    showCount: !0
  },
  audio: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
    rate: 1,
    volume: 1,
    icon: cf
  },
  chatHistory: {
    disabled: !1,
    maxEntries: 30,
    storageKey: "rcb-history",
    viewChatHistoryButtonText: "Load Chat History ⟳",
    chatHistoryLineBreakText: "----- Previous Chat History -----",
    autoLoad: !1
  },
  chatInput: {
    disabled: !1,
    allowNewline: !1,
    enabledPlaceholderText: "Type your message...",
    disabledPlaceholderText: "",
    showCharacterCount: !1,
    characterLimit: -1,
    botDelay: 1e3,
    sendButtonIcon: of,
    blockSpam: !0,
    sendOptionOutput: !0,
    sendCheckboxOutput: !0,
    sendAttachmentOutput: !0
  },
  chatWindow: {
    showScrollbar: !1,
    autoJumpToBottom: !1,
    showMessagePrompt: !0,
    messagePromptText: "New Messages ↓",
    messagePromptOffset: 30
  },
  sensitiveInput: {
    maskInTextArea: !0,
    maskInUserBubble: !0,
    asterisksCount: 10,
    hideInUserBubble: !1
  },
  userBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Xc,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  botBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: bs,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  voice: {
    disabled: !0,
    defaultToggledOn: !1,
    timeoutPeriod: 1e4,
    autoSendDisabled: !1,
    autoSendPeriod: 1e3,
    icon: af
  },
  footer: {
    text: /* @__PURE__ */ Z.jsxs(
      "div",
      {
        style: { cursor: "pointer" },
        onClick: () => window.open("https://react-chatbotify.tjtanjin.com"),
        children: [
          /* @__PURE__ */ Z.jsx("span", { children: "Powered By " }),
          /* @__PURE__ */ Z.jsxs("span", { style: { fontWeight: "bold" }, children: [
            /* @__PURE__ */ Z.jsx("img", { style: { width: 10, height: 10 }, src: Zc }),
            /* @__PURE__ */ Z.jsx("span", { children: " React ChatBotify" })
          ] })
        ]
      }
    )
  },
  fileAttachment: {
    disabled: !1,
    multiple: !0,
    accept: ".png",
    icon: _c
  },
  emoji: {
    disabled: !1,
    icon: sf,
    list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
  },
  advance: {
    useCustomMessages: !1,
    useCustomBotOptions: !1,
    useCustomPaths: !1
  },
  // styles
  tooltipStyle: {},
  chatButtonStyle: {},
  notificationBadgeStyle: {},
  chatWindowStyle: {},
  headerStyle: {},
  bodyStyle: {},
  chatInputContainerStyle: {},
  chatInputAreaStyle: {},
  chatInputAreaFocusedStyle: {},
  chatInputAreaDisabledStyle: {},
  userBubbleStyle: {},
  botBubbleStyle: {},
  botOptionStyle: {},
  botOptionHoveredStyle: {},
  botCheckboxRowStyle: {},
  botCheckboxNextStyle: {},
  botCheckMarkStyle: {},
  botCheckMarkSelectedStyle: {},
  sendButtonStyle: {},
  sendButtonHoveredStyle: {},
  characterLimitStyle: {},
  characterLimitReachedStyle: {},
  chatHistoryButtonStyle: {},
  chatHistoryButtonHoveredStyle: {},
  chatHistoryLineBreakStyle: {},
  chatMessagePromptStyle: {},
  chatMessagePromptHoveredStyle: {},
  footerStyle: {},
  loadingSpinnerStyle: {}
}, If = () => ls, hf = (s) => {
  var a, M;
  return s ? (((a = s.chatInput) == null ? void 0 : a.botDelay) != null && ((M = s.chatInput) == null ? void 0 : M.botDelay) < 500 && (s.chatInput.botDelay = 500), yf(s)) : ls;
}, yf = (s) => {
  const a = { ...ls };
  for (const M in s)
    typeof s[M] == "object" && s[M] !== null ? a[M] = { ...a[M], ...s[M] } : a[M] = s[M];
  return a;
}, wf = ({
  flow: s,
  options: a
}) => {
  var re;
  const [M, D] = it(hf(a)), [l, E] = it([]), [b, x] = it(["start"]), L = s ?? Ml, T = (Ae) => /* @__PURE__ */ Z.jsx(ks.Provider, { value: { botOptions: M, setBotOptions: D }, children: Ae }), R = (Ae) => /* @__PURE__ */ Z.jsx(Qs.Provider, { value: { paths: b, setPaths: x }, children: Ae }), k = (Ae) => /* @__PURE__ */ Z.jsx(Os.Provider, { value: { messages: l, setMessages: E }, children: Ae }), ee = () => {
    var W, O, G;
    let Ae = /* @__PURE__ */ Z.jsx(Wc, { flow: L });
    return (W = M.advance) != null && W.useCustomMessages || (Ae = k(Ae)), (O = M.advance) != null && O.useCustomPaths || (Ae = R(Ae)), (G = M.advance) != null && G.useCustomBotOptions || (Ae = T(Ae)), Ae;
  }, fe = () => {
    var Ae, W;
    return Gr && ((Ae = M.theme) == null ? void 0 : Ae.desktopEnabled) || !Gr && ((W = M.theme) == null ? void 0 : W.mobileEnabled);
  };
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: fe() && /* @__PURE__ */ Z.jsx("div", { style: { fontFamily: (re = M.theme) == null ? void 0 : re.fontFamily }, children: ee() }) });
};
export {
  ks as BotOptionsContext,
  Os as MessagesContext,
  Qs as PathsContext,
  wf as default,
  If as getDefaultBotOptions
};
