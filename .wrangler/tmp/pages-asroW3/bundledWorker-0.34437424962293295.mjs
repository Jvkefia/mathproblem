var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(envAsyncLocalStorage.getStore()), "ownKeys"),
        getOwnPropertyDescriptor: /* @__PURE__ */ __name((_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args), "getOwnPropertyDescriptor"),
        get: /* @__PURE__ */ __name((_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property), "get"),
        set: /* @__PURE__ */ __name((_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value), "set")
      }
    )
  };
  globalThis[/* @__PURE__ */ Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: /* @__PURE__ */ __name(() => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()), "ownKeys"),
      getOwnPropertyDescriptor: /* @__PURE__ */ __name((_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args), "getOwnPropertyDescriptor"),
      get: /* @__PURE__ */ __name((_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property), "get"),
      set: /* @__PURE__ */ __name((_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value), "set")
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var se = Object.create;
var X = Object.defineProperty;
var re = Object.getOwnPropertyDescriptor;
var ie = Object.getOwnPropertyNames;
var ne = Object.getPrototypeOf;
var oe = Object.prototype.hasOwnProperty;
var I = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "I");
var H = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "H");
var ce = /* @__PURE__ */ __name((e, t, s, a) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of ie(t)) !oe.call(e, i) && i !== s && X(e, i, { get: /* @__PURE__ */ __name(() => t[i], "get"), enumerable: !(a = re(t, i)) || a.enumerable });
  return e;
}, "ce");
var U = /* @__PURE__ */ __name((e, t, s) => (s = e != null ? se(ne(e)) : {}, ce(t || !e || !e.__esModule ? X(s, "default", { value: e, enumerable: true }) : s, e)), "U");
var g;
var l = I(() => {
  g = { collectedLocales: [] };
});
var f;
var u = I(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/?$", has: [{ type: "header", key: "rsc", value: "1" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc", value: "1" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/.+$", status: 404, check: true, dest: "/_next/static/not-found.txt", headers: { "content-type": "text/plain; charset=utf-8" } }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|F5bPVpJGj0MJEO4_XtdPj)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404, headers: { "x-next-error-status": "404" } }, { src: "^/.*$", dest: "/500", status: 500, headers: { "x-next-error-status": "500" } }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "attachment" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" }, "_next/static/not-found.txt": { contentType: "text/plain" } }, framework: { version: "15.1.4" }, crons: [] };
});
var m;
var d = I(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/F5bPVpJGj0MJEO4_XtdPj/_buildManifest.js": { type: "static" }, "/_next/static/F5bPVpJGj0MJEO4_XtdPj/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/4bd1b696-f6a08746561b241a.js": { type: "static" }, "/_next/static/chunks/517-633bc2a588b2717e.js": { type: "static" }, "/_next/static/chunks/66-fa20763b388a6a05.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-dba7940f169668f6.js": { type: "static" }, "/_next/static/chunks/app/api/generate/route-e3c8be5c54c03f95.js": { type: "static" }, "/_next/static/chunks/app/layout-daa20a21b966f964.js": { type: "static" }, "/_next/static/chunks/app/page-43e399fcfe79557c.js": { type: "static" }, "/_next/static/chunks/d3ac728e-63b00f178c4bf2a6.js": { type: "static" }, "/_next/static/chunks/framework-6c5b4831cfbd7aa9.js": { type: "static" }, "/_next/static/chunks/main-52b47bbbc3ab0dbb.js": { type: "static" }, "/_next/static/chunks/main-app-7dea7d3bb6fde1c8.js": { type: "static" }, "/_next/static/chunks/pages/_app-d23763e3e6c904ff.js": { type: "static" }, "/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js": { type: "static" }, "/_next/static/chunks/polyfills-42372ed130431b0a.js": { type: "static" }, "/_next/static/chunks/webpack-c9387d92ea36dce9.js": { type: "static" }, "/_next/static/css/d65d1623f876a263.css": { type: "static" }, "/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff": { type: "static" }, "/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf": { type: "static" }, "/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-Bold.d181c465.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-Italic.8916142b.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-Italic.9024d815.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf": { type: "static" }, "/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2": { type: "static" }, "/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf": { type: "static" }, "/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff": { type: "static" }, "/_next/static/media/KaTeX_Math-Italic.5295ba48.woff": { type: "static" }, "/_next/static/media/KaTeX_Math-Italic.939bc644.ttf": { type: "static" }, "/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf": { type: "static" }, "/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2": { type: "static" }, "/_next/static/media/KaTeX_Script-Regular.07505710.woff": { type: "static" }, "/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff": { type: "static" }, "/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size2-Regular.57727022.woff": { type: "static" }, "/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff": { type: "static" }, "/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff": { type: "static" }, "/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf": { type: "static" }, "/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff": { type: "static" }, "/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2": { type: "static" }, "/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf": { type: "static" }, "/_next/static/not-found.txt": { type: "static" }, "/api/generate": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/generate.func.js" }, "/api/generate.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/generate.func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/": { type: "override", path: "/index.html", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "x-nextjs-stale-time": "4294967294", "x-nextjs-prerender": "1", "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch", "content-type": "text/x-component" } } };
});
var F = H((Ge, V) => {
  "use strict";
  l();
  u();
  d();
  function R(e, t) {
    e = String(e || "").trim();
    let s = e, a, i = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      a = e[0];
      let o = e.lastIndexOf(a);
      i += e.substring(o + 1), e = e.substring(1, o);
    }
    let r = 0;
    return e = de(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c) throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let p = o.substring(c[0].length, o.length - 1);
        return t && (t[r] = c[1]), r++, `(${p})`;
      }
      return o.substring(0, 3) === "(?:" || r++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => R.characterClasses[c] || o), new R.PCRE(e, i, s, i, a);
  }
  __name(R, "R");
  function de(e, t) {
    let s = 0, a = 0, i = false;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (i) {
        i = false;
        continue;
      }
      switch (r) {
        case "(":
          a === 0 && (s = n), a++;
          break;
        case ")":
          if (a > 0 && (a--, a === 0)) {
            let o = n + 1, c = s === 0 ? "" : e.substring(0, s), p = e.substring(o), h = String(t(e.substring(s, o)));
            e = c + h + p, n = s;
          }
          break;
        case "\\":
          i = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  __name(de, "de");
  (function(e) {
    class t extends RegExp {
      static {
        __name(this, "t");
      }
      constructor(a, i, n, r, o) {
        super(a, i), this.pcrePattern = n, this.pcreFlags = r, this.delimiter = o;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  V.exports = R;
});
var Q = H((O) => {
  "use strict";
  l();
  u();
  d();
  O.parse = Se;
  O.serialize = Pe;
  var be = Object.prototype.toString, M = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Se(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    for (var s = {}, a = t || {}, i = a.decode || Te, n = 0; n < e.length; ) {
      var r = e.indexOf("=", n);
      if (r === -1) break;
      var o = e.indexOf(";", n);
      if (o === -1) o = e.length;
      else if (o < r) {
        n = e.lastIndexOf(";", r - 1) + 1;
        continue;
      }
      var c = e.slice(n, r).trim();
      if (s[c] === void 0) {
        var p = e.slice(r + 1, o).trim();
        p.charCodeAt(0) === 34 && (p = p.slice(1, -1)), s[c] = ke(p, i);
      }
      n = o + 1;
    }
    return s;
  }
  __name(Se, "Se");
  function Pe(e, t, s) {
    var a = s || {}, i = a.encode || ve;
    if (typeof i != "function") throw new TypeError("option encode is invalid");
    if (!M.test(e)) throw new TypeError("argument name is invalid");
    var n = i(t);
    if (n && !M.test(n)) throw new TypeError("argument val is invalid");
    var r = e + "=" + n;
    if (a.maxAge != null) {
      var o = a.maxAge - 0;
      if (isNaN(o) || !isFinite(o)) throw new TypeError("option maxAge is invalid");
      r += "; Max-Age=" + Math.floor(o);
    }
    if (a.domain) {
      if (!M.test(a.domain)) throw new TypeError("option domain is invalid");
      r += "; Domain=" + a.domain;
    }
    if (a.path) {
      if (!M.test(a.path)) throw new TypeError("option path is invalid");
      r += "; Path=" + a.path;
    }
    if (a.expires) {
      var c = a.expires;
      if (!Ce(c) || isNaN(c.valueOf())) throw new TypeError("option expires is invalid");
      r += "; Expires=" + c.toUTCString();
    }
    if (a.httpOnly && (r += "; HttpOnly"), a.secure && (r += "; Secure"), a.priority) {
      var p = typeof a.priority == "string" ? a.priority.toLowerCase() : a.priority;
      switch (p) {
        case "low":
          r += "; Priority=Low";
          break;
        case "medium":
          r += "; Priority=Medium";
          break;
        case "high":
          r += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (a.sameSite) {
      var h = typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite;
      switch (h) {
        case true:
          r += "; SameSite=Strict";
          break;
        case "lax":
          r += "; SameSite=Lax";
          break;
        case "strict":
          r += "; SameSite=Strict";
          break;
        case "none":
          r += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return r;
  }
  __name(Pe, "Pe");
  function Te(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  __name(Te, "Te");
  function ve(e) {
    return encodeURIComponent(e);
  }
  __name(ve, "ve");
  function Ce(e) {
    return be.call(e) === "[object Date]" || e instanceof Date;
  }
  __name(Ce, "Ce");
  function ke(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  __name(ke, "ke");
});
l();
u();
d();
l();
u();
d();
l();
u();
d();
var b = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
u();
d();
l();
u();
d();
l();
u();
d();
l();
u();
d();
var $ = U(F());
function v(e, t, s) {
  if (t == null) return { match: null, captureGroupKeys: [] };
  let a = s ? "" : "i", i = [];
  return { match: (0, $.default)(`%${e}%${a}`, i).exec(t), captureGroupKeys: i };
}
__name(v, "v");
function S(e, t, s, { namedOnly: a } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (i, n) => {
    let r = s.indexOf(n);
    return a && r === -1 ? i : (r === -1 ? t[parseInt(n, 10)] : t[r + 1]) || "";
  });
}
__name(S, "S");
function K(e, { url: t, cookies: s, headers: a, routeDest: i }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? N(e.value, a.get(e.key), i) : { valid: a.has(e.key) };
    case "cookie": {
      let n = s[e.key];
      return n && e.value !== void 0 ? N(e.value, n, i) : { valid: n !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? N(e.value, t.searchParams.get(e.key), i) : { valid: t.searchParams.has(e.key) };
  }
}
__name(K, "K");
function N(e, t, s) {
  let { match: a, captureGroupKeys: i } = v(e, t);
  return s && a && i.length ? { valid: !!a, newRouteDest: S(s, a, i, { namedOnly: true }) } : { valid: !!a };
}
__name(N, "N");
l();
u();
d();
function q(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", encodeURIComponent(e.cf.city)), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.regionCode), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", b), new Request(e, { headers: t });
}
__name(q, "q");
l();
u();
d();
function _(e, t, s) {
  let a = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [i, n] of a) {
    let r = i.toLowerCase(), o = s?.match ? S(n, s.match, s.captureGroupKeys) : n;
    r === "set-cookie" ? e.append(r, o) : e.set(r, o);
  }
}
__name(_, "_");
function P(e) {
  return /^https?:\/\//.test(e);
}
__name(P, "P");
function x(e, t) {
  for (let [s, a] of t.entries()) {
    let i = /^nxtP(.+)$/.exec(s), n = /^nxtI(.+)$/.exec(s);
    i?.[1] ? (e.set(s, a), e.set(i[1], a)) : n?.[1] ? e.set(n[1], a.replace(/(\(\.+\))+/, "")) : (!e.has(s) || !!a && !e.getAll(s).includes(a)) && e.append(s, a);
  }
}
__name(x, "x");
function A(e, t) {
  let s = new URL(t, e.url);
  return x(s.searchParams, new URL(e.url).searchParams), s.pathname = s.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(s, e);
}
__name(A, "A");
function T(e) {
  return new Response(e.body, e);
}
__name(T, "T");
function j(e) {
  return e.split(",").map((t) => {
    let [s, a] = t.split(";"), i = parseFloat((a ?? "q=1").replace(/q *= */gi, ""));
    return [s.trim(), isNaN(i) ? 1 : i];
  }).sort((t, s) => s[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
__name(j, "j");
l();
u();
d();
function L(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
__name(L, "L");
async function C(e, { request: t, assetsFetcher: s, ctx: a }, { path: i, searchParams: n }) {
  let r, o = new URL(t.url);
  x(o.searchParams, n);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let p = await import(e.entrypoint);
        try {
          r = await p.default(c, a);
        } catch (h) {
          let y = h;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : h;
        }
        break;
      }
      case "override": {
        r = T(await s.fetch(A(c, e.path ?? i))), e.headers && _(r.headers, e.headers);
        break;
      }
      case "static": {
        r = await s.fetch(A(c, i));
        break;
      }
      default:
        r = new Response("Not Found", { status: 404 });
    }
  } catch (p) {
    return console.error(p), new Response("Internal Server Error", { status: 500 });
  }
  return T(r);
}
__name(C, "C");
function D(e, t) {
  let s = "^//?(?:", a = ")/(.*)$";
  return !e.startsWith(s) || !e.endsWith(a) ? false : e.slice(s.length, -a.length).split("|").every((n) => t.has(n));
}
__name(D, "D");
l();
u();
d();
function pe(e, { protocol: t, hostname: s, port: a, pathname: i }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(s).test(e.hostname) || a && !new RegExp(a).test(e.port) || i && !new RegExp(i).test(e.pathname));
}
__name(pe, "pe");
function he(e, t) {
  if (e.method !== "GET") return;
  let { origin: s, searchParams: a } = new URL(e.url), i = a.get("url"), n = Number.parseInt(a.get("w") ?? "", 10), r = Number.parseInt(a.get("q") ?? "75", 10);
  if (!i || Number.isNaN(n) || Number.isNaN(r) || !t?.sizes?.includes(n) || r < 0 || r > 100) return;
  let o = new URL(i, s);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG) return;
  let c = i.startsWith("//"), p = i.startsWith("/") && !c;
  if (!p && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((w) => pe(o, w))) return;
  let h = e.headers.get("Accept") ?? "", y = t?.formats?.find((w) => h.includes(w))?.replace("image/", "");
  return { isRelative: p, imageUrl: o, options: { width: n, quality: r, format: y } };
}
__name(he, "he");
function fe(e, t, s) {
  let a = new Headers();
  if (s?.contentSecurityPolicy && a.set("Content-Security-Policy", s.contentSecurityPolicy), s?.contentDispositionType) {
    let n = t.pathname.split("/").pop(), r = n ? `${s.contentDispositionType}; filename="${n}"` : s.contentDispositionType;
    a.set("Content-Disposition", r);
  }
  e.headers.has("Cache-Control") || a.set("Cache-Control", `public, max-age=${s?.minimumCacheTTL ?? 60}`);
  let i = T(e);
  return _(i.headers, a), i;
}
__name(fe, "fe");
async function B(e, { buildOutput: t, assetsFetcher: s, imagesConfig: a }) {
  let i = he(e, a);
  if (!i) return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: n, imageUrl: r } = i, c = await (n && r.pathname in t ? s.fetch.bind(s) : fetch)(r);
  return fe(c, r, a);
}
__name(B, "B");
l();
u();
d();
l();
u();
d();
l();
u();
d();
async function k(e) {
  return import(e);
}
__name(k, "k");
var me = "x-vercel-cache-tags";
var ge = "x-next-cache-soft-tags";
var ye = /* @__PURE__ */ Symbol.for("__cloudflare-request-context__");
async function W(e) {
  let t = `https://${b}/v1/suspense-cache/`;
  if (!e.url.startsWith(t)) return null;
  try {
    let s = new URL(e.url), a = await _e();
    if (s.pathname === "/v1/suspense-cache/revalidate") {
      let n = s.searchParams.get("tags")?.split(",") ?? [];
      for (let r of n) await a.revalidateTag(r);
      return new Response(null, { status: 200 });
    }
    let i = s.pathname.replace("/v1/suspense-cache/", "");
    if (!i.length) return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let n = G(e, ge), r = await a.get(i, { softTags: n });
        return r ? new Response(JSON.stringify(r.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (r.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let n = globalThis[ye], r = /* @__PURE__ */ __name(async () => {
          let o = await e.json();
          o.data.tags === void 0 && (o.tags ??= G(e, me) ?? []), await a.set(i, o);
        }, "r");
        return n ? n.ctx.waitUntil(r()) : await r(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (s) {
    return console.error(s), new Response("Error handling cache request", { status: 500 });
  }
}
__name(W, "W");
async function _e() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? z("kv") : z("cache-api");
}
__name(_e, "_e");
async function z(e) {
  let t = `./__next-on-pages-dist__/cache/${e}.js`, s = await k(t);
  return new s.default();
}
__name(z, "z");
function G(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
__name(G, "G");
function Z() {
  globalThis[J] || (xe(), globalThis[J] = true);
}
__name(Z, "Z");
function xe() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let s = new Request(...t), a = await Re(s);
    return a || (a = await W(s), a) ? a : (we(s), e(s));
  };
}
__name(xe, "xe");
async function Re(e) {
  if (e.url.startsWith("blob:")) try {
    let s = `./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`, a = (await k(s)).default, i = { async arrayBuffer() {
      return a;
    }, get body() {
      return new ReadableStream({ start(n) {
        let r = Buffer.from(a);
        n.enqueue(r), n.close();
      } });
    }, async text() {
      return Buffer.from(a).toString();
    }, async json() {
      let n = Buffer.from(a);
      return JSON.stringify(n.toString());
    }, async blob() {
      return new Blob(a);
    } };
    return i.clone = () => ({ ...i }), i;
  } catch {
  }
  return null;
}
__name(Re, "Re");
function we(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
__name(we, "we");
var J = /* @__PURE__ */ Symbol.for("next-on-pages fetch patch");
l();
u();
d();
var Y = U(Q());
var E = class {
  static {
    __name(this, "E");
  }
  constructor(t, s, a, i, n) {
    this.routes = t;
    this.output = s;
    this.reqCtx = a;
    this.url = new URL(a.request.url), this.cookies = (0, Y.parse)(a.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = n?.find((r) => r.domain === this.url.hostname), this.locales = new Set(i.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: s, checkIntercept: a }) {
    let i = v(t.src, this.path, t.caseSensitive);
    if (!i.match || t.methods && !t.methods.map((r) => r.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase())) return;
    let n = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((r) => {
      let o = K(r, n);
      return o.newRouteDest && (n.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((r) => K(r, n).valid) && !(s && t.status !== this.status)) {
      if (a && t.dest) {
        let r = /\/(\(\.+\))+/, o = r.test(t.dest), c = r.test(this.path);
        if (o && !c) return;
      }
      return { routeMatch: i, routeDest: n.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let s = "x-middleware-override-headers", a = t.headers.get(s);
    if (a) {
      let c = new Set(a.split(",").map((p) => p.trim()));
      for (let p of c.keys()) {
        let h = `x-middleware-request-${p}`, y = t.headers.get(h);
        this.reqCtx.request.headers.get(p) !== y && (y ? this.reqCtx.request.headers.set(p, y) : this.reqCtx.request.headers.delete(p)), t.headers.delete(h);
      }
      t.headers.delete(s);
    }
    let i = "x-middleware-rewrite", n = t.headers.get(i);
    if (n) {
      let c = new URL(n, this.url), p = this.url.hostname !== c.hostname;
      this.path = p ? `${c}` : c.pathname, x(this.searchParams, c.searchParams), t.headers.delete(i);
    }
    let r = "x-middleware-next";
    t.headers.get(r) ? t.headers.delete(r) : !n && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), _(this.reqCtx.request.headers, t.headers), _(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t) return true;
    let s = t && this.output[t];
    if (!s || s.type !== "middleware") return this.status = 500, false;
    let a = await C(s, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), a.status === 500 ? (this.status = a.status, false) : (this.processMiddlewareResp(a), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, s, a) {
    !t.headers || (_(this.headers.normal, t.headers, { match: s, captureGroupKeys: a }), t.important && _(this.headers.important, t.headers, { match: s, captureGroupKeys: a }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, s, a) {
    if (!t.dest) return this.path;
    let i = this.path, n = t.dest;
    this.wildcardMatch && /\$wildcard/.test(n) && (n = n.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = S(n, s, a);
    let r = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(i), c = /^\/__index\.prefetch\.rsc$/i.test(i);
    r && !o && !c && (this.path = i);
    let p = /\.rsc$/i.test(this.path), h = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    p && !h && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let w = new URL(this.path, this.url);
    return x(this.searchParams, w.searchParams), P(this.path) || (this.path = w.pathname), i;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location")) return;
    let { locale: { redirect: a, cookie: i } } = t, n = i && this.cookies[i], r = j(n ?? ""), o = j(this.reqCtx.request.headers.get("accept-language") ?? ""), h = [...r, ...o].map((y) => a[y]).filter(Boolean)[0];
    if (h) {
      !this.path.startsWith(h) && (this.headers.normal.set("location", h), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, s) {
    return !this.locales || s !== "miss" ? t : D(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, s) {
    let a = this.getLocaleFriendlyRoute(s, t), { routeMatch: i, routeDest: n } = this.checkRouteMatch(a, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, r = { ...a, dest: n };
    if (!i?.match || r.middlewarePath && this.middlewareInvoked.includes(r.middlewarePath)) return "skip";
    let { match: o, captureGroupKeys: c } = i;
    if (this.applyRouteOverrides(r), this.applyLocaleRedirects(r), !await this.runRouteMiddleware(r.middlewarePath)) return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation) return "done";
    this.applyRouteHeaders(r, o, c), this.applyRouteStatus(r);
    let h = this.applyRouteDest(r, o, c);
    if (r.check && !P(this.path)) if (h === this.path) {
      if (t !== "miss") return this.checkPhase(L(t));
      this.status = 404;
    } else if (t === "miss") {
      if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output)) return this.checkPhase("filesystem");
      this.status === 404 && (this.status = void 0);
    } else return this.checkPhase("none");
    return !r.continue || r.status && r.status >= 300 && r.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50) return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let s = true;
    for (let n of this.routes[t]) {
      let r = await this.checkRoute(t, n);
      if (r === "error") return "error";
      if (r === "done") {
        s = false;
        break;
      }
    }
    if (t === "hit" || P(this.path) || this.headers.normal.has("location") || !!this.body) return "done";
    if (t === "none") for (let n of this.locales) {
      let r = new RegExp(`/${n}(/.*)`), c = this.path.match(r)?.[1];
      if (c && c in this.output) {
        this.path = c;
        break;
      }
    }
    let a = this.path in this.output;
    if (!a && this.path.endsWith("/")) {
      let n = this.path.replace(/\/$/, "");
      a = n in this.output, a && (this.path = n);
    }
    if (t === "miss" && !a) {
      let n = !this.status || this.status < 400;
      this.status = n ? 404 : this.status;
    }
    let i = "miss";
    return a || t === "miss" || t === "error" ? i = "hit" : s && (i = L(t)), this.checkPhase(i);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let s = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), s;
  }
};
async function ee(e, t, s, a) {
  let i = new E(t.routes, s, e, a, t.wildcard), n = await te(i);
  return Me(e, n, s);
}
__name(ee, "ee");
async function te(e, t = "none", s = false) {
  return await e.run(t) === "error" || !s && e.status && e.status >= 400 ? te(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
__name(te, "te");
async function Me(e, { path: t = "/404", status: s, headers: a, searchParams: i, body: n }, r) {
  let o = a.normal.get("location");
  if (o) {
    if (o !== a.middlewareLocation) {
      let h = [...i.keys()].length ? `?${i.toString()}` : "";
      a.normal.set("location", `${o ?? "/"}${h}`);
    }
    return new Response(null, { status: s, headers: a.normal });
  }
  let c;
  if (n !== void 0) c = new Response(n, { status: s });
  else if (P(t)) {
    let h = new URL(t);
    x(h.searchParams, i), c = await fetch(h, e.request);
  } else c = await C(r[t], e, { path: t, status: s, headers: a, searchParams: i });
  let p = a.normal;
  return _(p, c.headers), _(p, a.important), c = new Response(c.body, { ...c, status: s || c.status, headers: p }), c;
}
__name(Me, "Me");
l();
u();
d();
function ae() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: Ee };
}
__name(ae, "ae");
function Ee(e) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(e);
  if (t) return t;
  let s = Ie();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(e, s), s;
}
__name(Ee, "Ee");
function Ie() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: /* @__PURE__ */ __name((t, s) => e.has(s) ? e.get(s) : Reflect.get(globalThis, s), "get"), set: /* @__PURE__ */ __name((t, s, a) => Ne.has(s) ? Reflect.set(globalThis, s, a) : (e.set(s, a), true), "set") });
}
__name(Ie, "Ie");
var Ne = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var Ke = Object.defineProperty;
var Ae = /* @__PURE__ */ __name((...e) => {
  let t = e[0], s = e[1], a = "__import_unsupported";
  if (!(s === a && typeof t == "object" && t !== null && a in t)) return Ke(...e);
}, "Ae");
globalThis.Object.defineProperty = Ae;
globalThis.AbortController = class extends AbortController {
  constructor() {
    try {
      super();
    } catch (t) {
      if (t instanceof Error && t.message.includes("Disallowed operation called within global scope")) return { signal: { aborted: false, reason: null, onabort: /* @__PURE__ */ __name(() => {
      }, "onabort"), throwIfAborted: /* @__PURE__ */ __name(() => {
      }, "throwIfAborted") }, abort() {
      } };
      throw t;
    }
  }
};
var Ta = { async fetch(e, t, s) {
  ae(), Z();
  let a = await __ALSes_PROMISE__;
  if (!a) {
    let r = new URL(e.url), o = await t.ASSETS.fetch(`${r.protocol}//${r.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: i, requestContextAsyncLocalStorage: n } = a;
  return i.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: b }, async () => n.run({ env: t, ctx: s, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image")) return B(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let o = q(e);
    return ee({ request: o, ctx: s, assetsFetcher: t.ASSETS }, f, m, g);
  }));
} };
export {
  Ta as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=bundledWorker-0.34437424962293295.mjs.map
