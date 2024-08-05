"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9233, 5296, 5979, 5166],
  {
    65979: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return FooterCta;
          },
        });
      var n = a(85893),
        l = a(85463),
        r = a.n(l),
        i = a(90760),
        s = a(86010),
        o = a(67294);
      function FooterCta(e) {
        let { data: t, isMobile: a, isViewApp: l = !1 } = e,
          [d, c] = (0, o.useState)(!1),
          [u, m] = (0, o.useState)([]);
        return (
          (0, o.useEffect)(() => {
            let e =
              (null == t
                ? void 0
                : t.reduce((e, t) => {
                    if ("CtaFooter" == t.TypeName) {
                      var a, n;
                      (null === (n = t.Data) || void 0 === n
                        ? void 0
                        : null === (a = n.Items) || void 0 === a
                        ? void 0
                        : a.length) > 0 && e.push(...t.Data.Items),
                        t.Cta && e.push(t.Cta);
                    }
                    return e;
                  }, [])) || [];
            return (
              m(e),
              () => {
                m(null);
              }
            );
          }, [t]),
          (0, o.useEffect)(() => {
            let onScroll = () => {
              document.documentElement.scrollTop > 200 ? c(!0) : c(!1);
            };
            return (
              window.addEventListener("scroll", onScroll),
              () => {
                window.removeEventListener("scroll", onScroll);
              }
            );
          }, []),
          (0, n.jsx)(n.Fragment, {
            children:
              (null == u ? void 0 : u.length) > 0 &&
              (0, n.jsxs)("div", {
                className:
                  "jsx-5caa01dc6d827630 " +
                  ((0, s.Z)(
                    "footer-cta sticky bottom-0 z-30 flex justify-center space-x-3 bg-pink-100 bg-opacity-90 px-4 py-4 duration-300 empty:hidden landing:bg-transparent landing:px-4 landing:py-2 landing:text-center landing:backdrop-blur-sm sm:py-2",
                    d
                      ? " translate-y-0  opacity-100"
                      : " pointer-events-none translate-y-full  select-none opacity-0"
                  ) || ""),
                children: [
                  null == u
                    ? void 0
                    : u.map((e, t) => {
                        let { Link: r, QrCodeData: s } = e || {},
                          o = null == s ? void 0 : s.QrLink;
                        return (
                          !!(!o || (o && l) ? r : o) &&
                          (0, n.jsx)(
                            i.Z,
                            { data: e, isMobile: a, isViewApp: l },
                            t
                          )
                        );
                      }),
                  (0, n.jsx)(r(), {
                    id: "5caa01dc6d827630",
                    children:
                      "@media screen and (max-width:639px){.footer-cta{background:rgb(255,240,246);background:-webkit-linear-gradient(bottom,rgba(255,240,246,1)0%,rgba(255,240,246,1)82%,rgba(255,240,246,0)100%);background:-moz-linear-gradient(bottom,rgba(255,240,246,1)0%,rgba(255,240,246,1)82%,rgba(255,240,246,0)100%);background:-o-linear-gradient(bottom,rgba(255,240,246,1)0%,rgba(255,240,246,1)82%,rgba(255,240,246,0)100%);background:linear-gradient(0deg,rgba(255,240,246,1)0%,rgba(255,240,246,1)82%,rgba(255,240,246,0)100%)}}",
                  }),
                ],
              }),
          })
        );
      }
    },
    75166: function (e, t, a) {
      a.r(t);
      var n = a(85893),
        l = a(69111);
      t.default = (e) => {
        let { Meta: t } = e || {},
          { Title: a, Description: r, Avatar: i, Date: s } = t || {};
        return (0, n.jsx)("script", {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.momo.vn/",
              },
              headline: (0, l.encode)(a),
              image: [i],
              ...(s ? { datePublished: s, dateModified: s } : void 0),
              author: { "@type": "Organization", name: "V\xed MoMo" },
              publisher: {
                "@type": "Organization",
                name: "V\xed MoMo",
                logo: {
                  "@type": "ImageObject",
                  url: "https://homepage.momocdn.net/img/momo-upload-api-logo-momo-181015105508.png",
                },
              },
              description: (0, l.encode)(r),
            }),
          },
        });
      };
    },
    75296: function (e, t, a) {
      a.r(t);
      var n = a(85893),
        l = a(69111),
        r = a(67294);
      t.default = (e) => {
        let { QaData: t } = e || {},
          a = (0, r.useMemo)(
            () =>
              ((null == t ? void 0 : t.Items) || []).reduce((e, t) => {
                let { ListQuestions: a } = t;
                return (
                  a.forEach((t) => {
                    let { GenerateSeo: a, Title: n, ShortContent: r } = t;
                    a &&
                      e.push({
                        "@type": "Question",
                        name: (0, l.encode)(n),
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: (0, l.encode)(r),
                        },
                      });
                  }),
                  e
                );
              }, []),
            [null == t ? void 0 : t.Items]
          );
        return 0 === a.length
          ? null
          : (0, n.jsx)("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: {
                __html: JSON.stringify({
                  "@context": "http://schema.org",
                  "@type": "FAQPage",
                  mainEntity: a,
                }),
              },
            });
      };
    },
    73739: function (e, t, a) {
      var n = a(85893),
        l = a(69111);
      t.Z = (e) => {
        let { Meta: t } = e || {},
          {
            Title: a,
            Description: r,
            RatingCount: i,
            RatingValue: s,
          } = t || {};
        return (0, n.jsx)("script", {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "CreativeWorkSeries",
              name: (0, l.encode)(a),
              description: (0, l.encode)(r),
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "".concat(s),
                bestRating: "5",
                ratingCount: "".concat(i),
                worstRating: "0",
              },
            }),
          },
        });
      };
    },
    9852: function (e, t, a) {
      var n = a(67294),
        l = a(73850),
        r = a(11163);
      t.Z = (e) => {
        let { trace: t } = e,
          a = (0, r.useRouter)();
        return (
          (0, n.useEffect)(() => {
            let e = (0, l.D9)(t);
            return (
              e && document.body.appendChild(e),
              () => {
                e && document.body.removeChild(e);
              }
            );
          }, [a.asPath, t]),
          null
        );
      };
    },
    94779: function (e, t, a) {
      var n = a(85893),
        l = a(67294),
        r = a(25935),
        i = a(30719),
        s = a(88116);
      t.Z = (e) => {
        let { data: t } = e;
        if (!t || 0 === t.length) return null;
        let [a, o] = (0, l.useState)(null),
          d = t.find((e) => {
            var t;
            return (
              (null === (t = e.attribs) || void 0 === t ? void 0 : t.class) ===
              "swiper-wrapper"
            );
          }),
          c = d.children.filter((e) => "tag" === e.type),
          u = {
            trim: !0,
            replace: (e) => {
              let { attribs: t, name: a, children: l } = e;
              return "div" == a && t.class.includes("swiper-lazy-preloader")
                ? (0, n.jsx)(n.Fragment, {})
                : "img" == a
                ? (0, n.jsx)("img", {
                    src: t.src || t["data-src"],
                    className: "img-fluid",
                    alt: t.alt,
                    loading: "lazy",
                  })
                : void 0;
            },
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.tq, {
              className: "gallery-top",
              slidesPerView: 1,
              spaceBetween: 0,
              modules: [s.W_, s.o3],
              autoplay: { delay: 4e3, disableOnInteraction: !1 },
              pagination: { clickable: !0 },
              navigation: !0,
              thumbs: { swiper: a && !a.destroyed ? a : null },
              children: c.map((e, t) =>
                (0, n.jsx)(
                  i.o5,
                  {
                    className: "flex items-center justify-center bg-gray-100",
                    children: (0, r.du)(e.children, u),
                  },
                  t
                )
              ),
            }),
            (0, n.jsx)(i.tq, {
              className: "gallery-thumbs mt-4 hidden md:block",
              slidesPerView: 4,
              spaceBetween: 15,
              onSwiper: o,
              modules: [s.W_, s.o3],
              watchSlidesProgress: !0,
              children: c.map((e, t) =>
                (0, n.jsx)(
                  i.o5,
                  {
                    className:
                      "flex cursor-pointer justify-center bg-gray-100 hover:opacity-90",
                    children: (0, r.du)(e.children, u),
                  },
                  t
                )
              ),
            }),
          ],
        });
      };
    },
    17574: function (e, t, a) {
      var n = a(85893),
        l = a(67294),
        r = a(25935),
        i = a(5152),
        s = a.n(i),
        o = a(35067),
        d = a(76501),
        c = a(40724),
        u = a(41997),
        m = a(94779),
        p = a(38667);
      let g = s()(() => a.e(1668).then(a.bind(a, 71668)), {
          loadableGenerated: { webpack: () => [71668] },
        }),
        h = s()(
          () => Promise.all([a.e(2854), a.e(4006)]).then(a.bind(a, 84006)),
          { loadableGenerated: { webpack: () => [84006] } }
        ),
        x = s()(
          () => Promise.all([a.e(2854), a.e(5355)]).then(a.bind(a, 85355)),
          { loadableGenerated: { webpack: () => [85355] } }
        ),
        f = s()(() => a.e(5741).then(a.bind(a, 95741)), {
          loadableGenerated: { webpack: () => [95741] },
        }),
        b = s()(
          () =>
            Promise.all([a.e(9111), a.e(7273), a.e(2854), a.e(7118)]).then(
              a.bind(a, 87118)
            ),
          { loadableGenerated: { webpack: () => [87118] } }
        ),
        v = s()(
          () =>
            Promise.all([a.e(9111), a.e(2854), a.e(5458)]).then(
              a.bind(a, 92259)
            ),
          { loadableGenerated: { webpack: () => [92259] } }
        ),
        y = s()(
          () => Promise.all([a.e(2082), a.e(3099)]).then(a.bind(a, 73099)),
          { loadableGenerated: { webpack: () => [73099] } }
        ),
        j = s()(() => a.e(8680).then(a.bind(a, 38680)), {
          loadableGenerated: { webpack: () => [38680] },
          ssr: !1,
        }),
        ModalQrCode = (e) => {
          let { qrId: t, text: a } = e,
            [r, i] = (0, l.useState)(!1),
            [s, u] = (0, l.useState)(null),
            m = (0, d.Z)(),
            handleOpen = () => {
              i(!0);
            };
          return (
            (0, l.useEffect)(() => {
              c.o.get("/qrCode/ListByIds?ids=".concat(t)).then(function (e) {
                let t = e.Data;
                t &&
                  (u(t[0]),
                  setTimeout(() => {
                    (0, o.Z)();
                  }, 1e3));
              });
            }, []),
            (0, n.jsx)(n.Fragment, {
              children:
                s &&
                (0, n.jsxs)("div", {
                  children: [
                    m &&
                      (0, n.jsx)("a", {
                        href: s.QrLink,
                        rel: "noreferrer",
                        target: "_blank",
                        className:
                          "btn inline-block rounded-md bg-pink-700 px-5 py-2 text-center text-sm \n                 font-bold uppercase text-white text-opacity-90 transition-all hover:bg-pink-800",
                        children: a,
                      }),
                    !m &&
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("button", {
                            onClick: () => handleOpen(),
                            className: "btn-primary",
                            children: a,
                          }),
                          (0, n.jsx)(f, {
                            isOpen: r,
                            onDismiss: () => {
                              i(!1);
                            },
                            isDark: !0,
                            img: s.QrImage,
                            title: s.Title,
                            shortTitle: s.ShortTitle,
                          }),
                        ],
                      }),
                  ],
                }),
            })
          );
        };
      t.Z = (e) => {
        let {
            isMobile: t,
            data: a,
            ads: i = [],
            cta: s = [],
            qa: o = [],
            qaGroup: d = [],
            guide: c = [],
            guideGroup: f = [],
            children: w,
            isViewApp: k = !1,
            ...N
          } = e,
          [C, Z] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          let e = setTimeout(function () {
            Z(!0);
          }, 200);
          return function () {
            clearTimeout(e), Z(!1);
          };
        }, [a]);
        let S = [],
          E = 0,
          I = null,
          F = [],
          A = [];
        c && c.length > 0 && (F = c), f && f.length > 0 && (A = f);
        let L = {
          trim: !0,
          replace: (e) => {
            var a, l, i, s, c, u;
            let { attribs: f, name: j, children: w } = e;
            if ("p" == j) {
              let e = w.filter((e) => "tag" === e.type);
              if (!e || 0 === e.length) return;
              let t = e.filter((e) =>
                ["div", "help-article", "question-article"].includes(e.name)
              );
              if (!t || 0 === t.length) return;
              return (0, n.jsx)(n.Fragment, { children: (0, r.du)(w, L) });
            }
            if (
              "div" == j &&
              void 0 != f.class &&
              f.class.includes("swiper-container")
            ) {
              if (f.class.includes("gallery-top"))
                return (0, n.jsx)(m.Z, { data: w });
              if (f.class.includes("gallery-thumbs"))
                return (0, n.jsx)(n.Fragment, {});
            }
            if ("help-article" === j) {
              if (void 0 == f["data-type"] || void 0 == f["data-helpid"])
                return;
              let e = f["data-helpid"];
              if (1 == f["data-type"])
                return (0, n.jsx)(y, {
                  className: "mb-3",
                  data: A.find((t) => t.Id == e),
                  isMobile: t,
                });
              if (2 == f["data-type"])
                return (0, n.jsx)(y, {
                  className: "mb-3",
                  data: F.find((t) => t.Id == e),
                  isMobile: t,
                });
            }
            if ("question-article" == j) {
              if (void 0 == f["data-type"] || void 0 == f["data-questid"])
                return;
              let e = f["data-questid"];
              if (1 == f["data-type"])
                return (0, n.jsx)(b, {
                  data: d.find((t) => t.Id == e),
                  isMobile: t,
                });
              if (2 == f["data-type"]) {
                let a = o.find((t) => t.Id == e);
                return (0, n.jsx)("div", {
                  className: "mt-4 md:mt-8",
                  children: (0, n.jsx)(v, {
                    data: [a.Data],
                    title: a.Title,
                    isMobile: t,
                  }),
                });
              }
            }
            if ("compare-image" == j) {
              if (!f["data-img1"] || !f["data-img2"]) return;
              let e = f["data-img1"],
                t = f["data-img2"],
                r = null !== (a = f["data-alt1"]) && void 0 !== a ? a : "",
                o = null !== (l = f["data-alt2"]) && void 0 !== l ? l : "",
                d = null !== (i = f["data-desc"]) && void 0 !== i ? i : "",
                u = null !== (s = f["data-height"]) && void 0 !== s ? s : 800,
                m = null !== (c = f["data-width"]) && void 0 !== c ? c : 450;
              return (0, n.jsx)("div", {
                className: "my-3 md:my-4 ",
                children: (0, n.jsx)(g, {
                  img1: e,
                  img2: t,
                  alt1: r,
                  alt2: o,
                  width: m,
                  height: u,
                  desc: d,
                }),
              });
            }
            if ("img" == j) {
              let e = {
                src: f.src,
                subHtml: "".concat(f.alt ? f.alt : "", "<div></div>"),
                thumb: f.src,
              };
              S.push(e), E++;
              let t = E;
              return (0, n.jsx)("span", {
                className: "block cursor-pointer",
                onClick: () => {
                  I.openGallery(t - 1 < 0 ? 0 : t - 1);
                },
                children: (0, n.jsx)("img", {
                  src: f.src || f["data-src"],
                  className: "mx-auto mb-2 mt-8",
                  alt: f.alt,
                  loading: "lazy",
                }),
              });
            }
            if ("table" == j)
              return (0, n.jsx)("div", {
                className: "table-responsive",
                children: (0, n.jsx)("table", {
                  className: "table",
                  children: (0, r.du)(w),
                }),
              });
            if ("accordion-article" == j) {
              let e = w.filter((e) => "tag" == e.type);
              if (e.length <= 0) return;
              return (0, n.jsx)("div", {
                className: "my-3 md:my-4 ",
                children: (0, n.jsx)(x, { data: e }),
              });
            }
            if ((null == f ? void 0 : f.class) == "accordion-article") {
              let e = w.filter((e) => "tag" == e.type);
              if (e.length <= 0) return;
              return (0, n.jsx)("div", {
                className: "my-3 md:my-4 ",
                children: (0, n.jsx)(h, { data: e }),
              });
            }
            if ("a" == j) {
              if (k) {
                if (f.class && f.class.includes("btn-primary"))
                  return (0, n.jsx)(n.Fragment, {});
                f.class && f.class.includes("cke-inapp-link")
                  ? (0, p.Z)({ attributes: f })
                  : ((f["data-href"] = f.href),
                    (f.href = ""),
                    (f.onClick = (e) => {
                      e.preventDefault();
                    }),
                    f.target && (f.target = ""));
              } else if (void 0 != f["data-qrcode-id"]) {
                let e = f["data-qrcode-id"];
                if (!e) return;
                return (0, n.jsx)("div", {
                  className: "py-4 qrtype-".concat(e),
                  "data-qr-id": e,
                  children: (0, n.jsx)(ModalQrCode, {
                    qrId: e,
                    text: null === (u = w[0]) || void 0 === u ? void 0 : u.data,
                  }),
                });
              }
            }
            if (j && !/^[a-zA-Z0-9-]{0,}$/g.test(j))
              return (0, n.jsx)(n.Fragment, {});
          },
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className:
                "mx-auto leading-normal  md:leading-relaxed lg:mx-0 lg:w-full lg:max-w-full",
              children: a && (0, r.ZP)(a, L),
            }),
            C &&
              (0, n.jsx)(j, {
                speed: 500,
                onInit: (e) => {
                  I = e.instance;
                },
                dynamic: !0,
                dynamicEl: S,
                plugins: [u.Z],
              }),
          ],
        });
      };
    },
    60570: function (e, t, a) {
      a.d(t, {
        o: function () {
          return ArticleCateColor;
        },
      });
      var n = a(85893);
      let ArticleCateColor = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 17;
        return {
          17: "#EB5757",
          18: "#27AE60",
          19: "#2F80ED",
          20: "#9B51E0",
          118: "#a50064",
          67: "#EB5757",
          69: "#27AE60",
          86: "#2F80ED",
          68: "#9B51E0",
          93: "#a50064",
        }[e];
      };
      t.Z = (e) => {
        let { catId: t, catName: a, catLink: l, isViewApp: r } = e;
        return (0, n.jsx)(n.Fragment, {
          children:
            t &&
            l &&
            (r
              ? (0, n.jsx)("span", {
                  className: "article-cate uppercase",
                  style: { color: ArticleCateColor(t) },
                  children: a,
                })
              : (0, n.jsx)("a", {
                  href: l,
                  className: "article-cate uppercase",
                  style: { color: ArticleCateColor(t) },
                  children: a,
                })),
        });
      };
    },
    15044: function (e, t, a) {
      var n = a(85893),
        l = a(46943),
        r = a(35024),
        i = a(20212);
      t.Z = (e) => {
        let {
          className: t,
          data: a = [],
          linkViewMore: s = "",
          title: o = "Tin tức li\xean quan",
        } = e;
        return (0, n.jsxs)("div", {
          className: "".concat(t || ""),
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, n.jsx)("h2", {
                  className: "mb-0 flex-auto text-xl font-semibold text-momo",
                  children: o,
                }),
                (0, n.jsxs)("a", {
                  href: s,
                  className:
                    "flex items-center text-base text-pink-700 hover:text-pink-500",
                  children: [
                    "Xem th\xeam",
                    (0, n.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 5l7 7-7 7",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "grid gap-4 pt-4",
              children:
                a.length > 0 &&
                a.map((e) =>
                  (0, n.jsxs)(
                    "article",
                    {
                      className:
                        "article-type-relate grid grid-cols-12 grid-rows-1 gap-4",
                      children: [
                        (0, n.jsx)("div", {
                          className: "col-span-5 pt-1",
                          children: (0, n.jsx)(r.Z, {
                            id: e.Id,
                            avatar: e.Avatar,
                            title: e.Title,
                            slug: e.Link,
                            objectFit: "contain",
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "col-span-7",
                          children: [
                            (0, n.jsx)(l.Z, {
                              type: "normal",
                              title: e.Title,
                              slug: e.Link,
                            }),
                            (0, n.jsx)(i.Z, {
                              className: "mt-2",
                              catId: e.CategoryId,
                              catLink: e.CategoryLink,
                              catName: e.CategoryName,
                              date: e.PublicDate,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.Id
                  )
                ),
            }),
          ],
        });
      };
    },
    3157: function (e, t, a) {
      var n = a(85893),
        l = a(67294),
        r = a(99469),
        i = a(40724);
      t.Z = (e) => {
        let { Count: t, Value: a, Id: s, Type: o = 1, children: d, ...c } = e,
          [u, m] = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          m(t);
        }, [t]);
        let [p, g] = (0, l.useState)(!1);
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className:
              "rating mt-6 flex flex-nowrap items-center text-sm text-gray-700 lg:mt-8",
            children: [
              (0, n.jsx)("div", {
                className: "mr-2",
                children: "Đ\xe1nh gi\xe1 : ",
              }),
              " ",
              (0, n.jsx)("div", {
                className: "mr-1 text-base font-semibold text-pink-600",
                children: a || 0,
              }),
              (0, n.jsxs)("div", {
                className: "mr-3 pt-1 text-xs",
                children: ["/", u || 0],
              }),
              p
                ? (0, n.jsx)("div", {
                    className:
                      "inline-block rounded border border-yellow-300  bg-yellow-50 px-3 py-1 text-yellow-800",
                    children: "C\xe1m ơn bạn đ\xe3 đ\xe1nh gi\xe1 \uD83D\uDE18",
                  })
                : (0, n.jsx)("div", {
                    className: "pt-1",
                    children: (0, n.jsx)(r.Z, {
                      onClick: (e) => {
                        i.o
                          .post("/common/rating", {
                            data: { Type: o, Id: s, Stars: e },
                          })
                          .then((e) => {
                            e && e.Result && (m(parseInt(u) + 1), g(!0));
                          });
                      },
                      initialRating: a,
                      emptySymbol: (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5 text-gray-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, n.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1,
                          d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                        }),
                      }),
                      fullSymbol: (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5 text-gray-500",
                        fill: "#FCD34D",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, n.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1,
                          d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                        }),
                      }),
                    }),
                  }),
            ],
          }),
        });
      };
    },
    90760: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return CtaFooter;
        },
      });
      var n = a(85893),
        l = a(17677),
        r = a(41874);
      function CtaFooter(e) {
        let { data: t, isMobile: a, isViewApp: i = !1 } = e;
        return (0, n.jsx)("div", {
          className: "flex flex-1 items-start justify-center md:flex-none",
          children: (0, n.jsx)(l.Z, {
            className:
              "mx-auto !inline-flex h-12 w-full !items-center !justify-center !px-1  sm:h-full  sm:!px-4 ",
            classNameRoot: "h-full",
            content: t.Content,
            cta: t,
            isViewApp: i,
            trackingClassName: r.$,
          }),
        });
      }
    },
    41874: function (e, t, a) {
      a.d(t, {
        $: function () {
          return n;
        },
      });
      let n = "tracking-cta-footer";
    },
    38667: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return handleAppContentCTA;
        },
      });
      var n = a(88197);
      let handleAppContentCTA = (e) => {
        let { attributes: t } = e,
          a = t.href;
        a &&
          (/^https:\/\/www.momo.vn/.test(a) &&
            ((t.href = void 0),
            (t.onClick = () => {
              n.Z.openWeb({ url: a });
            })),
          /^https?:\/\/(?!momo.vn)/.test(a) &&
            ((t.href = void 0),
            (t.onClick = () => {
              n.Z.openURL(a);
            })));
      };
    },
  },
]);
