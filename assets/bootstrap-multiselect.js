!(function (t) {
  "use strict";
  function e(t, e) {
    for (var i = 0; i < t.length; ++i) e(t[i], i);
  }
  function i(e, i) {
    (this.$select = t(e)),
      this.$select.attr("data-placeholder") &&
        (i.nonSelectedText = this.$select.data("placeholder")),
      (this.options = this.mergeOptions(t.extend({}, i, this.$select.data()))),
      (this.originalOptions = this.$select.clone()[0].options),
      (this.query = ""),
      (this.searchTimeout = null),
      (this.lastToggledInput = null),
      (this.options.multiple = "multiple" === this.$select.attr("multiple")),
      (this.options.onChange = t.proxy(this.options.onChange, this)),
      (this.options.onDropdownShow = t.proxy(
        this.options.onDropdownShow,
        this
      )),
      (this.options.onDropdownHide = t.proxy(
        this.options.onDropdownHide,
        this
      )),
      (this.options.onDropdownShown = t.proxy(
        this.options.onDropdownShown,
        this
      )),
      (this.options.onDropdownHidden = t.proxy(
        this.options.onDropdownHidden,
        this
      )),
      (this.options.onInitialized = t.proxy(this.options.onInitialized, this)),
      this.buildContainer(),
      this.buildButton(),
      this.buildDropdown(),
      this.buildSelectAll(),
      this.buildDropdownOptions(),
      this.buildFilter(),
      this.$ul.after(
        t(
          '<div id="div-fechar"><a id="fechar" href="javascript:void(0)">Fechar</a></div></div><a id="tipo-imovel-botao-confirmar" href="javascript:void(0)">Confirmar</a>'
        )
      ),
      this.updateButtonText(),
      this.updateSelectAll(!0),
      this.options.disableIfEmpty &&
        t("option", this.$select).length <= 0 &&
        this.disable(),
      this.$select.hide().after(this.$container),
      this.options.onInitialized(this.$select, this.$container);
  }
  var s = (function () {
    var t = !1;
    return (
      (function (e) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          e
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            e.substr(0, 4)
          )) &&
          (t = !0);
      })(navigator.userAgent || navigator.vendor || window.opera),
      t
    );
  })();
  "undefined" != typeof ko &&
    ko.bindingHandlers &&
    !ko.bindingHandlers.multiselect &&
    (ko.bindingHandlers.multiselect = {
      after: ["options", "value", "selectedOptions", "enable", "disable"],
      init: function (e, i, s, l, o) {
        var n = t(e),
          a = ko.toJS(i());
        if ((n.multiselect(a), s.has("options"))) {
          var p = s.get("options");
          ko.isObservable(p) &&
            ko.computed({
              read: function () {
                p(),
                  setTimeout(function () {
                    var t = n.data("multiselect");
                    t && t.updateOriginalOptions(), n.multiselect("rebuild");
                  }, 1);
              },
              disposeWhenNodeIsRemoved: e,
            });
        }
        if (s.has("value")) {
          var r = s.get("value");
          ko.isObservable(r) &&
            ko
              .computed({
                read: function () {
                  r(),
                    setTimeout(function () {
                      n.multiselect("refresh");
                    }, 1);
                },
                disposeWhenNodeIsRemoved: e,
              })
              .extend({ rateLimit: 100, notifyWhenChangesStop: !0 });
        }
        if (s.has("selectedOptions")) {
          var c = s.get("selectedOptions");
          ko.isObservable(c) &&
            ko
              .computed({
                read: function () {
                  c(),
                    setTimeout(function () {
                      n.multiselect("refresh");
                    }, 1);
                },
                disposeWhenNodeIsRemoved: e,
              })
              .extend({ rateLimit: 100, notifyWhenChangesStop: !0 });
        }
        var h = function (t) {
          setTimeout(function () {
            t ? n.multiselect("enable") : n.multiselect("disable");
          });
        };
        if (s.has("enable")) {
          var d = s.get("enable");
          ko.isObservable(d)
            ? ko
                .computed({
                  read: function () {
                    h(d());
                  },
                  disposeWhenNodeIsRemoved: e,
                })
                .extend({ rateLimit: 100, notifyWhenChangesStop: !0 })
            : h(d);
        }
        if (s.has("disable")) {
          var u = s.get("disable");
          ko.isObservable(u)
            ? ko
                .computed({
                  read: function () {
                    h(!u());
                  },
                  disposeWhenNodeIsRemoved: e,
                })
                .extend({ rateLimit: 100, notifyWhenChangesStop: !0 })
            : h(!u);
        }
        ko.utils.domNodeDisposal.addDisposeCallback(e, function () {
          n.multiselect("destroy");
        });
      },
      update: function (e, i, s, l, o) {
        var n = t(e),
          a = ko.toJS(i());
        n.multiselect("setOptions", a), n.multiselect("rebuild");
      },
    }),
    (i.prototype = {
      defaults: {
        buttonText: function (e, i) {
          if (
            this.disabledText.length > 0 &&
            (this.disableIfEmpty || i.prop("disabled")) &&
            0 == e.length
          )
            return this.disabledText;
          if (0 === e.length) return this.nonSelectedText;
          if (
            this.allSelectedText &&
            e.length === t("option", t(i)).length &&
            1 !== t("option", t(i)).length &&
            this.multiple
          )
            return this.selectAllNumber
              ? this.allSelectedText + " (" + e.length + ")"
              : this.allSelectedText;
          if (e.length > this.numberDisplayed)
            return e.length + " " + this.nSelectedText;
          var s = "",
            l = this.delimiterText;
          return (
            e.each(function () {
              var e =
                void 0 !== t(this).attr("label")
                  ? t(this).attr("label")
                  : t(this).text();
              s += e + l;
            }),
            s.substr(0, s.length - 2)
          );
        },
        buttonTitle: function (e, i) {
          if (0 === e.length) return this.nonSelectedText;
          var s = "",
            l = this.delimiterText;
          return (
            e.each(function () {
              var e =
                void 0 !== t(this).attr("label")
                  ? t(this).attr("label")
                  : t(this).text();
              s += e + l;
            }),
            s.substr(0, s.length - 2)
          );
        },
        optionLabel: function (e) {
          return t(e).attr("label") || t(e).text();
        },
        optionClass: function (e) {
          return t(e).attr("class") || "";
        },
        onChange: function (t, e) {},
        onDropdownShow: function (e) {
          s &&
            (t("body").addClass("overflow-hidden"),
            t("main").addClass("multiselect-mobile-fullscreen"));
        },
        onDropdownHide: function (e) {
          s &&
            (t("body").removeClass("overflow-hidden"),
            t("main").removeClass("multiselect-mobile-fullscreen"));
        },
        onDropdownShown: function (t) {},
        onDropdownHidden: function (t) {},
        onSelectAll: function (t) {},
        onInitialized: function (t, e) {},
        enableHTML: !1,
        buttonClass: "btn btn-default",
        inheritClass: !1,
        buttonWidth: "auto",
        buttonContainer: '<div class="btn-group" />',
        dropRight: !1,
        dropUp: !1,
        selectedClass: "active",
        maxHeight: !1,
        checkboxName: !1,
        includeSelectAllOption: !1,
        includeSelectAllIfMoreThan: 0,
        selectAllText: " Select all",
        selectAllValue: "multiselect-all",
        selectAllName: !1,
        selectAllNumber: !0,
        selectAllJustVisible: !0,
        enableFiltering: !1,
        enableCaseInsensitiveFiltering: !1,
        enableFullValueFiltering: !1,
        enableClickableOptGroups: !1,
        enableCollapsibelOptGroups: !1,
        filterPlaceholder: "Search",
        filterBehavior: "text",
        includeFilterClearBtn: !0,
        preventInputChangeEvent: !1,
        nonSelectedText: "None selected",
        nSelectedText: "selected",
        allSelectedText: "All selected",
        numberDisplayed: 3,
        disableIfEmpty: !1,
        disabledText: "",
        delimiterText: ", ",
        templates: {
          button:
            '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
          ul: '<ul class="multiselect-container dropdown-menu"></ul>',
          filter:
            '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
          filterClearBtn:
            '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
          li: '<li><a tabindex="0"><label></label></a></li>',
          divider: '<li class="multiselect-item divider"></li>',
          liGroup:
            '<li class="multiselect-item multiselect-group"><label></label></li>',
        },
      },
      constructor: i,
      buildContainer: function () {
        (this.$container = t(this.options.buttonContainer)),
          this.$container.on("show.bs.dropdown", this.options.onDropdownShow),
          this.$container.on("hide.bs.dropdown", this.options.onDropdownHide),
          this.$container.on("shown.bs.dropdown", this.options.onDropdownShown),
          this.$container.on(
            "hidden.bs.dropdown",
            this.options.onDropdownHidden
          );
      },
      buildButton: function () {
        (this.$button = t(this.options.templates.button).addClass(
          this.options.buttonClass
        )),
          this.$select.attr("class") &&
            this.options.inheritClass &&
            this.$button.addClass(this.$select.attr("class")),
          this.$select.prop("disabled") ? this.disable() : this.enable(),
          this.options.buttonWidth &&
            "auto" !== this.options.buttonWidth &&
            (this.$button.css({
              width: this.options.buttonWidth,
              overflow: "hidden",
              "text-overflow": "ellipsis",
            }),
            this.$container.css({ width: this.options.buttonWidth }));
        var e = this.$select.attr("tabindex");
        e && this.$button.attr("tabindex", e),
          this.$container.prepend(this.$button);
      },
      buildDropdown: function () {
        if (
          ((this.$ul = t(this.options.templates.ul)),
          this.$container.append(this.$ul),
          this.options.dropRight && this.$ul.addClass("pull-right"),
          this.options.maxHeight)
        ) {
          var e = {
            "max-height": this.options.maxHeight + "px",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            width: "auto",
            "min-width": "100%",
          };
          this.options.enableFiltering
            ? (e["min-width"] = "100%")
            : (e["padding-right"] = "10px"),
            this.$ul.css(e);
        }
        if (this.options.dropUp) {
          var i = Math.min(
              this.options.maxHeight,
              26 * t('option[data-role!="divider"]', this.$select).length +
                19 * t('option[data-role="divider"]', this.$select).length +
                (this.options.includeSelectAllOption ? 26 : 0) +
                (this.options.enableFiltering ||
                this.options.enableCaseInsensitiveFiltering
                  ? 44
                  : 0)
            ),
            s = i + 34;
          this.$ul.css({
            "max-height": i + "px",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "margin-top": "-" + s + "px",
          });
        }
        var l = this.$container.children("ul");
        this.$container.children("ul").remove(),
          this.$container.append(
            '<div class="multiselect-group dropdown-menu open"></div>'
          ),
          this.$container.children(".multiselect-group").append(l);
      },
      buildDropdownOptions: function () {
        this.$select.children().each(
          t.proxy(function (e, i) {
            var s = t(i),
              l = s.prop("tagName").toLowerCase();
            s.prop("value") !== this.options.selectAllValue &&
              ("optgroup" === l
                ? this.createOptgroup(i)
                : "option" === l &&
                  ("divider" === s.data("role")
                    ? this.createDivider()
                    : this.createOptionValue(i)));
          }, this)
        ),
          t("li input", this.$ul).on(
            "change",
            t.proxy(function (e) {
              var i = t(e.target),
                s = i.prop("checked") || !1,
                l = i.val() === this.options.selectAllValue;
              this.options.selectedClass &&
                (s
                  ? i.closest("li").addClass(this.options.selectedClass)
                  : i.closest("li").removeClass(this.options.selectedClass));
              var o = i.val(),
                n = this.getOptionByValue(o),
                a = t("option", this.$select).not(n),
                p = t("input", this.$container).not(i);
              return (
                l
                  ? s
                    ? this.selectAll(this.options.selectAllJustVisible)
                    : this.deselectAll(this.options.selectAllJustVisible)
                  : (s
                      ? (n.prop("selected", !0),
                        this.options.multiple
                          ? n.prop("selected", !0)
                          : (this.options.selectedClass &&
                              t(p)
                                .closest("li")
                                .removeClass(this.options.selectedClass),
                            t(p).prop("checked", !1),
                            a.prop("selected", !1),
                            this.$button.click()),
                        "active" === this.options.selectedClass &&
                          a.closest("a").css("outline", ""))
                      : n.prop("selected", !1),
                    this.options.onChange(n, s)),
                this.$select.change(),
                this.updateButtonText(),
                this.updateSelectAll(),
                this.options.preventInputChangeEvent ? !1 : void 0
              );
            }, this)
          ),
          t("li a", this.$ul).on("mousedown", function (t) {
            return t.shiftKey ? !1 : void 0;
          }),
          t("li a", this.$ul).on(
            "touchstart click",
            t.proxy(function (e) {
              e.stopPropagation();
              var i = t(e.target);
              if (e.shiftKey && this.options.multiple) {
                i.is("label") &&
                  (e.preventDefault(),
                  (i = i.find("input")),
                  i.prop("checked", !i.prop("checked")));
                var s = i.prop("checked") || !1;
                if (
                  null !== this.lastToggledInput &&
                  this.lastToggledInput !== i
                ) {
                  var l = i.closest("li").index(),
                    o = this.lastToggledInput.closest("li").index();
                  if (l > o) {
                    var n = o;
                    (o = l), (l = n);
                  }
                  ++o;
                  var a = this.$ul.find("li").slice(l, o).find("input");
                  a.prop("checked", s),
                    this.options.selectedClass &&
                      a
                        .closest("li")
                        .toggleClass(this.options.selectedClass, s);
                  for (var p = 0, r = a.length; r > p; p++) {
                    var c = t(a[p]),
                      h = this.getOptionByValue(c.val());
                    h.prop("selected", s);
                  }
                }
                i.trigger("change");
              }
              i.is("input") &&
                !i.closest("li").is(".multiselect-item") &&
                (this.lastToggledInput = i),
                i.blur();
            }, this)
          ),
          this.$container.off("keydown.multiselect").on(
            "keydown.multiselect",
            t.proxy(function (e) {
              if (!t('input[type="text"]', this.$container).is(":focus"))
                if (9 === e.keyCode && this.$container.hasClass("open"))
                  this.$button.click();
                else {
                  var i = t(this.$container)
                    .find("li:not(.divider):not(.disabled) a")
                    .filter(":visible");
                  if (!i.length) return;
                  var s = i.index(i.filter(":focus"));
                  38 === e.keyCode && s > 0
                    ? s--
                    : 40 === e.keyCode && s < i.length - 1
                    ? s++
                    : ~s || (s = 0);
                  var l = i.eq(s);
                  if ((l.focus(), 32 === e.keyCode || 13 === e.keyCode)) {
                    var o = l.find("input");
                    o.prop("checked", !o.prop("checked")), o.change();
                  }
                  e.stopPropagation(), e.preventDefault();
                }
            }, this)
          ),
          this.options.enableClickableOptGroups &&
            this.options.multiple &&
            t("li.multiselect-group", this.$ul).on(
              "click",
              t.proxy(function (e) {
                e.stopPropagation(), console.log("test");
                var i = t(e.target).parent(),
                  s = i.nextUntil("li.multiselect-group"),
                  l = s.filter(":visible:not(.disabled)"),
                  o = !0,
                  n = l.find("input"),
                  a = [];
                n.each(function () {
                  (o = o && t(this).prop("checked")), a.push(t(this).val());
                }),
                  o ? this.deselect(a, !1) : this.select(a, !1),
                  this.options.onChange(n, !o);
              }, this)
            ),
          this.options.enableCollapsibleOptGroups &&
            this.options.multiple &&
            (t("li.multiselect-group input", this.$ul).off(),
            t("li.multiselect-group", this.$ul)
              .siblings()
              .not("li.multiselect-group, li.multiselect-all", this.$ul)
              .each(function () {
                t(this).toggleClass("hidden", !0);
              }),
            t("li.multiselect-group", this.$ul).on(
              "click",
              t.proxy(function (t) {
                t.stopPropagation();
              }, this)
            ),
            t("li.multiselect-group > a", this.$ul).on(
              "click",
              t.proxy(function (e) {
                e.stopPropagation();
                var i = t(e.target).closest("li"),
                  s = i.nextUntil("li.multiselect-group"),
                  l = !0;
                s.each(function () {
                  l = l && t(this).hasClass("hidden");
                });
                var o = t(e.target).children("input").prop("checked");
                void 0 == o &&
                  (o = t(e.target).siblings("input").prop("checked")),
                  void 0 == o && (o = t(e.target).prop("checked")),
                  o && !l && "checkbox" == t(e.target).context.type && (l = !0),
                  !o && l && "checkbox" == t(e.target).context.type && (l = !1),
                  s.toggleClass("hidden", !l);
              }, this)
            ),
            t("li.multiselect-group > a > input", this.$ul).on(
              "change",
              t.proxy(function (e) {
                e.stopPropagation();
                var i = t(e.target).closest("li"),
                  s = i.nextUntil("li.multiselect-group", ":not(.disabled)"),
                  l = s.find("input"),
                  o = !0;
                l.each(function () {
                  o = o && t(this).prop("checked");
                }),
                  l.prop("checked", !o).trigger("change");
              }, this)
            ),
            t("li.multiselect-group", this.$ul).each(function () {
              var e = t(this).nextUntil(
                  "li.multiselect-group",
                  ":not(.disabled)"
                ),
                i = e.find("input"),
                s = !0;
              i.each(function () {
                s = s && t(this).prop("checked");
              }),
                t(this).find("input").prop("checked", s);
            }),
            t("li input", this.$ul).on(
              "change",
              t.proxy(function (e) {
                e.stopPropagation();
                var i = t(e.target).closest("li"),
                  s = i.prevUntil("li.multiselect-group", ":not(.disabled)"),
                  l = i.nextUntil("li.multiselect-group", ":not(.disabled)"),
                  o = s.find("input"),
                  n = l.find("input"),
                  a = t(e.target).prop("checked");
                o.each(function () {
                  a = a && t(this).prop("checked");
                }),
                  n.each(function () {
                    a = a && t(this).prop("checked");
                  }),
                  "undefined" != e.target.value &&
                    i
                      .prevAll(".multiselect-group")
                      .first()
                      .find("input")
                      .prop("checked", a);
              }, this)
            ),
            t("li.multiselect-all", this.$ul)
              .css("background", "#f3f3f3")
              .css("border-bottom", "1px solid #eaeaea"),
            t(
              "li.multiselect-group > a, li.multiselect-all > a > label.checkbox",
              this.$ul
            ).css("padding", "3px 20px 3px 35px"),
            t("li.multiselect-group > a > input", this.$ul).css(
              "margin",
              "4px 0px 5px -20px"
            ));
      },
      createOptionValue: function (e) {
        var i = t(e);
        i.is(":selected") && i.prop("selected", !0);
        var s = this.options.optionLabel(e),
          l = this.options.optionClass(e),
          o = i.val(),
          n = this.options.multiple ? "checkbox" : "radio",
          a = t(this.options.templates.li),
          p = t("label", a);
        p.addClass(n),
          a.addClass(l),
          this.options.enableHTML ? p.html(" " + s) : p.text(" " + s);
        var r = t("<input/>").attr("type", n);
        this.options.checkboxName && r.attr("name", this.options.checkboxName),
          p.prepend(r);
        var c = i.prop("selected") || !1;
        r.val(o),
          o === this.options.selectAllValue &&
            (a.addClass("multiselect-item multiselect-all"),
            r.parent().parent().addClass("multiselect-all")),
          p.attr("title", i.attr("title")),
          this.$ul.append(a),
          i.is(":disabled") &&
            r
              .attr("disabled", "disabled")
              .prop("disabled", !0)
              .closest("a")
              .attr("tabindex", "-1")
              .closest("li")
              .addClass("disabled"),
          r.prop("checked", c),
          c &&
            this.options.selectedClass &&
            r.closest("li").addClass(this.options.selectedClass);
      },
      createDivider: function (e) {
        var i = t(this.options.templates.divider);
        this.$ul.append(i);
      },
      createOptgroup: function (e) {
        if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
          var i = t(e).attr("label"),
            s = t(e).attr("value"),
            l = t(
              '<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><input type="checkbox" value="' +
                s +
                '"/><b> ' +
                i +
                '<b class="caret"></b></b></a></li>'
            );
          this.options.enableClickableOptGroups &&
            l.addClass("multiselect-group-clickable"),
            this.$ul.append(l),
            t(e).is(":disabled") && l.addClass("disabled"),
            t("option", e).each(
              t.proxy(function (t, e) {
                this.createOptionValue(e);
              }, this)
            );
        } else {
          var o = t(e).prop("label"),
            n = t(this.options.templates.liGroup);
          this.options.enableHTML
            ? t("label", n).html(o)
            : t("label", n).text(o),
            this.options.enableClickableOptGroups &&
              n.addClass("multiselect-group-clickable"),
            this.$ul.append(n),
            t(e).is(":disabled") && n.addClass("disabled"),
            t("option", e).each(
              t.proxy(function (t, e) {
                this.createOptionValue(e);
              }, this)
            );
        }
      },
      buildSelectAll: function () {
        "number" == typeof this.options.selectAllValue &&
          (this.options.selectAllValue =
            this.options.selectAllValue.toString());
        var e = this.hasSelectAll();
        if (
          !e &&
          this.options.includeSelectAllOption &&
          this.options.multiple &&
          t("option", this.$select).length >
            this.options.includeSelectAllIfMoreThan
        ) {
          this.options.includeSelectAllDivider &&
            this.$ul.prepend(t(this.options.templates.divider));
          var i = t(this.options.templates.li);
          t("label", i).addClass("checkbox"),
            this.options.enableHTML
              ? t("label", i).html(" " + this.options.selectAllText)
              : t("label", i).text(" " + this.options.selectAllText),
            this.options.selectAllName
              ? t("label", i).prepend(
                  '<input type="checkbox" name="' +
                    this.options.selectAllName +
                    '" />'
                )
              : t("label", i).prepend('<input type="checkbox" />');
          var s = t("input", i);
          s.val(this.options.selectAllValue),
            i.addClass("multiselect-item multiselect-all"),
            s.parent().parent().addClass("multiselect-all"),
            this.$ul.prepend(i),
            s.prop("checked", !1);
        }
      },
      buildFilter: function () {
        if (
          this.options.enableFiltering ||
          this.options.enableCaseInsensitiveFiltering
        ) {
          var e = Math.max(
            this.options.enableFiltering,
            this.options.enableCaseInsensitiveFiltering
          );
          if (this.$select.find("option").length >= e) {
            if (
              ((this.$filter = t(this.options.templates.filter)),
              t("input", this.$filter).attr(
                "placeholder",
                this.options.filterPlaceholder
              ),
              this.options.includeFilterClearBtn)
            ) {
              var i = t(this.options.templates.filterClearBtn);
              i.on(
                "click",
                t.proxy(function (e) {
                  clearTimeout(this.searchTimeout),
                    this.$filter.find(".multiselect-search").val(""),
                    t("li", this.$ul).show().removeClass("filter-hidden"),
                    this.updateSelectAll();
                }, this)
              ),
                this.$filter.find(".input-group").append(i);
            }
            this.$ul.prepend(this.$filter),
              this.$ul.addClass("filter-block"),
              this.$filter
                .val(this.query)
                .on("click", function (t) {
                  t.stopPropagation();
                })
                .on(
                  "input keydown",
                  t.proxy(function (e) {
                    13 === e.which && e.preventDefault(),
                      clearTimeout(this.searchTimeout),
                      (this.searchTimeout = this.asyncFunction(
                        t.proxy(function () {
                          if (this.query !== e.target.value) {
                            this.query = e.target.value;
                            var i, s;
                            t.each(
                              t("li", this.$ul),
                              t.proxy(function (e, l) {
                                var o =
                                    t("input", l).length > 0
                                      ? t("input", l).val()
                                      : "",
                                  n = t("label", l).text(),
                                  a = "";
                                if (
                                  ("text" === this.options.filterBehavior
                                    ? (a = n)
                                    : "value" === this.options.filterBehavior
                                    ? (a = o)
                                    : "both" === this.options.filterBehavior &&
                                      (a = n + "\n" + o),
                                  o !== this.options.selectAllValue && n)
                                ) {
                                  var p = !1;
                                  if (
                                    (this.options
                                      .enableCaseInsensitiveFiltering &&
                                      ((a = a.toLowerCase()),
                                      (this.query = this.query.toLowerCase())),
                                    this.options.enableFullValueFiltering &&
                                      "both" !== this.options.filterBehavior)
                                  ) {
                                    var r = a
                                      .trim()
                                      .substring(0, this.query.length);
                                    this.query.indexOf(r) > -1 && (p = !0);
                                  } else a.indexOf(this.query) > -1 && (p = !0);
                                  t(l)
                                    .toggle(p)
                                    .toggleClass("filter-hidden", !p),
                                    t(l).hasClass("multiselect-group")
                                      ? ((i = l), (s = p))
                                      : (p &&
                                          t(i)
                                            .show()
                                            .removeClass("filter-hidden"),
                                        !p &&
                                          s &&
                                          t(l)
                                            .show()
                                            .removeClass("filter-hidden"));
                                }
                              }, this)
                            );
                          }
                          this.updateSelectAll();
                        }, this),
                        300,
                        this
                      ));
                  }, this)
                );
          }
        }
      },
      destroy: function () {
        this.$container.remove(),
          this.$select.show(),
          this.$select.data("multiselect", null);
      },
      refresh: function () {
        var e = t.map(t("li input", this.$ul), t);
        t("option", this.$select).each(
          t.proxy(function (i, s) {
            for (var l, o = t(s), n = o.val(), a = e.length; 0 < a--; )
              if (n === (l = e[a]).val()) {
                o.is(":selected")
                  ? (l.prop("checked", !0),
                    this.options.selectedClass &&
                      l.closest("li").addClass(this.options.selectedClass))
                  : (l.prop("checked", !1),
                    this.options.selectedClass &&
                      l.closest("li").removeClass(this.options.selectedClass)),
                  o.is(":disabled")
                    ? l
                        .attr("disabled", "disabled")
                        .prop("disabled", !0)
                        .closest("li")
                        .addClass("disabled")
                    : l
                        .prop("disabled", !1)
                        .closest("li")
                        .removeClass("disabled");
                break;
              }
          }, this)
        ),
          this.updateButtonText(),
          this.updateSelectAll();
      },
      select: function (e, i) {
        t.isArray(e) || (e = [e]);
        for (var s = 0; s < e.length; s++) {
          var l = e[s];
          if (null !== l && void 0 !== l) {
            var o = this.getOptionByValue(l),
              n = this.getInputByValue(l);
            void 0 !== o &&
              void 0 !== n &&
              (this.options.multiple || this.deselectAll(!1),
              this.options.selectedClass &&
                n.closest("li").addClass(this.options.selectedClass),
              n.prop("checked", !0),
              o.prop("selected", !0),
              i && this.options.onChange(o, !0));
          }
        }
        this.updateButtonText(), this.updateSelectAll();
      },
      clearSelection: function () {
        this.deselectAll(!1), this.updateButtonText(), this.updateSelectAll();
      },
      deselect: function (e, i) {
        t.isArray(e) || (e = [e]);
        for (var s = 0; s < e.length; s++) {
          var l = e[s];
          if (null !== l && void 0 !== l) {
            var o = this.getOptionByValue(l),
              n = this.getInputByValue(l);
            void 0 !== o &&
              void 0 !== n &&
              (this.options.selectedClass &&
                n.closest("li").removeClass(this.options.selectedClass),
              n.prop("checked", !1),
              o.prop("selected", !1),
              i && this.options.onChange(o, !1));
          }
        }
        this.updateButtonText(), this.updateSelectAll();
      },
      selectAll: function (e, i) {
        e =
          this.options.enableCollapsibleOptGroups && this.options.multiple
            ? !1
            : e;
        var e = "undefined" == typeof e ? !0 : e,
          s = t("li input[type='checkbox']:enabled", this.$ul),
          l = s.filter(":visible"),
          o = s.length,
          n = l.length;
        if (
          (e
            ? (l.prop("checked", !0),
              t("li:not(.divider):not(.disabled)", this.$ul)
                .filter(":visible")
                .addClass(this.options.selectedClass))
            : (s.prop("checked", !0),
              t("li:not(.divider):not(.disabled)", this.$ul).addClass(
                this.options.selectedClass
              )),
          o === n || e === !1)
        )
          t("option:not([data-role='divider']):enabled", this.$select).prop(
            "selected",
            !0
          );
        else {
          var a = l
            .map(function () {
              return t(this).val();
            })
            .get();
          t("option:enabled", this.$select)
            .filter(function (e) {
              return -1 !== t.inArray(t(this).val(), a);
            })
            .prop("selected", !0);
        }
        i && this.options.onSelectAll();
      },
      deselectAll: function (e) {
        if (
          ((e =
            this.options.enableCollapsibleOptGroups && this.options.multiple
              ? !1
              : e),
          (e = "undefined" == typeof e ? !0 : e))
        ) {
          var i = t(
            "li input[type='checkbox']:not(:disabled)",
            this.$ul
          ).filter(":visible");
          i.prop("checked", !1);
          var s = i
            .map(function () {
              return t(this).val();
            })
            .get();
          t("option:enabled", this.$select)
            .filter(function (e) {
              return -1 !== t.inArray(t(this).val(), s);
            })
            .prop("selected", !1),
            this.options.selectedClass &&
              t("li:not(.divider):not(.disabled)", this.$ul)
                .filter(":visible")
                .removeClass(this.options.selectedClass);
        } else
          t("li input[type='checkbox']:enabled", this.$ul).prop("checked", !1),
            t("option:enabled", this.$select).prop("selected", !1),
            this.options.selectedClass &&
              t("li:not(.divider):not(.disabled)", this.$ul).removeClass(
                this.options.selectedClass
              );
      },
      rebuild: function () {
        this.$ul.html(""),
          (this.options.multiple =
            "multiple" === this.$select.attr("multiple")),
          this.buildSelectAll(),
          this.buildDropdownOptions(),
          this.buildFilter(),
          this.updateButtonText(),
          this.updateSelectAll(!0),
          this.options.disableIfEmpty && t("option", this.$select).length <= 0
            ? this.disable()
            : this.enable(),
          this.options.dropRight && this.$ul.addClass("pull-right");
      },
      dataprovider: function (i) {
        var s = 0,
          l = this.$select.empty();
        t.each(i, function (i, o) {
          var n;
          t.isArray(o.children)
            ? (s++,
              (n = t("<optgroup/>").attr({
                label: o.label || "Group " + s,
                disabled: !!o.disabled,
              })),
              e(o.children, function (e) {
                n.append(
                  t("<option/>").attr({
                    value: e.value,
                    label: e.label || e.value,
                    title: e.title,
                    selected: !!e.selected,
                    disabled: !!e.disabled,
                  })
                );
              }))
            : ((n = t("<option/>").attr({
                value: o.value,
                label: o.label || o.value,
                title: o.title,
                class: o["class"],
                selected: !!o.selected,
                disabled: !!o.disabled,
              })),
              n.text(o.label || o.value)),
            l.append(n);
        }),
          this.rebuild();
      },
      enable: function () {
        this.$select.prop("disabled", !1),
          this.$button.prop("disabled", !1).removeClass("disabled");
      },
      disable: function () {
        this.$select.prop("disabled", !0),
          this.$button.prop("disabled", !0).addClass("disabled");
      },
      setOptions: function (t) {
        this.options = this.mergeOptions(t);
      },
      mergeOptions: function (e) {
        return t.extend(!0, {}, this.defaults, this.options, e);
      },
      hasSelectAll: function () {
        return t("li.multiselect-all", this.$ul).length > 0;
      },
      updateSelectAll: function (e) {
        if (this.hasSelectAll()) {
          var i = t(
              "li:not(.multiselect-item):not(.filter-hidden) input:enabled",
              this.$ul
            ),
            s = i.length,
            l = i.filter(":checked").length,
            o = t("li.multiselect-all", this.$ul),
            n = o.find("input"),
            a = this.options.selectedClass;
          l > 0 && l === s
            ? (n.prop("checked", !0),
              o.addClass(this.options.selectedClass),
              this.options.onSelectAll(!0),
              t("li.multiselect-item input:enabled", this.$ul).each(
                function () {
                  t(this).parent().parent().addClass(a);
                }
              ))
            : (n.prop("checked", !1),
              o.removeClass(this.options.selectedClass),
              0 === l && (e || this.options.onSelectAll(!1)),
              t("li.multiselect-item input:enabled", this.$ul).each(
                function () {
                  t(this).parent().parent().removeClass(a);
                }
              ));
        }
      },
      updateButtonText: function () {
        var e = this.getSelected();
        this.options.enableHTML
          ? t(".multiselect .multiselect-selected-text", this.$container).html(
              this.options.buttonText(e, this.$select)
            )
          : t(".multiselect .multiselect-selected-text", this.$container).text(
              this.options.buttonText(e, this.$select)
            ),
          t(".multiselect", this.$container).attr(
            "title",
            this.options.buttonTitle(e, this.$select)
          );
      },
      getSelected: function () {
        return t("option", this.$select).filter(":selected");
      },
      getOptionByValue: function (e) {
        for (
          var i = t("option", this.$select), s = e.toString(), l = 0;
          l < i.length;
          l += 1
        ) {
          var o = i[l];
          if (o.value === s) return t(o);
        }
      },
      getInputByValue: function (e) {
        for (
          var i = t("li input", this.$ul), s = e.toString(), l = 0;
          l < i.length;
          l += 1
        ) {
          var o = i[l];
          if (o.value === s) return t(o);
        }
      },
      updateOriginalOptions: function () {
        this.originalOptions = this.$select.clone()[0].options;
      },
      asyncFunction: function (t, e, i) {
        var s = Array.prototype.slice.call(arguments, 3);
        return setTimeout(function () {
          t.apply(i || window, s);
        }, e);
      },
      setAllSelectedText: function (t) {
        (this.options.allSelectedText = t), this.updateButtonText();
      },
    }),
    (t.fn.multiselect = function (e, s, l) {
      return this.each(function () {
        var o = t(this).data("multiselect"),
          n = "object" == typeof e && e;
        o || ((o = new i(this, n)), t(this).data("multiselect", o)),
          "string" == typeof e &&
            (o[e](s, l), "destroy" === e && t(this).data("multiselect", !1));
      });
    }),
    (t.fn.multiselect.Constructor = i),
    t(function () {
      t("select[data-role=multiselect]").multiselect();
    });
})(window.jQuery);
