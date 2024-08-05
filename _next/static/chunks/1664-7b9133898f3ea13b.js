(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1664],
  {
    97498: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return l;
          },
          ACTION_RESTORE: function () {
            return u;
          },
          ACTION_SERVER_PATCH: function () {
            return f;
          },
          ACTION_PREFETCH: function () {
            return a;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return i;
          },
        });
      let o = "refresh",
        l = "navigate",
        u = "restore",
        f = "server-patch",
        a = "prefetch",
        c = "fast-refresh",
        i = "server-action";
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    10030: function (e, t, r) {
      "use strict";
      function getDomainLocale(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        r(22866),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    65170: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(38754),
        o = n._(r(67294)),
        l = r(74450),
        u = r(92227),
        f = r(64364),
        a = r(10109),
        c = r(73607),
        i = r(11823),
        s = r(89031),
        d = r(40920),
        p = r(10030),
        h = r(77192),
        y = r(97498),
        v = new Set();
      function prefetch(e, t, r, n, o, l) {
        if (!l && !(0, u.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let o =
              void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0,
            l = t + "%" + r + "%" + o;
          if (v.has(l)) return;
          v.add(l);
        }
        let f = l ? e.prefetch(t, o) : e.prefetch(t, r, n);
        Promise.resolve(f).catch((e) => {});
      }
      function formatStringOrUrl(e) {
        return "string" == typeof e ? e : (0, f.formatUrl)(e);
      }
      let _ = o.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: f,
            as: v,
            children: _,
            prefetch: b = null,
            passHref: O,
            replace: E,
            shallow: g,
            scroll: C,
            locale: T,
            onClick: m,
            onMouseEnter: P,
            onTouchStart: R,
            legacyBehavior: A = !1,
            ...j
          } = e;
          (r = _),
            A &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = o.default.createElement("a", null, r));
          let L = o.default.useContext(i.RouterContext),
            M = o.default.useContext(s.AppRouterContext),
            S = null != L ? L : M,
            k = !L,
            N = !1 !== b,
            U = null === b ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
            { href: I, as: x } = o.default.useMemo(() => {
              if (!L) {
                let e = formatStringOrUrl(f);
                return { href: e, as: v ? formatStringOrUrl(v) : e };
              }
              let [e, t] = (0, l.resolveHref)(L, f, !0);
              return { href: e, as: v ? (0, l.resolveHref)(L, v) : t || e };
            }, [L, f, v]),
            K = o.default.useRef(I),
            D = o.default.useRef(x);
          A && (n = o.default.Children.only(r));
          let F = A ? n && "object" == typeof n && n.ref : t,
            [H, w, V] = (0, d.useIntersection)({ rootMargin: "200px" }),
            B = o.default.useCallback(
              (e) => {
                (D.current !== x || K.current !== I) &&
                  (V(), (D.current = x), (K.current = I)),
                  H(e),
                  F &&
                    ("function" == typeof F
                      ? F(e)
                      : "object" == typeof F && (F.current = e));
              },
              [x, F, I, V, H]
            );
          o.default.useEffect(() => {
            S && w && N && prefetch(S, I, x, { locale: T }, { kind: U }, k);
          }, [x, I, w, T, N, null == L ? void 0 : L.locale, S, k, U]);
          let G = {
            ref: B,
            onClick(e) {
              A || "function" != typeof m || m(e),
                A &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(e),
                S &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, l, f, a, c, i, s) {
                    let { nodeName: d } = e.currentTarget,
                      p = "A" === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute("target");
                        return (
                          (r && "_self" !== r) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!i && !(0, u.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let navigate = () => {
                      let e = null == a || a;
                      "beforePopState" in t
                        ? t[l ? "replace" : "push"](r, n, {
                            shallow: f,
                            locale: c,
                            scroll: e,
                          })
                        : t[l ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !s,
                            scroll: e,
                          });
                    };
                    i ? o.default.startTransition(navigate) : navigate();
                  })(e, S, I, x, E, g, C, T, k, N);
            },
            onMouseEnter(e) {
              A || "function" != typeof P || P(e),
                A &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e),
                S &&
                  (N || !k) &&
                  prefetch(
                    S,
                    I,
                    x,
                    { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: U },
                    k
                  );
            },
            onTouchStart(e) {
              A || "function" != typeof R || R(e),
                A &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e),
                S &&
                  (N || !k) &&
                  prefetch(
                    S,
                    I,
                    x,
                    { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: U },
                    k
                  );
            },
          };
          if ((0, a.isAbsoluteUrl)(x)) G.href = x;
          else if (!A || O || ("a" === n.type && !("href" in n.props))) {
            let e = void 0 !== T ? T : null == L ? void 0 : L.locale,
              t =
                (null == L ? void 0 : L.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  x,
                  e,
                  null == L ? void 0 : L.locales,
                  null == L ? void 0 : L.domainLocales
                );
            G.href =
              t ||
              (0, h.addBasePath)(
                (0, c.addLocale)(x, e, null == L ? void 0 : L.defaultLocale)
              );
          }
          return A
            ? o.default.cloneElement(n, G)
            : o.default.createElement("a", { ...j, ...G }, r);
        }),
        b = _;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    41664: function (e, t, r) {
      r(65170);
    },
  },
]);
