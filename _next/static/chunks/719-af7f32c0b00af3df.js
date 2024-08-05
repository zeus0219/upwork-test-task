"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [719],
  {
    30719: function (e, t, s) {
      s.d(t, {
        tq: function () {
          return o;
        },
        o5: function () {
          return d;
        },
      });
      var i = s(67294),
        a = s(88116);
      function isObject(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function extend(e, t) {
        let s = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > s.indexOf(e))
          .forEach((s) => {
            void 0 === e[s]
              ? (e[s] = t[s])
              : isObject(t[s]) && isObject(e[s]) && Object.keys(t[s]).length > 0
              ? t[s].__swiper__
                ? (e[s] = t[s])
                : extend(e[s], t[s])
              : (e[s] = t[s]);
          });
      }
      function needsNavigation(e = {}) {
        return (
          e.navigation &&
          void 0 === e.navigation.nextEl &&
          void 0 === e.navigation.prevEl
        );
      }
      function needsPagination(e = {}) {
        return e.pagination && void 0 === e.pagination.el;
      }
      function needsScrollbar(e = {}) {
        return e.scrollbar && void 0 === e.scrollbar.el;
      }
      function uniqueClasses(e = "") {
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          s = [];
        return (
          t.forEach((e) => {
            0 > s.indexOf(e) && s.push(e);
          }),
          s.join(" ")
        );
      }
      let r = [
          "modules",
          "init",
          "_direction",
          "touchEventsTarget",
          "initialSlide",
          "_speed",
          "cssMode",
          "updateOnWindowResize",
          "resizeObserver",
          "nested",
          "focusableElements",
          "_enabled",
          "_width",
          "_height",
          "preventInteractionOnTransition",
          "userAgent",
          "url",
          "_edgeSwipeDetection",
          "_edgeSwipeThreshold",
          "_freeMode",
          "_autoHeight",
          "setWrapperSize",
          "virtualTranslate",
          "_effect",
          "breakpoints",
          "_spaceBetween",
          "_slidesPerView",
          "maxBackfaceHiddenSlides",
          "_grid",
          "_slidesPerGroup",
          "_slidesPerGroupSkip",
          "_slidesPerGroupAuto",
          "_centeredSlides",
          "_centeredSlidesBounds",
          "_slidesOffsetBefore",
          "_slidesOffsetAfter",
          "normalizeSlideIndex",
          "_centerInsufficientSlides",
          "_watchOverflow",
          "roundLengths",
          "touchRatio",
          "touchAngle",
          "simulateTouch",
          "_shortSwipes",
          "_longSwipes",
          "longSwipesRatio",
          "longSwipesMs",
          "_followFinger",
          "allowTouchMove",
          "_threshold",
          "touchMoveStopPropagation",
          "touchStartPreventDefault",
          "touchStartForcePreventDefault",
          "touchReleaseOnEdges",
          "uniqueNavElements",
          "_resistance",
          "_resistanceRatio",
          "_watchSlidesProgress",
          "_grabCursor",
          "preventClicks",
          "preventClicksPropagation",
          "_slideToClickedSlide",
          "_preloadImages",
          "updateOnImagesReady",
          "_loop",
          "_loopAdditionalSlides",
          "_loopedSlides",
          "_loopedSlidesLimit",
          "_loopFillGroupWithBlank",
          "loopPreventsSlide",
          "_rewind",
          "_allowSlidePrev",
          "_allowSlideNext",
          "_swipeHandler",
          "_noSwiping",
          "noSwipingClass",
          "noSwipingSelector",
          "passiveListeners",
          "containerModifierClass",
          "slideClass",
          "slideBlankClass",
          "slideActiveClass",
          "slideDuplicateActiveClass",
          "slideVisibleClass",
          "slideDuplicateClass",
          "slideNextClass",
          "slideDuplicateNextClass",
          "slidePrevClass",
          "slideDuplicatePrevClass",
          "wrapperClass",
          "runCallbacksOnInit",
          "observer",
          "observeParents",
          "observeSlideChildren",
          "a11y",
          "_autoplay",
          "_controller",
          "coverflowEffect",
          "cubeEffect",
          "fadeEffect",
          "flipEffect",
          "creativeEffect",
          "cardsEffect",
          "hashNavigation",
          "history",
          "keyboard",
          "lazy",
          "mousewheel",
          "_navigation",
          "_pagination",
          "parallax",
          "_scrollbar",
          "_thumbs",
          "virtual",
          "zoom",
        ],
        calcLoopedSlides = (e, t) => {
          let s = t.slidesPerView;
          if (t.breakpoints) {
            let e = a.ZP.prototype.getBreakpoint(t.breakpoints),
              i = e in t.breakpoints ? t.breakpoints[e] : void 0;
            i && i.slidesPerView && (s = i.slidesPerView);
          }
          let i = Math.ceil(parseFloat(t.loopedSlides || s, 10));
          return (
            (i += t.loopAdditionalSlides) > e.length &&
              t.loopedSlidesLimit &&
              (i = e.length),
            i
          );
        };
      function isChildSwiperSlide(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      let updateOnVirtualData = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function useIsomorphicLayoutEffect(e, t) {
        return "undefined" == typeof window
          ? (0, i.useEffect)(e, t)
          : (0, i.useLayoutEffect)(e, t);
      }
      let n = (0, i.createContext)(null),
        l = (0, i.createContext)(null);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                  Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      let o = (0, i.forwardRef)(function (e, t) {
        let {
            className: s,
            tag: n = "div",
            wrapperTag: o = "div",
            children: d,
            onSwiper: p,
            ...c
          } = void 0 === e ? {} : e,
          u = !1,
          [h, m] = (0, i.useState)("swiper"),
          [f, g] = (0, i.useState)(null),
          [v, w] = (0, i.useState)(!1),
          b = (0, i.useRef)(!1),
          y = (0, i.useRef)(null),
          C = (0, i.useRef)(null),
          _ = (0, i.useRef)(null),
          S = (0, i.useRef)(null),
          T = (0, i.useRef)(null),
          x = (0, i.useRef)(null),
          E = (0, i.useRef)(null),
          $ = (0, i.useRef)(null),
          {
            params: M,
            passedParams: k,
            rest: P,
            events: O,
          } = (function (e = {}, t = !0) {
            let s = { on: {} },
              i = {},
              n = {};
            extend(s, a.ZP.defaults),
              extend(s, a.ZP.extendedDefaults),
              (s._emitClasses = !0),
              (s.init = !1);
            let l = {},
              o = r.map((e) => e.replace(/_/, "")),
              d = Object.assign({}, e);
            return (
              Object.keys(d).forEach((a) => {
                void 0 !== e[a] &&
                  (o.indexOf(a) >= 0
                    ? isObject(e[a])
                      ? ((s[a] = {}),
                        (n[a] = {}),
                        extend(s[a], e[a]),
                        extend(n[a], e[a]))
                      : ((s[a] = e[a]), (n[a] = e[a]))
                    : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a]
                    ? t
                      ? (i[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (s.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                    : (l[a] = e[a]));
              }),
              ["navigation", "pagination", "scrollbar"].forEach((e) => {
                !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e];
              }),
              { params: s, passedParams: n, rest: l, events: i }
            );
          })(c),
          { slides: L, slots: I } = (function (e) {
            let t = [],
              s = {
                "container-start": [],
                "container-end": [],
                "wrapper-start": [],
                "wrapper-end": [],
              };
            return (
              i.Children.toArray(e).forEach((e) => {
                if (isChildSwiperSlide(e)) t.push(e);
                else if (e.props && e.props.slot && s[e.props.slot])
                  s[e.props.slot].push(e);
                else if (e.props && e.props.children) {
                  let a = (function processChildren(e) {
                    let t = [];
                    return (
                      i.Children.toArray(e).forEach((e) => {
                        isChildSwiperSlide(e)
                          ? t.push(e)
                          : e.props &&
                            e.props.children &&
                            processChildren(e.props.children).forEach((e) =>
                              t.push(e)
                            );
                      }),
                      t
                    );
                  })(e.props.children);
                  a.length > 0
                    ? a.forEach((e) => t.push(e))
                    : s["container-end"].push(e);
                } else s["container-end"].push(e);
              }),
              { slides: t, slots: s }
            );
          })(d),
          onBeforeBreakpoint = () => {
            w(!v);
          };
        Object.assign(M.on, {
          _containerClasses(e, t) {
            m(t);
          },
        });
        let initSwiper = () => {
          if (
            (Object.assign(M.on, O),
            (u = !0),
            (C.current = new a.ZP(M)),
            (C.current.loopCreate = () => {}),
            (C.current.loopDestroy = () => {}),
            M.loop && (C.current.loopedSlides = calcLoopedSlides(L, M)),
            C.current.virtual && C.current.params.virtual.enabled)
          ) {
            C.current.virtual.slides = L;
            let e = {
              cache: !1,
              slides: L,
              renderExternal: g,
              renderExternalUpdate: !1,
            };
            extend(C.current.params.virtual, e),
              extend(C.current.originalParams.virtual, e);
          }
        };
        y.current || initSwiper(),
          C.current && C.current.on("_beforeBreakpoint", onBeforeBreakpoint);
        let attachEvents = () => {
            !u &&
              O &&
              C.current &&
              Object.keys(O).forEach((e) => {
                C.current.on(e, O[e]);
              });
          },
          detachEvents = () => {
            O &&
              C.current &&
              Object.keys(O).forEach((e) => {
                C.current.off(e, O[e]);
              });
          };
        return (
          (0, i.useEffect)(() => () => {
            C.current && C.current.off("_beforeBreakpoint", onBeforeBreakpoint);
          }),
          (0, i.useEffect)(() => {
            !b.current &&
              C.current &&
              (C.current.emitSlidesClasses(), (b.current = !0));
          }),
          useIsomorphicLayoutEffect(() => {
            if ((t && (t.current = y.current), y.current))
              return (
                C.current.destroyed && initSwiper(),
                (function (
                  {
                    el: e,
                    nextEl: t,
                    prevEl: s,
                    paginationEl: i,
                    scrollbarEl: a,
                    swiper: r,
                  },
                  n
                ) {
                  needsNavigation(n) &&
                    t &&
                    s &&
                    ((r.params.navigation.nextEl = t),
                    (r.originalParams.navigation.nextEl = t),
                    (r.params.navigation.prevEl = s),
                    (r.originalParams.navigation.prevEl = s)),
                    needsPagination(n) &&
                      i &&
                      ((r.params.pagination.el = i),
                      (r.originalParams.pagination.el = i)),
                    needsScrollbar(n) &&
                      a &&
                      ((r.params.scrollbar.el = a),
                      (r.originalParams.scrollbar.el = a)),
                    r.init(e);
                })(
                  {
                    el: y.current,
                    nextEl: T.current,
                    prevEl: x.current,
                    paginationEl: E.current,
                    scrollbarEl: $.current,
                    swiper: C.current,
                  },
                  M
                ),
                p && p(C.current),
                () => {
                  C.current &&
                    !C.current.destroyed &&
                    C.current.destroy(!0, !1);
                }
              );
          }, []),
          useIsomorphicLayoutEffect(() => {
            attachEvents();
            let e = (function (e, t, s, i, a) {
              let n = [];
              if (!t) return n;
              let addKey = (e) => {
                0 > n.indexOf(e) && n.push(e);
              };
              if (s && i) {
                let e = i.map(a),
                  t = s.map(a);
                e.join("") !== t.join("") && addKey("children"),
                  i.length !== s.length && addKey("children");
              }
              let l = r
                .filter((e) => "_" === e[0])
                .map((e) => e.replace(/_/, ""));
              return (
                l.forEach((s) => {
                  if (s in e && s in t) {
                    if (isObject(e[s]) && isObject(t[s])) {
                      let i = Object.keys(e[s]),
                        a = Object.keys(t[s]);
                      i.length !== a.length
                        ? addKey(s)
                        : (i.forEach((i) => {
                            e[s][i] !== t[s][i] && addKey(s);
                          }),
                          a.forEach((i) => {
                            e[s][i] !== t[s][i] && addKey(s);
                          }));
                    } else e[s] !== t[s] && addKey(s);
                  }
                }),
                n
              );
            })(k, _.current, L, S.current, (e) => e.key);
            return (
              (_.current = k),
              (S.current = L),
              e.length &&
                C.current &&
                !C.current.destroyed &&
                (function ({
                  swiper: e,
                  slides: t,
                  passedParams: s,
                  changedParams: i,
                  nextEl: a,
                  prevEl: r,
                  scrollbarEl: n,
                  paginationEl: l,
                }) {
                  let o, d, p, c, u;
                  let h = i.filter(
                      (e) => "children" !== e && "direction" !== e
                    ),
                    {
                      params: m,
                      pagination: f,
                      navigation: g,
                      scrollbar: v,
                      virtual: w,
                      thumbs: b,
                    } = e;
                  i.includes("thumbs") &&
                    s.thumbs &&
                    s.thumbs.swiper &&
                    m.thumbs &&
                    !m.thumbs.swiper &&
                    (o = !0),
                    i.includes("controller") &&
                      s.controller &&
                      s.controller.control &&
                      m.controller &&
                      !m.controller.control &&
                      (d = !0),
                    i.includes("pagination") &&
                      s.pagination &&
                      (s.pagination.el || l) &&
                      (m.pagination || !1 === m.pagination) &&
                      f &&
                      !f.el &&
                      (p = !0),
                    i.includes("scrollbar") &&
                      s.scrollbar &&
                      (s.scrollbar.el || n) &&
                      (m.scrollbar || !1 === m.scrollbar) &&
                      v &&
                      !v.el &&
                      (c = !0),
                    i.includes("navigation") &&
                      s.navigation &&
                      (s.navigation.prevEl || r) &&
                      (s.navigation.nextEl || a) &&
                      (m.navigation || !1 === m.navigation) &&
                      g &&
                      !g.prevEl &&
                      !g.nextEl &&
                      (u = !0);
                  let destroyModule = (t) => {
                    e[t] &&
                      (e[t].destroy(),
                      "navigation" === t
                        ? ((m[t].prevEl = void 0),
                          (m[t].nextEl = void 0),
                          (e[t].prevEl = void 0),
                          (e[t].nextEl = void 0))
                        : ((m[t].el = void 0), (e[t].el = void 0)));
                  };
                  if (
                    (h.forEach((e) => {
                      if (isObject(m[e]) && isObject(s[e])) extend(m[e], s[e]);
                      else {
                        let t = s[e];
                        (!0 === t || !1 === t) &&
                        ("navigation" === e ||
                          "pagination" === e ||
                          "scrollbar" === e)
                          ? !1 === t && destroyModule(e)
                          : (m[e] = s[e]);
                      }
                    }),
                    h.includes("controller") &&
                      !d &&
                      e.controller &&
                      e.controller.control &&
                      m.controller &&
                      m.controller.control &&
                      (e.controller.control = m.controller.control),
                    i.includes("children") && t && w && m.virtual.enabled
                      ? ((w.slides = t), w.update(!0))
                      : i.includes("children") &&
                        e.lazy &&
                        e.params.lazy.enabled &&
                        e.lazy.load(),
                    o)
                  ) {
                    let e = b.init();
                    e && b.update(!0);
                  }
                  d && (e.controller.control = m.controller.control),
                    p &&
                      (l && (m.pagination.el = l),
                      f.init(),
                      f.render(),
                      f.update()),
                    c &&
                      (n && (m.scrollbar.el = n),
                      v.init(),
                      v.updateSize(),
                      v.setTranslate()),
                    u &&
                      (a && (m.navigation.nextEl = a),
                      r && (m.navigation.prevEl = r),
                      g.init(),
                      g.update()),
                    i.includes("allowSlideNext") &&
                      (e.allowSlideNext = s.allowSlideNext),
                    i.includes("allowSlidePrev") &&
                      (e.allowSlidePrev = s.allowSlidePrev),
                    i.includes("direction") &&
                      e.changeDirection(s.direction, !1),
                    e.update();
                })({
                  swiper: C.current,
                  slides: L,
                  passedParams: k,
                  changedParams: e,
                  nextEl: T.current,
                  prevEl: x.current,
                  scrollbarEl: $.current,
                  paginationEl: E.current,
                }),
              () => {
                detachEvents();
              }
            );
          }),
          useIsomorphicLayoutEffect(() => {
            updateOnVirtualData(C.current);
          }, [f]),
          i.createElement(
            n,
            _extends(
              { ref: y, className: uniqueClasses(`${h}${s ? ` ${s}` : ""}`) },
              P
            ),
            i.createElement(
              l.Provider,
              { value: C.current },
              I["container-start"],
              i.createElement(
                o,
                { className: "swiper-wrapper" },
                I["wrapper-start"],
                M.virtual
                  ? (function (e, t, s) {
                      if (!s) return null;
                      let a = e.isHorizontal()
                        ? {
                            [e.rtlTranslate
                              ? "right"
                              : "left"]: `${s.offset}px`,
                          }
                        : { top: `${s.offset}px` };
                      return t
                        .filter((e, t) => t >= s.from && t <= s.to)
                        .map((t) => i.cloneElement(t, { swiper: e, style: a }));
                    })(C.current, L, f)
                  : !M.loop || (C.current && C.current.destroyed)
                  ? L.map((e) => i.cloneElement(e, { swiper: C.current }))
                  : (function (e, t, s) {
                      let a = t.map((t, s) =>
                        i.cloneElement(t, {
                          swiper: e,
                          "data-swiper-slide-index": s,
                        })
                      );
                      function duplicateSlide(e, t, a) {
                        return i.cloneElement(e, {
                          key: `${e.key}-duplicate-${t}-${a}`,
                          className: `${e.props.className || ""} ${
                            s.slideDuplicateClass
                          }`,
                        });
                      }
                      if (s.loopFillGroupWithBlank) {
                        let e =
                          s.slidesPerGroup - (a.length % s.slidesPerGroup);
                        if (e !== s.slidesPerGroup)
                          for (let t = 0; t < e; t += 1) {
                            let e = i.createElement("div", {
                              className: `${s.slideClass} ${s.slideBlankClass}`,
                            });
                            a.push(e);
                          }
                      }
                      "auto" !== s.slidesPerView ||
                        s.loopedSlides ||
                        (s.loopedSlides = a.length);
                      let r = calcLoopedSlides(a, s),
                        n = [],
                        l = [];
                      for (let e = 0; e < r; e += 1) {
                        let t = e - Math.floor(e / a.length) * a.length;
                        l.push(duplicateSlide(a[t], e, "append")),
                          n.unshift(
                            duplicateSlide(a[a.length - t - 1], e, "prepend")
                          );
                      }
                      return e && (e.loopedSlides = r), [...n, ...a, ...l];
                    })(C.current, L, M),
                I["wrapper-end"]
              ),
              needsNavigation(M) &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement("div", {
                    ref: x,
                    className: "swiper-button-prev",
                  }),
                  i.createElement("div", {
                    ref: T,
                    className: "swiper-button-next",
                  })
                ),
              needsScrollbar(M) &&
                i.createElement("div", {
                  ref: $,
                  className: "swiper-scrollbar",
                }),
              needsPagination(M) &&
                i.createElement("div", {
                  ref: E,
                  className: "swiper-pagination",
                }),
              I["container-end"]
            )
          )
        );
      });
      function swiper_slide_extends() {
        return (swiper_slide_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var i in s)
                  Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      o.displayName = "Swiper";
      let d = (0, i.forwardRef)(function (e, t) {
        let {
            tag: s = "div",
            children: a,
            className: r = "",
            swiper: l,
            zoom: o,
            virtualIndex: d,
            ...p
          } = void 0 === e ? {} : e,
          c = (0, i.useRef)(null),
          [u, h] = (0, i.useState)("swiper-slide");
        function updateClasses(e, t, s) {
          t === c.current && h(s);
        }
        useIsomorphicLayoutEffect(() => {
          if ((t && (t.current = c.current), c.current && l)) {
            if (l.destroyed) {
              "swiper-slide" !== u && h("swiper-slide");
              return;
            }
            return (
              l.on("_slideClass", updateClasses),
              () => {
                l && l.off("_slideClass", updateClasses);
              }
            );
          }
        }),
          useIsomorphicLayoutEffect(() => {
            l && c.current && !l.destroyed && h(l.getSlideClasses(c.current));
          }, [l]);
        let m = {
            isActive:
              u.indexOf("swiper-slide-active") >= 0 ||
              u.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: u.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              u.indexOf("swiper-slide-prev") >= 0 ||
              u.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              u.indexOf("swiper-slide-next") >= 0 ||
              u.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          renderChildren = () => ("function" == typeof a ? a(m) : a);
        return i.createElement(
          s,
          swiper_slide_extends(
            {
              ref: c,
              className: uniqueClasses(`${u}${r ? ` ${r}` : ""}`),
              "data-swiper-slide-index": d,
            },
            p
          ),
          i.createElement(
            n.Provider,
            { value: m },
            o
              ? i.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof o ? o : void 0,
                  },
                  renderChildren()
                )
              : renderChildren()
          )
        );
      });
      d.displayName = "SwiperSlide";
    },
    88116: function (e, t, s) {
      let i, a, r;
      function isObject(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function extend(e = {}, t = {}) {
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : isObject(t[s]) &&
              isObject(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              extend(e[s], t[s]);
        });
      }
      s.d(t, {
        pt: function () {
          return Autoplay;
        },
        lI: function () {
          return EffectCoverflow;
        },
        xW: function () {
          return EffectFade;
        },
        Rv: function () {
          return freeMode;
        },
        oM: function () {
          return Lazy;
        },
        W_: function () {
          return Navigation;
        },
        tl: function () {
          return Pagination;
        },
        o3: function () {
          return Thumb;
        },
        ZP: function () {
          return m;
        },
      });
      let n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function ssr_window_esm_getDocument() {
        let e = "undefined" != typeof document ? document : {};
        return extend(e, n), e;
      }
      let l = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function ssr_window_esm_getWindow() {
        let e = "undefined" != typeof window ? window : {};
        return extend(e, l), e;
      }
      let Dom7 = class Dom7 extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                let t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      };
      function arrayFlat(e = []) {
        let t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...arrayFlat(e)) : t.push(e);
          }),
          t
        );
      }
      function arrayFilter(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function dom7_esm_$(e, t) {
        let s = ssr_window_esm_getWindow(),
          i = ssr_window_esm_getDocument(),
          a = [];
        if (!t && e instanceof Dom7) return e;
        if (!e) return new Dom7(a);
        if ("string" == typeof e) {
          let s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let e = "div";
            0 === s.indexOf("<li") && (e = "ul"),
              0 === s.indexOf("<tr") && (e = "tbody"),
              (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (e = "tr"),
              0 === s.indexOf("<tbody") && (e = "table"),
              0 === s.indexOf("<option") && (e = "select");
            let t = i.createElement(e);
            t.innerHTML = s;
            for (let e = 0; e < t.childNodes.length; e += 1)
              a.push(t.childNodes[e]);
          } else
            a = (function (e, t) {
              if ("string" != typeof e) return [e];
              let s = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) s.push(i[e]);
              return s;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === s || e === i) a.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof Dom7) return e;
          a = e;
        }
        return new Dom7(
          (function (e) {
            let t = [];
            for (let s = 0; s < e.length; s += 1)
              -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
          })(a)
        );
      }
      dom7_esm_$.fn = Dom7.prototype;
      let o = "resize scroll".split(" ");
      function shortcut(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              0 > o.indexOf(e) &&
                (e in this[t] ? this[t][e]() : dom7_esm_$(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      shortcut("click"),
        shortcut("blur"),
        shortcut("focus"),
        shortcut("focusin"),
        shortcut("focusout"),
        shortcut("keyup"),
        shortcut("keydown"),
        shortcut("keypress"),
        shortcut("submit"),
        shortcut("change"),
        shortcut("mousedown"),
        shortcut("mousemove"),
        shortcut("mouseup"),
        shortcut("mouseenter"),
        shortcut("mouseleave"),
        shortcut("mouseout"),
        shortcut("mouseover"),
        shortcut("touchstart"),
        shortcut("touchend"),
        shortcut("touchmove"),
        shortcut("resize"),
        shortcut("scroll");
      let d = {
        addClass: function (...e) {
          let t = arrayFlat(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          let t = arrayFlat(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          let t = arrayFlat(e.map((e) => e.split(" ")));
          return (
            arrayFilter(
              this,
              (e) => t.filter((t) => e.classList.contains(t)).length > 0
            ).length > 0
          );
        },
        toggleClass: function (...e) {
          let t = arrayFlat(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 == arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 == arguments.length) this[s].setAttribute(e, t);
            else
              for (let t in e)
                (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let t,
            [s, i, a, r] = e;
          function handleLiveEvent(e) {
            let t = e.target;
            if (!t) return;
            let s = e.target.dom7EventData || [];
            if ((0 > s.indexOf(e) && s.unshift(e), dom7_esm_$(t).is(i)))
              a.apply(t, s);
            else {
              let e = dom7_esm_$(t).parents();
              for (let t = 0; t < e.length; t += 1)
                dom7_esm_$(e[t]).is(i) && a.apply(e[t], s);
            }
          }
          function handleEvent(e) {
            let t = (e && e.target && e.target.dom7EventData) || [];
            0 > t.indexOf(e) && t.unshift(e), a.apply(this, t);
          }
          "function" == typeof e[1] && (([s, a, r] = e), (i = void 0)),
            r || (r = !1);
          let n = s.split(" ");
          for (let e = 0; e < this.length; e += 1) {
            let s = this[e];
            if (i)
              for (t = 0; t < n.length; t += 1) {
                let e = n[t];
                s.dom7LiveListeners || (s.dom7LiveListeners = {}),
                  s.dom7LiveListeners[e] || (s.dom7LiveListeners[e] = []),
                  s.dom7LiveListeners[e].push({
                    listener: a,
                    proxyListener: handleLiveEvent,
                  }),
                  s.addEventListener(e, handleLiveEvent, r);
              }
            else
              for (t = 0; t < n.length; t += 1) {
                let e = n[t];
                s.dom7Listeners || (s.dom7Listeners = {}),
                  s.dom7Listeners[e] || (s.dom7Listeners[e] = []),
                  s.dom7Listeners[e].push({
                    listener: a,
                    proxyListener: handleEvent,
                  }),
                  s.addEventListener(e, handleEvent, r);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, s, i, a] = e;
          "function" == typeof e[1] && (([t, i, a] = e), (s = void 0)),
            a || (a = !1);
          let r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            let t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              let r;
              let n = this[e];
              if (
                (!s && n.dom7Listeners
                  ? (r = n.dom7Listeners[t])
                  : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]),
                r && r.length)
              )
                for (let e = r.length - 1; e >= 0; e -= 1) {
                  let s = r[e];
                  i && s.listener === i
                    ? (n.removeEventListener(t, s.proxyListener, a),
                      r.splice(e, 1))
                    : i &&
                      s.listener &&
                      s.listener.dom7proxy &&
                      s.listener.dom7proxy === i
                    ? (n.removeEventListener(t, s.proxyListener, a),
                      r.splice(e, 1))
                    : i ||
                      (n.removeEventListener(t, s.proxyListener, a),
                      r.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          let t = ssr_window_esm_getWindow(),
            s = e[0].split(" "),
            i = e[1];
          for (let a = 0; a < s.length; a += 1) {
            let r = s[a];
            for (let s = 0; s < this.length; s += 1) {
              let a = this[s];
              if (t.CustomEvent) {
                let s = new t.CustomEvent(r, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (a.dom7EventData = e.filter((e, t) => t > 0)),
                  a.dispatchEvent(s),
                  (a.dom7EventData = []),
                  delete a.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          let t = this;
          return (
            e &&
              t.on("transitionend", function fireCallBack(s) {
                s.target === this &&
                  (e.call(this, s), t.off("transitionend", fireCallBack));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              let e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              let e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          let e = ssr_window_esm_getWindow();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            let e = ssr_window_esm_getWindow(),
              t = ssr_window_esm_getDocument(),
              s = this[0],
              i = s.getBoundingClientRect(),
              a = t.body,
              r = s.clientTop || a.clientTop || 0,
              n = s.clientLeft || a.clientLeft || 0,
              l = s === e ? e.scrollY : s.scrollTop,
              o = s === e ? e.scrollX : s.scrollLeft;
            return { top: i.top + l - r, left: i.left + o - n };
          }
          return null;
        },
        css: function (e, t) {
          let s;
          let i = ssr_window_esm_getWindow();
          if (1 == arguments.length) {
            if ("string" == typeof e) {
              if (this[0])
                return i.getComputedStyle(this[0], null).getPropertyValue(e);
            } else {
              for (s = 0; s < this.length; s += 1)
                for (let t in e) this[s].style[t] = e[t];
              return this;
            }
          }
          if (2 == arguments.length && "string" == typeof e)
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        },
        each: function (e) {
          return (
            e &&
              this.forEach((t, s) => {
                e.apply(t, [t, s]);
              }),
            this
          );
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          let t, s;
          let i = ssr_window_esm_getWindow(),
            a = ssr_window_esm_getDocument(),
            r = this[0];
          if (!r || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (s = 0, t = dom7_esm_$(e); s < t.length; s += 1)
              if (t[s] === r) return !0;
            return !1;
          }
          if (e === a) return r === a;
          if (e === i) return r === i;
          if (e.nodeType || e instanceof Dom7) {
            for (s = 0, t = e.nodeType ? [e] : e; s < t.length; s += 1)
              if (t[s] === r) return !0;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          let t = this.length;
          if (e > t - 1) return dom7_esm_$([]);
          if (e < 0) {
            let s = t + e;
            return s < 0 ? dom7_esm_$([]) : dom7_esm_$([this[s]]);
          }
          return dom7_esm_$([this[e]]);
        },
        append: function (...e) {
          let t;
          let s = ssr_window_esm_getDocument();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                let i = s.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof Dom7)
                for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          let t, s;
          let i = ssr_window_esm_getDocument();
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              let a = i.createElement("div");
              for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1)
                this[t].insertBefore(a.childNodes[s], this[t].childNodes[0]);
            } else if (e instanceof Dom7)
              for (s = 0; s < e.length; s += 1)
                this[t].insertBefore(e[s], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          if (this.length > 0) {
            if (e)
              return this[0].nextElementSibling &&
                dom7_esm_$(this[0].nextElementSibling).is(e)
                ? dom7_esm_$([this[0].nextElementSibling])
                : dom7_esm_$([]);
            if (this[0].nextElementSibling)
              return dom7_esm_$([this[0].nextElementSibling]);
          }
          return dom7_esm_$([]);
        },
        nextAll: function (e) {
          let t = [],
            s = this[0];
          if (!s) return dom7_esm_$([]);
          for (; s.nextElementSibling; ) {
            let i = s.nextElementSibling;
            e ? dom7_esm_$(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return dom7_esm_$(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            let t = this[0];
            if (e)
              return t.previousElementSibling &&
                dom7_esm_$(t.previousElementSibling).is(e)
                ? dom7_esm_$([t.previousElementSibling])
                : dom7_esm_$([]);
            if (t.previousElementSibling)
              return dom7_esm_$([t.previousElementSibling]);
          }
          return dom7_esm_$([]);
        },
        prevAll: function (e) {
          let t = [],
            s = this[0];
          if (!s) return dom7_esm_$([]);
          for (; s.previousElementSibling; ) {
            let i = s.previousElementSibling;
            e ? dom7_esm_$(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return dom7_esm_$(t);
        },
        parent: function (e) {
          let t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode &&
              (e
                ? dom7_esm_$(this[s].parentNode).is(e) &&
                  t.push(this[s].parentNode)
                : t.push(this[s].parentNode));
          return dom7_esm_$(t);
        },
        parents: function (e) {
          let t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].parentNode;
            for (; i; )
              e ? dom7_esm_$(i).is(e) && t.push(i) : t.push(i),
                (i = i.parentNode);
          }
          return dom7_esm_$(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? dom7_esm_$([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          let t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return dom7_esm_$(t);
        },
        children: function (e) {
          let t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].children;
            for (let s = 0; s < i.length; s += 1)
              (!e || dom7_esm_$(i[s]).is(e)) && t.push(i[s]);
          }
          return dom7_esm_$(t);
        },
        filter: function (e) {
          let t = arrayFilter(this, e);
          return dom7_esm_$(t);
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      function utils_nextTick(e, t = 0) {
        return setTimeout(e, t);
      }
      function utils_now() {
        return Date.now();
      }
      function utils_isObject(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function utils_extend(...e) {
        let t = Object(e[0]),
          s = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
          let a = e[i];
          if (
            null != a &&
            ("undefined" != typeof window && void 0 !== window.HTMLElement
              ? !(a instanceof HTMLElement)
              : !a || (1 !== a.nodeType && 11 !== a.nodeType))
          ) {
            let e = Object.keys(Object(a)).filter((e) => 0 > s.indexOf(e));
            for (let s = 0, i = e.length; s < i; s += 1) {
              let i = e[s],
                r = Object.getOwnPropertyDescriptor(a, i);
              void 0 !== r &&
                r.enumerable &&
                (utils_isObject(t[i]) && utils_isObject(a[i])
                  ? a[i].__swiper__
                    ? (t[i] = a[i])
                    : utils_extend(t[i], a[i])
                  : !utils_isObject(t[i]) && utils_isObject(a[i])
                  ? ((t[i] = {}),
                    a[i].__swiper__ ? (t[i] = a[i]) : utils_extend(t[i], a[i]))
                  : (t[i] = a[i]));
            }
          }
        }
        return t;
      }
      function utils_setCSSProperty(e, t, s) {
        e.style.setProperty(t, s);
      }
      function animateCSSModeScroll({ swiper: e, targetPosition: t, side: s }) {
        let i;
        let a = ssr_window_esm_getWindow(),
          r = -e.translate,
          n = null,
          l = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(e.cssModeFrameID);
        let o = t > r ? "next" : "prev",
          isOutOfBound = (e, t) =>
            ("next" === o && e >= t) || ("prev" === o && e <= t),
          animate = () => {
            (i = new Date().getTime()), null === n && (n = i);
            let o = Math.max(Math.min((i - n) / l, 1), 0),
              d = r + (0.5 - Math.cos(o * Math.PI) / 2) * (t - r);
            if (
              (isOutOfBound(d, t) && (d = t),
              e.wrapperEl.scrollTo({ [s]: d }),
              isOutOfBound(d, t))
            ) {
              (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [s]: d });
                }),
                a.cancelAnimationFrame(e.cssModeFrameID);
              return;
            }
            e.cssModeFrameID = a.requestAnimationFrame(animate);
          };
        animate();
      }
      function getSupport() {
        return (
          i ||
            (i = (function () {
              let e = ssr_window_esm_getWindow(),
                t = ssr_window_esm_getDocument();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    let s = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, s);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          i
        );
      }
      function transitionEmit({
        swiper: e,
        runCallbacks: t,
        direction: s,
        step: i,
      }) {
        let { activeIndex: a, previousIndex: r } = e,
          n = s;
        if (
          (n || (n = a > r ? "next" : a < r ? "prev" : "reset"),
          e.emit(`transition${i}`),
          t && a !== r)
        ) {
          if ("reset" === n) {
            e.emit(`slideResetTransition${i}`);
            return;
          }
          e.emit(`slideChangeTransition${i}`),
            "next" === n
              ? e.emit(`slideNextTransition${i}`)
              : e.emit(`slidePrevTransition${i}`);
        }
      }
      function onTouchStart(e) {
        let t = ssr_window_esm_getDocument(),
          s = ssr_window_esm_getWindow(),
          i = this.touchEventsData,
          { params: a, touches: r, enabled: n } = this;
        if (!n || (this.animating && a.preventInteractionOnTransition)) return;
        !this.animating && a.cssMode && a.loop && this.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let o = dom7_esm_$(l.target);
        if (
          ("wrapper" === a.touchEventsTarget &&
            !o.closest(this.wrapperEl).length) ||
          ((i.isTouchEvent = "touchstart" === l.type),
          (!i.isTouchEvent && "which" in l && 3 === l.which) ||
            (!i.isTouchEvent && "button" in l && l.button > 0) ||
            (i.isTouched && i.isMoved))
        )
          return;
        let d = !!a.noSwipingClass && "" !== a.noSwipingClass,
          p = e.composedPath ? e.composedPath() : e.path;
        d && l.target && l.target.shadowRoot && p && (o = dom7_esm_$(p[0]));
        let c = a.noSwipingSelector
            ? a.noSwipingSelector
            : `.${a.noSwipingClass}`,
          u = !!(l.target && l.target.shadowRoot);
        if (
          a.noSwiping &&
          (u
            ? (function (e, t = this) {
                return (function __closestFrom(t) {
                  if (
                    !t ||
                    t === ssr_window_esm_getDocument() ||
                    t === ssr_window_esm_getWindow()
                  )
                    return null;
                  t.assignedSlot && (t = t.assignedSlot);
                  let s = t.closest(e);
                  return s || t.getRootNode
                    ? s || __closestFrom(t.getRootNode().host)
                    : null;
                })(t);
              })(c, o[0])
            : o.closest(c)[0])
        ) {
          this.allowClick = !0;
          return;
        }
        if (a.swipeHandler && !o.closest(a.swipeHandler)[0]) return;
        (r.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (r.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        let h = r.currentX,
          m = r.currentY,
          f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
          g = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (f && (h <= g || h >= s.innerWidth - g)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        if (
          (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (r.startX = h),
          (r.startY = m),
          (i.touchStartTime = utils_now()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          a.threshold > 0 && (i.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          o.is(i.focusableElements) &&
            ((e = !1), "SELECT" === o[0].nodeName && (i.isTouched = !1)),
            t.activeElement &&
              dom7_esm_$(t.activeElement).is(i.focusableElements) &&
              t.activeElement !== o[0] &&
              t.activeElement.blur();
          let s = e && this.allowTouchMove && a.touchStartPreventDefault;
          (a.touchStartForcePreventDefault || s) &&
            !o[0].isContentEditable &&
            l.preventDefault();
        }
        this.params.freeMode &&
          this.params.freeMode.enabled &&
          this.freeMode &&
          this.animating &&
          !a.cssMode &&
          this.freeMode.onTouchStart(),
          this.emit("touchStart", l);
      }
      function onTouchMove(e) {
        let t = ssr_window_esm_getDocument(),
          s = this.touchEventsData,
          { params: i, touches: a, rtlTranslate: r, enabled: n } = this;
        if (!n) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !s.isTouched)) {
          s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", l);
          return;
        }
        if (s.isTouchEvent && "touchmove" !== l.type) return;
        let o =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? o.pageX : l.pageX,
          p = "touchmove" === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper) {
          (a.startX = d), (a.startY = p);
          return;
        }
        if (!this.allowTouchMove) {
          dom7_esm_$(l.target).is(s.focusableElements) ||
            (this.allowClick = !1),
            s.isTouched &&
              (Object.assign(a, {
                startX: d,
                startY: p,
                currentX: d,
                currentY: p,
              }),
              (s.touchStartTime = utils_now()));
          return;
        }
        if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
          if (this.isVertical()) {
            if (
              (p < a.startY && this.translate <= this.maxTranslate()) ||
              (p > a.startY && this.translate >= this.minTranslate())
            ) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
          } else if (
            (d < a.startX && this.translate <= this.maxTranslate()) ||
            (d > a.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          s.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          dom7_esm_$(l.target).is(s.focusableElements)
        ) {
          (s.isMoved = !0), (this.allowClick = !1);
          return;
        }
        if (
          (s.allowTouchCallbacks && this.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (a.currentX = d), (a.currentY = p);
        let c = a.currentX - a.startX,
          u = a.currentY - a.startY;
        if (
          this.params.threshold &&
          Math.sqrt(c ** 2 + u ** 2) < this.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (this.isHorizontal() && a.currentY === a.startY) ||
          (this.isVertical() && a.currentX === a.startX)
            ? (s.isScrolling = !1)
            : c * c + u * u >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
              (s.isScrolling = this.isHorizontal()
                ? e > i.touchAngle
                : 90 - e > i.touchAngle));
        }
        if (
          (s.isScrolling && this.emit("touchMoveOpposite", l),
          void 0 === s.startMoving &&
            (a.currentX !== a.startX || a.currentY !== a.startY) &&
            (s.startMoving = !0),
          s.isScrolling)
        ) {
          s.isTouched = !1;
          return;
        }
        if (!s.startMoving) return;
        (this.allowClick = !1),
          !i.cssMode && l.cancelable && l.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
          s.isMoved ||
            (i.loop && !i.cssMode && this.loopFix(),
            (s.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating &&
              this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (s.allowMomentumBounce = !1),
            i.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", l)),
          this.emit("sliderMove", l),
          (s.isMoved = !0);
        let h = this.isHorizontal() ? c : u;
        (a.diff = h),
          (h *= i.touchRatio),
          r && (h = -h),
          (this.swipeDirection = h > 0 ? "prev" : "next"),
          (s.currentTranslate = h + s.startTranslate);
        let m = !0,
          f = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (f = 0),
          h > 0 && s.currentTranslate > this.minTranslate()
            ? ((m = !1),
              i.resistance &&
                (s.currentTranslate =
                  this.minTranslate() -
                  1 +
                  (-this.minTranslate() + s.startTranslate + h) ** f))
            : h < 0 &&
              s.currentTranslate < this.maxTranslate() &&
              ((m = !1),
              i.resistance &&
                (s.currentTranslate =
                  this.maxTranslate() +
                  1 -
                  (this.maxTranslate() - s.startTranslate - h) ** f)),
          m && (l.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          i.threshold > 0)
        ) {
          if (Math.abs(h) > i.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
              (s.allowThresholdMove = !0),
                (a.startX = a.currentX),
                (a.startY = a.currentY),
                (s.currentTranslate = s.startTranslate),
                (a.diff = this.isHorizontal()
                  ? a.currentX - a.startX
                  : a.currentY - a.startY);
              return;
            }
          } else {
            s.currentTranslate = s.startTranslate;
            return;
          }
        }
        i.followFinger &&
          !i.cssMode &&
          (((i.freeMode && i.freeMode.enabled && this.freeMode) ||
            i.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          this.params.freeMode &&
            i.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(s.currentTranslate),
          this.setTranslate(s.currentTranslate));
      }
      function onTouchEnd(e) {
        let t;
        let s = this,
          i = s.touchEventsData,
          {
            params: a,
            touches: r,
            rtlTranslate: n,
            slidesGrid: l,
            enabled: o,
          } = s;
        if (!o) return;
        let d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          i.allowTouchCallbacks && s.emit("touchEnd", d),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        ) {
          i.isMoved && a.grabCursor && s.setGrabCursor(!1),
            (i.isMoved = !1),
            (i.startMoving = !1);
          return;
        }
        a.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
          s.setGrabCursor(!1);
        let p = utils_now(),
          c = p - i.touchStartTime;
        if (s.allowClick) {
          let e = d.path || (d.composedPath && d.composedPath());
          s.updateClickedSlide((e && e[0]) || d.target),
            s.emit("tap click", d),
            c < 300 &&
              p - i.lastClickTime < 300 &&
              s.emit("doubleTap doubleClick", d);
        }
        if (
          ((i.lastClickTime = utils_now()),
          utils_nextTick(() => {
            s.destroyed || (s.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !s.swipeDirection ||
            0 === r.diff ||
            i.currentTranslate === i.startTranslate)
        ) {
          (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
          return;
        }
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (t = a.followFinger
            ? n
              ? s.translate
              : -s.translate
            : -i.currentTranslate),
          a.cssMode)
        )
          return;
        if (s.params.freeMode && a.freeMode.enabled) {
          s.freeMode.onTouchEnd({ currentPos: t });
          return;
        }
        let u = 0,
          h = s.slidesSizesGrid[0];
        for (
          let e = 0;
          e < l.length;
          e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
        ) {
          let s = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== l[e + s]
            ? t >= l[e] && t < l[e + s] && ((u = e), (h = l[e + s] - l[e]))
            : t >= l[e] && ((u = e), (h = l[l.length - 1] - l[l.length - 2]));
        }
        let m = null,
          f = null;
        a.rewind &&
          (s.isBeginning
            ? (f =
                s.params.virtual && s.params.virtual.enabled && s.virtual
                  ? s.virtual.slides.length - 1
                  : s.slides.length - 1)
            : s.isEnd && (m = 0));
        let g = (t - l[u]) / h,
          v = u < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
          if (!a.longSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          "next" === s.swipeDirection &&
            (g >= a.longSwipesRatio
              ? s.slideTo(a.rewind && s.isEnd ? m : u + v)
              : s.slideTo(u)),
            "prev" === s.swipeDirection &&
              (g > 1 - a.longSwipesRatio
                ? s.slideTo(u + v)
                : null !== f && g < 0 && Math.abs(g) > a.longSwipesRatio
                ? s.slideTo(f)
                : s.slideTo(u));
        } else {
          if (!a.shortSwipes) {
            s.slideTo(s.activeIndex);
            return;
          }
          let e =
            s.navigation &&
            (d.target === s.navigation.nextEl ||
              d.target === s.navigation.prevEl);
          e
            ? d.target === s.navigation.nextEl
              ? s.slideTo(u + v)
              : s.slideTo(u)
            : ("next" === s.swipeDirection && s.slideTo(null !== m ? m : u + v),
              "prev" === s.swipeDirection && s.slideTo(null !== f ? f : u));
        }
      }
      function onResize() {
        let { params: e, el: t } = this;
        if (t && 0 === t.offsetWidth) return;
        e.breakpoints && this.setBreakpoint();
        let { allowSlideNext: s, allowSlidePrev: i, snapGrid: a } = this;
        (this.allowSlideNext = !0),
          (this.allowSlidePrev = !0),
          this.updateSize(),
          this.updateSlides(),
          this.updateSlidesClasses(),
          ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
          this.isEnd &&
          !this.isBeginning &&
          !this.params.centeredSlides
            ? this.slideTo(this.slides.length - 1, 0, !1, !0)
            : this.slideTo(this.activeIndex, 0, !1, !0),
          this.autoplay &&
            this.autoplay.running &&
            this.autoplay.paused &&
            this.autoplay.run(),
          (this.allowSlidePrev = i),
          (this.allowSlideNext = s),
          this.params.watchOverflow &&
            a !== this.snapGrid &&
            this.checkOverflow();
      }
      function onClick(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function onScroll() {
        let { wrapperEl: e, rtlTranslate: t, enabled: s } = this;
        if (!s) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      Object.keys(d).forEach((e) => {
        Object.defineProperty(dom7_esm_$.fn, e, { value: d[e], writable: !0 });
      });
      let p = !1;
      function dummyEventListener() {}
      let events = (e, t) => {
          let s = ssr_window_esm_getDocument(),
            {
              params: i,
              touchEvents: a,
              el: r,
              wrapperEl: n,
              device: l,
              support: o,
            } = e,
            d = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener";
          if (o.touch) {
            let t = "touchstart" === a.start &&
              !!o.passiveListener &&
              !!i.passiveListeners && { passive: !0, capture: !1 };
            r[p](a.start, e.onTouchStart, t),
              r[p](
                a.move,
                e.onTouchMove,
                o.passiveListener ? { passive: !1, capture: d } : d
              ),
              r[p](a.end, e.onTouchEnd, t),
              a.cancel && r[p](a.cancel, e.onTouchEnd, t);
          } else
            r[p](a.start, e.onTouchStart, !1),
              s[p](a.move, e.onTouchMove, d),
              s[p](a.end, e.onTouchEnd, !1);
          (i.preventClicks || i.preventClicksPropagation) &&
            r[p]("click", e.onClick, !0),
            i.cssMode && n[p]("scroll", e.onScroll),
            i.updateOnWindowResize
              ? e[t](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  onResize,
                  !0
                )
              : e[t]("observerUpdate", onResize, !0);
        },
        isGridEnabled = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var c = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let u = {
          eventsEmitter: {
            on(e, t, s) {
              let i = this;
              if (!i.eventsListeners || i.destroyed || "function" != typeof t)
                return i;
              let a = s ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  i.eventsListeners[e] || (i.eventsListeners[e] = []),
                    i.eventsListeners[e][a](t);
                }),
                i
              );
            },
            once(e, t, s) {
              let i = this;
              if (!i.eventsListeners || i.destroyed || "function" != typeof t)
                return i;
              function onceHandler(...s) {
                i.off(e, onceHandler),
                  onceHandler.__emitterProxy &&
                    delete onceHandler.__emitterProxy,
                  t.apply(i, s);
              }
              return (onceHandler.__emitterProxy = t), i.on(e, onceHandler, s);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let s = this;
              return (
                s.eventsListeners &&
                  !s.destroyed &&
                  s.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (s.eventsListeners[e] = [])
                      : s.eventsListeners[e] &&
                        s.eventsListeners[e].forEach((i, a) => {
                          (i === t ||
                            (i.__emitterProxy && i.__emitterProxy === t)) &&
                            s.eventsListeners[e].splice(a, 1);
                        });
                  }),
                s
              );
            },
            emit(...e) {
              let t, s, i;
              let a = this;
              if (!a.eventsListeners || a.destroyed || !a.eventsListeners)
                return a;
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((t = e[0]), (s = e.slice(1, e.length)), (i = a))
                : ((t = e[0].events), (s = e[0].data), (i = e[0].context || a)),
                s.unshift(i);
              let r = Array.isArray(t) ? t : t.split(" ");
              return (
                r.forEach((e) => {
                  a.eventsAnyListeners &&
                    a.eventsAnyListeners.length &&
                    a.eventsAnyListeners.forEach((t) => {
                      t.apply(i, [e, ...s]);
                    }),
                    a.eventsListeners &&
                      a.eventsListeners[e] &&
                      a.eventsListeners[e].forEach((e) => {
                        e.apply(i, s);
                      });
                }),
                a
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let s = this.$el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : s[0].clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : s[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(s.css("padding-left") || 0, 10) -
                    parseInt(s.css("padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt(s.css("padding-top") || 0, 10) -
                    parseInt(s.css("padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function getDirectionLabel(e) {
                return t.isHorizontal()
                  ? e
                  : {
                      width: "height",
                      "margin-top": "margin-left",
                      "margin-bottom ": "margin-right",
                      "margin-left": "margin-top",
                      "margin-right": "margin-bottom",
                      "padding-left": "padding-top",
                      "padding-right": "padding-bottom",
                      marginRight: "marginBottom",
                    }[e];
              }
              function getDirectionPropertyValue(e, t) {
                return parseFloat(
                  e.getPropertyValue(getDirectionLabel(t)) || 0
                );
              }
              let s = t.params,
                { $wrapperEl: i, size: a, rtlTranslate: r, wrongRTL: n } = t,
                l = t.virtual && s.virtual.enabled,
                o = l ? t.virtual.slides.length : t.slides.length,
                d = i.children(`.${t.params.slideClass}`),
                p = l ? t.virtual.slides.length : d.length,
                c = [],
                u = [],
                h = [],
                m = s.slidesOffsetBefore;
              "function" == typeof m && (m = s.slidesOffsetBefore.call(t));
              let f = s.slidesOffsetAfter;
              "function" == typeof f && (f = s.slidesOffsetAfter.call(t));
              let g = t.snapGrid.length,
                v = t.slidesGrid.length,
                w = s.spaceBetween,
                b = -m,
                y = 0,
                C = 0;
              if (void 0 === a) return;
              "string" == typeof w &&
                w.indexOf("%") >= 0 &&
                (w = (parseFloat(w.replace("%", "")) / 100) * a),
                (t.virtualSize = -w),
                r
                  ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                  : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                s.centeredSlides &&
                  s.cssMode &&
                  (utils_setCSSProperty(
                    t.wrapperEl,
                    "--swiper-centered-offset-before",
                    ""
                  ),
                  utils_setCSSProperty(
                    t.wrapperEl,
                    "--swiper-centered-offset-after",
                    ""
                  ));
              let _ = s.grid && s.grid.rows > 1 && t.grid;
              _ && t.grid.initSlides(p);
              let S =
                "auto" === s.slidesPerView &&
                s.breakpoints &&
                Object.keys(s.breakpoints).filter(
                  (e) => void 0 !== s.breakpoints[e].slidesPerView
                ).length > 0;
              for (let i = 0; i < p; i += 1) {
                e = 0;
                let r = d.eq(i);
                if (
                  (_ && t.grid.updateSlide(i, r, p, getDirectionLabel),
                  "none" !== r.css("display"))
                ) {
                  if ("auto" === s.slidesPerView) {
                    S && (d[i].style[getDirectionLabel("width")] = "");
                    let a = getComputedStyle(r[0]),
                      n = r[0].style.transform,
                      l = r[0].style.webkitTransform;
                    if (
                      (n && (r[0].style.transform = "none"),
                      l && (r[0].style.webkitTransform = "none"),
                      s.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? r.outerWidth(!0)
                        : r.outerHeight(!0);
                    else {
                      let t = getDirectionPropertyValue(a, "width"),
                        s = getDirectionPropertyValue(a, "padding-left"),
                        i = getDirectionPropertyValue(a, "padding-right"),
                        n = getDirectionPropertyValue(a, "margin-left"),
                        l = getDirectionPropertyValue(a, "margin-right"),
                        o = a.getPropertyValue("box-sizing");
                      if (o && "border-box" === o) e = t + n + l;
                      else {
                        let { clientWidth: a, offsetWidth: o } = r[0];
                        e = t + s + i + n + l + (o - a);
                      }
                    }
                    n && (r[0].style.transform = n),
                      l && (r[0].style.webkitTransform = l),
                      s.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (a - (s.slidesPerView - 1) * w) / s.slidesPerView),
                      s.roundLengths && (e = Math.floor(e)),
                      d[i] &&
                        (d[i].style[getDirectionLabel("width")] = `${e}px`);
                  d[i] && (d[i].swiperSlideSize = e),
                    h.push(e),
                    s.centeredSlides
                      ? ((b = b + e / 2 + y / 2 + w),
                        0 === y && 0 !== i && (b = b - a / 2 - w),
                        0 === i && (b = b - a / 2 - w),
                        0.001 > Math.abs(b) && (b = 0),
                        s.roundLengths && (b = Math.floor(b)),
                        C % s.slidesPerGroup == 0 && c.push(b),
                        u.push(b))
                      : (s.roundLengths && (b = Math.floor(b)),
                        (C - Math.min(t.params.slidesPerGroupSkip, C)) %
                          t.params.slidesPerGroup ==
                          0 && c.push(b),
                        u.push(b),
                        (b = b + e + w)),
                    (t.virtualSize += e + w),
                    (y = e),
                    (C += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, a) + f),
                r &&
                  n &&
                  ("slide" === s.effect || "coverflow" === s.effect) &&
                  i.css({ width: `${t.virtualSize + s.spaceBetween}px` }),
                s.setWrapperSize &&
                  i.css({
                    [getDirectionLabel("width")]: `${
                      t.virtualSize + s.spaceBetween
                    }px`,
                  }),
                _ && t.grid.updateWrapperSize(e, c, getDirectionLabel),
                !s.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < c.length; i += 1) {
                  let r = c[i];
                  s.roundLengths && (r = Math.floor(r)),
                    c[i] <= t.virtualSize - a && e.push(r);
                }
                (c = e),
                  Math.floor(t.virtualSize - a) - Math.floor(c[c.length - 1]) >
                    1 && c.push(t.virtualSize - a);
              }
              if ((0 === c.length && (c = [0]), 0 !== s.spaceBetween)) {
                let e =
                  t.isHorizontal() && r
                    ? "marginLeft"
                    : getDirectionLabel("marginRight");
                d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
                  [e]: `${w}px`,
                });
              }
              if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                h.forEach((t) => {
                  e += t + (s.spaceBetween ? s.spaceBetween : 0);
                }),
                  (e -= s.spaceBetween);
                let t = e - a;
                c = c.map((e) => (e < 0 ? -m : e > t ? t + f : e));
              }
              if (s.centerInsufficientSlides) {
                let e = 0;
                if (
                  (h.forEach((t) => {
                    e += t + (s.spaceBetween ? s.spaceBetween : 0);
                  }),
                  (e -= s.spaceBetween) < a)
                ) {
                  let t = (a - e) / 2;
                  c.forEach((e, s) => {
                    c[s] = e - t;
                  }),
                    u.forEach((e, s) => {
                      u[s] = e + t;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: d,
                  snapGrid: c,
                  slidesGrid: u,
                  slidesSizesGrid: h,
                }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
              ) {
                utils_setCSSProperty(
                  t.wrapperEl,
                  "--swiper-centered-offset-before",
                  `${-c[0]}px`
                ),
                  utils_setCSSProperty(
                    t.wrapperEl,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - h[h.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  s = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + s));
              }
              if (
                (p !== o && t.emit("slidesLengthChange"),
                c.length !== g &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                u.length !== v && t.emit("slidesGridLengthChange"),
                s.watchSlidesProgress && t.updateSlidesOffset(),
                !l &&
                  !s.cssMode &&
                  ("slide" === s.effect || "fade" === s.effect))
              ) {
                let e = `${s.containerModifierClass}backface-hidden`,
                  i = t.$el.hasClass(e);
                p <= s.maxBackfaceHiddenSlides
                  ? i || t.$el.addClass(e)
                  : i && t.$el.removeClass(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let s = this,
                i = [],
                a = s.virtual && s.params.virtual.enabled,
                r = 0;
              "number" == typeof e
                ? s.setTransition(e)
                : !0 === e && s.setTransition(s.params.speed);
              let getSlideByIndex = (e) =>
                a
                  ? s.slides.filter(
                      (t) =>
                        parseInt(
                          t.getAttribute("data-swiper-slide-index"),
                          10
                        ) === e
                    )[0]
                  : s.slides.eq(e)[0];
              if (
                "auto" !== s.params.slidesPerView &&
                s.params.slidesPerView > 1
              ) {
                if (s.params.centeredSlides)
                  (s.visibleSlides || dom7_esm_$([])).each((e) => {
                    i.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(s.params.slidesPerView); t += 1) {
                    let e = s.activeIndex + t;
                    if (e > s.slides.length && !a) break;
                    i.push(getSlideByIndex(e));
                  }
              } else i.push(getSlideByIndex(s.activeIndex));
              for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                  let e = i[t].offsetHeight;
                  r = e > r ? e : r;
                }
              (r || 0 === r) && s.$wrapperEl.css("height", `${r}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides;
              for (let t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                  ? e[t].offsetLeft
                  : e[t].offsetTop;
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
              let t = this.params,
                { slides: s, rtlTranslate: i, snapGrid: a } = this;
              if (0 === s.length) return;
              void 0 === s[0].swiperSlideOffset && this.updateSlidesOffset();
              let r = -e;
              i && (r = e),
                s.removeClass(t.slideVisibleClass),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              for (let e = 0; e < s.length; e += 1) {
                let n = s[e],
                  l = n.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (l -= s[0].swiperSlideOffset);
                let o =
                    (r + (t.centeredSlides ? this.minTranslate() : 0) - l) /
                    (n.swiperSlideSize + t.spaceBetween),
                  d =
                    (r -
                      a[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      l) /
                    (n.swiperSlideSize + t.spaceBetween),
                  p = -(r - l),
                  c = p + this.slidesSizesGrid[e],
                  u =
                    (p >= 0 && p < this.size - 1) ||
                    (c > 1 && c <= this.size) ||
                    (p <= 0 && c >= this.size);
                u &&
                  (this.visibleSlides.push(n),
                  this.visibleSlidesIndexes.push(e),
                  s.eq(e).addClass(t.slideVisibleClass)),
                  (n.progress = i ? -o : o),
                  (n.originalProgress = i ? -d : d);
              }
              this.visibleSlides = dom7_esm_$(this.visibleSlides);
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                { progress: i, isBeginning: a, isEnd: r } = this,
                n = a,
                l = r;
              0 === s
                ? ((i = 0), (a = !0), (r = !0))
                : ((a = (i = (e - this.minTranslate()) / s) <= 0),
                  (r = i >= 1)),
                Object.assign(this, { progress: i, isBeginning: a, isEnd: r }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                a && !n && this.emit("reachBeginning toEdge"),
                r && !l && this.emit("reachEnd toEdge"),
                ((n && !a) || (l && !r)) && this.emit("fromEdge"),
                this.emit("progress", i);
            },
            updateSlidesClasses: function () {
              let e;
              let {
                  slides: t,
                  params: s,
                  $wrapperEl: i,
                  activeIndex: a,
                  realIndex: r,
                } = this,
                n = this.virtual && s.virtual.enabled;
              t.removeClass(
                `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
              ),
                (e = n
                  ? this.$wrapperEl.find(
                      `.${s.slideClass}[data-swiper-slide-index="${a}"]`
                    )
                  : t.eq(a)).addClass(s.slideActiveClass),
                s.loop &&
                  (e.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass)
                    : i
                        .children(
                          `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(s.slideDuplicateActiveClass));
              let l = e
                .nextAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slideNextClass);
              s.loop &&
                0 === l.length &&
                (l = t.eq(0)).addClass(s.slideNextClass);
              let o = e
                .prevAll(`.${s.slideClass}`)
                .eq(0)
                .addClass(s.slidePrevClass);
              s.loop &&
                0 === o.length &&
                (o = t.eq(-1)).addClass(s.slidePrevClass),
                s.loop &&
                  (l.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${l.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass)
                    : i
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${l.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicateNextClass),
                  o.hasClass(s.slideDuplicateClass)
                    ? i
                        .children(
                          `.${s.slideClass}:not(.${
                            s.slideDuplicateClass
                          })[data-swiper-slide-index="${o.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass)
                    : i
                        .children(
                          `.${s.slideClass}.${
                            s.slideDuplicateClass
                          }[data-swiper-slide-index="${o.attr(
                            "data-swiper-slide-index"
                          )}"]`
                        )
                        .addClass(s.slideDuplicatePrevClass)),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t;
              let s = this.rtlTranslate ? this.translate : -this.translate,
                {
                  slidesGrid: i,
                  snapGrid: a,
                  params: r,
                  activeIndex: n,
                  realIndex: l,
                  snapIndex: o,
                } = this,
                d = e;
              if (void 0 === d) {
                for (let e = 0; e < i.length; e += 1)
                  void 0 !== i[e + 1]
                    ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                      ? (d = e)
                      : s >= i[e] && s < i[e + 1] && (d = e + 1)
                    : s >= i[e] && (d = e);
                r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
              }
              if (a.indexOf(s) >= 0) t = a.indexOf(s);
              else {
                let e = Math.min(r.slidesPerGroupSkip, d);
                t = e + Math.floor((d - e) / r.slidesPerGroup);
              }
              if ((t >= a.length && (t = a.length - 1), d === n)) {
                t !== o && ((this.snapIndex = t), this.emit("snapIndexChange"));
                return;
              }
              let p = parseInt(
                this.slides.eq(d).attr("data-swiper-slide-index") || d,
                10
              );
              Object.assign(this, {
                snapIndex: t,
                realIndex: p,
                previousIndex: n,
                activeIndex: d,
              }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                l !== p && this.emit("realIndexChange"),
                (this.initialized || this.params.runCallbacksOnInit) &&
                  this.emit("slideChange");
            },
            updateClickedSlide: function (e) {
              let t;
              let s = this.params,
                i = dom7_esm_$(e).closest(`.${s.slideClass}`)[0],
                a = !1;
              if (i) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === i) {
                    (a = !0), (t = e);
                    break;
                  }
              }
              if (i && a)
                (this.clickedSlide = i),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        dom7_esm_$(i).attr("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = t);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              s.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
              let {
                params: t,
                rtlTranslate: s,
                translate: i,
                $wrapperEl: a,
              } = this;
              if (t.virtualTranslate) return s ? -i : i;
              if (t.cssMode) return i;
              let r = (function (e, t = "x") {
                let s, i, a;
                let r = ssr_window_esm_getWindow(),
                  n = (function (e) {
                    let t;
                    let s = ssr_window_esm_getWindow();
                    return (
                      s.getComputedStyle && (t = s.getComputedStyle(e, null)),
                      !t && e.currentStyle && (t = e.currentStyle),
                      t || (t = e.style),
                      t
                    );
                  })(e, null);
                return (
                  r.WebKitCSSMatrix
                    ? ((i = n.transform || n.webkitTransform).split(",")
                        .length > 6 &&
                        (i = i
                          .split(", ")
                          .map((e) => e.replace(",", "."))
                          .join(", ")),
                      (a = new r.WebKitCSSMatrix("none" === i ? "" : i)))
                    : (s = (a =
                        n.MozTransform ||
                        n.OTransform ||
                        n.MsTransform ||
                        n.msTransform ||
                        n.transform ||
                        n
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,"))
                        .toString()
                        .split(",")),
                  "x" === t &&
                    (i = r.WebKitCSSMatrix
                      ? a.m41
                      : 16 === s.length
                      ? parseFloat(s[12])
                      : parseFloat(s[4])),
                  "y" === t &&
                    (i = r.WebKitCSSMatrix
                      ? a.m42
                      : 16 === s.length
                      ? parseFloat(s[13])
                      : parseFloat(s[5])),
                  i || 0
                );
              })(a[0], e);
              return s && (r = -r), r || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: s,
                  params: i,
                  $wrapperEl: a,
                  wrapperEl: r,
                  progress: n,
                } = this,
                l = 0,
                o = 0;
              this.isHorizontal() ? (l = s ? -e : e) : (o = e),
                i.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
                i.cssMode
                  ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -l : -o)
                  : i.virtualTranslate ||
                    a.transform(`translate3d(${l}px, ${o}px, 0px)`),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? l : o);
              let d = this.maxTranslate() - this.minTranslate();
              (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              s = !0,
              i = !0,
              a
            ) {
              let r;
              let n = this,
                { params: l, wrapperEl: o } = n;
              if (n.animating && l.preventInteractionOnTransition) return !1;
              let d = n.minTranslate(),
                p = n.maxTranslate();
              if (
                ((r = i && e > d ? d : i && e < p ? p : e),
                n.updateProgress(r),
                l.cssMode)
              ) {
                let e = n.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -r;
                else {
                  if (!n.support.smoothScroll)
                    return (
                      animateCSSModeScroll({
                        swiper: n,
                        targetPosition: -r,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? "left" : "top"]: -r, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (n.setTransition(0),
                    n.setTranslate(r),
                    s &&
                      (n.emit("beforeTransitionStart", t, a),
                      n.emit("transitionEnd")))
                  : (n.setTransition(t),
                    n.setTranslate(r),
                    s &&
                      (n.emit("beforeTransitionStart", t, a),
                      n.emit("transitionStart")),
                    n.animating ||
                      ((n.animating = !0),
                      n.onTranslateToWrapperTransitionEnd ||
                        (n.onTranslateToWrapperTransitionEnd = function (e) {
                          n &&
                            !n.destroyed &&
                            e.target === this &&
                            (n.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              n.onTranslateToWrapperTransitionEnd
                            ),
                            n.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              n.onTranslateToWrapperTransitionEnd
                            ),
                            (n.onTranslateToWrapperTransitionEnd = null),
                            delete n.onTranslateToWrapperTransitionEnd,
                            s && n.emit("transitionEnd"));
                        }),
                      n.$wrapperEl[0].addEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        n.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              let { params: s } = this;
              s.cssMode ||
                (s.autoHeight && this.updateAutoHeight(),
                transitionEmit({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e = !0, t) {
              let { params: s } = this;
              (this.animating = !1),
                s.cssMode ||
                  (this.setTransition(0),
                  transitionEmit({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e = 0, t = this.params.speed, s = !0, i, a) {
              let r;
              if ("number" != typeof e && "string" != typeof e)
                throw Error(
                  `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                );
              if ("string" == typeof e) {
                let t = parseInt(e, 10),
                  s = isFinite(t);
                if (!s)
                  throw Error(
                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                  );
                e = t;
              }
              let n = this,
                l = e;
              l < 0 && (l = 0);
              let {
                params: o,
                snapGrid: d,
                slidesGrid: p,
                previousIndex: c,
                activeIndex: u,
                rtlTranslate: h,
                wrapperEl: m,
                enabled: f,
              } = n;
              if (
                (n.animating && o.preventInteractionOnTransition) ||
                (!f && !i && !a)
              )
                return !1;
              let g = Math.min(n.params.slidesPerGroupSkip, l),
                v = g + Math.floor((l - g) / n.params.slidesPerGroup);
              v >= d.length && (v = d.length - 1);
              let w = -d[v];
              if (o.normalizeSlideIndex)
                for (let e = 0; e < p.length; e += 1) {
                  let t = -Math.floor(100 * w),
                    s = Math.floor(100 * p[e]),
                    i = Math.floor(100 * p[e + 1]);
                  void 0 !== p[e + 1]
                    ? t >= s && t < i - (i - s) / 2
                      ? (l = e)
                      : t >= s && t < i && (l = e + 1)
                    : t >= s && (l = e);
                }
              if (
                n.initialized &&
                l !== u &&
                ((!n.allowSlideNext &&
                  w < n.translate &&
                  w < n.minTranslate()) ||
                  (!n.allowSlidePrev &&
                    w > n.translate &&
                    w > n.maxTranslate() &&
                    (u || 0) !== l))
              )
                return !1;
              if (
                (l !== (c || 0) && s && n.emit("beforeSlideChangeStart"),
                n.updateProgress(w),
                (r = l > u ? "next" : l < u ? "prev" : "reset"),
                (h && -w === n.translate) || (!h && w === n.translate))
              )
                return (
                  n.updateActiveIndex(l),
                  o.autoHeight && n.updateAutoHeight(),
                  n.updateSlidesClasses(),
                  "slide" !== o.effect && n.setTranslate(w),
                  "reset" !== r &&
                    (n.transitionStart(s, r), n.transitionEnd(s, r)),
                  !1
                );
              if (o.cssMode) {
                let e = n.isHorizontal(),
                  s = h ? w : -w;
                if (0 === t) {
                  let t = n.virtual && n.params.virtual.enabled;
                  t &&
                    ((n.wrapperEl.style.scrollSnapType = "none"),
                    (n._immediateVirtual = !0)),
                    (m[e ? "scrollLeft" : "scrollTop"] = s),
                    t &&
                      requestAnimationFrame(() => {
                        (n.wrapperEl.style.scrollSnapType = ""),
                          (n._swiperImmediateVirtual = !1);
                      });
                } else {
                  if (!n.support.smoothScroll)
                    return (
                      animateCSSModeScroll({
                        swiper: n,
                        targetPosition: s,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
                }
                return !0;
              }
              return (
                n.setTransition(t),
                n.setTranslate(w),
                n.updateActiveIndex(l),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, i),
                n.transitionStart(s, r),
                0 === t
                  ? n.transitionEnd(s, r)
                  : n.animating ||
                    ((n.animating = !0),
                    n.onSlideToWrapperTransitionEnd ||
                      (n.onSlideToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            n.onSlideToWrapperTransitionEnd
                          ),
                          n.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            n.onSlideToWrapperTransitionEnd
                          ),
                          (n.onSlideToWrapperTransitionEnd = null),
                          delete n.onSlideToWrapperTransitionEnd,
                          n.transitionEnd(s, r));
                      }),
                    n.$wrapperEl[0].addEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      n.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
              if ("string" == typeof e) {
                let t = parseInt(e, 10),
                  s = isFinite(t);
                if (!s)
                  throw Error(
                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                  );
                e = t;
              }
              let a = e;
              return (
                this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, t, s, i)
              );
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
              let { animating: i, enabled: a, params: r } = this;
              if (!a) return this;
              let n = r.slidesPerGroup;
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                (n = Math.max(this.slidesPerViewDynamic("current", !0), 1));
              let l = this.activeIndex < r.slidesPerGroupSkip ? 1 : n;
              if (r.loop) {
                if (i && r.loopPreventsSlide) return !1;
                this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft);
              }
              return r.rewind && this.isEnd
                ? this.slideTo(0, e, t, s)
                : this.slideTo(this.activeIndex + l, e, t, s);
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
              let {
                params: i,
                animating: a,
                snapGrid: r,
                slidesGrid: n,
                rtlTranslate: l,
                enabled: o,
              } = this;
              if (!o) return this;
              if (i.loop) {
                if (a && i.loopPreventsSlide) return !1;
                this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft);
              }
              let d = l ? this.translate : -this.translate;
              function normalize(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = normalize(d),
                c = r.map((e) => normalize(e)),
                u = r[c.indexOf(p) - 1];
              if (void 0 === u && i.cssMode) {
                let e;
                r.forEach((t, s) => {
                  p >= t && (e = s);
                }),
                  void 0 !== e && (u = r[e > 0 ? e - 1 : e]);
              }
              let h = 0;
              if (
                (void 0 !== u &&
                  ((h = n.indexOf(u)) < 0 && (h = this.activeIndex - 1),
                  "auto" === i.slidesPerView &&
                    1 === i.slidesPerGroup &&
                    i.slidesPerGroupAuto &&
                    (h = Math.max(
                      (h = h - this.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                i.rewind && this.isBeginning)
              ) {
                let i =
                  this.params.virtual &&
                  this.params.virtual.enabled &&
                  this.virtual
                    ? this.virtual.slides.length - 1
                    : this.slides.length - 1;
                return this.slideTo(i, e, t, s);
              }
              return this.slideTo(h, e, t, s);
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
              return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function (
              e = this.params.speed,
              t = !0,
              s,
              i = 0.5
            ) {
              let a = this.activeIndex,
                r = Math.min(this.params.slidesPerGroupSkip, a),
                n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                l = this.rtlTranslate ? this.translate : -this.translate;
              if (l >= this.snapGrid[n]) {
                let e = this.snapGrid[n],
                  t = this.snapGrid[n + 1];
                l - e > (t - e) * i && (a += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[n - 1],
                  t = this.snapGrid[n];
                l - e <= (t - e) * i && (a -= this.params.slidesPerGroup);
              }
              return (
                (a = Math.min(
                  (a = Math.max(a, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(a, e, t, s)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this,
                { params: s, $wrapperEl: i } = t,
                a =
                  "auto" === s.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : s.slidesPerView,
                r = t.clickedIndex;
              if (s.loop) {
                if (t.animating) return;
                (e = parseInt(
                  dom7_esm_$(t.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  s.centeredSlides
                    ? r < t.loopedSlides - a / 2 ||
                      r > t.slides.length - t.loopedSlides + a / 2
                      ? (t.loopFix(),
                        (r = i
                          .children(
                            `.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`
                          )
                          .eq(0)
                          .index()),
                        utils_nextTick(() => {
                          t.slideTo(r);
                        }))
                      : t.slideTo(r)
                    : r > t.slides.length - a
                    ? (t.loopFix(),
                      (r = i
                        .children(
                          `.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      utils_nextTick(() => {
                        t.slideTo(r);
                      }))
                    : t.slideTo(r);
              } else t.slideTo(r);
            },
          },
          loop: {
            loopCreate: function () {
              let e = ssr_window_esm_getDocument(),
                { params: t, $wrapperEl: s } = this,
                i =
                  s.children().length > 0
                    ? dom7_esm_$(s.children()[0].parentNode)
                    : s;
              i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
              let a = i.children(`.${t.slideClass}`);
              if (t.loopFillGroupWithBlank) {
                let s = t.slidesPerGroup - (a.length % t.slidesPerGroup);
                if (s !== t.slidesPerGroup) {
                  for (let a = 0; a < s; a += 1) {
                    let s = dom7_esm_$(e.createElement("div")).addClass(
                      `${t.slideClass} ${t.slideBlankClass}`
                    );
                    i.append(s);
                  }
                  a = i.children(`.${t.slideClass}`);
                }
              }
              "auto" !== t.slidesPerView ||
                t.loopedSlides ||
                (t.loopedSlides = a.length),
                (this.loopedSlides = Math.ceil(
                  parseFloat(t.loopedSlides || t.slidesPerView, 10)
                )),
                (this.loopedSlides += t.loopAdditionalSlides),
                this.loopedSlides > a.length &&
                  this.params.loopedSlidesLimit &&
                  (this.loopedSlides = a.length);
              let r = [],
                n = [];
              a.each((e, t) => {
                let s = dom7_esm_$(e);
                s.attr("data-swiper-slide-index", t);
              });
              for (let e = 0; e < this.loopedSlides; e += 1) {
                let t = e - Math.floor(e / a.length) * a.length;
                n.push(a.eq(t)[0]), r.unshift(a.eq(a.length - t - 1)[0]);
              }
              for (let e = 0; e < n.length; e += 1)
                i.append(
                  dom7_esm_$(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass)
                );
              for (let e = r.length - 1; e >= 0; e -= 1)
                i.prepend(
                  dom7_esm_$(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass)
                );
            },
            loopFix: function () {
              let e;
              this.emit("beforeLoopFix");
              let {
                activeIndex: t,
                slides: s,
                loopedSlides: i,
                allowSlidePrev: a,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l,
              } = this;
              (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
              let o = -n[t],
                d = o - this.getTranslate();
              if (t < i) {
                e = s.length - 3 * i + t + i;
                let a = this.slideTo(e, 0, !1, !0);
                a &&
                  0 !== d &&
                  this.setTranslate((l ? -this.translate : this.translate) - d);
              } else if (t >= s.length - i) {
                e = -s.length + t + i + i;
                let a = this.slideTo(e, 0, !1, !0);
                a &&
                  0 !== d &&
                  this.setTranslate((l ? -this.translate : this.translate) - d);
              }
              (this.allowSlidePrev = a),
                (this.allowSlideNext = r),
                this.emit("loopFix");
            },
            loopDestroy: function () {
              let { $wrapperEl: e, params: t, slides: s } = this;
              e
                .children(
                  `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                )
                .remove(),
                s.removeAttr("data-swiper-slide-index");
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              if (
                this.support.touch ||
                !this.params.simulateTouch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode
              )
                return;
              let t =
                "container" === this.params.touchEventsTarget
                  ? this.el
                  : this.wrapperEl;
              (t.style.cursor = "move"),
                (t.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              this.support.touch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode ||
                (this[
                  "container" === this.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: {
            attachEvents: function () {
              let e = ssr_window_esm_getDocument(),
                { params: t, support: s } = this;
              (this.onTouchStart = onTouchStart.bind(this)),
                (this.onTouchMove = onTouchMove.bind(this)),
                (this.onTouchEnd = onTouchEnd.bind(this)),
                t.cssMode && (this.onScroll = onScroll.bind(this)),
                (this.onClick = onClick.bind(this)),
                s.touch &&
                  !p &&
                  (e.addEventListener("touchstart", dummyEventListener),
                  (p = !0)),
                events(this, "on");
            },
            detachEvents: function () {
              events(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                {
                  activeIndex: t,
                  initialized: s,
                  loopedSlides: i = 0,
                  params: a,
                  $el: r,
                } = e,
                n = a.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              let o = l in n ? n[l] : void 0,
                d = o || e.originalParams,
                p = isGridEnabled(e, a),
                c = isGridEnabled(e, d),
                u = a.enabled;
              p && !c
                ? (r.removeClass(
                    `${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !p &&
                  c &&
                  (r.addClass(`${a.containerModifierClass}grid`),
                  ((d.grid.fill && "column" === d.grid.fill) ||
                    (!d.grid.fill && "column" === a.grid.fill)) &&
                    r.addClass(`${a.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  let s = a[t] && a[t].enabled,
                    i = d[t] && d[t].enabled;
                  s && !i && e[t].disable(), !s && i && e[t].enable();
                });
              let h = d.direction && d.direction !== a.direction,
                m = a.loop && (d.slidesPerView !== a.slidesPerView || h);
              h && s && e.changeDirection(), utils_extend(e.params, d);
              let f = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                u && !f ? e.disable() : !u && f && e.enable(),
                (e.currentBreakpoint = l),
                e.emit("_beforeBreakpoint", d),
                m &&
                  s &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", d);
            },
            getBreakpoint: function (e, t = "window", s) {
              if (!e || ("container" === t && !s)) return;
              let i = !1,
                a = ssr_window_esm_getWindow(),
                r = "window" === t ? a.innerHeight : s.clientHeight,
                n = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    let t = parseFloat(e.substr(1));
                    return { value: r * t, point: e };
                  }
                  return { value: e, point: e };
                });
              n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < n.length; e += 1) {
                let { point: r, value: l } = n[e];
                "window" === t
                  ? a.matchMedia(`(min-width: ${l}px)`).matches && (i = r)
                  : l <= s.clientWidth && (i = r);
              }
              return i || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: s } = t;
              if (s) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * s;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let {
                  classNames: e,
                  params: t,
                  rtl: s,
                  $el: i,
                  device: a,
                  support: r,
                } = this,
                n = (function (e, t) {
                  let s = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((i) => {
                            e[i] && s.push(t + i);
                          })
                        : "string" == typeof e && s.push(t + e);
                    }),
                    s
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "pointer-events": !r.touch },
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: s },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: a.android },
                    { ios: a.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n),
                i.addClass([...e].join(" ")),
                this.emitContainerClasses();
            },
            removeClasses: function () {
              let { $el: e, classNames: t } = this;
              e.removeClass(t.join(" ")), this.emitContainerClasses();
            },
          },
          images: {
            loadImage: function (e, t, s, i, a, r) {
              let n;
              let l = ssr_window_esm_getWindow();
              function onReady() {
                r && r();
              }
              let o = dom7_esm_$(e).parent("picture")[0];
              o || (e.complete && a)
                ? onReady()
                : t
                ? (((n = new l.Image()).onload = onReady),
                  (n.onerror = onReady),
                  i && (n.sizes = i),
                  s && (n.srcset = s),
                  t && (n.src = t))
                : onReady();
            },
            preloadImages: function () {
              let e = this;
              function onReady() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let t = 0; t < e.imagesToLoad.length; t += 1) {
                let s = e.imagesToLoad[t];
                e.loadImage(
                  s,
                  s.currentSrc || s.getAttribute("src"),
                  s.srcset || s.getAttribute("srcset"),
                  s.sizes || s.getAttribute("sizes"),
                  !0,
                  onReady
                );
              }
            },
          },
        },
        h = {};
      let Swiper = class Swiper {
        constructor(...e) {
          let t, s;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (s = e[0])
              : ([t, s] = e),
            s || (s = {}),
            (s = utils_extend({}, s)),
            t && !s.el && (s.el = t),
            s.el && dom7_esm_$(s.el).length > 1)
          ) {
            let e = [];
            return (
              dom7_esm_$(s.el).each((t) => {
                let i = utils_extend({}, s, { el: t });
                e.push(new Swiper(i));
              }),
              e
            );
          }
          let i = this;
          (i.__swiper__ = !0),
            (i.support = getSupport()),
            (i.device = (function (e = {}) {
              return (
                a ||
                  (a = (function ({ userAgent: e } = {}) {
                    let t = getSupport(),
                      s = ssr_window_esm_getWindow(),
                      i = s.navigator.platform,
                      a = e || s.navigator.userAgent,
                      r = { ios: !1, android: !1 },
                      n = s.screen.width,
                      l = s.screen.height,
                      o = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                      d = a.match(/(iPad).*OS\s([\d_]+)/),
                      p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                      c = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      u = "MacIntel" === i;
                    return (
                      !d &&
                        u &&
                        t.touch &&
                        [
                          "1024x1366",
                          "1366x1024",
                          "834x1194",
                          "1194x834",
                          "834x1112",
                          "1112x834",
                          "768x1024",
                          "1024x768",
                          "820x1180",
                          "1180x820",
                          "810x1080",
                          "1080x810",
                        ].indexOf(`${n}x${l}`) >= 0 &&
                        ((d = a.match(/(Version)\/([\d.]+)/)) ||
                          (d = [0, 1, "13_0_0"]),
                        (u = !1)),
                      o &&
                        "Win32" !== i &&
                        ((r.os = "android"), (r.android = !0)),
                      (d || c || p) && ((r.os = "ios"), (r.ios = !0)),
                      r
                    );
                  })(e)),
                a
              );
            })({ userAgent: s.userAgent })),
            (i.browser =
              (r ||
                (r = (function () {
                  let e = ssr_window_esm_getWindow();
                  return {
                    isSafari: (function () {
                      let t = e.navigator.userAgent.toLowerCase();
                      return (
                        t.indexOf("safari") >= 0 &&
                        0 > t.indexOf("chrome") &&
                        0 > t.indexOf("android")
                      );
                    })(),
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        e.navigator.userAgent
                      ),
                  };
                })()),
              r)),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            s.modules &&
              Array.isArray(s.modules) &&
              i.modules.push(...s.modules);
          let n = {};
          i.modules.forEach((e) => {
            var t;
            e({
              swiper: i,
              extendParams:
                ((t = s),
                function (e = {}) {
                  let s = Object.keys(e)[0],
                    i = e[s];
                  if (
                    "object" != typeof i ||
                    null === i ||
                    (["navigation", "pagination", "scrollbar"].indexOf(s) >=
                      0 &&
                      !0 === t[s] &&
                      (t[s] = { auto: !0 }),
                    !(s in t && "enabled" in i))
                  ) {
                    utils_extend(n, e);
                    return;
                  }
                  !0 === t[s] && (t[s] = { enabled: !0 }),
                    "object" != typeof t[s] ||
                      "enabled" in t[s] ||
                      (t[s].enabled = !0),
                    t[s] || (t[s] = { enabled: !1 }),
                    utils_extend(n, e);
                }),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            });
          });
          let l = utils_extend({}, c, n);
          return (
            (i.params = utils_extend({}, l, h, s)),
            (i.originalParams = utils_extend({}, i.params)),
            (i.passedParams = utils_extend({}, s)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach((e) => {
                i.on(e, i.params.on[e]);
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            (i.$ = dom7_esm_$),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: t,
              classNames: [],
              slides: dom7_esm_$(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === i.params.direction,
              isVertical: () => "vertical" === i.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEvents:
                ((i.touchEventsTouch = {
                  start: "touchstart",
                  move: "touchmove",
                  end: "touchend",
                  cancel: "touchcancel",
                }),
                (i.touchEventsDesktop = {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup",
                }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: utils_now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit("_swiper"),
            i.params.init && i.init(),
            i
          );
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let s = this.minTranslate(),
            i = this.maxTranslate(),
            a = (i - s) * e + s;
          this.translateTo(a, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.each((s) => {
            let i = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          let {
              params: s,
              slides: i,
              slidesGrid: a,
              slidesSizesGrid: r,
              size: n,
              activeIndex: l,
            } = this,
            o = 1;
          if (s.centeredSlides) {
            let e,
              t = i[l].swiperSlideSize;
            for (let s = l + 1; s < i.length; s += 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
            for (let s = l - 1; s >= 0; s -= 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
          } else if ("current" === e)
            for (let e = l + 1; e < i.length; e += 1) {
              let s = t ? a[e] + r[e] - a[l] < n : a[e] - a[l] < n;
              s && (o += 1);
            }
          else
            for (let e = l - 1; e >= 0; e -= 1) {
              let t = a[l] - a[e] < n;
              t && (o += 1);
            }
          return o;
        }
        update() {
          let e = this;
          if (!e || e.destroyed) return;
          let { snapGrid: t, params: s } = e;
          function setTranslate() {
            let t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (setTranslate(), e.params.autoHeight && e.updateAutoHeight())
              : (("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || setTranslate(),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          let s = this.params.direction;
          return (
            e || (e = "horizontal" === s ? "vertical" : "horizontal"),
            e === s ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.$el
                .removeClass(`${this.params.containerModifierClass}${s}`)
                .addClass(`${this.params.containerModifierClass}${e}`),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.$el.addClass(`${this.params.containerModifierClass}rtl`),
                (this.el.dir = "rtl"))
              : (this.$el.removeClass(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let s = dom7_esm_$(e || t.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = t;
          let getWrapperSelector = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            i = (() => {
              if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                let t = dom7_esm_$(
                  e.shadowRoot.querySelector(getWrapperSelector())
                );
                return (t.children = (e) => s.children(e)), t;
              }
              return s.children
                ? s.children(getWrapperSelector())
                : dom7_esm_$(s).children(getWrapperSelector());
            })();
          if (0 === i.length && t.params.createElements) {
            let e = ssr_window_esm_getDocument(),
              a = e.createElement("div");
            (i = dom7_esm_$(a)),
              (a.className = t.params.wrapperClass),
              s.append(a),
              s.children(`.${t.params.slideClass}`).each((e) => {
                i.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: s,
              el: e,
              $wrapperEl: i,
              wrapperEl: i[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
              wrongRTL: "-webkit-box" === i.css("display"),
            }),
            !0
          );
        }
        init(e) {
          if (this.initialized) return this;
          let t = this.mount(e);
          return (
            !1 === t ||
              (this.emit("beforeInit"),
              this.params.breakpoints && this.setBreakpoint(),
              this.addClasses(),
              this.params.loop && this.loopCreate(),
              this.updateSize(),
              this.updateSlides(),
              this.params.watchOverflow && this.checkOverflow(),
              this.params.grabCursor && this.enabled && this.setGrabCursor(),
              this.params.preloadImages && this.preloadImages(),
              this.params.loop
                ? this.slideTo(
                    this.params.initialSlide + this.loopedSlides,
                    0,
                    this.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : this.slideTo(
                    this.params.initialSlide,
                    0,
                    this.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              this.attachEvents(),
              (this.initialized = !0),
              this.emit("init"),
              this.emit("afterInit")),
            this
          );
        }
        destroy(e = !0, t = !0) {
          let s = this,
            { params: i, $el: a, $wrapperEl: r, slides: n } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                a.removeAttr("style"),
                r.removeAttr("style"),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                (function (e) {
                  Object.keys(e).forEach((t) => {
                    try {
                      e[t] = null;
                    } catch (e) {}
                    try {
                      delete e[t];
                    } catch (e) {}
                  });
                })(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          utils_extend(h, e);
        }
        static get extendedDefaults() {
          return h;
        }
        static get defaults() {
          return c;
        }
        static installModule(e) {
          Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
          let t = Swiper.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => Swiper.installModule(e))
              : Swiper.installModule(e),
            Swiper
          );
        }
      };
      Object.keys(u).forEach((e) => {
        Object.keys(u[e]).forEach((t) => {
          Swiper.prototype[t] = u[e][t];
        });
      }),
        Swiper.use([
          function ({ swiper: e, on: t, emit: s }) {
            let i = ssr_window_esm_getWindow(),
              a = null,
              r = null,
              resizeHandler = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              createObserver = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (a = new ResizeObserver((t) => {
                    r = i.requestAnimationFrame(() => {
                      let { width: s, height: i } = e,
                        a = s,
                        r = i;
                      t.forEach(
                        ({ contentBoxSize: t, contentRect: s, target: i }) => {
                          (i && i !== e.el) ||
                            ((a = s ? s.width : (t[0] || t).inlineSize),
                            (r = s ? s.height : (t[0] || t).blockSize));
                        }
                      ),
                        (a !== s || r !== i) && resizeHandler();
                    });
                  })).observe(e.el);
              },
              removeObserver = () => {
                r && i.cancelAnimationFrame(r),
                  a && a.unobserve && e.el && (a.unobserve(e.el), (a = null));
              },
              orientationChangeHandler = () => {
                e && !e.destroyed && e.initialized && s("orientationchange");
              };
            t("init", () => {
              if (e.params.resizeObserver && void 0 !== i.ResizeObserver) {
                createObserver();
                return;
              }
              i.addEventListener("resize", resizeHandler),
                i.addEventListener(
                  "orientationchange",
                  orientationChangeHandler
                );
            }),
              t("destroy", () => {
                removeObserver(),
                  i.removeEventListener("resize", resizeHandler),
                  i.removeEventListener(
                    "orientationchange",
                    orientationChangeHandler
                  );
              });
          },
          function ({ swiper: e, extendParams: t, on: s, emit: i }) {
            let a = [],
              r = ssr_window_esm_getWindow(),
              attach = (e, t = {}) => {
                let s = r.MutationObserver || r.WebkitMutationObserver,
                  n = new s((e) => {
                    if (1 === e.length) {
                      i("observerUpdate", e[0]);
                      return;
                    }
                    let observerUpdate = function () {
                      i("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(observerUpdate)
                      : r.setTimeout(observerUpdate, 0);
                  });
                n.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  a.push(n);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    let t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) attach(t[e]);
                  }
                  attach(e.$el[0], {
                    childList: e.params.observeSlideChildren,
                  }),
                    attach(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              s("destroy", () => {
                a.forEach((e) => {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              });
          },
        ]);
      var m = Swiper;
      function create_element_if_not_defined_createElementIfNotDefined(
        e,
        t,
        s,
        i
      ) {
        let a = ssr_window_esm_getDocument();
        return (
          e.params.createElements &&
            Object.keys(i).forEach((r) => {
              if (!s[r] && !0 === s.auto) {
                let n = e.$el.children(`.${i[r]}`)[0];
                n ||
                  (((n = a.createElement("div")).className = i[r]),
                  e.$el.append(n)),
                  (s[r] = n),
                  (t[r] = n);
              }
            }),
          s
        );
      }
      function Navigation({ swiper: e, extendParams: t, on: s, emit: i }) {
        function getEl(t) {
          let s;
          return (
            t &&
              ((s = dom7_esm_$(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                s.length > 1 &&
                1 === e.$el.find(t).length &&
                (s = e.$el.find(t))),
            s
          );
        }
        function toggleEl(t, s) {
          let i = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[s ? "addClass" : "removeClass"](i.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
        }
        function update() {
          if (e.params.loop) return;
          let { $nextEl: t, $prevEl: s } = e.navigation;
          toggleEl(s, e.isBeginning && !e.params.rewind),
            toggleEl(t, e.isEnd && !e.params.rewind);
        }
        function onPrevClick(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              (e.slidePrev(), i("navigationPrev"));
        }
        function onNextClick(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) &&
              (e.slideNext(), i("navigationNext"));
        }
        function init() {
          let t = e.params.navigation;
          if (
            ((e.params.navigation =
              create_element_if_not_defined_createElementIfNotDefined(
                e,
                e.originalParams.navigation,
                e.params.navigation,
                { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
              )),
            !(t.nextEl || t.prevEl))
          )
            return;
          let s = getEl(t.nextEl),
            i = getEl(t.prevEl);
          s && s.length > 0 && s.on("click", onNextClick),
            i && i.length > 0 && i.on("click", onPrevClick),
            Object.assign(e.navigation, {
              $nextEl: s,
              nextEl: s && s[0],
              $prevEl: i,
              prevEl: i && i[0],
            }),
            !e.enabled &&
              (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
        }
        function destroy() {
          let { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t.length &&
            (t.off("click", onNextClick),
            t.removeClass(e.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", onPrevClick),
              s.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            !1 === e.params.navigation.enabled ? disable() : (init(), update());
          }),
          s("toEdge fromEdge lock unlock", () => {
            update();
          }),
          s("destroy", () => {
            destroy();
          }),
          s("enable disable", () => {
            let { $nextEl: t, $prevEl: s } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              s &&
                s[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          s("click", (t, s) => {
            let { $nextEl: a, $prevEl: r } = e.navigation,
              n = s.target;
            if (
              e.params.navigation.hideOnClick &&
              !dom7_esm_$(n).is(r) &&
              !dom7_esm_$(n).is(a)
            ) {
              let t;
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === n || e.pagination.el.contains(n))
              )
                return;
              a
                ? (t = a.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                !0 === t ? i("navigationShow") : i("navigationHide"),
                a && a.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          });
        let disable = () => {
          e.$el.addClass(e.params.navigation.navigationDisabledClass),
            destroy();
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.$el.removeClass(e.params.navigation.navigationDisabledClass),
              init(),
              update();
          },
          disable,
          update,
          init,
          destroy,
        });
      }
      function classes_to_selector_classesToSelector(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      function Pagination({ swiper: e, extendParams: t, on: s, emit: i }) {
        let a;
        let r = "swiper-pagination";
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let n = 0;
        function isPaginationDisabled() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function setSideBullets(t, s) {
          let { bulletActiveClass: i } = e.params.pagination;
          t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
        }
        function update() {
          let t;
          let s = e.rtl,
            r = e.params.pagination;
          if (isPaginationDisabled()) return;
          let l =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            o = e.pagination.$el,
            d = e.params.loop
              ? Math.ceil((l - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((t = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )) >
                  l - 1 - 2 * e.loopedSlides && (t -= l - 2 * e.loopedSlides),
                t > d - 1 && (t -= d),
                t < 0 && "bullets" !== e.params.paginationType && (t = d + t))
              : (t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === r.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            let i, l, d;
            let p = e.pagination.bullets;
            if (
              (r.dynamicBullets &&
                ((a = p
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                o.css(
                  e.isHorizontal() ? "width" : "height",
                  `${a * (r.dynamicMainBullets + 4)}px`
                ),
                r.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((n += t - (e.previousIndex - e.loopedSlides || 0)) >
                  r.dynamicMainBullets - 1
                    ? (n = r.dynamicMainBullets - 1)
                    : n < 0 && (n = 0)),
                (d =
                  ((l =
                    (i = Math.max(t - n, 0)) +
                    (Math.min(p.length, r.dynamicMainBullets) - 1)) +
                    i) /
                  2)),
              p.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${r.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              o.length > 1)
            )
              p.each((e) => {
                let s = dom7_esm_$(e),
                  a = s.index();
                a === t && s.addClass(r.bulletActiveClass),
                  r.dynamicBullets &&
                    (a >= i &&
                      a <= l &&
                      s.addClass(`${r.bulletActiveClass}-main`),
                    a === i && setSideBullets(s, "prev"),
                    a === l && setSideBullets(s, "next"));
              });
            else {
              let s = p.eq(t),
                a = s.index();
              if ((s.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                let t = p.eq(i),
                  s = p.eq(l);
                for (let e = i; e <= l; e += 1)
                  p.eq(e).addClass(`${r.bulletActiveClass}-main`);
                if (e.params.loop) {
                  if (a >= p.length) {
                    for (let e = r.dynamicMainBullets; e >= 0; e -= 1)
                      p.eq(p.length - e).addClass(
                        `${r.bulletActiveClass}-main`
                      );
                    p.eq(p.length - r.dynamicMainBullets - 1).addClass(
                      `${r.bulletActiveClass}-prev`
                    );
                  } else setSideBullets(t, "prev"), setSideBullets(s, "next");
                } else setSideBullets(t, "prev"), setSideBullets(s, "next");
              }
            }
            if (r.dynamicBullets) {
              let t = Math.min(p.length, r.dynamicMainBullets + 4),
                i = (a * t - a) / 2 - d * a;
              p.css(
                e.isHorizontal() ? (s ? "right" : "left") : "top",
                `${i}px`
              );
            }
          }
          if (
            ("fraction" === r.type &&
              (o
                .find(classes_to_selector_classesToSelector(r.currentClass))
                .text(r.formatFractionCurrent(t + 1)),
              o
                .find(classes_to_selector_classesToSelector(r.totalClass))
                .text(r.formatFractionTotal(d))),
            "progressbar" === r.type)
          ) {
            let s;
            s = r.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            let i = (t + 1) / d,
              a = 1,
              n = 1;
            "horizontal" === s ? (a = i) : (n = i),
              o
                .find(
                  classes_to_selector_classesToSelector(r.progressbarFillClass)
                )
                .transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${n})`)
                .transition(e.params.speed);
          }
          "custom" === r.type && r.renderCustom
            ? (o.html(r.renderCustom(e, t + 1, d)), i("paginationRender", o[0]))
            : i("paginationUpdate", o[0]),
            e.params.watchOverflow &&
              e.enabled &&
              o[e.isLocked ? "addClass" : "removeClass"](r.lockClass);
        }
        function render() {
          let t = e.params.pagination;
          if (isPaginationDisabled()) return;
          let s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            a = e.pagination.$el,
            r = "";
          if ("bullets" === t.type) {
            let i = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              i > s &&
              (i = s);
            for (let s = 0; s < i; s += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, s, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            a.html(r),
              (e.pagination.bullets = a.find(
                classes_to_selector_classesToSelector(t.bulletClass)
              ));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            a.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              a.html(r)),
            "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
        }
        function init() {
          e.params.pagination =
            create_element_if_not_defined_createElementIfNotDefined(
              e,
              e.originalParams.pagination,
              e.params.pagination,
              { el: "swiper-pagination" }
            );
          let t = e.params.pagination;
          if (!t.el) return;
          let s = dom7_esm_$(t.el);
          0 === s.length ||
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              s.length > 1 &&
              (s = e.$el.find(t.el)).length > 1 &&
              (s = s.filter(
                (t) => dom7_esm_$(t).parents(".swiper")[0] === e.el
              )),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (n = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              s.addClass(t.progressbarOppositeClass),
            t.clickable &&
              s.on(
                "click",
                classes_to_selector_classesToSelector(t.bulletClass),
                function (t) {
                  t.preventDefault();
                  let s = dom7_esm_$(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                }
              ),
            Object.assign(e.pagination, { $el: s, el: s[0] }),
            e.enabled || s.addClass(t.lockClass));
        }
        function destroy() {
          let t = e.params.pagination;
          if (isPaginationDisabled()) return;
          let s = e.pagination.$el;
          s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable &&
              s.off(
                "click",
                classes_to_selector_classesToSelector(t.bulletClass)
              );
        }
        s("init", () => {
          !1 === e.params.pagination.enabled
            ? disable()
            : (init(), render(), update());
        }),
          s("activeIndexChange", () => {
            e.params.loop ? update() : void 0 === e.snapIndex && update();
          }),
          s("snapIndexChange", () => {
            e.params.loop || update();
          }),
          s("slidesLengthChange", () => {
            e.params.loop && (render(), update());
          }),
          s("snapGridLengthChange", () => {
            e.params.loop || (render(), update());
          }),
          s("destroy", () => {
            destroy();
          }),
          s("enable disable", () => {
            let { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            update();
          }),
          s("click", (t, s) => {
            let a = s.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !dom7_esm_$(a).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return;
              let t = r.hasClass(e.params.pagination.hiddenClass);
              !0 === t ? i("paginationShow") : i("paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          });
        let disable = () => {
          e.$el.addClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.addClass(
                e.params.pagination.paginationDisabledClass
              ),
            destroy();
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.removeClass(
                  e.params.pagination.paginationDisabledClass
                ),
              init(),
              render(),
              update();
          },
          disable,
          render,
          update,
          init,
          destroy,
        });
      }
      function Lazy({ swiper: e, extendParams: t, on: s, emit: i }) {
        t({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (e.lazy = {});
        let a = !1,
          r = !1;
        function loadInSlide(t, s = !0) {
          let a = e.params.lazy;
          if (void 0 === t || 0 === e.slides.length) return;
          let r = e.virtual && e.params.virtual.enabled,
            n = r
              ? e.$wrapperEl.children(
                  `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                )
              : e.slides.eq(t),
            l = n.find(
              `.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
            );
          !n.hasClass(a.elementClass) ||
            n.hasClass(a.loadedClass) ||
            n.hasClass(a.loadingClass) ||
            l.push(n[0]),
            0 !== l.length &&
              l.each((t) => {
                let r = dom7_esm_$(t);
                r.addClass(a.loadingClass);
                let l = r.attr("data-background"),
                  o = r.attr("data-src"),
                  d = r.attr("data-srcset"),
                  p = r.attr("data-sizes"),
                  c = r.parent("picture");
                e.loadImage(r[0], o || l, d, p, !1, () => {
                  if (null != e && e && (!e || e.params) && !e.destroyed) {
                    if (
                      (l
                        ? (r.css("background-image", `url("${l}")`),
                          r.removeAttr("data-background"))
                        : (d &&
                            (r.attr("srcset", d), r.removeAttr("data-srcset")),
                          p && (r.attr("sizes", p), r.removeAttr("data-sizes")),
                          c.length &&
                            c.children("source").each((e) => {
                              let t = dom7_esm_$(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          o && (r.attr("src", o), r.removeAttr("data-src"))),
                      r.addClass(a.loadedClass).removeClass(a.loadingClass),
                      n.find(`.${a.preloaderClass}`).remove(),
                      e.params.loop && s)
                    ) {
                      let t = n.attr("data-swiper-slide-index");
                      if (n.hasClass(e.params.slideDuplicateClass)) {
                        let s = e.$wrapperEl.children(
                          `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                        );
                        loadInSlide(s.index(), !1);
                      } else {
                        let s = e.$wrapperEl.children(
                          `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                        );
                        loadInSlide(s.index(), !1);
                      }
                    }
                    i("lazyImageReady", n[0], r[0]),
                      e.params.autoHeight && e.updateAutoHeight();
                  }
                }),
                  i("lazyImageLoad", n[0], r[0]);
              });
        }
        function load() {
          let { $wrapperEl: t, params: s, slides: i, activeIndex: a } = e,
            n = e.virtual && s.virtual.enabled,
            l = s.lazy,
            o = s.slidesPerView;
          function slideExist(e) {
            if (n) {
              if (
                t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                  .length
              )
                return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function slideIndex(e) {
            return n
              ? dom7_esm_$(e).attr("data-swiper-slide-index")
              : dom7_esm_$(e).index();
          }
          if (
            ("auto" === o && (o = 0),
            r || (r = !0),
            e.params.watchSlidesProgress)
          )
            t.children(`.${s.slideVisibleClass}`).each((e) => {
              let t = n
                ? dom7_esm_$(e).attr("data-swiper-slide-index")
                : dom7_esm_$(e).index();
              loadInSlide(t);
            });
          else if (o > 1)
            for (let e = a; e < a + o; e += 1) slideExist(e) && loadInSlide(e);
          else loadInSlide(a);
          if (l.loadPrevNext) {
            if (o > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              let e = l.loadPrevNextAmount,
                t = Math.ceil(o),
                s = Math.min(a + t + Math.max(e, t), i.length),
                r = Math.max(a - Math.max(t, e), 0);
              for (let e = a + t; e < s; e += 1)
                slideExist(e) && loadInSlide(e);
              for (let e = r; e < a; e += 1) slideExist(e) && loadInSlide(e);
            } else {
              let e = t.children(`.${s.slideNextClass}`);
              e.length > 0 && loadInSlide(slideIndex(e));
              let i = t.children(`.${s.slidePrevClass}`);
              i.length > 0 && loadInSlide(slideIndex(i));
            }
          }
        }
        function checkInViewOnLoad() {
          let t = ssr_window_esm_getWindow();
          if (!e || e.destroyed) return;
          let s = e.params.lazy.scrollingElement
              ? dom7_esm_$(e.params.lazy.scrollingElement)
              : dom7_esm_$(t),
            i = s[0] === t,
            r = i ? t.innerWidth : s[0].offsetWidth,
            n = i ? t.innerHeight : s[0].offsetHeight,
            l = e.$el.offset(),
            { rtlTranslate: o } = e,
            d = !1;
          o && (l.left -= e.$el[0].scrollLeft);
          let p = [
            [l.left, l.top],
            [l.left + e.width, l.top],
            [l.left, l.top + e.height],
            [l.left + e.width, l.top + e.height],
          ];
          for (let e = 0; e < p.length; e += 1) {
            let t = p[e];
            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= n) {
              if (0 === t[0] && 0 === t[1]) continue;
              d = !0;
            }
          }
          let c = "touchstart" === e.touchEvents.start &&
            !!e.support.passiveListener &&
            !!e.params.passiveListeners && { passive: !0, capture: !1 };
          d
            ? (load(), s.off("scroll", checkInViewOnLoad, c))
            : a || ((a = !0), s.on("scroll", checkInViewOnLoad, c));
        }
        s("beforeInit", () => {
          e.params.lazy.enabled &&
            e.params.preloadImages &&
            (e.params.preloadImages = !1);
        }),
          s("init", () => {
            e.params.lazy.enabled &&
              (e.params.lazy.checkInView ? checkInViewOnLoad() : load());
          }),
          s("scroll", () => {
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.freeMode.sticky &&
              load();
          }),
          s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            e.params.lazy.enabled &&
              (e.params.lazy.checkInView ? checkInViewOnLoad() : load());
          }),
          s("transitionStart", () => {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart && !r)) &&
              (e.params.lazy.checkInView ? checkInViewOnLoad() : load());
          }),
          s("transitionEnd", () => {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              (e.params.lazy.checkInView ? checkInViewOnLoad() : load());
          }),
          s("slideChange", () => {
            let {
              lazy: t,
              cssMode: s,
              watchSlidesProgress: i,
              touchReleaseOnEdges: a,
              resistanceRatio: r,
            } = e.params;
            t.enabled && (s || (i && (a || 0 === r))) && load();
          }),
          s("destroy", () => {
            e.$el &&
              e.$el
                .find(`.${e.params.lazy.loadingClass}`)
                .removeClass(e.params.lazy.loadingClass);
          }),
          Object.assign(e.lazy, { load, loadInSlide });
      }
      function Autoplay({ swiper: e, extendParams: t, on: s, emit: i }) {
        let a;
        function run() {
          if (!e.size) {
            (e.autoplay.running = !1), (e.autoplay.paused = !1);
            return;
          }
          let t = e.slides.eq(e.activeIndex),
            s = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(a),
            (a = utils_nextTick(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    i("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? stop()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      i("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  i("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? stop()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
                e.params.cssMode && e.autoplay.running
                  ? run()
                  : !1 === t && run();
            }, s));
        }
        function start() {
          return (
            void 0 === a &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), i("autoplayStart"), run(), !0)
          );
        }
        function stop() {
          return (
            !!e.autoplay.running &&
            void 0 !== a &&
            (a && (clearTimeout(a), (a = void 0)),
            (e.autoplay.running = !1),
            i("autoplayStop"),
            !0)
          );
        }
        function pause(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (a && clearTimeout(a),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, onTransitionEnd);
                  })
                : ((e.autoplay.paused = !1), run())));
        }
        function onVisibilityChange() {
          let t = ssr_window_esm_getDocument();
          "hidden" === t.visibilityState && e.autoplay.running && pause(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (run(), (e.autoplay.paused = !1));
        }
        function onTransitionEnd(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, onTransitionEnd);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? run() : stop());
        }
        function onMouseEnter() {
          e.params.autoplay.disableOnInteraction
            ? stop()
            : (i("autoplayPause"), pause()),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, onTransitionEnd);
            });
        }
        function onMouseLeave() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), i("autoplayResume"), run());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          s("init", () => {
            if (e.params.autoplay.enabled) {
              start();
              let t = ssr_window_esm_getDocument();
              t.addEventListener("visibilitychange", onVisibilityChange),
                e.params.autoplay.pauseOnMouseEnter &&
                  (e.$el.on("mouseenter", onMouseEnter),
                  e.$el.on("mouseleave", onMouseLeave));
            }
          }),
          s("beforeTransitionStart", (t, s, i) => {
            e.autoplay.running &&
              (i || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(s)
                : stop());
          }),
          s("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? stop() : pause());
          }),
          s("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              run();
          }),
          s("destroy", () => {
            e.$el.off("mouseenter", onMouseEnter),
              e.$el.off("mouseleave", onMouseLeave),
              e.autoplay.running && stop();
            let t = ssr_window_esm_getDocument();
            t.removeEventListener("visibilitychange", onVisibilityChange);
          }),
          Object.assign(e.autoplay, { pause, run, start, stop });
      }
      function Thumb({ swiper: e, extendParams: t, on: s }) {
        t({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let i = !1,
          a = !1;
        function onThumbClick() {
          let t;
          let s = e.thumbs.swiper;
          if (!s || s.destroyed) return;
          let i = s.clickedIndex,
            a = s.clickedSlide;
          if (
            !(
              a && dom7_esm_$(a).hasClass(e.params.thumbs.slideThumbActiveClass)
            ) &&
            null != i
          ) {
            if (
              ((t = s.params.loop
                ? parseInt(
                    dom7_esm_$(s.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : i),
              e.params.loop)
            ) {
              let s = e.activeIndex;
              e.slides.eq(s).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (s = e.activeIndex));
              let i = e.slides
                  .eq(s)
                  .prevAll(`[data-swiper-slide-index="${t}"]`)
                  .eq(0)
                  .index(),
                a = e.slides
                  .eq(s)
                  .nextAll(`[data-swiper-slide-index="${t}"]`)
                  .eq(0)
                  .index();
              t = void 0 === i ? a : void 0 === a ? i : a - s < s - i ? a : i;
            }
            e.slideTo(t);
          }
        }
        function init() {
          let { thumbs: t } = e.params;
          if (i) return !1;
          i = !0;
          let s = e.constructor;
          if (t.swiper instanceof s)
            (e.thumbs.swiper = t.swiper),
              Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (utils_isObject(t.swiper)) {
            let i = Object.assign({}, t.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (e.thumbs.swiper = new s(i)),
              (a = !0);
          }
          return (
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", onThumbClick),
            !0
          );
        }
        function update(t) {
          let s = e.thumbs.swiper;
          if (!s || s.destroyed) return;
          let i =
              "auto" === s.params.slidesPerView
                ? s.slidesPerViewDynamic()
                : s.params.slidesPerView,
            a = 1,
            r = e.params.thumbs.slideThumbActiveClass;
          if (
            (e.params.slidesPerView > 1 &&
              !e.params.centeredSlides &&
              (a = e.params.slidesPerView),
            e.params.thumbs.multipleActiveThumbs || (a = 1),
            (a = Math.floor(a)),
            s.slides.removeClass(r),
            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
          )
            for (let t = 0; t < a; t += 1)
              s.$wrapperEl
                .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
                .addClass(r);
          else
            for (let t = 0; t < a; t += 1)
              s.slides.eq(e.realIndex + t).addClass(r);
          let n = e.params.thumbs.autoScrollOffset,
            l = n && !s.params.loop;
          if (e.realIndex !== s.realIndex || l) {
            let a,
              r,
              o = s.activeIndex;
            if (s.params.loop) {
              s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
                (s.loopFix(),
                (s._clientLeft = s.$wrapperEl[0].clientLeft),
                (o = s.activeIndex));
              let t = s.slides
                  .eq(o)
                  .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index(),
                i = s.slides
                  .eq(o)
                  .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index();
              (a =
                void 0 === t
                  ? i
                  : void 0 === i
                  ? t
                  : i - o == o - t
                  ? s.params.slidesPerGroup > 1
                    ? i
                    : o
                  : i - o < o - t
                  ? i
                  : t),
                (r = e.activeIndex > e.previousIndex ? "next" : "prev");
            } else r = (a = e.realIndex) > e.previousIndex ? "next" : "prev";
            l && (a += "next" === r ? n : -1 * n),
              s.visibleSlidesIndexes &&
                0 > s.visibleSlidesIndexes.indexOf(a) &&
                (s.params.centeredSlides
                  ? (a =
                      a > o
                        ? a - Math.floor(i / 2) + 1
                        : a + Math.floor(i / 2) - 1)
                  : a > o && s.params.slidesPerGroup,
                s.slideTo(a, t ? 0 : void 0));
          }
        }
        (e.thumbs = { swiper: null }),
          s("beforeInit", () => {
            let { thumbs: t } = e.params;
            t && t.swiper && (init(), update(!0));
          }),
          s("slideChange update resize observerUpdate", () => {
            update();
          }),
          s("setTransition", (t, s) => {
            let i = e.thumbs.swiper;
            i && !i.destroyed && i.setTransition(s);
          }),
          s("beforeDestroy", () => {
            let t = e.thumbs.swiper;
            t && !t.destroyed && a && t.destroy();
          }),
          Object.assign(e.thumbs, { init, update });
      }
      function freeMode({ swiper: e, extendParams: t, emit: s, once: i }) {
        t({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(e, {
            freeMode: {
              onTouchStart: function () {
                let t = e.getTranslate();
                e.setTranslate(t),
                  e.setTransition(0),
                  (e.touchEventsData.velocities.length = 0),
                  e.freeMode.onTouchEnd({
                    currentPos: e.rtl ? e.translate : -e.translate,
                  });
              },
              onTouchMove: function () {
                let { touchEventsData: t, touches: s } = e;
                0 === t.velocities.length &&
                  t.velocities.push({
                    position: s[e.isHorizontal() ? "startX" : "startY"],
                    time: t.touchStartTime,
                  }),
                  t.velocities.push({
                    position: s[e.isHorizontal() ? "currentX" : "currentY"],
                    time: utils_now(),
                  });
              },
              onTouchEnd: function ({ currentPos: t }) {
                let {
                    params: a,
                    $wrapperEl: r,
                    rtlTranslate: n,
                    snapGrid: l,
                    touchEventsData: o,
                  } = e,
                  d = utils_now(),
                  p = d - o.touchStartTime;
                if (t < -e.minTranslate()) {
                  e.slideTo(e.activeIndex);
                  return;
                }
                if (t > -e.maxTranslate()) {
                  e.slides.length < l.length
                    ? e.slideTo(l.length - 1)
                    : e.slideTo(e.slides.length - 1);
                  return;
                }
                if (a.freeMode.momentum) {
                  let t, d;
                  if (o.velocities.length > 1) {
                    let t = o.velocities.pop(),
                      s = o.velocities.pop(),
                      i = t.position - s.position,
                      r = t.time - s.time;
                    (e.velocity = i / r),
                      (e.velocity /= 2),
                      Math.abs(e.velocity) < a.freeMode.minimumVelocity &&
                        (e.velocity = 0),
                      (r > 150 || utils_now() - t.time > 300) &&
                        (e.velocity = 0);
                  } else e.velocity = 0;
                  (e.velocity *= a.freeMode.momentumVelocityRatio),
                    (o.velocities.length = 0);
                  let p = 1e3 * a.freeMode.momentumRatio,
                    c = e.velocity * p,
                    u = e.translate + c;
                  n && (u = -u);
                  let h = !1,
                    m =
                      20 *
                      Math.abs(e.velocity) *
                      a.freeMode.momentumBounceRatio;
                  if (u < e.maxTranslate())
                    a.freeMode.momentumBounce
                      ? (u + e.maxTranslate() < -m &&
                          (u = e.maxTranslate() - m),
                        (t = e.maxTranslate()),
                        (h = !0),
                        (o.allowMomentumBounce = !0))
                      : (u = e.maxTranslate()),
                      a.loop && a.centeredSlides && (d = !0);
                  else if (u > e.minTranslate())
                    a.freeMode.momentumBounce
                      ? (u - e.minTranslate() > m && (u = e.minTranslate() + m),
                        (t = e.minTranslate()),
                        (h = !0),
                        (o.allowMomentumBounce = !0))
                      : (u = e.minTranslate()),
                      a.loop && a.centeredSlides && (d = !0);
                  else if (a.freeMode.sticky) {
                    let t;
                    for (let e = 0; e < l.length; e += 1)
                      if (l[e] > -u) {
                        t = e;
                        break;
                      }
                    u = -(u =
                      Math.abs(l[t] - u) < Math.abs(l[t - 1] - u) ||
                      "next" === e.swipeDirection
                        ? l[t]
                        : l[t - 1]);
                  }
                  if (
                    (d &&
                      i("transitionEnd", () => {
                        e.loopFix();
                      }),
                    0 !== e.velocity)
                  ) {
                    if (
                      ((p = n
                        ? Math.abs((-u - e.translate) / e.velocity)
                        : Math.abs((u - e.translate) / e.velocity)),
                      a.freeMode.sticky)
                    ) {
                      let t = Math.abs((n ? -u : u) - e.translate),
                        s = e.slidesSizesGrid[e.activeIndex];
                      p =
                        t < s
                          ? a.speed
                          : t < 2 * s
                          ? 1.5 * a.speed
                          : 2.5 * a.speed;
                    }
                  } else if (a.freeMode.sticky) {
                    e.slideToClosest();
                    return;
                  }
                  a.freeMode.momentumBounce && h
                    ? (e.updateProgress(t),
                      e.setTransition(p),
                      e.setTranslate(u),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      r.transitionEnd(() => {
                        e &&
                          !e.destroyed &&
                          o.allowMomentumBounce &&
                          (s("momentumBounce"),
                          e.setTransition(a.speed),
                          setTimeout(() => {
                            e.setTranslate(t),
                              r.transitionEnd(() => {
                                e && !e.destroyed && e.transitionEnd();
                              });
                          }, 0));
                      }))
                    : e.velocity
                    ? (s("_freeModeNoMomentumRelease"),
                      e.updateProgress(u),
                      e.setTransition(p),
                      e.setTranslate(u),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        r.transitionEnd(() => {
                          e && !e.destroyed && e.transitionEnd();
                        })))
                    : e.updateProgress(u),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                } else if (a.freeMode.sticky) {
                  e.slideToClosest();
                  return;
                } else a.freeMode && s("_freeModeNoMomentumRelease");
                (!a.freeMode.momentum || p >= a.longSwipesMs) &&
                  (e.updateProgress(),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses());
              },
            },
          });
      }
      function effect_init_effectInit(e) {
        let t;
        let {
          effect: s,
          swiper: i,
          on: a,
          setTranslate: r,
          setTransition: n,
          overwriteParams: l,
          perspective: o,
          recreateShadows: d,
          getEffectParams: p,
        } = e;
        a("beforeInit", () => {
          if (i.params.effect !== s) return;
          i.classNames.push(`${i.params.containerModifierClass}${s}`),
            o &&
              o() &&
              i.classNames.push(`${i.params.containerModifierClass}3d`);
          let e = l ? l() : {};
          Object.assign(i.params, e), Object.assign(i.originalParams, e);
        }),
          a("setTranslate", () => {
            i.params.effect === s && r();
          }),
          a("setTransition", (e, t) => {
            i.params.effect === s && n(t);
          }),
          a("transitionEnd", () => {
            i.params.effect === s &&
              d &&
              p &&
              p().slideShadows &&
              (i.slides.each((e) => {
                let t = i.$(e);
                t.find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                ).remove();
              }),
              d());
          }),
          a("virtualUpdate", () => {
            i.params.effect === s &&
              (i.slides.length || (t = !0),
              requestAnimationFrame(() => {
                t && i.slides && i.slides.length && (r(), (t = !1));
              }));
          });
      }
      function effect_target_effectTarget(e, t) {
        return e.transformEl
          ? t
              .find(e.transformEl)
              .css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden",
              })
          : t;
      }
      function EffectFade({ swiper: e, extendParams: t, on: s }) {
        t({ fadeEffect: { crossFade: !1, transformEl: null } }),
          effect_init_effectInit({
            effect: "fade",
            swiper: e,
            on: s,
            setTranslate: () => {
              let { slides: t } = e,
                s = e.params.fadeEffect;
              for (let i = 0; i < t.length; i += 1) {
                let t = e.slides.eq(i),
                  a = t[0].swiperSlideOffset,
                  r = -a;
                e.params.virtualTranslate || (r -= e.translate);
                let n = 0;
                e.isHorizontal() || ((n = r), (r = 0));
                let l = e.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(t[0].progress), 0)
                    : 1 + Math.min(Math.max(t[0].progress, -1), 0),
                  o = effect_target_effectTarget(s, t);
                o.css({ opacity: l }).transform(
                  `translate3d(${r}px, ${n}px, 0px)`
                );
              }
            },
            setTransition: (t) => {
              let { transformEl: s } = e.params.fadeEffect,
                i = s ? e.slides.find(s) : e.slides;
              i.transition(t),
                (function ({
                  swiper: e,
                  duration: t,
                  transformEl: s,
                  allSlides: i,
                }) {
                  let { slides: a, activeIndex: r, $wrapperEl: n } = e;
                  if (e.params.virtualTranslate && 0 !== t) {
                    let t = !1;
                    (i
                      ? s
                        ? a.find(s)
                        : a
                      : s
                      ? a.eq(r).find(s)
                      : a.eq(r)
                    ).transitionEnd(() => {
                      if (t || !e || e.destroyed) return;
                      (t = !0), (e.animating = !1);
                      let s = ["webkitTransitionEnd", "transitionend"];
                      for (let e = 0; e < s.length; e += 1) n.trigger(s[e]);
                    });
                  }
                })({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !e.params.cssMode,
            }),
          });
      }
      function create_shadow_createShadow(e, t, s) {
        let i = `swiper-slide-shadow${s ? `-${s}` : ""}`,
          a = e.transformEl ? t.find(e.transformEl) : t,
          r = a.children(`.${i}`);
        return (
          r.length ||
            ((r = dom7_esm_$(
              `<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`
            )),
            a.append(r)),
          r
        );
      }
      function EffectCoverflow({ swiper: e, extendParams: t, on: s }) {
        t({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null,
          },
        }),
          effect_init_effectInit({
            effect: "coverflow",
            swiper: e,
            on: s,
            setTranslate: () => {
              let { width: t, height: s, slides: i, slidesSizesGrid: a } = e,
                r = e.params.coverflowEffect,
                n = e.isHorizontal(),
                l = e.translate,
                o = n ? -l + t / 2 : -l + s / 2,
                d = n ? r.rotate : -r.rotate,
                p = r.depth;
              for (let e = 0, t = i.length; e < t; e += 1) {
                let t = i.eq(e),
                  s = a[e],
                  l = t[0].swiperSlideOffset,
                  c = (o - l - s / 2) / s,
                  u =
                    "function" == typeof r.modifier
                      ? r.modifier(c)
                      : c * r.modifier,
                  h = n ? d * u : 0,
                  m = n ? 0 : d * u,
                  f = -p * Math.abs(u),
                  g = r.stretch;
                "string" == typeof g &&
                  -1 !== g.indexOf("%") &&
                  (g = (parseFloat(r.stretch) / 100) * s);
                let v = n ? 0 : g * u,
                  w = n ? g * u : 0,
                  b = 1 - (1 - r.scale) * Math.abs(u);
                0.001 > Math.abs(w) && (w = 0),
                  0.001 > Math.abs(v) && (v = 0),
                  0.001 > Math.abs(f) && (f = 0),
                  0.001 > Math.abs(h) && (h = 0),
                  0.001 > Math.abs(m) && (m = 0),
                  0.001 > Math.abs(b) && (b = 0);
                let y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${m}deg) rotateY(${h}deg) scale(${b})`,
                  C = effect_target_effectTarget(r, t);
                if (
                  (C.transform(y),
                  (t[0].style.zIndex = -Math.abs(Math.round(u)) + 1),
                  r.slideShadows)
                ) {
                  let e = n
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    s = n
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length &&
                    (e = create_shadow_createShadow(r, t, n ? "left" : "top")),
                    0 === s.length &&
                      (s = create_shadow_createShadow(
                        r,
                        t,
                        n ? "right" : "bottom"
                      )),
                    e.length && (e[0].style.opacity = u > 0 ? u : 0),
                    s.length && (s[0].style.opacity = -u > 0 ? -u : 0);
                }
              }
            },
            setTransition: (t) => {
              let { transformEl: s } = e.params.coverflowEffect,
                i = s ? e.slides.find(s) : e.slides;
              i.transition(t)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(t);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      }
    },
  },
]);
