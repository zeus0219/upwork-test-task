(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [711],
  {
    95227: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/tin-tuc/[slug]",
        function () {
          return i(94098);
        },
      ]);
    },
    27395: function (t, e, i) {
      "use strict";
      var l = i(85893),
        a = i(67294),
        d = i(70569),
        o = i(6903);
      e.Z = (t) => {
        var e;
        let { data: i, type: n = 1 } = t,
          {
            fetchListDataCase: s,
            listData: r,
            isLoading: c,
            isViewApp: u,
            renderCTA: m,
          } = (0, d.J)({ data: null == i ? void 0 : i.Items });
        return (
          (0, a.useEffect)(() => {
            var t, e, l;
            if (
              (null == i
                ? void 0
                : null === (t = i.Items) || void 0 === t
                ? void 0
                : t.length) <= 0
            )
              return;
            let a =
              null == i
                ? void 0
                : null === (l = i.Items) || void 0 === l
                ? void 0
                : null === (e = l.map((t) => (null == t ? void 0 : t.Id))) ||
                  void 0 === e
                ? void 0
                : e.join(",");
            s({ idsDonationCase: a });
          }, [null == i ? void 0 : i.Items]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", {
                className: "grid ".concat(
                  1 === n
                    ? "grid-cols-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-1",
                  " mb-6 mt-2 gap-6"
                ),
                children:
                  null == i
                    ? void 0
                    : null === (e = i.Items) || void 0 === e
                    ? void 0
                    : e.map((t, e) => {
                        let i =
                          null == r
                            ? void 0
                            : r.find(
                                (e) =>
                                  (null == e ? void 0 : e.Id) ===
                                  (null == t ? void 0 : t.Id)
                              );
                        return (0, l.jsx)(
                          o.Z,
                          {
                            data: t,
                            isModal: !0,
                            dataDetail: i,
                            renderCTA: m,
                            isLoading: c,
                          },
                          e
                        );
                      }),
              }),
              (0, l.jsx)("div", {
                className: "pt-2 text-center",
                children: (0, l.jsxs)("a", {
                  href: "/vi-nhan-ai/tu-thien",
                  className:
                    "mx-auto flex w-fit items-center justify-center rounded-full border border-pink-600 px-5 pb-1 pt-1.5 font-semibold text-pink-700 transition-all hover:bg-pink-50 hover:text-pink-800",
                  children: [
                    "Xem tất cả",
                    (0, l.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true",
                      className: "ml-1 w-4",
                      children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                        clipRule: "evenodd",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    94098: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return _slug_;
          },
        });
      var l = i(85893),
        a = i(67294),
        d = i(19716),
        o = i(12724),
        n = i(41918),
        s = i(13178),
        r = i(16186),
        c = i(52105),
        u = i(40045),
        m = i(92494),
        v = i(27395),
        article_PageArticleCategory = function (t) {
          var e, i, g, p, x, h, f, j, b, _, y;
          let {
              categoryObj: D,
              dataCategory: N,
              dataHomePost: w,
              listPrefer: C,
              listDonation: I,
              isCateDonation: T,
              pageMaster: Z,
              isMobile: k,
            } = t,
            M = w.Data;
          return (
            (0, a.useEffect)(
              () => (
                document.querySelector("body").classList.add("page-article"),
                function () {
                  document
                    .querySelector("body")
                    .classList.remove("page-article");
                }
              ),
              []
            ),
            (0, l.jsxs)(o.Z, {
              className: "page-article",
              title:
                null == M
                  ? void 0
                  : null === (e = M.Meta) || void 0 === e
                  ? void 0
                  : e.Title,
              description:
                null == M
                  ? void 0
                  : null === (i = M.Meta) || void 0 === i
                  ? void 0
                  : i.Description,
              image:
                null == M
                  ? void 0
                  : null === (g = M.Meta) || void 0 === g
                  ? void 0
                  : g.Avatar,
              keywords:
                null == M
                  ? void 0
                  : null === (p = M.Meta) || void 0 === p
                  ? void 0
                  : p.Keywords,
              header:
                null === (x = Z.Data) || void 0 === x ? void 0 : x.MenuHeaders,
              isMobile: k,
              children: [
                (0, l.jsx)(r.Z, {
                  data: N.Data,
                  cat: D,
                  root: {
                    link: "/tin-tuc",
                    title: "Tin tức",
                    icon: "https://homepage.momocdn.net/next-js/_next/static/public/article/Tinmoi.svg",
                  },
                }),
                (0, l.jsx)(n.Z, {
                  children: (0, l.jsxs)("div", {
                    className:
                      "mt-5 grid grid-cols-1 pb-10 lg:mt-6 lg:grid-cols-3 lg:gap-6",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "col-span-2",
                        children: [
                          (0, l.jsx)(u.Z, { category: M.Category }),
                          (null === (f = M.ListFeatured) || void 0 === f
                            ? void 0
                            : null === (h = f.Items) || void 0 === h
                            ? void 0
                            : h.length) > 0 &&
                            (0, l.jsx)(s.Z, {
                              data: M.ListFeatured.Items,
                              isHome: !1,
                            }),
                          (0, l.jsx)("div", {
                            className:
                              "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 md:gap-x-8 md:gap-y-6",
                            children: (0, l.jsx)(c.Z, {
                              excludeIds: M.ListFeatured.Items.map((t) => t.Id),
                              data: M.Lists,
                              cat: M.Category ? M.Category : null,
                              isHome: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "border-t border-gray-300 pt-3 md:pt-0 lg:border-l lg:border-t-0 lg:pl-6",
                        children: (0, l.jsx)(d.Z, {
                          offsetTop: 60,
                          offsetBottom: 20,
                          children: (0, l.jsxs)("div", {
                            className:
                              "mt-1 rounded-lg pb-4 md:mt-3 md:pt-5 lg:mt-0 lg:pt-1",
                            children: [
                              !T && (0, l.jsx)(m.Z, { data: C.Data, type: 2 }),
                              T &&
                                ((null == I
                                  ? void 0
                                  : null === (j = I.TraiTim) || void 0 === j
                                  ? void 0
                                  : j.Data) ||
                                  (null == I
                                    ? void 0
                                    : null === (b = I.HeoDat) || void 0 === b
                                    ? void 0
                                    : b.Data)) &&
                                (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)("div", {
                                      className:
                                        "mb-6 text-center lg:mb-0 lg:text-left",
                                      children: (0, l.jsx)("h2", {
                                        className:
                                          "text-xl font-semibold text-momo",
                                        children:
                                          "Chương tr\xecnh quy\xean g\xf3p mới nhất",
                                      }),
                                    }),
                                    (null == I
                                      ? void 0
                                      : null === (_ = I.TraiTim) || void 0 === _
                                      ? void 0
                                      : _.Data) &&
                                      (0, l.jsx)(v.Z, {
                                        limit: 2,
                                        data: I.TraiTim.Data,
                                        type: 2,
                                      }),
                                    (null == I
                                      ? void 0
                                      : null === (y = I.HeoDat) || void 0 === y
                                      ? void 0
                                      : y.Data) &&
                                      (0, l.jsx)(v.Z, {
                                        limit: 2,
                                        data: I.HeoDat.Data,
                                        type: 2,
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        g = !0,
        _slug_ = function (t) {
          let {
            categoryObj: e,
            dataCatePost: i,
            dataHomePost: a,
            listPrefer: d,
            listDonation: o,
            isCateDonation: n,
            pageMaster: s,
            isMobile: r,
          } = t;
          return (0, l.jsx)(article_PageArticleCategory, {
            categoryObj: e,
            dataCategory: i,
            dataHomePost: a,
            listPrefer: d,
            listDonation: o,
            isCateDonation: n,
            pageMaster: s,
            isMobile: r,
          });
        };
    },
  },
  function (t) {
    t.O(
      0,
      [
        2341, 1609, 719, 3778, 2298, 1664, 465, 2822, 7043, 2724, 9795, 1545,
        3995, 1324, 9774, 2888, 179,
      ],
      function () {
        return t((t.s = 95227));
      }
    ),
      (_N_E = t.O());
  },
]);
