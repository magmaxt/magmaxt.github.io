!function() {
    var t;
    Function && Function.prototype && Function.prototype.bind && (/MSIE [678]/.test(navigator.userAgent) || !function e(t, n, i) {
        function r(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c)
                        return c(s, !0);
                    if (o)
                        return o(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = n[s] = {
                    exports: {}
                };
                t[s][0].call(u.exports, function(e) {
                    var n = t[s][1][e];
                    return r(n ? n : e)
                }, u, u.exports, e, t, n, i)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
            r(i[s]);
        return r
    }({
        1: [function(e, n) {
            (function() {
                "use strict";
                function e(t) {
                    return "function" == typeof t || "object" == typeof t && null !== t
                }
                function i(t) {
                    return "function" == typeof t
                }
                function r(t) {
                    return "object" == typeof t && null !== t
                }
                function o() {}
                function s() {
                    return function() {
                        process.nextTick(u)
                    }
                }
                function a() {
                    var t = 0,
                        e = new H(u),
                        n = document.createTextNode("");
                    return e.observe(n, {
                        characterData: !0
                    }), function() {
                        n.data = t = ++t % 2
                    }
                }
                function c() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = u, function() {
                        t.port2.postMessage(0)
                    }
                }
                function l() {
                    return function() {
                        setTimeout(u, 1)
                    }
                }
                function u() {
                    for (var t = 0; O > t; t += 2) {
                        var e = U[t],
                            n = U[t + 1];
                        e(n), U[t] = void 0, U[t + 1] = void 0
                    }
                    O = 0
                }
                function h() {}
                function d() {
                    return new TypeError("You cannot resolve a promise with itself")
                }
                function f() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }
                function m(t) {
                    try {
                        return t.then
                    } catch (e) {
                        return B.error = e, B
                    }
                }
                function p(t, e, n, i) {
                    try {
                        t.call(e, n, i)
                    } catch (r) {
                        return r
                    }
                }
                function g(t, e, n) {
                    F(function(t) {
                        var i = !1,
                            r = p(n, e, function(n) {
                                i || (i = !0, e !== n ? y(t, n) : _(t, n))
                            }, function(e) {
                                i || (i = !0, T(t, e))
                            }, "Settle: " + (t._label || " unknown promise"));
                        !i && r && (i = !0, T(t, r))
                    }, t)
                }
                function w(t, e) {
                    e._state === z ? _(t, e._result) : t._state === K ? T(t, e._result) : A(e, void 0, function(e) {
                        y(t, e)
                    }, function(e) {
                        T(t, e)
                    })
                }
                function v(t, e) {
                    if (e.constructor === t.constructor)
                        w(t, e);
                    else {
                        var n = m(e);
                        n === B ? T(t, B.error) : void 0 === n ? _(t, e) : i(n) ? g(t, e, n) : _(t, e)
                    }
                }
                function y(t, n) {
                    t === n ? T(t, d()) : e(n) ? v(t, n) : _(t, n)
                }
                function b(t) {
                    t._onerror && t._onerror(t._result), E(t)
                }
                function _(t, e) {
                    t._state === q && (t._result = e, t._state = z, 0 === t._subscribers.length || F(E, t))
                }
                function T(t, e) {
                    t._state === q && (t._state = K, t._result = e, F(b, t))
                }
                function A(t, e, n, i) {
                    var r = t._subscribers,
                        o = r.length;
                    t._onerror = null, r[o] = e, r[o + z] = n, r[o + K] = i, 0 === o && t._state && F(E, t)
                }
                function E(t) {
                    var e = t._subscribers,
                        n = t._state;
                    if (0 !== e.length) {
                        for (var i, r, o = t._result, s = 0; s < e.length; s += 3)
                            i = e[s], r = e[s + n], i ? S(n, i, r, o) : r(o);
                        t._subscribers.length = 0
                    }
                }
                function x() {
                    this.error = null
                }
                function I(t, e) {
                    try {
                        return t(e)
                    } catch (n) {
                        return V.error = n, V
                    }
                }
                function S(t, e, n, r) {
                    var o,
                        s,
                        a,
                        c,
                        l = i(n);
                    if (l) {
                        if (o = I(n, r), o === V ? (c = !0, s = o.error, o = null) : a = !0, e === o)
                            return void T(e, f())
                    } else
                        o = r, a = !0;
                    e._state !== q || (l && a ? y(e, o) : c ? T(e, s) : t === z ? _(e, o) : t === K && T(e, o))
                }
                function N(t, e) {
                    try {
                        e(function(e) {
                            y(t, e)
                        }, function(e) {
                            T(t, e)
                        })
                    } catch (n) {
                        T(t, n)
                    }
                }
                function D(t, e, n, i) {
                    this._instanceConstructor = t, this.promise = new t(h, i), this._abortOnReject = n, this._validateInput(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._init(), 0 === this.length ? _(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && _(this.promise, this._result))) : T(this.promise, this._validationError())
                }
                function R() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }
                function k() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }
                function P(t) {
                    this._id = X++, this._state = void 0, this._result = void 0, this._subscribers = [], h !== t && (i(t) || R(), this instanceof P || k(), N(this, t))
                }
                var L;
                L = Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var C,
                    M = L,
                    O = (Date.now || function() {
                        return (new Date).getTime()
                    }, Object.create || function(t) {
                        if (arguments.length > 1)
                            throw new Error("Second argument not supported");
                        if ("object" != typeof t)
                            throw new TypeError("Argument must be an object");
                        return o.prototype = t, new o
                    }, 0),
                    F = function(t, e) {
                        U[O] = t, U[O + 1] = e, O += 2, 2 === O && C()
                    },
                    j = "undefined" != typeof window ? window : {},
                    H = j.MutationObserver || j.WebKitMutationObserver,
                    W = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    U = new Array(1e3);
                C = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? s() : H ? a() : W ? c() : l();
                var q = void 0,
                    z = 1,
                    K = 2,
                    B = new x,
                    V = new x;
                D.prototype._validateInput = function(t) {
                    return M(t)
                }, D.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, D.prototype._init = function() {
                    this._result = new Array(this.length)
                };
                var G = D;
                D.prototype._enumerate = function() {
                    for (var t = this.length, e = this.promise, n = this._input, i = 0; e._state === q && t > i; i++)
                        this._eachEntry(n[i], i)
                }, D.prototype._eachEntry = function(t, e) {
                    var n = this._instanceConstructor;
                    r(t) ? t.constructor === n && t._state !== q ? (t._onerror = null, this._settledAt(t._state, e, t._result)) : this._willSettleAt(n.resolve(t), e) : (this._remaining--, this._result[e] = this._makeResult(z, e, t))
                }, D.prototype._settledAt = function(t, e, n) {
                    var i = this.promise;
                    i._state === q && (this._remaining--, this._abortOnReject && t === K ? T(i, n) : this._result[e] = this._makeResult(t, e, n)), 0 === this._remaining && _(i, this._result)
                }, D.prototype._makeResult = function(t, e, n) {
                    return n
                }, D.prototype._willSettleAt = function(t, e) {
                    var n = this;
                    A(t, void 0, function(t) {
                        n._settledAt(z, e, t)
                    }, function(t) {
                        n._settledAt(K, e, t)
                    })
                };
                var $ = function(t, e) {
                        return new G(this, t, !0, e).promise
                    },
                    J = function(t, e) {
                        function n(t) {
                            y(o, t)
                        }
                        function i(t) {
                            T(o, t)
                        }
                        var r = this,
                            o = new r(h, e);
                        if (!M(t))
                            return T(o, new TypeError("You must pass an array to race.")), o;
                        for (var s = t.length, a = 0; o._state === q && s > a; a++)
                            A(r.resolve(t[a]), void 0, n, i);
                        return o
                    },
                    Y = function(t, e) {
                        var n = this;
                        if (t && "object" == typeof t && t.constructor === n)
                            return t;
                        var i = new n(h, e);
                        return y(i, t), i
                    },
                    Q = function(t, e) {
                        var n = this,
                            i = new n(h, e);
                        return T(i, t), i
                    },
                    X = 0,
                    Z = P;
                P.all = $, P.race = J, P.resolve = Y, P.reject = Q, P.prototype = {
                    constructor: P,
                    then: function(t, e) {
                        var n = this,
                            i = n._state;
                        if (i === z && !t || i === K && !e)
                            return this;
                        var r = new this.constructor(h),
                            o = n._result;
                        if (i) {
                            var s = arguments[i - 1];
                            F(function() {
                                S(i, r, s, o)
                            })
                        } else
                            A(n, r, t, e);
                        return r
                    },
                    "catch": function(t) {
                        return this.then(null, t)
                    }
                };
                var tt = function() {
                        var t;
                        t = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                        var e = "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function() {
                            var e;
                            return new t.Promise(function(t) {
                                e = t
                            }), i(e)
                        }();
                        e || (t.Promise = Z)
                    },
                    et = {
                        Promise: Z,
                        polyfill: tt
                    };
                "function" == typeof t && t.amd ? t(function() {
                    return et
                }) : "undefined" != typeof n && n.exports ? n.exports = et : "undefined" != typeof this && (this.ES6Promise = et)
            }).call(this)
        }, {}],
        2: [function(t, e) {
            function n(t, e) {
                var n;
                return e = e || o, (n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function() {
                    e.setTimeout(function() {
                        t(+new Date)
                    }, 1e3 / 60)
                })(t)
            }
            function i(t, e) {
                return Math.sin(Math.PI / 2 * e) * t
            }
            function r(t, e, i, r, o) {
                function s() {
                    var c = +new Date,
                        l = c - a,
                        u = Math.min(l / i, 1),
                        h = r ? r(e, u) : e * u,
                        d = 1 == u;
                    t(h, d), d || n(s, o)
                }
                var a = +new Date;
                n(s)
            }
            var o = t(14);
            e.exports = {
                animate: r,
                requestAnimationFrame: n,
                easeOut: i
            }
        }, {
            14: 14
        }],
        3: [function(t, e) {
            function n() {
                return c.builtUrl(u)
            }
            function i(t) {
                return "dark" === t ? "dark" : "light"
            }
            function r(t, e, n) {
                var r,
                    o;
                return n = i(n), r = a.isRtlLang(e) ? "rtl" : "ltr", o = [t, l.css, n, r, "css"].join("."), c.base() + "/css/" + o
            }
            function o(t) {
                return function() {
                    return s.isEnabled() ? t.apply(null, arguments) : n()
                }
            }
            var s = t(4),
                a = t(20),
                c = t(37),
                l = t(72),
                u = "embed/timeline.css";
            e.exports = {
                tweet: o(r.bind(null, "tweet")),
                timeline: n,
                video: o(r.bind(null, "video")),
                tweetRefresh: r.bind(null, "tweet")
            }
        }, {
            20: 20,
            37: 37,
            4: 4,
            72: 72
        }],
        4: [function(t, e) {
            function n() {
                return a.contains(r.location.hash, c)
            }
            function i() {
                return n() || s.asBoolean(o.val("widgets:new-embed-design"))
            }
            var r = t(14),
                o = t(17),
                s = t(66),
                a = t(69),
                c = "__twREFRESH__";
            e.exports = {
                isEnabled: i
            }
        }, {
            14: 14,
            17: 17,
            66: 66,
            69: 69
        }],
        5: [function(t, e) {
            function n(t) {
                return new RegExp("\\b" + t + "\\b", "g")
            }
            function i(t, e) {
                return t.classList ? void t.classList.add(e) : void (n(e).test(t.className) || (t.className += " " + e))
            }
            function r(t, e) {
                return t.classList ? void t.classList.remove(e) : void (t.className = t.className.replace(n(e), " "))
            }
            function o(t, e, n) {
                return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? i(t, e) : r(t, e), n)
            }
            function s(t, e, o) {
                return t.classList && a(t, e) ? (r(t, e), void i(t, o)) : void (t.className = t.className.replace(n(e), o))
            }
            function a(t, e) {
                return t.classList ? t.classList.contains(e) : n(e).test(t.className)
            }
            e.exports = {
                add: i,
                remove: r,
                replace: s,
                toggle: o,
                present: a
            }
        }, {}],
        6: [function(t, e) {
            function n(t) {
                var e = t.getAttribute("data-twitter-event-id");
                return e ? e : (t.setAttribute("data-twitter-event-id", ++m), m)
            }
            function i(t, e, n) {
                var i = 0,
                    r = t && t.length || 0;
                for (i = 0; r > i; i++)
                    t[i].call(e, n)
            }
            function r(t, e, n) {
                for (var o = n || t.target || t.srcElement, s = o.className.split(" "), a = 0, c = s.length; c > a; a++)
                    i(e["." + s[a]], o, t);
                i(e[o.tagName], o, t), t.cease || o !== this && r.call(this, t, e, o.parentElement || o.parentNode)
            }
            function o(t, e, n, i) {
                function o(i) {
                    r.call(t, i, n[e])
                }
                s(t, o, e, i), t.addEventListener(e, o, !1)
            }
            function s(t, e, n, i) {
                t.id && (p[t.id] = p[t.id] || [], p[t.id].push({
                    el: t,
                    listener: e,
                    type: n,
                    rootId: i
                }))
            }
            function a(t) {
                var e = p[t];
                e && (e.forEach(function(t) {
                    t.el.removeEventListener(t.type, t.listener, !1), delete f[t.rootId]
                }), delete p[t])
            }
            function c(t, e, i, r) {
                var s = n(t);
                f[s] = f[s] || {}, f[s][e] || (f[s][e] = {}, o(t, e, f[s], s)), f[s][e][i] = f[s][e][i] || [], f[s][e][i].push(r)
            }
            function l(t, e, i) {
                var o = n(e),
                    s = f[o] && f[o];
                r.call(e, {
                    target: i
                }, s[t])
            }
            function u(t) {
                return d(t), h(t), !1
            }
            function h(t) {
                t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
            }
            function d(t) {
                t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            }
            var f = {},
                m = -1,
                p = {};
            e.exports = {
                stop: u,
                stopPropagation: d,
                preventDefault: h,
                delegate: c,
                simulate: l,
                removeDelegatesForWidget: a
            }
        }, {}],
        7: [function(t, e) {
            function n(t) {
                var e = t.charAt(0);
                return "." === e ? function(e) {
                    var n = e.className ? e.className.split(/\s+/) : [];
                    return r.contains(n, t.slice(1))
                } : "#" === e ? function(e) {
                    return e.id === t.slice(1)
                } : function(e) {
                    return e.tagName === t.toUpperCase()
                }
            }
            function i(t, e, o) {
                var s;
                if (e)
                    return o = o || e && e.ownerDocument, s = r.isType("function", t) ? t : n(t), e === o ? s(e) ? e : void 0 : s(e) ? e : i(s, e.parentNode, o)
            }
            var r = t(69);
            e.exports = {
                closest: i
            }
        }, {
            69: 69
        }],
        8: [function(t, e) {
            function n(t) {
                return t = t || i, t.getSelection && t.getSelection().toString()
            }
            var i = t(14);
            e.exports = {
                getSelection: n
            }
        }, {
            14: 14
        }],
        9: [function(t, e) {
            function n(t) {
                return t && 1 === t.nodeType ? t.offsetWidth || n(t.parentNode) : 0
            }
            e.exports = {
                effectiveWidth: n
            }
        }, {}],
        10: [function(t, e) {
            function n(t, e, n) {
                for (var i, r = [], o = 0; i = n[o]; o++)
                    r.push(i[0]), r.push(i[1]);
                return t + e + r.join(":")
            }
            function i(t) {
                var e = t || "";
                return e.replace(/([A-Z])/g, function(t) {
                    return "-" + t.toLowerCase()
                })
            }
            var r = t(11),
                o = {};
            e.exports = function(t, e, s) {
                var a,
                    c = r.createElement("span"),
                    l = {},
                    u = "",
                    h = 0,
                    d = 0,
                    f = [];
                if (s = s || [], e = e || "", u = n(t, e, s), o[u])
                    return o[u];
                c.className = e + " twitter-measurement";
                try {
                    for (; a = s[h]; h++)
                        c.style[a[0]] = a[1]
                } catch (m) {
                    for (; a = s[d]; d++)
                        f.push(i(a[0]) + ":" + a[1]);
                    c.setAttribute("style", f.join(";") + ";")
                }
                return c.innerHTML = t, r.body.appendChild(c), l.width = c.clientWidth || c.offsetWidth, l.height = c.clientHeight || c.offsetHeight, r.body.removeChild(c), c = null, o[u] = l
            }
        }, {
            11: 11
        }],
        11: [function(t, e) {
            e.exports = document
        }, {}],
        12: [function(t, e) {
            e.exports = location
        }, {}],
        13: [function(t, e) {
            e.exports = navigator
        }, {}],
        14: [function(t, e) {
            e.exports = window
        }, {}],
        15: [function(t, e) {
            function n(t, e, n) {
                e.ready = t.then.bind(t), n && Array.isArray(e[n]) && (e[n].forEach(t.then.bind(t)), delete e[n])
            }
            e.exports = {
                exposeReadyPromise: n
            }
        }, {}],
        16: [function(t, e) {
            function n(t) {
                return s.isType("string", t) ? t.split(".") : s.isType("array", t) ? t : []
            }
            function i(t, e) {
                var i = n(e),
                    r = i.slice(0, -1);
                return r.reduce(function(t, e, n) {
                    if (t[e] = t[e] || {}, !s.isObject(t[e]))
                        throw new Error(r.slice(0, n + 1).join(".") + " is already defined with a value.");
                    return t[e]
                }, t)
            }
            function r(t, e) {
                e = e || o, e[t] = e[t] || {}, Object.defineProperty(this, "base", {
                    value: e[t]
                }), Object.defineProperty(this, "name", {
                    value: t
                })
            }
            var o = t(14),
                s = t(69);
            s.aug(r.prototype, {
                get: function(t) {
                    var e = n(t);
                    return e.reduce(function(t, e) {
                        return s.isObject(t) ? t[e] : void 0
                    }, this.base)
                },
                set: function(t, e, r) {
                    var o = n(t),
                        s = i(this.base, t),
                        a = o.slice(-1);
                    return r && a in s ? s[a] : s[a] = e
                },
                init: function(t, e) {
                    return this.set(t, e, !0)
                },
                unset: function(t) {
                    var e = n(t),
                        i = this.get(e.slice(0, -1));
                    i && delete i[e.slice(-1)]
                },
                aug: function(t) {
                    var e = this.get(t),
                        n = s.toRealArray(arguments).slice(1);
                    if (e = "undefined" != typeof e ? e : {}, n.unshift(e), !n.every(s.isObject))
                        throw new Error("Cannot augment non-object.");
                    return this.set(t, s.aug.apply(null, n))
                },
                call: function(t) {
                    var e = this.get(t),
                        n = s.toRealArray(arguments).slice(1);
                    if (!s.isType("function", e))
                        throw new Error("Function " + t + "does not exist.");
                    return e.apply(null, n)
                },
                fullPath: function(t) {
                    var e = n(t);
                    return e.unshift(this.name), e.join(".")
                }
            }), e.exports = r
        }, {
            14: 14,
            69: 69
        }],
        17: [function(t, e) {
            function n(t) {
                var e,
                    n,
                    i,
                    s = 0;
                for (r = {}, t = t || o, e = t.getElementsByTagName("meta"); n = e[s]; s++)
                    /^twitter:/.test(n.name) && (i = n.name.replace(/^twitter:/, ""), r[i] = n.content)
            }
            function i(t) {
                return r[t]
            }
            var r,
                o = t(11);
            n(), e.exports = {
                init: n,
                val: i
            }
        }, {
            11: 11
        }],
        18: [function(t, e) {
            var n = t(16);
            e.exports = new n("__twttr")
        }, {
            16: 16
        }],
        19: [function(t, e) {
            var n = t(16);
            e.exports = new n("twttr")
        }, {
            16: 16
        }],
        20: [function(t, e) {
            function n(t) {
                return t = String(t).toLowerCase(), i.contains(r, t)
            }
            var i = t(69),
                r = ["ar", "fa", "he", "ur"];
            e.exports = {
                isRtlLang: n
            }
        }, {
            69: 69
        }],
        21: [function(t, e) {
            function n(t) {
                var e = ~o.host.indexOf("poptip.com") ? "https://poptip.com" : o.href,
                    n = "original_referer=" + e;
                return [t, n].join(-1 == t.indexOf("?") ? "?" : "&")
            }
            function i(t) {
                var e,
                    i;
                t.altKey || t.metaKey || t.shiftKey || (e = a.closest(function(t) {
                    return "A" === t.tagName || "AREA" === t.tagName
                }, t.target), e && l.isIntentURL(e.href) && (i = n(e.href), i = i.replace(/^http[:]/, "https:"), i = i.replace(/^\/\//, "https://"), c.open(i, e), s.preventDefault(t)))
            }
            function r(t) {
                t.addEventListener("click", i, !1)
            }
            var o = t(12),
                s = t(6),
                a = t(7),
                c = t(45),
                l = t(65);
            e.exports = {
                attachTo: r
            }
        }, {
            12: 12,
            45: 45,
            6: 6,
            65: 65,
            7: 7
        }],
        22: [function(t, e) {
            function n(t) {
                var e = [];
                return h.forIn(t, function(t, n) {
                    e.push(t + "=" + n)
                }), e.join(",")
            }
            function i() {
                return d + u.generate()
            }
            function r(t, e) {
                function n(t) {
                    return Math.round(t / 2)
                }
                return t > e ? {
                    coordinate: 0,
                    size: e
                } : {
                    coordinate: n(e) - n(t),
                    size: t
                }
            }
            function o(t, e, i) {
                var o,
                    a;
                e = s.parse(e), i = i || {}, o = r(e.width, i.width || f), e.left = o.coordinate, e.width = o.size, a = r(e.height, i.height || m), e.top = a.coordinate, e.height = a.size, this.win = t, this.features = n(e)
            }
            var s,
                a = t(14),
                c = t(60),
                l = t(65),
                u = t(67),
                h = t(69),
                d = "intent_",
                f = a.screen.width,
                m = a.screen.height;
            s = (new c).defaults({
                width: 550,
                height: 520,
                personalbar: "0",
                toolbar: "0",
                location: "1",
                scrollbars: "1",
                resizable: "1"
            }), o.prototype.open = function(t) {
                return l.isTwitterURL(t) ? (this.name = i(), this.popup = this.win.open(t, this.name, this.features), this) : void 0
            }, o.open = function(t, e) {
                var n = new o(a, e);
                return n.open(t)
            }, e.exports = o
        }, {
            14: 14,
            60: 60,
            65: 65,
            67: 67,
            69: 69
        }],
        23: [function(t, e) {
            function n(t) {
                c[t] = +new Date
            }
            function i(t) {
                return c[t] ? +new Date - c[t] : null
            }
            function r(t, e, n, r, s) {
                var a = i(e);
                a && o(t, n, r, a, s)
            }
            function o(t, e, n, i, r) {
                var o,
                    c = void 0 === r ? l : r;
                100 * Math.random() > c || (n = a.aug(n || {}, {
                    duration_ms: i
                }), o = {
                    page: e,
                    component: "performance",
                    action: t
                }, s.clientEvent(o, n, !0))
            }
            var s = t(32),
                a = t(69),
                c = {},
                l = 1;
            e.exports = {
                start: n,
                end: i,
                track: o,
                endAndTrack: r
            }
        }, {
            32: 32,
            69: 69
        }],
        24: [function(t, e) {
            e.exports = {
                PARSE_ERROR: {
                    code: -32700,
                    message: "Parse error"
                },
                INVALID_REQUEST: {
                    code: -32600,
                    message: "Invalid Request"
                },
                INVALID_PARAMS: {
                    code: -32602,
                    message: "Invalid params"
                },
                METHOD_NOT_FOUND: {
                    code: -32601,
                    message: "Method not found"
                },
                INTERNAL_ERROR: {
                    code: -32603,
                    message: "Internal error"
                }
            }
        }, {}],
        25: [function(t, e) {
            function n(t) {
                this.registry = t || {}
            }
            function i(t) {
                return h.isType("string", t) ? JSON.parse(t) : t
            }
            function r(t) {
                var e,
                    n,
                    i;
                return h.isObject(t) ? (e = t.jsonrpc === f, n = h.isType("string", t.method), i = !("id" in t) || o(t.id), e && n && i) : !1
            }
            function o(t) {
                var e,
                    n,
                    i;
                return e = h.isType("string", t), n = h.isType("number", t), i = null === t, e || n || i
            }
            function s(t) {
                return h.isObject(t) && !h.isType("function", t)
            }
            function a(t, e) {
                return {
                    jsonrpc: f,
                    id: t,
                    result: e
                }
            }
            function c(t, e) {
                return {
                    jsonrpc: f,
                    id: o(t) ? t : null,
                    error: e
                }
            }
            function l(t) {
                return d.every.apply(d, t).then(function(t) {
                    return t = t.filter(function(t) {
                        return void 0 !== t
                    }), t.length ? t : void 0
                })
            }
            var u = t(24),
                h = t(69),
                d = t(62),
                f = "2.0";
            n.prototype._invoke = function(t, e) {
                var n,
                    i,
                    r;
                n = this.registry[t.method], i = t.params || [], i = h.isType("array", i) ? i : [i];
                try {
                    r = n.apply(e.source || null, i)
                } catch (o) {
                    r = d.reject(o.message)
                }
                return d.isThenable(r) ? r : d.fulfill(r)
            }, n.prototype._processRequest = function(t, e) {
                function n(e) {
                    return a(t.id, e)
                }
                function i() {
                    return c(t.id, u.INTERNAL_ERROR)
                }
                var o;
                return r(t) ? (o = "params" in t && !s(t.params) ? d.fulfill(c(t.id, u.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {
                    source: e
                }).then(n, i) : d.fulfill(c(t.id, u.METHOD_NOT_FOUND)), null != t.id ? o : d.fulfill()) : d.fulfill(c(t.id, u.INVALID_REQUEST))
            }, n.prototype.attachReceiver = function(t) {
                return t.attachTo(this), this
            }, n.prototype.bind = function(t, e) {
                return this.registry[t] = e, this
            }, n.prototype.receive = function(t, e) {
                var n,
                    r,
                    o,
                    s = this;
                try {
                    t = i(t)
                } catch (a) {
                    return d.fulfill(c(null, u.PARSE_ERROR))
                }
                return e = e || null, n = h.isType("array", t), r = n ? t : [t], o = r.map(function(t) {
                    return s._processRequest(t, e)
                }), n ? l(o) : o[0]
            }, e.exports = n
        }, {
            24: 24,
            62: 62,
            69: 69
        }],
        26: [function(t, e) {
            function n(t, e) {
                t && t.postMessage && (e = d ? JSON.stringify(e) : e, t.postMessage(e, "*"))
            }
            function i(t) {
                var e = t.document;
                this.server = null, this.isTwitterFrame = h.isTwitterURL(e.location.href), t.addEventListener("message", this._onMessage.bind(this), !1)
            }
            function r(t) {
                this.pending = {}, this.target = t, this.isTwitterHost = h.isTwitterURL(s.href), a.addEventListener("message", this._onMessage.bind(this), !1)
            }
            function o(t) {
                return arguments.length > 0 && (d = !!t), d
            }
            var s = t(12),
                a = t(14),
                c = t(55),
                l = t(69),
                u = t(62),
                h = t(65),
                d = c.ie9();
            l.aug(i.prototype, {
                _onMessage: function(t) {
                    this.server && (!this.isTwitterFrame || h.isTwitterURL(t.origin)) && this.server.receive(t.data, t.source).then(function(e) {
                        e && n(t.source, e)
                    })
                },
                attachTo: function(t) {
                    this.server = t
                },
                detach: function() {
                    this.server = null
                }
            }), l.aug(r.prototype, {
                _processResponse: function(t) {
                    var e = this.pending[t.id];
                    e && (e.fulfill(t), delete this.pending[t.id])
                },
                _onMessage: function(t) {
                    var e = t.data;
                    if (!this.isTwitterHost || h.isTwitterURL(t.origin)) {
                        if (l.isType("string", e))
                            try {
                                e = JSON.parse(e)
                            } catch (n) {
                                return
                            }
                        e = l.isType("array", e) ? e : [e], e.forEach(this._processResponse.bind(this))
                    }
                },
                send: function(t) {
                    var e,
                        i = this.pending;
                    return e = t.id ? new u(function(e) {
                        i[t.id] = e
                    }) : u.fulfill(), n(this.target, t), e
                }
            }), e.exports = {
                Receiver: i,
                Dispatcher: r,
                _stringifyPayload: o
            }
        }, {
            12: 12,
            14: 14,
            55: 55,
            62: 62,
            65: 65,
            69: 69
        }],
        27: [function(t, e) {
            function n(t, e, n, r) {
                var a,
                    c = this;
                this.readyPromise = new s(function(t) {
                    c.resolver = t
                }), this.attrs = t || {}, this.styles = e || {}, this.appender = n || function(t) {
                    i.body.appendChild(t)
                }, this.layout = r || function(t) {
                    return new s(function(e) {
                        return e.fulfill(t())
                    })
                }, this.frame = a = o(this.attrs, this.styles), a.onreadystatechange = a.onload = this.getCallback(this.onLoad), this.layout(function() {
                    c.appender(a)
                })
            }
            var i = t(11),
                r = t(55),
                o = t(57),
                s = t(62),
                a = t(18),
                c = 0;
            n.prototype.getCallback = function(t) {
                var e = this,
                    n = !1;
                return function() {
                    n || (n = !0, t.call(e))
                }
            }, n.prototype.registerCallback = function(t) {
                var e = "cb" + c++;
                return a.set(["sandbox", e], t), e
            }, n.prototype.onLoad = function() {
                try {
                    this.document = this.frame.contentWindow.document
                } catch (t) {
                    return void this.setDocDomain()
                }
                this.writeStandardsDoc(), this.resolver.fulfill(this)
            }, n.prototype.ready = function() {
                return this.readyPromise
            }, n.prototype.setDocDomain = function() {
                var t = this,
                    e = o(this.attrs, this.styles),
                    n = this.registerCallback(this.getCallback(this.onLoad));
                e.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", "catch (e) {", 'document.domain="' + i.domain + '";', "}", "window.parent." + a.fullPath(["sandbox", n]) + "();"].join(""), this.layout(function() {
                    t.frame.parentNode.removeChild(t.frame), t.frame = null, t.appender ? t.appender(e) : i.body.appendChild(e), t.frame = e
                })
            }, n.prototype.writeStandardsDoc = function() {
                if (r.anyIE() && !r.cspEnabled()) {
                    var t = ["<!DOCTYPE html>", "<html>", "<head>", "<scr", "ipt>", "try { window.parent.document; }", 'catch (e) {document.domain="' + i.domain + '";}', "</scr", "ipt>", "</head>", "<body></body>", "</html>"].join("");
                    this.document.write(t), this.document.close()
                }
            }, e.exports = n
        }, {
            11: 11,
            18: 18,
            55: 55,
            57: 57,
            62: 62
        }],
        28: [function(t, e) {
            function n() {
                var t,
                    e;
                w = {}, o || (t = s.body.offsetHeight, e = s.body.offsetWidth, (t != y || e != v) && (g.forEach(function(t) {
                    t.dispatchFrameResize(v, y)
                }), y = t, v = e))
            }
            function i(t) {
                var e;
                return t.id ? t.id : (e = t.getAttribute("data-twttr-id")) ? e : (e = "twttr-sandbox-" + p++, t.setAttribute("data-twttr-id", e), e)
            }
            function r(t, e) {
                var n = this;
                l.apply(this, [t, e]), this._resizeHandlers = [], g = g.filter(function(t) {
                    var e = t._frame.parentElement;
                    return e || d.async(function() {
                        f.removeDelegatesForWidget(t._frame.id)
                    }), e
                }), g.push(this), this._win.addEventListener("resize", function() {
                    n.dispatchFrameResize()
                }, !1)
            }
            var o,
                s = t(11),
                a = t(14),
                c = t(27),
                l = t(29),
                u = t(55),
                h = t(62),
                d = t(69),
                f = t(6),
                m = t(5),
                p = 0,
                g = [],
                w = {},
                v = 0,
                y = 0;
            a.addEventListener("resize", n, !1), r.prototype = new l, d.aug(r.prototype, {
                dispatchFrameResize: function() {
                    var t = this._frame.parentNode,
                        e = i(t),
                        n = w[e];
                    o = !0, this._resizeHandlers.length && (n || (n = w[e] = {
                        w: this._frame.offsetWidth,
                        h: this._frame.offsetHeight
                    }), (this._frameWidth != n.w || this._frameHeight != n.h) && (this._frameWidth = n.w, this._frameHeight = n.h, this._resizeHandlers.forEach(function(t) {
                        t(n.w, n.h)
                    }), a.setTimeout(function() {
                        w = {}
                    }, 50)))
                },
                addClass: function(t) {
                    var e = this._doc.documentElement;
                    return this.layout(function() {
                        m.add(e, t)
                    })
                },
                appendStyleSheet: function(t) {
                    var e = this,
                        n = this._doc.createElement("link");
                    return n.type = "text/css", n.rel = "stylesheet", n.href = t, this.layout(function() {
                        return e._head.appendChild(n)
                    })
                },
                removeStyleSheet: function(t) {
                    var e,
                        n = this;
                    return e = 'link[rel="stylesheet"][href="' + t + '"]', this.layout(function() {
                        var t = n._doc.querySelector(e);
                        return t && n._head.removeChild(t)
                    })
                },
                appendCss: function(t) {
                    var e,
                        n = this;
                    return u.cspEnabled() ? h.reject("CSP enabled; cannot embed inline styles.") : (e = this._doc.createElement("style"), e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(this._doc.createTextNode(t)), this.layout(function() {
                        return n._head.appendChild(e)
                    }))
                },
                style: function(t, e) {
                    var n = this;
                    return this.layout(function() {
                        e && (n._frame.style.cssText = ""), d.forIn(t, function(t, e) {
                            n._frame.style[t] = e
                        })
                    })
                },
                onresize: function(t) {
                    this._resizeHandlers.push(t)
                },
                width: function(t) {
                    return void 0 !== t && (this._frame.style.width = t + "px"), u.ios() ? Math.min(this._frame.parentNode.offsetWidth, this._frame.offsetWidth) : this._frame.offsetWidth
                },
                height: function(t) {
                    return void 0 !== t && (this._frame.height = t), this._frame.offsetHeight
                },
                contentHeight: function() {
                    return this._doc.body.firstChild.offsetHeight
                },
                resizeToContent: function() {
                    var t = this;
                    return this.layout(function() {
                        return t.height(t.contentHeight())
                    })
                }
            }), r.createSandbox = function(t, e, n, i) {
                var o = new c(t, e, n, i);
                return o.ready().then(function(t) {
                    return new r(t.frame, t.layout)
                })
            }, e.exports = r
        }, {
            11: 11,
            14: 14,
            27: 27,
            29: 29,
            5: 5,
            55: 55,
            6: 6,
            62: 62,
            69: 69
        }],
        29: [function(t, e) {
            function n(t, e) {
                t && (this._frame = t, this._win = t.contentWindow, this._doc = this._win.document, this._body = this._doc.body, this._head = this._body.parentNode.children[0], this.layout = e, this._doc.documentElement.className = "SandboxRoot")
            }
            var i = t(27),
                r = t(69);
            r.aug(n.prototype, {
                createElement: function(t) {
                    return this._doc.createElement(t)
                },
                createDocumentFragment: function() {
                    return this._doc.createDocumentFragment()
                },
                appendChild: function(t) {
                    var e = this;
                    return this.layout(function() {
                        return e._body.appendChild(t)
                    })
                },
                setBaseTarget: function(t) {
                    var e = this,
                        n = this._doc.createElement("base");
                    return n.target = t, this.layout(function() {
                        return e._head.appendChild(n)
                    })
                },
                setTitle: function(t) {
                    t && (this._frame.title = t)
                },
                element: function() {
                    return this._frame
                },
                document: function() {
                    return this._doc
                }
            }), n.createSandbox = function(t, e, r, o) {
                var s = new i(t, e, r, o);
                return s.ready().then(function(t) {
                    return new n(t.frame, t.layout)
                })
            }, e.exports = n
        }, {
            27: 27,
            69: 69
        }],
        30: [function(t, e) {
            function n() {
                return l.formatGenericEventData("syndicated_impression", {})
            }
            function i() {
                a("tweet")
            }
            function r() {
                a("timeline")
            }
            function o() {
                a("video")
            }
            function s() {
                a("partnertweet")
            }
            function a(t) {
                u.isHostPageSensitive() || h[t] || (h[t] = !0, c.scribe(l.formatClientEventNamespace({
                    page: t,
                    action: "impression"
                }), n(), l.AUDIENCE_ENDPOINT))
            }
            var c = t(32),
                l = t(33),
                u = t(64),
                h = {};
            e.exports = {
                scribePartnerTweetAudienceImpression: s,
                scribeTweetAudienceImpression: i,
                scribeTimelineAudienceImpression: r,
                scribeVideoAudienceImpression: o,
                resetTracking: function() {
                    h = {}
                }
            }
        }, {
            32: 32,
            33: 33,
            64: 64
        }],
        31: [function(t, e) {
            function n() {
                return E ? x : (p.createSandbox({
                    id: "rufous-sandbox"
                }, {
                    display: "none"
                }).then(function(t) {
                    h = t, l = a(), u = c(), d.fulfill([l, u])
                }), E = !0, x)
            }
            function i(t, e) {
                var n,
                    i,
                    r;
                v.isObject(t) && v.isObject(e) && (r = w.flattenClientEventPayload(t, e), n = l.firstChild, n.value = +(+n.value || r.dnt || 0), i = h.createElement("input"), i.type = "hidden", i.name = "l", i.value = w.stringify(r), l.appendChild(i))
            }
            function r(t, e, n) {
                var r = !v.isObject(t),
                    o = e ? !v.isObject(e) : !1;
                r || o || x.then(function() {
                    i(w.formatClientEventNamespace(t), w.formatClientEventData(e, n))
                })
            }
            function o() {
                return x.then(function() {
                    if (l.children.length <= 2)
                        return g.reject();
                    var t = g.every(h.appendChild(l), h.appendChild(u)).then(function(t) {
                        var e = t[0],
                            n = t[1];
                        return n.addEventListener("load", function() {
                            s(e, n)(), y.get("events").trigger("logFlushed")
                        }), e.submit(), t
                    });
                    return l = a(), u = c(), t
                })
            }
            function s(t, e) {
                return function() {
                    var n = t.parentNode;
                    n && (n.removeChild(t), n.removeChild(e))
                }
            }
            function a() {
                var t = h.createElement("form"),
                    e = h.createElement("input"),
                    n = h.createElement("input");
                return A++, t.action = w.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = _ + A, t.id = T + A, e.type = "hidden", e.name = "dnt", e.value = m.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = w.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t
            }
            function c() {
                var t = _ + A;
                return f({
                    id: t,
                    name: t,
                    width: 0,
                    height: 0,
                    border: 0
                }, {
                    display: "none"
                }, h.document())
            }
            var l,
                u,
                h,
                d,
                f = t(57),
                m = t(54),
                p = t(29),
                g = t(62),
                w = t(33),
                v = t(69),
                y = t(19),
                b = Math.floor(1e3 * Math.random()) + "_",
                _ = "rufous-frame-" + b + "-",
                T = "rufous-form-" + b + "-",
                A = 0,
                E = !1,
                x = new g(function(t) {
                    d = t
                });
            e.exports = {
                clientEvent: r,
                flush: o,
                init: n
            }
        }, {
            19: 19,
            29: 29,
            33: 33,
            54: 54,
            57: 57,
            62: 62,
            69: 69
        }],
        32: [function(t, e) {
            function n(t, e, n) {
                return i(t, e, n, 2)
            }
            function i(t, e, n, i) {
                var r = !f.isObject(t),
                    s = e ? !f.isObject(e) : !1;
                r || s || o(d.formatClientEventNamespace(t), d.formatClientEventData(e, n, i), d.CLIENT_EVENT_ENDPOINT)
            }
            function r(t, e, n, r) {
                var o = d.extractTermsFromDOM(t.target || t.srcElement);
                o.action = r || "click", i(o, e, n)
            }
            function o(t, e, n) {
                var i,
                    r;
                n && f.isObject(t) && f.isObject(e) && (i = d.flattenClientEventPayload(t, e), r = {
                    l: d.stringify(i)
                }, i.dnt && (r.dnt = 1), l(h.url(n, r)))
            }
            function s(t, e, n, i) {
                var r,
                    o = !f.isObject(t),
                    s = e ? !f.isObject(e) : !1;
                if (!o && !s)
                    return r = d.flattenClientEventPayload(d.formatClientEventNamespace(t), d.formatClientEventData(e, n, i)), a(r)
            }
            function a(t) {
                return p.push(t), p
            }
            function c() {
                var t,
                    e,
                    n = h.url(d.CLIENT_EVENT_ENDPOINT, {
                        dnt: 0,
                        l: ""
                    }),
                    i = encodeURIComponent(n).length;
                return p.length > 1 && s({
                    page: "widgets_js",
                    component: "scribe_pixel",
                    action: "batch_log"
                }, {}), t = p, p = [], e = t.reduce(function(e, n, r) {
                    var o,
                        s,
                        a = e.length,
                        c = a && e[a - 1],
                        l = r + 1 == t.length;
                    return l && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + a].join("/")), o = d.stringify(n), s = encodeURIComponent(o).length + 3, i + s > m ? e : ((!c || c.urlLength + s > m) && (c = {
                        urlLength: i,
                        items: []
                    }, e.push(c)), c.urlLength += s, c.items.push(o), e)
                }, []), e.map(function(t) {
                    var e = {
                        l: t.items
                    };
                    return u.enabled() && (e.dnt = 1), l(h.url(d.CLIENT_EVENT_ENDPOINT, e))
                })
            }
            function l(t) {
                var e = new Image;
                return e.src = t
            }
            var u = t(54),
                h = t(63),
                d = t(33),
                f = t(69),
                m = 2083,
                p = [];
            e.exports = {
                _enqueueRawObject: a,
                scribe: o,
                clientEvent: i,
                clientEvent2: n,
                enqueueClientEvent: s,
                flushClientEvents: c,
                interaction: r
            }
        }, {
            33: 33,
            54: 54,
            63: 63,
            69: 69
        }],
        33: [function(t, e) {
            function n(t, e) {
                var i;
                return e = e || {}, t && t.nodeType === Node.ELEMENT_NODE ? ((i = t.getAttribute("data-scribe")) && i.split(" ").forEach(function(t) {
                    var n = t.trim().split(":"),
                        i = n[0],
                        r = n[1];
                    i && r && !e[i] && (e[i] = r)
                }), n(t.parentNode, e)) : e
            }
            function i(t) {
                return u.aug({
                    client: "tfw"
                }, t || {})
            }
            function r(t, e, n) {
                var i = t && t.widget_origin || c.referrer;
                return t = o("tfw_client_event", t, i), t.client_version = f, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = i), t
            }
            function o(t, e, n) {
                return e = e || {}, u.aug(e, {
                    _category_: t,
                    triggered_on: e.triggered_on || +new Date,
                    dnt: l.enabled(n)
                })
            }
            function s(t, e) {
                return u.aug({}, e, {
                    event_namespace: t
                })
            }
            function a(t) {
                var e,
                    n = Array.prototype.toJSON;
                return delete Array.prototype.toJSON, e = JSON.stringify(t), n && (Array.prototype.toJSON = n), e
            }
            var c = t(11),
                l = t(54),
                u = t(69),
                h = t(71),
                d = t(18),
                f = h.version,
                m = d.get("endpoints.rufous") || "https://syndication.twitter.com/i/jot",
                p = d.get("endpoints.rufousAudience") || "https://syndication.twitter.com/i/jot/syndication",
                g = d.get("endpoints.rufousRedirect") || "https://platform.twitter.com/jot.html";
            e.exports = {
                extractTermsFromDOM: n,
                flattenClientEventPayload: s,
                formatGenericEventData: o,
                formatClientEventData: r,
                formatClientEventNamespace: i,
                stringify: a,
                AUDIENCE_ENDPOINT: p,
                CLIENT_EVENT_ENDPOINT: m,
                RUFOUS_REDIRECT: g
            }
        }, {
            11: 11,
            18: 18,
            54: 54,
            69: 69,
            71: 71
        }],
        34: [function(t, e) {
            function n(t, e, n, i) {
                return t = t || [], n = n || {}, function() {
                    var r,
                        a,
                        l,
                        u,
                        h = Array.prototype.slice.apply(arguments, [0, t.length]),
                        d = Array.prototype.slice.apply(arguments, [t.length]);
                    return d.forEach(function(t) {
                        return t ? 1 === t.nodeType ? void (l = t) : o.isType("function", t) ? void (r = t) : void (o.isType("object", t) && (a = t)) : void 0
                    }), h.length != t.length || 0 === d.length ? (r && o.async(function() {
                        r(!1)
                    }), s.reject("Not enough parameters")) : l ? (a = o.aug(a || {}, n), a.targetEl = l, t.forEach(function(t) {
                        a[t] = h.shift()
                    }), u = new e(a), c.doLayout(), u.render(), i && i(), r && u.completed().then(r, function() {
                        r(!1)
                    }), u.completed()) : (r && o.async(function() {
                        r(!1)
                    }), s.reject("No target specified"))
                }
            }
            function i(t) {
                var e;
                t.linkColor = t.linkColor || t.previewParams.link_color, t.theme = t.theme || t.previewParams.theme, t.height = t.height || t.previewParams.height, e = new f(t), this.render = e.render.bind(e), this.completed = e.completed.bind(e)
            }
            var r = t(14),
                o = t(69),
                s = t(62),
                a = t(65),
                c = t(42),
                l = t(48),
                u = t(44),
                h = t(43),
                d = t(49),
                f = t(47),
                m = n(["url"], l, {
                    type: "share"
                }),
                p = n(["hashtag"], l, {
                    type: "hashtag"
                }),
                g = n(["screenName"], l, {
                    type: "mention"
                }),
                w = n(["screenName"], u),
                v = n(["tweetId"], h, {}, h.fetchAndRender),
                y = n(["tweetId"], d, {}, d.fetchAndRender),
                b = n(["widgetId"], f),
                _ = n(["previewParams"], i),
                T = {
                    createShareButton: m,
                    createMentionButton: g,
                    createHashtagButton: p,
                    createFollowButton: w,
                    createTweet: v,
                    createVideo: y,
                    createTweetEmbed: v,
                    createTimeline: b
                };
            a.isTwitterURL(r.location.href) && (T.createTimelinePreview = _), e.exports = T
        }, {
            14: 14,
            42: 42,
            43: 43,
            44: 44,
            47: 47,
            48: 48,
            49: 49,
            62: 62,
            65: 65,
            69: 69
        }],
        35: [function(t, e) {
            function n(t, e) {
                var n = c.connect({
                    src: t,
                    iframe: {
                        name: e,
                        style: "position:absolute;top:-9999em;width:10px;height:10px"
                    }
                });
                return l(n).expose({
                    trigger: function(t, e, n) {
                        e = e || {};
                        var i = e.region;
                        delete e.region, d.get("events").trigger(t, {
                            target: u.find(n),
                            data: e,
                            region: i,
                            type: t
                        })
                    },
                    initXPHub: function() {
                        r(!0)
                    }
                }), n
            }
            function i(t) {
                return t ? h.secureHubId : h.contextualHubId
            }
            function r(t) {
                var e = a.base(t) + "/widgets/hub.5e35c44edb867aec88b804135e0a46c4.html",
                    r = i(t);
                if (!s.getElementById(r))
                    return n(e, r)
            }
            function o(t, e) {
                var n = c.connect({
                    window: {
                        width: 550,
                        height: 450
                    },
                    src: t
                });
                l(n).expose({
                    trigger: function(t, n) {
                        d.get("events").trigger(t, {
                            target: e,
                            region: "intent",
                            type: t,
                            data: n
                        })
                    }
                })
            }
            var s = t(11),
                a = t(37),
                c = t(78),
                l = t(77),
                u = t(42),
                h = t(70),
                d = t(19);
            e.exports = {
                init: r,
                openIntent: o
            }
        }, {
            11: 11,
            19: 19,
            37: 37,
            42: 42,
            70: 70,
            77: 77,
            78: 78
        }],
        36: [function(t, e) {
            function n(t) {
                return t = t || i, t.top.postMessage ? t === t.top ? void t.addEventListener("message", function(t) {
                    var e;
                    if (!t.data || "{" == t.data[0]) {
                        try {
                            e = JSON.parse(t.data)
                        } catch (n) {}
                        e && "twttr:private:requestArticleUrl" == e.name && t.source.postMessage(JSON.stringify({
                            name: "twttr:private:provideArticleUrl",
                            data: {
                                url: r.rootDocumentLocation(),
                                dnt: o.enabled()
                            }
                        }), "*")
                    }
                }, !1) : (t.addEventListener("message", function(t) {
                    var e;
                    if (!t.data || "{" == t.data[0]) {
                        try {
                            e = JSON.parse(t.data)
                        } catch (n) {}
                        if (e && "twttr:private:provideArticleUrl" == e.name) {
                            if (!e.data)
                                return;
                            r.rootDocumentLocation(e.data.url), e.data.dnt && o.setOn()
                        }
                    }
                }, !1), void t.top.postMessage(JSON.stringify({
                    name: "twttr:private:requestArticleUrl"
                }), "*")) : void 0
            }
            var i = t(14),
                r = t(52),
                o = t(54);
            e.exports = {
                requestArticleUrl: n
            }
        }, {
            14: 14,
            52: 52,
            54: 54
        }],
        37: [function(t, e) {
            function n(t, e) {
                var n,
                    o = c[t];
                return "embed/timeline.css" === t && a.contains(r.href, "localhost.twitter.com") ? "/node_modules/syndication-templates/lib/css/index.css" : (n = s.retina() ? "2x" : "default", e && (n += ".rtl"), i() + "/" + o[n])
            }
            function i(t) {
                var e = o.get("host");
                return l(t) + "://" + e
            }
            var r = t(12),
                o = t(18),
                s = t(55),
                a = t(69),
                c = {
                    "embed/timeline.css": {
                        "default": "embed/timeline.e29dd159fa96a0aa7d51146cd88dc050.default.css",
                        "2x": "embed/timeline.e29dd159fa96a0aa7d51146cd88dc050.2x.css",
                        gif: "embed/timeline.e29dd159fa96a0aa7d51146cd88dc050.gif.css",
                        "default.rtl": "embed/timeline.e29dd159fa96a0aa7d51146cd88dc050.default.rtl.css",
                        "2x.rtl": "embed/timeline.e29dd159fa96a0aa7d51146cd88dc050.2x.rtl.css",
                        "gif.rtl": "embed/timeline.e29dd159fa96a0aa7d51146cd88dc050.gif.rtl.css"
                    }
                },
                l = function() {
                    return /^http\:$/.test(r.protocol) ? function(t) {
                        return t ? "https" : "http"
                    } : function() {
                        return "https"
                    }
                }();
            e.exports = {
                builtUrl: n,
                base: i
            }
        }, {
            12: 12,
            18: 18,
            55: 55,
            69: 69
        }],
        38: [function(t, e) {
            function n(t) {
                return function(e) {
                    e.error ? t.error && t.error(e) : e.headers && 200 != e.headers.status ? (t.error && t.error(e), l.warn(e.headers.message)) : t.success && t.success(e), t.complete && t.complete(e), i(t)
                }
            }
            function i(t) {
                var e = t.script;
                e && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), t.script = void 0, e = void 0), t.callbackName && c.unset(["callbacks", t.callbackName])
            }
            function r(t) {
                var e = {};
                return t.success && u.isType("function", t.success) && (e.success = t.success), t.error && u.isType("function", t.error) && (e.error = t.error), t.complete && u.isType("function", t.complete) && (e.complete = t.complete), e
            }
            var o = t(11),
                s = t(12),
                a = t(4),
                c = t(18),
                l = t(59),
                u = t(69),
                h = t(63),
                d = "cb",
                f = 0,
                m = !1,
                p = {},
                g = u.aug({
                    tweets: "https://syndication.twitter.com/tweets.json",
                    timeline: "https://cdn.syndication.twimg.com/widgets/timelines/",
                    timelinePoll: "https://syndication.twitter.com/widgets/timelines/paged/",
                    timelinePreview: "https://syndication.twitter.com/widgets/timelines/preview/",
                    videos: "https://syndication.twitter.com/widgets/video/"
                }, c.get("endpoints") || {});
            p.jsonp = function(t, e, i) {
                var r = i || d + f,
                    a = c.fullPath(["callbacks", r]),
                    l = o.createElement("script"),
                    u = {
                        callback: a,
                        suppress_response_codes: !0
                    };
                c.set(["callbacks", r], n(e)), (m || !/^https?\:$/.test(s.protocol)) && (t = t.replace(/^\/\//, "https://")), l.src = h.url(t, u), l.async = "async", o.body.appendChild(l), e.script = l, e.callbackName = r, i || f++
            }, p.config = function(t) {
                (t.forceSSL === !0 || t.forceSSL === !1) && (m = t.forceSSL)
            }, p.tweets = function(t) {
                var e,
                    n = r(t),
                    i = {
                        ids: t.ids.join(","),
                        lang: t.lang
                    };
                a.isEnabled() && (i.new_html = !0), e = h.url(g.tweets, i), this.jsonp(e, n)
            }, p.videos = function(t) {
                var e = r(t),
                    n = {
                        ids: t.ids.join(","),
                        lang: t.lang
                    },
                    i = h.url(g.videos, n);
                this.jsonp(i, e)
            }, p.timeline = function(t) {
                var e,
                    n = r(t),
                    i = 9e5,
                    o = Math.floor(+new Date / i),
                    a = {
                        lang: t.lang,
                        t: o,
                        domain: s.host,
                        dnt: t.dnt,
                        override_type: t.overrideType,
                        override_id: t.overrideId,
                        override_name: t.overrideName,
                        override_owner_id: t.overrideOwnerId,
                        override_owner_name: t.overrideOwnerName,
                        with_replies: t.withReplies
                    };
                u.compact(a), e = h.url(g.timeline + t.id, a), this.jsonp(e, n, "tl_" + t.id + "_" + t.instanceId)
            }, p.timelinePoll = function(t) {
                var e,
                    n = r(t),
                    i = {
                        lang: t.lang,
                        since_id: t.sinceId,
                        max_id: t.maxId,
                        min_position: t.minPosition,
                        max_position: t.maxPosition,
                        domain: s.host,
                        dnt: t.dnt,
                        override_type: t.overrideType,
                        override_id: t.overrideId,
                        override_name: t.overrideName,
                        override_owner_id: t.overrideOwnerId,
                        override_owner_name: t.overrideOwnerName,
                        with_replies: t.withReplies
                    };
                u.compact(i), e = h.url(g.timelinePoll + t.id, i), this.jsonp(e, n, "tlPoll_" + t.id + "_" + t.instanceId + "_" + (t.sinceId || t.maxId || t.maxPosition || t.minPosition))
            }, p.timelinePreview = function(t) {
                var e = r(t),
                    n = t.params,
                    i = h.url(g.timelinePreview, n);
                this.jsonp(i, e)
            }, e.exports = p
        }, {
            11: 11,
            12: 12,
            18: 18,
            4: 4,
            59: 59,
            63: 63,
            69: 69
        }],
        39: [function(t, e) {
            function n() {
                var t = 36e5,
                    e = o.combined(r)._;
                return void 0 !== i ? i : (i = !1, e && /^\d+$/.test(e) && (i = +new Date - parseInt(e) < t), i)
            }
            var i,
                r = t(12),
                o = t(61);
            e.exports = {
                isDynamicWidget: n
            }
        }, {
            12: 12,
            61: 61
        }],
        40: [function(t, e) {
            function n(t, e) {
                return 2 == t || 3 == t && 0 === +e
            }
            function i(t) {
                var e = t.split(" ");
                this.url = decodeURIComponent(e[0].trim()), this.width = +e[1].replace(/w$/, "").trim()
            }
            function r(t, e, n) {
                var r,
                    o,
                    s,
                    a;
                if (t = u.devicePixelRatio ? t * u.devicePixelRatio : t, o = e.split(",").map(function(t) {
                    return new i(t.trim())
                }), n)
                    for (a = 0; a < o.length; a++)
                        o[a].url === n && (r = o[a]);
                return s = o.reduce(function(e, n) {
                    return n.width < e.width && n.width >= t ? n : e
                }, o[0]), r && r.width > s.width ? r : s
            }
            function o(t, e) {
                var n,
                    i = t.getAttribute("data-srcset"),
                    o = t.src;
                i && (n = r(e, i, o), t.src = n.url)
            }
            function s(t, e) {
                e = void 0 !== e ? !!e : d.retina(), h.toRealArray(t.getElementsByTagName("IMG")).forEach(function(t) {
                    var n = t.getAttribute("data-src-1x") || t.getAttribute("src"),
                        i = t.getAttribute("data-src-2x");
                    e && i ? t.src = i : n && (t.src = n)
                })
            }
            function a(t, e, i, r) {
                var s = 0,
                    a = t.querySelector(".multi-photo"),
                    u = a && +a.getAttribute("data-photo-count");
                if (t)
                    return h.toRealArray(t.querySelectorAll(".NaturalImage-image")).forEach(function(t) {
                        r(function() {
                            o(t, e)
                        })
                    }), h.toRealArray(t.querySelectorAll(".CroppedImage-image")).forEach(function(t) {
                        r(function() {
                            o(t, e / 2)
                        })
                    }), (d.ios() || d.android()) && h.toRealArray(t.querySelectorAll(".FilledIframe")).forEach(function(t) {
                        r(function() {
                            l(t, {
                                width: t.offsetWidth,
                                height: t.offsetHeight
                            })
                        })
                    }), h.toRealArray(t.querySelectorAll(".autosized-media")).forEach(function(t) {
                        var n = c(t.getAttribute("data-width"), t.getAttribute("data-height"), e, i);
                        r(function() {
                            o(t, e), t.width = n.width, t.height = n.height, l(t, n)
                        }), s = n.height > s ? n.height : s
                    }), h.toRealArray(t.querySelectorAll("img.cropped-media")).forEach(function(t) {
                        var a,
                            l,
                            h,
                            d = e - 12,
                            f = t.parentNode,
                            w = t.getAttribute("data-crop-x") || 0,
                            v = t.getAttribute("data-crop-y") || 0,
                            y = n(u, t.getAttribute("data-image-index")),
                            b = Math.floor(d / 2 - m),
                            _ = Math.floor(b / (y ? p : g));
                        y || (_ -= m / 2), h = c(t.getAttribute("data-width"), t.getAttribute("data-height"), b, i, b, _), a = h.width - b - w, l = h.height - _ - v, 0 > a && Math.max(0, w += a), 0 > l && Math.max(0, v += l), r(function() {
                            o(t, b), t.width = h.width, t.height = h.height, f.style.width = b - 1 + "px", f.style.height = _ + "px", w && (t.style.marginLeft = "-" + Math.floor(h.width * w / 100) + "px"), v && (t.style.marginTop = "-" + Math.floor(h.height * v / 100) + "px")
                        }), s = h.height * (y ? 2 : 1) > s ? h.height : s
                    }), s
            }
            function c(t, e, n, i, r, o) {
                return n = n || t, i = i || e, r = r || 0, o = o || 0, t > n && (e *= n / t, t = n), e > i && (t *= i / e, e = i), r > t && (e *= r / t, t = r), o > e && (t *= o / e, e = o), {
                    width: Math.floor(t),
                    height: Math.floor(e)
                }
            }
            function l(t, e) {
                function n() {
                    var t = {
                        name: "tfw:resize",
                        dimensions: e
                    };
                    r.postMessage(t, "*")
                }
                var i,
                    r,
                    o,
                    s,
                    a;
                t && (r = t.contentWindow, i = t.ownerDocument && t.ownerDocument.defaultView, o = d.ios() || d.android(), s = f.isTwitterURL(t.src), a = r && d.canPostMessage(r), o && s && a && (n(), i && i.addEventListener("message", function(t) {
                    "tfw:requestsize" === t.data && n()
                }, !1)))
            }
            var u = t(14),
                h = t(69),
                d = t(55),
                f = t(65),
                m = 6,
                p = 8 / 9,
                g = 16 / 9;
            e.exports = {
                scaleDimensions: c,
                retinize: s,
                constrainMedia: a,
                __setSrcFromSet: o
            }
        }, {
            14: 14,
            55: 55,
            65: 65,
            69: 69
        }],
        41: [function(t, e) {
            var n = t(63),
                i = t(65);
            e.exports = function(t, e) {
                return function(r) {
                    var o,
                        s,
                        a = "data-tw-params";
                    if (r && i.isTwitterURL(r.href) && !r.getAttribute(a)) {
                        if (r.setAttribute(a, !0), "function" == typeof e) {
                            o = e.call(this, r);
                            for (s in o)
                                o.hasOwnProperty(s) && (t[s] = o[s])
                        }
                        r.href = n.url(r.href, t)
                    }
                }
            }
        }, {
            63: 63,
            65: 65
        }],
        42: [function(t, e) {
            function n(t) {
                var e,
                    n = this;
                t && (t.ownerDocument ? (this.srcEl = t, this.classAttr = t.className.split(" ")) : (this.srcOb = t, this.classAttr = []), e = this.params(), this.id = this.generateId(), this.setLanguage(), this.related = e.related || this.dataAttr("related"), this.partner = e.partner || this.dataAttr("partner") || g.val("partner"), this.styleAttr = [], this.targetEl = t.targetEl, m.asBoolean(e.dnt || this.dataAttr("dnt")) && w.setOn(), T[this.id] = this, this.completePromise = new d(function(t) {
                    n.completeResolver = t
                }), this.completed().then(function(t) {
                    t && t != s.body && b.get("events").trigger("rendered", {
                        target: t
                    })
                }))
            }
            function i() {
                A.forEach(function(t) {
                    t()
                }), n.doLayout()
            }
            function r(t) {
                return t ? t.lang ? t.lang : r(t.parentNode) : void 0
            }
            var o,
                s = t(11),
                a = t(14),
                c = t(37),
                l = t(23),
                u = t(57),
                h = t(58),
                d = t(62),
                f = t(63),
                m = t(66),
                p = t(69),
                g = t(17),
                w = t(54),
                v = t(59),
                y = t(52),
                b = t(19),
                _ = 0,
                T = {},
                A = [],
                E = new h,
                x = "data-twttr-rendered",
                I = {
                    ar: {
                        "%{followers_count} followers": "عدد المتابعين %{followers_count}",
                        "100K+": "+100 ألف",
                        "10k unit": "10 آلاف وحدة",
                        Follow: "تابِع",
                        "Follow %{screen_name}": "تابِع %{screen_name}",
                        K: "ألف",
                        M: "م",
                        Tweet: "غرِّد",
                        "Tweet %{hashtag}": "غرِّد %{hashtag}",
                        "Tweet to %{name}": "غرِّد لـ %{name}"
                    },
                    bn: {
                        "Follow %{screen_name}": "%{screen_name}-কে অনুসরণ করুন"
                    },
                    cs: {
                        "Follow %{screen_name}": "Sledovat uživatele %{screen_name}"
                    },
                    da: {
                        "%{followers_count} followers": "%{followers_count} følgere",
                        "10k unit": "10k enhed",
                        Follow: "Følg",
                        "Follow %{screen_name}": "Følg %{screen_name}",
                        "Tweet to %{name}": "Tweet til %{name}"
                    },
                    de: {
                        "%{followers_count} followers": "%{followers_count} Follower",
                        "100K+": "100Tsd+",
                        "10k unit": "10tsd-Einheit",
                        Follow: "Folgen",
                        "Follow %{screen_name}": "%{screen_name} folgen",
                        K: "Tsd",
                        Tweet: "Twittern",
                        "Tweet to %{name}": "Tweet an %{name}"
                    },
                    es: {
                        "%{followers_count} followers": "%{followers_count} seguidores",
                        "10k unit": "unidad de 10 mil",
                        Follow: "Seguir",
                        "Follow %{screen_name}": "Seguir a %{screen_name}",
                        Tweet: "Twittear",
                        "Tweet %{hashtag}": "Twittear %{hashtag}",
                        "Tweet to %{name}": "Twittear a %{name}"
                    },
                    fa: {
                        "%{followers_count} followers": "%{followers_count} دنبال‌کننده",
                        "100K+": ">۱۰۰هزار",
                        "10k unit": "۱۰هزار واحد",
                        Follow: "دنبال کردن",
                        "Follow %{screen_name}": "دنبال کردن %{screen_name}",
                        K: "هزار",
                        M: "میلیون",
                        Tweet: "توییت",
                        "Tweet %{hashtag}": "توییت کردن %{hashtag}",
                        "Tweet to %{name}": "به %{name} توییت کنید"
                    },
                    fi: {
                        "%{followers_count} followers": "%{followers_count} seuraajaa",
                        "100K+": "100 000+",
                        "10k unit": "10 000 yksikköä",
                        Follow: "Seuraa",
                        "Follow %{screen_name}": "Seuraa käyttäjää %{screen_name}",
                        K: "tuhatta",
                        M: "milj.",
                        Tweet: "Twiittaa",
                        "Tweet %{hashtag}": "Twiittaa %{hashtag}",
                        "Tweet to %{name}": "Twiittaa käyttäjälle %{name}"
                    },
                    fil: {
                        "%{followers_count} followers": "%{followers_count} mga tagasunod",
                        "10k unit": "10k yunit",
                        Follow: "Sundan",
                        "Follow %{screen_name}": "Sundan si %{screen_name}",
                        Tweet: "I-tweet",
                        "Tweet %{hashtag}": "I-tweet ang %{hashtag}",
                        "Tweet to %{name}": "Mag-Tweet kay %{name}"
                    },
                    fr: {
                        "%{followers_count} followers": "%{followers_count} abonnés",
                        "10k unit": "unité de 10k",
                        Follow: "Suivre",
                        "Follow %{screen_name}": "Suivre %{screen_name}",
                        Tweet: "Tweeter",
                        "Tweet %{hashtag}": "Tweeter %{hashtag}",
                        "Tweet to %{name}": "Tweeter à %{name}"
                    },
                    he: {
                        "%{followers_count} followers": "%{followers_count} עוקבים",
                        "100K+": "מאות אלפים",
                        "10k unit": "עשרות אלפים",
                        Follow: "מעקב",
                        "Follow %{screen_name}": "לעקוב אחר %{screen_name}",
                        K: "אלף",
                        M: "מיליון",
                        Tweet: "ציוץ",
                        "Tweet %{hashtag}": "צייצו %{hashtag}",
                        "Tweet to %{name}": "ציוץ אל %{name}"
                    },
                    hi: {
                        "%{followers_count} followers": "%{followers_count} फ़ॉलोअर्स",
                        "100K+": "1 लाख से अधिक",
                        "10k unit": "10 हजार इकाईयां",
                        Follow: "फ़ॉलो",
                        "Follow %{screen_name}": "%{screen_name} को फ़ॉलो करें",
                        K: "हजार",
                        M: "मिलियन",
                        Tweet: "ट्वीट",
                        "Tweet %{hashtag}": "ट्वीट %{hashtag}",
                        "Tweet to %{name}": "%{name} के प्रति ट्वीट करें"
                    },
                    hu: {
                        "%{followers_count} followers": "%{followers_count} követő",
                        "100K+": "100E+",
                        "10k unit": "10E+",
                        Follow: "Követés",
                        "Follow %{screen_name}": "%{screen_name} követése",
                        K: "E",
                        "Tweet %{hashtag}": "%{hashtag} tweetelése",
                        "Tweet to %{name}": "Tweet küldése neki: %{name}"
                    },
                    id: {
                        "%{followers_count} followers": "%{followers_count} pengikut",
                        "100K+": "100 ribu+",
                        "10k unit": "10 ribu unit",
                        Follow: "Ikuti",
                        "Follow %{screen_name}": "Ikuti %{screen_name}",
                        K: "&nbsp;ribu",
                        M: "&nbsp;juta",
                        "Tweet to %{name}": "Tweet ke %{name}"
                    },
                    it: {
                        "%{followers_count} followers": "%{followers_count} follower",
                        "10k unit": "10k unità",
                        Follow: "Segui",
                        "Follow %{screen_name}": "Segui %{screen_name}",
                        "Tweet %{hashtag}": "Twitta %{hashtag}",
                        "Tweet to %{name}": "Twitta a %{name}"
                    },
                    ja: {
                        "%{followers_count} followers": "%{followers_count}人のフォロワー",
                        "100K+": "100K以上",
                        "10k unit": "万",
                        Follow: "フォローする",
                        "Follow %{screen_name}": "%{screen_name}さんをフォロー",
                        Tweet: "ツイート",
                        "Tweet %{hashtag}": "%{hashtag} をツイートする",
                        "Tweet to %{name}": "%{name}さんへツイートする"
                    },
                    ko: {
                        "%{followers_count} followers": "%{followers_count}명의 팔로워",
                        "100K+": "100만 이상",
                        "10k unit": "만 단위",
                        Follow: "팔로우",
                        "Follow %{screen_name}": "%{screen_name} 님 팔로우하기",
                        K: "천",
                        M: "백만",
                        Tweet: "트윗",
                        "Tweet %{hashtag}": "%{hashtag} 관련 트윗하기",
                        "Tweet to %{name}": "%{name} 님에게 트윗하기"
                    },
                    msa: {
                        "%{followers_count} followers": "%{followers_count} pengikut",
                        "100K+": "100 ribu+",
                        "10k unit": "10 ribu unit",
                        Follow: "Ikut",
                        "Follow %{screen_name}": "Ikut %{screen_name}",
                        K: "ribu",
                        M: "juta",
                        "Tweet to %{name}": "Tweet kepada %{name}"
                    },
                    nl: {
                        "%{followers_count} followers": "%{followers_count} volgers",
                        "100K+": "100k+",
                        "10k unit": "10k-eenheid",
                        Follow: "Volgen",
                        "Follow %{screen_name}": "%{screen_name} volgen",
                        K: "k",
                        M: " mln.",
                        Tweet: "Tweeten",
                        "Tweet %{hashtag}": "%{hashtag} tweeten",
                        "Tweet to %{name}": "Tweeten naar %{name}"
                    },
                    no: {
                        "%{followers_count} followers": "%{followers_count} følgere",
                        "100K+": "100 K+",
                        "10k unit": "10-K-enhet",
                        Follow: "Følg",
                        "Follow %{screen_name}": "Følg %{screen_name}",
                        "Tweet to %{name}": "Send en tweet til %{name}"
                    },
                    pl: {
                        "%{followers_count} followers": "%{followers_count} obserwujących",
                        "100K+": "100 tys.+",
                        "10k unit": "10 tys.",
                        Follow: "Obserwuj",
                        "Follow %{screen_name}": "Obserwuj %{screen_name}",
                        K: "tys.",
                        M: "mln",
                        Tweet: "Tweetnij",
                        "Tweet %{hashtag}": "Tweetnij %{hashtag}",
                        "Tweet to %{name}": "Tweetnij do %{name}"
                    },
                    pt: {
                        "%{followers_count} followers": "%{followers_count} seguidores",
                        "100K+": "+100 mil",
                        "10k unit": "10 mil unidades",
                        Follow: "Seguir",
                        "Follow %{screen_name}": "Seguir %{screen_name}",
                        K: "Mil",
                        Tweet: "Tweetar",
                        "Tweet %{hashtag}": "Tweetar %{hashtag}",
                        "Tweet to %{name}": "Tweetar para %{name}"
                    },
                    ro: {
                        "Follow %{screen_name}": "Urmăreşte pe %{screen_name}"
                    },
                    ru: {
                        "%{followers_count} followers": "Читатели: %{followers_count} ",
                        "100K+": "100 тыс.+",
                        "10k unit": "блок 10k",
                        Follow: "Читать",
                        "Follow %{screen_name}": "Читать %{screen_name}",
                        K: "тыс.",
                        M: "млн.",
                        Tweet: "Твитнуть",
                        "Tweet %{hashtag}": "Твитнуть %{hashtag}",
                        "Tweet to %{name}": "Твитнуть %{name}"
                    },
                    sv: {
                        "%{followers_count} followers": "%{followers_count} följare",
                        "10k unit": "10k",
                        Follow: "Följ",
                        "Follow %{screen_name}": "Följ %{screen_name}",
                        Tweet: "Tweeta",
                        "Tweet %{hashtag}": "Tweeta %{hashtag}",
                        "Tweet to %{name}": "Tweeta till %{name}"
                    },
                    th: {
                        "%{followers_count} followers": "%{followers_count} ผู้ติดตาม",
                        "100K+": "100พัน+",
                        "10k unit": "หน่วย 10พัน",
                        Follow: "ติดตาม",
                        "Follow %{screen_name}": "ติดตาม %{screen_name}",
                        M: "ล้าน",
                        Tweet: "ทวีต",
                        "Tweet %{hashtag}": "ทวีต %{hashtag}",
                        "Tweet to %{name}": "ทวีตถึง %{name}"
                    },
                    tr: {
                        "%{followers_count} followers": "%{followers_count} takipçi",
                        "100K+": "+100 bin",
                        "10k unit": "10 bin birim",
                        Follow: "Takip et",
                        "Follow %{screen_name}": "Takip et: %{screen_name}",
                        K: "bin",
                        M: "milyon",
                        Tweet: "Tweetle",
                        "Tweet %{hashtag}": "Tweetle: %{hashtag}",
                        "Tweet to %{name}": "Tweetle: %{name}"
                    },
                    uk: {
                        "Follow %{screen_name}": "Читати %{screen_name}"
                    },
                    ur: {
                        "%{followers_count} followers": "%{followers_count} فالورز",
                        "100K+": "ایک لاکھ سے زیادہ",
                        "10k unit": "دس ہزار یونٹ",
                        Follow: "فالو کریں",
                        "Follow %{screen_name}": "%{screen_name} کو فالو کریں",
                        K: "ہزار",
                        M: "ملین",
                        Tweet: "ٹویٹ کریں",
                        "Tweet %{hashtag}": "%{hashtag} ٹویٹ کریں",
                        "Tweet to %{name}": "%{name} کو ٹویٹ کریں"
                    },
                    vi: {
                        "Follow %{screen_name}": "Theo dõi %{screen_name}"
                    },
                    "zh-cn": {
                        "%{followers_count} followers": "%{followers_count} 关注者",
                        "100K+": "10万+",
                        "10k unit": "1万单元",
                        Follow: "关注",
                        "Follow %{screen_name}": "关注 %{screen_name}",
                        K: "千",
                        M: "百万",
                        Tweet: "发推",
                        "Tweet %{hashtag}": "以 %{hashtag} 发推",
                        "Tweet to %{name}": "发推给 %{name}"
                    },
                    "zh-tw": {
                        "%{followers_count} followers": "%{followers_count} 位跟隨者",
                        "100K+": "超過十萬",
                        "10k unit": "1萬 單位",
                        Follow: "跟隨",
                        "Follow %{screen_name}": "跟隨 %{screen_name}",
                        K: "千",
                        M: "百萬",
                        Tweet: "推文",
                        "Tweet %{hashtag}": "推文%{hashtag}",
                        "Tweet to %{name}": "推文給%{name}"
                    }
                };
            p.aug(n.prototype, {
                setLanguage: function(t) {
                    var e;
                    return t || (t = this.params().lang || this.dataAttr("lang") || r(this.srcEl)), (t = t && t.toLowerCase()) ? I[t] ? this.lang = t : (e = t.replace(/[\-_].*/, ""), I[e] ? this.lang = e : void (this.lang = "en")) : this.lang = "en"
                },
                _: function(t, e) {
                    var n = this.lang;
                    return e = e || {}, n && I.hasOwnProperty(n) || (n = this.lang = "en"), t = I[n] && I[n][t] || t, this.ringo(t, e, /%\{([\w_]+)\}/g)
                },
                ringo: function(t, e, n) {
                    return n = n || /\{\{([\w_]+)\}\}/g, t.replace(n, function(t, n) {
                        return void 0 !== e[n] ? e[n] : t
                    })
                },
                makeIframeSource: function() {
                    if (this.iframeSource) {
                        var t = f.encode(this.widgetUrlParams());
                        return [c.base(), "/", this.ringo(this.iframeSource, {
                            lang: this.lang
                        }), "#", t].join("")
                    }
                },
                add: function(t) {
                    T[this.id] = t
                },
                create: function(t, e, n) {
                    var i,
                        r = this;
                    return n[x] = !0, i = u(p.aug({
                        id: this.id,
                        src: t,
                        "class": this.classAttr.join(" ")
                    }, n), e, this.targetEl && this.targetEl.ownerDocument), this.srcEl ? this.layout(function() {
                        return r.srcEl.parentNode.replaceChild(i, r.srcEl), r.completeResolver.fulfill(i), i
                    }) : this.targetEl ? this.layout(function() {
                        return r.targetEl.appendChild(i), r.completeResolver.fulfill(i), i
                    }) : d.reject("Did not append widget")
                },
                params: function() {
                    var t,
                        e;
                    return this.srcOb ? e = this.srcOb : (t = this.srcEl && this.srcEl.href && this.srcEl.href.split("?")[1], e = t ? f.decode(t) : {}), this.params = function() {
                        return e
                    }, e
                },
                widgetUrlParams: function() {
                    return {}
                },
                dataAttr: function(t) {
                    return this.srcEl && this.srcEl.getAttribute("data-" + t)
                },
                attr: function(t) {
                    return this.srcEl && this.srcEl.getAttribute(t)
                },
                layout: function(t) {
                    return E.enqueue(t)
                },
                styles: {
                    base: [["font", "normal normal normal 11px/18px 'Helvetica Neue', Arial, sans-serif"], ["margin", "0"], ["padding", "0"], ["whiteSpace", "nowrap"]],
                    button: [["fontWeight", "bold"], ["textShadow", "0 1px 0 rgba(255,255,255,.5)"]],
                    large: [["fontSize", "13px"], ["lineHeight", "26px"]],
                    vbubble: [["fontSize", "16px"]]
                },
                width: function() {
                    throw new Error("not implemented")
                },
                height: function() {
                    return "m" == this.size ? 20 : 28
                },
                minWidth: function() {},
                maxWidth: function() {},
                minHeight: function() {},
                maxHeight: function() {},
                dimensions: function() {
                    function t(t) {
                        switch (typeof t) {
                        case "string":
                            return t;
                        case "undefined":
                            return;
                        default:
                            return t + "px"
                        }
                    }
                    var e = {
                        width: this.width(),
                        height: this.height()
                    };
                    return this.minWidth() && (e["min-width"] = this.minWidth()), this.maxWidth() && (e["max-width"] = this.maxWidth()), this.minHeight() && (e["min-height"] = this.minHeight()), this.maxHeight() && (e["max-height"] = this.maxHeight()), p.forIn(e, function(n, i) {
                        e[n] = t(i)
                    }), e
                },
                generateId: function() {
                    return this.srcEl && this.srcEl.id || "twitter-widget-" + _++
                },
                completed: function() {
                    return this.completePromise
                }
            }), n.afterLoad = function(t) {
                A.push(t)
            }, n.doLayout = function() {
                E.exec()
            }, n.doLayoutAsync = function() {
                E.delayedExec()
            }, n.init = function(t) {
                o = t
            }, n.reset = function() {
                T = {}
            }, n.find = function(t) {
                return t && T[t] ? T[t].element : null
            }, n.embed = function(t) {
                var e = [],
                    r = [],
                    a = [];
                m.isArray(t) || (t = [t || s]), v.time("sandboxes"), t.forEach(function(t) {
                    p.forIn(o, function(n, i) {
                        var r = t.querySelectorAll(n);
                        p.toRealArray(r).forEach(function(t) {
                            var n;
                            t.getAttribute(x) || (t.setAttribute(x, "true"), n = new i(t), e.push(n), a.push(n.sandboxCreated))
                        })
                    })
                }), d.every.apply(null, a).then(function() {
                    v.timeEnd("sandboxes")
                }), n.doLayout(), e.forEach(function(t) {
                    r.push(t.completed()), t.render()
                }), d.every.apply(null, r).then(function(t) {
                    t = t.filter(function(t) {
                        return t
                    }), t.length && (b.get("events").trigger("loaded", {
                        widgets: t
                    }), v.timeEnd("load"))
                }).then(n.trackRender), n.doLayoutAsync(), i()
            }, n.trackRender = function() {
                l.endAndTrack("render", "widgets-js-load", "page", {
                    widget_origin: y.rootDocumentLocation(),
                    widget_frame: y.isFramed() && y.currentDocumentLocation()
                })
            }, a.setInterval(function() {
                n.doLayout()
            }, 500), e.exports = n
        }, {
            11: 11,
            14: 14,
            17: 17,
            19: 19,
            23: 23,
            37: 37,
            52: 52,
            54: 54,
            57: 57,
            58: 58,
            59: 59,
            62: 62,
            63: 63,
            66: 66,
            69: 69
        }],
        43: [function(t, e) {
            function n(t, e) {
                var n = t.querySelector("blockquote.subject"),
                    i = t.querySelector("blockquote.reply"),
                    r = n && n.getAttribute("data-tweet-id"),
                    o = i && i.getAttribute("data-tweet-id"),
                    s = {},
                    a = {};
                r && (s[r] = {
                    item_type: 0
                }, T.clientEvent({
                    page: "tweet",
                    section: "subject",
                    component: "tweet",
                    action: "results"
                }, v.aug({}, e, {
                    item_ids: [r],
                    item_details: s
                }), !0), _.scribeTweetAudienceImpression(), o && (a[o] = {
                    item_type: 0
                }, T.clientEvent({
                    page: "tweet",
                    section: "conversation",
                    component: "tweet",
                    action: "results"
                }, v.aug({}, e, {
                    item_ids: [o],
                    item_details: a,
                    associations: {
                        4: {
                            association_id: r,
                            association_type: 4
                        }
                    }
                }), !0)))
            }
            function i(t, e) {
                var n = {};
                t && (n[t] = {
                    item_type: 0
                }, T.clientEvent({
                    page: "tweet",
                    section: "subject",
                    component: "rawembedcode",
                    action: "no_results"
                }, {
                    widget_origin: E.rootDocumentLocation(),
                    widget_frame: E.isFramed() && E.currentDocumentLocation(),
                    message: e,
                    item_ids: [t],
                    item_details: n
                }, !0), _.scribeTweetAudienceImpression())
            }
            function r(t, e, n, i) {
                D[t] = D[t] || [], D[t].push({
                    s: n,
                    f: i,
                    lang: e
                })
            }
            function o(t) {
                if (t) {
                    var e,
                        n,
                        i;
                    h.apply(this, [t]), e = this.params(), n = this.srcEl && this.srcEl.getElementsByTagName("A"), i = n && n[n.length - 1], this.hideThread = "none" == (e.conversation || this.dataAttr("conversation")) || v.contains(this.classAttr, "tw-hide-thread"), this.hideCard = "hidden" == (e.cards || this.dataAttr("cards")) || v.contains(this.classAttr, "tw-hide-media"), "left" == (e.align || this.attr("align")) || v.contains(this.classAttr, "tw-align-left") ? this.align = "left" : "right" == (e.align || this.attr("align")) || v.contains(this.classAttr, "tw-align-right") ? this.align = "right" : ("center" == (e.align || this.attr("align")) || v.contains(this.classAttr, "tw-align-center")) && (this.align = "center", this.containerWidth > this.dimensions.MIN_WIDTH * (1 / .7) && this.width > .7 * this.containerWidth && (this.width = .7 * this.containerWidth)), this.narrow = e.narrow || this.width <= this.dimensions.NARROW_WIDTH, this.narrow && this.classAttr.push("var-narrow"), this.tweetId = e.tweetId || i && y.status(i.href)
                }
            }
            var s = t(3),
                a = t(4),
                c = t(14),
                l = t(8),
                u = t(42),
                h = t(46),
                d = t(51),
                f = t(41),
                m = t(5),
                p = t(7),
                g = t(23),
                w = t(62),
                v = t(69),
                y = t(65),
                b = t(38),
                _ = t(30),
                T = t(31),
                A = t(40),
                E = t(52),
                x = t(19),
                I = t(6),
                S = t(32),
                N = "tweetembed",
                D = {},
                R = [];
            o.prototype = new h, v.aug(o.prototype, {
                renderedClassNames: "twitter-tweet twitter-tweet-rendered",
                dimensions: {
                    DEFAULT_HEIGHT: "0",
                    DEFAULT_WIDTH: "500",
                    NARROW_WIDTH: "350",
                    maxHeight: "375",
                    FULL_BLEED_PHOTO_MAX_HEIGHT: "600",
                    MIN_WIDTH: "220",
                    MIN_HEIGHT: "0",
                    MARGIN: "10px 0",
                    WIDE_MEDIA_PADDING: 32,
                    NARROW_MEDIA_PADDING: 32,
                    BORDERS: 0
                },
                styleSheetUrl: s.tweet,
                ensureStyleSheetConsistency: function(t) {
                    var e,
                        n;
                    return m.present(t, "EmbeddedTweet") && !a.isEnabled() ? (e = this.styleSheetUrl(), n = s.tweetRefresh(this.lang, this.theme), w.every(this.sandbox.removeStyleSheet(e), this.sandbox.appendStyleSheet(n))) : w.fulfill()
                },
                create: function(t) {
                    var e,
                        i,
                        r,
                        o = this,
                        s = this.sandbox.createElement("div");
                    return s.innerHTML = t, (e = s.children[0] || !1) ? ("dark" == this.theme && this.classAttr.push("thm-dark"), this.linkColor && this.addSiteStyles(), m.present(e, "media-forward") && (this.fullBleedPhoto = !0, this.dimensions.maxHeight = this.dimensions.FULL_BLEED_PHOTO_MAX_HEIGHT), m.present(e, "with-border") || m.present(e, "EmbeddedTweet") || this.sandbox.style({
                        border: "#ddd 1px solid",
                        borderTopColor: "#eee",
                        borderBottomColor: "#bbb",
                        borderRadius: "5px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                        maxWidth: "99%"
                    }), m.present(e, "with-border") ? (s.style.padding = "2px 3px 3px 2px", r = s) : r = e, A.retinize(e), e.id = this.id, e.className += " " + this.classAttr.join(" "), e.lang = this.lang, this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Tweet"), w.every(this.ensureStyleSheetConsistency(e), this.sandbox.appendChild(r)).then(function() {
                        o.renderResolver.fulfill(o.sandbox)
                    }), i = this.layout(function() {
                        o.predefinedWidth = o.width, o.width = o.sandbox.width(o.width), o.collapseRegions()
                    }), i.then(function() {
                        o.constrainMedia(e, o.contentWidth(o.width)), o.setNarrow().then(function() {
                            o.layout(function() {
                                o.completeResolver.fulfill(o.sandbox.element())
                            })
                        })
                    }), n(e, this.baseScribeData(), this.partner), e) : void 0
                },
                render: function() {
                    var t = this,
                        e = "",
                        n = this.tweetId;
                    return n ? (this.hideCard && (e += "c"), this.hideThread && (e += "t"), e && (n += "-" + e), this.rendered().then(function(e) {
                        var n = t.srcEl;
                        n && n.parentNode && t.layout(function() {
                            n && n.parentNode && n.parentNode.removeChild(n)
                        }), "center" == t.align ? e.style({
                            margin: "7px auto",
                            cssFloat: "none"
                        }) : t.align && (t.width == t.dimensions.DEFAULT_WIDTH && (t.predefinedWidth = t.width = t.dimensions.NARROW_WIDTH), e.style({
                            cssFloat: t.align
                        })), t.sandbox.resizeToContent().then(function(e) {
                            return t.height = e, u.doLayoutAsync(), t.sandbox.resizeToContent().then(function(e) {
                                t.height = e
                            })
                        }).then(function() {
                            e.onresize(t.handleResize.bind(t))
                        }), e.style({
                            position: "static",
                            visibility: "visible"
                        }), u.doLayoutAsync()
                    }), r(n, this.lang, function(e) {
                        t.ready().then(function() {
                            t.element = t.create(e), t.readTimestampTranslations(), t.updateTimeStamps(), t.bindIntentHandlers(), t.bindUIHandlers(), t.bindPermalinkHandler(), u.doLayoutAsync()
                        })
                    }, function() {
                        i(t.tweetId, t.partner), t.completeResolver.fulfill(t.srcEl)
                    }), R.push(this.completed()), this.completed().then(this.scribePerformance.bind(this)), this.completed()) : (this.completeResolver.fulfill(this.srcEl), this.completed())
                },
                bindPermalinkHandler: function() {
                    var t = this;
                    m.present(this.element, "decider-tapOpensPermalink") && (I.delegate(this.element, "click", "A", function(t) {
                        I.stopPropagation(t)
                    }), I.delegate(this.element, "click", ".twitter-tweet", function(e) {
                        var n,
                            i;
                        l.getSelection(t.sandbox._win) || (n = t.element.querySelectorAll("blockquote.tweet"), i = n[n.length - 1], t.openPermalink(i), t.scribePermalinkClick(i, e), I.stopPropagation(e))
                    }))
                },
                scribePermalinkClick: function(t, e) {
                    var n = this.createScribeData(t);
                    S.interaction(e, n, !1)
                },
                openPermalink: function(t) {
                    var e = t.cite;
                    y.isStatus(e) && c.open(e)
                },
                scribePerformance: function() {
                    g.endAndTrack("render", "widgets-js-load", "tweet", this.baseScribeData())
                },
                addUrlParams: function(t) {
                    var e = this,
                        n = {
                            related: this.related,
                            partner: this.partner,
                            original_referer: E.rootDocumentLocation(),
                            tw_p: N
                        };
                    return this.addUrlParams = f(n, function(t) {
                        var n = p.closest(".tweet", t, e.element);
                        return {
                            tw_i: n.getAttribute("data-tweet-id")
                        }
                    }), this.addUrlParams(t)
                },
                baseScribeData: function() {
                    return {
                        widget_origin: E.rootDocumentLocation(),
                        widget_frame: E.isFramed() && E.currentDocumentLocation(),
                        message: this.partner
                    }
                },
                handleResize: function(t) {
                    var e = this;
                    t != this.width && (this.width = t, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(t)), this.collapseRegions(), this.sandbox.resizeToContent().then(function(t) {
                        e.height = t, x.get("events").trigger("resize", {
                            target: e.sandbox.element()
                        })
                    }), u.doLayoutAsync())
                },
                readTimestampTranslations: function() {
                    var t = this.element,
                        e = "data-dt-",
                        n = t.getAttribute(e + "months") || "";
                    this.datetime = new d(v.compact({
                        phrases: {
                            AM: t.getAttribute(e + "am"),
                            PM: t.getAttribute(e + "pm")
                        },
                        months: n.split("|"),
                        formats: {
                            full: t.getAttribute(e + "full")
                        }
                    }))
                },
                updateTimeStamps: function() {
                    var t = this.element.querySelector(".long-permalink"),
                        e = t.getAttribute("data-datetime"),
                        n = e && this.datetime.localTimeStamp(e),
                        i = t.getElementsByTagName("TIME")[0];
                    n && (this.layout(function() {
                        return i && i.innerHTML ? void (i.innerHTML = n) : void (t.innerHTML = n)
                    }, "Update Timestamp"), u.doLayoutAsync())
                }
            }), o.fetchAndRender = function() {
                var t,
                    e,
                    n = D,
                    i = [];
                if (D = {}, n.keys)
                    i = n.keys();
                else
                    for (t in n)
                        n.hasOwnProperty(t) && i.push(t);
                i.length && (T.init(), e = n[i[0]][0].lang, b.tweets({
                    ids: i.sort(),
                    lang: e,
                    complete: function(t) {
                        v.forIn(t, function(t, e) {
                            var i = n[t];
                            i.forEach(function(t) {
                                t.s && t.s.call(this, e)
                            }), delete n[t]
                        }), u.doLayout(), v.forIn(n, function(t, e) {
                            e.forEach(function(e) {
                                e.f && e.f.call(this, t)
                            })
                        }), u.doLayout()
                    }
                }), w.every.apply(null, R).then(function() {
                    T.flush()
                }), R = [])
            }, u.afterLoad(o.fetchAndRender), e.exports = o
        }, {
            14: 14,
            19: 19,
            23: 23,
            3: 3,
            30: 30,
            31: 31,
            32: 32,
            38: 38,
            4: 4,
            40: 40,
            41: 41,
            42: 42,
            46: 46,
            5: 5,
            51: 51,
            52: 52,
            6: 6,
            62: 62,
            65: 65,
            69: 69,
            7: 7,
            8: 8
        }],
        44: [function(t, e) {
            function n(t) {
                if (t) {
                    var e,
                        n,
                        i,
                        r;
                    o.apply(this, [t]), e = this.params(), n = e.size || this.dataAttr("size"), i = e.showScreenName || this.dataAttr("show-screen-name"), r = e.count || this.dataAttr("count"), this.classAttr.push("twitter-follow-button"), this.showScreenName = "false" != i, this.showCount = !(e.showCount === !1 || "false" == this.dataAttr("show-count")), "none" == r && (this.showCount = !1), this.explicitWidth = e.width || this.dataAttr("width") || "", this.screenName = e.screen_name || e.screenName || s.screenName(this.attr("href")), this.preview = e.preview || this.dataAttr("preview") || "", this.align = e.align || this.dataAttr("align") || "", this.size = "large" == n ? "l" : "m"
                }
            }
            var i = t(54),
                r = t(69),
                o = t(42),
                s = t(65),
                a = t(62),
                c = t(10);
            n.prototype = new o, r.aug(n.prototype, {
                iframeSource: "widgets/follow_button.964d0a94cc325dea7c2e73bb84c10df0.{{lang}}.html",
                widgetUrlParams: function() {
                    return r.compact({
                        screen_name: this.screenName,
                        lang: this.lang,
                        show_count: this.showCount,
                        show_screen_name: this.showScreenName,
                        align: this.align,
                        id: this.id,
                        preview: this.preview,
                        size: this.size,
                        partner: this.partner,
                        dnt: i.enabled(),
                        _: +new Date
                    })
                },
                width: function() {
                    if (this.calculatedWidth)
                        return this.calculatedWidth;
                    if (this.explicitWidth)
                        return this.explicitWidth;
                    var t,
                        e,
                        n = {
                            cnt: 13,
                            btn: 24,
                            xlcnt: 22,
                            xlbtn: 38
                        },
                        i = this.showScreenName ? "Follow %{screen_name}" : "Follow",
                        o = this._(i, {
                            screen_name: "@" + this.screenName
                        }),
                        s = this._(r.contains(["ja", "ko"], this.lang) ? "10k unit" : "M"),
                        a = this._("%{followers_count} followers", {
                            followers_count: "88888" + s
                        }),
                        l = 0,
                        u = 0,
                        h = this.styles.base;
                    return "l" == this.size ? (h = h.concat(this.styles.large), t = n.xlbtn, e = n.xlcnt) : (t = n.btn, e = n.cnt), this.showCount && (u = c(a, "", h).width + e), l = c(o, "", h.concat(this.styles.button)).width + t, this.calculatedWidth = l + u
                },
                render: function() {
                    if (!this.screenName)
                        return a.reject("Missing Screen Name");
                    var t = this,
                        e = this.makeIframeSource(),
                        n = this.create(e, this.dimensions(), {
                            title: this._("Twitter Follow Button")
                        }).then(function(e) {
                            return t.element = e
                        });
                    return n
                }
            }), e.exports = n
        }, {
            10: 10,
            42: 42,
            54: 54,
            62: 62,
            65: 65,
            69: 69
        }],
        45: [function(t, e) {
            function n(t) {
                f.open(t)
            }
            function i(e, n) {
                var i = t(35);
                i.openIntent(e, n)
            }
            function r(t, e) {
                if (d.isTwitterURL(t))
                    if (p.get("eventsHub") && e) {
                        var r = new o(a.generateId(), e);
                        a.add(r), i(t, e), m.get("events").trigger("click", {
                            target: e,
                            region: "intent",
                            type: "click",
                            data: {}
                        })
                    } else
                        n(t)
            }
            function o(t, e) {
                this.id = t, this.element = this.srcEl = e
            }
            function s(t) {
                this.srcEl = [], this.element = t
            }
            var a,
                c = t(11),
                l = t(42),
                u = t(69),
                h = t(62),
                d = t(65),
                f = t(22),
                m = t(19),
                p = t(18);
            s.prototype = new l, u.aug(s.prototype, {
                render: function() {
                    return a = this, h.fulfill(c.body)
                }
            }), s.open = r, e.exports = s
        }, {
            11: 11,
            18: 18,
            19: 19,
            22: 22,
            35: 35,
            42: 42,
            62: 62,
            65: 65,
            69: 69
        }],
        46: [function(t, e) {
            function n() {
                o = i.VALID_COLOR.test(h.val("widgets:link-color")) && RegExp.$1, a = i.VALID_COLOR.test(h.val("widgets:border-color")) && RegExp.$1, s = h.val("widgets:theme")
            }
            function i(t) {
                if (t) {
                    var e,
                        n = this;
                    this.readyPromise = new _(function(t) {
                        n.readyResolver = t
                    }), this.renderedPromise = new _(function(t) {
                        n.renderResolver = t
                    }), l.apply(this, [t]), e = this.params(), this.targetEl = this.srcEl && this.srcEl.parentNode || e.targetEl || c.body, this.predefinedWidth = i.VALID_UNIT.test(e.width || this.attr("width")) && RegExp.$1, this.layout(function() {
                        return n.containerWidth = v.effectiveWidth(n.targetEl)
                    }).then(function(t) {
                        var r = n.predefinedWidth || t || n.dimensions.DEFAULT_WIDTH;
                        n.height = i.VALID_UNIT.test(e.height || n.attr("height")) && RegExp.$1, n.width = Math.max(n.dimensions.MIN_WIDTH, Math.min(r, n.dimensions.DEFAULT_WIDTH))
                    }), this.linkColor = i.VALID_COLOR.test(e.linkColor || this.dataAttr("link-color")) ? RegExp.$1 : o, this.borderColor = i.VALID_COLOR.test(e.borderColor || this.dataAttr("border-color")) ? RegExp.$1 : a, this.theme = e.theme || this.attr("data-theme") || s, this.theme = /(dark|light)/.test(this.theme) ? this.theme : "", this.classAttr.push(b.touch() ? "is-touch" : "not-touch"), b.ie9() && this.classAttr.push("ie9"), this.sandboxCreated = y.createSandbox({
                        "class": this.renderedClassNames,
                        id: this.id,
                        allowfullscreen: ""
                    }, {
                        position: "absolute",
                        visibility: "hidden"
                    }, function(t) {
                        n.srcEl ? n.targetEl.insertBefore(t, n.srcEl) : n.targetEl.appendChild(t)
                    }, this.layout).then(function(t) {
                        n.setupSandbox(t), new m(t.element().contentWindow)
                    }), this.rendered().then(function(t) {
                        n.applyVisibleSandboxStyles(t)
                    })
                }
            }
            function r(t, e) {
                return t + e
            }
            var o,
                s,
                a,
                c = t(11),
                l = t(42),
                u = t(45),
                h = t(17),
                d = t(40),
                f = t(32),
                m = t(73),
                p = t(5),
                g = t(7),
                w = t(6),
                v = t(9),
                y = t(28),
                b = t(55),
                _ = t(62),
                T = t(65),
                A = t(66),
                E = t(69),
                x = [".customisable", ".customisable:link", ".customisable:visited", ".customisable:hover", ".customisable:focus", ".customisable:active", ".customisable-highlight:hover", ".customisable-highlight:focus", "a:hover .customisable-highlight", "a:focus .customisable-highlight"],
                I = ["a:hover .ic-mask", "a:focus .ic-mask"],
                S = [".customisable-border"],
                N = [".timeline-header h1.summary", ".timeline-header h1.summary a:link", ".timeline-header h1.summary a:visited"],
                D = {
                    TWEET: 0,
                    RETWEET: 10
                };
            i.prototype = new l, E.aug(i.prototype, {
                styleSheetUrl: function() {
                    throw new Error("must set styleSheetUrl")
                },
                setupSandbox: function(t) {
                    var e = this;
                    this.sandbox = t, _.some(e.applyInitialSandboxStyles(t), t.appendCss(".SandboxRoot { display:none }"), t.setBaseTarget("_blank"), t.appendStyleSheet(this.styleSheetUrl(this.lang, this.theme))).then(function() {
                        e.readyResolver.fulfill(t)
                    })
                },
                ready: function() {
                    return this.readyPromise
                },
                rendered: function() {
                    return this.renderedPromise
                },
                contentWidth: function(t) {
                    var e = this.dimensions,
                        n = this.borderless ? 0 : e.BORDERS,
                        i = this.fullBleedPhoto ? 0 : this.chromeless && this.narrow ? e.NARROW_MEDIA_PADDING_CL : this.chromeless ? e.WIDE_MEDIA_PADDING_CL : this.narrow ? e.NARROW_MEDIA_PADDING : e.WIDE_MEDIA_PADDING;

                    return (t || this.width) - (i + n)
                },
                applyInitialSandboxStyles: function(t) {
                    var e = this;
                    return t.style({
                        border: "none",
                        maxWidth: "100%",
                        minWidth: e.dimensions.MIN_WIDTH + "px",
                        margin: e.dimensions.MARGIN,
                        padding: "0",
                        display: "block",
                        position: "absolute",
                        visibility: "hidden"
                    }, !0)
                },
                applyVisibleSandboxStyles: function(t) {
                    return t.style({
                        position: "static",
                        visibility: "visible"
                    })
                },
                addSiteStyles: function() {
                    function t(t) {
                        return ("dark" == e.theme ? ".thm-dark " : "") + t
                    }
                    var e = this,
                        n = [];
                    return this.headingStyle && n.push(N.map(t).join(",") + "{" + this.headingStyle + "}"), this.linkColor && (n.push(x.map(t).join(",") + "{color:" + this.linkColor + "}"), n.push(I.map(t).join(",") + "{background-color:" + this.linkColor + "}")), this.borderColor && n.push(S.map(t).concat("dark" == this.theme ? [".thm-dark.customisable-border"] : []).join(",") + "{border-color:" + this.borderColor + "}"), n.length ? this.sandbox.appendCss(n.join("")) : void 0
                },
                setNarrow: function() {
                    var t = this,
                        e = this.narrow;
                    return this.narrow = this.width < this.dimensions.NARROW_WIDTH, e != this.narrow ? this.layout(function() {
                        return p.toggle(t.element, "var-narrow", t.narrow)
                    }) : _.fulfill(this.narrow)
                },
                createScribeData: function(t) {
                    var e = E.aug({}, this.baseScribeData(), {
                        item_ids: [],
                        item_details: this.extractTweetScribeDetails(t)
                    });
                    return E.forIn(e.item_details, function(t) {
                        e.item_ids.push(t)
                    }), e
                },
                bindUIHandlers: function() {
                    var t = this.element;
                    w.delegate(t, "click", ".MediaCard-dismissNsfw", function() {
                        var e = g.closest(".MediaCard", this, t);
                        p.remove(e, "MediaCard--nsfw")
                    })
                },
                bindIntentHandlers: function() {
                    function t(t) {
                        var i = g.closest(".tweet", this, n),
                            r = e.createScribeData(i);
                        f.interaction(t, r, !0)
                    }
                    var e = this,
                        n = this.element;
                    w.delegate(n, "click", "A", t), w.delegate(n, "click", "BUTTON", t), w.delegate(n, "click", ".profile", function() {
                        e.addUrlParams(this)
                    }), w.delegate(n, "click", ".follow-button", function(t) {
                        var n;
                        t.altKey || t.metaKey || t.shiftKey || b.ios() || b.android() || A.asBoolean(this.getAttribute("data-age-gate")) || (n = T.intentForFollowURL(this.href, !0), n && (u.open(n, e.sandbox.element()), w.preventDefault(t)))
                    }), w.delegate(n, "click", ".web-intent", function(t) {
                        e.addUrlParams(this), t.altKey || t.metaKey || t.shiftKey || (u.open(this.href, e.sandbox.element()), w.preventDefault(t))
                    })
                },
                baseScribeData: function() {
                    return {}
                },
                extractTweetScribeDetails: function(t) {
                    var e,
                        n,
                        i = {};
                    return t ? (e = t.getAttribute("data-tweet-id"), n = t.getAttribute("data-rendered-tweet-id") || e, n == e ? i[n] = {
                        item_type: D.TWEET
                    } : e && (i[n] = {
                        item_type: D.RETWEET,
                        target_type: D.TWEET,
                        target_id: e
                    }), i) : i
                },
                constrainMedia: function(t, e) {
                    return d.constrainMedia(t || this.element, e || this.contentWidth(), this.dimensions.maxHeight, this.layout)
                },
                collapseRegions: function() {
                    var t = this;
                    E.toRealArray(this.element.querySelectorAll(".collapsible-container")).forEach(function(e) {
                        var n,
                            i,
                            o = E.toRealArray(e.children),
                            s = o.length && e.offsetWidth,
                            a = o.length && o.map(function(t) {
                                return t.offsetWidth
                            }),
                            c = o.length;
                        if (o.length)
                            for (; c > 0;) {
                                if (c--, n = a.reduce(r, 0), !s || !n)
                                    return;
                                if (s > n)
                                    return;
                                i = o[c].getAttribute("data-collapsed-class"), i && (p.add(t.element, i), a[c] = o[c].offsetWidth)
                            }
                    })
                }
            }), i.VALID_UNIT = /^([0-9]+)( ?px)?$/, i.VALID_COLOR = /^(#(?:[0-9a-f]{3}|[0-9a-f]{6}))$/i, n(), e.exports = i
        }, {
            11: 11,
            17: 17,
            28: 28,
            32: 32,
            40: 40,
            42: 42,
            45: 45,
            5: 5,
            55: 55,
            6: 6,
            62: 62,
            65: 65,
            66: 66,
            69: 69,
            7: 7,
            73: 73,
            9: 9
        }],
        47: [function(t, e) {
            function n(t) {
                if (t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        a,
                        c,
                        l;
                    s.apply(this, [t]), e = this.params(), n = (e.chrome || this.dataAttr("chrome") || "").split(" "), this.preview = e.previewParams, this.widgetId = e.widgetId || this.dataAttr("widget-id"), this.instanceId = ++q, this.cursors = {
                        maxPosition: 0,
                        minPosition: 0
                    }, this.override = (r = e.screenName || this.dataAttr("screen-name")) || (o = e.userId || this.dataAttr("user-id")) ? {
                        overrideType: "user",
                        overrideId: o,
                        overrideName: r,
                        withReplies: w.asBoolean(e.showReplies || this.dataAttr("show-replies")) ? "true" : "false"
                    } : (r = e.favoritesScreenName || this.dataAttr("favorites-screen-name")) || (o = e.favoritesUserId || this.dataAttr("favorites-user-id")) ? {
                        overrideType: "favorites",
                        overrideId: o,
                        overrideName: r
                    } : ((r = e.listOwnerScreenName || this.dataAttr("list-owner-screen-name")) || (o = e.listOwnerId || this.dataAttr("list-owner-id"))) && ((a = e.listId || this.dataAttr("list-id")) || (c = e.listSlug || this.dataAttr("list-slug"))) ? {
                        overrideType: "list",
                        overrideOwnerId: o,
                        overrideOwnerName: r,
                        overrideId: a,
                        overrideName: c
                    } : (l = e.customTimelineId || this.dataAttr("custom-timeline-id")) ? {
                        overrideType: "custom",
                        overrideId: l
                    } : {}, this.tweetLimit = w.asInt(e.tweetLimit || this.dataAttr("tweet-limit")), this.staticTimeline = this.tweetLimit > 0, n.length && (i = v.contains(n, "none"), this.chromeless = i || v.contains(n, "transparent"), this.headerless = i || v.contains(n, "noheader"), this.footerless = i || v.contains(n, "nofooter"), this.borderless = i || v.contains(n, "noborders"), this.noscrollbar = v.contains(n, "noscrollbar")), this.headingStyle = p.sanitize(e.headingStyle || this.dataAttr("heading-style"), void 0, !0), this.classAttr.push("twitter-timeline-rendered"), this.ariaPolite = e.ariaPolite || this.dataAttr("aria-polite")
                }
            }
            var i = t(14),
                r = t(3),
                o = t(42),
                s = t(46),
                a = t(51),
                c = t(2),
                l = t(23),
                u = t(38),
                h = t(40),
                d = t(30),
                f = t(31),
                m = t(41),
                p = t(50),
                g = t(55),
                w = t(66),
                v = t(69),
                y = t(6),
                b = t(5),
                _ = t(7),
                T = t(54),
                A = t(52),
                E = t(19),
                x = t(18),
                I = {
                    CLIENT_SIDE_USER: 0,
                    CLIENT_SIDE_APP: 2
                },
                S = ".timeline",
                N = ".new-tweets-bar",
                D = ".timeline-header",
                R = ".timeline-footer",
                k = ".stream",
                P = ".h-feed",
                L = ".tweet",
                C = ".detail-expander",
                M = ".expand",
                O = ".permalink",
                F = ".no-more-pane",
                j = "expanded",
                H = "pending-scroll-in",
                W = "pending-new-tweet-display",
                U = "pending-new-tweet",
                q = 0;
            n.prototype = new s, v.aug(n.prototype, {
                renderedClassNames: "twitter-timeline twitter-timeline-rendered",
                dimensions: {
                    DEFAULT_HEIGHT: "600",
                    DEFAULT_WIDTH: "520",
                    NARROW_WIDTH: "320",
                    maxHeight: "375",
                    MIN_WIDTH: "180",
                    MIN_HEIGHT: "200",
                    MARGIN: "0",
                    WIDE_MEDIA_PADDING: 81,
                    NARROW_MEDIA_PADDING: 16,
                    WIDE_MEDIA_PADDING_CL: 60,
                    NARROW_MEDIA_PADDING_CL: 12,
                    BORDERS: 2
                },
                styleSheetUrl: r.timeline,
                create: function(t) {
                    var e,
                        n,
                        i,
                        r,
                        o = this,
                        s = this.sandbox.createElement("div"),
                        a = [];
                    return s.innerHTML = t.body, (e = s.children[0] || !1) ? (this.reconfigure(t.config), this.discardStaticOverflow(e), this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Timeline"), h.retinize(e), this.constrainMedia(e), this.searchQuery = e.getAttribute("data-search-query"), this.profileId = e.getAttribute("data-profile-id"), this.timelineType = e.getAttribute("data-timeline-type"), r = this.getTweetDetails(s.querySelector(P)), v.forIn(r, function(t) {
                        a.push(t)
                    }), i = this.baseScribeData(), i.item_ids = a, i.item_details = r, this.timelineType && f.clientEvent({
                        page: this.timelineType + "_timeline",
                        component: "timeline",
                        element: "initial",
                        action: a.length ? "results" : "no_results"
                    }, i, !0), f.clientEvent({
                        page: "timeline",
                        component: "timeline",
                        element: "initial",
                        action: a.length ? "results" : "no_results"
                    }, i, !0), d.scribeTimelineAudienceImpression(), f.flush(), "assertive" == this.ariaPolite && (n = e.querySelector(N), n.setAttribute("aria-polite", "assertive")), e.id = this.id, e.className += " " + this.classAttr.join(" "), e.lang = this.lang, this.ready().then(function(t) {
                        t.appendChild(e).then(function() {
                            o.renderResolver.fulfill(o.sandbox)
                        }), t.style({
                            display: "inline-block"
                        }), o.layout(function() {
                            o.srcEl && o.srcEl.parentNode && o.srcEl.parentNode.removeChild(o.srcEl), o.predefinedWidth = o.width, o.predefinedHeight = o.height, o.width = t.width(o.width), o.height = t.height(o.height)
                        }).then(function() {
                            o.setNarrow(), o.sandbox.onresize(o.handleResize.bind(o)), o.completeResolver.fulfill(o.sandbox.element())
                        })
                    }), e) : void 0
                },
                render: function() {
                    var t = this;
                    return this.preview || this.widgetId ? (this.rendered().then(this.staticTimeline ? function(t) {
                        t.resizeToContent(), o.doLayoutAsync()
                    } : function() {
                        t.recalculateStreamHeight(), o.doLayoutAsync()
                    }), this.preview ? this.getPreviewTimeline() : this.getTimeline(), this.completed().then(this.scribePerformance.bind(this)), this.completed()) : (this.completeResolver.reject(400), this.completed())
                },
                scribePerformance: function() {
                    l.endAndTrack("render", "widgets-js-load", "timeline", this.baseScribeData())
                },
                getPreviewTimeline: function() {
                    var t = this;
                    u.timelinePreview({
                        success: function(e) {
                            t.ready().then(function() {
                                t.element = t.create(e), t.readTranslations(), t.bindInteractions(), t.updateCursors(e.headers, {
                                    initial: !0
                                }), o.doLayoutAsync()
                            })
                        },
                        error: function(e) {
                            return e && e.headers ? void t.completeResolver.reject(e.headers.status) : void t.completeResolver.fulfill(t.srcEl)
                        },
                        params: this.preview
                    })
                },
                getTimeline: function() {
                    var t = this;
                    f.init(), u.timeline(v.aug({
                        id: this.widgetId,
                        instanceId: this.instanceId,
                        dnt: T.enabled(),
                        lang: this.lang,
                        success: function(e) {
                            t.ready().then(function() {
                                t.element = t.create(e), t.readTranslations(), t.bindInteractions(), t.updateTimeStamps(), t.updateCursors(e.headers, {
                                    initial: !0
                                }), e.headers.xPolling && /\d/.test(e.headers.xPolling) && (t.pollInterval = 1e3 * e.headers.xPolling), t.staticTimeline || t.schedulePolling(), o.doLayoutAsync()
                            })
                        },
                        error: function(e) {
                            return e && e.headers ? void t.completeResolver.reject(e.headers.status) : void t.completeResolver.fulfill(t.srcEl)
                        }
                    }, this.override))
                },
                reconfigure: function(t) {
                    this.lang = t.lang, this.theme || (this.theme = t.theme), "dark" == this.theme && this.classAttr.push("thm-dark"), this.chromeless && this.classAttr.push("var-chromeless"), this.borderless && this.classAttr.push("var-borderless"), this.headerless && this.classAttr.push("var-headerless"), this.footerless && this.classAttr.push("var-footerless"), this.staticTimeline && this.classAttr.push("var-static"), !this.linkColor && t.linkColor && s.VALID_COLOR.test(t.linkColor) && (this.linkColor = RegExp.$1), !this.height && s.VALID_UNIT.test(t.height) && (this.height = RegExp.$1), this.height = Math.max(this.dimensions.MIN_HEIGHT, this.height ? this.height : this.dimensions.DEFAULT_HEIGHT), this.preview && this.classAttr.push("var-preview"), this.narrow = this.width <= this.dimensions.NARROW_WIDTH, this.narrow && this.classAttr.push("var-narrow"), this.addSiteStyles()
                },
                getTweetDetails: function(t) {
                    var e,
                        n = this,
                        i = {};
                    return e = t && t.children || [], v.toRealArray(e).forEach(function(t) {
                        v.aug(i, n.extractTweetScribeDetails(t))
                    }), i
                },
                baseScribeData: function() {
                    return {
                        widget_id: this.widgetId,
                        widget_origin: A.rootDocumentLocation(),
                        widget_frame: A.isFramed() && A.currentDocumentLocation(),
                        message: this.partner,
                        query: this.searchQuery,
                        profile_id: this.profileId
                    }
                },
                bindInteractions: function() {
                    var t = this,
                        e = this.element,
                        n = !0;
                    this.bindIntentHandlers(), this.bindUIHandlers(), y.delegate(e, "click", ".load-tweets", function(e) {
                        n && (n = !1, t.forceLoad(), y.stop(e))
                    }), y.delegate(e, "click", ".display-sensitive-image", function(n) {
                        t.showNSFW(_.closest(L, this, e)), y.stop(n)
                    }), y.delegate(e, "mouseover", S, function() {
                        t.mouseOver = !0
                    }), y.delegate(e, "mouseout", S, function() {
                        t.mouseOver = !1
                    }), y.delegate(e, "mouseover", N, function() {
                        t.mouseOverNotifier = !0
                    }), y.delegate(e, "mouseout", N, function() {
                        t.mouseOverNotifier = !1, i.setTimeout(function() {
                            t.hideNewTweetNotifier()
                        }, 3e3)
                    }), this.staticTimeline || (y.delegate(e, "click", M, function(n) {
                        n.altKey || n.metaKey || n.shiftKey || (t.toggleExpando(_.closest(L, this, e)), y.stop(n))
                    }), y.delegate(e, "click", "A", function(t) {
                        y.stopPropagation(t)
                    }), y.delegate(e, "click", ".with-expansion", function(e) {
                        t.toggleExpando(this), y.stop(e)
                    }), y.delegate(e, "click", ".load-more", function() {
                        t.loadMore()
                    }), y.delegate(e, "click", N, function() {
                        t.scrollToTop(), t.hideNewTweetNotifier(!0)
                    }))
                },
                scrollToTop: function() {
                    var t = this.element.querySelector(k);
                    t.scrollTop = 0, t.focus()
                },
                update: function() {
                    var t = this,
                        e = this.element.querySelector(P),
                        n = e && e.children[0],
                        i = n && n.getAttribute("data-tweet-id");
                    this.updateTimeStamps(), this.requestTweets(i, !0, function(e) {
                        e.childNodes.length > 0 && t.insertNewTweets(e)
                    })
                },
                loadMore: function() {
                    var t = this,
                        e = v.toRealArray(this.element.querySelectorAll(L)).pop(),
                        n = e && e.getAttribute("data-tweet-id");
                    this.requestTweets(n, !1, function(e) {
                        var i = t.element.querySelector(F),
                            r = e.childNodes[0];
                        return i.style.cssText = "", r && r.getAttribute("data-tweet-id") == n && e.removeChild(r), e.childNodes.length > 0 ? void t.appendTweets(e) : (b.add(t.element, "no-more"), void i.focus())
                    })
                },
                forceLoad: function() {
                    var t = this,
                        e = !!this.element.querySelectorAll(P).length;
                    this.requestTweets(1, !0, function(n) {
                        n.childNodes.length && (t[e ? "insertNewTweets" : "appendTweets"](n), b.add(t.element, "has-tweets"))
                    })
                },
                schedulePolling: function(t) {
                    var e = this;
                    null !== this.pollInterval && (t = x.get("timeline.pollInterval") || t || this.pollInterval || 1e4, t > -1 && i.setTimeout(function() {
                        e.isUpdating || e.update(), e.schedulePolling()
                    }, t))
                },
                updateCursors: function(t, e) {
                    (e || {}).initial ? (this.cursors.maxPosition = t.maxPosition, this.cursors.minPosition = t.minPosition) : (e || {}).newer ? this.cursors.maxPosition = t.maxPosition || this.cursors.maxPosition : this.cursors.minPosition = t.minPosition || this.cursors.minPosition
                },
                requestTweets: function(t, e, n) {
                    var i = this,
                        r = {
                            id: this.widgetId,
                            instanceId: this.instanceId,
                            screenName: this.widgetScreenName,
                            userId: this.widgetUserId,
                            withReplies: this.widgetShowReplies,
                            dnt: T.enabled(),
                            lang: this.lang
                        };
                    e && this.cursors.maxPosition ? r.minPosition = this.cursors.maxPosition : !e && this.cursors.minPosition ? r.maxPosition = this.cursors.minPosition : e ? r.sinceId = t : r.maxId = t, r.complete = function() {
                        i.isUpdating = !1
                    }, r.error = function(t) {
                        if (t && t.headers) {
                            if ("404" == t.headers.status)
                                return void (i.pollInterval = null);
                            if ("503" == t.headers.status)
                                return void (i.pollInterval *= 1.5)
                        }
                    }, r.success = function(t) {
                        var r,
                            o,
                            s = i.sandbox.createDocumentFragment(),
                            a = i.sandbox.createElement("ol"),
                            c = [];
                        if (i.updateCursors(t.headers, {
                            newer: e
                        }), t && t.headers && t.headers.xPolling && /\d+/.test(t.headers.xPolling) && (i.pollInterval = 1e3 * t.headers.xPolling), t && void 0 !== t.body) {
                            if (a.innerHTML = t.body, a.children[0] && "LI" != a.children[0].tagName)
                                return;
                            for (o = i.getTweetDetails(a), v.forIn(o, function(t) {
                                c.push(t)
                            }), c.length && (r = i.baseScribeData(), r.item_ids = c, r.item_details = o, r.event_initiator = e ? I.CLIENT_SIDE_APP : I.CLIENT_SIDE_USER, i.timelineType && f.clientEvent({
                                page: i.timelineType + "_timeline",
                                component: "timeline",
                                element: "initial",
                                action: c.length ? "results" : "no_results"
                            }, r, !0), f.clientEvent({
                                page: "timeline",
                                component: "timeline",
                                element: e ? "newer" : "older",
                                action: "results"
                            }, r, !0), f.flush()), h.retinize(a), i.constrainMedia(a); a.children[0];)
                                s.appendChild(a.children[0]);
                            n(s)
                        }
                    }, u.timelinePoll(v.aug(r, this.override))
                },
                insertNewTweets: function(t) {
                    var e,
                        n = this,
                        r = this.element.querySelector(k),
                        o = r.querySelector(P),
                        s = o.offsetHeight;
                    return o.insertBefore(t, o.firstChild), e = o.offsetHeight - s, E.get("events").trigger("timelineUpdated", {
                        target: this.sandbox.element(),
                        region: "newer"
                    }), r.scrollTop > 40 || this.mouseIsOver() ? (r.scrollTop = r.scrollTop + e, this.updateTimeStamps(), void this.showNewTweetNotifier()) : (b.remove(this.element, H), o.style.cssText = "margin-top: -" + e + "px", i.setTimeout(function() {
                        r.scrollTop = 0, b.add(n.element, H), g.cssTransitions() ? o.style.cssText = "" : c.animate(function(t) {
                            o.style.cssText = e > t ? "margin-top: -" + (e - t) + "px" : ""
                        }, e, 500, c.easeOut)
                    }, 500), this.updateTimeStamps(), void ("custom" != this.timelineType && this.gcTweets(50)))
                },
                appendTweets: function(t) {
                    var e = this.element.querySelector(P);
                    e.appendChild(t), this.updateTimeStamps(), E.get("events").trigger("timelineUpdated", {
                        target: this.sandbox.element(),
                        region: "older"
                    })
                },
                gcTweets: function(t) {
                    var e,
                        n = this.element.querySelector(P),
                        i = n.children.length;
                    for (t = t || 50; i > t && (e = n.children[i - 1]); i--)
                        n.removeChild(e)
                },
                showNewTweetNotifier: function() {
                    var t = this,
                        e = this.element.querySelector(N),
                        n = e.children[0];
                    e.style.cssText = "", e.removeChild(n), e.appendChild(n), b.add(this.element, W), i.setTimeout(function() {
                        b.add(t.element, U)
                    }, 10), this.newNoticeDisplayTime = +new Date, i.setTimeout(function() {
                        t.hideNewTweetNotifier()
                    }, 5e3)
                },
                hideNewTweetNotifier: function(t) {
                    var e = this;
                    (t || !this.mouseOverNotifier) && (b.remove(this.element, U), i.setTimeout(function() {
                        b.remove(e.element, W)
                    }, 500))
                },
                discardStaticOverflow: function(t) {
                    var e,
                        n = t.querySelector(P);
                    if (this.staticTimeline)
                        for (this.height = 0; e = n.children[this.tweetLimit];)
                            n.removeChild(e)
                },
                hideStreamScrollBar: function() {
                    var t,
                        e = this.element.querySelector(k),
                        n = this.element.querySelector(P);
                    e.style.width = "", t = this.element.offsetWidth - n.offsetWidth, t > 0 && (e.style.width = this.element.offsetWidth + t + "px")
                },
                readTranslations: function() {
                    var t = this.element,
                        e = "data-dt-";
                    this.datetime = new a(v.compact({
                        phrases: {
                            now: t.getAttribute(e + "now"),
                            s: t.getAttribute(e + "s"),
                            m: t.getAttribute(e + "m"),
                            h: t.getAttribute(e + "h"),
                            second: t.getAttribute(e + "second"),
                            seconds: t.getAttribute(e + "seconds"),
                            minute: t.getAttribute(e + "minute"),
                            minutes: t.getAttribute(e + "minutes"),
                            hour: t.getAttribute(e + "hour"),
                            hours: t.getAttribute(e + "hours")
                        },
                        months: t.getAttribute(e + "months").split("|"),
                        formats: {
                            abbr: t.getAttribute(e + "abbr"),
                            shortdate: t.getAttribute(e + "short"),
                            longdate: t.getAttribute(e + "long")
                        }
                    }))
                },
                updateTimeStamps: function() {
                    for (var t, e, n, i, r = this.element.querySelectorAll(O), o = 0; t = r[o]; o++)
                        n = t.getAttribute("data-datetime"), i = n && this.datetime.timeAgo(n, this.i18n), e = t.getElementsByTagName("TIME")[0], i && (e && e.innerHTML ? e.innerHTML = i : t.innerHTML = i)
                },
                mouseIsOver: function() {
                    return this.mouseOver
                },
                addUrlParams: function(t) {
                    var e = this,
                        n = {
                            tw_w: this.widgetId,
                            related: this.related,
                            partner: this.partner,
                            query: this.searchQuery,
                            profile_id: this.profileId,
                            original_referer: A.rootDocumentLocation(),
                            tw_p: "embeddedtimeline"
                        };
                    return this.addUrlParams = m(n, function(t) {
                        var n = _.closest(L, t, e.element);
                        return n && {
                                tw_i: n.getAttribute("data-tweet-id")
                            }
                    }), this.addUrlParams(t)
                },
                showNSFW: function(t) {
                    var e,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a = t.querySelector(".nsfw"),
                        c = 0;
                    a && (n = h.scaleDimensions(a.getAttribute("data-width"), a.getAttribute("data-height"), this.contentWidth(), a.getAttribute("data-height")), e = !!(r = a.getAttribute("data-player")), e ? o = this.sandbox.createElement("iframe") : (o = this.sandbox.createElement("img"), r = a.getAttribute(g.retina() ? "data-image-2x" : "data-image"), o.alt = a.getAttribute("data-alt"), s = this.sandbox.createElement("a"), s.href = a.getAttribute("data-href"), s.appendChild(o)), o.title = a.getAttribute("data-title"), o.src = r, o.width = n.width, o.height = n.height, i = _.closest(C, a, t), c = n.height - a.offsetHeight, a.parentNode.replaceChild(e ? o : s, a), i.style.cssText = "height:" + (i.offsetHeight + c) + "px")
                },
                toggleExpando: function(t) {
                    var e,
                        n,
                        i = t.querySelector(C),
                        r = i && i.children[0],
                        s = r && r.getAttribute("data-expanded-media"),
                        a = 0,
                        c = t.querySelector(M),
                        l = c && c.getElementsByTagName("B")[0],
                        u = l && (l.innerText || l.textContent);
                    if (l) {
                        if (this.layout(function() {
                            l.innerHTML = c.getAttribute("data-toggled-text"), c.setAttribute("data-toggled-text", u)
                        }), b.present(t, j))
                            return this.layout(function() {
                                b.remove(t, j)
                            }), i ? (this.layout(function() {
                                i.style.cssText = "", r.innerHTML = ""
                            }), void o.doLayout()) : void o.doLayout();
                        s && (e = this.sandbox.createElement("DIV"), e.innerHTML = s, h.retinize(e), a = this.constrainMedia(e), this.layout(function() {
                            r.appendChild(e)
                        })), i && this.layout(function() {
                            n = Math.max(r.offsetHeight, a), i.style.cssText = "height:" + n + "px"
                        }), this.layout(function() {
                            b.add(t, j)
                        }), o.doLayout()
                    }
                },
                recalculateStreamHeight: function(t) {
                    var e = this,
                        n = this.element.querySelector(D),
                        i = this.element.querySelector(R),
                        r = this.element.querySelector(k);
                    this.layout(function() {
                        var o = n.offsetHeight + (i ? i.offsetHeight : 0),
                            s = t || e.sandbox.height();
                        r.style.cssText = "height:" + (s - o - 2) + "px", e.noscrollbar && e.hideStreamScrollBar()
                    })
                },
                handleResize: function(t, e) {
                    var n = this,
                        i = Math.min(this.dimensions.DEFAULT_WIDTH, Math.max(this.dimensions.MIN_WIDTH, Math.min(this.predefinedWidth || this.dimensions.DEFAULT_WIDTH, t)));
                    (i != this.width || e != this.height) && (this.width = i, this.height = e, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(i)), this.staticTimeline ? this.layout(function() {
                        n.height = n.element.offsetHeight, n.sandbox.height(n.height), E.get("events").trigger("resize", {
                            target: n.sandbox.element()
                        })
                    }) : (this.recalculateStreamHeight(e), E.get("events").trigger("resize", {
                        target: this.sandbox.element()
                    })), o.doLayoutAsync())
                }
            }), e.exports = n
        }, {
            14: 14,
            18: 18,
            19: 19,
            2: 2,
            23: 23,
            3: 3,
            30: 30,
            31: 31,
            38: 38,
            40: 40,
            41: 41,
            42: 42,
            46: 46,
            5: 5,
            50: 50,
            51: 51,
            52: 52,
            54: 54,
            55: 55,
            6: 6,
            66: 66,
            69: 69,
            7: 7
        }],
        48: [function(t, e) {
            function n(t) {
                o.apply(this, [t]);
                var e = this.params(),
                    n = e.count || this.dataAttr("count"),
                    i = e.size || this.dataAttr("size"),
                    r = c.getScreenNameFromPage(),
                    u = "" + (e.shareWithRetweet || this.dataAttr("share-with-retweet") || s.val("share-with-retweet"));
                this.classAttr.push("twitter-tweet-button"), "hashtag" == e.type || a.contains(this.classAttr, "twitter-hashtag-button") ? (this.type = "hashtag", this.classAttr.push("twitter-hashtag-button")) : "mention" == e.type || a.contains(this.classAttr, "twitter-mention-button") ? (this.type = "mention", this.classAttr.push("twitter-mention-button")) : this.classAttr.push("twitter-share-button"), this.text = e.text || this.dataAttr("text"), this.text && /\+/.test(this.text) && !/ /.test(this.text) && (this.text = this.text.replace(/\+/g, " ")), this.counturl = e.counturl || this.dataAttr("counturl"), this.searchlink = e.searchlink || this.dataAttr("searchlink"), this.button_hashtag = l.hashTag(e.button_hashtag || e.hashtag || this.dataAttr("button-hashtag"), !1), this.size = "large" == i ? "l" : "m", this.align = e.align || this.dataAttr("align") || "", this.via = e.via || this.dataAttr("via"), this.hashtags = e.hashtags || this.dataAttr("hashtags"), this.screen_name = l.screenName(e.screen_name || e.screenName || this.dataAttr("button-screen-name")), this.url = e.url || this.dataAttr("url"), this.type ? (this.count = "none", this.shareWithRetweet = "never", r && (this.related = this.related ? r + "," + this.related : r)) : (this.text = this.text || d, this.url = this.url || c.getCanonicalURL() || f, this.count = a.contains(m, n) ? n : "horizontal", this.count = "vertical" == this.count && "l" == this.size ? "none" : this.count, this.via = this.via || r, u && a.contains(p, u) && (this.shareWithRetweet = u.replace("-", "_")))
            }
            var i = t(11),
                r = t(12),
                o = t(42),
                s = t(17),
                a = t(69),
                c = t(68),
                l = t(65),
                u = t(10),
                h = t(54),
                d = i.title,
                f = r.href,
                m = ["vertical", "horizontal", "none"],
                p = ["never", "publisher-first", "publisher-only", "author-first", "author-only"];
            n.prototype = new o, a.aug(n.prototype, {
                iframeSource: "widgets/tweet_button.7d9dd43d4f18b1bb51cc9d8f0997995e.{{lang}}.html",
                widgetUrlParams: function() {
                    return a.compact({
                        text: this.text,
                        url: this.url,
                        via: this.via,
                        related: this.related,
                        count: this.count,
                        lang: this.lang,
                        counturl: this.counturl,
                        searchlink: this.searchlink,
                        placeid: this.placeid,
                        original_referer: r.href,
                        id: this.id,
                        size: this.size,
                        type: this.type,
                        screen_name: this.screen_name,
                        share_with_retweet: this.shareWithRetweet,
                        button_hashtag: this.button_hashtag,
                        hashtags: this.hashtags,
                        align: this.align,
                        partner: this.partner,
                        dnt: h.enabled(),
                        _: +new Date
                    })
                },
                height: function() {
                    return "vertical" == this.count ? 62 : "m" == this.size ? 20 : 28
                },
                width: function() {
                    var t = {
                            ver: 8,
                            cnt: 14,
                            btn: 24,
                            xlcnt: 18,
                            xlbtn: 38
                        },
                        e = "vertical" == this.count,
                        n = "hashtag" == this.type && this.button_hashtag ? "Tweet %{hashtag}" : "mention" == this.type && this.screen_name ? "Tweet to %{name}" : "Tweet",
                        i = this._(n, {
                            name: "@" + this.screen_name,
                            hashtag: "#" + this.button_hashtag
                        }),
                        r = this._("K"),
                        o = this._("100K+"),
                        s = (e ? "8888" : "88888") + r,
                        c = 0,
                        l = 0,
                        h = 0,
                        d = 0,
                        f = this.styles.base,
                        m = f;
                    return a.contains(["ja", "ko"], this.lang) ? s += this._("10k unit") : s = s.length > o.length ? s : o, e ? (m = f.concat(this.styles.vbubble), d = t.ver, h = t.btn) : "l" == this.size ? (f = m = f.concat(this.styles.large), h = t.xlbtn, d = t.xlcnt) : (h = t.btn, d = t.cnt), "none" != this.count && (l = u(s, "", m).width + d), c = u(i, "", f.concat(this.styles.button)).width + h, e ? c > l ? c : l : this.calculatedWidth = c + l
                },
                render: function() {
                    var t,
                        e = this,
                        n = this.makeIframeSource();
                    return this.count && this.classAttr.push("twitter-count-" + this.count), t = this.create(n, this.dimensions(), {
                        title: this._("Twitter Tweet Button")
                    }).then(function(t) {
                        return e.element = t
                    })
                }
            }), e.exports = n
        }, {
            10: 10,
            11: 11,
            12: 12,
            17: 17,
            42: 42,
            54: 54,
            65: 65,
            68: 68,
            69: 69
        }],
        49: [function(t, e) {
            function n(t, e, n, i) {
                v[t] = v[t] || [], v[t].push({
                    s: n,
                    f: i,
                    lang: e
                })
            }
            function i(t, e) {
                var n = {};
                n[t] = {
                    item_type: 0
                }, p.clientEvent({
                    page: "video",
                    component: "tweet",
                    action: "results"
                }, h.aug({}, e, {
                    item_ids: [t],
                    item_details: n
                }), !0), m.scribeVideoAudienceImpression()
            }
            function r(t, e) {
                var n = {};
                n[t] = {
                    item_type: 0
                }, p.clientEvent({
                    page: "video",
                    component: "rawembedcode",
                    action: "no_results"
                }, {
                    widget_origin: d.rootDocumentLocation(),
                    widget_frame: d.isFramed() && d.currentDocumentLocation(),
                    message: e,
                    item_ids: [t],
                    item_details: n
                }, !0), m.scribeVideoAudienceImpression()
            }
            function o(t) {
                if (t) {
                    c.apply(this, [t]);
                    var e = this.srcEl && this.srcEl.getElementsByTagName("A"),
                        n = e && e[e.length - 1],
                        i = this.params();
                    this.hideStatus = "hidden" === (i.status || this.dataAttr("status")), this.tweetId = i.tweetId || n && w.status(n.href)
                }
            }
            var s = t(3),
                a = t(42),
                c = t(46),
                l = t(51),
                u = t(62),
                h = t(69),
                d = t(52),
                f = t(38),
                m = t(30),
                p = t(31),
                g = t(19),
                w = t(65),
                v = {},
                y = [];
            o.prototype = new c, h.aug(o.prototype, {
                renderedClassNames: "twitter-video twitter-video-rendered",
                videoPlayer: !0,
                dimensions: {
                    DEFAULT_HEIGHT: "360",
                    DEFAULT_WIDTH: "640",
                    maxHeight: "500",
                    MIN_WIDTH: "320",
                    MIN_HEIGHT: "180",
                    MARGIN: "10px 0",
                    WIDE_MEDIA_PADDING: 0,
                    NARROW_MEDIA_PADDING: 0,
                    BORDERS: 0
                },
                styleSheetUrl: s.video,
                create: function(t) {
                    var e,
                        n = this,
                        r = this.sandbox.createElement("div");
                    return r.innerHTML = t, (e = r.children[0]) ? (this.playerConfig = JSON.parse(e.getAttribute("data-player-config")), this.sandbox.setTitle(e.getAttribute("data-iframe-title") || "Video"), this.sandbox.appendChild(e).then(function() {
                        n.renderResolver.fulfill(n.sandbox)
                    }), this.layout(function() {
                        n.predefinedWidth = n.width, n.width = n.sandbox.width(n.width), n.constrainMedia(e, n.contentWidth(n.width)), n.completeResolver.fulfill(n.sandbox.element())
                    }), i(this.tweetId, this.baseScribeData()), e) : void 0
                },
                render: function() {
                    var t = this;
                    return this.tweetId ? (this.rendered().then(function(e) {
                        var n = t.srcEl;
                        n && n.parentNode && t.layout(function() {
                            n && n.parentNode && n.parentNode.removeChild(n)
                        }), t.layout(function() {
                            t.height = t.sandbox.height(t.element.offsetHeight)
                        }).then(function() {
                            e.onresize(t.handleResize.bind(t))
                        }), a.doLayoutAsync()
                    }), n(this.tweetId, this.lang, function(e) {
                        t.ready().then(function() {
                            t.element = t.create(e), t.readTimestampTranslations(), t.writePlayerConfig(), a.doLayoutAsync()
                        })
                    }, function() {
                        r(t.tweetId, t.partner), t.completeResolver.fulfill(t.srcEl)
                    }), y.push(this.completed()), this.completed()) : (this.completeResolver.fulfill(this.srcEl), this.completed())
                },
                handleResize: function(t) {
                    var e = this;
                    t != this.width && (this.width = t, this.constrainMedia(this.element, this.contentWidth(this.width)), this.layout(function() {
                        e.height = e.sandbox.height(e.element.offsetHeight), g.get("events").trigger("resize", {
                            target: e.sandbox.element()
                        })
                    }), a.doLayoutAsync())
                },
                baseScribeData: function() {
                    return {
                        widget_origin: d.rootDocumentLocation(),
                        widget_frame: d.isFramed() && d.currentDocumentLocation(),
                        message: this.partner
                    }
                },
                readTimestampTranslations: function() {
                    var t = this.element,
                        e = "data-dt-",
                        n = t.getAttribute(e + "months") || "";
                    this.datetime = new l(h.compact({
                        phrases: {
                            AM: t.getAttribute(e + "am"),
                            PM: t.getAttribute(e + "pm")
                        },
                        months: n.split("|"),
                        formats: {
                            full: t.getAttribute(e + "full")
                        }
                    }))
                },
                getTimestamp: function() {
                    var t = this.element.getAttribute("data-datetime"),
                        e = t && this.datetime.localTimeStamp(t);
                    return {
                        local: e
                    }
                },
                writePlayerConfig: function() {
                    this.playerConfig.statusTimestamp = this.getTimestamp(), this.playerConfig.hideStatus = this.hideStatus, this.element.setAttribute("data-player-config", JSON.stringify(this.playerConfig))
                }
            }), o.fetchAndRender = function() {
                var t = v,
                    e = [];
                v = {};
                for (var n in t)
                    t.hasOwnProperty(n) && e.push(n);
                e.length && (f.videos({
                    ids: e.sort(),
                    lang: t[e[0]][0].lang,
                    complete: function(e) {
                        h.forIn(e, function(e, n) {
                            var i = t[e];
                            i.forEach(function(t) {
                                t.s && t.s.call(this, n)
                            }), delete t[e]
                        }), a.doLayout(), h.forIn(t, function(t, e) {
                            e.forEach(function(e) {
                                e.f && e.f.call(this, t)
                            })
                        }), a.doLayout()
                    }
                }), u.every.apply(null, y), y = [])
            }, a.afterLoad(o.fetchAndRender), e.exports = o
        }, {
            19: 19,
            3: 3,
            30: 30,
            31: 31,
            38: 38,
            42: 42,
            46: 46,
            51: 51,
            52: 52,
            62: 62,
            65: 65,
            69: 69
        }],
        50: [function(t, e) {
            e.exports = {
                sanitize: function(t, e, n) {
                    var i,
                        r = /^[\w ,%\/"'\-_#]+$/,
                        o = t && t.split(";").map(function(t) {
                            return t.split(":").slice(0, 2).map(function(t) {
                                return t.trim()
                            })
                        }),
                        s = 0,
                        a = [],
                        c = n ? "!important" : "";
                    for (e = e || /^(font|text\-|letter\-|color|line\-)[\w\-]*$/; o && (i = o[s]); s++)
                        i[0].match(e) && i[1].match(r) && a.push(i.join(":") + c);
                    return a.join(";")
                }
            }
        }, {}],
        51: [function(t, e) {
            function n(t) {
                return 10 > t ? "0" + t : t
            }
            function i(t) {
                function e(t, e) {
                    return r && r[t] && (t = r[t]), t.replace(/%\{([\w_]+)\}/g, function(t, n) {
                        return void 0 !== e[n] ? e[n] : t
                    })
                }
                var r = t && t.phrases,
                    o = t && t.months || a,
                    s = t && t.formats || c;
                this.timeAgo = function(t) {
                    var n,
                        r = i.parseDate(t),
                        a = +new Date,
                        c = a - r;
                    return r ? isNaN(c) || 2 * l > c ? e("now") : u > c ? (n = Math.floor(c / l), e(s.abbr, {
                        number: n,
                        symbol: e(f, {
                            abbr: e("s"),
                            expanded: e(n > 1 ? "seconds" : "second")
                        })
                    })) : h > c ? (n = Math.floor(c / u), e(s.abbr, {
                        number: n,
                        symbol: e(f, {
                            abbr: e("m"),
                            expanded: e(n > 1 ? "minutes" : "minute")
                        })
                    })) : d > c ? (n = Math.floor(c / h), e(s.abbr, {
                        number: n,
                        symbol: e(f, {
                            abbr: e("h"),
                            expanded: e(n > 1 ? "hours" : "hour")
                        })
                    })) : 365 * d > c ? e(s.shortdate, {
                        day: r.getDate(),
                        month: e(o[r.getMonth()])
                    }) : e(s.longdate, {
                        day: r.getDate(),
                        month: e(o[r.getMonth()]),
                        year: r.getFullYear().toString().slice(2)
                    }) : ""
                }, this.localTimeStamp = function(t) {
                    var r = i.parseDate(t),
                        a = r && r.getHours();
                    return r ? e(s.full, {
                        day: r.getDate(),
                        month: e(o[r.getMonth()]),
                        year: r.getFullYear(),
                        hours24: n(a),
                        hours12: 13 > a ? a ? a : "12" : a - 12,
                        minutes: n(r.getMinutes()),
                        seconds: n(r.getSeconds()),
                        amPm: e(12 > a ? "AM" : "PM")
                    }) : ""
                }
            }
            var r = /(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,
                o = /[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,
                s = /^\d+$/,
                a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                c = {
                    abbr: "%{number}%{symbol}",
                    shortdate: "%{day} %{month}",
                    longdate: "%{day} %{month} %{year}",
                    full: "%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"
                },
                l = 1e3,
                u = 60 * l,
                h = 60 * u,
                d = 24 * h,
                f = '<abbr title="%{expanded}">%{abbr}</abbr>';
            i.parseDate = function(t) {
                var e,
                    n,
                    i = t || "",
                    c = i.toString();
                return (e = function() {
                    var t;
                    return s.test(c) ? parseInt(c, 10) : (t = c.match(o)) ? Date.UTC(t[7], a.indexOf(t[1]), t[2], t[3], t[4], t[5]) : (t = c.match(r)) ? Date.UTC(t[1], t[2] - 1, t[3], t[4], t[5], t[6]) : void 0
                }()) ? (n = new Date(e), !isNaN(n.getTime()) && n) : !1
            }, e.exports = i
        }, {}],
        52: [function(t, e) {
            function n(t) {
                return t && a.isType("string", t) && (c = t), c
            }
            function i() {
                return l
            }
            function r() {
                return c !== l
            }
            var o = t(12),
                s = t(68),
                a = t(69),
                c = s.getCanonicalURL() || o.href,
                l = c;
            e.exports = {
                isFramed: r,
                rootDocumentLocation: n,
                currentDocumentLocation: i
            }
        }, {
            12: 12,
            68: 68,
            69: 69
        }],
        53: [function(t, e) {
            function n() {
                c = 1;
                for (var t = 0, e = l.length; e > t; t++)
                    l[t]()
            }
            var i,
                r,
                o,
                s = t(11),
                a = t(14),
                c = 0,
                l = [],
                u = !1,
                h = s.createElement("a");
            /^loade|c/.test(s.readyState) && (c = 1), s.addEventListener && s.addEventListener("DOMContentLoaded", r = function() {
                s.removeEventListener("DOMContentLoaded", r, u), n()
            }, u), h.doScroll && s.attachEvent("onreadystatechange", i = function() {
                /^c/.test(s.readyState) && (s.detachEvent("onreadystatechange", i), n())
            }), o = h.doScroll ? function(t) {
                a.self != a.top ? c ? t() : l.push(t) : !function() {
                    try {
                        h.doScroll("left")
                    } catch (e) {
                        return setTimeout(function() {
                            o(t)
                        }, 50)
                    }
                    t()
                }()
            } : function(t) {
                c ? t() : l.push(t)
            }, e.exports = o
        }, {
            11: 11,
            14: 14
        }],
        54: [function(t, e) {
            function n() {
                h = !0
            }
            function i(t, e) {
                return h ? !0 : l.asBoolean(u.val("dnt")) ? !0 : !s || 1 != s.doNotTrack && 1 != s.msDoNotTrack ? c.isUrlSensitive(e || o.host) ? !0 : a.isFramed() && c.isUrlSensitive(a.rootDocumentLocation()) ? !0 : (t = d.test(t || r.referrer) && RegExp.$1, t && c.isUrlSensitive(t) ? !0 : !1) : !0
            }
            var r = t(11),
                o = t(12),
                s = t(13),
                a = t(52),
                c = t(64),
                l = t(66),
                u = t(17),
                h = !1,
                d = /https?:\/\/([^\/]+).*/i;
            e.exports = {
                setOn: n,
                enabled: i
            }
        }, {
            11: 11,
            12: 12,
            13: 13,
            17: 17,
            52: 52,
            64: 64,
            66: 66
        }],
        55: [function(t, e) {
            function n(t) {
                return t = t || p, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : t.matchMedia ? t.matchMedia("only screen and (min-resolution: 144dpi)").matches : !1
            }
            function i(t) {
                return t = t || T, /(Trident|MSIE \d)/.test(t)
            }
            function r(t) {
                return t = t || T, /MSIE 9/.test(t)
            }
            function o(t) {
                return t = t || T, /(iPad|iPhone|iPod)/.test(t)
            }
            function s(t) {
                return t = t || T, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)
            }
            function a() {
                return A
            }
            function c(t, e) {
                return t = t || p, e = e || T, t.postMessage && !(i(e) && t.opener)
            }
            function l(t) {
                t = t || m;
                try {
                    return !!t.plugins["Shockwave Flash"] || !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (e) {
                    return !1
                }
            }
            function u(t, e, n) {
                return t = t || p, e = e || m, n = n || T, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0
            }
            function h() {
                var t = f.body.style;
                return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
            }
            function d() {
                return !!(p.Promise && p.Promise.resolve && p.Promise.reject && p.Promise.all && p.Promise.race && function() {
                    var t;
                    return new p.Promise(function(e) {
                        t = e
                    }), y.isType("function", t)
                }())
            }
            var f = t(11),
                m = t(13),
                p = t(14),
                g = t(53),
                w = t(59),
                v = t(66),
                y = t(69),
                b = t(17),
                _ = t(18),
                T = m.userAgent,
                A = !1,
                E = !1,
                x = "twitter-csp-test";
            _.set("verifyCSP", function(t) {
                var e = f.getElementById(x);
                E = !0, A = !!t, e && e.parentNode.removeChild(e)
            }), g(function() {
                var t;
                return v.asBoolean(b.val("widgets:csp")) ? A = !0 : (t = f.createElement("script"), t.id = x, t.text = _.fullPath("verifyCSP") + "(false);", f.body.appendChild(t), void p.setTimeout(function() {
                    E || (w.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'), w.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied."))
                }, 5e3))
            }), e.exports = {
                retina: n,
                anyIE: i,
                ie9: r,
                ios: o,
                android: s,
                cspEnabled: a,
                flashEnabled: l,
                canPostMessage: c,
                touch: u,
                cssTransitions: h,
                hasPromiseSupport: d
            }
        }, {
            11: 11,
            13: 13,
            14: 14,
            17: 17,
            18: 18,
            53: 53,
            59: 59,
            66: 66,
            69: 69
        }],
        56: [function(t, e) {
            var n = t(69),
                i = {
                    bind: function(t, e) {
                        return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
                    },
                    unbind: function(t, e) {
                        if (this._handlers[t])
                            if (e) {
                                var n = this._handlers[t].indexOf(e);
                                n >= 0 && this._handlers[t].splice(n, 1)
                            } else
                                this._handlers[t] = []
                    },
                    trigger: function(t, e) {
                        var i = this._handlers && this._handlers[t];
                        e = e || {}, e.type = t, i && i.forEach(function(t) {
                            n.async(t.bind(this, e))
                        })
                    }
                };
            e.exports = {
                Emitter: i
            }
        }, {
            69: 69
        }],
        57: [function(t, e) {
            var n = t(11),
                i = t(69);
            e.exports = function(t, e, r) {
                var o;
                if (r = r || n, t = t || {}, e = e || {}, t.name) {
                    try {
                        o = r.createElement('<iframe name="' + t.name + '"></iframe>')
                    } catch (s) {
                        o = r.createElement("iframe"), o.name = t.name
                    }
                    delete t.name
                } else
                    o = r.createElement("iframe");
                return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function(t, e) {
                    o.setAttribute(t, e)
                }), i.forIn(e, function(t, e) {
                    o.style[t] = e
                }), o
            }
        }, {
            11: 11,
            69: 69
        }],
        58: [function(t, e) {
            function n() {}
            var i,
                r = t(14),
                o = t(62),
                s = [];
            n.prototype.enqueue = function(t, e) {
                return new o(function(n) {
                    s.push({
                        action: t,
                        resolver: n,
                        note: e
                    })
                })
            }, n.prototype.exec = function() {
                var t,
                    e = s;
                if (e.length)
                    for (s = []; e.length;)
                        t = e.shift(), t && t.action ? t.resolver.fulfill(t.action()) : t.resolver.reject()
            }, n.prototype.delayedExec = function() {
                i && r.clearTimeout(i), i = r.setTimeout(this.exec, 100)
            }, e.exports = n
        }, {
            14: 14,
            62: 62
        }],
        59: [function(t, e) {
            function n() {
                c("info", h.toRealArray(arguments))
            }
            function i() {
                c("warn", h.toRealArray(arguments))
            }
            function r() {
                c("error", h.toRealArray(arguments))
            }
            function o(t) {
                m && (f[t] = a())
            }
            function s(t) {
                var e;
                m && (f[t] ? (e = a(), n("_twitter", t, e - f[t])) : r("timeEnd() called before time() for id: ", t))
            }
            function a() {
                return u.performance && +u.performance.now() || +new Date
            }
            function c(t, e) {
                if (u[d] && u[d][t])
                    switch (e.length) {
                    case 1:
                        u[d][t](e[0]);
                        break;
                    case 2:
                        u[d][t](e[0], e[1]);
                        break;
                    case 3:
                        u[d][t](e[0], e[1], e[2]);
                        break;
                    case 4:
                        u[d][t](e[0], e[1], e[2], e[3]);
                        break;
                    case 5:
                        u[d][t](e[0], e[1], e[2], e[3], e[4]);
                        break;
                    default:
                        0 !== e.length && u[d].warn && u[d].warn("too many params passed to logger." + t)
                    }
            }
            var l = t(12),
                u = t(14),
                h = t(69),
                d = ["con", "sole"].join(""),
                f = {},
                m = h.contains(l.href, "tw_debug=true");
            e.exports = {
                info: n,
                warn: i,
                error: r,
                time: o,
                timeEnd: s
            }
        }, {
            12: 12,
            14: 14,
            69: 69
        }],
        60: [function(t, e) {
            function n(t) {
                return function(e) {
                    return r.hasValue(e[t])
                }
            }
            function i() {
                this.assertions = [], this._defaults = {}
            }
            var r = t(66),
                o = t(69);
            i.prototype.assert = function(t, e) {
                return this.assertions.push({
                    fn: t,
                    msg: e || "assertion failed"
                }), this
            }, i.prototype.defaults = function(t) {
                return this._defaults = t || this._defaults, this
            }, i.prototype.require = function(t) {
                var e = this;
                return t = Array.isArray(t) ? t : o.toRealArray(arguments), t.forEach(function(t) {
                    e.assert(n(t), "required: " + t)
                }), this
            }, i.prototype.parse = function(t) {
                var e,
                    n;
                if (e = o.aug({}, this._defaults, t || {}), n = this.assertions.reduce(function(t, n) {
                    return n.fn(e) || t.push(n.msg), t
                }, []), n.length > 0)
                    throw new Error(n.join("\n"));
                return e
            }, e.exports = i
        }, {
            66: 66,
            69: 69
        }],
        61: [function(t, e) {
            var n,
                i,
                r,
                o = t(63);
            n = function(t) {
                var e = t.search.substr(1);
                return o.decode(e)
            }, i = function(t) {
                var e = t.href,
                    n = e.indexOf("#"),
                    i = 0 > n ? "" : e.substring(n + 1);
                return o.decode(i)
            }, r = function(t) {
                var e,
                    r = {},
                    o = n(t),
                    s = i(t);
                for (e in o)
                    o.hasOwnProperty(e) && (r[e] = o[e]);
                for (e in s)
                    s.hasOwnProperty(e) && (r[e] = s[e]);
                return r
            }, e.exports = {
                combined: r,
                fromQuery: n,
                fromFragment: i
            }
        }, {
            63: 63
        }],
        62: [function(t, e) {
            function n(t) {
                var e,
                    n,
                    i;
                return e = new a(function(t, e) {
                    n = t, i = e
                }), t && t({
                    fulfill: n,
                    reject: i
                }), e
            }
            var i = t(1).Promise,
                r = t(14),
                o = t(55),
                s = t(69),
                a = o.hasPromiseSupport() ? r.Promise : i;
            n.fulfill = function(t) {
                return a.resolve(t)
            }, n.reject = function(t) {
                return a.reject(t)
            }, n.every = function() {
                var t = s.toRealArray(arguments);
                return a.all(t)
            }, n.some = function() {
                var t = s.toRealArray(arguments),
                    e = 0;
                return t.length ? new a(function(n, i) {
                    function r() {
                        e += 1, e === t.length && i()
                    }
                    t.forEach(function(t) {
                        t.then(n, r)
                    })
                }) : a.reject("no promises passed to .some")
            }, n.isThenable = function(t) {
                try {
                    var e = t.then;
                    if ("function" == typeof e)
                        return !0
                } catch (n) {}
                return !1
            }, e.exports = n
        }, {
            1: 1,
            14: 14,
            55: 55,
            69: 69
        }],
        63: [function(t, e) {
            function n(t) {
                return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
            }
            function i(t) {
                return decodeURIComponent(t)
            }
            function r(t) {
                var e = [];
                return l.forIn(t, function(t, i) {
                    var r = n(t);
                    l.isType("array", i) || (i = [i]), i.forEach(function(t) {
                        c.hasValue(t) && e.push(r + "=" + n(t))
                    })
                }), e.sort().join("&")
            }
            function o(t) {
                var e,
                    n = {};
                return t ? (e = t.split("&"), e.forEach(function(t) {
                    var e = t.split("="),
                        r = i(e[0]),
                        o = i(e[1]);
                    return 2 == e.length ? l.isType("array", n[r]) ? void n[r].push(o) : r in n ? (n[r] = [n[r]], void n[r].push(o)) : void (n[r] = o) : void 0
                }), n) : {}
            }
            function s(t, e) {
                var n = r(e);
                return n.length > 0 ? l.contains(t, "?") ? t + "&" + r(e) : t + "?" + r(e) : t
            }
            function a(t) {
                var e = t && t.split("?");
                return 2 == e.length ? o(e[1]) : {}
            }
            var c = t(66),
                l = t(69);
            e.exports = {
                url: s,
                decodeURL: a,
                decode: o,
                encode: r,
                encodePart: n,
                decodePart: i
            }
        }, {
            66: 66,
            69: 69
        }],
        64: [function(t, e) {
            function n(t) {
                return t in s ? s[t] : s[t] = o.test(t)
            }
            function i() {
                return n(r.host)
            }
            var r = t(12),
                o = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
                s = {};
            e.exports = {
                isUrlSensitive: n,
                isHostPageSensitive: i
            }
        }, {
            12: 12
        }],
        65: [function(t, e) {
            function n(t) {
                return "string" == typeof t && m.test(t) && RegExp.$1.length <= 20
            }
            function i(t) {
                return n(t) ? RegExp.$1 : void 0
            }
            function r(t, e) {
                var n = f.decodeURL(t);
                return e = e || !1, n.screen_name = i(t), n.screen_name ? f.url("https://twitter.com/intent/" + (e ? "follow" : "user"), n) : void 0
            }
            function o(t) {
                return r(t, !0)
            }
            function s(t) {
                return "string" == typeof t && v.test(t)
            }
            function a(t, e) {
                return e = void 0 === e ? !0 : e, s(t) ? (e ? "#" : "") + RegExp.$1 : void 0
            }
            function c(t) {
                return "string" == typeof t && p.test(t)
            }
            function l(t) {
                return c(t) && RegExp.$1
            }
            function u(t) {
                return g.test(t)
            }
            function h(t) {
                return w.test(t)
            }
            function d(t) {
                return y.test(t)
            }
            var f = t(63),
                m = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
                p = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
                g = /^http(s?):\/\/(\w+\.)*twitter\.com([\:\/]|$)/i,
                w = /^http(s?):\/\/pbs\.twimg\.com\//,
                v = /^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/,
                y = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/;
            e.exports = {
                isHashTag: s,
                hashTag: a,
                isScreenName: n,
                screenName: i,
                isStatus: c,
                status: l,
                intentForProfileURL: r,
                intentForFollowURL: o,
                isTwitterURL: u,
                isTwimgURL: h,
                isIntentURL: d,
                regexen: {
                    profile: m
                }
            }
        }, {
            63: 63
        }],
        66: [function(t, e) {
            function n(t) {
                return void 0 !== t && null !== t && "" !== t
            }
            function i(t) {
                return o(t) && t % 1 === 0
            }
            function r(t) {
                return o(t) && !i(t)
            }
            function o(t) {
                return n(t) && !isNaN(t)
            }
            function s(t) {
                return n(t) && "array" == h.toType(t)
            }
            function a(t) {
                if (!n(t))
                    return !1;
                switch (t) {
                case "1":
                case "on":
                case "ON":
                case "true":
                case "TRUE":
                case "yes":
                case "YES":
                    return !0;
                case "0":
                case "off":
                case "OFF":
                case "false":
                case "FALSE":
                case "no":
                case "NO":
                    return !1;
                default:
                    return !!t
                }
            }
            function c(t) {
                return o(t) ? t : void 0
            }
            function l(t) {
                return r(t) ? t : void 0
            }
            function u(t) {
                return i(t) ? t : void 0
            }
            var h = t(69);
            e.exports = {
                hasValue: n,
                isInt: i,
                isFloat: r,
                isNumber: o,
                isArray: s,
                asInt: u,
                asFloat: l,
                asNumber: c,
                asBoolean: a
            }
        }, {
            69: 69
        }],
        67: [function(t, e) {
            function n() {
                return String(+new Date) + Math.floor(1e5 * Math.random()) + i++
            }
            var i = 0;
            e.exports = {
                generate: n
            }
        }, {}],
        68: [function(t, e) {
            function n(t, e) {
                var n,
                    i;
                return e = e || s, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (i = e.pathname.split("/"), i.pop(), i.push(t), t = "/" + i.join("/")), [e.protocol, "//", n, t].join(""))
            }
            function i() {
                for (var t, e = o.getElementsByTagName("link"), i = 0; t = e[i]; i++)
                    if ("canonical" == t.rel)
                        return n(t.href)
            }
            function r() {
                for (var t, e, n, i = o.getElementsByTagName("a"), r = o.getElementsByTagName("link"), s = [i, r], c = 0, l = 0, u = /\bme\b/; t = s[c]; c++)
                    for (l = 0; e = t[l]; l++)
                        if (u.test(e.rel) && (n = a.screenName(e.href)))
                            return n
            }
            var o = t(11),
                s = t(12),
                a = t(65);
            e.exports = {
                absolutize: n,
                getCanonicalURL: i,
                getScreenNameFromPage: r
            }
        }, {
            11: 11,
            12: 12,
            65: 65
        }],
        69: [function(t, e) {
            function n(t) {
                return u(arguments).slice(1).forEach(function(e) {
                    r(e, function(e, n) {
                        t[e] = n
                    })
                }), t
            }
            function i(t) {
                return r(t, function(e, n) {
                    a(n) && (i(n), c(n) && delete t[e]), (void 0 === n || null === n || "" === n) && delete t[e]
                }), t
            }
            function r(t, e) {
                for (var n in t)
                    (!t.hasOwnProperty || t.hasOwnProperty(n)) && e(n, t[n]);
                return t
            }
            function o(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }
            function s(t, e) {
                return t == o(e)
            }
            function a(t) {
                return t === Object(t)
            }
            function c(t) {
                if (!a(t))
                    return !1;
                if (Object.keys)
                    return !Object.keys(t).length;
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        return !1;
                return !0
            }
            function l(t, e) {
                d.setTimeout(function() {
                    t.call(e || null)
                }, 0)
            }
            function u(t) {
                return Array.prototype.slice.call(t)
            }
            function h(t, e) {
                return t && t.indexOf ? t.indexOf(e) > -1 : !1
            }
            var d = t(14);
            e.exports = {
                aug: n,
                async: l,
                compact: i,
                contains: h,
                forIn: r,
                isObject: a,
                isEmptyObject: c,
                toType: o,
                isType: s,
                toRealArray: u
            }
        }, {
            14: 14
        }],
        70: [function(t, e) {
            function n() {
                if (r)
                    return r;
                if (c.isDynamicWidget()) {
                    var t,
                        e = 0,
                        n = a.parent.frames.length;
                    try {
                        if (r = a.parent.frames[h])
                            return r
                    } catch (i) {}
                    if (l.anyIE())
                        for (; n > e; e++)
                            try {
                                if (t = a.parent.frames[e], t && "function" == typeof t.openIntent)
                                    return r = t
                            } catch (i) {}
                }
            }
            function i() {
                var t,
                    e,
                    r,
                    s,
                    l,
                    u,
                    h = {};
                if ("function" === (typeof arguments[0]).toLowerCase() ? h.success = arguments[0] : h = arguments[0], t = h.success || function() {}, e = h.timeout || function() {}, r = h.nohub || function() {}, s = h.complete || function() {}, l = void 0 !== h.attempt ? h.attempt : m, !c.isDynamicWidget() || o)
                    return r(), s(), !1;
                u = n(), l--;
                try {
                    if (u && u.trigger)
                        return t(u), void s()
                } catch (p) {}
                return 0 >= l ? (o = !0, e(), void s()) : +new Date - d > f * m ? (o = !0, void r()) : void a.setTimeout(function() {
                    i({
                        success: t,
                        timeout: e,
                        nohub: r,
                        attempt: l,
                        complete: s
                    })
                }, f)
            }
            var r,
                o,
                s = t(12),
                a = t(14),
                c = t(39),
                l = t(55),
                u = "twttrHubFrameSecure",
                h = "http:" == s.protocol ? "twttrHubFrame" : u,
                d = +new Date,
                f = 100,
                m = 20;
            e.exports = {
                withHub: i,
                contextualHubId: h,
                secureHubId: u
            }
        }, {
            12: 12,
            14: 14,
            39: 39,
            55: 55
        }],
        71: [function(t, e) {
            e.exports = {
                version: "2bd59991d8cd168635ac54003df66b5e8295d751:1427408700011"
            }
        }, {}],
        72: [function(t, e) {
            e.exports = {
                css: "50105a12e9466deb66745b9b9321e1d8"
            }
        }, {}],
        73: [function(t, e) {
            function n(t, e) {
                return t && t.getAttribute ? t.getAttribute("data-" + e) : void 0
            }
            function i(t, e) {
                return {
                    element: t.element || p,
                    action: t.action || g,
                    page: r(e) ? "video" : void 0
                }
            }
            function r(t) {
                return l.closest(".embedded-video", t)
            }
            function o(t) {
                return JSON.parse(n(r(t), "player-config"))
            }
            function s(t, e) {
                var i,
                    o,
                    s,
                    a = r(e);
                return a ? i = c.aug({
                    item_type: f,
                    card_type: m,
                    id: n(a, "tweet-id"),
                    card_name: n(a, "card-name"),
                    publisher_id: n(a, "publisher-id"),
                    content_id: n(a, "content-id")
                }, t.itemData || {}) : (o = l.closest(".cards-multimedia", e), s = l.closest(".tweet", e), i = c.aug({
                    item_type: f,
                    card_type: m,
                    id: n(s, "tweet-id"),
                    card_name: n(o, "card-name"),
                    publisher_id: n(o, "publisher-id"),
                    content_id: n(o, "video-content-id")
                }, t.itemData || {})), {
                    items: [i]
                }
            }
            function a(t) {
                var e = this;
                this.global = t, this.server = (new u).attachReceiver(new d.Receiver(t)).bind("scribe", function(t) {
                    e.scribe(t, this)
                }).bind("requestPlayerConfig", function() {
                    return e.requestPlayerConfig(this)
                })
            }
            var c = t(69),
                l = t(7),
                u = t(25),
                h = t(32),
                d = t(26),
                f = 0,
                m = 6,
                p = "amplify_player",
                g = "undefined";
            a.prototype.findIframeByWindow = function(t) {
                for (var e = this.global.document.getElementsByTagName("iframe"), n = e.length, i = 0; n > i; i++)
                    if (e[i].contentWindow == t)
                        return e[i]
            }, a.prototype.requestPlayerConfig = function(t) {
                var e = this.findIframeByWindow(t);
                if (e)
                    return o(e)
            }, a.prototype.scribe = function(t, e) {
                var n,
                    r,
                    o,
                    a;
                n = t && t.customScribe, r = this.findIframeByWindow(e), n && r && (o = i(n, r), a = s(n, r), h.clientEvent2(o, a, !0))
            }, e.exports = a
        }, {
            25: 25,
            26: 26,
            32: 32,
            69: 69,
            7: 7
        }],
        74: [function(t) {
            !function() {
                var e = t(11),
                    n = t(36),
                    i = t(53),
                    r = t(59),
                    o = t(23),
                    s = t(42),
                    a = t(44),
                    c = t(48),
                    l = t(43),
                    u = t(47),
                    h = t(49),
                    d = t(45),
                    f = t(34),
                    m = t(56),
                    p = t(35),
                    g = t(21),
                    w = t(19),
                    v = t(18),
                    y = t(15),
                    b = t(62);
                if (v.init("host", "platform.twitter.com"), o.start("widgets-js-load"), n.requestArticleUrl(), v.get("widgets.loaded"))
                    return w.call("widgets.load"), !1;
                if (v.get("widgets.init"))
                    return !1;
                v.set("widgets.init", !0), w.set("init", !0);
                var _,
                    T = new b(function(t) {
                        _ = t.fulfill.bind(t)
                    });
                y.exposeReadyPromise(T, w.base, "_e"), w.set("events", {
                    bind: function(t, e) {
                        T.then(function(n) {
                            n.events.bind(t, e)
                        })
                    }
                }), i(function() {
                    function t() {
                        v.set("eventsHub", p.init()), p.init(!0)
                    }
                    var n,
                        i = {
                            "a.twitter-share-button": c,
                            "a.twitter-mention-button": c,
                            "a.twitter-hashtag-button": c,
                            "a.twitter-follow-button": a,
                            "blockquote.twitter-tweet": l,
                            "a.twitter-timeline": u,
                            "div.twitter-timeline": u,
                            "blockquote.twitter-video": h,
                            body: d
                        },
                        o = v.get("eventsHub") ? w.get("events") : {};
                    w.aug("widgets", f, {
                        load: function(t) {
                            r.time("load"), s.init(i), s.embed(t), v.set("widgets.loaded", !0)
                        }
                    }), w.aug("events", o, m.Emitter), n = w.get("events.bind"), w.set("events.bind", function(e, i) {
                        t(), this.bind = n, this.bind(e, i)
                    }), _(w.base), g.attachTo(e), w.call("widgets.load")
                })
            }()
        }, {
            11: 11,
            15: 15,
            18: 18,
            19: 19,
            21: 21,
            23: 23,
            34: 34,
            35: 35,
            36: 36,
            42: 42,
            43: 43,
            44: 44,
            45: 45,
            47: 47,
            48: 48,
            49: 49,
            53: 53,
            56: 56,
            59: 59,
            62: 62
        }],
        75: [function(t, e) {
            function n() {}
            var i = t(69),
                r = t(56);
            i.aug(n.prototype, r.Emitter, {
                transportMethod: "",
                init: function() {},
                send: function(t) {
                    var e;
                    this._ready ? this._performSend(t) : e = this.bind("ready", function() {
                        this.unbind("ready", e), this._performSend(t)
                    })
                },
                ready: function() {
                    this.trigger("ready", this), this._ready = !0
                },
                isReady: function() {
                    return !!this._ready
                },
                receive: function(t) {
                    this.trigger("message", t)
                }
            }), e.exports = {
                Connection: n
            }
        }, {
            56: 56,
            69: 69
        }],
        76: [function(t, e) {
            function n(t, e) {
                var n = e || Math.floor(100 * Math.random()),
                    r = ['<object id="xdflashshim' + n + '" name="xdflashshim' + n + '"', 'type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"', 'width="1" height="1" style="position:absolute;left:-9999px;top:-9999px;">', '<param name="movie" value="' + t + "&debug=" + i.__XDDEBUG__ + '">', '<param name="wmode" value="window">', '<param name="allowscriptaccess" value="always">', "</object>"].join(" ");
                return r
            }
            var i = t(14);
            e.exports = {
                object: n
            }
        }, {
            14: 14
        }],
        77: [function(t, e) {
            function n(t) {
                return (JSON.parse || JSON.decode)(t)
            }
            function i(t) {
                this.con = t
            }
            function r() {
                this.id = r.id++
            }
            var o = t(69),
                s = t(56);
            o.aug(i.prototype, {
                expose: function(t) {
                    this.con.bind("message", this._handleRequest(t))
                },
                call: function(t) {
                    var e,
                        i = this;
                    return this._requests || (this._requests = {}, this.con.bind("message", function(t) {
                        var e;
                        try {
                            t = n(t)
                        } catch (r) {
                            return
                        }
                        t.callback && "number" == typeof t.id && (e = i._requests[t.id]) && (t.error ? e.trigger("error", t) : e.trigger("success", t), delete i._requests[t.id])
                    })), e = new r, this._requests[e.id] = e, e.send(this.con, t, Array.prototype.slice.call(arguments, 1))
                },
                _handleRequest: function(t) {
                    var e = this;
                    return function(i) {
                        var r,
                            o;
                        try {
                            i = n(i)
                        } catch (s) {
                            return
                        }
                        i.callback || "number" == typeof i.id && "function" == typeof t[i.method] && (o = e._responseCallbacks(i.id), r = t[i.method].apply(t, i.params.concat(o)), "undefined" != typeof r && o[0](r))
                    }
                },
                _responseCallbacks: function(t) {
                    var e = this.con;
                    return [function(n) {
                        e.send(JSON.stringify({
                            id: t,
                            result: n,
                            callback: !0
                        }))
                    }, function n(i) {
                        e.send(JSON.stringify({
                            id: t,
                            error: n,
                            callback: i
                        }))
                    }]
                }
            }), r.id = 0, o.aug(r.prototype, s.Emitter, {
                send: function(t, e, n) {
                    return t.send(JSON.stringify({
                        id: this.id,
                        method: e,
                        params: n
                    })), this
                },
                success: function(t) {
                    return this.bind("success", t), this
                },
                error: function(t) {
                    return this.bind("error", t), this
                }
            }), e.exports = function(t) {
                return new i(t)
            }
        }, {
            56: 56,
            69: 69
        }],
        78: [function(t, e) {
            function n() {}
            function i(t) {
                this.transportMethod = "PostMessage", this.options = t, this._createChild()
            }
            function r(t) {
                this.transportMethod = "Flash", this.options = t, this.token = Math.random().toString(16).substring(2), this._setup()
            }
            function o(t) {
                this.transportMethod = "Fallback", this.options = t, this._createChild()
            }
            var s,
                a = t(11),
                c = t(14),
                l = t(75),
                u = t(69),
                h = t(55),
                d = t(22),
                f = "__ready__",
                m = 0;
            n.prototype = new l.Connection, u.aug(n.prototype, {
                _createChild: function() {
                    this.options.window ? this._createWindow() : this._createIframe()
                },
                _createIframe: function() {
                    function t() {
                        o.child = e.contentWindow, o._ready || o.init()
                    }
                    var e,
                        n,
                        i,
                        r,
                        o = this,
                        l = {
                            allowTransparency: !0,
                            frameBorder: "0",
                            scrolling: "no",
                            tabIndex: "0",
                            name: this._name()
                        },
                        h = u.aug(u.aug({}, l), this.options.iframe);
                    c.postMessage ? (s || (s = a.createElement("iframe")), e = s.cloneNode(!1)) : e = a.createElement('<iframe name="' + h.name + '">'), e.id = h.name, u.forIn(h, function(t, n) {
                        "style" != t && e.setAttribute(t, n)
                    }), r = e.getAttribute("style"), r && "undefined" != typeof r.cssText ? r.cssText = h.style : e.style.cssText = h.style, e.addEventListener("load", t, !1), e.src = this._source(), (n = this.options.appendTo) ? n.appendChild(e) : (i = this.options.replace) ? (n = i.parentNode, n && n.replaceChild(e, i)) : a.body.insertBefore(e, a.body.firstChild)
                },
                _createWindow: function() {
                    var t = d.open(this._source()).popup;
                    t && t.focus(), this.child = t, this.init()
                },
                _source: function() {
                    return this.options.src
                },
                _name: function() {
                    var t = "_xd_" + m++;
                    return c.parent && c.parent != c && c.name && (t = c.name + t), t
                }
            }), i.prototype = new n, u.aug(i.prototype, {
                init: function() {
                    function t(t) {
                        t.source === e.child && (e._ready || t.data !== f ? e.receive(t.data) : e.ready())
                    }
                    var e = this;
                    c.addEventListener("message", t, !1)
                },
                _performSend: function(t) {
                    this.child.postMessage(t, this.options.src)
                }
            }), r.prototype = new n, u.aug(r.prototype, {
                _setup: function() {
                    var e = this,
                        n = t(76);
                    c["__xdcb" + e.token] = {
                        receive: function(t) {
                            e._ready || t !== f ? e.receive(t) : e.ready()
                        },
                        loaded: function() {}
                    };
                    var i = a.createElement("div");
                    i.innerHTML = n.object("https://platform.twitter.com/xd/ft.swf?&token=" + e.token + "&parent=true&callback=__xdcb" + e.token + "&xdomain=" + e._host(), e.token), a.body.insertBefore(i, a.body.firstChild), e.proxy = i.firstChild, e._createChild()
                },
                init: function() {},
                _performSend: function(t) {
                    this.proxy.send(t)
                },
                _host: function() {
                    return this.options.src.replace(/https?:\/\//, "").split(/(:|\/)/)[0]
                },
                _source: function() {
                    return this.options.src + (this.options.src.match(/\?/) ? "&" : "?") + "xd_token=" + c.escape(this.token)
                }
            }), o.prototype = new n, u.aug(o.prototype, {
                init: function() {},
                _performSend: function() {}
            }), e.exports = {
                connect: function(t) {
                    return !h.canPostMessage() || h.anyIE() && t.window ? h.anyIE() && h.flashEnabled() ? new r(t) : new o(t) : new i(t)
                }
            }
        }, {
            11: 11,
            14: 14,
            22: 22,
            55: 55,
            69: 69,
            75: 75,
            76: 76
        }]
    }, {}, [74]))
}();

