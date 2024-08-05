"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9795, 8504],
  {
    9852: function (e, t, a) {
      var l = a(67294),
        i = a(73850),
        r = a(11163);
      t.Z = (e) => {
        let { trace: t } = e,
          a = (0, r.useRouter)();
        return (
          (0, l.useEffect)(() => {
            let e = (0, i.D9)(t);
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
      var l = a(85893),
        i = a(67294),
        r = a(25935),
        n = a(30719),
        s = a(88116);
      t.Z = (e) => {
        let { data: t } = e;
        if (!t || 0 === t.length) return null;
        let [a, d] = (0, i.useState)(null),
          o = t.find((e) => {
            var t;
            return (
              (null === (t = e.attribs) || void 0 === t ? void 0 : t.class) ===
              "swiper-wrapper"
            );
          }),
          c = o.children.filter((e) => "tag" === e.type),
          x = {
            trim: !0,
            replace: (e) => {
              let { attribs: t, name: a, children: i } = e;
              return "div" == a && t.class.includes("swiper-lazy-preloader")
                ? (0, l.jsx)(l.Fragment, {})
                : "img" == a
                ? (0, l.jsx)("img", {
                    src: t.src || t["data-src"],
                    className: "img-fluid",
                    alt: t.alt,
                    loading: "lazy",
                  })
                : void 0;
            },
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.tq, {
              className: "gallery-top",
              slidesPerView: 1,
              spaceBetween: 0,
              modules: [s.W_, s.o3],
              autoplay: { delay: 4e3, disableOnInteraction: !1 },
              pagination: { clickable: !0 },
              navigation: !0,
              thumbs: { swiper: a && !a.destroyed ? a : null },
              children: c.map((e, t) =>
                (0, l.jsx)(
                  n.o5,
                  {
                    className: "flex items-center justify-center bg-gray-100",
                    children: (0, r.du)(e.children, x),
                  },
                  t
                )
              ),
            }),
            (0, l.jsx)(n.tq, {
              className: "gallery-thumbs mt-4 hidden md:block",
              slidesPerView: 4,
              spaceBetween: 15,
              onSwiper: d,
              modules: [s.W_, s.o3],
              watchSlidesProgress: !0,
              children: c.map((e, t) =>
                (0, l.jsx)(
                  n.o5,
                  {
                    className:
                      "flex cursor-pointer justify-center bg-gray-100 hover:opacity-90",
                    children: (0, r.du)(e.children, x),
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
      var l = a(85893),
        i = a(67294),
        r = a(25935),
        n = a(5152),
        s = a.n(n),
        d = a(35067),
        o = a(76501),
        c = a(40724),
        x = a(41997),
        u = a(94779),
        m = a(38667);
      let p = s()(() => a.e(1668).then(a.bind(a, 71668)), {
          loadableGenerated: { webpack: () => [71668] },
        }),
        h = s()(
          () => Promise.all([a.e(2854), a.e(4006)]).then(a.bind(a, 84006)),
          { loadableGenerated: { webpack: () => [84006] } }
        ),
        f = s()(
          () => Promise.all([a.e(2854), a.e(5355)]).then(a.bind(a, 85355)),
          { loadableGenerated: { webpack: () => [85355] } }
        ),
        b = s()(() => a.e(5741).then(a.bind(a, 95741)), {
          loadableGenerated: { webpack: () => [95741] },
        }),
        j = s()(
          () =>
            Promise.all([a.e(9111), a.e(7273), a.e(2854), a.e(7118)]).then(
              a.bind(a, 87118)
            ),
          { loadableGenerated: { webpack: () => [87118] } }
        ),
        g = s()(
          () =>
            Promise.all([a.e(9111), a.e(2854), a.e(5458)]).then(
              a.bind(a, 92259)
            ),
          { loadableGenerated: { webpack: () => [92259] } }
        ),
        v = s()(
          () => Promise.all([a.e(2082), a.e(3099)]).then(a.bind(a, 73099)),
          { loadableGenerated: { webpack: () => [73099] } }
        ),
        y = s()(() => a.e(8680).then(a.bind(a, 38680)), {
          loadableGenerated: { webpack: () => [38680] },
          ssr: !1,
        }),
        ModalQrCode = (e) => {
          let { qrId: t, text: a } = e,
            [r, n] = (0, i.useState)(!1),
            [s, x] = (0, i.useState)(null),
            u = (0, o.Z)(),
            handleOpen = () => {
              n(!0);
            };
          return (
            (0, i.useEffect)(() => {
              c.o.get("/qrCode/ListByIds?ids=".concat(t)).then(function (e) {
                let t = e.Data;
                t &&
                  (x(t[0]),
                  setTimeout(() => {
                    (0, d.Z)();
                  }, 1e3));
              });
            }, []),
            (0, l.jsx)(l.Fragment, {
              children:
                s &&
                (0, l.jsxs)("div", {
                  children: [
                    u &&
                      (0, l.jsx)("a", {
                        href: s.QrLink,
                        rel: "noreferrer",
                        target: "_blank",
                        className:
                          "btn inline-block rounded-md bg-pink-700 px-5 py-2 text-center text-sm \n                 font-bold uppercase text-white text-opacity-90 transition-all hover:bg-pink-800",
                        children: a,
                      }),
                    !u &&
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("button", {
                            onClick: () => handleOpen(),
                            className: "btn-primary",
                            children: a,
                          }),
                          (0, l.jsx)(b, {
                            isOpen: r,
                            onDismiss: () => {
                              n(!1);
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
            ads: n = [],
            cta: s = [],
            qa: d = [],
            qaGroup: o = [],
            guide: c = [],
            guideGroup: b = [],
            children: w,
            isViewApp: N = !1,
            ...k
          } = e,
          [C, D] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          let e = setTimeout(function () {
            D(!0);
          }, 200);
          return function () {
            clearTimeout(e), D(!1);
          };
        }, [a]);
        let Z = [],
          E = 0,
          F = null,
          A = [],
          T = [];
        c && c.length > 0 && (A = c), b && b.length > 0 && (T = b);
        let P = {
          trim: !0,
          replace: (e) => {
            var a, i, n, s, c, x;
            let { attribs: b, name: y, children: w } = e;
            if ("p" == y) {
              let e = w.filter((e) => "tag" === e.type);
              if (!e || 0 === e.length) return;
              let t = e.filter((e) =>
                ["div", "help-article", "question-article"].includes(e.name)
              );
              if (!t || 0 === t.length) return;
              return (0, l.jsx)(l.Fragment, { children: (0, r.du)(w, P) });
            }
            if (
              "div" == y &&
              void 0 != b.class &&
              b.class.includes("swiper-container")
            ) {
              if (b.class.includes("gallery-top"))
                return (0, l.jsx)(u.Z, { data: w });
              if (b.class.includes("gallery-thumbs"))
                return (0, l.jsx)(l.Fragment, {});
            }
            if ("help-article" === y) {
              if (void 0 == b["data-type"] || void 0 == b["data-helpid"])
                return;
              let e = b["data-helpid"];
              if (1 == b["data-type"])
                return (0, l.jsx)(v, {
                  className: "mb-3",
                  data: T.find((t) => t.Id == e),
                  isMobile: t,
                });
              if (2 == b["data-type"])
                return (0, l.jsx)(v, {
                  className: "mb-3",
                  data: A.find((t) => t.Id == e),
                  isMobile: t,
                });
            }
            if ("question-article" == y) {
              if (void 0 == b["data-type"] || void 0 == b["data-questid"])
                return;
              let e = b["data-questid"];
              if (1 == b["data-type"])
                return (0, l.jsx)(j, {
                  data: o.find((t) => t.Id == e),
                  isMobile: t,
                });
              if (2 == b["data-type"]) {
                let a = d.find((t) => t.Id == e);
                return (0, l.jsx)("div", {
                  className: "mt-4 md:mt-8",
                  children: (0, l.jsx)(g, {
                    data: [a.Data],
                    title: a.Title,
                    isMobile: t,
                  }),
                });
              }
            }
            if ("compare-image" == y) {
              if (!b["data-img1"] || !b["data-img2"]) return;
              let e = b["data-img1"],
                t = b["data-img2"],
                r = null !== (a = b["data-alt1"]) && void 0 !== a ? a : "",
                d = null !== (i = b["data-alt2"]) && void 0 !== i ? i : "",
                o = null !== (n = b["data-desc"]) && void 0 !== n ? n : "",
                x = null !== (s = b["data-height"]) && void 0 !== s ? s : 800,
                u = null !== (c = b["data-width"]) && void 0 !== c ? c : 450;
              return (0, l.jsx)("div", {
                className: "my-3 md:my-4 ",
                children: (0, l.jsx)(p, {
                  img1: e,
                  img2: t,
                  alt1: r,
                  alt2: d,
                  width: u,
                  height: x,
                  desc: o,
                }),
              });
            }
            if ("img" == y) {
              let e = {
                src: b.src,
                subHtml: "".concat(b.alt ? b.alt : "", "<div></div>"),
                thumb: b.src,
              };
              Z.push(e), E++;
              let t = E;
              return (0, l.jsx)("span", {
                className: "block cursor-pointer",
                onClick: () => {
                  F.openGallery(t - 1 < 0 ? 0 : t - 1);
                },
                children: (0, l.jsx)("img", {
                  src: b.src || b["data-src"],
                  className: "mx-auto mb-2 mt-8",
                  alt: b.alt,
                  loading: "lazy",
                }),
              });
            }
            if ("table" == y)
              return (0, l.jsx)("div", {
                className: "table-responsive",
                children: (0, l.jsx)("table", {
                  className: "table",
                  children: (0, r.du)(w),
                }),
              });
            if ("accordion-article" == y) {
              let e = w.filter((e) => "tag" == e.type);
              if (e.length <= 0) return;
              return (0, l.jsx)("div", {
                className: "my-3 md:my-4 ",
                children: (0, l.jsx)(f, { data: e }),
              });
            }
            if ((null == b ? void 0 : b.class) == "accordion-article") {
              let e = w.filter((e) => "tag" == e.type);
              if (e.length <= 0) return;
              return (0, l.jsx)("div", {
                className: "my-3 md:my-4 ",
                children: (0, l.jsx)(h, { data: e }),
              });
            }
            if ("a" == y) {
              if (N) {
                if (b.class && b.class.includes("btn-primary"))
                  return (0, l.jsx)(l.Fragment, {});
                b.class && b.class.includes("cke-inapp-link")
                  ? (0, m.Z)({ attributes: b })
                  : ((b["data-href"] = b.href),
                    (b.href = ""),
                    (b.onClick = (e) => {
                      e.preventDefault();
                    }),
                    b.target && (b.target = ""));
              } else if (void 0 != b["data-qrcode-id"]) {
                let e = b["data-qrcode-id"];
                if (!e) return;
                return (0, l.jsx)("div", {
                  className: "py-4 qrtype-".concat(e),
                  "data-qr-id": e,
                  children: (0, l.jsx)(ModalQrCode, {
                    qrId: e,
                    text: null === (x = w[0]) || void 0 === x ? void 0 : x.data,
                  }),
                });
              }
            }
            if (y && !/^[a-zA-Z0-9-]{0,}$/g.test(y))
              return (0, l.jsx)(l.Fragment, {});
          },
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className:
                "mx-auto leading-normal  md:leading-relaxed lg:mx-0 lg:w-full lg:max-w-full",
              children: a && (0, r.ZP)(a, P),
            }),
            C &&
              (0, l.jsx)(y, {
                speed: 500,
                onInit: (e) => {
                  F = e.instance;
                },
                dynamic: !0,
                dynamicEl: Z,
                plugins: [x.Z],
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
      var l = a(85893);
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
        let { catId: t, catName: a, catLink: i, isViewApp: r } = e;
        return (0, l.jsx)(l.Fragment, {
          children:
            t &&
            i &&
            (r
              ? (0, l.jsx)("span", {
                  className: "article-cate uppercase",
                  style: { color: ArticleCateColor(t) },
                  children: a,
                })
              : (0, l.jsx)("a", {
                  href: i,
                  className: "article-cate uppercase",
                  style: { color: ArticleCateColor(t) },
                  children: a,
                })),
        });
      };
    },
    76996: function (e, t, a) {
      a.r(t);
      var l = a(85893),
        i = a(86010);
      t.default = (e) => {
        let { children: t, className: a } = e;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("div", {
            className: (0, i.Z)("modal-body  h-full overflow-auto", a, {
              "pt-2 pb-2 pl-12 pr-12": !a,
            }),
            children: t,
          }),
        });
      };
    },
    57179: function (e, t, a) {
      a.r(t);
      var l = a(85893),
        i = a(86010);
      t.default = (e) => {
        let { children: t, className: a, useDefaultStyles: r = !0 } = e;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("footer", {
            className: (0, i.Z)(
              "modal-footer flex items-center justify-end",
              r && "border-t border-gray-200 py-2 px-5 md:py-4",
              a
            ),
            children: t,
          }),
        });
      };
    },
    63486: function (e, t, a) {
      a.r(t);
      var l = a(85893),
        i = a(86010);
      t.default = (e) => {
        let {
          children: t,
          isBorder: a = !0,
          noWrap: r = !0,
          className: n = "",
        } = e;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("header", {
            className: (0, i.Z)(
              "modal-header  flex items-center justify-center pt-4  pb-4 pl-12 pr-12 font-semibold",
              { "border-b border-gray-200": a },
              n
            ),
            children: (0, l.jsx)("h3", {
              className: (0, i.Z)("overflow-hidden text-ellipsis", {
                "whitespace-nowrap": r,
              }),
              children: t,
            }),
          }),
        });
      };
    },
    25683: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return ui_ArticleAjaxLoad;
        },
      });
      var l = a(85893),
        i = a(85463),
        r = a.n(i),
        n = a(89755),
        s = a.n(n),
        d = a(67294),
        o = a(15133),
        c = a(17574),
        x = a(42298),
        u = a(18026);
      function NewDateOnSafari(e) {
        return e ? new Date(e.replace(/-/g, "/")) : null;
      }
      var m = a(89241),
        p = a(60570),
        h = a(76729),
        ui_ArticleAjaxLoad = function (e) {
          var t, a;
          let {
              article: i,
              loading: n,
              isViewApp: f = !1,
              isMobile: b = !1,
            } = e,
            [j, g] = (0, d.useState)([]);
          return (
            (0, d.useEffect)(() => {
              if (i && i.Code) {
                let e = i.Code.split(","),
                  t = [];
                for (let a = 0; a < e.length; a++) e[a] && t.push(e[a]);
                g(t);
              }
            }, [i]),
            (0, l.jsxs)(l.Fragment, {
              children: [
                n &&
                  (0, l.jsx)("div", {
                    className: "jsx-7dab54d522075622 flex justify-center py-20",
                    children: (0, l.jsx)(u.Z, {}),
                  }),
                i &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      i.ViewInApp &&
                        (0, l.jsx)("div", {
                          className:
                            "jsx-7dab54d522075622 pointer-events-none mb-3 select-none overflow-hidden rounded md:rounded-lg",
                          children: (0, l.jsx)(s(), {
                            src: i.Avatar,
                            alt: i.Title,
                            layout: "responsive",
                            width: 770,
                            height: 370,
                          }),
                        }),
                      (0, l.jsx)("h3", {
                        className:
                          "jsx-7dab54d522075622 mb-2 text-lg font-bold text-pink-600 md:text-2xl",
                        children: i.Title,
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "jsx-7dab54d522075622 mb-2 flex flex-row items-center",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "jsx-7dab54d522075622 flex-auto",
                            children: [
                              f
                                ? (0, l.jsx)("a", {
                                    className: "jsx-7dab54d522075622 block",
                                    children: (0, l.jsx)("span", {
                                      style: { color: (0, p.o)(i.Category.Id) },
                                      className:
                                        "jsx-7dab54d522075622 mb-0 inline-block text-tiny font-semibold transition-colors",
                                      children: i.Category.Name,
                                    }),
                                  })
                                : (0, l.jsx)("a", {
                                    href: i.Category.Link,
                                    className: "jsx-7dab54d522075622 block",
                                    children: (0, l.jsx)("span", {
                                      style: { color: (0, p.o)(i.Category.Id) },
                                      className:
                                        "jsx-7dab54d522075622 mb-0 inline-block text-tiny font-semibold transition-colors",
                                      children: i.Category.Name,
                                    }),
                                  }),
                              (0, l.jsxs)("div", {
                                className:
                                  "jsx-7dab54d522075622 mt-0 flex flex-wrap items-center text-tiny text-gray-500 first-letter:uppercase ",
                                children: [
                                  i.DateStart && i.DateEnd
                                    ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          "Từ\xa0",
                                          (0, l.jsx)("span", {
                                            className: "jsx-7dab54d522075622",
                                            children: (0, x.default)(
                                              NewDateOnSafari(i.DateStart),
                                              "dd/MM/yyyy"
                                            ),
                                          }),
                                          "\xa0đến\xa0",
                                          (0, l.jsx)("span", {
                                            className: "jsx-7dab54d522075622",
                                            children: (0, x.default)(
                                              NewDateOnSafari(i.DateEnd),
                                              "dd/MM/yyyy"
                                            ),
                                          }),
                                        ],
                                      })
                                    : (0, l.jsx)("span", {
                                        className: "jsx-7dab54d522075622",
                                        children: i.PublishDate,
                                      }),
                                  i.TotalViews > 500 &&
                                    (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        "\xa0-\xa0",
                                        (0, l.jsx)("span", {
                                          className: "jsx-7dab54d522075622",
                                          children: i.TotalViewsFormat,
                                        }),
                                        "\xa0lượt xem",
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "jsx-7dab54d522075622 flex-0 shrink-0",
                            children: (0, l.jsx)(m.Z, {
                              isViewApp: f,
                              link: ""
                                .concat("https://www.momo.vn")
                                .concat(i.Link),
                              openNewTab: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "jsx-7dab54d522075622 soju__prose small mt-5",
                        children: [
                          (0, l.jsx)("p", {
                            className: "jsx-7dab54d522075622 article-desc",
                            children: i.Short,
                          }),
                          j &&
                            j.map((e, t) =>
                              (0, l.jsx)("p", {
                                id: "code",
                                className: "jsx-7dab54d522075622 m-2",
                                children: (0, l.jsx)(o.Z, { value: e }, t),
                              })
                            ),
                          (null == i
                            ? void 0
                            : null === (t = i.PromotionConfig) || void 0 === t
                            ? void 0
                            : t.PromotionCodes) &&
                            (0, l.jsx)(h.Z, {
                              promotionCodes:
                                null == i
                                  ? void 0
                                  : null === (a = i.PromotionConfig) ||
                                    void 0 === a
                                  ? void 0
                                  : a.PromotionCodes,
                            }),
                          (0, l.jsx)(c.Z, {
                            isMobile: b,
                            data: i.Content,
                            ads: i.AdsData,
                            cta: i.CtaData,
                            qa: i.QaData,
                            qaGroup: i.QaGroupData,
                            guide: i.GuideData,
                            guideGroup: i.GuideGroupData,
                            isViewApp: f,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, l.jsx)(r(), {
                  id: "7dab54d522075622",
                  children:
                    ".article-desc.jsx-7dab54d522075622{font-weight:bold;color:#828282;font-size:18px;line-height:160%}",
                }),
              ],
            })
          );
        };
    },
    15133: function (e, t, a) {
      var l = a(85893);
      a(67294);
      var i = a(91827),
        r = a(19302);
      t.Z = function (e) {
        let { value: t, isViewApp: a = !1 } = e,
          [n, s] = (0, i.Z)(t),
          d = (0, r.Z)(
            () => {
              s();
            },
            500,
            { leading: !0, trailing: !1 }
          );
        return (0, l.jsxs)("div", {
          className: "relative py-2 text-center",
          children: [
            (0, l.jsx)("div", {
              className: " mb-1 text-sm text-gray-500",
              children: "Nhấn v\xe0o để copy m\xe3",
            }),
            (0, l.jsxs)("button", {
              className:
                "tracking-focus tracking-engage-btn-copy-code relative cursor-pointer whitespace-nowrap rounded-full border border-dashed border-pink-300 bg-pink-50  py-1 pl-5  pr-10 text-lg font-bold uppercase text-pink-600 hover:bg-pink-100 ",
              onClick: () => d(),
              children: [
                " ",
                t,
                " ",
                (0, l.jsx)("span", {
                  className: "absolute right-4 top-2",
                  children: (0, l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, l.jsx)("path", {
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
    76729: function (e, t, a) {
      var l = a(85893),
        i = a(85463),
        r = a.n(i),
        n = a(42298),
        s = a(23855),
        d = a(91827),
        o = a(19302),
        c = a(25935),
        x = a(67294),
        u = a(58057),
        m = a(57851);
      let checkDateExpire = (e) => {
          if (!e) return !1;
          let t = new Date(),
            a = new Date(e.replace(/-/g, "/"));
          return a - t > 0;
        },
        ItemCode = (e) => {
          let { dataCode: t, isOnlyCode: a = !1 } = e,
            [, i] = (0, d.Z)((null == t ? void 0 : t.Code) || ""),
            [r, p] = (0, x.useState)(!1),
            h = (0, o.Z)(
              () => {
                r ||
                  (p(!0),
                  i(),
                  setTimeout(function () {
                    p(!1);
                  }, 1500));
              },
              500,
              { leading: !0, trailing: !1 }
            ),
            f = (null == t ? void 0 : t.ExpiredDate)
              ? (0, n.default)(
                  (0, s.default)(null == t ? void 0 : t.ExpiredDate),
                  "dd/MM/yyyy"
                )
              : null;
          return (0, l.jsx)("div", {
            className: (0, m.m)(
              "code-item mb-5 basis-full px-2",
              a ? "sm:basis-7/12" : "sm:basis-1/2"
            ),
            children: (0, l.jsx)("div", {
              className:
                "flex h-full basis-full overflow-hidden rounded-lg bg-pink-200 p-1.5",
              title: "Sao ch\xe9p m\xe3",
              children: (0, l.jsxs)("div", {
                className: "relative flex h-full w-full rounded-md bg-white",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex flex-1 flex-col gap-2 p-2",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "code-title text-lg font-bold leading-snug text-gray-900",
                            children: (0, c.ZP)(null == t ? void 0 : t.Title),
                          }),
                          (null == t ? void 0 : t.Description) &&
                            (0, l.jsx)("div", {
                              className: "mt-1 text-xs text-gray-900",
                              children: (0, c.ZP)(
                                null == t ? void 0 : t.Description
                              ),
                            }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex-0 flex-none text-xs text-gray-600",
                        children: [
                          "Nhập m\xe3:",
                          " ",
                          (0, l.jsx)("span", {
                            className: "font-semibold text-pink-500",
                            children: null == t ? void 0 : t.Code,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "flex-0 code-bottom relative flex flex-none flex-col items-center justify-between border-l border-dashed border-pink-200 p-2 before:bg-pink-200 after:bg-pink-200",
                    children: [
                      (0, l.jsx)("div", {
                        className: "flex flex-1 items-center justify-center",
                        children: (0, l.jsx)("button", {
                          className:
                            "tracking-focus tracking-engage-btn-copy-code line-clamp-1 flex w-20 items-center justify-center rounded-md border border-pink-500 p-1.5 text-xs font-medium text-pink-500 duration-300 hover:bg-pink-50 disabled:bg-pink-50 disabled:opacity-100",
                          onClick: () => h(),
                          disabled: r,
                          "data-code": null == t ? void 0 : t.Code,
                          children: r
                            ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                  (0, l.jsx)(u.Z, {
                                    className: "mr-1 h-3 w-3",
                                  }),
                                  "Đ\xe3 copy",
                                ],
                              })
                            : "Copy m\xe3",
                        }),
                      }),
                      f &&
                        (0, l.jsxs)("div", {
                          className:
                            "date-expired flex-noe flex-0 mt-1 text-[10px] text-gray-600",
                          children: ["HSD: ", f],
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
          a = new Date(),
          i = [...t],
          n = i.filter(
            (e) =>
              (null == e ? void 0 : e.ExpiredDate) !== null &&
              (null == e ? void 0 : e.ExpiredDate) !== void 0 &&
              checkDateExpire(e.ExpiredDate)
          ),
          s = i.filter(
            (e) =>
              (null == e ? void 0 : e.ExpiredDate) === null ||
              (null == e ? void 0 : e.ExpiredDate) === void 0
          ),
          d = [
            ...s,
            ...n.sort((e, t) => {
              let l =
                  !(null == e ? void 0 : e.DateExpire) ||
                  new Date(
                    null == e
                      ? void 0
                      : e.ExpiredDate.replace(/\s+/g, "T").concat(".000+08:00")
                  ) <= a,
                i =
                  !(null == t ? void 0 : t.DateExpire) ||
                  new Date(
                    null == t
                      ? void 0
                      : t.ExpiredDate.replace(/\s+/g, "T").concat(".000+08:00")
                  ) <= a;
              if (l && i) return 0;
              if (l) return 1;
              if (i) return -1;
              let r = new Date(null == e ? void 0 : e.ExpiredDate),
                n = new Date(null == t ? void 0 : t.ExpiredDate);
              return r - n;
            }),
          ],
          o = (null == d ? void 0 : d.length) === 1;
        return (
          (null == t ? void 0 : t.length) !== 0 &&
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", {
                className: "jsx-ecd7d05badf66762 py-7",
                children: (0, l.jsx)("div", {
                  className:
                    "jsx-ecd7d05badf66762 " +
                    ((0, m.m)(
                      "item-center list-code -mx-2 -mb-5 flex flex-row flex-wrap",
                      o && "justify-center"
                    ) || ""),
                  children:
                    null == d
                      ? void 0
                      : d.map((e, t) =>
                          (0, l.jsx)(
                            ItemCode,
                            { dataCode: e, isOnlyCode: o },
                            t
                          )
                        ),
                }),
              }),
              (0, l.jsx)(r(), {
                id: "ecd7d05badf66762",
                children:
                  '.list-code .code-bottom{width:110px}.list-code .code-bottom:before{content:"";display:block;width:18px;height:18px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;position:absolute;top:-11px;left:-10px}.list-code .code-bottom:after{content:"";display:block;width:18px;height:18px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;position:absolute;bottom:-11px;left:-10px}.code-item .code-title span{--tw-text-opacity:1;color:rgb(235 47 150/var(--tw-text-opacity))}',
              }),
            ],
          })
        );
      };
    },
    38667: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return handleAppContentCTA;
        },
      });
      var l = a(88197);
      let handleAppContentCTA = (e) => {
        let { attributes: t } = e,
          a = t.href;
        a &&
          (/^https:\/\/www.momo.vn/.test(a) &&
            ((t.href = void 0),
            (t.onClick = () => {
              l.Z.openWeb({ url: a });
            })),
          /^https?:\/\/(?!momo.vn)/.test(a) &&
            ((t.href = void 0),
            (t.onClick = () => {
              l.Z.openURL(a);
            })));
      };
    },
  },
]);
