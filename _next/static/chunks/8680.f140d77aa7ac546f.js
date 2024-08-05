"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8680],
  {
    38680: function (t, e, i) {
      i.r(e);
      var s = i(67294),
        __assign = function () {
          return (__assign =
            Object.assign ||
            function (t) {
              for (var e, i = 1, s = arguments.length; i < s; i++)
                for (var n in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        },
        n = {
          afterAppendSlide: "lgAfterAppendSlide",
          init: "lgInit",
          hasVideo: "lgHasVideo",
          containerResize: "lgContainerResize",
          updateSlides: "lgUpdateSlides",
          afterAppendSubHtml: "lgAfterAppendSubHtml",
          beforeOpen: "lgBeforeOpen",
          afterOpen: "lgAfterOpen",
          slideItemLoad: "lgSlideItemLoad",
          beforeSlide: "lgBeforeSlide",
          afterSlide: "lgAfterSlide",
          posterClick: "lgPosterClick",
          dragStart: "lgDragStart",
          dragMove: "lgDragMove",
          dragEnd: "lgDragEnd",
          beforeNextSlide: "lgBeforeNextSlide",
          beforePrevSlide: "lgBeforePrevSlide",
          beforeClose: "lgBeforeClose",
          afterClose: "lgAfterClose",
        },
        r = {
          mode: "lg-slide",
          easing: "ease",
          speed: 400,
          licenseKey: "0000-0000-000-0000",
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 300,
          container: "",
          startAnimationDuration: 400,
          zoomFromOrigin: !0,
          hideBarsDelay: 0,
          showBarsAfter: 1e4,
          slideDelay: 0,
          supportLegacyBrowser: !0,
          allowMediaOverlap: !1,
          videoMaxSize: "1280-720",
          loadYouTubePoster: !0,
          defaultCaptionHeight: 0,
          ariaLabelledby: "",
          ariaDescribedby: "",
          resetScrollPosition: !0,
          hideScrollbar: !1,
          closable: !0,
          swipeToClose: !0,
          closeOnTap: !0,
          showCloseIcon: !0,
          showMaximizeIcon: !1,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          trapFocus: !0,
          controls: !0,
          slideEndAnimation: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 2,
          numberOfSlideItemsInDom: 10,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: 0,
          iframeWidth: "100%",
          iframeHeight: "100%",
          iframeMaxWidth: "100%",
          iframeMaxHeight: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          extraProps: [],
          exThumbImage: "",
          isMobile: void 0,
          mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
          plugins: [],
          strings: {
            closeGallery: "Close gallery",
            toggleMaximize: "Toggle maximize",
            previousSlide: "Previous slide",
            nextSlide: "Next slide",
            download: "Download",
            playVideo: "Play video",
          },
        },
        o = (function () {
          function lgQuery(t) {
            return (
              (this.cssVenderPrefixes = [
                "TransitionDuration",
                "TransitionTimingFunction",
                "Transform",
                "Transition",
              ]),
              (this.selector = this._getSelector(t)),
              (this.firstElement = this._getFirstEl()),
              this
            );
          }
          return (
            (lgQuery.generateUUID = function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (t) {
                  var e = (16 * Math.random()) | 0;
                  return ("x" == t ? e : (3 & e) | 8).toString(16);
                }
              );
            }),
            (lgQuery.prototype._getSelector = function (t, e) {
              return (void 0 === e && (e = document), "string" != typeof t)
                ? t
                : ((e = e || document), "#" === t.substring(0, 1))
                ? e.querySelector(t)
                : e.querySelectorAll(t);
            }),
            (lgQuery.prototype._each = function (t) {
              return (
                this.selector &&
                  (void 0 !== this.selector.length
                    ? [].forEach.call(this.selector, t)
                    : t(this.selector, 0)),
                this
              );
            }),
            (lgQuery.prototype._setCssVendorPrefix = function (t, e, i) {
              var s = e.replace(/-([a-z])/gi, function (t, e) {
                return e.toUpperCase();
              });
              -1 !== this.cssVenderPrefixes.indexOf(s)
                ? ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
                  (t.style["webkit" + s] = i),
                  (t.style["moz" + s] = i),
                  (t.style["ms" + s] = i),
                  (t.style["o" + s] = i))
                : (t.style[s] = i);
            }),
            (lgQuery.prototype._getFirstEl = function () {
              return this.selector && void 0 !== this.selector.length
                ? this.selector[0]
                : this.selector;
            }),
            (lgQuery.prototype.isEventMatched = function (t, e) {
              var i = e.split(".");
              return t
                .split(".")
                .filter(function (t) {
                  return t;
                })
                .every(function (t) {
                  return -1 !== i.indexOf(t);
                });
            }),
            (lgQuery.prototype.attr = function (t, e) {
              return void 0 === e
                ? this.firstElement
                  ? this.firstElement.getAttribute(t)
                  : ""
                : (this._each(function (i) {
                    i.setAttribute(t, e);
                  }),
                  this);
            }),
            (lgQuery.prototype.find = function (t) {
              return $LG(this._getSelector(t, this.selector));
            }),
            (lgQuery.prototype.first = function () {
              return this.selector && void 0 !== this.selector.length
                ? $LG(this.selector[0])
                : $LG(this.selector);
            }),
            (lgQuery.prototype.eq = function (t) {
              return $LG(this.selector[t]);
            }),
            (lgQuery.prototype.parent = function () {
              return $LG(this.selector.parentElement);
            }),
            (lgQuery.prototype.get = function () {
              return this._getFirstEl();
            }),
            (lgQuery.prototype.removeAttr = function (t) {
              var e = t.split(" ");
              return (
                this._each(function (t) {
                  e.forEach(function (e) {
                    return t.removeAttribute(e);
                  });
                }),
                this
              );
            }),
            (lgQuery.prototype.wrap = function (t) {
              if (!this.firstElement) return this;
              var e = document.createElement("div");
              return (
                (e.className = t),
                this.firstElement.parentNode.insertBefore(e, this.firstElement),
                this.firstElement.parentNode.removeChild(this.firstElement),
                e.appendChild(this.firstElement),
                this
              );
            }),
            (lgQuery.prototype.addClass = function (t) {
              return (
                void 0 === t && (t = ""),
                this._each(function (e) {
                  t.split(" ").forEach(function (t) {
                    t && e.classList.add(t);
                  });
                }),
                this
              );
            }),
            (lgQuery.prototype.removeClass = function (t) {
              return (
                this._each(function (e) {
                  t.split(" ").forEach(function (t) {
                    t && e.classList.remove(t);
                  });
                }),
                this
              );
            }),
            (lgQuery.prototype.hasClass = function (t) {
              return (
                !!this.firstElement && this.firstElement.classList.contains(t)
              );
            }),
            (lgQuery.prototype.hasAttribute = function (t) {
              return !!this.firstElement && this.firstElement.hasAttribute(t);
            }),
            (lgQuery.prototype.toggleClass = function (t) {
              return (
                this.firstElement &&
                  (this.hasClass(t) ? this.removeClass(t) : this.addClass(t)),
                this
              );
            }),
            (lgQuery.prototype.css = function (t, e) {
              var i = this;
              return (
                this._each(function (s) {
                  i._setCssVendorPrefix(s, t, e);
                }),
                this
              );
            }),
            (lgQuery.prototype.on = function (t, e) {
              var i = this;
              return (
                this.selector &&
                  t.split(" ").forEach(function (t) {
                    Array.isArray(lgQuery.eventListeners[t]) ||
                      (lgQuery.eventListeners[t] = []),
                      lgQuery.eventListeners[t].push(e),
                      i.selector.addEventListener(t.split(".")[0], e);
                  }),
                this
              );
            }),
            (lgQuery.prototype.once = function (t, e) {
              var i = this;
              return (
                this.on(t, function () {
                  i.off(t), e(t);
                }),
                this
              );
            }),
            (lgQuery.prototype.off = function (t) {
              var e = this;
              return (
                this.selector &&
                  Object.keys(lgQuery.eventListeners).forEach(function (i) {
                    e.isEventMatched(t, i) &&
                      (lgQuery.eventListeners[i].forEach(function (t) {
                        e.selector.removeEventListener(i.split(".")[0], t);
                      }),
                      (lgQuery.eventListeners[i] = []));
                  }),
                this
              );
            }),
            (lgQuery.prototype.trigger = function (t, e) {
              if (!this.firstElement) return this;
              var i = new CustomEvent(t.split(".")[0], { detail: e || null });
              return this.firstElement.dispatchEvent(i), this;
            }),
            (lgQuery.prototype.load = function (t) {
              var e = this;
              return (
                fetch(t)
                  .then(function (t) {
                    return t.text();
                  })
                  .then(function (t) {
                    e.selector.innerHTML = t;
                  }),
                this
              );
            }),
            (lgQuery.prototype.html = function (t) {
              return void 0 === t
                ? this.firstElement
                  ? this.firstElement.innerHTML
                  : ""
                : (this._each(function (e) {
                    e.innerHTML = t;
                  }),
                  this);
            }),
            (lgQuery.prototype.append = function (t) {
              return (
                this._each(function (e) {
                  "string" == typeof t
                    ? e.insertAdjacentHTML("beforeend", t)
                    : e.appendChild(t);
                }),
                this
              );
            }),
            (lgQuery.prototype.prepend = function (t) {
              return (
                this._each(function (e) {
                  e.insertAdjacentHTML("afterbegin", t);
                }),
                this
              );
            }),
            (lgQuery.prototype.remove = function () {
              return (
                this._each(function (t) {
                  t.parentNode.removeChild(t);
                }),
                this
              );
            }),
            (lgQuery.prototype.empty = function () {
              return (
                this._each(function (t) {
                  t.innerHTML = "";
                }),
                this
              );
            }),
            (lgQuery.prototype.scrollTop = function (t) {
              return void 0 !== t
                ? ((document.body.scrollTop = t),
                  (document.documentElement.scrollTop = t),
                  this)
                : window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0;
            }),
            (lgQuery.prototype.scrollLeft = function (t) {
              return void 0 !== t
                ? ((document.body.scrollLeft = t),
                  (document.documentElement.scrollLeft = t),
                  this)
                : window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft ||
                    0;
            }),
            (lgQuery.prototype.offset = function () {
              if (!this.firstElement) return { left: 0, top: 0 };
              var t = this.firstElement.getBoundingClientRect(),
                e = $LG("body").style().marginLeft;
              return {
                left: t.left - parseFloat(e) + this.scrollLeft(),
                top: t.top + this.scrollTop(),
              };
            }),
            (lgQuery.prototype.style = function () {
              return this.firstElement
                ? this.firstElement.currentStyle ||
                    window.getComputedStyle(this.firstElement)
                : {};
            }),
            (lgQuery.prototype.width = function () {
              var t = this.style();
              return (
                this.firstElement.clientWidth -
                parseFloat(t.paddingLeft) -
                parseFloat(t.paddingRight)
              );
            }),
            (lgQuery.prototype.height = function () {
              var t = this.style();
              return (
                this.firstElement.clientHeight -
                parseFloat(t.paddingTop) -
                parseFloat(t.paddingBottom)
              );
            }),
            (lgQuery.eventListeners = {}),
            lgQuery
          );
        })();
      function $LG(t) {
        return (
          "function" != typeof window.CustomEvent &&
            (window.CustomEvent = function (t, e) {
              e = e || { bubbles: !1, cancelable: !1, detail: null };
              var i = document.createEvent("CustomEvent");
              return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
            }),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          new o(t)
        );
      }
      var l = [
          "src",
          "sources",
          "subHtml",
          "subHtmlUrl",
          "html",
          "video",
          "poster",
          "slideName",
          "responsive",
          "srcset",
          "sizes",
          "iframe",
          "downloadUrl",
          "download",
          "width",
          "facebookShareUrl",
          "tweetText",
          "iframeTitle",
          "twitterShareUrl",
          "pinterestShareUrl",
          "pinterestText",
          "fbHtml",
          "disqusIdentifier",
          "disqusUrl",
        ],
        a = {
          getSize: function (t, e, i, s) {
            void 0 === i && (i = 0);
            var n = $LG(t).attr("data-lg-size") || s;
            if (n) {
              var r = n.split(",");
              if (r[1])
                for (var o = window.innerWidth, l = 0; l < r.length; l++) {
                  var a = r[l];
                  if (parseInt(a.split("-")[2], 10) > o) {
                    n = a;
                    break;
                  }
                  l === r.length - 1 && (n = a);
                }
              var g = n.split("-"),
                d = parseInt(g[0], 10),
                h = parseInt(g[1], 10),
                u = Math.min(
                  Math.min(e.width(), d) / d,
                  Math.min(e.height() - i, h) / h
                );
              return { width: d * u, height: h * u };
            }
          },
          getTransform: function (t, e, i, s, n) {
            if (n) {
              var r = $LG(t).find("img").first();
              if (r.get()) {
                var o = e.get().getBoundingClientRect(),
                  l = o.width,
                  a = e.height() - (i + s),
                  g = r.width(),
                  d = r.height(),
                  h = r.style(),
                  u =
                    (l - g) / 2 -
                    r.offset().left +
                    (parseFloat(h.paddingLeft) || 0) +
                    (parseFloat(h.borderLeft) || 0) +
                    $LG(window).scrollLeft() +
                    o.left,
                  c =
                    (a - d) / 2 -
                    r.offset().top +
                    (parseFloat(h.paddingTop) || 0) +
                    (parseFloat(h.borderTop) || 0) +
                    $LG(window).scrollTop() +
                    i;
                return (
                  "translate3d(" +
                  (u *= -1) +
                  "px, " +
                  (c *= -1) +
                  "px, 0) scale3d(" +
                  g / n.width +
                  ", " +
                  d / n.height +
                  ", 1)"
                );
              }
            }
          },
          getIframeMarkup: function (t, e, i, s, n, r) {
            return (
              '<div class="lg-video-cont lg-has-iframe" style="width:' +
              t +
              "; max-width:" +
              i +
              "; height: " +
              e +
              "; max-height:" +
              s +
              '">\n                    <iframe class="lg-object" frameborder="0" ' +
              (r ? 'title="' + r + '"' : "") +
              ' src="' +
              n +
              '"  allowfullscreen="true"></iframe>\n                </div>'
            );
          },
          getImgMarkup: function (t, e, i, s, n, r) {
            var o = "";
            return (
              r &&
                (o = ("string" == typeof r ? JSON.parse(r) : r).map(function (
                  t
                ) {
                  var e = "";
                  return (
                    Object.keys(t).forEach(function (i) {
                      e += " " + i + '="' + t[i] + '"';
                    }),
                    "<source " + e + "></source>"
                  );
                })),
              "" +
                o +
                ("<img " +
                  i +
                  " " +
                  (s ? 'srcset="' + s + '"' : "") +
                  "  " +
                  (n ? 'sizes="' + n + '"' : "") +
                  ' class="lg-object lg-image" data-index="' +
                  t) +
                '" src="' +
                e +
                '" />'
            );
          },
          getResponsiveSrc: function (t) {
            for (var e = [], i = [], s = "", n = 0; n < t.length; n++) {
              var r = t[n].split(" ");
              "" === r[0] && r.splice(0, 1), i.push(r[0]), e.push(r[1]);
            }
            for (var o = window.innerWidth, l = 0; l < e.length; l++)
              if (parseInt(e[l], 10) > o) {
                s = i[l];
                break;
              }
            return s;
          },
          isImageLoaded: function (t) {
            return !!t && !!t.complete && 0 !== t.naturalWidth;
          },
          getVideoPosterMarkup: function (t, e, i, s, n) {
            return (
              '<div class="lg-video-cont ' +
              (n && n.youtube
                ? "lg-has-youtube"
                : n && n.vimeo
                ? "lg-has-vimeo"
                : "lg-has-html5") +
              '" style="' +
              i +
              '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
              s +
              '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
              s +
              '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
              (e || "") +
              '\n            <img class="lg-object lg-video-poster" src="' +
              t +
              '" />\n        </div>'
            );
          },
          getFocusableElements: function (t) {
            var e = t.querySelectorAll(
              'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
            );
            return [].filter.call(e, function (t) {
              var e = window.getComputedStyle(t);
              return "none" !== e.display && "hidden" !== e.visibility;
            });
          },
          getDynamicOptions: function (t, e, i, s) {
            var n = [],
              r = (function () {
                for (var t = 0, e = 0, i = arguments.length; e < i; e++)
                  t += arguments[e].length;
                for (var s = Array(t), n = 0, e = 0; e < i; e++)
                  for (
                    var r = arguments[e], o = 0, l = r.length;
                    o < l;
                    o++, n++
                  )
                    s[n] = r[o];
                return s;
              })(l, e);
            return (
              [].forEach.call(t, function (t) {
                for (var e = {}, o = 0; o < t.attributes.length; o++) {
                  var l = t.attributes[o];
                  if (l.specified) {
                    var a,
                      g =
                        "href" === (a = l.name)
                          ? "src"
                          : (a = (a =
                              (a = a.replace("data-", ""))
                                .charAt(0)
                                .toLowerCase() + a.slice(1)).replace(
                              /-([a-z])/g,
                              function (t) {
                                return t[1].toUpperCase();
                              }
                            )),
                      d = "";
                    r.indexOf(g) > -1 && (d = g), d && (e[d] = l.value);
                  }
                }
                var h = $LG(t),
                  u = h.find("img").first().attr("alt"),
                  c = h.attr("title"),
                  p = s ? h.attr(s) : h.find("img").first().attr("src");
                (e.thumb = p),
                  i && !e.subHtml && (e.subHtml = c || u || ""),
                  (e.alt = u || c || ""),
                  n.push(e);
              }),
              n
            );
          },
          isMobile: function () {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          },
          isVideo: function (t, e, i) {
            if (!t)
              return e
                ? { html5: !0 }
                : void console.error(
                    "lightGallery :- data-src is not provided on slide item " +
                      (i + 1) +
                      ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                  );
            var s = t.match(
                /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
              ),
              n = t.match(
                /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
              ),
              r = t.match(
                /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
              );
            return s
              ? { youtube: s }
              : n
              ? { vimeo: n }
              : r
              ? { wistia: r }
              : void 0;
          },
        },
        g = 0,
        d = (function () {
          function LightGallery(t, e) {
            if (
              ((this.lgOpened = !1),
              (this.index = 0),
              (this.plugins = []),
              (this.lGalleryOn = !1),
              (this.lgBusy = !1),
              (this.currentItemsInDom = []),
              (this.prevScrollTop = 0),
              (this.bodyPaddingRight = 0),
              (this.isDummyImageRemoved = !1),
              (this.dragOrSwipeEnabled = !1),
              (this.mediaContainerPosition = { top: 0, bottom: 0 }),
              !t)
            )
              return this;
            if (
              (g++,
              (this.lgId = g),
              (this.el = t),
              (this.LGel = $LG(t)),
              this.generateSettings(e),
              this.buildModules(),
              this.settings.dynamic &&
                void 0 !== this.settings.dynamicEl &&
                !Array.isArray(this.settings.dynamicEl))
            )
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
              (this.galleryItems = this.getItems()),
              this.normalizeSettings(),
              this.init(),
              this.validateLicense(),
              this
            );
          }
          return (
            (LightGallery.prototype.generateSettings = function (t) {
              if (
                ((this.settings = __assign(__assign({}, r), t)),
                this.settings.isMobile &&
                "function" == typeof this.settings.isMobile
                  ? this.settings.isMobile()
                  : a.isMobile())
              ) {
                var e = __assign(
                  __assign({}, this.settings.mobileSettings),
                  this.settings.mobileSettings
                );
                this.settings = __assign(__assign({}, this.settings), e);
              }
            }),
            (LightGallery.prototype.normalizeSettings = function () {
              this.settings.slideEndAnimation &&
                (this.settings.hideControlOnEnd = !1),
                this.settings.closable || (this.settings.swipeToClose = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                this.settings.dynamic && (this.zoomFromOrigin = !1),
                this.settings.container ||
                  (this.settings.container = document.body),
                (this.settings.preload = Math.min(
                  this.settings.preload,
                  this.galleryItems.length
                ));
            }),
            (LightGallery.prototype.init = function () {
              var t = this;
              this.addSlideVideoInfo(this.galleryItems),
                this.buildStructure(),
                this.LGel.trigger(n.init, { instance: this }),
                this.settings.keyPress && this.keyPress(),
                setTimeout(function () {
                  t.enableDrag(), t.enableSwipe(), t.triggerPosterClick();
                }, 50),
                this.arrow(),
                this.settings.mousewheel && this.mousewheel(),
                this.settings.dynamic || this.openGalleryOnItemClick();
            }),
            (LightGallery.prototype.openGalleryOnItemClick = function () {
              for (
                var t = this,
                  _loop_1 = function (i) {
                    var s = e.items[i],
                      n = $LG(s),
                      r = o.generateUUID();
                    n.attr("data-lg-id", r).on(
                      "click.lgcustom-item-" + r,
                      function (e) {
                        e.preventDefault();
                        var n = t.settings.index || i;
                        t.openGallery(n, s);
                      }
                    );
                  },
                  e = this,
                  i = 0;
                i < this.items.length;
                i++
              )
                _loop_1(i);
            }),
            (LightGallery.prototype.buildModules = function () {
              var t = this;
              this.settings.plugins.forEach(function (e) {
                t.plugins.push(new e(t, $LG));
              });
            }),
            (LightGallery.prototype.validateLicense = function () {
              this.settings.licenseKey
                ? "0000-0000-000-0000" === this.settings.licenseKey &&
                  console.warn(
                    "lightGallery: " +
                      this.settings.licenseKey +
                      " license key is not valid for production use"
                  )
                : console.error("Please provide a valid license key");
            }),
            (LightGallery.prototype.getSlideItem = function (t) {
              return $LG(this.getSlideItemId(t));
            }),
            (LightGallery.prototype.getSlideItemId = function (t) {
              return "#lg-item-" + this.lgId + "-" + t;
            }),
            (LightGallery.prototype.getIdName = function (t) {
              return t + "-" + this.lgId;
            }),
            (LightGallery.prototype.getElementById = function (t) {
              return $LG("#" + this.getIdName(t));
            }),
            (LightGallery.prototype.manageSingleSlideClassName = function () {
              this.galleryItems.length < 2
                ? this.outer.addClass("lg-single-item")
                : this.outer.removeClass("lg-single-item");
            }),
            (LightGallery.prototype.buildStructure = function () {
              var t = this;
              if (!(this.$container && this.$container.get())) {
                var e = "",
                  i = "";
                this.settings.controls &&
                  (e =
                    '<button type="button" id="' +
                    this.getIdName("lg-prev") +
                    '" aria-label="' +
                    this.settings.strings.previousSlide +
                    '" class="lg-prev lg-icon"> ' +
                    this.settings.prevHtml +
                    ' </button>\n                <button type="button" id="' +
                    this.getIdName("lg-next") +
                    '" aria-label="' +
                    this.settings.strings.nextSlide +
                    '" class="lg-next lg-icon"> ' +
                    this.settings.nextHtml +
                    " </button>"),
                  ".lg-item" !== this.settings.appendSubHtmlTo &&
                    (i =
                      '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var s = "";
                this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                var n = this.settings.ariaLabelledby
                    ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                    : "",
                  r = this.settings.ariaDescribedby
                    ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                    : "",
                  o =
                    "lg-container " +
                    this.settings.addClass +
                    " " +
                    (document.body !== this.settings.container
                      ? "lg-inline"
                      : ""),
                  l =
                    this.settings.closable && this.settings.showCloseIcon
                      ? '<button type="button" aria-label="' +
                        this.settings.strings.closeGallery +
                        '" id="' +
                        this.getIdName("lg-close") +
                        '" class="lg-close lg-icon"></button>'
                      : "",
                  a = this.settings.showMaximizeIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.toggleMaximize +
                      '" id="' +
                      this.getIdName("lg-maximize") +
                      '" class="lg-maximize lg-icon"></button>'
                    : "",
                  g =
                    '\n        <div class="' +
                    o +
                    '" id="' +
                    this.getIdName("lg-container") +
                    '" tabindex="-1" aria-modal="true" ' +
                    n +
                    " " +
                    r +
                    ' role="dialog"\n        >\n            <div id="' +
                    this.getIdName("lg-backdrop") +
                    '" class="lg-backdrop"></div>\n\n            <div id="' +
                    this.getIdName("lg-outer") +
                    '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                    s +
                    ' ">\n\n              <div id="' +
                    this.getIdName("lg-content") +
                    '" class="lg-content">\n                <div id="' +
                    this.getIdName("lg-inner") +
                    '" class="lg-inner">\n                </div>\n                ' +
                    e +
                    '\n              </div>\n                <div id="' +
                    this.getIdName("lg-toolbar") +
                    '" class="lg-toolbar lg-group">\n                    ' +
                    a +
                    "\n                    " +
                    l +
                    "\n                    </div>\n                    " +
                    (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                    '\n                <div id="' +
                    this.getIdName("lg-components") +
                    '" class="lg-components">\n                    ' +
                    (".lg-sub-html" === this.settings.appendSubHtmlTo
                      ? i
                      : "") +
                    "\n                </div>\n            </div>\n        </div>\n        ";
                $LG(this.settings.container).append(g),
                  document.body !== this.settings.container &&
                    $LG(this.settings.container).css("position", "relative"),
                  (this.outer = this.getElementById("lg-outer")),
                  (this.$lgComponents = this.getElementById("lg-components")),
                  (this.$backdrop = this.getElementById("lg-backdrop")),
                  (this.$container = this.getElementById("lg-container")),
                  (this.$inner = this.getElementById("lg-inner")),
                  (this.$content = this.getElementById("lg-content")),
                  (this.$toolbar = this.getElementById("lg-toolbar")),
                  this.$backdrop.css(
                    "transition-duration",
                    this.settings.backdropDuration + "ms"
                  );
                var d = this.settings.mode + " ";
                this.manageSingleSlideClassName(),
                  this.settings.enableDrag && (d += "lg-grab "),
                  this.outer.addClass(d),
                  this.$inner.css(
                    "transition-timing-function",
                    this.settings.easing
                  ),
                  this.$inner.css(
                    "transition-duration",
                    this.settings.speed + "ms"
                  ),
                  this.settings.download &&
                    this.$toolbar.append(
                      '<a id="' +
                        this.getIdName("lg-download") +
                        '" target="_blank" rel="noopener" aria-label="' +
                        this.settings.strings.download +
                        '" download class="lg-download lg-icon"></a>'
                    ),
                  this.counter(),
                  $LG(window).on(
                    "resize.lg.global" +
                      this.lgId +
                      " orientationchange.lg.global" +
                      this.lgId,
                    function () {
                      t.refreshOnResize();
                    }
                  ),
                  this.hideBars(),
                  this.manageCloseGallery(),
                  this.toggleMaximize(),
                  this.initModules();
              }
            }),
            (LightGallery.prototype.refreshOnResize = function () {
              if (this.lgOpened) {
                var t = this.galleryItems[this.index].__slideVideoInfo;
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var e = this.mediaContainerPosition,
                  i = e.top,
                  s = e.bottom;
                if (
                  ((this.currentImageSize = a.getSize(
                    this.items[this.index],
                    this.outer,
                    i + s,
                    t && this.settings.videoMaxSize
                  )),
                  t && this.resizeVideoSlide(this.index, this.currentImageSize),
                  this.zoomFromOrigin && !this.isDummyImageRemoved)
                ) {
                  var r = this.getDummyImgStyles(this.currentImageSize);
                  this.outer
                    .find(".lg-current .lg-dummy-img")
                    .first()
                    .attr("style", r);
                }
                this.LGel.trigger(n.containerResize);
              }
            }),
            (LightGallery.prototype.resizeVideoSlide = function (t, e) {
              var i = this.getVideoContStyle(e);
              this.getSlideItem(t).find(".lg-video-cont").attr("style", i);
            }),
            (LightGallery.prototype.updateSlides = function (t, e) {
              if (
                (this.index > t.length - 1 && (this.index = t.length - 1),
                1 === t.length && (this.index = 0),
                !t.length)
              ) {
                this.closeGallery();
                return;
              }
              var i = this.galleryItems[e].src;
              (this.galleryItems = t),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var s = 0;
              this.galleryItems.some(function (t, e) {
                return t.src === i && ((s = e), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                this.loadContent(s, !0),
                this.getSlideItem(s).addClass("lg-current"),
                (this.index = s),
                this.updateCurrentCounter(s),
                this.LGel.trigger(n.updateSlides);
            }),
            (LightGallery.prototype.getItems = function () {
              if (((this.items = []), this.settings.dynamic))
                return this.settings.dynamicEl || [];
              if ("this" === this.settings.selector) this.items.push(this.el);
              else if (this.settings.selector) {
                if ("string" == typeof this.settings.selector) {
                  if (this.settings.selectWithin) {
                    var t = $LG(this.settings.selectWithin);
                    this.items = t.find(this.settings.selector).get();
                  } else
                    this.items = this.el.querySelectorAll(
                      this.settings.selector
                    );
                } else this.items = this.settings.selector;
              } else this.items = this.el.children;
              return a.getDynamicOptions(
                this.items,
                this.settings.extraProps,
                this.settings.getCaptionFromTitleOrAlt,
                this.settings.exThumbImage
              );
            }),
            (LightGallery.prototype.shouldHideScrollbar = function () {
              return (
                this.settings.hideScrollbar &&
                document.body === this.settings.container
              );
            }),
            (LightGallery.prototype.hideScrollbar = function () {
              if (this.shouldHideScrollbar()) {
                this.bodyPaddingRight = parseFloat(
                  $LG("body").style().paddingRight
                );
                var t = document.documentElement.getBoundingClientRect(),
                  e = window.innerWidth - t.width;
                $LG(document.body).css(
                  "padding-right",
                  e + this.bodyPaddingRight + "px"
                ),
                  $LG(document.body).addClass("lg-overlay-open");
              }
            }),
            (LightGallery.prototype.resetScrollBar = function () {
              this.shouldHideScrollbar() &&
                ($LG(document.body).css(
                  "padding-right",
                  this.bodyPaddingRight + "px"
                ),
                $LG(document.body).removeClass("lg-overlay-open"));
            }),
            (LightGallery.prototype.openGallery = function (t, e) {
              var i = this;
              if ((void 0 === t && (t = this.settings.index), !this.lgOpened)) {
                (this.lgOpened = !0),
                  this.outer.removeClass("lg-hide-items"),
                  this.hideScrollbar(),
                  this.$container.addClass("lg-show");
                var s = this.getItemsToBeInsertedToDom(t, t);
                this.currentItemsInDom = s;
                var r = "";
                s.forEach(function (t) {
                  r = r + '<div id="' + t + '" class="lg-item"></div>';
                }),
                  this.$inner.append(r),
                  this.addHtml(t);
                var o = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var l = this.mediaContainerPosition,
                  g = l.top,
                  d = l.bottom;
                this.settings.allowMediaOverlap ||
                  this.setMediaContainerPosition(g, d);
                var h = this.galleryItems[t].__slideVideoInfo;
                this.zoomFromOrigin &&
                  e &&
                  ((this.currentImageSize = a.getSize(
                    e,
                    this.outer,
                    g + d,
                    h && this.settings.videoMaxSize
                  )),
                  (o = a.getTransform(
                    e,
                    this.outer,
                    g,
                    d,
                    this.currentImageSize
                  ))),
                  (this.zoomFromOrigin && o) ||
                    (this.outer.addClass(this.settings.startClass),
                    this.getSlideItem(t).removeClass("lg-complete")),
                  setTimeout(
                    function () {
                      i.outer.addClass("lg-components-open");
                    },
                    this.settings.zoomFromOrigin
                      ? 100
                      : this.settings.backdropDuration
                  ),
                  (this.index = t),
                  this.LGel.trigger(n.beforeOpen),
                  this.getSlideItem(t).addClass("lg-current"),
                  (this.lGalleryOn = !1),
                  (this.prevScrollTop = $LG(window).scrollTop()),
                  setTimeout(function () {
                    if (i.zoomFromOrigin && o) {
                      var e = i.getSlideItem(t);
                      e.css("transform", o),
                        setTimeout(function () {
                          e
                            .addClass("lg-start-progress lg-start-end-progress")
                            .css(
                              "transition-duration",
                              i.settings.startAnimationDuration + "ms"
                            ),
                            i.outer.addClass("lg-zoom-from-image");
                        }),
                        setTimeout(function () {
                          e.css("transform", "translate3d(0, 0, 0)");
                        }, 100);
                    }
                    setTimeout(function () {
                      i.$backdrop.addClass("in"),
                        i.$container.addClass("lg-show-in");
                    }, 10),
                      setTimeout(function () {
                        i.settings.trapFocus &&
                          document.body === i.settings.container &&
                          i.trapFocus();
                      }, i.settings.backdropDuration + 50),
                      (i.zoomFromOrigin && o) ||
                        setTimeout(function () {
                          i.outer.addClass("lg-visible");
                        }, i.settings.backdropDuration),
                      i.slide(t, !1, !1, !1),
                      i.LGel.trigger(n.afterOpen);
                  }),
                  document.body === this.settings.container &&
                    $LG("html").addClass("lg-on");
              }
            }),
            (LightGallery.prototype.getMediaContainerPosition = function () {
              if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
              var t = this.$toolbar.get().clientHeight || 0,
                e = this.outer.find(".lg-components .lg-sub-html").get(),
                i =
                  this.settings.defaultCaptionHeight ||
                  (e && e.clientHeight) ||
                  0,
                s = this.outer.find(".lg-thumb-outer").get();
              return { top: t, bottom: (s ? s.clientHeight : 0) + i };
            }),
            (LightGallery.prototype.setMediaContainerPosition = function (
              t,
              e
            ) {
              void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                this.$content.css("top", t + "px").css("bottom", e + "px");
            }),
            (LightGallery.prototype.hideBars = function () {
              var t = this;
              setTimeout(function () {
                t.outer.removeClass("lg-hide-items"),
                  t.settings.hideBarsDelay > 0 &&
                    (t.outer.on(
                      "mousemove.lg click.lg touchstart.lg",
                      function () {
                        t.outer.removeClass("lg-hide-items"),
                          clearTimeout(t.hideBarTimeout),
                          (t.hideBarTimeout = setTimeout(function () {
                            t.outer.addClass("lg-hide-items");
                          }, t.settings.hideBarsDelay));
                      }
                    ),
                    t.outer.trigger("mousemove.lg"));
              }, this.settings.showBarsAfter);
            }),
            (LightGallery.prototype.initPictureFill = function (t) {
              if (this.settings.supportLegacyBrowser)
                try {
                  picturefill({ elements: [t.get()] });
                } catch (t) {
                  console.warn(
                    "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                  );
                }
            }),
            (LightGallery.prototype.counter = function () {
              if (this.settings.counter) {
                var t =
                  '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                  this.getIdName("lg-counter-current") +
                  '" class="lg-counter-current">' +
                  (this.index + 1) +
                  ' </span> /\n                <span id="' +
                  this.getIdName("lg-counter-all") +
                  '" class="lg-counter-all">' +
                  this.galleryItems.length +
                  " </span></div>";
                this.outer.find(this.settings.appendCounterTo).append(t);
              }
            }),
            (LightGallery.prototype.addHtml = function (t) {
              if (
                (this.galleryItems[t].subHtmlUrl
                  ? (i = this.galleryItems[t].subHtmlUrl)
                  : (e = this.galleryItems[t].subHtml),
                !i)
              ) {
                if (e) {
                  var e,
                    i,
                    s = e.substring(0, 1);
                  ("." === s || "#" === s) &&
                    (e =
                      this.settings.subHtmlSelectorRelative &&
                      !this.settings.dynamic
                        ? $LG(this.items).eq(t).find(e).first().html()
                        : $LG(e).first().html());
                } else e = "";
              }
              if (".lg-item" !== this.settings.appendSubHtmlTo)
                i
                  ? this.outer.find(".lg-sub-html").load(i)
                  : this.outer.find(".lg-sub-html").html(e);
              else {
                var r = $LG(this.getSlideItemId(t));
                i
                  ? r.load(i)
                  : r.append('<div class="lg-sub-html">' + e + "</div>");
              }
              null != e &&
                ("" === e
                  ? this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .addClass("lg-empty-html")
                  : this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .removeClass("lg-empty-html")),
                this.LGel.trigger(n.afterAppendSubHtml, { index: t });
            }),
            (LightGallery.prototype.preload = function (t) {
              for (
                var e = 1;
                e <= this.settings.preload &&
                !(e >= this.galleryItems.length - t);
                e++
              )
                this.loadContent(t + e, !1);
              for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
                this.loadContent(t - i, !1);
            }),
            (LightGallery.prototype.getDummyImgStyles = function (t) {
              return t
                ? "width:" +
                    t.width +
                    "px;\n                margin-left: -" +
                    t.width / 2 +
                    "px;\n                margin-top: -" +
                    t.height / 2 +
                    "px;\n                height:" +
                    t.height +
                    "px"
                : "";
            }),
            (LightGallery.prototype.getVideoContStyle = function (t) {
              return t
                ? "width:" +
                    t.width +
                    "px;\n                height:" +
                    t.height +
                    "px"
                : "";
            }),
            (LightGallery.prototype.getDummyImageContent = function (t, e, i) {
              var s;
              if ((this.settings.dynamic || (s = $LG(this.items).eq(e)), s)) {
                var n = void 0;
                if (
                  !(n = this.settings.exThumbImage
                    ? s.attr(this.settings.exThumbImage)
                    : s.find("img").first().attr("src"))
                )
                  return "";
                var r =
                  "<img " +
                  i +
                  ' style="' +
                  this.getDummyImgStyles(this.currentImageSize) +
                  '" class="lg-dummy-img" src="' +
                  n +
                  '" />';
                return (
                  t.addClass("lg-first-slide"),
                  this.outer.addClass("lg-first-slide-loading"),
                  r
                );
              }
              return "";
            }),
            (LightGallery.prototype.setImgMarkup = function (t, e, i) {
              var s = this.galleryItems[i],
                n = s.alt,
                r = s.srcset,
                o = s.sizes,
                l = s.sources,
                g = n ? 'alt="' + n + '"' : "",
                d =
                  '<picture class="lg-img-wrap"> ' +
                  (this.isFirstSlideWithZoomAnimation()
                    ? this.getDummyImageContent(e, i, g)
                    : a.getImgMarkup(i, t, g, r, o, l)) +
                  "</picture>";
              e.prepend(d);
            }),
            (LightGallery.prototype.onSlideObjectLoad = function (t, e, i, s) {
              var n = t.find(".lg-object").first();
              a.isImageLoaded(n.get()) || e
                ? i()
                : (n.on("load.lg error.lg", function () {
                    i && i();
                  }),
                  n.on("error.lg", function () {
                    s && s();
                  }));
            }),
            (LightGallery.prototype.onLgObjectLoad = function (
              t,
              e,
              i,
              s,
              n,
              r
            ) {
              var o = this;
              this.onSlideObjectLoad(
                t,
                r,
                function () {
                  o.triggerSlideItemLoad(t, e, i, s, n);
                },
                function () {
                  t.addClass("lg-complete lg-complete_"),
                    t.html(
                      '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                    );
                }
              );
            }),
            (LightGallery.prototype.triggerSlideItemLoad = function (
              t,
              e,
              i,
              s,
              r
            ) {
              var o = this,
                l = this.galleryItems[e];
              setTimeout(
                function () {
                  t.addClass("lg-complete lg-complete_"),
                    o.LGel.trigger(n.slideItemLoad, {
                      index: e,
                      delay: i || 0,
                      isFirstSlide: r,
                    });
                },
                r && "video" === this.getSlideType(l) && !l.poster ? s : 0
              );
            }),
            (LightGallery.prototype.isFirstSlideWithZoomAnimation =
              function () {
                return !!(
                  !this.lGalleryOn &&
                  this.zoomFromOrigin &&
                  this.currentImageSize
                );
              }),
            (LightGallery.prototype.addSlideVideoInfo = function (t) {
              var e = this;
              t.forEach(function (t, i) {
                (t.__slideVideoInfo = a.isVideo(t.src, !!t.video, i)),
                  t.__slideVideoInfo &&
                    e.settings.loadYouTubePoster &&
                    !t.poster &&
                    t.__slideVideoInfo.youtube &&
                    (t.poster =
                      "//img.youtube.com/vi/" +
                      t.__slideVideoInfo.youtube[1] +
                      "/maxresdefault.jpg");
              });
            }),
            (LightGallery.prototype.loadContent = function (t, e) {
              var i = this,
                s = this.galleryItems[t],
                r = $LG(this.getSlideItemId(t)),
                o = s.poster,
                l = s.srcset,
                g = s.sizes,
                d = s.sources,
                h = s.src,
                u = s.video,
                c = u && "string" == typeof u ? JSON.parse(u) : u;
              if (s.responsive) {
                var p = s.responsive.split(",");
                h = a.getResponsiveSrc(p) || h;
              }
              var m = s.__slideVideoInfo,
                f = "",
                y = !!s.iframe,
                v = !this.lGalleryOn,
                b = 0;
              if (
                (v &&
                  (b =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                !r.hasClass("lg-loaded"))
              ) {
                if (m) {
                  var C = this.mediaContainerPosition,
                    S = C.top,
                    L = C.bottom,
                    I = a.getSize(
                      this.items[t],
                      this.outer,
                      S + L,
                      m && this.settings.videoMaxSize
                    );
                  f = this.getVideoContStyle(I);
                }
                if (y) {
                  var G = a.getIframeMarkup(
                    this.settings.iframeWidth,
                    this.settings.iframeHeight,
                    this.settings.iframeMaxWidth,
                    this.settings.iframeMaxHeight,
                    h,
                    s.iframeTitle
                  );
                  r.prepend(G);
                } else if (o) {
                  var x = "";
                  v &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (x = this.getDummyImageContent(r, t, ""));
                  var G = a.getVideoPosterMarkup(
                    o,
                    x || "",
                    f,
                    this.settings.strings.playVideo,
                    m
                  );
                  r.prepend(G);
                } else if (m) {
                  var G =
                    '<div class="lg-video-cont " style="' + f + '"></div>';
                  r.prepend(G);
                } else if ((this.setImgMarkup(h, r, t), l || d)) {
                  var w = r.find(".lg-object");
                  this.initPictureFill(w);
                }
                (o || m) &&
                  this.LGel.trigger(n.hasVideo, {
                    index: t,
                    src: h,
                    html5Video: c,
                    hasPoster: !!o,
                  }),
                  this.LGel.trigger(n.afterAppendSlide, { index: t }),
                  this.lGalleryOn &&
                    ".lg-item" === this.settings.appendSubHtmlTo &&
                    this.addHtml(t);
              }
              var E = 0;
              b && !$LG(document.body).hasClass("lg-from-hash") && (E = b),
                this.isFirstSlideWithZoomAnimation() &&
                  (setTimeout(function () {
                    r.removeClass(
                      "lg-start-end-progress lg-start-progress"
                    ).removeAttr("style");
                  }, this.settings.startAnimationDuration + 100),
                  r.hasClass("lg-loaded") ||
                    setTimeout(function () {
                      if ("image" === i.getSlideType(s)) {
                        var e = s.alt;
                        if (
                          (r
                            .find(".lg-img-wrap")
                            .append(
                              a.getImgMarkup(
                                t,
                                h,
                                e ? 'alt="' + e + '"' : "",
                                l,
                                g,
                                s.sources
                              )
                            ),
                          l || d)
                        ) {
                          var n = r.find(".lg-object");
                          i.initPictureFill(n);
                        }
                      }
                      ("image" === i.getSlideType(s) ||
                        ("video" === i.getSlideType(s) && o)) &&
                        (i.onLgObjectLoad(r, t, b, E, !0, !1),
                        i.onSlideObjectLoad(
                          r,
                          !!(m && m.html5 && !o),
                          function () {
                            i.loadContentOnFirstSlideLoad(t, r, E);
                          },
                          function () {
                            i.loadContentOnFirstSlideLoad(t, r, E);
                          }
                        ));
                    }, this.settings.startAnimationDuration + 100)),
                r.addClass("lg-loaded"),
                (this.isFirstSlideWithZoomAnimation() &&
                  ("video" !== this.getSlideType(s) || o)) ||
                  this.onLgObjectLoad(r, t, b, E, v, !!(m && m.html5 && !o)),
                (!this.zoomFromOrigin || !this.currentImageSize) &&
                  r.hasClass("lg-complete_") &&
                  !this.lGalleryOn &&
                  setTimeout(function () {
                    r.addClass("lg-complete");
                  }, this.settings.backdropDuration),
                (this.lGalleryOn = !0),
                !0 === e &&
                  (r.hasClass("lg-complete_")
                    ? this.preload(t)
                    : r
                        .find(".lg-object")
                        .first()
                        .on("load.lg error.lg", function () {
                          i.preload(t);
                        }));
            }),
            (LightGallery.prototype.loadContentOnFirstSlideLoad = function (
              t,
              e,
              i
            ) {
              var s = this;
              setTimeout(function () {
                e.find(".lg-dummy-img").remove(),
                  e.removeClass("lg-first-slide"),
                  s.outer.removeClass("lg-first-slide-loading"),
                  (s.isDummyImageRemoved = !0),
                  s.preload(t);
              }, i + 300);
            }),
            (LightGallery.prototype.getItemsToBeInsertedToDom = function (
              t,
              e,
              i
            ) {
              var s = this;
              void 0 === i && (i = 0);
              var n = [],
                r = Math.max(i, 3);
              r = Math.min(r, this.galleryItems.length);
              var o = "lg-item-" + this.lgId + "-" + e;
              if (this.galleryItems.length <= 3)
                return (
                  this.galleryItems.forEach(function (t, e) {
                    n.push("lg-item-" + s.lgId + "-" + e);
                  }),
                  n
                );
              if (t < (this.galleryItems.length - 1) / 2) {
                for (var l = t; l > t - r / 2 && l >= 0; l--)
                  n.push("lg-item-" + this.lgId + "-" + l);
                for (var a = n.length, l = 0; l < r - a; l++)
                  n.push("lg-item-" + this.lgId + "-" + (t + l + 1));
              } else {
                for (
                  var l = t;
                  l <= this.galleryItems.length - 1 && l < t + r / 2;
                  l++
                )
                  n.push("lg-item-" + this.lgId + "-" + l);
                for (var a = n.length, l = 0; l < r - a; l++)
                  n.push("lg-item-" + this.lgId + "-" + (t - l - 1));
              }
              return (
                this.settings.loop &&
                  (t === this.galleryItems.length - 1
                    ? n.push("lg-item-" + this.lgId + "-0")
                    : 0 === t &&
                      n.push(
                        "lg-item-" +
                          this.lgId +
                          "-" +
                          (this.galleryItems.length - 1)
                      )),
                -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + e),
                n
              );
            }),
            (LightGallery.prototype.organizeSlideItems = function (t, e) {
              var i = this,
                s = this.getItemsToBeInsertedToDom(
                  t,
                  e,
                  this.settings.numberOfSlideItemsInDom
                );
              return (
                s.forEach(function (t) {
                  -1 === i.currentItemsInDom.indexOf(t) &&
                    i.$inner.append(
                      '<div id="' + t + '" class="lg-item"></div>'
                    );
                }),
                this.currentItemsInDom.forEach(function (t) {
                  -1 === s.indexOf(t) && $LG("#" + t).remove();
                }),
                s
              );
            }),
            (LightGallery.prototype.getPreviousSlideIndex = function () {
              var t = 0;
              try {
                var e = this.outer.find(".lg-current").first().attr("id");
                t = parseInt(e.split("-")[3]) || 0;
              } catch (e) {
                t = 0;
              }
              return t;
            }),
            (LightGallery.prototype.setDownloadValue = function (t) {
              if (this.settings.download) {
                var e = this.galleryItems[t];
                if (!1 === e.downloadUrl || "false" === e.downloadUrl)
                  this.outer.addClass("lg-hide-download");
                else {
                  var i = this.getElementById("lg-download");
                  this.outer.removeClass("lg-hide-download"),
                    i.attr("href", e.downloadUrl || e.src),
                    e.download && i.attr("download", e.download);
                }
              }
            }),
            (LightGallery.prototype.makeSlideAnimation = function (t, e, i) {
              var s = this;
              this.lGalleryOn && i.addClass("lg-slide-progress"),
                setTimeout(
                  function () {
                    s.outer.addClass("lg-no-trans"),
                      s.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-next-slide"),
                      "prev" === t
                        ? (e.addClass("lg-prev-slide"),
                          i.addClass("lg-next-slide"))
                        : (e.addClass("lg-next-slide"),
                          i.addClass("lg-prev-slide")),
                      setTimeout(function () {
                        s.outer.find(".lg-item").removeClass("lg-current"),
                          e.addClass("lg-current"),
                          s.outer.removeClass("lg-no-trans");
                      }, 50);
                  },
                  this.lGalleryOn ? this.settings.slideDelay : 0
                );
            }),
            (LightGallery.prototype.slide = function (t, e, i, s) {
              var r = this,
                o = this.getPreviousSlideIndex();
              if (
                ((this.currentItemsInDom = this.organizeSlideItems(t, o)),
                !this.lGalleryOn || o !== t)
              ) {
                var l = this.galleryItems.length;
                if (!this.lgBusy) {
                  this.settings.counter && this.updateCurrentCounter(t);
                  var g = this.getSlideItem(t),
                    d = this.getSlideItem(o),
                    h = this.galleryItems[t],
                    u = h.__slideVideoInfo;
                  if (
                    (this.outer.attr(
                      "data-lg-slide-type",
                      this.getSlideType(h)
                    ),
                    this.setDownloadValue(t),
                    u)
                  ) {
                    var c = this.mediaContainerPosition,
                      p = c.top,
                      m = c.bottom,
                      f = a.getSize(
                        this.items[t],
                        this.outer,
                        p + m,
                        u && this.settings.videoMaxSize
                      );
                    this.resizeVideoSlide(t, f);
                  }
                  if (
                    (this.LGel.trigger(n.beforeSlide, {
                      prevIndex: o,
                      index: t,
                      fromTouch: !!e,
                      fromThumb: !!i,
                    }),
                    (this.lgBusy = !0),
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(t),
                    !s && (t < o ? (s = "prev") : t > o && (s = "next")),
                    e)
                  ) {
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-current lg-next-slide");
                    var y = void 0,
                      v = void 0;
                    l > 2
                      ? ((y = t - 1),
                        (v = t + 1),
                        0 === t && o === l - 1
                          ? ((v = 0), (y = l - 1))
                          : t === l - 1 && 0 === o && ((v = 0), (y = l - 1)))
                      : ((y = 0), (v = 1)),
                      "prev" === s
                        ? this.getSlideItem(v).addClass("lg-next-slide")
                        : this.getSlideItem(y).addClass("lg-prev-slide"),
                      g.addClass("lg-current");
                  } else this.makeSlideAnimation(s, g, d);
                  this.lGalleryOn
                    ? setTimeout(function () {
                        r.loadContent(t, !0),
                          ".lg-item" !== r.settings.appendSubHtmlTo &&
                            r.addHtml(t);
                      }, this.settings.speed +
                        50 +
                        (e ? 0 : this.settings.slideDelay))
                    : this.loadContent(t, !0),
                    setTimeout(function () {
                      (r.lgBusy = !1),
                        d.removeClass("lg-slide-progress"),
                        r.LGel.trigger(n.afterSlide, {
                          prevIndex: o,
                          index: t,
                          fromTouch: e,
                          fromThumb: i,
                        });
                    }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (e ? 0 : this.settings.slideDelay));
                }
                this.index = t;
              }
            }),
            (LightGallery.prototype.updateCurrentCounter = function (t) {
              this.getElementById("lg-counter-current").html(t + 1 + "");
            }),
            (LightGallery.prototype.updateCounterTotal = function () {
              this.getElementById("lg-counter-all").html(
                this.galleryItems.length + ""
              );
            }),
            (LightGallery.prototype.getSlideType = function (t) {
              return t.__slideVideoInfo
                ? "video"
                : t.iframe
                ? "iframe"
                : "image";
            }),
            (LightGallery.prototype.touchMove = function (t, e, i) {
              var s = e.pageX - t.pageX,
                n = e.pageY - t.pageY,
                r = !1;
              if (
                (this.swipeDirection
                  ? (r = !0)
                  : Math.abs(s) > 15
                  ? ((this.swipeDirection = "horizontal"), (r = !0))
                  : Math.abs(n) > 15 &&
                    ((this.swipeDirection = "vertical"), (r = !0)),
                r)
              ) {
                var o = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                  null == i || i.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(o, s, 0);
                  var l = o.get().offsetWidth,
                    a = (15 * l) / 100 - Math.abs((10 * s) / 100);
                  this.setTranslate(
                    this.outer.find(".lg-prev-slide").first(),
                    -l + s - a,
                    0
                  ),
                    this.setTranslate(
                      this.outer.find(".lg-next-slide").first(),
                      l + s + a,
                      0
                    );
                } else if (
                  "vertical" === this.swipeDirection &&
                  this.settings.swipeToClose
                ) {
                  null == i || i.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                  var g = 1 - Math.abs(n) / window.innerHeight;
                  this.$backdrop.css("opacity", g);
                  var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                  this.setTranslate(o, 0, n, d, d),
                    Math.abs(n) > 100 &&
                      this.outer
                        .addClass("lg-hide-items")
                        .removeClass("lg-components-open");
                }
              }
            }),
            (LightGallery.prototype.touchEnd = function (t, e, i) {
              var s,
                r = this;
              "lg-slide" !== this.settings.mode &&
                this.outer.addClass("lg-slide"),
                setTimeout(function () {
                  r.$container.removeClass("lg-dragging-vertical"),
                    r.outer
                      .removeClass("lg-dragging lg-hide-items")
                      .addClass("lg-components-open");
                  var o = !0;
                  if ("horizontal" === r.swipeDirection) {
                    s = t.pageX - e.pageX;
                    var l = Math.abs(t.pageX - e.pageX);
                    s < 0 && l > r.settings.swipeThreshold
                      ? (r.goToNextSlide(!0), (o = !1))
                      : s > 0 &&
                        l > r.settings.swipeThreshold &&
                        (r.goToPrevSlide(!0), (o = !1));
                  } else if ("vertical" === r.swipeDirection) {
                    if (
                      ((s = Math.abs(t.pageY - e.pageY)),
                      r.settings.closable && r.settings.swipeToClose && s > 100)
                    ) {
                      r.closeGallery();
                      return;
                    }
                    r.$backdrop.css("opacity", 1);
                  }
                  if (
                    (r.outer.find(".lg-item").removeAttr("style"),
                    o && 5 > Math.abs(t.pageX - e.pageX))
                  ) {
                    var a = $LG(i.target);
                    r.isPosterElement(a) && r.LGel.trigger(n.posterClick);
                  }
                  r.swipeDirection = void 0;
                }),
                setTimeout(function () {
                  r.outer.hasClass("lg-dragging") ||
                    "lg-slide" === r.settings.mode ||
                    r.outer.removeClass("lg-slide");
                }, this.settings.speed + 100);
            }),
            (LightGallery.prototype.enableSwipe = function () {
              var t = this,
                e = {},
                i = {},
                s = !1,
                r = !1;
              this.settings.enableSwipe &&
                (this.$inner.on("touchstart.lg", function (i) {
                  t.dragOrSwipeEnabled = !0;
                  var s = t.getSlideItem(t.index);
                  ($LG(i.target).hasClass("lg-item") ||
                    s.get().contains(i.target)) &&
                    !t.outer.hasClass("lg-zoomed") &&
                    !t.lgBusy &&
                    1 === i.touches.length &&
                    ((r = !0),
                    (t.touchAction = "swipe"),
                    t.manageSwipeClass(),
                    (e = {
                      pageX: i.touches[0].pageX,
                      pageY: i.touches[0].pageY,
                    }));
                }),
                this.$inner.on("touchmove.lg", function (n) {
                  r &&
                    "swipe" === t.touchAction &&
                    1 === n.touches.length &&
                    ((i = {
                      pageX: n.touches[0].pageX,
                      pageY: n.touches[0].pageY,
                    }),
                    t.touchMove(e, i, n),
                    (s = !0));
                }),
                this.$inner.on("touchend.lg", function (o) {
                  if ("swipe" === t.touchAction) {
                    if (s) (s = !1), t.touchEnd(i, e, o);
                    else if (r) {
                      var l = $LG(o.target);
                      t.isPosterElement(l) && t.LGel.trigger(n.posterClick);
                    }
                    (t.touchAction = void 0), (r = !1);
                  }
                }));
            }),
            (LightGallery.prototype.enableDrag = function () {
              var t = this,
                e = {},
                i = {},
                s = !1,
                r = !1;
              this.settings.enableDrag &&
                (this.outer.on("mousedown.lg", function (i) {
                  t.dragOrSwipeEnabled = !0;
                  var r = t.getSlideItem(t.index);
                  ($LG(i.target).hasClass("lg-item") ||
                    r.get().contains(i.target)) &&
                    !t.outer.hasClass("lg-zoomed") &&
                    !t.lgBusy &&
                    (i.preventDefault(),
                    t.lgBusy ||
                      (t.manageSwipeClass(),
                      (e = { pageX: i.pageX, pageY: i.pageY }),
                      (s = !0),
                      (t.outer.get().scrollLeft += 1),
                      (t.outer.get().scrollLeft -= 1),
                      t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      t.LGel.trigger(n.dragStart)));
                }),
                $LG(window).on("mousemove.lg.global" + this.lgId, function (o) {
                  s &&
                    t.lgOpened &&
                    ((r = !0),
                    (i = { pageX: o.pageX, pageY: o.pageY }),
                    t.touchMove(e, i),
                    t.LGel.trigger(n.dragMove));
                }),
                $LG(window).on("mouseup.lg.global" + this.lgId, function (o) {
                  if (t.lgOpened) {
                    var l = $LG(o.target);
                    r
                      ? ((r = !1),
                        t.touchEnd(i, e, o),
                        t.LGel.trigger(n.dragEnd))
                      : t.isPosterElement(l) && t.LGel.trigger(n.posterClick),
                      s &&
                        ((s = !1),
                        t.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                  }
                }));
            }),
            (LightGallery.prototype.triggerPosterClick = function () {
              var t = this;
              this.$inner.on("click.lg", function (e) {
                !t.dragOrSwipeEnabled &&
                  t.isPosterElement($LG(e.target)) &&
                  t.LGel.trigger(n.posterClick);
              });
            }),
            (LightGallery.prototype.manageSwipeClass = function () {
              var t = this.index + 1,
                e = this.index - 1;
              this.settings.loop &&
                this.galleryItems.length > 2 &&
                (0 === this.index
                  ? (e = this.galleryItems.length - 1)
                  : this.index === this.galleryItems.length - 1 && (t = 0)),
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-next-slide lg-prev-slide"),
                e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"),
                this.getSlideItem(t).addClass("lg-next-slide");
            }),
            (LightGallery.prototype.goToNextSlide = function (t) {
              var e = this,
                i = this.settings.loop;
              t && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index + 1 < this.galleryItems.length
                    ? (this.index++,
                      this.LGel.trigger(n.beforeNextSlide, {
                        index: this.index,
                      }),
                      this.slide(this.index, !!t, !1, "next"))
                    : i
                    ? ((this.index = 0),
                      this.LGel.trigger(n.beforeNextSlide, {
                        index: this.index,
                      }),
                      this.slide(this.index, !!t, !1, "next"))
                    : this.settings.slideEndAnimation &&
                      !t &&
                      (this.outer.addClass("lg-right-end"),
                      setTimeout(function () {
                        e.outer.removeClass("lg-right-end");
                      }, 400)));
            }),
            (LightGallery.prototype.goToPrevSlide = function (t) {
              var e = this,
                i = this.settings.loop;
              t && this.galleryItems.length < 3 && (i = !1),
                this.lgBusy ||
                  (this.index > 0
                    ? (this.index--,
                      this.LGel.trigger(n.beforePrevSlide, {
                        index: this.index,
                        fromTouch: t,
                      }),
                      this.slide(this.index, !!t, !1, "prev"))
                    : i
                    ? ((this.index = this.galleryItems.length - 1),
                      this.LGel.trigger(n.beforePrevSlide, {
                        index: this.index,
                        fromTouch: t,
                      }),
                      this.slide(this.index, !!t, !1, "prev"))
                    : this.settings.slideEndAnimation &&
                      !t &&
                      (this.outer.addClass("lg-left-end"),
                      setTimeout(function () {
                        e.outer.removeClass("lg-left-end");
                      }, 400)));
            }),
            (LightGallery.prototype.keyPress = function () {
              var t = this;
              $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
                t.lgOpened &&
                  !0 === t.settings.escKey &&
                  27 === e.keyCode &&
                  (e.preventDefault(),
                  t.settings.allowMediaOverlap &&
                  t.outer.hasClass("lg-can-toggle") &&
                  t.outer.hasClass("lg-components-open")
                    ? t.outer.removeClass("lg-components-open")
                    : t.closeGallery()),
                  t.lgOpened &&
                    t.galleryItems.length > 1 &&
                    (37 === e.keyCode &&
                      (e.preventDefault(), t.goToPrevSlide()),
                    39 === e.keyCode &&
                      (e.preventDefault(), t.goToNextSlide()));
              });
            }),
            (LightGallery.prototype.arrow = function () {
              var t = this;
              this.getElementById("lg-prev").on("click.lg", function () {
                t.goToPrevSlide();
              }),
                this.getElementById("lg-next").on("click.lg", function () {
                  t.goToNextSlide();
                });
            }),
            (LightGallery.prototype.arrowDisable = function (t) {
              if (!this.settings.loop && this.settings.hideControlOnEnd) {
                var e = this.getElementById("lg-prev"),
                  i = this.getElementById("lg-next");
                t + 1 === this.galleryItems.length
                  ? i.attr("disabled", "disabled").addClass("disabled")
                  : i.removeAttr("disabled").removeClass("disabled"),
                  0 === t
                    ? e.attr("disabled", "disabled").addClass("disabled")
                    : e.removeAttr("disabled").removeClass("disabled");
              }
            }),
            (LightGallery.prototype.setTranslate = function (t, e, i, s, n) {
              void 0 === s && (s = 1),
                void 0 === n && (n = 1),
                t.css(
                  "transform",
                  "translate3d(" +
                    e +
                    "px, " +
                    i +
                    "px, 0px) scale3d(" +
                    s +
                    ", " +
                    n +
                    ", 1)"
                );
            }),
            (LightGallery.prototype.mousewheel = function () {
              var t = this,
                e = 0;
              this.outer.on("wheel.lg", function (i) {
                if (i.deltaY && !(t.galleryItems.length < 2)) {
                  i.preventDefault();
                  var s = new Date().getTime();
                  !(s - e < 1e3) &&
                    ((e = s),
                    i.deltaY > 0
                      ? t.goToNextSlide()
                      : i.deltaY < 0 && t.goToPrevSlide());
                }
              });
            }),
            (LightGallery.prototype.isSlideElement = function (t) {
              return (
                t.hasClass("lg-outer") ||
                t.hasClass("lg-item") ||
                t.hasClass("lg-img-wrap")
              );
            }),
            (LightGallery.prototype.isPosterElement = function (t) {
              var e = this.getSlideItem(this.index)
                .find(".lg-video-play-button")
                .get();
              return (
                t.hasClass("lg-video-poster") ||
                t.hasClass("lg-video-play-button") ||
                (e && e.contains(t.get()))
              );
            }),
            (LightGallery.prototype.toggleMaximize = function () {
              var t = this;
              this.getElementById("lg-maximize").on("click.lg", function () {
                t.$container.toggleClass("lg-inline"), t.refreshOnResize();
              });
            }),
            (LightGallery.prototype.invalidateItems = function () {
              for (var t = 0; t < this.items.length; t++) {
                var e = $LG(this.items[t]);
                e.off("click.lgcustom-item-" + e.attr("data-lg-id"));
              }
            }),
            (LightGallery.prototype.trapFocus = function () {
              var t = this;
              this.$container.get().focus({ preventScroll: !0 }),
                $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
                  if (t.lgOpened && ("Tab" === e.key || 9 === e.keyCode)) {
                    var i = a.getFocusableElements(t.$container.get()),
                      s = i[0],
                      n = i[i.length - 1];
                    e.shiftKey
                      ? document.activeElement === s &&
                        (n.focus(), e.preventDefault())
                      : document.activeElement === n &&
                        (s.focus(), e.preventDefault());
                  }
                });
            }),
            (LightGallery.prototype.manageCloseGallery = function () {
              var t = this;
              if (this.settings.closable) {
                var e = !1;
                this.getElementById("lg-close").on("click.lg", function () {
                  t.closeGallery();
                }),
                  this.settings.closeOnTap &&
                    (this.outer.on("mousedown.lg", function (i) {
                      var s = $LG(i.target);
                      e = !!t.isSlideElement(s);
                    }),
                    this.outer.on("mousemove.lg", function () {
                      e = !1;
                    }),
                    this.outer.on("mouseup.lg", function (i) {
                      var s = $LG(i.target);
                      t.isSlideElement(s) &&
                        e &&
                        !t.outer.hasClass("lg-dragging") &&
                        t.closeGallery();
                    }));
              }
            }),
            (LightGallery.prototype.closeGallery = function (t) {
              var e,
                i = this;
              if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
              this.LGel.trigger(n.beforeClose),
                this.settings.resetScrollPosition &&
                  !this.settings.hideScrollbar &&
                  $LG(window).scrollTop(this.prevScrollTop);
              var s = this.items[this.index];
              if (this.zoomFromOrigin && s) {
                var r = this.mediaContainerPosition,
                  o = r.top,
                  l = r.bottom,
                  g = this.galleryItems[this.index],
                  d = g.__slideVideoInfo,
                  h = g.poster,
                  u = a.getSize(
                    s,
                    this.outer,
                    o + l,
                    d && h && this.settings.videoMaxSize
                  );
                e = a.getTransform(s, this.outer, o, l, u);
              }
              this.zoomFromOrigin && e
                ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                  this.getSlideItem(this.index)
                    .addClass("lg-start-end-progress")
                    .css(
                      "transition-duration",
                      this.settings.startAnimationDuration + "ms"
                    )
                    .css("transform", e))
                : (this.outer.addClass("lg-hide-items"),
                  this.outer.removeClass("lg-zoom-from-image")),
                this.destroyModules(),
                (this.lGalleryOn = !1),
                (this.isDummyImageRemoved = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                clearTimeout(this.hideBarTimeout),
                (this.hideBarTimeout = !1),
                $LG("html").removeClass("lg-on"),
                this.outer.removeClass("lg-visible lg-components-open"),
                this.$backdrop.removeClass("in").css("opacity", 0);
              var c =
                this.zoomFromOrigin && e
                  ? Math.max(
                      this.settings.startAnimationDuration,
                      this.settings.backdropDuration
                    )
                  : this.settings.backdropDuration;
              return (
                this.$container.removeClass("lg-show-in"),
                setTimeout(function () {
                  i.zoomFromOrigin &&
                    e &&
                    i.outer.removeClass("lg-zoom-from-image"),
                    i.$container.removeClass("lg-show"),
                    i.resetScrollBar(),
                    i.$backdrop
                      .removeAttr("style")
                      .css(
                        "transition-duration",
                        i.settings.backdropDuration + "ms"
                      ),
                    i.outer.removeClass("lg-closing " + i.settings.startClass),
                    i
                      .getSlideItem(i.index)
                      .removeClass("lg-start-end-progress"),
                    i.$inner.empty(),
                    i.lgOpened && i.LGel.trigger(n.afterClose, { instance: i }),
                    i.$container.get() && i.$container.get().blur(),
                    (i.lgOpened = !1);
                }, c + 100),
                c + 100
              );
            }),
            (LightGallery.prototype.initModules = function () {
              this.plugins.forEach(function (t) {
                try {
                  t.init();
                } catch (t) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly initiated"
                  );
                }
              });
            }),
            (LightGallery.prototype.destroyModules = function (t) {
              this.plugins.forEach(function (e) {
                try {
                  t ? e.destroy() : e.closeGallery && e.closeGallery();
                } catch (t) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly destroyed"
                  );
                }
              });
            }),
            (LightGallery.prototype.refresh = function (t) {
              this.settings.dynamic || this.invalidateItems(),
                t
                  ? (this.galleryItems = t)
                  : (this.galleryItems = this.getItems()),
                this.updateControls(),
                this.openGalleryOnItemClick(),
                this.LGel.trigger(n.updateSlides);
            }),
            (LightGallery.prototype.updateControls = function () {
              this.addSlideVideoInfo(this.galleryItems),
                this.updateCounterTotal(),
                this.manageSingleSlideClassName();
            }),
            (LightGallery.prototype.destroyGallery = function () {
              this.destroyModules(!0),
                this.settings.dynamic || this.invalidateItems(),
                $LG(window).off(".lg.global" + this.lgId),
                this.LGel.off(".lg"),
                this.$container.remove();
            }),
            (LightGallery.prototype.destroy = function () {
              var t = this.closeGallery(!0);
              return (
                t
                  ? setTimeout(this.destroyGallery.bind(this), t)
                  : this.destroyGallery(),
                t
              );
            }),
            LightGallery
          );
        })(),
        h = {
          onAfterAppendSlide: "lgAfterAppendSlide",
          onInit: "lgInit",
          onHasVideo: "lgHasVideo",
          onContainerResize: "lgContainerResize",
          onAfterAppendSubHtml: "lgAfterAppendSubHtml",
          onBeforeOpen: "lgBeforeOpen",
          onAfterOpen: "lgAfterOpen",
          onSlideItemLoad: "lgSlideItemLoad",
          onBeforeSlide: "lgBeforeSlide",
          onAfterSlide: "lgAfterSlide",
          onPosterClick: "lgPosterClick",
          onDragStart: "lgDragStart",
          onDragMove: "lgDragMove",
          onDragEnd: "lgDragEnd",
          onBeforeNextSlide: "lgBeforeNextSlide",
          onBeforePrevSlide: "lgBeforePrevSlide",
          onBeforeClose: "lgBeforeClose",
          onAfterClose: "lgAfterClose",
          onRotateLeft: "lgRotateLeft",
          onRotateRight: "lgRotateRight",
          onFlipHorizontal: "lgFlipHorizontal",
          onFlipVertical: "lgFlipVertical",
        };
      e.default = function (t) {
        var e = t.children,
          i = t.elementClassNames,
          n = t.onAfterAppendSlide,
          r = t.onInit,
          o = t.onHasVideo,
          l = t.onContainerResize,
          a = t.onAfterAppendSubHtml,
          g = t.onBeforeOpen,
          u = t.onAfterOpen,
          c = t.onSlideItemLoad,
          p = t.onBeforeSlide,
          m = t.onAfterSlide,
          f = t.onPosterClick,
          y = t.onDragStart,
          v = t.onDragMove,
          b = t.onDragEnd,
          C = t.onBeforeNextSlide,
          S = t.onBeforePrevSlide,
          L = t.onBeforeClose,
          I = t.onAfterClose,
          G = t.onRotateLeft,
          x = t.onRotateRight,
          w = t.onFlipHorizontal,
          E = t.onFlipVertical,
          T =
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ (function (
              t,
              e
            ) {
              var i = {};
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) &&
                  0 > e.indexOf(s) &&
                  (i[s] = t[s]);
              if (
                null != t &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var n = 0, s = Object.getOwnPropertySymbols(t);
                  n < s.length;
                  n++
                )
                  0 > e.indexOf(s[n]) &&
                    Object.prototype.propertyIsEnumerable.call(t, s[n]) &&
                    (i[s[n]] = t[s[n]]);
              return i;
            })(t, [
              "children",
              "elementClassNames",
              "onAfterAppendSlide",
              "onInit",
              "onHasVideo",
              "onContainerResize",
              "onAfterAppendSubHtml",
              "onBeforeOpen",
              "onAfterOpen",
              "onSlideItemLoad",
              "onBeforeSlide",
              "onAfterSlide",
              "onPosterClick",
              "onDragStart",
              "onDragMove",
              "onDragEnd",
              "onBeforeNextSlide",
              "onBeforePrevSlide",
              "onBeforeClose",
              "onAfterClose",
              "onRotateLeft",
              "onRotateRight",
              "onFlipHorizontal",
              "onFlipVertical",
            ]),
          O = (0, s.useRef)(null),
          D = (0, s.useCallback)(
            function () {
              n &&
                O &&
                O.current &&
                O.current.addEventListener(h.onAfterAppendSlide, function (t) {
                  n(t.detail);
                }),
                r &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onInit, function (t) {
                    r(t.detail);
                  }),
                o &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onHasVideo, function (t) {
                    o(t.detail);
                  }),
                l &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onContainerResize, function (t) {
                    l(t.detail);
                  }),
                a &&
                  O &&
                  O.current &&
                  O.current.addEventListener(
                    h.onAfterAppendSubHtml,
                    function (t) {
                      a(t.detail);
                    }
                  ),
                g &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onBeforeOpen, function (t) {
                    g(t.detail);
                  }),
                u &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onAfterOpen, function (t) {
                    u(t.detail);
                  }),
                c &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onSlideItemLoad, function (t) {
                    c(t.detail);
                  }),
                p &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onBeforeSlide, function (t) {
                    p(t.detail);
                  }),
                m &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onAfterSlide, function (t) {
                    m(t.detail);
                  }),
                f &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onPosterClick, function (t) {
                    f(t.detail);
                  }),
                y &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onDragStart, function (t) {
                    y(t.detail);
                  }),
                v &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onDragMove, function (t) {
                    v(t.detail);
                  }),
                b &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onDragEnd, function (t) {
                    b(t.detail);
                  }),
                C &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onBeforeNextSlide, function (t) {
                    C(t.detail);
                  }),
                S &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onBeforePrevSlide, function (t) {
                    S(t.detail);
                  }),
                L &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onBeforeClose, function (t) {
                    L(t.detail);
                  }),
                I &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onAfterClose, function (t) {
                    I(t.detail);
                  }),
                G &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onRotateLeft, function (t) {
                    G(t.detail);
                  }),
                x &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onRotateRight, function (t) {
                    x(t.detail);
                  }),
                w &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onFlipHorizontal, function (t) {
                    w(t.detail);
                  }),
                E &&
                  O &&
                  O.current &&
                  O.current.addEventListener(h.onFlipVertical, function (t) {
                    E(t.detail);
                  });
            },
            [n, a, I, G, x, w, E, u, m, L, C, g, S, p, l, b, v, y, o, r, f, c]
          );
        return (
          (0, s.useEffect)(
            function () {
              D();
              var t,
                e = ((t = O.current), new d(t, T));
              return function () {
                e.destroy();
              };
            },
            [D, T]
          ),
          (0, s.createElement)(
            "div",
            { className: "lg-react-element " + (i || ""), ref: O },
            e
          )
        );
      };
    },
  },
]);
