(function () {
    if (window.TradingView && window.TradingView.host)return;
    var e = {host: window.location.host.match(/eotpro\.com|mrn\.eotpro\.net|tradingview\.com|pyrrosinvestment\.com/i) == null ? "https://dwq4do82y8xi7.cloudfront.net" : "https://www.tradingview.com", ideasHost: "https://www.tradingview.com", gEl: function (e) {
        /*return document.getElementById(e)*/
        e=document.getElementById('chartArea');
        return e
    }, gId: function () {
        return"tradingview_" + ((1 + Math.random()) * 1048576 | 0).toString(16).substring(1)
    }, onready: function (e) {
        window.addEventListener ? window.addEventListener("DOMContentLoaded", e, !1) : window.attachEvent("onload", e)
    }, css: function (e) {
        var t = document.getElementsByTagName("head")[0], n = document.createElement("style"), r;
        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : (r = document.createTextNode(e), n.appendChild(r)), t.appendChild(n)
    }, bindEvent: function (e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
    }, unbindEvent: function (e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
    }, cloneSimpleObject: function (e) {
        if (null == e || "object" != typeof e)return e;
        var t = e.constructor();
        for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }, genearateUtmForUrlParams: function () {
        return"utmsource=" + encodeURI(window.location.hostname) + "&utmmedium=" + encodeURI(window.location.host + window.location.pathname)
    }, MiniWidget: function (e) {
        function t(e) {
            return/^[0-9]+(\.|,[0-9])*$/.test(e) ? e + "px" : e
        }

        this.options = {width: t(e.width) || 300, height: t(e.height) || 400, symbols: e.symbols, tabs: e.tabs || "", symbols_description: e.symbols_description || "", container: e.container_id || "", large_chart_url: e.large_chart_url || "", gridLineColor: e.gridLineColor || "", fontColor: e.fontColor || "", underLineColor: e.underLineColor || "", trendLineColor: e.trendLineColor || "", timeAxisBackgroundColor: e.timeAxisBackgroundColor || "", activeTickerBackgroundColor: e.activeTickerBackgroundColor || "", noGraph: e.noGraph || !1}, this.createWidget()
    }, MediumWidget: function (e) {
        function t(e) {
            return/^[0-9]+(\.|,[0-9])*$/.test(e) ? e + "px" : e
        }

        this.options = {container: e.container_id || "", width: t(e.width) || "", height: t(e.height) || "", symbols: e.symbols, symbols_description: e.symbols_description || "", large_chart_url: e.large_chart_url || "", gridLineColor: e.gridLineColor || "", fontColor: e.fontColor || "", underLineColor: e.underLineColor || "", trendLineColor: e.trendLineColor || "", timeAxisBackgroundColor: e.timeAxisBackgroundColor || "", chartOnly: !!e.chartOnly}, this.createWidget()
    }, widget: function (t) {
        this.id = e.gId();
        var n = e.getUrlParams(), r = t.tvwidgetsymbol || n.tvwidgetsymbol || n.symbol || t.symbol || "FX:SPX500", i = t.logo || "";
        i.src && (i = i.src), this.options = {width: t.width || 800, height: t.height || 500, symbol: r, interval: t.interval || "1", timezone: t.timezone || "", autosize: t.autosize, hide_top_toolbar: t.hide_top_toolbar, hide_side_toolbar: t.hide_side_toolbar, allow_symbol_change: t.allow_symbol_change, save_image: t.save_image !== undefined ? t.save_image : !0, container: t.container_id || "", toolbar_bg: t.toolbar_bg || "f4f7f9", watchlist: t.watchlist || [], studies: t.studies || [], theme: t.theme || "", style: t.style || "", eotprobtn: !!t.eotprobtn, details: !!t.details, news: !!t.news, calendar: !!t.calendar, hotlist: !!t.hotlist, hideideas: !!t.hideideas, hideideasbutton: !!t.hideideasbutton, widgetbar_width: +t.widgetbar_width || undefined, withdateranges: t.withdateranges || "", cme: !!t.cme, logo: i, show_popup_button: !!t.show_popup_button, popup_height: t.popup_height || "", popup_width: t.popup_width || "", studies_overrides: t.studies_overrides, overrides: t.overrides, enabled_features: t.enabled_features, disabled_features: t.disabled_features, publish_source: t.publish_source || "", enable_publishing: t.enable_publishing};
        if (t.news && t.news.length) {
            this.options.news_vendors = [];
            for (var s = 0; s < t.news.length; s++)switch (t.news[s]) {
                case"headlines":
                case"stocktwits":
                    this.options.news_vendors.push(t.news[s])
            }
            this.options.news_vendors || delete this.options.news_vendors
        }
        isFinite(t.widgetbar_width) && t.widgetbar_width > 0 && (this.options.widgetbar_width = t.widgetbar_width), this._ready_handlers = [], this.create()
    }, chart: function (t) {
        this.id = e.gId(), this.is_fullscreen = !1, this.options = {width: t.width || 640, height: t.height || 500, container: t.container_id || "", realtime: t.realtime, chart: t.chart}, this._ready_handlers = [], this.create()
    }, WidgetPopup: function (t) {
        this.id = e.gId(), this.options = {callback: typeof t.callback == "function" ? t.callback : function () {
        }, width: t.width || 800, height: t.height || 600, symbol: t.symbol, interval: t.interval || "1", toolbar_bg: t.toolbar_bg || "f4f7f9", theme: t.theme || "", hide_side_toolbar: !!t.hide_side_toolbar}, this.create()
    }, IdeasStreamWidget: function (e) {
        this.options = {width: e.width || 486, height: e.height || 670, symbol: e.symbol || "", username: e.username || "", mode: e.mode || "", userProfileUrl: e.userProfileUrl || "", ideaUrl: e.ideaUrl || "", publishSource: e.publishSource || ""}, this.createWidget(e)
    }, IdeaWidget: function (e) {
        this.options = {width: e.width || 486, height: e.height || 670, idea: e.idea || "", userProfileUrl: e.userProfileUrl || "", chartUrl: e.chartUrl || ""}, this.createWidget(e)
    }};
    e.IdeaWidget.prototype = {createWidget: function (t) {
        var n = this.widgetCode();
        this.options.container ? e.gEl(this.options.container).innerHTML = n : document.write(n);
        var r = this, i = e.gEl(this.getId());
        this.postMessage = e.postMessageWrapper(i.contentWindow, this.id), r.postMessage.on("resizeWidget", function (e) {
            i.style.height = e.height + "px"
        }.bind(this))
    }, widgetCode: function () {
        var t = this.options.width ? "&width=" + encodeURIComponent(this.options.width) : "", n = this.options.height ? "&height=" + encodeURIComponent(this.options.height) : "", r = this.options.idea ? "&idea=" + encodeURIComponent(this.options.idea) : "", i = this.options.userProfileUrl ? "&profile_url=" + encodeURIComponent(this.options.userProfileUrl) : "", s = this.options.chartUrl ? "&chart_url=" + encodeURIComponent(this.options.chartUrl) : "", o = e.ideasHost + "/idea-popup/" + "?" + t + n + r + i + s;
        return'<iframe id="' + this.getId() + '"' + ' src="' + o + '"' + ' width="' + this.options.width + '"' + (this.options.height ? ' height="' + this.options.height + '"' : "") + ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
    }, getId: function () {
        return this.id != null ? this.id : (this.id = "tradingview_widget" + e.gId(), this.id)
    }}, e.IdeasStreamWidget.prototype = {createWidget: function (t) {
        var n = this.widgetCode();
        this.options.container ? e.gEl(this.options.container).innerHTML = n : document.write(n);
        var r = this, i = e.gEl(this.getId());
        this.postMessage = e.postMessageWrapper(i.contentWindow, this.id), r.postMessage.on("resizeWidget", function (e) {
            var t = 450, n = Math.max(e.height, t);
            i.style.height = n + "px"
        }.bind(this))
    }, widgetCode: function () {
        var t = this.options.width ? "&width=" + encodeURIComponent(this.options.width) : "", n = this.options.height ? "&height=" + encodeURIComponent(this.options.height) : "", r = this.options.symbol ? "&symbol=" + encodeURIComponent(this.options.symbol) : "", i = this.options.username ? "&username=" + encodeURIComponent(this.options.username) : "", s = this.options.mode ? "&mode=" + encodeURIComponent(this.options.mode) : "", o = this.options.userProfileUrl ? "&profile_url=" + encodeURIComponent(this.options.userProfileUrl) : "", u = this.options.ideaUrl ? "&idea_url=" + encodeURIComponent(this.options.ideaUrl) : "", a = this.options.publishSource ? "&publish_source=" + encodeURIComponent(this.options.publishSource) : "", f = e.ideasHost + "/ideaswidgetembed/" + "?" + t + n + r + i + s + o + u + a;
        return'<iframe id="' + this.getId() + '"' + ' src="' + f + '"' + ' width="' + this.options.width + '"' + (this.options.height ? ' height="' + this.options.height + '"' : "") + ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
    }, getId: function () {
        return this.id != null ? this.id : (this.id = "tradingview_widget" + e.gId(), this.id)
    }}, e.MiniWidget.prototype = {createWidget: function () {
        var t = this.widgetCode();
        this.options.container ? e.gEl(this.options.container).innerHTML = t : document.write(widget_html)
    }, widgetCode: function () {
        var t = "", n = "", r = "", i = this.options.width ? "&width=" + encodeURIComponent(this.options.width) : "", s = this.options.height ? "&height=" + encodeURIComponent(this.options.height) : "", o = this.options.noGraph ? "&noGraph=" + encodeURIComponent(this.options.noGraph) : "", u = "&" + e.genearateUtmForUrlParams(), a = ["large_chart_url", "gridLineColor", "fontColor", "underLineColor", "trendLineColor", "activeTickerBackgroundColor", "timeAxisBackgroundColor"], f = "";
        for (var l = a.length - 1; l >= 0; l--) {
            var c = a[l], h = this.options[c];
            f += h ? "&" + c + "=" + encodeURIComponent(h) : ""
        }
        var p = function (e) {
            var t = [];
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                if (Object.prototype.toString.call(i) === "[object Array]") {
                    var s = encodeURIComponent(i[0]), o = encodeURIComponent(i[1]);
                    t.push(s), r += "&" + s + "=" + o
                } else typeof i == "string" && t.push(encodeURIComponent(i))
            }
            return t.join(",")
        };
        if (this.options.tabs) {
            for (var l = 0, d = this.options.tabs.length; l < d; l++) {
                var v = this.options.tabs[l];
                this.options.symbols[v] && (t += (t ? "&" : "") + v + "=" + p(this.options.symbols[v]))
            }
            n = "&tabs=" + encodeURIComponent(this.options.tabs.join(","))
        } else this.options.symbols && (t = "symbols=" + p(this.options.symbols));
        if (this.options.symbols_description)for (var m in this.options.symbols_description)r += "&" + encodeURIComponent(m) + "=" + encodeURIComponent(this.options.symbols_description[m]);
        var g = e.host + "/miniwidgetembed/" + "?" + t + n + r + f + i + s + o + u;
        return'<iframe id="tradingview_widget" src="' + g + '"' + ' width="' + this.options.width + '"' + (this.options.height ? ' height="' + this.options.height + '"' : "") + ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
    }, remove: function () {
        var t = e.gEl("tradingview_widget");
        t.parentNode.removeChild(t)
    }}, e.MediumWidget.prototype = {createWidget: function () {
        var t = this.widgetCode();
        this.options.container ? e.gEl(this.options.container).innerHTML = t : document.write(widget_html)
    }, widgetCode: function () {
        function o(e) {
            var n = [];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                if (Object.prototype.toString.call(i) === "[object Array]") {
                    var s = encodeURIComponent(i[0]), o = encodeURIComponent(i[1]);
                    n.push(s), t += "&" + s + "=" + o
                } else typeof i == "string" && n.push(encodeURIComponent(i))
            }
            return n.join(",")
        }

        var t = "", n = "symbols=" + o(this.options.symbols), r = "&width=" + encodeURIComponent(this.options.width), i = "&height=" + encodeURIComponent(this.options.height), s = "&" + e.genearateUtmForUrlParams(), u = ["gridLineColor", "fontColor", "underLineColor", "trendLineColor", "activeTickerBackgroundColor", "timeAxisBackgroundColor"], a = "";
        for (var f = u.length - 1; f >= 0; f--) {
            var l = u[f], c = this.options[l];
            a += c ? "&" + l + "=" + encodeURIComponent(c) : ""
        }
        var h = this.options.chartOnly ? "&chartOnly=1" : "", p = e.host + "/mediumwidgetembed/" + "?" + n + t + a + h + r + i + s, d = this.options.width || this.options.height ? ' style="' + (this.options.width ? "width: " + this.options.width + "; " : "") + (this.options.height ? "height: " + this.options.height + ";" : " ") + '"' : "";
        return'<iframe id="tradingview_widget" src="' + p + '"' + d + ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'
    }, remove: function () {
        var t = e.gEl("tradingview_widget");
        t.parentNode.removeChild(t)
    }}, e.widget.prototype = {create: function () {
        var t = this.render(), n = this, r;
        this.options.container ? e.gEl(this.options.container).innerHTML = t : document.write(t), r = e.gEl(this.id), this.postMessage = e.postMessageWrapper(r.contentWindow, this.id), e.bindEvent(r, "load", function () {
            n.postMessage.get("widgetReady", {}, function () {
                var e;
                n._ready = !0;
                for (e = n._ready_handlers.length; e--;)n._ready_handlers[e].call(n)
            })
        }), n.postMessage.on("quoteUpdate", function (e) {
            n._lastPriceCallback && n._lastPriceCallback(e)
        }), n.postMessage.on("openChartInPopup", function (t) {
            var r = e.cloneSimpleObject(n.options), i = ["symbol", "interval"];
            for (var s = i.length - 1; s >= 0; s--) {
                var o = i[s], u = t[o];
                u && (r[o] = u)
            }
            r.show_popup_button = !1;
            var a = n.options.popup_width || 900, f = n.options.popup_height || 600, l = (screen.width - a) / 2, c = (screen.height - f) / 2;
            window.open(n.generateUrl(r), "_blank", "resizable=yes, top=" + c + ", left=" + l + ", width=" + a + ", height=" + f)
        })
    }, ready: function (e) {
        this._ready ? e.call(this) : this._ready_handlers.push(e)
    }, render: function () {
        var e = this.generateUrl();
        return'<iframe id="' + this.id + '"' + ' src="' + e + '"' + (this.options.autosize ? ' style="width: 100%; height: 100%;"' : ' width="' + this.options.width + '"' + ' height="' + this.options.height + '"') + ' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen></iframe>'
    }, generateUrl: function (t) {
        function r(e, n, r) {
            return r = r || e, t[e] ? "&" + r + "=" + n : ""
        }

        function i(e, n, r) {
            return r = r || {}, "&" + e + "=" + (t[e] ? encodeURIComponent(JSON.stringify(n)) : encodeURIComponent(JSON.stringify(r)))
        }

        var t = t || this.options, n = t.cme ? "/cmewidgetembed/" : "/widgetembed/", s = t.enable_publishing ? e.ideasHost : e.host, o = s + n + "?symbol=" + encodeURIComponent(t.symbol) + "&interval=" + encodeURIComponent(t.interval) + (t.hide_top_toolbar ? "&hidetoptoolbar=1" : "") + (typeof t.hide_side_toolbar == "undefined" ? "" : "&hidesidetoolbar=" + (t.hide_side_toolbar ? "1" : "0")) + (typeof t.allow_symbol_change == "undefined" ? "" : "&symboledit=" + (t.allow_symbol_change ? "1" : "0")) + (t.save_image ? "" : "&saveimage=0") + "&toolbarbg=" + t.toolbar_bg.replace("#", "") + (t.watchlist && t.watchlist.length && t.watchlist.join ? "&watchlist=" + encodeURIComponent(t.watchlist.join("")) : "") + r("details", "1") + r("calendar", "1") + r("hotlist", "1") + r("news", "1") + (t.news_vendors ? "&news_vendors=" + encodeURIComponent(t.news_vendors.join("")) : "") + (t.studies ? "&studies=" + encodeURIComponent(t.studies.join("")) : "") + r("widgetbar_width", t.widgetbar_width, "widgetbarwidth") + r("hideideas", "1") + r("theme", encodeURIComponent(t.theme)) + r("style", encodeURIComponent(t.style)) + r("timezone", encodeURIComponent(t.timezone)) + r("eotprobtn", "1") + r("hideideasbutton", "1") + r("withdateranges", "1") + r("logo", encodeURIComponent(t.logo)) + r("show_popup_button", "1", "showpopupbutton") + i("studies_overrides", t.studies_overrides, {}) + i("overrides", t.overrides, {}) + i("enabled_features", t.enabled_features, []) + i("disabled_features", t.disabled_features, []) + (t.show_popup_button ? "&showpopupbutton=1" : "") + (t.publish_source ? "&publishsource=" + encodeURIComponent(t.publish_source) : "") + (t.enable_publishing ? "&enablepublishing=" + encodeURIComponent(t.enable_publishing) : "") + "&" + e.genearateUtmForUrlParams();
        return o
    }, image: function (t) {
        this.postMessage.get("imageURL", {}, function (n) {
            var r = e.host + "/x/" + n + "/";
            t(r)
        })
    }, subscribeToQuote: function (t) {
        var n = e.gEl(this.id);
        this.postMessage.post(n.contentWindow, "quoteSubscribe"), this._lastPriceCallback = t
    }, saveChart: function (e) {
        this.postMessage.get("chartID", {}, e)
    }, getSymbolInfo: function (e) {
        this.postMessage.get("symbolInfo", {}, e)
    }, remove: function () {
        var t = e.gEl(this.id);
        t.parentNode.removeChild(t)
    }, reload: function () {
        var t = e.gEl(this.id), n = t.parentNode;
        n.removeChild(t), n.innerHTML = this.render()
    }}, e.chart.prototype = {create: function () {
        var t = this.render(), n = this, r, i, s, o;
        e.chartCssAttached || (e.css(this.renderCss()), e.chartCssAttached = !0), this.options.container ? e.gEl(this.options.container).innerHTML = t : document.write(t), i = e.gEl(this.id), r = e.gEl(this.id + "_actions"), s = e.gEl(this.id + "_fullscreen"), e.bindEvent(i, "load", function () {
            var e;
            r.style.display = "block", n._ready = !0;
            for (e = n._ready_handlers.length; e--;)n._ready_handlers[e].call(n)
        }), e.bindEvent(s, "click", function () {
            n.toggleFullscreen()
        }), e.onready(function () {
            var e = !1;
            if (document.querySelector)document.querySelector('a[href$="/v/' + n.options.chart + '/"]') && (e = !0); else {
                var t = document.getElementsByTagName("a"), r = new RegExp("/v/" + n.options.chart + "/$");
                for (var s = 0; s < t.length; s++)if (r.test(t[s].href)) {
                    e = !0;
                    break
                }
            }
            e && (i.src += "#nolinks", i.name = "nolinks")
        }), this.postMessage = e.postMessageWrapper(i.contentWindow, this.id)
    }, ready: e.widget.prototype.ready, renderCss: function () {
        var t = e.host;
        return".tradingview-widget {position: relative;}.tradingview-widget .chart-actions-float {display: none; position: absolute; z-index: 5; top: 0; right: 0; background: #fff; border: 1px solid #bfbfbf; border-radius: 0 3px 0 3px; padding: 3px 3px 3px 3px; height: 23px;}.tradingview-widget .chart-actions-float .tradingview-button {font-weight: normal; font-size: 11px; padding: 3px 5px;}.tradingview-widget .chart-actions-float .status-picture {margin: 4px 1px 0 3px; border: none !important; padding: 0 !important; background: none !important;}.tradingview-widget .chart-status-picture {position: absolute; z-index: 50;}.tradingview-widget .icon {display: inline-block; background: url('" + t + "/static/images/icons.png') 0 0 no-repeat; position: relative;}.tradingview-widget .icon-action-realtime{background-position: -120px -80px; width: 15px; height: 15px; left: -1px; vertical-align: top;}.tradingview-widget .icon-action-zoom{background-position: -100px -80px; width: 15px; height: 15px; left: -1px; vertical-align: top;}.tradingview-widget .exit-fullscreen {z-index: 16; position: fixed; top: -1px; left: 50%; display: none; opacity: 0.6; background: #f9f9f9; color: #848487; border-radius: 0 0 3px 3px; border: 1px solid #b2b5b8; font-size: 11px; width: 116px; font-weight: bold; padding: 2px 4px; cursor: default; margin: 0 0 0 -62px;}.tradingview-widget .exit-fullscreen:hover {opacity: 1;}.tradingview-widget .tradingview-button {padding: 6px 10px 5px; height: 15px; display: inline-block; vertical-align: top; text-decoration: none !important;color: #6f7073; cursor: pointer;border: 1px solid #b2b5b8; font: bold 12px Calibri, Arial; background: url('" + t + "/static/images/button-bg.png') 0 0 repeat-x; border-radius: 3px; -moz-border-radius: 3px; -webkit-user-select: none;-moz-user-select: none;-o-user-select: none;user-select: none; box-sizing: content-box; -moz-box-sizing: content-box; -webkit-box-sizing: content-box;}.tradingview-widget .tradingview-button:hover, .tv-button:active {background-position: 0 -26px; color: #68696b;}"
    }, render: function () {
        var t = e.host;
        return'<div class="tradingview-widget" style="width: ' + this.options.width + "px; height: " + this.options.height + 'px;">' + '<div id="' + this.id + '_actions" class="chart-actions-float">' + '<a id="' + this.id + '_fullscreen" class="tradingview-button"><span class="icon icon-action-zoom"></span> Full Screen</a> ' + '<a id="' + this.id + '_live" class="tradingview-button" target="_blank" href="https://www.tradingview.com/e/?clone=' + this.options.chart + '">' + '<span class="icon icon-action-realtime"></span> Make It Live' + "</a> " + "</div>" + '<iframe id="' + this.id + '"' + ' src="' + t + "/embed/" + this.options.chart + "/?method=script&" + e.genearateUtmForUrlParams() + '"' + ' width="' + this.options.width + '"' + ' height="' + this.options.height + '"' + ' frameborder="0" allowTransparency="true" scrolling="no"></iframe>' + "</div>"
    }, windowSize: function () {
        var e = 0, t = 0;
        return document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : typeof window.innerWidth == "number" ? (e = window.innerWidth, t = window.innerHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth, t = document.body.clientHeight), {width: e, height: t}
    }, toggleFullscreen: function () {
        var t = e.gEl(this.id), n = e.gEl(this.id + "_actions"), r = this.windowSize();
        this.is_fullscreen ? (t.style.position = "static", t.style.width = this.options.width + "px", t.style.height = this.options.height + "px", t.style.zIndex = "auto", t.style.backgroundColor = "transparent", n.style.position = "absolute", n.style.zIndex = "auto", e.unbindEvent(document, "keydown", this.getKeyHandler())) : (t.style.position = "fixed", t.style.width = r.width + "px", t.style.height = r.height + "px", t.style.left = "0px", t.style.top = "0px", t.style.zIndex = "1000000", t.style.backgroundColor = "#fff", n.style.position = "fixed", n.style.zIndex = "1000001", e.bindEvent(document, "keydown", this.getKeyHandler())), this.is_fullscreen = !this.is_fullscreen
    }, getKeyHandler: function () {
        var e = this;
        return this.keyHandler || (this.keyHandler = function (t) {
            t.keyCode == 27 && e.toggleFullscreen()
        }), this.keyHandler
    }, getSymbolInfo: function (e) {
        this.postMessage.get("symbolInfo", {}, e)
    }}, e.postMessageWrapper = function () {
        var e = {}, t = {}, n = {}, r, i = 0, s = 0, o = "TradingView";
        return window.addEventListener && window.addEventListener("message", function (n) {
            var i, s;
            try {
                i = JSON.parse(n.data)
            } catch (n) {
                return
            }
            if (!i.provider || i.provider != o)return;
            i.type == "get" ? t[i.name].call(i, i.data, function (e) {
                var t = {id: i.id, type: "on", name: i.name, client_id: i.client_id, data: e, provider: o};
                r.postMessage(JSON.stringify(t), "*")
            }) : i.type == "on" ? e[i.client_id] && e[i.client_id][i.id] && (e[i.client_id][i.id].call(i, i.data), delete e[i.client_id][i.id]) : i.type == "post" && typeof t[i.name] == "function" && t[i.name].call(i, i.data, function () {
            })
        }), function (u, a) {
            return e[a] = {}, n[a] = u, r = u, {on: function (e, n) {
                t[e] = n
            }, get: function (t, r, s) {
                var u = {id: i++, type: "get", name: t, client_id: a, data: r, provider: o};
                e[a][u.id] = s, n[a].postMessage(JSON.stringify(u), "*")
            }, post: function (e, t, n) {
                var r = {id: s++, type: "post", name: t, data: n, provider: o};
                e && typeof e.postMessage == "function" && e.postMessage(JSON.stringify(r), "*")
            }}
        }
    }(), e.getUrlParams = function () {
        var e, t = /\+/g, n = /([^&=]+)=?([^&]*)/g, r = function (e) {
            return decodeURIComponent(e.replace(t, " "))
        }, i = window.location.search.substring(1), s = {};
        while (e = n.exec(i))s[r(e[1])] = r(e[2]);
        return s
    }, e.WidgetPopup.prototype = {create: function () {
        var t = this, n = this.options.width || 900, r = this.options.height || 600, i = (screen.width - n) / 2, s = (screen.height - r) / 2, o = e.host + "/widgetpopup/" + "?symbol=" + encodeURIComponent(this.options.symbol) + "&interval=" + encodeURIComponent(this.options.interval) + "&toolbarbg=" + this.options.toolbar_bg.replace("#", "") + (this.options.theme ? "&theme=" + encodeURIComponent(this.options.theme) : "") + "&hidesidetoolbar=" + (this.options.hide_side_toolbar ? "1" : "0") + "&" + e.genearateUtmForUrlParams();
        this.popupWindow = window.open(o, "", "resizable=yes,directories=no,location=no,toolbar=no,menubar=no,scrollbars=yes, top=" + s + ", left=" + i + ", width=" + n + ", height=" + r), this.postMessage = e.postMessageWrapper(this.popupWindow, this.id), this.postMessage.on("pushChartId", function (e) {
            var n = e;
            t.onPushChartId(n)
        }), typeof this.popupWindow == "function" && this.popupWindow.focus()
    }, onPushChartId: function (e) {
        var t = this;
        t.options.callback(e), this.popupWindow.close()
    }}, window.TradingView && jQuery ? jQuery.extend(window.TradingView, e) : window.TradingView = e
})();
new TradingView.widget({
    "autosize": true,
    "symbol": "FX:EURUSD",
    "interval": "D",
    "timezone": "exchange",
    "theme": "White",
    "style": "1",
    "toolbar_bg": "#f1f3f6",
    "allow_symbol_change": true,
    "hideideas": true,
    "show_popup_button": true,
    "popup_width": "1000",
    "popup_height": "650"
});
/**
 * Created by DELL on 2014-12-5.
 */
