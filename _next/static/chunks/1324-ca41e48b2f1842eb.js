"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1324],
  {
    61159: function (e, t, a) {
      var n = a(67294),
        l = a(40724),
        s = a(1785),
        i = a.n(s);
      t.Z = (e) => {
        let { pathname: t, trackingData: a } = e,
          [s, r] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            t &&
              l.o
                .get("/tracking/get-info?pathname=".concat(t))
                .then(function (e) {
                  var t;
                  let a = null !== (t = e.Data) && void 0 !== t ? t : null;
                  r(a || null);
                });
          }, [t]),
          (0, n.useEffect)(() => {
            a && r(a || null);
          }, [a]),
          (0, n.useEffect)(() => {
            s &&
              i().dataLayer({
                dataLayer: {
                  event: null == s ? void 0 : s.Event,
                  project_name: null == s ? void 0 : s.ProjectName,
                  project_id: null == s ? void 0 : s.ProjectId,
                  main_case: null == s ? void 0 : s.MainCase,
                  page_type: null == s ? void 0 : s.PageType,
                  page_id: null == s ? void 0 : s.PageId,
                },
              });
          }, [s]),
          null
        );
      };
    },
    13178: function (e, t, a) {
      var n = a(85893),
        l = a(57851),
        s = a(50126);
      t.Z = function (e) {
        let {
            className: t = null,
            data: a,
            usePopup: i = !1,
            seoTitleTagName: r = "h3",
            layoutTwoCol: o = null,
          } = e,
          getTypeOfArticle = (e, t) =>
            (0 !== e || o) && (1 !== e || 2 !== t.length || o)
              ? "feature"
              : "big-feature";
        return (0, n.jsx)("div", {
          className: (0, l.m)(
            "article-feature grid grid-cols-1 content-center gap-4 pb-7 md:grid-cols-2 md:gap-8",
            t
          ),
          children:
            a &&
            a.map((e, t) =>
              (0, n.jsx)(
                "div",
                {
                  className: (0, l.m)(
                    "col-span-1",
                    0 === t && "md:col-span-2 md:mb-3",
                    1 === t && 2 === a.length && "md:col-span-2",
                    !0 == o && "md:col-span-1"
                  ),
                  children: (0, n.jsx)(s.Z, {
                    usePopup: i,
                    data: e,
                    type: getTypeOfArticle(t, a),
                    isPriority: t < 2,
                    seoTitleTagName: r,
                  }),
                },
                e.Id
              )
            ),
        });
      };
    },
    50126: function (e, t, a) {
      var n = a(85893),
        l = a(67294),
        s = a(71046),
        i = a(46943),
        r = a(35024),
        o = a(20212);
      t.Z = (e) => {
        var t, a, d;
        let {
            className: c,
            data: m,
            type: u,
            isPriority: p = !1,
            usePopup: x = !1,
            isMobile: g = !1,
            seoTitleTagName: h = "h3",
          } = e,
          [f, v] = (0, l.useState)(!1),
          [I, b] = (0, l.useState)(null),
          handleShow = (e) => {
            x && (b(e), v(!0));
          };
        return (0, n.jsxs)("article", {
          className: ""
            .concat(c || "", " article-new relative article-type-")
            .concat(u, " ")
            .concat(
              "",
              "\n      grid content-start gap-x-4 gap-y-2 md:gap-1 \n      "
            )
            .concat(
              "normal" === u ? "grid-cols-12 md:grid-cols-1" : "",
              "\n    "
            ),
          children: [
            (0, n.jsx)("div", {
              className: "\n          ".concat(
                "normal" === u
                  ? "order-2 col-span-5 md:order-1 md:col-span-full"
                  : "",
                "\n        "
              ),
              children: (0, n.jsx)(r.Z, {
                onClick: x ? () => handleShow(m.Id) : null,
                avatar: m.Avatar,
                title: m.Title,
                slug: null !== (t = m.Link) && void 0 !== t ? t : m.Url,
                id: m.Id,
                objectFit: "contain",
                isPriority: p,
              }),
            }),
            (0, n.jsx)(o.Z, {
              onClick: x ? () => handleShow(m.Id) : null,
              className: "md:pt-1\n          "
                .concat(u.includes("feature") ? "pt-2" : "", "\n          ")
                .concat(
                  "normal" === u ? "order-3 col-span-full md:order-2" : "",
                  "\n        "
                ),
              type: u,
              catId: m.CategoryId,
              catName: m.CategoryName,
              catLink: m.CategoryLink,
              date:
                null !== (a = m.PublicDate) && void 0 !== a
                  ? a
                  : m.DateShowFormat,
              totalViews: m.TotalViews,
              totalViewsFormat: m.TotalViewsFormat,
            }),
            (0, n.jsx)(i.Z, {
              onClick: x ? () => handleShow(m.Id) : null,
              className: "\n          ".concat(
                "normal" === u
                  ? "order-1 col-span-7 md:order-3 md:col-span-full"
                  : "",
                "\n        "
              ),
              type: u,
              title: m.Title,
              slug: null !== (d = m.Link) && void 0 !== d ? d : m.Url,
              seoTitleTagName: h,
            }),
            f &&
              (0, n.jsx)(s.Z, {
                isOpen: f,
                onDismiss: () => {
                  v(!1);
                },
                Id: I,
                isMobile: g,
              }),
          ],
        });
      };
    },
    52105: function (e, t, a) {
      var n = a(85893),
        l = a(24561),
        s = a(67294),
        i = a(40724),
        r = a(50126);
      t.Z = (e) => {
        let {
            data: t,
            excludeIds: a = [],
            cat: o,
            isMore: d = !0,
            isHome: c = !1,
          } = e,
          [m, u] = (0, s.useState)({
            CateId: null,
            Items: [],
            TotalItems: 0,
            LastIdx: 0,
            Count: 10,
            ExcludeIds: [],
          });
        (0, s.useEffect)(() => {
          u({
            ...m,
            SortType: 1,
            CateId: o ? o.Id : null,
            Items: t.Items,
            TotalItems: t.TotalItems,
            LastIdx: t.LastIndex ? t.LastIndex : t.LastIdx,
            Count: t.Count,
            ExcludeIds: a,
            IsLoading: !1,
          });
        }, [t, o]);
        let paramEmptyNull = (e) =>
            e && "null" != e && "undefined" != e ? e : "",
          getExcludeIds = () => (m.ExcludeIds ? m.ExcludeIds.join(",") : "");
        return (0, n.jsxs)(n.Fragment, {
          children: [
            m.Items &&
              m.Items.map((e, t) =>
                (0, n.jsx)(
                  r.Z,
                  {
                    className: "".concat(
                      t == m.Items.length - 1
                        ? "border-b-0"
                        : "border-b border-gray-200 pb-2 md:border-b-0 md:pb-0"
                    ),
                    type: "popular",
                    data: e,
                  },
                  e.Id
                )
              ),
            m.IsLoading &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("article", {
                    className: "hidden md:block",
                    children: (0, n.jsxs)(l.ZP, {
                      viewBox: "0 0 350 256",
                      title: "Loading news...",
                      children: [
                        (0, n.jsx)("rect", {
                          x: "0",
                          y: "0",
                          rx: "5",
                          ry: "5",
                          width: "350",
                          height: "168",
                        }),
                        (0, n.jsx)("rect", {
                          x: "0",
                          y: "180",
                          rx: "0",
                          ry: "0",
                          width: "350",
                          height: "76",
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("article", {
                    className: "hidden md:block",
                    children: (0, n.jsxs)(l.ZP, {
                      viewBox: "0 0 350 256",
                      title: "Loading news...",
                      children: [
                        (0, n.jsx)("rect", {
                          x: "0",
                          y: "0",
                          rx: "5",
                          ry: "5",
                          width: "350",
                          height: "168",
                        }),
                        (0, n.jsx)("rect", {
                          x: "0",
                          y: "180",
                          rx: "0",
                          ry: "0",
                          width: "350",
                          height: "76",
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("article", {
                    className: "md:hidden",
                    children: (0, n.jsx)(l.ZP, {
                      viewBox: "0 0 335 90",
                      title: "Loading news...",
                      children: (0, n.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "5",
                        ry: "5",
                        width: "335",
                        height: "90",
                      }),
                    }),
                  }),
                ],
              }),
            m.LastIdx < m.TotalItems &&
              d &&
              (0, n.jsx)("div", {
                className: "py-5 text-center md:col-span-2 md:py-8",
                children: (0, n.jsxs)("button", {
                  type: "button",
                  disabled: m.IsLoading ? "true" : "",
                  className:
                    "rounded-full border border-blue-600 py-1 pl-4 pr-6 font-semibold text-blue-500 transition-all hover:bg-blue-50 hover:text-blue-800",
                  onClick: () => {
                    u({ ...m, IsLoading: !0 }),
                      setTimeout(function () {
                        i.o
                          .get(
                            "/article/list?cateId="
                              .concat(paramEmptyNull(m.CateId), "&excludeIds=")
                              .concat(getExcludeIds(m.ExcludeIds), "&sortType=")
                              .concat(m.SortType, "&count=")
                              .concat(paramEmptyNull(m.Count), "&lastIdx=")
                              .concat(paramEmptyNull(m.LastIdx))
                          )
                          .then((e) => {
                            if (!e.Result || !e.Data) {
                              u({ ...m, IsLoading: !1 });
                              return;
                            }
                            var t = e.Data;
                            u({
                              ...m,
                              Items: [...new Set([...m.Items, ...t.Items])],
                              TotalItems: t.TotalItems,
                              LastIdx: t.LastIndex ? t.LastIndex : t.LastIdx,
                              IsLoading: !1,
                            });
                          })
                          .catch((e) => {});
                      }, 500);
                  },
                  children: [
                    m.IsLoading
                      ? (0, n.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className:
                            "mr-2 inline-block h-4 w-4 animate-spin opacity-80",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, n.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                          }),
                        })
                      : (0, n.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className:
                            "mr-2 inline-block h-4 w-4 animate-bounce opacity-80",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
                            clipRule: "evenodd",
                          }),
                        }),
                    "Xem th\xeam",
                  ],
                }),
              }),
            (m.LastIdx >= m.TotalItems || !d) &&
              (0, n.jsx)("div", {
                className: "h-1 pb-5 md:col-span-2 md:pb-8",
              }),
          ],
        });
      };
    },
    71046: function (e, t, a) {
      var n = a(85893),
        l = a(67294),
        s = a(42292),
        i = a(76996),
        r = a(63486),
        o = a(57179),
        d = a(17677),
        c = a(25683),
        m = a(40724),
        u = a(11163),
        p = a(1785),
        x = a.n(p),
        g = a(9852),
        h = a(61159);
      t.Z = (e) => {
        var t, a, p, f;
        let {
            Id: v,
            isFull: I = !0,
            isBig: b = !0,
            isMobile: j = !1,
            title: w = "Tin tức",
            isOpen: y,
            onDismiss: N,
          } = e,
          [k, L] = (0, l.useState)(null),
          [C, T] = (0, l.useState)(!0),
          [Z, E] = (0, l.useState)(!1),
          S = (0, u.useRouter)(),
          handleShow = () => {
            T(!0),
              m.o
                .get("/article/".concat(v, "?countRelating=0&countNewest=0"))
                .then(function (e) {
                  var t;
                  let a = e.Data;
                  T(!1), L(a);
                  let { ViewInApp: n, Title: l, Id: s, Link: i } = a || {},
                    r = !!(
                      n &&
                      (null == S
                        ? void 0
                        : null === (t = S.query) || void 0 === t
                        ? void 0
                        : t.view) == "app"
                    );
                  r && E(r),
                    x().dataLayer({
                      dataLayer: {
                        event: "popup.article",
                        "content.title": l,
                        "content.id": s,
                        "content.url": i,
                      },
                    });
                });
          };
        return (
          (0, l.useEffect)(() => {
            handleShow();
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (null == k ? void 0 : k.Id) &&
                (0, n.jsx)(g.Z, {
                  trace: { Id: null == k ? void 0 : k.Id, Type: "article" },
                }),
              (null == k ? void 0 : k.Link) &&
                (0, n.jsx)(h.Z, { pathname: null == k ? void 0 : k.Link }),
              (0, n.jsxs)(s.default, {
                isOpen: y,
                onDismiss: N,
                isFull: I,
                isBig: b,
                children: [
                  (0, n.jsx)(r.default, { children: w }),
                  (0, n.jsx)(i.default, {
                    className: "rounded bg-white p-0",
                    children: (0, n.jsx)("div", {
                      className: "p-4 md:p-7",
                      children: (0, n.jsx)(c.Z, {
                        isMobile: j,
                        article: k,
                        loading: C,
                        isViewApp: Z,
                      }),
                    }),
                  }),
                  (0, n.jsx)(o.default, {
                    className: "space-x-3 ".concat(
                      (null == k ? void 0 : k.ViewInApp) &&
                        (null == k
                          ? void 0
                          : null === (a = k.ViewInAppConfig) || void 0 === a
                          ? void 0
                          : null === (t = a.Ctas) || void 0 === t
                          ? void 0
                          : t.length) > 0
                        ? "justify-center"
                        : ""
                    ),
                    children:
                      !C &&
                      ((null == k ? void 0 : k.ViewInApp) &&
                      (null == k
                        ? void 0
                        : null === (f = k.ViewInAppConfig) || void 0 === f
                        ? void 0
                        : null === (p = f.Ctas) || void 0 === p
                        ? void 0
                        : p.length) > 0
                        ? k.ViewInAppConfig.Ctas.map((e, t) =>
                            (0, n.jsx)(
                              "div",
                              {
                                className:
                                  "flex flex-1 items-start justify-center md:flex-none    ",
                                children: (0, n.jsx)(d.Z, {
                                  className: "w-full whitespace-nowrap",
                                  isViewApp: Z,
                                  classNameRoot: " flex  md:grow-0",
                                  cta: e,
                                }),
                              },
                              t
                            )
                          )
                        : (0, n.jsx)("div", {
                            className:
                              "flex flex-1 items-start justify-end md:flex-none  ",
                            children: (0, n.jsx)("a", {
                              onClick: N,
                              className:
                                "btn inline-block cursor-pointer rounded-md bg-pink-700 px-5 py-2 text-center text-sm font-bold uppercase text-white text-opacity-90 transition-all hover:bg-pink-800",
                              children: "Đ\xf3ng",
                            }),
                          })),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    40045: function (e, t, a) {
      var n = a(85893);
      t.Z = (e) => {
        let { category: t } = e;
        return t
          ? (0, n.jsxs)("div", {
              children: [
                t.Name &&
                  (0, n.jsx)("h1", {
                    className: "text-momo mb-3 text-2xl font-bold",
                    children: t.Name,
                  }),
                t.Description &&
                  (0, n.jsx)("div", {
                    className: "mb-5 max-w-3xl text-base text-gray-500 hidden",
                    children: t.Description,
                  }),
              ],
            })
          : (0, n.jsx)(n.Fragment, {});
      };
    },
    18026: function (e, t, a) {
      var n = a(85893),
        l = a(85463),
        s = a.n(l);
      t.Z = function () {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", { className: "jsx-bb79bd038d414671 loader" }),
            (0, n.jsx)(s(), {
              id: "bb79bd038d414671",
              children:
                ".loader.jsx-bb79bd038d414671{border:4px solid var(--gray-300);border-top:4px solid var(--pink);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:40px;height:40px;-webkit-animation:spin3 1.4s linear infinite;-moz-animation:spin3 1.4s linear infinite;-o-animation:spin3 1.4s linear infinite;animation:spin3 1.4s linear infinite}@-webkit-keyframes spin3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin3{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin3{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin3{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}",
            }),
          ],
        });
      };
    },
  },
]);
