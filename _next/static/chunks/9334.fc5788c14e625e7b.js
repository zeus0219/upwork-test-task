"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9334],
  {
    73406: function (e, t, a) {
      var s = a(85893),
        i = a(67294),
        o = a(70134),
        n = a(40724);
      t.Z = (e) => {
        let { data: t } = e,
          [a, r] = (0, i.useState)(""),
          [l, c] = (0, i.useState)(null),
          [h, d] = (0, i.useState)(!1),
          [f, m] = (0, i.useState)(!1),
          IconMap = (e) => {
            let t = {
              Article: (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
                }),
              }),
              Blog: (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                }),
              }),
              GuideArticles: (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
                }),
              }),
              MomoPage: (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
                }),
              }),
              Promotions: (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
                }),
              }),
              QAs: (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                }),
              }),
              Services: (0, s.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
                }),
              }),
            };
            return t[e];
          };
        return (
          (0, i.useCallback)(
            (0, o.Z)((e) => {
              n.o
                .post("/search/suggest", {
                  data: { q: e, t: 0, s: 0, pi: 0, c: 3 },
                })
                .then((e) => {
                  if ((d(!1), e && e.Result)) {
                    var t;
                    let a;
                    (t = e.Data),
                      (a = []),
                      Object.keys(t).map((e, s) => {
                        if (
                          0 == t[e].Items.length ||
                          "PlaceBrand" == e ||
                          "PlaceCategory" == e ||
                          "QAs" == e
                        )
                          return;
                        let i = t[e].Items;
                        (i.type = e), (a = [...a, ...i]);
                      }),
                      c(a.slice(0, 8));
                  }
                });
            }, 500),
            []
          ),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("form", {
              onSubmit: function (e) {
                e.preventDefault(),
                  "" != a &&
                    null != a &&
                    (window.location.href = "/tim-kiem?q=".concat(a));
              },
              className: "relative",
              children: (0, s.jsxs)("div", {
                className: "relative ",
                children: [
                  (0, s.jsx)("input", {
                    type: "text",
                    value: a,
                    onChange: (e) => r(e.target.value),
                    placeholder: "Bạn t\xecm g\xec ...",
                    className:
                      "block h-9 w-full items-center justify-center rounded border border-gray-300 bg-white px-3 py-1",
                  }),
                  l &&
                    l.length > 0 &&
                    f &&
                    (0, s.jsx)("div", {
                      className:
                        "absolute left-0 right-0 top-full -ml-10 -mr-10 mt-1 rounded border border-gray-200 bg-white px-1 py-3 shadow-sm lg:left-auto lg:ml-0 lg:mr-0 lg:w-96 ",
                      children: l.map(
                        (e, t) =>
                          e.UrlRewrite &&
                          (0, s.jsx)(
                            "a",
                            {
                              href: "https://www.momo.vn".concat(e.UrlRewrite),
                              target: "_blank",
                              className: "text-gray-800 hover:text-pink-600",
                              children: (0, s.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex flex-row flex-nowrap items-center px-3 py-2 text-sm",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: "flex-none pr-3 ",
                                      children: IconMap(e.Type),
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap",
                                      children: e.Name,
                                    }),
                                  ],
                                },
                                e.Id
                              ),
                            },
                            e.Id
                          )
                      ),
                    }),
                  h
                    ? (0, s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className:
                          "absolute right-0 top-2 mr-2 h-5 w-5 animate-spin opacity-50",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, s.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                        }),
                      })
                    : (0, s.jsx)("button", {
                        type: "submit",
                        className:
                          "absolute right-2 top-2 border-none opacity-50 outline-none",
                        "aria-label": "Search",
                        children: (0, s.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-5 w-5 ",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                          }),
                        }),
                      }),
                ],
              }),
            }),
          })
        );
      };
    },
    99334: function (e, t, a) {
      a.r(t);
      var s = a(85893),
        i = a(85463),
        o = a.n(i),
        n = a(11163),
        r = a(5152),
        l = a.n(r),
        c = a(67294),
        h = a(73406);
      let d = l()(
        () => Promise.all([a.e(2854), a.e(4190)]).then(a.bind(a, 64190)),
        { loadableGenerated: { webpack: () => [64190] } }
      );
      t.default = (e) => {
        let { data: t } = e,
          [a, i] = (0, c.useState)(!1),
          r = (0, n.useRouter)();
        (0, c.useEffect)(() => {
          let handleRouteChange = (e, t) => {
            let { shallow: a } = t;
            i(!1);
          };
          return (
            r.events.on("routeChangeStart", handleRouteChange),
            () => {
              r.events.off("routeChangeStart", handleRouteChange);
            }
          );
        }, []);
        let openMenuMobile = () => {
          i(!a);
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("nav", {
              className:
                "jsx-49f9d7a8fff0a4a2 " +
                "mobile-menu header-mobile z-60 sticky left-0 right-0 top-0  border-b border-gray-200 bg-white bg-opacity-95 backdrop-blur-sm lg:hidden ".concat(
                  a ? "active" : ""
                ),
              children: (0, s.jsxs)("div", {
                className:
                  "jsx-49f9d7a8fff0a4a2 relative z-20 flex items-center pb-1 pl-4 pr-1 pt-1",
                children: [
                  (0, s.jsx)("div", {
                    className: "jsx-49f9d7a8fff0a4a2 flex-none",
                    children: (0, s.jsx)("a", {
                      href: "/",
                      "aria-label": "MoMo",
                      className:
                        "jsx-49f9d7a8fff0a4a2 block transition-opacity hover:opacity-90",
                      children: (0, s.jsxs)("svg", {
                        width: 72,
                        height: 72,
                        viewBox: "0 0 72 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "jsx-49f9d7a8fff0a4a2 mx-auto block h-9 w-9",
                        children: [
                          (0, s.jsx)("path", {
                            d: "M0 8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8Z",
                            fill: "#A50064",
                            className: "jsx-49f9d7a8fff0a4a2",
                          }),
                          (0, s.jsx)("path", {
                            d: "M51.859 10C45.6394 10 40.5057 15.0349 40.5057 21.3533C40.5057 27.5729 45.5407 32.7065 51.859 32.7065C58.0786 32.7065 63.2123 27.6716 63.2123 21.3533C63.2123 15.1337 58.1774 10 51.859 10ZM51.859 26.1908C49.1935 26.1908 47.0215 24.0188 47.0215 21.3533C47.0215 18.6877 49.1935 16.5158 51.859 16.5158C54.5246 16.5158 56.6965 18.6877 56.6965 21.3533C56.6965 24.0188 54.5246 26.1908 51.859 26.1908Z",
                            fill: "white",
                            className: "jsx-49f9d7a8fff0a4a2",
                          }),
                          (0, s.jsx)("path", {
                            d: "M28.7576 10C26.8818 10 25.1048 10.5923 23.6239 11.6783C22.2418 10.5923 20.4648 10 18.4903 10C13.7515 10 10 13.8502 10 18.4903V32.7065H16.5158V18.4903C16.5158 17.4043 17.4043 16.6145 18.3915 16.6145C19.4775 16.6145 20.2673 17.503 20.2673 18.4903V32.7065H26.7831V18.4903C26.7831 17.4043 27.6716 16.6145 28.6589 16.6145C29.7448 16.6145 30.5346 17.503 30.5346 18.4903V32.7065H37.0504V18.589C37.2479 13.8502 33.4963 10 28.7576 10Z",
                            fill: "white",
                            className: "jsx-49f9d7a8fff0a4a2",
                          }),
                          (0, s.jsx)("path", {
                            d: "M51.859 37.6427C45.6394 37.6427 40.5057 42.6776 40.5057 48.996C40.5057 55.2156 45.5407 60.3492 51.859 60.3492C58.0786 60.3492 63.2123 55.3143 63.2123 48.996C63.2123 42.6776 58.1774 37.6427 51.859 37.6427ZM51.859 53.7347C49.1935 53.7347 47.0215 51.5628 47.0215 48.8972C47.0215 46.2317 49.1935 44.0598 51.859 44.0598C54.5246 44.0598 56.6965 46.2317 56.6965 48.8972C56.6965 51.6615 54.5246 53.7347 51.859 53.7347Z",
                            fill: "white",
                            className: "jsx-49f9d7a8fff0a4a2",
                          }),
                          (0, s.jsx)("path", {
                            d: "M28.7576 37.6427C26.8818 37.6427 25.1048 38.235 23.6239 39.321C22.2418 38.235 20.4648 37.6427 18.4903 37.6427C13.7515 37.6427 10 41.4929 10 46.133V60.3492H16.5158V46.0342C16.5158 44.9483 17.4043 44.1585 18.3915 44.1585C19.4775 44.1585 20.2673 45.047 20.2673 46.0342V60.2505H26.7831V46.0342C26.7831 44.9483 27.6716 44.1585 28.6589 44.1585C29.7448 44.1585 30.5346 45.047 30.5346 46.0342V60.2505H37.0504V46.133C37.2479 41.3942 33.4963 37.6427 28.7576 37.6427Z",
                            fill: "white",
                            className: "jsx-49f9d7a8fff0a4a2",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "jsx-49f9d7a8fff0a4a2 flex-1 pl-4 pr-1",
                    children: (0, s.jsx)(h.Z, {}),
                  }),
                  (0, s.jsx)("div", {
                    className: "jsx-49f9d7a8fff0a4a2 flex-none",
                    children: (0, s.jsx)("div", {
                      onClick: () => openMenuMobile(),
                      className:
                        "jsx-49f9d7a8fff0a4a2 mobile-menu__button flex h-11 w-12 cursor-pointer items-center justify-center",
                      children: a
                        ? (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            className: "jsx-49f9d7a8fff0a4a2 h-7 w-7",
                            children: (0, s.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M6 18L18 6M6 6l12 12",
                              className: "jsx-49f9d7a8fff0a4a2",
                            }),
                          })
                        : (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            className: "jsx-49f9d7a8fff0a4a2 h-7 w-7",
                            children: (0, s.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M4 6h16M4 12h16M4 18h16",
                              className: "jsx-49f9d7a8fff0a4a2",
                            }),
                          }),
                    }),
                  }),
                ],
              }),
            }),
            a &&
              (0, s.jsx)(c.Suspense, {
                fallback: "",
                children: (0, s.jsx)(d, { menu: t }),
              }),
            (0, s.jsx)(o(), {
              id: "49f9d7a8fff0a4a2",
              children:
                ".overlay.jsx-49f9d7a8fff0a4a2{background-color:rgba(255,255,255,.65);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.overlay.jsx-49f9d7a8fff0a4a2{position:fixed;width:100%;height:100%;height:100vh;left:0;right:0;top:0;bottom:0;padding:0;overflow-y:scroll;opacity:0;pointer-events:none;visibility:hidden;-webkit-transition-duration:350ms;-moz-transition-duration:350ms;-o-transition-duration:350ms;transition-duration:350ms;-webkit-transition-property:opacity,visibility;-moz-transition-timing-function:opacity,visibility;-o-transition-timing-function:opacity,visibility;transition-property:opacity,visibility;background-color:rgba(255,255,255,.85)}.overlay.is-active.jsx-49f9d7a8fff0a4a2{opacity:1;visibility:visible;pointer-events:all;-webkit-transition-timing-function:cubic-bezier(.165,.84,.44,1);-moz-transition-timing-function:cubic-bezier(.165,.84,.44,1);-o-transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-timing-function:cubic-bezier(.165,.84,.44,1)}",
            }),
          ],
        });
      };
    },
    70134: function (e, t) {
      t.Z = (e, t) => {
        let a = null;
        return function () {
          for (var s = arguments.length, i = Array(s), o = 0; o < s; o++)
            i[o] = arguments[o];
          null !== a && (clearTimeout(a), (a = null)),
            (a = setTimeout(() => e(...i), t));
        };
      };
    },
  },
]);
