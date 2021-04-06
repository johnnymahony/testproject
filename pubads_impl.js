(function(_) {
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var ba, aa, da, ea, fa, ja, la, na, ka, oa, pa, qa, ta, wa, ya, za, Ba, Da, Fa, Ia, La, Ma, Na, Oa, Pa, Ra, Qa, Ua, Wa, Va, y, w, fb, gb, hb, lb, mb, ob, pb, rb, qb, Db, Fb, Lb, Mb, Vb, Xb, cc, fc, gc, hc, jc, lc, oc, tc, vc, wc, Fc, Hc, Jc, Kc, Nc, Oc, Pc, Qc, Sc, Tc, Uc, Wc, Xc, Zc, ad, ed, fd, kd, md, od, qd, rd, sd, td, ud, wd, vd, Ad, Bd, Ed, Id, Kd, Ld, Md, Pd, Ud, Wd, Zd, ce, K, de, fe, ge, he, ie, D, je, ke, le, hd, me, ne, re, se, te, Ie, Je, He, Ge, Ke, Le, Me, ia, Ne, Oe, Pe, Qe, dd, N;
        ba = function(a, b) {
            b = aa(a, b);
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        }
        ;
        aa = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a))
                    return e;
            return -1
        }
        ;
        _.ca = function(a, b) {
            return 0 <= Array.prototype.indexOf.call(a, b, void 0)
        }
        ;
        da = function(a, b) {
            b = Array.prototype.indexOf.call(a, b, void 0);
            0 <= b && Array.prototype.splice.call(a, b, 1)
        }
        ;
        ea = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return []
        }
        ;
        fa = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        }
        ;
        ja = function(a) {
            for (var b = 0, c = 0, d = {}; c < a.length; ) {
                var e = a[c++]
                    , f = _.ha(e) ? "o" + ia(e) : (typeof e).charAt(0) + e;
                Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
                    a[b++] = e)
            }
            a.length = b
        }
        ;
        la = function(a, b) {
            a.sort(b || ka)
        }
        ;
        na = function(a) {
            for (var b = ma, c = Array(a.length), d = 0; d < a.length; d++)
                c[d] = {
                    index: d,
                    value: a[d]
                };
            var e = b || ka;
            la(c, function(f, g) {
                return e(f.value, g.value) || f.index - g.index
            });
            for (b = 0; b < a.length; b++)
                a[b] = c[b].value
        }
        ;
        ka = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }
        ;
        oa = function(a, b) {
            return a === b
        }
        ;
        pa = function(a, b) {
            for (var c = {}, d = 0; d < a.length; d++) {
                var e = a[d]
                    , f = b.call(void 0, e, d, a);
                void 0 !== f && (c[f] || (c[f] = [])).push(e)
            }
            return c
        }
        ;
        qa = function(a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                if (Array.isArray(d))
                    for (var e = 0; e < d.length; e += 8192)
                        for (var f = qa.apply(null, fa(d, e, e + 8192)), g = 0; g < f.length; g++)
                            b.push(f[g]);
                else
                    b.push(d)
            }
            return b
        }
        ;
        ta = function(a) {
            var b = 0 > a;
            a = Math.abs(a);
            var c = a >>> 0;
            a = Math.floor((a - c) / 4294967296);
            a >>>= 0;
            b && (a = ~a >>> 0,
                c = (~c >>> 0) + 1,
            4294967295 < c && (c = 0,
                a++,
            4294967295 < a && (a = 0)));
            ra = c;
            sa = a
        }
        ;
        wa = function(a) {
            return a ? a.passive && ua() ? a : a.capture || !1 : !1
        }
        ;
        ya = function(a) {
            if (a !== xa)
                throw Error("Bad secret");
        }
        ;
        za = function() {
            var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
            return null !== a && void 0 !== a ? a : null
        }
        ;
        Ba = function() {
            var a, b;
            void 0 === Aa && (Aa = null !== (b = null === (a = za()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null);
            return Aa
        }
        ;
        Da = function(a) {
            var b, c = null === (b = Ba()) || void 0 === b ? void 0 : b.createHTML(a);
            return new Ca(null !== c && void 0 !== c ? c : a,xa)
        }
        ;
        Fa = function(a) {
            var b, c = null === (b = Ba()) || void 0 === b ? void 0 : b.createScriptURL(a);
            return new Ea(null !== c && void 0 !== c ? c : a,xa)
        }
        ;
        Ia = function(a) {
            if (a instanceof Ga) {
                var b;
                if (null === (b = za()) || void 0 === b || !b.isScriptURL(a))
                    if (a instanceof Ea)
                        a = a.j;
                    else
                        throw Error("wrong type");
            } else
                a = Ha(a);
            return a
        }
        ;
        La = function(a) {
            if (15360 >= a.length)
                return a;
            var b = a;
            15360 < b.length && (b = b.substring(0, 15352),
                b = b.replace(/%\w?$/, ""),
                b = b.replace(/&[^=]*=?$/, ""),
                b += "&trunc=1");
            Ja(Ka.D(), (9).toString(), 9, a.length - b.length + 8);
            return b
        }
        ;
        Ma = function(a) {
            a = a.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27");
            /^https?:\/\//.test(a) || (a = "unknown:" + a);
            return a
        }
        ;
        Na = function(a) {
            var b = a.indexOf("google_preview=", a.lastIndexOf("?"))
                , c = a.indexOf("&", b);
            -1 === c && (c = a.length - 1,
                --b);
            return a.substring(0, b) + a.substring(c + 1, a.length)
        }
        ;
        Oa = function(a, b) {
            b = void 0 === b ? window : b;
            return b.location ? b.URLSearchParams ? (a = b.URLSearchParams ? (new URLSearchParams(b.location.search)).get(a) : null) && a.length ? a : null : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
        }
        ;
        Pa = function(a, b) {
            b = void 0 === b ? window : b;
            return !!Oa(a, b)
        }
        ;
        Ra = function() {
            return Qa()
        }
        ;
        Qa = function() {
            var a = Number("2021032202");
            return 1 > a || Math.floor(a) !== a ? (Sa({
                v: "2021032202"
            }, "gpt_inv_ver"),
                "1") : "2021032202"
        }
        ;
        Ua = function(a, b) {
            a = {
                methodId: a
            };
            b.name && (a.name = b.name);
            b.message && (a.message = b.message.substring(0, 512));
            b.fileName && (a.fileName = b.fileName);
            b.lineNumber && (a.lineNumber = b.lineNumber);
            b.stack && (a.stack = Ta(b.stack, ""));
            return a
        }
        ;
        Wa = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            Va(a, b);
            if (!c)
                throw b;
        }
        ;
        Va = function(a, b, c) {
            c = void 0 === c ? Ya : c;
            if (!b.isReported)
                try {
                    b.isReported = !0;
                    if ("__throw_for_testing" === b.name && _.t(148))
                        throw Error("throwing error for testing");
                    var d = Ua(a, b)
                        , e = new Za("gpt_exception");
                    try {
                        $a(e)
                    } catch (f) {}
                    _.ab(d, function(f, g) {
                        u(e, g, f)
                    });
                    bb(e, c)
                } catch (f) {}
        }
        ;
        y = function(a, b, c) {
            return w(a, b, void 0 === c ? !1 : c, _.x(144))
        }
        ;
        w = function(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            return function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g)
                    f[g] = arguments[g];
                g = void 0;
                var h = !1
                    , k = null
                    , l = Ka.D();
                try {
                    var n = _.x(85);
                    n && l && (k = l.start(a.toString(), 3));
                    g = b.apply(this, f);
                    h = !0;
                    n && l && cb(l, k)
                } catch (p) {
                    try {
                        h ? Va(110, p) : Wa.call(this, a, p, c)
                    } catch (q) {
                        if (db(k),
                        !h && !c)
                            throw p;
                    }
                }
                if (d && .1 > Math.random())
                    try {
                        var m = Error();
                        eb("gpt_api_usage", function(p) {
                            u(p, "methodId", a);
                            u(p, "args", f.length);
                            m.stack && u(p, "stack", Ta(m.stack, m.message));
                            $a(p)
                        }, {
                            la: 1
                        })
                    } catch (p) {}
                return g
            }
        }
        ;
        fb = function(a, b, c) {
            w(a, b, void 0 === c ? !1 : c, !1)()
        }
        ;
        gb = function(a) {
            a && "function" == typeof a.pa && a.pa()
        }
        ;
        hb = function(a, b) {
            b = void 0 === b ? window : b;
            if (z(a, 5))
                try {
                    return b.localStorage
                } catch (c) {}
            return null
        }
        ;
        lb = function(a) {
            if (!_.x(1937))
                return !0;
            try {
                return kb(a.cookie),
                    !0
            } catch (b) {
                return !1
            }
        }
        ;
        mb = function(a, b) {
            b = void 0 === b ? document : b;
            return z(a, 5) && lb(b) ? b.cookie : null
        }
        ;
        ob = function(a, b, c) {
            c = void 0 === c ? document : c;
            b = mb(b, c);
            return null !== b && lb(c) ? (new nb({
                cookie: b
            })).get(a) || "" : null
        }
        ;
        pb = function(a, b, c, d, e) {
            e = void 0 === e ? document : e;
            z(c, 5) && lb(e) && (new nb(e)).set(a, b, d)
        }
        ;
        rb = function(a, b) {
            b = void 0 === b ? null : b;
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                var d = _.C
                    , e = c.value;
                c = b;
                c = void 0 === c ? null : c;
                var f = d.document;
                var g = e.x;
                e = e.y;
                f.hasOwnProperty("_goog_efp_called_") || (f._goog_efp_called_ = f.elementFromPoint(g, e));
                if (f = f.elementFromPoint(g, e)) {
                    if (!(g = qb(f, d, c)))
                        a: {
                            c = void 0 === c ? null : c;
                            g = d.document;
                            for (f = f.offsetParent; f && f != g.body; f = f.offsetParent)
                                if (e = qb(f, d, c)) {
                                    g = e;
                                    break a
                                }
                            g = null
                        }
                    d = g || null
                } else
                    d = null;
                if (d)
                    return d
            }
            return null
        }
        ;
        qb = function(a, b, c) {
            c = void 0 === c ? null : c;
            if ("fixed" !== sb(a, "position"))
                return null;
            var d = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= _.tb(_.ub, a).width && 1 >= _.tb(_.ub, a).height ? !0 : !1;
            c && c.j("ach_evt", {
                url: b.location.href,
                tn: a.tagName,
                id: a.getAttribute("id"),
                cls: a.getAttribute("class"),
                ign: d
            }, 1);
            return d ? null : a
        }
        ;
        Db = function(a, b, c, d) {
            var e = vb(b, a);
            if (!e)
                return null;
            var f = wb(e);
            if (!f)
                return f;
            var g = e === xb(b, a)
                , h = yb(function() {
                var l = g ? xb(b, a) : e;
                return l && zb(l, window) || {}
            });
            c = Ab(c)[0];
            var k = !1;
            Array.isArray(c) && (k = d ? g : 0 == f.x && "center" == h()["text-align"]);
            k && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - c[0]) / 2));
            g && (f.y += Math.round(Math.min(parseInt(h()["padding-top"], 10) || 0, e.clientHeight)),
            k || (d = e.clientWidth,
                f.x += Math.round(Math.min(parseInt(h()["padding-left"], 10) || 0, d))));
            return f && Bb(e) ? f : new _.Cb(-12245933,-12245933)
        }
        ;
        Fb = function(a, b, c) {
            c = void 0 === c ? null : c;
            return Eb(a, void 0 === b ? !1 : b, c ? hb(c) : null)
        }
        ;
        Lb = function(a, b, c, d) {
            if (5 !== Gb(b))
                return !1;
            var e = Fb(c, "6499" !== Hb(a.getAdUnitPath()), d);
            e && eb("gpt_int_ns", function(f) {
                u(f, "nsr", e);
                var g = hb(d);
                g && (g = Math.max.apply(Math, _.Ib(Jb(g) || [])),
                    u(f, "del", Math.floor((Date.now() - g) / 6E4)));
                $a(f)
            }, {
                la: _.Kb(492, .01)
            });
            return !!e
        }
        ;
        Mb = function(a) {
            if (4 === a && _.x(474))
                return 11;
            switch (a) {
                case 2:
                    return 2;
                case 3:
                    return 1;
                case 5:
                    return 8;
                default:
                    return null
            }
        }
        ;
        Vb = function(a) {
            a = Mb(a);
            if (!a)
                return null;
            var b = 0;
            if (11 !== a) {
                b |= _.C != _.C.top ? 512 : 0;
                var c = _.Nb(_.C);
                c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
                c && (b |= 64);
                if (b)
                    return b
            }
            if (2 === a || 1 === a) {
                0 === Ob() && (b |= 536870912);
                c = 0;
                try {
                    c |= _.C != _.C.top ? 512 : 0;
                    var d = Math.min(_.C.screen.width || 0, _.C.screen.height || 0);
                    c |= d ? 320 > d ? 8192 : 0 : 2048;
                    var e;
                    if (e = _.C.navigator) {
                        var f = _.C.navigator.userAgent;
                        e = /Firefox/.test(f) || /Android 2/.test(f) || /iPhone OS [34]_/.test(f) || /Windows Phone (?:OS )?[67]/.test(f)
                    }
                    c |= e ? 1048576 : 0
                } catch (k) {
                    c |= 32
                }
                b |= c;
                var g = void 0 === g ? null : g;
                d = 0;
                try {
                    d |= _.Pb(_.C) ? 0 : 8,
                        d |= Qb(_.C, Rb),
                        d |= Sb(_.C)
                } catch (k) {
                    d |= 32
                }
                if (_.Tb(_.Nb(_.C)))
                    switch (a) {
                        case 2:
                            g = void 0 === g ? null : g;
                            e = Ub(_.C.innerWidth, 0, Math.round(_.C.innerWidth / 320 * 50 + 15));
                            null != rb(e, void 0 === g ? null : g) && (d |= 16777216);
                            break;
                        case 1:
                            g = void 0 === g ? null : g;
                            e = _.C.innerWidth;
                            f = _.C.innerHeight;
                            c = Math.round(_.C.innerWidth / 320 * 50 + 15);
                            var h = Ub(e, f - c, f);
                            25 < c && h.push({
                                x: e - 25,
                                y: f - 25
                            });
                            null != rb(h, void 0 === g ? null : g) && (d |= 16777216)
                    }
                b |= d
            } else
                8 === a ? b |= Fb(_.C) : 11 !== a && (b |= 32);
            b || (g = _.Nb(_.C),
                g.adCount = g.adCount || {},
                g.adCount[a] = g.adCount[a] + 1 || 1);
            return b
        }
        ;
        Xb = function(a) {
            var b = window
                , c = !0;
            c = void 0 === c ? !1 : c;
            new D.Promise(function(d, e) {
                    function f() {
                        g.onload = null;
                        g.onerror = null;
                        b.document.body.removeChild(g)
                    }
                    var g = b.document.createElement("script");
                    g.onload = function() {
                        f();
                        d()
                    }
                    ;
                    g.onerror = function() {
                        f();
                        e(void 0)
                    }
                    ;
                    g.type = "text/javascript";
                    Wb(g, a);
                    c && "complete" !== b.document.readyState ? _.E(b, "load", function() {
                        b.document.body.appendChild(g)
                    }) : b.document.body.appendChild(g)
                }
            )
        }
        ;
        cc = function(a) {
            return Yb(this, function c() {
                var d, e, f, g, h;
                return Zb(c, function(k) {
                    switch (k.j) {
                        case 1:
                            return d = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.eb,
                                e = void 0,
                                k.l = 2,
                                $b(k, ac(d), 4);
                        case 4:
                            e = k.m;
                            k.j = 3;
                            k.l = 0;
                            break;
                        case 2:
                            bc(k);
                        case 3:
                            if (!e)
                                return k.return(void 0);
                            f = a.mb || e.sodar_query_id;
                            g = void 0 === e.rc_enable ? "n" : e.rc_enable;
                            h = void 0 === e.bg_snapshot_delay_ms ? "0" : e.bg_snapshot_delay_ms;
                            return f && e.bg_hash_basename && e.bg_binary ? k.return({
                                context: a.l,
                                Sc: e.bg_hash_basename,
                                Rc: e.bg_binary,
                                jd: a.j + "_" + a.m,
                                mb: f,
                                eb: a.eb,
                                Db: g,
                                Hb: h
                            }) : k.return(void 0)
                    }
                })
            })
        }
        ;
        fc = function(a) {
            Yb(this, function c() {
                var d;
                return Zb(c, function(e) {
                    if (1 == e.j)
                        return $b(e, cc(a), 2);
                    if (d = e.m) {
                        var f = "sodar2";
                        f = void 0 === f ? "sodar2" : f;
                        var g = window
                            , h = g.GoogleGcLKhOms;
                        h && "function" === typeof h.push || (h = g.GoogleGcLKhOms = []);
                        var k = {};
                        h.push((k._ctx_ = d.context,
                            k._bgv_ = d.Sc,
                            k._bgp_ = d.Rc,
                            k._li_ = d.jd,
                            k._jk_ = d.mb,
                            k._st_ = d.eb,
                            k._rc_ = d.Db,
                            k._dl_ = d.Hb,
                            k));
                        if (h = g.GoogleDX5YKUSk)
                            g.GoogleDX5YKUSk = void 0,
                                h[1]();
                        f = dc(ec, {
                            basename: f
                        });
                        Xb(f)
                    }
                    return e.return(d)
                })
            })
        }
        ;
        gc = function(a, b) {
            return 0 === b.size ? !1 : 0 === a.length ? !0 : a.some(function(c) {
                return b.has(c)
            })
        }
        ;
        hc = function(a) {
            var b;
            return (a = null === (b = a.querySelector) || void 0 === b ? void 0 : b.call(a, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
        }
        ;
        jc = function(a) {
            var b = a.ownerDocument && a.ownerDocument.defaultView;
            !b || "undefined" !== typeof window && b === window ? (void 0 === ic && (ic = hc(document)),
                b = ic) : b = hc(b.document);
            b && a.setAttribute("nonce", b)
        }
        ;
        lc = function(a, b) {
            return Yb(this, function d() {
                var e, f, g;
                return Zb(d, function(h) {
                    if (1 == h.j)
                        return e = 0 < b ? a.filter(function(k) {
                            return !k.oc
                        }) : a,
                            $b(h, D.Promise.all(e.map(function(k) {
                                return k.uc.promise
                            })), 2);
                    if (3 != h.j) {
                        if (a.length === e.length)
                            return h.return(0);
                        f = a.filter(function(k) {
                            return k.oc
                        });
                        g = _.kc();
                        return $b(h, D.Promise.race([D.Promise.all(f.map(function(k) {
                            return k.uc.promise
                        })), new D.Promise(function(k) {
                                return void setTimeout(k, b)
                            }
                        )]), 3)
                    }
                    return h.return(_.kc() - g)
                })
            })
        }
        ;
        oc = function(a, b, c, d) {
            c = void 0 === c ? null : c;
            d = void 0 === d ? {} : d;
            if (Math.random() < _.Kb(1916, .001)) {
                var e = {};
                Sa(_.F(Object, "assign").call(Object, (e.c = String(a),
                    e.pc = String(mc(window)),
                    e.em = c,
                    e.lid = b,
                    e.eids = nc().join(),
                    e), d), "esp")
            }
        }
        ;
        tc = function(a, b, c, d) {
            oc(18, a);
            try {
                var e = _.kc();
                _.Kb(360261971) && (pc(b, Number((qc(b, 8) - 1).toFixed(3))),
                    G(b, 7, Math.round(e / 1E3 / 60)));
                return c().then(function(f) {
                    oc(29, a, null, {
                        delta: String(_.kc() - e)
                    });
                    G(b, 3, Date.now());
                    rc(a, b, f, d);
                    return b
                }).catch(function(f) {
                    rc(a, b, J(b, 2), d);
                    oc(28, a, sc(f));
                    return b
                })
            } catch (f) {
                return rc(a, b, J(b, 2), d),
                    oc(1, a, sc(f)),
                    D.Promise.resolve(b)
            }
        }
        ;
        vc = function() {
            var a = window;
            var b = void 0 === b ? function() {}
                : b;
            return new D.Promise(function(c) {
                    var d = function() {
                        c(b());
                        _.uc(a, "load", d)
                    };
                    _.E(a, "load", d)
                }
            )
        }
        ;
        wc = function(a, b) {
            var c = document.createElement("script");
            c.src = Ia(a);
            jc(c);
            var d = function() {
                b && b();
                _.uc(c, "error", d)
            };
            document.head.appendChild(c);
            _.E(c, "error", d)
        }
        ;
        Fc = function(a, b, c, d) {
            var e, f = null !== (e = a.encryptedSignalSource) && void 0 !== e ? e : a.encryptedSignalSource = {};
            c ? xc() === yc(window) || _.x(1930) ? b.map(function(g) {
                var h = g.ra
                    , k = g.wa;
                if ((g = Object.getOwnPropertyDescriptor(f, h)) && !g.configurable)
                    return D.Promise.resolve(null);
                var l = !1;
                return new D.Promise(function(n) {
                        var m = f[h];
                        Object.defineProperty(f, h, {
                            set: function(p) {
                                if (!l) {
                                    l = !0;
                                    if ("function" === typeof p) {
                                        oc(17, h);
                                        p = new zc(h,p,c,d);
                                        var q = new Ac(p.o,p.A,k,c,d)
                                            , v = new Bc(q.o,q.A,k,c,d)
                                            , B = new Cc;
                                        Dc(B, [p, q, v]);
                                        Ec(B);
                                        p = q.l.promise
                                    } else
                                        oc(14, h),
                                            p = D.Promise.resolve(null);
                                    p.then(n)
                                }
                            }
                        });
                        m && (f[h] = m)
                    }
                )
            }) : oc(16, "") : oc(15, "")
        }
        ;
        Hc = function(a) {
            a = _.Gc(a.split(/\s+/), function(b) {
                return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                    value: parseFloat(b[1]),
                    type: b[2]
                } : {
                    value: 0,
                    type: "px"
                }
            });
            a[1] = a[1] || a[0];
            a[2] = a[2] || a[0];
            a[3] = a[3] || a[1];
            return a
        }
        ;
        Jc = function(a) {
            if (!a)
                return [0];
            a = "number" === typeof a ? [a] : a;
            a = _.Ic(a, function(b) {
                return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
            });
            ja(a);
            la(a, function(b, c) {
                return b - c
            });
            return a
        }
        ;
        Kc = function(a) {
            try {
                var b = a.getBoundingClientRect()
            } catch (c) {}
            return b ? {
                top: b.top,
                right: b.right,
                bottom: b.bottom,
                left: b.left,
                width: b.width || b.right - b.left,
                height: b.height || b.bottom - b.top
            } : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
            }
        }
        ;
        Nc = function(a, b, c, d) {
            var e, f, g, h, k, l, n, m = new Lc, p = "", q = function(v) {
                try {
                    var B = "object" === typeof v.data ? v.data : JSON.parse(v.data);
                    p === B.paw_id && (_.uc(a, "message", q),
                        m.resolve(d(B)))
                } catch (I) {}
            };
            return "function" === typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (_.E(a, "message", q),
                p = c(a.gmaSdk),
                m.promise) : "function" === typeof (null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || "function" === typeof (null === (n = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === n ? void 0 : n.postMessage) ? (p = String(Math.floor(2147483647 * Mc(a))),
                _.E(a, "message", q),
                b(a.webkit.messageHandlers, p),
                m.promise) : null
        }
        ;
        Oc = function(a) {
            return Nc(a, function(b, c) {
                var d;
                return void (null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
            }, function(b) {
                return b.getQueryInfo()
            }, function(b) {
                return b.signal
            })
        }
        ;
        Pc = function(a) {
            return "number" === typeof a || "string" === typeof a
        }
        ;
        Qc = function(a) {
            switch (a) {
                case void 0:
                case null:
                case 2:
                    return !1;
                case 0:
                case 1:
                    return !0;
                default:
                    throw Error("Unexpected encryption mode: " + a);
            }
        }
        ;
        Sc = function(a) {
            var b = window;
            var c = void 0 === c ? Rc : c;
            if (!b.goog_sdr_l) {
                Object.defineProperty(b, "goog_sdr_l", {
                    value: !0
                });
                var d = function() {
                    var e = _.Kb(37)
                        , f = function() {
                        c(b, "gpt", a, String(mc(b)))
                    };
                    e ? b.setTimeout(f, e) : f()
                };
                "complete" === b.document.readyState ? d() : _.E(b, "load", d)
            }
        }
        ;
        Tc = function(a) {
            var b, c;
            try {
                return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
            } catch (d) {}
            return null
        }
        ;
        Uc = function(a) {
            var b = /^https?:\/\/[^/#?]+\/?$/;
            return !!a && !b.test(a)
        }
        ;
        Wc = function(a) {
            if (a === a.top || Vc(a.top))
                return D.Promise.resolve(null);
            var b = Tc(a);
            if (!b || a.parent === a.top && Uc(a.document.referrer))
                return D.Promise.resolve(null);
            var c = new Lc;
            a = new MessageChannel;
            a.port1.onmessage = function(d) {
                "__goog_top_url_resp" === d.data.msgType && c.resolve(d.data.topUrl)
            }
            ;
            b.postMessage({
                msgType: "__goog_top_url_req"
            }, "*", [a.port2]);
            return c.promise
        }
        ;
        Xc = function(a) {
            return !!a && !!J(a, 1)
        }
        ;
        Zc = function(a) {
            a = (Vc(a.top) ? a.top : a).AMP;
            return "object" === typeof a && !!Yc(a, function(b, c) {
                return !/^inabox/i.test(c)
            })
        }
        ;
        ad = function(a) {
            return new D.Map([["arp", Zc(a) ? 1 : null], ["abxe", Vc(a.top) || $c(a.IntersectionObserver) ? 1 : null]])
        }
        ;
        ed = function(a, b, c) {
            var d = a.map(function(e) {
                return b[e.getDomId()]
            });
            return new D.Map([["ists", bd(d, function(e) {
                return 0 != Gb(e)
            }) || null], ["fas", cd(d, function(e) {
                return Mb(Gb(e))
            })], ["pfxs", _.x(98) ? bd(a, function(e) {
                var f = b[e.getDomId()], g;
                if (g = !Mb(Gb(f))) {
                    g = null;
                    Array.isArray(Ab(f)[0]) && (g = _.A(Ab(f)[0]),
                        f = g.next().value,
                        g = g.next().value,
                        g = {
                            width: f,
                            height: g
                        });
                    a: {
                        var h = vb(e, c);
                        e = {
                            Kc: g,
                            rc: !1
                        };
                        var k = void 0 === e ? {} : e;
                        e = void 0 === k.Kc ? null : k.Kc;
                        f = void 0 === k.ld ? 100 : k.ld;
                        g = void 0 === k.mc ? 50 : k.mc;
                        k = void 0 === k.rc ? !0 : k.rc;
                        for (var l = dd(), n = !1; h; ) {
                            if (!f-- || dd() - l >= g) {
                                g = !1;
                                break a
                            }
                            switch (h.nodeType) {
                                case 9:
                                    try {
                                        var m = h.parentWindow || h.defaultView;
                                        if (m) {
                                            var p = m.frameElement;
                                            if (p && Vc(m.parent)) {
                                                h = p;
                                                break
                                            }
                                        }
                                    } catch (H) {}
                                    h = null;
                                    break;
                                case 1:
                                    var q = h, v;
                                    if (v = k) {
                                        b: {
                                            try {
                                                if (0 < q.offsetWidth && 0 < q.offsetHeight && q.style && "none" !== q.style.display && "hidden" !== q.style.visibility && (!q.style.opacity || 0 !== Number(q.style.opacity))) {
                                                    var B = q.getBoundingClientRect();
                                                    var I = 0 < B.right && 0 < B.bottom;
                                                    break b
                                                }
                                            } catch (H) {}
                                            I = !1
                                        }
                                        v = !I
                                    }
                                    if (v) {
                                        g = !1;
                                        break a
                                    }
                                    n || (/^html|body$/i.test(q.tagName) ? n = null : (n = q.style.position || (zb(q, window) || {}).position,
                                        n = /^fixed/i.test(n) ? q : null),
                                        n = !!n && (!e || n.offsetWidth * n.offsetHeight <= 4 * e.width * e.height));
                                    h = h.parentNode
                            }
                        }
                        g = n
                    }
                }
                return g
            }) || null : null]])
        }
        ;
        fd = function(a) {
            return new D.Map([["rbvs", bd(a, function(b) {
                return 4 == Gb(b)
            }) || null]])
        }
        ;
        kd = function(a, b) {
            b = void 0 === b ? gd : b;
            var c = ia(a)
                , d = function(f) {
                f = _.A(f);
                f.next();
                f = hd(f);
                return b(c, f)
            }
                , e = function(f) {
                var g = _.A(f);
                f = g.next().value;
                g = hd(g);
                return a.apply(f, g)
            };
            return function(f) {
                for (var g = [], h = 0; h < arguments.length; ++h)
                    g[h] = arguments[h];
                h = this || _.C;
                var k = id.get(h);
                k || (k = {},
                    id.set(h, k));
                return jd(k, [this].concat(_.Ib(g)), e, d)
            }
        }
        ;
        md = function(a) {
            a = ld(a);
            var b = [];
            _.ab(a, function(c, d) {
                c = c.filter(function() {
                    return !0
                });
                c.length && (c = c.map(encodeURIComponent),
                    d = encodeURIComponent(d),
                    b.push(d + "=" + c.join()))
            });
            return b
        }
        ;
        od = function(a, b) {
            if (a = xb(a, b)) {
                if (b = _.x(434)) {
                    var c = a.getBoundingClientRect();
                    b = c.top;
                    var d = c.bottom;
                    0 === c.height ? b = !1 : (c = _.C.innerHeight,
                        b = 0 < d && d < c || 0 < b && b < c)
                }
                b || (a.style.display = "none")
            }
        }
        ;
        qd = function(a) {
            var b = a
                , c = 0;
            pd(b, function(d) {
                var e;
                return 1 === (null == (e = d.parentElement) ? void 0 : e.childElementCount) ? (b = d.parentElement,
                    c++,
                    !0) : !1
            });
            return {
                Cd: b,
                depth: c
            }
        }
        ;
        rd = function(a, b, c) {
            var d = _.t(23);
            eb("gpt_not_reserved", function(e) {
                $a(e);
                u(e, "inViewport", 0 <= b.top && b.bottom <= (_.C.innerHeight || a.documentElement.clientHeight));
                u(e, "depth", c)
            }, {
                la: d
            })
        }
        ;
        sd = function() {
            var a, b, c;
            return null !== (c = null === (b = null === (a = window.performance) || void 0 === a ? void 0 : a.now) || void 0 === b ? void 0 : b.call(a)) && void 0 !== c ? c : dd()
        }
        ;
        td = function(a) {
            var b = sd();
            for (a = b + a; sd() < a; )
                ;
            return sd() - b
        }
        ;
        ud = function(a, b) {
            var c = a.shift();
            void 0 !== c && (b(c),
            a.length && window.requestAnimationFrame(function() {
                return void ud(a, b)
            }))
        }
        ;
        wd = function() {
            var a = void 0 === a ? td : a;
            if ("function" === typeof window.requestAnimationFrame) {
                var b = vd();
                b.length && window.requestAnimationFrame(function() {
                    return void ud(b, a)
                })
            }
        }
        ;
        vd = function() {
            return _.xd(480).map(function(a) {
                return _.yd(a, 0)
            }).filter(function(a) {
                return null !== a
            })
        }
        ;
        Ad = function(a) {
            var b = _.Kb(8, -1);
            return -1 !== b ? b : zd(a, 1) ? zd(a, 3) && 0 !== Ob() ? J(a, 1) * qc(a, 3) : J(a, 1) : null
        }
        ;
        Bd = function(a) {
            var b = {};
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next())
                c = c.value,
                    b[J(c, 1)] = J(c, 2);
            return b
        }
        ;
        Ed = function(a, b) {
            var c;
            return Cd(a, Dd, function(d) {
                d = d.detail.data;
                try {
                    return c = JSON.parse(d),
                    "rewarded" === c.type && c.message === b
                } catch (e) {
                    return !1
                }
            }).then(function() {
                return c
            })
        }
        ;
        Id = function(a, b, c, d, e) {
            var f = document;
            switch (a) {
                case 5:
                    return new Fd(f,b,c,d,e);
                case 0:
                    return new Gd(f,b,c,d,e);
                default:
                    return new Hd(f,b,c,d,e)
            }
        }
        ;
        Kd = function(a) {
            var b = {
                threshold: [0, .3, .5, .75, 1]
            };
            return window.IntersectionObserver ? new IntersectionObserver(a,b) : new Jd(a,b)
        }
        ;
        Ld = function(a) {
            return new D.Promise(function(b) {
                    return void setTimeout(b, a)
                }
            )
        }
        ;
        Md = function(a, b) {
            return "undefined" === typeof IntersectionObserver ? new Jd(b,{
                rootMargin: a
            }) : new IntersectionObserver(b,{
                rootMargin: a
            })
        }
        ;
        Pd = function(a) {
            var b = Nd(a);
            return (K = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"],
                _.F(K, "find")).call(K, function(c) {
                var d = b.search(Od);
                b: {
                    var e = 0;
                    for (var f = c.length; 0 <= (e = b.indexOf(c, e)) && e < d; ) {
                        var g = b.charCodeAt(e - 1);
                        if (38 == g || 63 == g)
                            if (g = b.charCodeAt(e + f),
                            !g || 61 == g || 38 == g || 35 == g)
                                break b;
                        e += f + 1
                    }
                    e = -1
                }
                if (0 > e)
                    c = null;
                else {
                    f = b.indexOf("&", e);
                    if (0 > f || f > d)
                        f = d;
                    e += c.length + 1;
                    c = decodeURIComponent(b.substr(e, f - e).replace(/\+/g, " "))
                }
                return null !== c
            }) || null
        }
        ;
        Ud = function() {
            Qd("pubadsReady", !0);
            if (_.x(206)) {
                var a = 0;
                Object.defineProperty(Rd(), "pubadsReady", {
                    get: function() {
                        Sd.D().M(Td());
                        if (5 > a) {
                            var b = _.Kb(465);
                            eb("gpt_pubads_ready", function(c) {
                                ++a;
                                $a(c);
                                var d = Error("pubadsReady");
                                u(c, "stack", Ta(d.stack, d.message))
                            }, {
                                la: b
                            })
                        }
                        return !0
                    },
                    configurable: !0,
                    enumerable: !0
                })
            }
        }
        ;
        Wd = function(a) {
            return !!Yc(Vd, function(b) {
                return b === a
            })
        }
        ;
        Zd = function(a, b, c) {
            var d;
            c = Xd.D().add(a, [1, 1], {
                kb: c,
                format: b
            });
            a = c.slot;
            c = c.La;
            if (a && c) {
                if (5 === b && _.x(323))
                    return null;
                G(c, 15, b);
                _.Yd(a.getSlotId(), function() {
                    var e = window
                        , f = Mb(b);
                    if (null != f) {
                        e = _.Nb(e);
                        var g = e.adCount && e.adCount[f];
                        g && (e.adCount[f] = g - 1)
                    }
                })
            }
            return null !== (d = null === a || void 0 === a ? void 0 : a.getSlotId()) && void 0 !== d ? d : null
        }
        ;
        ce = function() {
            var a = window, b = $d.D().j, c;
            if (a === a.top)
                for (var d = {}, e = _.A(_.F(ae, "entries").call(ae)), f = e.next(); !f.done; d = {
                    fb: d.fb,
                    Ib: d.Ib
                },
                    f = e.next())
                    f = _.A(f.value),
                        d.fb = f.next().value,
                        d.Ib = f.next().value,
                    (K = null !== (c = a.location.hash) && void 0 !== c ? c : "",
                        _.F(K, "includes")).call(K, "gam" + d.fb + "Demo") && fb(789, function(g) {
                        return function() {
                            window.console && window.console.warn && window.console.warn("GPT - Demo " + g.fb + " ENABLED");
                            var h = Rd().defineOutOfPageSlot("/6499/example/" + g.fb.toLowerCase(), g.Ib);
                            h && (h.addService(Rd().pubads()),
                                be(a.document, w(790, function() {
                                    Rd().enableServices();
                                    Rd().display(h);
                                    z(b, 4) && Rd().pubads().refresh([h])
                                })))
                        }
                    }(d))
        }
        ;
        de = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }
        ;
        fe = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype)
                return a;
            a[b] = c.value;
            return a
        }
        ;
        ge = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("Cannot find global object");
        }
        ;
        he = ge(this);
        ie = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
        D = {};
        je = {};
        _.F = function(a, b) {
            var c = je[b];
            if (null == c)
                return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
        ;
        ke = function(a, b, c) {
            if (b)
                a: {
                    var d = a.split(".");
                    a = 1 === d.length;
                    var e = d[0], f;
                    !a && e in D ? f = D : f = he;
                    for (e = 0; e < d.length - 1; e++) {
                        var g = d[e];
                        if (!(g in f))
                            break a;
                        f = f[g]
                    }
                    d = d[d.length - 1];
                    c = ie && "es6" === c ? f[d] : null;
                    b = b(c);
                    null != b && (a ? fe(D, d, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    }) : b !== c && (void 0 === je[d] && (je[d] = ie ? he.Symbol(d) : "$jscp$" + d),
                        fe(f, je[d], {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })))
                }
        }
        ;
        ke("Symbol", function(a) {
            if (a)
                return a;
            var b = function(e, f) {
                this.j = e;
                fe(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            };
            b.prototype.toString = function() {
                return this.j
            }
            ;
            var c = 0
                , d = function(e) {
                if (this instanceof d)
                    throw new TypeError("Symbol is not a constructor");
                return new b("jscomp_symbol_" + (e || "") + "_" + c++,e)
            };
            return d
        }, "es6");
        ke("Symbol.iterator", function(a) {
            if (a)
                return a;
            a = (0,
                D.Symbol)("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = he[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && fe(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return le(de(this))
                    }
                })
            }
            return a
        }, "es6");
        le = function(a) {
            a = {
                next: a
            };
            a[_.F(D.Symbol, "iterator")] = function() {
                return this
            }
            ;
            return a
        }
        ;
        _.A = function(a) {
            var b = "undefined" != typeof D.Symbol && _.F(D.Symbol, "iterator") && a[_.F(D.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: de(a)
            }
        }
        ;
        hd = function(a) {
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            return c
        }
        ;
        _.Ib = function(a) {
            return a instanceof Array ? a : hd(_.A(a))
        }
        ;
        me = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        }
        ;
        if (ie && "function" == typeof _.F(Object, "setPrototypeOf"))
            ne = _.F(Object, "setPrototypeOf");
        else {
            var oe;
            a: {
                var pe = {
                    a: !0
                }
                    , qe = {};
                try {
                    qe.__proto__ = pe;
                    oe = qe.a;
                    break a
                } catch (a) {}
                oe = !1
            }
            ne = oe ? function(a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + " is not extensible");
                    return a
                }
                : null
        }
        re = ne;
        _.L = function(a, b) {
            a.prototype = me(b.prototype);
            a.prototype.constructor = a;
            if (re)
                re(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.Gd = b.prototype
        }
        ;
        se = function() {
            this.o = !1;
            this.G = null;
            this.m = void 0;
            this.j = 1;
            this.F = this.l = 0;
            this.B = null
        }
        ;
        te = function(a) {
            if (a.o)
                throw new TypeError("Generator is already running");
            a.o = !0
        }
        ;
        se.prototype.A = function(a) {
            this.m = a
        }
        ;
        var ue = function(a, b) {
            a.B = {
                vc: b,
                fd: !0
            };
            a.j = a.l || a.F
        };
        se.prototype.return = function(a) {
            this.B = {
                return: a
            };
            this.j = this.F
        }
        ;
        var $b = function(a, b, c) {
            a.j = c;
            return {
                value: b
            }
        }
            , bc = function(a) {
            a.l = 0;
            var b = a.B.vc;
            a.B = null;
            return b
        }
            , ve = function(a) {
            this.j = new se;
            this.m = a
        }
            , ye = function(a, b) {
            te(a.j);
            var c = a.j.G;
            if (c)
                return we(a, "return"in c ? c["return"] : function(d) {
                        return {
                            value: d,
                            done: !0
                        }
                    }
                    , b, a.j.return);
            a.j.return(b);
            return xe(a)
        }
            , we = function(a, b, c, d) {
            try {
                var e = b.call(a.j.G, c);
                if (!(e instanceof Object))
                    throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done)
                    return a.j.o = !1,
                        e;
                var f = e.value
            } catch (g) {
                return a.j.G = null,
                    ue(a.j, g),
                    xe(a)
            }
            a.j.G = null;
            d.call(a.j, f);
            return xe(a)
        }
            , xe = function(a) {
            for (; a.j.j; )
                try {
                    var b = a.m(a.j);
                    if (b)
                        return a.j.o = !1,
                            {
                                value: b.value,
                                done: !1
                            }
                } catch (c) {
                    a.j.m = void 0,
                        ue(a.j, c)
                }
            a.j.o = !1;
            if (a.j.B) {
                b = a.j.B;
                a.j.B = null;
                if (b.fd)
                    throw b.vc;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }
            , ze = function(a) {
            this.next = function(b) {
                te(a.j);
                a.j.G ? b = we(a, a.j.G.next, b, a.j.A) : (a.j.A(b),
                    b = xe(a));
                return b
            }
            ;
            this.throw = function(b) {
                te(a.j);
                a.j.G ? b = we(a, a.j.G["throw"], b, a.j.A) : (ue(a.j, b),
                    b = xe(a));
                return b
            }
            ;
            this.return = function(b) {
                return ye(a, b)
            }
            ;
            this[_.F(D.Symbol, "iterator")] = function() {
                return this
            }
        }
            , Zb = function(a, b) {
            b = new ze(new ve(b));
            re && a.prototype && re(b, a.prototype);
            return b
        }
            , Ae = function(a) {
            function b(d) {
                return a.next(d)
            }
            function c(d) {
                return a.throw(d)
            }
            new D.Promise(function(d, e) {
                    function f(g) {
                        g.done ? d(g.value) : D.Promise.resolve(g.value).then(b, c).then(f, e)
                    }
                    f(a.next())
                }
            )
        };
        ke("Reflect.setPrototypeOf", function(a) {
            return a ? a : re ? function(b, c) {
                    try {
                        return re(b, c),
                            !0
                    } catch (d) {
                        return !1
                    }
                }
                : null
        }, "es6");
        ke("Promise", function(a) {
            function b() {
                this.j = null
            }
            function c(g) {
                return g instanceof e ? g : new e(function(h) {
                        h(g)
                    }
                )
            }
            if (a)
                return a;
            b.prototype.m = function(g) {
                if (null == this.j) {
                    this.j = [];
                    var h = this;
                    this.l(function() {
                        h.B()
                    })
                }
                this.j.push(g)
            }
            ;
            var d = he.setTimeout;
            b.prototype.l = function(g) {
                d(g, 0)
            }
            ;
            b.prototype.B = function() {
                for (; this.j && this.j.length; ) {
                    var g = this.j;
                    this.j = [];
                    for (var h = 0; h < g.length; ++h) {
                        var k = g[h];
                        g[h] = null;
                        try {
                            k()
                        } catch (l) {
                            this.G(l)
                        }
                    }
                }
                this.j = null
            }
            ;
            b.prototype.G = function(g) {
                this.l(function() {
                    throw g;
                })
            }
            ;
            var e = function(g) {
                this.m = 0;
                this.l = void 0;
                this.j = [];
                this.A = !1;
                var h = this.G();
                try {
                    g(h.resolve, h.reject)
                } catch (k) {
                    h.reject(k)
                }
            };
            e.prototype.G = function() {
                function g(l) {
                    return function(n) {
                        k || (k = !0,
                            l.call(h, n))
                    }
                }
                var h = this
                    , k = !1;
                return {
                    resolve: g(this.I),
                    reject: g(this.B)
                }
            }
            ;
            e.prototype.I = function(g) {
                if (g === this)
                    this.B(new TypeError("A Promise cannot resolve to itself"));
                else if (g instanceof e)
                    this.T(g);
                else {
                    a: switch (typeof g) {
                        case "object":
                            var h = null != g;
                            break a;
                        case "function":
                            h = !0;
                            break a;
                        default:
                            h = !1
                    }
                    h ? this.H(g) : this.o(g)
                }
            }
            ;
            e.prototype.H = function(g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (k) {
                    this.B(k);
                    return
                }
                "function" == typeof h ? this.O(h, g) : this.o(g)
            }
            ;
            e.prototype.B = function(g) {
                this.F(2, g)
            }
            ;
            e.prototype.o = function(g) {
                this.F(1, g)
            }
            ;
            e.prototype.F = function(g, h) {
                if (0 != this.m)
                    throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
                this.m = g;
                this.l = h;
                2 === this.m && this.J();
                this.K()
            }
            ;
            e.prototype.J = function() {
                var g = this;
                d(function() {
                    if (g.X()) {
                        var h = he.console;
                        "undefined" !== typeof h && h.error(g.l)
                    }
                }, 1)
            }
            ;
            e.prototype.X = function() {
                if (this.A)
                    return !1;
                var g = he.CustomEvent
                    , h = he.Event
                    , k = he.dispatchEvent;
                if ("undefined" === typeof k)
                    return !0;
                "function" === typeof g ? g = new g("unhandledrejection",{
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection",{
                    cancelable: !0
                }) : (g = he.document.createEvent("CustomEvent"),
                    g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.l;
                return k(g)
            }
            ;
            e.prototype.K = function() {
                if (null != this.j) {
                    for (var g = 0; g < this.j.length; ++g)
                        f.m(this.j[g]);
                    this.j = null
                }
            }
            ;
            var f = new b;
            e.prototype.T = function(g) {
                var h = this.G();
                g.xb(h.resolve, h.reject)
            }
            ;
            e.prototype.O = function(g, h) {
                var k = this.G();
                try {
                    g.call(h, k.resolve, k.reject)
                } catch (l) {
                    k.reject(l)
                }
            }
            ;
            e.prototype.then = function(g, h) {
                function k(p, q) {
                    return "function" == typeof p ? function(v) {
                            try {
                                l(p(v))
                            } catch (B) {
                                n(B)
                            }
                        }
                        : q
                }
                var l, n, m = new e(function(p, q) {
                        l = p;
                        n = q
                    }
                );
                this.xb(k(g, l), k(h, n));
                return m
            }
            ;
            e.prototype.catch = function(g) {
                return this.then(void 0, g)
            }
            ;
            e.prototype.xb = function(g, h) {
                function k() {
                    switch (l.m) {
                        case 1:
                            g(l.l);
                            break;
                        case 2:
                            h(l.l);
                            break;
                        default:
                            throw Error("Unexpected state: " + l.m);
                    }
                }
                var l = this;
                null == this.j ? f.m(k) : this.j.push(k);
                this.A = !0
            }
            ;
            e.resolve = c;
            e.reject = function(g) {
                return new e(function(h, k) {
                        k(g)
                    }
                )
            }
            ;
            e.race = function(g) {
                return new e(function(h, k) {
                        for (var l = _.A(g), n = l.next(); !n.done; n = l.next())
                            c(n.value).xb(h, k)
                    }
                )
            }
            ;
            e.all = function(g) {
                var h = _.A(g)
                    , k = h.next();
                return k.done ? c([]) : new e(function(l, n) {
                        function m(v) {
                            return function(B) {
                                p[v] = B;
                                q--;
                                0 == q && l(p)
                            }
                        }
                        var p = []
                            , q = 0;
                        do
                            p.push(void 0),
                                q++,
                                c(k.value).xb(m(p.length - 1), n),
                                k = h.next();
                        while (!k.done)
                    }
                )
            }
            ;
            return e
        }, "es6");
        ke("Object.setPrototypeOf", function(a) {
            return a || re
        }, "es6");
        var Be = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            , Ce = ie && "function" == typeof _.F(Object, "assign") ? _.F(Object, "assign") : function(a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d)
                            Be(d, e) && (a[e] = d[e])
                }
                return a
            }
        ;
        ke("Object.assign", function(a) {
            return a || Ce
        }, "es6");
        var De = function(a, b, c) {
            if (null == a)
                throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp)
                throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
        ke("String.prototype.endsWith", function(a) {
            return a ? a : function(b, c) {
                var d = De(this, b, "endsWith");
                void 0 === c && (c = d.length);
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var e = b.length; 0 < e && 0 < c; )
                    if (d[--c] != b[--e])
                        return !1;
                return 0 >= e
            }
        }, "es6");
        var Ee = function(a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                if (b.call(c, f, e, a))
                    return {
                        i: e,
                        Oc: f
                    }
            }
            return {
                i: -1,
                Oc: void 0
            }
        };
        ke("Array.prototype.find", function(a) {
            return a ? a : function(b, c) {
                return Ee(this, b, c).Oc
            }
        }, "es6");
        ke("Array.prototype.findIndex", function(a) {
            return a ? a : function(b, c) {
                return Ee(this, b, c).i
            }
        }, "es6");
        ke("Object.entries", function(a) {
            return a ? a : function(b) {
                var c = [], d;
                for (d in b)
                    Be(b, d) && c.push([d, b[d]]);
                return c
            }
        }, "es8");
        var Fe = function(a, b) {
            a instanceof String && (a += "");
            var c = 0
                , d = !1
                , e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
            e[_.F(D.Symbol, "iterator")] = function() {
                return e
            }
            ;
            return e
        };
        ke("Array.prototype.keys", function(a) {
            return a ? a : function() {
                return Fe(this, function(b) {
                    return b
                })
            }
        }, "es6");
        ke("WeakMap", function(a) {
            function b() {}
            function c(g) {
                var h = typeof g;
                return "object" === h && null !== g || "function" === h
            }
            if (function() {
                if (!a || !Object.seal)
                    return !1;
                try {
                    var g = Object.seal({})
                        , h = Object.seal({})
                        , k = new a([[g, 2], [h, 3]]);
                    if (2 != k.get(g) || 3 != k.get(h))
                        return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }())
                return a;
            var d = "$jscomp_hidden_" + Math.random()
                , e = 0
                , f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.A(g);
                    for (var h; !(h = g.next()).done; )
                        h = h.value,
                            this.set(h[0], h[1])
                }
            };
            f.prototype.set = function(g, h) {
                if (!c(g))
                    throw Error("Invalid WeakMap key");
                if (!Be(g, d)) {
                    var k = new b;
                    fe(g, d, {
                        value: k
                    })
                }
                if (!Be(g, d))
                    throw Error("WeakMap key fail: " + g);
                g[d][this.j] = h;
                return this
            }
            ;
            f.prototype.get = function(g) {
                return c(g) && Be(g, d) ? g[d][this.j] : void 0
            }
            ;
            f.prototype.has = function(g) {
                return c(g) && Be(g, d) && Be(g[d], this.j)
            }
            ;
            f.prototype.delete = function(g) {
                return c(g) && Be(g, d) && Be(g[d], this.j) ? delete g[d][this.j] : !1
            }
            ;
            return f
        }, "es6");
        ke("Map", function(a) {
            if (function() {
                if (!a || "function" != typeof a || !_.F(a.prototype, "entries") || "function" != typeof Object.seal)
                    return !1;
                try {
                    var h = Object.seal({
                        x: 4
                    })
                        , k = new a(_.A([[h, "s"]]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size)
                        return !1;
                    var l = _.F(k, "entries").call(k)
                        , n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1])
                        return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (m) {
                    return !1
                }
            }())
                return a;
            var b = new D.WeakMap
                , c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.A(h);
                    for (var k; !(k = h.next()).done; )
                        k = k.value,
                            this.set(k[0], k[1])
                }
            };
            c.prototype.set = function(h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.m[l.id] = []);
                l.ja ? l.ja.value = k : (l.ja = {
                    next: this.j,
                    Fa: this.j.Fa,
                    head: this.j,
                    key: h,
                    value: k
                },
                    l.list.push(l.ja),
                    this.j.Fa.next = l.ja,
                    this.j.Fa = l.ja,
                    this.size++);
                return this
            }
            ;
            c.prototype.delete = function(h) {
                h = d(this, h);
                return h.ja && h.list ? (h.list.splice(h.index, 1),
                h.list.length || delete this.m[h.id],
                    h.ja.Fa.next = h.ja.next,
                    h.ja.next.Fa = h.ja.Fa,
                    h.ja.head = null,
                    this.size--,
                    !0) : !1
            }
            ;
            c.prototype.clear = function() {
                this.m = {};
                this.j = this.j.Fa = f();
                this.size = 0
            }
            ;
            c.prototype.has = function(h) {
                return !!d(this, h).ja
            }
            ;
            c.prototype.get = function(h) {
                return (h = d(this, h).ja) && h.value
            }
            ;
            c.prototype.entries = function() {
                return e(this, function(h) {
                    return [h.key, h.value]
                })
            }
            ;
            c.prototype.keys = function() {
                return e(this, function(h) {
                    return h.key
                })
            }
            ;
            c.prototype.values = function() {
                return e(this, function(h) {
                    return h.value
                })
            }
            ;
            c.prototype.forEach = function(h, k) {
                for (var l = _.F(this, "entries").call(this), n; !(n = l.next()).done; )
                    n = n.value,
                        h.call(k, n[1], n[0], this)
            }
            ;
            c.prototype[_.F(D.Symbol, "iterator")] = _.F(c.prototype, "entries");
            var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
                    b.set(k, l)) : l = "p_" + k;
                var n = h.m[l];
                if (n && Be(h.m, l))
                    for (h = 0; h < n.length; h++) {
                        var m = n[h];
                        if (k !== k && m.key !== m.key || k === m.key)
                            return {
                                id: l,
                                list: n,
                                index: h,
                                ja: m
                            }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    ja: void 0
                }
            }
                , e = function(h, k) {
                var l = h.j;
                return le(function() {
                    if (l) {
                        for (; l.head != h.j; )
                            l = l.Fa;
                        for (; l.next != l.head; )
                            return l = l.next,
                                {
                                    done: !1,
                                    value: k(l)
                                };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }
                , f = function() {
                var h = {};
                return h.Fa = h.next = h.head = h
            }
                , g = 0;
            return c
        }, "es6");
        ke("Array.prototype.values", function(a) {
            return a ? a : function() {
                return Fe(this, function(b, c) {
                    return c
                })
            }
        }, "es8");
        ke("Set", function(a) {
            if (function() {
                if (!a || "function" != typeof a || !_.F(a.prototype, "entries") || "function" != typeof Object.seal)
                    return !1;
                try {
                    var c = Object.seal({
                        x: 4
                    })
                        , d = new a(_.A([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size)
                        return !1;
                    var e = _.F(d, "entries").call(d)
                        , f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c)
                        return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }())
                return a;
            var b = function(c) {
                this.j = new D.Map;
                if (c) {
                    c = _.A(c);
                    for (var d; !(d = c.next()).done; )
                        this.add(d.value)
                }
                this.size = this.j.size
            };
            b.prototype.add = function(c) {
                c = 0 === c ? 0 : c;
                this.j.set(c, c);
                this.size = this.j.size;
                return this
            }
            ;
            b.prototype.delete = function(c) {
                c = this.j.delete(c);
                this.size = this.j.size;
                return c
            }
            ;
            b.prototype.clear = function() {
                this.j.clear();
                this.size = 0
            }
            ;
            b.prototype.has = function(c) {
                return this.j.has(c)
            }
            ;
            b.prototype.entries = function() {
                return _.F(this.j, "entries").call(this.j)
            }
            ;
            b.prototype.values = function() {
                return _.F(this.j, "values").call(this.j)
            }
            ;
            b.prototype.keys = _.F(b.prototype, "values");
            b.prototype[_.F(D.Symbol, "iterator")] = _.F(b.prototype, "values");
            b.prototype.forEach = function(c, d) {
                var e = this;
                this.j.forEach(function(f) {
                    return c.call(d, f, f, e)
                })
            }
            ;
            return b
        }, "es6");
        ke("Object.is", function(a) {
            return a ? a : function(b, c) {
                return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
            }
        }, "es6");
        ke("Array.prototype.includes", function(a) {
            return a ? a : function(b, c) {
                var d = this;
                d instanceof String && (d = String(d));
                var e = d.length;
                c = c || 0;
                for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = d[c];
                    if (f === b || _.F(Object, "is").call(Object, f, b))
                        return !0
                }
                return !1
            }
        }, "es7");
        ke("String.prototype.includes", function(a) {
            return a ? a : function(b, c) {
                return -1 !== De(this, b, "includes").indexOf(b, c || 0)
            }
        }, "es6");
        ke("Number.isFinite", function(a) {
            return a ? a : function(b) {
                return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
            }
        }, "es6");
        ke("Number.isInteger", function(a) {
            return a ? a : function(b) {
                return _.F(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
            }
        }, "es6");
        ke("Array.from", function(a) {
            return a ? a : function(b, c, d) {
                c = null != c ? c : function(h) {
                    return h
                }
                ;
                var e = []
                    , f = "undefined" != typeof D.Symbol && _.F(D.Symbol, "iterator") && b[_.F(D.Symbol, "iterator")];
                if ("function" == typeof f) {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done; )
                        e.push(c.call(d, f.value, g++))
                } else
                    for (f = b.length,
                             g = 0; g < f; g++)
                        e.push(c.call(d, b[g], g));
                return e
            }
        }, "es6");
        ke("Object.values", function(a) {
            return a ? a : function(b) {
                var c = [], d;
                for (d in b)
                    Be(b, d) && c.push(b[d]);
                return c
            }
        }, "es8");
        ke("Array.prototype.entries", function(a) {
            return a ? a : function() {
                return Fe(this, function(b, c) {
                    return [b, c]
                })
            }
        }, "es6");
        ke("Number.isNaN", function(a) {
            return a ? a : function(b) {
                return "number" === typeof b && isNaN(b)
            }
        }, "es6");
        _.C = this || self;
        Ie = function(a) {
            if (a && a != _.C)
                return Ge(a.document);
            null === He && (He = Ge(_.C.document));
            return He
        }
        ;
        Je = /^[\w+/_-]+[=]{0,2}$/;
        He = null;
        Ge = function(a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Je.test(a) ? a : ""
        }
        ;
        Ke = function() {}
        ;
        Le = function(a) {
            a.ab = void 0;
            a.D = function() {
                return a.ab ? a.ab : a.ab = new a
            }
        }
        ;
        Me = function(a) {
            var b = typeof a;
            b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || "object" == b && "number" == typeof a.length
        }
        ;
        _.ha = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }
        ;
        ia = function(a) {
            return Object.prototype.hasOwnProperty.call(a, Ne) && a[Ne] || (a[Ne] = ++Oe)
        }
        ;
        Ne = "closure_uid_" + (1E9 * Math.random() >>> 0);
        Oe = 0;
        Pe = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
        ;
        Qe = function(a, b, c) {
            if (!a)
                throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
        ;
        _.Re = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Re = Pe : _.Re = Qe;
            return _.Re.apply(null, arguments)
        }
        ;
        _.Se = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }
        ;
        dd = function() {
            return Date.now()
        }
        ;
        N = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Gd = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ee = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                    g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        }
        ;
        var Yb = function(a, b) {
            var c = void 0;
            return new (c || (c = D.Promise))(function(d, e) {
                    function f(k) {
                        try {
                            h(b.next(k))
                        } catch (l) {
                            e(l)
                        }
                    }
                    function g(k) {
                        try {
                            h(b["throw"](k))
                        } catch (l) {
                            e(l)
                        }
                    }
                    function h(k) {
                        k.done ? d(k.value) : (new c(function(l) {
                                l(k.value)
                            }
                        )).then(f, g)
                    }
                    h((b = b.apply(a, void 0)).next())
                }
            )
        };
        var Te;
        var Ve;
        _.Ue = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        }
        ;
        _.Ic = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        }
        ;
        _.Gc = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        }
        ;
        Ve = function(a, b) {
            return Array.prototype.reduce.call(a, b, 0)
        }
        ;
        _.We = function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        }
        ;
        var Xe, Ye, yb, $e;
        Xe = function() {
            return !0
        }
        ;
        Ye = function() {
            return null
        }
        ;
        yb = function(a) {
            var b = !1, c;
            return function() {
                b || (c = a(),
                    b = !0);
                return c
            }
        }
        ;
        _.Ze = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        }
        ;
        $e = function(a, b, c) {
            var d = 0
                , e = !1
                , f = []
                , g = function() {
                d = 0;
                e && (e = !1,
                    h())
            }
                , h = function() {
                d = _.C.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
            return function(k) {
                f = arguments;
                d ? e = !0 : h()
            }
        }
        ;
        var af = function(a, b) {
            for (var c in a)
                b.call(void 0, a[c], c, a)
        }
            , bf = function(a, b) {
            return null !== a && b in a
        }
            , cf = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a))
                    return c
        }
            , df = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
            , ef = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < df.length; f++)
                    c = df[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
        var hf = function(a, b) {
            this.j = a === ff && b || "";
            this.m = gf
        };
        hf.prototype.$a = !0;
        hf.prototype.Ya = function() {
            return this.j
        }
        ;
        var jf = function(a) {
            return a instanceof hf && a.constructor === hf && a.m === gf ? a.j : "type_error:Const"
        }
            , kf = function(a) {
            return new hf(ff,a)
        }
            , gf = {}
            , ff = {};
        var lf = {}
            , mf = function(a, b) {
            this.j = b === lf ? a : "";
            this.$a = !0
        };
        mf.prototype.Ya = function() {
            return this.j.toString()
        }
        ;
        mf.prototype.toString = function() {
            return this.j.toString()
        }
        ;
        var of = function(a, b) {
            this.j = b === nf ? a : ""
        };
        of.prototype.$a = !0;
        of.prototype.Ya = function() {
            return this.j.toString()
        }
        ;
        var sf = function(a, b) {
            a = pf.exec(Ha(a).toString());
            var c = a[3] || "";
            return qf(a[1] + rf("?", a[2] || "", b) + rf("#", c, void 0))
        };
        of.prototype.toString = function() {
            return this.j + ""
        }
        ;
        var Ha = function(a) {
            return a instanceof of && a.constructor === of ? a.j : "type_error:TrustedResourceUrl"
        }
            , dc = function(a, b) {
            var c = jf(a);
            if (!tf.test(c))
                throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(uf, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e))
                    throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof hf ? jf(d) : encodeURIComponent(String(d))
            });
            return qf(a)
        }
            , uf = /%{(\w+)}/g
            , tf = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
            , pf = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
            , nf = {}
            , qf = function(a) {
            return new of(a,nf)
        }
            , rf = function(a, b, c) {
            if (null == c)
                return b;
            if ("string" === typeof c)
                return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a),
                            b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
        var vf = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }
            , wf = function(a) {
            return /^[\s\xa0]*$/.test(a)
        }
            , xf = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        }
            , yf = /&/g
            , zf = /</g
            , Af = />/g
            , Bf = /"/g
            , Cf = /'/g
            , Df = /\x00/g
            , Ef = /[\x00&<>"']/
            , Gf = function(a, b) {
            var c = 0;
            a = xf(String(a)).split(".");
            b = xf(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || ""
                    , g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length)
                        break;
                    c = Ff(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ff(0 == f[2].length, 0 == g[2].length) || Ff(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        }
            , Ff = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
        var Kf, Hf;
        _.If = function(a, b) {
            this.j = b === Hf ? a : ""
        }
        ;
        _.If.prototype.$a = !0;
        _.If.prototype.Ya = function() {
            return this.j.toString()
        }
        ;
        _.If.prototype.toString = function() {
            return this.j.toString()
        }
        ;
        _.Jf = function(a) {
            return a instanceof _.If && a.constructor === _.If ? a.j : "type_error:SafeUrl"
        }
        ;
        Kf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        _.Lf = function(a) {
            if (a instanceof _.If)
                return a;
            a = "object" == typeof a && a.$a ? a.Ya() : String(a);
            Kf.test(a) || (a = "about:invalid#zClosurez");
            return new _.If(a,Hf)
        }
        ;
        Hf = {};
        var Mf;
        a: {
            var Nf = _.C.navigator;
            if (Nf) {
                var Of = Nf.userAgent;
                if (Of) {
                    Mf = Of;
                    break a
                }
            }
            Mf = ""
        }
        var O = function(a) {
            return -1 != Mf.indexOf(a)
        }
            , Pf = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
                c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
        var Qf = function() {
            return O("Trident") || O("MSIE")
        }
            , Rf = function() {
            return O("Firefox") || O("FxiOS")
        }
            , Tf = function() {
            return O("Safari") && !(Sf() || O("Coast") || O("Opera") || O("Edge") || O("Edg/") || O("OPR") || Rf() || O("Silk") || O("Android"))
        }
            , Sf = function() {
            return (O("Chrome") || O("CriOS")) && !O("Edge")
        }
            , Vf = function() {
            function a(e) {
                e = ba(e, d);
                return c[e] || ""
            }
            var b = Mf;
            if (Qf())
                return Uf(b);
            b = Pf(b);
            var c = {};
            _.Ue(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = _.Se(bf, c);
            return O("Opera") ? a(["Version", "Opera"]) : O("Edge") ? a(["Edge"]) : O("Edg/") ? a(["Edg"]) : Sf() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
        }
            , Uf = function(a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                return b[1];
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a),
                "7.0" == c[1])
                    if (a && a[1])
                        switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        }
                    else
                        b = "7.0";
                else
                    b = c[1];
            return b
        };
        var Zf;
        _.Xf = function(a, b, c) {
            this.j = c === _.Wf ? a : ""
        }
        ;
        _.Xf.prototype.$a = !0;
        _.Xf.prototype.Ya = function() {
            return this.j.toString()
        }
        ;
        _.Xf.prototype.toString = function() {
            return this.j.toString()
        }
        ;
        _.Yf = function(a) {
            return a instanceof _.Xf && a.constructor === _.Xf ? a.j : "type_error:SafeHtml"
        }
        ;
        _.Wf = {};
        Zf = new _.Xf(_.C.trustedTypes && _.C.trustedTypes.emptyHTML || "",0,_.Wf);
        var ag, Wb;
        _.$f = yb(function() {
            var a = document.createElement("div")
                , b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = _.Yf(Zf);
            return !b.parentElement
        });
        ag = function(a, b, c) {
            a.rel = c;
            a.href = -1 != c.toLowerCase().indexOf("stylesheet") ? Ha(b).toString() : b instanceof of ? Ha(b).toString() : b instanceof _.If ? _.Jf(b) : _.Jf(_.Lf(b))
        }
        ;
        Wb = function(a, b) {
            a.src = Ha(b);
            (b = Ie(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
        }
        ;
        var bg, cg, dg, eg, fg, hg;
        bg = function(a) {
            Ef.test(a) && (-1 != a.indexOf("&") && (a = a.replace(yf, "&amp;")),
            -1 != a.indexOf("<") && (a = a.replace(zf, "&lt;")),
            -1 != a.indexOf(">") && (a = a.replace(Af, "&gt;")),
            -1 != a.indexOf('"') && (a = a.replace(Bf, "&quot;")),
            -1 != a.indexOf("'") && (a = a.replace(Cf, "&#39;")),
            -1 != a.indexOf("\x00") && (a = a.replace(Df, "&#0;")));
            return a
        }
        ;
        cg = String.prototype.repeat ? function(a, b) {
                return a.repeat(b)
            }
            : function(a, b) {
                return Array(b + 1).join(a)
            }
        ;
        dg = function(a) {
            a = String(a);
            var b = a.indexOf(".");
            -1 == b && (b = a.length);
            return cg("0", Math.max(0, 2 - b)) + a
        }
        ;
        eg = function() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ dd()).toString(36)
        }
        ;
        fg = 2147483648 * Math.random() | 0;
        _.gg = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        }
        ;
        hg = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        }
        ;
        var ra = 0
            , sa = 0;
        var ig = function() {
            this.j = []
        };
        ig.prototype.length = function() {
            return this.j.length
        }
        ;
        var jg = function(a) {
            var b = a.j;
            a.j = [];
            return b
        }
            , kg = function(a) {
            for (var b = ra, c = sa; 0 < c || 127 < b; )
                a.j.push(b & 127 | 128),
                    b = (b >>> 7 | c << 25) >>> 0,
                    c >>>= 7;
            a.j.push(b)
        }
            , lg = function(a, b) {
            for (; 127 < b; )
                a.j.push(b & 127 | 128),
                    b >>>= 7;
            a.j.push(b)
        };
        var mg = function() {
            return O("iPhone") && !O("iPod") && !O("iPad")
        };
        var kb = function(a) {
            kb[" "](a);
            return a
        };
        kb[" "] = Ke;
        var ng = function(a, b) {
            try {
                return kb(a[b]),
                    !0
            } catch (c) {}
            return !1
        }
            , jd = function(a, b, c, d) {
            d = d ? d(b) : b;
            return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
        };
        var og, qg, rg, sg, tg, ug, vg, wg, xg, yg, zg, Ag;
        og = O("Opera");
        _.pg = Qf();
        qg = O("Edge");
        rg = qg || _.pg;
        sg = O("Gecko") && !(-1 != Mf.toLowerCase().indexOf("webkit") && !O("Edge")) && !(O("Trident") || O("MSIE")) && !O("Edge");
        tg = -1 != Mf.toLowerCase().indexOf("webkit") && !O("Edge");
        ug = tg && O("Mobile");
        vg = O("Android");
        wg = mg();
        xg = O("iPad");
        yg = O("iPod");
        zg = function() {
            var a = _.C.document;
            return a ? a.documentMode : void 0
        }
        ;
        a: {
            var Bg = ""
                , Cg = function() {
                var a = Mf;
                if (sg)
                    return /rv:([^\);]+)(\)|;)/.exec(a);
                if (qg)
                    return /Edge\/([\d\.]+)/.exec(a);
                if (_.pg)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (tg)
                    return /WebKit\/(\S+)/.exec(a);
                if (og)
                    return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
            Cg && (Bg = Cg ? Cg[1] : "");
            if (_.pg) {
                var Dg = zg();
                if (null != Dg && Dg > parseFloat(Bg)) {
                    Ag = String(Dg);
                    break a
                }
            }
            Ag = Bg
        }
        var Eg = Ag, Fg = {}, Gg = function(a) {
            return jd(Fg, a, function() {
                return 0 <= Gf(Eg, a)
            })
        }, Hg;
        if (_.C.document && _.pg) {
            var Ig = zg();
            Hg = Ig ? Ig : parseInt(Eg, 10) || void 0
        } else
            Hg = void 0;
        var Jg = Hg;
        var Kg = Sf()
            , Lg = Tf() && !(mg() || O("iPad") || O("iPod"));
        var Mg = {}
            , Ng = null
            , Og = sg || tg && !Lg || og || "function" == typeof _.C.btoa
            , Pg = function(a, b) {
            void 0 === b && (b = 0);
            if (!Ng) {
                Ng = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    Mg[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === Ng[h] && (Ng[h] = g)
                    }
                }
            }
            b = Mg[b];
            c = [];
            for (d = 0; d < a.length; d += 3) {
                var k = a[d]
                    , l = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f = d + 2 < a.length) ? a[d + 2] : 0;
                g = k >> 2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64,
                e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        }
            , Qg = function(a, b) {
            if (Og && !b)
                a = _.C.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255,
                        f >>= 8);
                    c[d++] = f
                }
                a = Pg(c, b)
            }
            return a
        };
        var Rg = function() {
            this.l = [];
            this.m = 0;
            this.j = new ig
        }
            , Sg = function(a, b) {
            lg(a.j, 8 * b + 2);
            b = jg(a.j);
            a.l.push(b);
            a.m += b.length;
            b.push(a.m);
            return b
        }
            , Tg = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c; )
                b.push(c & 127 | 128),
                    c >>>= 7,
                    a.m++;
            b.push(c);
            a.m++
        }
            , Ug = function(a) {
            for (var b = new Uint8Array(a.m + a.j.length()), c = a.l, d = c.length, e = 0, f = 0; f < d; f++) {
                var g = c[f];
                b.set(g, e);
                e += g.length
            }
            c = jg(a.j);
            b.set(c, e);
            a.l = [b];
            return b
        }
            , Vg = function(a, b, c) {
            if (null != c)
                if (lg(a.j, 8 * b),
                    a = a.j,
                0 <= c)
                    lg(a, c);
                else {
                    for (b = 0; 9 > b; b++)
                        a.j.push(c & 127 | 128),
                            c >>= 7;
                    a.j.push(1)
                }
        }
            , Wg = function(a, b, c) {
            null != c && (lg(a.j, 8 * b),
                a = a.j,
                ta(c),
                kg(a))
        }
            , Xg = function(a, b, c) {
            null != c && (lg(a.j, 8 * b),
                a = a.j,
                ta(c),
                kg(a))
        }
            , Yg = function(a, b, c) {
            if (null != c) {
                b = Sg(a, b);
                for (var d = a.j, e = 0; e < c.length; e++) {
                    var f = c.charCodeAt(e);
                    if (128 > f)
                        d.j.push(f);
                    else if (2048 > f)
                        d.j.push(f >> 6 | 192),
                            d.j.push(f & 63 | 128);
                    else if (65536 > f)
                        if (55296 <= f && 56319 >= f && e + 1 < c.length) {
                            var g = c.charCodeAt(e + 1);
                            56320 <= g && 57343 >= g && (f = 1024 * (f - 55296) + g - 56320 + 65536,
                                d.j.push(f >> 18 | 240),
                                d.j.push(f >> 12 & 63 | 128),
                                d.j.push(f >> 6 & 63 | 128),
                                d.j.push(f & 63 | 128),
                                e++)
                        } else
                            d.j.push(f >> 12 | 224),
                                d.j.push(f >> 6 & 63 | 128),
                                d.j.push(f & 63 | 128)
                }
                Tg(a, b)
            }
        }
            , $g = function(a, b, c) {
            var d = Zg;
            null != c && (b = Sg(a, b),
                d(c, a),
                Tg(a, b))
        }
            , ah = function(a, b, c, d) {
            if (null != c)
                for (var e = 0; e < c.length; e++) {
                    var f = Sg(a, b);
                    d(c[e], a);
                    Tg(a, f)
                }
        };
        var P = function() {}
            , bh = "function" == typeof Uint8Array
            , Q = function(a, b, c, d, e, f) {
            a.j = null;
            b || (b = c ? [c] : []);
            a.A = c ? String(c) : void 0;
            a.G = 0 === c ? -1 : 0;
            a.m = b;
            a: {
                c = a.m.length;
                b = -1;
                if (c && (b = c - 1,
                    c = a.m[b],
                    !(null === c || "object" != typeof c || Array.isArray(c) || bh && c instanceof Uint8Array))) {
                    a.B = b - a.G;
                    a.l = c;
                    break a
                }
                -1 < d ? (a.B = Math.max(d, b + 1 - a.G),
                    a.l = null) : a.B = Number.MAX_VALUE
            }
            a.F = {};
            if (e)
                for (d = 0; d < e.length; d++)
                    b = e[d],
                        b < a.B ? (b += a.G,
                            a.m[b] = a.m[b] || ch) : (dh(a),
                            a.l[b] = a.l[b] || ch);
            if (f && f.length)
                for (d = 0; d < f.length; d++) {
                    b = e = void 0;
                    c = a;
                    for (var g = f[d], h = 0; h < g.length; h++) {
                        var k = g[h]
                            , l = J(c, k);
                        null != l && (b = k,
                            e = l,
                            G(c, k, void 0))
                    }
                    b && G(c, b, e)
                }
        }
            , ch = []
            , dh = function(a) {
            var b = a.B + a.G;
            a.m[b] || (a.l = a.m[b] = {})
        }
            , J = function(a, b) {
            if (b < a.B) {
                b += a.G;
                var c = a.m[b];
                return c !== ch ? c : a.m[b] = []
            }
            if (a.l)
                return c = a.l[b],
                    c === ch ? a.l[b] = [] : c
        }
            , zd = function(a, b) {
            return null != J(a, b)
        }
            , eh = function(a, b) {
            return J(a, b)
        }
            , qc = function(a, b) {
            a = J(a, b);
            return null == a ? a : +a
        }
            , z = function(a, b) {
            a = J(a, b);
            return null == a ? a : !!a
        }
            , fh = function(a) {
            return null == a || "string" === typeof a ? a : bh && a instanceof Uint8Array ? Pg(a) : null
        }
            , gh = function(a, b, c) {
            a = J(a, b);
            return null == a ? c : a
        }
            , hh = function(a, b) {
            return gh(a, b, 0)
        }
            , ih = function(a) {
            var b = !1;
            b = void 0 === b ? !1 : b;
            a = z(a, 12);
            return null == a ? b : a
        }
            , jh = function(a) {
            var b = 1;
            b = void 0 === b ? 0 : b;
            a = qc(a, 2);
            return null == a ? b : a
        }
            , G = function(a, b, c) {
            b < a.B ? a.m[b + a.G] = c : (dh(a),
                a.l[b] = c);
            return a
        }
            , lh = function(a, b, c) {
            return kh(a, b, c, !1)
        }
            , kh = function(a, b, c, d) {
            c !== d ? G(a, b, c) : b < a.B ? a.m[b + a.G] = null : (dh(a),
                delete a.l[b]);
            return a
        }
            , mh = function(a, b, c) {
            J(a, b).push(c)
        }
            , R = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                var d = J(a, c);
                d && (a.j[c] = new b(d))
            }
            return a.j[c]
        }
            , T = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                for (var d = J(a, c), e = [], f = 0; f < d.length; f++)
                    e[f] = new b(d[f]);
                a.j[c] = e
            }
            b = a.j[c];
            b == ch && (b = a.j[c] = []);
            return b
        }
            , oh = function(a, b, c) {
            a.j || (a.j = {});
            var d = c ? nh(c) : c;
            a.j[b] = c;
            return G(a, b, d)
        }
            , ph = function(a, b, c) {
            a.j || (a.j = {});
            c = c || [];
            for (var d = [], e = 0; e < c.length; e++)
                d[e] = nh(c[e]);
            a.j[b] = c;
            return G(a, b, d)
        }
            , qh = function(a, b, c, d) {
            var e = T(a, d, b);
            c = c ? c : new d;
            a = J(a, b);
            e.push(c);
            a.push(nh(c))
        }
            , nh = function(a) {
            if (a.j)
                for (var b in a.j)
                    if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                        var c = a.j[b];
                        if (Array.isArray(c))
                            for (var d = 0; d < c.length; d++)
                                c[d] && nh(c[d]);
                        else
                            c && nh(c)
                    }
            return a.m
        };
        P.prototype.o = bh ? function() {
                var a = Uint8Array.prototype.toJSON;
                Uint8Array.prototype.toJSON = function() {
                    return Pg(this)
                }
                ;
                try {
                    return JSON.stringify(this.m && nh(this), rh)
                } finally {
                    Uint8Array.prototype.toJSON = a
                }
            }
            : function() {
                return JSON.stringify(this.m && nh(this), rh)
            }
        ;
        var rh = function(a, b) {
            return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
        }
            , sh = function(a, b) {
            return new a(b ? JSON.parse(b) : null)
        }
            , uh = function(a) {
            var b = th(nh(a))
                , c = Q;
            Q = function(d, e, f, g, h, k) {
                c(d, b, f, g, h, k);
                Q = c
            }
            ;
            a = new a.constructor(b);
            Q !== c && (Q = c);
            return a
        }
            , th = function(a) {
            if (Array.isArray(a)) {
                for (var b = Array(a.length), c = 0; c < a.length; c++) {
                    var d = a[c];
                    null != d && (b[c] = "object" == typeof d ? th(d) : d)
                }
                return b
            }
            if (bh && a instanceof Uint8Array)
                return new Uint8Array(a);
            b = {};
            for (c in a)
                Object.prototype.hasOwnProperty.call(a, c) && (d = a[c],
                null != d && (b[c] = "object" == typeof d ? th(d) : d));
            return b
        };
        var vh = document
            , wh = window;
        var xh = function(a, b) {
            var c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        };
        var ua;
        ua = yb(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                _.C.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });
        _.E = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, wa(d)),
                !0) : !1
        }
        ;
        _.uc = function(a, b, c, d) {
            return a.removeEventListener ? (a.removeEventListener(b, c, wa(d)),
                !0) : !1
        }
        ;
        var yh = !_.pg || 9 <= Number(Jg)
            , zh = _.pg || og || tg;
        _.Cb = function(a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        }
        ;
        _.Cb.prototype.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        }
        ;
        _.Cb.prototype.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        }
        ;
        _.Cb.prototype.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        }
        ;
        _.Ah = function(a, b) {
            this.width = a;
            this.height = b
        }
        ;
        _.r = _.Ah.prototype;
        _.r.aspectRatio = function() {
            return this.width / this.height
        }
        ;
        _.r.isEmpty = function() {
            return !(this.width * this.height)
        }
        ;
        _.r.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        }
        ;
        _.r.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        }
        ;
        _.r.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        }
        ;
        var Dh, Fh, Eh, Ih, Jh, Lh, Ph, Bh;
        Dh = function(a) {
            return a ? new Bh(_.Ch(a)) : Te || (Te = new Bh)
        }
        ;
        Fh = function(a, b) {
            af(b, function(c, d) {
                c && "object" == typeof c && c.$a && (c = c.Ya());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Eh.hasOwnProperty(d) ? a.setAttribute(Eh[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        }
        ;
        Eh = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };
        _.Hh = function(a) {
            a = a.document;
            a = _.Gh(a) ? a.documentElement : a.body;
            return new _.Ah(a.clientWidth,a.clientHeight)
        }
        ;
        Ih = function(a) {
            return a.scrollingElement ? a.scrollingElement : !tg && _.Gh(a) ? a.documentElement : a.body || a.documentElement
        }
        ;
        _.Kh = function(a) {
            return a ? Jh(a) : window
        }
        ;
        Jh = function(a) {
            return a.parentWindow || a.defaultView
        }
        ;
        Lh = function(a, b, c, d) {
            function e(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Me(f) || _.ha(f) && 0 < f.nodeType)
                    e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (_.ha(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    _.Ue(g ? ea(f) : f, e)
                }
            }
        }
        ;
        _.Mh = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }
        ;
        _.Gh = function(a) {
            return "CSS1Compat" == a.compatMode
        }
        ;
        _.Nh = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        }
        ;
        _.Oh = function(a) {
            var b;
            if (zh && !(_.pg && Gg("9") && !Gg("10") && _.C.SVGElement && a instanceof _.C.SVGElement) && (b = a.parentElement))
                return b;
            b = a.parentNode;
            return _.ha(b) && 1 == b.nodeType ? b : null
        }
        ;
        _.Ch = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }
        ;
        Ph = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? _.Kh(a.contentDocument) : null)
            } catch (b) {}
            return null
        }
        ;
        Bh = function(a) {
            this.j = a || _.C.document || document
        }
        ;
        Bh.prototype.l = Fh;
        Bh.prototype.m = function(a, b, c) {
            var d = this.j
                , e = arguments
                , f = String(e[0])
                , g = e[1];
            if (!yh && g && (g.name || g.type)) {
                f = ["<", f];
                g.name && f.push(' name="', bg(g.name), '"');
                if (g.type) {
                    f.push(' type="', bg(g.type), '"');
                    var h = {};
                    ef(h, g);
                    delete h.type;
                    g = h
                }
                f.push(">");
                f = f.join("")
            }
            f = _.Mh(d, f);
            g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : Fh(f, g));
            2 < e.length && Lh(d, f, e, 2);
            return f
        }
        ;
        var Qh = function(a, b) {
            return _.Mh(a.j, b)
        };
        Bh.prototype.append = function(a, b) {
            Lh(_.Ch(a), a, arguments, 1)
        }
        ;
        var Rh = function() {
            return O("iPad") || O("Android") && !O("Mobile") || O("Silk")
        };
        var Th, Uh, Od;
        _.Sh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        Th = function(a) {
            return a ? decodeURI(a) : a
        }
        ;
        Uh = function(a, b, c) {
            if (Array.isArray(b))
                for (var d = 0; d < b.length; d++)
                    Uh(a, String(b[d]), c);
            else
                null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        }
        ;
        Od = /#|$/;
        var Vc, Wh, xc, Vh, yc, Xh, zb, Zh, Mc, $h, ai, Yc, ci, Yh, ei, fi, di, gi, hi, ii, ji, ki, li, mi, ni, $c, oi, pi, qi, Ob, ri, ti, vi, pd, yi, zi, xi, Ai, Bi, Ci, Di, Ei, Fi, Gi, Hi, mc, be, Ii, Ji, Ki;
        Vc = function(a) {
            try {
                return !!a && null != a.location.href && ng(a, "foo")
            } catch (b) {
                return !1
            }
        }
        ;
        Wh = function(a, b, c, d) {
            d = d || _.C;
            c && (d = Vh(d));
            for (c = 0; d && 40 > c++ && (!b && !Vc(d) || !a(d)); )
                d = Vh(d)
        }
        ;
        xc = function() {
            var a = _.C;
            Wh(function(b) {
                a = b;
                return !1
            });
            return a
        }
        ;
        Vh = function(a) {
            try {
                var b = a.parent;
                if (b && b != a)
                    return b
            } catch (c) {}
            return null
        }
        ;
        yc = function(a) {
            return Vc(a.top) ? a.top : null
        }
        ;
        Xh = function(a, b) {
            var c = a.createElement("script");
            Wb(c, b);
            return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
                c) : null
        }
        ;
        zb = function(a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        }
        ;
        Zh = function(a, b) {
            if (!Yh()) {
                var c = Math.random();
                if (c < b)
                    return c = Mc(_.C),
                        a[Math.floor(c * a.length)]
            }
            return null
        }
        ;
        Mc = function(a) {
            if (!a.crypto)
                return Math.random();
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        }
        ;
        _.ab = function(a, b, c) {
            if (a)
                for (var d in a)
                    Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
        }
        ;
        $h = function(a) {
            for (var b in a)
                if (Object.prototype.hasOwnProperty.call(a, b))
                    return !1;
            return !0
        }
        ;
        ai = function(a) {
            var b = [];
            _.ab(a, function(c, d) {
                b.push(d)
            });
            return b
        }
        ;
        _.bi = function(a) {
            var b = [];
            _.ab(a, function(c) {
                b.push(c)
            });
            return b
        }
        ;
        Yc = function(a, b) {
            return cf(a, function(c, d) {
                return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
            })
        }
        ;
        ci = function(a) {
            var b = a.length;
            if (0 == b)
                return 0;
            for (var c = 305419896, d = 0; d < b; d++)
                c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        }
        ;
        Yh = yb(function() {
            return _.We(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], di) || 1E-4 > Math.random()
        });
        ei = function(a) {
            return Yh() ? null : Math.floor(1E3 * Mc(a))
        }
        ;
        fi = function(a, b) {
            try {
                if (a)
                    return a.setItem("google_experiment_mod", b),
                        b
            } catch (c) {}
            return null
        }
        ;
        di = function(a) {
            return -1 != Mf.indexOf(a)
        }
        ;
        gi = /^(-?[0-9.]{1,30})$/;
        _.yd = function(a, b) {
            return gi.test(a) && (a = Number(a),
                !isNaN(a)) ? a : void 0 == b ? null : b
        }
        ;
        hi = function() {
            return /^true$/.test("false")
        }
        ;
        ii = function(a, b) {
            b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a,
                    a = a.parent)
                    switch (a.location.protocol) {
                        case "https:":
                            return !0;
                        case "file:":
                            return b;
                        case "http:":
                            return !1
                    }
            } catch (d) {}
            return !0
        }
        ;
        ji = function(a) {
            if (!a)
                return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c)
                    return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        }
        ;
        ki = {
            Td: "allow-forms",
            Ud: "allow-modals",
            Vd: "allow-orientation-lock",
            Wd: "allow-pointer-lock",
            Xd: "allow-popups",
            Yd: "allow-popups-to-escape-sandbox",
            Zd: "allow-presentation",
            $d: "allow-same-origin",
            ae: "allow-scripts",
            be: "allow-top-navigation",
            ce: "allow-top-navigation-by-user-activation"
        };
        li = yb(function() {
            return _.bi(ki)
        });
        mi = function(a) {
            var b = li();
            return a.length ? _.Ic(b, function(c) {
                return !_.ca(a, c)
            }) : b
        }
        ;
        ni = function() {
            var a = _.Mh(document, "IFRAME")
                , b = {};
            _.Ue(li(), function(c) {
                a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
            });
            return b
        }
        ;
        $c = function(a) {
            a = a && a.toString && a.toString();
            return "string" === typeof a && -1 != a.indexOf("[native code]")
        }
        ;
        oi = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        }
        ;
        pi = function(a, b) {
            for (var c = 0; 50 > c; ++c) {
                if (oi(a, b))
                    return a;
                if (!(a = Vh(a)))
                    break
            }
            return null
        }
        ;
        qi = function(a, b) {
            if (!b || !b.frames)
                return null;
            if (b.frames[a])
                return b.frames[a].frameElement;
            try {
                var c = b.document
                    , d = new Bh(c)
                    , e = c.body || c.head && c.head.parentElement;
                if (e) {
                    var f = Qh(d, "IFRAME");
                    f.name = a;
                    f.id = a;
                    f.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                    e.appendChild(f);
                    return f
                }
            } catch (g) {}
            return null
        }
        ;
        Ob = yb(function() {
            return !Rh() && (O("iPod") || O("iPhone") || O("Android") || O("IEMobile")) ? 2 : Rh() ? 1 : 0
        });
        ri = function(a, b) {
            var c;
            for (c = void 0 === c ? 100 : c; a && c--; ) {
                if (a == b)
                    return !0;
                a = a.parentElement
            }
            return !1
        }
        ;
        _.wi = function(a, b) {
            a.style.setProperty ? _.ab(b, function(c, d) {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = _.si(ti(_.ui(a.style.cssText), vi(b, function(c) {
                return c + " !important"
            })))
        }
        ;
        ti = _.F(Object, "assign") || function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d)
                        Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        }
        ;
        vi = function(a, b) {
            var c = {}, d;
            for (d in a)
                Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        }
        ;
        pd = function(a, b, c) {
            for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); )
                a = a.parentElement
        }
        ;
        yi = function(a) {
            return xi(a, function(b) {
                return "fixed" == b.position || "sticky" == b.position
            })
        }
        ;
        zi = function(a) {
            return xi(a, function(b) {
                return "left" == b["float"] || "right" == b["float"] || "left" == b.cssFloat || "right" == b.cssFloat
            })
        }
        ;
        xi = function(a, b) {
            var c;
            for (c = void 0 === c ? 100 : c; a && c--; ) {
                var d = zb(a, window);
                if (d) {
                    if (b(d))
                        return !0;
                    a = a.parentElement
                }
            }
            return !1
        }
        ;
        Ai = function(a) {
            if (!a)
                return null;
            a = a.transform;
            if (!a)
                return null;
            a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
            return 6 != a.length ? null : _.Gc(a, parseFloat)
        }
        ;
        _.si = function(a) {
            var b = [];
            _.ab(a, function(c, d) {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        }
        ;
        _.ui = function(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                _.Ue((a || "").split(/\s*;\s*/), function(d) {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        }
        ;
        Bi = function(a) {
            _.C.console && _.C.console.warn && _.C.console.warn(a)
        }
        ;
        Ci = function(a, b) {
            b = aa(a, b);
            if (0 <= b) {
                var c = a[b];
                Array.prototype.splice.call(a, b, 1);
                return c
            }
            return null
        }
        ;
        Di = [];
        Ei = function() {
            var a = Di;
            Di = [];
            a = _.A(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                try {
                    b()
                } catch (c) {}
            }
        }
        ;
        Fi = function(a) {
            return a.replace(/\\(n|r|\\)/g, function(b, c) {
                return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
            })
        }
        ;
        Gi = function(a) {
            var b = document;
            b = void 0 === b ? window.document : b;
            if (a && b.head) {
                var c = document.createElement("meta");
                c.httpEquiv = "origin-trial";
                c.content = a;
                b.head.appendChild(c)
            }
        }
        ;
        Hi = function() {
            return Math.floor(Math.random() * Math.pow(2, 52))
        }
        ;
        mc = function(a) {
            if ("number" !== typeof a.goog_pvsid)
                try {
                    Object.defineProperty(a, "goog_pvsid", {
                        value: Hi(),
                        configurable: !1
                    })
                } catch (b) {}
            return Number(a.goog_pvsid) || -1
        }
        ;
        be = function(a, b) {
            "complete" === a.readyState || "interactive" === a.readyState ? (Di.push(b),
            1 == Di.length && (D.Promise ? D.Promise.resolve().then(Ei) : window.setImmediate ? setImmediate(Ei) : setTimeout(Ei, 0))) : a.addEventListener("DOMContentLoaded", b)
        }
        ;
        Ii = function(a) {
            return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
        }
        ;
        Ji = function(a, b) {
            var c = document.createElement("div");
            c.id = a;
            c.textContent = b;
            _.wi(c, {
                height: "24px",
                "line-height": "24px",
                "text-align": "center",
                "vertical-align": "middle",
                color: "white",
                "background-color": "black",
                margin: "0",
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "11px",
                "letter-spacing": "0.08em"
            });
            return c
        }
        ;
        Ki = function(a) {
            try {
                var b = JSON.stringify(a)
            } catch (c) {}
            return b || String(a)
        }
        ;
        var Mi;
        _.Li = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        }
        ;
        Mi = function(a) {
            return new _.Li(a.top,a.right,a.bottom,a.left)
        }
        ;
        _.Li.prototype.ceil = function() {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        }
        ;
        _.Li.prototype.floor = function() {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        }
        ;
        _.Li.prototype.round = function() {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        }
        ;
        var Ni = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        }
            , Oi = function(a) {
            return new _.Li(a.top,a.left + a.width,a.top + a.height,a.left)
        }
            , Pi = function(a, b) {
            var c = Math.max(a.left, b.left)
                , d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a)
                    return new Ni(c,e,d - c,a - e)
            }
            return null
        };
        Ni.prototype.ceil = function() {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        }
        ;
        Ni.prototype.floor = function() {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        }
        ;
        Ni.prototype.round = function() {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        }
        ;
        var Qi = function(a) {
            a = void 0 === a ? _.C : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b)
                try {
                    b = a.parent.context || a.parent.AMP_CONTEXT_DATA
                } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl)
                    return b
            } catch (c) {}
            return null
        }
            , Ri = function(a) {
            return (a = a || Qi()) ? Vc(a.master) ? a.master : null : null
        }
            , Ti = function(a, b) {
            if (a.ampInaboxInitialized)
                return !0;
            var c, d = "amp-ini-load" === b.data;
            a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b),
                Si(a, c[1]));
            return !1
        }
            , Ui = function(a, b, c) {
            var d = !0;
            d = void 0 === d ? !1 : d;
            var e = a.ampInaboxIframes = a.ampInaboxIframes || []
                , f = function() {}
                , g = function() {};
            b && (e.push(b),
                    g = function() {
                        a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                        da(e, b);
                        f()
                    }
            );
            if (a.ampInaboxInitialized)
                return g;
            a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
            c && /^\d{15,20}$/.test(c) && Si(a, c);
            var h = function(k) {
                Ti(a, k) && f()
            };
            d || e.google_amp_listener_added || (e.google_amp_listener_added = !0,
                    _.E(a, "message", h),
                    f = function() {
                        _.uc(a, "message", h)
                    }
            );
            return g
        }
            , Si = function(a, b) {
            a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Xh(a.document, b ? dc(kf("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                ampVersion: b
            }) : qf(jf(kf("https://cdn.ampproject.org/amp4ads-host-v0.js"))))
        };
        var Sa, Wi;
        _.Vi = function(a, b) {
            a.google_image_requests || (a.google_image_requests = []);
            var c = a.document.createElement("img");
            c.src = b;
            a.google_image_requests.push(c)
        }
        ;
        Sa = function(a, b) {
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.ab(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Wi(c)
        }
        ;
        Wi = function(a) {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : _.Vi(b, a)
        }
        ;
        var xa = {};
        var Aa;
        var Xi = function() {}
            , Ca = function(a, b) {
            ya(b);
            this.m = a
        };
        _.L(Ca, Xi);
        Ca.prototype.toString = function() {
            return this.m.toString()
        }
        ;
        var Yi = function() {}
            , Zi = function(a, b) {
            ya(b);
            this.j = a
        };
        _.L(Zi, Yi);
        Zi.prototype.toString = function() {
            return this.j.toString()
        }
        ;
        var Ga = function() {}
            , Ea = function(a, b) {
            ya(b);
            this.j = a
        };
        _.L(Ea, Ga);
        Ea.prototype.toString = function() {
            return this.j.toString()
        }
        ;
        var bj, sb, dj, ej, fj, ij;
        _.aj = function(a, b, c) {
            if ("string" === typeof b)
                (b = _.$i(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d]
                        , f = _.$i(c, d);
                    f && (c.style[f] = e)
                }
        }
        ;
        bj = {};
        _.$i = function(a, b) {
            var c = bj[b];
            if (!c) {
                var d = _.gg(b);
                c = d;
                void 0 === a.style[d] && (d = (tg ? "Webkit" : sg ? "Moz" : _.pg ? "ms" : og ? "O" : null) + hg(d),
                void 0 !== a.style[d] && (c = d));
                bj[b] = c
            }
            return c
        }
        ;
        _.cj = function(a, b) {
            var c = _.Ch(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        }
        ;
        sb = function(a, b) {
            return _.cj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        }
        ;
        dj = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        }
        ;
        ej = function(a) {
            if (_.pg && !(8 <= Number(Jg)))
                return a.offsetParent;
            var b = _.Ch(a)
                , c = sb(a, "position")
                , d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host),
                    c = sb(a, "position"),
                    d = d && "static" == c && a != b.documentElement && a != b.body,
                !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                    return a;
            return null
        }
        ;
        fj = function(a) {
            var b = _.Ch(a)
                , c = new _.Cb(0,0);
            var d = b ? _.Ch(b) : document;
            d = !_.pg || 9 <= Number(Jg) || _.Gh(Dh(d).j) ? d.documentElement : d.body;
            if (a == d)
                return c;
            a = dj(a);
            d = Dh(b).j;
            b = Ih(d);
            d = Jh(d);
            b = _.pg && Gg("10") && d.pageYOffset != b.scrollTop ? new _.Cb(b.scrollLeft,b.scrollTop) : new _.Cb(d.pageXOffset || b.scrollLeft,d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        }
        ;
        _.gj = function(a) {
            a = dj(a);
            return new _.Cb(a.left,a.top)
        }
        ;
        _.hj = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        }
        ;
        _.tb = function(a, b) {
            if ("none" != sb(b, "display"))
                return a(b);
            var c = b.style
                , d = c.display
                , e = c.visibility
                , f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = a(b);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        }
        ;
        _.ub = function(a) {
            var b = a.offsetWidth
                , c = a.offsetHeight
                , d = tg && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = dj(a),
                new _.Ah(a.right - a.left,a.bottom - a.top)) : new _.Ah(b,c)
        }
        ;
        ij = function(a) {
            if (!a.getBoundingClientRect)
                return null;
            a = _.tb(dj, a);
            return new _.Ah(a.right - a.left,a.bottom - a.top)
        }
        ;
        var kj = function() {
            var a = jj();
            "google_onload_fired"in a || (a.google_onload_fired = !1,
                _.E(a, "load", function() {
                    a.google_onload_fired = !0
                }))
        }
            , lj = function() {
            var a = void 0 === a ? wh : a;
            try {
                return a.history.length
            } catch (b) {
                return 0
            }
        }
            , mj = function(a) {
            a = Ri(Qi(a)) || a;
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        }
            , nj = !!window.google_async_iframe_id
            , oj = nj && window.parent || window
            , jj = function() {
            if (nj && !Vc(oj)) {
                var a = "." + vh.domain;
                try {
                    for (; 2 < a.split(".").length && !Vc(oj); )
                        vh.domain = a = a.substr(a.indexOf(".") + 1),
                            oj = window.parent
                } catch (b) {}
                Vc(oj) || (oj = window)
            }
            return oj
        }
            , pj = function() {
            var a, b = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description)
                    return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    var c = 3;
                    for (a = 1; a; )
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)),
                                c++
                        } catch (d) {
                            a = null
                        }
                    return c.toString()
                }
                if (Qf()) {
                    a = null;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        c = 0;
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash.6"),
                                c = 6,
                                a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === c)
                                return c.toString()
                        }
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a)
                        return c = a.GetVariable("$version").split(" ")[1],
                            c.replace(/,/g, ".")
                }
            }
            return "0"
        };
        var qj = null
            , rj = function() {
            if (null === qj) {
                qj = "";
                try {
                    var a = "";
                    try {
                        a = _.C.top.location.hash
                    } catch (c) {
                        a = _.C.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        qj = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return qj
        };
        var tj;
        _.kc = function() {
            var a = _.C.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : dd()
        }
        ;
        _.sj = function(a) {
            a = void 0 === a ? _.C : a;
            return (a = a.performance) && a.now ? a.now() : null
        }
        ;
        tj = function(a) {
            var b = _.C.performance;
            return b && b.timing && b.timing[a] || 0
        }
        ;
        var uj = function(a, b, c, d, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = void 0 === d ? 0 : d;
            this.uniqueId = Math.random();
            this.slotId = e
        };
        var vj = _.C.performance
            , wj = !!(vj && vj.mark && vj.measure && vj.clearMarks)
            , xj = yb(function() {
            var a;
            if (a = wj)
                a = rj(),
                    a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        })
            , yj = function(a, b) {
            this.events = [];
            this.l = b || _.C;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
                this.events = b.google_js_reporting_queue,
                c = b.google_measure_js_timing);
            this.j = xj() || (null != c ? c : Math.random() < a)
        }
            , db = function(a) {
            a && vj && xj() && (vj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
                vj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
        }
            , Ja = function(a, b, c, d, e, f) {
            a.j && (b = new uj(b,c,d,void 0 === e ? 0 : e,f),
            !a.j || 2048 < a.events.length || a.events.push(b))
        };
        yj.prototype.start = function(a, b) {
            if (!this.j)
                return null;
            a = new uj(a,b,_.sj() || _.kc());
            b = "goog_" + a.label + "_" + a.uniqueId + "_start";
            vj && xj() && vj.mark(b);
            return a
        }
        ;
        var cb = function(a, b) {
            if (a.j && "number" === typeof b.value) {
                b.duration = (_.sj() || _.kc()) - b.value;
                var c = "goog_" + b.label + "_" + b.uniqueId + "_end";
                vj && xj() && vj.mark(c);
                !a.j || 2048 < a.events.length || a.events.push(b)
            }
        }
            , zj = function(a, b, c) {
            var d = _.sj();
            d && Ja(a, b, 9, d, 0, c)
        };
        var Ta = function(a, b) {
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c; )
                    c = a,
                        a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                return a.replace(/\n */g, "\n")
            } catch (d) {
                return b
            }
        };
        var Aj = hi();
        var Bj = function(a) {
            this.methodName = a
        }
            , Cj = new Bj(1)
            , Dj = new Bj(15)
            , Ej = new Bj(2)
            , Fj = new Bj(3)
            , Gj = new Bj(5)
            , Hj = new Bj(6)
            , Ij = new Bj(7)
            , Jj = new Bj(8)
            , Kj = new Bj(14)
            , Lj = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
        var Mj = function() {
            this.j = function() {}
            ;
            this.m = function() {
                return []
            }
            ;
            this.l = function() {
                return []
            }
        }
            , Nj = function(a, b, c) {
            a.j = Lj(Cj, b, function() {});
            a.m = function(d) {
                return Lj(Ej, b, function() {
                    return []
                })(d, c)
            }
            ;
            a.l = function() {
                return Lj(Fj, b, function() {
                    return []
                })(c)
            }
        };
        Le(Mj);
        var Oj = function(a) {
            return Mj.D().m(a)
        }
            , nc = function() {
            return Mj.D().l()
        };
        var Pj = function() {
            var a = {};
            this.m = function(b, c) {
                return null != a[b] ? a[b] : c
            }
            ;
            this.l = function(b, c) {
                return null != a[b] ? a[b] : c
            }
            ;
            this.G = function(b, c) {
                return null != a[b] ? a[b] : c
            }
            ;
            this.B = function(b, c) {
                return null != a[b] ? a[b] : c
            }
            ;
            this.j = function() {}
        }, Qj;
        Le(Pj);
        _.x = function(a) {
            var b = void 0 === b ? !1 : b;
            return Pj.D().m(a, b)
        }
        ;
        _.Kb = function(a, b) {
            b = void 0 === b ? 0 : b;
            return Pj.D().l(a, b)
        }
        ;
        Qj = function(a) {
            var b = void 0 === b ? "" : b;
            return Pj.D().G(a, b)
        }
        ;
        _.xd = function(a) {
            var b = void 0 === b ? [] : b;
            return Pj.D().B(a, b)
        }
        ;
        var Rj = {}
            , Sj = (Rj.companion_ads = "companionAds",
            Rj.content = "content",
            Rj.publisher_ads = "pubads",
            Rj)
            , Tj = function(a) {
            return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
        }
            , Uj = {
            xe: "rewardedSlotReady",
            we: "rewardedSlotGranted",
            te: "rewardedSlotCanceled",
            ue: "rewardedSlotClosed",
            ve: "rewardedSlotCompleted",
            ye: "slotAdded",
            Be: "slotRequested",
            Ce: "slotResponseReceived",
            Ae: "slotRenderEnded",
            ze: "slotOnload",
            De: "slotVisibilityChanged",
            ne: "impressionViewable"
        };
        var Rd = function() {
            return _.C.googletag || (_.C.googletag = {})
        }
            , Qd = function(a, b) {
            var c = Rd();
            c.hasOwnProperty(a) || (c[a] = b)
        }
            , Vj = function(a, b) {
            a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
        };
        var Wj = new D.Map
            , Xj = new D.Map
            , Yj = function() {}
            , Zj = function(a, b) {
            return a instanceof b || a instanceof Yj && (a = Wj.get(a),
            a instanceof b) ? a : null
        }
            , ak = function(a) {
            return (a = Sj[a]) ? Rd()[a]() : null
        };
        var Hb = function(a) {
            var b = a.split("/");
            return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
        }
            , ck = function() {
            var a = bk().map(function(b) {
                return Hb(b.getSlotId().getAdUnitPath())
            });
            ja(a);
            return a
        };
        var dk = {
            247: "https://securepubads.g.doubleclick.net",
            7: .02,
            13: 1500,
            23: .001,
            38: .001,
            58: 1,
            150: "",
            211: !1,
            253: !1,
            172: null,
            245: {},
            180: null,
            246: [],
            227: {},
            226: [],
            248: 0,
            228: "//www.googletagservices.com/pubconsole/",
            250: null,
            252: null,
            258: null,
            251: null,
            255: void 0,
            256: []
        }, fk, gk, hk, ik, jk;
        dk[6] = ii(window);
        dk[49] = (new Date).getTime();
        dk[36] = hi();
        dk[148] = Aj;
        dk[221] = hi();
        dk[254] = hi();
        dk[204] = _.yd("-1", -1);
        dk[257] = hi();
        var ek = function() {
            for (var a in dk)
                this[a] = dk[a]
        };
        Le(ek);
        _.t = function(a) {
            return ek.D()[a]
        }
        ;
        fk = function(a, b) {
            ek.D()[a] = b
        }
        ;
        gk = Rd();
        hk = ek.D();
        ik = gk._vars_;
        for (jk in ik)
            hk[jk] = ik[jk];
        gk._vars_ = hk;
        var kk = function() {
            yj.apply(this, arguments)
        };
        _.L(kk, yj);
        kk.D = function() {
            throw Error("Must be overridden");
        }
        ;
        var Ka = function() {
            kk.call(this, _.x(85) || _.x(84) ? 1 : 0, _.C);
            this.m = 0;
            var a = _.x(85) || _.x(84);
            _.C.google_measure_js_timing = a || _.C.google_measure_js_timing
        };
        _.L(Ka, kk);
        Le(Ka);
        var lk = yb(function() {
            return !!ji(_.C.location.href)
        });
        var Za = function(a, b) {
            b = void 0 === b ? "https://pagead2.googlesyndication.com" : b;
            var c = void 0 === c ? mc(_.C) : c;
            this.id = a;
            this.Jb = b;
            this.m = Math.random();
            if (null == d || 0 > d || 1 < d)
                var d = _.t(23);
            this.l = this.m < d;
            this.j = {
                pvsid: String(c)
            }
        }
            , nk = function(a) {
            var b;
            a = Hb(a);
            mk.set(a, (null !== (b = mk.get(a)) && void 0 !== b ? b : 0) + 1)
        }
            , ok = function(a) {
            var b;
            a = Hb(a);
            var c = (null !== (b = mk.get(a)) && void 0 !== b ? b : 0) - 1;
            0 >= c ? mk.delete(a) : mk.set(a, c)
        }
            , u = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        }
            , bb = function(a, b, c) {
            pk(a, void 0 === b ? null : b, void 0 === c ? !1 : c) && (_.x(305) ? Sa(a.j, a.id) : (a = qk(a) || "",
                _.Vi(window, a)))
        }
            , qk = function(a) {
            var b = a.Jb + "/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.ab(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        }
            , pk = function(a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? !1 : c;
            if (lk())
                return !0;
            var d = a.l;
            b && 0 <= b && (d = (c ? a.m : Math.random()) < b);
            return d && !!a.id
        }
            , rk = function(a, b) {
            3 >= b.length ? u(a, "nw_id", b.join()) : (b = b.slice(0, 3),
                b.push("__extra__"),
                u(a, "nw_id", b.join()))
        }
            , $a = function(a, b) {
            u(a, "vrg", Qa());
            b ? (rk(a, b),
                u(a, "nslots", b.length.toString())) : (rk(a, [].concat(_.Ib(_.F(mk, "keys").call(mk)))),
                u(a, "nslots", [].concat(_.Ib(_.F(mk, "values").call(mk))).reduce(function(c, d) {
                    return c + d
                }, 0).toString()));
            b = nc();
            b.length && u(a, "eid", b.join());
            u(a, "pub_url", document.URL)
        }
            , eb = function(a, b, c) {
            c = void 0 === c ? {
                Jb: "https://pagead2.googlesyndication.com",
                la: _.t(23)
            } : c;
            var d = c.Jb || "https://pagead2.googlesyndication.com";
            c = c.la;
            if (void 0 === c || 0 > c || 1 < c)
                c = _.t(23);
            Math.random() < c && (a = new Za(a,d),
                b(a),
                bb(a, 1, !0))
        }
            , mk = new D.Map;
        var Ya = _.t(38);
        var sk = function(a) {
            this.push = y(76, function(b) {
                return a.push.apply(a, arguments)
            })
        };
        _.L(sk, Yj);
        _.tk = function() {
            this.W = this.W;
            this.X = this.X
        }
        ;
        _.tk.prototype.W = !1;
        _.tk.prototype.pa = function() {
            this.W || (this.W = !0,
                this.G())
        }
        ;
        _.uk = function(a, b) {
            _.Yd(a, _.Se(gb, b))
        }
        ;
        _.Yd = function(a, b) {
            a.W ? b() : (a.X || (a.X = []),
                a.X.push(b))
        }
        ;
        _.tk.prototype.G = function() {
            if (this.X)
                for (; this.X.length; )
                    this.X.shift()()
        }
        ;
        var vk = function() {
            this.id = "goog_" + fg++
        }
            , wk = function() {
            _.tk.apply(this, arguments);
            this.B = new D.Map
        };
        _.L(wk, _.tk);
        wk.prototype.G = function() {
            _.tk.prototype.G.call(this);
            this.B.clear()
        }
        ;
        var xk = function(a, b, c) {
            var d, e;
            if (a.W)
                return function() {}
                    ;
            var f = "string" === typeof b ? b : b.id
                , g = null !== (e = null === (d = a.B.get(f)) || void 0 === d ? void 0 : d.add(c)) && void 0 !== e ? e : new D.Set([c]);
            a.B.set(f, g);
            return function() {
                var h;
                null === (h = a.B.get("string" === typeof b ? b : b.id)) || void 0 === h ? void 0 : h.delete(c)
            }
        }
            , Cd = function(a, b, c) {
            c = void 0 === c ? function() {
                    return !0
                }
                : c;
            return new D.Promise(function(d) {
                    var e = xk(a, b, function(f) {
                        c(f) && (e(),
                            d(f))
                    })
                }
            )
        };
        wk.prototype.dispatchEvent = function(a, b, c) {
            var d;
            return Yb(this, function f() {
                var g = this, h, k, l, n, m, p, q;
                return Zb(f, function(v) {
                    1 == v.j && (h = g,
                        k = "string" === typeof a ? a : a.id,
                        l = document.createEvent("CustomEvent"),
                        l.initCustomEvent(k, !0, !0, c),
                        n = null !== (d = g.B.get(k)) && void 0 !== d ? d : new D.Set,
                        m = {},
                        p = _.A(n),
                        q = p.next());
                    if (5 != v.j) {
                        if (q.done) {
                            v.j = 0;
                            return
                        }
                        m.ub = q.value;
                        return $b(v, 0, 5)
                    }
                    fb(b, function(B) {
                        return function() {
                            h.B.has(k) && n.has(B.ub) && B.ub(l)
                        }
                    }(m), !0);
                    m = {
                        ub: m.ub
                    };
                    q = p.next();
                    v.j = 2
                })
            })
        }
        ;
        var yk = new vk
            , zk = new vk
            , Ak = new vk
            , Bk = new vk
            , Ck = new vk
            , Dk = new vk
            , Ek = new vk
            , Fk = new vk
            , Dd = new vk
            , Gk = new vk;
        var Hk = function(a, b) {
            b = void 0 === b ? [] : b;
            this.j = a;
            this.m = b
        };
        Hk.prototype.getMessageId = function() {
            return this.j
        }
        ;
        Hk.prototype.getMessageArgs = function() {
            return this.m
        }
        ;
        var Ik = function(a, b, c) {
            this.l = new Date;
            this.G = c;
            this.j = a;
            this.m = b
        };
        _.r = Ik.prototype;
        _.r.getSlot = function() {
            return this.G
        }
        ;
        _.r.getLevel = function() {
            return this.j
        }
        ;
        _.r.getTimestamp = function() {
            return this.l
        }
        ;
        _.r.getMessage = function() {
            return this.m
        }
        ;
        _.r.toString = function() {
            return this.l.toTimeString() + ": " + Jk[this.j] + ": " + this.m
        }
        ;
        var Jk = ["Debug", "Info", "Warning", "Error", "Fatal"];
        var Kk = function(a, b, c) {
            wk.call(this);
            this.m = a;
            this.ab = b;
            this.l = this.m + "_" + this.ab;
            this.o = c;
            this.j = null
        };
        _.L(Kk, wk);
        _.r = Kk.prototype;
        _.r.getAdUnitPath = function() {
            return this.m
        }
        ;
        _.r.getName = function() {
            return this.m
        }
        ;
        _.r.D = function() {
            return this.ab
        }
        ;
        _.r.toString = function() {
            return this.l
        }
        ;
        _.r.getDomId = function() {
            return this.o
        }
        ;
        var Lk = function(a, b) {
            a.j = b
        };
        var Mk = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + (a[0] + ".")
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + (a[1] + ('" in DOM for slot: ' + (a[0] + ".")))
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + (a[0] + ".")
            },
            60: function(a) {
                return "Ignoring the " + (a[0] + ("(" + ((a[1] || "") + ") call since the service is already enabled.")))
            },
            66: function(a) {
                return "Slot " + (a[0] + " cannot be refreshed until PubAdsService is enabled.")
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + (a[0] + " is of incorrect type.")
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + (a[0] + ('" for "' + (a[1] + '".')))
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + (a[0] + ".")
            },
            96: function(a) {
                return "Invalid arguments: " + (a[0] + ("(" + (a[1] + ").")))
            },
            122: function(a) {
                return "Invalid argument: " + (a[0] + ("(" + (a[1] + ("). Valid values: " + (a[2] + ".")))))
            },
            121: function(a) {
                return "Invalid object passed to " + (a[0] + ("(" + (a[1] + ("), for " + (a[2] + (": " + (a[3] + "}.")))))))
            },
            105: function(a) {
                return "SRA requests may have a maximum of " + (a[0] + (" slots. " + (a[1] + (" were requested, but the last " + (a[2] + " were ignored.")))))
            },
            106: function(a) {
                return "Publisher betas " + (a[0] + " were declared after enableServices() was called.")
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + (a[0] + " were added after betas had already been declared.")
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + (a[0] + ".")
            },
            111: function(a) {
                return "Refresh was throttled for slot: " + (a[1] + (". This slot still has " + (a[0] + " seconds remaining until it becomes eligible for refresh.")))
            },
            113: function(a) {
                return "Rewarded slot ineligible as page is not mobile optimized: " + (a[0] + ".")
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + (a[0] + " based on the API call.")
            },
            114: function() {
                return Tj("set")
            },
            115: function() {
                return Tj("update")
            },
            120: function() {
                return "Checking googletag.pubadsReady is discouraged. Please use googletag.cmd.push instead."
            }
        }
            , Nk = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + (a[0] + ".")
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + (a[1] + ('. Div element "' + (a[0] + ('" is already associated with another slot: ' + (a[2] + ".")))))
            },
            92: function(a) {
                return "Exception in " + (a[1] + (' event listener: "' + (a[0] + '".')))
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + (a[0] + ".")
            }
        };
        var Ok = function() {
            this.m = 0;
            this.j = []
        };
        Ok.prototype.add = function(a) {
            var b = this.j[this.m];
            this.j[this.m] = a;
            this.m = (this.m + 1) % 1E3;
            return b
        }
        ;
        Ok.prototype.get = function(a) {
            a = Pk(this, a);
            return this.j[a]
        }
        ;
        Ok.prototype.set = function(a, b) {
            a = Pk(this, a);
            this.j[a] = b
        }
        ;
        Ok.prototype.isEmpty = function() {
            return 0 == this.j.length
        }
        ;
        var Qk = function(a) {
            for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++)
                c.push(a.get(d));
            return c
        }
            , Pk = function(a, b) {
            if (b >= a.j.length)
                throw Error("Out of bounds exception");
            return 1E3 > a.j.length ? b : (a.m + Number(b)) % 1E3
        };
        var Sd = function() {
            this.j = new Ok;
            this.m = this.l = 0
        }
            , Rk = function(a, b) {
            return Qk(a.j).filter(function(c) {
                return c.getSlot() === b
            })
        }
            , Sk = function(a, b) {
            return Qk(a.j).filter(function(c) {
                return c.getLevel() >= b
            })
        };
        Sd.prototype.log = function(a, b, c) {
            var d = this, e, f;
            c = new Ik(a,b,null != (f = null == (e = void 0 === c ? null : c) ? void 0 : e.j) ? f : null);
            e = _.x(504) && this.m < _.Kb(529, Infinity);
            f = _.x(503) && _.F(_.C.navigator.userAgent, "includes").call(_.C.navigator.userAgent, "Lighthouse");
            var g = _.Kb(488) && 100 > this.l
                , h = 2 === a || 3 === a
                , k = b.getMessageArgs()
                , l = b.getMessageId()
                , n = Mk[l] || Nk[l];
            if ((f || e) && h && n && _.C.console) {
                var m, p, q, v;
                (function(B) {
                        return void (2 === a ? null == (p = (m = _.C.console).warn) ? void 0 : p.call(m, B) : null == (v = (q = _.C.console).error) ? void 0 : v.call(q, B))
                    }
                )("[GPT] " + n(k));
                this.m++
            }
            g && h && (b = _.Kb(488),
                eb("gpt_eventlog_messages", function(B) {
                    ++d.l;
                    $a(B);
                    u(B, "level", a);
                    u(B, "messageId", l);
                    u(B, "args", k.join("|"));
                    n || u(B, "noMsg", !0);
                    var I = Error();
                    u(B, "stack", Ta(I.stack, I.message))
                }, {
                    la: b
                }));
            this.j.add(c);
            return c
        }
        ;
        Sd.prototype.info = function(a, b) {
            return this.log(1, a, void 0 === b ? null : b)
        }
        ;
        Sd.prototype.M = function(a, b) {
            return this.log(2, a, b)
        }
        ;
        Sd.prototype.error = function(a, b) {
            return this.log(3, a, b)
        }
        ;
        Le(Sd);
        var Tk = function() {
            wk.call(this)
        };
        _.L(Tk, wk);
        var Uk = function(a) {
            var b = Xj.get(a);
            if (!b) {
                var c = b = a.Ma();
                Wj.set(c, a);
                Xj.set(a, c)
            }
            return b
        };
        var U = function(a) {
            return function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                    c[d] = arguments[d];
                return new Hk(a,[].concat(_.Ib(c)))
            }
        }
            , Vk = function(a) {
            return "[" + a.map(function(b) {
                return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Vk(b) : String(b)
            }).join(", ") + "]"
        }
            , Wk = function(a, b) {
            b = Vk(b);
            b = b.substring(1, b.length - 1);
            return new Hk(96,[a, b])
        }
            , Xk = U(2)
            , Yk = U(3)
            , Zk = U(4)
            , $k = U(5)
            , al = U(6)
            , bl = U(12)
            , cl = U(14)
            , dl = U(16)
            , el = U(19)
            , fl = U(20)
            , gl = U(23)
            , hl = U(26)
            , il = U(28)
            , jl = U(30)
            , kl = U(31)
            , ll = U(34)
            , ml = U(35)
            , nl = U(36)
            , ol = U(38)
            , pl = U(40)
            , ql = U(46)
            , rl = U(48)
            , sl = U(50)
            , tl = U(60)
            , ul = U(63)
            , vl = U(64)
            , wl = U(66)
            , xl = U(68)
            , yl = U(69)
            , zl = U(70)
            , Al = U(71)
            , Bl = U(78)
            , Cl = U(80)
            , Dl = U(82)
            , El = U(84)
            , Fl = U(85)
            , Gl = U(87)
            , Hl = U(88)
            , Il = U(92)
            , Jl = U(93)
            , Kl = U(99)
            , Ll = U(103)
            , Ml = U(104)
            , Nl = U(105)
            , Ol = U(106)
            , Pl = U(107)
            , Ql = U(108)
            , Rl = U(111)
            , Sl = U(113)
            , Tl = U(114)
            , Ul = U(115)
            , Vl = U(116)
            , Wl = U(117)
            , Xl = U(118)
            , Yl = U(119)
            , Td = U(120)
            , Zl = U(121)
            , $l = U(122);
        var am = function() {
            wk.call(this);
            this.m = this.j = 0
        };
        _.L(am, Tk);
        am.prototype.Ma = function() {
            return new sk(this)
        }
        ;
        am.prototype.push = function(a) {
            for (var b = Sd.D(), c = 0; c < arguments.length; ++c)
                try {
                    "function" === typeof arguments[c] && (arguments[c](),
                        this.j++)
                } catch (d) {
                    this.m++,
                    window.console && window.console.error && window.console.error("Exception in queued GPT command", d),
                        b.error(jl(String(d)))
                }
            b.info(kl(String(this.j), String(this.m)));
            return this.j
        }
        ;
        var bm = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(bm, P);
        var cm = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(cm, P);
        var dm = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(dm, P);
        var em = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        }
            , fm = function(a, b) {
            b = void 0 === b ? _.C : b;
            a = a.scrollingElement || em(a);
            return new _.Cb(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
        }
            , Bb = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
        var gm = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Ah(b.innerWidth,b.innerHeight)).round() : _.Hh(b || window).round()
            } catch (d) {
                return new _.Ah(-12245933,-12245933)
            }
        };
        var hm = function(a) {
            for (var b = 0, c = a, d = 0; a && a != a.parent; )
                a = a.parent,
                    d++,
                Vc(a) && (c = a,
                    b = d);
            return {
                L: c,
                level: b
            }
        };
        var im = function(a) {
            return !!a && a.top == a
        }
            , jm = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (im(a))
                return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1
                    , g = 1;
                a.innerHeight ? (f = a.innerWidth,
                    g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth,
                    g = e.clientHeight) : b.body && (f = b.body.clientWidth,
                    g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c)
                    return !1
            }
            return !0
        }
            , km = function(a) {
            var b = a.location.href;
            if (a == a.top)
                return {
                    url: b,
                    Tb: !0
                };
            var c = !1
                , d = a.document;
            d && d.referrer && (b = d.referrer,
            a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1,
                b = a);
            return {
                url: b,
                Tb: c
            }
        }
            , lm = function() {
            var a = jj();
            if (a == a.top)
                return 0;
            for (; a && a != a.top && Vc(a); a = a.parent) {
                if (a.sf_)
                    return 2;
                if (a.$sf)
                    return 3;
                if (a.inGptIF)
                    return 4;
                if (a.inDapIF)
                    return 5
            }
            return 1
        };
        var nm = function(a) {
            Q(this, a, 0, -1, mm, null)
        };
        N(nm, P);
        var om = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(om, P);
        var mm = [1]
            , pm = function(a) {
            var b = new om;
            return kh(b, 1, a, 0)
        }
            , qm = function(a, b) {
            return kh(a, 2, b, 0)
        }
            , rm = function(a, b) {
            qh(a, 1, b, om)
        };
        var tm = function(a, b) {
            var c = window;
            a: {
                try {
                    if (a) {
                        var d = a.getItem("google_experiment_mod");
                        break a
                    }
                } catch (h) {}
                d = null
            }
            var e = d || "";
            d = null;
            try {
                if (d = sh(nm, e),
                    e) {
                    var f = sh(nm, e);
                    rm(f, qm(pm(1), -1));
                    f.o()
                }
            } catch (h) {
                sm(e),
                    d = new nm
            }
            f = T(d, om, 1);
            if (f = ba(f, function(h) {
                return gh(h, 1, 0) === b
            })) {
                var g = hh(f, 2);
                if (null === g || isNaN(g))
                    sm(e);
                else
                    return g
            }
            c = ei(c);
            if (null === c)
                return null;
            f ? qm(f, c) : rm(d, qm(pm(b), c));
            return fi(a, d.o()) ? c : null
        }
            , sm = function(a) {
            .01 > Math.random() && Sa({
                data: a
            }, "ls_tamp")
        };
        var nb = function(a) {
            this.j = a || {
                cookie: ""
            }
        }
            , wm = function() {
            var a = um;
            if (!_.C.navigator.cookieEnabled)
                return !1;
            if (!a.isEmpty())
                return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Ub: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED"))
                return !1;
            vm(a, "TESTCOOKIESENABLED");
            return !0
        };
        nb.prototype.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.Ge;
                d = c.Bd || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var h = c.Ub
            }
            if (/[;=\s]/.test(a))
                throw Error('Invalid cookie name "' + a + '"');
            if (/[;\r\n]/.test(b))
                throw Error('Invalid cookie value "' + b + '"');
            void 0 === h && (h = -1);
            this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
        }
        ;
        nb.prototype.get = function(a, b) {
            for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                f = xf(d[e]);
                if (0 == f.lastIndexOf(c, 0))
                    return f.substr(c.length);
                if (f == a)
                    return ""
            }
            return b
        }
        ;
        var vm = function(a, b) {
            a.get(b);
            a.set(b, "", {
                Ub: 0,
                path: void 0,
                domain: void 0
            })
        };
        nb.prototype.isEmpty = function() {
            return !this.j.cookie
        }
        ;
        var xm = new nb("undefined" == typeof document ? null : document);
        var ym = function() {
            this.j = window;
            this.m = 0
        }
            , zm = function(a, b) {
            return ob("__gads", b, a.j.document)
        }
            , Am = function(a, b, c) {
            var d = {
                Ub: J(b, 2) - a.j.Date.now() / 1E3,
                path: J(b, 3),
                domain: J(b, 4),
                Bd: !1
            };
            pb("__gads", J(b, 1), c, d, a.j.document);
            z(c, 5) && .01 > a.j.Math.random() && (c = zm(a, c),
                Sa({
                    domain: J(b, 4),
                    host: a.j.location.host,
                    success: c === J(b, 1) ? "1" : "0"
                }, "gfp_cw_status"))
        };
        var Bm = {}
            , Cm = (Bm[3] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js",
            Bm)
            , Dm = {}
            , Em = (Dm[3] = "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js",
            Dm);
        var Fm = function(a) {
            this.j = a;
            this.m = eg()
        }
            , Gm = function(a) {
            var b = {};
            _.Ue(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
        var Im, Jm, Km;
        Im = function() {
            return 0 != _.Hm(document)
        }
        ;
        _.Hm = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        }
        ;
        Jm = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        }
        ;
        Km = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        }
        ;
        var Cc = function() {
            _.tk.apply(this, arguments);
            this.j = []
        };
        _.L(Cc, _.tk);
        var Dc = function(a, b) {
            b = _.A(b);
            for (var c = b.next(); !c.done; c = b.next())
                c = c.value,
                    _.uk(a, c),
                    a.j.push(c)
        }
            , V = function(a, b) {
            Dc(a, [b])
        }
            , Ec = function(a) {
            if (a.j.length) {
                a = _.A(a.j);
                for (var b = a.next(); !b.done; b = a.next())
                    b.value.start()
            }
        };
        Cc.prototype.G = function() {
            _.tk.prototype.G.call(this);
            this.j.length = 0
        }
        ;
        var Mm, Lm;
        Mm = function() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Lm
        }
        ;
        _.Nb = function(a) {
            a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Lm) : a.google_reactive_ads_global_state = new Mm;
            return a.google_reactive_ads_global_state
        }
        ;
        _.Tb = function(a) {
            return a.tagSpecificState[1] || null
        }
        ;
        Lm = function() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
        ;
        var Rb, Qb, Sb;
        Rb = 728 * 1.38;
        _.Pb = function(a) {
            return a.innerHeight >= a.innerWidth
        }
        ;
        _.Om = function(a) {
            var b = _.Nm(a).clientWidth;
            a = a.innerWidth;
            return b && a ? b / a : 0
        }
        ;
        Qb = function(a, b) {
            return (a = _.Nm(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
        }
        ;
        Sb = function(a) {
            return (a = _.Om(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
        }
        ;
        _.Nm = function(a) {
            a = a.document;
            var b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        }
        ;
        _.Pm = function(a) {
            return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
        }
        ;
        var Ub = function(a, b, c) {
            for (var d = [], e = 0; 3 > e; e++)
                for (var f = 0; 3 > f; f++) {
                    var g = d;
                    g.push.call(g, {
                        x: f / 2 * a,
                        y: b + e / 2 * (c - b)
                    })
                }
            return d
        };
        var Qm, Jb;
        _.Rm = function(a) {
            var b;
            if (!(b = null == a)) {
                try {
                    a.setItem("__storage_test__", "__storage_test__");
                    var c = a.getItem("__storage_test__");
                    a.removeItem("__storage_test__");
                    var d = "__storage_test__" == c
                } catch (e) {
                    d = !1
                }
                b = !d
            }
            return b ? null : (a = Jb(a)) ? Qm(a) : null
        }
        ;
        Qm = function(a) {
            a = void 0 === a ? [] : a;
            var b = Date.now();
            return _.Ic(a, function(c) {
                return 36E5 > b - c
            })
        }
        ;
        _.Sm = function(a) {
            return !!a && 1 > a.length
        }
        ;
        Jb = function(a) {
            try {
                var b = a.getItem("__lsv__");
                if (!b)
                    return [];
                try {
                    var c = JSON.parse(b)
                } catch (d) {}
                return !Array.isArray(c) || _.We(c, function(d) {
                    return !_.F(Number, "isInteger").call(Number, d)
                }) ? (a.removeItem("__lsv__"),
                    []) : c
            } catch (d) {
                return null
            }
        }
        ;
        var Eb = function(a, b, c) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0,
                    d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            var e = 0;
            try {
                e |= Qb(a, 2500);
                if (_.x(309)) {
                    var f = _.Nm(a).clientHeight;
                    e |= f ? 320 > f ? -2147483648 : 0 : 1073741824
                }
                e |= Sb(a);
                b && !_.Sm(_.Rm(c)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            return d | e
        };
        var Tm = function() {
            this.j = [];
            this.m = -1
        };
        Tm.prototype.set = function(a, b) {
            b = void 0 === b ? !0 : b;
            0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b,
                this.m = -1)
        }
        ;
        Tm.prototype.get = function(a) {
            return !!this.j[a]
        }
        ;
        var Um = function(a) {
            -1 == a.m && (a.m = Ve(a.j, function(b, c, d) {
                return c ? b + Math.pow(2, d) : b
            }));
            return a.m
        };
        var Wm = function(a) {
            Q(this, a, 0, -1, Vm, null)
        };
        N(Wm, P);
        var Vm = [2]
            , Xm = function(a) {
            return J(a, 1)
        }
            , Ym = function(a, b) {
            return G(a, 1, b)
        }
            , Zm = function(a, b) {
            return G(a, 2, b || [])
        };
        var $m = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N($m, P);
        var an = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(an, P);
        var bn = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(bn, P);
        var dn = function(a) {
            Q(this, a, 0, -1, cn, null)
        };
        N(dn, P);
        var cn = [2, 3, 14];
        dn.prototype.oa = function() {
            return R(this, bn, 18)
        }
        ;
        var en = function(a) {
            return R(a, an, 25)
        };
        var fn = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(fn, P);
        var gn = function(a, b) {
            return G(a, 1, b)
        }
            , hn = function(a, b) {
            return G(a, 2, b)
        }
            , jn = function() {
            var a = new fn;
            return G(a, 3, !0)
        };
        var kn = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(kn, P);
        var mn = function(a) {
            Q(this, a, 0, -1, ln, null)
        };
        N(mn, P);
        var ln = [2];
        var on = function(a) {
            Q(this, a, 0, -1, nn, null)
        };
        N(on, P);
        var nn = [3, 4, 5, 6, 8, 9, 21];
        on.prototype.getAdUnitPath = function() {
            return J(this, 1)
        }
        ;
        on.prototype.getDomId = function() {
            return J(this, 2)
        }
        ;
        var pn = function(a, b) {
            G(a, 2, b)
        };
        on.prototype.oa = function() {
            return R(this, bn, 13)
        }
        ;
        var Gb = function(a) {
            return gh(a, 15, 0)
        };
        var qn = function() {};
        qn.D = function() {
            throw Error("Must be overridden");
        }
        ;
        var rn = function() {
            this.j = new D.Map
        };
        _.L(rn, qn);
        Le(rn);
        var $d = function() {
            this.m = {};
            this.j = new dn;
            this.l = new D.Map;
            G(this.j, 26, Hi());
            (_.x(417) && 2 === Ob() || _.t(36)) && G(this.j, 15, !0)
        }
            , sn = function(a) {
            var b = $d.D()
                , c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = rn.D()
                    , e = ++Ka.D().m;
                d.j.set(c, e);
                G(a, 20, e);
                b.m[c] = a
            }
        }
            , tn = function() {
            return $d.D().m
        }
            , un = function(a, b) {
            return a.m[b] || null
        }
            , vn = function(a) {
            var b = $d.D()
                , c = a.getDomId();
            delete b.m[c];
            b.l.delete(a)
        };
        Le($d);
        var wn = function(a) {
            return Array.isArray(a) && 2 == a.length ? Ii(a[0]) && Ii(a[1]) : "string" === typeof a && "fluid" == a
        }
            , xn = function(a) {
            return Array.isArray(a) && 2 == a.length && Ii(a[0]) && Ii(a[1])
        }
            , yn = function(a) {
            return Array.isArray(a) ? hn(gn(new fn, a[0]), a[1]) : jn()
        }
            , An = function(a) {
            var b = [];
            if (zn(a))
                b.push(yn(a));
            else if (Array.isArray(a))
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    zn(d) && b.push(yn(d));
                    a: {
                        var e = ["fluid"];
                        if (Me(d) && Me(e) && d.length == e.length) {
                            for (var f = d.length, g = oa, h = 0; h < f; h++)
                                if (!g(d[h], e[h])) {
                                    d = !1;
                                    break a
                                }
                            d = !0
                        } else
                            d = !1
                    }
                    d && b.push(jn())
                }
            return b
        }
            , Bn = function(a) {
            if (!a || !Array.isArray(a) || 2 !== a.length)
                return null;
            var b = a[0];
            a = a[1];
            if ("number" === typeof b && 0 <= b)
                b = Math.floor(b);
            else if (null !== b)
                return null;
            if ("number" === typeof a && 0 <= a)
                a = Math.floor(a);
            else if (null !== a)
                return null;
            return hn(gn(new fn, b), a)
        }
            , Cn = function(a) {
            var b = null
                , c = null;
            var d = a && (Array.isArray(a.fixed) || "fluid" === a.fixed);
            var e = a && Array.isArray(a.max);
            if (a && !Array.isArray(a) && (d || e)) {
                if (d = An(a.fixed),
                    c = Bn(a.max))
                    a.min ? ((b = Bn(a.min)) && null === J(b, 1) && gn(b, 0),
                    b && null === J(b, 2) && hn(b, 0)) : b = hn(gn(new fn, 0), 0)
            } else
                d = An(a);
            if (a && !Array.isArray(a)) {
                if (a.max && !c)
                    throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
                if (a.min && !b)
                    throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            }
            if (c) {
                if (0 === J(c, 1) || 0 === J(c, 2))
                    throw Error("Invalid GPT size, maximums cannot be zero: " + JSON.stringify(a));
                if (b) {
                    e = J(b, 1);
                    var f = J(c, 1);
                    if (null != e && null != f && e > f)
                        throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    e = J(b, 2);
                    f = J(c, 2);
                    if (null != e && null != f && e > f)
                        throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            }
            d.length || c || Bi("Invalid GPT fixed size specification: " + JSON.stringify(a));
            c && b ? (a = new kn,
                c = oh(a, 1, c),
                b = oh(c, 2, b)) : b = null;
            return {
                Zc: d,
                Ia: b
            }
        }
            , zn = function(a) {
            return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "string" === typeof a && "fluid" == a
        };
        var Dn = function(a, b) {
            a = _.F(a, "find").call(a, function(c) {
                c = R(c, fn, 1);
                return J(c, 1) <= J(b, 1) && J(c, 2) <= J(b, 2)
            });
            return null == a ? null : T(a, fn, 2)
        }
            , En = function(a) {
            if (!Array.isArray(a) || 2 !== a.length)
                throw Error("Each mapping entry must be an array of size 2");
            var b = a[0];
            if (!xn(b))
                throw Error("Size must be an array of two non-negative integers");
            b = hn(gn(new fn, b[0]), b[1]);
            if (Array.isArray(a[1]) && 0 === a[1].length)
                a = [];
            else if (a = An(a[1]),
            0 === a.length)
                throw Error("At least one slot size must be present");
            var c = new mn;
            b = oh(c, 1, b);
            return ph(b, 2, a)
        };
        var Fn = function(a, b, c) {
            return "number" === typeof b && "number" === typeof c && 0 < T(a, mn, 6).length ? Dn(T(a, mn, 6), hn(gn(new fn, b), c)) : T(a, fn, 5)
        }
            , Ab = function(a) {
            var b = window
                , c = null;
            b.top == b && (b = gm(!1, b),
                c = Fn(a, b.width, b.height));
            null == c && (c = Fn(a));
            return c.map(function(d) {
                return z(d, 3) ? "fluid" : [J(d, 1), J(d, 2)]
            })
        }
            , Gn = function(a) {
            if (0 == Ab(a).length && zd(a, 16))
                return "1x1";
            var b = []
                , c = !1;
            a = _.A(Ab(a));
            for (var d = a.next(); !d.done; d = a.next())
                d = d.value,
                    Array.isArray(d) ? b.push(d.join("x")) : "fluid" == d ? c = !0 : b.push(d);
            c && b.unshift("320x50");
            return b.join("|")
        }
            , Hn = function(a, b) {
            b = void 0 === b ? null : b;
            var c = 0
                , d = [];
            a && (d.push(a.getAdUnitPath()),
                d.push(Gn(a)),
                d.push(a.getDomId()));
            if (b) {
                a = [];
                for (var e = 0; b && 25 > e; b = b.parentNode,
                    ++e)
                    9 === b.nodeType ? a.push("") : a.push(b.id);
                (b = a.join()) && d.push(b)
            }
            0 < d.length && (c = ci(d.join(":")));
            return c.toString()
        }
            , In = function(a) {
            return 0 !== a && 1 !== a
        };
        var Jn = function(a) {
            var b;
            return (null == (b = (K = T(a, Wm, 14),
                _.F(K, "find")).call(K, function(c) {
                return "page_url" === Xm(c)
            })) ? void 0 : J(b, 2)[0]) || null
        }, Kn = function(a) {
            var b;
            return (null == (b = (K = T(a, Wm, 3),
                _.F(K, "find")).call(K, function(c) {
                return "page_url" === Xm(c)
            })) ? void 0 : J(b, 2)[0]) || null
        }, Ln = function(a, b) {
            return Jn(b.N) ? !0 : a.some(function(c) {
                return null != Kn(b.P[c.getDomId()])
            })
        }, Nd = function(a) {
            var b = a.document;
            return im(a) ? b.URL : b.referrer
        }, wb = function(a) {
            try {
                var b = window.top
                    , c = new _.Cb(0,0)
                    , d = _.Kh(_.Ch(a));
                if (ng(d, "parent")) {
                    do {
                        var e = d == b ? fj(a) : _.gj(a);
                        c.x += e.x;
                        c.y += e.y
                    } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent))
                }
                var f = c
            } catch (g) {
                f = new _.Cb(-12245933,-12245933)
            }
            return f
        }, Mn = yb(function() {
            return "XMLHttpRequest"in window && "withCredentials"in new XMLHttpRequest
        }), Nn = yb(function() {
            return Kg
        }), On = function(a) {
            return a ? (a = ij(a)) && a.floor() : null
        }, Pn = function(a) {
            return !!z(a, 6) || _.x(364)
        }, Qn = function(a, b) {
            for (var c = {}, d = _.A(_.F(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = uh(b[e])
                    , g = rn.D()
                    , h = g.j.get(e);
                null == h ? h = ++Ka.D().m : g.j.delete(e);
                G(f, 20, h);
                c[e] = f
            }
            a = uh(a);
            b = new Date(Date.now());
            b = b.getUTCFullYear() + dg(b.getUTCMonth() + 1) + dg(b.getUTCDate());
            return {
                N: a,
                P: c,
                Gb: b
            }
        }, Rn = yb(function() {
            var a = window.crypto || window.msCrypto;
            if ("function" === typeof (null == a ? void 0 : a.getRandomValues)) {
                var b = new Uint8Array(16);
                a.getRandomValues(b)
            } else
                for (b = Array(16),
                         a = 0; 16 > a; ++a)
                    b[a] = Math.floor(255 * Math.random());
            a = "";
            b = _.A(b);
            for (var c = b.next(); !c.done; c = b.next())
                c = c.value,
                15 >= c && (a += "0"),
                    a += c.toString(16);
            return a
        }), Sn = function(a, b) {
            return _.x(500) && (a = zm(a, b)) ? (a = a.split(":"),
                3 !== a.length ? Rn() : (a = a[0].split("=")[1]) ? a.slice(0, 8) : Rn()) : Rn()
        }, vb = function(a, b) {
            return _.x(432) ? xb(a, b) : Tn(a, b) || xb(a, b)
        }, Un = function(a, b, c) {
            try {
                var d = fm(top.document, top).y
                    , e = d + b.height * (c + 1);
                return a.y >= d && a.y <= e
            } catch (f) {
                return !0
            }
        }, Vn = function(a, b, c, d) {
            var e = xb(a, c)
                , f = "none" === (null == e ? void 0 : e.style.display);
            f && (e.style.display = "block");
            a = Db(c, a, b, d);
            f && (e.style.display = "none");
            return a
        }, Wn = function(a) {
            return !!a && (zd(a, 1) || !!z(a, 6))
        }, Xn = function(a, b, c) {
            return Wn(b) || 4 == Gb(a) || 5 === Gb(a) || c
        }, Yn = function(a) {
            return "google_ads_iframe_" + a.toString()
        }, Zn = function(a) {
            return Yn(a) + "__container__"
        }, Tn = function(a, b) {
            return (b = xb(a, b)) && b.querySelector('[id="' + Zn(a) + '"]') || null
        }, $n, ao, bo = function(a, b) {
            return null != (ao = null == ($n = Tn(a, b)) ? void 0 : $n.querySelector('iframe[id="' + Yn(a) + '"]')) ? ao : null
        }, bd = function(a, b) {
            var c = new Tm;
            a.forEach(function(d, e) {
                c.set(a.length - e - 1, b(d))
            });
            return Um(c)
        }, cd = function(a, b, c, d) {
            var e = 0;
            e = void 0 === e ? "" : e;
            c = void 0 === c ? function(l) {
                    return !!l
                }
                : c;
            d = void 0 === d ? "," : d;
            var f = []
                , g = !1;
            a = _.A(a);
            for (var h = a.next(); !h.done; h = a.next()) {
                h = b(h.value);
                var k = c(h);
                g = g || k;
                f.push(String(k ? h : e))
            }
            return g ? f.join(d) : null
        }, co = function(a) {
            var b = window, c, d, e;
            fb(831, function() {
                return void (null == (c = b.performance) ? void 0 : null == (e = (d = c).mark) ? void 0 : e.call(d, a))
            })
        }, xb = function(a, b) {
            b = void 0 === b ? document : b;
            return $d.D().l.get(a) || b.getElementById(a.getDomId())
        };
        var eo = function() {}, jo, no, oo, po, io, ho, go, qo;
        eo.D = function() {
            throw Error("Must be overridden");
        }
        ;
        var fo = function() {
            this.l = this.m = null;
            this.j = new D.Map
        };
        _.L(fo, eo);
        jo = function(a, b) {
            a.j.get(b) || (a.j.set(b, {
                Sa: !0,
                Yb: "",
                jb: "",
                Ic: 0,
                Ac: 0,
                Wb: [],
                Xb: [],
                isBackfill: !1,
                Za: !1,
                Gc: 0,
                Cb: !1
            }),
                _.Yd(b, function() {
                    a.j.delete(b);
                    go(a, b)
                }),
                xk(b, Ak, function(c) {
                    c = c.detail;
                    var d = a.j.get(b);
                    d.Yb = J(c, 33) || "";
                    d.Za = !0;
                    d.isBackfill = !!z(c, 9);
                    ho(a, b, function() {
                        d.Yb = ""
                    });
                    io(a, b, function() {
                        d.isBackfill = !1;
                        d.Za = !1
                    })
                }))
        }
        ;
        _.ko = function(a, b) {
            var c, d;
            return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Sa) && void 0 !== d ? d : !1
        }
        ;
        _.lo = function(a, b) {
            a.j.get(b) && (a.j.get(b).Sa = !1)
        }
        ;
        _.mo = function(a, b) {
            a.j.get(b) && (a.j.get(b).Sa = !0)
        }
        ;
        no = function(a, b, c) {
            if (a = a.j.get(b))
                a.Gc = c
        }
        ;
        oo = function(a, b) {
            var c, d;
            return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.jb) && void 0 !== d ? d : ""
        }
        ;
        po = function(a, b) {
            return (a = a.j.get(b)) && a.Ic - 1 || 0
        }
        ;
        io = function(a, b, c) {
            (a = a.j.get(b)) && a.Wb.push(c)
        }
        ;
        ho = function(a, b, c) {
            (a = a.j.get(b)) && a.Xb.push(c)
        }
        ;
        go = function(a, b) {
            if (a = a.j.get(b))
                for (b = a.Xb.slice(),
                         a.Xb.length = 0,
                         a = _.A(b),
                         b = a.next(); !b.done; b = a.next())
                    b = b.value,
                        b()
        }
        ;
        qo = function(a, b) {
            if (a = a.j.get(b))
                for (b = a.Wb.slice(),
                         a.Wb.length = 0,
                         a = _.A(b),
                         b = a.next(); !b.done; b = a.next())
                    b = b.value,
                        b()
        }
        ;
        fo.prototype.isBackfill = function(a) {
            var b, c;
            return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.isBackfill) && void 0 !== c ? c : !1
        }
        ;
        fo.prototype.Za = function(a) {
            var b, c;
            return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.Za) && void 0 !== c ? c : !1
        }
        ;
        var ro = function(a, b) {
            var c;
            return !(null === (c = a.j.get(b)) || void 0 === c || !c.Cb)
        }
            , so = function(a, b) {
            var c = a.j.get(b);
            c && !c.Cb && (c.Cb = !0,
                io(a, b, function() {
                    c.Cb = !1
                }))
        };
        Le(fo);
        var to = function() {
            var a = {};
            return a.adsense_channel_ids = "channel",
                a.adsense_ad_types = "ad_type",
                a.adsense_ad_format = "format",
                a.adsense_background_color = "color_bg",
                a.adsense_border_color = "color_border",
                a.adsense_link_color = "color_link",
                a.adsense_text_color = "color_text",
                a.adsense_url_color = "color_url",
                a.page_url = "url",
                a.adsense_allow_expandable_ads = "ea",
                a.adsense_encoding = "oe",
                a.adsense_family_safe = "adsafe",
                a.adsense_flash_version = "flash",
                a.adsense_font_face = "f",
                a.adsense_hints = "hints",
                a.adsense_keyword_type = "kw_type",
                a.adsense_keywords = "kw",
                a.adsense_test_mode = "adtest",
                a.alternate_ad_iframe_color = "alt_color",
                a.alternate_ad_url = "alternate_ad_url",
                a.demographic_age = "cust_age",
                a.demographic_gender = "cust_gender",
                a.document_language = "hl",
                a
        };
        var uo = function(a, b, c, d, e) {
            if ("string" !== typeof c || wf(c))
                e.M(Wk("Slot.setTargeting", [c, d]), a);
            else {
                var f = [];
                Array.isArray(d) ? f = d : Me(d) ? f = _.x(437) ? Array.prototype.slice.call(d) : _.F(Array, "from").call(Array, d) : d && (f = [d]);
                f = f.map(String);
                (d = (K = T(b, Wm, 9),
                    _.F(K, "find")).call(K, function(g) {
                    return Xm(g) === c
                })) ? Zm(d, f) : (d = Zm(Ym(new Wm, c), f),
                    qh(b, 9, d, Wm));
                e.info(Hl(c, f.join(), b.getAdUnitPath()), a)
            }
        }
            , vo = function(a, b, c, d) {
            if (null == c || "object" !== typeof c)
                d.error(Wk("Slot.updateTargetingFromMap", [c]), a);
            else
                for (var e = _.A(_.F(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next())
                    f = f.value,
                        uo(a, b, f, c[f], d)
        };
        var wo = function(a) {
            this.getId = y(593, function() {
                return a.l
            });
            this.getAdUnitPath = y(594, function() {
                return a.getAdUnitPath()
            });
            this.getName = y(595, function() {
                return a.getName()
            });
            this.toString = y(596, function() {
                return a.toString()
            });
            this.getDomId = y(597, function() {
                return a.getDomId()
            })
        };
        var xo = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        };
        var yo = ""
            , zo = null
            , Ao = function() {
            for (var a = Qj(2) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "37"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
                if (b[d] > c[d])
                    return a;
                if (b[d] < c[d])
                    break
            }
            return "1-0-37"
        }
            , Bo = function() {
            yo || (yo = Ao());
            return yo
        }
            , Co = function() {
            if (null == zo) {
                for (var a = _.xd(1), b = [], c = 0; c < a.length; c += 2)
                    Uh(a[c], a[c + 1], b);
                zo = b.join("&")
            }
            return zo
        }
            , Do = function(a) {
            var b = Sd.D()
                , c = new bn;
            if (!a || !_.ha(a))
                return null;
            var d = !1;
            _.ab(a, function(e, f) {
                var g = !1;
                switch (f) {
                    case "allowOverlayExpansion":
                        "boolean" === typeof e ? G(c, 1, a.allowOverlayExpansion) : d = g = !0;
                        break;
                    case "allowPushExpansion":
                        "boolean" === typeof e ? G(c, 2, a.allowPushExpansion) : d = g = !0;
                        break;
                    case "sandbox":
                        !0 === e ? G(c, 3, a.sandbox) : d = g = !0;
                        break;
                    case "useUniqueDomain":
                        "boolean" === typeof e ? G(c, 4, a.useUniqueDomain) : null !== e && (d = g = !0);
                        break;
                    default:
                        g = !0
                }
                g && b.error(Zl("setSafeFrameConfig", Ki(a), f, Ki(e)))
            });
            return d ? null : c
        }
            , Eo = function(a) {
            var b = new bn;
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value) {
                    if (zd(c, 1)) {
                        var d = z(c, 1);
                        G(b, 1, d)
                    }
                    zd(c, 2) && (d = z(c, 2),
                        G(b, 2, d));
                    zd(c, 3) && (d = z(c, 3),
                        G(b, 3, d));
                    zd(c, 4) && (c = z(c, 4),
                        G(b, 4, c))
                }
            return b
        };
        var Fo = function(a, b) {
            this.m = a;
            this.j = b
        };
        Fo.prototype.getWidth = function() {
            return this.m
        }
        ;
        Fo.prototype.getHeight = function() {
            return this.j
        }
        ;
        var Go = function(a) {
            var b = this
                , c = Sd.D()
                , d = a.getSlotId()
                , e = un($d.D(), d.getDomId())
                , f = ""
                , g = !1;
            xk(d, Bk, function(m) {
                var p = m.detail;
                m = p.Mb;
                p = p.isBackfill;
                m && (f = m,
                    g = p)
            });
            this.set = y(40, function(m, p) {
                if ("string" !== typeof m || "string" !== typeof p || void 0 === to()[m])
                    return c.M(Wk("Slot.set", [m, p]), d),
                        b;
                var q = (K = T(e, Wm, 3),
                    _.F(K, "find")).call(K, function(v) {
                    return Xm(v) === m
                });
                q ? Zm(q, [p]) : (q = Ym(new Wm, m),
                    mh(q, 2, p),
                    qh(e, 3, q, Wm));
                return b
            });
            this.get = y(41, function(m) {
                if ("string" !== typeof m)
                    return c.M(Wk("Slot.get", [m]), d),
                        null;
                var p = (K = T(e, Wm, 3),
                    _.F(K, "find")).call(K, function(q) {
                    return Xm(q) === m
                });
                return (p = p && J(p, 2)) ? p[0] : null
            });
            this.getAttributeKeys = y(42, function() {
                return T(e, Wm, 3).map(function(m) {
                    return Xm(m)
                })
            });
            this.addService = y(43, function(m) {
                m = Wj.get(m);
                if (!m)
                    return c.M(Wk("Slot.addService", [m]), d),
                        b;
                if ((K = J(e, 4),
                    _.F(K, "includes")).call(K, m.getName()))
                    return c.info(bl(m.getName(), d.toString()), d),
                        b;
                m.xa(a, e);
                return b
            });
            this.defineSizeMapping = y(44, function(m) {
                try {
                    if (!Array.isArray(m))
                        throw Error("Size mapping must be an array");
                    var p = m.map(En);
                    ph(e, 6, p)
                } catch (q) {
                    Bi("Incorrect usage of googletag.Slot defineSizeMapping: " + q.message)
                }
                return b
            });
            this.setClickUrl = y(45, function(m) {
                if ("string" !== typeof m)
                    return c.M(Wk("Slot.setClickUrl", [m]), d),
                        b;
                G(e, 7, m);
                return b
            });
            this.setCategoryExclusion = y(46, function(m) {
                "string" !== typeof m || wf(m) ? c.M(Wk("Slot.setCategoryExclusion", [m]), d) : ((K = J(e, 8),
                    _.F(K, "includes")).call(K, m) || mh(e, 8, m),
                    c.info(cl(m), d));
                return b
            });
            this.clearCategoryExclusions = y(47, function() {
                G(e, 8, []);
                c.info(dl(), d);
                return b
            });
            this.getCategoryExclusions = y(48, function() {
                return J(e, 8).slice()
            });
            this.setTargeting = y(49, function(m, p) {
                uo(d, e, m, p, c);
                return b
            });
            this.updateTargetingFromMap = y(649, function(m) {
                vo(d, e, m, c);
                return b
            });
            this.clearTargeting = y(50, function(m) {
                if (void 0 === m)
                    return ph(e, 9, []),
                        c.info(el(d.getAdUnitPath()), d),
                        b;
                var p = T(e, Wm, 9)
                    , q = _.F(p, "findIndex").call(p, function(v) {
                    return Xm(v) === m
                });
                if (0 > q)
                    return c.M(El(m, d.getAdUnitPath()), d),
                        b;
                p.splice(q, 1);
                ph(e, 9, p);
                c.info(Ll(m, d.getAdUnitPath()), d);
                return b
            });
            this.getTargeting = y(51, function(m) {
                if ("string" !== typeof m)
                    return c.M(Wk("Slot.getTargeting", [m]), d),
                        [];
                var p = (K = T(e, Wm, 9),
                    _.F(K, "find")).call(K, function(q) {
                    return Xm(q) === m
                });
                return p ? J(p, 2).slice() : []
            });
            this.getTargetingKeys = y(52, function() {
                return T(e, Wm, 9).map(function(m) {
                    return Xm(m)
                })
            });
            this.setCollapseEmptyDiv = y(53, function(m, p) {
                p = void 0 === p ? !1 : p;
                if ("boolean" !== typeof m || "boolean" !== typeof p)
                    return c.M(Wk("Slot.setCollapseEmptyDiv", [m, p]), d),
                        b;
                G(e, 10, m);
                G(e, 11, m && p);
                eb("gpt_ced", function(q) {
                    var v = z(e, 11) ? "t" : "f";
                    u(q, "sc", v);
                    u(q, "level", "slot");
                    $a(q)
                });
                p && !m && c.M(fl(d.toString()), d);
                return b
            });
            this.getAdUnitPath = y(54, function() {
                return d.getAdUnitPath()
            });
            this.getSlotElementId = y(598, function() {
                return d.getDomId()
            });
            this.setForceSafeFrame = y(55, function(m) {
                if ("boolean" !== typeof m)
                    return c.M(Wk("Slot.setForceSafeFrame", [String(m)]), d),
                        b;
                G(e, 12, m);
                return b
            });
            this.setSafeFrameConfig = y(56, function(m) {
                var p = Do(m);
                if (!p)
                    return c.error(Wk("Slot.setSafeFrameConfig", [m]), d),
                        b;
                oh(e, 13, p);
                return b
            });
            var h = null;
            xk(d, Ak, function(m) {
                m = m.detail;
                if (z(m, 8))
                    h = null;
                else {
                    h = new xo;
                    var p = !!z(m, 9);
                    h.isBackfill = p;
                    var q = J(m, 15)
                        , v = J(m, 16);
                    q.length && v.length && (h.sourceAgnosticCreativeId = q[0],
                        h.sourceAgnosticLineItemId = v[0],
                    p || (h.creativeId = q[0],
                        h.lineItemId = v[0],
                    (p = J(m, 22)) && p.length && (h.creativeTemplateId = p[0])));
                    J(m, 17).length && (p = J(m, 17)[0],
                        h.advertiserId = p);
                    J(m, 18).length && (p = J(m, 18)[0],
                        h.campaignId = p);
                    J(m, 19).length && (p = J(m, 19),
                        h.yieldGroupIds = p);
                    J(m, 20).length && (p = J(m, 20),
                        h.companyIds = p);
                    m = J(m, 45);
                    m = m.length && "string" !== typeof m[0] ? _.Gc(m, fh) : m;
                    m.length && (h.encryptedTroubleshootingInfo = m[0])
                }
            });
            this.getResponseInformation = y(355, function() {
                return h
            });
            this.getName = y(170, function() {
                window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
                var m = new Za("slot_get_name");
                $a(m);
                bb(m);
                return d.getAdUnitPath()
            });
            var k = new wo(d);
            this.getSlotId = y(579, function() {
                return k
            });
            this.getServices = y(580, function() {
                return J(e, 4).map(function(m) {
                    return ak(m)
                })
            });
            this.getSizes = y(581, function(m, p) {
                return (m = Fn(e, m, p)) ? m.map(function(q) {
                    return z(q, 3) ? "fluid" : new Fo(J(q, 1),J(q, 2))
                }) : null
            });
            this.getClickUrl = y(582, function() {
                return zd(e, 7) ? J(e, 7) : ""
            });
            this.getTargetingMap = y(583, function() {
                for (var m = {}, p = _.A(T(e, Wm, 9)), q = p.next(); !q.done; q = p.next())
                    q = q.value,
                        m[Xm(q)] = J(q, 2);
                return m
            });
            this.getOutOfPage = y(584, function(m) {
                return "number" === typeof m ? Gb(e) === m : 0 != Gb(e)
            });
            this.getCollapseEmptyDiv = y(585, function() {
                return zd(e, 10) ? z(e, 10) : null
            });
            this.getDivStartsCollapsed = y(586, function() {
                return zd(e, 11) ? z(e, 11) : null
            });
            var l = function() {
                return ""
            };
            xk(d, Ck, function(m) {
                l = m.detail.tc
            });
            this.getContentUrl = y(587, function() {
                return l()
            });
            this.getFirstLook = y(588, function() {
                Bi("The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.");
                return 0
            });
            var n = "";
            xk(d, Ak, function(m) {
                var p;
                n = null != (p = J(m.detail, 34)) ? p : ""
            });
            this.getEscapedQemQueryId = y(591, function() {
                return n
            });
            this.getHtml = y(592, function() {
                return g ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."),
                    "") : f
            })
        };
        _.L(Go, Yj);
        var Ho = function() {
            this.m = [];
            this.l = [];
            this.j = {}
        }
            , Io = function(a, b) {
            if (!_.F(a.m, "includes").call(a.m, b))
                switch (b) {
                    case 1:
                    case 2:
                    case 3:
                        var c;
                        if (c = _.x(116) ? Em[b] : Cm[b]) {
                            var d = b + "_hostpage_library";
                            if (c = Xh(document, qf(c)))
                                c.id = d
                        }
                        a.m.push(b);
                        b = new Fm(b);
                        a.l.push(b);
                        a = Rd();
                        a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                        a.hostpageLibraryTokens[b.j] = b.m
                }
        }
            , Jo = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.F(c, "values").call(c)) ? d : [];
            return [].concat(_.Ib(a))
        };
        Le(Ho);
        var Ko = function() {
            var a = this;
            this.G = function() {
                return !1
            }
            ;
            this.B = "";
            this.j = this.m = null;
            this.l = !1;
            var b, c = function() {
                try {
                    return !!document.createElement("link").relList.supports("webbundle")
                } catch (f) {
                    return !1
                }
            }, d = $d.D(), e = {};
            this[3] = (e[19] = function() {
                return !!z(d.j, 10)
            }
                ,
                e[14] = Mn,
                e[13] = function(f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    return g.some(function(k) {
                        return 0 == a.B.lastIndexOf(k, 0)
                    })
                }
                ,
                e[12] = function() {
                    return !!z(d.j, 6)
                }
                ,
                e[11] = Im,
                e[15] = function(f) {
                    return a.G(f)
                }
                ,
                e[7] = function() {
                    return !(!_.C.crypto || !_.C.crypto.subtle)
                }
                ,
                e[48] = function() {
                    return !!a.m
                }
                ,
                e[51] = function() {
                    return a.l
                }
                ,
                e[53] = function() {
                    return c
                }
                ,
                e);
            e = {};
            this[4] = (e[8] = function(f) {
                return null != (b = tm(a.m, f)) ? b : void 0
            }
                ,
                e[10] = function(f) {
                    return a.j ? ci(f + a.j) % 1E3 : void 0
                }
                ,
                e);
            this[5] = {}
        }
            , Lo = function(a, b) {
            b && !a.j && (a.j = _.F(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
        Le(Ko);
        var Mo = function(a) {
            wk.call(this);
            this.j = a
        };
        _.L(Mo, Tk);
        Mo.prototype.Ma = function() {
            return new Go(this)
        }
        ;
        Mo.prototype.getSlotId = function() {
            return this.j
        }
        ;
        var No = function(a) {
            return (K = ck(),
                _.F(K, "includes")).call(K, a)
        }
            , Oo = _.Ze(function() {
            Bi("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        })
            , Xd = function() {
            this.j = new D.Map;
            this.G = new D.Map;
            this.m = new D.Map;
            this.l = new D.Map;
            this.B = _.Ze(function() {
                return void co("gpt-first-ad-render")
            });
            Ko.D().G = No
        };
        Xd.prototype.add = function(a, b, c) {
            var d = this
                , e = void 0 === c ? {} : c;
            c = void 0 === e.kb ? void 0 : e.kb;
            var f = void 0 === e.Dc ? !1 : e.Dc
                , g = void 0 === e.instance ? void 0 : e.instance;
            if (Vb(void 0 === e.format ? 0 : e.format))
                return {};
            f && Oo();
            e = void 0 === g ? this.G.get(a) || Number(f) : g;
            var h = c || "gpt_unit_" + a + "_" + e;
            b = Po(a, e, b, h);
            if (!b)
                return {};
            c = b.slot;
            f = b.ya;
            var k = b.slotId;
            this.G.set(a, e + 1);
            this.j.set(k, c);
            this.m.set(h, k);
            _.Yd(k, function() {
                d.j.delete(k);
                d.m.delete(h)
            });
            nk(a);
            return {
                slot: c,
                La: f
            }
        }
        ;
        var bk = function() {
            var a = Xd.D();
            return _.x(437) ? [].concat(_.Ib(_.F(a.j, "values").call(a.j))) : _.F(Array, "from").call(Array, _.F(a.j, "values").call(a.j))
        }
            , Qo = function(a) {
            var b;
            return Jo(Ho.D(), a).map(function(c) {
                return null == (b = bo(c, document)) ? void 0 : b.contentWindow
            }).filter(function(c) {
                return !!c
            })
        }
            , Ro = function(a, b) {
            if (_.x(362708086))
                for (a = _.A(b),
                         b = a.next(); !b.done; b = a.next())
                    gb(b.value.getSlotId());
            else
                for (a = _.A(b),
                         b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    var c = b.getSlotId();
                    vn(c);
                    gb(b);
                    gb(c);
                    ok(c.getAdUnitPath())
                }
        }
            , So = function(a, b) {
            a = _.A(_.F(a.j, "values").call(a.j));
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value,
                c.getSlotId().getDomId() === b)
                    return c;
            return null
        }
            , To = function(a, b) {
            return a.j.get(b) || null
        }
            , Uo = function(a) {
            var b = Xd.D();
            a = Zj(a, Mo);
            return !!a && b.j.has(a.getSlotId())
        }
            , Vo = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            return "string" === typeof a && 0 < a.length && b && (void 0 === c || "string" === typeof c) ? Xd.D().add(a, b, {
                kb: c,
                Dc: d
            }) : {}
        }
            , Wo = function(a, b, c) {
            var d = Vo(a, b, c).slot;
            return d ? Uk(d) : (Sd.D().M(Wk("googletag.defineSlot", [a, b, c])),
                null)
        }
            , Po = function(a, b, c, d) {
            var e = Xd.D().m.get(d);
            if (e)
                return Sd.D().error(il(d, a, e.getAdUnitPath())),
                    null;
            var f = new on;
            pn(G(f, 1, a), d);
            c = Cn(c);
            e = c.Ia;
            ph(f, 5, c.Zc);
            null !== e && oh(f, 16, e);
            sn(f);
            var g = new Kk(a,b,d)
                , h = new Mo(g);
            Lk(g, Uk(h));
            _.x(362708086) ? (_.uk(g, h),
                _.Yd(g, function() {
                    vn(g);
                    ok(g.getAdUnitPath());
                    Sd.D().info(Kl(g.toString()), h.getSlotId())
                })) : _.Yd(g, function() {
                Sd.D().info(Kl(g.toString()), h.getSlotId())
            });
            Sd.D().info(Xk(g.toString()), h.getSlotId());
            xk(g, Ck, function(k) {
                k = k.detail.bb;
                Sd.D().info(Yk(g.getAdUnitPath()), h.getSlotId());
                Ja(Ka.D(), "7", 9, po(fo.D(), g), 0, k)
            });
            xk(g, Ak, function(k) {
                var l = k.detail;
                Sd.D().info(Zk(g.getAdUnitPath()), h.getSlotId());
                var n;
                k = Ka.D();
                var m = J(f, 20);
                l = null != (n = J(l, 34)) ? n : "";
                k.j && (_.C.google_timing_params = _.C.google_timing_params || {},
                    _.C.google_timing_params["qqid." + m] = l)
            });
            xk(g, Bk, function() {
                return void Sd.D().info($k(g.getAdUnitPath()), h.getSlotId())
            });
            xk(g, Dk, function() {
                Sd.D().info(al(g.getAdUnitPath()), h.getSlotId());
                Xd.D().B()
            });
            return {
                slot: h,
                ya: f,
                slotId: g
            }
        }
            , Yo = function(a, b, c) {
            Xo(a, b);
            a.l.set(b, c)
        }
            , Xo = function(a, b) {
            var c;
            null == (c = a.l.get(b)) || c.pa();
            a.l.delete(b)
        };
        Le(Xd);
        Wo = w(74, Wo);
        var $o = function(a) {
            var b = this;
            this.addEventListener = y(86, function(c, d) {
                a.addEventListener(c, d);
                return b
            });
            this.getSlots = y(573, function() {
                return a.m.map(function(c) {
                    return Uk(c)
                })
            });
            this.getSlotIdMap = y(574, function() {
                for (var c = {}, d = _.A(a.m), e = d.next(); !e.done; e = d.next())
                    e = e.value,
                        c[e.getSlotId().toString()] = Uk(e);
                return c
            });
            this.enable = y(87, function() {
                return Zo(a)
            }, !0);
            this.getName = y(575, function() {
                return a.getName()
            })
        };
        _.L($o, Yj);
        var ap = function(a, b) {
            this.slot = a.j;
            this.serviceName = b
        }
            , bp = function(a, b) {
            ap.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
        _.L(bp, ap);
        var cp = function() {
            ap.apply(this, arguments)
        };
        _.L(cp, ap);
        var dp = function(a, b, c) {
            ap.call(this, a, b);
            this.inViewPercentage = c
        };
        _.L(dp, ap);
        var ep = function() {
            ap.apply(this, arguments)
        };
        _.L(ep, ap);
        var fp = function() {
            ap.apply(this, arguments)
        };
        _.L(fp, ap);
        var gp = function(a, b, c, d) {
            ap.call(this, a, b);
            this.makeRewardedVisible = c;
            this.payload = d
        };
        _.L(gp, ap);
        var hp = function(a, b, c) {
            ap.call(this, a, b);
            this.payload = c
        };
        _.L(hp, ap);
        var ip = function() {
            ap.apply(this, arguments)
        };
        _.L(ip, ap);
        var jp = function() {
            ap.apply(this, arguments)
        };
        _.L(jp, ap);
        var kp = function() {
            ap.apply(this, arguments)
        };
        _.L(kp, ap);
        var lp = function() {
            ap.apply(this, arguments)
        };
        _.L(lp, ap);
        var mp = function() {
            ap.apply(this, arguments)
        };
        _.L(mp, ap);
        var np = new D.Set
            , op = function() {
            wk.call(this);
            np.add(this);
            this.m = [];
            this.j = !1;
            this.log = Sd.D();
            this.log.info(ml(this.getName()));
            this.A = []
        };
        _.L(op, Tk);
        op.prototype.Ma = function() {
            return new $o(this)
        }
        ;
        var Zo = function(a) {
            if (!a.j) {
                a.j = !0;
                Oj(6);
                a.Sb();
                for (var b = _.A(a.A), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        c()
                    } catch (d) {}
                }
                a.A.length = 0
            }
        }
            , pp = function(a, b) {
            if (a.j)
                try {
                    b()
                } catch (c) {}
            else
                a.A.push(b)
        };
        op.prototype.xa = function(a, b) {
            this.m.push(a);
            a = a.getSlotId();
            var c = new fp(a,this.getName());
            this.dispatchEvent("slotAdded", 818, c);
            this.log.info(pl(this.getName(), a.getAdUnitPath()), a);
            a = this.getName();
            mh(b, 4, a)
        }
        ;
        op.prototype.destroySlots = function(a) {
            var b = this.m
                , c = b.filter(function(d) {
                return _.F(a, "includes").call(a, d)
            });
            c.forEach(function(d) {
                da(b, d)
            });
            return c
        }
        ;
        var qp = function(a) {
            return _.x(416) && "rewardedSlotCanceled" === a ? !1 : (K = _.F(Object, "values").call(Object, Uj),
                _.F(K, "includes")).call(K, a)
        };
        op.prototype.addEventListener = function(a, b) {
            var c = this;
            if ("function" !== typeof b || "string" !== typeof a) {
                var d = Wk("Service.addEventListener", [a, b]);
                this.log.M(d);
                return this
            }
            if (!qp(a))
                return this.log.M(Jl(a)),
                    this;
            xk(this, a, function(e) {
                try {
                    var f = e.detail;
                    b(f);
                    if (_.x(528)) {
                        var g = _.kc();
                        f instanceof cp && eb("gpt_ive", function(h) {
                            $a(h);
                            u(h, "iu", f.slot.getAdUnitPath());
                            u(h, "time", g)
                        }, {
                            la: 1
                        });
                        f instanceof dp && eb("gpt_svce", function(h) {
                            $a(h);
                            u(h, "div", f.slot.toString());
                            u(h, "ivp", f.inViewPercentage);
                            u(h, "time", g)
                        }, {
                            la: 1
                        })
                    }
                } catch (h) {
                    c.log.error(Il(String(h), a)),
                    window.console && console.error && console.error(h)
                }
            });
            return this
        }
        ;
        var rp = function(a, b) {
            for (var c = _.A(np), d = c.next(); !d.done; d = c.next())
                d.value.destroySlots(a, b)
        };
        var sp = w(95, function(a) {
            var b = Sd.D();
            var c = null;
            var d = "";
            if ("string" === typeof a) {
                d = a;
                var e = So(Xd.D(), d)
            } else
                _.ha(a) && 1 == a.nodeType ? (c = a,
                    d = c.id,
                    e = So(Xd.D(), d)) : e = Zj(a, Mo);
            if (e) {
                d = e.getSlotId();
                a = $d.D().j;
                var f = un($d.D(), d.getDomId());
                if (f && (a = Qn(a, tn()),
                    !z(f, 19)))
                    if (c && $d.D().l.set(d, c),
                    xb(d) || In(Gb(f)))
                        for (G(f, 19, !0),
                                 b = _.A(J(f, 4)),
                                 c = b.next(); !c.done; c = b.next())
                            c = ak(c.value),
                                c = Zj(c, op),
                            c.j && c.ec(a, e);
                    else
                        b.M(gl(String(f.getAdUnitPath()), String(f.getDomId())), d)
            } else
                d ? b.error(hl(d)) : b.error(Wk("googletag.display", [String(a)]))
        });
        var ec = kf("https://tpc.googlesyndication.com/sodar/%{basename}.js");
        var ac = function(a) {
            return new D.Promise(function(b, c) {
                    var d = new XMLHttpRequest;
                    d.onreadystatechange = function() {
                        d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
                    }
                    ;
                    d.open("GET", a, !0);
                    d.send()
                }
            )
        };
        var tp = function(a) {
            this.j = a.j;
            this.m = a.m;
            this.l = a.l;
            this.mb = a.mb;
            this.L = a.L;
            this.eb = a.eb;
            this.Db = a.Db;
            this.Hb = a.Hb
        }
            , up = function(a, b) {
            this.j = a;
            this.m = b;
            this.l = "pt";
            this.L = window;
            this.eb = "env";
            this.Db = "n";
            this.Hb = "0"
        };
        var vp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(vp, P);
        var xp = function(a) {
            Q(this, a, 0, -1, wp, null)
        };
        N(xp, P);
        var wp = [13];
        var zp = function(a) {
            Q(this, a, 0, -1, yp, null)
        };
        N(zp, P);
        var yp = [13];
        var Bp = function(a) {
            Q(this, a, 0, -1, Ap, null)
        };
        N(Bp, P);
        var Cp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Cp, P);
        var Dp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Dp, P);
        var Ep = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Ep, P);
        var Ap = [1, 2]
            , Fp = function(a, b) {
            var c = J(a, 1);
            null != c && null != c && Wg(b, 1, c);
            c = R(a, Dp, 2);
            null != c && $g(b, 2, c);
            c = R(a, Dp, 3);
            null != c && $g(b, 3, c);
            c = J(a, 4);
            null != c && Yg(b, 4, c);
            c = J(a, 5);
            null != c && Yg(b, 5, c)
        }
            , Zg = function(a, b) {
            var c = J(a, 1);
            null != c && null != c && Wg(b, 1, c);
            c = J(a, 2);
            null != c && null != c && Wg(b, 2, c);
            c = J(a, 3);
            null != c && null != c && Wg(b, 3, c)
        }
            , Gp = function(a, b) {
            var c = J(a, 1);
            null != c && Yg(b, 1, c);
            c = J(a, 2);
            null != c && Yg(b, 2, c);
            c = J(a, 3);
            null != c && null != c && Xg(b, 3, c);
            c = J(a, 7);
            null != c && null != c && Xg(b, 7, c);
            c = J(a, 8);
            if (null != c) {
                var d = c;
                if (null != d) {
                    lg(b.j, 69);
                    c = b.j;
                    var e = d;
                    e = (d = 0 > e ? 1 : 0) ? -e : e;
                    if (0 === e)
                        0 < 1 / e ? ra = sa = 0 : (sa = 0,
                            ra = 2147483648);
                    else if (isNaN(e))
                        sa = 0,
                            ra = 2147483647;
                    else if (3.4028234663852886E38 < e)
                        sa = 0,
                            ra = (d << 31 | 2139095040) >>> 0;
                    else if (1.1754943508222875E-38 > e)
                        e = Math.round(e / Math.pow(2, -149)),
                            sa = 0,
                            ra = (d << 31 | e) >>> 0;
                    else {
                        var f = Math.floor(Math.log(e) / Math.LN2);
                        e *= Math.pow(2, -f);
                        e = Math.round(8388608 * e) & 8388607;
                        sa = 0;
                        ra = (d << 31 | f + 127 << 23 | e) >>> 0
                    }
                    d = ra;
                    c.j.push(d >>> 0 & 255);
                    c.j.push(d >>> 8 & 255);
                    c.j.push(d >>> 16 & 255);
                    c.j.push(d >>> 24 & 255)
                }
            }
            c = J(a, 4);
            null != c && null != c && Vg(b, 4, c);
            c = J(a, 5);
            null != c && null != c && Vg(b, 5, c);
            c = J(a, 6);
            null != c && null != c && Vg(b, 6, c)
        }
            , pc = function(a, b) {
            return G(a, 8, b)
        };
        var Hp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Hp, P);
        var Jp = function(a) {
            Q(this, a, 0, -1, Ip, null)
        };
        N(Jp, P);
        var Ip = [1];
        var Kp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Kp, P);
        var Lp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Lp, P);
        var Mp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Mp, P);
        var Np = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Np, P);
        var Pp = function(a) {
            Q(this, a, 0, -1, Op, null)
        };
        N(Pp, P);
        var Op = [1, 2, 3];
        var Rp = function(a) {
            Q(this, a, 0, -1, Qp, null)
        };
        N(Rp, P);
        var Qp = [1];
        var Tp = function(a) {
            Q(this, a, 0, -1, Sp, null)
        };
        N(Tp, P);
        var Sp = [1];
        var Up = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Up, P);
        var Wp = function(a) {
            Q(this, a, 0, -1, Vp, null)
        };
        N(Wp, P);
        var Yp = function(a) {
            Q(this, a, 0, -1, Xp, null)
        };
        N(Yp, P);
        var Zp = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Zp, P);
        var Vp = [1]
            , Xp = [1, 2, 3, 4];
        var $p = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N($p, P);
        var aq = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(aq, P);
        var dq = function(a) {
            Q(this, a, 0, -1, bq, cq)
        };
        N(dq, P);
        var eq = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(eq, P);
        var bq = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38, 53, 57]
            , cq = [[4, 41], [39, 48]];
        eq.prototype.getHtml = function() {
            return J(this, 1)
        }
        ;
        var fq = navigator
            , gq = function(a) {
            var b = 1, c;
            if (void 0 != a && "" != a)
                for (b = 0,
                         c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        }
            , hq = function(a, b) {
            if (!a || "none" == a)
                return 1;
            a = String(a);
            "auto" == a && (a = b,
            "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return gq(a.toLowerCase())
        }
            , iq = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/
            , jq = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/
            , kq = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
        var mq = function(a) {
            Q(this, a, 0, -1, lq, null)
        };
        N(mq, P);
        var lq = [15]
            , nq = function() {
            var a = new mq
                , b = _.x(76);
            return lh(a, 7, b)
        };
        var oq = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(oq, P);
        var pq = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(pq, P);
        qf(jf(kf("https://pagead2.googlesyndication.com/pagead/osd.js")));
        var qq = function(a, b) {
            if (!(window && Math.random && navigator))
                return -1;
            if (window.__google_ad_urls) {
                var c = window.__google_ad_urls;
                try {
                    if (c && c.getOseId())
                        return c.getOseId()
                } catch (e) {}
            }
            if (!window.__google_ad_urls_id) {
                c = window.google_enable_ose;
                if (!0 === c)
                    var d = 2;
                else
                    !1 !== c && (d = Zh([0], a),
                    null == d && ((d = Zh([2], b)) || (d = 3)));
                if (!d)
                    return 0;
                window.__google_ad_urls_id = d
            }
            return window.__google_ad_urls_id
        };
        var rq = function() {};
        _.r = rq.prototype;
        _.r.getNewBlocks = function() {}
        ;
        _.r.setupOse = function() {}
        ;
        _.r.getOseId = function() {
            return -1
        }
        ;
        _.r.getCorrelator = function() {
            return ""
        }
        ;
        _.r.numBlocks = function() {
            return 0
        }
        ;
        _.r.registerAdBlock = function() {}
        ;
        _.r.unloadAdBlock = function() {}
        ;
        var sq = new yj(1,jj())
            , tq = function() {
            var a = jj();
            a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (sq.j = !1,
            sq.events != sq.l.google_js_reporting_queue && (xj() && _.Ue(sq.events, db),
                sq.events.length = 0))
        };
        (function() {
                var a = jj();
                a && a.document && ("complete" == a.document.readyState ? tq() : sq.j && _.E(a, "load", function() {
                    tq()
                }))
            }
        )();
        var vq = function() {
            var a = uq
                , b = jj() || _.C;
            return b.google_osd_loaded ? !1 : (Xh(b.document, a),
                b.google_osd_loaded = !0)
        }
            , wq = function(a, b, c) {
            a && (c ? _.E(a, "load", b) : _.uc(a, "load", b))
        }
            , xq = function() {
            var a = (jj() || _.C).google_osd_amcb;
            return "function" === typeof a ? a : null
        }
            , yq = qf(jf(kf("https://www.googletagservices.com/activeview/js/current/osd.js")))
            , zq = function(a) {
            return sf(yq, {
                cb: void 0 === a ? "/r20100101" : a
            })
        };
        var Aq = function(a, b) {
            this.m = b && b.m ? b.m : 0;
            this.l = b ? b.l : "";
            this.j = b && b.j ? b.j : [];
            if (b)
                for (a = 0; a < this.j.length; ++a)
                    this.j[a].G = !0
        };
        _.r = Aq.prototype;
        _.r.getNewBlocks = function(a, b) {
            for (var c = this.j.length, d = 0; d < c; d++) {
                var e = this.j[d];
                !e.l && e.j && (e.l = !0,
                    a(e.j, e.o, e.X, e.m, void 0, e.G, e.A, e.K, e.F))
            }
            b && ((jj() || _.C).google_osd_amcb = a)
        }
        ;
        _.r.setupOse = function(a) {
            if (this.getOseId())
                return this.getOseId();
            var b = qq(Bq, Cq);
            if (!b)
                return 0;
            this.m = b;
            this.l = String(a || 0);
            return this.getOseId()
        }
        ;
        _.r.getOseId = function() {
            return window && Math.random && navigator ? this.m : -1
        }
        ;
        _.r.getCorrelator = function() {
            return this.l
        }
        ;
        _.r.numBlocks = function() {
            return this.j.length
        }
        ;
        _.r.registerAdBlock = function(a, b, c, d, e, f, g) {
            g = void 0 === g ? function() {}
                : g;
            c = xq();
            e = _.kc() || -1;
            f = _.C.pageYOffset;
            0 <= f || (f = -1);
            c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Dq(a,b,d,g,e,f),
                this.j.push(g),
                wq(d, g.B, !0),
            uq || (_.Vi(_.C, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a)),
                uq = zq("/r20100101")),
            _.x(1019) && 1 === b && _.C.IntersectionObserver || vq() && kj())
        }
        ;
        _.r.unloadAdBlock = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            b = jj();
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c && (c = Ci(this.j, function(d) {
                return d.j == a
            })) && wq(a, c.B, !1)
        }
        ;
        var Eq = function() {
            var a = jj()
                , b = a.__google_ad_urls;
            if (!b)
                return a.__google_ad_urls = new Aq(a);
            try {
                if (0 <= b.getOseId())
                    return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new Aq(a,b)
            } catch (c) {
                return a.__google_ad_urls = new Aq(a)
            }
        }
            , uq = null
            , Cq = 0
            , Bq = 0
            , Dq = function(a, b, c, d, e, f) {
            var g = this;
            d = void 0 === d ? Ke : d;
            this.o = a;
            this.X = b;
            this.j = c;
            this.G = this.l = this.m = !1;
            this.A = d;
            this.K = void 0 === e ? -1 : e;
            this.F = void 0 === f ? -1 : f;
            this.B = function() {
                return g.m = !0
            }
        };
        window.Goog_AdSense_getAdAdapterInstance = Eq;
        var Fq = ["Goog_AdSense_OsdAdapter"]
            , Gq = _.C;
        Fq[0]in Gq || "undefined" == typeof Gq.execScript || Gq.execScript("var " + Fq[0]);
        for (var Hq; Fq.length && (Hq = Fq.shift()); )
            Fq.length || void 0 === Aq ? Gq[Hq] && Gq[Hq] !== Object.prototype[Hq] ? Gq = Gq[Hq] : Gq = Gq[Hq] = {} : Gq[Hq] = Aq;
        var Iq = ["auto", "inherit", "100%"]
            , Jq = Iq.concat(["none"])
            , Kq = function(a, b, c, d, e, f) {
            e = void 0 === e ? 10 : e;
            f = void 0 === f ? 10 : f;
            b = b.styleSheets;
            if (!b)
                return !1;
            var g = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            e = -1 == e ? Infinity : e;
            f = -1 == f ? Infinity : f;
            for (var h = 0; h < Math.min(b.length, e); ++h) {
                var k = void 0;
                try {
                    var l = b[h]
                        , n = null;
                    try {
                        n = l.cssRules || l.rules
                    } catch (M) {
                        if (15 == M.code)
                            throw M.styleSheet = l,
                                M;
                    }
                    k = n
                } catch (M) {
                    continue
                }
                if (k && 0 < k.length)
                    for (n = 0; n < Math.min(k.length, f); ++n) {
                        var m = k[n], p;
                        if (p = 1 == m.type) {
                            p = m;
                            var q = c;
                            p = g.call(a, p.selectorText) && q(p)
                        }
                        if (!p && (p = d && 4 == m.type))
                            a: {
                                p = a;
                                q = c;
                                for (var v = f, B = 0; B < Math.min(m.cssRules.length, v); B++) {
                                    var I = m.cssRules[B], H;
                                    if (H = 1 === I.type || !_.x(514))
                                        H = q,
                                            H = g.call(p, I.selectorText) && H(I);
                                    if (H) {
                                        p = !0;
                                        break a
                                    }
                                }
                                p = !1
                            }
                        if (p)
                            return !0
                    }
            }
            return !1
        }
            , Mq = function(a, b, c) {
            var d = void 0 === d ? 10 : d;
            var e = void 0 === e ? 10 : e;
            if (!a)
                return !0;
            var f = !0;
            pd(a, function(g) {
                return f = Lq(g, b, !1, d, e)
            }, void 0 === c ? 100 : c);
            return f
        }
            , Lq = function(a, b, c, d, e) {
            var f = a.style;
            return f && f.height && !_.ca(Iq, f.height) || f && f.maxHeight && !_.ca(Jq, f.maxHeight) || Kq(a, b.document, function(g) {
                var h = g.style.height;
                g = g.style["max-height"];
                return h && !_.ca(Iq, h) || g && !_.ca(Jq, g)
            }, c, d, e) ? !1 : !0
        };
        var Nq = function(a) {
            var b, c, d, e, f, g;
            this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : R(a, Up, 2)) || void 0 === b ? void 0 : R(b, Pp, 1)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : []);
            this.m = new D.Set(null !== (g = null === (f = null === (e = null === a || void 0 === a ? void 0 : R(a, Up, 2)) || void 0 === e ? void 0 : R(e, Pp, 1)) || void 0 === f ? void 0 : J(f, 2)) && void 0 !== g ? g : [])
        };
        Nq.prototype.getName = function() {
            return "Category"
        }
        ;
        Nq.prototype.yb = function(a) {
            return gc(zd(a, 1) ? eh(R(a, Oq, 1), 1) : [], this.j) || gc(zd(a, 1) ? eh(R(a, Oq, 1), 2) : [], this.m) ? !1 : !0
        }
        ;
        var Pq = function(a) {
            var b, c, d;
            this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : R(a, Up, 2)) || void 0 === b ? void 0 : R(b, Rp, 3)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : [])
        };
        Pq.prototype.getName = function() {
            return "Consent"
        }
        ;
        Pq.prototype.yb = function(a) {
            var b = this;
            return !zd(a, 7) || eh(R(a, Qq, 7), 1).every(function(c) {
                return b.j.has(c)
            })
        }
        ;
        var Rq = function(a) {
            var b;
            this.rb = 0;
            null == a || null == R(a, Wp, 3) ? this.j = [] : (this.j = T(R(a, Wp, 3), Zp, 1),
                this.rb = null !== (b = hh(R(a, Wp, 3), 2)) && void 0 !== b ? b : 0)
        };
        Rq.prototype.getName = function() {
            return "Pricing Rules"
        }
        ;
        Rq.prototype.yb = function(a) {
            if (0 === this.j.length)
                return !0;
            for (var b = _.A(this.j), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = R(c, Yp, 1)
                    , e = a;
                if (null === d || !(0 !== J(d, 1).length && !(K = J(d, 1),
                    _.F(K, "includes")).call(K, hh(e, 2)) || 0 !== J(d, 2).length && !(K = J(d, 2),
                    _.F(K, "includes")).call(K, hh(e, 3)) || 0 !== J(d, 3).length && !(K = J(d, 3),
                    _.F(K, "includes")).call(K, gh(e, 4, 0)) || 0 !== J(d, 4).length && !(K = J(d, 4),
                    _.F(K, "includes")).call(K, gh(e, 5, "")))) {
                    if (null == R(a, Sq, 8) || null == hh(R(a, Sq, 8), 1))
                        return !1;
                    d = hh(R(a, Sq, 8), 1) * this.rb;
                    if (null != hh(c, 2) && (null == d || d < hh(c, 2)))
                        return !1
                }
            }
            return !0
        }
        ;
        var Tq = function(a) {
            var b, c, d;
            this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : R(a, Up, 2)) || void 0 === b ? void 0 : R(b, Tp, 2)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : [])
        };
        Tq.prototype.getName = function() {
            return "Url"
        }
        ;
        Tq.prototype.yb = function(a) {
            var b = this;
            return 0 === this.j.size || !J(a, 6).some(function(c) {
                return b.j.has(c)
            })
        }
        ;
        var Uq = function(a) {
            var b = [];
            b.push(new Nq(a));
            b.push(new Pq(a));
            b.push(new Tq(a));
            b.push(new Rq(a));
            this.j = b
        };
        var Vq = function(a) {
            var b, c, d, e;
            this.j = {
                Ec: Uq.prototype,
                rb: 0
            };
            this.j.Ec = new Uq(null !== (b = R(a, $p, 2)) && void 0 !== b ? b : new $p);
            this.j.rb = null !== (e = null === (d = null === (c = R(a, $p, 2)) || void 0 === c ? void 0 : R(c, Wp, 3)) || void 0 === d ? void 0 : hh(d, 2)) && void 0 !== e ? e : 1
        };
        var Sq = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Sq, P);
        var Oq = function(a) {
            Q(this, a, 0, -1, Wq, null)
        };
        N(Oq, P);
        var Wq = [1, 2];
        var Qq = function(a) {
            Q(this, a, 0, -1, Xq, null)
        };
        N(Qq, P);
        var Xq = [1];
        var Zq = function(a) {
            Q(this, a, 0, -1, Yq, null)
        };
        N(Zq, P);
        var Yq = [6];
        var $q = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N($q, P);
        var ar = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(ar, P);
        var br = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(br, P);
        var cr = function(a) {
            return (a = (new nb(a)).get("DATA_USE_CONSENT", "")) ? a : null
        }
            , dr = function(a) {
            var b = (b = (new nb(a)).get("FCCDCF", "")) ? b : null;
            try {
                var c = b ? sh(ar, b) : null
            } catch (d) {
                c = null
            }
            if (!c)
                return cr(a);
            c = R(c, br, 3);
            if (!c || !zd(c, 1))
                return cr(a);
            a = J(c, 2);
            b = Date.now();
            if (a) {
                if (b < a || b > a + 33696E6)
                    return null
            } else
                return null;
            return J(c, 1)
        };
        var fr = function(a) {
            Q(this, a, 0, -1, er, null)
        };
        N(fr, P);
        var er = [1, 2, 3, 4];
        var gr = function(a, b) {
            if ("script" === a.tagName.toLowerCase())
                throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase())
                throw Error("Use setTextContent with a SafeStyleSheet.");
            if (b instanceof Xi) {
                var c;
                if (null === (c = za()) || void 0 === c || !c.isHTML(b))
                    if (b instanceof Ca)
                        b = b.m;
                    else
                        throw Error("wrong type");
            } else
                b = _.Yf(b);
            a.innerHTML = b
        };
        var ic = void 0;
        var hr = function(a) {
            a = void 0 === a ? window : a;
            return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
        }
            , ir = function(a, b) {
            b = void 0 === b ? window : b;
            var c = hr(b);
            if (!c)
                return null;
            var d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5",
                    b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
        var jr = {
            oe: 0,
            ie: 1,
            he: 2,
            ge: 3,
            re: 4,
            se: 5,
            me: 6,
            je: 7
        };
        var kr = function() {
            return oi(_.C.top, "googlefcPresent")
        }
            , lr = function(a) {
            var b = document;
            try {
                var c = dr(b);
                var d = c ? sh(fr, c) : null
            } catch (e) {
                d = null
            }
            if (!d)
                return 0;
            if (z(d, 7))
                return 4;
            if (a) {
                if (_.ca(J(d, 3), a))
                    return 2;
                if (_.ca(J(d, 4), a))
                    return 3
            }
            return 1
        }
            , mr = yb(function() {
            var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
            try {
                return a.test(_.C.top.location.href)
            } catch (b) {
                return a.test(_.C.location.href)
            }
        })
            , nr = function(a, b, c) {
            for (var d = ai(jr).length, e = [], f = 0; f < d; f++)
                e[f] = 0;
            mr() && (a = !0);
            e[0] = a ? 1 : 2;
            d = void 0 !== c ? c : oi(_.C.top, "GoogleSetNPA") || oi(xc(), "GoogleSetNPA");
            e[5] = d ? 1 : 2;
            e[4] = 2;
            c = !!_.C.googlefc || kr();
            e[1] = c ? 1 : 2;
            f = lr(b);
            0 != f ? b = {
                xc: f,
                yc: 3
            } : (f = _.C.top,
                b = {
                    xc: oi(f, "googlefcInactive") ? 4 : b && oi(f, "googlefcPA-" + b) ? 2 : oi(f, "googlefcNPA") ? 3 : 0,
                    yc: 2
                });
            f = b;
            b = f.xc;
            e[f.yc] = b;
            if (!d)
                a: switch (b) {
                    case 2:
                    case 4:
                        d = !1;
                        break a;
                    case 3:
                        d = !0;
                        break a;
                    case 1:
                        d = a;
                        break a;
                    default:
                        d = (void 0 === c ? !1 : c) && a
                }
            return {
                Me: b,
                vd: d,
                Ed: 0 == b && a && c,
                cd: e.join(".")
            }
        }
            , or = function(a, b, c, d) {
            var e = nr(a, b, d);
            e.Ed ? _.C.setTimeout(function() {
                or(a, b, c, d)
            }, 1E3) : c(e)
        };
        var pr = function() {
            this.j = [];
            this.m = [];
            this.l = []
        }
            , qr = function(a, b, c) {
            a.m.push({
                oc: void 0 === c ? !1 : c,
                uc: b
            })
        };
        var Lc = function() {
            var a = this;
            this.promise = new D.Promise(function(b, c) {
                    a.resolve = b;
                    a.reject = c
                }
            )
        };
        var rr = function(a) {
            a = Error.call(this, a);
            this.message = a.message;
            "stack"in a && (this.stack = a.stack);
            _.F(Object, "setPrototypeOf").call(Object, this, rr.prototype);
            this.name = "InputError"
        };
        _.L(rr, Error);
        var sr = function() {
            var a = this;
            this.K = null;
            this.B = -1;
            this.l = new Lc;
            this.l.promise.then(function() {
                -1 !== a.B && (a.K = _.kc() - a.B)
            }, function() {})
        }
            , tr = function() {
            sr.apply(this, arguments)
        };
        _.L(tr, sr);
        tr.prototype.j = function(a) {
            this.o || (this.m = a,
                this.l.resolve(a))
        }
        ;
        tr.prototype.G = function(a) {
            null == a ? ur(this) : this.j(a)
        }
        ;
        var ur = function(a) {
            a.o || (a.m = null,
                a.l.resolve(null))
        };
        he.Object.defineProperties(tr.prototype, {
            promise: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.l.promise
                }
            },
            o: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return !!this.F || void 0 !== this.m
                }
            },
            A: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.K
                }
            }
        });
        var vr = function(a) {
            sr.call(this);
            this.j = a
        };
        _.L(vr, sr);
        var wr = function(a) {
            return null != a.j.m
        };
        he.Object.defineProperties(vr.prototype, {
            value: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.j.m
                }
            },
            error: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.j.F
                }
            }
        });
        var xr = function() {
            vr.apply(this, arguments)
        };
        _.L(xr, vr);
        he.Object.defineProperties(xr.prototype, {
            value: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.j.m
                }
            }
        });
        var yr = function() {
            tr.apply(this, arguments)
        };
        _.L(yr, tr);
        yr.prototype.notify = function() {
            ur(this)
        }
        ;
        var zr = function(a, b) {
            b = void 0 === b ? 0 : b;
            _.tk.call(this);
            var c = this;
            this.id = a;
            this.mc = b;
            this.B = new pr;
            this.ha = !1;
            this.T = -1;
            _.Yd(this, function() {
                var d = c.B;
                d.j.length = 0;
                d.l.length = 0;
                d.m.length = 0
            })
        };
        _.L(zr, _.tk);
        zr.prototype.start = function() {
            return Yb(this, function b() {
                var c = this, d, e, f, g;
                return Zb(b, function(h) {
                    switch (h.j) {
                        case 1:
                            if (c.ha)
                                return h.return();
                            c.ha = !0;
                            h.l = 2;
                            return $b(h, lc(c.B.m, c.mc), 4);
                        case 4:
                            c.T = h.m;
                            if (c.W) {
                                h.j = 5;
                                break
                            }
                            for (var k = 0, l = _.A(c.B.l), n = l.next(); !n.done; n = l.next()) {
                                if (!wr(n.value))
                                    throw Error("missing input: " + c.id + "/" + k);
                                ++k
                            }
                            d = _.A(c.B.j);
                            for (e = d.next(); !e.done; e = d.next())
                                f = e.value,
                                    f.B = _.kc();
                            return $b(h, c.j(), 5);
                        case 5:
                            h.j = 0;
                            h.l = 0;
                            break;
                        case 2:
                            g = bc(h);
                            if (c.W)
                                return h.return();
                            !(g instanceof rr) && g instanceof Error && (c.K(g),
                                c.ca(g));
                            h.j = 0
                    }
                })
            })
        }
        ;
        zr.prototype.m = function() {
            var a = new tr;
            this.B.j.push(a);
            return a
        }
        ;
        var Ar = function(a) {
            var b = new yr;
            a.B.j.push(b);
            return b
        }
            , W = function(a, b) {
            qr(a.B, b);
            b = new xr(b);
            a.B.l.push(b);
            return b
        }
            , X = function(a, b) {
            qr(a.B, b);
            return new vr(b)
        }
            , Br = function(a, b) {
            qr(a.B, b, !0);
            return new vr(b)
        }
            , Cr = function(a, b) {
            qr(a.B, b)
        };
        zr.prototype.ca = function(a) {
            if (this.B.j.length) {
                a = new rr(a.message);
                for (var b = _.A(this.B.j), c = b.next(); !c.done; c = b.next())
                    if (c = c.value,
                        !c.o) {
                        var d = a;
                        c.F = d;
                        c.l.reject(d)
                    }
            }
        }
        ;
        var Dr = function(a, b) {
            zr.call(this, a);
            this.id = a;
            this.I = b
        };
        _.L(Dr, zr);
        Dr.prototype.K = function(a) {
            this.I(this.id, a)
        }
        ;
        var Er = function() {
            this.errorMessage = this.info = this.error = this.lc = null
        }
            , Fr = function(a, b) {
            a.lc = b;
            return a
        };
        Er.prototype.getError = function() {
            return this.error
        }
        ;
        var Gr = function(a, b) {
            a.errorMessage = b;
            return a
        }
            , Hr = function() {
            this.cache = {}
        }
            , Lr = function() {
            Ir || (Jr = _.Kb(1920, Jr),
                Kr = _.Kb(1921, Kr),
                Ir = new Hr);
            return Ir
        }
            , Mr = function(a) {
            var b = J(a, 3);
            if (!b)
                return 3;
            if (void 0 === J(a, 2))
                return 4;
            a = Date.now();
            return a > b + 36E5 * Kr ? 2 : a > b + 36E5 * Jr ? 1 : 0
        };
        Hr.prototype.get = function(a, b) {
            var c = new Er;
            if (this.cache[a])
                return Fr(c, this.cache[a]);
            var d = "";
            try {
                d = b.getItem("_GESPSK-" + a)
            } catch (e) {
                return c.error = 6,
                    Gr(c, e.message)
            }
            if (!d)
                return new Er;
            b = null;
            try {
                b = sh(Ep, d)
            } catch (e) {
                return a = new Er,
                    a.error = 5,
                    Gr(a, e.message)
            }
            b && (this.cache[a] = b);
            return Fr(new Er, b)
        }
        ;
        Hr.prototype.set = function(a, b) {
            var c = J(a, 1)
                , d = "_GESPSK-" + c
                , e = Fr(new Er, a);
            try {
                b.setItem(d, a.o())
            } catch (f) {
                e.info = 7,
                    Gr(e, f.message)
            }
            this.cache[c] = a;
            return e
        }
        ;
        var Ir = null
            , Jr = 24
            , Kr = 72;
        var zc = function(a, b, c, d) {
            Dr.call(this, 655, d);
            this.ra = a;
            this.F = b;
            this.H = c;
            this.o = this.m();
            this.A = this.m();
            this.l = _.Kb(360261971)
        };
        _.L(zc, Dr);
        zc.prototype.j = function() {
            var a, b = Lr().get(this.ra, this.H);
            if (b.getError())
                oc(b.getError(), this.ra, b.errorMessage),
                    ur(this.o),
                    ur(this.A);
            else {
                var c = Date.now();
                if (b = b.lc)
                    if (this.l && (zd(b, 8) || (oc(33, this.ra),
                        pc(b, this.l)),
                    zd(b, 7) || (oc(34, this.ra),
                        G(b, 7, Math.round(Date.now() / 1E3 / 60)))),
                    zd(b, 3) || oc(35, this.ra),
                        this.l) {
                        var d = qc(b, 8)
                            , e = null !== (a = J(b, 7)) && void 0 !== a ? a : c;
                        d < this.l && pc(b, Math.min(d + Number((this.l * (c / 1E3 / 60 - e) / 60).toFixed(3)), this.l));
                        1 > qc(b, 8) ? (c = {},
                            oc(22, this.ra, null, (c.t = String(e),
                                c.cr = String(d),
                                c.cs = String(Mr(b)),
                                c)),
                            ur(this.o),
                            ur(this.A)) : (this.o.j(this.F),
                            this.A.j(b))
                    } else
                        this.o.j(this.F),
                            this.A.j(b);
                else
                    this.o.j(this.F),
                        b = this.A,
                        d = b.j,
                        e = new Ep,
                        e = G(e, 1, this.ra),
                        e = pc(e, this.l),
                        c = G(e, 3, c),
                        d.call(b, c)
            }
        }
        ;
        var rc = function(a, b, c, d) {
            "string" !== typeof c ? oc(21, a) : c || oc(20, a);
            G(b, 2, c);
            b = Lr().set(b, d);
            b.errorMessage ? oc(b.info, a, b.errorMessage) : oc(27, a)
        }
            , sc = function(a) {
            return "string" === typeof a ? a : a instanceof Error ? a.message : null
        };
        var Ac = function(a, b, c, d, e) {
            Dr.call(this, 658, e);
            this.wa = c;
            this.H = d;
            this.l = this.m();
            this.o = this.m();
            this.A = this.m();
            this.F = X(this, a);
            this.J = X(this, b)
        };
        _.L(Ac, Dr);
        Ac.prototype.j = function() {
            var a = this;
            if (this.F.value) {
                var b = function(g) {
                    var h = J(g, 2);
                    h ? a.l.j({
                        id: J(g, 1),
                        Fe: h
                    }) : ur(a.l)
                }
                    , c = this.F.value
                    , d = this.J.value
                    , e = J(d, 1)
                    , f = Mr(d);
                switch (f) {
                    case 0:
                        oc(24, e);
                        break;
                    case 1:
                        oc(25, e);
                        break;
                    case 2:
                        oc(26, e);
                        break;
                    case 3:
                        oc(9, e);
                        break;
                    case 4:
                        oc(23, e)
                }
                switch (f) {
                    case 0:
                        b(d);
                        Nr(this);
                        break;
                    case 1:
                        b(d);
                        this.o.j(c);
                        this.A.j(d);
                        break;
                    case 3:
                    case 2:
                    case 4:
                        this.wa && (oc(30, e, null, {
                            url: this.wa.toString()
                        }),
                            wc(this.wa, function() {
                                return void oc(31, e)
                            })),
                            G(d, 2, null),
                            tc(e, d, c, this.H).then(b),
                            Nr(this)
                }
            } else
                ur(this.l),
                    Nr(this)
        }
        ;
        var Nr = function(a) {
            ur(a.o);
            ur(a.A)
        };
        var Bc = function(a, b, c, d, e) {
            Dr.call(this, 662, e);
            this.wa = c;
            this.A = d;
            this.l = X(this, a);
            this.o = X(this, b)
        };
        _.L(Bc, Dr);
        Bc.prototype.j = function() {
            var a = this;
            this.o.value && this.l.value && vc().then(function() {
                var b = a.o.value
                    , c = J(b, 1);
                a.wa && (oc(30, c, null, {
                    url: a.wa.toString()
                }),
                    wc(a.wa, function() {
                        return void oc(31, c)
                    }));
                tc(c, b, a.l.value, a.A)
            })
        }
        ;
        var Or = 0
            , Pr = qf(jf(kf("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
        var Qr = yb(function() {
            return !(xg || yg || wg) && (Kg || sg || rg)
        })
            , Rr = function(a, b, c, d, e) {
            d = void 0 === d ? "" : d;
            var f = a.createElement("link");
            try {
                ag(f, b, c)
            } catch (g) {
                return null
            }
            d && "preload" == c && (f.as = d);
            e && f.setAttribute("nonce", e);
            a = a.getElementsByTagName("head")[0];
            if (!a)
                return null;
            try {
                a.appendChild(f)
            } catch (g) {}
            return f
        };
        var Sr = /^\.google\.(com?\.)?[a-z]{2,3}$/, Tr = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, Ur = _.C, Wr = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(_.C.location.hostname)];
            Vr[3] >= dd() && b.push("adsid=" + encodeURIComponent(Vr[1]));
            _.x(1911) && b.push("meb=1");
            return a + "?" + b.join("&")
        }, Vr, Xr, Yr = function() {
            Ur = _.C;
            Vr = Ur.googleToken = Ur.googleToken || {};
            var a = dd();
            Vr[1] && Vr[3] > a && 0 < Vr[2] || (Vr[1] = "",
                Vr[2] = -1,
                Vr[3] = -1,
                Vr[4] = "",
                Vr[6] = "");
            Xr = Ur.googleIMState = Ur.googleIMState || {};
            a = Xr[1];
            Sr.test(a) && !Tr.test(a) || (Xr[1] = ".google.com");
            Array.isArray(Xr[5]) || (Xr[5] = []);
            "boolean" !== typeof Xr[6] && (Xr[6] = !1);
            Array.isArray(Xr[7]) || (Xr[7] = []);
            "number" !== typeof Xr[8] && (Xr[8] = 0)
        }, Zr = function() {
            Yr();
            return Vr[1]
        }, $r = function() {
            Yr();
            return Vr[4]
        }, as = function() {
            Yr();
            return Vr[6]
        }, bs = {
            Qb: function() {
                return 0 < Xr[8]
            },
            sd: function() {
                Xr[8]++
            },
            td: function() {
                0 < Xr[8] && Xr[8]--
            },
            ud: function() {
                Xr[8] = 0
            },
            Je: function() {
                return !1
            },
            wc: function() {
                return Xr[5]
            },
            qc: function(a) {
                try {
                    a()
                } catch (b) {
                    _.C.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Fc: function() {
                if (!bs.Qb()) {
                    var a = _.C.document
                        , b = function(e) {
                        e = Wr(e);
                        a: {
                            try {
                                var f = Ie();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        Rr(a, e, "preload", "script", f);
                        f = a.createElement("script");
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return _.C.processGoogleToken({}, 2)
                        }
                        ;
                        e = qf(e);
                        Wb(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f),
                                bs.sd()
                        } catch (g) {}
                    }
                        , c = Xr[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT",
                        b);
                    _.C.setTimeout(function() {
                        return _.C.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        }, cs = function(a) {
            Yr();
            var b = Ur.googleToken[5] || 0;
            a && (0 != b || Vr[3] >= dd() ? bs.qc(a) : (bs.wc().push(a),
                bs.Fc()));
            Vr[3] >= dd() && Vr[2] >= dd() || bs.Fc()
        }, ds = function(a) {
            _.C.processGoogleToken = _.C.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b
                    , f = parseInt(d.freshLifetimeSecs || "", 10)
                    , g = parseInt(d.validLifetimeSecs || "", 10)
                    , h = d["1p_jar"] || "";
                d = d.pucrd || "";
                Yr();
                1 == c ? bs.ud() : bs.td();
                var k = Ur.googleToken = Ur.googleToken || {}
                    , l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !bs.Qb() && (!(Vr[3] >= dd()) || "NT" == Vr[1]);
                var n = !(Vr[3] >= dd()) && 0 != c;
                if (l || e || n)
                    e = dd(),
                        f = e + 1E3 * f,
                        g = e + 1E3 * g,
                    1E-5 > Math.random() && _.Vi(_.C, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c),
                        k[5] = c,
                        k[1] = b,
                        k[2] = f,
                        k[3] = g,
                        k[4] = h,
                        k[6] = d,
                        Yr();
                if (l || !bs.Qb()) {
                    c = bs.wc();
                    for (b = 0; b < c.length; b++)
                        bs.qc(c[b]);
                    c.length = 0
                }
            }
            ;
            cs(a)
        };
        var Jd = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.A = b.rootMargin ? Hc(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = _.Gc(this.A, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.K = Jc(b.threshold);
            this.F = a;
            this.j = [];
            this.G = [];
            this.B = !1;
            this.m = null;
            this.l = $e(this.o, 100, this)
        }
            , es = function(a) {
            if (a.root)
                var b = Kc(a.root);
            else {
                var c = _.Hh(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = _.Gc(a.A, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        }
            , fs = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting)
                return !0;
            var d = b.intersectionRatio
                , e = c.intersectionRatio;
            return d == e ? !1 : _.We(a.K, function(f) {
                return f < d != f < e
            })
        };
        Jd.prototype.o = function() {
            var a = this
                , b = es(this);
            _.Ue(this.j, function(c) {
                var d = c.target
                    , e = Kc(d)
                    , f = e.width * e.height;
                var g = Math.max(b.top, e.top);
                var h = Math.min(b.right, e.right)
                    , k = Math.min(b.bottom, e.bottom)
                    , l = Math.max(b.left, e.left)
                    , n = h - l
                    , m = k - g;
                g = 0 <= n && 0 <= m ? {
                    top: g,
                    right: h,
                    bottom: k,
                    left: l,
                    width: n,
                    height: m
                } : null;
                h = !!g;
                k = g ? g.width * g.height : 0;
                l = window.performance;
                d = {
                    boundingClientRect: e,
                    intersectionRatio: f ? k / f : h ? 1 : 0,
                    intersectionRect: g || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    },
                    isIntersecting: h,
                    rootBounds: b,
                    target: d,
                    time: l && l.now ? l.now() : 0
                };
                fs(a, c.ja, d) && a.G.push(d);
                c.ja = d
            });
            this.G.length && this.F(gs(this), this)
        }
        ;
        Jd.prototype.observe = function(a) {
            _.We(this.j, function(b) {
                return b.target == a
            }) || (this.j.push({
                target: a,
                ja: null
            }),
                this.o(),
            this.B || (this.B = !0,
                _.E(_.C, "scroll", this.l),
                _.E(_.C, "resize", this.l),
            _.C.MutationObserver && !this.m && (this.m = new MutationObserver(this.l),
                this.m.observe(_.C.document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))))
        }
        ;
        Jd.prototype.unobserve = function(a) {
            this.j = _.Ic(this.j, function(b) {
                return b.target != a
            });
            0 == this.j.length && this.disconnect()
        }
        ;
        Jd.prototype.disconnect = function() {
            this.B = !1;
            this.j.length = 0;
            _.uc(_.C, "scroll", this.l);
            _.uc(_.C, "resize", this.l);
            this.m && (this.m.disconnect(),
                this.m = null)
        }
        ;
        var gs = function(a) {
            var b = [].concat(_.Ib(a.G));
            a.G.length = 0;
            return b
        };
        _.hs = function() {
            var a = _.t(38);
            this.j = void 0 === a ? .01 : a;
            this.m = this.l
        }
        ;
        _.hs.prototype.l = function(a, b, c, d, e) {
            c = void 0 === c ? this.j : c;
            if (Math.random() > c)
                return !1;
            b.error && b.meta && b.id || (b = new xh(b,{
                context: a,
                id: void 0 === e ? "gpt_exception" : e
            }));
            d && (b.meta = {},
            d && d(b.meta));
            _.C.google_js_errors = _.C.google_js_errors || [];
            _.C.google_js_errors.push(b);
            _.C.error_rep_loaded || (Xh(_.C.document, qf(_.C.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")),
                _.C.error_rep_loaded = !0);
            return !1
        }
        ;
        var is = function(a, b, c, d, e, f) {
            _.tk.call(this);
            this.B = a;
            this.status = 1;
            this.l = b;
            this.m = c;
            this.J = d;
            this.lb = !!e;
            this.o = Math.random();
            this.A = {};
            this.j = null;
            this.K = (0,
                _.Re)(this.I, this);
            this.F = f
        };
        _.L(is, _.tk);
        is.prototype.I = function(a) {
            if (!("*" !== this.m && a.origin !== this.m || !this.lb && a.source != this.l)) {
                var b = null;
                try {
                    b = JSON.parse(a.data)
                } catch (c) {}
                if (_.ha(b) && (a = b.i,
                b.c === this.B && a != this.o)) {
                    if (2 !== this.status)
                        try {
                            this.status = 2,
                                js(this),
                            this.j && (this.j(),
                                this.j = null)
                        } catch (c) {}
                    a = b.s;
                    b = b.p;
                    if ("string" === typeof a && ("string" === typeof b || _.ha(b)) && this.A.hasOwnProperty(a))
                        this.A[a](b)
                }
            }
        }
        ;
        var js = function(a) {
            var b = {};
            b.c = a.B;
            b.i = a.o;
            a.F && (b.e = a.F);
            a.l.postMessage(JSON.stringify(b), a.m)
        };
        is.prototype.H = function() {
            if (1 === this.status) {
                try {
                    this.l.postMessage && js(this)
                } catch (a) {}
                window.setTimeout((0,
                    _.Re)(this.H, this), 50)
            }
        }
        ;
        is.prototype.connect = function(a) {
            a && (this.j = a);
            _.E(window, "message", this.K);
            this.J && this.H()
        }
        ;
        var ks = function(a, b, c) {
            a.A[b] = c
        }
            , ls = function(a, b, c) {
            var d = {};
            d.c = a.B;
            d.i = a.o;
            d.s = b;
            d.p = c;
            try {
                a.l.postMessage(JSON.stringify(d), a.m)
            } catch (e) {}
        };
        is.prototype.G = function() {
            this.status = 3;
            _.uc(window, "message", this.K);
            _.tk.prototype.G.call(this)
        }
        ;
        var ms = function() {
            this.j = []
        }
            , os = function(a, b, c, d, e) {
            a.j.push(new ns(b,c,d,e))
        }
            , ps = function(a, b, c, d) {
            os(a, b, c, d + "px", void 0)
        }
            , qs = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.l.style.removeProperty(c.j),
                    c.l.style.setProperty(c.j, String(c.G), c.B)) : c.l.style[c.j] = c.G
            }
            a.j.length = 0
        }
            , ns = function(a, b, c, d) {
            this.l = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.G = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.B = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j),
                a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
        var ts, ss, vs;
        _.rs = function(a) {
            this.j = _.Nb(a).floatingAdsStacking
        }
        ;
        ts = function(a) {
            var b = a.j.nextRestrictionId++;
            a.j.maxZIndexRestrictions[b] = 2147483646;
            ss(a);
            return b
        }
        ;
        _.us = function(a) {
            a = _.bi(a.j.maxZIndexRestrictions);
            return a.length ? Math.min.apply(null, a) : null
        }
        ;
        ss = function(a) {
            var b = _.us(a);
            _.Ue(a.j.maxZIndexListeners, function(c) {
                return c(b)
            })
        }
        ;
        vs = function(a) {
            this.m = a;
            this.j = null
        }
        ;
        var ws, xs;
        ws = {
            overflow: "hidden",
            position: "fixed"
        };
        _.ys = function(a, b) {
            if (!a.body)
                return null;
            var c = new xs;
            c.apply(a, b);
            return function() {
                _.aj(a.body, {
                    filter: c.j,
                    webkitFilter: c.j,
                    overflow: c.l,
                    position: c.G,
                    top: c.B
                });
                b.scrollTo(0, c.m)
            }
        }
        ;
        xs = function() {
            this.j = this.B = this.G = this.l = null;
            this.m = 0
        }
        ;
        xs.prototype.apply = function(a, b) {
            this.l = a.body.style.overflow;
            this.G = a.body.style.position;
            this.B = a.body.style.top;
            this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.m = _.Pm(b);
            _.aj(a.body, "top", -this.m + "px");
            var c = _.Nm(b).clientHeight;
            1001 < _.Nm(b).clientWidth || 1001 < c || _.aj(a.body, ws)
        }
        ;
        _.zs = function() {
            this.j = null
        }
        ;
        Le(_.zs);
        var As = function(a, b) {
            b = void 0 === b ? 500 : b;
            _.tk.call(this);
            this.m = a;
            this.j = null;
            this.B = {};
            this.o = 0;
            this.A = b;
            this.l = null
        };
        _.L(As, _.tk);
        As.prototype.G = function() {
            this.B = {};
            this.l && (_.uc(this.m, "message", this.l),
                delete this.l);
            delete this.B;
            delete this.m;
            delete this.j;
            _.tk.prototype.G.call(this)
        }
        ;
        var Cs = function(a) {
            return "function" === typeof a.m.__uspapi || null != Bs(a)
        }
            , Es = function(a, b) {
            var c = {};
            if (Cs(a)) {
                var d = _.Ze(function() {
                    return b(c)
                });
                Ds(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.A)
            } else
                b(c)
        }
            , Ds = function(a, b) {
            if ("function" === typeof a.m.__uspapi)
                a = a.m.__uspapi,
                    a("getUSPData", 1, b);
            else if (Bs(a)) {
                Fs(a);
                var c = ++a.o;
                a.B[c] = b;
                a.j && (b = {},
                    a.j.postMessage((b.__uspapiCall = {
                        command: "getUSPData",
                        version: 1,
                        callId: c
                    },
                        b), "*"))
            }
        }
            , Bs = function(a) {
            if (a.j)
                return a.j;
            a.j = pi(a.m, "__uspapiLocator");
            return a.j
        }
            , Fs = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__uspapiReturn;
                    a.B[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }
                ,
                _.E(a.m, "message", a.l))
        };
        var Gs = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Gs, P);
        var Is = function(a) {
            Q(this, a, 0, -1, Hs, null)
        };
        N(Is, P);
        var Hs = [1, 2];
        var Js = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Js, P);
        var Ks = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Ks, P);
        var Ls = function(a) {
            _.tk.call(this);
            this.m = a;
            this.l = this.j = null;
            this.B = {};
            this.o = 0;
            this.j || (this.m.googlefc ? this.j = this.m : this.j = pi(this.m, "googlefcPresent"))
        };
        _.L(Ls, _.tk);
        var Ns = function(a, b, c) {
            if (a.j)
                if (a.j === a.m)
                    a = a.m.googlefc || (a.m.googlefc = {}),
                        a.__fci = a.__fci || [],
                        a.__fci.push(b, function(f) {
                            c(sh(Ks, f))
                        });
                else {
                    Ms(a);
                    var d = a.o++;
                    a.B[d] = c;
                    var e = {};
                    a.j.postMessage((e.__fciCall = {
                        command: b,
                        callId: d
                    },
                        e), "*")
                }
        }
            , Os = function(a, b) {
            return new D.Promise(function(c) {
                    Ns(a, b, c)
                }
            )
        }
            , Ms = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c = sh(Ks, b.data.__fciReturn);
                    (0,
                        a.B[J(c, 1)])(c)
                } catch (d) {}
            }
                ,
                _.E(a.m, "message", a.l))
        }
            , Ps = function(a, b, c, d) {
            if (!b)
                return D.Promise.resolve(null);
            var e = R(b, Gs, 3);
            b = R(b, Js, 2);
            return e && b && 1 === J(b, 1) && 2 === J(e, 1) ? Os(a, "getM25Consent").then(function(f) {
                var g = R(f, Is, 4);
                if (g) {
                    if (f = d,
                        c) {
                        var h = J(g, 1);
                        h && _.F(h, "includes").call(h, c) && (f = !1);
                        (g = J(g, 2)) && _.F(g, "includes").call(g, c) && (f = !0)
                    }
                } else
                    f = null;
                return f
            }) : D.Promise.resolve(null)
        };
        var Qs = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        }
            , Rs = function(a, b) {
            b = void 0 === b ? 500 : b;
            _.tk.call(this);
            this.m = a;
            this.j = null;
            this.B = {};
            this.A = 0;
            this.o = b;
            this.l = null
        };
        _.L(Rs, _.tk);
        Rs.prototype.G = function() {
            this.B = {};
            this.l && (_.uc(this.m, "message", this.l),
                delete this.l);
            delete this.B;
            delete this.m;
            delete this.j;
            _.tk.prototype.G.call(this)
        }
        ;
        var Ts = function(a) {
            return "function" === typeof a.m.__tcfapi || null != Ss(a)
        };
        Rs.prototype.addEventListener = function(a) {
            console.log("addEventListener functionn");
            var b = {}
                , c = _.Ze(function() {
                return a(b)
            })
                , d = 0;
            -1 !== this.o && (d = setTimeout(function() {
                console.log("timeout fired");
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.o));
            var e = function(f, g) {
                clearTimeout(d);
                f ? (b = f,
                    b.internalErrorState = Qs(b),
                g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
                    b.internalErrorState = 3);
                console.log(b);
                console.log(f);
                console.log(g);
                a(b)
            };
            try {
                Us(this, "addEventListener", e)
            } catch (f) {
                console.log("catch");
                b.tcString = "tcunavailable",
                    b.internalErrorState = 3,
                d && (clearTimeout(d),
                    d = 0),
                    c()
            }
        }
        ;
        Rs.prototype.removeEventListener = function(a) {
            a && a.listenerId && Us(this, "removeEventListener", null, a.listenerId)
        }
        ;
        var Ws = function(a, b) {
            var c = {
                internalErrorState: 0
            }
                , d = _.Ze(function() {
                return b(c)
            })
                , e = 0;
            -1 !== a.o && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.o));
            Us(a, "addEventListener", function(f, g) {
                e && (clearTimeout(e),
                    e = 0);
                g && (c = f);
                c.internalErrorState = Qs(c);
                0 != c.internalErrorState && (c.tcString = "tcunavailable");
                if (0 != c.internalErrorState || Vs(c))
                    Us(a, "removeEventListener", null, c.listenerId),
                        d()
            })
        }
            , Us = function(a, b, c, d) {
            c || (c = function() {}
            );
            if ("function" === typeof a.m.__tcfapi)
                console.log("tcfapi found",a);
                a = a.m.__tcfapi,
                    a(b, 2, c, d);
            else if (Ss(a)) {
                console.log("locator found", a);
                Xs(a);
                var e = ++a.A;
                a.B[e] = c;
                a.j && (c = {},
                    a.j.postMessage((c.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: e,
                        parameter: d
                    },
                        c), "*"));
                console.log("post message sent",c);
            } else
                c({}, !1)
        }
            , Ss = function(a) {
            if (a.j)
                return a.j;
            a.j = pi(a.m, "__tcfapiLocator");
            return a.j
        }
            , Xs = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    console.log("api return",c);
                    a.B[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }
                ,
                _.E(a.m, "message", a.l))
        }
            , Vs = function(a) {
            if (!1 === a.gdprApplies)
                return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Qs(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
        };
        var Ys = function(a, b) {
            if (!a)
                return a;
            var c = a.toLowerCase();
            return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<!doctype html><html><head>" + (void 0 === b ? "" : b) + "</head><body>" + a + "</body></html>"
        };
        var Zs = function(a, b, c, d, e, f) {
            this.l = Mi(a);
            this.m = Mi(b);
            this.G = c;
            this.j = Mi(d);
            this.B = e;
            this.o = f
        }
            , $s = function(a) {
            return JSON.stringify({
                windowCoords_t: a.l.top,
                windowCoords_r: a.l.right,
                windowCoords_b: a.l.bottom,
                windowCoords_l: a.l.left,
                frameCoords_t: a.m.top,
                frameCoords_r: a.m.right,
                frameCoords_b: a.m.bottom,
                frameCoords_l: a.m.left,
                styleZIndex: a.G,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.B,
                yInView: a.o
            })
        }
            , at = function(a, b) {
            var c = window
                , d = c.screenX || c.screenLeft || 0
                , e = c.screenY || c.screenTop || 0;
            c = new _.Li(e,d + (c.outerWidth || document.documentElement.clientWidth || 0),e + (c.outerHeight || document.documentElement.clientHeight || 0),d);
            var f = fj(a);
            d = _.tb(_.ub, a);
            var g = new Ni(f.x,f.y,d.width,d.height);
            d = Oi(g);
            e = String(sb(a, "zIndex"));
            var h = new _.Li(0,Infinity,Infinity,0);
            for (var k = Dh(a), l = k.j.body, n = k.j.documentElement, m = Ih(k.j); a = ej(a); )
                if (!(_.pg && 0 == a.clientWidth || tg && 0 == a.clientHeight && a == l) && a != l && a != n && "visible" != sb(a, "overflow")) {
                    var p = fj(a)
                        , q = new _.Cb(a.clientLeft,a.clientTop);
                    p.x += q.x;
                    p.y += q.y;
                    h.top = Math.max(h.top, p.y);
                    h.right = Math.min(h.right, p.x + a.clientWidth);
                    h.bottom = Math.min(h.bottom, p.y + a.clientHeight);
                    h.left = Math.max(h.left, p.x)
                }
            a = m.scrollLeft;
            m = m.scrollTop;
            h.left = Math.max(h.left, a);
            h.top = Math.max(h.top, m);
            k = _.Hh(Jh(k.j) || window);
            h.right = Math.min(h.right, a + k.width);
            h.bottom = Math.min(h.bottom, m + k.height);
            h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new Ni(h.left,h.top,h.right - h.left,h.bottom - h.top) : null;
            b ? (k = b.boundingClientRect,
                b = new Ni(f.x - k.left,f.y - k.top,b.rootBounds.width,b.rootBounds.height)) : b = h;
            k = h ? Pi(g, h) : null;
            h = f = 0;
            k && !(new _.Ah(k.width,k.height)).isEmpty() && (f = k.width / g.width,
                h = k.height / g.height);
            k = new _.Li(0,0,0,0);
            if (a = b)
                (g = Pi(g, b)) ? (m = Oi(b),
                    l = Oi(g),
                    a = l.right != m.left && m.right != l.left,
                    m = l.bottom != m.top && m.bottom != l.top,
                    a = (0 != g.width || a) && (0 != g.height || m)) : a = !1;
            a && (k = new _.Li(Math.max(d.top - b.top, 0),Math.max(b.left + b.width - d.right, 0),Math.max(b.top + b.height - d.bottom, 0),Math.max(d.left - b.left, 0)));
            return new Zs(c,d,e,k,f,h)
        };
        var bt = function(a) {
            this.G = a;
            this.B = null;
            this.H = this.status = 0;
            this.m = null;
            this.ba = "sfchannel" + a
        };
        var um = xm;
        var ct = !1
            , dt = ""
            , et = function(a) {
            a = a.match(/[\d]+/g);
            if (!a)
                return "";
            a.length = 3;
            return a.join(".")
        };
        (function() {
                if (navigator.plugins && navigator.plugins.length) {
                    var a = navigator.plugins["Shockwave Flash"];
                    if (a && (ct = !0,
                        a.description)) {
                        dt = et(a.description);
                        return
                    }
                    if (navigator.plugins["Shockwave Flash 2.0"]) {
                        ct = !0;
                        dt = "2.0.0.11";
                        return
                    }
                }
                if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"],
                    ct = !(!a || !a.enabledPlugin))) {
                    dt = et(a.enabledPlugin.description);
                    return
                }
                if ("undefined" != typeof ActiveXObject) {
                    try {
                        var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                        ct = !0;
                        dt = et(b.GetVariable("$version"));
                        return
                    } catch (c) {}
                    try {
                        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                        ct = !0;
                        dt = "6.0.21";
                        return
                    } catch (c) {}
                    try {
                        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                            ct = !0,
                            dt = et(b.GetVariable("$version"))
                    } catch (c) {}
                }
            }
        )();
        var ft = ct
            , gt = dt;
        var ht = function(a) {
            this.j = a
        };
        var it = function(a, b) {
            this.zb = a;
            this.Ab = b;
            this.m = this.j = !1
        };
        var jt = function(a, b, c, d, e, f, g, h, k) {
            k = void 0 === k ? [] : k;
            this.m = a;
            this.l = b;
            this.G = c;
            this.permissions = d;
            this.metadata = e;
            this.B = f;
            this.lb = g;
            this.hostpageLibraryTokens = k;
            this.j = "";
            this.Xa = h
        };
        var kt = function(a, b) {
            this.m = a;
            this.G = b
        };
        kt.prototype.j = function(a) {
            this.G && a && (a.sentinel = this.G);
            return JSON.stringify(a)
        }
        ;
        var lt = function(a, b, c) {
            kt.call(this, a, void 0 === c ? "" : c);
            this.version = b
        };
        _.L(lt, kt);
        lt.prototype.j = function() {
            return kt.prototype.j.call(this, {
                uid: this.m,
                version: this.version
            })
        }
        ;
        var mt = function(a, b, c, d) {
            kt.call(this, a, void 0 === d ? "" : d);
            this.B = b;
            this.l = c
        };
        _.L(mt, kt);
        mt.prototype.j = function() {
            return kt.prototype.j.call(this, {
                uid: this.m,
                initialWidth: this.B,
                initialHeight: this.l
            })
        }
        ;
        var nt = function(a, b, c) {
            kt.call(this, a, void 0 === c ? "" : c);
            this.description = b
        };
        _.L(nt, kt);
        nt.prototype.j = function() {
            return kt.prototype.j.call(this, {
                uid: this.m,
                description: this.description
            })
        }
        ;
        var ot = function(a, b, c, d) {
            kt.call(this, a, void 0 === d ? "" : d);
            this.l = b;
            this.push = c
        };
        _.L(ot, kt);
        ot.prototype.j = function() {
            return kt.prototype.j.call(this, {
                uid: this.m,
                expand_t: this.l.top,
                expand_r: this.l.right,
                expand_b: this.l.bottom,
                expand_l: this.l.left,
                push: this.push
            })
        }
        ;
        var pt = function(a, b) {
            kt.call(this, a, void 0 === b ? "" : b)
        };
        _.L(pt, kt);
        pt.prototype.j = function() {
            return kt.prototype.j.call(this, {
                uid: this.m
            })
        }
        ;
        var qt = function(a, b, c) {
            kt.call(this, a, void 0 === c ? "" : c);
            this.B = b
        };
        _.L(qt, kt);
        qt.prototype.j = function() {
            var a = {
                uid: this.m,
                newGeometry: $s(this.B)
            };
            return kt.prototype.j.call(this, a)
        }
        ;
        var rt = function(a, b, c, d, e, f) {
            qt.call(this, a, c, void 0 === f ? "" : f);
            this.success = b;
            this.l = d;
            this.push = e
        };
        _.L(rt, qt);
        rt.prototype.j = function() {
            var a = {
                uid: this.m,
                success: this.success,
                newGeometry: $s(this.B),
                expand_t: this.l.top,
                expand_r: this.l.right,
                expand_b: this.l.bottom,
                expand_l: this.l.left,
                push: this.push
            };
            this.G && (a.sentinel = this.G);
            return JSON.stringify(a)
        }
        ;
        var st = function(a, b, c, d) {
            kt.call(this, a, void 0 === d ? "" : d);
            this.width = b;
            this.height = c
        };
        _.L(st, kt);
        st.prototype.j = function() {
            return kt.prototype.j.call(this, {
                uid: this.m,
                width: this.width,
                height: this.height
            })
        }
        ;
        var tt = function(a, b, c, d, e) {
            var f = c;
            f && (f = "?" + f);
            b = (void 0 === e ? "//tpc.googlesyndication.com" : e) + ("/safeframe/" + b + "/html/container.html" + f);
            e = a;
            for (f = 0; e != e.parent; )
                f++,
                    e = e.parent;
            (e = f) && (b += (c ? "&" : "?") + "n=" + e);
            (c = d) || (c = ii(a, !1));
            return (c ? "https:" : "http:") + b
        };
        var ut = function() {
            var a = window
                , b = _.sj(a);
            b && (b = {
                label: "2",
                type: 9,
                value: b
            },
                a = a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            2048 > a.length && a.push(b))
        }
            , vt = function(a, b, c) {
            var d = window;
            return function() {
                var e = _.sj()
                    , f = 3;
                try {
                    var g = b.apply(this, arguments)
                } catch (h) {
                    f = 13;
                    if (c)
                        return c(a, h),
                            g;
                    throw h;
                } finally {
                    d.google_measure_js_timing && e && (e = {
                        label: a.toString(),
                        value: e,
                        duration: (_.sj() || 0) - e,
                        type: f
                    },
                        f = d.google_js_reporting_queue = d.google_js_reporting_queue || [],
                    2048 > f.length && f.push(e))
                }
                return g
            }
        };
        var At = function(a) {
            bt.call(this, a.uniqueId);
            var b = this;
            this.K = a.kd;
            this.X = 1 == a.size;
            this.V = new it(a.permissions.zb && !this.X,a.permissions.Ab && !this.X);
            this.o = a.Zb;
            this.ea = a.hostpageLibraryTokens || [];
            var c = window.location;
            this.da = "file:" == c.protocol ? "*" : c.protocol + "//" + c.host;
            this.ka = !!a.lb;
            c = !1 === a.Mc ? "https:" : window.location.protocol;
            this.O = a.Ja ? "//" + a.Ja + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
            this.ga = a.va ? "*" : Qc(a.Xa) ? "https://secureframe.doubleclick.net" : c + this.O;
            this.Y = !!a.Xc;
            this.ha = wt(a);
            this.l = new ms;
            xt(this, a.Zb, a.size);
            this.B = this.$ = at(a.Zb);
            this.T = a.zd || "1-0-37";
            this.fa = a.Vc || "";
            this.Z = void 0 === a.Xa ? null : a.Xa;
            yt(this, a);
            this.U = null;
            this.I = vt(412, function() {
                return zt(b)
            }, a.qa);
            this.J = -1;
            this.F = 0;
            this.A = null;
            !a.Le || "function" !== typeof IntersectionObserver || vg || ug || (this.A = new IntersectionObserver(vt(414, function(e) {
                b.U = e[e.length - 1];
                zt(b)
            }, a.qa)));
            this.m = new is(this.ba,this.j.contentWindow,this.ga,!1);
            ks(this.m, "init_done", (0,
                _.Re)(this.Rb, this));
            ks(this.m, "register_done", (0,
                _.Re)(this.cc, this));
            ks(this.m, "report_error", (0,
                _.Re)(this.hc, this));
            ks(this.m, "expand_request", (0,
                _.Re)(this.Ob, this));
            ks(this.m, "collapse_request", (0,
                _.Re)(this.Lb, this));
            ks(this.m, "creative_geometry_update", (0,
                _.Re)(this.R, this));
            this.m.connect((0,
                _.Re)(this.Vb, this));
            var d = vt(415, function() {
                b.j && (b.j.name = "",
                a.Cc && a.Cc(),
                    _.uc(b.j, "load", d))
            }, a.qa);
            _.E(this.j, "load", d);
            this.Rb = vt(413, this.Rb, a.qa);
            this.cc = vt(417, this.cc, a.qa);
            this.hc = vt(419, this.hc, a.qa);
            this.Ob = vt(411, this.Ob, a.qa);
            this.Lb = vt(409, this.Lb, a.qa);
            this.R = vt(410, this.R, a.qa);
            this.Vb = vt(416, this.Vb, a.qa)
        };
        _.L(At, bt);
        var xt = function(a, b, c) {
            a.X ? (b.style.width = _.hj("100%", !0),
                b.style.height = _.hj("auto", !0)) : (b.style.width = _.hj(c.width, !0),
                b.style.height = _.hj(c.height, !0))
        }
            , yt = function(a, b) {
            var c = Dh(a.o), d, e = b.va ? "" : null != (d = b.content) ? d : "";
            d = {
                shared: {
                    sf_ver: a.T,
                    ck_on: wm() ? 1 : 0,
                    flash_ver: ft ? gt : "0"
                }
            };
            e = a.T + ";" + e.length + ";" + e;
            d = new jt(a.G,a.da,a.$,a.V,new ht(d),a.X,a.ka,a.Z,a.ea);
            var f = {};
            f.uid = d.m;
            f.hostPeerName = d.l;
            f.initialGeometry = $s(d.G);
            var g = d.permissions;
            g = JSON.stringify({
                expandByOverlay: g.zb,
                expandByPush: g.Ab,
                readCookie: g.j,
                writeCookie: g.m
            });
            f = (f.permissions = g,
                f.metadata = JSON.stringify(d.metadata.j),
                f.reportCreativeGeometry = d.B,
                f.isDifferentSourceWindow = d.lb,
                f.goog_safeframe_hlt = Gm(d.hostpageLibraryTokens),
                f.encryptionMode = d.Xa,
                f);
            d.j && (f.sentinel = d.j);
            d = JSON.stringify(f);
            f = e + d;
            d = !1 === b.Mc;
            if (a.Y && b.size instanceof _.Ah) {
                e = Qc(b.Xa) ? "https://secureframe.doubleclick.net" : Jh(c.j).location.protocol + a.O;
                g = b.zc;
                var h = b.size
                    , k = Jh(Dh(a.o).j);
                Or || Xh(k.document, Pr);
                Or++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                    a: g,
                    b: e,
                    c: h.width,
                    d: h.height,
                    e: "sf-gdn-exp-" + Or,
                    f: void 0,
                    g: void 0,
                    h: void 0,
                    i: void 0
                })
            }
            var l = b.size;
            g = b.Gb;
            k = b.dd || "";
            e = b.ua;
            h = void 0 === b.va;
            var n = l.width;
            l = l.height;
            a.X && (l = n = 0);
            var m = {};
            f = (m.id = b.zc,
                m.title = k,
                m.name = f,
                m.scrolling = "no",
                m.marginWidth = "0",
                m.marginHeight = "0",
                m.width = String(n),
                m.height = String(l),
                m["data-is-safeframe"] = "true",
                m);
            h && (h = Jh(c.j),
                d = Qc(a.Z) ? "https://secureframe.doubleclick.net/container.html?ecs=" + g : tt(h, a.T, a.fa, d, a.O),
                g = [],
            a.Y && (k = ji(h.location.href),
                h = g.push,
                k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.G, "&p=", encodeURIComponent(_.C.document.location.protocol), "//", encodeURIComponent(_.C.document.location.host)].join(""),
                h.call(g, k)),
            g.length && (d += "#" + g.join("&")),
                f.src = d);
            null !== a.ha && (f.sandbox = a.ha);
            e && (f.allow = e);
            b.va ? (a.j = b.va,
                c.l(a.j, f)) : (b = {},
                b = (b.frameborder = 0,
                    b.allowTransparency = "true",
                    b.style = "border:0;vertical-align:bottom;",
                    b.src = "about:blank",
                    b),
            f && ef(b, f),
                c = c.m("IFRAME", b),
                a.j = c);
            a.X && (a.j.style.minWidth = "100%");
            a.o.appendChild(a.j)
        };
        _.r = At.prototype;
        _.r.Vb = function() {
            this.A && this.j ? this.A.observe(this.j) : (_.E(window, "resize", this.I),
                _.E(window, "scroll", this.I))
        }
        ;
        _.r.Rb = function(a) {
            try {
                if (0 != this.status)
                    throw Error("Container already initialized");
                if ("string" !== typeof a)
                    throw Error("Could not parse serialized message");
                var b = JSON.parse(a);
                if (!_.ha(b) || !Pc(b.uid) || "string" !== typeof b.version)
                    throw Error("Cannot parse JSON message");
                var c = new lt(b.uid,b.version,b.sentinel);
                if (this.G != c.m || this.T != c.version)
                    throw Error("Wrong source container");
                this.status = 1
            } catch (d) {
                this.K.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
            }
        }
        ;
        _.r.cc = function(a) {
            try {
                if (1 != this.status)
                    throw Error("Container not initialized");
                if ("string" !== typeof a)
                    throw Error("Could not parse serialized message");
                var b = JSON.parse(a);
                if (!_.ha(b) || !Pc(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight)
                    throw Error("Cannot parse JSON message");
                if (this.G != (new mt(b.uid,b.initialWidth,b.initialHeight,b.sentinel)).m)
                    throw Error("Wrong source container");
                this.status = 2
            } catch (c) {
                this.K.error("Invalid REGISTER_DONE message. Reason: " + c.message)
            }
        }
        ;
        _.r.hc = function(a) {
            try {
                if ("string" !== typeof a)
                    throw Error("Could not parse serialized message");
                var b = JSON.parse(a);
                if (!_.ha(b) || !Pc(b.uid) || "string" !== typeof b.description)
                    throw Error("Cannot parse JSON message");
                var c = new nt(b.uid,b.description,b.sentinel);
                if (this.G != c.m)
                    throw Error("Wrong source container");
                this.K.info("Ext reported an error. Description: " + c.description)
            } catch (d) {
                this.K.error("Invalid REPORT_ERROR message. Reason: " + d.message)
            }
        }
        ;
        _.r.Ob = function(a) {
            try {
                if (2 != this.status)
                    throw Error("Container is not registered");
                if (0 != this.H)
                    throw Error("Container is not collapsed");
                if ("string" !== typeof a)
                    throw Error("Could not parse serialized message");
                var b = JSON.parse(a);
                if (!_.ha(b) || !Pc(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push)
                    throw Error("Cannot parse JSON message");
                var c = new ot(b.uid,new _.Li(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push,b.sentinel);
                if (this.G != c.m)
                    throw Error("Wrong source container");
                if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right))
                    throw Error("Invalid expansion amounts");
                var d;
                if (d = c.push && this.V.Ab || !c.push && this.V.zb) {
                    var e = c.l
                        , f = c.push
                        , g = this.B = at(this.j);
                    if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                        if (!f)
                            for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                                os(this.l, h, "overflowX", "visible", "important"),
                                    os(this.l, h, "overflowY", "visible", "important");
                        var k = this.B.m
                            , l = this.B.m
                            , n = Oi(new Ni(0,0,k.right - k.left,l.bottom - l.top));
                        _.ha(e) ? (n.top -= e.top,
                            n.right += e.right,
                            n.bottom += e.bottom,
                            n.left -= e.left) : (n.top -= e,
                            n.right += Number(void 0),
                            n.bottom += Number(void 0),
                            n.left -= Number(void 0));
                        os(this.l, this.o, "position", "relative");
                        os(this.l, this.j, "position", "absolute");
                        f ? (ps(this.l, this.o, "width", n.right - n.left),
                            ps(this.l, this.o, "height", n.bottom - n.top)) : os(this.l, this.j, "zIndex", "10000");
                        ps(this.l, this.j, "width", n.right - n.left);
                        ps(this.l, this.j, "height", n.bottom - n.top);
                        ps(this.l, this.j, "left", n.left);
                        ps(this.l, this.j, "top", n.top);
                        this.H = 2;
                        this.B = at(this.j);
                        d = !0
                    } else
                        d = !1
                }
                a = d;
                ls(this.m, "expand_response", (new rt(this.G,a,this.B,c.l,c.push)).j());
                if (!a)
                    throw Error("Viewport or document body not large enough to expand into.");
            } catch (m) {
                this.K.error("Invalid EXPAND_REQUEST message. Reason: " + m.message)
            }
        }
        ;
        _.r.Lb = function(a) {
            try {
                if (2 != this.status)
                    throw Error("Container is not registered");
                if (2 != this.H)
                    throw Error("Container is not expanded");
                if ("string" !== typeof a)
                    throw Error("Could not parse serialized message");
                var b = JSON.parse(a);
                if (!_.ha(b) || !Pc(b.uid))
                    throw Error("Cannot parse JSON message");
                if (this.G != (new pt(b.uid,b.sentinel)).m)
                    throw Error("Wrong source container");
                qs(this.l);
                this.H = 0;
                this.j && (this.B = at(this.j));
                ls(this.m, "collapse_response", (new qt(this.G,this.B)).j())
            } catch (c) {
                this.K.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
            }
        }
        ;
        var zt = function(a) {
            if (1 == a.status || 2 == a.status)
                switch (a.F) {
                    case 0:
                        Bt(a);
                        a.J = window.setTimeout((0,
                            _.Re)(a.ca, a), 1E3);
                        a.F = 1;
                        break;
                    case 1:
                        a.F = 2;
                        break;
                    case 2:
                        a.F = 2
                }
        };
        At.prototype.R = function(a) {
            try {
                if ("string" !== typeof a)
                    throw Error("Could not parse serialized message");
                var b = JSON.parse(a);
                if (!_.ha(b) || !Pc(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel)
                    throw Error("Cannot parse JSON message");
                var c = new st(b.uid,b.width,b.height,b.sentinel);
                if (this.G != c.m)
                    throw Error("Wrong source container");
                var d = String(c.height);
                this.X ? d != this.j.height && (this.j.height = d,
                    zt(this)) : this.K.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            } catch (e) {
                this.K.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + e.message)
            }
        }
        ;
        At.prototype.ca = function() {
            if (1 == this.status || 2 == this.status)
                switch (this.F) {
                    case 1:
                        this.F = 0;
                        break;
                    case 2:
                        Bt(this),
                            this.J = window.setTimeout((0,
                                _.Re)(this.ca, this), 1E3),
                            this.F = 1
                }
        }
        ;
        var Bt = function(a) {
            a.B = at(a.j, a.U);
            a.U = null;
            ls(a.m, "geometry_update", (new qt(a.G,a.B)).j())
        }
            , wt = function(a) {
            var b = null;
            a.Jc && (b = a.Jc);
            return null == b ? null : b.join(" ")
        }
            , Ct = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"]
            , Dt = ["allow-top-navigation"]
            , Et = ["allow-same-origin"]
            , Ft = mi([].concat(_.Ib(Ct), _.Ib(Dt)));
        mi([].concat(_.Ib(Ct), _.Ib(Et)));
        mi([].concat(_.Ib(Ct), _.Ib(Dt), _.Ib(Et)));
        var Rc = function(a, b, c, d) {
            try {
                var e = new up(b,c);
                e.mb = d;
                e.L = a;
                fc(new tp(e))
            } catch (f) {}
        };
        var Gt = function(a) {
            Q(this, a, 0, -1, null, null)
        };
        N(Gt, P);
        var Ht = function() {};
        var It = [.05, .1, .2, .5]
            , Jt = [0, .5, 1]
            , Kt = function(a) {
            a = yc(a);
            if (!a)
                return -1;
            try {
                var b = em(a.document);
                var c = new _.Ah(b.clientWidth,b.clientHeight)
            } catch (d) {
                c = new _.Ah(-12245933,-12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        }
            , Lt = function(a, b) {
            return 0 > a ? [] : _.Gc(It, function(c) {
                return Math.min(a / b * c, 1)
            })
        }
            , Ot = function(a) {
            this.j = a.L;
            this.G = a.kb;
            this.F = a.tb;
            this.l = null;
            this.B = a.qa;
            this.m = Mt(this);
            this.K = a.Dd || !1;
            this.A = a.Ie || !1;
            this.o = null;
            this.A && Nt(this)
        };
        Ot.prototype.getSlotId = function() {
            return this.l
        }
        ;
        var Qt = function(a, b) {
            if (a.m) {
                if (null != a.l) {
                    try {
                        Pt(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.B && a.B(c)
                    }
                    a.m && a.m.unobserve(a.G);
                    a.o = null
                }
                a.l = b;
                a.m.observe(a.G);
                a.A && (a.G.getBoundingClientRect(),
                Km(a.j.document) || yc(a.j),
                    a.o = new Ht)
            }
        }
            , Mt = function(a) {
            var b = a.G.offsetWidth * a.G.offsetHeight
                , c = Kt(a.j);
            b = [].concat(_.Ib(Jt), _.Ib(Lt(c, b)));
            ja(b);
            return _.C.IntersectionObserver ? new _.C.IntersectionObserver(function(d) {
                    return Rt(a, d)
                }
                ,{
                    threshold: b
                }) : new Jd(function(d) {
                    return Rt(a, d)
                }
                ,{
                    threshold: b
                })
        }
            , Rt = function(a, b) {
            try {
                var c = Kt(a.j);
                _.Ue(b, function(d) {
                    var e = Math.round(d.time)
                        , f = d.boundingClientRect.width * d.boundingClientRect.height
                        , g = d.intersectionRect.width * d.intersectionRect.height;
                    d = d.isIntersecting;
                    a.K && Pt(a, e, f, g, c, d)
                })
            } catch (d) {
                a.B && a.B(d)
            }
        }
            , Pt = function(a, b, c, d, e, f) {
            if (null == a.l)
                throw Error("Not Attached.");
            var g = new Gt;
            c = G(g, 1, c);
            d = G(c, 2, d);
            e = G(d, 3, e);
            b = G(e, 4, b);
            b = G(b, 5, f);
            f = new Rg;
            e = J(b, 4);
            null != e && null != e && Xg(f, 4, e);
            e = J(b, 2);
            null != e && null != e && Xg(f, 2, e);
            e = J(b, 1);
            null != e && null != e && Xg(f, 1, e);
            e = J(b, 3);
            null != e && null != e && Xg(f, 3, e);
            e = J(b, 5);
            null != e && (b = e,
            null != b && (lg(f.j, 40),
                f.j.j.push(b ? 1 : 0)));
            f = Ug(f);
            f = Pg(f, 4);
            Ja(a.F, "1", 10, f, void 0, a.l)
        }
            , Nt = function(a) {
            var b = Jm(a.j.document);
            b && _.E(a.j.document, b, function() {})
        };
        var St = function(a, b) {
            this.j = a;
            this.m = b
        }
            , Tt = function(a) {
            var b = qi("google_ads_top_frame", a.j);
            b = b && b.contentWindow;
            if (!b)
                return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
        var Ut = function(a) {
            return a.some(function(b) {
                return 6 === b.state
            })
        }
            , Vt = function(a, b) {
            a = a.filter(function(c) {
                return 6 === c.state
            }).map(function(c) {
                return c.issuerOrigin
            });
            if (0 == a.length)
                return null;
            a = {
                type: /Chrome\/8[4-7]/.test(window.navigator.userAgent) ? "send-srr" : "send-redemption-record",
                issuers: a,
                refreshPolicy: "none",
                signRequestData: "include",
                includeTimestampHeader: !0,
                additionalSignedHeaders: ["sec-time", /Chrome\/8[4-7]/.test(window.navigator.userAgent) ? "Sec-Signed-Redemption-Record" : "Sec-Redemption-Record"]
            };
            b && 0 < _.F(Object, "keys").call(Object, b).length && (a.additionalSigningData = Qg(JSON.stringify(b), 3));
            return a
        }
            , Wt = function(a) {
            var b = _.t(250)
                , c = _.t(252);
            if (a.setTrustToken && b && Ut(b))
                try {
                    var d = Vt(b, c);
                    d && a.setTrustToken(d)
                } catch (e) {}
        };
        var Xt = function(a, b, c) {
            return a.IntersectionObserver ? new a.IntersectionObserver(c,b) : new Jd(c,b)
        }
            , Yt = function(a, b, c) {
            _.E(a, b, c);
            return function() {
                return _.uc(a, b, c)
            }
        }
            , Zt = null
            , $t = function() {
            Zt = _.kc()
        }
            , au = function(a, b) {
            return b ? null === Zt ? (_.E(a, "mousemove", $t, {
                passive: !0
            }),
                _.E(a, "scroll", $t, {
                    passive: !0
                }),
                $t(),
                !1) : _.kc() - Zt >= 1E3 * b : !1
        }
            , bu = function(a) {
            var b = a.L
                , c = a.element
                , d = a.Hd
                , e = a.Fd
                , f = void 0 === a.Lc ? 0 : a.Lc
                , g = a.Kb
                , h = a.Yc
                , k = void 0 === a.Bc ? !0 : a.Bc
                , l = null
                , n = !1
                , m = !1
                , p = []
                , q = (void 0 === a.Bb ? Xt : a.Bb)(b, void 0 === a.options ? {} : a.options, function(v, B) {
                try {
                    var I = function() {
                        p.length || (e && (p.push(Yt(c, "mouseenter", function() {
                            n = !0;
                            I()
                        })),
                            p.push(Yt(c, "mouseleave", function() {
                                n = !1;
                                I()
                            }))),
                            p.push(Yt(b.document, "visibilitychange", function() {
                                return I()
                            })));
                        var H = au(b, f)
                            , M = Km(b.document);
                        if (m && !n && !H && !M)
                            l = l || b.setTimeout(function() {
                                au(b, f) ? I() : (g(),
                                    B.disconnect())
                            }, 1E3 * d);
                        else if (k || n || H || M)
                            b.clearTimeout(l),
                                l = null
                    };
                    m = v[v.length - 1].isIntersecting;
                    I()
                } catch (H) {
                    h && h(H)
                }
            });
            q.observe(c);
            return function() {
                q.disconnect();
                for (var v = _.A(p), B = v.next(); !B.done; B = v.next())
                    B = B.value,
                        B();
                null != l && b.clearTimeout(l)
            }
        };
        var cu = function() {
            var a = J($d.D().j, 26);
            this.m = null;
            this.j = 0;
            this.l = a
        }
            , du = function(a) {
            if (!a.m) {
                var b = _.t(7);
                uq = zq();
                Cq = b;
                Bq = 0;
                if (!Qf() || 0 <= Gf(Vf(), 11))
                    b = Eq();
                else {
                    b = jj();
                    var c = b.__google_ad_urls;
                    b = c ? c : b.__google_ad_urls = new rq
                }
                a.m = b;
                a.j = a.m.setupOse(a.l)
            }
            return a.m
        };
        cu.prototype.getOseId = function() {
            this.j || (this.j = qq(0, _.t(7)));
            return this.j
        }
        ;
        var eu = 0
            , fu = function() {
            this.j = [];
            this.K = [];
            this.Ua = this.Va = NaN;
            this.B = 0;
            this.R = this.O = this.J = "";
            this.A = [];
            this.l = 0;
            this.T = this.F = this.o = this.G = null;
            this.H = mc(_.C);
            this.m = "json_html";
            this.X = "fif";
            this.ta = 1;
            this.I = new D.Map
        }
            , gu = function(a, b, c, d, e, f, g, h, k) {
            a.K = b;
            a.B = c;
            a.A = d;
            a.J = e;
            a.O = f;
            a.R = g;
            a.G = void 0 === h ? null : h;
            a.T = void 0 === k ? null : k
        }
            , hu = function(a, b) {
            var c = b.getSlotId();
            b = a.I.get(c);
            b || (b = window === window.top ? (++eu).toString(36) : eg(),
                a.I.set(c, b),
                _.Yd(c, function() {
                    a.I.delete(c)
                }));
            return b
        };
        var Y = function() {
            zr.apply(this, arguments)
        };
        _.L(Y, zr);
        Y.prototype.K = function(a) {
            var b, c;
            Va(this.id, a);
            null === (c = null === (b = window.console) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a)
        }
        ;
        var iu = function(a, b, c, d, e) {
            var f = null
                , g = w(b, e);
            _.E(c, d, g) && (f = function() {
                return _.uc(c, d, g)
            }
                ,
                _.Yd(a, f));
            return f
        };
        var ju = function(a, b, c, d, e, f, g, h, k) {
            Y.call(this, 718);
            this.F = X(this, b);
            this.H = X(this, c);
            this.A = X(this, d);
            this.l = X(this, e);
            Cr(this, f);
            this.I = W(this, g);
            this.o = W(this, h);
            this.O = W(this, k);
            this.J = Cd(a, Gk)
        };
        _.L(ju, Y);
        ju.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e, f;
                return Zb(b, function(g) {
                    if (1 == g.j) {
                        if (!ku(c))
                            return g.return();
                        d = c.I.value;
                        e = c.o.value;
                        _.aj(e, "visibility", "hidden");
                        _.aj(e, "min-width", "100%");
                        _.aj(d, "min-width", "100%");
                        return $b(g, c.J, 2)
                    }
                    if (c.W)
                        return g.return();
                    f = d.contentDocument;
                    if (!f)
                        return eb("gpt_amp_fluid_no_iframedoc", function(h) {
                            $a(h)
                        }),
                            g.return();
                    lu(c, d, e, f.body.offsetWidth, f.body.offsetHeight);
                    g.j = 0
                })
            })
        }
        ;
        var ku = function(a) {
            var b = !a.O.value;
            return null == a.l.value || a.A.value || "height" !== a.H.value || b ? !1 : !0
        }
            , lu = function(a, b, c, d, e) {
            b.setAttribute("height", String(e));
            b.setAttribute("width", String(d));
            _.aj(c, "visibility", "visible");
            mu(a, e, d)
        }
            , mu = function(a, b, c) {
            var d = a.F.value;
            eb("gpt_fluid_sz", function(e) {
                u(e, "sz", c + "x" + b);
                u(e, "qqid", d || "");
                $a(e);
                u(e, "ff", 1)
            })
        };
        var nu = function(a, b, c, d, e) {
            Y.call(this, 685);
            var f = this;
            this.slotId = a;
            this.L = b;
            this.l = X(this, c);
            this.o = W(this, d);
            this.A = W(this, e);
            Cd(this.slotId, Dd, function(g) {
                return Ti(f.L, g.detail)
            })
        };
        _.L(nu, Y);
        nu.prototype.j = function() {
            var a, b;
            if (!_.x(111) && !this.A.value) {
                var c = null !== (b = null === (a = this.l.value) || void 0 === a ? void 0 : J(a, 1)) && void 0 !== b ? b : ""
                    , d = Ui(this.L, this.o.value, c);
                _.Yd(this, function() {
                    try {
                        d()
                    } catch (e) {
                        Va(493, e)
                    }
                })
            }
        }
        ;
        var ou = /(<head(\s+[^>]*)?>)/i
            , pu = function(a, b, c, d, e) {
            Y.call(this, 665);
            this.l = this.m();
            this.o = W(this, a);
            this.A = X(this, b);
            this.F = X(this, c);
            this.H = X(this, d);
            this.I = X(this, e)
        };
        _.L(pu, Y);
        pu.prototype.j = function() {
            if (0 !== this.o.value.kind || !Xc(this.A.value) || wr(this.F))
                this.l.j(this.o.value);
            else {
                var a = this.o.value.na || ""
                    , b = !!this.H.value
                    , c = !!this.I.value;
                c || Rf() || (a = a.replace(ou, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
                b && !c && (a = a.replace(ou, '$1<meta name="referrer" content="origin">'));
                this.l.j({
                    kind: 0,
                    na: a
                })
            }
        }
        ;
        var qu = function(a, b, c, d) {
            _.tk.call(this);
            var e = this;
            this.m = a;
            this.j = null;
            _.x(440) || _.Yd(this, xk(b, Dd, function(f) {
                var g = f.detail;
                return void D.Promise.all([c.promise, d.promise]).then(function(h) {
                    h = _.A(h);
                    var k = h.next().value;
                    null == h.next().value || k || (h = g.data,
                        e.W) || ("impression-viewable" === h ? e.m(!0) : "string" === typeof h && 0 === h.indexOf("visibility-changed-") && (h = /^visibility-changed-(\d+(\.\d+)?)$/.exec(h)) && (h = Math.round(100 * Number(h[1])),
                    0 <= h && 100 >= h && (0 !== h && 100 !== h || h !== e.j) && (null !== e.j || 0 < h) && (e.j = h,
                        e.m(!1, h))))
                })
            }))
        };
        _.L(qu, _.tk);
        var su = function(a, b) {
            var c = this
                , d = Sd.D()
                , e = a.getSlotId()
                , f = $d.D().j
                , g = un($d.D(), e.getDomId());
            this.set = y(83, function(h, k) {
                "page_url" === h && k && (h = [Zm(Ym(new Wm, h), [String(k)])],
                    ph(g, 3, h));
                return c
            });
            this.get = y(84, function(h) {
                if ("page_url" !== h)
                    return null;
                var k;
                return null == (k = (K = T(g, Wm, 3),
                    _.F(K, "find")).call(K, function(l) {
                    return Xm(l) === h
                })) ? void 0 : J(k, 2)[0]
            });
            this.setClickUrl = y(79, function(h) {
                if ("string" !== typeof h)
                    return d.M(Wk("Slot.setClickUrl", [h]), e),
                        c;
                G(g, 7, h);
                return c
            });
            this.setTargeting = y(81, function(h, k) {
                uo(e, g, h, k, d);
                return c
            });
            this.updateTargetingFromMap = y(85, function(h) {
                vo(e, g, h, d);
                return c
            });
            this.display = y(78, function() {
                ru(b, e, Qn(f, tn()))
            });
            this.setTagForChildDirectedTreatment = y(80, function(h) {
                if (0 === h || 1 === h) {
                    var k = en(f) || new an;
                    G(k, 5, h);
                    oh(f, 25, k)
                }
                return c
            });
            this.setForceSafeFrame = y(567, function(h) {
                if ("boolean" !== typeof h)
                    return d.M(Wk("PassbackSlot.setForceSafeFrame", [String(h)]), e),
                        c;
                G(g, 12, h);
                return c
            });
            this.setTagForUnderAgeOfConsent = y(448, function(h) {
                if (0 === h || 1 === h) {
                    var k = en(f) || new an;
                    G(k, 6, h);
                    oh(f, 25, k)
                }
                return c
            })
        };
        _.L(su, Yj);
        var tu = function(a, b) {
            return a.map(function(c) {
                return Zj(c, b)
            }).filter(function(c) {
                return !!c
            })
        }
            , uu = function(a) {
            var b = Ko.D()
                , c = [];
            a = _.A(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.B = d;
                var e = Oj(9);
                1 === e.length && (c.push(d),
                    c.push(d + "-" + e[0]))
            }
            return c
        }
            , vu = _.Ze(function() {
            return Bi("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        })
            , wu = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    vu();
                    return !0
                },
                set: function() {
                    vu()
                },
                configurable: !0
            })
        }
            , Bu = function(a, b) {
            $o.call(this, a);
            var c = this
                , d = Sd.D()
                , e = $d.D().j
                , f = tn()
                , g = !1;
            this.setTargeting = y(1, function(h, k) {
                var l = null;
                "string" === typeof k ? l = [k] : Array.isArray(k) ? l = k : Me(k) && (l = _.F(Array, "from").call(Array, k));
                var n = "string" === typeof h && !wf(h);
                l = l && qa(l);
                var m, p = null != (m = null == l ? void 0 : l.every(function(q) {
                    return "string" === typeof q
                })) ? m : !1;
                if (!n || !p)
                    return d.M(Wk("PubAdsService.setTargeting", [h, k])),
                        c;
                k = (K = T(e, Wm, 2),
                    _.F(K, "find")).call(K, function(q) {
                    return Xm(q) === h
                });
                if ("gpt-beta" === h) {
                    if (a.j)
                        return d.M(Ol(l.join())),
                            c;
                    if (k)
                        return d.M(Pl(l.join())),
                            c;
                    l = uu(l)
                }
                k ? Zm(k, l) : (k = Zm(Ym(new Wm, h), l),
                    qh(e, 2, k, Wm));
                d.info(Hl(h, l.join(), a.getName()));
                return c
            });
            this.clearTargeting = y(2, function(h) {
                if (void 0 === h)
                    return ph(e, 2, []),
                        d.info(Ml(a.getName())),
                        c;
                if ("gpt-beta" === h)
                    return d.M(Ql(h)),
                        c;
                var k = T(e, Wm, 2)
                    , l = _.F(k, "findIndex").call(k, function(n) {
                    return Xm(n) === h
                });
                if (0 > l)
                    return d.M(El(h, a.getName())),
                        c;
                k.splice(l, 1);
                ph(e, 2, k);
                d.info(Dl(h, a.getName()));
                return c
            });
            this.getTargeting = y(38, function(h) {
                if ("string" !== typeof h)
                    return d.M(Wk("PubAdsService.getTargeting", [h])),
                        [];
                var k = (K = T(e, Wm, 2),
                    _.F(K, "find")).call(K, function(l) {
                    return Xm(l) === h
                });
                return k ? J(k, 2).slice() : []
            });
            this.getTargetingKeys = y(39, function() {
                return T(e, Wm, 2).map(function(h) {
                    return Xm(h)
                })
            });
            this.setCategoryExclusion = y(3, function(h) {
                if ("string" !== typeof h || wf(h))
                    return d.M(Wk("PubAdsService.setCategoryExclusion", [h])),
                        c;
                (K = J(e, 3),
                    _.F(K, "includes")).call(K, h) || mh(e, 3, h);
                d.info(Fl(h));
                return c
            });
            this.clearCategoryExclusions = y(4, function() {
                G(e, 3, []);
                d.info(Gl());
                return c
            });
            this.disableInitialLoad = y(5, function() {
                G(e, 4, !0);
                g || (g = !0,
                    wu())
            });
            this.enableSingleRequest = y(6, function() {
                if (a.j && !z(e, 6))
                    return d.M(tl("PubAdsService.enableSingleRequest")),
                        !1;
                d.info(ul("single request"));
                G(e, 6, !0);
                return !0
            });
            this.enableAsyncRendering = y(7, function() {
                return !0
            });
            this.enableSyncRendering = y(8, function() {
                Bi("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = y(485, function(h) {
                var k = new $m;
                G(k, 1, 800);
                G(k, 2, 400);
                G(k, 3, 3);
                if (_.ha(h)) {
                    var l = h.fetchMarginPercent;
                    "number" === typeof l && (0 <= l ? G(k, 1, l) : -1 == l && G(k, 1, void 0));
                    l = h.renderMarginPercent;
                    "number" === typeof l && (0 <= l ? G(k, 2, l) : -1 == l && G(k, 2, void 0));
                    h = h.mobileScaling;
                    "number" === typeof h && (0 < h ? G(k, 3, h) : -1 == h && G(k, 3, 1))
                }
                oh(e, 5, k)
            });
            this.setCentering = y(9, function(h) {
                h = !!h;
                d.info(vl("centering", String(h)));
                G(e, 15, h)
            });
            this.definePassback = y(10, function(h, k) {
                return (h = xu(a, h, k).$b) && Uk(h)
            });
            this.refresh = y(11, function(h, k) {
                k = void 0 === k ? {} : k;
                if (h && !Array.isArray(h) || !_.ha(k) || k.changeCorrelator && "boolean" !== typeof k.changeCorrelator)
                    d.M(Wk("PubAdsService.refresh", _.F(Array, "from").call(Array, arguments)));
                else {
                    k && 0 == k.changeCorrelator || G(e, 26, Hi());
                    var l = h ? tu(h, b) : a.m;
                    a.refresh(Qn(e, f), l) || d.M(Wk("PubAdsService.refresh", _.F(Array, "from").call(Array, arguments)))
                }
            });
            this.enableVideoAds = y(12, function() {
                G(e, 21, !0);
                yu(a, e)
            });
            this.setVideoContent = y(13, function(h, k) {
                G(e, 21, !0);
                G(e, 22, String(h || ""));
                G(e, 23, String(k || ""));
                yu(a, e)
            });
            this.collapseEmptyDivs = y(14, function(h) {
                h = void 0 === h ? !1 : h;
                G(e, 11, !0);
                G(e, 10, !!h);
                eb("gpt_ced", function(k) {
                    u(k, "sc", h ? "t" : "f");
                    u(k, "level", "page");
                    $a(k)
                });
                d.info(Bl(String(!!h)));
                return !!z(e, 11)
            });
            this.clear = y(15, function(h) {
                return Array.isArray(h) ? (h = tu(h, b),
                    zu(a, e, f, h)) : zu(a, e, f, h)
            });
            this.setLocation = y(16, function(h) {
                if ("string" !== typeof h)
                    return d.M(Wk("PubAdsService.setLocation", [h])),
                        c;
                G(e, 8, h);
                return c
            });
            this.setCookieOptions = y(17, function(h) {
                if (0 !== h && 1 !== h)
                    return d.M($l("PubadsService.setTagForUnderAgeOfConsent", Ki(h), "0,1")),
                        c;
                G(e, 24, h);
                return c
            });
            this.setTagForChildDirectedTreatment = y(18, function(h) {
                if (1 !== h && 0 !== h)
                    return d.M($l("PubadsService.setTagForChildDirectedTreatment", Ki(h), "0,1")),
                        c;
                var k = en(e) || new an;
                G(k, 5, h);
                oh(e, 25, k);
                return c
            });
            this.clearTagForChildDirectedTreatment = y(19, function() {
                var h = en(e);
                if (!h)
                    return c;
                G(h, 5, void 0);
                oh(e, 25, h);
                return c
            });
            this.setPublisherProvidedId = y(20, function(h) {
                h = String(h);
                d.info(vl("PPID", h));
                G(e, 16, h);
                return c
            });
            this.set = y(21, function(h, k) {
                if ("string" !== typeof h || !h.length || void 0 === to()[h] || "string" !== typeof k)
                    return d.M(Wk("PubAdsService.set", [h, k])),
                        c;
                var l = (K = T(e, Wm, 14),
                    _.F(K, "find")).call(K, function(n) {
                    return Xm(n) === h
                });
                l ? Zm(l, [k]) : (l = Ym(new Wm, h),
                    mh(l, 2, k),
                    qh(e, 14, l, Wm));
                d.info(nl(h, String(k), a.getName()));
                return c
            });
            this.get = y(22, function(h) {
                if ("string" !== typeof h)
                    return d.M(Wk("PubAdsService.get", [h])),
                        null;
                var k = (K = T(e, Wm, 14),
                    _.F(K, "find")).call(K, function(l) {
                    return Xm(l) === h
                });
                return (k = k && J(k, 2)) ? k[0] : null
            });
            this.getAttributeKeys = y(23, function() {
                return T(e, Wm, 14).map(function(h) {
                    return Xm(h)
                })
            });
            this.display = y(24, function(h, k, l, n) {
                return void a.display(h, k, void 0 === l ? "" : l, void 0 === n ? "" : n)
            });
            this.updateCorrelator = y(25, function() {
                Bi(Tj("update"));
                d.M(Ul());
                G(e, 26, Hi());
                return c
            });
            this.defineOutOfPagePassback = y(35, function(h) {
                var k = xu(a, h, [1, 1]);
                h = k.$b;
                (k = k.La) && G(k, 15, 1);
                return h && Uk(h)
            });
            this.setForceSafeFrame = y(36, function(h) {
                if ("boolean" !== typeof h)
                    return d.M(Wk("PubAdsService.setForceSafeFrame", [Ki(h)])),
                        c;
                G(e, 13, h);
                return c
            });
            this.setSafeFrameConfig = y(37, function(h) {
                var k = Do(h);
                if (!k)
                    return d.M(Wk("PubAdsService.setSafeFrameConfig", [h])),
                        c;
                oh(e, 18, k);
                return c
            });
            this.setRequestNonPersonalizedAds = y(445, function(h) {
                if (0 !== h && 1 !== h)
                    return d.M($l("PubAdsService.setRequestNonPersonalizedAds", Ki(h), "0,1")),
                        c;
                var k = en(e) || new an;
                G(k, 8, !!h);
                oh(e, 25, k);
                return c
            });
            this.setTagForUnderAgeOfConsent = y(447, function(h) {
                h = void 0 === h ? 2 : h;
                if (2 !== h && 0 !== h && 1 !== h)
                    return d.M($l("PubadsService.setTagForUnderAgeOfConsent", Ki(h), "2,0,1")),
                        c;
                var k = en(e) || new an;
                G(k, 6, h);
                oh(e, 25, k);
                return c
            });
            this.getCorrelator = y(27, function() {
                return String(J(e, 26))
            });
            this.getTagSessionCorrelator = y(631, function() {
                return mc(_.C)
            });
            this.getVideoContent = y(30, function() {
                return Au(a, e)
            });
            this.getVersion = y(568, Ra);
            this.forceExperiment = y(569, function(h) {
                h = parseInt(h, 10);
                0 < h && Mj.D().j(h)
            });
            this.setCorrelator = y(28, function(h) {
                Bi(Tj("set"));
                d.M(Tl());
                if (im(window))
                    return c;
                if (!("number" === typeof h && isFinite(h) && 0 == h % 1 && 0 < h))
                    return d.M(Wk("PubadsService.setCorrelator", [Ki(h)])),
                        c;
                G(e, 26, h);
                G(e, 27, !0);
                return c
            });
            this.markAsAmp = y(570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = y(571, function() {
                return !!z(e, 6)
            });
            this.setImaContent = y(328, function(h, k) {
                zd(e, 22) ? (G(e, 21, !0),
                    G(e, 22, String(h || "")),
                    G(e, 23, String(k || "")),
                    yu(a, e)) : (G(e, 21, !0),
                    yu(a, e),
                "string" === typeof h && G(e, 19, h),
                "string" === typeof k && G(e, 20, k))
            });
            this.getImaContent = y(329, function() {
                return zd(e, 22) ? Au(a, e) : a.j ? {
                    vid: J(e, 19) || "",
                    cmsid: J(e, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = y(572, function() {
                return !!z(e, 4)
            });
            this.setPrivacySettings = y(648, function(h) {
                if (!_.ha(h))
                    return d.M(Wk("PubAdsService.setPrivacySettings", [h])),
                        c;
                var k = en(e) || new an
                    , l = h.restrictDataProcessing
                    , n = h.childDirectedTreatment
                    , m = h.underAgeOfConsent
                    , p = h.limitedAds
                    , q = h.nonPersonalizedAds;
                "boolean" === typeof q ? G(k, 8, q) : void 0 !== q && d.M(Zl("PubAdsService.setPrivacySettings", Ki(h), "nonPersonalizedAds", Ki(q)));
                "boolean" === typeof l ? G(k, 1, l) : void 0 !== l && d.M(Zl("PubAdsService.setPrivacySettings", Ki(h), "restrictDataProcessing", Ki(l)));
                "boolean" === typeof p ? G(k, 9, p) : void 0 !== p && d.M(Zl("PubAdsService.setPrivacySettings", Ki(h), "limitedAds", Ki(p)));
                void 0 !== m && (null === m ? G(k, 6, 2) : !1 === m ? G(k, 6, 0) : !0 === m ? G(k, 6, 1) : d.M(Zl("PubAdsService.setPrivacySettings", Ki(h), "underAgeOfConsent", Ki(m))));
                void 0 !== n && (null === n ? G(k, 5, void 0) : !1 === n ? G(k, 5, 0) : !0 === n ? G(k, 5, 1) : d.M(Zl("PubAdsService.setPrivacySettings", Ki(h), "childDirectedTreatment", Ki(n))));
                oh(e, 25, k);
                return c
            })
        };
        _.L(Bu, $o);
        var Cu = function(a, b, c) {
            for (var d = 100; a && a != b && --d; )
                _.wi(a, c),
                    a = a.parentElement
        }
            , Du = function(a, b, c, d, e) {
            _.wi(a, {
                "margin-left": "0px",
                "margin-right": "0px"
            });
            var f = {
                "z-index": "0"
            };
            "absolute" !== d.position && "fixed" !== d.position && "relative" !== d.position && (f.position = "relative");
            var g = "rtl" == d.direction
                , h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
            d = function() {
                var k = a.getBoundingClientRect().left;
                return g ? h - k : k - h
            }
            ;
            b = d();
            0 !== b && (c = function(k) {
                g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
            }
                ,
                c(-b),
                _.wi(a, f),
                d = d(),
            0 !== d && b !== d && (c(b / (d - b) * b),
                _.wi(a, f)));
            return !0
        }
            , Fu = function(a, b, c, d, e, f, g, h) {
            var k = Gn(c);
            _.C.setTimeout(w(459, function() {
                return Eu(a, b, d, e, f, k, g, h)
            }), 500)
        }
            , Eu = function(a, b, c, d, e, f, g, h) {
            if (_.C.IntersectionObserver) {
                var k = null
                    , l = bo(b, a) || xb(b, a)
                    , n = w(459, function(m) {
                    if (m = m && m[0]) {
                        var p = m.boundingClientRect
                            , q = window.innerWidth
                            , v = Math.round(p.left)
                            , B = Math.round(p.right)
                            , I = 0 > v + 2
                            , H = 0 < B - (q + 2);
                        if (m.intersectionRatio >= 1 - ((0 <= Math.round(p.left) ? 0 : 2) + (Math.round(p.right) <= window.innerWidth ? 0 : 2)) / d || I || H)
                            eb(g, function(M) {
                                if (I || H) {
                                    var S = new Tm;
                                    S.set(8);
                                    Gu(l) && S.set(10);
                                    S = Um(S)
                                } else
                                    S = Hu(a, b);
                                var va = Iu(b, l, e)
                                    , ib = va.gd;
                                va = va.hd;
                                $a(M);
                                u(M, "qid", h);
                                u(M, "iu", b.getAdUnitPath());
                                u(M, "e", String(S));
                                I && u(M, "ofl", String(v));
                                H && u(M, "ofr", String(B - q));
                                u(M, "ret", d + "x" + e);
                                u(M, "req", f);
                                u(M, "bm", String(c));
                                u(M, "efh", Number(ib));
                                u(M, "stk", Number(va));
                                u(M, "ifi", mj(window))
                            }, {
                                la: _.Kb(7)
                            }),
                            k && k.unobserve(l)
                    }
                });
                l && (k = new _.C.IntersectionObserver(n,{
                    threshold: [1]
                }),
                    k.observe(l))
            }
        }
            , Hu = function(a, b) {
            var c = bo(b, a) || xb(b, a)
                , d = new Tm;
            try {
                var e = function(S, va) {
                    return a.elementsFromPoint(S, va)
                }
                    , f = c.getBoundingClientRect()
                    , g = f.left
                    , h = f.top
                    , k = f.width
                    , l = f.height
                    , n = xb(b, a)
                    , m = zb(n, window);
                if ("hidden" == m.visibility || "none" == m.display)
                    return Um(d);
                var p = parseInt(m["border-top-width"] || 0, 10) + 1;
                b = g + k;
                l = h + l;
                var q = e(g + p + 2, h + p);
                var v = e(b - p - 2, h + p);
                var B = e(b - p - 2, l - p);
                var I = e(g + p + 2, l - p);
                var H = e(b / 2, l - p)
            } catch (S) {
                return d.set(1),
                    Um(d)
            }
            if (!(q && q.length && v && v.length && B && B.length && I && I.length && H && H.length))
                return d.set(7),
                    Um(d);
            e = function(S, va) {
                for (var ib = !1, Xa = 0; Xa < S.length; Xa++) {
                    var jb = S[Xa];
                    if (ib) {
                        var nd = zb(jb, window);
                        if ("hidden" != nd.visibility && !yi(jb) && !M(c, jb)) {
                            d.set(va);
                            "absolute" == nd.position && d.set(11);
                            break
                        }
                    } else
                        c == jb && (ib = !0)
                }
            }
            ;
            zi(c) && d.set(9);
            var M = function(S, va) {
                return ri(S, va) || ri(va, S)
            };
            g = q[0];
            c == g || M(c, g) || yi(g) || d.set(2);
            g = v[0];
            c == g || M(c, g) || yi(g) || d.set(3);
            g = B[0];
            c == g || M(c, g) || yi(g) || d.set(4);
            g = I[0];
            c == g || M(c, g) || yi(g) || d.set(5);
            if (yi(c))
                return Um(d);
            e(q, 12);
            e(v, 13);
            e(B, 14);
            e(I, 15);
            e(H, 6);
            return Um(d)
        }
            , Gu = function(a) {
            var b = !1
                , c = !1
                , d = !1;
            return xi(a, function(e) {
                "nowrap" == e.whiteSpace && (d = !0);
                if ("scroll" == e.overflowX || "auto" == e.overflowX)
                    c = !0;
                "flex" == e.display && (b = !0);
                return b && c && d
            })
        }
            , Ju = function(a, b) {
            return a && (a = R(a, fn, 1)) ? J(a, 1) || b.innerWidth : 0
        }
            , Ku = function(a, b) {
            return a && (a = R(a, fn, 1)) ? J(a, 2) || b.innerHeight : 0
        }
            , Lu = function(a) {
            return a && (a = R(a, fn, 2)) ? J(a, 1) || 0 : 0
        }
            , Mu = function(a) {
            return a && (a = R(a, fn, 2)) ? J(a, 2) || 0 : 0
        }
            , Iu = function(a, b, c) {
            var d = (a = xb(a)) && zb(a, window)
                , e = d ? "absolute" != d.position : !0
                , f = !1
                , g = a && a.parentElement
                , h = !1;
            pd(b, function(k) {
                var l = k.style;
                if (e)
                    if (h || (h = k == g))
                        e = Lq(k, _.C, !0, -1, -1);
                    else {
                        l = l && l.height;
                        var n = (l && _.F(l, "endsWith").call(l, "px") && parseInt(l, 10) || 0) >= c;
                        !l || n || "string" === typeof l && _.F(Iq, "includes").call(Iq, l) || (e = !1)
                    }
                f || (k = zb(k, _.C),
                "sticky" != k.position && "fixed" != k.position) || (f = !0);
                return !(f && !e)
            }, 100);
            return {
                gd: e,
                hd: f
            }
        }
            , Nu = function(a, b, c) {
            (K = Ab(b),
                _.F(K, "includes")).call(K, "fluid") && setTimeout(function() {
                eb("gpt_fluid_sz", function(d) {
                    var e = bo(a, document);
                    e = e ? ij(e) : null;
                    u(d, "sz", e ? e.width + "x" + e.height : "null");
                    u(d, "qqid", c)
                })
            }, 250)
        };
        var Ou = 0;
        var id = new D.WeakMap
            , gd = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c)
                a.push(typeof b[c], b[c]);
            return a.join("\x0B")
        };
        var Pu = kd(function(a) {
            return (null === a || void 0 === a ? 0 : a.src) ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\x0B" + (null === (c = b[0]) || void 0 === c ? void 0 : c.src)
        });
        var Qu = null
            , Ru = function(a, b, c, d) {
            try {
                var e;
                if (!(e = !b)) {
                    var f;
                    if (!(f = !Mq(b, c, void 0 === d ? 100 : d))) {
                        a: {
                            do {
                                var g = zb(b, c);
                                if (g && "fixed" == g.position) {
                                    var h = !1;
                                    break a
                                }
                            } while (b = b.parentElement);
                            h = !0
                        }
                        f = !h
                    }
                    e = f
                }
                e && (a.height = -1)
            } catch (k) {
                a.width = -1,
                    a.height = -1
            }
        }
            , ld = function(a) {
            for (var b, c = {}, d = _.A(T(a, Wm, 9)), e = d.next(); !e.done; e = d.next())
                e = e.value,
                    c[Xm(e)] = J(e, 2);
            a = J(a, 8);
            a.length && (null !== (b = c.excl_cat) && void 0 !== b ? b : c.excl_cat = a);
            return c
        }
            , Su = function(a) {
            var b = !1
                , c = T(a, Wm, 2).map(function(d) {
                var e = Xm(d);
                b = "excl_cat" === e;
                d = J(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
            a = J(a, 3);
            !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
            return c
        }
            , Tu = function(a) {
            var b = "";
            Wh(function(c) {
                if (c === c.top)
                    return !0;
                c.document && c.document.referrer && (b = c.document.referrer);
                return !1
            }, !1, !1, a);
            return b
        }
            , Uu = function(a) {
            if (a.location && a.location.ancestorOrigins)
                return a.location.ancestorOrigins.length;
            var b = 0;
            Wh(function() {
                b++;
                return !1
            }, !0, !0, a);
            return b
        }
            , Vu = function(a, b, c, d, e, f, g, h) {
            g = void 0 === g ? !1 : g;
            this.B = a;
            this.l = b;
            this.A = c;
            this.m = e;
            this.j = f;
            this.H = h;
            this.F = [];
            this.G = "";
            this.o = [];
            this.K = [];
            this.model = d;
            this.I = new D.Set(_.xd(489));
            this.X = !g || !_.x(294)
        }
            , Yu = function(a) {
            var b = void 0 === b ? window : b;
            if (_.x(441)) {
                var c = a.H;
                if (!c || !c.length)
                    return ""
            } else {
                c = a.model.j.map(function(d) {
                    return d.getSlotId()
                });
                if (a.B)
                    0 === c.length && (c = bk().map(function(d) {
                        return d.getSlotId()
                    }));
                else {
                    if (0 === c.length)
                        return "";
                    1 < c.length && (c = [c[0]])
                }
                if (!c.length)
                    return "";
                30 < c.length && (Sd.D().M(Nl("30", String(c.length), String(c.length - 30))),
                    c = c.slice(0, 30))
            }
            Wu(a, c, b);
            Xu(a);
            return a.G
        }
            , Zu = function(a, b) {
            try {
                var c = b.top;
                var d = fm(c.document, c)
            } catch (e) {
                d = new _.Cb(-12245933,-12245933)
            }
            Z(a, "scr_x", Math.round(d.x), {
                ma: !0
            });
            Z(a, "scr_y", Math.round(d.y), {
                ma: !0
            })
        }
            , $u = function(a) {
            var b = window
                , c = mb(a.m, b.document) || "";
            var d = b.document.domain;
            var e = b.history.length
                , f = b.screen
                , g = b.document.referrer;
            if (Qi())
                d = jj().gaGlobal || {};
            else {
                var h = Math.round((new Date).getTime() / 1E3)
                    , k = b.google_analytics_domain_name;
                d = "undefined" == typeof k ? hq("auto", d) : hq(k, d);
                var l = -1 < c.indexOf("__utma=" + d + "."), n = -1 < c.indexOf("__utmb=" + d), m;
                (m = (Ri() || jj()).gaGlobal) || (m = {},
                    (Ri() || jj()).gaGlobal = m);
                var p = !1;
                if (l)
                    g = c.split("__utma=" + d + ".")[1].split(";")[0].split("."),
                        n ? m.sid = g[3] : m.sid || (m.sid = h + ""),
                        m.vid = g[0] + "." + g[1],
                        m.from_cookie = !0;
                else {
                    m.sid || (m.sid = h + "");
                    if (!m.vid) {
                        p = !0;
                        n = Math.round(2147483647 * Math.random());
                        l = fq.appName;
                        var q = fq.version
                            , v = fq.language ? fq.language : fq.browserLanguage
                            , B = fq.platform
                            , I = fq.userAgent;
                        try {
                            var H = fq.javaEnabled()
                        } catch (S) {
                            H = !1
                        }
                        H = [l, q, v, B, I, H ? 1 : 0].join("");
                        f ? H += f.width + "x" + f.height + f.colorDepth : _.C.java && _.C.java.awt && (f = _.C.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                            H += f.screen.width + "x" + f.screen.height);
                        H = H + c + (g || "");
                        for (g = H.length; 0 < e; )
                            H += e-- ^ g++;
                        m.vid = (n ^ gq(H) & 2147483647) + "." + h
                    }
                    m.from_cookie = !1
                }
                if (!m.cid) {
                    b: for (h = 999,
                            k && (k = 0 == k.indexOf(".") ? k.substr(1) : k,
                                h = k.split(".").length),
                                k = 999,
                                c = c.split(";"),
                                g = 0; g < c.length; g++)
                        if (f = iq.exec(c[g]) || jq.exec(c[g]) || kq.exec(c[g])) {
                            H = f[1] || 0;
                            if (H == h) {
                                var M = f[2];
                                break b
                            }
                            H < k && (k = H,
                                M = f[2])
                        }
                    p && M && -1 != M.search(/^\d+\.\d+$/) ? (m.vid = M,
                        m.from_cookie = !0) : M != m.vid && (m.cid = M)
                }
                m.dh = d;
                m.hid || (m.hid = Math.round(2147483647 * Math.random()));
                d = m
            }
            Z(a, "ga_vid", d.vid, {
                aa: !1
            });
            Z(a, "ga_sid", d.sid, {
                aa: !1
            });
            Z(a, "ga_hid", d.hid, {
                aa: !1
            });
            Z(a, "ga_fc", d.from_cookie, {
                aa: !1
            });
            Z(a, "ga_cid", d.cid, {
                aa: !1
            });
            Z(a, "ga_wpids", b.google_analytics_uacct)
        }
            , av = function(a, b) {
            var c, d;
            try {
                var e = null === (d = null === (c = b.external) || void 0 === c ? void 0 : c.getHostEnvironmentValue) || void 0 === d ? void 0 : d.bind(b.external);
                if (e) {
                    var f = parseInt(JSON.parse(e("os-mode"))["os-mode"], 10);
                    0 <= f && Z(a, "wsm", f + 1)
                }
            } catch (g) {}
        }
            , Wu = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document
                , e = a.j.N;
            Z(a, "gdfp_req", 1, {
                aa: !1
            });
            Z(a, "pvsid", a.model.H);
            Z(a, "correlator", J(e, 26));
            Z(a, "output", a.model.m, {
                aa: !1
            });
            "wbn" === a.model.m && (Z(a, "wbsu", Ha(a.model.o).toString().replace(/^urn:uuid:/, "")),
                Z(a, "callback", a.model.F));
            Z(a, "impl", a.model.X, {
                aa: !1
            });
            _.x(200) || (0 === gh(e, 24, 0) && (Z(a, "adsid", a.model.J),
                Z(a, "pucrd", a.model.R)),
                Z(a, "jar", a.model.O));
            bv(a);
            cv(a);
            dv(a);
            Z(a, "ptt", 17);
            ev(a);
            fv(a);
            gv(a, Hb(b[0].getAdUnitPath()));
            Z(a, "sc", _.t(6) ? 1 : 0, {
                ma: !0
            });
            window.postMessage && Z(a, "sfv", Bo());
            Z(a, "ecs", a.j.Gb);
            hv(a, b, d);
            iv(a);
            jv(a, b);
            kv(a, b);
            lv(a, c);
            Pa("google_preview") && Z(a, "gct", Oa("google_preview"));
            ad(c).forEach(function(g, h) {
                return void Z(a, h, g)
            });
            _.t(253) && (e = Qj(10)) && Z(a, "expflags", e);
            mv(a, b, c);
            e = {};
            e.u_tz = -(new Date).getTimezoneOffset();
            e.u_his = lj();
            e.u_java = !!wh.navigator && "unknown" !== typeof wh.navigator.javaEnabled && !!wh.navigator.javaEnabled && wh.navigator.javaEnabled();
            wh.screen && (e.u_h = wh.screen.height,
                e.u_w = wh.screen.width,
                e.u_ah = wh.screen.availHeight,
                e.u_aw = wh.screen.availWidth,
                e.u_cd = wh.screen.colorDepth);
            wh.navigator && wh.navigator.plugins && (e.u_nplug = wh.navigator.plugins.length);
            wh.navigator && wh.navigator.mimeTypes && (e.u_nmime = wh.navigator.mimeTypes.length);
            nv(a, e);
            ov(a);
            try {
                var f = pj()
            } catch (g) {
                f = "0"
            }
            Z(a, "flash", f, {
                aa: !1,
                ma: !0
            });
            pv(a, b, c);
            (_.x(84) || Ka.D().j) && Z(a, "rumc", a.model.H, {
                aa: !1
            });
            _.x(83) && Z(a, "rume", 1, {
                aa: !1
            });
            Z(a, "vis", _.Hm(d), {
                aa: !1
            });
            0 === Pu(_.t(172)) || Z(a, "stss", Pu(_.t(172)));
            _.C.navigator && _.C.navigator.deviceMemory && Z(a, "dmc", _.C.navigator.deviceMemory);
            Zu(a, c);
            qv(a, b, c);
            rv(a, b, c);
            0 < a.model.A.length && Z(a, "psts", a.model.A);
            $u(a);
            av(a, c);
            _.x(23) && (Z(a, "js", hr(c)),
                Z(a, "ms", ir(a.model.H.toString(), c)));
            sv(a, c, b);
            tv(a, b, c);
            uv(a);
            vv(a);
            wv(a);
            xv(a)
        }
            , uv = function(a) {
            var b = a.model.T;
            b && Z(a, "floc_id", b.id + "." + b.version)
        }
            , vv = function(a) {
            var b = _.t(251);
            b && Z(a, "uach", Qg(b, 3))
        }
            , wv = function(a) {
            var b = _.t(250);
            b && 0 < b.length && Z(a, "tt_state", Qg(JSON.stringify(b), 3))
        }
            , qv = function(a, b, c) {
            var d = a.j.P
                , e = []
                , f = [];
            b = _.A(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                var h = g.value;
                g = xb(h);
                g = Ai(g && g.parentElement && zb(g.parentElement, c) || null);
                if (!g || 1 === g[0] && 1 === g[3]) {
                    var k = xb(h)
                        , l = k && k.parentElement;
                    g = On(l) || new _.Ah(0,0);
                    Ru(g, l, c);
                    l = On(xb(h)) || new _.Ah(0,0);
                    Ru(l, k, c, 1);
                    -1 === g.height && (l.height = -1);
                    if (_.x(3580885)) {
                        var n = d[h.getDomId()];
                        k = h = 0;
                        n = _.A(Ab(n));
                        for (var m = n.next(); !m.done; m = n.next())
                            if (m = m.value,
                                Array.isArray(m)) {
                                var p = _.A(m);
                                m = p.next().value;
                                p = p.next().value;
                                (h || Infinity) > m && 1 < m && (h = m);
                                (k || Infinity) > p && 1 < p && (k = p)
                            }
                        k = _.A([h, k]);
                        h = k.next().value;
                        k = k.next().value;
                        0 <= g.height && (g.width = Math.max(g.width, h),
                            g.height = Math.max(g.height, k));
                        0 <= l.height && (l.width = Math.max(l.width, h),
                            l.height = Math.max(l.height, k))
                    }
                    e.push(g.width + "x" + g.height);
                    f.push(l.width + "x" + l.height)
                } else
                    e.push("-1x-1"),
                        f.push("-1x-1")
            }
            Z(a, "psz", e, {
                sa: "|"
            });
            Z(a, "msz", f, {
                sa: "|"
            })
        }
            , rv = function(a, b, c) {
            var d = a.j.P;
            b = b.map(function(e) {
                return d[e.getDomId()]
            });
            b.some(function(e) {
                return zd(e, 16)
            }) && (Z(a, "rtgs", b.map(function(e) {
                return zd(e, 16) ? 0 != Ab(e).length ? "1" : "2" : "0"
            }), {
                sa: "!"
            }),
                Z(a, "max_w", b.map(function(e) {
                    return Ju(R(e, kn, 16), c)
                }), {
                    sa: "!"
                }),
                Z(a, "max_h", b.map(function(e) {
                    return Ku(R(e, kn, 16), c)
                }), {
                    sa: "!"
                }),
                Z(a, "min_w", b.map(function(e) {
                    return Lu(R(e, kn, 16))
                }), {
                    sa: "!"
                }),
                Z(a, "min_h", b.map(function(e) {
                    return Mu(R(e, kn, 16))
                }), {
                    sa: "!"
                }))
        }
            , yv = function(a, b, c) {
            var d = [];
            if (null !== a && a != a.top) {
                var e = gm(!1, a).width;
                (-12245933 === b || -12245933 === e || e < b) && d.push(8)
            }
            -12245933 !== b && (1.5 * b < a.document.documentElement.scrollWidth ? d.push(10) : c && 1.5 * a.outerWidth < b && d.push(10));
            return d
        }
            , sv = function(a, b, c) {
            var d = 0 !== Ob()
                , e = gm(!0, b, d).width
                , f = []
                , g = []
                , h = yv(b, e, d);
            c.forEach(function(k) {
                var l = new Tm
                    , n = xb(k);
                k = 0;
                if (n)
                    for (var m = 0; n && 100 > m; m++,
                        n = n.parentElement) {
                        var p = zb(n, b);
                        if (p) {
                            if (p.overflowY && "visible" !== p.overflowY) {
                                l.set(2);
                                var q = On(n);
                                q && (k = k ? Math.min(k, q.width) : q.width);
                                if (l.get(9))
                                    break
                            }
                            "sticky" !== p.position && "fixed" !== p.position || l.set(9);
                            "none" === p.display && l.set(7);
                            "IFRAME" === n.nodeName && (p = parseInt(p.width, 10),
                            p < e && (l.set(8),
                                k = k ? Math.min(p, k) : p))
                        } else
                            l.set(3)
                    }
                else
                    l.set(1);
                h.forEach(function(v) {
                    l.set(v)
                });
                f.push(Um(l));
                g.push(k)
            });
            Z(a, "fws", f);
            Z(a, "ohw", g)
        }
            , tv = function(a, b, c) {
            if (!a.B) {
                var d = null
                    , e = null;
                try {
                    d = fm(c.top.document, c.top).y
                } catch (h) {
                    return
                }
                var f = a.j
                    , g = f.P;
                f = !!z(f.N, 15);
                (b = Vn(b[0], g[b[0].getDomId()], c.document, f)) && (e = Math.round(b.y));
                c = gm(!0, c).height;
                e && -12245933 !== e && -12245933 !== c && (e < d + c ? Z(a, "btvi", 0, {
                    ma: !0
                }) : (d = _.t(248) + 1,
                    fk(248, d),
                    Z(a, "btvi", d)))
            }
        }
            , zv = function(a, b) {
            var c = a.j
                , d = c.N
                , e = c.P;
            return _.x(493) ? b.map(function(f) {
                f = e[f.getDomId()];
                return Hn(f, null)
            }).join(",") : a.B ? b.map(function(f) {
                var g = e[f.getDomId()];
                g = _.x(364) ? oo(a.l, f) || Hn(g, z(d, 6) || z(g, 17) ? null : xb(f)) : Hn(g);
                if (f = a.l.j.get(f))
                    f.jb = g;
                return g
            }).join(",") : b.map(function(f) {
                var g = a.j.P[f.getDomId()];
                g = oo(a.l, f) || Hn(g, z(a.j.N, 6) || z(g, 17) ? null : xb(f));
                if (f = a.l.j.get(f))
                    f.jb = g;
                return g
            }).join(",")
        }
            , pv = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document;
            b = (_.x(364) ? z(a.j.N, 6) : a.B) ? Jn(a.j.N) : Kn(a.j.P[b[0].getDomId()]) || Jn(a.j.N);
            var e = Pa("google_preview")
                , f = e ? Na(d.URL) : d.URL;
            e = e ? Na(d.referrer) : d.referrer;
            d = !1;
            if (null != b) {
                var g = f;
                im(c) || (e = "",
                    d = !0)
            } else
                b = f;
            f = Uu(c);
            Z(a, "nhd", f || null);
            Z(a, "url", b);
            var h = b
                , k = _.t(252) || {};
            k.url = h;
            fk(252, k);
            null != g && g !== b && Z(a, "loc", g);
            Z(a, "ref", e);
            f && (c = Vc(c.top) && c.top.location && c.top.location.href || a.l.m || Tu(c) || c.location && c.location.ancestorOrigins && c.location.ancestorOrigins[c.location.ancestorOrigins.length - 1] || "") && Z(a, "top", d ? Th(c.match(_.Sh)[3] || null) : c);
            Z(a, "scar", a.model.G)
        }
            , dv = function(a) {
            var b = Qa();
            Z(a, "vrg", b)
        }
            , jv = function(a, b) {
            var c = a.j.P
                , d = b = b.map(function(e) {
                e = c[e.getDomId()];
                return md(e).join("&")
            });
            d.join("|").length === b.length - 1 && (d = null);
            Z(a, "prev_scp", d, {
                sa: "|"
            })
        }
            , nv = function(a, b) {
            _.ab(b, function(c, d) {
                Z(a, d, c, {
                    aa: !1
                })
            })
        }
            , ev = function(a) {
            var b = a.j.N;
            0 !== gh(b, 24, 0) && Z(a, "co", gh(b, 24, 0), {
                ma: !0
            })
        }
            , gv = function(a, b) {
            if (!_.x(367)) {
                var c = _.t(221);
                b = nr(c, b);
                b.vd && Z(a, "npa", 1);
                Z(a, "guci", b.cd)
            }
        }
            , fv = function(a) {
            var b = en(a.j.N) || new an;
            !0 === z(b, 1) && Z(a, "rdp", "1");
            !0 === z(b, 9) && Z(a, "ltd", "1");
            var c = J(a.m, 2);
            c && Z(a, "gdpr_consent", c);
            zd(a.m, 3) && (c = z(a.m, 3),
                Z(a, "gdpr", c ? "1" : "0", {
                    ma: !0
                }));
            (c = J(a.m, 4)) && Z(a, "addtl_consent", c);
            (c = J(a.m, 7)) && Z(a, "tcfe", c);
            (c = J(a.m, 1)) && Z(a, "us_privacy", c);
            (z(a.m, 6) || z(b, 8)) && Z(a, "npa", 1);
            c = gh(b, 6, 2);
            2 !== c && Z(a, "tfua", c, {
                ma: !0
            });
            zd(b, 5) && (b = J(b, 5),
                Z(a, "tfcd", b, {
                    ma: !0
                }))
        }
            , iv = function(a) {
            var b = a.j.N;
            1 !== gh(b, 24, 0) && zd(b, 16) && Z(a, "ppid", J(b, 16), {
                ma: !0
            })
        }
            , kv = function(a, b) {
            var c = a.j
                , d = c.N
                , e = c.P[b[0].getDomId()];
            c = 1 !== a.model.ta;
            e = !!z(e, 17);
            b = Ln(b, a.j);
            d = z(d, 27) || !1;
            var f = 3 === a.model.ta
                , g = new Tm;
            g.set(0, c);
            g.set(1, e);
            g.set(2, b);
            g.set(3, d);
            g.set(4, f);
            c = Um(g);
            0 < c && Z(a, "eri", c)
        }
            , lv = function(a, b) {
            var c = a.j.N
                , d = Su(c);
            Z(a, "cust_params", d, {
                sa: "&"
            });
            if (0 == gh(c, 24, 0)) {
                if (a.A) {
                    d = zm(a.A, a.m);
                    Z(a, "cookie", d, {
                        ma: !0
                    });
                    if (d = !d) {
                        d = a.A;
                        if (0 === d.m) {
                            var e = a.m;
                            if (zm(d, e))
                                e = !0;
                            else {
                                pb("GoogleAdServingTest", "Good", e, void 0, d.j.document);
                                var f = "Good" === ob("GoogleAdServingTest", e, d.j.document);
                                if (f) {
                                    var g = d.j.document;
                                    g = void 0 === g ? document : g;
                                    z(e, 5) && lb(g) && vm(new nb(g), "GoogleAdServingTest")
                                }
                                e = f
                            }
                            d.m = e ? 2 : 1
                        }
                        d = 2 === d.m
                    }
                    d && Z(a, "cookie_enabled", "1", {
                        ma: !0
                    })
                }
                d = b.document;
                (b = (Jn(a.j.N) || Nd(b)) === d.URL ? "" : d.domain) && Z(a, "cdm", b)
            }
            (c = J(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)),
                c = "a " + Qg('role:1 producer:12 loc:"' + (c + '"'))) : c = "";
            c && Z(a, "uule", c);
            c = new Tm;
            _.C.SVGElement && _.C.document.createElementNS && c.set(0);
            b = ni();
            b["allow-top-navigation-by-user-activation"] && c.set(1);
            b["allow-popups-to-escape-sandbox"] && c.set(2);
            _.C.crypto && _.C.crypto.subtle && c.set(3);
            _.C.TextDecoder && _.C.TextEncoder && c.set(4);
            c = Um(c);
            Z(a, "bc", c)
        }
            , Av = function(a, b) {
            var c = a.j
                , d = c.P
                , e = new D.Map;
            c = _.A(T(c.N, Wm, 14));
            for (var f = c.next(); !f.done; f = c.next())
                f = f.value,
                    e.set(Xm(f), [J(f, 2)[0]]);
            b.forEach(function(k, l) {
                if (k = d[k.getDomId()]) {
                    k = _.A(T(k, Wm, 3));
                    for (var n = k.next(); !n.done; n = k.next()) {
                        var m = n.value;
                        n = Xm(m);
                        var p = e.get(n) || [];
                        m = J(m, 2)[0];
                        1 === b.length ? p[0] = m : m !== p[0] && (p[l + 1] = m);
                        e.set(n, p)
                    }
                }
            });
            c = [];
            f = _.A(_.F(e, "keys").call(e));
            for (var g = f.next(); !g.done; g = f.next()) {
                var h = g.value;
                if (g = to()[h])
                    h = e.get(h),
                        1 < h.length ? (h = h.map(function(k) {
                            return encodeURIComponent(k || "")
                        }).join(),
                            c.push(g + "," + h)) : 1 === h.length && "url" !== g && Z(a, g, h[0])
            }
            c.length && Z(a, "sps", c.join("|"))
        }
            , mv = function(a, b, c) {
            var d = c.document;
            if (!Jn(a.j.N)) {
                try {
                    var e = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
                } catch (n) {
                    e = null
                }
                Z(a, "lmt", e ? e.toString() : null)
            }
            Z(a, "dt", (new Date).getTime(), {
                aa: !1
            });
            try {
                e = Ou;
                var f = Math.min(tj("domLoading") || Infinity, tj("domInteractive") || Infinity);
                var g = Infinity == f ? Math.max(tj("responseEnd"), tj("navigationStart")) : f;
                0 < g && e >= g && (Z(a, "dlt", g, {
                    aa: !1
                }),
                    Z(a, "idt", e - g, {
                        aa: !1
                    }))
            } catch (n) {
                Z(a, "idt", -9, {
                    aa: !1
                }),
                n instanceof Error && Va(479, n)
            }
            if (null !== Qu && void 0 !== Qu)
                Qu;
            else {
                a: {
                    g = c.navigator;
                    f = g.userAgent;
                    e = g.platform;
                    var h = /WebKit\/(\d+)/
                        , k = /rv:(\d+\.\d+)/
                        , l = /rv:1\.8([^.]|\.0)/;
                    if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(f) && (h = (h.exec(f) || [0, 0])[1],
                        k = (k.exec(f) || [0, 0])[1],
                    /Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode || !h && "Gecko" === g.product && 27 <= k && !l.test(f) || 536 <= h)) {
                        g = !0;
                        break a
                    }
                    g = !1
                }
                f = jm(c, c.document, 500, 300);
                Qu = g && !f
            }
            Qu || Z(a, "ea", "0", {
                ma: !0
            });
            g = hm(jj()).L;
            f = km(g);
            g = jm(jj(), d, c.google_ad_width, c.google_ad_height);
            f = f.Tb;
            e = jj();
            e = e.top == e ? 0 : Vc(e.top) ? 1 : 2;
            l = 4;
            g || 1 != e ? g || 2 != e ? g && 1 == e ? l = 7 : g && 2 == e && (l = 8) : l = 6 : l = 5;
            f && (l |= 16);
            g = "" + l;
            lm();
            Z(a, "frm", g || null);
            if (g = gm(!0, c))
                a.j.Wa = g,
                    Z(a, "biw", g.width),
                    Z(a, "bih", g.height);
            !im(c) && (g = gm(!1, c)) && (Z(a, "isw", g.width),
                Z(a, "ish", g.height));
            a.model.B && Z(a, "oid", a.model.B);
            g = [];
            f = [];
            l = a.j;
            e = l.P;
            l = !!z(l.N, 15);
            k = _.A(b);
            for (h = k.next(); !h.done && (h = h.value,
                h = Vn(h, e[h.getDomId()], d, l),
            a.B && (h = h || Bv),
            h && (g.push(Math.round(h.x)),
                f.push(Math.round(h.y))),
                a.B); h = k.next())
                ;
            Z(a, "adxs", g);
            Z(a, "adys", f);
            Z(a, "adks", zv(a, b));
            d = 0;
            void 0 === _.C.postMessage && (d |= 1);
            0 < d && Z(a, "osd", d);
            Cv(a);
            Av(a, b);
            d = mj(c);
            a.X ? (Z(a, "ifi", d + 1),
                d = c,
                b = b.length,
                b = void 0 === b ? 1 : b,
                d = Ri(Qi(d)) || d,
                d.google_unique_id = (d.google_unique_id || 0) + b) : Z(a, "ifi", d);
            null !== c && c != c.top ? (b = [c.document.URL],
            c.name && b.push(c.name),
                c = gm(!1, c, !1),
                b.push(c.width.toString()),
                b.push(c.height.toString()),
                c = ci(b.join(""))) : c = 0;
            0 !== c && Z(a, "ifk", c.toString())
        }
            , ov = function(a) {
            var b = _.C.devicePixelRatio;
            (b = "number" === typeof b ? +b.toFixed(3) : null) && Z(a, "u_sd", b, {
                aa: !1
            })
        }
            , cv = function(a) {
            Z(a, "eid", a.model.K);
            var b = rj().split(",");
            b && Z(a, "debug_experiment_id", b)
        }
            , hv = function(a, b, c) {
            for (var d = _.A(b), e = d.next(); !e.done; e = d.next())
                Dv(a, e.value.getAdUnitPath());
            d = a.j;
            var f = d.N
                , g = d.P;
            d = b.map(function(l) {
                return g[l.getDomId()]
            });
            Z(a, "iu_parts", a.o);
            Z(a, "enc_prev_ius", a.K);
            Z(a, "prev_iu_szs", d.map(function(l) {
                return Gn(l)
            }).join());
            d.some(function(l) {
                return (K = Ab(l),
                    _.F(K, "includes")).call(K, "fluid")
            }) && (e = d.map(function(l) {
                return (K = Ab(l),
                    _.F(K, "includes")).call(K, "fluid") ? "height" : "0"
            }),
                Z(a, "fluid", e));
            Z(a, "fsfs", cd(b, function(l) {
                l = (l = g[l.getDomId()]) && z(l, 12);
                var n = !!z(f, 13);
                return (null == l ? n : l) ? 1 : 0
            }));
            Z(a, "fsbs", cd(b, function(l) {
                var n = a.j
                    , m = n.N;
                l = n.P[l.getDomId()];
                m = m.oa();
                return ((l = l && l.oa()) && zd(l, 3) ? z(l, 3) : m && z(m, 3)) ? 1 : 0
            }));
            Ev(a, b);
            Fv(a, g[b[0].getDomId()]);
            b = _.A([ed(b, g, c), fd(d)]);
            for (c = b.next(); !c.done; c = b.next())
                c.value.forEach(function(l, n) {
                    return void Z(a, n, l)
                });
            var h = {};
            d.forEach(function(l) {
                (l = J(l, 7)) && (h[l] = (h[l] || 0) + 1)
            });
            if (!$h(h)) {
                b = new Za("gpt_sra_setclickurl");
                var k = [];
                _.ab(h, function(l, n) {
                    k.push(n.length + ":" + l)
                });
                u(b, "lenfreqs", k.join());
                $a(b);
                bb(b, _.t(58))
            }
        }
            , Fv = function(a, b) {
            (_.x(364) ? z(a.j.N, 6) : a.B) || !J(b, 7) || Z(a, "click", J(b, 7))
        }
            , Gv = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if ("" !== b[c]) {
                    for (var d = !1, e = 0; e < a.o.length; e++)
                        if (b[c] === a.o[e]) {
                            d = !0;
                            break
                        }
                    d || a.o.push(b[c])
                }
        }
            , Hv = function(a, b) {
            for (var c = "", d = 0; d < b.length; d++) {
                if (0 < d)
                    c += "/";
                else if ("" === b[0])
                    continue;
                for (var e = 0; e < a.o.length; e++)
                    if (b[d] === a.o[e]) {
                        c += e;
                        break
                    }
            }
            return c
        }
            , Dv = function(a, b) {
            var c = "";
            "" !== b && (b = b.split("/").map(function(d) {
                return d.replace(/,/g, ":")
            }),
                Gv(a, b),
                c = Hv(a, b));
            a.K.push(c)
        }
            , Cv = function(a) {
            var b = a.model.j.map(function(c) {
                return hu(a.model, c)
            });
            Z(a, "ucis", b, {
                sa: "|"
            })
        }
            , bv = function(a) {
            var b = a.j.N;
            z(b, 21) && (Z(a, "hxva", 1, {
                aa: !1
            }),
                Z(a, "cmsid", J(b, 23)),
                Z(a, "vid", J(b, 22)));
            isNaN(a.model.Ua) || Z(a, "pod", a.model.Ua, {
                aa: !1
            });
            isNaN(a.model.Va) || Z(a, "ppos", a.model.Va, {
                aa: !1
            });
            (b = J(b, 29)) && Z(a, "scor", b, {
                aa: !1
            })
        }
            , Ev = function(a, b) {
            var c = cd(b, function(d) {
                var e, f;
                d = null !== (f = null === (e = a.l.j.get(d)) || void 0 === e ? void 0 : e.Ac) && void 0 !== f ? f : 0;
                e = _.sj();
                return Math.round(Math.min((d && e ? e - d : 0) / 1E3, 1800))
            }, void 0, "~");
            Z(a, "ris", c);
            b = cd(b, function(d) {
                if (a.X) {
                    var e = a.l.j.get(d);
                    e && (e.Ac = _.sj() || 0,
                        e.Ic++)
                }
                return po(a.l, d)
            });
            Z(a, "rcs", b)
        }
            , xv = function(a) {
            if (!(_.t(221) || _.x(454) || _.x(446) && !_.t(254))) {
                var b = _.xd(1918)
                    , c = hb(a.m, window);
                if (c) {
                    var d = new Bp;
                    var e = _.Kb(1917, -1);
                    b = _.A(b);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        f = f.value;
                        var g = Lr().get(f, c);
                        if (g.getError())
                            oc(g.getError(), f, g.errorMessage);
                        else if (g = g.lc) {
                            var h = Mr(g);
                            if (0 === h || 1 === h)
                                0 <= e && J(g, 2).length > e ? oc(12, f) : (qh(d, 2, g, Ep),
                                    oc(19, f))
                        }
                    }
                    T(d, Ep, 2).length ? (c = new Rg,
                        e = T(d, Cp, 1),
                    0 < e.length && ah(c, 1, e, Fp),
                        e = T(d, Ep, 2),
                    0 < e.length && ah(c, 2, e, Gp),
                        d = Pg(Ug(c), void 0)) : d = null
                } else
                    d = null;
                Z(a, "a3p", d)
            }
        }
            , Z = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.I.has(b) || null == c || a.F.push({
                qd: b,
                value: c,
                options: d
            })
        }
            , Xu = function(a) {
            var b, c;
            var d = null !== (c = null === (b = en(a.j.N)) || void 0 === b ? void 0 : z(b, 9)) && void 0 !== c && c || !z(a.m, 5) ? "https://pagead2.googlesyndication.com/gampad/ads?" : "" + _.t(247) + "/gampad/ads?";
            a.G = d;
            for (d = 0; d < a.F.length; d++) {
                b = a;
                c = a.F[d];
                var e = Iv(c);
                e && ("?" !== b.G[b.G.length - 1] && (b.G += "&"),
                    b.G += c.qd + "=" + e)
            }
        }
            , Iv = function(a) {
            var b = a.value
                , c = a.options
                , d = void 0 === c.aa ? !0 : c.aa;
            a = void 0 === c.sa ? "," : c.sa;
            c = void 0 === c.ma ? !1 : c.ma;
            return "object" !== typeof b ? null == b || !c && 0 === b ? null : Jv(b, d) : Array.isArray(b) && b.length ? b.map(function(e) {
                return Jv(e, d)
            }).join(Jv(a, d)) : null
        }
            , Bv = new _.Cb(-9,-9)
            , Jv = function(a, b) {
            a = a.toString();
            return b ? encodeURIComponent(a) : a
        };
        var Mv = function(a) {
            var b = this;
            this.j = new D.Map;
            this.m = new D.Map;
            this.tb = Ka.D();
            window.performance && $c(window.performance.now) && (_.E(window, "DOMContentLoaded", w(334, function() {
                for (var c = _.A(b.j), d = c.next(); !d.done; d = c.next()) {
                    var e = _.A(d.value);
                    d = e.next().value;
                    e = e.next().value;
                    Kv(b, d, e) && b.j.delete(d)
                }
            })),
                xk(a, Ek, function(c) {
                    var d = c.detail;
                    c = d.jc;
                    d = d.bb;
                    c = So(Xd.D(), c);
                    Lv(b, c.getSlotId(), d)
                }),
                xk(a, Fk, function(c) {
                    c = c.detail;
                    var d = c.jc;
                    c = c.bb;
                    d = So(Xd.D(), d).getSlotId();
                    var e = b.m.get(d);
                    null != e ? Qt(e, c) : Lv(b, d, c)
                }))
        }
            , Lv = function(a, b, c) {
            Kv(a, b, c) ? a.j.delete(b) : (a.j.set(b, c),
                _.Yd(b, function() {
                    a.j.delete(b)
                }))
        }
            , Kv = function(a, b, c) {
            var d = To(Xd.D(), b);
            if (!d)
                return !1;
            if ((d = xb(d.getSlotId())) && "DIV" === d.nodeName) {
                var e = _.x(84);
                d = new Ot({
                    L: window,
                    tb: a.tb,
                    kb: d,
                    qa: function(f) {
                        Va(336, f, 1)
                    },
                    Dd: e
                });
                if (d.m)
                    return Qt(d, c),
                        a.m.set(b, d),
                        io(fo.D(), b, function() {
                            return void a.m.delete(b)
                        }),
                        !0
            }
            return !1
        };
        /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
        var Nv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var Ov = function(a, b) {
            a = new _.Xf('<div id="' + bg(a) + '"></div>',null,_.Wf);
            b.write(_.Yf(a))
        }
            , Pv = function(a, b) {
            return Math.max("string" === typeof a ? _.F(a, "endsWith").call(a, "px") ? parseInt(a, 10) : 0 : a, b) + "px"
        }
            , Qv = function(a, b, c) {
            a.style.minWidth = Pv(a.style.minWidth, b);
            a.style.minHeight = Pv(a.style.minHeight, c)
        }
            , Rv = function(a, b, c, d, e) {
            a = Qh(new Bh(a), "DIV");
            a.id = c;
            a.name = c;
            c = a.style;
            c.border = "0pt none";
            d && (c.margin = "auto",
                c.textAlign = "center");
            e && (d = Array.isArray(e),
                c.width = d ? e[0] + "px" : "100%",
                c.height = d ? e[1] + "px" : "0%");
            b.appendChild(a);
            return a
        }
            , Tv = function(a, b, c, d, e, f, g, h, k, l, n, m, p, q, v) {
            var B = Sv, I = Ho.D().l, H;
            Array.isArray(d) ? H = new _.Ah(d[0],d[1]) : H = 1;
            d = null;
            null !== c && (d = null === n ? Ys(c) : "<startguard>" + c + "<endguard>");
            return new At({
                Zb: a,
                zc: b,
                dd: B,
                content: d,
                size: H,
                kd: {
                    info: function() {},
                    M: function() {},
                    error: function() {}
                },
                Xc: l,
                Cc: e,
                Jc: h || void 0,
                permissions: {
                    zb: zd(f, 1) ? !!z(f, 1) : !k,
                    Ab: zd(f, 2) ? !!z(f, 2) : !1
                },
                lb: !!Rd().fifWin,
                zd: Bo(),
                Vc: Co(),
                Mc: !1,
                hostpageLibraryTokens: I,
                qa: Va,
                Xa: null === n ? void 0 : n,
                uniqueId: p,
                Gb: m,
                Ja: g || void 0,
                ua: q || void 0,
                va: v || void 0
            })
        }
            , Uv = function(a, b, c) {
            var d = void 0 === d ? !0 : d;
            var e = void 0 === e ? !0 : e;
            b = Ys(b, "<script>var inDapIF=true,inGptIF=true;\x3c/script>");
            try {
                var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                d && Rf() && f.open("text/html", "replace");
                c();
                f.write(_.Yf(new _.Xf(b,null,_.Wf)));
                a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && vf(a.contentWindow.location.href, "#") && a.contentWindow.history.replaceState(null, "", "#" + Math.random());
                e && f.close()
            } catch (g) {
                Wa(653, g, !0)
            }
        }
            , Vv = function(a, b, c) {
            var d = Ab(c);
            c = xb(b, a);
            if (_.x(339043665) && c) {
                var e = qd(c)
                    , f = e.depth;
                e = e.Cd.getBoundingClientRect();
                0 === (null == e ? void 0 : e.height) && rd(a, e, f)
            }
            f = null == c ? void 0 : c.getBoundingClientRect();
            if (e = _.Kb(470)) {
                b = a = 0;
                d = _.A(d);
                for (var g = d.next(); !g.done; g = d.next())
                    if (g = g.value,
                        Array.isArray(g)) {
                        var h = _.A(g)
                            , k = h.next().value;
                        h = h.next().value;
                        if (!(1 >= k || 1 >= h))
                            switch (e) {
                                case 3:
                                    return g.slice();
                                case 7:
                                    return [k, 0];
                                case 4:
                                    250 >= h && (b = Math.max(b, h));
                                case 5:
                                    a = Math.min(a || Infinity, k);
                                    break;
                                case 2:
                                case 6:
                                    a = Math.min(a || Infinity, k);
                                    b = Math.min(b || Infinity, h);
                                    break;
                                case 8:
                                case 9:
                                    a = a || k,
                                        b = Math.min(b || Infinity, h)
                            }
                    }
                if (6 === e || 9 === e)
                    if (f = (null == f ? void 0 : f.top) > _.C.innerHeight,
                    c && !f)
                        return [a, 0];
                return a || b ? [a, b] : null
            }
            if (!d.length)
                return null;
            c = d[0].slice();
            if (1 < d.length) {
                a: if ((f = xb(b, a)) && f.style.height && f.style.width)
                    for (f = [f.style.width, f.style.height],
                             e = 0; e < f.length; ++e)
                        if (2 < f[e].length && "px" == f[e].substring(f[e].length - 2))
                            f[e] = parseInt(f[e], 10);
                        else {
                            f = null;
                            break a
                        }
                else
                    f = null;
                c = f || c
            }
            return c
        }
            , Wv = function(a, b, c) {
            if (!Tn(b, a)) {
                var d = xb(b, a);
                if (d) {
                    var e = c.N;
                    c = c.P[b.getDomId()];
                    c = Vv(a, b, c);
                    if (_.x(432) || _.x(464)) {
                        if (_.x(432) && Array.isArray(c)) {
                            var f = _.A(c);
                            c = f.next().value;
                            f = f.next().value;
                            d.style.minWidth || (d.style.minWidth = c + "px");
                            d.style.minHeight || (d.style.minHeight = f + "px")
                        }
                        _.x(464) && Rv(a, d, Zn(b), !!z(e, 15), [0, 0])
                    } else
                        Rv(a, d, Zn(b), !!z(e, 15), c),
                        _.x(3580985) && Array.isArray(c) && (b = _.A(c),
                            a = b.next().value,
                            b = b.next().value,
                            Qv(d, a, b))
                }
            }
        };
        var Xv = new D.Map([[2, {
            nd: "page_level_ads"
        }]]), Yv = function() {}, aw;
        Yv.D = function() {
            throw Error("Must be overridden");
        }
        ;
        _.Zv = function(a) {
            this.j = a = void 0 === a ? Xv : a;
            this.m = new D.Map;
            this.loaded = new D.Set;
            this.l = null
        }
        ;
        _.L(_.Zv, Yv);
        _.$v = function(a, b) {
            b = b.module;
            a.m.has(b) || a.m.set(b, new Lc);
            return a.m.get(b)
        }
        ;
        aw = function(a, b) {
            var c = b.module;
            b = "_gpt_js_load_" + c + "_";
            var d = w(340, function(e) {
                if (a.j.has(c) && "function" === typeof e) {
                    var f = a.j.get(c);
                    f = (void 0 === f.Wc ? [] : f.Wc).map(function(g) {
                        return _.$v(a, g).promise
                    });
                    D.Promise.all(f).then(function() {
                        e.call(window, _)
                    })
                }
            });
            Object.defineProperty(Rd(), b, {
                value: function(e) {
                    if (d) {
                        var f = d;
                        d = null;
                        f(e)
                    }
                },
                writable: !1,
                enumerable: !1
            })
        }
        ;
        _.Zv.prototype.load = function(a) {
            var b, c = _.$v(this, a), d = (null !== (b = this.j.get(a.module)) && void 0 !== b ? b : {}).nd;
            if (!d)
                throw Error("cannot load invalid module: " + d);
            if (!this.loaded.has(a.module)) {
                var e = _.t(172);
                e = e && "pagead2.googlesyndication.com" === Th((e.src || "").match(_.Sh)[3] || null);
                var f = this.l;
                d = qf(Ia(e ? f.Tc(d) : f.Uc(d)).toString());
                d = (e = _.Kb(25)) ? sf(d, {
                    cb: e
                }) : d;
                aw(this, a);
                Xh(document, d);
                this.loaded.add(a.module)
            }
            return c.promise
        }
        ;
        Le(_.Zv);
        var bw = function(a, b, c, d, e, f, g, h) {
            Y.call(this, 682);
            this.l = a;
            this.format = b;
            this.slotId = c;
            this.L = d;
            this.C = Ar(this);
            this.o = X(this, e);
            this.A = W(this, f);
            this.H = W(this, g);
            this.F = X(this, h)
        };
        _.L(bw, Y);
        bw.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e, f, g, h, k, l, n, m, p;
                return Zb(b, function(q) {
                    d = c;
                    if (2 !== c.format && 3 !== c.format || !wr(c.o) || !ih(c.o.value))
                        return q.return();
                    e = c.F.value;
                    f = e.$c;
                    g = _.ko(c.l, c.slotId);
                    h = c.H.value;
                    k = c.A.value;
                    _.wi(k, {
                        "max-height": "30vh",
                        overflow: "hidden"
                    });
                    if (cw)
                        cw.kc(k);
                    else {
                        cw = new f(c.format,k,c.L,h,c.l,c.slotId);
                        l = {};
                        n = _.A(T(c.o.value, vp, 13));
                        for (m = n.next(); !m.done; m = n.next())
                            p = m.value,
                                l[J(p, 1)] = J(p, 2);
                        cw.Pd(l);
                        cw.ob();
                        ho(c.l, c.slotId, function() {
                            cw && (cw.pa(),
                                cw = null);
                            g && _.mo(d.l, d.slotId)
                        })
                    }
                    _.Yd(c, function() {
                        return _.Nh(k)
                    });
                    c.C.notify();
                    q.j = 0
                })
            })
        }
        ;
        var cw = null;
        var dw = function(a, b, c, d, e, f, g, h) {
            Y.call(this, 683);
            this.slotId = a;
            this.format = b;
            this.J = c;
            this.o = X(this, d);
            this.l = W(this, e);
            this.H = W(this, f);
            this.A = X(this, g);
            this.F = X(this, h);
            this.I = _.x(523) ? Cd(a, Gk) : D.Promise.resolve(void 0)
        };
        _.L(dw, Y);
        dw.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e, f, g, h, k, l, n, m, p;
                return Zb(b, function(q) {
                    if (1 == q.j) {
                        d = c;
                        e = c.o.value;
                        if (!e || 5 !== c.format)
                            return q.return();
                        f = c.H.value;
                        g = c.l.value;
                        h = c.F.value;
                        k = h.ed;
                        l = new _.hs;
                        n = new k(window,g,f,l,c.J,"6499" === Hb(c.slotId.getAdUnitPath()),function() {
                                return void d.pa()
                            }
                            ,c.A.value);
                        _.uk(c, n);
                        m = T(e, vp, 13);
                        p = Bd(m);
                        n.nb(p);
                        return $b(q, c.I, 2)
                    }
                    if (c.W)
                        return q.return();
                    n.ac();
                    q.j = 0
                })
            })
        }
        ;
        var ew = function() {
            this.module = 2
        };
        ew.prototype.toString = function() {
            return String(this.module)
        }
        ;
        _.fw = new ew;
        var gw = function(a, b, c) {
            Y.call(this, 846);
            this.format = a;
            this.C = this.m();
            this.l = X(this, b);
            this.o = X(this, c)
        };
        _.L(gw, Y);
        gw.prototype.j = function() {
            var a;
            return Yb(this, function c() {
                var d = this, e, f, g, h;
                return Zb(c, function(k) {
                    if (1 == k.j) {
                        e = (2 === d.format || 3 === d.format) && !(null === (a = d.l.value) || void 0 === a || !ih(a));
                        f = 5 === d.format && d.o.value;
                        if (!e && !f) {
                            ur(d.C);
                            k.j = 0;
                            return
                        }
                        g = d.C;
                        h = g.j;
                        return $b(k, _.Zv.D().load(_.fw), 3)
                    }
                    h.call(g, k.m);
                    k.j = 0
                })
            })
        }
        ;
        var hw = function(a, b, c) {
            Y.call(this, 696);
            this.slotId = a;
            this.l = b;
            Cr(this, c);
            this.o = new D.Promise(function(d) {
                    Ed(a, "canceled").then(d);
                    _.x(416) || Ed(a, "closed").then(d)
                }
            )
        };
        _.L(hw, Y);
        hw.prototype.j = function() {
            return Yb(this, function b() {
                var c = this;
                return Zb(b, function(d) {
                    switch (d.j) {
                        case 1:
                            return $b(d, c.o, 2);
                        case 2:
                            if (c.W)
                                return d.return();
                            if (_.x(416)) {
                                d.j = 3;
                                break
                            }
                            return $b(d, c.l.dispatchEvent("rewardedSlotCanceled", 703, new ip(c.slotId,"publisher_ads")), 3);
                        case 3:
                            return $b(d, c.l.dispatchEvent("rewardedSlotClosed", 703, new jp(c.slotId,"publisher_ads")), 5);
                        case 5:
                            c.pa(),
                                d.j = 0
                    }
                })
            })
        }
        ;
        var iw = function(a, b, c) {
            Y.call(this, 697);
            this.slotId = a;
            this.l = b;
            this.o = Ed(a, "completed");
            Cr(this, c)
        };
        _.L(iw, Y);
        iw.prototype.j = function() {
            return Yb(this, function b() {
                var c = this;
                return Zb(b, function(d) {
                    if (1 == d.j)
                        return $b(d, c.o, 2);
                    if (3 != d.j)
                        return c.W ? d.return() : $b(d, c.l.dispatchEvent("rewardedSlotCompleted", 704, new kp(c.slotId,"publisher_ads")), 3);
                    c.pa();
                    d.j = 0
                })
            })
        }
        ;
        var jw = function(a, b, c) {
            Y.call(this, 694);
            this.slotId = a;
            this.l = b;
            Cr(this, c);
            this.o = Ed(a, "granted")
        };
        _.L(jw, Y);
        jw.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e;
                return Zb(b, function(f) {
                    if (1 == f.j)
                        return $b(f, c.o, 2);
                    if (3 != f.j)
                        return d = f.m,
                            e = d.payload,
                            c.W ? f.return() : $b(f, c.l.dispatchEvent("rewardedSlotGranted", 702, new hp(c.slotId,"publisher_ads",null !== e && void 0 !== e ? e : null)), 3);
                    c.pa();
                    f.j = 0
                })
            })
        }
        ;
        var kw = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        }
            , lw = function(a, b, c, d) {
            Y.call(this, 693);
            this.L = a;
            this.C = Ar(this);
            this.l = W(this, b);
            this.o = W(this, c);
            Cr(this, d);
            this.A = new _.rs(this.L)
        };
        _.L(lw, Y);
        lw.prototype.j = function() {
            var a = this
                , b = 0 === Ob() ? "rgba(1,1,1,0.5)" : "white";
            _.wi(this.o.value, _.F(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, kw));
            _.Yd(this, _.ys(this.L.document, this.L));
            Ph(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.L === this.L.top) {
                this.L.location.hash = "goog_rewarded";
                var c = new vs(this.A);
                null == c.j && (c.j = ts(c.m));
                _.Yd(this, function() {
                    if (null != c.j) {
                        var d = c.m;
                        delete d.j.maxZIndexRestrictions[c.j];
                        ss(d);
                        c.j = null
                    }
                    "goog_rewarded" === a.L.location.hash && (a.L.location.hash = "")
                })
            }
            this.C.notify()
        }
        ;
        var mw = function(a, b, c) {
            Y.call(this, 695);
            this.L = a;
            this.l = W(this, b);
            Cr(this, c)
        };
        _.L(mw, Y);
        mw.prototype.j = function() {
            if (this.L === this.L.top)
                var a = Ph(this.l.value)
                    , b = iu(this, 503, this.L, "hashchange", function(c) {
                    vf(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                        type: "rewarded",
                        message: "back_button"
                    }), "*"),
                        b())
                })
        }
        ;
        var nw = function(a, b, c) {
            Y.call(this, 692);
            this.slotId = a;
            this.l = b;
            this.C = Ar(this);
            this.o = W(this, c)
        };
        _.L(nw, Y);
        nw.prototype.j = function() {
            var a;
            return Yb(this, function c() {
                var d = this, e, f, g, h;
                return Zb(c, function(k) {
                    if (1 == k.j)
                        return e = d.o.value,
                            f = new Lc,
                            g = f.promise,
                            h = f.resolve,
                            d.l.dispatchEvent("rewardedSlotReady", 701, new gp(d.slotId,"publisher_ads",h,null !== (a = e.payload) && void 0 !== a ? a : null)),
                            $b(k, g, 2);
                    if (d.W)
                        return k.return();
                    d.C.notify();
                    d.pa();
                    k.j = 0
                })
            })
        }
        ;
        var ow = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        }
            , pw = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        }
            , qw = function(a, b) {
            Y.call(this, 691);
            this.C = this.m();
            this.l = W(this, b);
            this.o = Ed(a, "prefetched")
        };
        _.L(qw, Y);
        qw.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d;
                return Zb(b, function(e) {
                    if (1 == e.j)
                        return _.wi(c.l.value, _.F(Object, "assign").call(Object, {
                            position: "absolute"
                        }, 0 === Ob() ? pw : ow)),
                            $b(e, c.o, 2);
                    d = e.m;
                    if (c.W)
                        return e.return();
                    c.C.j(d);
                    e.j = 0
                })
            })
        }
        ;
        var rw = function(a, b, c, d, e, f) {
            Y.call(this, 688);
            4 === b && (this.l = new Cc,
                _.uk(this, this.l),
                b = new qw(a,e),
                V(this.l, b),
                b = new nw(a,c,b.C),
                V(this.l, b),
                f = new lw(d,e,f,b.C),
                V(this.l, f),
                V(this.l, new mw(d,e,f.C)),
                V(this.l, new jw(a,c,b.C)),
                V(this.l, new hw(a,c,b.C)),
                V(this.l, new iw(a,c,b.C)))
        };
        _.L(rw, Y);
        rw.prototype.j = function() {
            var a;
            null === (a = this.l) || void 0 === a ? void 0 : Ec(a)
        }
        ;
        var Sv = "3rd party ad content"
            , sw = function(a) {
            Sv = a
        };
        var tw = function(a, b, c) {
            wk.call(this);
            this.m = a;
            this.l = b;
            this.j = c
        };
        _.L(tw, Tk);
        tw.prototype.Ma = function() {
            return new su(this,this.l,this.j)
        }
        ;
        tw.prototype.getSlotId = function() {
            return this.m
        }
        ;
        var uw = function() {
            this.j = {}
        }
            , ww = function(a, b, c) {
            var d;
            c && (d = "//" + c + ".safeframe.googlesyndication.com");
            c = tt(b, Bo(), Co(), !0, d);
            a.j[c] || (a.j[c] = 1,
                Qr() ? vw(a, c) : Rd().fifWin || (b = b.document,
                    a = Qh(new Bh(b), "IFRAME"),
                    a.src = c,
                    a.style.visibility = "hidden",
                    a.style.display = "none",
                    b = b.getElementsByTagName("script"),
                0 < b.length && (b = b[b.length - 1],
                b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))))
        }
            , vw = function(a, b) {
            var c = Rr(document, b, "prefetch", "");
            c && _.E(c, "load", function() {
                a.j[b] = 3;
                c && _.Nh(c)
            })
        };
        Le(uw);
        var xw = function(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d)
                c[d - 1] = arguments[d];
            Y.call(this, 675);
            this.l = [];
            for (d = 0; d < a; ++d)
                this.l.push(Ar(this));
            c = _.A(c);
            for (d = c.next(); !d.done; d = c.next())
                Cr(this, d.value)
        };
        _.L(xw, Y);
        xw.prototype.j = function() {
            for (var a = _.A(this.l), b = a.next(); !b.done; b = a.next())
                b.value.notify()
        }
        ;
        he.Object.defineProperties(xw.prototype, {
            C: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.l[0]
                }
            }
        });
        var yw = function(a, b, c) {
            Y.call(this, 834);
            this.o = a;
            this.l = b;
            this.startTime = c;
            this.A = this.m()
        };
        _.L(yw, Y);
        yw.prototype.j = function() {
            var a = this
                , b = this.o.length
                , c = this.o.filter(function(e) {
                var f = ro(a.l, e);
                so(a.l, e);
                return !f
            })
                , d = this.startTime;
            _.x(526) && eb("gpt_urg_spr", function(e) {
                $a(e);
                u(e, "start_time", d);
                u(e, "end_time", _.kc());
                u(e, "num_slots_filtered", b - c.length)
            }, {
                la: 1
            });
            this.A.j(c)
        }
        ;
        var zw = function(a, b, c, d, e, f) {
            Y.call(this, 810);
            this.o = a;
            this.F = b;
            this.H = c;
            this.I = d;
            this.A = e;
            this.L = f;
            this.l = this.m()
        };
        _.L(zw, Y);
        zw.prototype.j = function() {
            var a = this
                , b = this.o.j;
            !this.F && 1 < b.length && (b = [b[0]]);
            b = b.filter(function(c) {
                c = c.getSlotId();
                var d = a.H.P[c.getDomId()];
                if (Sb(a.L) && 4 == Gb(d)) {
                    Sd.D().M(Sl(String(c.getAdUnitPath())));
                    var e = !0
                } else
                    e = !1;
                c = _.x(355925688) && Lb(c, d, a.L, a.A);
                return !e && !c
            });
            30 < b.length && (this.I.M(Nl("30", String(b.length), String(b.length - 30))),
                b = b.slice(0, 30));
            this.l.j(b)
        }
        ;
        var Aw = function(a) {
            Y.call(this, 826);
            this.l = a;
            this.C = this.m()
        };
        _.L(Aw, Y);
        Aw.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e;
                return Zb(b, function(f) {
                    if (1 == f.j)
                        return d = c.C,
                            e = d.G,
                            $b(f, c.l.l, 2);
                    e.call(d, f.m);
                    f.j = 0
                })
            })
        }
        ;
        Aw.prototype.ca = function() {
            ur(this.C)
        }
        ;
        var Bw = function(a, b, c, d, e, f, g, h, k, l, n, m) {
            Y.call(this, 785, Math.max(_.Kb(505), _.Kb(462), _.Kb(1927)));
            this.F = a;
            this.U = b;
            this.A = c;
            this.R = d;
            this.O = e;
            this.Z = f;
            this.V = g;
            this.Y = h;
            this.I = k;
            this.H = l;
            this.l = this.m();
            this.o = Br(this, l);
            this.J = X(this, n);
            this.ba = Br(this, k);
            this.$ = Br(this, m)
        };
        _.L(Bw, Y);
        Bw.prototype.j = function() {
            var a, b, c;
            return Yb(this, function e() {
                var f = this, g, h, k;
                return Zb(e, function(l) {
                    if (1 == l.j) {
                        g = f;
                        if (_.x(360310855) && (null === (a = f.J.value) || void 0 === a || !a.length))
                            return f.l.j(""),
                                l.return();
                        h = !_.x(200);
                        gu(f.F, nc(), f.V, f.Y, h ? Zr() : "", h ? $r() : "", h ? as() : "", null !== (b = f.ba.value) && void 0 !== b ? b : "", f.$.value);
                        f.o.value && (f.A.m = f.o.value);
                        k = new Vu(f.U,f.A,f.R,f.F,f.O,f.Z,!1,null === (c = f.J.value) || void 0 === c ? void 0 : c.map(function(n) {
                            return n.getSlotId()
                        }));
                        f.l.j(Ma(La(Yu(k))));
                        return $b(l, f.I.promise, 2)
                    }
                    if (4 != l.j) {
                        if (f.W)
                            return l.return();
                        eb("gpt_paw", function(n) {
                            var m;
                            $a(n);
                            u(n, "sig", null !== (m = g.I.A) && void 0 !== m ? m : -1);
                            u(n, "req", g.T)
                        }, {
                            la: _.Kb(517)
                        });
                        f.o.value ? l = $b(l, f.H.promise, 4) : (l.j = 0,
                            l = void 0);
                        return l
                    }
                    eb("gpt_etu", function(n) {
                        var m;
                        $a(n);
                        u(n, "sig", null !== (m = g.H.A) && void 0 !== m ? m : -1);
                        u(n, "req", g.T)
                    });
                    l.j = 0
                })
            })
        }
        ;
        var Cw = function(a, b, c, d, e, f) {
            Y.call(this, 798);
            this.J = a;
            this.A = b;
            this.l = c;
            this.F = d;
            this.H = e;
            this.o = this.m();
            this.I = W(this, f)
        };
        _.L(Cw, Y);
        Cw.prototype.j = function() {
            for (var a = this, b = new D.Map, c = _.A(this.J), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = Pn(this.l.N) ? Dw(this, d) : function() {
                        return a.I.value
                    }
                ;
                b.set(d.getSlotId(), e)
            }
            this.o.j(b)
        }
        ;
        var Dw = function(a, b) {
            var c = nc();
            return yb(function() {
                var d = new fu;
                d.m = "ldjh";
                d.X = "fifs";
                d.ta = 1;
                d.j = [b];
                d.K = c;
                d.B = a.H;
                var e = new dm;
                d = new Vu(_.x(364),a.A,a.F,d,e,a.l,!0,[b.getSlotId()]);
                return La(Yu(d))
            })
        };
        var Ew = function(a) {
            Y.call(this, 802);
            this.L = a;
            this.l = this.m()
        };
        _.L(Ew, Y);
        Ew.prototype.j = function() {
            var a = this
                , b = _.Kb(462);
            if (this.W || 0 >= b)
                this.l.j("");
            else {
                var c = function(e) {
                    Va(a.id, e);
                    a.l.j("")
                };
                try {
                    var d = Oc(this.L);
                    d ? d.then(function(e) {
                        e.length > _.Kb(494, 5E3) ? c(Error("ML:" + e.length)) : a.l.j(e)
                    }).catch(c) : this.l.j("")
                } catch (e) {
                    c(e)
                }
            }
        }
        ;
        var Fw = function(a, b, c, d, e, f, g) {
            Y.call(this, 833);
            this.F = b;
            this.H = c;
            this.A = d;
            this.o = e;
            this.l = f;
            this.window = g;
            Cr(this, a)
        };
        _.L(Fw, Y);
        Fw.prototype.j = function() {
            var a;
            if ("wbn" !== this.F) {
                var b = !(null === (a = this.H) || void 0 === a ? 0 : z(a, 4));
                ww(this.l, this.window, Sn(this.A, this.o));
                b && ww(this.l, this.window)
            }
        }
        ;
        var Gw = function(a, b, c, d) {
            _.tk.call(this);
            this.j = a;
            this.o = b;
            this.A = c;
            this.F = d;
            this.B = "";
            this.m = -1;
            this.state = 1;
            this.l = ""
        };
        _.L(Gw, _.tk);
        var Hw = function(a, b) {
            a.state = 4;
            Wa(289, b, !0)
        }
            , Iw = function(a) {
            return "(" + [a.state, a.l.length, a.j.length].join("|") + ")"
        };
        var Lw = function(a, b, c, d, e, f, g, h, k, l, n) {
            l = void 0 === l ? !0 : l;
            Y.call(this, 788, _.Kb(1935));
            this.O = a;
            this.A = b;
            this.F = c;
            this.R = k;
            this.withCredentials = l;
            this.H = Ar(this);
            this.J = 0;
            this.I = !1;
            this.l = null !== n && void 0 !== n ? n : new XMLHttpRequest;
            this.V = W(this, d);
            this.U = W(this, e);
            qr(this.B, f, !0);
            Jw || Kw();
            this.o = new Gw(this.A,this.F,g,h);
            _.uk(this, this.o)
        };
        _.L(Lw, Y);
        Lw.prototype.j = function() {
            var a = this;
            if (!this.W) {
                if (!this.A.length) {
                    if (_.x(360310855)) {
                        this.H.notify();
                        return
                    }
                    throw Error("Slot list cannot be empty");
                }
                Sc(this.R);
                zj(Ka.D(), "3", J(this.F.P[this.A[0].getDomId()], 20));
                this.l.open("GET", this.V.value);
                this.l.withCredentials = this.withCredentials;
                Wt(this.l);
                this.l.onreadystatechange = function() {
                    Mw(a, !1)
                }
                ;
                this.l.onload = function() {
                    Mw(a, !0)
                }
                ;
                this.l.onerror = function() {
                    a.W || Hw(a.o, Error("XHR error"))
                }
                ;
                this.l.send();
                this.H.notify();
                Jw();
                Nw(this)
            }
        }
        ;
        var Nw = function(a) {
            for (var b, c = _.kc(), d = _.A(a.A), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = J(a.F.P[e.getDomId()], 20)
                    , g = null !== (b = a.U.value.get(e)) && void 0 !== b ? b : function() {
                        return ""
                    }
                ;
                no(a.O, e, c);
                e.dispatchEvent(Ck, a.id, {
                    tc: g,
                    bb: f
                })
            }
        }
            , Mw = function(a, b) {
            if (!a.W)
                try {
                    if (3 === a.l.readyState || 4 === a.l.readyState)
                        if (300 <= a.l.status || 200 > a.l.status && _.x(445))
                            a.I || a.W || Hw(a.o, Error("xhr_err-" + a.l.status)),
                                a.I = !0;
                        else {
                            var c = a.l.responseText.substr(a.J);
                            if (c) {
                                var d = a.o;
                                if (!d.W && 0 !== c.length)
                                    if (1 !== d.state && 2 !== d.state)
                                        Hw(d, Error("state err: " + Iw(d)));
                                    else {
                                        d.l && (c = d.l + c);
                                        var e = 0
                                            , f = !1;
                                        do {
                                            var g = c.indexOf("\n", e);
                                            f = -1 !== g;
                                            if (!f)
                                                break;
                                            var h = d
                                                , k = c.substr(e, g - e);
                                            if (1 === h.state)
                                                h.B = k,
                                                    h.m + 1 >= h.j.length ? Hw(h, Error("too many responses for " + h.j.length + " slots: " + Iw(h))) : (++h.m,
                                                        h.state = 2);
                                            else {
                                                var l = h;
                                                zj(Ka.D(), "4", J(l.o.P[l.j[l.m].getDomId()], 20));
                                                try {
                                                    var n = {
                                                        kind: 0,
                                                        na: Fi(k)
                                                    };
                                                    h.A(h.j[h.m], h.B, n, h.m >= h.j.length - 1);
                                                    h.B = ""
                                                } catch (q) {}
                                                h.state = 1
                                            }
                                            e = g + 1
                                        } while (4 !== d.state && f && e < c.length);
                                        d.l = c.substr(e)
                                    }
                            }
                            a.J = a.l.responseText.length;
                            if (b && 4 === a.l.readyState) {
                                var m = a.o;
                                if (!m.W)
                                    if (1 !== m.state || m.l)
                                        Hw(m, Error("state err at EOS: " + Iw(m)));
                                    else {
                                        m.state = 3;
                                        for (var p = m.m + 1; p < m.j.length; ++p)
                                            m.F(m.j[p], p === m.j.length - 1)
                                    }
                            }
                        }
                } catch (q) {
                    q instanceof Error && !a.W && Hw(a.o, q)
                }
        }
            , Jw = void 0
            , Kw = function() {
            var a = void 0 === a ? window.performance : a;
            Jw = _.Ze(function() {
                a && a.mark && a.mark("gpt-first-ad-request")
            })
        };
        var Ow = function(a) {
            Y.call(this, 820);
            this.L = a;
            this.C = this.m()
        };
        _.L(Ow, Y);
        Ow.prototype.j = function() {
            return Yb(this, function b() {
                var c, d = this, e;
                return Zb(b, function(f) {
                    if (1 == f.j)
                        return c = _.Kb(505),
                            d.W || 0 >= c ? (d.C.j(""),
                                f.return()) : $b(f, Wc(d.L), 2);
                    e = f.m;
                    d.C.j(null !== e && void 0 !== e ? e : "");
                    f.j = 0
                })
            })
        }
        ;
        var Pw = function() {
            Y.call(this, 858);
            this.C = Ar(this)
        };
        _.L(Pw, Y);
        Pw.prototype.j = function() {
            return Yb(this, function b() {
                var c, d = this, e;
                return Zb(b, function(f) {
                    if (1 == f.j)
                        return f.l = 2,
                            c = _.t(258),
                            $b(f, c, 4);
                    2 != f.j ? (d.C.notify(),
                        f.j = 0,
                        f.l = 0) : (e = bc(f),
                    e instanceof Error && d.K(e),
                        d.C.notify(),
                        f.j = 0)
                })
            })
        }
        ;
        var Qw = function(a, b, c, d, e) {
            _.tk.call(this);
            this.slotId = b;
            this.j = d;
            this.A = e;
            this.va = null;
            this.B = new Bh(a)
        };
        _.L(Qw, _.tk);
        var Rw = function(a, b, c) {
            var d, e, f = c.ia, g = c.sb, h = c.Ga, k = c.Ha, l = c.bd, n = c.Ka, m = c.Nb, p = c.isBackfill, q = c.Pa, v = c.Ta, B = c.Nc, I = c.Ja;
            c = c.ua;
            g && (g.dataset.googleQueryId = null !== k && void 0 !== k ? k : "");
            zj(Ka.D(), "5", J(a.j.P[a.slotId.getDomId()], 20));
            a.slotId.dispatchEvent(Bk, 801, {
                Mb: 0 === f.kind ? f.na : "",
                isBackfill: !!p
            });
            a.va = a.l("height" === l ? "fluid" : [b.width, b.height], {
                ia: f,
                Ga: h,
                Ha: k,
                Ka: n,
                Nb: m,
                isBackfill: p,
                Pa: q,
                Ta: v,
                Nc: B,
                Ja: I,
                ua: c
            });
            g && !l && b.height && _.x(471) && (f = zb(g, window),
                f = null === (e = null === (d = null === f || void 0 === f ? void 0 : f.minHeight) || void 0 === d ? void 0 : d.match(/^([0-9]+)px$/)) || void 0 === e ? void 0 : e[1]) && (f = Math.floor((Number(f) - b.height) / 2),
            0 < f && (h.style.paddingTop = f + "px"));
            v && (h = a.va) && h.setAttribute("data-google-container-id", v);
            a.slotId.dispatchEvent(Dk, 825, {
                size: b
            });
            return a.va
        };
        Qw.prototype.loaded = function(a) {
            this.slotId.dispatchEvent(Gk, 844, void 0);
            a && a.setAttribute("data-load-complete", !0);
            this.A.dispatchEvent("slotOnload", 710, new ep(this.slotId,"publisher_ads"));
            zj(Ka.D(), "6", J(this.j.P[this.slotId.getDomId()], 20))
        }
        ;
        Qw.prototype.G = function() {
            var a;
            _.tk.prototype.G.call(this);
            null === (a = xb(this.slotId, this.B.j)) || void 0 === a ? void 0 : a.removeAttribute("data-google-query-id");
            this.va = null
        }
        ;
        Qw.prototype.o = function(a, b, c, d, e) {
            var f = this
                , g = b.ia
                , h = b.Ha
                , k = b.ua;
            g = 0 === g.kind ? g.na : "";
            var l = Tv(b.Ga, Yn(this.slotId), e ? null : g, a, function() {
                f.loaded(l.j, null !== h && void 0 !== h ? h : "")
            }, d, b.Ja || null, b.Ka || null, !!b.isBackfill, !!b.Pa, c, this.j.Gb, b.Ta, null !== k && void 0 !== k ? k : "", e);
            _.Yd(this, function() {
                100 != l.status && (2 == l.H && (qs(l.l),
                    l.H = 0),
                    window.clearTimeout(l.J),
                    l.J = -1,
                    l.F = 3,
                l.m && (l.m.pa(),
                    l.m = null),
                    l.A && l.j ? l.A.unobserve(l.j) : (_.uc(window, "resize", l.I),
                        _.uc(window, "scroll", l.I)),
                l.o && l.j && l.o == _.Oh(l.j) && l.o.removeChild(l.j),
                    l.j = null,
                    l.o = null,
                l.A && (l.A.disconnect(),
                    l.A = null),
                    l.status = 100)
            });
            return l
        }
        ;
        var Hd = function() {
            Qw.apply(this, arguments)
        };
        _.L(Hd, Qw);
        Hd.prototype.l = function(a, b) {
            var c, d = b.ia, e = b.Ga, f = b.Ka, g = b.Nb, h = b.isBackfill, k = b.Pa, l = b.Ta, n = b.Ja, m = b.Ha;
            b = b.ua;
            var p = this.j
                , q = p.N;
            p = p.P[this.slotId.getDomId()];
            var v = new bn;
            q = Eo([v, q.oa(), p && p.oa()]);
            g = null !== (c = null === g || void 0 === g ? void 0 : J(g, 2)) && void 0 !== c ? c : null;
            return Qw.prototype.o.call(this, a, {
                ia: d,
                Ga: e,
                Ka: f,
                isBackfill: h,
                Pa: k,
                Ta: l,
                Ja: n,
                Ha: m,
                ua: b
            }, g, q).j
        }
        ;
        Hd.prototype.loaded = function(a, b) {
            Qw.prototype.loaded.call(this, a, b);
            a = this.j.P[this.slotId.getDomId()];
            Nu(this.slotId, a, b)
        }
        ;
        Hd.prototype.m = function() {
            return !1
        }
        ;
        var Sw = function() {
            Qw.apply(this, arguments)
        };
        _.L(Sw, Qw);
        var Tw = function(a, b) {
            var c = Yn(a.slotId)
                , d = a.B.j;
            a = Sv;
            d = void 0 === d ? document : d;
            d = Qh(new Bh(d), "IFRAME");
            d.id = c;
            d.title = a;
            d.name = c;
            Array.isArray(b) ? null != b[0] && null != b[1] && (d.width = String(b[0]),
                d.height = String(b[1])) : (d.width = "100%",
                d.height = "0");
            d.allowTransparency = "true";
            d.scrolling = "no";
            d.marginWidth = "0";
            d.marginHeight = "0";
            d.frameBorder = "0";
            d.style.border = "0";
            d.style.verticalAlign = "bottom";
            return d
        }
            , Uw = function(a, b, c, d, e) {
            "string" !== typeof c && (b.width = String(c[0]),
                b.height = String(c[1]));
            var f = w(774, function() {
                a.loaded(b, e);
                _.uc(b, "load", f)
            });
            _.E(b, "load", f);
            _.Yd(a, function() {
                return _.uc(b, "load", f)
            });
            d.appendChild(b)
        };
        var Gd = function() {
            Sw.apply(this, arguments)
        };
        _.L(Gd, Sw);
        Gd.prototype.l = function(a, b) {
            var c = b.ia
                , d = b.Ga
                , e = b.Ka
                , f = b.Ha;
            b = b.ua;
            var g = Tw(this, a);
            if (null === e || void 0 === e ? 0 : e.length)
                if (_.pg) {
                    e = _.A(e);
                    for (var h = e.next(); !h.done; h = e.next())
                        g.sandbox.add(h.value)
                } else
                    g.sandbox.add.apply(g.sandbox, _.Ib(e));
            b && (g.allow = b);
            -1 == Mf.indexOf("iPhone") && (g.srcdoc = _.Yf(Zf));
            Uw(this, g, a, d, null !== f && void 0 !== f ? f : "");
            Uv(g, c.na, function() {});
            return g
        }
        ;
        Gd.prototype.m = function() {
            return !0
        }
        ;
        var Fd = function() {
            Sw.apply(this, arguments)
        };
        _.L(Fd, Sw);
        Fd.prototype.l = function(a, b) {
            var c = b.ia
                , d = b.Ga
                , e = b.Ka
                , f = b.Ha
                , g = b.ua
                , h = b.isBackfill
                , k = b.Ta;
            b = b.Pa;
            var l = this.j
                , n = l.N;
            l = l.P[this.slotId.getDomId()];
            n = Eo([n.oa(), l && l.oa()]);
            l = Tw(this, a);
            try {
                var m = c.url;
                if (/^urn:uuid:[0-9a-f-]*$/.test(m)) {
                    var p = qf(m);
                    l.src = Ha(p).toString()
                }
            } catch (q) {
                Wa(811, q, !0)
            }
            Sw.prototype.o.call(this, a, {
                ia: c,
                Ga: d,
                isBackfill: h,
                Pa: b,
                Ta: k,
                Ha: f,
                Ka: e,
                ua: g
            }, null, n, l);
            return l
        }
        ;
        Fd.prototype.m = function() {
            return !1
        }
        ;
        var Vw = function(a, b, c, d, e, f, g, h, k, l, n, m, p, q, v, B, I, H, M, S, va, ib, Xa, jb, nd) {
            Y.call(this, 680);
            this.slotId = a;
            this.A = b;
            this.Y = c;
            this.U = d;
            this.L = e;
            this.l = this.m();
            this.o = this.m();
            this.H = W(this, f);
            Cr(this, h);
            this.$ = W(this, k);
            this.F = W(this, l);
            this.Z = W(this, n);
            this.V = W(this, m);
            Cr(this, va);
            this.I = X(this, p);
            this.J = X(this, q);
            this.O = X(this, v);
            this.da = X(this, B);
            this.R = X(this, I);
            this.fa = X(this, H);
            this.ka = X(this, M);
            this.ba = X(this, S);
            this.ga = X(this, g);
            Cr(this, ib);
            Cr(this, Xa);
            this.ea = W(this, jb);
            Cr(this, nd)
        };
        _.L(Vw, Y);
        Vw.prototype.j = function() {
            var a = this
                , b = this.$.value
                , c = this.F.value
                , d = this.H.value
                , e = Id(this.V.value, this.slotId, this.A, this.Y, this.U);
            _.uk(this, e);
            var f = this.I.value;
            if (0 === d.kind) {
                var g = null === f || void 0 === f ? void 0 : fh(f.getHtml());
                g && (d.na = g);
                if (null == d.na)
                    throw Error("invalid html");
            }
            var h = Rw(e, this.Z.value, {
                ia: d,
                sb: b,
                Ga: c,
                Ha: this.J.value,
                bd: this.O.value,
                Ka: this.da.value,
                Nb: f,
                isBackfill: this.R.value,
                Pa: this.fa.value,
                Ta: this.ka.value,
                Nc: this.ba.value,
                Ja: this.ga.value,
                ua: this.ea.value
            });
            iu(this, this.id, this.L, "message", function(k) {
                h.contentWindow === k.source && a.slotId.dispatchEvent(Dd, 824, k)
            });
            this.l.j(h);
            this.o.j(e.m())
        }
        ;
        var Ww = function(a, b, c, d, e, f, g, h, k, l, n) {
            Y.call(this, 699);
            this.l = a;
            this.slotId = b;
            this.ya = c;
            this.Wa = d;
            this.C = Ar(this);
            this.H = X(this, e);
            this.J = W(this, f);
            this.A = W(this, g);
            this.I = W(this, h);
            this.o = X(this, k);
            this.O = W(this, l);
            this.F = W(this, n)
        };
        _.L(Ww, Y);
        Ww.prototype.j = function() {
            var a, b = this.J.value, c = this.A.value;
            c.style.width = "";
            c.style.height = "";
            if ("height" !== this.H.value) {
                var d = null !== (a = this.o.value) && void 0 !== a ? a : 0
                    , e = this.I.value
                    , f = this.O.value
                    , g = this.F.value
                    , h = !1;
                switch (d) {
                    case 1:
                    case 2:
                        h = this.l;
                        var k = this.slotId
                            , l = this.ya
                            , n = this.Wa;
                        var m = e.width
                            , p = e.height
                            , q = 0;
                        var v = 0;
                        var B = Ab(l);
                        B = _.A(B);
                        for (var I = B.next(); !I.done; I = B.next())
                            if (I = I.value,
                                Array.isArray(I)) {
                                var H = _.A(I);
                                I = H.next().value;
                                H = H.next().value;
                                q < I && (q = I);
                                v < H && (v = H)
                            }
                        v = [q, v];
                        q = v[0] < m;
                        p = v[1] < p;
                        q || p ? (v = m + "px",
                            B = {
                                "max-height": "none",
                                "max-width": v,
                                padding: "0px",
                                width: v
                            },
                        p && (B.height = "auto"),
                            Cu(c, b, B),
                            c = {},
                        q && m > parseInt(f.width, 10) && (c.width = v,
                            c["max-width"] = v),
                        p && (c.height = "auto",
                            c["max-height"] = "none"),
                            $h(c) ? c = !1 : (c["padding-" + ("ltr" == f.direction ? "left" : "right")] = "0px",
                                _.wi(b, c),
                                c = !0)) : c = !1;
                        b: switch (m = e.width,
                            p = h.defaultView || h.parentWindow || _.C,
                            d) {
                            case 2:
                                b = Du(b, p, m, f, n);
                                break b;
                            case 1:
                                if (q = b.parentElement)
                                    if (f = On(q)) {
                                        v = f.width;
                                        f = xb(k, p.document);
                                        f = zb(f, p);
                                        n = f.position;
                                        I = parseInt(f.width, 10) || 0;
                                        B = zb(q, p);
                                        var M = "rtl" == B.direction ? "Right" : "Left";
                                        p = M.toLowerCase();
                                        q = "absolute" == n ? 0 : parseInt(B["padding" + M], 10);
                                        B = parseInt(B["border" + M + "Width"], 10);
                                        H = Ai(f);
                                        M = (H && H[4] || 0) * ("Right" == M ? -1 : 1);
                                        m = Math.max(Math.round((v - Math.max(I, m)) / 2), 0);
                                        v = {};
                                        I = H && H[3] || 1;
                                        if (1 != (H && H[0] || 1) || 1 != I)
                                            H[0] = 1,
                                                H[3] = 1,
                                                v.transform = "matrix(" + H.join(",") + ")";
                                        I = 0;
                                        switch (n) {
                                            case "fixed":
                                            case "relative":
                                                I = parseFloat(f[p]) || 0;
                                                break;
                                            case "absolute":
                                                v[p] = "0"
                                        }
                                        v["margin-" + p] = m - q - B - I - M + "px";
                                        _.wi(b, v);
                                        b = !0
                                    } else
                                        b = !1;
                                else
                                    b = !1;
                                break b;
                            default:
                                b = !1
                        }
                        c || b ? (Fu(h, k, l, d, e.width, e.height, "gpt_slotexp", g),
                            h = !0) : h = !1;
                        break;
                    case 3:
                        d = this.l,
                            h = this.slotId,
                            k = this.ya,
                            m = this.Wa,
                            l = e.width,
                            n = e.height,
                            n >= (parseInt(f.height, 10) || 0) || "none" == f.display || "hidden" == f.visibility || !m || -12245933 === m.width || b.getBoundingClientRect().bottom <= m.height ? h = !1 : (f = {
                                height: n + "px"
                            },
                                Cu(c, b, f),
                                _.wi(b, f),
                                Fu(d, h, k, 3, l, n, "gpt_slotred", g),
                                h = !0)
                }
                !h && _.x(212) && Fu(this.l, this.slotId, this.ya, 0, e.width, e.height, "gpt_pgbrk", g)
            }
            this.C.notify()
        }
        ;
        var Xw = function(a, b, c, d, e, f) {
            Y.call(this, 686);
            this.L = a;
            this.slotId = b;
            this.o = c;
            this.Bb = f;
            this.A = X(this, d);
            this.l = W(this, e)
        };
        _.L(Xw, Y);
        Xw.prototype.j = function() {
            var a, b;
            return Yb(this, function d() {
                var e = this, f, g, h, k, l, n, m, p, q, v, B;
                return Zb(d, function(I) {
                    if (1 == I.j) {
                        f = e.A.value;
                        g = null === f || void 0 === f ? void 0 : J(f, 1);
                        h = null === f || void 0 === f ? void 0 : jh(f);
                        k = null !== (a = null === f || void 0 === f ? void 0 : J(f, 3)) && void 0 !== a ? a : 0;
                        l = null !== (b = null === f || void 0 === f ? void 0 : z(f, 5)) && void 0 !== b ? b : !1;
                        if (!g || !h)
                            return I.return();
                        n = new Lc;
                        m = n.resolve;
                        p = n.promise;
                        q = e.l.value;
                        v = bu({
                            L: e.L,
                            element: q,
                            Fd: 0 === e.o,
                            Lc: k,
                            Hd: g,
                            Kb: function() {
                                return void m(!0)
                            },
                            options: {
                                threshold: h
                            },
                            Bc: l,
                            Yc: function(H) {
                                Wa(615, H, !0)
                            },
                            Bb: e.Bb
                        });
                        _.Yd(e, function() {
                            v();
                            m(!1)
                        });
                        return $b(I, p, 2)
                    }
                    (B = I.m) ? I = $b(I, e.slotId.dispatchEvent(yk, 614, void 0), 0) : (I.j = 0,
                        I = void 0);
                    return I
                })
            })
        }
        ;
        var Yw = function(a, b, c, d, e) {
            Y.call(this, 856);
            this.ya = a;
            this.A = this.m();
            this.l = this.m();
            this.o = this.m();
            this.J = this.m();
            this.H = X(this, b);
            this.I = X(this, c);
            this.F = X(this, d);
            X(this, e)
        };
        _.L(Yw, Y);
        Yw.prototype.j = function() {
            this.A.G(this.H.value);
            this.l.G(this.I.value);
            this.o.G(this.F.value);
            ur(this.J)
        }
        ;
        var Zw = function(a, b, c, d) {
            Y.call(this, 720);
            this.format = a;
            this.A = b;
            this.C = this.m();
            this.l = X(this, c);
            this.o = X(this, d)
        };
        _.L(Zw, Y);
        Zw.prototype.j = function() {
            var a = this.o.value;
            if (null == a)
                ur(this.C);
            else {
                var b = Math.round(.3 * this.A);
                2 !== this.format && 3 !== this.format || !wr(this.l) || !ih(this.l.value) || 0 >= b || a <= b ? this.C.j(a) : this.C.j(b)
            }
        }
        ;
        var $w = function(a, b, c, d, e, f, g) {
            Y.call(this, 674);
            this.slotId = a;
            this.N = b;
            this.l = d;
            this.o = e;
            this.C = this.m();
            this.A = 2 === c || 3 === c;
            this.F = W(this, f);
            this.H = W(this, g)
        };
        _.L($w, Y);
        $w.prototype.j = function() {
            var a = Tn(this.slotId, this.l) || Rv(this.l, this.F.value, Zn(this.slotId), !!z(this.N, 15));
            this.H.value && !z(this.N, 15) && (a.style.display = "inline-block");
            this.A ? ho(this.o, this.slotId, function() {
                return void _.Nh(a)
            }) : _.Yd(this, function() {
                return void _.Nh(a)
            });
            this.C.j(a)
        }
        ;
        var ax = function(a) {
            Y.call(this, 859);
            this.L = a;
            this.C = this.m()
        };
        _.L(ax, Y);
        ax.prototype.j = function() {
            this.C.j(!Vc(this.L.top))
        }
        ;
        var bx = function(a, b) {
            Y.call(this, 698);
            this.L = a;
            this.C = this.m();
            this.l = W(this, b)
        };
        _.L(bx, Y);
        bx.prototype.j = function() {
            var a = zb(this.l.value, this.L);
            null == a ? ur(this.C) : this.C.j(a)
        }
        ;
        var cx = function(a, b, c, d, e) {
            Y.call(this, 813);
            this.googletag = a;
            this.o = b;
            this.console = c;
            this.l = this.m();
            this.F = X(this, d);
            this.A = X(this, e)
        };
        _.L(cx, Y);
        cx.prototype.j = function() {
            var a = this, b;
            if (!_.x(497) || _.x(453))
                this.l.j(!1);
            else if (_.x(446) && !_.t(254))
                this.l.j(!1);
            else {
                var c = this.F.value;
                c && (dx.has(this.o) ? this.l.j(!1) : (dx.add(this.o),
                    Fc(this.googletag, c, null !== (b = this.A.value) && void 0 !== b ? b : null, function(d, e) {
                        var f;
                        Va(d, e);
                        null === (f = a.console) || void 0 === f ? void 0 : f.error(e)
                    }),
                    this.l.j(!0)))
            }
        }
        ;
        var dx = new D.Set;
        var ex = function(a) {
            Y.call(this, 840);
            this.l = a;
            this.C = this.m()
        };
        _.L(ex, Y);
        ex.prototype.j = function() {
            var a;
            _.x(1931) && (null === (a = this.l.featurePolicy) || void 0 === a ? 0 : (K = a.features(),
                _.F(K, "includes")).call(K, "conversion-measurement")) ? this.C.j("conversion-measurement \u2018src\u2019") : this.C.j("")
        }
        ;
        var fx = function(a, b, c) {
            Y.call(this, 857);
            this.l = a;
            this.L = b;
            Cr(this, c)
        };
        _.L(fx, Y);
        fx.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e, f;
                return Zb(b, function(g) {
                    if (1 == g.j) {
                        if (!c.l || 0 >= _.Kb(358429052))
                            return g.return();
                        d = new Za("gpt_paw::diff");
                        if (!pk(d, _.Kb(358429052), !0))
                            return g.return();
                        e = _.kc();
                        return $b(g, Oc(c.L), 2)
                    }
                    f = g.m;
                    $a(d);
                    u(d, "scr", c.l);
                    u(d, "sci", null !== f && void 0 !== f ? f : "");
                    u(d, "t", String(_.kc() - e));
                    bb(d, 1);
                    g.j = 0
                })
            })
        }
        ;
        var gx = function(a, b, c, d, e, f) {
            Y.call(this, 758);
            this.slotId = a;
            this.A = b;
            this.o = c;
            this.tb = d;
            this.l = e;
            this.F = X(this, f)
        };
        _.L(gx, Y);
        gx.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e;
                return Zb(b, function(f) {
                    if (1 == f.j) {
                        var g, h = xb(c.slotId, c.l);
                        h && h.setAttribute("data-google-query-id", null !== (g = c.F.value) && void 0 !== g ? g : "");
                        zj(c.tb, "5", J(c.A.P[c.slotId.getDomId()], 20));
                        d = c.slotId;
                        return $b(f, d.dispatchEvent(Bk, 801, {
                            Mb: null,
                            isBackfill: !1
                        }), 2)
                    }
                    e = _.x(123);
                    var k, l, n;
                    if (_.ko(c.o, c.slotId)) {
                        var m = c.A;
                        g = m.N;
                        m = m.P[c.slotId.getDomId()];
                        var p = null !== (k = null !== (h = z(m, 11)) && void 0 !== h ? h : z(g, 10)) && void 0 !== k ? k : !1;
                        e && (Xo(Xd.D(), c.slotId),
                        p && od(c.slotId, c.l),
                            qo(c.o, c.slotId));
                        !e && bo(c.slotId, c.l) || null === (n = null !== (l = z(m, 10)) && void 0 !== l ? l : z(g, 11)) || void 0 === n || !n || _.x(390) || od(c.slotId, c.l)
                    }
                    return $b(f, d.dispatchEvent(Dk, 825, {
                        isEmpty: !0,
                        slotContentChanged: e
                    }), 0)
                })
            })
        }
        ;
        var hx = function(a, b, c, d, e) {
            Y.call(this, 721);
            this.L = a;
            this.F = X(this, b);
            this.o = W(this, c);
            this.l = W(this, d);
            this.A = W(this, e)
        };
        _.L(hx, Y);
        hx.prototype.j = function() {
            var a = this, b, c, d, e = this.F.value, f = null === (b = null === e || void 0 === e ? void 0 : J(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
            e = null === (c = null === e || void 0 === e ? void 0 : J(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
            if (f && e) {
                var g = this.o.value
                    , h = this.l.value
                    , k = this.A.value
                    , l = k.style.height
                    , n = k.style.width
                    , m = k.style.display
                    , p = k.style.position
                    , q = Ji(g.id + "_top", f)
                    , v = Ji(g.id + "_bottom", e);
                _.wi(v, {
                    position: "relative",
                    top: "calc(100vh - 48px)"
                });
                k.appendChild(q);
                k.appendChild(v);
                _.wi(h, {
                    position: "absolute",
                    top: "24px",
                    clip: "rect(0, auto, auto, 0)",
                    width: "100vw",
                    height: "calc(100vh - 48px)"
                });
                _.wi(g, {
                    position: "fixed",
                    top: "0",
                    height: "100vh"
                });
                _.wi(k, {
                    position: "relative",
                    display: (null === (d = this.L.screen.orientation) || void 0 === d ? 0 : d.angle) ? "none" : "block",
                    width: "100vw",
                    height: "100vh"
                });
                iu(this, 722, this.L, "orientationchange", function() {
                    var B;
                    (null === (B = a.L.screen.orientation) || void 0 === B ? 0 : B.angle) ? _.wi(k, {
                        display: "none"
                    }) : _.wi(k, {
                        display: "block"
                    })
                });
                _.Yd(this, function() {
                    _.Nh(q);
                    _.Nh(v);
                    k.style.position = p;
                    k.style.height = l;
                    k.style.width = n;
                    k.style.display = m
                })
            }
        }
        ;
        var ix = function(a, b, c, d, e) {
            e = void 0 === e ? Kd : e;
            Y.call(this, 783);
            this.F = c;
            this.o = d;
            this.J = e;
            this.A = !1;
            this.l = -1;
            this.H = W(this, b);
            this.I = Cd(a, Gk)
        };
        _.L(ix, Y);
        ix.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e, f, g, h;
                return Zb(b, function(k) {
                    if (1 == k.j)
                        return d = c,
                            _.x(440) ? $b(k, c.I, 2) : k.return();
                    if (c.W)
                        return k.return();
                    e = c.H.value;
                    f = function(l) {
                        l = _.A(l);
                        for (var n = l.next(); !n.done; n = l.next())
                            d.l = 100 * n.value.intersectionRatio,
                                d.A = 50 <= d.l,
                                d.sendMessage(!1)
                    }
                    ;
                    g = w(c.id, f);
                    h = c.J(g);
                    h.observe(e);
                    iu(c, c.id, c.o, "visibilitychange", function() {
                        return void d.sendMessage(!0)
                    });
                    _.Yd(c, function() {
                        h.disconnect()
                    });
                    k.j = 0
                })
            })
        }
        ;
        ix.prototype.sendMessage = function(a) {
            var b = Km(this.o);
            if (a || !b)
                b ? (a = !1,
                    b = 0) : (a = this.A,
                    b = this.l),
                    this.F(a, b, _.kc())
        }
        ;
        var jx = function() {
            Y.call(this, 663);
            this.C = Ar(this)
        };
        _.L(jx, Y);
        jx.prototype.j = function() {
            return Yb(this, function b() {
                var c = this;
                return Zb(b, function(d) {
                    if (1 == d.j) {
                        var e = kx ? 0 : _.Kb(16)
                            , f = _.Kb(17);
                        e = Math.max(e, f);
                        0 < e && (kx = !0,
                            td(e));
                        return $b(d, lx(c), 2)
                    }
                    c.C.notify();
                    d.j = 0
                })
            })
        }
        ;
        var lx = function(a) {
            return Yb(a, function c() {
                var d;
                return Zb(c, function(e) {
                    d = _.Kb(18);
                    0 < d ? e = $b(e, Ld(d), 0) : (e.j = 0,
                        e = void 0);
                    return e
                })
            })
        }
            , kx = !1;
        var mx = function(a, b) {
            Y.call(this, 666);
            this.o = a;
            this.l = this.m();
            this.A = X(this, b)
        };
        _.L(mx, Y);
        mx.prototype.j = function() {
            var a = new $m;
            wr(this.A) && (G(a, 2, this.A.value),
                G(a, 3, 1));
            if (this.o) {
                var b = [this.o, a]
                    , c = new $m;
                b = _.A(b);
                for (a = b.next(); !a.done; a = b.next()) {
                    a = a.value;
                    if (zd(a, 1)) {
                        var d = J(a, 1);
                        G(c, 1, d)
                    }
                    zd(a, 2) && (d = J(a, 2),
                        G(c, 2, d));
                    zd(a, 3) && (a = qc(a, 3),
                        G(c, 3, a))
                }
                a = c
            }
            c = this.l;
            b = c.G;
            a = zd(a, 2) ? zd(a, 3) && 0 !== Ob() ? J(a, 2) * qc(a, 3) : J(a, 2) : null;
            b.call(c, a)
        }
        ;
        var nx = function(a, b, c, d) {
            Y.call(this, 666);
            this.C = this.m();
            Cr(this, a);
            this.l = W(this, b);
            this.o = X(this, d);
            this.A = X(this, c)
        };
        _.L(nx, Y);
        nx.prototype.j = function() {
            var a, b = this.o.value, c = null !== (a = this.A.value) && void 0 !== a ? a : void 0;
            if (null == b || 0 > b || 0 === c)
                this.C.j(!1);
            else {
                var d = this.l.value;
                Bb(d) ? ox(this, b, c, d) : this.C.j(!1)
            }
        }
        ;
        var ox = function(a, b, c, d) {
            var e = Md(b + "%", w(291, function(f, g) {
                f = _.A(f);
                for (var h = f.next(); !h.done; h = f.next())
                    if (h = h.value,
                        !(0 >= h.intersectionRatio)) {
                        g.unobserve(h.target);
                        a.C.j(!0);
                        break
                    }
            }));
            null != c && setTimeout(function() {
                a.C.j(!0);
                e.disconnect()
            }, c);
            e.observe(d);
            _.Yd(a, function() {
                e.disconnect()
            })
        };
        var px = function(a, b) {
            Y.call(this, 706);
            this.L = a;
            this.l = b;
            this.C = this.m()
        };
        _.L(px, Y);
        px.prototype.j = function() {
            var a = hb(this.l, this.L);
            a ? this.C.j(a) : ur(this.C)
        }
        ;
        var qx = function(a, b, c, d, e) {
            Y.call(this, 713);
            this.jb = a;
            this.l = b;
            this.A = e;
            this.o = X(this, c);
            this.F = W(this, d)
        };
        _.L(qx, Y);
        qx.prototype.j = function() {
            var a = this;
            if (!Xc(this.o.value) && this.l.getOseId()) {
                var b = this.F.value
                    , c = du(this.l)
                    , d = _.x(440) ? Ye : w(this.id, function(e, f) {
                    0 <= f && a.A(e, f);
                    return null
                });
                c.registerAdBlock("?eid=" + nc().join(",") + "&adk=" + this.jb, 3, "ldjh", b, 0, 0, d);
                _.Yd(this, function() {
                    try {
                        c.unloadAdBlock(b, !1, !1)
                    } catch (e) {}
                })
            }
        }
        ;
        var rx = function(a, b, c, d, e, f, g) {
            Y.call(this, 664);
            this.slotId = a;
            this.Wa = b;
            this.l = c;
            this.o = new Bh;
            this.C = Ar(this);
            Cr(this, d);
            this.H = X(this, e);
            this.F = X(this, f);
            this.A = X(this, g)
        };
        _.L(rx, Y);
        rx.prototype.j = function() {
            var a = this, b;
            if (_.x(20) || _.x(361554154) && this.A.value || _.x(361145076) && 0 < (null !== (b = this.F.value) && void 0 !== b ? b : 0)) {
                var c = this.o.j
                    , d = Jm(c);
                if (Km(c) && d && (_.x(361145075) || 0 < po(this.l, this.slotId) || !sx(this)) && d) {
                    var e = iu(this, 324, c, d, function() {
                        Km(c) || (e && e(),
                            a.C.notify())
                    });
                    if (e)
                        return
                }
            }
            this.C.notify()
        }
        ;
        var sx = function(a) {
            var b = a.H.value;
            return null != b && Un(b, a.Wa, 0)
        };
        var tx = function(a, b) {
            Y.call(this, 762);
            this.C = this.m();
            this.o = W(this, a);
            this.l = W(this, b)
        };
        _.L(tx, Y);
        tx.prototype.j = function() {
            this.C.j(1 === this.l.value.kind ? 5 : this.o.value ? 1 : 0)
        }
        ;
        var ux = function(a, b, c, d, e, f) {
            Y.call(this, 669);
            this.N = a;
            this.P = b;
            this.L = c;
            this.C = this.m();
            this.l = X(this, d);
            this.o = X(this, e);
            this.A = X(this, f)
        };
        _.L(ux, Y);
        ux.prototype.j = function() {
            var a;
            if (!(a = wr(this.o))) {
                a = this.P;
                var b = this.L;
                b = void 0 === b ? window : b;
                a = !!(Qj(3) || a && zd(a, 16) && Pa("google_range_debug", b))
            }
            a ? this.C.j(!0) : (a = (Xc(this.l.value) ? z(this.P, 12) || z(this.N, 13) : !1) || !!this.A.value,
                this.C.j(!!a))
        }
        ;
        var vx = function(a, b, c, d, e, f, g) {
            Y.call(this, 828);
            this.slotId = a;
            this.F = b;
            this.o = d;
            this.A = e;
            this.C = this.m();
            this.l = X(this, f);
            this.H = X(this, g)
        };
        _.L(vx, Y);
        vx.prototype.j = function() {
            var a;
            return Yb(this, function c() {
                var d = this, e, f, g, h, k, l, n, m, p, q;
                return Zb(c, function(v) {
                    e = d.F;
                    f = e.N;
                    g = e.P;
                    h = g[d.slotId.getDomId()];
                    k = d.H.value;
                    l = null;
                    n = null !== (a = null === h || void 0 === h ? void 0 : h.oa()) && void 0 !== a ? a : null;
                    m = f.oa();
                    (null === n || void 0 === n ? 0 : zd(n, 4)) ? l = z(n, 4) : (null === m || void 0 === m ? 0 : zd(m, 4)) ? l = z(m, 4) : null != k && (l = k);
                    p = String(l);
                    null == k || k === l || d.l.value || Sd.D().M(Vl(p, String(k)));
                    d.l.value || eb("gpt_sf_r", function(B) {
                        $a(B);
                        u(B, "GAM", String(k));
                        u(B, "Final", p)
                    });
                    q = d.l.value || l || null == l;
                    if (!q)
                        return ur(d.C),
                            v.return();
                    d.C.j(Sn(d.A, d.o));
                    v.j = 0
                })
            })
        }
        ;
        var wx = function(a, b, c, d, e, f) {
            Y.call(this, 719);
            this.N = a;
            this.ya = b;
            this.C = this.m();
            this.o = W(this, c);
            this.l = X(this, d);
            this.A = X(this, f)
        };
        _.L(wx, Y);
        wx.prototype.j = function() {
            var a = this.l.value
                , b = this.o.value;
            if (1 === b || 5 === b) {
                if (a = this.A.value,
                    b = new bn,
                    a = G(b, 3, a),
                    z(Eo([a, this.N.oa(), this.ya.oa()]), 3)) {
                    this.C.j(Ft);
                    return
                }
            } else {
                if (a = 0 === b && a)
                    a = ni(),
                        a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                if (a) {
                    this.C.j(Ft);
                    return
                }
            }
            ur(this.C)
        }
        ;
        var xx = function(a, b, c, d, e, f, g, h, k) {
            Y.call(this, 681);
            this.adUnitPath = a;
            this.ya = b;
            this.J = c;
            this.window = d;
            this.F = this.m();
            this.o = this.m();
            this.A = this.m();
            this.l = Qj(3).split(",");
            this.H = _.xd(481);
            this.Ia = zd(b, 16) ? R(b, kn, 16) : null;
            this.I = Oa("google_range_debug", this.window);
            this.O = X(this, e);
            this.Y = X(this, f);
            this.U = X(this, g);
            this.R = W(this, h);
            this.V = W(this, k)
        };
        _.L(xx, Y);
        xx.prototype.j = function() {
            var a;
            if (a = !!(this.l.length || this.Ia && this.I)) {
                var b;
                b: if (this.l.length) {
                    if (this.H.length && (a = this.adUnitPath.split("/"),
                        !_.F(this.H, "includes").call(this.H, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else
                    a = !1;
                var c = a;
                a = c ? yx(this) : null;
                if (c && a) {
                    c = this.V.value;
                    var d = On(c.parentElement);
                    d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                    b = "p" === this.l[0];
                    var e = Number(this.l[0]);
                    if (b = "f" === this.l[0] ? this.J : e && 0 < e ? e : b ? Math.min(d, this.J) : null) {
                        e = a.width;
                        var f = a.height
                            , g = this.l[1]
                            , h = Number(g);
                        e = "ratio" === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                        zx(this, b, e, {
                            kind: 0,
                            na: Ax(b, e, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                        }, b <= d ? 1 : 2, c);
                        a = !0
                    } else
                        a = !1
                } else
                    a = !1;
                if (!a)
                    a: if (this.Ia && this.I) {
                        a = Ju(this.Ia, this.window);
                        c = Ku(this.Ia, this.window);
                        d = Lu(this.Ia);
                        b = Mu(this.Ia);
                        switch (this.I) {
                            case "max":
                                e = a;
                                f = c;
                                break;
                            case "min":
                                e = d;
                                f = b;
                                break;
                            case "banner":
                                e = a;
                                f = 90 > c ? c : 90 < b ? b : 90;
                                break;
                            case "skyscraper":
                                e = 90 > a ? a : 90 < d ? d : 90;
                                f = c;
                                break;
                            default:
                                a = !1;
                                break a
                        }
                        zx(this, e, f, {
                            kind: 0,
                            na: Ax(e, f, "<p>Minimum size:" + d + "x" + b + "</p><p>Maximum size:" + (a + "x" + c + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                        });
                        a = !0
                    } else
                        a = !1
            }
            if (!a) {
                a = this.Y.value;
                if (null == a)
                    throw Error("Missing 'width'.");
                c = this.U.value;
                if (null == c)
                    throw Error("Missing 'height'.");
                zx(this, a, c, this.R.value)
            }
        }
        ;
        var yx = function(a) {
            a = Ab(a.ya)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Ah(a[0],a[1]) : null
        }
            , Ax = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        }
            , zx = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.O.value : e;
            a.o.j(new _.Ah(b,c));
            a.F.j(d);
            null == e ? ur(a.A) : a.A.j(e);
            f && _.aj(f, "opacity", .5)
        };
        var Bx = function(a, b, c, d, e, f, g, h, k) {
            Y.call(this, 673);
            this.slotId = a;
            this.sb = b;
            this.J = c;
            this.I = d;
            this.H = e;
            this.l = f;
            this.F = g;
            this.C = this.m();
            this.A = X(this, h);
            this.o = X(this, k)
        };
        _.L(Bx, Y);
        Bx.prototype.j = function() {
            return Yb(this, function b() {
                var c = this, d, e;
                return Zb(b, function(f) {
                    if (1 == f.j) {
                        if (null != c.sb) {
                            Cx(c, c.sb);
                            c.C.j(c.sb);
                            f.j = 0;
                            return
                        }
                        if (In(c.l)) {
                            c.C.j(Dx(c));
                            f.j = 0;
                            return
                        }
                        return $b(f, Cd(c.slotId, zk), 4)
                    }
                    d = f.m;
                    e = d.detail;
                    if (c.W)
                        return f.return();
                    Cx(c, e);
                    c.C.j(e);
                    f.j = 0
                })
            })
        }
        ;
        var Dx = function(a) {
            var b = _.Mh(document, "INS");
            b.id = a.J;
            _.wi(b, {
                display: "none"
            });
            a.H.documentElement.appendChild(b);
            var c = function() {
                return void _.Nh(b)
            };
            2 === a.l || 3 === a.l ? ho(a.F, a.slotId, function() {
                return void _.Nh(b)
            }) : _.Yd(a, c);
            return b
        }
            , Cx = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                var c = _.x(437) ? [].concat(_.Ib(b.childNodes)) : _.F(Array, "from").call(Array, b.childNodes);
                c = _.A(c);
                for (var d = c.next(); !d.done; d = c.next())
                    d = d.value,
                    1 === d.nodeType && d.id !== a.I && _.Nh(d);
                b.style.display = "";
                _.x(442) && wr(a.A) && wr(a.o) && Qv(b, a.A.value, a.o.value)
            }
        };
        var Ex = function(a) {
            Y.call(this, 676);
            this.C = this.m();
            this.l = W(this, a)
        };
        _.L(Ex, Y);
        Ex.prototype.j = function() {
            var a = wb(this.l.value);
            this.C.j(a)
        }
        ;
        var Fx = function(a, b, c) {
            Y.call(this, 807);
            this.L = a;
            this.C = Ar(this);
            this.l = X(this, b);
            this.o = W(this, c)
        };
        _.L(Fx, Y);
        Fx.prototype.j = function() {
            var a = _.Kb(359346956);
            if (0 !== a && this.l.value && !this.o.value) {
                var b = hm(this.L).L
                    , c = km(b)
                    , d = c.url;
                c.Tb && (b = new St(b,d),
                    1 === a ? b = Tt(b) : (b = qi("google_ads_top_frame_ctrl", b.j),
                        b = !(!b || !b.contentWindow)),
                b || this.K(Error("Cannot create top window frame: " + a)))
            }
            this.C.notify()
        }
        ;
        var Gx = function(a) {
            Y.call(this, 839);
            this.C = this.m();
            this.l = X(this, a)
        };
        _.L(Gx, Y);
        Gx.prototype.j = function() {
            if (_.x(522) || !wr(this.l))
                ur(this.C);
            else {
                var a = this.l.value
                    , b = new Vq(a);
                var c = R(a, Np, 3), d, e, f, g;
                if (null == c)
                    var h = [];
                else {
                    a = null !== (d = hh(c, 1)) && void 0 !== d ? d : 0;
                    d = null !== (e = hh(c, 2)) && void 0 !== e ? e : 0;
                    e = null !== (h = hh(c, 3)) && void 0 !== h ? h : 0;
                    h = null !== (f = hh(c, 4)) && void 0 !== f ? f : 0;
                    f = null !== (g = hh(c, 5)) && void 0 !== g ? g : 0;
                    g = [];
                    c = Math.round(1E3 * Math.random());
                    for (var k = 0; k < a; k++) {
                        for (var l = new Zq, n = 0; n < h; n++)
                            mh(l, 6, (c + n).toString());
                        G(l, 2, c);
                        G(l, 3, c % 97);
                        G(l, 4, 1);
                        n = new Qq;
                        for (var m = 0; m < f; m++)
                            mh(n, 1, m);
                        oh(l, 7, n);
                        n = new Oq;
                        for (m = 0; m < d; m++)
                            mh(n, 1, c + m);
                        for (m = 0; m < e; m++)
                            mh(n, 2, c + m);
                        oh(l, 1, n);
                        n = g;
                        m = n.push;
                        var p = new $q;
                        l = oh(p, 2, l);
                        m.call(n, l)
                    }
                    h = g
                }
                a = this.C;
                d = a.j;
                e = [];
                h = _.A(h);
                for (f = h.next(); !f.done; f = h.next())
                    if (f = f.value,
                        g = R(f, Zq, 2),
                        c = .1,
                        !(0 >= c || null === g)) {
                        if (null === g)
                            g = 0;
                        else {
                            k = new Sq;
                            k = G(k, 1, c);
                            oh(g, 8, k);
                            b: {
                                k = _.A(b.j.Ec.j);
                                for (l = k.next(); !l.done; l = k.next())
                                    if (!l.value.yb(g)) {
                                        g = !1;
                                        break b
                                    }
                                g = !0
                            }
                            g = g ? c * b.j.rb : 0
                        }
                        0 < g && e.push({
                            ad: f,
                            He: g
                        })
                    }
                d.call(a, e)
            }
        }
        ;
        var Hx = function(a, b, c) {
            var d = this;
            this.slotId = a;
            this.l = b;
            this.A = c;
            this.m = null;
            this.o = !1;
            this.j = null;
            this.G = _.Ze(function() {
                d.l.dispatchEvent("impressionViewable", 715, new cp(d.slotId,"publisher_ads"))
            });
            this.B = $e(function() {
                return void d.l.dispatchEvent("slotVisibilityChanged", 716, new dp(d.slotId,"publisher_ads",d.j))
            }, 200)
        }
            , Jx = function(a, b, c, d) {
            _.x(440) ? (Ix(a, b, d),
                b = c,
            _.F(Number, "isFinite").call(Number, b) && (b = Math.floor(b),
            0 > b || 100 < b || (0 === b || 100 === b) && b === a.j || null === a.j && 0 === b || (a.j = b,
                a.B()))) : (b && a.G(),
            void 0 === c || isNaN(c) || (c = Math.floor(c),
            a.j !== c && (a.j = c,
                a.B())))
        }
            , Ix = function(a, b, c) {
            a.o || (b ? null == a.m ? (a.m = c,
                setTimeout(function() {
                    Ix(a, !Km(a.A), _.kc())
                }, 1E3)) : 1E3 <= c - a.m && (a.o = !0,
                a.G()) : a.m = null)
        };
        var Kx = function(a, b, c, d, e, f, g, h, k, l, n, m, p) {
            Y.call(this, 814);
            this.slotId = a;
            this.A = b;
            this.l = c;
            this.U = d;
            this.H = e;
            this.J = f;
            this.I = g;
            this.F = h;
            this.o = k;
            this.L = l;
            this.metadata = n;
            this.O = m;
            this.R = W(this, p)
        };
        _.L(Kx, Y);
        Kx.prototype.j = function() {
            var a = this.A
                , b = a.N;
            a = a.P;
            var c = this.slotId.getDomId()
                , d = a[c];
            a = new Cc;
            _.uk(this, a);
            if (this.U || this.R.value)
                c = new gx(this.slotId,this.A,this.l,Ka.D(),this.o,this.metadata.F),
                    V(a, c);
            else {
                var e = Gb(d)
                    , f = gm(!0, this.L)
                    , g = new ax(this.L);
                V(a, g);
                var h = new Yw(d,this.metadata.ga,this.metadata.Ea,this.metadata.H,this.metadata.Na);
                V(a, h);
                var k = new px(this.L.top,this.H);
                V(a, k);
                var l = new cx(Rd(),Hb(this.slotId.getAdUnitPath()),this.L.console,this.metadata.fa,k.C);
                V(a, l);
                var n = new jx;
                V(a, n);
                var m = new Zw(e,f.height,this.metadata.I,h.A);
                V(a, m);
                c = new Bx(this.slotId,xb(this.slotId, this.o),c,Zn(this.slotId),this.o,e,this.l,h.l,m.C);
                V(a, c);
                var p = new pu(h.o,this.metadata.l,this.metadata.o,this.metadata.A,this.metadata.Y);
                V(a, p);
                var q = new ux(b,d,this.L,this.metadata.l,this.metadata.o,this.metadata.Y);
                V(a, q);
                l = new $w(this.slotId,b,e,this.o,this.l,c.C,q.C);
                V(a, l);
                var v = new Ex(l.C);
                V(a, v);
                var B = new mx(R(b, $m, 5),this.metadata.Ca);
                V(a, B);
                n = new rx(this.slotId,f,this.l,n.C,v.C,B.l,this.metadata.A);
                V(a, n);
                n = new nx(n.C,l.C,this.metadata.Da,B.l);
                V(a, n);
                h = new xx(this.slotId.getAdUnitPath(),d,f.width,this.L,this.metadata.ba,h.l,m.C,p.l,c.C);
                V(a, h);
                m = new bx(this.L,c.C);
                V(a, m);
                f = new Ww(this.o,this.slotId,d,f,this.metadata.J,c.C,l.C,h.o,h.A,m.C,this.metadata.F);
                V(a, f);
                p = new tx(q.C,p.l);
                V(a, p);
                d = new wx(b,d,p.C,this.metadata.l,this.metadata.A,this.metadata.Ba);
                V(a, d);
                g = new Fx(this.L,this.metadata.ea,g.C);
                V(a, g);
                q = new vx(this.slotId,this.A,this.l,this.H,this.J,this.metadata.A,this.metadata.Z);
                V(a, q);
                m = new Gx(this.metadata.Aa);
                V(a, m);
                B = new ex(this.o);
                V(a, B);
                b = new gw(e,this.metadata.I,this.metadata.R);
                V(a, b);
                g = new Vw(this.slotId,this.l,this.A,this.F,this.L,h.F,q.C,n.C,c.C,l.C,h.o,p.C,this.metadata.o,this.metadata.F,this.metadata.J,d.C,this.metadata.A,this.metadata.ka,this.metadata.V,this.metadata.Z,f.C,g.C,m.C,B.C,b.C);
                V(a, g);
                d = new bw(this.l,e,this.slotId,this.L,this.metadata.I,g.l,c.C,b.C);
                V(a, d);
                k = new dw(this.slotId,e,this.A.Wa,this.metadata.R,g.l,c.C,k.C,b.C);
                V(a, k);
                k = new nu(this.slotId,this.L,this.metadata.l,g.l,g.o);
                V(a, k);
                k = new Xw(this.L,this.slotId,Ob(),this.metadata.O,g.l);
                V(a, k);
                e = new rw(this.slotId,e,this.F,this.L,g.l,c.C);
                V(a, e);
                var I = new Hx(this.slotId,this.F,this.o);
                e = function(H, M, S) {
                    return void Jx(I, H, M, S)
                }
                ;
                k = new ix(this.slotId,g.l,e,this.o);
                V(a, k);
                k = new qx(oo(this.l, this.slotId),this.I,this.metadata.l,g.l,e);
                V(a, k);
                k = new ju(this.slotId,this.metadata.F,this.metadata.J,this.metadata.o,this.metadata.l,this.metadata.V,g.l,l.C,g.o);
                V(a, k);
                _.uk(a, new qu(e,this.slotId,this.metadata.o,this.metadata.l));
                c = new hx(this.L,this.metadata.da,g.l,l.C,c.C);
                V(a, c);
                V(a, new fx(this.O,this.L,g.l))
            }
            Ec(a)
        }
        ;
        var Mx = function(a, b) {
            Y.call(this, 804);
            this.ia = b;
            this.U = [];
            Lx(this, function(c) {
                return J(c, 4)
            });
            this.ga = Lx(this, function(c) {
                return J(c, 6)
            });
            this.Ea = Lx(this, function(c) {
                return J(c, 7)
            });
            this.za = Lx(this, function(c) {
                return z(c, 8)
            });
            this.J = Lx(this, function(c) {
                return J(c, 10)
            });
            Lx(this, function(c) {
                return J(c, 15)
            });
            this.F = Lx(this, function(c) {
                return J(c, 34)
            });
            this.l = Lx(this, function(c) {
                return R(c, Kp, 43)
            });
            this.o = Lx(this, function(c) {
                return R(c, eq, 41)
            });
            this.A = Lx(this, function(c) {
                return z(c, 9)
            });
            this.Y = Lx(this, function(c) {
                return z(c, 12)
            });
            this.O = Lx(this, function(c) {
                return R(c, bm, 50)
            });
            this.R = Lx(this, function(c) {
                return R(c, zp, 48)
            });
            this.I = Lx(this, function(c) {
                return R(c, xp, 39)
            });
            this.ba = Lx(this, function(c) {
                return J(c, 36)
            });
            this.Ba = Lx(this, function(c) {
                return z(c, 13)
            });
            this.ka = Lx(this, function(c) {
                return z(c, 3)
            });
            this.V = Lx(this, function(c) {
                return J(c, 49)
            });
            this.Ca = Lx(this, function(c) {
                return J(c, 29)
            });
            this.Da = Lx(this, function(c) {
                return J(c, 30)
            });
            this.da = Lx(this, function(c) {
                return R(c, Mp, 51)
            });
            this.Z = Lx(this, function(c) {
                return z(c, 52)
            });
            this.ea = Lx(this, function() {
                return "encrypted_url"
            });
            this.fa = Lx(this, function(c) {
                return (c = R(c, Jp, 54)) ? T(c, Hp, 1).filter(function(d) {
                    J(d, 1) || oc(32, "");
                    return !!J(d, 1)
                }).map(function(d) {
                    return {
                        ra: J(d, 1),
                        wa: void 0
                    }
                }) : []
            });
            this.Qa = Lx(this, function(c) {
                return J(c, 23)
            });
            this.Oa = Lx(this, function(c) {
                return T(c, cm, 14)
            });
            this.Ra = Lx(this, function(c) {
                return z(c, 11)
            });
            Lx(this, function(c) {
                return J(c, 33)
            });
            Lx(this, function(c) {
                return J(c, 27)
            });
            this.H = this.m();
            this.Aa = Lx(this, function(c) {
                return R(c, aq, 55)
            });
            this.Na = Lx(this, function(c) {
                var d, e;
                return null !== (e = null === (d = R(c, Lp, 56)) || void 0 === d ? void 0 : J(d, 1)) && void 0 !== e ? e : null
            });
            this.$ = W(this, a)
        };
        _.L(Mx, Y);
        var Lx = function(a, b) {
            var c = a.m();
            a.U.push({
                C: c,
                Pb: b
            });
            return c
        };
        Mx.prototype.j = function() {
            for (var a = _.A(this.U), b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c.C;
                c = c.Pb;
                c = c(this.$.value);
                null == c ? ur(b) : b.j(c)
            }
            0 === this.ia.kind || 1 === this.ia.kind && this.ia.url ? this.H.j(this.ia) : this.H.j({
                kind: 0,
                na: J(this.$.value, 4) || ""
            })
        }
        ;
        var Nx = function(a, b) {
            Y.call(this, 822);
            this.slotId = a;
            this.l = X(this, b)
        };
        _.L(Nx, Y);
        Nx.prototype.j = function() {
            var a;
            if (null != this.l.value) {
                var b = null !== (a = this.l.value) && void 0 !== a ? a : []
                    , c = Ho.D();
                b = _.A(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    Io(c, d);
                    var e = this.slotId;
                    c.j[d] = c.j[d] || new D.Set;
                    c.j[d].add(e)
                }
            }
        }
        ;
        var Ox = function(a, b) {
            Y.call(this, 803);
            this.l = a;
            this.slotId = b;
            this.C = this.m()
        };
        _.L(Ox, Y);
        Ox.prototype.j = function() {
            var a, b = JSON.parse(this.l), c = b ? Yc(b, Xe) : void 0;
            if (!c)
                throw Error("missing ad unit path");
            if (null === b || void 0 === b || !b[c])
                throw Error("invalid ad unit path: " + c);
            b = b[c];
            if (!Array.isArray(b))
                throw Error("dictionary not an array: " + this.l);
            b = new dq(b.slice());
            c = _.A(null !== (a = J(b, 27)) && void 0 !== a ? a : []);
            for (var d = c.next(); !d.done; d = c.next())
                d = d.value,
                    Mj.D().j(d);
            Oj(4);
            this.slotId.dispatchEvent(Ak, 800, b);
            this.C.j(b)
        }
        ;
        var Px = function(a, b, c, d, e) {
            Y.call(this, 823);
            this.slotId = a;
            this.o = b;
            this.l = c;
            this.F = X(this, d);
            this.A = X(this, e)
        };
        _.L(Px, Y);
        Px.prototype.j = function() {
            var a = this, b, c = this.o.P[this.slotId.getDomId()];
            if (c) {
                var d = null !== (b = this.A.value) && void 0 !== b ? b : null;
                Xn(c, d, !!this.F.value) && (_.lo(this.l, this.slotId),
                Wn(d) && ho(this.l, this.slotId, function() {
                    _.mo(a.l, a.slotId)
                }))
            }
        }
        ;
        var Qx = function(a, b, c) {
            Y.call(this, 821);
            this.l = a;
            this.o = b;
            this.A = X(this, c)
        };
        _.L(Qx, Y);
        Qx.prototype.j = function() {
            var a, b = null === (a = this.A.value) || void 0 === a ? void 0 : a[0];
            b && Am(this.o, b, this.l)
        }
        ;
        var Rx = function() {}
            , Tx = function(a, b, c, d, e, f, g, h, k, l) {
            var n, m, p = new Cc, q = d.N, v = new Ew(window);
            V(p, v);
            var B = new zw(b,g,d,Sd.D(),c,window);
            V(p, B);
            var I = new Ow(window);
            V(p, I);
            var H = new Aw(a);
            V(p, H);
            g = new Bw(b,g,a,e,c,d,h,k,v.l,I.C,B.l,H.C);
            V(p, g);
            h = new Cw(b.j,a,d,e,f.getOseId(),g.l);
            V(p, h);
            k = !(null !== (m = null === (n = en(q)) || void 0 === n ? void 0 : z(n, 9)) && void 0 !== m && m) && !!z(c, 5);
            v = new Pw;
            V(p, v);
            g = new Lw(a,b.j.map(function(M) {
                    return M.getSlotId()
                }),d,g.l,h.o,v.C,function(M, S, va, ib) {
                    var Xa;
                    Sx(a, f, c, e, d, M, !1, S, va, l, p, ib, null !== (Xa = b.G) && void 0 !== Xa ? Xa : "")
                }
                ,function(M, S) {
                    Sx(a, f, c, e, d, M, !0, "", {
                        kind: 0,
                        na: ""
                    }, l, p, S, "")
                }
                ,Qa(),k);
            V(p, g);
            q = new Fw(g.H,b.m,q.oa(),e,c,uw.D(),window);
            V(p, q);
            Ec(p)
        }
            , Sx = function(a, b, c, d, e, f, g, h, k, l, n, m, p) {
            var q = new Cc;
            h = new Ox(h,f);
            V(q, h);
            k = new Mx(h.C,k);
            V(q, k);
            h = new Qx(c,d,k.Oa);
            V(q, h);
            h = new Nx(f,k.Qa);
            V(q, h);
            h = new Px(f,e,a,k.Ra,k.O);
            V(q, h);
            g = g || Pa("google_norender");
            a = new Kx(f,e,a,g,c,d,b,l,document,window,k,p,k.za);
            V(q, a);
            Yo(Xd.D(), f, q);
            _.Yd(f, function() {
                Xo(Xd.D(), f)
            });
            Ec(q);
            m && n.pa()
        }
            , Ux = function(a, b, c, d) {
            return Yb(a, function f() {
                var g, h, k, l, n, m, p, q, v, B;
                return Zb(f, function(I) {
                    if (1 == I.j)
                        return g = new Cc,
                            h = b.map(function(H) {
                                return H.getSlotId()
                            }),
                            k = new yw(h,c,d),
                            V(g, k),
                            Ec(g),
                            $b(I, k.A.promise, 2);
                    n = l = I.m;
                    m = [];
                    p = _.A(n);
                    for (q = p.next(); !q.done; q = p.next())
                        v = q.value,
                        (B = To(Xd.D(), v)) && m.push(B);
                    return I.return(m)
                })
            })
        }
            , Vx = function(a) {
            return Yb(a, function c() {
                var d, e, f;
                return Zb(c, function(g) {
                    if (1 == g.j)
                        return d = new Cc,
                            e = new xw(1),
                            V(d, e),
                            Ec(d),
                            $b(g, e.C.promise, 2);
                    f = g.m;
                    return g.return(f)
                })
            })
        };
        var Wx = null
            , Xx = !1
            , Yx = !1
            , Zx = !1
            , $x = function(a) {
            a = void 0 === a ? _.C : a;
            if (!Yx) {
                var b = new Za("gpt_pubconsole_loaded");
                $a(b);
                u(b, "param", String(Pd(a)));
                u(b, "api", String(Zx));
                bb(b, 1);
                b = "https:" + _.t(228) + "loader.js";
                Xh(a.document, qf(b));
                Yx = !0
            }
        }
            , ay = w(94, function(a) {
            a = void 0 === a ? _.C : a;
            Rd()._pubconsole_disable_ || null !== Pd(a) && $x(a)
        })
            , by = function(a, b) {
            !Rd()._pubconsole_disable_ && (a = ob("google_pubconsole", a, b)) && (a = a.split("|"),
            0 < a.length && ("1" == a[0] || "0" == a[0]) && $x())
        };
        "complete" === _.C.document.readyState ? ay() : Vj(_.C, function() {
            ay()
        });
        Qd("disablePublisherConsole", y(93, function() {
            Rd()._pubconsole_disable_ = !0
        }));
        Qd("onPubConsoleJsLoad", y(731, function() {
            Xx && (Rd().console.openConsole(Wx),
                Wx = null,
                Xx = !1)
        }));
        Qd("openConsole", y(732, function(a) {
            a = void 0 === a ? "" : a;
            Zx = !0;
            Rd && Rd().console ? Rd().console.openConsole(a) : (a && (Wx = a),
                Xx = !0,
                $x())
        }));
        var dy = function(a, b) {
            Y.call(this, 700);
            this.Ea = a;
            this.ia = b;
            this.R = [];
            this.fa = cy(this, function(c) {
                return J(c, 6)
            });
            this.Ca = cy(this, function(c) {
                return J(c, 7)
            });
            cy(this, function(c) {
                return z(c, 8)
            });
            this.J = cy(this, function(c) {
                return J(c, 10)
            });
            cy(this, function(c) {
                return J(c, 15)
            });
            this.H = cy(this, function(c) {
                return J(c, 34)
            });
            this.l = cy(this, function(c) {
                return R(c, Kp, 43)
            });
            this.o = cy(this, function(c) {
                return R(c, eq, 41)
            });
            this.A = cy(this, function(c) {
                return z(c, 9)
            });
            this.V = cy(this, function(c) {
                return z(c, 12)
            });
            this.Z = cy(this, function(c) {
                return R(c, bm, 50)
            });
            this.O = cy(this, function(c) {
                return R(c, zp, 48)
            });
            this.I = cy(this, function(c) {
                return R(c, xp, 39)
            });
            this.$ = cy(this, function(c) {
                return J(c, 36)
            });
            this.za = cy(this, function(c) {
                return z(c, 13)
            });
            this.da = cy(this, function(c) {
                return z(c, 3)
            });
            this.U = cy(this, function(c) {
                return J(c, 49)
            });
            this.Aa = cy(this, function(c) {
                return J(c, 29)
            });
            this.Ba = cy(this, function(c) {
                return J(c, 30)
            });
            this.ga = cy(this, function(c) {
                return R(c, Mp, 51)
            });
            this.Y = cy(this, function(c) {
                return z(c, 52)
            });
            this.ba = cy(this, function() {
                return "encrypted_url"
            });
            this.ea = cy(this, function(c) {
                return (c = R(c, Jp, 54)) ? T(c, Hp, 1).filter(function(d) {
                    J(d, 1) || oc(32, "");
                    return !!J(d, 1)
                }).map(function(d) {
                    return {
                        ra: J(d, 1),
                        wa: void 0
                    }
                }) : []
            });
            this.ka = cy(this, function(c) {
                return R(c, aq, 55)
            });
            this.Da = cy(this, function(c) {
                var d, e;
                return null !== (e = null === (d = R(c, Lp, 56)) || void 0 === d ? void 0 : J(d, 1)) && void 0 !== e ? e : null
            });
            this.F = this.m()
        };
        _.L(dy, Y);
        var cy = function(a, b) {
            var c = Y.prototype.m.call(a);
            a.R.push({
                C: c,
                Pb: b
            });
            return c
        };
        dy.prototype.j = function() {
            for (var a = this.Ea, b = _.A(this.R), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d.C;
                d = d.Pb;
                d = d(a);
                null != d ? c.j(d) : ur(c)
            }
            0 === this.ia.kind || 1 === this.ia.kind && this.ia.url ? this.F.j(this.ia) : this.F.j({
                kind: 0,
                na: J(a, 4) || ""
            })
        }
        ;
        var ey = function() {
            this.j = new D.Map
        }
            , fy = function(a, b) {
            var c;
            b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.pa(),
                a.j.delete(b))
        }
            , gy = function(a, b, c, d, e, f, g, h, k, l, n, m) {
            fy(a, b);
            var p = new Cc
                , q = gm(!0, window)
                , v = e.N
                , B = e.P[b.getDomId()]
                , I = new ax(window);
            V(p, I);
            f = new dy(f,g);
            V(p, f);
            var H = new Yw(B,f.fa,f.Ca,f.F,f.Da);
            V(p, H);
            var M = new px(window.top,k);
            V(p, M);
            g = new cx(Rd(),Hb(b.getAdUnitPath()),window.console,f.ea,M.C);
            V(p, g);
            var S = new jx;
            V(p, S);
            var va = new Zw(Gb(B),q.height,f.I,H.A);
            V(p, va);
            g = new Bx(b,xb(b, h),b.getDomId(),Zn(b),h,Gb(B),c,H.l,va.C);
            V(p, g);
            var ib = new pu(H.o,f.l,f.o,f.A,f.V);
            V(p, ib);
            var Xa = new ux(v,B,window,f.l,f.o,f.V);
            V(p, Xa);
            var jb = new $w(b,v,Gb(B),h,c,g.C,Xa.C);
            V(p, jb);
            var nd = new Ex(jb.C);
            V(p, nd);
            var ee = new mx(R(v, $m, 5),f.Aa);
            V(p, ee);
            S = new rx(b,q,c,S.C,nd.C,ee.l,f.A);
            V(p, S);
            ee = new nx(S.C,jb.C,f.Ba,ee.l);
            V(p, ee);
            H = new xx(b.getAdUnitPath(),B,q.width,window,f.$,H.l,va.C,ib.l,g.C);
            V(p, H);
            va = new bx(window,g.C);
            V(p, va);
            q = new Ww(h,b,B,q,f.J,g.C,jb.C,H.o,H.A,va.C,f.H);
            V(p, q);
            Xa = new tx(Xa.C,H.F);
            V(p, Xa);
            v = new wx(v,B,Xa.C,f.l,f.A,f.za);
            V(p, v);
            I = new Fx(window,f.ba,I.C);
            V(p, I);
            l = new vx(b,e,c,k,l,f.A,f.Y);
            V(p, l);
            va = new Gx(f.ka);
            V(p, va);
            ib = new ex(h);
            V(p, ib);
            k = new gw(Gb(B),f.I,f.O);
            V(p, k);
            l = new Vw(b,c,e,n,window,H.F,l.C,ee.C,g.C,jb.C,H.o,Xa.C,f.o,f.H,f.J,v.C,f.A,f.da,f.U,f.Y,q.C,I.C,va.C,ib.C,k.C);
            V(p, l);
            I = new bw(c,Gb(B),b,window,f.I,l.l,g.C,k.C);
            V(p, I);
            e = new dw(b,Gb(B),e.Wa,f.O,l.l,g.C,M.C,k.C);
            V(p, e);
            e = new nu(b,window,f.l,l.l,l.o);
            V(p, e);
            e = new Xw(window,b,Ob(),f.Z,l.l);
            V(p, e);
            B = new rw(b,Gb(B),n,window,l.l,g.C);
            V(p, B);
            var EA = new Hx(b,n,h);
            n = function(FA, GA, HA) {
                return void Jx(EA, FA, GA, HA)
            }
            ;
            h = new ix(b,l.l,n,h);
            V(p, h);
            c = new qx(oo(c, b),d,f.l,l.l,n);
            V(p, c);
            c = new ju(b,f.H,f.J,f.o,f.l,f.U,l.l,jb.C,l.o);
            V(p, c);
            _.uk(p, new qu(n,b,f.o,f.l));
            c = new hx(window,f.ga,l.l,jb.C,g.C);
            V(p, c);
            V(p, new fx(m,window,l.l));
            a.j.set(b, p);
            _.Yd(b, function() {
                return void fy(a, b)
            });
            Ec(p)
        };
        var hy = function(a, b, c) {
            this.url = a;
            this.m = b;
            this.withCredentials = c;
            this.G = 0;
            this.l = !1;
            this.j = new XMLHttpRequest
        }
            , ky = function(a) {
            a.j.open("GET", a.url);
            a.j.withCredentials = a.withCredentials;
            Wt(a.j);
            a.j.onreadystatechange = function() {
                iy(a, !1)
            }
            ;
            a.j.onload = function() {
                iy(a, !0)
            }
            ;
            a.j.onerror = function() {
                jy(a.m, Error("XHR error"))
            }
            ;
            a.j.send()
        }
            , iy = function(a, b) {
            try {
                if (3 === a.j.readyState || 4 === a.j.readyState)
                    if (300 <= a.j.status || 200 > a.j.status && _.x(445))
                        a.l || jy(a.m, Error("xhr_err-" + a.j.status)),
                            a.l = !0;
                    else {
                        var c = a.j.responseText.substr(a.G);
                        if (c) {
                            var d = a.m;
                            if (c)
                                if (1 !== d.state && 2 !== d.state)
                                    jy(d, Error("state err: (" + ([d.state, d.j.length].join() + ")")));
                                else {
                                    d.j && (c = d.j + c);
                                    var e = 0
                                        , f = !1;
                                    do {
                                        var g = c.indexOf("\n", e);
                                        f = -1 !== g;
                                        if (!f)
                                            break;
                                        var h = d
                                            , k = c.substr(e, g - e);
                                        if (1 === h.state)
                                            h.m = k,
                                                ++h.l,
                                                h.state = 2;
                                        else {
                                            try {
                                                h.B(h.l, h.m, {
                                                    kind: 0,
                                                    na: Fi(k)
                                                }),
                                                    h.m = ""
                                            } catch (n) {}
                                            h.state = 1
                                        }
                                        e = g + 1
                                    } while (f && e < c.length);
                                    d.j = c.substr(e)
                                }
                        }
                        a.G = a.j.responseText.length;
                        if (b && 4 === a.j.readyState) {
                            var l = a.m;
                            1 !== l.state || l.j ? jy(l, Error("state err (" + ([l.state, l.j.length].join() + ")"))) : (l.state = 3,
                                l.G())
                        }
                    }
            } catch (n) {
                jy(a.m, n)
            }
        }
            , ly = function(a, b, c) {
            ky(new hy(a,b,void 0 === c ? !0 : c))
        };
        var my = function(a, b, c) {
            this.B = a;
            this.o = b;
            this.G = c;
            this.m = "";
            this.l = -1;
            this.state = 1;
            this.j = ""
        }
            , jy = function(a, b) {
            a.state = 4;
            try {
                a.o(b)
            } catch (c) {}
        };
        var ny = function() {
            if (Tf()) {
                if (0 <= Gf(Vf(), 11))
                    return !0
            } else if (Rf() && 0 <= Gf(Vf(), 65))
                return !0;
            return !1
        }
            , oy = function(a) {
            if (_.x(200))
                a();
            else {
                if (!_.x(220)) {
                    var b = _.t(150);
                    Yr();
                    Sr.test(b) && !Tr.test(b) && (Xr[1] = b)
                }
                ny() ? ds(w(759, a)) : (ds(null),
                    a())
            }
        }
            , py = function(a) {
            var b = function(c) {
                oi(_.C.top, "googlefcLoaded") ? c() : setTimeout(function() {
                    b(w(678, c))
                }, 20)
            };
            kr() ? b(a) : a()
        }
            , qy = function(a) {
            var b = kr();
            _.C.googlefc && !b && eb("gpt_fc_has_namespace_but_no_iframes", function(c) {
                $a(c);
                u(c, "networkId", a)
            }, {
                la: 1
            })
        }
            , ry = function(a, b) {
            a = new Rs(_.Kh(a),-1);
            if (Ts(a)) {
                var c = _.t(255);
                _.x(467) ? c ? b(c) : (_.t(256).push(b),
                void 0 === c && (fk(255, null),
                    a.addEventListener(function(d) {
                        Vs(d) ? (fk(255, d),
                            _.t(256).forEach(function(e) {
                                e(d)
                            }),
                            fk(256, [])) : fk(255, null)
                    }))) : (Sd.D().info(Xl()),
                    Ws(a, w(661, function(d) {
                        b(d)
                    })))
            } else
                b(null)
        }
            , sy = function(a, b) {
            a = new As(_.Kh(a));
            if (Cs(a)) {
                var c = w(660, function(d) {
                    d && "string" === typeof d.uspString ? b(d.uspString) : b(null)
                });
                Sd.D().info(Wl());
                Es(a, c)
            } else
                b(null)
        }
            , ty = function(a, b) {
            a.length && (a = a[0],
                zj(Ka.D(), "3", J(b.P[a.getSlotId().getDomId()], 20)))
        }
            , uy = function(a) {
            a = a instanceof Error ? a : Error();
            a.message = a.message || "strm_err";
            Wa(289, a, !0)
        }
            , vy = function(a, b) {
            if (_.x(177))
                return !1;
            a = z(a, 11);
            null == a && (a = z(b, 10));
            return !!a
        }
            , wy = function(a) {
            var b = Rd()
                , c = a.replace("googletag.", "");
            return new D.Promise(function(d) {
                    Object.defineProperty(b, c, {
                        value: function(e, f) {
                            var g = d;
                            d = null;
                            g && g({
                                Qc: e,
                                md: f
                            })
                        },
                        writable: !1,
                        enumerable: !1
                    })
                }
            )
        }
            , xy = null
            , yy = function(a) {
            var b = fo.D();
            var c = xy = xy || new ym;
            this.j = b;
            this.m = c;
            this.X = a;
            this.K = Ho.D();
            this.l = new D.Map;
            this.A = kd(this.A);
            this.B = w(291, this.B);
            this.O = Pa("google_nofetch");
            this.R = Pa("google_norender");
            this.G = new cu;
            this.U = 0;
            this.J = {};
            this.I = {};
            this.o = {};
            this.H = new ey;
            this.F = new Rx;
            this.T = _.Ze(function() {
                return void co("gpt-first-ad-request")
            })
        }
            , Ay = function(a, b, c, d, e, f) {
            var g = c.getSlotId();
            if (_.ko(a.j, g)) {
                if (e) {
                    var h = {};
                    h[g.getDomId()] = d;
                    zy(a, [c], f, h)
                }
                if (e || !bo(g, b))
                    a = z(d, 10),
                    null == a && (a = z(f, 11)),
                    a && !_.x(390) && od(g, b)
            }
        }
            , By = function(a, b, c, d, e) {
            if (e = e.P[b.getDomId()])
                b.dispatchEvent(Ak, 800, d),
                null != J(d, 23) && J(d, 23).forEach(function(f) {
                    Io(a.K, f);
                    var g = a.K;
                    g.j[f] = g.j[f] || new D.Set;
                    g.j[f].add(b)
                }),
                T(d, cm, 14).length && Am(a.m, T(d, cm, 14)[0], c),
                Xn(e, R(d, bm, 50), !!z(d, 11)) && (_.lo(a.j, b),
                Wn(R(d, bm, 50)) && ho(a.j, b, function() {
                    _.mo(a.j, b)
                }))
        };
        yy.prototype.A = function(a, b) {
            var c = this;
            b = void 0 === b ? !1 : b;
            return _.C.IntersectionObserver ? new _.C.IntersectionObserver(function(d, e) {
                    return c.B(d, e, b)
                }
                ,{
                    rootMargin: a
                }) : new Jd(function(d, e) {
                    return c.B(d, e, b)
                }
                ,{
                    rootMargin: a
                })
        }
        ;
        yy.prototype.B = function(a, b, c) {
            var d = this;
            c = void 0 === c ? !1 : c;
            a.forEach(function(e) {
                if (c || !(0 >= e.intersectionRatio)) {
                    b.unobserve(e.target);
                    e = e.target.id;
                    var f = d.l.get(e);
                    f && (f.Kb(),
                        d.l.delete(e))
                }
            })
        }
        ;
        var Cy = function(a, b) {
            if (!b.length)
                return [];
            var c = Hb(b[0].getSlotId().getAdUnitPath());
            return bk().map(function(d) {
                if (Hb(d.getSlotId().getAdUnitPath()) != c || _.F(b, "includes").call(b, d))
                    d = "";
                else {
                    d = d.getSlotId();
                    var e, f;
                    d = null !== (f = null === (e = a.j.j.get(d)) || void 0 === e ? void 0 : e.Yb) && void 0 !== f ? f : ""
                }
                return d
            }).filter(function(d) {
                return !!d
            })
        }
            , Dy = function(a, b, c, d, e, f) {
            var g, h, k, l, n, m, p, q;
            Ae(new ze(new ve(function(v) {
                    if (1 == v.j)
                        return g = _.Mh(document, "LINK"),
                        (/^https:/.test(a) || _.t(257)) && ag(g, new _.If(a,Hf), "webbundle"),
                            g.resources.add(Ha(c.o).toString()),
                            g.crossOrigin = b ? "use-credentials" : "anonymous",
                            h = document.createElement("script"),
                            Wb(h, c.o),
                            document.head.appendChild(g),
                            document.head.appendChild(h),
                            $b(v, wy(c.F), 2);
                    k = v.m;
                    l = k.Qc;
                    n = k.md;
                    if (l.length !== n.length)
                        return e(Error("Received " + l.length + " but " + n.length + " metadatas")),
                            v.return();
                    for (m = 0; m < l.length; m++)
                        p = l[m],
                            q = n[m],
                        p && g.resources.add(p),
                            d(m, q, {
                                kind: 1,
                                url: p
                            });
                    f();
                    v.j = 0
                }
            )))
        }
            , Ey = function(a, b, c, d) {
            var e = new fu;
            a = ++a.U;
            e.l = a;
            if ((d = Pn(d.N)) && _.x(501)) {
                e.m = "wbn";
                var f = Array(36);
                for (var g = 0, h, k = 0; 36 > k; k++)
                    8 == k || 13 == k || 18 == k || 23 == k ? f[k] = "-" : 14 == k ? f[k] = "4" : (2 >= g && (g = 33554432 + 16777216 * Math.random() | 0),
                        h = g & 15,
                        g >>= 4,
                        f[k] = Nv[19 == k ? h & 3 | 8 : h]);
                f = qf("urn:uuid:" + f.join("").toLowerCase());
                e.o = f;
                e.F = "googletag.wbn" + a
            } else
                e.m = "ldjh";
            e.X = d ? "fifs" : "fif";
            e.ta = c.ta;
            e.Va = c.Va || NaN;
            e.Ua = c.Ua || NaN;
            e.j = b;
            return e
        }
            , Fy = function(a, b, c, d) {
            var e = a.j
                , f = a.m
                , g = Pn(d.N)
                , h = a.G.getOseId()
                , k = Cy(a, b.j);
            a = new Cc;
            var l = new Ew(window);
            V(a, l);
            var n = new Ow(window);
            V(a, n);
            var m = new zw(b,g,d,Sd.D(),c,window);
            V(a, m);
            var p = new Aw(e);
            V(a, p);
            b = new Bw(b,g,e,f,c,d,h,k,l.l,n.C,m.l,p.C);
            V(a, b);
            Ec(a);
            return b.l.promise
        }
            , Gy = function(a, b) {
            var c = !_.x(200);
            gu(b, nc(), a.G.getOseId(), Cy(a, b.j), c ? Zr() : "", c ? $r() : "", c ? as() : "")
        }
            , Ky = function(a, b, c, d) {
            var e = w(750, function() {
                return Hy(a, b, c, d)
            });
            return _.x(491) ? Iy(a, b).then(w(812, function(f) {
                b.j = f;
                return Jy(a, b, d)
            })).then(e) : Jy(a, b, d).then(e)
        }
            , Iy = function(a, b) {
            var c = Jm(document);
            if (!c || !Km(document))
                return D.Promise.resolve(b.j);
            var d = b.j.slice()
                , e = new Lc
                , f = function() {
                Km(document) || (e.resolve(d),
                    _.uc(document, c, f))
            };
            _.E(document, c, f);
            b = {};
            for (var g = _.A(d), h = g.next(); !h.done; b = {
                vb: b.vb
            },
                h = g.next())
                b.vb = h.value,
                    io(a.j, b.vb.getSlotId(), function(k) {
                        return function() {
                            da(d, k.vb);
                            d.length || e.resolve([])
                        }
                    }(b));
            return e.promise
        }
            , Jy = function(a, b, c) {
            b = b.j;
            var d = c.N
                , e = c.P;
            c = R(d, $m, 5) || new $m;
            c = Ad(c);
            if (null == c)
                return D.Promise.resolve();
            var f = Math.max(c / 100, 0);
            if (!b.every(function(l) {
                l = l.getSlotId();
                var n = e[l.getDomId()]
                    , m = xb(l);
                if (m = Bb(m)) {
                    m = window;
                    var p = !!z(d, 15);
                    (l = Vn(l, n, m.document, p)) && -12245933 != l.y ? (n = gm(!0, m),
                        l = Un(l, n, f)) : l = !0;
                    m = !l
                }
                return m
            }))
                return D.Promise.resolve();
            c = a.A(c + "%");
            var g = new Lc
                , h = {};
            b = _.A(b);
            for (var k = b.next(); !k.done; h = {
                hb: h.hb,
                wb: h.wb
            },
                k = b.next())
                k = k.value,
                    h.wb = k.getSlotId().getDomId(),
                    h.hb = xb(k.getSlotId()),
                h.hb && (a.l.set(h.wb, {
                    Kb: function() {
                        return void g.resolve()
                    },
                    od: c
                }),
                    c.observe(h.hb),
                    io(a.j, k.getSlotId(), function(l) {
                        return function() {
                            Ly(a, l.hb, l.wb)
                        }
                    }(h)));
            return g.promise
        }
            , Hy = function(a, b, c, d) {
            var e = b.j;
            if (e.length)
                if (a.l.get(e[0].getSlotId().getDomId()) && e.forEach(function(f) {
                    var g = f.getSlotId().getDomId();
                    f = xb(f.getSlotId());
                    Ly(a, f, g)
                }),
                    _.x(521))
                    Tx(a.j, b, c, d, a.m, a.G, Pn(d.N), a.G.getOseId(), Cy(a, b.j), a.X);
                else
                    return _.x(441) ? Fy(a, b, c, d).then(function(f) {
                        _.x(360310855) && !f || My(a, f, b, c, d)
                    }) : Ny(a, b, c, d)
        }
            , Ny = function(a, b, c, d) {
            Gy(a, b);
            var e = Yu(new Vu(Pn(d.N),a.j,a.m,b,c,d));
            My(a, e, b, c, d)
        }
            , My = function(a, b, c, d, e) {
            a.J[c.l] = c.j;
            Oy(a, b, c, d, e);
            "wbn" !== c.m && (b = e.N.oa(),
                b = !b || b && (!zd(b, 4) || !z(b, 4)),
                ww(uw.D(), window, Sn(a.m, d)),
            b && ww(uw.D(), window));
            d = _.kc();
            c = _.A(c.j);
            for (b = c.next(); !b.done; b = c.next())
                no(a.j, b.value.getSlotId(), d)
        };
        yy.prototype.refresh = function(a, b, c) {
            var d = this
                , e = _.kc();
            if (_.x(519))
                Ux(this.F, a, this.j, e).then(w(835, function(h) {
                    h.length && Py(d, h, b, c)
                }));
            else {
                var f = a.length
                    , g = function() {
                    a = a.filter(function(h) {
                        h = h.getSlotId();
                        var k = ro(d.j, h);
                        so(d.j, h);
                        return !k
                    });
                    _.x(526) && eb("gpt_urg_spr", function(h) {
                        $a(h);
                        u(h, "start_time", e);
                        u(h, "end_time", _.kc());
                        u(h, "n", f - a.length)
                    }, {
                        la: 1
                    });
                    a.length && Py(d, a, b, c)
                };
                _.x(527) ? Vx(this.F).then(w(848, function() {
                    g()
                })) : g()
            }
        }
        ;
        var Py = function(a, b, c, d) {
            var e = _.kc(), f;
            b = pa(b, function(g) {
                g = g.getSlotId();
                var h, k;
                g = null != (f = null !== (k = null === (h = a.j.j.get(g)) || void 0 === h ? void 0 : h.Gc) && void 0 !== k ? k : null) ? f : 0;
                h = 1E3 * _.Kb(47, 1);
                return 0 === g ? 0 : Math.max(0, Math.round((h - (e - g)) / 1E3))
            });
            _.ab(b, function(g, h) {
                if ("0" === h)
                    Qy(a, g, c, d);
                else {
                    var k = parseInt(h, 10);
                    g.forEach(function(l) {
                        Sd.D().M(Rl(String(k), l.getSlotId().getAdUnitPath()))
                    });
                    Qy(a, g, c, d, 1E3 * k)
                }
            })
        }
            , Qy = function(a, b, c, d, e) {
            (e = void 0 === e ? 0 : e) ? setTimeout(w(375, function() {
                Ry(a, b, c, d)
            }), e) : Ry(a, b, c, d)
        }
            , Ry = function(a, b, c, d) {
            for (var e = d.N, f = d.P, g = _.A(b), h = g.next(); !h.done; h = g.next())
                so(a.j, h.value.getSlotId());
            b = pa(b, function(k) {
                k = f[k.getSlotId().getDomId()];
                return 0 != Ab(k).length || zd(k, 16)
            });
            if (b[!1])
                for (g = _.A(b[!1]),
                         h = g.next(); !h.done; h = g.next())
                    h = h.value,
                        Ay(a, document, h, d.P[h.getSlotId().getDomId()], !0, e);
            if (b = b[!0]) {
                e = _.A(b);
                for (h = e.next(); !h.done; h = e.next())
                    qo(a.j, h.value.getSlotId());
                if (!a.O)
                    if (Pn(d.N))
                        h = Hb(b[0].getSlotId().getAdUnitPath()),
                            h = Sy(b, h),
                            Ty(a, d, h, c);
                    else
                        for (e = _.A(b),
                                 h = e.next(); !h.done; h = e.next())
                            Ty(a, d, [[h.value]], c)
            }
        }
            , zy = function(a, b, c, d) {
            var e = void 0 === e ? window : e;
            for (var f = _.x(521), g = _.A(b), h = g.next(); !h.done; h = g.next())
                h = h.value,
                    f ? Xo(Xd.D(), h.getSlotId()) : fy(a.H, h.getSlotId());
            b = _.A(b);
            for (h = b.next(); !h.done; h = b.next())
                f = h.value,
                vy(d[f.getSlotId().getDomId()], c) && od(f.getSlotId(), e.document),
                    qo(a.j, f.getSlotId());
            return !0
        }
            , Ly = function(a, b, c) {
            if (b) {
                var d = a.l.get(c);
                d && (d.od.unobserve(b),
                    a.l.delete(c))
            }
        }
            , Uy = function(a, b, c, d) {
            d = void 0 === d ? document : d;
            var e, f, g, h = 0, k = d, l = function() {
                h++;
                if (3 === h) {
                    var q = f
                        , v = e
                        , B = g
                        , I = new dm
                        , H = en(c.N);
                    H = H && z(H, 9);
                    if (q) {
                        if (H = !H) {
                            var M = void 0 === M ? !1 : M;
                            if (Vs(q))
                                if (!1 === q.gdprApplies || "tcunavailable" === q.tcString || void 0 === q.gdprApplies && !M || "string" !== typeof q.tcString || !q.tcString.length)
                                    var S = !0;
                                else {
                                    S = void 0 === S ? "755" : S;
                                    b: {
                                        if (q.publisher && q.publisher.restrictions && (M = q.publisher.restrictions["1"],
                                        void 0 !== M)) {
                                            M = M[void 0 === S ? "755" : S];
                                            break b
                                        }
                                        M = void 0
                                    }
                                    0 === M ? S = !1 : q.purpose && q.vendor ? (M = q.vendor.consents,
                                        (S = !(!M || !M[void 0 === S ? "755" : S])) && q.purposeOneTreatment && ("DE" === q.publisherCC || _.x(1936) && "CH" === q.publisherCC) ? S = !0 : S && (S = q.purpose.consents,
                                            S = !(!S || !S["1"]))) : S = !0
                                }
                            else
                                S = !1;
                            H = S
                        }
                        S = G(I, 5, H);
                        S = G(S, 2, q.tcString);
                        S = G(S, 4, q.addtlConsent || "");
                        G(S, 7, q.internalErrorState);
                        void 0 !== q.gdprApplies && G(I, 3, q.gdprApplies);
                        "tcunavailable" === q.tcString ? Sd.D().info(Yl("failed")) : Sd.D().info(Yl("succeeded"))
                    } else
                        G(I, 5, !H);
                    v && G(I, 1, v);
                    null !== B && G(I, 6, B);
                    b(I)
                }
            };
            qy(a);
            var n = function() {
                ry(k, function(q) {
                    f = q;
                    l()
                });
                sy(k, function(q) {
                    e = q;
                    l()
                })
            };
            if (_.x(367)) {
                var m = new Ls(_.Kh(d))
                    , p = _.t(221);
                d = m.j ? Os(m, "loaded") : D.Promise.resolve();
                d.then(function(q) {
                    return Ps(m, q, a, p)
                }).then(function(q) {
                    g = q;
                    l()
                });
                d.then(n)
            } else
                py(function() {
                    var q = en(c.N)
                        , v = _.t(221);
                    q = !(!q || !z(q, 8));
                    or(v, a, w(451, l), q);
                    n()
                })
        }
            , Wy = function(a, b, c, d) {
            d = void 0 === d ? document : d;
            var e = b.j.length ? Hb(b.j[0].getSlotId().getAdUnitPath()) : "";
            Uy(e, function(f) {
                z(f, 5) ? oy(function() {
                    Vy(a, b, f, c, d)
                }) : Vy(a, b, f, c, d);
                by(f, d)
            }, c, d)
        }
            , Vy = function(a, b, c, d, e) {
            e = void 0 === e ? document : e;
            var f = hb(c);
            Ko.D().m = f;
            Lo(Ko.D(), zm(a.m, c));
            Oj(2);
            var g = d.N
                , h = d.P;
            _.x(355925688) || (b.j = b.j.filter(function(n) {
                var m = n.getSlotId().getDomId();
                if (5 === Gb(h[m])) {
                    var p = Eb(window, "6499" !== Hb(n.getSlotId().getAdUnitPath()), f);
                    p && eb("gpt_int_ns", function(q) {
                        u(q, "nsr", p);
                        if (f) {
                            var v = Math.max.apply(Math, _.Ib(Jb(f) || []));
                            u(q, "del", Math.floor((Date.now() - v) / 6E4))
                        }
                        $a(q)
                    }, {
                        la: _.Kb(492, .01)
                    });
                    return !p
                }
                return !0
            }));
            if (b.j.length) {
                for (var k = _.A(b.j), l = k.next(); !l.done; l = k.next())
                    Wv(e, l.value.getSlotId(), d);
                Ky(a, b, c, d).then(w(751, function() {
                    for (var n = _.A(b.j), m = n.next(); !m.done; m = n.next())
                        m = m.value,
                            Xy(a, m, g, h[m.getSlotId().getDomId()])
                }))
            }
        }
            , Sy = function(a, b) {
            var c = [];
            a = pa(a, function(d) {
                return Hb(d.getSlotId().getAdUnitPath())
            });
            _.ab(a, function(d, e) {
                e == b ? c.unshift(d) : c.push(d)
            });
            return c
        }
            , Ty = function(a, b, c, d) {
            var e = document;
            if (c) {
                c = _.A(c);
                for (var f = c.next(); !f.done; f = c.next())
                    f = Ey(a, f.value, d, b),
                        Wy(a, f, b, e)
            }
        }
            , Xy = function(a, b, c, d) {
            var e = void 0 === e ? window : e;
            vy(d, c) && !a.j.Za(b.getSlotId()) && od(b.getSlotId(), e.document)
        }
            , Oy = function(a, b, c, d, e) {
            var f = void 0 === f ? _.C.document : f;
            var g = void 0 === g ? uy : g;
            var h = c.j;
            a.o[c.l] = h.slice();
            b = Ma(La(b));
            ty(h, e);
            var k, l, n = !(null != (l = null == (k = en(e.N)) ? void 0 : z(k, 9)) && l) && !!z(d, 5);
            k = w(646, function(m, p, q) {
                Yy(a, c, d, e, m, p, q, f)
            });
            l = w(647, function() {
                for (var m = c.l, p = a.o[m] || [], q = 0; q < p.length; ++q)
                    if (p[q]) {
                        var v = new dq;
                        v = '{"empty":' + G(v, 8, !0).o() + "}";
                        Yy(a, c, d, e, q, v, {
                            kind: 0,
                            na: ""
                        })
                    }
                delete a.o[m];
                Sc(Qa())
            });
            g = w(289, g);
            "wbn" === c.m ? Dy(b, n, c, k, g, l) : ly(b, new my(k,g,l), n);
            a.T();
            h = _.A(h);
            for (g = h.next(); !g.done; g = h.next())
                g = g.value,
                    n = J(e.P[g.getSlotId().getDomId()], 20),
                    k = w(643, Zy(a, g, b, e)),
                    g.getSlotId().dispatchEvent(Ck, 808, {
                        tc: k,
                        bb: n
                    })
        }
            , Zy = function(a, b, c, d) {
            if (Pn(d.N)) {
                var e = Ey(a, [b], {
                    ta: 1
                }, d);
                Gy(a, e);
                var f = new Vu(_.x(364),a.j,a.m,e,new dm,d,!0,[b.getSlotId()]);
                return yb(function() {
                    return La(Yu(f))
                })
            }
            return function() {
                return c
            }
        }
            , Yy = function(a, b, c, d, e, f, g, h) {
            h = void 0 === h ? document : h;
            var k = b.l
                , l = a.o[k] || []
                , n = l[e];
            l[e] = null;
            try {
                var m = JSON.parse(f);
                var p = _.ha(m) ? m : null
            } catch (B) {
                p = null
            }
            l = (e = p) && Yc(e, Xe);
            e = e && e[l];
            e = "string" === typeof l && Array.isArray(e) ? new dq(e.slice()) : null;
            if (n)
                if (l = J(d.P[n.getSlotId().getDomId()], 20),
                a.I[k] || (a.I[k] = !0,
                    zj(Ka.D(), "4", l)),
                    e) {
                    f = J(e, 27);
                    f = _.A(f);
                    for (k = f.next(); !k.done; k = f.next())
                        k = k.value,
                            Mj.D().j(k);
                    Oj(4);
                    By(a, n.getSlotId(), c, e, d);
                    if (!n.W)
                        if (z(e, 8) || a.R) {
                            var q;
                            c = h;
                            g = null != (q = J(e, 34)) ? q : "";
                            (h = xb(n.getSlotId(), c)) && h.setAttribute("data-google-query-id", g);
                            zj(Ka.D(), "5", J(d.P[n.getSlotId().getDomId()], 20));
                            g = n.getSlotId();
                            g.dispatchEvent(Bk, 801, {
                                Mb: null,
                                isBackfill: !1
                            });
                            h = _.x(123);
                            Ay(a, c, n, d.P[g.getDomId()], h, d.N);
                            g.dispatchEvent(Dk, 825, {
                                isEmpty: !0,
                                slotContentChanged: h
                            })
                        } else {
                            var v;
                            n = n.getSlotId();
                            q = null != (v = b.G) ? v : "";
                            gy(a.H, n, a.j, a.G, d, e, g, h, c, a.m, a.X, q)
                        }
                } else
                    Va(646, Error("invalid response: " + f));
            else
                Va(646, Error("missing slot: " + l))
        };
        var $y = function(a, b, c) {
            this.j = a;
            this.state = b;
            this.options = c
        }
            , az = function(a) {
            this.pubads = a;
            this.j = new D.Set;
            this.m = {}
        }
            , bz = function(a, b, c) {
            if (z(b.N, 4))
                return [];
            var d = c.getSlotId(), e;
            return !z(b.N, 6) || (null == (e = b.P[d.getDomId()]) ? 0 : z(e, 17)) ? (a.j.add(d),
                _.Yd(c, function() {
                    return void a.j.delete(d)
                }),
                [c]) : a.pubads.m.filter(function(f) {
                if (a.j.has(f.getSlotId()))
                    return !1;
                a.j.add(f.getSlotId());
                _.Yd(f.getSlotId(), function() {
                    return void a.j.delete(f.getSlotId())
                });
                return !0
            })
        };
        az.prototype.display = function(a, b) {
            var c = bz(this, a, b);
            cz(this.pubads, c, a, {
                ta: 1
            });
            a = b.getSlotId().getAdUnitPath();
            if ((b = this.m[a]) && !_.x(319)) {
                b = _.A(b);
                for (c = b.next(); !c.done; c = b.next())
                    c = c.value,
                        cz(this.pubads, c.j, c.state, c.options);
                delete this.m[a]
            }
        }
        ;
        az.prototype.refresh = function(a, b, c) {
            var d = this
                , e = b[0]
                , f = e ? e.getSlotId().getDomId() : "";
            if (_.x(319))
                dz(this.pubads, yl(f), e.getSlotId()),
                    pp(this.pubads, w(690, function() {
                        for (var h = {}, k = _.A(b), l = k.next(); !l.done; h = {
                            gb: h.gb
                        },
                            l = k.next())
                            h.gb = l.value,
                                d.j.add(h.gb.getSlotId()),
                                _.Yd(h.gb.getSlotId(), function(n) {
                                    return function() {
                                        return void d.j.delete(n.gb.getSlotId())
                                    }
                                }(h));
                        cz(d.pubads, b, a, c)
                    }));
            else if (this.pubads.j) {
                e = {};
                f = _.A(b);
                for (var g = f.next(); !g.done; e = {
                    ib: e.ib
                },
                    g = f.next())
                    e.ib = g.value.getSlotId(),
                        this.j.add(e.ib),
                        _.Yd(e.ib, function(h) {
                            return function() {
                                return void d.j.delete(h.ib)
                            }
                        }(e));
                cz(this.pubads, b, a, c)
            } else
                b.length && z(a.N, 6) ? (dz(this.pubads, yl(f), e.getSlotId()),
                    e = b[0].getSlotId().getAdUnitPath(),
                    f = this.m[e] || [],
                    f.push(new $y(b,a,c)),
                    this.m[e] = f) : dz(this.pubads, wl(f), e.getSlotId())
        }
        ;
        var ez = function() {
            op.call(this);
            _.x(84) && new Mv(this);
            this.o = new az(this);
            this.l = new yy(this)
        };
        _.L(ez, op);
        _.r = ez.prototype;
        _.r.Ma = function() {
            return new Bu(this,Mo)
        }
        ;
        _.r.display = function(a, b, c, d) {
            c = void 0 === c ? "" : c;
            d = void 0 === d ? "" : d;
            var e = "";
            if (c)
                if (_.ha(c) && 1 == c.nodeType) {
                    var f = c;
                    e = f.id
                } else
                    e = c;
            Zo(this);
            var g = Vo(a, b, e)
                , h = g.slot;
            g = g.La;
            h && g ? (f && !e && (f.id = h.getSlotId().getDomId()),
                this.xa(h, g),
                G(g, 7, d),
                sp(f || h.getSlotId().getDomId())) : this.log.M(Wk("PubAdsService.display", [a, b, c]))
        }
        ;
        _.r.Sb = function() {
            var a = this
                , b = $d.D().j;
            if (z(b, 6) || _.x(320))
                for (var c = _.A(this.m), d = c.next(); !d.done; d = c.next())
                    fz(this, d.value.getSlotId());
            yu(this, b);
            if (!(_.x(497) || _.t(221) || _.x(453) || _.x(446) && !_.t(254))) {
                b = null;
                try {
                    b = window.localStorage
                } catch (e) {}
                Fc(Rd(), _.xd(1918).map(function(e) {
                    return {
                        ra: e
                    }
                }), b, function(e, f) {
                    Va(e, f);
                    window.console && window.console.error && window.console.error(f)
                })
            }
            xk(this, "rewardedSlotClosed", function(e) {
                e = e.detail.slot;
                return void zy(a.l, [Zj(e, Mo)], $d.D().j, tn()[e.getSlotId().getDomId()])
            });
            Ud()
        }
        ;
        _.r.getName = function() {
            return "publisher_ads"
        }
        ;
        _.r.xa = function(a, b) {
            var c = this
                , d = a.getSlotId();
            z(b, 17) || fz(this, d);
            var e = J(b, 20);
            this.dispatchEvent(Ek, 724, {
                jc: d.getDomId(),
                bb: e
            });
            xk(d, Ck, function() {
                return void c.dispatchEvent("slotRequested", 705, new lp(d,c.getName()))
            });
            xk(d, Dk, function(f) {
                var g = f.detail;
                f = g.size;
                var h = g.slotContentChanged
                    , k = g.isEmpty;
                g = new bp(d,"publisher_ads");
                k && (g.isEmpty = k);
                h && (g.slotContentChanged = h);
                h = Uk(a).getResponseInformation();
                f && h && (g.size = [f.width, f.height],
                    g.sourceAgnosticCreativeId = h.sourceAgnosticCreativeId,
                    g.sourceAgnosticLineItemId = h.sourceAgnosticLineItemId,
                    g.isBackfill = h.isBackfill,
                    g.creativeId = h.creativeId,
                    g.lineItemId = h.lineItemId,
                    g.creativeTemplateId = h.creativeTemplateId,
                    g.advertiserId = h.advertiserId,
                    g.campaignId = h.campaignId,
                    g.yieldGroupIds = h.yieldGroupIds,
                    g.companyIds = h.companyIds);
                c.dispatchEvent("slotRenderEnded", 708, g)
            });
            xk(d, Ak, function() {
                return void c.dispatchEvent("slotResponseReceived", 709, new mp(d,c.getName()))
            });
            xk(d, yk, function() {
                var f = $d.D().j;
                f = Qn(f, tn());
                c.l.refresh([a], {
                    ta: 2
                }, f)
            });
            op.prototype.xa.call(this, a, b)
        }
        ;
        _.r.ec = function(a, b) {
            Zo(this);
            fz(this, b.getSlotId());
            this.log.info(sl());
            var c = z(a.N, 6);
            if (c || !fo.D().Za(b.getSlotId()))
                c && (c = document,
                (c = xb(b.getSlotId(), c)) && b.getSlotId().dispatchEvent(zk, 778, c)),
                z(a.N, 4) && Xy(this.l, b, a.N, a.P[b.getSlotId().getDomId()]),
                    this.o.display(a, b)
        }
        ;
        var fz = function(a, b) {
            a.j && jo(fo.D(), b)
        }
            , xu = function(a, b, c) {
            var d = Vo(b, c, void 0, !0)
                , e = d.slot;
            d = d.La;
            if (!e || !d)
                return a.log.M(Wk("PubAdsService.definePassback", [b, c])),
                    {
                        slot: null,
                        $b: null,
                        La: null
                    };
            G(d, 17, !0);
            b = new tw(e.getSlotId(),a,Uk(e));
            a.xa(e, d);
            return {
                slot: e,
                $b: b,
                La: d
            }
        }
            , ru = function(a, b, c) {
            var d = void 0 === d ? document : d;
            var e;
            null != (e = c.P[b.getDomId()]) && G(e, 19, !0);
            Ov(b.getDomId(), d);
            xb(b, d) ? (Zo(a),
                jo(fo.D(), b),
                a.o.display(c, To(Xd.D(), b))) : eb("gpt_pb_write", function(f) {
                $a(f)
            })
        };
        ez.prototype.refresh = function(a, b, c) {
            var d = gz(this, b);
            if (!d.length)
                return !1;
            if (_.x(104)) {
                Zo(this);
                b = _.A(b);
                for (var e = b.next(); !e.done; e = b.next()) {
                    e = e.value;
                    var f = a.P[e.getSlotId().getDomId()];
                    this.xa(e, f)
                }
            }
            this.o.refresh(a, d, c || {
                ta: 2
            });
            return !0
        }
        ;
        var cz = function(a, b, c, d) {
            a.log.info(zl());
            if (hz(a, b, d, c) && 1 !== d.ta)
                for (b = _.A(b),
                         d = b.next(); !d.done; d = b.next()) {
                    d = d.value.getSlotId().getDomId();
                    var e = J(c.P[d], 20);
                    a.dispatchEvent(Fk, 725, {
                        jc: d,
                        bb: e
                    })
                }
        }
            , hz = function(a, b, c, d) {
            b = b.filter(function(e) {
                return _.ko(fo.D(), e.getSlotId())
            });
            if (!b.length)
                return null;
            a.l.refresh(b, c, d);
            return b
        }
            , Au = function(a, b) {
            return a.j ? {
                vid: J(b, 22) || "",
                cmsid: J(b, 23) || ""
            } : null
        }
            , yu = function(a, b) {
            z(b, 21) && a.j && G(b, 29, Hi())
        }
            , iz = function(a, b, c, d) {
            b = b ? gz(a, b, !0) : bk();
            for (var e = _.A(b), f = e.next(); !f.done; f = e.next())
                f = f.value,
                    go(fo.D(), f.getSlotId());
            return zy(a.l, b, c, d)
        }
            , zu = function(a, b, c, d) {
            if (!a.j)
                return b = d ? d[0] : void 0,
                    a.log.M(xl(), null == b ? void 0 : b.getSlotId()),
                    !1;
            var e = null;
            if (d && (e = gz(a, d),
            0 == e.length))
                return a.log.M(Wk("PubAdsService.clear", [d].filter(function(f) {
                    return void 0 !== f
                }))),
                    !1;
            a.log.info(Al());
            return iz(a, e, b, c)
        }
            , gz = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = [];
            if (!Array.isArray(b))
                return d;
            b.forEach(function(e, f) {
                e = Zj(e, Mo);
                !e || !c && e.W ? a.log.M(Cl(String(f))) : d.push(e)
            });
            return d
        };
        ez.prototype.destroySlots = function(a, b) {
            var c = op.prototype.destroySlots.call(this, a, b);
            if (!c.length)
                return c;
            if (this.j) {
                var d, e = null != (d = null == b ? void 0 : b.N) ? d : $d.D().j, f;
                b = null != (f = null == b ? void 0 : b.P) ? f : tn();
                iz(this, a, e, b)
            }
            return c
        }
        ;
        var dz = function(a, b, c) {
            a.log.M(b, c)
        };
        Le(ez);
        var rz = function(a, b) {
            $o.call(this, a);
            var c = this;
            this.set = y(576, function(d, e) {
                a.set(d, e);
                return c
            });
            this.get = y(577, function(d) {
                return a.get(d)
            });
            this.getAttributeKeys = y(578, function() {
                return ai(a.o)
            });
            this.display = y(558, function(d, e, f, g) {
                return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g)
            });
            this.notifyUnfilledSlots = y(69, function(d) {
                a.Sa && jz(a, kz(a, d))
            });
            this.isRoadblockingSupported = y(111, function() {
                return lz(a)
            });
            this.refreshAllSlots = y(60, function() {
                a.Sa && jz(a)
            });
            this.setVideoSession = y(61, function(d, e, f) {
                a.F = e;
                a.K = f;
                "number" === typeof d && G($d.D().j, 29, d)
            });
            this.getDisplayAdsCorrelator = y(62, function(d) {
                return mz(a, void 0 === d ? "" : d)
            });
            this.getVideoStreamCorrelator = y(63, function() {
                var d;
                return null !== (d = J($d.D().j, 29)) && void 0 !== d ? d : 0
            });
            this.isSlotAPersistentRoadblock = y(64, function(d) {
                d = Zj(d, b);
                return !!d && nz(a, d)
            });
            this.onImplementationLoaded = y(65, function() {
                a.log.info(rl("GPT CompanionAds"))
            });
            this.fillSlot = y(66, function(d, e) {
                d = Zj(d, b);
                var f;
                if (f = !!d)
                    _.x(520) ? f = void 0 : d && Uo(d) && e && "string" === typeof e ? (oz(a, d.getSlotId()).content = e,
                        f = pz(a, d)) : f = !1;
                return f
            });
            this.slotRenderEnded = y(67, function(d, e, f) {
                return (d = Zj(d, b)) && qz(a, d, e, f)
            });
            this.setRefreshUnfilledSlots = y(59, function(d) {
                "boolean" === typeof d && (a.Sa = d)
            })
        };
        _.L(rz, $o);
        var tz = function(a, b) {
            $o.call(this, a);
            this.setContent = y(72, function(c, d) {
                return (c = Zj(c, b)) && sz(a, c, d)
            });
            this.display = y(562, function(c, d, e, f) {
                return a.display(c, d, void 0 === e ? "" : e, void 0 === f ? "" : f)
            })
        };
        _.L(tz, $o);
        var uz = function() {
            op.apply(this, arguments)
        };
        _.L(uz, op);
        uz.D = function() {
            throw Error("Must be overridden");
        }
        ;
        var vz = function() {
            uz.call(this);
            this.l = new D.Map;
            this.o = {};
            this.Sa = !1;
            this.K = this.F = void 0;
            this.H = this.I = !1;
            Ko.D().l = !0
        };
        _.L(vz, uz);
        _.r = vz.prototype;
        _.r.Ma = function() {
            return new rz(this,Mo)
        }
        ;
        _.r.set = function(a, b) {
            "string" === typeof a && a.length ? (this.o[a] = b,
                this.log.info(nl(a, String(b), this.getName()))) : this.log.M(Wk("CompanionAdsService.set", [a, b]));
            return this
        }
        ;
        _.r.get = function(a) {
            var b;
            return null !== (b = this.o[a]) && void 0 !== b ? b : null
        }
        ;
        _.r.display = function(a, b, c, d) {
            c = void 0 === c ? "" : c;
            d = void 0 === d ? "" : d;
            Zo(this);
            b = Vo(a, b, c);
            a = b.slot;
            b = b.La;
            this.xa(a, b);
            G(b, 7, d);
            sp(a.getSlotId().getDomId())
        }
        ;
        _.r.xa = function(a, b) {
            var c = this;
            xk(a.getSlotId(), Ak, function(d) {
                z(d.detail, 11) && (oz(c, a.getSlotId()).rd = !0)
            });
            uz.prototype.xa.call(this, a, b)
        }
        ;
        _.r.Sb = function() {
            wz(this)
        }
        ;
        var lz = function(a) {
            if (_.x(520) || !ez.D().j)
                return !1;
            var b = ez.D().m;
            a = a.m;
            return b.length !== a.length ? !1 : !a.some(function(c) {
                return !_.F(b, "includes").call(b, c)
            })
        }
            , mz = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.H && eb("ima_sdk_v", function(d) {
                a.H = !0;
                u(d, "v", b)
            });
            var c = $d.D().j;
            return String(J(c, 26))
        }
            , jz = function(a, b) {
            var c = $d.D().j
                , d = tn();
            if (ez.D().j) {
                var e = {
                    ta: 3
                };
                a.F && (e.Ua = a.F);
                a.K && (e.Va = a.K);
                a = null !== b && void 0 !== b ? b : a.m;
                c = Qn(c, d);
                e.Ua && "number" !== typeof e.Ua || e.Va && "number" !== typeof e.Va || ez.D().refresh(c, a, e)
            } else
                b && b[0] && a.log.error(wl(b[0].getSlotId().getDomId()))
        }
            , nz = function(a, b) {
            var c;
            return ez.D().j && Uo(b) ? (a = a.l.get(b.getSlotId()),
                null !== (c = null === a || void 0 === a ? void 0 : a.rd) && void 0 !== c ? c : !1) : !1
        }
            , kz = function(a, b) {
            return b.map(function(c) {
                return _.F(a.m, "find").call(a.m, function(d) {
                    return d.getSlotId().toString() === c
                })
            }).filter(function(c) {
                return !!c
            })
        };
        vz.prototype.getName = function() {
            return "companion_ads"
        }
        ;
        var wz = function(a) {
            _.x(520) || fb(70, function() {
                if (!a.I) {
                    var b = document;
                    a.log.info(ql("GPT CompanionAds"));
                    Xh(b, qf(Ia(Fa("https://pagead2.googlesyndication.com/pagead/show_companion_ad.js")).toString()));
                    a.I = !0
                }
            }, !0)
        }
            , pz = function(a, b) {
            if (!a.j || nz(a, b))
                return !1;
            var c = xb(b.getSlotId());
            if (!c)
                return !1;
            var d = (a.l.get(b.getSlotId()) || {}).content;
            if (void 0 === d)
                return !1;
            a.l.delete(b.getSlotId());
            gr(c, Da(d));
            d = c = null;
            var e = un($d.D(), b.getSlotId().getDomId());
            e && 1 === T(e, fn, 5).length && zd(T(e, fn, 5)[0], 1) && zd(T(e, fn, 5)[0], 2) && (c = J(T(e, fn, 5)[0], 1),
                d = J(T(e, fn, 5)[0], 2));
            qz(a, b, c, d);
            return !0
        };
        vz.prototype.ec = function(a, b) {
            _.x(520) || pz(this, b)
        }
        ;
        var qz = function(a, b, c, d) {
            b = new bp(b.getSlotId(),a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.dispatchEvent("slotRenderEnded", 67, b)
        }
            , oz = function(a, b) {
            var c = a.l.get(b);
            c || (c = {},
                a.l.set(b, c),
                _.Yd(b, function() {
                    return a.l.delete(b)
                }));
            return c
        };
        Le(vz);
        var xz = function() {
            op.apply(this, arguments)
        };
        _.L(xz, op);
        xz.D = function() {
            throw Error("Must be overridden");
        }
        ;
        var yz = function() {
            xz.apply(this, arguments);
            this.l = new D.Map
        };
        _.L(yz, xz);
        yz.prototype.Ma = function() {
            return new tz(this,Mo)
        }
        ;
        yz.prototype.getName = function() {
            return "content"
        }
        ;
        yz.prototype.display = function(a, b, c, d) {
            c = void 0 === c ? "" : c;
            d = void 0 === d ? "" : d;
            Zo(this);
            b = Vo(a, b, c);
            a = b.slot;
            b = b.La;
            this.xa(a, b);
            G(b, 7, d);
            sp(a.getSlotId().getDomId())
        }
        ;
        yz.prototype.destroySlots = function(a) {
            a = xz.prototype.destroySlots.call(this, a);
            for (var b = _.A(a), c = b.next(); !c.done; c = b.next())
                this.l.delete(c.value.getSlotId());
            return a
        }
        ;
        var zz = function(a, b) {
            var c = a.l.get(b.getSlotId())
                , d = xb(b.getSlotId());
            !(c && void 0 !== c.content && d && a.j) || c && c.Hc || (c.Hc = !0,
                gr(d, Da(c.content)),
                eb("gpt_cont_svc", function(e) {
                    var f;
                    u(e, "cl", String(null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f ? void 0 : f.length));
                    $a(e, [b.getSlotId().getAdUnitPath()])
                }),
                a.dispatchEvent("slotRenderEnded", 819, new bp(b.getSlotId(),a.getName())))
        };
        yz.prototype.Sb = function() {}
        ;
        yz.prototype.ec = function(a, b) {
            zz(this, b)
        }
        ;
        var sz = function(a, b, c) {
            if (Uo(b) && "string" === typeof c && c.length) {
                var d = b.getSlotId()
                    , e = a.l.get(d);
                e ? e.content = c : a.l.set(d, {
                    content: c,
                    Hc: void 0
                });
                _.Yd(d, function() {
                    return void a.l.delete(d)
                });
                zz(a, b)
            }
        };
        Le(yz);
        var Az = function() {
            this.j = function() {}
        };
        Le(Az);
        var Bz = function() {
            var a = Ko.D();
            Az.D().j(a)
        };
        var Dz = function() {
            var a = void 0
                , b = 2;
            if (void 0 === a) {
                var c = void 0 === c ? _.C : c;
                a = c.ggeac || (c.ggeac = {})
            }
            b = void 0 === b ? 0 : b;
            c = a;
            var d = b;
            d = void 0 === d ? 0 : d;
            Nj(Mj.D(), c, d);
            Cz(a, b);
            b = a;
            Az.D().j = Lj(Kj, b);
            Pj.D().j()
        }
            , Cz = function(a, b) {
            b = void 0 === b ? 0 : b;
            var c = Pj.D();
            c.m = function(d, e) {
                return Lj(Gj, a, function() {
                    return !1
                })(d, e, b)
            }
            ;
            c.l = function(d, e) {
                return Lj(Hj, a, function() {
                    return 0
                })(d, e, b)
            }
            ;
            c.G = function(d, e) {
                return Lj(Ij, a, function() {
                    return ""
                })(d, e, b)
            }
            ;
            c.B = function(d, e) {
                return Lj(Jj, a, function() {
                    return []
                })(d, e, b)
            }
            ;
            c.j = function() {
                Lj(Dj, a)(b)
            }
        };
        var Ez = function() {
            var a = Sd.D();
            this.getAllEvents = y(563, function() {
                return Yx ? Qk(a.j).slice() : []
            });
            this.getEventsBySlot = y(565, function(b) {
                return Yx ? Rk(a, b).slice() : []
            });
            this.getEventsByLevel = y(566, function(b) {
                return Yx ? Sk(a, b).slice() : []
            })
        };
        _.L(Ez, Yj);
        var ma = function(a, b) {
            a: {
                b = b[0];
                a = a[0];
                for (var c = ka, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                    var f = c(b[e], a[e]);
                    if (0 != f) {
                        b = f;
                        break a
                    }
                }
                b = ka(b.length, a.length)
            }
            return b
        }
            , Fz = function() {
            var a = this
                , b = []
                , c = []
                , d = Sd.D();
            this.addSize = w(88, function(e, f) {
                if (!xn(e) || !(wn(f) || Array.isArray(f) && f.every(wn)))
                    return c.push([e, f]),
                        d.M(Wk("SizeMappingBuilder.addSize", [e, f])),
                        a;
                b.push([e, f]);
                return a
            });
            this.build = w(89, function() {
                if (c.length)
                    return d.M(ll(Ki(c))),
                        null;
                na(b);
                return b
            })
        };
        var Vd = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        }
            , Gz = function() {
            var a = Rd();
            a.enums || (a.enums = {
                OutOfPageFormat: Vd
            })
        };
        var ae = new D.Map([["Interstitial", 5], ["TopAnchor", 2], ["BottomAnchor", 3]]);
        var Hz = function() {
            var a = new oq
                , b = new pq
                , c = mc(_.C);
            kh(a, 1, c, 0);
            c = nc().join();
            kh(a, 5, c, "");
            kh(a, 2, 1, 0);
            oh(b, 1, a);
            a = nq();
            c = _.x(77);
            a = lh(a, 8, c);
            c = _.x(78);
            a = lh(a, 9, c);
            a = lh(a, 10, !0);
            c = _.x(80);
            a = lh(a, 13, c);
            c = _.x(81);
            a = lh(a, 14, c);
            a = lh(a, 16, !0);
            oh(b, 2, a);
            window.google_rum_config = nh(b)
        };
        var Iz = function(a) {
            var b = [];
            if (a) {
                if (!Array.isArray(a))
                    return Sd.D().M(Wk("googletag.destroySlots", [a])),
                        !1;
                ja(a);
                b = a.map(function(c) {
                    return Zj(c, Mo)
                }).filter(function(c) {
                    return c && !c.W
                })
            } else
                b = bk();
            if (!b.length)
                return !1;
            a = $d.D().j;
            a = Qn(a, tn());
            rp(b, a);
            Ro(Xd.D(), b);
            return !0
        }
            , Jz = w(297, function() {
            try {
                for (var a = _.x(437) ? [].concat(_.Ib(document.getElementsByTagName("script"))) : _.F(Array, "from").call(Array, document.getElementsByTagName("script")), b = _.A(a), c = b.next(); !c.done; c = b.next()) {
                    var d = c.value;
                    a = d;
                    var e = d.src;
                    if (e && (-1 != e.indexOf("/tag/js/gpt.js") || -1 != e.indexOf("/tag/js/gpt_mobile.js")) && !a.googletag_executed && d.textContent) {
                        a.googletag_executed = !0;
                        var f = document.createElement("script");
                        a = void 0;
                        var g = d.textContent
                            , h = null === (a = Ba()) || void 0 === a ? void 0 : a.createScript(g)
                            , k = new Zi(null !== h && void 0 !== h ? h : g,xa);
                        if (k instanceof Yi) {
                            a = void 0;
                            var l = k;
                            if (null === (a = za()) || void 0 === a ? 0 : a.isScript(l))
                                var n = l;
                            else if (l instanceof Zi)
                                n = l.j;
                            else
                                throw Error("wrong type");
                        } else
                            n = k instanceof mf && k.constructor === mf ? k.j : "type_error:SafeScript";
                        f.textContent = n;
                        jc(f);
                        document.head.appendChild(f);
                        document.head.removeChild(f)
                    }
                }
            } catch (m) {
                b = m,
                    Va(297, b),
                window.console && window.console.error && window.console.error(b)
            }
        })
            , Kz = function() {
            var a = window
                , b = new Ls(a)
                , c = new Rs(a)
                , d = new As(a);
            eb("cmpMet", function(e) {
                $a(e);
                u(e, "fc", b.j ? 1 : 0);
                u(e, "tcfv1", a.__cmp ? 1 : 0);
                u(e, "tcfv2", Ts(c) ? 1 : 0);
                u(e, "usp", Cs(d) ? 1 : 0);
                u(e, "ptt", 17)
            }, {
                la: _.Kb(61)
            })
        }
            , Lz = function(a) {
            if (Vs(a)) {
                fk(255, a);
                for (var b = _.A(_.t(256)), c = b.next(); !c.done; c = b.next())
                    c = c.value,
                        c(a);
                fk(256, [])
            } else
                fk(255, null)
        }
            , Mz = function() {
            var a = new Rs(window,-1);
            Ts(a) && void 0 === _.t(255) && (fk(255, null),
                a.addEventListener(Lz))
        }
            , Nz = function() {
            if (document.head && Nn()) {
                _.x(508) && window.addEventListener("securitypolicyviolation", w(502, function(d) {
                    var e = new Za("gpt_csp_violation");
                    $a(e);
                    for (var f = _.A(["blockedURI", "originalPolicy", "violatedDirective"]), g = f.next(); !g.done; g = f.next())
                        g = g.value,
                            u(e, g, d[g]);
                    f = Date.now() - a;
                    u(e, "msSinceAdded", f);
                    bb(e);
                    "urn" === d.blockedURI && 100 > f && _.x(509) && console.warn("GPT detected an overly restrictive CSP that prohibits urn:uuid: URLs for scripts or iframes.  This will prevent ad rendering in a future version of GPT.")
                }));
                var a = Date.now();
                if (_.x(509)) {
                    console.log("GPT: about to test whether urn:uuid: urls are allowed by CSP.");
                    var b = new Bh(document)
                        , c = qf(jf(kf("urn:uuid:gpt-test")));
                    b = Qh(b, "SCRIPT");
                    Wb(b, c);
                    document.head.appendChild(b)
                }
            }
        };
        (function(a, b) {
                try {
                    if (window.googletag.evalScripts)
                        window.googletag.evalScripts();
                    else {
                        ut();
                        Qd("evalScripts", Jz);
                        Ou = _.kc();
                        try {
                            Dz(),
                                Bz(),
                                Oj(13),
                                Oj(3)
                        } catch (n) {
                            Wa(408, n, !0)
                        }
                        co("gpt-tag-load");
                        _.x(506) && Mz();
                        var c = b(a);
                        _.Zv.D().l = c;
                        _.Kb(61) && Kz();
                        fb(827, function() {
                            Gi(Qj(1926));
                            "function" === typeof document.interestCohort && 0 < _.Kb(1927) && (fo.D().l = document.interestCohort())
                        }, !0);
                        var d = Qj(363931022);
                        d && fb(862, function() {
                            Gi(d)
                        }, !0);
                        wd();
                        Qd("defineOutOfPageSlot", w(73, function(n, m) {
                            "string" === typeof n && 0 < n.length && (null == m || "string" === typeof m || "number" === typeof m && Wd(m)) ? n = Zd(n, "number" === typeof m ? m : 1, "string" === typeof m ? m : void 0) : (Sd.D().M(Wk("googletag.defineOutOfPageSlot", [n, m])),
                                n = null);
                            var p;
                            return n ? null == (p = To(Xd.D(), n)) ? void 0 : Uk(p) : null
                        }));
                        Qd("defineSlot", Wo);
                        Qd("defineUnit", Wo);
                        Qd("getWindowsThatCanCommunicateWithHostpageLibrary", Qo);
                        Qd("display", sp);
                        Gz();
                        Qd("getVersion", Ra);
                        Qd("companionAds", y(816, function() {
                            return Uk(vz.D())
                        }));
                        Qd("content", y(817, function() {
                            return Uk(yz.D())
                        }));
                        Qd("pubads", function() {
                            return Uk(ez.D())
                        });
                        Qd("setAdIframeTitle", y(729, sw));
                        Qd("getEventLog", function() {
                            return new Ez
                        });
                        Qd("sizeMapping", w(90, function() {
                            return new Fz
                        }));
                        Qd("enableServices", w(91, function() {
                            for (var n = _.A(np), m = n.next(); !m.done; m = n.next())
                                m = m.value,
                                m.j && Sd.D().info(ol()),
                                    Zo(m)
                        }));
                        Qd("destroySlots", w(75, Iz));
                        Qd("apiReady", !0);
                        var e = function() {
                            ce();
                            fb(77, function() {
                                var n = Rd().cmd;
                                if (!n || Array.isArray(n)) {
                                    var m = new am;
                                    Rd().cmd = Uk(m);
                                    n && 0 < n.length && m.push.apply(m, n)
                                }
                            })
                        };
                        Rd().fifWin && "complete" != document.readyState ? Vj(window, function() {
                            window.setTimeout(e, 0)
                        }) : e();
                        Jz();
                        if (_.x(84) || Ka.D().j)
                            Hz(),
                                Xh(document, qf(Ia(_.x(188) ? c.xd : c.yd).toString()));
                        if (_.x(346) && Ie()) {
                            var f = new Za("gpt_nonce_csp");
                            $a(f);
                            bb(f)
                        }
                        setTimeout(w(829, Nz), 0);
                        var g = _.Kb(357045128);
                        if (0 !== g) {
                            var h = document.createElement("script")
                                , k = qf(jf(kf(1 == g ? "https://pagead2.googlesyndication.com/pagead/managed/js/m202102160101/pubads_impl.js" : "https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021021602.js")));
                            Wb(h, sf(k, String(Math.random())));
                            var l = _.kc();
                            (document.head || document.body || document.documentElement).appendChild(h);
                            h.onload = function() {
                                eb("gpt_bvslt", function(n) {
                                    $a(n);
                                    u(n, "t", _.kc() - l);
                                    u(n, "f", g)
                                }, {
                                    la: 1
                                })
                            }
                        }
                    }
                } catch (n) {
                    Wa(106, n)
                }
            }
        )(Qa(), function(a) {
            return {
                Uc: function(b) {
                    return Fa("https://securepubads.g.doubleclick.net/gpt/pubads_impl_" + b + "_" + a + ".js")
                },
                Tc: function(b) {
                    return Fa("https://pagead2.googlesyndication.com/gpt/pubads_impl_" + b + "_" + a + ".js")
                },
                yd: Fa("https://securepubads.g.doubleclick.net/pagead/js/rum.js"),
                xd: Fa("https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js")
            }
        });
    }
).call(this, {});
