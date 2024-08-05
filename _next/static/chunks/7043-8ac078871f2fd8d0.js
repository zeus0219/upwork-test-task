"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7043],
  {
    86238: function (e, t, a) {
      var n = a(85893),
        o = a(66261),
        r = a(76231);
      t.Z = (e) => {
        let { href: t, offset: a = 0, children: l, ...c } = e,
          s = (0, r.Z)(!0);
        return (0, n.jsx)(n.Fragment, {
          children: s
            ? (0, n.jsx)("a", {
                href: t,
                ...c,
                onClick: (e) => {
                  e.preventDefault();
                  let n = t.slice(1),
                    o = document.getElementById(n),
                    r = o.offsetTop;
                  document
                    .querySelector(".soju-wrapper")
                    .scroll({
                      top: r + 50 - parseInt(a || 0),
                      left: 0,
                      behavior: "smooth",
                    }),
                    c.onClick && c.onClick();
                },
                children: l,
              })
            : (0, n.jsx)(o.rU, {
                className: "cursor-pointer",
                to: t.replace("#", ""),
                offset: -a,
                smooth: !0,
                duration: 500,
                ...c,
                children: l,
              }),
        });
      };
    },
    1751: function (e, t, a) {
      let n;
      var o = a(85893),
        r = a(33587),
        l = a(68715),
        c = a(13902),
        s = a(5506);
      a(67294);
      var i = a(73935);
      let ToastMessage = (e) => {
          let {
            isOpen: t,
            content: a,
            type: n = 1,
            handleCloseToast: i,
            maxWidth: d = 448,
          } = e;
          return (0, o.jsx)(r.u, {
            appear: !0,
            show: t,
            enterFrom: "-translate-y-8 opacity-0",
            leaveTo: "-translate-y-8 opacity-0",
            style: {
              zIndex: 99999,
              maxWidth: d,
              top: "max(calc(env(safe-area-inset-top) + 0.75rem), 0.75rem)",
            },
            className:
              "fixed left-1/2 mx-auto flex w-full -translate-x-1/2 px-3 transition-all duration-200 sm:left-auto  sm:right-0 sm:w-fit sm:translate-x-0",
            children: (0, o.jsxs)("div", {
              className:
                "flex w-full justify-between space-x-2 rounded-lg px-4 py-3 shadow-sm backdrop-blur-sm",
              style: {
                backgroundColor:
                  2 === n
                    ? "rgb(39, 151, 51, 0.85)"
                    : "rgba(252, 226, 11, 0.85)",
                color: 2 === n ? "#fff" : "#333",
              },
              children: [
                (0, o.jsxs)("div", {
                  className: "flex space-x-2",
                  children: [
                    2 === n
                      ? (0, o.jsx)(l.Z, { className: "h-5 shrink-0" })
                      : (0, o.jsx)(c.Z, { className: "h-5 shrink-0" }),
                    (0, o.jsx)("span", {
                      className: "text-sm sm:text-md",
                      children: a,
                    }),
                  ],
                }),
                (0, o.jsx)(s.Z, {
                  className:
                    "h-5 shrink-0 cursor-pointer transition-all hover:opacity-50",
                  onClick: i,
                }),
              ],
            }),
          });
        },
        d = document.body.querySelector(".document-toast-container"),
        closeToast = (e, t) => {
          let { type: a, maxWidth: r } = t;
          n && clearTimeout(n),
            (0, i.render)(
              (0, o.jsx)(ToastMessage, {
                isOpen: !1,
                content: e,
                type: a,
                maxWidth: r,
              }),
              d
            );
        };
      t.Z = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "Đ\xe3 xảy ra lỗi, vui l\xf2ng thử lại!",
          {
            type: t = 1,
            timeout: a = 3e3,
            maxWidth: r = 448,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
        n && clearTimeout(n),
          (0, i.render)(
            (0, o.jsx)(ToastMessage, {
              isOpen: !0,
              content: e,
              type: t,
              handleCloseToast: () => {
                closeToast(e, { type: t, maxWidth: r });
              },
              maxWidth: r,
            }),
            d,
            () => {
              n = setTimeout(() => {
                closeToast(e, { type: t });
              }, a);
            }
          );
      };
    },
    96743: function (e, t, a) {
      a.d(t, {
        z: function () {
          return o;
        },
      });
      var n = a(67294);
      let o = (0, n.createContext)(null);
    },
    42292: function (e, t, a) {
      a.r(t);
      var n = a(85893),
        o = a(85463),
        r = a.n(o),
        l = a(67294),
        c = a(38774),
        s = a(86010),
        i = a(57851),
        d = a(5506),
        m = a(68121);
      let computeInsetTop = () =>
          void 0 !== window.pageYOffset ? window.pageYOffset : 0,
        getScrollbarWidth = () =>
          window.innerWidth - document.documentElement.clientWidth,
        UnprocessedModal = (e) => {
          let {
              isOpen: t,
              className: a,
              clusterClassName: o,
              onDismiss: u = !1,
              isMobileCenter: p = !1,
              isBgTransparent: h = !1,
              isFull: f = !1,
              isFullMobile: x = !1,
              isDark: g = !1,
              isBig: w = !1,
              isShowHeaderClose: v = !0,
              cssSize: b = null,
              customCssContent: y = null,
              children: j,
              isRightCloseButton: k,
              isShowHeaderBack: N,
              onGoBack: C,
              isModalFree: T = !1,
            } = e,
            S = (0, l.useMemo)(() => computeInsetTop(), []),
            A = (0, l.useMemo)(() => getScrollbarWidth(), []),
            Z = (0, l.useMemo)(
              () => "fixed" == window.getComputedStyle(document.body).position,
              []
            );
          return ((0, l.useEffect)(
            () =>
              function () {
                S &&
                  !Z &&
                  window.scrollTo({ top: S || 0, behavior: "instant" });
              },
            []
          ),
          t)
            ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(r(), {
                    id: "ba9f5a081d1491f0",
                    dynamic: [
                      !Z &&
                        !T &&
                        " body {\n            position: fixed !important;\n            overflow: hidden;\n            inset: -"
                          .concat(
                            S || 0,
                            "px 0px 0px;\n            inset-inline-end: "
                          )
                          .concat(
                            A || 0,
                            "px;\n            --scrollbar-gutter: "
                          )
                          .concat(
                            A || 0,
                            "px;\n          }\n          .footer-cta { \n            transform: translateY(0px);\n          }\n          "
                          ),
                    ],
                    children: "".concat(
                      !Z &&
                        !T &&
                        " body {\n            position: fixed !important;\n            overflow: hidden;\n            inset: -"
                          .concat(
                            S || 0,
                            "px 0px 0px;\n            inset-inline-end: "
                          )
                          .concat(
                            A || 0,
                            "px;\n            --scrollbar-gutter: "
                          )
                          .concat(
                            A || 0,
                            "px;\n          }\n          .footer-cta { \n            transform: translateY(0px);\n          }\n          "
                          ),
                      "\n        "
                    ),
                  }),
                  (0, n.jsx)(c.t9, {
                    isOpen: t,
                    onDismiss: u,
                    className: (0, i.m)(
                      "modal fixed inset-0  flex max-h-full  flex-row justify-center bg-black bg-opacity-50 p-0 text-gray-800 sm:mt-0 md:items-center md:p-9",
                      p ? "items-center" : "items-end",
                      a
                    ),
                    role: "dialog",
                    "aria-modal": "true",
                    dangerouslyBypassScrollLock: !0,
                    children: (0, n.jsxs)(c.cZ, {
                      "aria-label": "content",
                      className: (0, i.m)(
                        "modalFadeUp modal-cluster max-h-modal relative flex max-h-full w-full  max-w-full flex-col ",
                        y || "rounded-t-xl  shadow-xl  md:rounded-xl",
                        f ? "h-full" : "md:h-auto",
                        x && "h-full md:h-auto",
                        w && "md:max-w-4xl",
                        !w && !b && !y && "md:max-w-3xl",
                        !h && "bg-white",
                        b,
                        o
                      ),
                      children: [
                        (0, n.jsx)("button", {
                          type: "button",
                          "aria-hidden": !0,
                          className:
                            "jsx-15afcce345a5cb76 " +
                            r().dynamic([
                              [
                                "ba9f5a081d1491f0",
                                [
                                  !Z &&
                                    !T &&
                                    " body {\n            position: fixed !important;\n            overflow: hidden;\n            inset: -"
                                      .concat(
                                        S || 0,
                                        "px 0px 0px;\n            inset-inline-end: "
                                      )
                                      .concat(
                                        A || 0,
                                        "px;\n            --scrollbar-gutter: "
                                      )
                                      .concat(
                                        A || 0,
                                        "px;\n          }\n          .footer-cta { \n            transform: translateY(0px);\n          }\n          "
                                      ),
                                ],
                              ],
                            ]) +
                            " pointer-events-none",
                        }),
                        v &&
                          (0, n.jsx)("button", {
                            type: "button",
                            onClick: u,
                            className:
                              "jsx-15afcce345a5cb76 " +
                              r().dynamic([
                                [
                                  "ba9f5a081d1491f0",
                                  [
                                    !Z &&
                                      !T &&
                                      " body {\n            position: fixed !important;\n            overflow: hidden;\n            inset: -"
                                        .concat(
                                          S || 0,
                                          "px 0px 0px;\n            inset-inline-end: "
                                        )
                                        .concat(
                                          A || 0,
                                          "px;\n            --scrollbar-gutter: "
                                        )
                                        .concat(
                                          A || 0,
                                          "px;\n          }\n          .footer-cta { \n            transform: translateY(0px);\n          }\n          "
                                        ),
                                  ],
                                ],
                              ]) +
                              " " +
                              ((0, s.Z)(
                                "absolute top-0 z-20 mt-1 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-gray-50 hover:bg-opacity-20 hover:opacity-70",
                                g &&
                                  "text-white text-opacity-70 hover:opacity-100",
                                k || N
                                  ? "left-auto right-3"
                                  : "left-0 right-auto md:left-auto md:right-3"
                              ) || ""),
                            children: (0, n.jsx)(d.Z, { className: "h-6 w-6" }),
                          }),
                        N &&
                          (0, n.jsx)("button", {
                            type: "button",
                            onClick: C,
                            className:
                              "jsx-15afcce345a5cb76 " +
                              r().dynamic([
                                [
                                  "ba9f5a081d1491f0",
                                  [
                                    !Z &&
                                      !T &&
                                      " body {\n            position: fixed !important;\n            overflow: hidden;\n            inset: -"
                                        .concat(
                                          S || 0,
                                          "px 0px 0px;\n            inset-inline-end: "
                                        )
                                        .concat(
                                          A || 0,
                                          "px;\n            --scrollbar-gutter: "
                                        )
                                        .concat(
                                          A || 0,
                                          "px;\n          }\n          .footer-cta { \n            transform: translateY(0px);\n          }\n          "
                                        ),
                                  ],
                                ],
                              ]) +
                              " " +
                              ((0, s.Z)(
                                "absolute left-3 top-0 z-20 mt-1 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-gray-50 hover:bg-opacity-20 hover:opacity-70",
                                g &&
                                  "text-white text-opacity-70 hover:opacity-100"
                              ) || ""),
                            children: (0, n.jsx)(m.Z, { className: "h-6 w-6" }),
                          }),
                        j,
                      ],
                    }),
                  }),
                  (0, n.jsx)(r(), {
                    id: "15afcce345a5cb76",
                    children:
                      ".modalFadeUp{-webkit-animation-duration:400ms;-moz-animation-duration:400ms;-o-animation-duration:400ms;animation-duration:400ms;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:modal-fade-up;-moz-animation-name:modal-fade-up;-o-animation-name:modal-fade-up;animation-name:modal-fade-up}.max-h-modal{max-height:-webkit-calc(100% - 20px);max-height:-moz-calc(100% - 20px);max-height:calc(100% - 20px)}@-webkit-keyframes modal-fade-up{from{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes modal-fade-up{from{opacity:0;-moz-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-o-keyframes modal-fade-up{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes modal-fade-up{from{opacity:0;-webkit-transform:translate3d(0,100%,0);-moz-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.modal{z-index:200}.modal-cluster{z-index:10}.modal-header{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.modal-body{-webkit-overflow-scrolling:auto}.modal-overlay{z-index:5}.modal-footer{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}",
                  }),
                ],
              })
            : null;
        };
      t.default = (e) => {
        let { isOpen: t, ...a } = e;
        return t ? (0, n.jsx)(UnprocessedModal, { isOpen: t, ...a }) : null;
      };
    },
    17677: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return ui_ButtonAction;
        },
      });
      var n = a(85893),
        o = a(5152),
        r = a.n(o),
        l = a(67294),
        c = a(25935),
        s = a(76501),
        i = a(72185),
        d = a(86238),
        m = a(5723),
        u = a(94936),
        p = a(34317),
        h = a(80010),
        f = a(88197);
      let x = (0, p.y)() || window.location.search.includes("view=app"),
        g = (0, h.u)(),
        useCTALink = (e) => {
          let {
              basicLink: t,
              universalLink: a,
              redirectUC: n,
              qrId: o,
              isTransferQueryToCTA: r,
              isNewTab: l,
            } = e,
            c = !a || (a && x) ? t : a,
            getSearchParams = () => {
              if (!window.location.search) return "";
              let e = new URLSearchParams(
                window.location.search.replaceAll("%22", "").replaceAll('"', "")
              );
              return e.delete("refId"), e.delete("featureCode"), e.toString();
            },
            convertToRedirectLink = (e) => {
              let t = encodeURIComponent(window.location.href),
                a = encodeURIComponent(e),
                o = encodeURIComponent(n);
              return "https://www.momo.vn/redirect-cta?uc="
                .concat(o, "&to=")
                .concat(a, "&from=")
                .concat(t);
            },
            handleGetLink = () => {
              if (!c) return "";
              let e = c.trim();
              if (r) {
                let t = getSearchParams();
                t &&
                  (e = ""
                    .concat(e)
                    .concat(e.includes("?") ? "&".concat(t) : "?".concat(t)));
              }
              if (!r && o) {
                let t = (0, m.Pt)(u.yA);
                if (t) {
                  let a = "/".concat(window.location.pathname.split("/")[1]),
                    n = u.wq[a];
                  if (t[n]) {
                    let a = new URLSearchParams(t[n].data).toString();
                    e = ""
                      .concat(e)
                      .concat(e.includes("?") ? "&".concat(a) : "?".concat(a));
                  }
                }
              }
              return n && g && (e = convertToRedirectLink(e)), e;
            };
          return {
            handleNavigate: () => {
              let e = handleGetLink();
              if (e) {
                if (!x) {
                  window.open(e, l ? "_blank" : "_self");
                  return;
                }
                if (/^https:\/\/www.momo.vn/.test(e) && l) {
                  f.Z.openWeb({ url: e });
                  return;
                }
                if (/^https?:\/\/(?!www.momo.vn)/.test(e)) {
                  f.Z.openURL(e);
                  return;
                }
                window.open(e);
              }
            },
            handleGetLink,
            hasLink: !!c,
          };
        };
      var w = a(96743),
        v = a(57851),
        b = a(79361),
        y = a.n(b),
        j = a(89755),
        k = a.n(j),
        N = a(1785),
        C = a.n(N),
        T = a(8447);
      let useCtaNewUserTracking = () => {
        let e = {
          in_view_newuser_display: (0, l.useRef)(0),
          click_newuser_display: (0, l.useRef)(0),
          in_view_newuser_download: (0, l.useRef)(0),
          click_newuser_download: (0, l.useRef)(0),
          click_viewmore_voucher: (0, l.useRef)(0),
        };
        return (
          (0, T.Z)(() => {
            Object.keys(e).forEach((t) => {
              e[t].current = 0;
            });
          }, [window.location.pathname]),
          {
            handleNewUserTracking: (t) => {
              let { action: a, name: n } = t;
              if (e[a]) {
                e[a].current += 1;
                let t = e[a].current,
                  o = {
                    event: "newuser-event",
                    action: a,
                    component_name: n,
                    component_category: "GMC",
                    component_category2: "newuser",
                    component_category3: "hellomomo",
                    formInteractionCount: t.toString(),
                  };
                C().dataLayer({ dataLayer: o });
              }
            },
          }
        );
      };
      var S = a(98524),
        A = a(86010),
        Z = a(42292);
      let I = r()(() => a.e(5741).then(a.bind(a, 95741)), {
          loadableGenerated: { webpack: () => [95741] },
        }),
        M = r()(() => a.e(1733).then(a.bind(a, 1733)), {
          loadableGenerated: { webpack: () => [1733] },
        });
      var ui_ButtonAction = (e) => {
        let {
            cta: t,
            content: a,
            type: o = 0,
            className: r = "",
            classNameRoot: m = "",
            trackingClassName: u,
            isViewApp: p = !1,
            isFreeStyles: h = !1,
            ...f
          } = e,
          {
            QrCodeId: x,
            Text: g,
            Link: b,
            NewTab: j,
            RedirectUC: N,
            QrCodeData: C,
            QrCodePromotionData: T,
          } = t || {},
          _ = null == C ? void 0 : C.QrLink,
          [U, z] = (0, l.useState)(!1),
          [L, R] = (0, l.useState)(!1),
          O = (0, s.Z)(),
          { isTransferQueryToCTA: F } = (0, l.useContext)(w.z) || {},
          { hasMounted: E } = (0, S.o)(),
          {
            handleNavigate: V,
            handleGetLink: H,
            hasLink: B,
          } = useCTALink({
            basicLink: b,
            universalLink: _,
            redirectUC: N,
            qrId: x,
            isTransferQueryToCTA: F,
            isNewTab: j,
          }),
          handleTracking = () => {
            p &&
              (null == t ? void 0 : t.Tracking) &&
              (null == t ? void 0 : t.TrackingEvtName) &&
              (null == t ? void 0 : t.TrackingEvtAction) &&
              (0, i.B)(null == t ? void 0 : t.TrackingEvtName, {
                action: null == t ? void 0 : t.TrackingEvtAction,
              });
          },
          { handleNewUserTracking: D } = useCtaNewUserTracking(),
          getCssClassByType = () =>
            1 === o
              ? "btn-primary-outline ".concat(r)
              : h
              ? r
              : "btn-primary btn-primary-landing ".concat(r),
          handleNavigationCTA = () => {
            handleTracking(), V();
          };
        return E && B
          ? x
            ? (0, n.jsxs)("div", {
                ...f,
                className: (0, v.m)(
                  "qrtype-".concat(x, " w-full md:flex md:items-center"),
                  m
                ),
                "data-qr-id": x,
                children: [
                  a &&
                    (0, n.jsx)("span", {
                      className:
                        "mr-2 hidden whitespace-nowrap md:inline-block",
                      children: (0, c.ZP)(a),
                    }),
                  (0, n.jsx)(n.Fragment, {
                    children: O
                      ? B &&
                        (0, n.jsx)(n.Fragment, {
                          children:
                            T && !p
                              ? (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsx)("button", {
                                    className: (0, v.m)(
                                      !h && "btn-primary btn-primary-landing",
                                      r,
                                      u
                                    ),
                                    onClick: () => R(!0),
                                    "data-name": "button-action-with-qr",
                                    children: g,
                                  }),
                                })
                              : (0, n.jsx)("button", {
                                  onClick: handleNavigationCTA,
                                  rel: "noreferrer",
                                  className: (0, v.m)(
                                    !h && "btn-primary btn-primary-landing",
                                    r,
                                    u
                                  ),
                                  "data-name": "button-action-with-qr",
                                  children: g,
                                }),
                        })
                      : C &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("button", {
                              onClick: () => {
                                z(!0);
                              },
                              className: (0, v.m)(
                                !h && "btn-primary btn-primary-landing",
                                r,
                                u
                              ),
                              "data-name": "button-action-with-qr",
                              children: g,
                            }),
                            (0, n.jsx)(I, {
                              isOpen: U,
                              onDismiss: () => {
                                z(!1);
                              },
                              isDark: !0,
                              title: C.Title,
                              shortTitle: C.ShortTitle,
                              promotionNewUser: T
                                ? (0, n.jsx)(M, {
                                    data: T,
                                    isMobileDevice: O,
                                    handleNewUserTracking: D,
                                  })
                                : "",
                              qrImage: (0, n.jsx)(y(), {
                                value: H(),
                                size: 215,
                                imageSettings: {
                                  src: "https://homepage.momocdn.net/pwa/images/logoMomox50.png",
                                  x: null,
                                  y: null,
                                  height: 50,
                                  width: 50,
                                  excavate: !0,
                                },
                                level: "H",
                              }),
                            }),
                          ],
                        }),
                  }),
                  L &&
                    (0, n.jsx)(Z.default, {
                      isOpen: O,
                      onDismiss: () => {
                        R(!1);
                      },
                      clusterClassName: "overflow-hidden",
                      children: (0, n.jsxs)("div", {
                        className: "overflow-y-auto",
                        style: { background: "#FFF9FB" },
                        children: [
                          (0, n.jsxs)("div", {
                            className: "px-4 pt-6 text-center",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "flex flex-wrap justify-center",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "relative mb-2 h-24 w-24 ",
                                    children: (0, n.jsx)(k(), {
                                      src: "https://homepage.momocdn.net/img/momo-upload-api-230730215651-638263510119530922.png",
                                      alt: g,
                                      width: 151,
                                      height: 151,
                                    }),
                                  }),
                                  (0, n.jsx)("h4", {
                                    className: "mb-2 w-full text-base",
                                    children:
                                      "Truy cập v\xe0o ứng dụng MoMo để",
                                  }),
                                ],
                              }),
                              (0, n.jsx)("button", {
                                onClick: handleNavigationCTA,
                                rel: "noreferrer",
                                className: (0, v.m)(
                                  !h &&
                                    "cta_modal_mb inline-block w-auto rounded-md bg-pink-600 px-5 py-2 font-semibold text-white"
                                ),
                                children: g,
                              }),
                            ],
                          }),
                          (0, n.jsx)(M, {
                            data: T,
                            isMobileDevice: O,
                            handleNewUserTracking: D,
                          }),
                        ],
                      }),
                    }),
                ],
              })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  a &&
                    (0, n.jsx)("span", {
                      className: "mr-2 mt-1",
                      children: (0, c.ZP)(a),
                    }),
                  b &&
                    (b.startsWith("#")
                      ? (0, n.jsx)(d.Z, {
                          href: b,
                          rel: "noreferrer",
                          offset: 50,
                          children: (0, n.jsx)("span", {
                            className: (0, A.Z)(getCssClassByType(), u),
                            "data-name": "button-action-without-qr",
                            children: g,
                          }),
                        })
                      : (0, n.jsx)("button", {
                          onClick: handleNavigationCTA,
                          rel: "noreferrer",
                          className: (0, v.m)(
                            getCssClassByType(),
                            !a && O && "mx-auto",
                            m,
                            u
                          ),
                          "data-name": "button-action-without-qr",
                          children: g,
                        })),
                ],
              })
          : null;
      };
    },
    89241: function (e, t, a) {
      var n = a(85893),
        o = a(85463),
        r = a.n(o);
      a(67294);
      var l = a(91827),
        c = a(5085),
        s = a(35067);
      t.Z = function (e) {
        let {
            children: t,
            link: a,
            isViewApp: o = !1,
            openNewTab: i = !1,
            onTracking: d = null,
            onClick: m,
          } = e,
          [, u] = (0, l.Z)(a),
          { shareFacebookApp: p, shareOtherApp: h } = (0, s.p)(),
          onShareLinkedIn = () => {
            window.open(
              "https://www.linkedin.com/sharing/share-offsite/?url=".concat(
                window.encodeURIComponent(a)
              ),
              "_blank",
              "width=560,height=540,toolbar=0,menubar=0,location=0"
            );
          },
          handleTrackShare = () => {
            d && d();
          };
        return (0, n.jsxs)("div", {
          className: "jsx-da04c39a8a0d94ec relative",
          children: [
            (0, n.jsxs)(c.v2, {
              children: [
                (0, n.jsx)(c.j2, {
                  className: "button-share",
                  onClick: m,
                  children:
                    t ||
                    (0, n.jsxs)("div", {
                      className:
                        "jsx-da04c39a8a0d94ec  button-share-bg flex items-center space-x-1 rounded-3xl border border-gray-200 bg-white py-1 pl-2.5 pr-3 text-md text-gray-600 drop-shadow-sm hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800",
                      children: [
                        (0, n.jsx)("span", {
                          className: "jsx-da04c39a8a0d94ec",
                          children: "Chia sẻ",
                        }),
                        (0, n.jsx)("svg", {
                          width: "24px",
                          height: "24px",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          className: "jsx-da04c39a8a0d94ec h-4 w-4",
                          children: (0, n.jsxs)("g", {
                            className: "jsx-da04c39a8a0d94ec",
                            children: [
                              (0, n.jsx)("path", {
                                fill: "none",
                                d: "M0 0h24v24H0z",
                                className: "jsx-da04c39a8a0d94ec",
                              }),
                              (0, n.jsx)("path", {
                                d: "M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z",
                                className: "jsx-da04c39a8a0d94ec",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                }),
                (0, n.jsx)(c.YI, {
                  className:
                    "dropdown-filter-mobile fadeInDown shadow-level3 absolute right-0 top-full z-10 mt-1 w-[220px] rounded-lg bg-white p-2 focus:outline-none",
                  portal: !1,
                  children: (0, n.jsx)("div", {
                    className: "jsx-da04c39a8a0d94ec arbitrary-element",
                    children: (0, n.jsxs)(c.sd, {
                      className: "grid grid-cols-1 ",
                      children: [
                        (0, n.jsxs)(c.sN, {
                          className:
                            "tracking-engage-btn-copy-code tracking-focus relative cursor-pointer select-none whitespace-nowrap rounded py-2 pl-9 pr-2 text-sm text-gray-600 hover:bg-gray-100",
                          onSelect: () => void u(),
                          onClick: () => {
                            o && handleTrackShare();
                          },
                          children: [
                            "Sao ch\xe9p li\xean kết",
                            " ",
                            (0, n.jsx)("span", {
                              className:
                                "jsx-da04c39a8a0d94ec absolute left-2 top-2",
                              children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                className: "jsx-da04c39a8a0d94ec h-5 w-5",
                                children: (0, n.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
                                  clipRule: "evenodd",
                                  className: "jsx-da04c39a8a0d94ec",
                                }),
                              }),
                            }),
                          ],
                        }),
                        !o &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)(c.sN, {
                                className:
                                  "relative cursor-pointer select-none whitespace-nowrap rounded py-2 pl-9 pr-2 text-sm text-gray-600 hover:bg-gray-100",
                                onSelect: () =>
                                  void window.open(
                                    "https://www.facebook.com/sharer/sharer.php?u=".concat(
                                      window.encodeURIComponent(a)
                                    ),
                                    "_blank",
                                    "width=560,height=340,toolbar=0,menubar=0,location=0"
                                  ),
                                children: [
                                  "Chia sẻ Facebook",
                                  " ",
                                  (0, n.jsx)("span", {
                                    className:
                                      "jsx-da04c39a8a0d94ec absolute left-2 top-2",
                                    children: (0, n.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      fill: "currentColor",
                                      className: "jsx-da04c39a8a0d94ec h-5 w-5",
                                      children: (0, n.jsx)("path", {
                                        d: "M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z",
                                        className: "jsx-da04c39a8a0d94ec",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              i &&
                                (0, n.jsxs)(c.sN, {
                                  className:
                                    "relative cursor-pointer select-none whitespace-nowrap rounded py-2 pl-9 pr-2 text-sm text-gray-600 hover:bg-gray-100",
                                  onSelect: () => void window.open(a, "_blank"),
                                  children: [
                                    "Xem chi tiết",
                                    " ",
                                    (0, n.jsx)("span", {
                                      className:
                                        "jsx-da04c39a8a0d94ec absolute left-2 top-2",
                                      children: (0, n.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "currentColor",
                                        className:
                                          "jsx-da04c39a8a0d94ec h-5 w-5",
                                        children: (0, n.jsx)("path", {
                                          d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
                                          className: "jsx-da04c39a8a0d94ec",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              (0, n.jsxs)(c.sN, {
                                className:
                                  "relative cursor-pointer select-none whitespace-nowrap rounded py-2 pl-9 pr-2 text-sm text-gray-600 hover:bg-gray-100",
                                onSelect: () => onShareLinkedIn(),
                                children: [
                                  "Chia sẻ LinkedIn",
                                  " ",
                                  (0, n.jsx)("span", {
                                    className:
                                      "jsx-da04c39a8a0d94ec absolute left-2 top-2",
                                    children: (0, n.jsx)("svg", {
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      className: "jsx-da04c39a8a0d94ec h-5 w-5",
                                      children: (0, n.jsx)("path", {
                                        d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
                                        className: "jsx-da04c39a8a0d94ec",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        o &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)(c.sN, {
                                className:
                                  "relative cursor-pointer select-none whitespace-nowrap rounded py-2 pl-9 pr-2 text-sm text-gray-600 hover:bg-gray-100",
                                onSelect: () => p(a),
                                onClick: () => {
                                  handleTrackShare();
                                },
                                children: [
                                  " ",
                                  "Chia sẻ Facebook",
                                  " ",
                                  (0, n.jsx)("span", {
                                    className:
                                      "jsx-da04c39a8a0d94ec absolute left-2 top-2",
                                    children: (0, n.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      fill: "currentColor",
                                      className: "jsx-da04c39a8a0d94ec h-5 w-5",
                                      children: (0, n.jsx)("path", {
                                        d: "M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z",
                                        className: "jsx-da04c39a8a0d94ec",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)(c.sN, {
                                className:
                                  "relative cursor-pointer select-none whitespace-nowrap rounded py-2 pl-9 pr-2 text-sm text-gray-600 hover:bg-gray-100",
                                onSelect: () => h(a),
                                onClick: () => {
                                  handleTrackShare();
                                },
                                children: [
                                  " ",
                                  "Chia sẻ kh\xe1c",
                                  " ",
                                  (0, n.jsx)("span", {
                                    className:
                                      "jsx-da04c39a8a0d94ec absolute left-2 top-2",
                                    children: (0, n.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                      className: "jsx-da04c39a8a0d94ec h-5 w-5",
                                      children: (0, n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
                                        className: "jsx-da04c39a8a0d94ec",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(r(), {
              id: "da04c39a8a0d94ec",
              children:
                '.button-share[aria-expanded="true"] .button-share-bg{background-color:var(--gray-200);color:var(--gray-800)}',
            }),
          ],
        });
      };
    },
    72185: function (e, t, a) {
      a.d(t, {
        B: function () {
          return userInAppTracking;
        },
        m: function () {
          return inAppTracking;
        },
      });
      var n = a(88197),
        o = a(73850);
      let inAppTracking = function (e, t) {
          let a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          try {
            let r = { ...t };
            if (a) {
              let e = (0, o.yp)();
              r = { ...r, ...e };
            }
            (r.scope = "web_in_app"), n.Z.trackEvent(e, r);
          } catch (e) {}
        },
        userInAppTracking = (e, t, a) => {
          try {
            n.Z.getProfile((n) => {
              let { userId: o } = n || {},
                r = { ...t };
              (r.userId = o), inAppTracking(e, r, a);
            });
          } catch (e) {}
        };
    },
    35067: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return momo_clientUrlUc;
        },
        p: function () {
          return momoPlatformApi;
        },
      });
      var momo_clientUrlUc = () => {
          let e = document.querySelectorAll("a[data-redirect-uc]");
          e &&
            e.forEach((e) => {
              let t = e.getAttribute("data-redirect-uc");
              if (!t || e.classList.contains("data-redirect-uc")) return;
              let a = e.getAttribute("href"),
                n = location.href,
                o = n.indexOf("?");
              if (
                ((o = o > -1 ? n.substring(o + 1) : ""),
                !a || "javascript:void(0)" == a)
              )
                return;
              (t = encodeURIComponent(t)),
                (a = encodeURIComponent(a)),
                (n = encodeURIComponent(n));
              let r = "/redirect-cta?uc="
                .concat(t, "&to=")
                .concat(a, "&from=")
                .concat(n)
                .concat(o ? "&".concat(o) : "");
              e.setAttribute("href", r), e.classList.add("data-redirect-uc");
            });
        },
        n = a(88197);
      function momoPlatformApi() {
        return {
          shareFacebookApp: (e) => {
            if (e)
              try {
                n.Z.shareFacebook({ link: e }),
                  window.ReactNativeWebView.postMessage(
                    JSON.stringify({ action: "shareFacebookUrl", value: e })
                  );
              } catch (e) {}
          },
          shareOtherApp: (e) => {
            if (e)
              try {
                n.Z.share({ message: e }),
                  window.ReactNativeWebView.postMessage(
                    JSON.stringify({ action: "shareContent", value: e })
                  );
              } catch (e) {}
          },
          exitApp: () => {
            try {
              n.Z.goBack();
            } catch (e) {}
          },
        };
      }
    },
    13185: function (e, t, a) {
      var n = a(67294);
      let o = n.useLayoutEffect;
      t.Z = o;
    },
    91827: function (e, t, a) {
      var n = a(67294),
        o = a(1751);
      t.Z = (e) => {
        let copyToClipboard = async (e) => {
            let t = document.createElement("textarea");
            (t.value = e),
              t.setAttribute("readonly", ""),
              (t.style.position = "absolute"),
              (t.style.top = "".concat(window.pageYOffset, "px")),
              (t.style.left = "-9999px"),
              document.body.appendChild(t);
            let a =
              document.getSelection().rangeCount > 0 &&
              document.getSelection().getRangeAt(0);
            t.select(),
              t.focus(),
              document.body.removeChild(t),
              a &&
                (document.getSelection().removeAllRanges(),
                document.getSelection().addRange(a));
            try {
              return (
                await navigator.clipboard.writeText(e),
                (0, o.Z)("Copy nội dung th\xe0nh c\xf4ng.", { type: 2 }),
                !0
              );
            } catch (e) {
              return (0, o.Z)("Copy nội dung kh\xf4ng th\xe0nh c\xf4ng."), !1;
            }
          },
          [t, a] = (0, n.useState)(!1),
          r = (0, n.useCallback)(() => {
            t || a(copyToClipboard(e));
          }, [e]);
        return (0, n.useEffect)(() => () => a(!1), [e]), [t, r];
      };
    },
    8447: function (e, t, a) {
      var n = a(67294);
      t.Z = (e, t) => {
        let a = (0, n.useRef)(!0);
        (0, n.useEffect)(() => {
          if (a.current) return;
          let t = e();
          return t;
        }, t),
          (0, n.useEffect)(() => {
            a.current = !1;
          }, []);
      };
    },
    98524: function (e, t, a) {
      a.d(t, {
        o: function () {
          return useHasMountedWithLayoutEffect;
        },
      });
      var n = a(67294),
        o = a(13185);
      let useHasMountedWithLayoutEffect = () => {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, o.Z)(() => {
            t(!0);
          }, []),
          { hasMounted: e }
        );
      };
    },
    76231: function (e, t, a) {
      var n = a(67294),
        o = a(11163),
        r = a(21910),
        l = a(34317);
      t.Z = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          a = (0, o.useRouter)(),
          [c, s] = (0, n.useState)(t);
        return (
          (0, r.L)(() => {
            let t = !1;
            (0, l.y)() && e && (t = !0),
              (null == a ? void 0 : a.asPath.indexOf("view=app")) > -1 &&
                e &&
                (t = !0),
              s(t),
              t && document.body.classList.add("in-viewapp");
          }, []),
          c
        );
      };
    },
    73850: function (e, t, a) {
      a.d(t, {
        Ao: function () {
          return sampleOne;
        },
        C3: function () {
          return convertDayFromDate;
        },
        CQ: function () {
          return removeVietnameseTones;
        },
        D9: function () {
          return createImageElementTrace;
        },
        Dr: function () {
          return checkOperatingSystem;
        },
        Ds: function () {
          return debounce;
        },
        KQ: function () {
          return removeHashAndQuery;
        },
        MX: function () {
          return random;
        },
        Ox: function () {
          return generateId;
        },
        UP: function () {
          return sample;
        },
        Vt: function () {
          return stripHtml;
        },
        n8: function () {
          return removeAccents;
        },
        yp: function () {
          return getUrlParamsObject;
        },
      });
      var n = a(20466),
        o = a(23855);
      let sampleOne = (e) => e[Math.floor(Math.random() * e.length)],
        sample = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            a = [];
          for (let n = 0; n < t; n++) a.push(sampleOne(e));
          return a;
        },
        random = (e, t) => Math.floor(Math.random() * (t - e)) + e,
        debounce = function (e, t) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          return function () {
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            window.clearTimeout(a),
              (a = setTimeout(() => {
                e.apply(null, o);
              }, t));
          };
        },
        generateId = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
          return sample(
            [
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
            ],
            e
          ).join("");
        },
        convertDayFromDate = (e) => {
          let t = (0, n.default)((0, o.default)(e));
          return 0 == t ? "CN" : 6 == t ? "T7" : "T".concat(t + 1);
        },
        removeAccents = (e) =>
          e
            ? e
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
            : "",
        checkOperatingSystem = () => {
          let e = navigator.userAgent || navigator.vendor || window.opera;
          return /android/i.test(e)
            ? "android"
            : /iPad|iPhone|iPod/.test(e) && !window.MSStream
            ? "ios"
            : "other";
        },
        getUrlParamsObject = () => {
          let e = /([^&=]+)=?([^&]*)/g,
            decode = (e) => decodeURIComponent(e.replace(/\+/g, " "));
          return (() => {
            let t = window.location.search,
              a = {},
              n = null;
            if (t)
              for (
                "?" == t.substr(0, 1) && (t = t.substr(1));
                (n = e.exec(t));

              ) {
                let e = decode(n[1]),
                  t = decode(n[2]);
                a[e] = t;
              }
            return a;
          })();
        },
        removeHashAndQuery = (e) => {
          let t = e.indexOf("?"),
            a = e;
          -1 !== t && (a = e.substr(0, t));
          let n = a.indexOf("#");
          return -1 !== n && (a = a.substr(0, n)), a;
        },
        stripHtml = (e) => {
          if (!e) return !1;
          let t = e.replace(/<[^>]+>/g, "");
          return t;
        },
        createImageElementTrace = (e) => {
          if (!(null == e ? void 0 : e.Id) || !(null == e ? void 0 : e.Type))
            return !1;
          let t = new Image();
          return (
            (t.src = ""
              .concat("https://aws.momo.vn/momovn-api/public", "/trace/")
              .concat(e.Type, "/")
              .concat(e.Id)),
            (t.style.cssText =
              "position: absolute; display: block; z-index: -10000; left: -100px; top: -100px; height: 1px; width: 1px;"),
            t
          );
        },
        removeVietnameseTones = (e) =>
          (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
            (e = (e = (e = (e = (e = e.replace(
              /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
              "a"
            )).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(
              /ì|í|ị|ỉ|ĩ/g,
              "i"
            )).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(
              /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,
              "u"
            )).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(
            /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,
            "A"
          )).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(
            /Ì|Í|Ị|Ỉ|Ĩ/g,
            "I"
          )).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(
            /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,
            "U"
          )).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(
            /\u0300|\u0301|\u0303|\u0309|\u0323/g,
            ""
          )).replace(/\u02C6|\u0306|\u031B/g, "")).replace(
            / + /g,
            " "
          )).trim()).replace(
            /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
            " "
          ));
    },
  },
]);
