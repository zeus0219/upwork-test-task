"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3995],
  {
    12541: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return components_CssCarousel;
        },
      });
      var l = a(85893),
        r = a(85463),
        n = a.n(r),
        i = a(67294),
        c = a(94323),
        s = a(51183);
      let ArrowLeft = (e) => {
          let { arrowStyle: t } = e;
          return 2 == t
            ? (0, l.jsx)("div", {
                className:
                  "flex h-8 w-8  items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 active:scale-95 landing:bg-white",
                children: (0, l.jsx)(c.Z, { className: "h-5 w-5" }),
              })
            : (0, l.jsx)("div", {
                className:
                  "flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 landing:bg-white",
                children: (0, l.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4 ",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                    clipRule: "evenodd",
                  }),
                }),
              });
        },
        ArrowRight = (e) => {
          let { arrowStyle: t } = e;
          return 2 == t
            ? (0, l.jsx)("div", {
                className:
                  "flex h-8 w-8  items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 active:scale-95 landing:bg-white",
                children: (0, l.jsx)(s.Z, { className: "h-5 w-5" }),
              })
            : (0, l.jsx)("div", {
                className:
                  "flex h-6 w-6  items-center justify-center rounded-full border border-gray-300 text-gray-600 landing:bg-white",
                children: (0, l.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-4 w-4 ",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                    clipRule: "evenodd",
                  }),
                }),
              });
        };
      var components_CssCarousel = (e) => {
        let {
            className: t,
            children: a,
            bgColor: r = null,
            arrowStyle: c = 1,
          } = e,
          s = (0, i.useRef)(),
          {
            hasItemsOnLeft: o,
            hasItemsOnRight: d,
            scrollRight: h,
            scrollLeft: g,
          } = (function (e) {
            let [t, a] = (0, i.useState)(null),
              [l, r] = (0, i.useState)(null);
            (0, i.useEffect)(() => {
              let t = e.current.children[0],
                update = () => {
                  let e = t.getBoundingClientRect(),
                    l = Array.from(t.children).filter((t) => {
                      let a = t.getBoundingClientRect();
                      return e.left <= a.left && e.right >= a.right - 20;
                    });
                  l.length > 0 &&
                    (a(
                      (function (e) {
                        let t = e[0].previousElementSibling;
                        return HTMLElement, t;
                      })(l)
                    ),
                    r(
                      (function (e) {
                        let t = e[e.length - 1].nextElementSibling;
                        return HTMLElement, t;
                      })(l)
                    ));
                };
              return (
                update(),
                t.addEventListener("scroll", update, { passive: !0 }),
                () => {
                  t.removeEventListener("scroll", update);
                }
              );
            }, [e]);
            let n = (0, i.useCallback)(
                (t) => {
                  let a;
                  let l = e.current.children[0];
                  l &&
                    t &&
                    ((a =
                      t.offsetLeft +
                      t.getBoundingClientRect().width / 2 -
                      l.getBoundingClientRect().width / 2),
                    l.scroll({ left: a, behavior: "smooth" }));
                },
                [e]
              ),
              c = (0, i.useCallback)(() => {
                n(l);
              }, [n, l]),
              s = (0, i.useCallback)(() => n(t), [n, t]);
            return {
              hasItemsOnLeft: null !== t,
              hasItemsOnRight: null !== l,
              scrollRight: c,
              scrollLeft: s,
            };
          })(s),
          u = r || "var(--grad-rgb-color)";
        return (0, l.jsxs)("div", {
          ref: s,
          className:
            n().dynamic([["fac0ab4820177dc8", [u, u, u, u]]]) +
            " " +
            "soju-carousel relative ".concat(t || ""),
          children: [
            a,
            d &&
              (0, l.jsx)("div", {
                onClick: h,
                className:
                  n().dynamic([["fac0ab4820177dc8", [u, u, u, u]]]) +
                  " grad absolute right-0  top-0  z-10 flex h-full cursor-pointer  items-center pl-10 pr-1",
                children: (0, l.jsx)(ArrowRight, { arrowStyle: c }),
              }),
            o &&
              (0, l.jsx)("div", {
                onClick: g,
                className:
                  n().dynamic([["fac0ab4820177dc8", [u, u, u, u]]]) +
                  " grad-left absolute left-0  top-0  z-10 flex h-full  cursor-pointer  items-center pr-5  pl-1 md:pr-10",
                children: (0, l.jsx)("div", {
                  className:
                    n().dynamic([["fac0ab4820177dc8", [u, u, u, u]]]) +
                    "  hidden md:block",
                  children: (0, l.jsx)(ArrowLeft, { arrowStyle: c }),
                }),
              }),
            (0, l.jsx)(n(), {
              id: "fac0ab4820177dc8",
              dynamic: [u, u, u, u],
              children:
                ".grad.__jsx-style-dynamic-selector{background:-webkit-linear-gradient(left,rgba(255,255,255,0),rgb("
                  .concat(u, "),rgb(")
                  .concat(
                    u,
                    "));background:-moz-linear-gradient(left,rgba(255,255,255,0),rgb("
                  )
                  .concat(u, "),rgb(")
                  .concat(
                    u,
                    "));background:-o-linear-gradient(left,rgba(255,255,255,0),rgb("
                  )
                  .concat(u, "),rgb(")
                  .concat(
                    u,
                    "));background:linear-gradient(to right,rgba(255,255,255,0),rgb("
                  )
                  .concat(u, "),rgb(")
                  .concat(
                    u,
                    "))}.grad-left.__jsx-style-dynamic-selector{background:-webkit-linear-gradient(right,rgba(255,255,255,0),rgb("
                  )
                  .concat(u, "),rgb(")
                  .concat(
                    u,
                    "));background:-moz-linear-gradient(right,rgba(255,255,255,0),rgb("
                  )
                  .concat(u, "),rgb(")
                  .concat(
                    u,
                    "));background:-o-linear-gradient(right,rgba(255,255,255,0),rgb("
                  )
                  .concat(u, "),rgb(")
                  .concat(
                    u,
                    "));background:linear-gradient(to left,rgba(255,255,255,0),rgb("
                  )
                  .concat(u, "),rgb(")
                  .concat(u, "))}"),
            }),
          ],
        });
      };
    },
    20212: function (e, t, a) {
      var l = a(85893),
        r = a(11163),
        n = a(60570);
      t.Z = (e) => {
        var t;
        let {
            className: a,
            type: i,
            catId: c,
            catName: s,
            catLink: o,
            date: d,
            totalViews: h,
            totalViewsFormat: g,
          } = e,
          u = (0, r.useRouter)();
        return (0, l.jsxs)("div", {
          className: "".concat(
            a || "",
            " mt-1 flex flex-wrap items-center text-xs font-semibold text-gray-500"
          ),
          children: [
            o &&
              !(null == o
                ? void 0
                : o.endsWith(
                    null == u
                      ? void 0
                      : null === (t = u.query) || void 0 === t
                      ? void 0
                      : t.slug
                  )) &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(n.Z, { catId: c, catName: s, catLink: o }),
                  " ",
                  d &&
                    (0, l.jsx)("div", {
                      className: "mx-1 font-normal",
                      children: "\xb7",
                    }),
                ],
              }),
            d &&
              (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)("div", { children: d }),
              }),
            h > 500 &&
              ("popular" == i || "big-feature" == i) &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className:
                      "relative ml-2 mr-1 inline-block h-4 w-4 md:hidden",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    style: { top: "0px" },
                    children: [
                      (0, l.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                      }),
                      (0, l.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "mx-1 hidden font-normal md:inline-block",
                    children: "\xb7",
                  }),
                  g,
                  (0, l.jsx)("span", {
                    className: "hidden md:inline-block",
                    children: "\xa0lượt xem",
                  }),
                ],
              }),
          ],
        });
      };
    },
    35024: function (e, t, a) {
      var l = a(85893),
        r = a(89755),
        n = a.n(r),
        i = a(86010);
      t.Z = (e) => {
        let {
          className: t,
          avatar: a,
          title: r,
          slug: c,
          link: s,
          onClick: o,
          objectFit: d = "cover",
          isPriority: h = !1,
        } = e;
        return (0, l.jsxs)("div", {
          onClick: o,
          className: (0, i.Z)(
            "article-thumb relative overflow-hidden rounded-md bg-gray-100",
            t,
            o && "cursor-pointer"
          ),
          children: [
            !o &&
              (s
                ? (0, l.jsx)("a", { href: s, className: "stretched-link" })
                : c &&
                  (0, l.jsx)("a", { href: c, className: "stretched-link" })),
            (0, l.jsx)("div", {
              className: "aspect-77-37 aspect-h-9 aspect-w-16",
              children: (0, l.jsx)(n(), {
                src: a,
                alt: r || "",
                layout: "fill",
                objectFit: d,
                loading: h ? "eager" : "lazy",
                priority: h,
              }),
            }),
          ],
        });
      };
    },
    46943: function (e, t, a) {
      var l = a(85893),
        r = a(67294),
        n = a(86010);
      t.Z = (e) => {
        let {
            className: t,
            title: a,
            slug: i,
            onClick: c,
            type: s = "normal",
            seoTitleTagName: o = "h3",
            ...d
          } = e,
          h = "";
        switch (s) {
          case "big-feature":
            h += "text-lg md:text-1.5xl";
            break;
          case "feature":
            h += "text-lg";
            break;
          case "full":
            h += "text-xl";
            break;
          default:
            h += "text-base";
        }
        let g = r.createElement(
          o,
          null,
          !c && i
            ? (0, l.jsx)("a", {
                href: i,
                className:
                  "article-title text-truncate-row font-bold leading-tight text-gray-800 hover:underline ".concat(
                    h
                  ),
                children: a,
              })
            : (0, l.jsx)("div", {
                className: (0, n.Z)(
                  "article-title text-truncate-row font-bold leading-tight text-gray-800 hover:underline ",
                  h,
                  c && "cursor-pointer"
                ),
                children: a,
              })
        );
        return (0, l.jsx)("header", {
          className: "".concat(t || ""),
          onClick: c,
          children: g,
        });
      };
    },
    16186: function (e, t, a) {
      var l = a(85893),
        r = a(89755),
        n = a.n(r),
        i = a(67294),
        c = a(12541),
        s = a(41918);
      t.Z = (e) => {
        let { className: t, data: a, cat: r, root: o = {} } = e,
          d = (0, i.useRef)(),
          [h, g] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = d.current,
              update = () => {
                let t = e.getBoundingClientRect().y;
                t <= 1 ? g(!0) : g(!1);
              };
            return (
              update(),
              document.addEventListener("scroll", update, { passive: !0 }),
              () => {
                g(!1), document.removeEventListener("scroll", update);
              }
            );
          }),
          (0, l.jsx)("div", {
            className: "".concat(t || "", " sticky top-0 z-30 bg-white shadow"),
            ref: d,
            children: (0, l.jsx)(s.Z, {
              className: "px-0",
              children: (0, l.jsx)(c.Z, {
                children: (0, l.jsxs)(
                  "div",
                  {
                    id: "article_menu",
                    className:
                      "flex w-full overflow-scroll py-3 pl-5 text-sm md:pl-0",
                    children: [],
                  },
                  "".concat((null == r ? void 0 : r.Id) || 0)
                ),
              }),
            }),
          })
        );
      };
    },
    92494: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return article_PreferList;
        },
      });
      var l = a(85893);
      let r = [
          {
            id: null,
            icon: "https://homepage.momocdn.net/next-js/_next/static/public/article/Tinmoi.svg",
            width: 12,
            height: 13,
          },
          {
            id: 17,
            icon: "https://homepage.momocdn.net/next-js/_next/static/public/article/Sukien.svg",
            width: 14,
            height: 20,
          },
          {
            id: 18,
            icon: "https://homepage.momocdn.net/next-js/_next/static/public/article/Khuyenmai.svg",
            width: 13,
            height: 13,
          },
          {
            id: 19,
            icon: "https://homepage.momocdn.net/next-js/_next/static/public/article/Thongcaobaochi.svg",
            width: 10,
            height: 13,
          },
          {
            id: 20,
            icon: "https://homepage.momocdn.net/next-js/_next/static/public/article/Video.svg",
            width: 16,
            height: 20,
          },
        ],
        getArticleCategoryIcon = (e) => r.find((t) => t.id === e) || r[0];
      var n = a(76112),
        i = a(35024),
        article_PreferList = (e) => {
          let { className: t, data: a, type: r = 0 } = e;
          return (0, l.jsxs)("div", {
            className: "".concat(t && t, " pb-4"),
            children: [
              (0, l.jsx)("div", {
                className: "flex ".concat(
                  1 === r ? "justify-start pb-4 md:pb-6" : "md:pd-2 pb-4"
                ),
                children: (0, l.jsxs)("h2", {
                  className:
                    "flex items-center text-xl font-semibold text-momo",
                  children: [
                    (0, l.jsx)("img", {
                      className: "img-black mr-2",
                      alt: "Ưu đ\xe3i nổi bật",
                      src: getArticleCategoryIcon(null).icon,
                      loading: "lazy",
                      width: getArticleCategoryIcon(null).width,
                      height: getArticleCategoryIcon(null).height,
                    }),
                    "Ưu đ\xe3i nổi bật",
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "grid grid-cols-1 gap-6 md:grid-cols-2 ".concat(
                  1 === r ? "lg:grid-cols-3" : "lg:grid-cols-1"
                ),
                children:
                  a &&
                  a.map((e, t) =>
                    (0, l.jsx)(
                      "article",
                      {
                        className:
                          "article-type-prefer overflow-hidden rounded-xl shadow-lg",
                        children: (0, l.jsxs)("div", {
                          className: "flex h-full flex-col flex-nowrap",
                          children: [
                            (0, l.jsx)("div", {
                              className: "article-top",
                              children: (0, l.jsx)(i.Z, {
                                id: e.Id,
                                className: "rounded-b-none",
                                avatar: e.Avatar,
                                title: e.Name,
                                link: (0, n.Cr)(e.Link),
                                objectFit: "contain",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "article-header grow p-4 pb-0",
                              children: [
                                (0, l.jsx)("h5", {
                                  className: "article-title mb-2",
                                  children: (0, l.jsx)("a", {
                                    href: (0, n.Cr)(e.Link),
                                    children: e.Name,
                                  }),
                                }),
                                (0, l.jsx)("p", {
                                  className: "article-short",
                                  children: e.Description,
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: "article-footer p-4",
                              children: (0, l.jsx)("div", {
                                className: "article-xemchitiet text-left",
                                children: (0, l.jsxs)("a", {
                                  href: (0, n.Cr)(e.Link),
                                  className:
                                    "flex font-semibold text-pink-700 transition-colors hover:text-pink-500",
                                  children: [
                                    "Xem chi tiết",
                                    (0, l.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor",
                                      "aria-hidden": "true",
                                      className: "-mr-1 block w-4",
                                      children: (0, l.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                        clipRule: "evenodd",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
              }),
            ],
          });
        };
    },
  },
]);
