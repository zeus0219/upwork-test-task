"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6744],
  {
    61159: function (e, t, l) {
      var i = l(67294),
        a = l(40724),
        n = l(1785),
        d = l.n(n);
      t.Z = (e) => {
        let { pathname: t, trackingData: l } = e,
          [n, o] = (0, i.useState)(null);
        return (
          (0, i.useEffect)(() => {
            t &&
              a.o
                .get("/tracking/get-info?pathname=".concat(t))
                .then(function (e) {
                  var t;
                  let l = null !== (t = e.Data) && void 0 !== t ? t : null;
                  o(l || null);
                });
          }, [t]),
          (0, i.useEffect)(() => {
            l && o(l || null);
          }, [l]),
          (0, i.useEffect)(() => {
            n &&
              d().dataLayer({
                dataLayer: {
                  event: null == n ? void 0 : n.Event,
                  project_name: null == n ? void 0 : n.ProjectName,
                  project_id: null == n ? void 0 : n.ProjectId,
                  main_case: null == n ? void 0 : n.MainCase,
                  page_type: null == n ? void 0 : n.PageType,
                  page_id: null == n ? void 0 : n.PageId,
                },
              });
          }, [n]),
          null
        );
      };
    },
    56744: function (e, t, l) {
      var i = l(85893),
        a = l(67294),
        n = l(5152),
        d = l.n(n),
        o = l(89755),
        s = l.n(o),
        r = l(19716),
        c = l(41918),
        x = l(12724),
        m = l(15133),
        u = l(75166),
        v = l(75296),
        p = l(3157),
        h = l(30525),
        g = l(17574),
        f = l(65979),
        j = l(89241),
        b = l(17677),
        w = l(76231),
        k = l(73850),
        D = l(73739),
        N = l(98524),
        y = l(70569),
        C = l(61159),
        T = l(16186),
        I = l(92494),
        Z = l(15044),
        E = l(60570),
        A = l(27395),
        M = l(6903),
        L = l(9852),
        V = l(76729);
      let P = d()(
          () => Promise.all([l.e(2082), l.e(3099)]).then(l.bind(l, 73099)),
          { loadableGenerated: { webpack: () => [73099] } }
        ),
        G = { android: "Google", ios: "Apple" },
        R = (0, k.Dr)();
      t.Z = function (e) {
        var t,
          l,
          n,
          d,
          o,
          k,
          _,
          Q,
          F,
          S,
          z,
          q,
          H,
          B,
          W,
          J,
          O,
          U,
          K,
          X,
          Y,
          $,
          ee,
          et;
        let {
            dataPostDetail: el,
            dataCatePost: ei,
            listPrefer: ea,
            listDonation: en,
            isCateDonation: ed,
            trackingProjectData: eo,
            pageMaster: es,
            isMobile: er,
          } = e,
          ec = el.Data,
          ex = ei.Data,
          em = (0, w.Z)(null == ec ? void 0 : ec.ViewInApp),
          { hasMounted: eu } = (0, N.o)(),
          {
            fetchListDataCase: ev,
            listData: ep,
            isLoading: eh,
            renderClockInfo: eg,
            renderProgressBar: ef,
            isEnabledDonation: ej,
            getViewAppLink: eb,
            renderCTA: ew,
          } = (0, y.J)({
            data:
              null == en
                ? void 0
                : null === (l = en.detail) || void 0 === l
                ? void 0
                : null === (t = l.Data) || void 0 === t
                ? void 0
                : t[0],
          });
        return (
          (0, a.useEffect)(() => {
            var e, t, l, i, a;
            if (
              (null == en
                ? void 0
                : null === (t = en.detail) || void 0 === t
                ? void 0
                : null === (e = t.Data) || void 0 === e
                ? void 0
                : e.length) <= 0
            )
              return;
            let n =
              null == en
                ? void 0
                : null === (a = en.detail) || void 0 === a
                ? void 0
                : null === (i = a.Data) || void 0 === i
                ? void 0
                : null === (l = i[0]) || void 0 === l
                ? void 0
                : l.Id;
            ev({ idsDonationCase: n });
          }, [
            null == en
              ? void 0
              : null === (n = en.detail) || void 0 === n
              ? void 0
              : n.Data,
          ]),
          (0, a.useEffect)(
            () => (
              document.querySelector("body").classList.add("page-article"),
              function () {
                document.querySelector("body").classList.remove("page-article");
              }
            ),
            []
          ),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(x.Z, {
              className: "article-detail",
              title: null === (d = ec.Meta) || void 0 === d ? void 0 : d.Title,
              description:
                null === (o = ec.Meta) || void 0 === o ? void 0 : o.Description,
              image: null === (k = ec.Meta) || void 0 === k ? void 0 : k.Avatar,
              keywords:
                null === (_ = ec.Meta) || void 0 === _ ? void 0 : _.Keywords,
              robots:
                null === (Q = ec.Meta) || void 0 === Q ? void 0 : Q.Robots,
              header:
                null === (F = es.Data) || void 0 === F ? void 0 : F.MenuHeaders,
              isMobile: er,
              metaData: ec,
              link: "".concat("https://www.momo.vn").concat(ec.Link),
              children: [
                (0, i.jsx)(L.Z, { trace: { Id: ec.Id, Type: "article" } }),
                (0, i.jsx)(C.Z, { trackingData: eo }),
                (0, i.jsx)(u.default, { Meta: ec.Meta }),
                (0, i.jsx)(D.Z, { Meta: ec.Meta }),
                (0, i.jsx)(v.default, {
                  QaData: ec.QaData,
                  QaGroupData: ec.QaGroupData,
                }),
                !em &&
                  (0, i.jsx)(T.Z, {
                    root: {
                      link: "/tin-tuc",
                      title: "Tin tức",
                      icon: "https://homepage.momocdn.net/next-js/_next/static/public/article/Tinmoi.svg",
                    },
                    data: ex,
                    cat: ec.Category,
                  }),
                (0, i.jsxs)(c.Z, {
                  children: [
                    (0, i.jsx)("div", {
                      className: "pb-6",
                      children: (0, i.jsxs)("div", {
                        className:
                          "mt-5 lg:mt-6 lg:grid lg:grid-flow-col lg:grid-cols-12 lg:gap-6",
                        children: [
                          (0, i.jsxs)("article", {
                            className: "mx-auto w-full lg:col-span-8",
                            children: [
                              ec.ViewInApp &&
                                (0, i.jsx)("div", {
                                  className:
                                    "pointer-events-none -mx-5 -mt-5 mb-5 select-none sm:mx-0 sm:mt-0",
                                  children: (0, i.jsx)(s(), {
                                    src: ec.Avatar,
                                    alt: ec.Title,
                                    layout: "responsive",
                                    width: 770,
                                    height: 370,
                                    loading: "eager",
                                  }),
                                }),
                              (0, i.jsx)("h1", {
                                className:
                                  "mb-4 font-bold tracking-tight text-momo md:leading-tight",
                                children: ec.Title,
                              }),
                              (0, i.jsxs)("div", {
                                className: "mb-5 flex items-center",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "flex flex-1 flex-col flex-wrap text-sm text-gray-500 md:flex-row md:items-center",
                                    children: [
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(E.Z, {
                                            isViewApp: em,
                                            catId: ec.Category.Id,
                                            catName: ec.Category.Name,
                                            catLink: ec.Category.Link,
                                          }),
                                          (0, i.jsx)("span", {
                                            className: "mx-1 hidden md:inline",
                                            children: "\xb7",
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          (0, i.jsx)("span", {
                                            className: "relative",
                                            children: ec.PublishDate,
                                          }),
                                          (null == ec
                                            ? void 0
                                            : ec.TimeReadAvg) &&
                                            (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                (0, i.jsx)("span", {
                                                  className: "mx-1",
                                                  children: "\xb7",
                                                }),
                                                (0, i.jsxs)("span", {
                                                  children: [
                                                    null == ec
                                                      ? void 0
                                                      : ec.TimeReadAvg,
                                                    " ph\xfat đọc",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ec.TotalViews > 500 &&
                                            (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                (0, i.jsx)("span", {
                                                  className: "mx-1",
                                                  children: "\xb7",
                                                }),
                                                (0, i.jsxs)("svg", {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  className:
                                                    "relative mr-1 block h-4 w-4 md:hidden",
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor",
                                                  style: { top: "-1px" },
                                                  children: [
                                                    (0, i.jsx)("path", {
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      strokeWidth: 2,
                                                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                                    }),
                                                    (0, i.jsx)("path", {
                                                      strokeLinecap: "round",
                                                      strokeLinejoin: "round",
                                                      strokeWidth: 2,
                                                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                                                    }),
                                                  ],
                                                }),
                                                ec.TotalViewsFormat,
                                                (0, i.jsx)("span", {
                                                  className: "hidden md:block",
                                                  children: "\xa0lượt xem",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className: " shrink-0",
                                    children: (0, i.jsx)(j.Z, {
                                      link: ""
                                        .concat("https://www.momo.vn")
                                        .concat(ec.Link),
                                      isViewApp: em,
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsx)("p", {
                                className: "article-desc",
                                children: ec.Short,
                              }),
                              !ec.ViewInApp &&
                                (0, i.jsx)("div", {
                                  className:
                                    "pointer-events-none mb-5 mt-4 select-none",
                                  children: (0, i.jsx)(s(), {
                                    src: ec.Avatar,
                                    alt: ec.Title,
                                    layout: "responsive",
                                    width: 770,
                                    height: 370,
                                  }),
                                }),
                              (0, i.jsx)("div", {
                                children:
                                  ec.Code &&
                                  ec.Code.split(",").map((e, t) =>
                                    (0, i.jsx)(m.Z, { value: e }, t)
                                  ),
                              }),
                              (null == ec
                                ? void 0
                                : null === (S = ec.PromotionConfig) ||
                                  void 0 === S
                                ? void 0
                                : S.PromotionCodes) &&
                                (0, i.jsx)(V.Z, {
                                  promotionCodes:
                                    null == ec
                                      ? void 0
                                      : null === (z = ec.PromotionConfig) ||
                                        void 0 === z
                                      ? void 0
                                      : z.PromotionCodes,
                                }),
                              ed &&
                                (null === (q = en.detail.Data) || void 0 === q
                                  ? void 0
                                  : q.length) > 0 &&
                                (0, i.jsx)("div", {
                                  className:
                                    "relative mb-3 mt-5 block lg:hidden",
                                  children: (0, i.jsx)(M.Z, {
                                    data: en.detail.Data[0],
                                    isInline: !0,
                                    dataDetail: null == ep ? void 0 : ep[0],
                                    isViewApp: em,
                                    renderCTA: ew,
                                    isLoading: eh,
                                  }),
                                }),
                              ec.RelatingConfig &&
                                (0, i.jsx)("div", {
                                  className:
                                    "soju__prose  mx-auto mt-4 leading-normal  md:text-lg md:leading-relaxed lg:mx-0 lg:w-full lg:max-w-full",
                                  children: (0, i.jsx)(h.Z, {
                                    Data: ec.RelatingConfig.ProjectTop,
                                    isViewApp: em,
                                  }),
                                }),
                              (0, i.jsxs)("div", {
                                className: "article-content mt-4",
                                children: [
                                  (0, i.jsx)(g.Z, {
                                    isMobile: er,
                                    data: ec.Content,
                                    ads: ec.AdsData,
                                    cta: ec.CtaData,
                                    qa: ec.QaData,
                                    qaGroup: ec.QaGroupData,
                                    guide: ec.GuideData,
                                    guideGroup: ec.GuideGroupData,
                                    isViewApp: em,
                                  }),
                                  (0, i.jsxs)("span", {
                                    className:
                                      "mt-5 block text-sm text-gray-500",
                                    children: [
                                      eu && "other" !== R
                                        ? "* ".concat(G[R])
                                        : "* Apple/ Google",
                                      " ",
                                      "kh\xf4ng t\xe0i trợ cho bất cứ hoạt động kinh doanh & thương mại n\xe0o của MoMo.",
                                    ],
                                  }),
                                ],
                              }),
                              (null == ec
                                ? void 0
                                : null === (H = ec.GuideGroupDataEx) ||
                                  void 0 === H
                                ? void 0
                                : H.length) > 0 &&
                                (0, i.jsx)("div", {
                                  className: "mt-5",
                                  children: ec.GuideGroupDataEx.map((e, t) =>
                                    (0, i.jsx)(
                                      P,
                                      {
                                        data: e,
                                        isShowTitle: !1,
                                        isMobile: er,
                                      },
                                      t
                                    )
                                  ),
                                }),
                              (null == ec
                                ? void 0
                                : null === (B = ec.Ctas) || void 0 === B
                                ? void 0
                                : B.length) > 0 &&
                                (0, i.jsx)("div", {
                                  className:
                                    " mt-10 hidden justify-center md:flex",
                                  children: (0, i.jsx)("div", {
                                    className: "flex",
                                    children: ec.Ctas.map((e, t) =>
                                      (0, i.jsx)(
                                        b.Z,
                                        { className: "mx-auto", cta: e },
                                        t
                                      )
                                    ),
                                  }),
                                }),
                              ec.RelatingConfig &&
                                (0, i.jsx)("div", {
                                  className:
                                    "soju__prose mx-auto mt-4 leading-normal  md:text-lg md:leading-relaxed lg:mx-0 lg:w-full lg:max-w-full",
                                  children: (0, i.jsx)(h.Z, {
                                    Data: ec.RelatingConfig.ProjectBottom,
                                    isViewApp: em,
                                  }),
                                }),
                              ec &&
                                ec.Meta &&
                                (0, i.jsx)(p.Z, {
                                  Id: ec.Id,
                                  Type: 4,
                                  Count:
                                    null === (W = ec.Meta) || void 0 === W
                                      ? void 0
                                      : W.RatingCount,
                                  Value:
                                    null === (J = ec.Meta) || void 0 === J
                                      ? void 0
                                      : J.RatingValue,
                                }),
                            ],
                          }),
                          !em &&
                            (0, i.jsx)("div", {
                              className: "relative z-10 w-full ".concat(
                                ed ? "lg:col-span-4" : "lg:w-80"
                              ),
                              children: (0, i.jsx)(r.Z, {
                                offsetTop: 60,
                                offsetBottom: 20,
                                children: (0, i.jsx)("div", {
                                  className:
                                    "mt-3 rounded-lg bg-white pt-5 lg:mt-0 lg:px-0 lg:py-0",
                                  children: (0, i.jsxs)("div", {
                                    className:
                                      "border-l-0 border-gray-300 lg:border-l lg:pl-6",
                                    children: [
                                      ed &&
                                        (null == en
                                          ? void 0
                                          : null === (U = en.detail) ||
                                            void 0 === U
                                          ? void 0
                                          : null === (O = U.Data) ||
                                            void 0 === O
                                          ? void 0
                                          : O.length) > 0 &&
                                        (0, i.jsxs)("div", {
                                          className: "mb-6 hidden lg:block",
                                          children: [
                                            (0, i.jsx)("h2", {
                                              className:
                                                "mb-4 flex-auto text-xl font-semibold text-momo",
                                              children:
                                                "Th\xf4ng tin chương tr\xecnh quy\xean g\xf3p",
                                            }),
                                            (0, i.jsx)(M.Z, {
                                              data:
                                                null == en
                                                  ? void 0
                                                  : null === (X = en.detail) ||
                                                    void 0 === X
                                                  ? void 0
                                                  : null === (K = X.Data) ||
                                                    void 0 === K
                                                  ? void 0
                                                  : K[0],
                                              dataDetail:
                                                null == ep ? void 0 : ep[0],
                                              isViewApp: em,
                                              renderCTA: ew,
                                              isLoading: eh,
                                            }),
                                          ],
                                        }),
                                      ec.Relatings &&
                                        (0, i.jsx)(Z.Z, {
                                          data: ec.Relatings.Items,
                                          linkViewMore: ec.Category.Link,
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                    !em &&
                      !ed &&
                      (0, i.jsx)("div", {
                        className: "py-6 md:py-8",
                        children: (0, i.jsx)(I.Z, { data: ea.Data, type: 1 }),
                      }),
                    !em &&
                      ed &&
                      (0, i.jsxs)("div", {
                        className: "py-8",
                        children: [
                          (0, i.jsx)("div", {
                            className: "mb-5 text-center md:mb-8 md:text-left",
                            children: (0, i.jsx)("h2", {
                              className: "text-xl font-semibold text-momo",
                              children:
                                "Chương tr\xecnh quy\xean g\xf3p mới nhất",
                            }),
                          }),
                          ((null == en
                            ? void 0
                            : null === (Y = en.TraiTim) || void 0 === Y
                            ? void 0
                            : Y.Data) ||
                            (null == en
                              ? void 0
                              : null === ($ = en.HeoDat) || void 0 === $
                              ? void 0
                              : $.Data)) &&
                            (0, i.jsx)(A.Z, {
                              limit: 2,
                              data: {
                                Items: [
                                  ...en.TraiTim.Data.Items,
                                  ...en.HeoDat.Data.Items,
                                ],
                              },
                              type: 1,
                            }),
                        ],
                      }),
                  ],
                }),
                ec.ViewInApp &&
                  (null == ec
                    ? void 0
                    : null === (et = ec.ViewInAppConfig) || void 0 === et
                    ? void 0
                    : null === (ee = et.Ctas) || void 0 === ee
                    ? void 0
                    : ee.length) > 0 &&
                  (0, i.jsx)(f.default, {
                    data: ec.ViewInAppConfig.Ctas.map((e) => ({
                      TypeName: "CtaFooter",
                      Template: 1,
                      Data: {
                        Items: [
                          {
                            Link: e.Link,
                            Text: e.Text,
                            NewTab: e.NewTab,
                            RedirectUC: e.RedirectUC,
                            QrCodeId: e.QrCodeId,
                            QrCodeData: e.QrCodeData,
                            QrCodePromotionData: e.QrCodePromotionData,
                            Content: "",
                            Tracking: ec.ViewInAppConfig.Tracking && e.Tracking,
                            TrackingEvtName: e.TrackingEvtName,
                            TrackingEvtAction: e.TrackingEvtAction,
                          },
                        ],
                      },
                      Content: "",
                    })),
                    isViewApp: em,
                    isMobile: er,
                  }),
              ],
            }),
          })
        );
      };
    },
    30525: function (e, t, l) {
      var i = l(85893);
      t.Z = function (e) {
        let { Data: t, isViewApp: l } = e;
        return (
          t &&
          t.Enabled &&
          t.Items.length > 0 &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("p", {
                children: (0, i.jsx)("strong", { children: t.Title }),
              }),
              (0, i.jsx)("ul", {
                children: t.Items.map((e, t) => {
                  let a = e.Link,
                    n = a;
                  return (
                    n &&
                      -1 == n.indexOf("http") &&
                      (n = "https://www.momo.vn".concat(n)),
                    (0, i.jsx)(
                      "li",
                      {
                        children:
                          e.ViewInApp && l
                            ? (0, i.jsx)("a", { href: a, children: e.Title })
                            : (0, i.jsx)("a", {
                                target: "_blank",
                                href: l
                                  ? "momo://?refId=browser|".concat(n)
                                  : a,
                                children: e.Title,
                              }),
                      },
                      t
                    )
                  );
                }),
              }),
            ],
          })
        );
      };
    },
    27395: function (e, t, l) {
      var i = l(85893),
        a = l(67294),
        n = l(70569),
        d = l(6903);
      t.Z = (e) => {
        var t;
        let { data: l, type: o = 1 } = e,
          {
            fetchListDataCase: s,
            listData: r,
            isLoading: c,
            isViewApp: x,
            renderCTA: m,
          } = (0, n.J)({ data: null == l ? void 0 : l.Items });
        return (
          (0, a.useEffect)(() => {
            var e, t, i;
            if (
              (null == l
                ? void 0
                : null === (e = l.Items) || void 0 === e
                ? void 0
                : e.length) <= 0
            )
              return;
            let a =
              null == l
                ? void 0
                : null === (i = l.Items) || void 0 === i
                ? void 0
                : null === (t = i.map((e) => (null == e ? void 0 : e.Id))) ||
                  void 0 === t
                ? void 0
                : t.join(",");
            s({ idsDonationCase: a });
          }, [null == l ? void 0 : l.Items]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: "grid ".concat(
                  1 === o
                    ? "grid-cols-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-1",
                  " mb-6 mt-2 gap-6"
                ),
                children:
                  null == l
                    ? void 0
                    : null === (t = l.Items) || void 0 === t
                    ? void 0
                    : t.map((e, t) => {
                        let l =
                          null == r
                            ? void 0
                            : r.find(
                                (t) =>
                                  (null == t ? void 0 : t.Id) ===
                                  (null == e ? void 0 : e.Id)
                              );
                        return (0, i.jsx)(
                          d.Z,
                          {
                            data: e,
                            isModal: !0,
                            dataDetail: l,
                            renderCTA: m,
                            isLoading: c,
                          },
                          t
                        );
                      }),
              }),
              (0, i.jsx)("div", {
                className: "pt-2 text-center",
                children: (0, i.jsxs)("a", {
                  href: "/vi-nhan-ai/tu-thien",
                  className:
                    "mx-auto flex w-fit items-center justify-center rounded-full border border-pink-600 px-5 pb-1 pt-1.5 font-semibold text-pink-700 transition-all hover:bg-pink-50 hover:text-pink-800",
                  children: [
                    "Xem tất cả",
                    (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true",
                      className: "ml-1 w-4",
                      children: (0, i.jsx)("path", {
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
    15133: function (e, t, l) {
      var i = l(85893);
      l(67294);
      var a = l(91827),
        n = l(19302);
      t.Z = function (e) {
        let { value: t, isViewApp: l = !1 } = e,
          [d, o] = (0, a.Z)(t),
          s = (0, n.Z)(
            () => {
              o();
            },
            500,
            { leading: !0, trailing: !1 }
          );
        return (0, i.jsxs)("div", {
          className: "relative py-2 text-center",
          children: [
            (0, i.jsx)("div", {
              className: " mb-1 text-sm text-gray-500",
              children: "Nhấn v\xe0o để copy m\xe3",
            }),
            (0, i.jsxs)("button", {
              className:
                "tracking-focus tracking-engage-btn-copy-code relative cursor-pointer whitespace-nowrap rounded-full border border-dashed border-pink-300 bg-pink-50  py-1 pl-5  pr-10 text-lg font-bold uppercase text-pink-600 hover:bg-pink-100 ",
              onClick: () => s(),
              children: [
                " ",
                t,
                " ",
                (0, i.jsx)("span", {
                  className: "absolute right-4 top-2",
                  children: (0, i.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, i.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    76729: function (e, t, l) {
      var i = l(85893),
        a = l(85463),
        n = l.n(a),
        d = l(42298),
        o = l(23855),
        s = l(91827),
        r = l(19302),
        c = l(25935),
        x = l(67294),
        m = l(58057),
        u = l(57851);
      let checkDateExpire = (e) => {
          if (!e) return !1;
          let t = new Date(),
            l = new Date(e.replace(/-/g, "/"));
          return l - t > 0;
        },
        ItemCode = (e) => {
          let { dataCode: t, isOnlyCode: l = !1 } = e,
            [, a] = (0, s.Z)((null == t ? void 0 : t.Code) || ""),
            [n, v] = (0, x.useState)(!1),
            p = (0, r.Z)(
              () => {
                n ||
                  (v(!0),
                  a(),
                  setTimeout(function () {
                    v(!1);
                  }, 1500));
              },
              500,
              { leading: !0, trailing: !1 }
            ),
            h = (null == t ? void 0 : t.ExpiredDate)
              ? (0, d.default)(
                  (0, o.default)(null == t ? void 0 : t.ExpiredDate),
                  "dd/MM/yyyy"
                )
              : null;
          return (0, i.jsx)("div", {
            className: (0, u.m)(
              "code-item mb-5 basis-full px-2",
              l ? "sm:basis-7/12" : "sm:basis-1/2"
            ),
            children: (0, i.jsx)("div", {
              className:
                "flex h-full basis-full overflow-hidden rounded-lg bg-pink-200 p-1.5",
              title: "Sao ch\xe9p m\xe3",
              children: (0, i.jsxs)("div", {
                className: "relative flex h-full w-full rounded-md bg-white",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex flex-1 flex-col gap-2 p-2",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "code-title text-lg font-bold leading-snug text-gray-900",
                            children: (0, c.ZP)(null == t ? void 0 : t.Title),
                          }),
                          (null == t ? void 0 : t.Description) &&
                            (0, i.jsx)("div", {
                              className: "mt-1 text-xs text-gray-900",
                              children: (0, c.ZP)(
                                null == t ? void 0 : t.Description
                              ),
                            }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex-0 flex-none text-xs text-gray-600",
                        children: [
                          "Nhập m\xe3:",
                          " ",
                          (0, i.jsx)("span", {
                            className: "font-semibold text-pink-500",
                            children: null == t ? void 0 : t.Code,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex-0 code-bottom relative flex flex-none flex-col items-center justify-between border-l border-dashed border-pink-200 p-2 before:bg-pink-200 after:bg-pink-200",
                    children: [
                      (0, i.jsx)("div", {
                        className: "flex flex-1 items-center justify-center",
                        children: (0, i.jsx)("button", {
                          className:
                            "tracking-focus tracking-engage-btn-copy-code line-clamp-1 flex w-20 items-center justify-center rounded-md border border-pink-500 p-1.5 text-xs font-medium text-pink-500 duration-300 hover:bg-pink-50 disabled:bg-pink-50 disabled:opacity-100",
                          onClick: () => p(),
                          disabled: n,
                          "data-code": null == t ? void 0 : t.Code,
                          children: n
                            ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)(m.Z, {
                                    className: "mr-1 h-3 w-3",
                                  }),
                                  "Đ\xe3 copy",
                                ],
                              })
                            : "Copy m\xe3",
                        }),
                      }),
                      h &&
                        (0, i.jsxs)("div", {
                          className:
                            "date-expired flex-noe flex-0 mt-1 text-[10px] text-gray-600",
                          children: ["HSD: ", h],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      t.Z = function (e) {
        let { promotionCodes: t = [] } = e,
          l = new Date(),
          a = [...t],
          d = a.filter(
            (e) =>
              (null == e ? void 0 : e.ExpiredDate) !== null &&
              (null == e ? void 0 : e.ExpiredDate) !== void 0 &&
              checkDateExpire(e.ExpiredDate)
          ),
          o = a.filter(
            (e) =>
              (null == e ? void 0 : e.ExpiredDate) === null ||
              (null == e ? void 0 : e.ExpiredDate) === void 0
          ),
          s = [
            ...o,
            ...d.sort((e, t) => {
              let i =
                  !(null == e ? void 0 : e.DateExpire) ||
                  new Date(
                    null == e
                      ? void 0
                      : e.ExpiredDate.replace(/\s+/g, "T").concat(".000+08:00")
                  ) <= l,
                a =
                  !(null == t ? void 0 : t.DateExpire) ||
                  new Date(
                    null == t
                      ? void 0
                      : t.ExpiredDate.replace(/\s+/g, "T").concat(".000+08:00")
                  ) <= l;
              if (i && a) return 0;
              if (i) return 1;
              if (a) return -1;
              let n = new Date(null == e ? void 0 : e.ExpiredDate),
                d = new Date(null == t ? void 0 : t.ExpiredDate);
              return n - d;
            }),
          ],
          r = (null == s ? void 0 : s.length) === 1;
        return (
          (null == t ? void 0 : t.length) !== 0 &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: "jsx-ecd7d05badf66762 py-7",
                children: (0, i.jsx)("div", {
                  className:
                    "jsx-ecd7d05badf66762 " +
                    ((0, u.m)(
                      "item-center list-code -mx-2 -mb-5 flex flex-row flex-wrap",
                      r && "justify-center"
                    ) || ""),
                  children:
                    null == s
                      ? void 0
                      : s.map((e, t) =>
                          (0, i.jsx)(
                            ItemCode,
                            { dataCode: e, isOnlyCode: r },
                            t
                          )
                        ),
                }),
              }),
              (0, i.jsx)(n(), {
                id: "ecd7d05badf66762",
                children:
                  '.list-code .code-bottom{width:110px}.list-code .code-bottom:before{content:"";display:block;width:18px;height:18px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;position:absolute;top:-11px;left:-10px}.list-code .code-bottom:after{content:"";display:block;width:18px;height:18px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;position:absolute;bottom:-11px;left:-10px}.code-item .code-title span{--tw-text-opacity:1;color:rgb(235 47 150/var(--tw-text-opacity))}',
              }),
            ],
          })
        );
      };
    },
  },
]);
