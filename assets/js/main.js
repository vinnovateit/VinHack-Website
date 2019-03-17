! function (n) {
    var o = n(window),
        i = n("body");
    breakpoints({
        xlarge: ["1281px", "1680px"],
        large: ["981px", "1280px"],
        medium: ["737px", "980px"],
        small: ["481px", "736px"],
        xsmall: [null, "480px"]
    }), o.on("load", function () {
        window.setTimeout(function () {
            i.removeClass("is-preload")
        }, 100)
    }), browser.mobile && i.addClass("is-touch"), n(".scrolly").scrolly({
        speed: 2e3
    }), n("#nav > ul").dropotron({
        alignment: "right",
        hideDelay: 350
    }), n('<div id="titleBar"><span class="title">' + n("#logo").html() + "</span></div>").appendTo(i), "ie" == browser.name || browser.mobile ? n.fn._parallax = function () {
        return n(this)
    } : (n.fn._parallax = function () {
        return n(this).each(function () {
            var i, a, t = n(this);
            i = function () {
                t.css("background-position", "center 0px"), o.on("scroll._parallax", function () {
                    var n = parseInt(o.scrollTop()) - parseInt(t.position().top);
                    t.css("background-position", "center " + -.15 * n + "px")
                })
            }, a = function () {
                t.css("background-position", ""), o.off("scroll._parallax")
            }, breakpoints.on("<=medium", a), breakpoints.on(">medium", i)
        }), n(this)
    }, o.on("load resize", function () {
        o.trigger("scroll")
    })), n(".spotlight")._parallax().each(function () {
        var o, i, a = n(this);
        o = function () {
            var n, o, i;
            a.css("background-image", 'url("' + a.find(".image.main > img").attr("src") + '")'), a.hasClass("top") ? (i = "top", n = "-20%", o = 0) : a.hasClass("bottom") ? (i = "bottom-only", n = 0, o = "20%") : (i = "middle", n = 0, o = 0), a.scrollex({
                mode: i,
                top: n,
                bottom: o,
                initialize: function (n) {
                    a.addClass("inactive")
                },
                terminate: function (n) {
                    a.removeClass("inactive")
                },
                enter: function (n) {
                    a.removeClass("inactive")
                }
            })
        }, i = function () {
            a.css("background-image", ""), a.unscrollex()
        }, breakpoints.on("<=medium", i), breakpoints.on(">medium", o)
    }), n(".wrapper").each(function () {
        var o, i, a = n(this);
        o = function () {
            a.scrollex({
                top: 250,
                bottom: 0,
                initialize: function (n) {
                    a.addClass("inactive")
                },
                terminate: function (n) {
                    a.removeClass("inactive")
                },
                enter: function (n) {
                    a.removeClass("inactive")
                }
            })
        }, i = function () {
            a.unscrollex()
        }, breakpoints.on("<=medium", i), breakpoints.on(">medium", o)
    }), n("#banner")._parallax()
}(jQuery);