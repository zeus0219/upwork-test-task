"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9520],
  {
    73406: function (e, t, s) {
      var a = s(85893),
        n = s(67294),
        o = s(70134),
        r = s(40724);
      t.Z = (e) => {
        let { data: t } = e,
          [s, i] = (0, n.useState)(""),
          [l, d] = (0, n.useState)(null),
          [c, h] = (0, n.useState)(!1),
          [m, x] = (0, n.useState)(!1),
          IconMap = (e) => {
            let t = {
              Article: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, a.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
                }),
              }),
              Blog: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, a.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                }),
              }),
              GuideArticles: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, a.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
                }),
              }),
              MomoPage: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, a.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
                }),
              }),
              Promotions: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, a.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
                }),
              }),
              QAs: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, a.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                }),
              }),
              Services: (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-4 w-4 opacity-80",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: (0, a.jsx)("path", {
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
          (0, n.useCallback)(
            (0, o.Z)((e) => {
              r.o
                .post("/search/suggest", {
                  data: { q: e, t: 0, s: 0, pi: 0, c: 3 },
                })
                .then((e) => {
                  if ((h(!1), e && e.Result)) {
                    var t;
                    let s;
                    (t = e.Data),
                      (s = []),
                      Object.keys(t).map((e, a) => {
                        if (
                          0 == t[e].Items.length ||
                          "PlaceBrand" == e ||
                          "PlaceCategory" == e ||
                          "QAs" == e
                        )
                          return;
                        let n = t[e].Items;
                        (n.type = e), (s = [...s, ...n]);
                      }),
                      d(s.slice(0, 8));
                  }
                });
            }, 500),
            []
          ),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("form", {
              onSubmit: function (e) {
                e.preventDefault(),
                  "" != s &&
                    null != s &&
                    (window.location.href = "/tim-kiem?q=".concat(s));
              },
              className: "relative",
              children: (0, a.jsxs)("div", {
                className: "relative ",
                children: [
                  (0, a.jsx)("input", {
                    type: "text",
                    value: s,
                    onChange: (e) => i(e.target.value),
                    placeholder: "Bạn t\xecm g\xec ...",
                    className:
                      "block h-9 w-full items-center justify-center rounded border border-gray-300 bg-white px-3 py-1",
                  }),
                  l &&
                    l.length > 0 &&
                    m &&
                    (0, a.jsx)("div", {
                      className:
                        "absolute left-0 right-0 top-full -ml-10 -mr-10 mt-1 rounded border border-gray-200 bg-white px-1 py-3 shadow-sm lg:left-auto lg:ml-0 lg:mr-0 lg:w-96 ",
                      children: l.map(
                        (e, t) =>
                          e.UrlRewrite &&
                          (0, a.jsx)(
                            "a",
                            {
                              href: "https://www.momo.vn".concat(e.UrlRewrite),
                              target: "_blank",
                              className: "text-gray-800 hover:text-pink-600",
                              children: (0, a.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex flex-row flex-nowrap items-center px-3 py-2 text-sm",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "flex-none pr-3 ",
                                      children: IconMap(e.Type),
                                    }),
                                    (0, a.jsx)("div", {
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
                  c
                    ? (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className:
                          "absolute right-0 top-2 mr-2 h-5 w-5 animate-spin opacity-50",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                        }),
                      })
                    : (0, a.jsx)("button", {
                        type: "submit",
                        className:
                          "absolute right-2 top-2 border-none opacity-50 outline-none",
                        "aria-label": "Search",
                        children: (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-5 w-5 ",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, a.jsx)("path", {
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
    59520: function (e, t, s) {
      s.r(t);
      var a = s(85893),
        n = s(85463),
        o = s.n(n),
        r = s(5152),
        i = s.n(r),
        l = s(67294),
        d = s(73406),
        c = s(55852),
        h = s(87561);
      let m = i()(() => s.e(2181).then(s.bind(s, 67043)), {
        loadableGenerated: { webpack: () => [67043] },
      });
      t.default = (e) => {
        let { data: t } = e,
          [s, n] = (0, l.useState)(!1),
          [r, i] = (0, l.useState)(!1),
          handleMouseEnter = (e) => {
            let t = window.setTimeout(() => {
              n(e);
            }, 200);
            i(t);
          },
          handleMouseLeave = (e) => {
            window.clearTimeout(r), n(!1);
          },
          getMenuItem = (e) =>
            null == t
              ? void 0
              : t
                  .filter((t) => t.ParentId == e)
                  .sort((e, t) => (e.OrderView > t.OrderView ? -1 : 1)),
          x = getMenuItem(null),
          checkLastMegaMenu = (e, t) => {
            var s;
            return (
              e > 4 &&
              (null === (s = getMenuItem(t)) || void 0 === s
                ? void 0
                : s.length) > 7
            );
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("nav", {
              className:
                "jsx-5306783ae3032151 header-desktop main-menu sticky top-0 z-40 hidden border-b border-gray-200 bg-white bg-opacity-100 shadow-sm lg:block",
              children: (0, a.jsxs)("div", {
                className:
                  "jsx-5306783ae3032151 mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-md lg:px-8",
                children: [],
              }),
            }),
            (0, a.jsx)(o(), {
              id: "5306783ae3032151",
              children:
                '.submenu{visibility:hidden;opacity:0;padding-top:15px}.submenu:before{content:"";width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid#e0e0e0;position:absolute;top:2px;left:34px;margin-left:-5px;pointer-events:none;-webkit-transition:opacity.2s ease-in;-moz-transition:opacity.2s ease-in;-o-transition:opacity.2s ease-in;transition:opacity.2s ease-in}.submenu:after{content:"";width:0;height:0;border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:14px solid#fff;position:absolute;top:3px;left:35px;margin-left:-5px;pointer-events:none;-webkit-transition:opacity.2s ease-in;-moz-transition:opacity.2s ease-in;-o-transition:opacity.2s ease-in;transition:opacity.2s ease-in}@media(max-width:1024px){.submenu.positon-right-md{right:0px}.submenu.positon-right-md:before{right:34px;left:auto}.submenu.positon-right-md:after{right:35px;left:auto}}.menu.is-active .submenu{opacity:1!important;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);visibility:visible}.menu.is-active .icon{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}',
            }),
          ],
        });
      };
    },
    87561: function (e, t, s) {
      s.d(t, {
        o: function () {
          return a;
        },
      });
      let a = "nav_menu";
    },
    70134: function (e, t) {
      t.Z = (e, t) => {
        let s = null;
        return function () {
          for (var a = arguments.length, n = Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          null !== s && (clearTimeout(s), (s = null)),
            (s = setTimeout(() => e(...n), t));
        };
      };
    },
  },
]);
