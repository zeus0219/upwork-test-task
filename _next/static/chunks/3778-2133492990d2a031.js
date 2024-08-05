"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3778],
  {
    19716: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      });
      var o = n(75068),
        r = n(67294),
        i = (function () {
          if ("undefined" != typeof Map) return Map;
          function getIndex(e, t) {
            var n = -1;
            return (
              e.some(function (e, o) {
                return e[0] === t && ((n = o), !0);
              }),
              n
            );
          }
          return (function () {
            function class_1() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(class_1.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (class_1.prototype.get = function (e) {
                var t = getIndex(this.__entries__, e),
                  n = this.__entries__[t];
                return n && n[1];
              }),
              (class_1.prototype.set = function (e, t) {
                var n = getIndex(this.__entries__, e);
                ~n
                  ? (this.__entries__[n][1] = t)
                  : this.__entries__.push([e, t]);
              }),
              (class_1.prototype.delete = function (e) {
                var t = this.__entries__,
                  n = getIndex(t, e);
                ~n && t.splice(n, 1);
              }),
              (class_1.prototype.has = function (e) {
                return !!~getIndex(this.__entries__, e);
              }),
              (class_1.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (class_1.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, o = this.__entries__; n < o.length; n++) {
                  var r = o[n];
                  e.call(t, r[1], r[0]);
                }
              }),
              class_1
            );
          })();
        })(),
        s =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        a =
          void 0 !== n.g && n.g.Math === Math
            ? n.g
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        c =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(a)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              },
        l = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        h = "undefined" != typeof MutationObserver,
        f = (function () {
          function ResizeObserverController() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var n = !1,
                  o = !1,
                  r = 0;
                function resolvePending() {
                  n && ((n = !1), e()), o && proxy();
                }
                function timeoutCallback() {
                  c(resolvePending);
                }
                function proxy() {
                  var e = Date.now();
                  if (n) {
                    if (e - r < 2) return;
                    o = !0;
                  } else (n = !0), (o = !1), setTimeout(timeoutCallback, 20);
                  r = e;
                }
                return proxy;
              })(this.refresh.bind(this), 0));
          }
          return (
            (ResizeObserverController.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (ResizeObserverController.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e);
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (ResizeObserverController.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (ResizeObserverController.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (ResizeObserverController.prototype.connect_ = function () {
              s &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                h
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (ResizeObserverController.prototype.disconnect_ = function () {
              s &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (ResizeObserverController.prototype.onTransitionEnd_ = function (
              e
            ) {
              var t = e.propertyName,
                n = void 0 === t ? "" : t;
              l.some(function (e) {
                return !!~n.indexOf(e);
              }) && this.refresh();
            }),
            (ResizeObserverController.getInstance = function () {
              return (
                this.instance_ ||
                  (this.instance_ = new ResizeObserverController()),
                this.instance_
              );
            }),
            (ResizeObserverController.instance_ = null),
            ResizeObserverController
          );
        })(),
        defineConfigurable = function (e, t) {
          for (var n = 0, o = Object.keys(t); n < o.length; n++) {
            var r = o[n];
            Object.defineProperty(e, r, {
              value: t[r],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        getWindowOf = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || a;
        },
        d = createRectInit(0, 0, 0, 0);
      function toFloat(e) {
        return parseFloat(e) || 0;
      }
      function getBordersSize(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
          return t + toFloat(e["border-" + n + "-width"]);
        }, 0);
      }
      var u =
        "undefined" != typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof getWindowOf(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof getWindowOf(e).SVGElement &&
                "function" == typeof e.getBBox
              );
            };
      function createRectInit(e, t, n, o) {
        return { x: e, y: t, width: n, height: o };
      }
      var p = (function () {
          function ResizeObservation(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = createRectInit(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (ResizeObservation.prototype.isActive = function () {
              var e = (function (e) {
                if (!s) return d;
                if (u(e)) {
                  var t;
                  return createRectInit(
                    0,
                    0,
                    (t = e.getBBox()).width,
                    t.height
                  );
                }
                return (function (e) {
                  var t = e.clientWidth,
                    n = e.clientHeight;
                  if (!t && !n) return d;
                  var o = getWindowOf(e).getComputedStyle(e),
                    r = (function (e) {
                      for (
                        var t = {},
                          n = 0,
                          o = ["top", "right", "bottom", "left"];
                        n < o.length;
                        n++
                      ) {
                        var r = o[n],
                          i = e["padding-" + r];
                        t[r] = toFloat(i);
                      }
                      return t;
                    })(o),
                    i = r.left + r.right,
                    s = r.top + r.bottom,
                    a = toFloat(o.width),
                    c = toFloat(o.height);
                  if (
                    ("border-box" === o.boxSizing &&
                      (Math.round(a + i) !== t &&
                        (a -= getBordersSize(o, "left", "right") + i),
                      Math.round(c + s) !== n &&
                        (c -= getBordersSize(o, "top", "bottom") + s)),
                    e !== getWindowOf(e).document.documentElement)
                  ) {
                    var l = Math.round(a + i) - t,
                      h = Math.round(c + s) - n;
                    1 !== Math.abs(l) && (a -= l),
                      1 !== Math.abs(h) && (c -= h);
                  }
                  return createRectInit(r.left, r.top, a, c);
                })(e);
              })(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (ResizeObservation.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            ResizeObservation
          );
        })(),
        ResizeObserverEntry = function (e, t) {
          var n,
            o,
            r,
            i,
            s,
            a =
              ((n = t.x),
              (o = t.y),
              (r = t.width),
              (i = t.height),
              defineConfigurable(
                (s = Object.create(
                  ("undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object
                  ).prototype
                )),
                {
                  x: n,
                  y: o,
                  width: r,
                  height: i,
                  top: o,
                  right: n + r,
                  bottom: i + o,
                  left: n,
                }
              ),
              s);
          defineConfigurable(this, { target: e, contentRect: a });
        },
        v = (function () {
          function ResizeObserverSPI(e, t, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new i()),
              "function" != typeof e)
            )
              throw TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = n);
          }
          return (
            (ResizeObserverSPI.prototype.observe = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof getWindowOf(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new p(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (ResizeObserverSPI.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof getWindowOf(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (ResizeObserverSPI.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (ResizeObserverSPI.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (ResizeObserverSPI.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new ResizeObserverEntry(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (ResizeObserverSPI.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (ResizeObserverSPI.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            ResizeObserverSPI
          );
        })(),
        b = "undefined" != typeof WeakMap ? new WeakMap() : new i(),
        ResizeObserver = function ResizeObserver(e) {
          if (!(this instanceof ResizeObserver))
            throw TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw TypeError("1 argument required, but only 0 present.");
          var t = f.getInstance(),
            n = new v(e, t, this);
          b.set(this, n);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        ResizeObserver.prototype[e] = function () {
          var t;
          return (t = b.get(this))[e].apply(t, arguments);
        };
      });
      var g = void 0 !== a.ResizeObserver ? a.ResizeObserver : ResizeObserver,
        getScrollParent = function (e) {
          for (var t = e; (t = t.parentElement); ) {
            var n = getComputedStyle(t, null).getPropertyValue("overflow-y");
            if (t === document.body) break;
            if ("auto" === n || "scroll" === n) return t;
          }
          return window;
        },
        offsetTill = function (e, t) {
          var n = e,
            o = 0;
          t.firstChild &&
            t.firstChild.offsetParent !== t &&
            ((o += e.offsetTop - t.offsetTop),
            (t = e.offsetParent),
            (o += -e.offsetTop));
          do (o += n.offsetTop), (n = n.offsetParent);
          while (n && n !== t);
          return o;
        },
        m = null;
      "undefined" != typeof CSS &&
        CSS.supports &&
        (CSS.supports("position", "sticky")
          ? (m = "sticky")
          : CSS.supports("position", "-webkit-sticky") &&
            (m = "-webkit-sticky"));
      var _ = !1;
      try {
        var y = Object.defineProperty({}, "passive", {
          get: function () {
            _ = { passive: !0 };
          },
        });
        window.addEventListener("testPassive", null, y),
          window.removeEventListener("testPassive", null, y);
      } catch (e) {}
      var O = (function (e) {
        function StickyBox(t) {
          var n = e.call(this, t) || this;
          return (
            (n.addListener = function (e, t, o, r) {
              e.addEventListener(t, o, r),
                n.unsubscribes.push(function () {
                  return e.removeEventListener(t, o);
                });
            }),
            (n.addResizeObserver = function (e, t) {
              var o = new g(t);
              o.observe(e),
                n.unsubscribes.push(function () {
                  return o.disconnect();
                });
            }),
            (n.registerContainerRef = function (e) {
              m &&
                ((n.node = e),
                e
                  ? ((n.scrollPane = getScrollParent(n.node)),
                    (n.latestScrollY =
                      n.scrollPane === window
                        ? window.scrollY
                        : n.scrollPane.scrollTop),
                    n.addListener(n.scrollPane, "scroll", n.handleScroll, _),
                    n.addListener(
                      n.scrollPane,
                      "mousewheel",
                      n.handleScroll,
                      _
                    ),
                    n.scrollPane === window
                      ? (n.addListener(window, "resize", n.handleWindowResize),
                        n.handleWindowResize())
                      : (n.addResizeObserver(
                          n.scrollPane,
                          n.handleScrollPaneResize
                        ),
                        n.handleScrollPaneResize()),
                    n.addResizeObserver(
                      n.node.parentNode,
                      n.handleParentNodeResize
                    ),
                    n.handleParentNodeResize(),
                    n.addResizeObserver(n.node, n.handleNodeResize),
                    n.handleNodeResize({ initial: !0 }),
                    n.initial())
                  : (n.unsubscribes.forEach(function (e) {
                      return e();
                    }),
                    (n.unsubscribes = []),
                    (n.scrollPane = null)));
            }),
            (n.getCurrentOffset = function () {
              if ("relative" === n.mode) return n.offset;
              var e = n.props,
                t = e.offsetTop,
                o = e.offsetBottom;
              return "stickyTop" === n.mode
                ? Math.max(
                    0,
                    n.scrollPaneOffset + n.latestScrollY - n.naturalTop + t
                  )
                : "stickyBottom" === n.mode
                ? Math.max(
                    0,
                    n.scrollPaneOffset +
                      n.latestScrollY +
                      n.viewPortHeight -
                      (n.naturalTop + n.nodeHeight + o)
                  )
                : void 0;
            }),
            (n.handleWindowResize = function () {
              (n.viewPortHeight = window.innerHeight),
                (n.scrollPaneOffset = 0),
                n.handleScroll();
            }),
            (n.handleScrollPaneResize = function () {
              (n.viewPortHeight = n.scrollPane.offsetHeight),
                n.scrollPane.firstChild.offsetParent === n.scrollPane
                  ? (n.scrollPaneOffset =
                      n.scrollPane.getBoundingClientRect().top)
                  : (n.scrollPaneOffset = 0),
                n.handleScroll();
            }),
            (n.handleParentNodeResize = function () {
              var e = n.node.parentNode,
                t = getComputedStyle(e, null),
                o = parseInt(t.getPropertyValue("padding-top"), 10),
                r = parseInt(t.getPropertyValue("padding-bottom"), 10);
              n.naturalTop =
                offsetTill(e, n.scrollPane) + o + n.scrollPaneOffset;
              var i = n.parentHeight;
              (n.parentHeight = e.getBoundingClientRect().height - (o + r)),
                "relative" === n.mode &&
                  (n.props.bottom
                    ? n.changeMode("relative")
                    : i > n.parentHeight &&
                      n.changeToStickyBottomIfBoxTooLow(n.latestScrollY)),
                i !== n.parentHeight &&
                  "relative" === n.mode &&
                  ((n.latestScrollY = Number.POSITIVE_INFINITY),
                  n.handleScroll());
            }),
            (n.handleNodeResize = function (e) {
              var t = (void 0 === e ? {} : e).initial,
                o = n.nodeHeight;
              if (
                ((n.nodeHeight = n.node.getBoundingClientRect().height),
                !t && o !== n.nodeHeight)
              ) {
                var r = n.props,
                  i = r.offsetTop,
                  s = r.offsetBottom,
                  a = r.bottom;
                if (n.nodeHeight + i + s <= n.viewPortHeight)
                  (n.mode = void 0), n.initial();
                else {
                  var c = o - n.nodeHeight,
                    l = Math.min(
                      n.parentHeight - n.nodeHeight,
                      n.getCurrentOffset() + (a ? c : 0)
                    );
                  (n.offset = Math.max(0, l)),
                    (a && "stickyBottom" === n.mode) ||
                      n.changeMode("relative");
                }
              }
            }),
            (n.handleScroll = function () {
              var e = n.props,
                t = e.offsetTop,
                o = e.offsetBottom,
                r =
                  n.scrollPane === window
                    ? window.scrollY
                    : n.scrollPane.scrollTop;
              if (r !== n.latestScrollY) {
                if (n.nodeHeight + t + o <= n.viewPortHeight) {
                  n.initial(), (n.latestScrollY = r);
                  return;
                }
                var i = r - n.latestScrollY;
                (n.offset = n.getCurrentOffset()),
                  i > 0
                    ? "stickyTop" === n.mode
                      ? r + n.scrollPaneOffset + t > n.naturalTop &&
                        (r + n.scrollPaneOffset + n.viewPortHeight <=
                        n.naturalTop + n.nodeHeight + n.offset + o
                          ? n.changeMode("relative")
                          : n.changeMode("stickyBottom"))
                      : "relative" === n.mode &&
                        n.changeToStickyBottomIfBoxTooLow(r)
                    : "stickyBottom" === n.mode
                    ? n.scrollPaneOffset + r + n.viewPortHeight <
                        n.naturalTop + n.parentHeight + o &&
                      (n.scrollPaneOffset + r + t >= n.naturalTop + n.offset
                        ? n.changeMode("relative")
                        : n.changeMode("stickyTop"))
                    : "relative" === n.mode &&
                      n.scrollPaneOffset + r + t < n.naturalTop + n.offset &&
                      n.changeMode("stickyTop"),
                  (n.latestScrollY = r);
              }
            }),
            t.offset,
            (n.unsubscribes = []),
            n
          );
        }
        (0, o.Z)(StickyBox, e);
        var t = StickyBox.prototype;
        return (
          (t.changeMode = function (e) {
            var t = this.props,
              n = t.onChangeMode,
              o = t.offsetTop,
              r = t.offsetBottom,
              i = t.bottom;
            if (
              (this.mode !== e && n(this.mode, e),
              (this.mode = e),
              "relative" === e)
            ) {
              if (((this.node.style.position = "relative"), i)) {
                var s = Math.max(
                  0,
                  this.parentHeight - this.nodeHeight - this.offset
                );
                this.node.style.bottom = s + "px";
              } else this.node.style.top = this.offset + "px";
            } else
              (this.node.style.position = m),
                "stickyBottom" === e
                  ? i
                    ? (this.node.style.bottom = r + "px")
                    : (this.node.style.top =
                        this.viewPortHeight - this.nodeHeight - r + "px")
                  : i
                  ? (this.node.style.bottom =
                      this.viewPortHeight - this.nodeHeight - r + "px")
                  : (this.node.style.top = o + "px");
            this.offset = this.getCurrentOffset();
          }),
          (t.initial = function () {
            this.props.bottom
              ? "stickyBottom" !== this.mode && this.changeMode("stickyBottom")
              : "stickyTop" !== this.mode && this.changeMode("stickyTop");
          }),
          (t.changeToStickyBottomIfBoxTooLow = function (e) {
            var t = this.props.offsetBottom;
            e + this.scrollPaneOffset + this.viewPortHeight >=
              this.naturalTop + this.nodeHeight + this.offset + t &&
              this.changeMode("stickyBottom");
          }),
          (t.render = function () {
            var e = this.props,
              t = e.children,
              n = e.className,
              o = e.style;
            return r.createElement(
              "div",
              { className: n, style: o, ref: this.registerContainerRef },
              t
            );
          }),
          StickyBox
        );
      })(r.Component);
      O.defaultProps = {
        onChangeMode: function () {},
        offsetTop: 0,
        offsetBottom: 0,
      };
    },
  },
]);
