(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jspdf/dist/jspdf.min.js
  var require_jspdf_min = __commonJS({
    "node_modules/jspdf/dist/jspdf.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.jsPDF = e();
      }(exports, function() {
        "use strict";
        var t, y, e, I, i, o, a, h, C, T, d, p, F, n, r, s, c, P, E, q, g, m, w, l, v, b, x, S, u, k, _, f, A, O, B, R, j, D, M, U, N, z, L, H, W, G, V, Y, X, J, K, Q, Z, vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
          return typeof t2;
        } : function(t2) {
          return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
        }, $ = function(pt2) {
          var gt2 = "1.3", mt2 = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
          function wt2(o2) {
            var a2 = {};
            this.subscribe = function(t2, e2, n2) {
              if ("function" != typeof e2)
                return false;
              a2.hasOwnProperty(t2) || (a2[t2] = {});
              var r2 = Math.random().toString(35);
              return a2[t2][r2] = [e2, !!n2], r2;
            }, this.unsubscribe = function(t2) {
              for (var e2 in a2)
                if (a2[e2][t2])
                  return delete a2[e2][t2], true;
              return false;
            }, this.publish = function(t2) {
              if (a2.hasOwnProperty(t2)) {
                var e2 = Array.prototype.slice.call(arguments, 1), n2 = [];
                for (var r2 in a2[t2]) {
                  var i2 = a2[t2][r2];
                  try {
                    i2[0].apply(o2, e2);
                  } catch (t3) {
                    pt2.console && console.error("jsPDF PubSub Error", t3.message, t3);
                  }
                  i2[1] && n2.push(r2);
                }
                n2.length && n2.forEach(this.unsubscribe);
              }
            };
          }
          function yt2(t2, e2, n2, r2) {
            var i2 = {};
            "object" === (void 0 === t2 ? "undefined" : vt(t2)) && (t2 = (i2 = t2).orientation, e2 = i2.unit || e2, n2 = i2.format || n2, r2 = i2.compress || i2.compressPdf || r2), e2 = e2 || "mm", n2 = n2 || "a4", t2 = ("" + (t2 || "P")).toLowerCase();
            ("" + n2).toLowerCase();
            var K2, w2, y2, o2, u2, v2, a2, s2, h2, c2, l2, f2 = !!r2 && "function" == typeof Uint8Array, Q2 = i2.textColor || "0 g", d2 = i2.drawColor || "0 G", Z2 = i2.fontSize || 16, $2 = i2.charSpace || 0, tt2 = i2.R2L || false, et2 = i2.lineHeight || 1.15, p2 = i2.lineWidth || 0.200025, g2 = "00000000000000000000000000000000", m2 = 2, b2 = false, x2 = [], nt2 = {}, S2 = {}, k2 = 0, _2 = [], A2 = [], I2 = [], C2 = [], T2 = [], F2 = 0, P2 = 0, E2 = 0, q2 = { title: "", subject: "", author: "", keywords: "", creator: "" }, O2 = {}, rt2 = new wt2(O2), B2 = i2.hotfixes || [], R2 = function(t3) {
              var e3, n3 = t3.ch1, r3 = t3.ch2, i3 = t3.ch3, o3 = t3.ch4, a3 = (t3.precision, "draw" === t3.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"]);
              if ("string" == typeof n3 && "#" !== n3.charAt(0)) {
                var s3 = new RGBColor(n3);
                s3.ok && (n3 = s3.toHex());
              }
              if ("string" == typeof n3 && /^#[0-9A-Fa-f]{3}$/.test(n3) && (n3 = "#" + n3[1] + n3[1] + n3[2] + n3[2] + n3[3] + n3[3]), "string" == typeof n3 && /^#[0-9A-Fa-f]{6}$/.test(n3)) {
                var h3 = parseInt(n3.substr(1), 16);
                n3 = h3 >> 16 & 255, r3 = h3 >> 8 & 255, i3 = 255 & h3;
              }
              if (void 0 === r3 || void 0 === o3 && n3 === r3 && r3 === i3)
                if ("string" == typeof n3)
                  e3 = n3 + " " + a3[0];
                else
                  switch (t3.precision) {
                    case 2:
                      e3 = N2(n3 / 255) + " " + a3[0];
                      break;
                    case 3:
                    default:
                      e3 = z2(n3 / 255) + " " + a3[0];
                  }
              else if (void 0 === o3 || "object" === (void 0 === o3 ? "undefined" : vt(o3))) {
                if ("string" == typeof n3)
                  e3 = [n3, r3, i3, a3[1]].join(" ");
                else
                  switch (t3.precision) {
                    case 2:
                      e3 = [N2(n3 / 255), N2(r3 / 255), N2(i3 / 255), a3[1]].join(" ");
                      break;
                    default:
                    case 3:
                      e3 = [z2(n3 / 255), z2(r3 / 255), z2(i3 / 255), a3[1]].join(" ");
                  }
                o3 && 0 === o3.a && (e3 = ["255", "255", "255", a3[1]].join(" "));
              } else if ("string" == typeof n3)
                e3 = [n3, r3, i3, o3, a3[2]].join(" ");
              else
                switch (t3.precision) {
                  case 2:
                    e3 = [N2(n3), N2(r3), N2(i3), N2(o3), a3[2]].join(" ");
                    break;
                  case 3:
                  default:
                    e3 = [z2(n3), z2(r3), z2(i3), z2(o3), a3[2]].join(" ");
                }
              return e3;
            }, j2 = function(t3) {
              var e3 = function(t4) {
                return ("0" + parseInt(t4)).slice(-2);
              }, n3 = t3.getTimezoneOffset(), r3 = n3 < 0 ? "+" : "-", i3 = Math.floor(Math.abs(n3 / 60)), o3 = Math.abs(n3 % 60), a3 = [r3, e3(i3), "'", e3(o3), "'"].join("");
              return ["D:", t3.getFullYear(), e3(t3.getMonth() + 1), e3(t3.getDate()), e3(t3.getHours()), e3(t3.getMinutes()), e3(t3.getSeconds()), a3].join("");
            }, D2 = function(t3) {
              var e3;
              return void 0 === (void 0 === t3 ? "undefined" : vt(t3)) && (t3 = /* @__PURE__ */ new Date()), e3 = "object" === (void 0 === t3 ? "undefined" : vt(t3)) && "[object Date]" === Object.prototype.toString.call(t3) ? j2(t3) : /^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t3) ? t3 : j2(/* @__PURE__ */ new Date()), c2 = e3;
            }, M2 = function(t3) {
              var e3 = c2;
              return "jsDate" === t3 && (e3 = function(t4) {
                var e4 = parseInt(t4.substr(2, 4), 10), n3 = parseInt(t4.substr(6, 2), 10) - 1, r3 = parseInt(t4.substr(8, 2), 10), i3 = parseInt(t4.substr(10, 2), 10), o3 = parseInt(t4.substr(12, 2), 10), a3 = parseInt(t4.substr(14, 2), 10);
                parseInt(t4.substr(16, 2), 10), parseInt(t4.substr(20, 2), 10);
                return new Date(e4, n3, r3, i3, o3, a3, 0);
              }(c2)), e3;
            }, U2 = function(t3) {
              return t3 = t3 || "12345678901234567890123456789012".split("").map(function() {
                return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
              }).join(""), g2 = t3;
            }, N2 = function(t3) {
              return t3.toFixed(2);
            }, z2 = function(t3) {
              return t3.toFixed(3);
            }, it2 = function(t3) {
              t3 = "string" == typeof t3 ? t3 : t3.toString(), b2 ? _2[o2].push(t3) : (E2 += t3.length + 1, C2.push(t3));
            }, L2 = function() {
              return x2[++m2] = E2, it2(m2 + " 0 obj"), m2;
            }, H2 = function(t3) {
              it2("stream"), it2(t3), it2("endstream");
            }, W2 = function() {
              for (var t3 in it2("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), it2("/Font <<"), nt2)
                nt2.hasOwnProperty(t3) && it2("/" + t3 + " " + nt2[t3].objectNumber + " 0 R");
              it2(">>"), it2("/XObject <<"), rt2.publish("putXobjectDict"), it2(">>");
            }, G2 = function() {
              !function() {
                for (var t3 in nt2)
                  nt2.hasOwnProperty(t3) && (e3 = nt2[t3], rt2.publish("putFont", { font: e3, out: it2, newObject: L2 }), true !== e3.isAlreadyPutted && (e3.objectNumber = L2(), it2("<<"), it2("/Type /Font"), it2("/BaseFont /" + e3.postScriptName), it2("/Subtype /Type1"), "string" == typeof e3.encoding && it2("/Encoding /" + e3.encoding), it2("/FirstChar 32"), it2("/LastChar 255"), it2(">>"), it2("endobj")));
                var e3;
              }(), rt2.publish("putResources"), x2[2] = E2, it2("2 0 obj"), it2("<<"), W2(), it2(">>"), it2("endobj"), rt2.publish("postPutResources");
            }, V2 = function(t3, e3, n3) {
              S2.hasOwnProperty(e3) || (S2[e3] = {}), S2[e3][n3] = t3;
            }, Y2 = function(t3, e3, n3, r3) {
              var i3 = "F" + (Object.keys(nt2).length + 1).toString(10), o3 = nt2[i3] = { id: i3, postScriptName: t3, fontName: e3, fontStyle: n3, encoding: r3, metadata: {} };
              return V2(i3, e3, n3), rt2.publish("addFont", o3), i3;
            }, ot2 = function(t3, e3) {
              return function(t4, e4) {
                var n3, r3, i3, o3, a3, s3, h3, c3, l3;
                if (i3 = (e4 = e4 || {}).sourceEncoding || "Unicode", a3 = e4.outputEncoding, (e4.autoencode || a3) && nt2[K2].metadata && nt2[K2].metadata[i3] && nt2[K2].metadata[i3].encoding && (o3 = nt2[K2].metadata[i3].encoding, !a3 && nt2[K2].encoding && (a3 = nt2[K2].encoding), !a3 && o3.codePages && (a3 = o3.codePages[0]), "string" == typeof a3 && (a3 = o3[a3]), a3)) {
                  for (h3 = false, s3 = [], n3 = 0, r3 = t4.length; n3 < r3; n3++)
                    (c3 = a3[t4.charCodeAt(n3)]) ? s3.push(String.fromCharCode(c3)) : s3.push(t4[n3]), s3[n3].charCodeAt(0) >> 8 && (h3 = true);
                  t4 = s3.join("");
                }
                for (n3 = t4.length; void 0 === h3 && 0 !== n3; )
                  t4.charCodeAt(n3 - 1) >> 8 && (h3 = true), n3--;
                if (!h3)
                  return t4;
                for (s3 = e4.noBOM ? [] : [254, 255], n3 = 0, r3 = t4.length; n3 < r3; n3++) {
                  if ((l3 = (c3 = t4.charCodeAt(n3)) >> 8) >> 8)
                    throw new Error("Character at position " + n3 + " of string '" + t4 + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                  s3.push(l3), s3.push(c3 - (l3 << 8));
                }
                return String.fromCharCode.apply(void 0, s3);
              }(t3, e3).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
            }, X2 = function() {
              (function(t3, e3) {
                var n3 = "string" == typeof e3 && e3.toLowerCase();
                if ("string" == typeof t3) {
                  var r3 = t3.toLowerCase();
                  mt2.hasOwnProperty(r3) && (t3 = mt2[r3][0] / w2, e3 = mt2[r3][1] / w2);
                }
                if (Array.isArray(t3) && (e3 = t3[1], t3 = t3[0]), n3) {
                  switch (n3.substr(0, 1)) {
                    case "l":
                      t3 < e3 && (n3 = "s");
                      break;
                    case "p":
                      e3 < t3 && (n3 = "s");
                  }
                  "s" === n3 && (y2 = t3, t3 = e3, e3 = y2);
                }
                b2 = true, _2[++k2] = [], I2[k2] = { width: Number(t3) || u2, height: Number(e3) || v2 }, A2[k2] = {}, J2(k2);
              }).apply(this, arguments), it2(N2(p2 * w2) + " w"), it2(d2), 0 !== F2 && it2(F2 + " J"), 0 !== P2 && it2(P2 + " j"), rt2.publish("addPage", { pageNumber: k2 });
            }, J2 = function(t3) {
              0 < t3 && t3 <= k2 && (u2 = I2[o2 = t3].width, v2 = I2[t3].height);
            }, at2 = function(t3, e3, n3) {
              var r3, i3 = void 0;
              return n3 = n3 || {}, t3 = void 0 !== t3 ? t3 : nt2[K2].fontName, e3 = void 0 !== e3 ? e3 : nt2[K2].fontStyle, r3 = t3.toLowerCase(), void 0 !== S2[r3] && void 0 !== S2[r3][e3] ? i3 = S2[r3][e3] : void 0 !== S2[t3] && void 0 !== S2[t3][e3] ? i3 = S2[t3][e3] : false === n3.disableWarning && console.warn("Unable to look up font label for font '" + t3 + "', '" + e3 + "'. Refer to getFontList() for available fonts."), i3 || n3.noFallback || null == (i3 = S2.times[e3]) && (i3 = S2.times.normal), i3;
            }, st2 = function() {
              b2 = false, m2 = 2, E2 = 0, C2 = [], x2 = [], T2 = [], rt2.publish("buildDocument"), it2("%PDF-" + gt2), it2("%\xBA\xDF\xAC\xE0"), function() {
                var t4, e4, n4, r4, i3, o3, a3, s3, h3, c3 = [];
                for (a3 = pt2.adler32cs || yt2.API.adler32cs, f2 && void 0 === a3 && (f2 = false), t4 = 1; t4 <= k2; t4++) {
                  if (c3.push(L2()), s3 = (u2 = I2[t4].width) * w2, h3 = (v2 = I2[t4].height) * w2, it2("<</Type /Page"), it2("/Parent 1 0 R"), it2("/Resources 2 0 R"), it2("/MediaBox [0 0 " + N2(s3) + " " + N2(h3) + "]"), rt2.publish("putPage", { pageNumber: t4, page: _2[t4] }), it2("/Contents " + (m2 + 1) + " 0 R"), it2(">>"), it2("endobj"), e4 = _2[t4].join("\n"), L2(), f2) {
                    for (n4 = [], r4 = e4.length; r4--; )
                      n4[r4] = e4.charCodeAt(r4);
                    o3 = a3.from(e4), (i3 = new Deflater(6)).append(new Uint8Array(n4)), e4 = i3.flush(), (n4 = new Uint8Array(e4.length + 6)).set(new Uint8Array([120, 156])), n4.set(e4, 2), n4.set(new Uint8Array([255 & o3, o3 >> 8 & 255, o3 >> 16 & 255, o3 >> 24 & 255]), e4.length + 2), e4 = String.fromCharCode.apply(null, n4), it2("<</Length " + e4.length + " /Filter [/FlateDecode]>>");
                  } else
                    it2("<</Length " + e4.length + ">>");
                  H2(e4), it2("endobj");
                }
                x2[1] = E2, it2("1 0 obj"), it2("<</Type /Pages");
                var l3 = "/Kids [";
                for (r4 = 0; r4 < k2; r4++)
                  l3 += c3[r4] + " 0 R ";
                it2(l3 + "]"), it2("/Count " + k2), it2(">>"), it2("endobj"), rt2.publish("postPutPages");
              }(), function() {
                rt2.publish("putAdditionalObjects");
                for (var t4 = 0; t4 < T2.length; t4++) {
                  var e4 = T2[t4];
                  x2[e4.objId] = E2, it2(e4.objId + " 0 obj"), it2(e4.content), it2("endobj");
                }
                m2 += T2.length, rt2.publish("postPutAdditionalObjects");
              }(), G2(), L2(), it2("<<"), function() {
                for (var t4 in it2("/Producer (jsPDF " + yt2.version + ")"), q2)
                  q2.hasOwnProperty(t4) && q2[t4] && it2("/" + t4.substr(0, 1).toUpperCase() + t4.substr(1) + " (" + ot2(q2[t4]) + ")");
                it2("/CreationDate (" + c2 + ")");
              }(), it2(">>"), it2("endobj"), L2(), it2("<<"), function() {
                switch (it2("/Type /Catalog"), it2("/Pages 1 0 R"), s2 || (s2 = "fullwidth"), s2) {
                  case "fullwidth":
                    it2("/OpenAction [3 0 R /FitH null]");
                    break;
                  case "fullheight":
                    it2("/OpenAction [3 0 R /FitV null]");
                    break;
                  case "fullpage":
                    it2("/OpenAction [3 0 R /Fit]");
                    break;
                  case "original":
                    it2("/OpenAction [3 0 R /XYZ null null 1]");
                    break;
                  default:
                    var t4 = "" + s2;
                    "%" === t4.substr(t4.length - 1) && (s2 = parseInt(s2) / 100), "number" == typeof s2 && it2("/OpenAction [3 0 R /XYZ null null " + N2(s2) + "]");
                }
                switch (h2 || (h2 = "continuous"), h2) {
                  case "continuous":
                    it2("/PageLayout /OneColumn");
                    break;
                  case "single":
                    it2("/PageLayout /SinglePage");
                    break;
                  case "two":
                  case "twoleft":
                    it2("/PageLayout /TwoColumnLeft");
                    break;
                  case "tworight":
                    it2("/PageLayout /TwoColumnRight");
                }
                a2 && it2("/PageMode /" + a2), rt2.publish("putCatalog");
              }(), it2(">>"), it2("endobj");
              var t3, e3 = E2, n3 = "0000000000";
              for (it2("xref"), it2("0 " + (m2 + 1)), it2(n3 + " 65535 f "), t3 = 1; t3 <= m2; t3++) {
                var r3 = x2[t3];
                it2("function" == typeof r3 ? (n3 + x2[t3]()).slice(-10) + " 00000 n " : (n3 + x2[t3]).slice(-10) + " 00000 n ");
              }
              return it2("trailer"), it2("<<"), it2("/Size " + (m2 + 1)), it2("/Root " + m2 + " 0 R"), it2("/Info " + (m2 - 1) + " 0 R"), it2("/ID [ <" + g2 + "> <" + g2 + "> ]"), it2(">>"), it2("startxref"), it2("" + e3), it2("%%EOF"), b2 = true, C2.join("\n");
            }, ht2 = function(t3) {
              var e3 = "S";
              return "F" === t3 ? e3 = "f" : "FD" === t3 || "DF" === t3 ? e3 = "B" : "f" !== t3 && "f*" !== t3 && "B" !== t3 && "B*" !== t3 || (e3 = t3), e3;
            }, ct2 = function() {
              for (var t3 = st2(), e3 = t3.length, n3 = new ArrayBuffer(e3), r3 = new Uint8Array(n3); e3--; )
                r3[e3] = t3.charCodeAt(e3);
              return n3;
            }, lt2 = function() {
              return new Blob([ct2()], { type: "application/pdf" });
            }, ut2 = ((l2 = function(t3, e3) {
              var n3 = "dataur" === ("" + t3).substr(0, 6) ? "data:application/pdf;base64," + btoa(st2()) : 0;
              switch (t3) {
                case void 0:
                  return st2();
                case "save":
                  if ("object" === ("undefined" == typeof navigator ? "undefined" : vt(navigator)) && navigator.getUserMedia && (void 0 === pt2.URL || void 0 === pt2.URL.createObjectURL))
                    return O2.output("dataurlnewwindow");
                  bt(lt2(), e3), "function" == typeof bt.unload && pt2.setTimeout && setTimeout(bt.unload, 911);
                  break;
                case "arraybuffer":
                  return ct2();
                case "blob":
                  return lt2();
                case "bloburi":
                case "bloburl":
                  return pt2.URL && pt2.URL.createObjectURL(lt2()) || void 0;
                case "datauristring":
                case "dataurlstring":
                  return n3;
                case "dataurlnewwindow":
                  var r3 = pt2.open(n3);
                  if (r3 || "undefined" == typeof safari)
                    return r3;
                case "datauri":
                case "dataurl":
                  return pt2.document.location.href = n3;
                default:
                  throw new Error('Output type "' + t3 + '" is not supported.');
              }
            }).foo = function() {
              try {
                return l2.apply(this, arguments);
              } catch (t3) {
                var e3 = t3.stack || "";
                ~e3.indexOf(" at ") && (e3 = e3.split(" at ")[1]);
                var n3 = "Error in function " + e3.split("\n")[0].split("<")[0] + ": " + t3.message;
                if (!pt2.console)
                  throw new Error(n3);
                pt2.console.error(n3, t3), pt2.alert && alert(n3);
              }
            }, (l2.foo.bar = l2).foo), ft2 = function(t3) {
              return true === Array.isArray(B2) && -1 < B2.indexOf(t3);
            };
            switch (e2) {
              case "pt":
                w2 = 1;
                break;
              case "mm":
                w2 = 72 / 25.4;
                break;
              case "cm":
                w2 = 72 / 2.54;
                break;
              case "in":
                w2 = 72;
                break;
              case "px":
                w2 = 1 == ft2("px_scaling") ? 0.75 : 96 / 72;
                break;
              case "pc":
              case "em":
                w2 = 12;
                break;
              case "ex":
                w2 = 6;
                break;
              default:
                throw "Invalid unit: " + e2;
            }
            for (var dt2 in D2(), U2(), O2.internal = { pdfEscape: ot2, getStyle: ht2, getFont: function() {
              return nt2[at2.apply(O2, arguments)];
            }, getFontSize: function() {
              return Z2;
            }, getCharSpace: function() {
              return $2;
            }, getTextColor: function() {
              var t3 = Q2.split(" ");
              if (2 === t3.length && "g" === t3[1]) {
                var e3 = parseFloat(t3[0]);
                t3 = [e3, e3, e3, "r"];
              }
              for (var n3 = "#", r3 = 0; r3 < 3; r3++)
                n3 += ("0" + Math.floor(255 * parseFloat(t3[r3])).toString(16)).slice(-2);
              return n3;
            }, getLineHeight: function() {
              return Z2 * et2;
            }, write: function(t3) {
              it2(1 === arguments.length ? t3 : Array.prototype.join.call(arguments, " "));
            }, getCoordinateString: function(t3) {
              return N2(t3 * w2);
            }, getVerticalCoordinateString: function(t3) {
              return N2((v2 - t3) * w2);
            }, collections: {}, newObject: L2, newAdditionalObject: function() {
              var t3 = 2 * _2.length + 1, e3 = { objId: t3 += T2.length, content: "" };
              return T2.push(e3), e3;
            }, newObjectDeferred: function() {
              return x2[++m2] = function() {
                return E2;
              }, m2;
            }, newObjectDeferredBegin: function(t3) {
              x2[t3] = E2;
            }, putStream: H2, events: rt2, scaleFactor: w2, pageSize: { getWidth: function() {
              return u2;
            }, getHeight: function() {
              return v2;
            } }, output: function(t3, e3) {
              return ut2(t3, e3);
            }, getNumberOfPages: function() {
              return _2.length - 1;
            }, pages: _2, out: it2, f2: N2, getPageInfo: function(t3) {
              return { objId: 2 * (t3 - 1) + 3, pageNumber: t3, pageContext: A2[t3] };
            }, getCurrentPageInfo: function() {
              return { objId: 2 * (o2 - 1) + 3, pageNumber: o2, pageContext: A2[o2] };
            }, getPDFVersion: function() {
              return gt2;
            }, hasHotfix: ft2 }, O2.addPage = function() {
              return X2.apply(this, arguments), this;
            }, O2.setPage = function() {
              return J2.apply(this, arguments), this;
            }, O2.insertPage = function(t3) {
              return this.addPage(), this.movePage(o2, t3), this;
            }, O2.movePage = function(t3, e3) {
              if (e3 < t3) {
                for (var n3 = _2[t3], r3 = I2[t3], i3 = A2[t3], o3 = t3; e3 < o3; o3--)
                  _2[o3] = _2[o3 - 1], I2[o3] = I2[o3 - 1], A2[o3] = A2[o3 - 1];
                _2[e3] = n3, I2[e3] = r3, A2[e3] = i3, this.setPage(e3);
              } else if (t3 < e3) {
                for (n3 = _2[t3], r3 = I2[t3], i3 = A2[t3], o3 = t3; o3 < e3; o3++)
                  _2[o3] = _2[o3 + 1], I2[o3] = I2[o3 + 1], A2[o3] = A2[o3 + 1];
                _2[e3] = n3, I2[e3] = r3, A2[e3] = i3, this.setPage(e3);
              }
              return this;
            }, O2.deletePage = function() {
              return function(t3) {
                0 < t3 && t3 <= k2 && (_2.splice(t3, 1), I2.splice(t3, 1), --k2 < o2 && (o2 = k2), this.setPage(o2));
              }.apply(this, arguments), this;
            }, O2.setCreationDate = function(t3) {
              return D2(t3), this;
            }, O2.getCreationDate = function(t3) {
              return M2(t3);
            }, O2.setFileId = function(t3) {
              return U2(t3), this;
            }, O2.getFileId = function() {
              return g2;
            }, O2.setDisplayMode = function(t3, e3, n3) {
              if (s2 = t3, h2 = e3, -1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(a2 = n3))
                throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + n3 + '" is not recognized.');
              return this;
            }, O2.text = function(t3, e3, n3, i3) {
              var r3, o3, a3 = "", s3 = et2, h3 = this;
              function c3(t4) {
                for (var e4, n4 = t4.concat(), r4 = [], i4 = n4.length; i4--; )
                  "string" == typeof (e4 = n4.shift()) ? r4.push(e4) : "[object Array]" === Object.prototype.toString.call(t4) && 1 === e4.length ? r4.push(e4[0]) : r4.push([e4[0], e4[1], e4[2]]);
                return r4;
              }
              function l3(t4, e4) {
                var n4;
                if ("string" == typeof t4)
                  n4 = e4(t4)[0];
                else if ("[object Array]" === Object.prototype.toString.call(t4)) {
                  for (var r4, i4, o4 = t4.concat(), a4 = [], s4 = o4.length; s4--; )
                    "string" == typeof (r4 = o4.shift()) ? a4.push(e4(r4)[0]) : "[object Array]" === Object.prototype.toString.call(r4) && "string" === r4[0] && (i4 = e4(r4[0], r4[1], r4[2]), a4.push([i4[0], i4[1], i4[2]]));
                  n4 = a4;
                }
                return n4;
              }
              "number" == typeof t3 && (o3 = n3, n3 = e3, e3 = t3, t3 = o3);
              var u3 = i3, f3 = arguments[4], d3 = arguments[5];
              "object" === (void 0 === u3 ? "undefined" : vt(u3)) && null !== u3 || ("string" == typeof f3 && (d3 = f3, f3 = null), "string" == typeof u3 && (d3 = u3, u3 = null), "number" == typeof u3 && (f3 = u3, u3 = null), i3 = { flags: u3, angle: f3, align: d3 });
              var p3 = false, g3 = true;
              if ("string" == typeof t3)
                p3 = true;
              else if ("[object Array]" === Object.prototype.toString.call(t3)) {
                for (var m3, w3 = t3.concat(), y3 = [], v3 = w3.length; v3--; )
                  ("string" != typeof (m3 = w3.shift()) || "[object Array]" === Object.prototype.toString.call(m3) && "string" != typeof m3[0]) && (g3 = false);
                p3 = g3;
              }
              if (false === p3)
                throw new Error('Type of text must be string or Array. "' + t3 + '" is not recognized.');
              var b3 = nt2[K2].encoding;
              "WinAnsiEncoding" !== b3 && "StandardEncoding" !== b3 || (t3 = l3(t3, function(t4, e4, n4) {
                return [(r4 = t4, r4 = r4.split("	").join(Array(i3.TabLen || 9).join(" ")), ot2(r4, u3)), e4, n4];
                var r4;
              })), "string" == typeof t3 && (t3 = t3.match(/[\r?\n]/) ? t3.split(/\r\n|\r|\n/g) : [t3]), 0 < (j3 = i3.maxWidth || 0) && ("string" == typeof t3 ? t3 = h3.splitTextToSize(t3, j3) : "[object Array]" === Object.prototype.toString.call(t3) && (t3 = h3.splitTextToSize(t3.join(" "), j3)));
              var x3 = { text: t3, x: e3, y: n3, options: i3, mutex: { pdfEscape: ot2, activeFontKey: K2, fonts: nt2, activeFontSize: Z2 } };
              rt2.publish("preProcessText", x3), t3 = x3.text;
              f3 = (i3 = x3.options).angle;
              var S3 = h3.internal.scaleFactor, k3 = (h3.internal.pageSize.getHeight(), []);
              if (f3) {
                f3 *= Math.PI / 180;
                var _3 = Math.cos(f3), A3 = Math.sin(f3), I3 = function(t4) {
                  return t4.toFixed(2);
                };
                k3 = [I3(_3), I3(A3), I3(-1 * A3), I3(_3)];
              }
              void 0 !== (R3 = i3.charSpace) && (a3 += R3 + " Tc\n");
              i3.lang;
              var C3 = -1, T3 = i3.renderingMode || i3.stroke, F3 = h3.internal.getCurrentPageInfo().pageContext;
              switch (T3) {
                case 0:
                case false:
                case "fill":
                  C3 = 0;
                  break;
                case 1:
                case true:
                case "stroke":
                  C3 = 1;
                  break;
                case 2:
                case "fillThenStroke":
                  C3 = 2;
                  break;
                case 3:
                case "invisible":
                  C3 = 3;
                  break;
                case 4:
                case "fillAndAddForClipping":
                  C3 = 4;
                  break;
                case 5:
                case "strokeAndAddPathForClipping":
                  C3 = 5;
                  break;
                case 6:
                case "fillThenStrokeAndAddToPathForClipping":
                  C3 = 6;
                  break;
                case 7:
                case "addToPathForClipping":
                  C3 = 7;
              }
              var P3 = F3.usedRenderingMode || -1;
              -1 !== C3 ? a3 += C3 + " Tr\n" : -1 !== P3 && (a3 += "0 Tr\n"), -1 !== C3 && (F3.usedRenderingMode = C3);
              d3 = i3.align || "left";
              var E3 = Z2 * s3, q3 = h3.internal.pageSize.getHeight(), O3 = h3.internal.pageSize.getWidth(), B3 = (S3 = h3.internal.scaleFactor, nt2[K2]), R3 = i3.charSpace || $2, j3 = i3.maxWidth || 0, D3 = (u3 = {}, []);
              if ("[object Array]" === Object.prototype.toString.call(t3)) {
                var M3, U3;
                y3 = c3(t3);
                "left" !== d3 && (U3 = y3.map(function(t4) {
                  return h3.getStringUnitWidth(t4, { font: B3, charSpace: R3, fontSize: Z2 }) * Z2 / S3;
                }));
                var N3, z3 = Math.max.apply(Math, U3), L3 = 0;
                if ("right" === d3) {
                  e3 -= U3[0], t3 = [];
                  var H3 = 0;
                  for (v3 = y3.length; H3 < v3; H3++)
                    z3 - U3[H3], 0 === H3 ? (N3 = e3 * S3, M3 = (q3 - n3) * S3) : (N3 = (L3 - U3[H3]) * S3, M3 = -E3), t3.push([y3[H3], N3, M3]), L3 = U3[H3];
                } else if ("center" === d3) {
                  e3 -= U3[0] / 2, t3 = [];
                  for (H3 = 0, v3 = y3.length; H3 < v3; H3++)
                    (z3 - U3[H3]) / 2, 0 === H3 ? (N3 = e3 * S3, M3 = (q3 - n3) * S3) : (N3 = (L3 - U3[H3]) / 2 * S3, M3 = -E3), t3.push([y3[H3], N3, M3]), L3 = U3[H3];
                } else if ("left" === d3) {
                  t3 = [];
                  for (H3 = 0, v3 = y3.length; H3 < v3; H3++)
                    M3 = 0 === H3 ? (q3 - n3) * S3 : -E3, N3 = 0 === H3 ? e3 * S3 : 0, t3.push(y3[H3]);
                } else {
                  if ("justify" !== d3)
                    throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                  t3 = [];
                  for (j3 = 0 !== j3 ? j3 : O3, H3 = 0, v3 = y3.length; H3 < v3; H3++)
                    M3 = 0 === H3 ? (q3 - n3) * S3 : -E3, N3 = 0 === H3 ? e3 * S3 : 0, H3 < v3 - 1 && D3.push(((j3 - U3[H3]) / (y3[H3].split(" ").length - 1) * S3).toFixed(2)), t3.push([y3[H3], N3, M3]);
                }
              }
              true === ("boolean" == typeof i3.R2L ? i3.R2L : tt2) && (t3 = l3(t3, function(t4, e4, n4) {
                return [t4.split("").reverse().join(""), e4, n4];
              }));
              x3 = { text: t3, x: e3, y: n3, options: i3, mutex: { pdfEscape: ot2, activeFontKey: K2, fonts: nt2, activeFontSize: Z2 } };
              rt2.publish("postProcessText", x3), t3 = x3.text, r3 = x3.mutex.isHex;
              y3 = c3(t3);
              t3 = [];
              var W3, G3, V3, Y3 = 0, X3 = (v3 = y3.length, "");
              for (H3 = 0; H3 < v3; H3++)
                X3 = "", "[object Array]" !== Object.prototype.toString.call(y3[H3]) ? (W3 = parseFloat(e3 * S3).toFixed(2), G3 = parseFloat((q3 - n3) * S3).toFixed(2), V3 = (r3 ? "<" : "(") + y3[H3] + (r3 ? ">" : ")")) : "[object Array]" === Object.prototype.toString.call(y3[H3]) && (W3 = parseFloat(y3[H3][1]).toFixed(2), G3 = parseFloat(y3[H3][2]).toFixed(2), V3 = (r3 ? "<" : "(") + y3[H3][0] + (r3 ? ">" : ")"), Y3 = 1), void 0 !== D3 && void 0 !== D3[H3] && (X3 = D3[H3] + " Tw\n"), 0 !== k3.length && 0 === H3 ? t3.push(X3 + k3.join(" ") + " " + W3 + " " + G3 + " Tm\n" + V3) : 1 === Y3 || 0 === Y3 && 0 === H3 ? t3.push(X3 + W3 + " " + G3 + " Td\n" + V3) : t3.push(X3 + V3);
              t3 = 0 === Y3 ? t3.join(" Tj\nT* ") : t3.join(" Tj\n"), t3 += " Tj\n";
              var J3 = "BT\n/" + K2 + " " + Z2 + " Tf\n" + (Z2 * s3).toFixed(2) + " TL\n" + Q2 + "\n";
              return J3 += a3, J3 += t3, it2(J3 += "ET"), h3;
            }, O2.lstext = function(t3, e3, n3, r3) {
              console.warn("jsPDF.lstext is deprecated");
              for (var i3 = 0, o3 = t3.length; i3 < o3; i3++, e3 += r3)
                this.text(t3[i3], e3, n3);
              return this;
            }, O2.line = function(t3, e3, n3, r3) {
              return this.lines([[n3 - t3, r3 - e3]], t3, e3);
            }, O2.clip = function() {
              it2("W"), it2("S");
            }, O2.clip_fixed = function(t3) {
              it2("evenodd" === t3 ? "W*" : "W"), it2("n");
            }, O2.lines = function(t3, e3, n3, r3, i3, o3) {
              var a3, s3, h3, c3, l3, u3, f3, d3, p3, g3, m3;
              for ("number" == typeof t3 && (y2 = n3, n3 = e3, e3 = t3, t3 = y2), r3 = r3 || [1, 1], it2(z2(e3 * w2) + " " + z2((v2 - n3) * w2) + " m "), a3 = r3[0], s3 = r3[1], c3 = t3.length, g3 = e3, m3 = n3, h3 = 0; h3 < c3; h3++)
                2 === (l3 = t3[h3]).length ? (g3 = l3[0] * a3 + g3, m3 = l3[1] * s3 + m3, it2(z2(g3 * w2) + " " + z2((v2 - m3) * w2) + " l")) : (u3 = l3[0] * a3 + g3, f3 = l3[1] * s3 + m3, d3 = l3[2] * a3 + g3, p3 = l3[3] * s3 + m3, g3 = l3[4] * a3 + g3, m3 = l3[5] * s3 + m3, it2(z2(u3 * w2) + " " + z2((v2 - f3) * w2) + " " + z2(d3 * w2) + " " + z2((v2 - p3) * w2) + " " + z2(g3 * w2) + " " + z2((v2 - m3) * w2) + " c"));
              return o3 && it2(" h"), null !== i3 && it2(ht2(i3)), this;
            }, O2.rect = function(t3, e3, n3, r3, i3) {
              ht2(i3);
              return it2([N2(t3 * w2), N2((v2 - e3) * w2), N2(n3 * w2), N2(-r3 * w2), "re"].join(" ")), null !== i3 && it2(ht2(i3)), this;
            }, O2.triangle = function(t3, e3, n3, r3, i3, o3, a3) {
              return this.lines([[n3 - t3, r3 - e3], [i3 - n3, o3 - r3], [t3 - i3, e3 - o3]], t3, e3, [1, 1], a3, true), this;
            }, O2.roundedRect = function(t3, e3, n3, r3, i3, o3, a3) {
              var s3 = 4 / 3 * (Math.SQRT2 - 1);
              return this.lines([[n3 - 2 * i3, 0], [i3 * s3, 0, i3, o3 - o3 * s3, i3, o3], [0, r3 - 2 * o3], [0, o3 * s3, -i3 * s3, o3, -i3, o3], [2 * i3 - n3, 0], [-i3 * s3, 0, -i3, -o3 * s3, -i3, -o3], [0, 2 * o3 - r3], [0, -o3 * s3, i3 * s3, -o3, i3, -o3]], t3 + i3, e3, [1, 1], a3), this;
            }, O2.ellipse = function(t3, e3, n3, r3, i3) {
              var o3 = 4 / 3 * (Math.SQRT2 - 1) * n3, a3 = 4 / 3 * (Math.SQRT2 - 1) * r3;
              return it2([N2((t3 + n3) * w2), N2((v2 - e3) * w2), "m", N2((t3 + n3) * w2), N2((v2 - (e3 - a3)) * w2), N2((t3 + o3) * w2), N2((v2 - (e3 - r3)) * w2), N2(t3 * w2), N2((v2 - (e3 - r3)) * w2), "c"].join(" ")), it2([N2((t3 - o3) * w2), N2((v2 - (e3 - r3)) * w2), N2((t3 - n3) * w2), N2((v2 - (e3 - a3)) * w2), N2((t3 - n3) * w2), N2((v2 - e3) * w2), "c"].join(" ")), it2([N2((t3 - n3) * w2), N2((v2 - (e3 + a3)) * w2), N2((t3 - o3) * w2), N2((v2 - (e3 + r3)) * w2), N2(t3 * w2), N2((v2 - (e3 + r3)) * w2), "c"].join(" ")), it2([N2((t3 + o3) * w2), N2((v2 - (e3 + r3)) * w2), N2((t3 + n3) * w2), N2((v2 - (e3 + a3)) * w2), N2((t3 + n3) * w2), N2((v2 - e3) * w2), "c"].join(" ")), null !== i3 && it2(ht2(i3)), this;
            }, O2.circle = function(t3, e3, n3, r3) {
              return this.ellipse(t3, e3, n3, n3, r3);
            }, O2.setProperties = function(t3) {
              for (var e3 in q2)
                q2.hasOwnProperty(e3) && t3[e3] && (q2[e3] = t3[e3]);
              return this;
            }, O2.setFontSize = function(t3) {
              return Z2 = t3, this;
            }, O2.setFont = function(t3, e3) {
              return K2 = at2(t3, e3), this;
            }, O2.setFontStyle = O2.setFontType = function(t3) {
              return K2 = at2(void 0, t3), this;
            }, O2.getFontList = function() {
              var t3, e3, n3, r3 = {};
              for (t3 in S2)
                if (S2.hasOwnProperty(t3))
                  for (e3 in r3[t3] = n3 = [], S2[t3])
                    S2[t3].hasOwnProperty(e3) && n3.push(e3);
              return r3;
            }, O2.addFont = function(t3, e3, n3, r3) {
              Y2(t3, e3, n3, r3 = r3 || "Identity-H");
            }, O2.setLineWidth = function(t3) {
              return it2((t3 * w2).toFixed(2) + " w"), this;
            }, O2.setDrawColor = function(t3, e3, n3, r3) {
              return it2(R2({ ch1: t3, ch2: e3, ch3: n3, ch4: r3, pdfColorType: "draw", precision: 2 })), this;
            }, O2.setFillColor = function(t3, e3, n3, r3) {
              return it2(R2({ ch1: t3, ch2: e3, ch3: n3, ch4: r3, pdfColorType: "fill", precision: 2 })), this;
            }, O2.setTextColor = function(t3, e3, n3, r3) {
              return Q2 = R2({ ch1: t3, ch2: e3, ch3: n3, ch4: r3, pdfColorType: "text", precision: 3 }), this;
            }, O2.setCharSpace = function(t3) {
              return $2 = t3, this;
            }, O2.setR2L = function(t3) {
              return tt2 = t3, this;
            }, O2.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, O2.setLineCap = function(t3) {
              var e3 = this.CapJoinStyles[t3];
              if (void 0 === e3)
                throw new Error("Line cap style of '" + t3 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
              return it2((F2 = e3) + " J"), this;
            }, O2.setLineJoin = function(t3) {
              var e3 = this.CapJoinStyles[t3];
              if (void 0 === e3)
                throw new Error("Line join style of '" + t3 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
              return it2((P2 = e3) + " j"), this;
            }, O2.output = ut2, O2.save = function(t3) {
              O2.output("save", t3);
            }, yt2.API)
              yt2.API.hasOwnProperty(dt2) && ("events" === dt2 && yt2.API.events.length ? function(t3, e3) {
                var n3, r3, i3;
                for (i3 = e3.length - 1; -1 !== i3; i3--)
                  n3 = e3[i3][0], r3 = e3[i3][1], t3.subscribe.apply(t3, [n3].concat("function" == typeof r3 ? [r3] : r3));
              }(rt2, yt2.API.events) : O2[dt2] = yt2.API[dt2]);
            return function() {
              for (var t3 = "helvetica", e3 = "times", n3 = "courier", r3 = "normal", i3 = "bold", o3 = "italic", a3 = "bolditalic", s3 = [["Helvetica", t3, r3, "WinAnsiEncoding"], ["Helvetica-Bold", t3, i3, "WinAnsiEncoding"], ["Helvetica-Oblique", t3, o3, "WinAnsiEncoding"], ["Helvetica-BoldOblique", t3, a3, "WinAnsiEncoding"], ["Courier", n3, r3, "WinAnsiEncoding"], ["Courier-Bold", n3, i3, "WinAnsiEncoding"], ["Courier-Oblique", n3, o3, "WinAnsiEncoding"], ["Courier-BoldOblique", n3, a3, "WinAnsiEncoding"], ["Times-Roman", e3, r3, "WinAnsiEncoding"], ["Times-Bold", e3, i3, "WinAnsiEncoding"], ["Times-Italic", e3, o3, "WinAnsiEncoding"], ["Times-BoldItalic", e3, a3, "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", r3, null], ["Symbol", "symbol", r3, null]], h3 = 0, c3 = s3.length; h3 < c3; h3++) {
                var l3 = Y2(s3[h3][0], s3[h3][1], s3[h3][2], s3[h3][3]), u3 = s3[h3][0].split("-");
                V2(l3, u3[0], u3[1] || "");
              }
              rt2.publish("addFonts", { fonts: nt2, dictionary: S2 });
            }(), K2 = "F1", X2(n2, t2), rt2.publish("initialized"), O2;
          }
          return yt2.API = { events: [] }, yt2.version = "0.0.0", "function" == typeof define && define.amd ? define("jsPDF", function() {
            return yt2;
          }) : "undefined" != typeof module && module.exports ? (module.exports = yt2, module.exports.jsPDF = yt2) : pt2.jsPDF = yt2, yt2;
        }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")());
        !function(n2, t2) {
          var l2, a2, e2 = 1, r2 = function(t3, e3) {
            t3.prototype = Object.create(e3.prototype), t3.prototype.constructor = t3;
          }, s2 = function(t3) {
            return t3 * (e2 / 1);
          }, h2 = function(t3) {
            var e3 = new I2(), n3 = N2.internal.getHeight(t3) || 0, r3 = N2.internal.getWidth(t3) || 0;
            return e3.BBox = [0, 0, r3.toFixed(2), n3.toFixed(2)], e3;
          }, i2 = function(t3, e3, n3) {
            t3 = t3 || 0;
            var r3 = 1;
            if (r3 <<= e3 - 1, 1 == (n3 = n3 || 1))
              t3 = t3 | r3;
            else
              t3 = t3 & ~r3;
            return t3;
          }, o2 = function(t3, e3, n3) {
            n3 = n3 || 1.3, t3 = t3 || 0;
            return 1 == e3.readOnly && (t3 = i2(t3, 1)), 1 == e3.required && (t3 = i2(t3, 2)), 1 == e3.noExport && (t3 = i2(t3, 3)), 1 == e3.multiline && (t3 = i2(t3, 13)), e3.password && (t3 = i2(t3, 14)), e3.noToggleToOff && (t3 = i2(t3, 15)), e3.radio && (t3 = i2(t3, 16)), e3.pushbutton && (t3 = i2(t3, 17)), e3.combo && (t3 = i2(t3, 18)), e3.edit && (t3 = i2(t3, 19)), e3.sort && (t3 = i2(t3, 20)), e3.fileSelect && 1.4 <= n3 && (t3 = i2(t3, 21)), e3.multiSelect && 1.4 <= n3 && (t3 = i2(t3, 22)), e3.doNotSpellCheck && 1.4 <= n3 && (t3 = i2(t3, 23)), 1 == e3.doNotScroll && 1.4 <= n3 && (t3 = i2(t3, 24)), e3.richText && 1.4 <= n3 && (t3 = i2(t3, 25)), t3;
          }, u2 = function(t3) {
            var e3 = t3[0], n3 = t3[1], r3 = t3[2], i3 = t3[3], o3 = {};
            return Array.isArray(e3) ? (e3[0] = s2(e3[0]), e3[1] = s2(e3[1]), e3[2] = s2(e3[2]), e3[3] = s2(e3[3])) : (e3 = s2(e3), n3 = s2(n3), r3 = s2(r3), i3 = s2(i3)), o3.lowerLeft_X = e3 || 0, o3.lowerLeft_Y = s2(a2) - n3 - i3 || 0, o3.upperRight_X = e3 + r3 || 0, o3.upperRight_Y = s2(a2) - n3 || 0, [o3.lowerLeft_X.toFixed(2), o3.lowerLeft_Y.toFixed(2), o3.upperRight_X.toFixed(2), o3.upperRight_Y.toFixed(2)];
          }, f2 = function(t3) {
            if (t3.appearanceStreamContent)
              return t3.appearanceStreamContent;
            if (t3.V || t3.DV) {
              var e3 = [], n3 = t3.V || t3.DV, r3 = c2(t3, n3);
              e3.push("/Tx BMC"), e3.push("q"), e3.push("/F1 " + r3.fontSize.toFixed(2) + " Tf"), e3.push("1 0 0 1 0 0 Tm"), e3.push("BT"), e3.push(r3.text), e3.push("ET"), e3.push("Q"), e3.push("EMC");
              var i3 = new h2(t3);
              return i3.stream = e3.join("\n"), i3;
            }
          }, c2 = function(t3, e3, i3, n3) {
            n3 = n3 || 12, i3 = i3 || "helvetica";
            var r3 = { text: "", fontSize: "" }, o3 = (e3 = ")" == (e3 = "(" == e3.substr(0, 1) ? e3.substr(1) : e3).substr(e3.length - 1) ? e3.substr(0, e3.length - 1) : e3).split(" "), a3 = n3, s3 = N2.internal.getHeight(t3) || 0;
            s3 = s3 < 0 ? -s3 : s3;
            var h3 = N2.internal.getWidth(t3) || 0;
            h3 = h3 < 0 ? -h3 : h3;
            var c3 = function(t4, e4, n4) {
              if (t4 + 1 < o3.length) {
                var r4 = e4 + " " + o3[t4 + 1];
                return A2(r4, n4 + "px", i3).width <= h3 - 4;
              }
              return false;
            };
            a3++;
            t:
              for (; ; ) {
                e3 = "";
                var l3 = A2("3", --a3 + "px", i3).height, u3 = t3.multiline ? s3 - a3 : (s3 - l3) / 2, f3 = -2, d3 = u3 += 2, p3 = 0, g3 = 0, m3 = 0;
                if (a3 <= 0) {
                  a3 = 12, e3 = "(...) Tj\n", e3 += "% Width of Text: " + A2(e3, "1px").width + ", FieldWidth:" + h3 + "\n";
                  break;
                }
                m3 = A2(o3[0] + " ", a3 + "px", i3).width;
                var w3 = "", y3 = 0;
                for (var v3 in o3) {
                  w3 = " " == (w3 += o3[v3] + " ").substr(w3.length - 1) ? w3.substr(0, w3.length - 1) : w3;
                  var b3 = parseInt(v3);
                  m3 = A2(w3 + " ", a3 + "px", i3).width;
                  var x3 = c3(b3, w3, a3), S3 = v3 >= o3.length - 1;
                  if (!x3 || S3) {
                    if (x3 || S3) {
                      if (S3)
                        g3 = b3;
                      else if (t3.multiline && s3 < (l3 + 2) * (y3 + 2) + 2)
                        continue t;
                    } else {
                      if (!t3.multiline)
                        continue t;
                      if (s3 < (l3 + 2) * (y3 + 2) + 2)
                        continue t;
                      g3 = b3;
                    }
                    for (var k3 = "", _3 = p3; _3 <= g3; _3++)
                      k3 += o3[_3] + " ";
                    switch (k3 = " " == k3.substr(k3.length - 1) ? k3.substr(0, k3.length - 1) : k3, m3 = A2(k3, a3 + "px", i3).width, t3.Q) {
                      case 2:
                        f3 = h3 - m3 - 2;
                        break;
                      case 1:
                        f3 = (h3 - m3) / 2;
                        break;
                      case 0:
                      default:
                        f3 = 2;
                    }
                    e3 += f3.toFixed(2) + " " + d3.toFixed(2) + " Td\n", e3 += "(" + k3 + ") Tj\n", e3 += -f3.toFixed(2) + " 0 Td\n", d3 = -(a3 + 2), m3 = 0, p3 = g3 + 1, y3++, w3 = "";
                  } else
                    w3 += " ";
                }
                break;
              }
            return r3.text = e3, r3.fontSize = a3, r3;
          }, A2 = function(t3, e3, n3) {
            n3 = n3 || "helvetica";
            var r3 = l2.internal.getFont(n3), i3 = l2.getStringUnitWidth(t3, { font: r3, fontSize: parseFloat(e3), charSpace: 0 }) * parseFloat(e3);
            return { height: l2.getStringUnitWidth("3", { font: r3, fontSize: parseFloat(e3), charSpace: 0 }) * parseFloat(e3) * 1.5, width: i3 };
          }, d2 = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: false, internal: null, isInitialized: false }, p2 = function() {
            for (var t3 in l2.internal.acroformPlugin.acroFormDictionaryRoot.Fields) {
              var e3 = l2.internal.acroformPlugin.acroFormDictionaryRoot.Fields[t3];
              e3.hasAnnotation && m2.call(l2, e3);
            }
          }, g2 = function(t3) {
            l2.internal.acroformPlugin.printedOut && (l2.internal.acroformPlugin.printedOut = false, l2.internal.acroformPlugin.acroFormDictionaryRoot = null), l2.internal.acroformPlugin.acroFormDictionaryRoot || x2.call(l2), l2.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t3);
          }, m2 = function(t3) {
            var e3 = { type: "reference", object: t3 };
            l2.annotationPlugin.annotations[l2.internal.getPageInfo(t3.page).pageNumber].push(e3);
          }, w2 = function() {
            void 0 !== l2.internal.acroformPlugin.acroFormDictionaryRoot ? l2.internal.write("/AcroForm " + l2.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R") : console.log("Root missing...");
          }, y2 = function() {
            l2.internal.events.unsubscribe(l2.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete l2.internal.acroformPlugin.acroFormDictionaryRoot._eventID, l2.internal.acroformPlugin.printedOut = true;
          }, v2 = function(t3) {
            var e3 = !t3;
            t3 || (l2.internal.newObjectDeferredBegin(l2.internal.acroformPlugin.acroFormDictionaryRoot.objId), l2.internal.out(l2.internal.acroformPlugin.acroFormDictionaryRoot.getString()));
            t3 = t3 || l2.internal.acroformPlugin.acroFormDictionaryRoot.Kids;
            for (var n3 in t3) {
              var r3 = t3[n3], i3 = r3.Rect;
              r3.Rect && (r3.Rect = u2.call(this, r3.Rect)), l2.internal.newObjectDeferredBegin(r3.objId);
              var o3 = r3.objId + " 0 obj\n<<\n";
              if ("object" === (void 0 === r3 ? "undefined" : vt(r3)) && "function" == typeof r3.getContent && (o3 += r3.getContent()), r3.Rect = i3, r3.hasAppearanceStream && !r3.appearanceStreamContent) {
                var a3 = f2.call(this, r3);
                o3 += "/AP << /N " + a3 + " >>\n", l2.internal.acroformPlugin.xForms.push(a3);
              }
              if (r3.appearanceStreamContent) {
                for (var s3 in o3 += "/AP << ", r3.appearanceStreamContent) {
                  var h3 = r3.appearanceStreamContent[s3];
                  if (o3 += "/" + s3 + " ", o3 += "<< ", 1 <= Object.keys(h3).length || Array.isArray(h3))
                    for (var n3 in h3) {
                      var c3;
                      "function" == typeof (c3 = h3[n3]) && (c3 = c3.call(this, r3)), o3 += "/" + n3 + " " + c3 + " ", 0 <= l2.internal.acroformPlugin.xForms.indexOf(c3) || l2.internal.acroformPlugin.xForms.push(c3);
                    }
                  else
                    "function" == typeof (c3 = h3) && (c3 = c3.call(this, r3)), o3 += "/" + n3 + " " + c3 + " \n", 0 <= l2.internal.acroformPlugin.xForms.indexOf(c3) || l2.internal.acroformPlugin.xForms.push(c3);
                  o3 += " >>\n";
                }
                o3 += ">>\n";
              }
              o3 += ">>\nendobj\n", l2.internal.out(o3);
            }
            e3 && b2.call(this, l2.internal.acroformPlugin.xForms);
          }, b2 = function(t3) {
            for (var e3 in t3) {
              var n3 = e3, r3 = t3[e3];
              l2.internal.newObjectDeferredBegin(r3 && r3.objId);
              var i3 = "";
              "object" === (void 0 === r3 ? "undefined" : vt(r3)) && "function" == typeof r3.getString && (i3 = r3.getString()), l2.internal.out(i3), delete t3[n3];
            }
          }, x2 = function() {
            if (void 0 !== this.internal && (void 0 === this.internal.acroformPlugin || false === this.internal.acroformPlugin.isInitialized)) {
              if (l2 = this, T2.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(d2)), this.internal.acroformPlugin.acroFormDictionaryRoot)
                throw new Error("Exception while creating AcroformDictionary");
              e2 = l2.internal.scaleFactor, a2 = l2.internal.pageSize.getHeight(), l2.internal.acroformPlugin.acroFormDictionaryRoot = new C2(), l2.internal.acroformPlugin.acroFormDictionaryRoot._eventID = l2.internal.events.subscribe("postPutResources", y2), l2.internal.events.subscribe("buildDocument", p2), l2.internal.events.subscribe("putCatalog", w2), l2.internal.events.subscribe("postPutPages", v2), l2.internal.acroformPlugin.isInitialized = true;
            }
          }, S2 = function(t3) {
            if (Array.isArray(t3)) {
              var e3 = " [";
              for (var n3 in t3) {
                e3 += t3[n3].toString(), e3 += n3 < t3.length - 1 ? " " : "";
              }
              return e3 += "]";
            }
          }, k2 = function(t3) {
            return 0 !== (t3 = t3 || "").indexOf("(") && (t3 = "(" + t3), ")" != t3.substring(t3.length - 1) && (t3 += ")"), t3;
          }, _2 = function() {
            var t3;
            Object.defineProperty(this, "objId", { get: function() {
              return t3 || (t3 = l2.internal.newObjectDeferred()), t3 || console.log("Couldn't create Object ID"), t3;
            }, configurable: false });
          };
          _2.prototype.toString = function() {
            return this.objId + " 0 R";
          }, _2.prototype.getString = function() {
            var t3 = this.objId + " 0 obj\n<<";
            return t3 += this.getContent() + ">>\n", this.stream && (t3 += "stream\n", t3 += this.stream, t3 += "\nendstream\n"), t3 += "endobj\n";
          }, _2.prototype.getContent = function() {
            var t3 = "";
            return t3 += function(t4) {
              var e3 = "", n3 = Object.keys(t4).filter(function(t5) {
                return "content" != t5 && "appearanceStreamContent" != t5 && "_" != t5.substring(0, 1);
              });
              for (var r3 in n3) {
                var i3 = n3[r3], o3 = t4[i3];
                o3 && (Array.isArray(o3) ? e3 += "/" + i3 + " " + S2(o3) + "\n" : e3 += o3 instanceof _2 ? "/" + i3 + " " + o3.objId + " 0 R\n" : "/" + i3 + " " + o3 + "\n");
              }
              return e3;
            }(this);
          };
          var I2 = function() {
            var e3;
            _2.call(this), this.Type = "/XObject", this.Subtype = "/Form", this.FormType = 1, this.BBox, this.Matrix, this.Resources = "2 0 R", this.PieceInfo, Object.defineProperty(this, "Length", { enumerable: true, get: function() {
              return void 0 !== e3 ? e3.length : 0;
            } }), Object.defineProperty(this, "stream", { enumerable: false, set: function(t3) {
              e3 = t3.trim();
            }, get: function() {
              return e3 || null;
            } });
          };
          r2(I2, _2);
          var C2 = function() {
            _2.call(this);
            var t3 = [];
            Object.defineProperty(this, "Kids", { enumerable: false, configurable: true, get: function() {
              return 0 < t3.length ? t3 : void 0;
            } }), Object.defineProperty(this, "Fields", { enumerable: true, configurable: true, get: function() {
              return t3;
            } }), this.DA;
          };
          r2(C2, _2);
          var T2 = function t3() {
            var e3;
            _2.call(this), Object.defineProperty(this, "Rect", { enumerable: true, configurable: false, get: function() {
              if (e3)
                return e3;
            }, set: function(t4) {
              e3 = t4;
            } });
            var n3, r3, i3, o3, a3 = "";
            Object.defineProperty(this, "FT", { enumerable: true, set: function(t4) {
              a3 = t4;
            }, get: function() {
              return a3;
            } }), Object.defineProperty(this, "T", { enumerable: true, configurable: false, set: function(t4) {
              n3 = t4;
            }, get: function() {
              if (!n3 || n3.length < 1) {
                if (this instanceof j2)
                  return;
                return "(FieldObject" + t3.FieldNum++ + ")";
              }
              return "(" == n3.substring(0, 1) && n3.substring(n3.length - 1) ? n3 : "(" + n3 + ")";
            } }), Object.defineProperty(this, "DA", { enumerable: true, get: function() {
              if (r3)
                return "(" + r3 + ")";
            }, set: function(t4) {
              r3 = t4;
            } }), Object.defineProperty(this, "DV", { enumerable: true, configurable: true, get: function() {
              if (i3)
                return i3;
            }, set: function(t4) {
              i3 = t4;
            } }), Object.defineProperty(this, "V", { enumerable: true, configurable: true, get: function() {
              if (o3)
                return o3;
            }, set: function(t4) {
              o3 = t4;
            } }), Object.defineProperty(this, "Type", { enumerable: true, get: function() {
              return this.hasAnnotation ? "/Annot" : null;
            } }), Object.defineProperty(this, "Subtype", { enumerable: true, get: function() {
              return this.hasAnnotation ? "/Widget" : null;
            } }), this.BG, Object.defineProperty(this, "hasAnnotation", { enumerable: false, get: function() {
              return !!(this.Rect || this.BC || this.BG);
            } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: false, configurable: true, writable: true }), Object.defineProperty(this, "page", { enumerable: false, configurable: true, writable: true });
          };
          r2(T2, _2);
          var F2 = function() {
            T2.call(this), this.FT = "/Ch", this.Opt = [], this.V = "()", this.TI = 0;
            var e3 = false;
            Object.defineProperty(this, "combo", { enumerable: false, get: function() {
              return e3;
            }, set: function(t3) {
              e3 = t3;
            } }), Object.defineProperty(this, "edit", { enumerable: true, set: function(t3) {
              1 == t3 ? (this._edit = true, this.combo = true) : this._edit = false;
            }, get: function() {
              return !!this._edit && this._edit;
            }, configurable: false }), this.hasAppearanceStream = true;
          };
          r2(F2, T2);
          var P2 = function() {
            F2.call(this), this.combo = false;
          };
          r2(P2, F2);
          var E2 = function() {
            P2.call(this), this.combo = true;
          };
          r2(E2, P2);
          var q2 = function() {
            E2.call(this), this.edit = true;
          };
          r2(q2, E2);
          var O2 = function() {
            T2.call(this), this.FT = "/Btn";
          };
          r2(O2, T2);
          var B2 = function() {
            O2.call(this);
            var e3 = true;
            Object.defineProperty(this, "pushbutton", { enumerable: false, get: function() {
              return e3;
            }, set: function(t3) {
              e3 = t3;
            } });
          };
          r2(B2, O2);
          var R2 = function() {
            O2.call(this);
            var e3 = true;
            Object.defineProperty(this, "radio", { enumerable: false, get: function() {
              return e3;
            }, set: function(t4) {
              e3 = t4;
            } });
            var n3, t3 = [];
            Object.defineProperty(this, "Kids", { enumerable: true, get: function() {
              if (0 < t3.length)
                return t3;
            } }), Object.defineProperty(this, "__Kids", { get: function() {
              return t3;
            } }), Object.defineProperty(this, "noToggleToOff", { enumerable: false, get: function() {
              return n3;
            }, set: function(t4) {
              n3 = t4;
            } });
          };
          r2(R2, O2);
          var j2 = function(t3, e3) {
            T2.call(this), this.Parent = t3, this._AppearanceType = N2.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(e3), this.F = i2(this.F, 3, 1), this.MK = this._AppearanceType.createMK(), this.AS = "/Off", this._Name = e3;
          };
          r2(j2, T2), R2.prototype.setAppearance = function(t3) {
            if ("createAppearanceStream" in t3 && "createMK" in t3)
              for (var e3 in this.__Kids) {
                var n3 = this.__Kids[e3];
                n3.appearanceStreamContent = t3.createAppearanceStream(n3._Name), n3.MK = t3.createMK();
              }
            else
              console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
          }, R2.prototype.createOption = function(t3) {
            this.__Kids.length;
            var e3 = new j2(this, t3);
            return this.__Kids.push(e3), n2.addField(e3), e3;
          };
          var D2 = function() {
            O2.call(this), this.appearanceStreamContent = N2.CheckBox.createAppearanceStream(), this.MK = N2.CheckBox.createMK(), this.AS = "/On", this.V = "/On";
          };
          r2(D2, O2);
          var M2 = function() {
            var e3, n3;
            T2.call(this), this.DA = N2.createDefaultAppearanceStream(), this.F = 4, Object.defineProperty(this, "V", { get: function() {
              return e3 ? k2(e3) : e3;
            }, enumerable: true, set: function(t3) {
              e3 = t3;
            } }), Object.defineProperty(this, "DV", { get: function() {
              return n3 ? k2(n3) : n3;
            }, enumerable: true, set: function(t3) {
              n3 = t3;
            } });
            var r3 = false;
            Object.defineProperty(this, "multiline", { enumerable: false, get: function() {
              return r3;
            }, set: function(t3) {
              r3 = t3;
            } });
            var i3 = false;
            Object.defineProperty(this, "fileSelect", { enumerable: false, get: function() {
              return i3;
            }, set: function(t3) {
              i3 = t3;
            } });
            var o3 = false;
            Object.defineProperty(this, "doNotSpellCheck", { enumerable: false, get: function() {
              return o3;
            }, set: function(t3) {
              o3 = t3;
            } });
            var a3 = false;
            Object.defineProperty(this, "doNotScroll", { enumerable: false, get: function() {
              return a3;
            }, set: function(t3) {
              a3 = t3;
            } });
            var s3 = false;
            Object.defineProperty(this, "MaxLen", { enumerable: true, get: function() {
              return s3;
            }, set: function(t3) {
              s3 = t3;
            } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: false, get: function() {
              return this.V || this.DV;
            } });
          };
          r2(M2, T2);
          var U2 = function() {
            M2.call(this);
            var e3 = true;
            Object.defineProperty(this, "password", { enumerable: false, get: function() {
              return e3;
            }, set: function(t3) {
              e3 = t3;
            } });
          };
          r2(U2, M2);
          var N2 = { CheckBox: { createAppearanceStream: function() {
            return { N: { On: N2.CheckBox.YesNormal }, D: { On: N2.CheckBox.YesPushDown, Off: N2.CheckBox.OffPushDown } };
          }, createMK: function() {
            return "<< /CA (3)>>";
          }, YesPushDown: function(t3) {
            var e3 = h2(t3), n3 = [], r3 = l2.internal.getFont("zapfdingbats", "normal").id;
            t3.Q = 1;
            var i3 = c2(t3, "3", "ZapfDingbats", 50);
            return n3.push("0.749023 g"), n3.push("0 0 " + N2.internal.getWidth(t3).toFixed(2) + " " + N2.internal.getHeight(t3).toFixed(2) + " re"), n3.push("f"), n3.push("BMC"), n3.push("q"), n3.push("0 0 1 rg"), n3.push("/" + r3 + " " + i3.fontSize.toFixed(2) + " Tf 0 g"), n3.push("BT"), n3.push(i3.text), n3.push("ET"), n3.push("Q"), n3.push("EMC"), e3.stream = n3.join("\n"), e3;
          }, YesNormal: function(t3) {
            var e3 = h2(t3), n3 = l2.internal.getFont("zapfdingbats", "normal").id, r3 = [];
            t3.Q = 1;
            var i3 = N2.internal.getHeight(t3), o3 = N2.internal.getWidth(t3), a3 = c2(t3, "3", "ZapfDingbats", 0.9 * i3);
            return r3.push("1 g"), r3.push("0 0 " + o3.toFixed(2) + " " + i3.toFixed(2) + " re"), r3.push("f"), r3.push("q"), r3.push("0 0 1 rg"), r3.push("0 0 " + (o3 - 1).toFixed(2) + " " + (i3 - 1).toFixed(2) + " re"), r3.push("W"), r3.push("n"), r3.push("0 g"), r3.push("BT"), r3.push("/" + n3 + " " + a3.fontSize.toFixed(2) + " Tf 0 g"), r3.push(a3.text), r3.push("ET"), r3.push("Q"), e3.stream = r3.join("\n"), e3;
          }, OffPushDown: function(t3) {
            var e3 = h2(t3), n3 = [];
            return n3.push("0.749023 g"), n3.push("0 0 " + N2.internal.getWidth(t3).toFixed(2) + " " + N2.internal.getHeight(t3).toFixed(2) + " re"), n3.push("f"), e3.stream = n3.join("\n"), e3;
          } }, RadioButton: { Circle: { createAppearanceStream: function(t3) {
            var e3 = { D: { Off: N2.RadioButton.Circle.OffPushDown }, N: {} };
            return e3.N[t3] = N2.RadioButton.Circle.YesNormal, e3.D[t3] = N2.RadioButton.Circle.YesPushDown, e3;
          }, createMK: function() {
            return "<< /CA (l)>>";
          }, YesNormal: function(t3) {
            var e3 = h2(t3), n3 = [], r3 = N2.internal.getWidth(t3) <= N2.internal.getHeight(t3) ? N2.internal.getWidth(t3) / 4 : N2.internal.getHeight(t3) / 4;
            r3 *= 0.9;
            var i3 = N2.internal.Bezier_C;
            return n3.push("q"), n3.push("1 0 0 1 " + N2.internal.getWidth(t3) / 2 + " " + N2.internal.getHeight(t3) / 2 + " cm"), n3.push(r3 + " 0 m"), n3.push(r3 + " " + r3 * i3 + " " + r3 * i3 + " " + r3 + " 0 " + r3 + " c"), n3.push("-" + r3 * i3 + " " + r3 + " -" + r3 + " " + r3 * i3 + " -" + r3 + " 0 c"), n3.push("-" + r3 + " -" + r3 * i3 + " -" + r3 * i3 + " -" + r3 + " 0 -" + r3 + " c"), n3.push(r3 * i3 + " -" + r3 + " " + r3 + " -" + r3 * i3 + " " + r3 + " 0 c"), n3.push("f"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
          }, YesPushDown: function(t3) {
            var e3 = h2(t3), n3 = [], r3 = N2.internal.getWidth(t3) <= N2.internal.getHeight(t3) ? N2.internal.getWidth(t3) / 4 : N2.internal.getHeight(t3) / 4, i3 = 2 * (r3 *= 0.9), o3 = i3 * N2.internal.Bezier_C, a3 = r3 * N2.internal.Bezier_C;
            return n3.push("0.749023 g"), n3.push("q"), n3.push("1 0 0 1 " + (N2.internal.getWidth(t3) / 2).toFixed(2) + " " + (N2.internal.getHeight(t3) / 2).toFixed(2) + " cm"), n3.push(i3 + " 0 m"), n3.push(i3 + " " + o3 + " " + o3 + " " + i3 + " 0 " + i3 + " c"), n3.push("-" + o3 + " " + i3 + " -" + i3 + " " + o3 + " -" + i3 + " 0 c"), n3.push("-" + i3 + " -" + o3 + " -" + o3 + " -" + i3 + " 0 -" + i3 + " c"), n3.push(o3 + " -" + i3 + " " + i3 + " -" + o3 + " " + i3 + " 0 c"), n3.push("f"), n3.push("Q"), n3.push("0 g"), n3.push("q"), n3.push("1 0 0 1 " + (N2.internal.getWidth(t3) / 2).toFixed(2) + " " + (N2.internal.getHeight(t3) / 2).toFixed(2) + " cm"), n3.push(r3 + " 0 m"), n3.push(r3 + " " + a3 + " " + a3 + " " + r3 + " 0 " + r3 + " c"), n3.push("-" + a3 + " " + r3 + " -" + r3 + " " + a3 + " -" + r3 + " 0 c"), n3.push("-" + r3 + " -" + a3 + " -" + a3 + " -" + r3 + " 0 -" + r3 + " c"), n3.push(a3 + " -" + r3 + " " + r3 + " -" + a3 + " " + r3 + " 0 c"), n3.push("f"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
          }, OffPushDown: function(t3) {
            var e3 = h2(t3), n3 = [], r3 = N2.internal.getWidth(t3) <= N2.internal.getHeight(t3) ? N2.internal.getWidth(t3) / 4 : N2.internal.getHeight(t3) / 4, i3 = 2 * (r3 *= 0.9), o3 = i3 * N2.internal.Bezier_C;
            return n3.push("0.749023 g"), n3.push("q"), n3.push("1 0 0 1 " + (N2.internal.getWidth(t3) / 2).toFixed(2) + " " + (N2.internal.getHeight(t3) / 2).toFixed(2) + " cm"), n3.push(i3 + " 0 m"), n3.push(i3 + " " + o3 + " " + o3 + " " + i3 + " 0 " + i3 + " c"), n3.push("-" + o3 + " " + i3 + " -" + i3 + " " + o3 + " -" + i3 + " 0 c"), n3.push("-" + i3 + " -" + o3 + " -" + o3 + " -" + i3 + " 0 -" + i3 + " c"), n3.push(o3 + " -" + i3 + " " + i3 + " -" + o3 + " " + i3 + " 0 c"), n3.push("f"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
          } }, Cross: { createAppearanceStream: function(t3) {
            var e3 = { D: { Off: N2.RadioButton.Cross.OffPushDown }, N: {} };
            return e3.N[t3] = N2.RadioButton.Cross.YesNormal, e3.D[t3] = N2.RadioButton.Cross.YesPushDown, e3;
          }, createMK: function() {
            return "<< /CA (8)>>";
          }, YesNormal: function(t3) {
            var e3 = h2(t3), n3 = [], r3 = N2.internal.calculateCross(t3);
            return n3.push("q"), n3.push("1 1 " + (N2.internal.getWidth(t3) - 2).toFixed(2) + " " + (N2.internal.getHeight(t3) - 2).toFixed(2) + " re"), n3.push("W"), n3.push("n"), n3.push(r3.x1.x.toFixed(2) + " " + r3.x1.y.toFixed(2) + " m"), n3.push(r3.x2.x.toFixed(2) + " " + r3.x2.y.toFixed(2) + " l"), n3.push(r3.x4.x.toFixed(2) + " " + r3.x4.y.toFixed(2) + " m"), n3.push(r3.x3.x.toFixed(2) + " " + r3.x3.y.toFixed(2) + " l"), n3.push("s"), n3.push("Q"), e3.stream = n3.join("\n"), e3;
          }, YesPushDown: function(t3) {
            var e3 = h2(t3), n3 = N2.internal.calculateCross(t3), r3 = [];
            return r3.push("0.749023 g"), r3.push("0 0 " + N2.internal.getWidth(t3).toFixed(2) + " " + N2.internal.getHeight(t3).toFixed(2) + " re"), r3.push("f"), r3.push("q"), r3.push("1 1 " + (N2.internal.getWidth(t3) - 2).toFixed(2) + " " + (N2.internal.getHeight(t3) - 2).toFixed(2) + " re"), r3.push("W"), r3.push("n"), r3.push(n3.x1.x.toFixed(2) + " " + n3.x1.y.toFixed(2) + " m"), r3.push(n3.x2.x.toFixed(2) + " " + n3.x2.y.toFixed(2) + " l"), r3.push(n3.x4.x.toFixed(2) + " " + n3.x4.y.toFixed(2) + " m"), r3.push(n3.x3.x.toFixed(2) + " " + n3.x3.y.toFixed(2) + " l"), r3.push("s"), r3.push("Q"), e3.stream = r3.join("\n"), e3;
          }, OffPushDown: function(t3) {
            var e3 = h2(t3), n3 = [];
            return n3.push("0.749023 g"), n3.push("0 0 " + N2.internal.getWidth(t3).toFixed(2) + " " + N2.internal.getHeight(t3).toFixed(2) + " re"), n3.push("f"), e3.stream = n3.join("\n"), e3;
          } } }, createDefaultAppearanceStream: function(t3) {
            return "/F1 0 Tf 0 g";
          } };
          N2.internal = { Bezier_C: 0.551915024494, calculateCross: function(t3) {
            var e3, n3, r3 = N2.internal.getWidth(t3), i3 = N2.internal.getHeight(t3), o3 = (n3 = i3) < (e3 = r3) ? n3 : e3;
            return { x1: { x: (r3 - o3) / 2, y: (i3 - o3) / 2 + o3 }, x2: { x: (r3 - o3) / 2 + o3, y: (i3 - o3) / 2 }, x3: { x: (r3 - o3) / 2, y: (i3 - o3) / 2 }, x4: { x: (r3 - o3) / 2 + o3, y: (i3 - o3) / 2 + o3 } };
          } }, N2.internal.getWidth = function(t3) {
            var e3 = 0;
            return "object" === (void 0 === t3 ? "undefined" : vt(t3)) && (e3 = s2(t3.Rect[2])), e3;
          }, N2.internal.getHeight = function(t3) {
            var e3 = 0;
            return "object" === (void 0 === t3 ? "undefined" : vt(t3)) && (e3 = s2(t3.Rect[3])), e3;
          }, n2.addField = function(t3) {
            return x2.call(this), t3 instanceof M2 ? this.addTextField.call(this, t3) : t3 instanceof F2 ? this.addChoiceField.call(this, t3) : t3 instanceof O2 ? this.addButton.call(this, t3) : t3 instanceof j2 ? g2.call(this, t3) : t3 && g2.call(this, t3), t3.page = l2.internal.getCurrentPageInfo().pageNumber, this;
          }, n2.addButton = function(t3) {
            x2.call(this);
            var e3 = t3 || new T2();
            e3.FT = "/Btn", e3.Ff = o2(e3.Ff, t3, l2.internal.getPDFVersion()), g2.call(this, e3);
          }, n2.addTextField = function(t3) {
            x2.call(this);
            var e3 = t3 || new T2();
            e3.FT = "/Tx", e3.Ff = o2(e3.Ff, t3, l2.internal.getPDFVersion()), g2.call(this, e3);
          }, n2.addChoiceField = function(t3) {
            x2.call(this);
            var e3 = t3 || new T2();
            e3.FT = "/Ch", e3.Ff = o2(e3.Ff, t3, l2.internal.getPDFVersion()), g2.call(this, e3);
          }, "object" == (void 0 === t2 ? "undefined" : vt(t2)) && (t2.ChoiceField = F2, t2.ListBox = P2, t2.ComboBox = E2, t2.EditBox = q2, t2.Button = O2, t2.PushButton = B2, t2.RadioButton = R2, t2.CheckBox = D2, t2.TextField = M2, t2.PasswordField = U2, t2.AcroForm = { Appearance: N2 }), n2.AcroFormChoiceField = F2, n2.AcroFormListBox = P2, n2.AcroFormComboBox = E2, n2.AcroFormEditBox = q2, n2.AcroFormButton = O2, n2.AcroFormPushButton = B2, n2.AcroFormRadioButton = R2, n2.AcroFormCheckBox = D2, n2.AcroFormTextField = M2, n2.AcroFormPasswordField = U2, n2.AcroForm = { ChoiceField: F2, ListBox: P2, ComboBox: E2, EditBox: q2, Button: O2, PushButton: B2, RadioButton: R2, CheckBox: D2, TextField: M2, PasswordField: U2 };
        }($.API, "undefined" != typeof window && window || "undefined" != typeof global && global), $.API.addHTML = function(t2, p2, g2, s2, m2) {
          if ("undefined" == typeof html2canvas && "undefined" == typeof rasterizeHTML)
            throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");
          "number" != typeof p2 && (s2 = p2, m2 = g2), "function" == typeof s2 && (m2 = s2, s2 = null), "function" != typeof m2 && (m2 = function() {
          });
          var e2 = this.internal, w2 = e2.scaleFactor, y2 = e2.pageSize.getWidth(), v2 = e2.pageSize.getHeight();
          if ((s2 = s2 || {}).onrendered = function(h2) {
            p2 = parseInt(p2) || 0, g2 = parseInt(g2) || 0;
            var t3 = s2.dim || {}, c2 = Object.assign({ top: 0, right: 0, bottom: 0, left: 0, useFor: "content" }, s2.margin), e3 = t3.h || Math.min(v2, h2.height / w2), l2 = t3.w || Math.min(y2, h2.width / w2) - p2, u2 = s2.format || "JPEG", f2 = s2.imageCompression || "SLOW";
            if (h2.height > v2 - c2.top - c2.bottom && s2.pagesplit) {
              var d2 = function(t4, e4, n4, r3, i3) {
                var o3 = document.createElement("canvas");
                o3.height = i3, o3.width = r3;
                var a2 = o3.getContext("2d");
                return a2.mozImageSmoothingEnabled = false, a2.webkitImageSmoothingEnabled = false, a2.msImageSmoothingEnabled = false, a2.imageSmoothingEnabled = false, a2.fillStyle = s2.backgroundColor || "#ffffff", a2.fillRect(0, 0, r3, i3), a2.drawImage(t4, e4, n4, r3, i3, 0, 0, r3, i3), o3;
              }, n3 = function() {
                for (var t4, e4, n4 = 0, r3 = 0, i3 = {}, o3 = false; ; ) {
                  var a2;
                  if (r3 = 0, i3.top = 0 !== n4 ? c2.top : g2, i3.left = 0 !== n4 ? c2.left : p2, o3 = (y2 - c2.left - c2.right) * w2 < h2.width, "content" === c2.useFor ? 0 === n4 ? (t4 = Math.min((y2 - c2.left) * w2, h2.width), e4 = Math.min((v2 - c2.top) * w2, h2.height - n4)) : (t4 = Math.min(y2 * w2, h2.width), e4 = Math.min(v2 * w2, h2.height - n4), i3.top = 0) : (t4 = Math.min((y2 - c2.left - c2.right) * w2, h2.width), e4 = Math.min((v2 - c2.bottom - c2.top) * w2, h2.height - n4)), o3)
                    for (; ; ) {
                      "content" === c2.useFor && (0 === r3 ? t4 = Math.min((y2 - c2.left) * w2, h2.width) : (t4 = Math.min(y2 * w2, h2.width - r3), i3.left = 0));
                      var s3 = [a2 = d2(h2, r3, n4, t4, e4), i3.left, i3.top, a2.width / w2, a2.height / w2, u2, null, f2];
                      if (this.addImage.apply(this, s3), (r3 += t4) >= h2.width)
                        break;
                      this.addPage();
                    }
                  else
                    s3 = [a2 = d2(h2, 0, n4, t4, e4), i3.left, i3.top, a2.width / w2, a2.height / w2, u2, null, f2], this.addImage.apply(this, s3);
                  if ((n4 += e4) >= h2.height)
                    break;
                  this.addPage();
                }
                m2(l2, n4, null, s3);
              }.bind(this);
              if ("CANVAS" === h2.nodeName) {
                var r2 = new Image();
                r2.onload = n3, r2.src = h2.toDataURL("image/png"), h2 = r2;
              } else
                n3();
            } else {
              var i2 = Math.random().toString(35), o2 = [h2, p2, g2, l2, e3, u2, i2, f2];
              this.addImage.apply(this, o2), m2(l2, e3, i2, o2);
            }
          }.bind(this), "undefined" != typeof html2canvas && !s2.rstz)
            return html2canvas(t2, s2);
          if ("undefined" != typeof rasterizeHTML) {
            var n2 = "drawDocument";
            return "string" == typeof t2 && (n2 = /^http/.test(t2) ? "drawURL" : "drawHTML"), s2.width = s2.width || y2 * w2, rasterizeHTML[n2](t2, void 0, s2).then(function(t3) {
              s2.onrendered(t3.image);
            }, function(t3) {
              m2(null, t3);
            });
          }
          return null;
        }, /** @preserve
           * jsPDF addImage plugin
           * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
           *               2013 Chris Dowling, https://github.com/gingerchris
           *               2013 Trinh Ho, https://github.com/ineedfat
           *               2013 Edwin Alejandro Perez, https://github.com/eaparango
           *               2013 Norah Smith, https://github.com/burnburnrocket
           *               2014 Diego Casorran, https://github.com/diegocr
           *               2014 James Robb, https://github.com/jamesbrobb
           *
           * 
           */
        function(b2) {
          var x2 = "addImage_", h2 = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] };
          b2.getImageFileTypeByImageData = function(t2, e2) {
            var n3, r2;
            e2 = e2 || "UNKNOWN";
            var i2, o2, a2, s2 = "UNKNOWN";
            for (a2 in h2)
              for (i2 = h2[a2], n3 = 0; n3 < i2.length; n3 += 1) {
                for (o2 = true, r2 = 0; r2 < i2[n3].length; r2 += 1)
                  if (void 0 !== i2[n3][r2] && i2[n3][r2] !== t2.charCodeAt(r2)) {
                    o2 = false;
                    break;
                  }
                if (true === o2) {
                  s2 = a2;
                  break;
                }
              }
            return "UNKOWN" === s2 && "UNKNOWN" !== e2 && (console.warn('FileType of Image not recognized. Processing image as "' + e2 + '".'), s2 = e2), s2;
          };
          var n2 = function t2(e2) {
            var n3 = this.internal.newObject(), r2 = this.internal.write, i2 = this.internal.putStream;
            if (e2.n = n3, r2("<</Type /XObject"), r2("/Subtype /Image"), r2("/Width " + e2.w), r2("/Height " + e2.h), e2.cs === this.color_spaces.INDEXED ? r2("/ColorSpace [/Indexed /DeviceRGB " + (e2.pal.length / 3 - 1) + " " + ("smask" in e2 ? n3 + 2 : n3 + 1) + " 0 R]") : (r2("/ColorSpace /" + e2.cs), e2.cs === this.color_spaces.DEVICE_CMYK && r2("/Decode [1 0 1 0 1 0 1 0]")), r2("/BitsPerComponent " + e2.bpc), "f" in e2 && r2("/Filter /" + e2.f), "dp" in e2 && r2("/DecodeParms <<" + e2.dp + ">>"), "trns" in e2 && e2.trns.constructor == Array) {
              for (var o2 = "", a2 = 0, s2 = e2.trns.length; a2 < s2; a2++)
                o2 += e2.trns[a2] + " " + e2.trns[a2] + " ";
              r2("/Mask [" + o2 + "]");
            }
            if ("smask" in e2 && r2("/SMask " + (n3 + 1) + " 0 R"), r2("/Length " + e2.data.length + ">>"), i2(e2.data), r2("endobj"), "smask" in e2) {
              var h3 = "/Predictor " + e2.p + " /Colors 1 /BitsPerComponent " + e2.bpc + " /Columns " + e2.w, c3 = { w: e2.w, h: e2.h, cs: "DeviceGray", bpc: e2.bpc, dp: h3, data: e2.smask };
              "f" in e2 && (c3.f = e2.f), t2.call(this, c3);
            }
            e2.cs === this.color_spaces.INDEXED && (this.internal.newObject(), r2("<< /Length " + e2.pal.length + ">>"), i2(this.arrayBufferToBinaryString(new Uint8Array(e2.pal))), r2("endobj"));
          }, S2 = function() {
            var t2 = this.internal.collections[x2 + "images"];
            for (var e2 in t2)
              n2.call(this, t2[e2]);
          }, k2 = function() {
            var t2, e2 = this.internal.collections[x2 + "images"], n3 = this.internal.write;
            for (var r2 in e2)
              n3("/I" + (t2 = e2[r2]).i, t2.n, "0", "R");
          }, _2 = function(t2) {
            return "function" == typeof b2["process" + t2.toUpperCase()];
          }, A2 = function(t2) {
            return "object" === (void 0 === t2 ? "undefined" : vt(t2)) && 1 === t2.nodeType;
          }, I2 = function(t2, e2) {
            if ("IMG" === t2.nodeName && t2.hasAttribute("src")) {
              var n3 = "" + t2.getAttribute("src");
              if (0 === n3.indexOf("data:image/"))
                return n3;
              !e2 && /\.png(?:[?#].*)?$/i.test(n3) && (e2 = "png");
            }
            if ("CANVAS" === t2.nodeName)
              var r2 = t2;
            else {
              (r2 = document.createElement("canvas")).width = t2.clientWidth || t2.width, r2.height = t2.clientHeight || t2.height;
              var i2 = r2.getContext("2d");
              if (!i2)
                throw "addImage requires canvas to be supported by browser.";
              i2.drawImage(t2, 0, 0, r2.width, r2.height);
            }
            return r2.toDataURL("png" == ("" + e2).toLowerCase() ? "image/png" : "image/jpeg");
          }, C2 = function(t2, e2) {
            var n3;
            if (e2) {
              for (var r2 in e2)
                if (t2 === e2[r2].alias) {
                  n3 = e2[r2];
                  break;
                }
            }
            return n3;
          };
          b2.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" }, b2.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" }, b2.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, b2.sHashCode = function(t2) {
            return t2 = t2 || "", Array.prototype.reduce && t2.split("").reduce(function(t3, e2) {
              return (t3 = (t3 << 5) - t3 + e2.charCodeAt(0)) & t3;
            }, 0);
          }, b2.isString = function(t2) {
            return "string" == typeof t2;
          }, b2.validateStringAsBase64 = function(t2) {
            var e2 = true;
            return (t2 = t2 || "").length % 4 != 0 && (e2 = false), false === /[A-Za-z0-9\/]+/.test(t2.substr(0, t2.length - 2)) && (e2 = false), false === /[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==/.test(t2.substr(-2)) && (e2 = false), e2;
          }, b2.extractInfoFromBase64DataURI = function(t2) {
            return /^data:([\w]+?\/([\w]+?));base64,(.+)$/g.exec(t2);
          }, b2.supportsArrayBuffer = function() {
            return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
          }, b2.isArrayBuffer = function(t2) {
            return !!this.supportsArrayBuffer() && t2 instanceof ArrayBuffer;
          }, b2.isArrayBufferView = function(t2) {
            return !!this.supportsArrayBuffer() && ("undefined" != typeof Uint32Array && (t2 instanceof Int8Array || t2 instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t2 instanceof Uint8ClampedArray || t2 instanceof Int16Array || t2 instanceof Uint16Array || t2 instanceof Int32Array || t2 instanceof Uint32Array || t2 instanceof Float32Array || t2 instanceof Float64Array));
          }, b2.binaryStringToUint8Array = function(t2) {
            for (var e2 = t2.length, n3 = new Uint8Array(e2), r2 = 0; r2 < e2; r2++)
              n3[r2] = t2.charCodeAt(r2);
            return n3;
          }, b2.arrayBufferToBinaryString = function(t2) {
            if ("function" == typeof atob)
              return atob(this.arrayBufferToBase64(t2));
            if ("function" == typeof TextDecoder) {
              var e2 = new TextDecoder("ascii");
              if ("ascii" === e2.encoding)
                return e2.decode(t2);
            }
            for (var n3 = this.isArrayBuffer(t2) ? t2 : new Uint8Array(t2), r2 = 20480, i2 = "", o2 = Math.ceil(n3.byteLength / r2), a2 = 0; a2 < o2; a2++)
              i2 += String.fromCharCode.apply(null, n3.slice(a2 * r2, a2 * r2 + r2));
            return i2;
          }, b2.arrayBufferToBase64 = function(t2) {
            for (var e2, n3 = "", r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i2 = new Uint8Array(t2), o2 = i2.byteLength, a2 = o2 % 3, s2 = o2 - a2, h3 = 0; h3 < s2; h3 += 3)
              n3 += r2[(16515072 & (e2 = i2[h3] << 16 | i2[h3 + 1] << 8 | i2[h3 + 2])) >> 18] + r2[(258048 & e2) >> 12] + r2[(4032 & e2) >> 6] + r2[63 & e2];
            return 1 == a2 ? n3 += r2[(252 & (e2 = i2[s2])) >> 2] + r2[(3 & e2) << 4] + "==" : 2 == a2 && (n3 += r2[(64512 & (e2 = i2[s2] << 8 | i2[s2 + 1])) >> 10] + r2[(1008 & e2) >> 4] + r2[(15 & e2) << 2] + "="), n3;
          }, b2.createImageInfo = function(t2, e2, n3, r2, i2, o2, a2, s2, h3, c3, l2, u2, f2) {
            var d2 = { alias: s2, w: e2, h: n3, cs: r2, bpc: i2, i: a2, data: t2 };
            return o2 && (d2.f = o2), h3 && (d2.dp = h3), c3 && (d2.trns = c3), l2 && (d2.pal = l2), u2 && (d2.smask = u2), f2 && (d2.p = f2), d2;
          }, b2.addImage = function(t2, e2, n3, r2, i2, o2, a2, s2, h3) {
            var c3 = "";
            if ("string" != typeof e2) {
              var l2 = o2;
              o2 = i2, i2 = r2, r2 = n3, n3 = e2, e2 = l2;
            }
            if ("object" === (void 0 === t2 ? "undefined" : vt(t2)) && !A2(t2) && "imageData" in t2) {
              var u2 = t2;
              t2 = u2.imageData, e2 = u2.format || e2, n3 = u2.x || n3 || 0, r2 = u2.y || r2 || 0, i2 = u2.w || i2, o2 = u2.h || o2, a2 = u2.alias || a2, s2 = u2.compression || s2, h3 = u2.rotation || u2.angle || h3;
            }
            if (isNaN(n3) || isNaN(r2))
              throw console.error("jsPDF.addImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addImage");
            var f2, d2, p2, g2, m2, w2, y2, v2 = function() {
              var t3 = this.internal.collections[x2 + "images"];
              return t3 || (this.internal.collections[x2 + "images"] = t3 = {}, this.internal.events.subscribe("putResources", S2), this.internal.events.subscribe("putXobjectDict", k2)), t3;
            }.call(this);
            if (!(f2 = C2(t2, v2)) && (A2(t2) && (t2 = I2(t2, e2)), (null == (y2 = a2) || 0 === y2.length) && (a2 = "string" == typeof (w2 = t2) && b2.sHashCode(w2)), !(f2 = C2(a2, v2)))) {
              if (this.isString(t2) && ("" !== (c3 = this.convertStringToImageData(t2)) ? t2 = c3 : void 0 !== (c3 = this.loadImageFile(t2)) && (t2 = c3)), e2 = this.getImageFileTypeByImageData(t2, e2), !_2(e2))
                throw new Error("addImage does not support files of type '" + e2 + "', please ensure that a plugin for '" + e2 + "' support is added.");
              if (this.supportsArrayBuffer() && (t2 instanceof Uint8Array || (d2 = t2, t2 = this.binaryStringToUint8Array(t2))), !(f2 = this["process" + e2.toUpperCase()](t2, (m2 = 0, (g2 = v2) && (m2 = Object.keys ? Object.keys(g2).length : function(t3) {
                var e3 = 0;
                for (var n4 in t3)
                  t3.hasOwnProperty(n4) && e3++;
                return e3;
              }(g2)), m2), a2, ((p2 = s2) && "string" == typeof p2 && (p2 = p2.toUpperCase()), p2 in b2.image_compression ? p2 : b2.image_compression.NONE), d2)))
                throw new Error("An unkwown error occurred whilst processing the image");
            }
            return function(t3, e3, n4, r3, i3, o3, a3, s3) {
              var h4 = function(t4, e4, n5) {
                return t4 || e4 || (e4 = t4 = -96), t4 < 0 && (t4 = -1 * n5.w * 72 / t4 / this.internal.scaleFactor), e4 < 0 && (e4 = -1 * n5.h * 72 / e4 / this.internal.scaleFactor), 0 === t4 && (t4 = e4 * n5.w / n5.h), 0 === e4 && (e4 = t4 * n5.h / n5.w), [t4, e4];
              }.call(this, n4, r3, i3), c4 = this.internal.getCoordinateString, l3 = this.internal.getVerticalCoordinateString;
              if (n4 = h4[0], r3 = h4[1], a3[o3] = i3, s3) {
                s3 *= Math.PI / 180;
                var u3 = Math.cos(s3), f3 = Math.sin(s3), d3 = function(t4) {
                  return t4.toFixed(4);
                }, p3 = [d3(u3), d3(f3), d3(-1 * f3), d3(u3), 0, 0, "cm"];
              }
              this.internal.write("q"), s3 ? (this.internal.write([1, "0", "0", 1, c4(t3), l3(e3 + r3), "cm"].join(" ")), this.internal.write(p3.join(" ")), this.internal.write([c4(n4), "0", "0", c4(r3), "0", "0", "cm"].join(" "))) : this.internal.write([c4(n4), "0", "0", c4(r3), c4(t3), l3(e3 + r3), "cm"].join(" ")), this.internal.write("/I" + i3.i + " Do"), this.internal.write("Q");
            }.call(this, n3, r2, i2, o2, f2, f2.i, v2, h3), this;
          }, b2.convertStringToImageData = function(t2) {
            var e2, n3 = "";
            this.isString(t2) && (null !== (e2 = this.extractInfoFromBase64DataURI(t2)) ? b2.validateStringAsBase64(e2[3]) && (n3 = atob(e2[3])) : b2.validateStringAsBase64(t2) && (n3 = atob(t2)));
            return n3;
          };
          var c2 = function(t2, e2) {
            return t2.subarray(e2, e2 + 5);
          };
          b2.processJPEG = function(t2, e2, n3, r2, i2, o2) {
            var a2, s2 = this.decode.DCT_DECODE;
            if (!this.isString(t2) && !this.isArrayBuffer(t2) && !this.isArrayBufferView(t2))
              return null;
            if (this.isString(t2) && (a2 = function(t3) {
              var e3;
              if (255 === !t3.charCodeAt(0) || 216 === !t3.charCodeAt(1) || 255 === !t3.charCodeAt(2) || 224 === !t3.charCodeAt(3) || !t3.charCodeAt(6) === "J".charCodeAt(0) || !t3.charCodeAt(7) === "F".charCodeAt(0) || !t3.charCodeAt(8) === "I".charCodeAt(0) || !t3.charCodeAt(9) === "F".charCodeAt(0) || 0 === !t3.charCodeAt(10))
                throw new Error("getJpegSize requires a binary string jpeg file");
              for (var n4 = 256 * t3.charCodeAt(4) + t3.charCodeAt(5), r3 = 4, i3 = t3.length; r3 < i3; ) {
                if (r3 += n4, 255 !== t3.charCodeAt(r3))
                  throw new Error("getJpegSize could not find the size of the image");
                if (192 === t3.charCodeAt(r3 + 1) || 193 === t3.charCodeAt(r3 + 1) || 194 === t3.charCodeAt(r3 + 1) || 195 === t3.charCodeAt(r3 + 1) || 196 === t3.charCodeAt(r3 + 1) || 197 === t3.charCodeAt(r3 + 1) || 198 === t3.charCodeAt(r3 + 1) || 199 === t3.charCodeAt(r3 + 1))
                  return e3 = 256 * t3.charCodeAt(r3 + 5) + t3.charCodeAt(r3 + 6), [256 * t3.charCodeAt(r3 + 7) + t3.charCodeAt(r3 + 8), e3, t3.charCodeAt(r3 + 9)];
                r3 += 2, n4 = 256 * t3.charCodeAt(r3) + t3.charCodeAt(r3 + 1);
              }
            }(t2)), this.isArrayBuffer(t2) && (t2 = new Uint8Array(t2)), this.isArrayBufferView(t2) && (a2 = function(t3) {
              if (65496 != (t3[0] << 8 | t3[1]))
                throw new Error("Supplied data is not a JPEG");
              for (var e3, n4 = t3.length, r3 = (t3[4] << 8) + t3[5], i3 = 4; i3 < n4; ) {
                if (r3 = ((e3 = c2(t3, i3 += r3))[2] << 8) + e3[3], (192 === e3[1] || 194 === e3[1]) && 255 === e3[0] && 7 < r3)
                  return { width: ((e3 = c2(t3, i3 + 5))[2] << 8) + e3[3], height: (e3[0] << 8) + e3[1], numcomponents: e3[4] };
                i3 += 2;
              }
              throw new Error("getJpegSizeFromBytes could not find the size of the image");
            }(t2), t2 = i2 || this.arrayBufferToBinaryString(t2)), void 0 === o2)
              switch (a2.numcomponents) {
                case 1:
                  o2 = this.color_spaces.DEVICE_GRAY;
                  break;
                case 4:
                  o2 = this.color_spaces.DEVICE_CMYK;
                  break;
                default:
                case 3:
                  o2 = this.color_spaces.DEVICE_RGB;
              }
            return this.createImageInfo(t2, a2.width, a2.height, o2, 8, s2, e2, n3);
          }, b2.processJPG = function() {
            return this.processJPEG.apply(this, arguments);
          }, b2.loadImageFile = function(t2, e2, n3) {
            e2 = e2 || true, n3 = n3 || function() {
            };
            Object.prototype.toString.call("undefined" != typeof process ? process : 0);
            if (void 0 !== ("undefined" == typeof window ? "undefined" : vt(window)) && "object" === ("undefined" == typeof location ? "undefined" : vt(location)) && "http" === location.protocol.substr(0, 4))
              return function(t3, e3, n4) {
                var r2 = new XMLHttpRequest(), i2 = [], o2 = 0, a2 = function(t4) {
                  var e4 = t4.length, n5 = String.fromCharCode;
                  for (o2 = 0; o2 < e4; o2 += 1)
                    i2.push(n5(255 & t4.charCodeAt(o2)));
                  return i2.join("");
                };
                if (r2.open("GET", t3, !e3), r2.overrideMimeType("text/plain; charset=x-user-defined"), false === e3 && (r2.onload = function() {
                  return a2(this.responseText);
                }), r2.send(null), 200 === r2.status)
                  return e3 ? a2(r2.responseText) : void 0;
                console.warn('Unable to load file "' + t3 + '"');
              }(t2, e2);
          }, b2.getImageProperties = function(t2) {
            var e2, n3, r2 = "";
            if (A2(t2) && (t2 = I2(t2)), this.isString(t2) && ("" !== (r2 = this.convertStringToImageData(t2)) ? t2 = r2 : void 0 !== (r2 = this.loadImageFile(t2)) && (t2 = r2)), n3 = this.getImageFileTypeByImageData(t2), !_2(n3))
              throw new Error("addImage does not support files of type '" + n3 + "', please ensure that a plugin for '" + n3 + "' support is added.");
            if (this.supportsArrayBuffer() && (t2 instanceof Uint8Array || (t2 = this.binaryStringToUint8Array(t2))), !(e2 = this["process" + n3.toUpperCase()](t2)))
              throw new Error("An unkwown error occurred whilst processing the image");
            return { fileType: n3, width: e2.w, height: e2.h, colorSpace: e2.cs, compressionMode: e2.f, bitsPerComponent: e2.bpc };
          };
        }($.API), /**
           * jsPDF Annotations PlugIn
           * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
           *
           * Licensed under the MIT License.
           * http://opensource.org/licenses/mit-license
           */
        t = $.API, y = { annotations: [], f2: function(t2) {
          return t2.toFixed(2);
        }, notEmpty: function(t2) {
          if (void 0 !== t2 && "" != t2)
            return true;
        } }, $.API.annotationPlugin = y, $.API.events.push(["addPage", function(t2) {
          this.annotationPlugin.annotations[t2.pageNumber] = [];
        }]), t.events.push(["putPage", function(t2) {
          for (var e2 = this.annotationPlugin.annotations[t2.pageNumber], n2 = false, r2 = 0; r2 < e2.length && !n2; r2++)
            switch ((h2 = e2[r2]).type) {
              case "link":
                if (y.notEmpty(h2.options.url) || y.notEmpty(h2.options.pageNumber)) {
                  n2 = true;
                  break;
                }
              case "reference":
              case "text":
              case "freetext":
                n2 = true;
            }
          if (0 != n2) {
            this.internal.write("/Annots [");
            var i2 = this.annotationPlugin.f2, o2 = this.internal.scaleFactor, a2 = this.internal.pageSize.getHeight(), s2 = this.internal.getPageInfo(t2.pageNumber);
            for (r2 = 0; r2 < e2.length; r2++) {
              var h2;
              switch ((h2 = e2[r2]).type) {
                case "reference":
                  this.internal.write(" " + h2.object.objId + " 0 R ");
                  break;
                case "text":
                  var c2 = this.internal.newAdditionalObject(), l2 = this.internal.newAdditionalObject(), u2 = h2.title || "Note";
                  m2 = "<</Type /Annot /Subtype /Text " + (d2 = "/Rect [" + i2(h2.bounds.x * o2) + " " + i2(a2 - (h2.bounds.y + h2.bounds.h) * o2) + " " + i2((h2.bounds.x + h2.bounds.w) * o2) + " " + i2((a2 - h2.bounds.y) * o2) + "] ") + "/Contents (" + h2.contents + ")", m2 += " /Popup " + l2.objId + " 0 R", m2 += " /P " + s2.objId + " 0 R", m2 += " /T (" + u2 + ") >>", c2.content = m2;
                  var f2 = c2.objId + " 0 R";
                  m2 = "<</Type /Annot /Subtype /Popup " + (d2 = "/Rect [" + i2((h2.bounds.x + 30) * o2) + " " + i2(a2 - (h2.bounds.y + h2.bounds.h) * o2) + " " + i2((h2.bounds.x + h2.bounds.w + 30) * o2) + " " + i2((a2 - h2.bounds.y) * o2) + "] ") + " /Parent " + f2, h2.open && (m2 += " /Open true"), m2 += " >>", l2.content = m2, this.internal.write(c2.objId, "0 R", l2.objId, "0 R");
                  break;
                case "freetext":
                  var d2 = "/Rect [" + i2(h2.bounds.x * o2) + " " + i2((a2 - h2.bounds.y) * o2) + " " + i2(h2.bounds.x + h2.bounds.w * o2) + " " + i2(a2 - (h2.bounds.y + h2.bounds.h) * o2) + "] ", p2 = h2.color || "#000000";
                  m2 = "<</Type /Annot /Subtype /FreeText " + d2 + "/Contents (" + h2.contents + ")", m2 += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + p2 + ")", m2 += " /Border [0 0 0]", m2 += " >>", this.internal.write(m2);
                  break;
                case "link":
                  if (h2.options.name) {
                    var g2 = this.annotations._nameMap[h2.options.name];
                    h2.options.pageNumber = g2.page, h2.options.top = g2.y;
                  } else
                    h2.options.top || (h2.options.top = 0);
                  d2 = "/Rect [" + i2(h2.x * o2) + " " + i2((a2 - h2.y) * o2) + " " + i2((h2.x + h2.w) * o2) + " " + i2((a2 - (h2.y + h2.h)) * o2) + "] ";
                  var m2 = "";
                  if (h2.options.url)
                    m2 = "<</Type /Annot /Subtype /Link " + d2 + "/Border [0 0 0] /A <</S /URI /URI (" + h2.options.url + ") >>";
                  else if (h2.options.pageNumber)
                    switch (m2 = "<</Type /Annot /Subtype /Link " + d2 + "/Border [0 0 0] /Dest [" + (t2 = this.internal.getPageInfo(h2.options.pageNumber)).objId + " 0 R", h2.options.magFactor = h2.options.magFactor || "XYZ", h2.options.magFactor) {
                      case "Fit":
                        m2 += " /Fit]";
                        break;
                      case "FitH":
                        m2 += " /FitH " + h2.options.top + "]";
                        break;
                      case "FitV":
                        h2.options.left = h2.options.left || 0, m2 += " /FitV " + h2.options.left + "]";
                        break;
                      case "XYZ":
                      default:
                        var w2 = i2((a2 - h2.options.top) * o2);
                        h2.options.left = h2.options.left || 0, void 0 === h2.options.zoom && (h2.options.zoom = 0), m2 += " /XYZ " + h2.options.left + " " + w2 + " " + h2.options.zoom + "]";
                    }
                  "" != m2 && (m2 += " >>", this.internal.write(m2));
              }
            }
            this.internal.write("]");
          }
        }]), t.createAnnotation = function(t2) {
          switch (t2.type) {
            case "link":
              this.link(t2.bounds.x, t2.bounds.y, t2.bounds.w, t2.bounds.h, t2);
              break;
            case "text":
            case "freetext":
              this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t2);
          }
        }, t.link = function(t2, e2, n2, r2, i2) {
          this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({ x: t2, y: e2, w: n2, h: r2, options: i2, type: "link" });
        }, t.textWithLink = function(t2, e2, n2, r2) {
          var i2 = this.getTextWidth(t2), o2 = this.internal.getLineHeight() / this.internal.scaleFactor;
          return this.text(t2, e2, n2), n2 += 0.2 * o2, this.link(e2, n2 - o2, i2, o2, r2), i2;
        }, t.getTextWidth = function(t2) {
          var e2 = this.internal.getFontSize();
          return this.getStringUnitWidth(t2) * e2 / this.internal.scaleFactor;
        }, t.getLineHeight = function() {
          return this.internal.getLineHeight();
        }, function(t2) {
          var a2 = Object.keys({ ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", fa: "Persian", "fa-IR": "Persian/Iran", ur: "Urdu" }), u2 = { 1569: [65152], 1570: [65153, 65154, 65153, 65154], 1571: [65155, 65156, 65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160, 65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166, 65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194, 65193], 1584: [65195, 65196, 65195], 1585: [65197, 65198, 65197], 1586: [65199, 65200, 65199], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262, 65261], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395, 64394], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, f2 = { 1570: [65269, 65270, 65269, 65270], 1571: [65271, 65272, 65271, 65272], 1573: [65273, 65274, 65273, 65274], 1575: [65275, 65276, 65275, 65276] }, d2 = { 1570: [65153, 65154, 65153, 65154], 1571: [65155, 65156, 65155, 65156], 1573: [65159, 65160, 65159, 65160], 1575: [65165, 65166, 65165, 65166] }, p2 = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, e2 = [1570, 1571, 1573, 1575], n2 = [1569, 1570, 1571, 1572, 1573, 1575, 1577, 1583, 1584, 1585, 1586, 1608, 1688], o2 = 0, s2 = 1, h2 = 2, c2 = 3;
          function g2(t3) {
            return void 0 !== t3 && void 0 !== u2[t3.charCodeAt(0)];
          }
          function l2(t3) {
            return void 0 !== t3 && 0 <= n2.indexOf(t3.charCodeAt(0));
          }
          function m2(t3) {
            return void 0 !== t3 && 0 <= e2.indexOf(t3.charCodeAt(0));
          }
          function w2(t3) {
            return g2(t3) && 2 <= u2[t3.charCodeAt(0)].length;
          }
          function y2(t3, e3, n3, r2) {
            return g2(t3) ? (r2 = r2 || {}, u2 = Object.assign(u2, r2), !w2(t3) || !g2(e3) && !g2(n3) || !g2(n3) && l2(e3) || l2(t3) && !g2(e3) || l2(t3) && m2(e3) || l2(t3) && l2(e3) ? (u2 = Object.assign(u2, d2), o2) : g2(i2 = t3) && 4 == u2[i2.charCodeAt(0)].length && g2(e3) && !l2(e3) && g2(n3) && w2(n3) ? (u2 = Object.assign(u2, d2), c2) : l2(t3) || !g2(n3) ? (u2 = Object.assign(u2, d2), s2) : (u2 = Object.assign(u2, d2), h2)) : -1;
            var i2;
          }
          var v2 = t2.processArabic = function(t3, e3) {
            t3 = t3 || "", e3 = e3 || false;
            var n3, r2, i2, o3 = "", a3 = 0, s3 = 0, h3 = "", c3 = "", l3 = "";
            for (a3 = 0; a3 < t3.length; a3 += 1)
              h3 = t3[a3], c3 = t3[a3 - 1], l3 = t3[a3 + 1], g2(h3) ? void 0 !== c3 && 1604 === c3.charCodeAt(0) && m2(h3) ? (s3 = y2(h3, t3[a3 - 2], t3[a3 + 1], f2), n3 = String.fromCharCode(f2[h3.charCodeAt(0)][s3]), o3 = o3.substr(0, o3.length - 1) + n3) : void 0 !== c3 && 1617 === c3.charCodeAt(0) && (void 0 !== (r2 = h3) && void 0 !== p2[r2.charCodeAt(0)]) ? (s3 = y2(h3, t3[a3 - 2], t3[a3 + 1], d2), n3 = String.fromCharCode(p2[h3.charCodeAt(0)][s3]), o3 = o3.substr(0, o3.length - 1) + n3) : (s3 = y2(h3, c3, l3, d2), o3 += String.fromCharCode(u2[h3.charCodeAt(0)][s3])) : o3 += e3 ? { "(": ")", ")": "(" }[i2 = h3] || i2 : h3;
            return e3 ? o3.split("").reverse().join("") : o3;
          };
          t2.events.push(["preProcessText", function(t3) {
            var e3 = t3.text, n3 = (t3.x, t3.y, t3.options || {}), r2 = (t3.mutex, n3.lang), i2 = [];
            if (0 <= a2.indexOf(r2)) {
              if ("[object Array]" === Object.prototype.toString.call(e3)) {
                var o3 = 0;
                for (i2 = [], o3 = 0; o3 < e3.length; o3 += 1)
                  "[object Array]" === Object.prototype.toString.call(e3[o3]) ? i2.push([v2(e3[o3][0], true), e3[o3][1], e3[o3][2]]) : i2.push([v2(e3[o3], true)]);
                t3.text = i2;
              } else
                t3.text = v2(e3, true);
              void 0 === n3.charSpace && (t3.options.charSpace = 0), true === n3.R2L && (t3.options.R2L = false);
            }
          }]);
        }($.API), $.API.autoPrint = function(t2) {
          var e2;
          switch ((t2 = t2 || {}).variant = t2.variant || "non-conform", t2.variant) {
            case "javascript":
              this.addJS("print({});");
              break;
            case "non-conform":
            default:
              this.internal.events.subscribe("postPutResources", function() {
                e2 = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
              }), this.internal.events.subscribe("putCatalog", function() {
                this.internal.out("/OpenAction " + e2 + " 0 R");
              });
          }
          return this;
        }, /**
           * jsPDF Canvas PlugIn
           * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
           *
           * Licensed under the MIT License.
           * http://opensource.org/licenses/mit-license
           */
        (e = $.API).events.push(["initialized", function() {
          this.canvas.pdf = this;
        }]), e.canvas = { getContext: function(t2) {
          return (this.pdf.context2d._canvas = this).pdf.context2d;
        }, childNodes: [] }, Object.defineProperty(e.canvas, "width", { get: function() {
          return this._width;
        }, set: function(t2) {
          this._width = t2, this.getContext("2d").pageWrapX = t2 + 1;
        } }), Object.defineProperty(e.canvas, "height", { get: function() {
          return this._height;
        }, set: function(t2) {
          this._height = t2, this.getContext("2d").pageWrapY = t2 + 1;
        } }), /** ====================================================================
           * jsPDF Cell plugin
           * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
           *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
           *               2013 Lee Driscoll, https://github.com/lsdriscoll
           *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
           *               2014 James Hall, james@parall.ax
           *               2014 Diego Casorran, https://github.com/diegocr
           *
           * 
           * ====================================================================
           */
        I = $.API, C = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, T = 1, d = function(t2, e2, n2, r2, i2) {
          C = { x: t2, y: e2, w: n2, h: r2, ln: i2 };
        }, p = function() {
          return C;
        }, F = { left: 0, top: 0, bottom: 0 }, I.setHeaderFunction = function(t2) {
          h = t2;
        }, I.getTextDimensions = function(e2) {
          i = this.internal.getFont().fontName, o = this.table_font_size || this.internal.getFontSize(), a = this.internal.getFont().fontStyle;
          var t2, n2, r2 = 19.049976 / 25.4;
          (n2 = document.createElement("font")).id = "jsPDFCell";
          try {
            n2.style.fontStyle = a;
          } catch (t3) {
            n2.style.fontWeight = a;
          }
          n2.style.fontSize = o + "pt", n2.style.fontFamily = i;
          try {
            n2.textContent = e2;
          } catch (t3) {
            n2.innerText = e2;
          }
          return document.body.appendChild(n2), t2 = { w: (n2.offsetWidth + 1) * r2, h: (n2.offsetHeight + 1) * r2 }, document.body.removeChild(n2), t2;
        }, I.cellAddPage = function() {
          var t2 = this.margins || F;
          this.addPage(), d(t2.left, t2.top, void 0, void 0), T += 1;
        }, I.cellInitialize = function() {
          C = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, T = 1;
        }, I.cell = function(t2, e2, n2, r2, i2, o2, a2) {
          var s2 = p(), h2 = false;
          if (void 0 !== s2.ln)
            if (s2.ln === o2)
              t2 = s2.x + s2.w, e2 = s2.y;
            else {
              var c2 = this.margins || F;
              s2.y + s2.h + r2 + 13 >= this.internal.pageSize.getHeight() - c2.bottom && (this.cellAddPage(), h2 = true, this.printHeaders && this.tableHeaderRow && this.printHeaderRow(o2, true)), e2 = p().y + p().h, h2 && (e2 = 23);
            }
          if (void 0 !== i2[0])
            if (this.printingHeaderRow ? this.rect(t2, e2, n2, r2, "FD") : this.rect(t2, e2, n2, r2), "right" === a2) {
              i2 instanceof Array || (i2 = [i2]);
              for (var l2 = 0; l2 < i2.length; l2++) {
                var u2 = i2[l2], f2 = this.getStringUnitWidth(u2) * this.internal.getFontSize();
                this.text(u2, t2 + n2 - f2 - 3, e2 + this.internal.getLineHeight() * (l2 + 1));
              }
            } else
              this.text(i2, t2 + 3, e2 + this.internal.getLineHeight());
          return d(t2, e2, n2, r2, o2), this;
        }, I.arrayMax = function(t2, e2) {
          var n2, r2, i2, o2 = t2[0];
          for (n2 = 0, r2 = t2.length; n2 < r2; n2 += 1)
            i2 = t2[n2], e2 ? -1 === e2(o2, i2) && (o2 = i2) : o2 < i2 && (o2 = i2);
          return o2;
        }, I.table = function(t2, e2, n2, r2, i2) {
          if (!n2)
            throw "No data for PDF table";
          var o2, a2, s2, h2, c2, l2, u2, f2, d2, p2, g2 = [], m2 = [], w2 = {}, y2 = {}, v2 = [], b2 = [], x2 = false, S2 = true, k2 = 12, _2 = F;
          if (_2.width = this.internal.pageSize.getWidth(), i2 && (true === i2.autoSize && (x2 = true), false === i2.printHeaders && (S2 = false), i2.fontSize && (k2 = i2.fontSize), i2.css && void 0 !== i2.css["font-size"] && (k2 = 16 * i2.css["font-size"]), i2.margins && (_2 = i2.margins)), this.lnMod = 0, C = { x: void 0, y: void 0, w: void 0, h: void 0, ln: void 0 }, T = 1, this.printHeaders = S2, this.margins = _2, this.setFontSize(k2), this.table_font_size = k2, null == r2)
            g2 = Object.keys(n2[0]);
          else if (r2[0] && "string" != typeof r2[0])
            for (a2 = 0, s2 = r2.length; a2 < s2; a2 += 1)
              o2 = r2[a2], g2.push(o2.name), m2.push(o2.prompt), y2[o2.name] = o2.width * (19.049976 / 25.4);
          else
            g2 = r2;
          if (x2)
            for (p2 = function(t3) {
              return t3[o2];
            }, a2 = 0, s2 = g2.length; a2 < s2; a2 += 1) {
              for (w2[o2 = g2[a2]] = n2.map(p2), v2.push(this.getTextDimensions(m2[a2] || o2).w), u2 = 0, h2 = (l2 = w2[o2]).length; u2 < h2; u2 += 1)
                c2 = l2[u2], v2.push(this.getTextDimensions(c2).w);
              y2[o2] = I.arrayMax(v2), v2 = [];
            }
          if (S2) {
            var A2 = this.calculateLineHeight(g2, y2, m2.length ? m2 : g2);
            for (a2 = 0, s2 = g2.length; a2 < s2; a2 += 1)
              o2 = g2[a2], b2.push([t2, e2, y2[o2], A2, String(m2.length ? m2[a2] : o2)]);
            this.setTableHeaderRow(b2), this.printHeaderRow(1, false);
          }
          for (a2 = 0, s2 = n2.length; a2 < s2; a2 += 1)
            for (f2 = n2[a2], A2 = this.calculateLineHeight(g2, y2, f2), u2 = 0, d2 = g2.length; u2 < d2; u2 += 1)
              o2 = g2[u2], this.cell(t2, e2, y2[o2], A2, f2[o2], a2 + 2, o2.align);
          return this.lastCellPos = C, this.table_x = t2, this.table_y = e2, this;
        }, I.calculateLineHeight = function(t2, e2, n2) {
          for (var r2, i2 = 0, o2 = 0; o2 < t2.length; o2++) {
            n2[r2 = t2[o2]] = this.splitTextToSize(String(n2[r2]), e2[r2] - 3);
            var a2 = this.internal.getLineHeight() * n2[r2].length + 3;
            i2 < a2 && (i2 = a2);
          }
          return i2;
        }, I.setTableHeaderRow = function(t2) {
          this.tableHeaderRow = t2;
        }, I.printHeaderRow = function(t2, e2) {
          if (!this.tableHeaderRow)
            throw "Property tableHeaderRow does not exist.";
          var n2, r2, i2, o2;
          if (this.printingHeaderRow = true, void 0 !== h) {
            var a2 = h(this, T);
            d(a2[0], a2[1], a2[2], a2[3], -1);
          }
          this.setFontStyle("bold");
          var s2 = [];
          for (i2 = 0, o2 = this.tableHeaderRow.length; i2 < o2; i2 += 1)
            this.setFillColor(200, 200, 200), n2 = this.tableHeaderRow[i2], e2 && (this.margins.top = 13, n2[1] = this.margins && this.margins.top || 0, s2.push(n2)), r2 = [].concat(n2), this.cell.apply(this, r2.concat(t2));
          0 < s2.length && this.setTableHeaderRow(s2), this.setFontStyle("normal"), this.printingHeaderRow = false;
        }, /**
           * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
           *
           * Licensed under the MIT License. http://opensource.org/licenses/mit-license
           */
        function(t2) {
          t2.events.push(["initialized", function() {
            ((this.context2d.pdf = this).context2d.internal.pdf = this).context2d.ctx = new e2(), this.context2d.ctxStack = [], this.context2d.path = [];
          }]), t2.context2d = { pageWrapXEnabled: false, pageWrapYEnabled: false, pageWrapX: 9999999, pageWrapY: 9999999, ctx: new e2(), f2: function(t3) {
            return t3.toFixed(2);
          }, fillRect: function(t3, e3, n2, r2) {
            if (!this._isFillTransparent()) {
              t3 = this._wrapX(t3), e3 = this._wrapY(e3);
              var i2 = this._matrix_map_rect(this.ctx._transform, { x: t3, y: e3, w: n2, h: r2 });
              this.pdf.rect(i2.x, i2.y, i2.w, i2.h, "f");
            }
          }, strokeRect: function(t3, e3, n2, r2) {
            if (!this._isStrokeTransparent()) {
              t3 = this._wrapX(t3), e3 = this._wrapY(e3);
              var i2 = this._matrix_map_rect(this.ctx._transform, { x: t3, y: e3, w: n2, h: r2 });
              this.pdf.rect(i2.x, i2.y, i2.w, i2.h, "s");
            }
          }, clearRect: function(t3, e3, n2, r2) {
            if (!this.ctx.ignoreClearRect) {
              t3 = this._wrapX(t3), e3 = this._wrapY(e3);
              var i2 = this._matrix_map_rect(this.ctx._transform, { x: t3, y: e3, w: n2, h: r2 });
              this.save(), this.setFillStyle("#ffffff"), this.pdf.rect(i2.x, i2.y, i2.w, i2.h, "f"), this.restore();
            }
          }, save: function() {
            this.ctx._fontSize = this.pdf.internal.getFontSize();
            var t3 = new e2();
            t3.copy(this.ctx), this.ctxStack.push(this.ctx), this.ctx = t3;
          }, restore: function() {
            this.ctx = this.ctxStack.pop(), this.setFillStyle(this.ctx.fillStyle), this.setStrokeStyle(this.ctx.strokeStyle), this.setFont(this.ctx.font), this.pdf.setFontSize(this.ctx._fontSize), this.setLineCap(this.ctx.lineCap), this.setLineWidth(this.ctx.lineWidth), this.setLineJoin(this.ctx.lineJoin);
          }, rect: function(t3, e3, n2, r2) {
            this.moveTo(t3, e3), this.lineTo(t3 + n2, e3), this.lineTo(t3 + n2, e3 + r2), this.lineTo(t3, e3 + r2), this.lineTo(t3, e3), this.closePath();
          }, beginPath: function() {
            this.path = [];
          }, closePath: function() {
            this.path.push({ type: "close" });
          }, _getRGBA: function(t3) {
            var e3, n2, r2, i2, o2 = new RGBColor(t3);
            if (!t3)
              return { r: 0, g: 0, b: 0, a: 0, style: t3 };
            if (this.internal.rxTransparent.test(t3))
              i2 = r2 = n2 = e3 = 0;
            else {
              var a2 = this.internal.rxRgb.exec(t3);
              null != a2 ? (e3 = parseInt(a2[1]), n2 = parseInt(a2[2]), r2 = parseInt(a2[3]), i2 = 1) : null != (a2 = this.internal.rxRgba.exec(t3)) ? (e3 = parseInt(a2[1]), n2 = parseInt(a2[2]), r2 = parseInt(a2[3]), i2 = parseFloat(a2[4])) : (i2 = 1, "#" != t3.charAt(0) && (t3 = o2.ok ? o2.toHex() : "#000000"), 4 === t3.length ? (e3 = t3.substring(1, 2), e3 += e3, n2 = t3.substring(2, 3), n2 += n2, r2 = t3.substring(3, 4), r2 += r2) : (e3 = t3.substring(1, 3), n2 = t3.substring(3, 5), r2 = t3.substring(5, 7)), e3 = parseInt(e3, 16), n2 = parseInt(n2, 16), r2 = parseInt(r2, 16));
            }
            return { r: e3, g: n2, b: r2, a: i2, style: t3 };
          }, setFillStyle: function(t3) {
            var e3 = this._getRGBA(t3);
            this.ctx.fillStyle = t3, this.ctx._isFillTransparent = 0 === e3.a, this.ctx._fillOpacity = e3.a, this.pdf.setFillColor(e3.r, e3.g, e3.b, { a: e3.a }), this.pdf.setTextColor(e3.r, e3.g, e3.b, { a: e3.a });
          }, setStrokeStyle: function(t3) {
            var e3 = this._getRGBA(t3);
            this.ctx.strokeStyle = e3.style, this.ctx._isStrokeTransparent = 0 === e3.a, this.ctx._strokeOpacity = e3.a, 0 === e3.a ? this.pdf.setDrawColor(255, 255, 255) : (e3.a, this.pdf.setDrawColor(e3.r, e3.g, e3.b));
          }, fillText: function(t3, e3, n2, r2) {
            if (!this._isFillTransparent()) {
              e3 = this._wrapX(e3), n2 = this._wrapY(n2);
              var i2 = this._matrix_map_point(this.ctx._transform, [e3, n2]);
              e3 = i2[0], n2 = i2[1];
              var o2 = 57.2958 * this._matrix_rotation(this.ctx._transform);
              if (0 < this.ctx._clip_path.length) {
                var a2;
                (a2 = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
                var s2 = this.path;
                this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(null, true), this.ctx._clip_path = this.path, this.path = s2;
              }
              var h2 = 1;
              try {
                h2 = this._matrix_decompose(this._getTransform()).scale[0];
              } catch (t4) {
                console.warn(t4);
              }
              if (h2 < 0.01)
                this.pdf.text(t3, e3, this._getBaseline(n2), null, o2);
              else {
                var c2 = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(c2 * h2), this.pdf.text(t3, e3, this._getBaseline(n2), null, o2), this.pdf.setFontSize(c2);
              }
              0 < this.ctx._clip_path.length && a2.push("Q");
            }
          }, strokeText: function(t3, e3, n2, r2) {
            if (!this._isStrokeTransparent()) {
              e3 = this._wrapX(e3), n2 = this._wrapY(n2);
              var i2 = this._matrix_map_point(this.ctx._transform, [e3, n2]);
              e3 = i2[0], n2 = i2[1];
              var o2 = 57.2958 * this._matrix_rotation(this.ctx._transform);
              if (0 < this.ctx._clip_path.length) {
                var a2;
                (a2 = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
                var s2 = this.path;
                this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(null, true), this.ctx._clip_path = this.path, this.path = s2;
              }
              var h2 = 1;
              try {
                h2 = this._matrix_decompose(this._getTransform()).scale[0];
              } catch (t4) {
                console.warn(t4);
              }
              if (1 === h2)
                this.pdf.text(t3, e3, this._getBaseline(n2), { stroke: true }, o2);
              else {
                var c2 = this.pdf.internal.getFontSize();
                this.pdf.setFontSize(c2 * h2), this.pdf.text(t3, e3, this._getBaseline(n2), { stroke: true }, o2), this.pdf.setFontSize(c2);
              }
              0 < this.ctx._clip_path.length && a2.push("Q");
            }
          }, setFont: function(t3) {
            if (this.ctx.font = t3, null != (c2 = /\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/.exec(t3))) {
              var e3 = c2[1], n2 = (c2[2], c2[3]), r2 = c2[4], i2 = c2[5], o2 = c2[6];
              r2 = "px" === i2 ? Math.floor(parseFloat(r2)) : "em" === i2 ? Math.floor(parseFloat(r2) * this.pdf.getFontSize()) : Math.floor(parseFloat(r2)), this.pdf.setFontSize(r2), "bold" === n2 || "700" === n2 ? this.pdf.setFontStyle("bold") : "italic" === e3 ? this.pdf.setFontStyle("italic") : this.pdf.setFontStyle("normal"), l2 = "bold" === n2 || "700" === n2 ? "italic" === e3 ? "bolditalic" : "bold" : "italic" === e3 ? "italic" : "normal";
              for (var a2 = o2.toLowerCase().split(/\s*,\s*/), s2 = "Times", h2 = 0; h2 < a2.length; h2++) {
                if (void 0 !== this.pdf.internal.getFont(a2[h2], l2, { noFallback: true, disableWarning: true })) {
                  s2 = a2[h2];
                  break;
                }
                if ("bolditalic" === l2 && void 0 !== this.pdf.internal.getFont(a2[h2], "bold", { noFallback: true, disableWarning: true }))
                  s2 = a2[h2], l2 = "bold";
                else if (void 0 !== this.pdf.internal.getFont(a2[h2], "normal", { noFallback: true, disableWarning: true })) {
                  s2 = a2[h2], l2 = "normal";
                  break;
                }
              }
              this.pdf.setFont(s2, l2);
            } else {
              var c2 = /\s*(\d+)(pt|px|em)\s+([\w "]+)\s*([\w "]+)?/.exec(t3);
              if (null != c2) {
                var l2, u2 = c2[1], f2 = (c2[2], c2[3]);
                (l2 = c2[4]) || (l2 = "normal"), u2 = "em" === i2 ? Math.floor(parseFloat(r2) * this.pdf.getFontSize()) : Math.floor(parseFloat(u2)), this.pdf.setFontSize(u2), this.pdf.setFont(f2, l2);
              }
            }
          }, setTextBaseline: function(t3) {
            this.ctx.textBaseline = t3;
          }, getTextBaseline: function() {
            return this.ctx.textBaseline;
          }, setTextAlign: function(t3) {
            this.ctx.textAlign = t3;
          }, getTextAlign: function() {
            return this.ctx.textAlign;
          }, setLineWidth: function(t3) {
            this.ctx.lineWidth = t3, this.pdf.setLineWidth(t3);
          }, setLineCap: function(t3) {
            this.ctx.lineCap = t3, this.pdf.setLineCap(t3);
          }, setLineJoin: function(t3) {
            this.ctx.lineJoin = t3, this.pdf.setLineJoin(t3);
          }, moveTo: function(t3, e3) {
            t3 = this._wrapX(t3), e3 = this._wrapY(e3);
            var n2 = this._matrix_map_point(this.ctx._transform, [t3, e3]), r2 = { type: "mt", x: t3 = n2[0], y: e3 = n2[1] };
            this.path.push(r2);
          }, _wrapX: function(t3) {
            return this.pageWrapXEnabled ? t3 % this.pageWrapX : t3;
          }, _wrapY: function(t3) {
            return this.pageWrapYEnabled ? (this._gotoPage(this._page(t3)), (t3 - this.lastBreak) % this.pageWrapY) : t3;
          }, transform: function(t3, e3, n2, r2, i2, o2) {
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, [t3, e3, n2, r2, i2, o2]);
          }, setTransform: function(t3, e3, n2, r2, i2, o2) {
            this.ctx._transform = [t3, e3, n2, r2, i2, o2];
          }, _getTransform: function() {
            return this.ctx._transform;
          }, lastBreak: 0, pageBreaks: [], _page: function(t3) {
            if (this.pageWrapYEnabled) {
              for (var e3 = this.lastBreak = 0, n2 = 0, r2 = 0; r2 < this.pageBreaks.length; r2++)
                if (t3 >= this.pageBreaks[r2]) {
                  e3++, 0 === this.lastBreak && n2++;
                  var i2 = this.pageBreaks[r2] - this.lastBreak;
                  this.lastBreak = this.pageBreaks[r2], n2 += Math.floor(i2 / this.pageWrapY);
                }
              if (0 === this.lastBreak)
                n2 += Math.floor(t3 / this.pageWrapY) + 1;
              return n2 + e3;
            }
            return this.pdf.internal.getCurrentPageInfo().pageNumber;
          }, _gotoPage: function(t3) {
          }, lineTo: function(t3, e3) {
            t3 = this._wrapX(t3), e3 = this._wrapY(e3);
            var n2 = this._matrix_map_point(this.ctx._transform, [t3, e3]), r2 = { type: "lt", x: t3 = n2[0], y: e3 = n2[1] };
            this.path.push(r2);
          }, bezierCurveTo: function(t3, e3, n2, r2, i2, o2) {
            var a2;
            t3 = this._wrapX(t3), e3 = this._wrapY(e3), n2 = this._wrapX(n2), r2 = this._wrapY(r2), i2 = this._wrapX(i2), o2 = this._wrapY(o2), i2 = (a2 = this._matrix_map_point(this.ctx._transform, [i2, o2]))[0], o2 = a2[1];
            var s2 = { type: "bct", x1: t3 = (a2 = this._matrix_map_point(this.ctx._transform, [t3, e3]))[0], y1: e3 = a2[1], x2: n2 = (a2 = this._matrix_map_point(this.ctx._transform, [n2, r2]))[0], y2: r2 = a2[1], x: i2, y: o2 };
            this.path.push(s2);
          }, quadraticCurveTo: function(t3, e3, n2, r2) {
            var i2;
            t3 = this._wrapX(t3), e3 = this._wrapY(e3), n2 = this._wrapX(n2), r2 = this._wrapY(r2), n2 = (i2 = this._matrix_map_point(this.ctx._transform, [n2, r2]))[0], r2 = i2[1];
            var o2 = { type: "qct", x1: t3 = (i2 = this._matrix_map_point(this.ctx._transform, [t3, e3]))[0], y1: e3 = i2[1], x: n2, y: r2 };
            this.path.push(o2);
          }, arc: function(t3, e3, n2, r2, i2, o2) {
            if (t3 = this._wrapX(t3), e3 = this._wrapY(e3), !this._matrix_is_identity(this.ctx._transform)) {
              var a2 = this._matrix_map_point(this.ctx._transform, [t3, e3]);
              t3 = a2[0], e3 = a2[1];
              var s2 = this._matrix_map_point(this.ctx._transform, [0, 0]), h2 = this._matrix_map_point(this.ctx._transform, [0, n2]);
              n2 = Math.sqrt(Math.pow(h2[0] - s2[0], 2) + Math.pow(h2[1] - s2[1], 2));
            }
            var c2 = { type: "arc", x: t3, y: e3, radius: n2, startAngle: r2, endAngle: i2, anticlockwise: o2 };
            this.path.push(c2);
          }, drawImage: function(t3, e3, n2, r2, i2, o2, a2, s2, h2) {
            void 0 !== o2 && (e3 = o2, n2 = a2, r2 = s2, i2 = h2), e3 = this._wrapX(e3), n2 = this._wrapY(n2);
            var c2, l2 = this._matrix_map_rect(this.ctx._transform, { x: e3, y: n2, w: r2, h: i2 }), u2 = (this._matrix_map_rect(this.ctx._transform, { x: o2, y: a2, w: s2, h: h2 }), /data:image\/(\w+).*/i.exec(t3));
            c2 = null != u2 ? u2[1] : "png", this.pdf.addImage(t3, c2, l2.x, l2.y, l2.w, l2.h);
          }, _matrix_multiply: function(t3, e3) {
            var n2 = e3[0], r2 = e3[1], i2 = e3[2], o2 = e3[3], a2 = e3[4], s2 = e3[5], h2 = n2 * t3[0] + r2 * t3[2], c2 = i2 * t3[0] + o2 * t3[2], l2 = a2 * t3[0] + s2 * t3[2] + t3[4];
            return r2 = n2 * t3[1] + r2 * t3[3], o2 = i2 * t3[1] + o2 * t3[3], s2 = a2 * t3[1] + s2 * t3[3] + t3[5], [n2 = h2, r2, i2 = c2, o2, a2 = l2, s2];
          }, _matrix_rotation: function(t3) {
            return Math.atan2(t3[2], t3[0]);
          }, _matrix_decompose: function(t3) {
            var e3 = t3[0], n2 = t3[1], r2 = t3[2], i2 = t3[3], o2 = Math.sqrt(e3 * e3 + n2 * n2), a2 = (e3 /= o2) * r2 + (n2 /= o2) * i2;
            r2 -= e3 * a2, i2 -= n2 * a2;
            var s2 = Math.sqrt(r2 * r2 + i2 * i2);
            return a2 /= s2, e3 * (i2 /= s2) < n2 * (r2 /= s2) && (e3 = -e3, n2 = -n2, a2 = -a2, o2 = -o2), { scale: [o2, 0, 0, s2, 0, 0], translate: [1, 0, 0, 1, t3[4], t3[5]], rotate: [e3, n2, -n2, e3, 0, 0], skew: [1, 0, a2, 1, 0, 0] };
          }, _matrix_map_point: function(t3, e3) {
            var n2 = t3[0], r2 = t3[1], i2 = t3[2], o2 = t3[3], a2 = t3[4], s2 = t3[5], h2 = e3[0], c2 = e3[1];
            return [h2 * n2 + c2 * i2 + a2, h2 * r2 + c2 * o2 + s2];
          }, _matrix_map_point_obj: function(t3, e3) {
            var n2 = this._matrix_map_point(t3, [e3.x, e3.y]);
            return { x: n2[0], y: n2[1] };
          }, _matrix_map_rect: function(t3, e3) {
            var n2 = this._matrix_map_point(t3, [e3.x, e3.y]), r2 = this._matrix_map_point(t3, [e3.x + e3.w, e3.y + e3.h]);
            return { x: n2[0], y: n2[1], w: r2[0] - n2[0], h: r2[1] - n2[1] };
          }, _matrix_is_identity: function(t3) {
            return 1 == t3[0] && (0 == t3[1] && (0 == t3[2] && (1 == t3[3] && (0 == t3[4] && 0 == t3[5]))));
          }, rotate: function(t3) {
            var e3 = [Math.cos(t3), Math.sin(t3), -Math.sin(t3), Math.cos(t3), 0, 0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, e3);
          }, scale: function(t3, e3) {
            var n2 = [t3, 0, 0, e3, 0, 0];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, n2);
          }, translate: function(t3, e3) {
            var n2 = [1, 0, 0, 1, t3, e3];
            this.ctx._transform = this._matrix_multiply(this.ctx._transform, n2);
          }, stroke: function() {
            if (0 < this.ctx._clip_path.length) {
              var t3;
              (t3 = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
              var e3 = this.path;
              this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._stroke(true), this.ctx._clip_path = this.path, this.path = e3, this._stroke(false), t3.push("Q");
            } else
              this._stroke(false);
          }, _stroke: function(t3) {
            if (t3 || !this._isStrokeTransparent()) {
              for (var e3 = [], n2 = this.path, r2 = 0; r2 < n2.length; r2++) {
                var i2 = n2[r2];
                switch (i2.type) {
                  case "mt":
                    e3.push({ start: i2, deltas: [], abs: [] });
                    break;
                  case "lt":
                    var o2 = [i2.x - n2[r2 - 1].x, i2.y - n2[r2 - 1].y];
                    e3[e3.length - 1].deltas.push(o2), e3[e3.length - 1].abs.push(i2);
                    break;
                  case "bct":
                    o2 = [i2.x1 - n2[r2 - 1].x, i2.y1 - n2[r2 - 1].y, i2.x2 - n2[r2 - 1].x, i2.y2 - n2[r2 - 1].y, i2.x - n2[r2 - 1].x, i2.y - n2[r2 - 1].y];
                    e3[e3.length - 1].deltas.push(o2);
                    break;
                  case "qct":
                    var a2 = n2[r2 - 1].x + 2 / 3 * (i2.x1 - n2[r2 - 1].x), s2 = n2[r2 - 1].y + 2 / 3 * (i2.y1 - n2[r2 - 1].y), h2 = i2.x + 2 / 3 * (i2.x1 - i2.x), c2 = i2.y + 2 / 3 * (i2.y1 - i2.y), l2 = i2.x, u2 = i2.y;
                    o2 = [a2 - n2[r2 - 1].x, s2 - n2[r2 - 1].y, h2 - n2[r2 - 1].x, c2 - n2[r2 - 1].y, l2 - n2[r2 - 1].x, u2 - n2[r2 - 1].y];
                    e3[e3.length - 1].deltas.push(o2);
                    break;
                  case "arc":
                    0 == e3.length && e3.push({ start: { x: 0, y: 0 }, deltas: [], abs: [] }), e3[e3.length - 1].arc = true, Array.isArray(e3[e3.length - 1].abs) && e3[e3.length - 1].abs.push(i2);
                }
              }
              for (r2 = 0; r2 < e3.length; r2++) {
                var f2;
                if (f2 = r2 == e3.length - 1 ? "s" : null, e3[r2].arc)
                  for (var d2 = e3[r2].abs, p2 = 0; p2 < d2.length; p2++) {
                    var g2 = d2[p2], m2 = 360 * g2.startAngle / (2 * Math.PI), w2 = 360 * g2.endAngle / (2 * Math.PI), y2 = g2.x, v2 = g2.y;
                    this.internal.arc2(this, y2, v2, g2.radius, m2, w2, g2.anticlockwise, f2, t3);
                  }
                else {
                  y2 = e3[r2].start.x, v2 = e3[r2].start.y;
                  t3 ? (this.pdf.lines(e3[r2].deltas, y2, v2, null, null), this.pdf.clip_fixed()) : this.pdf.lines(e3[r2].deltas, y2, v2, null, f2);
                }
              }
            }
          }, _isFillTransparent: function() {
            return this.ctx._isFillTransparent || 0 == this.globalAlpha;
          }, _isStrokeTransparent: function() {
            return this.ctx._isStrokeTransparent || 0 == this.globalAlpha;
          }, fill: function(t3) {
            if (0 < this.ctx._clip_path.length) {
              var e3;
              (e3 = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage()).push("q");
              var n2 = this.path;
              this.path = this.ctx._clip_path, this.ctx._clip_path = [], this._fill(t3, true), this.ctx._clip_path = this.path, this.path = n2, this._fill(t3, false), e3.push("Q");
            } else
              this._fill(t3, false);
          }, _fill: function(t3, e3) {
            if (!this._isFillTransparent()) {
              var n2, r2 = "function" == typeof this.pdf.internal.newObject2;
              n2 = window.outIntercept ? "group" === window.outIntercept.type ? window.outIntercept.stream : window.outIntercept : this.internal.getCurrentPage();
              var i2 = [], o2 = window.outIntercept;
              if (r2)
                switch (this.ctx.globalCompositeOperation) {
                  case "normal":
                  case "source-over":
                    break;
                  case "destination-in":
                  case "destination-out":
                    var a2 = this.pdf.internal.newStreamObject(), s2 = this.pdf.internal.newObject2();
                    s2.push("<</Type /ExtGState"), s2.push("/SMask <</S /Alpha /G " + a2.objId + " 0 R>>"), s2.push(">>");
                    var h2 = "MASK" + s2.objId;
                    this.pdf.internal.addGraphicsState(h2, s2.objId);
                    var c2 = "/" + h2 + " gs";
                    n2.splice(0, 0, "q"), n2.splice(1, 0, c2), n2.push("Q"), window.outIntercept = a2;
                    break;
                  default:
                    var l2 = "/" + this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];
                    l2 && this.pdf.internal.out(l2 + " gs");
                }
              var u2 = this.ctx.globalAlpha;
              if (this.ctx._fillOpacity < 1 && (u2 = this.ctx._fillOpacity), r2) {
                var f2 = this.pdf.internal.newObject2();
                f2.push("<</Type /ExtGState"), f2.push("/CA " + u2), f2.push("/ca " + u2), f2.push(">>");
                h2 = "GS_O_" + f2.objId;
                this.pdf.internal.addGraphicsState(h2, f2.objId), this.pdf.internal.out("/" + h2 + " gs");
              }
              for (var d2 = this.path, p2 = 0; p2 < d2.length; p2++) {
                var g2 = d2[p2];
                switch (g2.type) {
                  case "mt":
                    i2.push({ start: g2, deltas: [], abs: [] });
                    break;
                  case "lt":
                    var m2 = [g2.x - d2[p2 - 1].x, g2.y - d2[p2 - 1].y];
                    i2[i2.length - 1].deltas.push(m2), i2[i2.length - 1].abs.push(g2);
                    break;
                  case "bct":
                    m2 = [g2.x1 - d2[p2 - 1].x, g2.y1 - d2[p2 - 1].y, g2.x2 - d2[p2 - 1].x, g2.y2 - d2[p2 - 1].y, g2.x - d2[p2 - 1].x, g2.y - d2[p2 - 1].y];
                    i2[i2.length - 1].deltas.push(m2);
                    break;
                  case "qct":
                    var w2 = d2[p2 - 1].x + 2 / 3 * (g2.x1 - d2[p2 - 1].x), y2 = d2[p2 - 1].y + 2 / 3 * (g2.y1 - d2[p2 - 1].y), v2 = g2.x + 2 / 3 * (g2.x1 - g2.x), b2 = g2.y + 2 / 3 * (g2.y1 - g2.y), x2 = g2.x, S2 = g2.y;
                    m2 = [w2 - d2[p2 - 1].x, y2 - d2[p2 - 1].y, v2 - d2[p2 - 1].x, b2 - d2[p2 - 1].y, x2 - d2[p2 - 1].x, S2 - d2[p2 - 1].y];
                    i2[i2.length - 1].deltas.push(m2);
                    break;
                  case "arc":
                    0 === i2.length && i2.push({ deltas: [], abs: [] }), i2[i2.length - 1].arc = true, Array.isArray(i2[i2.length - 1].abs) && i2[i2.length - 1].abs.push(g2);
                    break;
                  case "close":
                    i2.push({ close: true });
                }
              }
              for (p2 = 0; p2 < i2.length; p2++) {
                var k2;
                if (p2 == i2.length - 1 ? (k2 = "f", "evenodd" === t3 && (k2 += "*")) : k2 = null, i2[p2].close)
                  this.pdf.internal.out("h"), k2 && this.pdf.internal.out(k2);
                else if (i2[p2].arc) {
                  i2[p2].start && this.internal.move2(this, i2[p2].start.x, i2[p2].start.y);
                  for (var _2 = i2[p2].abs, A2 = 0; A2 < _2.length; A2++) {
                    var I2 = _2[A2];
                    if (void 0 !== I2.startAngle) {
                      var C2 = 360 * I2.startAngle / (2 * Math.PI), T2 = 360 * I2.endAngle / (2 * Math.PI), F2 = I2.x, P2 = I2.y;
                      if (0 === A2 && this.internal.move2(this, F2, P2), this.internal.arc2(this, F2, P2, I2.radius, C2, T2, I2.anticlockwise, null, e3), A2 === _2.length - 1 && i2[p2].start) {
                        F2 = i2[p2].start.x, P2 = i2[p2].start.y;
                        this.internal.line2(E2, F2, P2);
                      }
                    } else
                      this.internal.line2(E2, I2.x, I2.y);
                  }
                } else {
                  F2 = i2[p2].start.x, P2 = i2[p2].start.y;
                  e3 ? (this.pdf.lines(i2[p2].deltas, F2, P2, null, null), this.pdf.clip_fixed()) : this.pdf.lines(i2[p2].deltas, F2, P2, null, k2);
                }
              }
              window.outIntercept = o2;
            }
          }, pushMask: function() {
            if ("function" == typeof this.pdf.internal.newObject2) {
              var t3 = this.pdf.internal.newStreamObject(), e3 = this.pdf.internal.newObject2();
              e3.push("<</Type /ExtGState"), e3.push("/SMask <</S /Alpha /G " + t3.objId + " 0 R>>"), e3.push(">>");
              var n2 = "MASK" + e3.objId;
              this.pdf.internal.addGraphicsState(n2, e3.objId);
              var r2 = "/" + n2 + " gs";
              this.pdf.internal.out(r2);
            } else
              console.log("jsPDF v2 not enabled");
          }, clip: function() {
            if (0 < this.ctx._clip_path.length)
              for (var t3 = 0; t3 < this.path.length; t3++)
                this.ctx._clip_path.push(this.path[t3]);
            else
              this.ctx._clip_path = this.path;
            this.path = [];
          }, measureText: function(n2) {
            var r2 = this.pdf;
            return { getWidth: function() {
              var t3 = r2.internal.getFontSize(), e3 = r2.getStringUnitWidth(n2) * t3 / r2.internal.scaleFactor;
              return e3 *= 1.3333;
            }, get width() {
              return this.getWidth(n2);
            } };
          }, _getBaseline: function(t3) {
            var e3 = parseInt(this.pdf.internal.getFontSize()), n2 = 0.25 * e3;
            switch (this.ctx.textBaseline) {
              case "bottom":
                return t3 - n2;
              case "top":
                return t3 + e3;
              case "hanging":
                return t3 + e3 - n2;
              case "middle":
                return t3 + e3 / 2 - n2;
              case "ideographic":
                return t3;
              case "alphabetic":
              default:
                return t3;
            }
          } };
          var E2 = t2.context2d;
          function e2() {
            this._isStrokeTransparent = false, this._strokeOpacity = 1, this.strokeStyle = "#000000", this.fillStyle = "#000000", this._isFillTransparent = false, this._fillOpacity = 1, this.font = "12pt times", this.textBaseline = "alphabetic", this.textAlign = "start", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this._transform = [1, 0, 0, 1, 0, 0], this.globalCompositeOperation = "normal", this.globalAlpha = 1, this._clip_path = [], this.ignoreClearRect = false, this.copy = function(t3) {
              this._isStrokeTransparent = t3._isStrokeTransparent, this._strokeOpacity = t3._strokeOpacity, this.strokeStyle = t3.strokeStyle, this._isFillTransparent = t3._isFillTransparent, this._fillOpacity = t3._fillOpacity, this.fillStyle = t3.fillStyle, this.font = t3.font, this.lineWidth = t3.lineWidth, this.lineJoin = t3.lineJoin, this.lineCap = t3.lineCap, this.textBaseline = t3.textBaseline, this.textAlign = t3.textAlign, this._fontSize = t3._fontSize, this._transform = t3._transform.slice(0), this.globalCompositeOperation = t3.globalCompositeOperation, this.globalAlpha = t3.globalAlpha, this._clip_path = t3._clip_path.slice(0), this.ignoreClearRect = t3.ignoreClearRect;
            };
          }
          Object.defineProperty(E2, "fillStyle", { set: function(t3) {
            this.setFillStyle(t3);
          }, get: function() {
            return this.ctx.fillStyle;
          } }), Object.defineProperty(E2, "strokeStyle", { set: function(t3) {
            this.setStrokeStyle(t3);
          }, get: function() {
            return this.ctx.strokeStyle;
          } }), Object.defineProperty(E2, "lineWidth", { set: function(t3) {
            this.setLineWidth(t3);
          }, get: function() {
            return this.ctx.lineWidth;
          } }), Object.defineProperty(E2, "lineCap", { set: function(t3) {
            this.setLineCap(t3);
          }, get: function() {
            return this.ctx.lineCap;
          } }), Object.defineProperty(E2, "lineJoin", { set: function(t3) {
            this.setLineJoin(t3);
          }, get: function() {
            return this.ctx.lineJoin;
          } }), Object.defineProperty(E2, "miterLimit", { set: function(t3) {
            this.ctx.miterLimit = t3;
          }, get: function() {
            return this.ctx.miterLimit;
          } }), Object.defineProperty(E2, "textBaseline", { set: function(t3) {
            this.setTextBaseline(t3);
          }, get: function() {
            return this.getTextBaseline();
          } }), Object.defineProperty(E2, "textAlign", { set: function(t3) {
            this.setTextAlign(t3);
          }, get: function() {
            return this.getTextAlign();
          } }), Object.defineProperty(E2, "font", { set: function(t3) {
            this.setFont(t3);
          }, get: function() {
            return this.ctx.font;
          } }), Object.defineProperty(E2, "globalCompositeOperation", { set: function(t3) {
            this.ctx.globalCompositeOperation = t3;
          }, get: function() {
            return this.ctx.globalCompositeOperation;
          } }), Object.defineProperty(E2, "globalAlpha", { set: function(t3) {
            this.ctx.globalAlpha = t3;
          }, get: function() {
            return this.ctx.globalAlpha;
          } }), Object.defineProperty(E2, "canvas", { get: function() {
            return { parentNode: false, style: false };
          } }), Object.defineProperty(E2, "ignoreClearRect", { set: function(t3) {
            this.ctx.ignoreClearRect = t3;
          }, get: function() {
            return this.ctx.ignoreClearRect;
          } }), E2.internal = {}, E2.internal.rxRgb = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/, E2.internal.rxRgba = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/, E2.internal.rxTransparent = /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/, E2.internal.arc = function(t3, e3, n2, r2, i2, o2, a2, s2) {
            for (var h2 = this.pdf.internal.scaleFactor, c2 = this.pdf.internal.pageSize.getHeight(), l2 = this.pdf.internal.f2, u2 = i2 * (Math.PI / 180), f2 = o2 * (Math.PI / 180), d2 = this.createArc(r2, u2, f2, a2), p2 = 0; p2 < d2.length; p2++) {
              var g2 = d2[p2];
              0 === p2 ? this.pdf.internal.out([l2((g2.x1 + e3) * h2), l2((c2 - (g2.y1 + n2)) * h2), "m", l2((g2.x2 + e3) * h2), l2((c2 - (g2.y2 + n2)) * h2), l2((g2.x3 + e3) * h2), l2((c2 - (g2.y3 + n2)) * h2), l2((g2.x4 + e3) * h2), l2((c2 - (g2.y4 + n2)) * h2), "c"].join(" ")) : this.pdf.internal.out([l2((g2.x2 + e3) * h2), l2((c2 - (g2.y2 + n2)) * h2), l2((g2.x3 + e3) * h2), l2((c2 - (g2.y3 + n2)) * h2), l2((g2.x4 + e3) * h2), l2((c2 - (g2.y4 + n2)) * h2), "c"].join(" ")), t3._lastPoint = { x: e3, y: n2 };
            }
            null !== s2 && this.pdf.internal.out(this.pdf.internal.getStyle(s2));
          }, E2.internal.arc2 = function(t3, e3, n2, r2, i2, o2, a2, s2, h2) {
            var c2 = e3, l2 = n2;
            h2 ? (this.arc(t3, c2, l2, r2, i2, o2, a2, null), this.pdf.clip_fixed()) : this.arc(t3, c2, l2, r2, i2, o2, a2, s2);
          }, E2.internal.move2 = function(t3, e3, n2) {
            var r2 = this.pdf.internal.scaleFactor, i2 = this.pdf.internal.pageSize.getHeight(), o2 = this.pdf.internal.f2;
            this.pdf.internal.out([o2(e3 * r2), o2((i2 - n2) * r2), "m"].join(" ")), t3._lastPoint = { x: e3, y: n2 };
          }, E2.internal.line2 = function(t3, e3, n2) {
            var r2 = this.pdf.internal.scaleFactor, i2 = this.pdf.internal.pageSize.getHeight(), o2 = this.pdf.internal.f2, a2 = { x: e3, y: n2 };
            this.pdf.internal.out([o2(a2.x * r2), o2((i2 - a2.y) * r2), "l"].join(" ")), t3._lastPoint = a2;
          }, E2.internal.createArc = function(t3, e3, n2, r2) {
            var i2 = 2 * Math.PI, o2 = Math.PI / 2, a2 = e3;
            for ((a2 < i2 || i2 < a2) && (a2 %= i2), a2 < 0 && (a2 = i2 + a2); n2 < e3; )
              e3 -= i2;
            var s2 = Math.abs(n2 - e3);
            s2 < i2 && r2 && (s2 = i2 - s2);
            for (var h2 = [], c2 = r2 ? -1 : 1, l2 = a2; 1e-5 < s2; ) {
              var u2 = l2 + c2 * Math.min(s2, o2);
              h2.push(this.createSmallArc(t3, l2, u2)), s2 -= Math.abs(u2 - l2), l2 = u2;
            }
            return h2;
          }, E2.internal.getCurrentPage = function() {
            return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber];
          }, E2.internal.createSmallArc = function(t3, e3, n2) {
            var r2 = (n2 - e3) / 2, i2 = t3 * Math.cos(r2), o2 = t3 * Math.sin(r2), a2 = i2, s2 = -o2, h2 = a2 * a2 + s2 * s2, c2 = h2 + a2 * i2 + s2 * o2, l2 = 4 / 3 * (Math.sqrt(2 * h2 * c2) - c2) / (a2 * o2 - s2 * i2), u2 = a2 - l2 * s2, f2 = s2 + l2 * a2, d2 = u2, p2 = -f2, g2 = r2 + e3, m2 = Math.cos(g2), w2 = Math.sin(g2);
            return { x1: t3 * Math.cos(e3), y1: t3 * Math.sin(e3), x2: u2 * m2 - f2 * w2, y2: u2 * w2 + f2 * m2, x3: d2 * m2 - p2 * w2, y3: d2 * w2 + p2 * m2, x4: t3 * Math.cos(n2), y4: t3 * Math.sin(n2) };
          };
        }($.API, "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()), /** @preserve
           * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
           * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
           *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
           *               2014 Diego Casorran, https://github.com/diegocr
           *               2014 Daniel Husar, https://github.com/danielhusar
           *               2014 Wolfgang Gassler, https://github.com/woolfg
           *               2014 Steven Spungin, https://github.com/flamenco
           *
           * 
           * ====================================================================
           */
        function(t2) {
          var T2, F2, i2, a2, s2, h2, c2, l2, P2, v2, f2, u2, d2, n2, E2, q2, p2, g2, m2, O2;
          T2 = function() {
            return function(t3) {
              return e2.prototype = t3, new e2();
            };
            function e2() {
            }
          }(), v2 = function(t3) {
            var e2, n3, r2, i3, o2, a3, s3;
            for (n3 = 0, r2 = t3.length, e2 = void 0, a3 = i3 = false; !i3 && n3 !== r2; )
              (e2 = t3[n3] = t3[n3].trimLeft()) && (i3 = true), n3++;
            for (n3 = r2 - 1; r2 && !a3 && -1 !== n3; )
              (e2 = t3[n3] = t3[n3].trimRight()) && (a3 = true), n3--;
            for (o2 = /\s+$/g, s3 = true, n3 = 0; n3 !== r2; )
              "\u2028" != t3[n3] && (e2 = t3[n3].replace(/\s+/g, " "), s3 && (e2 = e2.trimLeft()), e2 && (s3 = o2.test(e2)), t3[n3] = e2), n3++;
            return t3;
          }, u2 = function(t3) {
            var e2, n3, r2;
            for (e2 = void 0, n3 = (r2 = t3.split(",")).shift(); !e2 && n3; )
              e2 = i2[n3.trim().toLowerCase()], n3 = r2.shift();
            return e2;
          }, d2 = function(t3) {
            var e2;
            return -1 < (t3 = "auto" === t3 ? "0px" : t3).indexOf("em") && !isNaN(Number(t3.replace("em", ""))) && (t3 = 18.719 * Number(t3.replace("em", "")) + "px"), -1 < t3.indexOf("pt") && !isNaN(Number(t3.replace("pt", ""))) && (t3 = 1.333 * Number(t3.replace("pt", "")) + "px"), void 0, 16, (e2 = n2[t3]) ? e2 : void 0 !== (e2 = { "xx-small": 9, "x-small": 11, small: 13, medium: 16, large: 19, "x-large": 23, "xx-large": 28, auto: 0 }[t3]) ? n2[t3] = e2 / 16 : (e2 = parseFloat(t3)) ? n2[t3] = e2 / 16 : (e2 = t3.match(/([\d\.]+)(px)/), Array.isArray(e2) && 3 === e2.length ? n2[t3] = parseFloat(e2[1]) / 16 : n2[t3] = 1);
          }, P2 = function(t3) {
            var e2, n3, r2, i3, o2;
            return o2 = t3, i3 = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(o2, null) : o2.currentStyle ? o2.currentStyle : o2.style, n3 = void 0, (e2 = {})["font-family"] = u2((r2 = function(t4) {
              return t4 = t4.replace(/-\D/g, function(t5) {
                return t5.charAt(1).toUpperCase();
              }), i3[t4];
            })("font-family")) || "times", e2["font-style"] = a2[r2("font-style")] || "normal", e2["text-align"] = s2[r2("text-align")] || "left", "bold" === (n3 = h2[r2("font-weight")] || "normal") && ("normal" === e2["font-style"] ? e2["font-style"] = n3 : e2["font-style"] = n3 + e2["font-style"]), e2["font-size"] = d2(r2("font-size")) || 1, e2["line-height"] = d2(r2("line-height")) || 1, e2.display = "inline" === r2("display") ? "inline" : "block", n3 = "block" === e2.display, e2["margin-top"] = n3 && d2(r2("margin-top")) || 0, e2["margin-bottom"] = n3 && d2(r2("margin-bottom")) || 0, e2["padding-top"] = n3 && d2(r2("padding-top")) || 0, e2["padding-bottom"] = n3 && d2(r2("padding-bottom")) || 0, e2["margin-left"] = n3 && d2(r2("margin-left")) || 0, e2["margin-right"] = n3 && d2(r2("margin-right")) || 0, e2["padding-left"] = n3 && d2(r2("padding-left")) || 0, e2["padding-right"] = n3 && d2(r2("padding-right")) || 0, e2["page-break-before"] = r2("page-break-before") || "auto", e2.float = c2[r2("cssFloat")] || "none", e2.clear = l2[r2("clear")] || "none", e2.color = r2("color"), e2;
          }, E2 = function(t3, e2, n3) {
            var r2, i3, o2, a3, s3;
            if (o2 = false, a3 = i3 = void 0, r2 = n3["#" + t3.id])
              if ("function" == typeof r2)
                o2 = r2(t3, e2);
              else
                for (i3 = 0, a3 = r2.length; !o2 && i3 !== a3; )
                  o2 = r2[i3](t3, e2), i3++;
            if (r2 = n3[t3.nodeName], !o2 && r2)
              if ("function" == typeof r2)
                o2 = r2(t3, e2);
              else
                for (i3 = 0, a3 = r2.length; !o2 && i3 !== a3; )
                  o2 = r2[i3](t3, e2), i3++;
            for (s3 = "string" == typeof t3.className ? t3.className.split(" ") : [], i3 = 0; i3 < s3.length; i3++)
              if (r2 = n3["." + s3[i3]], !o2 && r2)
                if ("function" == typeof r2)
                  o2 = r2(t3, e2);
                else
                  for (i3 = 0, a3 = r2.length; !o2 && i3 !== a3; )
                    o2 = r2[i3](t3, e2), i3++;
            return o2;
          }, O2 = function(t3, e2) {
            var n3, r2, i3, o2, a3, s3, h3, c3, l3;
            for (n3 = [], r2 = [], i3 = 0, l3 = t3.rows[0].cells.length, h3 = t3.clientWidth; i3 < l3; )
              c3 = t3.rows[0].cells[i3], r2[i3] = { name: c3.textContent.toLowerCase().replace(/\s+/g, ""), prompt: c3.textContent.replace(/\r?\n/g, ""), width: c3.clientWidth / h3 * e2.pdf.internal.pageSize.getWidth() }, i3++;
            for (i3 = 1; i3 < t3.rows.length; ) {
              for (s3 = t3.rows[i3], a3 = {}, o2 = 0; o2 < s3.cells.length; )
                a3[r2[o2].name] = s3.cells[o2].textContent.replace(/\r?\n/g, ""), o2++;
              n3.push(a3), i3++;
            }
            return { rows: n3, headers: r2 };
          };
          var B2 = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, OBJECT: 1, EMBED: 1, SELECT: 1 }, R2 = 1;
          F2 = function(t3, i3, e2) {
            var n3, r2, o2, a3, s3, h3, c3, l3;
            for (r2 = t3.childNodes, n3 = void 0, (s3 = "block" === (o2 = P2(t3)).display) && (i3.setBlockBoundary(), i3.setBlockStyle(o2)), a3 = 0, h3 = r2.length; a3 < h3; ) {
              if ("object" === (void 0 === (n3 = r2[a3]) ? "undefined" : vt(n3))) {
                if (i3.executeWatchFunctions(n3), 1 === n3.nodeType && "HEADER" === n3.nodeName) {
                  var u3 = n3, f3 = i3.pdf.margins_doc.top;
                  i3.pdf.internal.events.subscribe("addPage", function(t4) {
                    i3.y = f3, F2(u3, i3, e2), i3.pdf.margins_doc.top = i3.y + 10, i3.y += 10;
                  }, false);
                }
                if (8 === n3.nodeType && "#comment" === n3.nodeName)
                  ~n3.textContent.indexOf("ADD_PAGE") && (i3.pdf.addPage(), i3.y = i3.pdf.margins_doc.top);
                else if (1 !== n3.nodeType || B2[n3.nodeName])
                  if (3 === n3.nodeType) {
                    var d3 = n3.nodeValue;
                    if (n3.nodeValue && "LI" === n3.parentNode.nodeName)
                      if ("OL" === n3.parentNode.parentNode.nodeName)
                        d3 = R2++ + ". " + d3;
                      else {
                        var p3 = o2["font-size"], g3 = (3 - 0.75 * p3) * i3.pdf.internal.scaleFactor, m3 = 0.75 * p3 * i3.pdf.internal.scaleFactor, w2 = 1.74 * p3 / i3.pdf.internal.scaleFactor;
                        l3 = function(t4, e3) {
                          this.pdf.circle(t4 + g3, e3 + m3, w2, "FD");
                        };
                      }
                    16 & n3.ownerDocument.body.compareDocumentPosition(n3) && i3.addText(d3, o2);
                  } else
                    "string" == typeof n3 && i3.addText(n3, o2);
                else {
                  var y2;
                  if ("IMG" === n3.nodeName) {
                    var v3 = n3.getAttribute("src");
                    y2 = q2[i3.pdf.sHashCode(v3) || v3];
                  }
                  if (y2) {
                    i3.pdf.internal.pageSize.getHeight() - i3.pdf.margins_doc.bottom < i3.y + n3.height && i3.y > i3.pdf.margins_doc.top && (i3.pdf.addPage(), i3.y = i3.pdf.margins_doc.top, i3.executeWatchFunctions(n3));
                    var b2 = P2(n3), x2 = i3.x, S2 = 12 / i3.pdf.internal.scaleFactor, k2 = (b2["margin-left"] + b2["padding-left"]) * S2, _2 = (b2["margin-right"] + b2["padding-right"]) * S2, A2 = (b2["margin-top"] + b2["padding-top"]) * S2, I2 = (b2["margin-bottom"] + b2["padding-bottom"]) * S2;
                    void 0 !== b2.float && "right" === b2.float ? x2 += i3.settings.width - n3.width - _2 : x2 += k2, i3.pdf.addImage(y2, x2, i3.y + A2, n3.width, n3.height), y2 = void 0, "right" === b2.float || "left" === b2.float ? (i3.watchFunctions.push(function(t4, e3, n4, r3) {
                      return i3.y >= e3 ? (i3.x += t4, i3.settings.width += n4, true) : !!(r3 && 1 === r3.nodeType && !B2[r3.nodeName] && i3.x + r3.width > i3.pdf.margins_doc.left + i3.pdf.margins_doc.width) && (i3.x += t4, i3.y = e3, i3.settings.width += n4, true);
                    }.bind(this, "left" === b2.float ? -n3.width - k2 - _2 : 0, i3.y + n3.height + A2 + I2, n3.width)), i3.watchFunctions.push(function(t4, e3, n4) {
                      return !(i3.y < t4 && e3 === i3.pdf.internal.getNumberOfPages()) || 1 === n4.nodeType && "both" === P2(n4).clear && (i3.y = t4, true);
                    }.bind(this, i3.y + n3.height, i3.pdf.internal.getNumberOfPages())), i3.settings.width -= n3.width + k2 + _2, "left" === b2.float && (i3.x += n3.width + k2 + _2)) : i3.y += n3.height + A2 + I2;
                  } else if ("TABLE" === n3.nodeName)
                    c3 = O2(n3, i3), i3.y += 10, i3.pdf.table(i3.x, i3.y, c3.rows, c3.headers, { autoSize: false, printHeaders: e2.printHeaders, margins: i3.pdf.margins_doc, css: P2(n3) }), i3.y = i3.pdf.lastCellPos.y + i3.pdf.lastCellPos.h + 20;
                  else if ("OL" === n3.nodeName || "UL" === n3.nodeName)
                    R2 = 1, E2(n3, i3, e2) || F2(n3, i3, e2), i3.y += 10;
                  else if ("LI" === n3.nodeName) {
                    var C2 = i3.x;
                    i3.x += 20 / i3.pdf.internal.scaleFactor, i3.y += 3, E2(n3, i3, e2) || F2(n3, i3, e2), i3.x = C2;
                  } else
                    "BR" === n3.nodeName ? (i3.y += o2["font-size"] * i3.pdf.internal.scaleFactor, i3.addText("\u2028", T2(o2))) : E2(n3, i3, e2) || F2(n3, i3, e2);
                }
              }
              a3++;
            }
            if (e2.outY = i3.y, s3)
              return i3.setBlockBoundary(l3);
          }, q2 = {}, p2 = function(t3, o2, e2, n3) {
            var a3, r2 = t3.getElementsByTagName("img"), i3 = r2.length, s3 = 0;
            function h3() {
              o2.pdf.internal.events.publish("imagesLoaded"), n3(a3);
            }
            function c3(e3, n4, r3) {
              if (e3) {
                var i4 = new Image();
                a3 = ++s3, i4.crossOrigin = "", i4.onerror = i4.onload = function() {
                  if (i4.complete && (0 === i4.src.indexOf("data:image/") && (i4.width = n4 || i4.width || 0, i4.height = r3 || i4.height || 0), i4.width + i4.height)) {
                    var t4 = o2.pdf.sHashCode(e3) || e3;
                    q2[t4] = q2[t4] || i4;
                  }
                  --s3 || h3();
                }, i4.src = e3;
              }
            }
            for (; i3--; )
              c3(r2[i3].getAttribute("src"), r2[i3].width, r2[i3].height);
            return s3 || h3();
          }, g2 = function(t3, o2, a3) {
            var s3 = t3.getElementsByTagName("footer");
            if (0 < s3.length) {
              s3 = s3[0];
              var e2 = o2.pdf.internal.write, n3 = o2.y;
              o2.pdf.internal.write = function() {
              }, F2(s3, o2, a3);
              var h3 = Math.ceil(o2.y - n3) + 5;
              o2.y = n3, o2.pdf.internal.write = e2, o2.pdf.margins_doc.bottom += h3;
              for (var r2 = function(t4) {
                var e3 = void 0 !== t4 ? t4.pageNumber : 1, n4 = o2.y;
                o2.y = o2.pdf.internal.pageSize.getHeight() - o2.pdf.margins_doc.bottom, o2.pdf.margins_doc.bottom -= h3;
                for (var r3 = s3.getElementsByTagName("span"), i4 = 0; i4 < r3.length; ++i4)
                  -1 < (" " + r3[i4].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") && (r3[i4].innerHTML = e3), -1 < (" " + r3[i4].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && (r3[i4].innerHTML = "###jsPDFVarTotalPages###");
                F2(s3, o2, a3), o2.pdf.margins_doc.bottom += h3, o2.y = n4;
              }, i3 = s3.getElementsByTagName("span"), c3 = 0; c3 < i3.length; ++c3)
                -1 < (" " + i3[c3].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") && o2.pdf.internal.events.subscribe("htmlRenderingFinished", o2.pdf.putTotalPages.bind(o2.pdf, "###jsPDFVarTotalPages###"), true);
              o2.pdf.internal.events.subscribe("addPage", r2, false), r2(), B2.FOOTER = 1;
            }
          }, m2 = function(t3, e2, n3, r2, i3, o2) {
            if (!e2)
              return false;
            var a3, s3, h3, c3;
            "string" == typeof e2 || e2.parentNode || (e2 = "" + e2.innerHTML), "string" == typeof e2 && (a3 = e2.replace(/<\/?script[^>]*?>/gi, ""), c3 = "jsPDFhtmlText" + Date.now().toString() + (1e3 * Math.random()).toFixed(0), (h3 = document.createElement("div")).style.cssText = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;", h3.innerHTML = '<iframe style="height:1px;width:1px" name="' + c3 + '" />', document.body.appendChild(h3), (s3 = window.frames[c3]).document.open(), s3.document.writeln(a3), s3.document.close(), e2 = s3.document.body);
            var l3, u3 = new f2(t3, n3, r2, i3);
            return p2.call(this, e2, u3, i3.elementHandlers, function(t4) {
              g2(e2, u3, i3.elementHandlers), F2(e2, u3, i3.elementHandlers), u3.pdf.internal.events.publish("htmlRenderingFinished"), l3 = u3.dispose(), "function" == typeof o2 ? o2(l3) : t4 && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!");
            }), l3 || { x: u3.x, y: u3.y };
          }, (f2 = function(t3, e2, n3, r2) {
            return this.pdf = t3, this.x = e2, this.y = n3, this.settings = r2, this.watchFunctions = [], this.init(), this;
          }).prototype.init = function() {
            return this.paragraph = { text: [], style: [] }, this.pdf.internal.write("q");
          }, f2.prototype.dispose = function() {
            return this.pdf.internal.write("Q"), { x: this.x, y: this.y, ready: true };
          }, f2.prototype.executeWatchFunctions = function(t3) {
            var e2 = false, n3 = [];
            if (0 < this.watchFunctions.length) {
              for (var r2 = 0; r2 < this.watchFunctions.length; ++r2)
                true === this.watchFunctions[r2](t3) ? e2 = true : n3.push(this.watchFunctions[r2]);
              this.watchFunctions = n3;
            }
            return e2;
          }, f2.prototype.splitFragmentsIntoLines = function(t3, e2) {
            var n3, r2, i3, o2, a3, s3, h3, c3, l3, u3, f3, d3, p3, g3;
            for (12, u3 = this.pdf.internal.scaleFactor, o2 = {}, s3 = h3 = c3 = g3 = a3 = i3 = l3 = r2 = void 0, d3 = [f3 = []], n3 = 0, p3 = this.settings.width; t3.length; )
              if (a3 = t3.shift(), g3 = e2.shift(), a3)
                if ((i3 = o2[(r2 = g3["font-family"]) + (l3 = g3["font-style"])]) || (i3 = this.pdf.internal.getFont(r2, l3).metadata.Unicode, o2[r2 + l3] = i3), c3 = { widths: i3.widths, kerning: i3.kerning, fontSize: 12 * g3["font-size"], textIndent: n3 }, h3 = this.pdf.getStringUnitWidth(a3, c3) * c3.fontSize / u3, "\u2028" == a3)
                  f3 = [], d3.push(f3);
                else if (p3 < n3 + h3) {
                  for (s3 = this.pdf.splitTextToSize(a3, p3, c3), f3.push([s3.shift(), g3]); s3.length; )
                    f3 = [[s3.shift(), g3]], d3.push(f3);
                  n3 = this.pdf.getStringUnitWidth(f3[0][0], c3) * c3.fontSize / u3;
                } else
                  f3.push([a3, g3]), n3 += h3;
            if (void 0 !== g3["text-align"] && ("center" === g3["text-align"] || "right" === g3["text-align"] || "justify" === g3["text-align"]))
              for (var m3 = 0; m3 < d3.length; ++m3) {
                var w2 = this.pdf.getStringUnitWidth(d3[m3][0][0], c3) * c3.fontSize / u3;
                0 < m3 && (d3[m3][0][1] = T2(d3[m3][0][1]));
                var y2 = p3 - w2;
                if ("right" === g3["text-align"])
                  d3[m3][0][1]["margin-left"] = y2;
                else if ("center" === g3["text-align"])
                  d3[m3][0][1]["margin-left"] = y2 / 2;
                else if ("justify" === g3["text-align"]) {
                  var v3 = d3[m3][0][0].split(" ").length - 1;
                  d3[m3][0][1]["word-spacing"] = y2 / v3, m3 === d3.length - 1 && (d3[m3][0][1]["word-spacing"] = 0);
                }
              }
            return d3;
          }, f2.prototype.RenderTextFragment = function(t3, e2) {
            var n3, r2;
            r2 = 0, this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize() && (this.pdf.internal.write("ET", "Q"), this.pdf.addPage(), this.y = this.pdf.margins_doc.top, this.pdf.internal.write("q", "BT", this.getPdfColor(e2.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"), r2 = Math.max(r2, e2["line-height"], e2["font-size"]), this.pdf.internal.write(0, (-12 * r2).toFixed(2), "Td")), n3 = this.pdf.internal.getFont(e2["font-family"], e2["font-style"]);
            var i3 = this.getPdfColor(e2.color);
            i3 !== this.lastTextColor && (this.pdf.internal.write(i3), this.lastTextColor = i3), void 0 !== e2["word-spacing"] && 0 < e2["word-spacing"] && this.pdf.internal.write(e2["word-spacing"].toFixed(2), "Tw"), this.pdf.internal.write("/" + n3.id, (12 * e2["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(t3) + ") Tj"), void 0 !== e2["word-spacing"] && this.pdf.internal.write(0, "Tw");
          }, f2.prototype.getPdfColor = function(t3) {
            var e2, n3, r2, i3 = new RGBColor(t3), o2 = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t3);
            if (null != o2 ? (e2 = parseInt(o2[1]), n3 = parseInt(o2[2]), r2 = parseInt(o2[3])) : ("#" != t3.charAt(0) && (t3 = i3.ok ? i3.toHex() : "#000000"), e2 = t3.substring(1, 3), e2 = parseInt(e2, 16), n3 = t3.substring(3, 5), n3 = parseInt(n3, 16), r2 = t3.substring(5, 7), r2 = parseInt(r2, 16)), "string" == typeof e2 && /^#[0-9A-Fa-f]{6}$/.test(e2)) {
              var a3 = parseInt(e2.substr(1), 16);
              e2 = a3 >> 16 & 255, n3 = a3 >> 8 & 255, r2 = 255 & a3;
            }
            var s3 = this.f3;
            return 0 === e2 && 0 === n3 && 0 === r2 || void 0 === n3 ? s3(e2 / 255) + " g" : [s3(e2 / 255), s3(n3 / 255), s3(r2 / 255), "rg"].join(" ");
          }, f2.prototype.f3 = function(t3) {
            return t3.toFixed(3);
          }, f2.prototype.renderParagraph = function(t3) {
            var e2, n3, r2, i3, o2, a3, s3, h3, c3, l3, u3, f3, d3;
            if (r2 = v2(this.paragraph.text), f3 = this.paragraph.style, e2 = this.paragraph.blockstyle, this.paragraph.priorblockstyle || {}, this.paragraph = { text: [], style: [], blockstyle: {}, priorblockstyle: e2 }, r2.join("").trim()) {
              s3 = this.splitFragmentsIntoLines(r2, f3), h3 = a3 = void 0, n3 = 12 / this.pdf.internal.scaleFactor, this.priorMarginBottom = this.priorMarginBottom || 0, u3 = (Math.max((e2["margin-top"] || 0) - this.priorMarginBottom, 0) + (e2["padding-top"] || 0)) * n3, l3 = ((e2["margin-bottom"] || 0) + (e2["padding-bottom"] || 0)) * n3, this.priorMarginBottom = e2["margin-bottom"] || 0, "always" === e2["page-break-before"] && (this.pdf.addPage(), this.y = 0, u3 = ((e2["margin-top"] || 0) + (e2["padding-top"] || 0)) * n3), c3 = this.pdf.internal.write, o2 = i3 = void 0, this.y += u3, c3("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
              for (var p3 = 0; s3.length; ) {
                for (i3 = h3 = 0, o2 = (a3 = s3.shift()).length; i3 !== o2; )
                  a3[i3][0].trim() && (h3 = Math.max(h3, a3[i3][1]["line-height"], a3[i3][1]["font-size"]), d3 = 7 * a3[i3][1]["font-size"]), i3++;
                var g3 = 0, m3 = 0;
                for (void 0 !== a3[0][1]["margin-left"] && 0 < a3[0][1]["margin-left"] && (g3 = (m3 = this.pdf.internal.getCoordinateString(a3[0][1]["margin-left"])) - p3, p3 = m3), c3(g3 + Math.max(e2["margin-left"] || 0, 0) * n3, (-12 * h3).toFixed(2), "Td"), i3 = 0, o2 = a3.length; i3 !== o2; )
                  a3[i3][0] && this.RenderTextFragment(a3[i3][0], a3[i3][1]), i3++;
                if (this.y += h3 * n3, this.executeWatchFunctions(a3[0][1]) && 0 < s3.length) {
                  var w2 = [], y2 = [];
                  s3.forEach(function(t4) {
                    for (var e3 = 0, n4 = t4.length; e3 !== n4; )
                      t4[e3][0] && (w2.push(t4[e3][0] + " "), y2.push(t4[e3][1])), ++e3;
                  }), s3 = this.splitFragmentsIntoLines(v2(w2), y2), c3("ET", "Q"), c3("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
                }
              }
              return t3 && "function" == typeof t3 && t3.call(this, this.x - 9, this.y - d3 / 2), c3("ET", "Q"), this.y += l3;
            }
          }, f2.prototype.setBlockBoundary = function(t3) {
            return this.renderParagraph(t3);
          }, f2.prototype.setBlockStyle = function(t3) {
            return this.paragraph.blockstyle = t3;
          }, f2.prototype.addText = function(t3, e2) {
            return this.paragraph.text.push(t3), this.paragraph.style.push(e2);
          }, i2 = { helvetica: "helvetica", "sans-serif": "helvetica", "times new roman": "times", serif: "times", times: "times", monospace: "courier", courier: "courier" }, h2 = { 100: "normal", 200: "normal", 300: "normal", 400: "normal", 500: "bold", 600: "bold", 700: "bold", 800: "bold", 900: "bold", normal: "normal", bold: "bold", bolder: "bold", lighter: "normal" }, a2 = { normal: "normal", italic: "italic", oblique: "italic" }, s2 = { left: "left", right: "right", center: "center", justify: "justify" }, c2 = { none: "none", right: "right", left: "left" }, l2 = { none: "none", both: "both" }, n2 = { normal: 1 }, t2.fromHTML = function(t3, e2, n3, r2, i3, o2) {
            return this.margins_doc = o2 || { top: 0, bottom: 0 }, r2 || (r2 = {}), r2.elementHandlers || (r2.elementHandlers = {}), m2(this, t3, isNaN(e2) ? 4 : e2, isNaN(n3) ? 4 : n3, r2, i3);
          };
        }($.API), $.API.addJS = function(t2) {
          return s = t2, this.internal.events.subscribe("postPutResources", function(t3) {
            n = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (n + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), r = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + s + ")"), this.internal.out(">>"), this.internal.out("endobj");
          }), this.internal.events.subscribe("putCatalog", function() {
            void 0 !== n && void 0 !== r && this.internal.out("/Names <</JavaScript " + n + " 0 R>>");
          }), this;
        }, /**
           * jsPDF Outline PlugIn
           * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
           *
           * Licensed under the MIT License.
           * http://opensource.org/licenses/mit-license
           */
        (c = $.API).events.push(["postPutResources", function() {
          var t2 = this, e2 = /^(\d+) 0 obj$/;
          if (0 < this.outline.root.children.length)
            for (var n2 = t2.outline.render().split(/\r\n/), r2 = 0; r2 < n2.length; r2++) {
              var i2 = n2[r2], o2 = e2.exec(i2);
              if (null != o2) {
                var a2 = o2[1];
                t2.internal.newObjectDeferredBegin(a2);
              }
              t2.internal.write(i2);
            }
          if (this.outline.createNamedDestinations) {
            var s2 = this.internal.pages.length, h2 = [];
            for (r2 = 0; r2 < s2; r2++) {
              var c2 = t2.internal.newObject();
              h2.push(c2);
              var l2 = t2.internal.getPageInfo(r2 + 1);
              t2.internal.write("<< /D[" + l2.objId + " 0 R /XYZ null null null]>> endobj");
            }
            var u2 = t2.internal.newObject();
            for (t2.internal.write("<< /Names [ "), r2 = 0; r2 < h2.length; r2++)
              t2.internal.write("(page_" + (r2 + 1) + ")" + h2[r2] + " 0 R");
            t2.internal.write(" ] >>", "endobj"), t2.internal.newObject(), t2.internal.write("<< /Dests " + u2 + " 0 R"), t2.internal.write(">>", "endobj");
          }
        }]), c.events.push(["putCatalog", function() {
          0 < this.outline.root.children.length && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + namesOid + " 0 R"));
        }]), c.events.push(["initialized", function() {
          var o2 = this;
          o2.outline = { createNamedDestinations: false, root: { children: [] } }, o2.outline.add = function(t2, e2, n2) {
            var r2 = { title: e2, options: n2, children: [] };
            return null == t2 && (t2 = this.root), t2.children.push(r2), r2;
          }, o2.outline.render = function() {
            return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = o2, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
          }, o2.outline.genIds_r = function(t2) {
            t2.id = o2.internal.newObjectDeferred();
            for (var e2 = 0; e2 < t2.children.length; e2++)
              this.genIds_r(t2.children[e2]);
          }, o2.outline.renderRoot = function(t2) {
            this.objStart(t2), this.line("/Type /Outlines"), 0 < t2.children.length && (this.line("/First " + this.makeRef(t2.children[0])), this.line("/Last " + this.makeRef(t2.children[t2.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, t2)), this.objEnd();
          }, o2.outline.renderItems = function(t2) {
            for (var e2 = 0; e2 < t2.children.length; e2++) {
              var n2 = t2.children[e2];
              this.objStart(n2), this.line("/Title " + this.makeString(n2.title)), this.line("/Parent " + this.makeRef(t2)), 0 < e2 && this.line("/Prev " + this.makeRef(t2.children[e2 - 1])), e2 < t2.children.length - 1 && this.line("/Next " + this.makeRef(t2.children[e2 + 1])), 0 < n2.children.length && (this.line("/First " + this.makeRef(n2.children[0])), this.line("/Last " + this.makeRef(n2.children[n2.children.length - 1])));
              var r2 = this.count = this.count_r({ count: 0 }, n2);
              if (0 < r2 && this.line("/Count " + r2), n2.options && n2.options.pageNumber) {
                var i2 = o2.internal.getPageInfo(n2.options.pageNumber);
                this.line("/Dest [" + i2.objId + " 0 R /XYZ 0 " + this.ctx.pdf.internal.pageSize.getHeight() * this.ctx.pdf.internal.scaleFactor + " 0]");
              }
              this.objEnd();
            }
            for (e2 = 0; e2 < t2.children.length; e2++)
              n2 = t2.children[e2], this.renderItems(n2);
          }, o2.outline.line = function(t2) {
            this.ctx.val += t2 + "\r\n";
          }, o2.outline.makeRef = function(t2) {
            return t2.id + " 0 R";
          }, o2.outline.makeString = function(t2) {
            return "(" + o2.internal.pdfEscape(t2) + ")";
          }, o2.outline.objStart = function(t2) {
            this.ctx.val += "\r\n" + t2.id + " 0 obj\r\n<<\r\n";
          }, o2.outline.objEnd = function(t2) {
            this.ctx.val += ">> \r\nendobj\r\n";
          }, o2.outline.count_r = function(t2, e2) {
            for (var n2 = 0; n2 < e2.children.length; n2++)
              t2.count++, this.count_r(t2, e2.children[n2]);
            return t2.count;
          };
        }]), /**@preserve
           *  ====================================================================
           * jsPDF PNG PlugIn
           * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
           *
           * 
           * ====================================================================
           */
        P = $.API, E = function() {
          var t2 = "function" == typeof Deflater;
          if (!t2)
            throw new Error("requires deflate.js for compression");
          return t2;
        }, q = function(t2, e2, n2, r2) {
          var i2 = 5, o2 = b;
          switch (r2) {
            case P.image_compression.FAST:
              i2 = 3, o2 = v;
              break;
            case P.image_compression.MEDIUM:
              i2 = 6, o2 = x;
              break;
            case P.image_compression.SLOW:
              i2 = 9, o2 = S;
          }
          t2 = w(t2, e2, n2, o2);
          var a2 = new Uint8Array(g(i2)), s2 = m(t2), h2 = new Deflater(i2), c2 = h2.append(t2), l2 = h2.flush(), u2 = a2.length + c2.length + l2.length, f2 = new Uint8Array(u2 + 4);
          return f2.set(a2), f2.set(c2, a2.length), f2.set(l2, a2.length + c2.length), f2[u2++] = s2 >>> 24 & 255, f2[u2++] = s2 >>> 16 & 255, f2[u2++] = s2 >>> 8 & 255, f2[u2++] = 255 & s2, P.arrayBufferToBinaryString(f2);
        }, g = function(t2, e2) {
          var n2 = Math.LOG2E * Math.log(32768) - 8 << 4 | 8, r2 = n2 << 8;
          return r2 |= Math.min(3, (e2 - 1 & 255) >> 1) << 6, r2 |= 0, [n2, 255 & (r2 += 31 - r2 % 31)];
        }, m = function(t2, e2) {
          for (var n2, r2 = 1, i2 = 0, o2 = t2.length, a2 = 0; 0 < o2; ) {
            for (o2 -= n2 = e2 < o2 ? e2 : o2; i2 += r2 += t2[a2++], --n2; )
              ;
            r2 %= 65521, i2 %= 65521;
          }
          return (i2 << 16 | r2) >>> 0;
        }, w = function(t2, e2, n2, r2) {
          for (var i2, o2, a2, s2 = t2.length / e2, h2 = new Uint8Array(t2.length + s2), c2 = k(), l2 = 0; l2 < s2; l2++) {
            if (a2 = l2 * e2, i2 = t2.subarray(a2, a2 + e2), r2)
              h2.set(r2(i2, n2, o2), a2 + l2);
            else {
              for (var u2 = 0, f2 = c2.length, d2 = []; u2 < f2; u2++)
                d2[u2] = c2[u2](i2, n2, o2);
              var p2 = _(d2.concat());
              h2.set(d2[p2], a2 + l2);
            }
            o2 = i2;
          }
          return h2;
        }, l = function(t2, e2, n2) {
          var r2 = Array.apply([], t2);
          return r2.unshift(0), r2;
        }, v = function(t2, e2, n2) {
          var r2, i2 = [], o2 = 0, a2 = t2.length;
          for (i2[0] = 1; o2 < a2; o2++)
            r2 = t2[o2 - e2] || 0, i2[o2 + 1] = t2[o2] - r2 + 256 & 255;
          return i2;
        }, b = function(t2, e2, n2) {
          var r2, i2 = [], o2 = 0, a2 = t2.length;
          for (i2[0] = 2; o2 < a2; o2++)
            r2 = n2 && n2[o2] || 0, i2[o2 + 1] = t2[o2] - r2 + 256 & 255;
          return i2;
        }, x = function(t2, e2, n2) {
          var r2, i2, o2 = [], a2 = 0, s2 = t2.length;
          for (o2[0] = 3; a2 < s2; a2++)
            r2 = t2[a2 - e2] || 0, i2 = n2 && n2[a2] || 0, o2[a2 + 1] = t2[a2] + 256 - (r2 + i2 >>> 1) & 255;
          return o2;
        }, S = function(t2, e2, n2) {
          var r2, i2, o2, a2, s2 = [], h2 = 0, c2 = t2.length;
          for (s2[0] = 4; h2 < c2; h2++)
            r2 = t2[h2 - e2] || 0, i2 = n2 && n2[h2] || 0, o2 = n2 && n2[h2 - e2] || 0, a2 = u(r2, i2, o2), s2[h2 + 1] = t2[h2] - a2 + 256 & 255;
          return s2;
        }, u = function(t2, e2, n2) {
          var r2 = t2 + e2 - n2, i2 = Math.abs(r2 - t2), o2 = Math.abs(r2 - e2), a2 = Math.abs(r2 - n2);
          return i2 <= o2 && i2 <= a2 ? t2 : o2 <= a2 ? e2 : n2;
        }, k = function() {
          return [l, v, b, x, S];
        }, _ = function(t2) {
          for (var e2, n2, r2, i2 = 0, o2 = t2.length; i2 < o2; )
            ((e2 = f(t2[i2].slice(1))) < n2 || !n2) && (n2 = e2, r2 = i2), i2++;
          return r2;
        }, f = function(t2) {
          for (var e2 = 0, n2 = t2.length, r2 = 0; e2 < n2; )
            r2 += Math.abs(t2[e2++]);
          return r2;
        }, P.processPNG = function(t2, e2, n2, r2, i2) {
          var o2, a2, s2, h2, c2, l2, u2 = this.color_spaces.DEVICE_RGB, f2 = this.decode.FLATE_DECODE, d2 = 8;
          if (this.isArrayBuffer(t2) && (t2 = new Uint8Array(t2)), this.isArrayBufferView(t2)) {
            if ("function" != typeof PNG || "function" != typeof kt)
              throw new Error("PNG support requires png.js and zlib.js");
            if (t2 = (o2 = new PNG(t2)).imgData, d2 = o2.bits, u2 = o2.colorSpace, h2 = o2.colors, -1 !== [4, 6].indexOf(o2.colorType)) {
              if (8 === o2.bits)
                for (var p2, g2 = (I2 = 32 == o2.pixelBitlength ? new Uint32Array(o2.decodePixels().buffer) : 16 == o2.pixelBitlength ? new Uint16Array(o2.decodePixels().buffer) : new Uint8Array(o2.decodePixels().buffer)).length, m2 = new Uint8Array(g2 * o2.colors), w2 = new Uint8Array(g2), y2 = o2.pixelBitlength - o2.bits, v2 = 0, b2 = 0; v2 < g2; v2++) {
                  for (x2 = I2[v2], p2 = 0; p2 < y2; )
                    m2[b2++] = x2 >>> p2 & 255, p2 += o2.bits;
                  w2[v2] = x2 >>> p2 & 255;
                }
              if (16 === o2.bits) {
                g2 = (I2 = new Uint32Array(o2.decodePixels().buffer)).length, m2 = new Uint8Array(g2 * (32 / o2.pixelBitlength) * o2.colors), w2 = new Uint8Array(g2 * (32 / o2.pixelBitlength));
                for (var x2, S2 = 1 < o2.colors, k2 = b2 = v2 = 0; v2 < g2; )
                  x2 = I2[v2++], m2[b2++] = x2 >>> 0 & 255, S2 && (m2[b2++] = x2 >>> 16 & 255, x2 = I2[v2++], m2[b2++] = x2 >>> 0 & 255), w2[k2++] = x2 >>> 16 & 255;
                d2 = 8;
              }
              r2 !== P.image_compression.NONE && E() ? (t2 = q(m2, o2.width * o2.colors, o2.colors, r2), l2 = q(w2, o2.width, 1, r2)) : (t2 = m2, l2 = w2, f2 = null);
            }
            if (3 === o2.colorType && (u2 = this.color_spaces.INDEXED, c2 = o2.palette, o2.transparency.indexed)) {
              var _2 = o2.transparency.indexed, A2 = 0;
              for (v2 = 0, g2 = _2.length; v2 < g2; ++v2)
                A2 += _2[v2];
              if ((A2 /= 255) == g2 - 1 && -1 !== _2.indexOf(0))
                s2 = [_2.indexOf(0)];
              else if (A2 !== g2) {
                var I2 = o2.decodePixels();
                for (w2 = new Uint8Array(I2.length), v2 = 0, g2 = I2.length; v2 < g2; v2++)
                  w2[v2] = _2[I2[v2]];
                l2 = q(w2, o2.width, 1);
              }
            }
            var C2 = function(t3) {
              var e3;
              switch (t3) {
                case P.image_compression.FAST:
                  e3 = 11;
                  break;
                case P.image_compression.MEDIUM:
                  e3 = 13;
                  break;
                case P.image_compression.SLOW:
                  e3 = 14;
                  break;
                default:
                  e3 = 12;
              }
              return e3;
            }(r2);
            return a2 = f2 === this.decode.FLATE_DECODE ? "/Predictor " + C2 + " /Colors " + h2 + " /BitsPerComponent " + d2 + " /Columns " + o2.width : "/Colors " + h2 + " /BitsPerComponent " + d2 + " /Columns " + o2.width, (this.isArrayBuffer(t2) || this.isArrayBufferView(t2)) && (t2 = this.arrayBufferToBinaryString(t2)), (l2 && this.isArrayBuffer(l2) || this.isArrayBufferView(l2)) && (l2 = this.arrayBufferToBinaryString(l2)), this.createImageInfo(t2, o2.width, o2.height, u2, d2, f2, e2, n2, a2, s2, c2, l2, C2);
          }
          throw new Error("Unsupported PNG image data, try using JPEG instead.");
        }, /**
           * jsPDF gif Support PlugIn
           * Copyright (c) 2017 Aras Abbasi 
           *
           * Licensed under the MIT License.
           * http://opensource.org/licenses/mit-license
           */
        (A = $.API).processGIF89A = function(t2, e2, n2, r2, i2) {
          var o2 = new mt(t2), a2 = o2.width, s2 = o2.height, h2 = [];
          o2.decodeAndBlitFrameRGBA(0, h2);
          var c2 = { data: h2, width: a2, height: s2 }, l2 = new yt(100).encode(c2, 100);
          return A.processJPEG.call(this, l2, e2, n2, r2);
        }, A.processGIF87A = A.processGIF89A, /**
           * jsPDF bmp Support PlugIn
           * Copyright (c) 2018 Aras Abbasi 
           *
           * Licensed under the MIT License.
           * http://opensource.org/licenses/mit-license
           */
        (O = $.API).processBMP = function(t2, e2, n2, r2, i2) {
          var o2 = new xt(t2, false), a2 = o2.width, s2 = o2.height, h2 = { data: o2.getData(), width: a2, height: s2 }, c2 = new yt(100).encode(h2, 100);
          return O.processJPEG.call(this, c2, e2, n2, r2);
        }, $.API.setLanguage = function(t2) {
          return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = false), void 0 !== { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "FYRO Macedonian", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[t2] && (this.internal.languageSettings.languageCode = t2, false === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
            this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
          }), this.internal.languageSettings.isSubscribed = true)), this;
        }, /** @preserve
           * jsPDF split_text_to_size plugin - MIT license.
           * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
           *               2014 Diego Casorran, https://github.com/diegocr
           */
        B = $.API, R = B.getCharWidthsArray = function(t2, e2) {
          var n2, r2, i2, o2 = (e2 = e2 || {}).font || this.internal.getFont(), a2 = e2.fontSize || this.internal.getFontSize(), s2 = e2.charSpace || this.internal.getCharSpace(), h2 = e2.widths ? e2.widths : o2.metadata.Unicode.widths, c2 = h2.fof ? h2.fof : 1, l2 = e2.kerning ? e2.kerning : o2.metadata.Unicode.kerning, u2 = l2.fof ? l2.fof : 1, f2 = 0, d2 = h2[0] || c2, p2 = [];
          for (n2 = 0, r2 = t2.length; n2 < r2; n2++)
            i2 = t2.charCodeAt(n2), "function" == typeof o2.metadata.widthOfString ? p2.push((o2.metadata.widthOfGlyph(o2.metadata.characterToGlyph(i2)) + s2 * (1e3 / a2) || 0) / 1e3) : p2.push((h2[i2] || d2) / c2 + (l2[i2] && l2[i2][f2] || 0) / u2), f2 = i2;
          return p2;
        }, j = B.getArraySum = function(t2) {
          for (var e2 = t2.length, n2 = 0; e2; )
            n2 += t2[--e2];
          return n2;
        }, D = B.getStringUnitWidth = function(t2, e2) {
          var n2 = (e2 = e2 || {}).fontSize || this.internal.getFontSize(), r2 = e2.font || this.internal.getFont(), i2 = e2.charSpace || this.internal.getCharSpace();
          return "function" == typeof r2.metadata.widthOfString ? r2.metadata.widthOfString(t2, n2, i2) / n2 : j(R.apply(this, arguments));
        }, M = function(t2, e2, n2, r2) {
          for (var i2 = [], o2 = 0, a2 = t2.length, s2 = 0; o2 !== a2 && s2 + e2[o2] < n2; )
            s2 += e2[o2], o2++;
          i2.push(t2.slice(0, o2));
          var h2 = o2;
          for (s2 = 0; o2 !== a2; )
            s2 + e2[o2] > r2 && (i2.push(t2.slice(h2, o2)), s2 = 0, h2 = o2), s2 += e2[o2], o2++;
          return h2 !== o2 && i2.push(t2.slice(h2, o2)), i2;
        }, U = function(t2, e2, n2) {
          n2 || (n2 = {});
          var r2, i2, o2, a2, s2, h2, c2 = [], l2 = [c2], u2 = n2.textIndent || 0, f2 = 0, d2 = 0, p2 = t2.split(" "), g2 = R.apply(this, [" ", n2])[0];
          if (h2 = -1 === n2.lineIndent ? p2[0].length + 2 : n2.lineIndent || 0) {
            var m2 = Array(h2).join(" "), w2 = [];
            p2.map(function(t3) {
              1 < (t3 = t3.split(/\s*\n/)).length ? w2 = w2.concat(t3.map(function(t4, e3) {
                return (e3 && t4.length ? "\n" : "") + t4;
              })) : w2.push(t3[0]);
            }), p2 = w2, h2 = D.apply(this, [m2, n2]);
          }
          for (o2 = 0, a2 = p2.length; o2 < a2; o2++) {
            var y2 = 0;
            if (r2 = p2[o2], h2 && "\n" == r2[0] && (r2 = r2.substr(1), y2 = 1), i2 = R.apply(this, [r2, n2]), e2 < u2 + f2 + (d2 = j(i2)) || y2) {
              if (e2 < d2) {
                for (s2 = M.apply(this, [r2, i2, e2 - (u2 + f2), e2]), c2.push(s2.shift()), c2 = [s2.pop()]; s2.length; )
                  l2.push([s2.shift()]);
                d2 = j(i2.slice(r2.length - (c2[0] ? c2[0].length : 0)));
              } else
                c2 = [r2];
              l2.push(c2), u2 = d2 + h2, f2 = g2;
            } else
              c2.push(r2), u2 += f2 + d2, f2 = g2;
          }
          if (h2)
            var v2 = function(t3, e3) {
              return (e3 ? m2 : "") + t3.join(" ");
            };
          else
            v2 = function(t3) {
              return t3.join(" ");
            };
          return l2.map(v2);
        }, B.splitTextToSize = function(t2, e2, n2) {
          var r2, i2 = (n2 = n2 || {}).fontSize || this.internal.getFontSize(), o2 = function(t3) {
            var e3 = { 0: 1 }, n3 = {};
            if (t3.widths && t3.kerning)
              return { widths: t3.widths, kerning: t3.kerning };
            var r3 = this.internal.getFont(t3.fontName, t3.fontStyle), i3 = "Unicode";
            return r3.metadata[i3] ? { widths: r3.metadata[i3].widths || e3, kerning: r3.metadata[i3].kerning || n3 } : { font: r3.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
          }.call(this, n2);
          r2 = Array.isArray(t2) ? t2 : t2.split(/\r?\n/);
          var a2 = 1 * this.internal.scaleFactor * e2 / i2;
          o2.textIndent = n2.textIndent ? 1 * n2.textIndent * this.internal.scaleFactor / i2 : 0, o2.lineIndent = n2.lineIndent;
          var s2, h2, c2 = [];
          for (s2 = 0, h2 = r2.length; s2 < h2; s2++)
            c2 = c2.concat(U.apply(this, [r2[s2], a2, o2]));
          return c2;
        }, /** @preserve 
          jsPDF standard_fonts_metrics plugin
          Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
          MIT license.
          */
        N = $.API, L = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: (z = function(t2) {
          for (var e2 = "klmnopqrstuvwxyz", n2 = {}, r2 = 0; r2 < e2.length; r2++)
            n2[e2[r2]] = "0123456789abcdef"[r2];
          var i2, o2, a2, s2, h2, c2 = {}, l2 = 1, u2 = c2, f2 = [], d2 = "", p2 = "", g2 = t2.length - 1;
          for (r2 = 1; r2 != g2; )
            h2 = t2[r2], r2 += 1, "'" == h2 ? o2 ? (s2 = o2.join(""), o2 = i2) : o2 = [] : o2 ? o2.push(h2) : "{" == h2 ? (f2.push([u2, s2]), u2 = {}, s2 = i2) : "}" == h2 ? ((a2 = f2.pop())[0][a2[1]] = u2, s2 = i2, u2 = a2[0]) : "-" == h2 ? l2 = -1 : s2 === i2 ? n2.hasOwnProperty(h2) ? (d2 += n2[h2], s2 = parseInt(d2, 16) * l2, l2 = 1, d2 = "") : d2 += h2 : n2.hasOwnProperty(h2) ? (p2 += n2[h2], u2[s2] = parseInt(p2, 16) * l2, l2 = 1, s2 = i2, p2 = "") : p2 += h2;
          return c2;
        })("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, H = {
          Unicode: { Courier: L, "Courier-Bold": L, "Courier-BoldOblique": L, "Courier-Oblique": L, Helvetica: L, "Helvetica-Bold": L, "Helvetica-BoldOblique": L, "Helvetica-Oblique": L, "Times-Roman": L, "Times-Bold": L, "Times-BoldItalic": L, "Times-Italic": L }
          /** 
              Resources:
              Font metrics data is reprocessed derivative of contents of
              "Font Metrics for PDF Core 14 Fonts" package, which exhibits the following copyright and license:
              
              Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated. All Rights Reserved.
              
              This file and the 14 PostScript(R) AFM files it accompanies may be used,
              copied, and distributed for any purpose and without charge, with or without
              modification, provided that all copyright notices are retained; that the AFM
              files are not distributed without this file; that all modifications to this
              file or any of the AFM files are prominently noted in the modified file(s);
              and that this paragraph is not modified. Adobe Systems has no responsibility
              or obligation to support the use of the AFM files.
              
              */
        }, W = { Unicode: { "Courier-Oblique": z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": z("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": z("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": z("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: z("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: z("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": z("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: z("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": z("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": z("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": z("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } }, N.events.push(["addFont", function(t2) {
          var e2, n2, r2, i2 = "Unicode";
          (e2 = W[i2][t2.postScriptName]) && ((n2 = t2.metadata[i2] ? t2.metadata[i2] : t2.metadata[i2] = {}).widths = e2.widths, n2.kerning = e2.kerning), (r2 = H[i2][t2.postScriptName]) && ((n2 = t2.metadata[i2] ? t2.metadata[i2] : t2.metadata[i2] = {}).encoding = r2).codePages && r2.codePages.length && (t2.encoding = r2.codePages[0]);
        }]), G = $, "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")(), G.API.events.push(["addFont", function(t2) {
          G.API.existsFileInVFS(t2.postScriptName) ? (t2.metadata = G.API.TTFFont.open(t2.postScriptName, t2.fontName, G.API.getFileFromVFS(t2.postScriptName), t2.encoding), t2.metadata.Unicode = t2.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }) : 14 < t2.id.slice(1) && console.error("Font does not exist in FileInVFS, import fonts or remove declaration doc.addFont('" + t2.postScriptName + "').");
        }]), /** @preserve
          jsPDF SVG plugin
          Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
          */
        (V = $.API).addSvg = function(t2, e2, n2, r2, i2) {
          if (void 0 === e2 || void 0 === n2)
            throw new Error("addSVG needs values for 'x' and 'y'");
          function o2(t3) {
            for (var e3 = parseFloat(t3[1]), n3 = parseFloat(t3[2]), r3 = [], i3 = 3, o3 = t3.length; i3 < o3; )
              "c" === t3[i3] ? (r3.push([parseFloat(t3[i3 + 1]), parseFloat(t3[i3 + 2]), parseFloat(t3[i3 + 3]), parseFloat(t3[i3 + 4]), parseFloat(t3[i3 + 5]), parseFloat(t3[i3 + 6])]), i3 += 7) : "l" === t3[i3] ? (r3.push([parseFloat(t3[i3 + 1]), parseFloat(t3[i3 + 2])]), i3 += 3) : i3 += 1;
            return [e3, n3, r3];
          }
          var a2, s2, h2, c2, l2, u2, f2, d2, p2 = (c2 = document, d2 = c2.createElement("iframe"), l2 = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}", (f2 = (u2 = c2).createElement("style")).type = "text/css", f2.styleSheet ? f2.styleSheet.cssText = l2 : f2.appendChild(u2.createTextNode(l2)), u2.getElementsByTagName("head")[0].appendChild(f2), d2.name = "childframe", d2.setAttribute("width", 0), d2.setAttribute("height", 0), d2.setAttribute("frameborder", "0"), d2.setAttribute("scrolling", "no"), d2.setAttribute("seamless", "seamless"), d2.setAttribute("class", "jsPDF_sillysvg_iframe"), c2.body.appendChild(d2), d2), g2 = (a2 = t2, (h2 = ((s2 = p2).contentWindow || s2.contentDocument).document).write(a2), h2.close(), h2.getElementsByTagName("svg")[0]), m2 = [1, 1], w2 = parseFloat(g2.getAttribute("width")), y2 = parseFloat(g2.getAttribute("height"));
          w2 && y2 && (r2 && i2 ? m2 = [r2 / w2, i2 / y2] : r2 ? m2 = [r2 / w2, r2 / w2] : i2 && (m2 = [i2 / y2, i2 / y2]));
          var v2, b2, x2, S2, k2 = g2.childNodes;
          for (v2 = 0, b2 = k2.length; v2 < b2; v2++)
            (x2 = k2[v2]).tagName && "PATH" === x2.tagName.toUpperCase() && ((S2 = o2(x2.getAttribute("d").split(" ")))[0] = S2[0] * m2[0] + e2, S2[1] = S2[1] * m2[1] + n2, this.lines.call(this, S2[2], S2[0], S2[1], m2));
          return this;
        }, V.addSVG = V.addSvg, V.addSvgAsImage = function(t2, e2, n2, r2, i2, o2, a2, s2) {
          if (isNaN(e2) || isNaN(n2))
            throw console.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
          if (isNaN(r2) || isNaN(i2))
            throw console.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
          var h2 = document.createElement("canvas");
          h2.width = r2, h2.height = i2;
          var c2 = h2.getContext("2d");
          return c2.fillStyle = "#fff", c2.fillRect(0, 0, h2.width, h2.height), canvg(h2, t2, { ignoreMouse: true, ignoreAnimation: true, ignoreDimensions: true, ignoreClear: true }), this.addImage(h2.toDataURL("image/jpeg", 1), e2, n2, r2, i2, a2, s2), this;
        }, $.API.putTotalPages = function(t2) {
          for (var e2 = new RegExp(t2, "g"), n2 = 1; n2 <= this.internal.getNumberOfPages(); n2++)
            for (var r2 = 0; r2 < this.internal.pages[n2].length; r2++)
              this.internal.pages[n2][r2] = this.internal.pages[n2][r2].replace(e2, this.internal.getNumberOfPages());
          return this;
        }, $.API.viewerPreferences = function(t2, e2) {
          var n2;
          t2 = t2 || {}, e2 = e2 || false;
          var r2, i2, o2 = { HideToolbar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideMenubar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, FitWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, CenterWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: false, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: false, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: false, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: false, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: false, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: false, valueSet: null, pdfVersion: 1.7 } }, a2 = Object.keys(o2), s2 = [], h2 = 0, c2 = 0, l2 = 0, u2 = true;
          function f2(t3, e3) {
            var n3, r3 = false;
            for (n3 = 0; n3 < t3.length; n3 += 1)
              t3[n3] === e3 && (r3 = true);
            return r3;
          }
          if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o2)), this.internal.viewerpreferences.isSubscribed = false), n2 = this.internal.viewerpreferences.configuration, "reset" === t2 || true === e2) {
            var d2 = a2.length;
            for (l2 = 0; l2 < d2; l2 += 1)
              n2[a2[l2]].value = n2[a2[l2]].defaultValue, n2[a2[l2]].explicitSet = false;
          }
          if ("object" === (void 0 === t2 ? "undefined" : vt(t2))) {
            for (r2 in t2)
              if (i2 = t2[r2], f2(a2, r2) && void 0 !== i2) {
                if ("boolean" === n2[r2].type && "boolean" == typeof i2)
                  n2[r2].value = i2;
                else if ("name" === n2[r2].type && f2(n2[r2].valueSet, i2))
                  n2[r2].value = i2;
                else if ("integer" === n2[r2].type && Number.isInteger(i2))
                  n2[r2].value = i2;
                else if ("array" === n2[r2].type) {
                  for (h2 = 0; h2 < i2.length; h2 += 1)
                    if (u2 = true, 1 === i2[h2].length && "number" == typeof i2[h2][0])
                      s2.push(String(i2[h2]));
                    else if (1 < i2[h2].length) {
                      for (c2 = 0; c2 < i2[h2].length; c2 += 1)
                        "number" != typeof i2[h2][c2] && (u2 = false);
                      true === u2 && s2.push(String(i2[h2].join("-")));
                    }
                  n2[r2].value = String(s2);
                } else
                  n2[r2].value = n2[r2].defaultValue;
                n2[r2].explicitSet = true;
              }
          }
          return false === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
            var t3, e3 = [];
            for (t3 in n2)
              true === n2[t3].explicitSet && ("name" === n2[t3].type ? e3.push("/" + t3 + " /" + n2[t3].value) : e3.push("/" + t3 + " " + n2[t3].value));
            0 !== e3.length && this.internal.write("/ViewerPreferences\n<<\n" + e3.join("\n") + "\n>>");
          }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = n2, this;
        }, /** ==================================================================== 
           * jsPDF XMP metadata plugin
           * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
           * 
           * 
           * ====================================================================
           */
        Y = $.API, K = J = X = "", Y.addMetadata = function(t2, e2) {
          return J = e2 || "http://jspdf.default.namespaceuri/", X = t2, this.internal.events.subscribe("postPutResources", function() {
            if (X) {
              var t3 = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + J + '"><jspdf:metadata>', e3 = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), n2 = unescape(encodeURIComponent(t3)), r2 = unescape(encodeURIComponent(X)), i2 = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), o2 = unescape(encodeURIComponent("</x:xmpmeta>")), a2 = n2.length + r2.length + i2.length + e3.length + o2.length;
              K = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + a2 + " >>"), this.internal.write("stream"), this.internal.write(e3 + n2 + r2 + i2 + o2), this.internal.write("endstream"), this.internal.write("endobj");
            } else
              K = "";
          }), this.internal.events.subscribe("putCatalog", function() {
            K && this.internal.write("/Metadata " + K + " 0 R");
          }), this;
        }, function(l2, t2) {
          var e2 = l2.API, m2 = [0];
          e2.events.push(["putFont", function(t3) {
            !function(t4, e3, n2) {
              if (t4.metadata instanceof l2.API.TTFFont && "Identity-H" === t4.encoding) {
                for (var r2 = t4.metadata.Unicode.widths, i2 = t4.metadata.subset.encode(m2), o2 = "", a2 = 0; a2 < i2.length; a2++)
                  o2 += String.fromCharCode(i2[a2]);
                var s2 = n2();
                e3("<<"), e3("/Length " + o2.length), e3("/Length1 " + o2.length), e3(">>"), e3("stream"), e3(o2), e3("endstream"), e3("endobj");
                var h2 = n2();
                e3("<<"), e3("/Type /FontDescriptor"), e3("/FontName /" + t4.fontName), e3("/FontFile2 " + s2 + " 0 R"), e3("/FontBBox " + l2.API.PDFObject.convert(t4.metadata.bbox)), e3("/Flags " + t4.metadata.flags), e3("/StemV " + t4.metadata.stemV), e3("/ItalicAngle " + t4.metadata.italicAngle), e3("/Ascent " + t4.metadata.ascender), e3("/Descent " + t4.metadata.decender), e3("/CapHeight " + t4.metadata.capHeight), e3(">>"), e3("endobj");
                var c3 = n2();
                e3("<<"), e3("/Type /Font"), e3("/BaseFont /" + t4.fontName), e3("/FontDescriptor " + h2 + " 0 R"), e3("/W " + l2.API.PDFObject.convert(r2)), e3("/CIDToGIDMap /Identity"), e3("/DW 1000"), e3("/Subtype /CIDFontType2"), e3("/CIDSystemInfo"), e3("<<"), e3("/Supplement 0"), e3("/Registry (Adobe)"), e3("/Ordering (" + t4.encoding + ")"), e3(">>"), e3(">>"), e3("endobj"), t4.objectNumber = n2(), e3("<<"), e3("/Type /Font"), e3("/Subtype /Type0"), e3("/BaseFont /" + t4.fontName), e3("/Encoding /" + t4.encoding), e3("/DescendantFonts [" + c3 + " 0 R]"), e3(">>"), e3("endobj"), t4.isAlreadyPutted = true;
              }
            }(t3.font, t3.out, t3.newObject);
          }]);
          e2.events.push(["putFont", function(t3) {
            !function(t4, e3, n2) {
              if (t4.metadata instanceof l2.API.TTFFont && "WinAnsiEncoding" === t4.encoding) {
                t4.metadata.Unicode.widths;
                for (var r2 = t4.metadata.rawData, i2 = "", o2 = 0; o2 < r2.length; o2++)
                  i2 += String.fromCharCode(r2[o2]);
                var a2 = n2();
                e3("<<"), e3("/Length " + i2.length), e3("/Length1 " + i2.length), e3(">>"), e3("stream"), e3(i2), e3("endstream"), e3("endobj");
                var s2 = n2();
                for (e3("<<"), e3("/Descent " + t4.metadata.decender), e3("/CapHeight " + t4.metadata.capHeight), e3("/StemV " + t4.metadata.stemV), e3("/Type /FontDescriptor"), e3("/FontFile2 " + a2 + " 0 R"), e3("/Flags 96"), e3("/FontBBox " + l2.API.PDFObject.convert(t4.metadata.bbox)), e3("/FontName /" + t4.fontName), e3("/ItalicAngle " + t4.metadata.italicAngle), e3("/Ascent " + t4.metadata.ascender), e3(">>"), e3("endobj"), t4.objectNumber = n2(), o2 = 0; o2 < t4.metadata.hmtx.widths.length; o2++)
                  t4.metadata.hmtx.widths[o2] = parseInt(t4.metadata.hmtx.widths[o2] * (1e3 / t4.metadata.head.unitsPerEm));
                e3("<</Subtype/TrueType/Type/Font/BaseFont/" + t4.fontName + "/FontDescriptor " + s2 + " 0 R/Encoding/" + t4.encoding + " /FirstChar 29 /LastChar 255 /Widths " + l2.API.PDFObject.convert(t4.metadata.hmtx.widths) + ">>"), e3("endobj"), t4.isAlreadyPutted = true;
              }
            }(t3.font, t3.out, t3.newObject);
          }]);
          var c2 = function(t3) {
            var e3, n2, r2 = t3.text || "", i2 = t3.x, o2 = t3.y, a2 = t3.options || {}, s2 = t3.mutex || {}, h2 = s2.pdfEscape, c3 = s2.activeFontKey, l3 = s2.fonts, u2 = (s2.activeFontSize, ""), f2 = 0, d2 = "", p2 = l3[n2 = c3].encoding;
            if ("Identity-H" !== l3[n2].encoding)
              return { text: r2, x: i2, y: o2, options: a2, mutex: s2 };
            for (d2 = r2, n2 = c3, "[object Array]" === Object.prototype.toString.call(r2) && (d2 = r2[0]), f2 = 0; f2 < d2.length; f2 += 1)
              l3[n2].metadata.hasOwnProperty("cmap") && (e3 = l3[n2].metadata.cmap.unicode.codeMap[d2[f2].charCodeAt(0)]), e3 ? u2 += d2[f2] : d2[f2].charCodeAt(0) < 256 && l3[n2].metadata.hasOwnProperty("Unicode") ? u2 += d2[f2] : u2 += "";
            var g2 = "";
            return parseInt(n2.slice(1)) < 14 || "WinAnsiEncoding" === p2 ? g2 = function(t4) {
              for (var e4 = "", n3 = 0; n3 < t4.length; n3++)
                e4 += "" + t4.charCodeAt(n3).toString(16);
              return e4;
            }(h2(u2, n2)) : "Identity-H" === p2 && (g2 = function(t4, e4) {
              for (var n3, r3 = e4.metadata.Unicode.widths, i3 = ["", "0", "00", "000", "0000"], o3 = [""], a3 = 0, s3 = t4.length; a3 < s3; ++a3) {
                if (n3 = e4.metadata.characterToGlyph(t4.charCodeAt(a3)), m2.push(n3), -1 == r3.indexOf(n3) && (r3.push(n3), r3.push([parseInt(e4.metadata.widthOfGlyph(n3), 10)])), "0" == n3)
                  return o3.join("");
                n3 = n3.toString(16), o3.push(i3[4 - n3.length], n3);
              }
              return o3.join("");
            }(u2, l3[n2])), s2.isHex = true, { text: g2, x: i2, y: o2, options: a2, mutex: s2 };
          };
          e2.events.push(["postProcessText", function(t3) {
            var e3 = t3.text || "", n2 = t3.x, r2 = t3.y, i2 = t3.options, o2 = t3.mutex, a2 = (i2.lang, []), s2 = { text: e3, x: n2, y: r2, options: i2, mutex: o2 };
            if ("[object Array]" === Object.prototype.toString.call(e3)) {
              var h2 = 0;
              for (h2 = 0; h2 < e3.length; h2 += 1)
                "[object Array]" === Object.prototype.toString.call(e3[h2]) && 3 === e3[h2].length ? a2.push([c2(Object.assign({}, s2, { text: e3[h2][0] })).text, e3[h2][1], e3[h2][2]]) : a2.push(c2(Object.assign({}, s2, { text: e3[h2] })).text);
              t3.text = a2;
            } else
              t3.text = c2(Object.assign({}, s2, { text: e3 })).text;
          }]);
        }($, "undefined" != typeof self && self || "undefined" != typeof global && global || "undefined" != typeof window && window || Function("return this")()), Q = $.API, Z = {}, Q.existsFileInVFS = function(t2) {
          return Z.hasOwnProperty(t2);
        }, Q.addFileToVFS = function(t2, e2) {
          return Z[t2] = e2, this;
        }, Q.getFileFromVFS = function(t2) {
          return Z.hasOwnProperty(t2) ? Z[t2] : null;
        }, function(t2) {
          if (t2.URL = t2.URL || t2.webkitURL, t2.Blob && t2.URL)
            try {
              return new Blob();
            } catch (t3) {
            }
          var s2 = t2.BlobBuilder || t2.WebKitBlobBuilder || t2.MozBlobBuilder || function(t3) {
            var s3 = function(t4) {
              return Object.prototype.toString.call(t4).match(/^\[object\s(.*)\]$/)[1];
            }, e3 = function() {
              this.data = [];
            }, h2 = function(t4, e4, n3) {
              this.data = t4, this.size = t4.length, this.type = e4, this.encoding = n3;
            }, n2 = e3.prototype, r2 = h2.prototype, c2 = t3.FileReaderSync, l2 = function(t4) {
              this.code = this[this.name = t4];
            }, i2 = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "), o2 = i2.length, a2 = t3.URL || t3.webkitURL || t3, u2 = a2.createObjectURL, f2 = a2.revokeObjectURL, d2 = a2, p2 = t3.btoa, g2 = t3.atob, m2 = t3.ArrayBuffer, w2 = t3.Uint8Array, y2 = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
            for (h2.fake = r2.fake = true; o2--; )
              l2.prototype[i2[o2]] = o2 + 1;
            return a2.createObjectURL || (d2 = t3.URL = function(t4) {
              var e4, n3 = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
              return n3.href = t4, "origin" in n3 || ("data:" === n3.protocol.toLowerCase() ? n3.origin = null : (e4 = t4.match(y2), n3.origin = e4 && e4[1])), n3;
            }), d2.createObjectURL = function(t4) {
              var e4, n3 = t4.type;
              return null === n3 && (n3 = "application/octet-stream"), t4 instanceof h2 ? (e4 = "data:" + n3, "base64" === t4.encoding ? e4 + ";base64," + t4.data : "URI" === t4.encoding ? e4 + "," + decodeURIComponent(t4.data) : p2 ? e4 + ";base64," + p2(t4.data) : e4 + "," + encodeURIComponent(t4.data)) : u2 ? u2.call(a2, t4) : void 0;
            }, d2.revokeObjectURL = function(t4) {
              "data:" !== t4.substring(0, 5) && f2 && f2.call(a2, t4);
            }, n2.append = function(t4) {
              var e4 = this.data;
              if (w2 && (t4 instanceof m2 || t4 instanceof w2)) {
                for (var n3 = "", r3 = new w2(t4), i3 = 0, o3 = r3.length; i3 < o3; i3++)
                  n3 += String.fromCharCode(r3[i3]);
                e4.push(n3);
              } else if ("Blob" === s3(t4) || "File" === s3(t4)) {
                if (!c2)
                  throw new l2("NOT_READABLE_ERR");
                var a3 = new c2();
                e4.push(a3.readAsBinaryString(t4));
              } else
                t4 instanceof h2 ? "base64" === t4.encoding && g2 ? e4.push(g2(t4.data)) : "URI" === t4.encoding ? e4.push(decodeURIComponent(t4.data)) : "raw" === t4.encoding && e4.push(t4.data) : ("string" != typeof t4 && (t4 += ""), e4.push(unescape(encodeURIComponent(t4))));
            }, n2.getBlob = function(t4) {
              return arguments.length || (t4 = null), new h2(this.data.join(""), t4, "raw");
            }, n2.toString = function() {
              return "[object BlobBuilder]";
            }, r2.slice = function(t4, e4, n3) {
              var r3 = arguments.length;
              return r3 < 3 && (n3 = null), new h2(this.data.slice(t4, 1 < r3 ? e4 : this.data.length), n3, this.encoding);
            }, r2.toString = function() {
              return "[object Blob]";
            }, r2.close = function() {
              this.size = 0, delete this.data;
            }, e3;
          }(t2);
          t2.Blob = function(t3, e3) {
            var n2 = e3 && e3.type || "", r2 = new s2();
            if (t3)
              for (var i2 = 0, o2 = t3.length; i2 < o2; i2++)
                Uint8Array && t3[i2] instanceof Uint8Array ? r2.append(t3[i2].buffer) : r2.append(t3[i2]);
            var a2 = r2.getBlob(n2);
            return !a2.slice && a2.webkitSlice && (a2.slice = a2.webkitSlice), a2;
          };
          var e2 = Object.getPrototypeOf || function(t3) {
            return t3.__proto__;
          };
          t2.Blob.prototype = e2(new t2.Blob());
        }("undefined" != typeof self && self || "undefined" != typeof window && window || window.content || window);
        var tt, et, nt, rt, it, ot, at, st, ht, ct, lt, ut, ft, dt, pt, gt, bt = bt || function(s2) {
          if (!(void 0 === s2 || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t2 = s2.document, h2 = function() {
              return s2.URL || s2.webkitURL || s2;
            }, c2 = t2.createElementNS("http://www.w3.org/1999/xhtml", "a"), l2 = "download" in c2, u2 = /constructor/i.test(s2.HTMLElement) || s2.safari, f2 = /CriOS\/[\d]+/.test(navigator.userAgent), d2 = function(t3) {
              (s2.setImmediate || s2.setTimeout)(function() {
                throw t3;
              }, 0);
            }, p2 = function(t3) {
              setTimeout(function() {
                "string" == typeof t3 ? h2().revokeObjectURL(t3) : t3.remove();
              }, 4e4);
            }, g2 = function(t3) {
              return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t3.type) ? new Blob([String.fromCharCode(65279), t3], { type: t3.type }) : t3;
            }, r2 = function(t3, n2, e3) {
              e3 || (t3 = g2(t3));
              var r3, i2 = this, o2 = "application/octet-stream" === t3.type, a2 = function() {
                !function(t4, e4, n3) {
                  for (var r4 = (e4 = [].concat(e4)).length; r4--; ) {
                    var i3 = t4["on" + e4[r4]];
                    if ("function" == typeof i3)
                      try {
                        i3.call(t4, n3 || t4);
                      } catch (t5) {
                        d2(t5);
                      }
                  }
                }(i2, "writestart progress write writeend".split(" "));
              };
              if (i2.readyState = i2.INIT, l2)
                return r3 = h2().createObjectURL(t3), void setTimeout(function() {
                  var t4, e4;
                  c2.href = r3, c2.download = n2, t4 = c2, e4 = new MouseEvent("click"), t4.dispatchEvent(e4), a2(), p2(r3), i2.readyState = i2.DONE;
                });
              !function() {
                if ((f2 || o2 && u2) && s2.FileReader) {
                  var e4 = new FileReader();
                  return e4.onloadend = function() {
                    var t4 = f2 ? e4.result : e4.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                    s2.open(t4, "_blank") || (s2.location.href = t4), t4 = void 0, i2.readyState = i2.DONE, a2();
                  }, e4.readAsDataURL(t3), i2.readyState = i2.INIT;
                }
                r3 || (r3 = h2().createObjectURL(t3)), o2 ? s2.location.href = r3 : s2.open(r3, "_blank") || (s2.location.href = r3);
                i2.readyState = i2.DONE, a2(), p2(r3);
              }();
            }, e2 = r2.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t3, e3, n2) {
              return e3 = e3 || t3.name || "download", n2 || (t3 = g2(t3)), navigator.msSaveOrOpenBlob(t3, e3);
            } : (e2.abort = function() {
            }, e2.readyState = e2.INIT = 0, e2.WRITING = 1, e2.DONE = 2, e2.error = e2.onwritestart = e2.onprogress = e2.onwrite = e2.onabort = e2.onerror = e2.onwriteend = null, function(t3, e3, n2) {
              return new r2(t3, e3 || t3.name || "download", n2);
            });
          }
        }("undefined" != typeof self && self || "undefined" != typeof window && window || window.content);
        function mt(x2) {
          var t2 = 0;
          if (71 !== x2[t2++] || 73 !== x2[t2++] || 70 !== x2[t2++] || 56 !== x2[t2++] || 56 != (x2[t2++] + 1 & 253) || 97 !== x2[t2++])
            throw "Invalid GIF 87a/89a header.";
          var S2 = x2[t2++] | x2[t2++] << 8, e2 = x2[t2++] | x2[t2++] << 8, n2 = x2[t2++], r2 = n2 >> 7, i2 = 1 << (7 & n2) + 1;
          x2[t2++];
          x2[t2++];
          var o2 = null;
          r2 && (o2 = t2, t2 += 3 * i2);
          var a2 = true, s2 = [], h2 = 0, c2 = null, l2 = 0, u2 = null;
          for (this.width = S2, this.height = e2; a2 && t2 < x2.length; )
            switch (x2[t2++]) {
              case 33:
                switch (x2[t2++]) {
                  case 255:
                    if (11 !== x2[t2] || 78 == x2[t2 + 1] && 69 == x2[t2 + 2] && 84 == x2[t2 + 3] && 83 == x2[t2 + 4] && 67 == x2[t2 + 5] && 65 == x2[t2 + 6] && 80 == x2[t2 + 7] && 69 == x2[t2 + 8] && 50 == x2[t2 + 9] && 46 == x2[t2 + 10] && 48 == x2[t2 + 11] && 3 == x2[t2 + 12] && 1 == x2[t2 + 13] && 0 == x2[t2 + 16])
                      t2 += 14, u2 = x2[t2++] | x2[t2++] << 8, t2++;
                    else
                      for (t2 += 12; ; ) {
                        if (0 === (_2 = x2[t2++]))
                          break;
                        t2 += _2;
                      }
                    break;
                  case 249:
                    if (4 !== x2[t2++] || 0 !== x2[t2 + 4])
                      throw "Invalid graphics extension block.";
                    var f2 = x2[t2++];
                    h2 = x2[t2++] | x2[t2++] << 8, c2 = x2[t2++], 0 == (1 & f2) && (c2 = null), l2 = f2 >> 2 & 7, t2++;
                    break;
                  case 254:
                    for (; ; ) {
                      if (0 === (_2 = x2[t2++]))
                        break;
                      t2 += _2;
                    }
                    break;
                  default:
                    throw "Unknown graphic control label: 0x" + x2[t2 - 1].toString(16);
                }
                break;
              case 44:
                var d2 = x2[t2++] | x2[t2++] << 8, p2 = x2[t2++] | x2[t2++] << 8, g2 = x2[t2++] | x2[t2++] << 8, m2 = x2[t2++] | x2[t2++] << 8, w2 = x2[t2++], y2 = w2 >> 6 & 1, v2 = o2, b2 = false;
                if (w2 >> 7) {
                  b2 = true;
                  v2 = t2, t2 += 3 * (1 << (7 & w2) + 1);
                }
                var k2 = t2;
                for (t2++; ; ) {
                  var _2;
                  if (0 === (_2 = x2[t2++]))
                    break;
                  t2 += _2;
                }
                s2.push({ x: d2, y: p2, width: g2, height: m2, has_local_palette: b2, palette_offset: v2, data_offset: k2, data_length: t2 - k2, transparent_index: c2, interlaced: !!y2, delay: h2, disposal: l2 });
                break;
              case 59:
                a2 = false;
                break;
              default:
                throw "Unknown gif block: 0x" + x2[t2 - 1].toString(16);
            }
          this.numFrames = function() {
            return s2.length;
          }, this.loopCount = function() {
            return u2;
          }, this.frameInfo = function(t3) {
            if (t3 < 0 || t3 >= s2.length)
              throw "Frame index out of range.";
            return s2[t3];
          }, this.decodeAndBlitFrameBGRA = function(t3, e3) {
            var n3 = this.frameInfo(t3), r3 = n3.width * n3.height, i3 = new Uint8Array(r3);
            wt(x2, n3.data_offset, i3, r3);
            var o3 = n3.palette_offset, a3 = n3.transparent_index;
            null === a3 && (a3 = 256);
            var s3 = n3.width, h3 = S2 - s3, c3 = s3, l3 = 4 * (n3.y * S2 + n3.x), u3 = 4 * ((n3.y + n3.height) * S2 + n3.x), f3 = l3, d3 = 4 * h3;
            true === n3.interlaced && (d3 += 4 * (s3 + h3) * 7);
            for (var p3 = 8, g3 = 0, m3 = i3.length; g3 < m3; ++g3) {
              var w3 = i3[g3];
              if (0 === c3 && (c3 = s3, u3 <= (f3 += d3) && (d3 = h3 + 4 * (s3 + h3) * (p3 - 1), f3 = l3 + (s3 + h3) * (p3 << 1), p3 >>= 1)), w3 === a3)
                f3 += 4;
              else {
                var y3 = x2[o3 + 3 * w3], v3 = x2[o3 + 3 * w3 + 1], b3 = x2[o3 + 3 * w3 + 2];
                e3[f3++] = b3, e3[f3++] = v3, e3[f3++] = y3, e3[f3++] = 255;
              }
              --c3;
            }
          }, this.decodeAndBlitFrameRGBA = function(t3, e3) {
            var n3 = this.frameInfo(t3), r3 = n3.width * n3.height, i3 = new Uint8Array(r3);
            wt(x2, n3.data_offset, i3, r3);
            var o3 = n3.palette_offset, a3 = n3.transparent_index;
            null === a3 && (a3 = 256);
            var s3 = n3.width, h3 = S2 - s3, c3 = s3, l3 = 4 * (n3.y * S2 + n3.x), u3 = 4 * ((n3.y + n3.height) * S2 + n3.x), f3 = l3, d3 = 4 * h3;
            true === n3.interlaced && (d3 += 4 * (s3 + h3) * 7);
            for (var p3 = 8, g3 = 0, m3 = i3.length; g3 < m3; ++g3) {
              var w3 = i3[g3];
              if (0 === c3 && (c3 = s3, u3 <= (f3 += d3) && (d3 = h3 + 4 * (s3 + h3) * (p3 - 1), f3 = l3 + (s3 + h3) * (p3 << 1), p3 >>= 1)), w3 === a3)
                f3 += 4;
              else {
                var y3 = x2[o3 + 3 * w3], v3 = x2[o3 + 3 * w3 + 1], b3 = x2[o3 + 3 * w3 + 2];
                e3[f3++] = y3, e3[f3++] = v3, e3[f3++] = b3, e3[f3++] = 255;
              }
              --c3;
            }
          };
        }
        function wt(t2, e2, n2, r2) {
          for (var i2 = t2[e2++], o2 = 1 << i2, a2 = o2 + 1, s2 = a2 + 1, h2 = i2 + 1, c2 = (1 << h2) - 1, l2 = 0, u2 = 0, f2 = 0, d2 = t2[e2++], p2 = new Int32Array(4096), g2 = null; ; ) {
            for (; l2 < 16 && 0 !== d2; )
              u2 |= t2[e2++] << l2, l2 += 8, 1 === d2 ? d2 = t2[e2++] : --d2;
            if (l2 < h2)
              break;
            var m2 = u2 & c2;
            if (u2 >>= h2, l2 -= h2, m2 !== o2) {
              if (m2 === a2)
                break;
              for (var w2 = m2 < s2 ? m2 : g2, y2 = 0, v2 = w2; o2 < v2; )
                v2 = p2[v2] >> 8, ++y2;
              var b2 = v2;
              if (r2 < f2 + y2 + (w2 !== m2 ? 1 : 0))
                return void console.log("Warning, gif stream longer than expected.");
              n2[f2++] = b2;
              var x2 = f2 += y2;
              for (w2 !== m2 && (n2[f2++] = b2), v2 = w2; y2--; )
                v2 = p2[v2], n2[--x2] = 255 & v2, v2 >>= 8;
              null !== g2 && s2 < 4096 && (p2[s2++] = g2 << 8 | b2, c2 + 1 <= s2 && h2 < 12 && (++h2, c2 = c2 << 1 | 1)), g2 = m2;
            } else
              s2 = a2 + 1, c2 = (1 << (h2 = i2 + 1)) - 1, g2 = null;
          }
          return f2 !== r2 && console.log("Warning, gif stream shorter than expected."), n2;
        }
        "undefined" != typeof module && module.exports ? module.exports.saveAs = bt : "undefined" != typeof define && null !== define && null !== define.amd && define("FileSaver.js", function() {
          return bt;
        }), $.API.adler32cs = (ot = "function" == typeof ArrayBuffer && "function" == typeof Uint8Array, at = null, st = function() {
          if (!ot)
            return function() {
              return false;
            };
          try {
            var t2 = {};
            "function" == typeof t2.Buffer && (at = t2.Buffer);
          } catch (t3) {
          }
          return function(t3) {
            return t3 instanceof ArrayBuffer || null !== at && t3 instanceof at;
          };
        }(), ht = null !== at ? function(t2) {
          return new at(t2, "utf8").toString("binary");
        } : function(t2) {
          return unescape(encodeURIComponent(t2));
        }, ct = 65521, lt = function(t2, e2) {
          for (var n2 = 65535 & t2, r2 = t2 >>> 16, i2 = 0, o2 = e2.length; i2 < o2; i2++)
            n2 = (n2 + (255 & e2.charCodeAt(i2))) % ct, r2 = (r2 + n2) % ct;
          return (r2 << 16 | n2) >>> 0;
        }, ut = function(t2, e2) {
          for (var n2 = 65535 & t2, r2 = t2 >>> 16, i2 = 0, o2 = e2.length; i2 < o2; i2++)
            n2 = (n2 + e2[i2]) % ct, r2 = (r2 + n2) % ct;
          return (r2 << 16 | n2) >>> 0;
        }, dt = (ft = {}).Adler32 = (((it = (rt = function(t2) {
          if (!(this instanceof rt))
            throw new TypeError("Constructor cannot called be as a function.");
          if (!isFinite(t2 = null == t2 ? 1 : +t2))
            throw new Error("First arguments needs to be a finite number.");
          this.checksum = t2 >>> 0;
        }).prototype = {}).constructor = rt).from = ((tt = function(t2) {
          if (!(this instanceof rt))
            throw new TypeError("Constructor cannot called be as a function.");
          if (null == t2)
            throw new Error("First argument needs to be a string.");
          this.checksum = lt(1, t2.toString());
        }).prototype = it, tt), rt.fromUtf8 = ((et = function(t2) {
          if (!(this instanceof rt))
            throw new TypeError("Constructor cannot called be as a function.");
          if (null == t2)
            throw new Error("First argument needs to be a string.");
          var e2 = ht(t2.toString());
          this.checksum = lt(1, e2);
        }).prototype = it, et), ot && (rt.fromBuffer = ((nt = function(t2) {
          if (!(this instanceof rt))
            throw new TypeError("Constructor cannot called be as a function.");
          if (!st(t2))
            throw new Error("First argument needs to be ArrayBuffer.");
          var e2 = new Uint8Array(t2);
          return this.checksum = ut(1, e2);
        }).prototype = it, nt)), it.update = function(t2) {
          if (null == t2)
            throw new Error("First argument needs to be a string.");
          return t2 = t2.toString(), this.checksum = lt(this.checksum, t2);
        }, it.updateUtf8 = function(t2) {
          if (null == t2)
            throw new Error("First argument needs to be a string.");
          var e2 = ht(t2.toString());
          return this.checksum = lt(this.checksum, e2);
        }, ot && (it.updateBuffer = function(t2) {
          if (!st(t2))
            throw new Error("First argument needs to be ArrayBuffer.");
          var e2 = new Uint8Array(t2);
          return this.checksum = ut(this.checksum, e2);
        }), it.clone = function() {
          return new dt(this.checksum);
        }, rt), ft.from = function(t2) {
          if (null == t2)
            throw new Error("First argument needs to be a string.");
          return lt(1, t2.toString());
        }, ft.fromUtf8 = function(t2) {
          if (null == t2)
            throw new Error("First argument needs to be a string.");
          var e2 = ht(t2.toString());
          return lt(1, e2);
        }, ot && (ft.fromBuffer = function(t2) {
          if (!st(t2))
            throw new Error("First argument need to be ArrayBuffer.");
          var e2 = new Uint8Array(t2);
          return ut(1, e2);
        }), ft);
        try {
          exports.GifWriter = function(w2, t2, e2, n2) {
            var y2 = 0, r2 = void 0 === (n2 = void 0 === n2 ? {} : n2).loop ? null : n2.loop, v2 = void 0 === n2.palette ? null : n2.palette;
            if (t2 <= 0 || e2 <= 0 || 65535 < t2 || 65535 < e2)
              throw "Width/Height invalid.";
            function b2(t3) {
              var e3 = t3.length;
              if (e3 < 2 || 256 < e3 || e3 & e3 - 1)
                throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
              return e3;
            }
            w2[y2++] = 71, w2[y2++] = 73, w2[y2++] = 70, w2[y2++] = 56, w2[y2++] = 57, w2[y2++] = 97;
            var i2 = 0, o2 = 0;
            if (null !== v2) {
              for (var a2 = b2(v2); a2 >>= 1; )
                ++i2;
              if (a2 = 1 << i2, --i2, void 0 !== n2.background) {
                if (a2 <= (o2 = n2.background))
                  throw "Background index out of range.";
                if (0 === o2)
                  throw "Background index explicitly passed as 0.";
              }
            }
            if (w2[y2++] = 255 & t2, w2[y2++] = t2 >> 8 & 255, w2[y2++] = 255 & e2, w2[y2++] = e2 >> 8 & 255, w2[y2++] = (null !== v2 ? 128 : 0) | i2, w2[y2++] = o2, w2[y2++] = 0, null !== v2)
              for (var s2 = 0, h2 = v2.length; s2 < h2; ++s2) {
                var c2 = v2[s2];
                w2[y2++] = c2 >> 16 & 255, w2[y2++] = c2 >> 8 & 255, w2[y2++] = 255 & c2;
              }
            if (null !== r2) {
              if (r2 < 0 || 65535 < r2)
                throw "Loop count invalid.";
              w2[y2++] = 33, w2[y2++] = 255, w2[y2++] = 11, w2[y2++] = 78, w2[y2++] = 69, w2[y2++] = 84, w2[y2++] = 83, w2[y2++] = 67, w2[y2++] = 65, w2[y2++] = 80, w2[y2++] = 69, w2[y2++] = 50, w2[y2++] = 46, w2[y2++] = 48, w2[y2++] = 3, w2[y2++] = 1, w2[y2++] = 255 & r2, w2[y2++] = r2 >> 8 & 255, w2[y2++] = 0;
            }
            var x2 = false;
            this.addFrame = function(t3, e3, n3, r3, i3, o3) {
              if (true === x2 && (--y2, x2 = false), o3 = void 0 === o3 ? {} : o3, t3 < 0 || e3 < 0 || 65535 < t3 || 65535 < e3)
                throw "x/y invalid.";
              if (n3 <= 0 || r3 <= 0 || 65535 < n3 || 65535 < r3)
                throw "Width/Height invalid.";
              if (i3.length < n3 * r3)
                throw "Not enough pixels for the frame size.";
              var a3 = true, s3 = o3.palette;
              if (null == s3 && (a3 = false, s3 = v2), null == s3)
                throw "Must supply either a local or global palette.";
              for (var h3 = b2(s3), c3 = 0; h3 >>= 1; )
                ++c3;
              h3 = 1 << c3;
              var l2 = void 0 === o3.delay ? 0 : o3.delay, u2 = void 0 === o3.disposal ? 0 : o3.disposal;
              if (u2 < 0 || 3 < u2)
                throw "Disposal out of range.";
              var f2 = false, d2 = 0;
              if (void 0 !== o3.transparent && null !== o3.transparent && (f2 = true, (d2 = o3.transparent) < 0 || h3 <= d2))
                throw "Transparent color index.";
              if ((0 !== u2 || f2 || 0 !== l2) && (w2[y2++] = 33, w2[y2++] = 249, w2[y2++] = 4, w2[y2++] = u2 << 2 | (true === f2 ? 1 : 0), w2[y2++] = 255 & l2, w2[y2++] = l2 >> 8 & 255, w2[y2++] = d2, w2[y2++] = 0), w2[y2++] = 44, w2[y2++] = 255 & t3, w2[y2++] = t3 >> 8 & 255, w2[y2++] = 255 & e3, w2[y2++] = e3 >> 8 & 255, w2[y2++] = 255 & n3, w2[y2++] = n3 >> 8 & 255, w2[y2++] = 255 & r3, w2[y2++] = r3 >> 8 & 255, w2[y2++] = true === a3 ? 128 | c3 - 1 : 0, true === a3)
                for (var p2 = 0, g2 = s3.length; p2 < g2; ++p2) {
                  var m2 = s3[p2];
                  w2[y2++] = m2 >> 16 & 255, w2[y2++] = m2 >> 8 & 255, w2[y2++] = 255 & m2;
                }
              y2 = function(e4, n4, t4, r4) {
                e4[n4++] = t4;
                var i4 = n4++, o4 = 1 << t4, a4 = o4 - 1, s4 = o4 + 1, h4 = s4 + 1, c4 = t4 + 1, l3 = 0, u3 = 0;
                function f3(t5) {
                  for (; t5 <= l3; )
                    e4[n4++] = 255 & u3, u3 >>= 8, l3 -= 8, n4 === i4 + 256 && (e4[i4] = 255, i4 = n4++);
                }
                function d3(t5) {
                  u3 |= t5 << l3, l3 += c4, f3(8);
                }
                var p3 = r4[0] & a4, g3 = {};
                d3(o4);
                for (var m3 = 1, w3 = r4.length; m3 < w3; ++m3) {
                  var y3 = r4[m3] & a4, v3 = p3 << 8 | y3, b3 = g3[v3];
                  if (void 0 === b3) {
                    for (u3 |= p3 << l3, l3 += c4; 8 <= l3; )
                      e4[n4++] = 255 & u3, u3 >>= 8, l3 -= 8, n4 === i4 + 256 && (e4[i4] = 255, i4 = n4++);
                    4096 === h4 ? (d3(o4), h4 = s4 + 1, c4 = t4 + 1, g3 = {}) : (1 << c4 <= h4 && ++c4, g3[v3] = h4++), p3 = y3;
                  } else
                    p3 = b3;
                }
                return d3(p3), d3(s4), f3(1), i4 + 1 === n4 ? e4[i4] = 0 : (e4[i4] = n4 - i4 - 1, e4[n4++] = 0), n4;
              }(w2, y2, c3 < 2 ? 2 : c3, i3);
            }, this.end = function() {
              return false === x2 && (w2[y2++] = 59, x2 = true), y2;
            };
          }, exports.GifReader = mt;
        } catch (t2) {
        }
        function yt(t2) {
          var S2, k2, _2, A2, e2, u2 = Math.floor, I2 = new Array(64), C2 = new Array(64), T2 = new Array(64), F2 = new Array(64), w2 = new Array(65535), y2 = new Array(65535), Q2 = new Array(64), v2 = new Array(64), P2 = [], E2 = 0, q2 = 7, O2 = new Array(64), B2 = new Array(64), R2 = new Array(64), n2 = new Array(256), j2 = new Array(2048), b2 = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], D2 = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], M2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], U2 = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], N2 = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], z2 = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], L2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], H2 = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], W2 = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
          function r2(t3, e3) {
            for (var n3 = 0, r3 = 0, i2 = new Array(), o2 = 1; o2 <= 16; o2++) {
              for (var a2 = 1; a2 <= t3[o2]; a2++)
                i2[e3[r3]] = [], i2[e3[r3]][0] = n3, i2[e3[r3]][1] = o2, r3++, n3++;
              n3 *= 2;
            }
            return i2;
          }
          function G2(t3) {
            for (var e3 = t3[0], n3 = t3[1] - 1; 0 <= n3; )
              e3 & 1 << n3 && (E2 |= 1 << q2), n3--, --q2 < 0 && (255 == E2 ? (V2(255), V2(0)) : V2(E2), q2 = 7, E2 = 0);
          }
          function V2(t3) {
            P2.push(t3);
          }
          function Y2(t3) {
            V2(t3 >> 8 & 255), V2(255 & t3);
          }
          function X2(t3, e3, n3, r3, i2) {
            for (var o2, a2 = i2[0], s2 = i2[240], h2 = function(t4, e4) {
              var n4, r4, i3, o3, a3, s3, h3, c3, l3, u4, f3 = 0;
              for (l3 = 0; l3 < 8; ++l3) {
                n4 = t4[f3], r4 = t4[f3 + 1], i3 = t4[f3 + 2], o3 = t4[f3 + 3], a3 = t4[f3 + 4], s3 = t4[f3 + 5], h3 = t4[f3 + 6];
                var d3 = n4 + (c3 = t4[f3 + 7]), p3 = n4 - c3, g3 = r4 + h3, m3 = r4 - h3, w3 = i3 + s3, y3 = i3 - s3, v3 = o3 + a3, b3 = o3 - a3, x2 = d3 + v3, S3 = d3 - v3, k3 = g3 + w3, _3 = g3 - w3;
                t4[f3] = x2 + k3, t4[f3 + 4] = x2 - k3;
                var A3 = 0.707106781 * (_3 + S3);
                t4[f3 + 2] = S3 + A3, t4[f3 + 6] = S3 - A3;
                var I3 = 0.382683433 * ((x2 = b3 + y3) - (_3 = m3 + p3)), C3 = 0.5411961 * x2 + I3, T3 = 1.306562965 * _3 + I3, F3 = 0.707106781 * (k3 = y3 + m3), P3 = p3 + F3, E3 = p3 - F3;
                t4[f3 + 5] = E3 + C3, t4[f3 + 3] = E3 - C3, t4[f3 + 1] = P3 + T3, t4[f3 + 7] = P3 - T3, f3 += 8;
              }
              for (l3 = f3 = 0; l3 < 8; ++l3) {
                n4 = t4[f3], r4 = t4[f3 + 8], i3 = t4[f3 + 16], o3 = t4[f3 + 24], a3 = t4[f3 + 32], s3 = t4[f3 + 40], h3 = t4[f3 + 48];
                var q3 = n4 + (c3 = t4[f3 + 56]), O3 = n4 - c3, B3 = r4 + h3, R3 = r4 - h3, j3 = i3 + s3, D3 = i3 - s3, M3 = o3 + a3, U3 = o3 - a3, N3 = q3 + M3, z3 = q3 - M3, L3 = B3 + j3, H3 = B3 - j3;
                t4[f3] = N3 + L3, t4[f3 + 32] = N3 - L3;
                var W3 = 0.707106781 * (H3 + z3);
                t4[f3 + 16] = z3 + W3, t4[f3 + 48] = z3 - W3;
                var G3 = 0.382683433 * ((N3 = U3 + D3) - (H3 = R3 + O3)), V3 = 0.5411961 * N3 + G3, Y3 = 1.306562965 * H3 + G3, X3 = 0.707106781 * (L3 = D3 + R3), J3 = O3 + X3, K2 = O3 - X3;
                t4[f3 + 40] = K2 + V3, t4[f3 + 24] = K2 - V3, t4[f3 + 8] = J3 + Y3, t4[f3 + 56] = J3 - Y3, f3++;
              }
              for (l3 = 0; l3 < 64; ++l3)
                u4 = t4[l3] * e4[l3], Q2[l3] = 0 < u4 ? u4 + 0.5 | 0 : u4 - 0.5 | 0;
              return Q2;
            }(t3, e3), c2 = 0; c2 < 64; ++c2)
              v2[b2[c2]] = h2[c2];
            var l2 = v2[0] - n3;
            n3 = v2[0], 0 == l2 ? G2(r3[0]) : (G2(r3[y2[o2 = 32767 + l2]]), G2(w2[o2]));
            for (var u3 = 63; 0 < u3 && 0 == v2[u3]; u3--)
              ;
            if (0 == u3)
              return G2(a2), n3;
            for (var f2, d2 = 1; d2 <= u3; ) {
              for (var p2 = d2; 0 == v2[d2] && d2 <= u3; ++d2)
                ;
              var g2 = d2 - p2;
              if (16 <= g2) {
                f2 = g2 >> 4;
                for (var m2 = 1; m2 <= f2; ++m2)
                  G2(s2);
                g2 &= 15;
              }
              o2 = 32767 + v2[d2], G2(i2[(g2 << 4) + y2[o2]]), G2(w2[o2]), d2++;
            }
            return 63 != u3 && G2(a2), n3;
          }
          function J2(t3) {
            if (t3 <= 0 && (t3 = 1), 100 < t3 && (t3 = 100), e2 != t3) {
              (function(t4) {
                for (var e3 = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n3 = 0; n3 < 64; n3++) {
                  var r3 = u2((e3[n3] * t4 + 50) / 100);
                  r3 < 1 ? r3 = 1 : 255 < r3 && (r3 = 255), I2[b2[n3]] = r3;
                }
                for (var i2 = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o2 = 0; o2 < 64; o2++) {
                  var a2 = u2((i2[o2] * t4 + 50) / 100);
                  a2 < 1 ? a2 = 1 : 255 < a2 && (a2 = 255), C2[b2[o2]] = a2;
                }
                for (var s2 = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], h2 = 0, c2 = 0; c2 < 8; c2++)
                  for (var l2 = 0; l2 < 8; l2++)
                    T2[h2] = 1 / (I2[b2[h2]] * s2[c2] * s2[l2] * 8), F2[h2] = 1 / (C2[b2[h2]] * s2[c2] * s2[l2] * 8), h2++;
              })(t3 < 50 ? Math.floor(5e3 / t3) : Math.floor(200 - 2 * t3)), e2 = t3;
            }
          }
          this.encode = function(t3, e3) {
            var n3, r3;
            (/* @__PURE__ */ new Date()).getTime();
            e3 && J2(e3), P2 = new Array(), E2 = 0, q2 = 7, Y2(65496), Y2(65504), Y2(16), V2(74), V2(70), V2(73), V2(70), V2(0), V2(1), V2(1), V2(0), Y2(1), Y2(1), V2(0), V2(0), function() {
              Y2(65499), Y2(132), V2(0);
              for (var t4 = 0; t4 < 64; t4++)
                V2(I2[t4]);
              V2(1);
              for (var e4 = 0; e4 < 64; e4++)
                V2(C2[e4]);
            }(), n3 = t3.width, r3 = t3.height, Y2(65472), Y2(17), V2(8), Y2(r3), Y2(n3), V2(3), V2(1), V2(17), V2(0), V2(2), V2(17), V2(1), V2(3), V2(17), V2(1), function() {
              Y2(65476), Y2(418), V2(0);
              for (var t4 = 0; t4 < 16; t4++)
                V2(D2[t4 + 1]);
              for (var e4 = 0; e4 <= 11; e4++)
                V2(M2[e4]);
              V2(16);
              for (var n4 = 0; n4 < 16; n4++)
                V2(U2[n4 + 1]);
              for (var r4 = 0; r4 <= 161; r4++)
                V2(N2[r4]);
              V2(1);
              for (var i3 = 0; i3 < 16; i3++)
                V2(z2[i3 + 1]);
              for (var o3 = 0; o3 <= 11; o3++)
                V2(L2[o3]);
              V2(17);
              for (var a3 = 0; a3 < 16; a3++)
                V2(H2[a3 + 1]);
              for (var s3 = 0; s3 <= 161; s3++)
                V2(W2[s3]);
            }(), Y2(65498), Y2(12), V2(3), V2(1), V2(0), V2(2), V2(17), V2(3), V2(17), V2(0), V2(63), V2(0);
            var i2 = 0, o2 = 0, a2 = 0;
            E2 = 0, q2 = 7, this.encode.displayName = "_encode_";
            for (var s2, h2, c2, l2, u3, f2, d2, p2, g2, m2 = t3.data, w3 = t3.width, y3 = t3.height, v3 = 4 * w3, b3 = 0; b3 < y3; ) {
              for (s2 = 0; s2 < v3; ) {
                for (f2 = u3 = v3 * b3 + s2, d2 = -1, g2 = p2 = 0; g2 < 64; g2++)
                  f2 = u3 + (p2 = g2 >> 3) * v3 + (d2 = 4 * (7 & g2)), y3 <= b3 + p2 && (f2 -= v3 * (b3 + 1 + p2 - y3)), v3 <= s2 + d2 && (f2 -= s2 + d2 - v3 + 4), h2 = m2[f2++], c2 = m2[f2++], l2 = m2[f2++], O2[g2] = (j2[h2] + j2[c2 + 256 >> 0] + j2[l2 + 512 >> 0] >> 16) - 128, B2[g2] = (j2[h2 + 768 >> 0] + j2[c2 + 1024 >> 0] + j2[l2 + 1280 >> 0] >> 16) - 128, R2[g2] = (j2[h2 + 1280 >> 0] + j2[c2 + 1536 >> 0] + j2[l2 + 1792 >> 0] >> 16) - 128;
                i2 = X2(O2, T2, i2, S2, _2), o2 = X2(B2, F2, o2, k2, A2), a2 = X2(R2, F2, a2, k2, A2), s2 += 32;
              }
              b3 += 8;
            }
            if (0 <= q2) {
              var x2 = [];
              x2[1] = q2 + 1, x2[0] = (1 << q2 + 1) - 1, G2(x2);
            }
            return Y2(65497), new Uint8Array(P2);
          }, function() {
            (/* @__PURE__ */ new Date()).getTime();
            t2 || (t2 = 50), function() {
              for (var t3 = String.fromCharCode, e3 = 0; e3 < 256; e3++)
                n2[e3] = t3(e3);
            }(), S2 = r2(D2, M2), k2 = r2(z2, L2), _2 = r2(U2, N2), A2 = r2(H2, W2), function() {
              for (var t3 = 1, e3 = 2, n3 = 1; n3 <= 15; n3++) {
                for (var r3 = t3; r3 < e3; r3++)
                  y2[32767 + r3] = n3, w2[32767 + r3] = [], w2[32767 + r3][1] = n3, w2[32767 + r3][0] = r3;
                for (var i2 = -(e3 - 1); i2 <= -t3; i2++)
                  y2[32767 + i2] = n3, w2[32767 + i2] = [], w2[32767 + i2][1] = n3, w2[32767 + i2][0] = e3 - 1 + i2;
                t3 <<= 1, e3 <<= 1;
              }
            }(), function() {
              for (var t3 = 0; t3 < 256; t3++)
                j2[t3] = 19595 * t3, j2[t3 + 256 >> 0] = 38470 * t3, j2[t3 + 512 >> 0] = 7471 * t3 + 32768, j2[t3 + 768 >> 0] = -11059 * t3, j2[t3 + 1024 >> 0] = -21709 * t3, j2[t3 + 1280 >> 0] = 32768 * t3 + 8421375, j2[t3 + 1536 >> 0] = -27439 * t3, j2[t3 + 1792 >> 0] = -5329 * t3;
            }(), J2(t2), (/* @__PURE__ */ new Date()).getTime();
          }();
        }
        try {
          module.exports = yt;
        } catch (t2) {
        }
        function xt(t2, e2) {
          if (this.pos = 0, this.buffer = t2, this.datav = new DataView(t2.buffer), this.is_with_alpha = !!e2, this.bottom_up = true, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag))
            throw new Error("Invalid BMP File");
          this.parseHeader(), this.parseBGR();
        }
        xt.prototype.parseHeader = function() {
          if (this.fileSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, true), this.pos += 4, this.offset = this.datav.getUint32(this.pos, true), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.width = this.datav.getUint32(this.pos, true), this.pos += 4, this.height = this.datav.getInt32(this.pos, true), this.pos += 4, this.planes = this.datav.getUint16(this.pos, true), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, true), this.pos += 2, this.compress = this.datav.getUint32(this.pos, true), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.hr = this.datav.getUint32(this.pos, true), this.pos += 4, this.vr = this.datav.getUint32(this.pos, true), this.pos += 4, this.colors = this.datav.getUint32(this.pos, true), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, true), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
            var t2 = 0 === this.colors ? 1 << this.bitPP : this.colors;
            this.palette = new Array(t2);
            for (var e2 = 0; e2 < t2; e2++) {
              var n2 = this.datav.getUint8(this.pos++, true), r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true);
              this.palette[e2] = { red: i2, green: r2, blue: n2, quad: o2 };
            }
          }
          this.height < 0 && (this.height *= -1, this.bottom_up = false);
        }, xt.prototype.parseBGR = function() {
          this.pos = this.offset;
          try {
            var t2 = "bit" + this.bitPP, e2 = this.width * this.height * 4;
            this.data = new Uint8Array(e2), this[t2]();
          } catch (t3) {
            console.log("bit decode error:" + t3);
          }
        }, xt.prototype.bit1 = function() {
          var t2 = Math.ceil(this.width / 8), e2 = t2 % 4, n2 = 0 <= this.height ? this.height - 1 : -this.height;
          for (n2 = this.height - 1; 0 <= n2; n2--) {
            for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < t2; i2++)
              for (var o2 = this.datav.getUint8(this.pos++, true), a2 = r2 * this.width * 4 + 8 * i2 * 4, s2 = 0; s2 < 8 && 8 * i2 + s2 < this.width; s2++) {
                var h2 = this.palette[o2 >> 7 - s2 & 1];
                this.data[a2 + 4 * s2] = h2.blue, this.data[a2 + 4 * s2 + 1] = h2.green, this.data[a2 + 4 * s2 + 2] = h2.red, this.data[a2 + 4 * s2 + 3] = 255;
              }
            0 != e2 && (this.pos += 4 - e2);
          }
        }, xt.prototype.bit4 = function() {
          for (var t2 = Math.ceil(this.width / 2), e2 = t2 % 4, n2 = this.height - 1; 0 <= n2; n2--) {
            for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < t2; i2++) {
              var o2 = this.datav.getUint8(this.pos++, true), a2 = r2 * this.width * 4 + 2 * i2 * 4, s2 = o2 >> 4, h2 = 15 & o2, c2 = this.palette[s2];
              if (this.data[a2] = c2.blue, this.data[a2 + 1] = c2.green, this.data[a2 + 2] = c2.red, this.data[a2 + 3] = 255, 2 * i2 + 1 >= this.width)
                break;
              c2 = this.palette[h2], this.data[a2 + 4] = c2.blue, this.data[a2 + 4 + 1] = c2.green, this.data[a2 + 4 + 2] = c2.red, this.data[a2 + 4 + 3] = 255;
            }
            0 != e2 && (this.pos += 4 - e2);
          }
        }, xt.prototype.bit8 = function() {
          for (var t2 = this.width % 4, e2 = this.height - 1; 0 <= e2; e2--) {
            for (var n2 = this.bottom_up ? e2 : this.height - 1 - e2, r2 = 0; r2 < this.width; r2++) {
              var i2 = this.datav.getUint8(this.pos++, true), o2 = n2 * this.width * 4 + 4 * r2;
              if (i2 < this.palette.length) {
                var a2 = this.palette[i2];
                this.data[o2] = a2.red, this.data[o2 + 1] = a2.green, this.data[o2 + 2] = a2.blue, this.data[o2 + 3] = 255;
              } else
                this.data[o2] = 255, this.data[o2 + 1] = 255, this.data[o2 + 2] = 255, this.data[o2 + 3] = 255;
            }
            0 != t2 && (this.pos += 4 - t2);
          }
        }, xt.prototype.bit15 = function() {
          for (var t2 = this.width % 3, e2 = parseInt("11111", 2), n2 = this.height - 1; 0 <= n2; n2--) {
            for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < this.width; i2++) {
              var o2 = this.datav.getUint16(this.pos, true);
              this.pos += 2;
              var a2 = (o2 & e2) / e2 * 255 | 0, s2 = (o2 >> 5 & e2) / e2 * 255 | 0, h2 = (o2 >> 10 & e2) / e2 * 255 | 0, c2 = o2 >> 15 ? 255 : 0, l2 = r2 * this.width * 4 + 4 * i2;
              this.data[l2] = h2, this.data[l2 + 1] = s2, this.data[l2 + 2] = a2, this.data[l2 + 3] = c2;
            }
            this.pos += t2;
          }
        }, xt.prototype.bit16 = function() {
          for (var t2 = this.width % 3, e2 = parseInt("11111", 2), n2 = parseInt("111111", 2), r2 = this.height - 1; 0 <= r2; r2--) {
            for (var i2 = this.bottom_up ? r2 : this.height - 1 - r2, o2 = 0; o2 < this.width; o2++) {
              var a2 = this.datav.getUint16(this.pos, true);
              this.pos += 2;
              var s2 = (a2 & e2) / e2 * 255 | 0, h2 = (a2 >> 5 & n2) / n2 * 255 | 0, c2 = (a2 >> 11) / e2 * 255 | 0, l2 = i2 * this.width * 4 + 4 * o2;
              this.data[l2] = c2, this.data[l2 + 1] = h2, this.data[l2 + 2] = s2, this.data[l2 + 3] = 255;
            }
            this.pos += t2;
          }
        }, xt.prototype.bit24 = function() {
          for (var t2 = this.height - 1; 0 <= t2; t2--) {
            for (var e2 = this.bottom_up ? t2 : this.height - 1 - t2, n2 = 0; n2 < this.width; n2++) {
              var r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true), a2 = e2 * this.width * 4 + 4 * n2;
              this.data[a2] = o2, this.data[a2 + 1] = i2, this.data[a2 + 2] = r2, this.data[a2 + 3] = 255;
            }
            this.pos += this.width % 4;
          }
        }, xt.prototype.bit32 = function() {
          for (var t2 = this.height - 1; 0 <= t2; t2--)
            for (var e2 = this.bottom_up ? t2 : this.height - 1 - t2, n2 = 0; n2 < this.width; n2++) {
              var r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true), s2 = e2 * this.width * 4 + 4 * n2;
              this.data[s2] = o2, this.data[s2 + 1] = i2, this.data[s2 + 2] = r2, this.data[s2 + 3] = a2;
            }
        }, xt.prototype.getData = function() {
          return this.data;
        };
        try {
          module.exports = function(t2) {
            var e2 = new xt(t2);
            return { data: e2.getData(), width: e2.width, height: e2.height };
          };
        } catch (t2) {
        }
        !function(t2) {
          var p2 = 15, g2 = 573, e2 = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
          function ut2() {
            var d2 = this;
            function h2(t3, e3) {
              for (var n3 = 0; n3 |= 1 & t3, t3 >>>= 1, n3 <<= 1, 0 < --e3; )
                ;
              return n3 >>> 1;
            }
            d2.build_tree = function(t3) {
              var e3, n3, r3, i3 = d2.dyn_tree, o3 = d2.stat_desc.static_tree, a2 = d2.stat_desc.elems, s2 = -1;
              for (t3.heap_len = 0, t3.heap_max = g2, e3 = 0; e3 < a2; e3++)
                0 !== i3[2 * e3] ? (t3.heap[++t3.heap_len] = s2 = e3, t3.depth[e3] = 0) : i3[2 * e3 + 1] = 0;
              for (; t3.heap_len < 2; )
                i3[2 * (r3 = t3.heap[++t3.heap_len] = s2 < 2 ? ++s2 : 0)] = 1, t3.depth[r3] = 0, t3.opt_len--, o3 && (t3.static_len -= o3[2 * r3 + 1]);
              for (d2.max_code = s2, e3 = Math.floor(t3.heap_len / 2); 1 <= e3; e3--)
                t3.pqdownheap(i3, e3);
              for (r3 = a2; e3 = t3.heap[1], t3.heap[1] = t3.heap[t3.heap_len--], t3.pqdownheap(i3, 1), n3 = t3.heap[1], t3.heap[--t3.heap_max] = e3, t3.heap[--t3.heap_max] = n3, i3[2 * r3] = i3[2 * e3] + i3[2 * n3], t3.depth[r3] = Math.max(t3.depth[e3], t3.depth[n3]) + 1, i3[2 * e3 + 1] = i3[2 * n3 + 1] = r3, t3.heap[1] = r3++, t3.pqdownheap(i3, 1), 2 <= t3.heap_len; )
                ;
              t3.heap[--t3.heap_max] = t3.heap[1], function(t4) {
                var e4, n4, r4, i4, o4, a3, s3 = d2.dyn_tree, h3 = d2.stat_desc.static_tree, c2 = d2.stat_desc.extra_bits, l2 = d2.stat_desc.extra_base, u2 = d2.stat_desc.max_length, f2 = 0;
                for (i4 = 0; i4 <= p2; i4++)
                  t4.bl_count[i4] = 0;
                for (s3[2 * t4.heap[t4.heap_max] + 1] = 0, e4 = t4.heap_max + 1; e4 < g2; e4++)
                  u2 < (i4 = s3[2 * s3[2 * (n4 = t4.heap[e4]) + 1] + 1] + 1) && (i4 = u2, f2++), s3[2 * n4 + 1] = i4, n4 > d2.max_code || (t4.bl_count[i4]++, o4 = 0, l2 <= n4 && (o4 = c2[n4 - l2]), a3 = s3[2 * n4], t4.opt_len += a3 * (i4 + o4), h3 && (t4.static_len += a3 * (h3[2 * n4 + 1] + o4)));
                if (0 !== f2) {
                  do {
                    for (i4 = u2 - 1; 0 === t4.bl_count[i4]; )
                      i4--;
                    t4.bl_count[i4]--, t4.bl_count[i4 + 1] += 2, t4.bl_count[u2]--, f2 -= 2;
                  } while (0 < f2);
                  for (i4 = u2; 0 !== i4; i4--)
                    for (n4 = t4.bl_count[i4]; 0 !== n4; )
                      (r4 = t4.heap[--e4]) > d2.max_code || (s3[2 * r4 + 1] != i4 && (t4.opt_len += (i4 - s3[2 * r4 + 1]) * s3[2 * r4], s3[2 * r4 + 1] = i4), n4--);
                }
              }(t3), function(t4, e4, n4) {
                var r4, i4, o4, a3 = [], s3 = 0;
                for (r4 = 1; r4 <= p2; r4++)
                  a3[r4] = s3 = s3 + n4[r4 - 1] << 1;
                for (i4 = 0; i4 <= e4; i4++)
                  0 !== (o4 = t4[2 * i4 + 1]) && (t4[2 * i4] = h2(a3[o4]++, o4));
              }(i3, d2.max_code, t3.bl_count);
            };
          }
          function ft2(t3, e3, n3, r3, i3) {
            var o3 = this;
            o3.static_tree = t3, o3.extra_bits = e3, o3.extra_base = n3, o3.elems = r3, o3.max_length = i3;
          }
          ut2._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], ut2.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], ut2.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], ut2.d_code = function(t3) {
            return t3 < 256 ? e2[t3] : e2[256 + (t3 >>> 7)];
          }, ut2.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], ut2.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], ut2.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], ut2.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ft2.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], ft2.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], ft2.static_l_desc = new ft2(ft2.static_ltree, ut2.extra_lbits, 257, 286, p2), ft2.static_d_desc = new ft2(ft2.static_dtree, ut2.extra_dbits, 0, 30, p2), ft2.static_bl_desc = new ft2(null, ut2.extra_blbits, 0, 19, 7);
          function n2(t3, e3, n3, r3, i3) {
            var o3 = this;
            o3.good_length = t3, o3.max_lazy = e3, o3.nice_length = n3, o3.max_chain = r3, o3.func = i3;
          }
          var dt2 = [new n2(0, 0, 0, 0, 0), new n2(4, 4, 8, 4, 1), new n2(4, 5, 16, 8, 1), new n2(4, 6, 32, 32, 1), new n2(4, 4, 16, 16, 2), new n2(8, 16, 32, 32, 2), new n2(8, 16, 128, 128, 2), new n2(8, 32, 128, 256, 2), new n2(32, 128, 258, 1024, 2), new n2(32, 258, 258, 4096, 2)], pt2 = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""], gt2 = 262;
          function mt2(t3, e3, n3, r3) {
            var i3 = t3[2 * e3], o3 = t3[2 * n3];
            return i3 < o3 || i3 == o3 && r3[e3] <= r3[n3];
          }
          function r2() {
            var h2, c2, l2, u2, f2, d2, p3, g3, i3, m2, w2, y2, v2, a2, b2, x2, S2, k2, _2, A2, I2, C2, T2, F2, P2, E2, q2, O2, B2, R2, s2, j2, D2, M2, U2, N2, z2, o3, L2, H2, W2, G2 = this, V2 = new ut2(), Y2 = new ut2(), X2 = new ut2();
            function J2() {
              var t3;
              for (t3 = 0; t3 < 286; t3++)
                s2[2 * t3] = 0;
              for (t3 = 0; t3 < 30; t3++)
                j2[2 * t3] = 0;
              for (t3 = 0; t3 < 19; t3++)
                D2[2 * t3] = 0;
              s2[512] = 1, G2.opt_len = G2.static_len = 0, N2 = o3 = 0;
            }
            function K2(t3, e4) {
              var n3, r3, i4 = -1, o4 = t3[1], a3 = 0, s3 = 7, h3 = 4;
              for (0 === o4 && (s3 = 138, h3 = 3), t3[2 * (e4 + 1) + 1] = 65535, n3 = 0; n3 <= e4; n3++)
                r3 = o4, o4 = t3[2 * (n3 + 1) + 1], ++a3 < s3 && r3 == o4 || (a3 < h3 ? D2[2 * r3] += a3 : 0 !== r3 ? (r3 != i4 && D2[2 * r3]++, D2[32]++) : a3 <= 10 ? D2[34]++ : D2[36]++, i4 = r3, (a3 = 0) === o4 ? (s3 = 138, h3 = 3) : r3 == o4 ? (s3 = 6, h3 = 3) : (s3 = 7, h3 = 4));
            }
            function Q2(t3) {
              G2.pending_buf[G2.pending++] = t3;
            }
            function Z2(t3) {
              Q2(255 & t3), Q2(t3 >>> 8 & 255);
            }
            function $2(t3, e4) {
              var n3, r3 = e4;
              16 - r3 < W2 ? (Z2(H2 |= (n3 = t3) << W2 & 65535), H2 = n3 >>> 16 - W2, W2 += r3 - 16) : (H2 |= t3 << W2 & 65535, W2 += r3);
            }
            function tt2(t3, e4) {
              var n3 = 2 * t3;
              $2(65535 & e4[n3], 65535 & e4[n3 + 1]);
            }
            function et2(t3, e4) {
              var n3, r3, i4 = -1, o4 = t3[1], a3 = 0, s3 = 7, h3 = 4;
              for (0 === o4 && (s3 = 138, h3 = 3), n3 = 0; n3 <= e4; n3++)
                if (r3 = o4, o4 = t3[2 * (n3 + 1) + 1], !(++a3 < s3 && r3 == o4)) {
                  if (a3 < h3)
                    for (; tt2(r3, D2), 0 != --a3; )
                      ;
                  else
                    0 !== r3 ? (r3 != i4 && (tt2(r3, D2), a3--), tt2(16, D2), $2(a3 - 3, 2)) : a3 <= 10 ? (tt2(17, D2), $2(a3 - 3, 3)) : (tt2(18, D2), $2(a3 - 11, 7));
                  i4 = r3, (a3 = 0) === o4 ? (s3 = 138, h3 = 3) : r3 == o4 ? (s3 = 6, h3 = 3) : (s3 = 7, h3 = 4);
                }
            }
            function nt2() {
              16 == W2 ? (Z2(H2), W2 = H2 = 0) : 8 <= W2 && (Q2(255 & H2), H2 >>>= 8, W2 -= 8);
            }
            function rt2(t3, e4) {
              var n3, r3, i4;
              if (G2.pending_buf[z2 + 2 * N2] = t3 >>> 8 & 255, G2.pending_buf[z2 + 2 * N2 + 1] = 255 & t3, G2.pending_buf[M2 + N2] = 255 & e4, N2++, 0 === t3 ? s2[2 * e4]++ : (o3++, t3--, s2[2 * (ut2._length_code[e4] + 256 + 1)]++, j2[2 * ut2.d_code(t3)]++), 0 == (8191 & N2) && 2 < q2) {
                for (n3 = 8 * N2, r3 = I2 - S2, i4 = 0; i4 < 30; i4++)
                  n3 += j2[2 * i4] * (5 + ut2.extra_dbits[i4]);
                if (n3 >>>= 3, o3 < Math.floor(N2 / 2) && n3 < Math.floor(r3 / 2))
                  return true;
              }
              return N2 == U2 - 1;
            }
            function it2(t3, e4) {
              var n3, r3, i4, o4, a3 = 0;
              if (0 !== N2)
                for (; n3 = G2.pending_buf[z2 + 2 * a3] << 8 & 65280 | 255 & G2.pending_buf[z2 + 2 * a3 + 1], r3 = 255 & G2.pending_buf[M2 + a3], a3++, 0 === n3 ? tt2(r3, t3) : (tt2((i4 = ut2._length_code[r3]) + 256 + 1, t3), 0 !== (o4 = ut2.extra_lbits[i4]) && $2(r3 -= ut2.base_length[i4], o4), tt2(i4 = ut2.d_code(--n3), e4), 0 !== (o4 = ut2.extra_dbits[i4]) && $2(n3 -= ut2.base_dist[i4], o4)), a3 < N2; )
                  ;
              tt2(256, t3), L2 = t3[513];
            }
            function ot2() {
              8 < W2 ? Z2(H2) : 0 < W2 && Q2(255 & H2), W2 = H2 = 0;
            }
            function at2(t3, e4, n3) {
              var r3, i4, o4;
              $2(0 + (n3 ? 1 : 0), 3), r3 = t3, i4 = e4, o4 = true, ot2(), L2 = 8, o4 && (Z2(i4), Z2(~i4)), G2.pending_buf.set(g3.subarray(r3, r3 + i4), G2.pending), G2.pending += i4;
            }
            function e3(t3, e4, n3) {
              var r3, i4, o4 = 0;
              0 < q2 ? (V2.build_tree(G2), Y2.build_tree(G2), o4 = function() {
                var t4;
                for (K2(s2, V2.max_code), K2(j2, Y2.max_code), X2.build_tree(G2), t4 = 18; 3 <= t4 && 0 === D2[2 * ut2.bl_order[t4] + 1]; t4--)
                  ;
                return G2.opt_len += 3 * (t4 + 1) + 5 + 5 + 4, t4;
              }(), r3 = G2.opt_len + 3 + 7 >>> 3, (i4 = G2.static_len + 3 + 7 >>> 3) <= r3 && (r3 = i4)) : r3 = i4 = e4 + 5, e4 + 4 <= r3 && -1 != t3 ? at2(t3, e4, n3) : i4 == r3 ? ($2(2 + (n3 ? 1 : 0), 3), it2(ft2.static_ltree, ft2.static_dtree)) : ($2(4 + (n3 ? 1 : 0), 3), function(t4, e5, n4) {
                var r4;
                for ($2(t4 - 257, 5), $2(e5 - 1, 5), $2(n4 - 4, 4), r4 = 0; r4 < n4; r4++)
                  $2(D2[2 * ut2.bl_order[r4] + 1], 3);
                et2(s2, t4 - 1), et2(j2, e5 - 1);
              }(V2.max_code + 1, Y2.max_code + 1, o4 + 1), it2(s2, j2)), J2(), n3 && ot2();
            }
            function st2(t3) {
              e3(0 <= S2 ? S2 : -1, I2 - S2, t3), S2 = I2, h2.flush_pending();
            }
            function ht2() {
              var t3, e4, n3, r3;
              do {
                if (0 === (r3 = i3 - T2 - I2) && 0 === I2 && 0 === T2)
                  r3 = f2;
                else if (-1 == r3)
                  r3--;
                else if (f2 + f2 - gt2 <= I2) {
                  for (g3.set(g3.subarray(f2, f2 + f2), 0), C2 -= f2, I2 -= f2, S2 -= f2, n3 = t3 = v2; e4 = 65535 & w2[--n3], w2[n3] = f2 <= e4 ? e4 - f2 : 0, 0 != --t3; )
                    ;
                  for (n3 = t3 = f2; e4 = 65535 & m2[--n3], m2[n3] = f2 <= e4 ? e4 - f2 : 0, 0 != --t3; )
                    ;
                  r3 += f2;
                }
                if (0 === h2.avail_in)
                  return;
                t3 = h2.read_buf(g3, I2 + T2, r3), 3 <= (T2 += t3) && (y2 = ((y2 = 255 & g3[I2]) << x2 ^ 255 & g3[I2 + 1]) & b2);
              } while (T2 < gt2 && 0 !== h2.avail_in);
            }
            function ct2(t3) {
              var e4, n3, r3 = P2, i4 = I2, o4 = F2, a3 = f2 - gt2 < I2 ? I2 - (f2 - gt2) : 0, s3 = R2, h3 = p3, c3 = I2 + 258, l3 = g3[i4 + o4 - 1], u3 = g3[i4 + o4];
              B2 <= F2 && (r3 >>= 2), T2 < s3 && (s3 = T2);
              do {
                if (g3[(e4 = t3) + o4] == u3 && g3[e4 + o4 - 1] == l3 && g3[e4] == g3[i4] && g3[++e4] == g3[i4 + 1]) {
                  i4 += 2, e4++;
                  do {
                  } while (g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && g3[++i4] == g3[++e4] && i4 < c3);
                  if (n3 = 258 - (c3 - i4), i4 = c3 - 258, o4 < n3) {
                    if (C2 = t3, s3 <= (o4 = n3))
                      break;
                    l3 = g3[i4 + o4 - 1], u3 = g3[i4 + o4];
                  }
                }
              } while ((t3 = 65535 & m2[t3 & h3]) > a3 && 0 != --r3);
              return o4 <= T2 ? o4 : T2;
            }
            function lt2(t3) {
              return t3.total_in = t3.total_out = 0, t3.msg = null, G2.pending = 0, G2.pending_out = 0, c2 = 113, u2 = 0, V2.dyn_tree = s2, V2.stat_desc = ft2.static_l_desc, Y2.dyn_tree = j2, Y2.stat_desc = ft2.static_d_desc, X2.dyn_tree = D2, X2.stat_desc = ft2.static_bl_desc, W2 = H2 = 0, L2 = 8, J2(), function() {
                var t4;
                for (i3 = 2 * f2, t4 = w2[v2 - 1] = 0; t4 < v2 - 1; t4++)
                  w2[t4] = 0;
                E2 = dt2[q2].max_lazy, B2 = dt2[q2].good_length, R2 = dt2[q2].nice_length, P2 = dt2[q2].max_chain, k2 = F2 = 2, y2 = A2 = T2 = S2 = I2 = 0;
              }(), 0;
            }
            G2.depth = [], G2.bl_count = [], G2.heap = [], s2 = [], j2 = [], D2 = [], G2.pqdownheap = function(t3, e4) {
              for (var n3 = G2.heap, r3 = n3[e4], i4 = e4 << 1; i4 <= G2.heap_len && (i4 < G2.heap_len && mt2(t3, n3[i4 + 1], n3[i4], G2.depth) && i4++, !mt2(t3, r3, n3[i4], G2.depth)); )
                n3[e4] = n3[i4], e4 = i4, i4 <<= 1;
              n3[e4] = r3;
            }, G2.deflateInit = function(t3, e4, n3, r3, i4, o4) {
              return r3 || (r3 = 8), i4 || (i4 = 8), o4 || (o4 = 0), t3.msg = null, -1 == e4 && (e4 = 6), i4 < 1 || 9 < i4 || 8 != r3 || n3 < 9 || 15 < n3 || e4 < 0 || 9 < e4 || o4 < 0 || 2 < o4 ? -2 : (t3.dstate = G2, p3 = (f2 = 1 << (d2 = n3)) - 1, b2 = (v2 = 1 << (a2 = i4 + 7)) - 1, x2 = Math.floor((a2 + 3 - 1) / 3), g3 = new Uint8Array(2 * f2), m2 = [], w2 = [], U2 = 1 << i4 + 6, G2.pending_buf = new Uint8Array(4 * U2), l2 = 4 * U2, z2 = Math.floor(U2 / 2), M2 = 3 * U2, q2 = e4, O2 = o4, lt2(t3));
            }, G2.deflateEnd = function() {
              return 42 != c2 && 113 != c2 && 666 != c2 ? -2 : (G2.pending_buf = null, g3 = m2 = w2 = null, G2.dstate = null, 113 == c2 ? -3 : 0);
            }, G2.deflateParams = function(t3, e4, n3) {
              var r3 = 0;
              return -1 == e4 && (e4 = 6), e4 < 0 || 9 < e4 || n3 < 0 || 2 < n3 ? -2 : (dt2[q2].func != dt2[e4].func && 0 !== t3.total_in && (r3 = t3.deflate(1)), q2 != e4 && (E2 = dt2[q2 = e4].max_lazy, B2 = dt2[q2].good_length, R2 = dt2[q2].nice_length, P2 = dt2[q2].max_chain), O2 = n3, r3);
            }, G2.deflateSetDictionary = function(t3, e4, n3) {
              var r3, i4 = n3, o4 = 0;
              if (!e4 || 42 != c2)
                return -2;
              if (i4 < 3)
                return 0;
              for (f2 - gt2 < i4 && (o4 = n3 - (i4 = f2 - gt2)), g3.set(e4.subarray(o4, o4 + i4), 0), S2 = I2 = i4, y2 = ((y2 = 255 & g3[0]) << x2 ^ 255 & g3[1]) & b2, r3 = 0; r3 <= i4 - 3; r3++)
                y2 = (y2 << x2 ^ 255 & g3[r3 + 2]) & b2, m2[r3 & p3] = w2[y2], w2[y2] = r3;
              return 0;
            }, G2.deflate = function(t3, e4) {
              var n3, r3, i4, o4, a3, s3;
              if (4 < e4 || e4 < 0)
                return -2;
              if (!t3.next_out || !t3.next_in && 0 !== t3.avail_in || 666 == c2 && 4 != e4)
                return t3.msg = pt2[4], -2;
              if (0 === t3.avail_out)
                return t3.msg = pt2[7], -5;
              if (h2 = t3, o4 = u2, u2 = e4, 42 == c2 && (r3 = 8 + (d2 - 8 << 4) << 8, 3 < (i4 = (q2 - 1 & 255) >> 1) && (i4 = 3), r3 |= i4 << 6, 0 !== I2 && (r3 |= 32), c2 = 113, Q2((s3 = r3 += 31 - r3 % 31) >> 8 & 255), Q2(255 & s3)), 0 !== G2.pending) {
                if (h2.flush_pending(), 0 === h2.avail_out)
                  return u2 = -1, 0;
              } else if (0 === h2.avail_in && e4 <= o4 && 4 != e4)
                return h2.msg = pt2[7], -5;
              if (666 == c2 && 0 !== h2.avail_in)
                return t3.msg = pt2[7], -5;
              if (0 !== h2.avail_in || 0 !== T2 || 0 != e4 && 666 != c2) {
                switch (a3 = -1, dt2[q2].func) {
                  case 0:
                    a3 = function(t4) {
                      var e5, n4 = 65535;
                      for (l2 - 5 < n4 && (n4 = l2 - 5); ; ) {
                        if (T2 <= 1) {
                          if (ht2(), 0 === T2 && 0 == t4)
                            return 0;
                          if (0 === T2)
                            break;
                        }
                        if (I2 += T2, e5 = S2 + n4, ((T2 = 0) === I2 || e5 <= I2) && (T2 = I2 - e5, I2 = e5, st2(false), 0 === h2.avail_out))
                          return 0;
                        if (f2 - gt2 <= I2 - S2 && (st2(false), 0 === h2.avail_out))
                          return 0;
                      }
                      return st2(4 == t4), 0 === h2.avail_out ? 4 == t4 ? 2 : 0 : 4 == t4 ? 3 : 1;
                    }(e4);
                    break;
                  case 1:
                    a3 = function(t4) {
                      for (var e5, n4 = 0; ; ) {
                        if (T2 < gt2) {
                          if (ht2(), T2 < gt2 && 0 == t4)
                            return 0;
                          if (0 === T2)
                            break;
                        }
                        if (3 <= T2 && (y2 = (y2 << x2 ^ 255 & g3[I2 + 2]) & b2, n4 = 65535 & w2[y2], m2[I2 & p3] = w2[y2], w2[y2] = I2), 0 !== n4 && (I2 - n4 & 65535) <= f2 - gt2 && 2 != O2 && (k2 = ct2(n4)), 3 <= k2)
                          if (e5 = rt2(I2 - C2, k2 - 3), T2 -= k2, k2 <= E2 && 3 <= T2) {
                            for (k2--; y2 = (y2 << x2 ^ 255 & g3[++I2 + 2]) & b2, n4 = 65535 & w2[y2], m2[I2 & p3] = w2[y2], w2[y2] = I2, 0 != --k2; )
                              ;
                            I2++;
                          } else
                            I2 += k2, k2 = 0, y2 = ((y2 = 255 & g3[I2]) << x2 ^ 255 & g3[I2 + 1]) & b2;
                        else
                          e5 = rt2(0, 255 & g3[I2]), T2--, I2++;
                        if (e5 && (st2(false), 0 === h2.avail_out))
                          return 0;
                      }
                      return st2(4 == t4), 0 === h2.avail_out ? 4 == t4 ? 2 : 0 : 4 == t4 ? 3 : 1;
                    }(e4);
                    break;
                  case 2:
                    a3 = function(t4) {
                      for (var e5, n4, r4 = 0; ; ) {
                        if (T2 < gt2) {
                          if (ht2(), T2 < gt2 && 0 == t4)
                            return 0;
                          if (0 === T2)
                            break;
                        }
                        if (3 <= T2 && (y2 = (y2 << x2 ^ 255 & g3[I2 + 2]) & b2, r4 = 65535 & w2[y2], m2[I2 & p3] = w2[y2], w2[y2] = I2), F2 = k2, _2 = C2, k2 = 2, 0 !== r4 && F2 < E2 && (I2 - r4 & 65535) <= f2 - gt2 && (2 != O2 && (k2 = ct2(r4)), k2 <= 5 && (1 == O2 || 3 == k2 && 4096 < I2 - C2) && (k2 = 2)), 3 <= F2 && k2 <= F2) {
                          for (n4 = I2 + T2 - 3, e5 = rt2(I2 - 1 - _2, F2 - 3), T2 -= F2 - 1, F2 -= 2; ++I2 <= n4 && (y2 = (y2 << x2 ^ 255 & g3[I2 + 2]) & b2, r4 = 65535 & w2[y2], m2[I2 & p3] = w2[y2], w2[y2] = I2), 0 != --F2; )
                            ;
                          if (A2 = 0, k2 = 2, I2++, e5 && (st2(false), 0 === h2.avail_out))
                            return 0;
                        } else if (0 !== A2) {
                          if ((e5 = rt2(0, 255 & g3[I2 - 1])) && st2(false), I2++, T2--, 0 === h2.avail_out)
                            return 0;
                        } else
                          A2 = 1, I2++, T2--;
                      }
                      return 0 !== A2 && (e5 = rt2(0, 255 & g3[I2 - 1]), A2 = 0), st2(4 == t4), 0 === h2.avail_out ? 4 == t4 ? 2 : 0 : 4 == t4 ? 3 : 1;
                    }(e4);
                }
                if (2 != a3 && 3 != a3 || (c2 = 666), 0 == a3 || 2 == a3)
                  return 0 === h2.avail_out && (u2 = -1), 0;
                if (1 == a3) {
                  if (1 == e4)
                    $2(2, 3), tt2(256, ft2.static_ltree), nt2(), 1 + L2 + 10 - W2 < 9 && ($2(2, 3), tt2(256, ft2.static_ltree), nt2()), L2 = 7;
                  else if (at2(0, 0, false), 3 == e4)
                    for (n3 = 0; n3 < v2; n3++)
                      w2[n3] = 0;
                  if (h2.flush_pending(), 0 === h2.avail_out)
                    return u2 = -1, 0;
                }
              }
              return 4 != e4 ? 0 : 1;
            };
          }
          function i2() {
            var t3 = this;
            t3.next_in_index = 0, t3.next_out_index = 0, t3.avail_in = 0, t3.total_in = 0, t3.avail_out = 0, t3.total_out = 0;
          }
          i2.prototype = { deflateInit: function(t3, e3) {
            return this.dstate = new r2(), e3 || (e3 = p2), this.dstate.deflateInit(this, t3, e3);
          }, deflate: function(t3) {
            return this.dstate ? this.dstate.deflate(this, t3) : -2;
          }, deflateEnd: function() {
            if (!this.dstate)
              return -2;
            var t3 = this.dstate.deflateEnd();
            return this.dstate = null, t3;
          }, deflateParams: function(t3, e3) {
            return this.dstate ? this.dstate.deflateParams(this, t3, e3) : -2;
          }, deflateSetDictionary: function(t3, e3) {
            return this.dstate ? this.dstate.deflateSetDictionary(this, t3, e3) : -2;
          }, read_buf: function(t3, e3, n3) {
            var r3 = this, i3 = r3.avail_in;
            return n3 < i3 && (i3 = n3), 0 === i3 ? 0 : (r3.avail_in -= i3, t3.set(r3.next_in.subarray(r3.next_in_index, r3.next_in_index + i3), e3), r3.next_in_index += i3, r3.total_in += i3, i3);
          }, flush_pending: function() {
            var t3 = this, e3 = t3.dstate.pending;
            e3 > t3.avail_out && (e3 = t3.avail_out), 0 !== e3 && (t3.next_out.set(t3.dstate.pending_buf.subarray(t3.dstate.pending_out, t3.dstate.pending_out + e3), t3.next_out_index), t3.next_out_index += e3, t3.dstate.pending_out += e3, t3.total_out += e3, t3.avail_out -= e3, t3.dstate.pending -= e3, 0 === t3.dstate.pending && (t3.dstate.pending_out = 0));
          } };
          var o2 = t2.zip || t2;
          o2.Deflater = o2._jzlib_Deflater = function(t3) {
            var s2 = new i2(), h2 = new Uint8Array(512), e3 = t3 ? t3.level : -1;
            void 0 === e3 && (e3 = -1), s2.deflateInit(e3), s2.next_out = h2, this.append = function(t4, e4) {
              var n3, r3 = [], i3 = 0, o3 = 0, a2 = 0;
              if (t4.length) {
                s2.next_in_index = 0, s2.next_in = t4, s2.avail_in = t4.length;
                do {
                  if (s2.next_out_index = 0, s2.avail_out = 512, 0 != s2.deflate(0))
                    throw new Error("deflating: " + s2.msg);
                  s2.next_out_index && (512 == s2.next_out_index ? r3.push(new Uint8Array(h2)) : r3.push(new Uint8Array(h2.subarray(0, s2.next_out_index)))), a2 += s2.next_out_index, e4 && 0 < s2.next_in_index && s2.next_in_index != i3 && (e4(s2.next_in_index), i3 = s2.next_in_index);
                } while (0 < s2.avail_in || 0 === s2.avail_out);
                return n3 = new Uint8Array(a2), r3.forEach(function(t5) {
                  n3.set(t5, o3), o3 += t5.length;
                }), n3;
              }
            }, this.flush = function() {
              var t4, e4, n3 = [], r3 = 0, i3 = 0;
              do {
                if (s2.next_out_index = 0, s2.avail_out = 512, 1 != (t4 = s2.deflate(4)) && 0 != t4)
                  throw new Error("deflating: " + s2.msg);
                0 < 512 - s2.avail_out && n3.push(new Uint8Array(h2.subarray(0, s2.next_out_index))), i3 += s2.next_out_index;
              } while (0 < s2.avail_in || 0 === s2.avail_out);
              return s2.deflateEnd(), e4 = new Uint8Array(i3), n3.forEach(function(t5) {
                e4.set(t5, r3), r3 += t5.length;
              }), e4;
            };
          };
        }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()), /**
           * A class to parse color values
           * @author Stoyan Stefanov <sstoo@gmail.com>
           * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
           * @license Use it if you like it
           */
        function(t2) {
          function f2(t3) {
            var e2;
            this.ok = false, "#" == t3.charAt(0) && (t3 = t3.substr(1, 6)), t3 = (t3 = t3.replace(/ /g, "")).toLowerCase();
            var l2 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" };
            for (var n2 in l2)
              t3 == n2 && (t3 = l2[n2]);
            for (var u2 = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(t4) {
              return [parseInt(t4[1]), parseInt(t4[2]), parseInt(t4[3])];
            } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(t4) {
              return [parseInt(t4[1], 16), parseInt(t4[2], 16), parseInt(t4[3], 16)];
            } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(t4) {
              return [parseInt(t4[1] + t4[1], 16), parseInt(t4[2] + t4[2], 16), parseInt(t4[3] + t4[3], 16)];
            } }], r2 = 0; r2 < u2.length; r2++) {
              var i2 = u2[r2].re, o2 = u2[r2].process, a2 = i2.exec(t3);
              a2 && (e2 = o2(a2), this.r = e2[0], this.g = e2[1], this.b = e2[2], this.ok = true);
            }
            this.r = this.r < 0 || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b, this.toRGB = function() {
              return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
            }, this.toHex = function() {
              var t4 = this.r.toString(16), e3 = this.g.toString(16), n3 = this.b.toString(16);
              return 1 == t4.length && (t4 = "0" + t4), 1 == e3.length && (e3 = "0" + e3), 1 == n3.length && (n3 = "0" + n3), "#" + t4 + e3 + n3;
            }, this.getHelpXML = function() {
              for (var t4 = new Array(), e3 = 0; e3 < u2.length; e3++)
                for (var n3 = u2[e3].example, r3 = 0; r3 < n3.length; r3++)
                  t4[t4.length] = n3[r3];
              for (var i3 in l2)
                t4[t4.length] = i3;
              var o3 = document.createElement("ul");
              o3.setAttribute("id", "rgbcolor-examples");
              for (e3 = 0; e3 < t4.length; e3++)
                try {
                  var a3 = document.createElement("li"), s2 = new f2(t4[e3]), h2 = document.createElement("div");
                  h2.style.cssText = "margin: 3px; border: 1px solid black; background:" + s2.toHex() + "; color:" + s2.toHex(), h2.appendChild(document.createTextNode("test"));
                  var c2 = document.createTextNode(" " + t4[e3] + " -> " + s2.toRGB() + " -> " + s2.toHex());
                  a3.appendChild(h2), a3.appendChild(c2), o3.appendChild(a3);
                } catch (t5) {
                }
              return o3;
            };
          }
          "undefined" != typeof define && define.amd ? define("RGBColor", function() {
            return f2;
          }) : "undefined" != typeof module && module.exports && (module.exports = f2), t2.RGBColor = f2;
        }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()), function(t2) {
          if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = t2();
          else if ("function" == typeof define && define.amd)
            define([], t2);
          else {
            var e2;
            "undefined" != typeof window ? e2 = window : "undefined" != typeof global ? e2 = global : "undefined" != typeof self && (e2 = self), e2.html2canvas = t2();
          }
        }(function() {
          return function o2(a2, s2, h2) {
            function c2(n2, t3) {
              if (!s2[n2]) {
                if (!a2[n2]) {
                  var e2 = "function" == typeof __require && __require;
                  if (!t3 && e2)
                    return e2(n2, true);
                  if (l2)
                    return l2(n2, true);
                  var r2 = new Error("Cannot find module '" + n2 + "'");
                  throw r2.code = "MODULE_NOT_FOUND", r2;
                }
                var i2 = s2[n2] = { exports: {} };
                a2[n2][0].call(i2.exports, function(t4) {
                  var e3 = a2[n2][1][t4];
                  return c2(e3 || t4);
                }, i2, i2.exports, o2, a2, s2, h2);
              }
              return s2[n2].exports;
            }
            for (var l2 = "function" == typeof __require && __require, t2 = 0; t2 < h2.length; t2++)
              c2(h2[t2]);
            return c2;
          }({ 1: [function(t2, q2, O2) {
            (function(E2) {
              !function(t3) {
                var e2 = "object" == typeof O2 && O2, n2 = "object" == typeof q2 && q2 && q2.exports == e2 && q2, r2 = "object" == typeof E2 && E2;
                r2.global !== r2 && r2.window !== r2 || (t3 = r2);
                var i2, o2, w2 = 2147483647, y2 = 36, v2 = 1, b2 = 26, a2 = 38, s2 = 700, x2 = 72, S2 = 128, k2 = "-", h2 = /^xn--/, c2 = /[^ -~]/, l2 = /\x2E|\u3002|\uFF0E|\uFF61/g, u2 = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, f2 = y2 - v2, _2 = Math.floor, A2 = String.fromCharCode;
                function I2(t4) {
                  throw RangeError(u2[t4]);
                }
                function d2(t4, e3) {
                  for (var n3 = t4.length; n3--; )
                    t4[n3] = e3(t4[n3]);
                  return t4;
                }
                function p2(t4, e3) {
                  return d2(t4.split(l2), e3).join(".");
                }
                function C2(t4) {
                  for (var e3, n3, r3 = [], i3 = 0, o3 = t4.length; i3 < o3; )
                    55296 <= (e3 = t4.charCodeAt(i3++)) && e3 <= 56319 && i3 < o3 ? 56320 == (64512 & (n3 = t4.charCodeAt(i3++))) ? r3.push(((1023 & e3) << 10) + (1023 & n3) + 65536) : (r3.push(e3), i3--) : r3.push(e3);
                  return r3;
                }
                function T2(t4) {
                  return d2(t4, function(t5) {
                    var e3 = "";
                    return 65535 < t5 && (e3 += A2((t5 -= 65536) >>> 10 & 1023 | 55296), t5 = 56320 | 1023 & t5), e3 += A2(t5);
                  }).join("");
                }
                function F2(t4, e3) {
                  return t4 + 22 + 75 * (t4 < 26) - ((0 != e3) << 5);
                }
                function P2(t4, e3, n3) {
                  var r3 = 0;
                  for (t4 = n3 ? _2(t4 / s2) : t4 >> 1, t4 += _2(t4 / e3); f2 * b2 >> 1 < t4; r3 += y2)
                    t4 = _2(t4 / f2);
                  return _2(r3 + (f2 + 1) * t4 / (t4 + a2));
                }
                function g2(t4) {
                  var e3, n3, r3, i3, o3, a3, s3, h3, c3, l3, u3, f3 = [], d3 = t4.length, p3 = 0, g3 = S2, m3 = x2;
                  for ((n3 = t4.lastIndexOf(k2)) < 0 && (n3 = 0), r3 = 0; r3 < n3; ++r3)
                    128 <= t4.charCodeAt(r3) && I2("not-basic"), f3.push(t4.charCodeAt(r3));
                  for (i3 = 0 < n3 ? n3 + 1 : 0; i3 < d3; ) {
                    for (o3 = p3, a3 = 1, s3 = y2; d3 <= i3 && I2("invalid-input"), u3 = t4.charCodeAt(i3++), (y2 <= (h3 = u3 - 48 < 10 ? u3 - 22 : u3 - 65 < 26 ? u3 - 65 : u3 - 97 < 26 ? u3 - 97 : y2) || h3 > _2((w2 - p3) / a3)) && I2("overflow"), p3 += h3 * a3, !(h3 < (c3 = s3 <= m3 ? v2 : m3 + b2 <= s3 ? b2 : s3 - m3)); s3 += y2)
                      a3 > _2(w2 / (l3 = y2 - c3)) && I2("overflow"), a3 *= l3;
                    m3 = P2(p3 - o3, e3 = f3.length + 1, 0 == o3), _2(p3 / e3) > w2 - g3 && I2("overflow"), g3 += _2(p3 / e3), p3 %= e3, f3.splice(p3++, 0, g3);
                  }
                  return T2(f3);
                }
                function m2(t4) {
                  var e3, n3, r3, i3, o3, a3, s3, h3, c3, l3, u3, f3, d3, p3, g3, m3 = [];
                  for (f3 = (t4 = C2(t4)).length, e3 = S2, o3 = x2, a3 = n3 = 0; a3 < f3; ++a3)
                    (u3 = t4[a3]) < 128 && m3.push(A2(u3));
                  for (r3 = i3 = m3.length, i3 && m3.push(k2); r3 < f3; ) {
                    for (s3 = w2, a3 = 0; a3 < f3; ++a3)
                      e3 <= (u3 = t4[a3]) && u3 < s3 && (s3 = u3);
                    for (s3 - e3 > _2((w2 - n3) / (d3 = r3 + 1)) && I2("overflow"), n3 += (s3 - e3) * d3, e3 = s3, a3 = 0; a3 < f3; ++a3)
                      if ((u3 = t4[a3]) < e3 && ++n3 > w2 && I2("overflow"), u3 == e3) {
                        for (h3 = n3, c3 = y2; !(h3 < (l3 = c3 <= o3 ? v2 : o3 + b2 <= c3 ? b2 : c3 - o3)); c3 += y2)
                          g3 = h3 - l3, p3 = y2 - l3, m3.push(A2(F2(l3 + g3 % p3, 0))), h3 = _2(g3 / p3);
                        m3.push(A2(F2(h3, 0))), o3 = P2(n3, d3, r3 == i3), n3 = 0, ++r3;
                      }
                    ++n3, ++e3;
                  }
                  return m3.join("");
                }
                if (i2 = { version: "1.2.4", ucs2: { decode: C2, encode: T2 }, decode: g2, encode: m2, toASCII: function(t4) {
                  return p2(t4, function(t5) {
                    return c2.test(t5) ? "xn--" + m2(t5) : t5;
                  });
                }, toUnicode: function(t4) {
                  return p2(t4, function(t5) {
                    return h2.test(t5) ? g2(t5.slice(4).toLowerCase()) : t5;
                  });
                } }, e2 && !e2.nodeType)
                  if (n2)
                    n2.exports = i2;
                  else
                    for (o2 in i2)
                      i2.hasOwnProperty(o2) && (e2[o2] = i2[o2]);
                else
                  t3.punycode = i2;
              }(this);
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
          }, {}], 2: [function(t2, e2, n2) {
            var i2 = t2("./log");
            function u2(t3, e3) {
              for (var n3 = 3 === t3.nodeType ? document.createTextNode(t3.nodeValue) : t3.cloneNode(false), r2 = t3.firstChild; r2; )
                true !== e3 && 1 === r2.nodeType && "SCRIPT" === r2.nodeName || n3.appendChild(u2(r2, e3)), r2 = r2.nextSibling;
              return 1 === t3.nodeType && (n3._scrollTop = t3.scrollTop, n3._scrollLeft = t3.scrollLeft, "CANVAS" === t3.nodeName ? function(e4, t4) {
                try {
                  t4 && (t4.width = e4.width, t4.height = e4.height, t4.getContext("2d").putImageData(e4.getContext("2d").getImageData(0, 0, e4.width, e4.height), 0, 0));
                } catch (t5) {
                  i2("Unable to copy canvas content from", e4, t5);
                }
              }(t3, n3) : "TEXTAREA" !== t3.nodeName && "SELECT" !== t3.nodeName || (n3.value = t3.value)), n3;
            }
            e2.exports = function(o2, t3, e3, n3, a2, s2, h2) {
              var c2 = u2(o2.documentElement, a2.javascriptEnabled), l2 = t3.createElement("iframe");
              return l2.className = "html2canvas-container", l2.style.visibility = "hidden", l2.style.position = "fixed", l2.style.left = "-10000px", l2.style.top = "0px", l2.style.border = "0", l2.width = e3, l2.height = n3, l2.scrolling = "no", t3.body.appendChild(l2), new Promise(function(e4) {
                var t4, n4, r2, i3 = l2.contentWindow.document;
                l2.contentWindow.onload = l2.onload = function() {
                  var t5 = setInterval(function() {
                    0 < i3.body.childNodes.length && (!function t6(e5) {
                      if (1 === e5.nodeType) {
                        e5.scrollTop = e5._scrollTop, e5.scrollLeft = e5._scrollLeft;
                        for (var n5 = e5.firstChild; n5; )
                          t6(n5), n5 = n5.nextSibling;
                      }
                    }(i3.documentElement), clearInterval(t5), "view" === a2.type && (l2.contentWindow.scrollTo(s2, h2), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || l2.contentWindow.scrollY === h2 && l2.contentWindow.scrollX === s2 || (i3.documentElement.style.top = -h2 + "px", i3.documentElement.style.left = -s2 + "px", i3.documentElement.style.position = "absolute")), e4(l2));
                  }, 50);
                }, i3.open(), i3.write("<!DOCTYPE html><html></html>"), n4 = s2, r2 = h2, !(t4 = o2).defaultView || n4 === t4.defaultView.pageXOffset && r2 === t4.defaultView.pageYOffset || t4.defaultView.scrollTo(n4, r2), i3.replaceChild(i3.adoptNode(c2), i3.documentElement), i3.close();
              });
            };
          }, { "./log": 13 }], 3: [function(t2, e2, n2) {
            function r2(t3) {
              this.r = 0, this.g = 0, this.b = 0, this.a = null;
              this.fromArray(t3) || this.namedColor(t3) || this.rgb(t3) || this.rgba(t3) || this.hex6(t3) || this.hex3(t3);
            }
            r2.prototype.darken = function(t3) {
              var e3 = 1 - t3;
              return new r2([Math.round(this.r * e3), Math.round(this.g * e3), Math.round(this.b * e3), this.a]);
            }, r2.prototype.isTransparent = function() {
              return 0 === this.a;
            }, r2.prototype.isBlack = function() {
              return 0 === this.r && 0 === this.g && 0 === this.b;
            }, r2.prototype.fromArray = function(t3) {
              return Array.isArray(t3) && (this.r = Math.min(t3[0], 255), this.g = Math.min(t3[1], 255), this.b = Math.min(t3[2], 255), 3 < t3.length && (this.a = t3[3])), Array.isArray(t3);
            };
            var i2 = /^#([a-f0-9]{3})$/i;
            r2.prototype.hex3 = function(t3) {
              var e3;
              return null !== (e3 = t3.match(i2)) && (this.r = parseInt(e3[1][0] + e3[1][0], 16), this.g = parseInt(e3[1][1] + e3[1][1], 16), this.b = parseInt(e3[1][2] + e3[1][2], 16)), null !== e3;
            };
            var o2 = /^#([a-f0-9]{6})$/i;
            r2.prototype.hex6 = function(t3) {
              var e3 = null;
              return null !== (e3 = t3.match(o2)) && (this.r = parseInt(e3[1].substring(0, 2), 16), this.g = parseInt(e3[1].substring(2, 4), 16), this.b = parseInt(e3[1].substring(4, 6), 16)), null !== e3;
            };
            var a2 = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
            r2.prototype.rgb = function(t3) {
              var e3;
              return null !== (e3 = t3.match(a2)) && (this.r = Number(e3[1]), this.g = Number(e3[2]), this.b = Number(e3[3])), null !== e3;
            };
            var s2 = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
            r2.prototype.rgba = function(t3) {
              var e3;
              return null !== (e3 = t3.match(s2)) && (this.r = Number(e3[1]), this.g = Number(e3[2]), this.b = Number(e3[3]), this.a = Number(e3[4])), null !== e3;
            }, r2.prototype.toString = function() {
              return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")";
            }, r2.prototype.namedColor = function(t3) {
              t3 = t3.toLowerCase();
              var e3 = h2[t3];
              if (e3)
                this.r = e3[0], this.g = e3[1], this.b = e3[2];
              else if ("transparent" === t3)
                return this.r = this.g = this.b = this.a = 0, true;
              return !!e3;
            }, r2.prototype.isColor = true;
            var h2 = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
            e2.exports = r2;
          }, {}], 4: [function(t2, e2, n2) {
            var p2 = t2("./support"), d2 = t2("./renderers/canvas"), g2 = t2("./imageloader"), m2 = t2("./nodeparser"), r2 = t2("./nodecontainer"), w2 = t2("./log"), i2 = t2("./utils"), y2 = t2("./clone"), v2 = t2("./proxy").loadUrlDocument, b2 = i2.getBounds, x2 = "data-html2canvas-node", S2 = 0;
            function o2(t3, e3) {
              var n3, r3, i3 = S2++;
              if ((e3 = e3 || {}).logging && (w2.options.logging = true, w2.options.start = Date.now()), e3.async = void 0 === e3.async || e3.async, e3.allowTaint = void 0 !== e3.allowTaint && e3.allowTaint, e3.removeContainer = void 0 === e3.removeContainer || e3.removeContainer, e3.javascriptEnabled = void 0 !== e3.javascriptEnabled && e3.javascriptEnabled, e3.imageTimeout = void 0 === e3.imageTimeout ? 1e4 : e3.imageTimeout, e3.renderer = "function" == typeof e3.renderer ? e3.renderer : d2, e3.strict = !!e3.strict, "string" == typeof t3) {
                if ("string" != typeof e3.proxy)
                  return Promise.reject("Proxy must be used when rendering url");
                var o3 = null != e3.width ? e3.width : window.innerWidth, a3 = null != e3.height ? e3.height : window.innerHeight;
                return v2((n3 = t3, r3 = document.createElement("a"), r3.href = n3, r3.href = r3.href, r3), e3.proxy, document, o3, a3, e3).then(function(t4) {
                  return k2(t4.contentWindow.document.documentElement, t4, e3, o3, a3);
                });
              }
              var s2, h2, c2, l2, u2, f2 = (void 0 === t3 ? [document.documentElement] : t3.length ? t3 : [t3])[0];
              return f2.setAttribute(x2 + i3, i3), (s2 = f2.ownerDocument, h2 = e3, c2 = f2.ownerDocument.defaultView.innerWidth, l2 = f2.ownerDocument.defaultView.innerHeight, u2 = i3, y2(s2, s2, c2, l2, h2, s2.defaultView.pageXOffset, s2.defaultView.pageYOffset).then(function(t4) {
                w2("Document cloned");
                var e4 = x2 + u2, n4 = "[" + e4 + "='" + u2 + "']";
                s2.querySelector(n4).removeAttribute(e4);
                var r4 = t4.contentWindow, i4 = r4.document.querySelector(n4), o4 = "function" == typeof h2.onclone ? Promise.resolve(h2.onclone(r4.document)) : Promise.resolve(true);
                return o4.then(function() {
                  return k2(i4, t4, h2, c2, l2);
                });
              })).then(function(t4) {
                return "function" == typeof e3.onrendered && (w2("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e3.onrendered(t4)), t4;
              });
            }
            o2.CanvasRenderer = d2, o2.NodeContainer = r2, o2.log = w2, o2.utils = i2;
            var a2 = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function() {
              return Promise.reject("No canvas support");
            } : o2;
            function k2(n3, r3, i3, t3, e3) {
              var o3, a3, s2 = r3.contentWindow, h2 = new p2(s2.document), c2 = new g2(i3, h2), l2 = b2(n3), u2 = "view" === i3.type ? t3 : (o3 = s2.document, Math.max(Math.max(o3.body.scrollWidth, o3.documentElement.scrollWidth), Math.max(o3.body.offsetWidth, o3.documentElement.offsetWidth), Math.max(o3.body.clientWidth, o3.documentElement.clientWidth))), f2 = "view" === i3.type ? e3 : (a3 = s2.document, Math.max(Math.max(a3.body.scrollHeight, a3.documentElement.scrollHeight), Math.max(a3.body.offsetHeight, a3.documentElement.offsetHeight), Math.max(a3.body.clientHeight, a3.documentElement.clientHeight))), d3 = new i3.renderer(u2, f2, c2, i3, document);
              return new m2(n3, d3, h2, c2, i3).ready.then(function() {
                var t4, e4;
                return w2("Finished rendering"), t4 = "view" === i3.type ? _2(d3.canvas, { width: d3.canvas.width, height: d3.canvas.height, top: 0, left: 0, x: 0, y: 0 }) : n3 === s2.document.body || n3 === s2.document.documentElement || null != i3.canvas ? d3.canvas : _2(d3.canvas, { width: null != i3.width ? i3.width : l2.width, height: null != i3.height ? i3.height : l2.height, top: l2.top, left: l2.left, x: 0, y: 0 }), e4 = r3, i3.removeContainer && (e4.parentNode.removeChild(e4), w2("Cleaned up container")), t4;
              });
            }
            function _2(t3, e3) {
              var n3 = document.createElement("canvas"), r3 = Math.min(t3.width - 1, Math.max(0, e3.left)), i3 = Math.min(t3.width, Math.max(1, e3.left + e3.width)), o3 = Math.min(t3.height - 1, Math.max(0, e3.top)), a3 = Math.min(t3.height, Math.max(1, e3.top + e3.height));
              n3.width = e3.width, n3.height = e3.height;
              var s2 = i3 - r3, h2 = a3 - o3;
              return w2("Cropping canvas at:", "left:", e3.left, "top:", e3.top, "width:", s2, "height:", h2), w2("Resulting crop with width", e3.width, "and height", e3.height, "with x", r3, "and y", o3), n3.getContext("2d").drawImage(t3, r3, o3, s2, h2, e3.x, e3.y, s2, h2), n3;
            }
            e2.exports = a2;
          }, { "./clone": 2, "./imageloader": 11, "./log": 13, "./nodecontainer": 14, "./nodeparser": 15, "./proxy": 16, "./renderers/canvas": 20, "./support": 22, "./utils": 26 }], 5: [function(t2, e2, n2) {
            var r2 = t2("./log"), i2 = t2("./utils").smallImage;
            e2.exports = function t3(e3) {
              if (this.src = e3, r2("DummyImageContainer for", e3), !this.promise || !this.image) {
                r2("Initiating DummyImageContainer"), t3.prototype.image = new Image();
                var n3 = this.image;
                t3.prototype.promise = new Promise(function(t4, e4) {
                  n3.onload = t4, n3.onerror = e4, n3.src = i2(), true === n3.complete && t4(n3);
                });
              }
            };
          }, { "./log": 13, "./utils": 26 }], 6: [function(t2, e2, n2) {
            var h2 = t2("./utils").smallImage;
            e2.exports = function(t3, e3) {
              var n3, r2, i2 = document.createElement("div"), o2 = document.createElement("img"), a2 = document.createElement("span"), s2 = "Hidden Text";
              i2.style.visibility = "hidden", i2.style.fontFamily = t3, i2.style.fontSize = e3, i2.style.margin = 0, i2.style.padding = 0, document.body.appendChild(i2), o2.src = h2(), o2.width = 1, o2.height = 1, o2.style.margin = 0, o2.style.padding = 0, o2.style.verticalAlign = "baseline", a2.style.fontFamily = t3, a2.style.fontSize = e3, a2.style.margin = 0, a2.style.padding = 0, a2.appendChild(document.createTextNode(s2)), i2.appendChild(a2), i2.appendChild(o2), n3 = o2.offsetTop - a2.offsetTop + 1, i2.removeChild(a2), i2.appendChild(document.createTextNode(s2)), i2.style.lineHeight = "normal", o2.style.verticalAlign = "super", r2 = o2.offsetTop - i2.offsetTop + 1, document.body.removeChild(i2), this.baseline = n3, this.lineWidth = 1, this.middle = r2;
            };
          }, { "./utils": 26 }], 7: [function(t2, e2, n2) {
            var r2 = t2("./font");
            function i2() {
              this.data = {};
            }
            i2.prototype.getMetrics = function(t3, e3) {
              return void 0 === this.data[t3 + "-" + e3] && (this.data[t3 + "-" + e3] = new r2(t3, e3)), this.data[t3 + "-" + e3];
            }, e2.exports = i2;
          }, { "./font": 6 }], 8: [function(o2, t2, e2) {
            var a2 = o2("./utils").getBounds, i2 = o2("./proxy").loadUrlDocument;
            function n2(e3, t3, n3) {
              this.image = null, this.src = e3;
              var r2 = this, i3 = a2(e3);
              this.promise = (t3 ? new Promise(function(t4) {
                "about:blank" === e3.contentWindow.document.URL || null == e3.contentWindow.document.documentElement ? e3.contentWindow.onload = e3.onload = function() {
                  t4(e3);
                } : t4(e3);
              }) : this.proxyLoad(n3.proxy, i3, n3)).then(function(t4) {
                return o2("./core")(t4.contentWindow.document.documentElement, { type: "view", width: t4.width, height: t4.height, proxy: n3.proxy, javascriptEnabled: n3.javascriptEnabled, removeContainer: n3.removeContainer, allowTaint: n3.allowTaint, imageTimeout: n3.imageTimeout / 2 });
              }).then(function(t4) {
                return r2.image = t4;
              });
            }
            n2.prototype.proxyLoad = function(t3, e3, n3) {
              var r2 = this.src;
              return i2(r2.src, t3, r2.ownerDocument, e3.width, e3.height, n3);
            }, t2.exports = n2;
          }, { "./core": 4, "./proxy": 16, "./utils": 26 }], 9: [function(t2, e2, n2) {
            function r2(t3) {
              this.src = t3.value, this.colorStops = [], this.type = null, this.x0 = 0.5, this.y0 = 0.5, this.x1 = 0.5, this.y1 = 0.5, this.promise = Promise.resolve(true);
            }
            r2.TYPES = { LINEAR: 1, RADIAL: 2 }, r2.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, e2.exports = r2;
          }, {}], 10: [function(t2, e2, n2) {
            e2.exports = function(n3, r2) {
              this.src = n3, this.image = new Image();
              var i2 = this;
              this.tainted = null, this.promise = new Promise(function(t3, e3) {
                i2.image.onload = t3, i2.image.onerror = e3, r2 && (i2.image.crossOrigin = "anonymous"), i2.image.src = n3, true === i2.image.complete && t3(i2.image);
              });
            };
          }, {}], 11: [function(t2, e2, n2) {
            var o2 = t2("./log"), r2 = t2("./imagecontainer"), i2 = t2("./dummyimagecontainer"), a2 = t2("./proxyimagecontainer"), s2 = t2("./framecontainer"), h2 = t2("./svgcontainer"), c2 = t2("./svgnodecontainer"), l2 = t2("./lineargradientcontainer"), u2 = t2("./webkitgradientcontainer"), f2 = t2("./utils").bind;
            function d2(t3, e3) {
              this.link = null, this.options = t3, this.support = e3, this.origin = this.getOrigin(window.location.href);
            }
            d2.prototype.findImages = function(t3) {
              var e3 = [];
              return t3.reduce(function(t4, e4) {
                switch (e4.node.nodeName) {
                  case "IMG":
                    return t4.concat([{ args: [e4.node.src], method: "url" }]);
                  case "svg":
                  case "IFRAME":
                    return t4.concat([{ args: [e4.node], method: e4.node.nodeName }]);
                }
                return t4;
              }, []).forEach(this.addImage(e3, this.loadImage), this), e3;
            }, d2.prototype.findBackgroundImage = function(t3, e3) {
              return e3.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t3, this.loadImage), this), t3;
            }, d2.prototype.addImage = function(n3, r3) {
              return function(e3) {
                e3.args.forEach(function(t3) {
                  this.imageExists(n3, t3) || (n3.splice(0, 0, r3.call(this, e3)), o2("Added image #" + n3.length, "string" == typeof t3 ? t3.substring(0, 100) : t3));
                }, this);
              };
            }, d2.prototype.hasImageBackground = function(t3) {
              return "none" !== t3.method;
            }, d2.prototype.loadImage = function(t3) {
              if ("url" === t3.method) {
                var e3 = t3.args[0];
                return !this.isSVG(e3) || this.support.svg || this.options.allowTaint ? e3.match(/data:image\/.*;base64,/i) ? new r2(e3.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), false) : this.isSameOrigin(e3) || true === this.options.allowTaint || this.isSVG(e3) ? new r2(e3, false) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new r2(e3, true) : this.options.proxy ? new a2(e3, this.options.proxy) : new i2(e3) : new h2(e3);
              }
              return "linear-gradient" === t3.method ? new l2(t3) : "gradient" === t3.method ? new u2(t3) : "svg" === t3.method ? new c2(t3.args[0], this.support.svg) : "IFRAME" === t3.method ? new s2(t3.args[0], this.isSameOrigin(t3.args[0].src), this.options) : new i2(t3);
            }, d2.prototype.isSVG = function(t3) {
              return "svg" === t3.substring(t3.length - 3).toLowerCase() || h2.prototype.isInline(t3);
            }, d2.prototype.imageExists = function(t3, e3) {
              return t3.some(function(t4) {
                return t4.src === e3;
              });
            }, d2.prototype.isSameOrigin = function(t3) {
              return this.getOrigin(t3) === this.origin;
            }, d2.prototype.getOrigin = function(t3) {
              var e3 = this.link || (this.link = document.createElement("a"));
              return e3.href = t3, e3.href = e3.href, e3.protocol + e3.hostname + e3.port;
            }, d2.prototype.getPromise = function(e3) {
              return this.timeout(e3, this.options.imageTimeout).catch(function() {
                return new i2(e3.src).promise.then(function(t3) {
                  e3.image = t3;
                });
              });
            }, d2.prototype.get = function(e3) {
              var n3 = null;
              return this.images.some(function(t3) {
                return (n3 = t3).src === e3;
              }) ? n3 : null;
            }, d2.prototype.fetch = function(t3) {
              return this.images = t3.reduce(f2(this.findBackgroundImage, this), this.findImages(t3)), this.images.forEach(function(e3, n3) {
                e3.promise.then(function() {
                  o2("Succesfully loaded image #" + (n3 + 1), e3);
                }, function(t4) {
                  o2("Failed loading image #" + (n3 + 1), e3, t4);
                });
              }), this.ready = Promise.all(this.images.map(this.getPromise, this)), o2("Finished searching images"), this;
            }, d2.prototype.timeout = function(n3, r3) {
              var i3, t3 = Promise.race([n3.promise, new Promise(function(t4, e3) {
                i3 = setTimeout(function() {
                  o2("Timed out loading image", n3), e3(n3);
                }, r3);
              })]).then(function(t4) {
                return clearTimeout(i3), t4;
              });
              return t3.catch(function() {
                clearTimeout(i3);
              }), t3;
            }, e2.exports = d2;
          }, { "./dummyimagecontainer": 5, "./framecontainer": 8, "./imagecontainer": 10, "./lineargradientcontainer": 12, "./log": 13, "./proxyimagecontainer": 17, "./svgcontainer": 23, "./svgnodecontainer": 24, "./utils": 26, "./webkitgradientcontainer": 27 }], 12: [function(t2, e2, n2) {
            var i2 = t2("./gradientcontainer"), o2 = t2("./color");
            function r2(t3) {
              i2.apply(this, arguments), this.type = i2.TYPES.LINEAR;
              var e3 = r2.REGEXP_DIRECTION.test(t3.args[0]) || !i2.REGEXP_COLORSTOP.test(t3.args[0]);
              e3 ? t3.args[0].split(/\s+/).reverse().forEach(function(t4, e4) {
                switch (t4) {
                  case "left":
                    this.x0 = 0, this.x1 = 1;
                    break;
                  case "top":
                    this.y0 = 0, this.y1 = 1;
                    break;
                  case "right":
                    this.x0 = 1, this.x1 = 0;
                    break;
                  case "bottom":
                    this.y0 = 1, this.y1 = 0;
                    break;
                  case "to":
                    var n3 = this.y0, r3 = this.x0;
                    this.y0 = this.y1, this.x0 = this.x1, this.x1 = r3, this.y1 = n3;
                    break;
                  case "center":
                    break;
                  default:
                    var i3 = 0.01 * parseFloat(t4, 10);
                    if (isNaN(i3))
                      break;
                    0 === e4 ? (this.y0 = i3, this.y1 = 1 - this.y0) : (this.x0 = i3, this.x1 = 1 - this.x0);
                }
              }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = t3.args.slice(e3 ? 1 : 0).map(function(t4) {
                var e4 = t4.match(i2.REGEXP_COLORSTOP), n3 = +e4[2], r3 = 0 === n3 ? "%" : e4[3];
                return { color: new o2(e4[1]), stop: "%" === r3 ? n3 / 100 : null };
              }), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function(n3, r3) {
                null === n3.stop && this.colorStops.slice(r3).some(function(t4, e4) {
                  return null !== t4.stop && (n3.stop = (t4.stop - this.colorStops[r3 - 1].stop) / (e4 + 1) + this.colorStops[r3 - 1].stop, true);
                }, this);
              }, this);
            }
            r2.prototype = Object.create(i2.prototype), r2.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, e2.exports = r2;
          }, { "./color": 3, "./gradientcontainer": 9 }], 13: [function(t2, e2, n2) {
            var r2 = function() {
              r2.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - r2.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)));
            };
            r2.options = { logging: false }, e2.exports = r2;
          }, {}], 14: [function(t2, e2, n2) {
            var o2 = t2("./color"), r2 = t2("./utils"), i2 = r2.getBounds, a2 = r2.parseBackgrounds, s2 = r2.offsetBounds;
            function h2(t3, e3) {
              this.node = t3, this.parent = e3, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = false, this.opacity = null;
            }
            function c2(t3) {
              return -1 !== t3.toString().indexOf("%");
            }
            function l2(t3) {
              return t3.replace("px", "");
            }
            function u2(t3) {
              return parseFloat(t3);
            }
            h2.prototype.cloneTo = function(t3) {
              t3.visible = this.visible, t3.borders = this.borders, t3.bounds = this.bounds, t3.clip = this.clip, t3.backgroundClip = this.backgroundClip, t3.computedStyles = this.computedStyles, t3.styles = this.styles, t3.backgroundImages = this.backgroundImages, t3.opacity = this.opacity;
            }, h2.prototype.getOpacity = function() {
              return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity;
            }, h2.prototype.assignStack = function(t3) {
              (this.stack = t3).children.push(this);
            }, h2.prototype.isElementVisible = function() {
              return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"));
            }, h2.prototype.css = function(t3) {
              return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[t3] || (this.styles[t3] = this.computedStyles[t3]);
            }, h2.prototype.prefixedCss = function(e3) {
              var n3 = this.css(e3);
              return void 0 === n3 && ["webkit", "moz", "ms", "o"].some(function(t3) {
                return void 0 !== (n3 = this.css(t3 + e3.substr(0, 1).toUpperCase() + e3.substr(1)));
              }, this), void 0 === n3 ? null : n3;
            }, h2.prototype.computedStyle = function(t3) {
              return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t3);
            }, h2.prototype.cssInt = function(t3) {
              var e3 = parseInt(this.css(t3), 10);
              return isNaN(e3) ? 0 : e3;
            }, h2.prototype.color = function(t3) {
              return this.colors[t3] || (this.colors[t3] = new o2(this.css(t3)));
            }, h2.prototype.cssFloat = function(t3) {
              var e3 = parseFloat(this.css(t3));
              return isNaN(e3) ? 0 : e3;
            }, h2.prototype.fontWeight = function() {
              var t3 = this.css("fontWeight");
              switch (parseInt(t3, 10)) {
                case 401:
                  t3 = "bold";
                  break;
                case 400:
                  t3 = "normal";
              }
              return t3;
            }, h2.prototype.parseClip = function() {
              var t3 = this.css("clip").match(this.CLIP);
              return t3 ? { top: parseInt(t3[1], 10), right: parseInt(t3[2], 10), bottom: parseInt(t3[3], 10), left: parseInt(t3[4], 10) } : null;
            }, h2.prototype.parseBackgroundImages = function() {
              return this.backgroundImages || (this.backgroundImages = a2(this.css("backgroundImage")));
            }, h2.prototype.cssList = function(t3, e3) {
              var n3 = (this.css(t3) || "").split(",");
              return 1 === (n3 = (n3 = n3[e3 || 0] || n3[0] || "auto").trim().split(" ")).length && (n3 = [n3[0], c2(n3[0]) ? "auto" : n3[0]]), n3;
            }, h2.prototype.parseBackgroundSize = function(t3, e3, n3) {
              var r3, i3, o3 = this.cssList("backgroundSize", n3);
              if (c2(o3[0]))
                r3 = t3.width * parseFloat(o3[0]) / 100;
              else {
                if (/contain|cover/.test(o3[0])) {
                  var a3 = t3.width / t3.height, s3 = e3.width / e3.height;
                  return a3 < s3 ^ "contain" === o3[0] ? { width: t3.height * s3, height: t3.height } : { width: t3.width, height: t3.width / s3 };
                }
                r3 = parseInt(o3[0], 10);
              }
              return i3 = "auto" === o3[0] && "auto" === o3[1] ? e3.height : "auto" === o3[1] ? r3 / e3.width * e3.height : c2(o3[1]) ? t3.height * parseFloat(o3[1]) / 100 : parseInt(o3[1], 10), "auto" === o3[0] && (r3 = i3 / e3.height * e3.width), { width: r3, height: i3 };
            }, h2.prototype.parseBackgroundPosition = function(t3, e3, n3, r3) {
              var i3, o3, a3 = this.cssList("backgroundPosition", n3);
              return i3 = c2(a3[0]) ? (t3.width - (r3 || e3).width) * (parseFloat(a3[0]) / 100) : parseInt(a3[0], 10), o3 = "auto" === a3[1] ? i3 / e3.width * e3.height : c2(a3[1]) ? (t3.height - (r3 || e3).height) * parseFloat(a3[1]) / 100 : parseInt(a3[1], 10), "auto" === a3[0] && (i3 = o3 / e3.height * e3.width), { left: i3, top: o3 };
            }, h2.prototype.parseBackgroundRepeat = function(t3) {
              return this.cssList("backgroundRepeat", t3)[0];
            }, h2.prototype.parseTextShadows = function() {
              var t3 = this.css("textShadow"), e3 = [];
              if (t3 && "none" !== t3)
                for (var n3 = t3.match(this.TEXT_SHADOW_PROPERTY), r3 = 0; n3 && r3 < n3.length; r3++) {
                  var i3 = n3[r3].match(this.TEXT_SHADOW_VALUES);
                  e3.push({ color: new o2(i3[0]), offsetX: i3[1] ? parseFloat(i3[1].replace("px", "")) : 0, offsetY: i3[2] ? parseFloat(i3[2].replace("px", "")) : 0, blur: i3[3] ? i3[3].replace("px", "") : 0 });
                }
              return e3;
            }, h2.prototype.parseTransform = function() {
              if (!this.transformData)
                if (this.hasTransform()) {
                  var t3 = this.parseBounds(), e3 = this.prefixedCss("transformOrigin").split(" ").map(l2).map(u2);
                  e3[0] += t3.left, e3[1] += t3.top, this.transformData = { origin: e3, matrix: this.parseTransformMatrix() };
                } else
                  this.transformData = { origin: [0, 0], matrix: [1, 0, 0, 1, 0, 0] };
              return this.transformData;
            }, h2.prototype.parseTransformMatrix = function() {
              if (!this.transformMatrix) {
                var t3 = this.prefixedCss("transform"), e3 = t3 ? function(t4) {
                  {
                    if (t4 && "matrix" === t4[1])
                      return t4[2].split(",").map(function(t5) {
                        return parseFloat(t5.trim());
                      });
                    if (t4 && "matrix3d" === t4[1]) {
                      var e4 = t4[2].split(",").map(function(t5) {
                        return parseFloat(t5.trim());
                      });
                      return [e4[0], e4[1], e4[4], e4[5], e4[12], e4[13]];
                    }
                  }
                }(t3.match(this.MATRIX_PROPERTY)) : null;
                this.transformMatrix = e3 || [1, 0, 0, 1, 0, 0];
              }
              return this.transformMatrix;
            }, h2.prototype.parseBounds = function() {
              return this.bounds || (this.bounds = this.hasTransform() ? s2(this.node) : i2(this.node));
            }, h2.prototype.hasTransform = function() {
              return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform();
            }, h2.prototype.getValue = function() {
              var t3, e3, n3 = this.node.value || "";
              return "SELECT" === this.node.tagName ? (t3 = this.node, n3 = (e3 = t3.options[t3.selectedIndex || 0]) && e3.text || "") : "password" === this.node.type && (n3 = Array(n3.length + 1).join("\u2022")), 0 === n3.length ? this.node.placeholder || "" : n3;
            }, h2.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, h2.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, h2.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, h2.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, e2.exports = h2;
          }, { "./color": 3, "./utils": 26 }], 15: [function(t2, e2, n2) {
            var s2 = t2("./log"), h2 = t2("punycode"), c2 = t2("./nodecontainer"), f2 = t2("./textcontainer"), d2 = t2("./pseudoelementcontainer"), l2 = t2("./fontmetrics"), u2 = t2("./color"), p2 = t2("./stackingcontext"), r2 = t2("./utils"), g2 = r2.bind, a2 = r2.getBounds, m2 = r2.parseBackgrounds, w2 = r2.offsetBounds;
            function i2(t3, e3, n3, r3, i3) {
              s2("Starting NodeParser"), this.renderer = e3, this.options = i3, this.range = null, this.support = n3, this.renderQueue = [], this.stack = new p2(true, 1, t3.ownerDocument, null);
              var o3 = new c2(t3, null);
              if (i3.background && e3.rectangle(0, 0, e3.width, e3.height, new u2(i3.background)), t3 === t3.ownerDocument.documentElement) {
                var a3 = new c2(o3.color("backgroundColor").isTransparent() ? t3.ownerDocument.body : t3.ownerDocument.documentElement, null);
                e3.rectangle(0, 0, e3.width, e3.height, a3.color("backgroundColor"));
              }
              o3.visibile = o3.isElementVisible(), this.createPseudoHideStyles(t3.ownerDocument), this.disableAnimations(t3.ownerDocument), this.nodes = L2([o3].concat(this.getChildren(o3)).filter(function(t4) {
                return t4.visible = t4.isElementVisible();
              }).map(this.getPseudoElements, this)), this.fontMetrics = new l2(), s2("Fetched nodes, total:", this.nodes.length), s2("Calculate overflow clips"), this.calculateOverflowClips(), s2("Start fetching images"), this.images = r3.fetch(this.nodes.filter(j2)), this.ready = this.images.ready.then(g2(function() {
                return s2("Images loaded, starting parsing"), s2("Creating stacking contexts"), this.createStackingContexts(), s2("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), s2("Render queue created with " + this.renderQueue.length + " items"), new Promise(g2(function(t4) {
                  i3.async ? "function" == typeof i3.async ? i3.async.call(this, this.renderQueue, t4) : 0 < this.renderQueue.length ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t4)) : t4() : (this.renderQueue.forEach(this.paint, this), t4());
                }, this));
              }, this));
            }
            function o2(t3) {
              return t3.parent && t3.parent.clip.length;
            }
            function y2() {
            }
            i2.prototype.calculateOverflowClips = function() {
              this.nodes.forEach(function(t3) {
                if (j2(t3)) {
                  D2(t3) && t3.appendToDOM(), t3.borders = this.parseBorders(t3);
                  var e3 = "hidden" === t3.css("overflow") ? [t3.borders.clip] : [], n3 = t3.parseClip();
                  n3 && -1 !== ["absolute", "fixed"].indexOf(t3.css("position")) && e3.push([["rect", t3.bounds.left + n3.left, t3.bounds.top + n3.top, n3.right - n3.left, n3.bottom - n3.top]]), t3.clip = o2(t3) ? t3.parent.clip.concat(e3) : e3, t3.backgroundClip = "hidden" !== t3.css("overflow") ? t3.clip.concat([t3.borders.clip]) : t3.clip, D2(t3) && t3.cleanDOM();
                } else
                  M2(t3) && (t3.clip = o2(t3) ? t3.parent.clip : []);
                D2(t3) || (t3.bounds = null);
              }, this);
            }, i2.prototype.asyncRenderer = function(t3, e3, n3) {
              n3 = n3 || Date.now(), this.paint(t3[this.renderIndex++]), t3.length === this.renderIndex ? e3() : n3 + 20 > Date.now() ? this.asyncRenderer(t3, e3, n3) : setTimeout(g2(function() {
                this.asyncRenderer(t3, e3);
              }, this), 0);
            }, i2.prototype.createPseudoHideStyles = function(t3) {
              this.createStyles(t3, "." + d2.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + d2.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }');
            }, i2.prototype.disableAnimations = function(t3) {
              this.createStyles(t3, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}");
            }, i2.prototype.createStyles = function(t3, e3) {
              var n3 = t3.createElement("style");
              n3.innerHTML = e3, t3.body.appendChild(n3);
            }, i2.prototype.getPseudoElements = function(t3) {
              var e3 = [[t3]];
              if (t3.node.nodeType === Node.ELEMENT_NODE) {
                var n3 = this.getPseudoElement(t3, ":before"), r3 = this.getPseudoElement(t3, ":after");
                n3 && e3.push(n3), r3 && e3.push(r3);
              }
              return L2(e3);
            }, i2.prototype.getPseudoElement = function(t3, e3) {
              var n3 = t3.computedStyle(e3);
              if (!n3 || !n3.content || "none" === n3.content || "-moz-alt-content" === n3.content || "none" === n3.display)
                return null;
              for (var r3, i3, o3 = (r3 = n3.content, (i3 = r3.substr(0, 1)) === r3.substr(r3.length - 1) && i3.match(/'|"/) ? r3.substr(1, r3.length - 2) : r3), a3 = "url" === o3.substr(0, 3), s3 = document.createElement(a3 ? "img" : "html2canvaspseudoelement"), h3 = new d2(s3, t3, e3), c3 = n3.length - 1; 0 <= c3; c3--) {
                var l3 = n3.item(c3).replace(/(\-[a-z])/g, function(t4) {
                  return t4.toUpperCase().replace("-", "");
                });
                s3.style[l3] = n3[l3];
              }
              if (s3.className = d2.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + d2.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, a3)
                return s3.src = m2(o3)[0].args[0], [h3];
              var u3 = document.createTextNode(o3);
              return s3.appendChild(u3), [h3, new f2(u3, h3)];
            }, i2.prototype.getChildren = function(n3) {
              return L2([].filter.call(n3.node.childNodes, q2).map(function(t3) {
                var e3 = [t3.nodeType === Node.TEXT_NODE ? new f2(t3, n3) : new c2(t3, n3)].filter(z2);
                return t3.nodeType === Node.ELEMENT_NODE && e3.length && "TEXTAREA" !== t3.tagName ? e3[0].isElementVisible() ? e3.concat(this.getChildren(e3[0])) : [] : e3;
              }, this));
            }, i2.prototype.newStackingContext = function(t3, e3) {
              var n3 = new p2(e3, t3.getOpacity(), t3.node, t3.parent);
              t3.cloneTo(n3), (e3 ? n3.getParentStack(this) : n3.parent.stack).contexts.push(n3), t3.stack = n3;
            }, i2.prototype.createStackingContexts = function() {
              this.nodes.forEach(function(t3) {
                var e3, n3;
                j2(t3) && (this.isRootElement(t3) || t3.getOpacity() < 1 || (n3 = (e3 = t3).css("position"), "auto" !== (-1 !== ["absolute", "relative", "fixed"].indexOf(n3) ? e3.css("zIndex") : "auto")) || this.isBodyWithTransparentRoot(t3) || t3.hasTransform()) ? this.newStackingContext(t3, true) : j2(t3) && (O2(t3) && T2(t3) || -1 !== ["inline-block", "inline-table"].indexOf(t3.css("display")) || B2(t3)) ? this.newStackingContext(t3, false) : t3.assignStack(t3.parent.stack);
              }, this);
            }, i2.prototype.isBodyWithTransparentRoot = function(t3) {
              return "BODY" === t3.node.nodeName && t3.parent.color("backgroundColor").isTransparent();
            }, i2.prototype.isRootElement = function(t3) {
              return null === t3.parent;
            }, i2.prototype.sortStackingContexts = function(t3) {
              var n3;
              t3.contexts.sort((n3 = t3.contexts.slice(0), function(t4, e3) {
                return t4.cssInt("zIndex") + n3.indexOf(t4) / n3.length - (e3.cssInt("zIndex") + n3.indexOf(e3) / n3.length);
              })), t3.contexts.forEach(this.sortStackingContexts, this);
            }, i2.prototype.parseTextBounds = function(a3) {
              return function(t3, e3, n3) {
                if ("none" !== a3.parent.css("textDecoration").substr(0, 4) || 0 !== t3.trim().length) {
                  if (this.support.rangeBounds && !a3.parent.hasTransform()) {
                    var r3 = n3.slice(0, e3).join("").length;
                    return this.getRangeBounds(a3.node, r3, t3.length);
                  }
                  if (a3.node && "string" == typeof a3.node.data) {
                    var i3 = a3.node.splitText(t3.length), o3 = this.getWrapperBounds(a3.node, a3.parent.hasTransform());
                    return a3.node = i3, o3;
                  }
                } else
                  this.support.rangeBounds && !a3.parent.hasTransform() || (a3.node = a3.node.splitText(t3.length));
                return {};
              };
            }, i2.prototype.getWrapperBounds = function(t3, e3) {
              var n3 = t3.ownerDocument.createElement("html2canvaswrapper"), r3 = t3.parentNode, i3 = t3.cloneNode(true);
              n3.appendChild(t3.cloneNode(true)), r3.replaceChild(n3, t3);
              var o3 = e3 ? w2(n3) : a2(n3);
              return r3.replaceChild(i3, n3), o3;
            }, i2.prototype.getRangeBounds = function(t3, e3, n3) {
              var r3 = this.range || (this.range = t3.ownerDocument.createRange());
              return r3.setStart(t3, e3), r3.setEnd(t3, e3 + n3), r3.getBoundingClientRect();
            }, i2.prototype.parse = function(t3) {
              var e3 = t3.contexts.filter(I2), n3 = t3.children.filter(j2), r3 = n3.filter(R2(B2)), i3 = r3.filter(R2(O2)).filter(R2(F2)), o3 = n3.filter(R2(O2)).filter(B2), a3 = r3.filter(R2(O2)).filter(F2), s3 = t3.contexts.concat(r3.filter(O2)).filter(T2), h3 = t3.children.filter(M2).filter(E2), c3 = t3.contexts.filter(C2);
              e3.concat(i3).concat(o3).concat(a3).concat(s3).concat(h3).concat(c3).forEach(function(t4) {
                this.renderQueue.push(t4), P2(t4) && (this.parse(t4), this.renderQueue.push(new y2()));
              }, this);
            }, i2.prototype.paint = function(t3) {
              try {
                t3 instanceof y2 ? this.renderer.ctx.restore() : M2(t3) ? (D2(t3.parent) && t3.parent.appendToDOM(), this.paintText(t3), D2(t3.parent) && t3.parent.cleanDOM()) : this.paintNode(t3);
              } catch (t4) {
                if (s2(t4), this.options.strict)
                  throw t4;
              }
            }, i2.prototype.paintNode = function(t3) {
              P2(t3) && (this.renderer.setOpacity(t3.opacity), this.renderer.ctx.save(), t3.hasTransform() && this.renderer.setTransform(t3.parseTransform())), "INPUT" === t3.node.nodeName && "checkbox" === t3.node.type ? this.paintCheckbox(t3) : "INPUT" === t3.node.nodeName && "radio" === t3.node.type ? this.paintRadio(t3) : this.paintElement(t3);
            }, i2.prototype.paintElement = function(n3) {
              var r3 = n3.parseBounds();
              this.renderer.clip(n3.backgroundClip, function() {
                this.renderer.renderBackground(n3, r3, n3.borders.borders.map(N2));
              }, this), this.renderer.clip(n3.clip, function() {
                this.renderer.renderBorders(n3.borders.borders);
              }, this), this.renderer.clip(n3.backgroundClip, function() {
                switch (n3.node.nodeName) {
                  case "svg":
                  case "IFRAME":
                    var t3 = this.images.get(n3.node);
                    t3 ? this.renderer.renderImage(n3, r3, n3.borders, t3) : s2("Error loading <" + n3.node.nodeName + ">", n3.node);
                    break;
                  case "IMG":
                    var e3 = this.images.get(n3.node.src);
                    e3 ? this.renderer.renderImage(n3, r3, n3.borders, e3) : s2("Error loading <img>", n3.node.src);
                    break;
                  case "CANVAS":
                    this.renderer.renderImage(n3, r3, n3.borders, { image: n3.node });
                    break;
                  case "SELECT":
                  case "INPUT":
                  case "TEXTAREA":
                    this.paintFormValue(n3);
                }
              }, this);
            }, i2.prototype.paintCheckbox = function(t3) {
              var e3 = t3.parseBounds(), n3 = Math.min(e3.width, e3.height), r3 = { width: n3 - 1, height: n3 - 1, top: e3.top, left: e3.left }, i3 = [3, 3], o3 = [i3, i3, i3, i3], a3 = [1, 1, 1, 1].map(function(t4) {
                return { color: new u2("#A5A5A5"), width: t4 };
              }), s3 = S2(r3, o3, a3);
              this.renderer.clip(t3.backgroundClip, function() {
                this.renderer.rectangle(r3.left + 1, r3.top + 1, r3.width - 2, r3.height - 2, new u2("#DEDEDE")), this.renderer.renderBorders(b2(a3, r3, s3, o3)), t3.node.checked && (this.renderer.font(new u2("#424242"), "normal", "normal", "bold", n3 - 3 + "px", "arial"), this.renderer.text("\u2714", r3.left + n3 / 6, r3.top + n3 - 1));
              }, this);
            }, i2.prototype.paintRadio = function(t3) {
              var e3 = t3.parseBounds(), n3 = Math.min(e3.width, e3.height) - 2;
              this.renderer.clip(t3.backgroundClip, function() {
                this.renderer.circleStroke(e3.left + 1, e3.top + 1, n3, new u2("#DEDEDE"), 1, new u2("#A5A5A5")), t3.node.checked && this.renderer.circle(Math.ceil(e3.left + n3 / 4) + 1, Math.ceil(e3.top + n3 / 4) + 1, Math.floor(n3 / 2), new u2("#424242"));
              }, this);
            }, i2.prototype.paintFormValue = function(e3) {
              var t3 = e3.getValue();
              if (0 < t3.length) {
                var n3 = e3.node.ownerDocument, r3 = n3.createElement("html2canvaswrapper");
                ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"].forEach(function(t4) {
                  try {
                    r3.style[t4] = e3.css(t4);
                  } catch (t5) {
                    s2("html2canvas: Parse: Exception caught in renderFormValue: " + t5.message);
                  }
                });
                var i3 = e3.parseBounds();
                r3.style.position = "fixed", r3.style.left = i3.left + "px", r3.style.top = i3.top + "px", r3.textContent = t3, n3.body.appendChild(r3), this.paintText(new f2(r3.firstChild, e3)), n3.body.removeChild(r3);
              }
            }, i2.prototype.paintText = function(n3) {
              n3.applyTextTransform();
              var t3, e3 = h2.ucs2.decode(n3.node.data), r3 = this.options.letterRendering && !/^(normal|none|0px)$/.test(n3.parent.css("letterSpacing")) || (t3 = n3.node.data, /[^\u0000-\u00ff]/.test(t3)) ? e3.map(function(t4) {
                return h2.ucs2.encode([t4]);
              }) : function(t4) {
                var e4, n4 = [], r4 = 0, i4 = false;
                for (; t4.length; )
                  o4 = t4[r4], -1 !== [32, 13, 10, 9, 45].indexOf(o4) === i4 ? ((e4 = t4.splice(0, r4)).length && n4.push(h2.ucs2.encode(e4)), i4 = !i4, r4 = 0) : r4++, r4 >= t4.length && (e4 = t4.splice(0, r4)).length && n4.push(h2.ucs2.encode(e4));
                var o4;
                return n4;
              }(e3), i3 = n3.parent.fontWeight(), o3 = n3.parent.css("fontSize"), a3 = n3.parent.css("fontFamily"), s3 = n3.parent.parseTextShadows();
              this.renderer.font(n3.parent.color("color"), n3.parent.css("fontStyle"), n3.parent.css("fontVariant"), i3, o3, a3), s3.length ? this.renderer.fontShadow(s3[0].color, s3[0].offsetX, s3[0].offsetY, s3[0].blur) : this.renderer.clearShadow(), this.renderer.clip(n3.parent.clip, function() {
                r3.map(this.parseTextBounds(n3), this).forEach(function(t4, e4) {
                  t4 && false === /^\s*$/.test(r3[e4]) && (this.renderer.text(r3[e4], t4.left, t4.bottom), this.renderTextDecoration(n3.parent, t4, this.fontMetrics.getMetrics(a3, o3)));
                }, this);
              }, this);
            }, i2.prototype.renderTextDecoration = function(t3, e3, n3) {
              switch (t3.css("textDecoration").split(" ")[0]) {
                case "underline":
                  this.renderer.rectangle(e3.left, Math.round(e3.top + n3.baseline + n3.lineWidth), e3.width, 1, t3.color("color"));
                  break;
                case "overline":
                  this.renderer.rectangle(e3.left, Math.round(e3.top), e3.width, 1, t3.color("color"));
                  break;
                case "line-through":
                  this.renderer.rectangle(e3.left, Math.ceil(e3.top + n3.middle + n3.lineWidth), e3.width, 1, t3.color("color"));
              }
            };
            var v2 = { inset: [["darken", 0.6], ["darken", 0.1], ["darken", 0.1], ["darken", 0.6]] };
            function b2(a3, s3, h3, c3) {
              return a3.map(function(t3, e3) {
                if (0 < t3.width) {
                  var n3 = s3.left, r3 = s3.top, i3 = s3.width, o3 = s3.height - a3[2].width;
                  switch (e3) {
                    case 0:
                      o3 = a3[0].width, t3.args = _2({ c1: [n3, r3], c2: [n3 + i3, r3], c3: [n3 + i3 - a3[1].width, r3 + o3], c4: [n3 + a3[3].width, r3 + o3] }, c3[0], c3[1], h3.topLeftOuter, h3.topLeftInner, h3.topRightOuter, h3.topRightInner);
                      break;
                    case 1:
                      n3 = s3.left + s3.width - a3[1].width, i3 = a3[1].width, t3.args = _2({ c1: [n3 + i3, r3], c2: [n3 + i3, r3 + o3 + a3[2].width], c3: [n3, r3 + o3], c4: [n3, r3 + a3[0].width] }, c3[1], c3[2], h3.topRightOuter, h3.topRightInner, h3.bottomRightOuter, h3.bottomRightInner);
                      break;
                    case 2:
                      r3 = r3 + s3.height - a3[2].width, o3 = a3[2].width, t3.args = _2({ c1: [n3 + i3, r3 + o3], c2: [n3, r3 + o3], c3: [n3 + a3[3].width, r3], c4: [n3 + i3 - a3[3].width, r3] }, c3[2], c3[3], h3.bottomRightOuter, h3.bottomRightInner, h3.bottomLeftOuter, h3.bottomLeftInner);
                      break;
                    case 3:
                      i3 = a3[3].width, t3.args = _2({ c1: [n3, r3 + o3 + a3[2].width], c2: [n3, r3], c3: [n3 + i3, r3 + a3[0].width], c4: [n3 + i3, r3 + o3] }, c3[3], c3[0], h3.bottomLeftOuter, h3.bottomLeftInner, h3.topLeftOuter, h3.topLeftInner);
                  }
                }
                return t3;
              });
            }
            function x2(t3, e3, n3, r3) {
              var i3 = (Math.sqrt(2) - 1) / 3 * 4, o3 = n3 * i3, a3 = r3 * i3, s3 = t3 + n3, h3 = e3 + r3;
              return { topLeft: k2({ x: t3, y: h3 }, { x: t3, y: h3 - a3 }, { x: s3 - o3, y: e3 }, { x: s3, y: e3 }), topRight: k2({ x: t3, y: e3 }, { x: t3 + o3, y: e3 }, { x: s3, y: h3 - a3 }, { x: s3, y: h3 }), bottomRight: k2({ x: s3, y: e3 }, { x: s3, y: e3 + a3 }, { x: t3 + o3, y: h3 }, { x: t3, y: h3 }), bottomLeft: k2({ x: s3, y: h3 }, { x: s3 - o3, y: h3 }, { x: t3, y: e3 + a3 }, { x: t3, y: e3 }) };
            }
            function S2(t3, e3, n3) {
              var r3 = t3.left, i3 = t3.top, o3 = t3.width, a3 = t3.height, s3 = e3[0][0] < o3 / 2 ? e3[0][0] : o3 / 2, h3 = e3[0][1] < a3 / 2 ? e3[0][1] : a3 / 2, c3 = e3[1][0] < o3 / 2 ? e3[1][0] : o3 / 2, l3 = e3[1][1] < a3 / 2 ? e3[1][1] : a3 / 2, u3 = e3[2][0] < o3 / 2 ? e3[2][0] : o3 / 2, f3 = e3[2][1] < a3 / 2 ? e3[2][1] : a3 / 2, d3 = e3[3][0] < o3 / 2 ? e3[3][0] : o3 / 2, p3 = e3[3][1] < a3 / 2 ? e3[3][1] : a3 / 2, g3 = o3 - c3, m3 = a3 - f3, w3 = o3 - u3, y3 = a3 - p3;
              return { topLeftOuter: x2(r3, i3, s3, h3).topLeft.subdivide(0.5), topLeftInner: x2(r3 + n3[3].width, i3 + n3[0].width, Math.max(0, s3 - n3[3].width), Math.max(0, h3 - n3[0].width)).topLeft.subdivide(0.5), topRightOuter: x2(r3 + g3, i3, c3, l3).topRight.subdivide(0.5), topRightInner: x2(r3 + Math.min(g3, o3 + n3[3].width), i3 + n3[0].width, g3 > o3 + n3[3].width ? 0 : c3 - n3[3].width, l3 - n3[0].width).topRight.subdivide(0.5), bottomRightOuter: x2(r3 + w3, i3 + m3, u3, f3).bottomRight.subdivide(0.5), bottomRightInner: x2(r3 + Math.min(w3, o3 - n3[3].width), i3 + Math.min(m3, a3 + n3[0].width), Math.max(0, u3 - n3[1].width), f3 - n3[2].width).bottomRight.subdivide(0.5), bottomLeftOuter: x2(r3, i3 + y3, d3, p3).bottomLeft.subdivide(0.5), bottomLeftInner: x2(r3 + n3[3].width, i3 + y3, Math.max(0, d3 - n3[3].width), p3 - n3[2].width).bottomLeft.subdivide(0.5) };
            }
            function k2(s3, h3, c3, l3) {
              var u3 = function(t3, e3, n3) {
                return { x: t3.x + (e3.x - t3.x) * n3, y: t3.y + (e3.y - t3.y) * n3 };
              };
              return { start: s3, startControl: h3, endControl: c3, end: l3, subdivide: function(t3) {
                var e3 = u3(s3, h3, t3), n3 = u3(h3, c3, t3), r3 = u3(c3, l3, t3), i3 = u3(e3, n3, t3), o3 = u3(n3, r3, t3), a3 = u3(i3, o3, t3);
                return [k2(s3, e3, i3, a3), k2(a3, o3, r3, l3)];
              }, curveTo: function(t3) {
                t3.push(["bezierCurve", h3.x, h3.y, c3.x, c3.y, l3.x, l3.y]);
              }, curveToReversed: function(t3) {
                t3.push(["bezierCurve", c3.x, c3.y, h3.x, h3.y, s3.x, s3.y]);
              } };
            }
            function _2(t3, e3, n3, r3, i3, o3, a3) {
              var s3 = [];
              return 0 < e3[0] || 0 < e3[1] ? (s3.push(["line", r3[1].start.x, r3[1].start.y]), r3[1].curveTo(s3)) : s3.push(["line", t3.c1[0], t3.c1[1]]), 0 < n3[0] || 0 < n3[1] ? (s3.push(["line", o3[0].start.x, o3[0].start.y]), o3[0].curveTo(s3), s3.push(["line", a3[0].end.x, a3[0].end.y]), a3[0].curveToReversed(s3)) : (s3.push(["line", t3.c2[0], t3.c2[1]]), s3.push(["line", t3.c3[0], t3.c3[1]])), 0 < e3[0] || 0 < e3[1] ? (s3.push(["line", i3[1].end.x, i3[1].end.y]), i3[1].curveToReversed(s3)) : s3.push(["line", t3.c4[0], t3.c4[1]]), s3;
            }
            function A2(t3, e3, n3, r3, i3, o3, a3) {
              0 < e3[0] || 0 < e3[1] ? (t3.push(["line", r3[0].start.x, r3[0].start.y]), r3[0].curveTo(t3), r3[1].curveTo(t3)) : t3.push(["line", o3, a3]), (0 < n3[0] || 0 < n3[1]) && t3.push(["line", i3[0].start.x, i3[0].start.y]);
            }
            function I2(t3) {
              return t3.cssInt("zIndex") < 0;
            }
            function C2(t3) {
              return 0 < t3.cssInt("zIndex");
            }
            function T2(t3) {
              return 0 === t3.cssInt("zIndex");
            }
            function F2(t3) {
              return -1 !== ["inline", "inline-block", "inline-table"].indexOf(t3.css("display"));
            }
            function P2(t3) {
              return t3 instanceof p2;
            }
            function E2(t3) {
              return 0 < t3.node.data.trim().length;
            }
            function q2(t3) {
              return t3.nodeType === Node.TEXT_NODE || t3.nodeType === Node.ELEMENT_NODE;
            }
            function O2(t3) {
              return "static" !== t3.css("position");
            }
            function B2(t3) {
              return "none" !== t3.css("float");
            }
            function R2(t3) {
              var e3 = this;
              return function() {
                return !t3.apply(e3, arguments);
              };
            }
            function j2(t3) {
              return t3.node.nodeType === Node.ELEMENT_NODE;
            }
            function D2(t3) {
              return true === t3.isPseudoElement;
            }
            function M2(t3) {
              return t3.node.nodeType === Node.TEXT_NODE;
            }
            function U2(t3) {
              return parseInt(t3, 10);
            }
            function N2(t3) {
              return t3.width;
            }
            function z2(t3) {
              return t3.node.nodeType !== Node.ELEMENT_NODE || -1 === ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t3.node.nodeName);
            }
            function L2(t3) {
              return [].concat.apply([], t3);
            }
            i2.prototype.parseBorders = function(o3) {
              var r3, t3 = o3.parseBounds(), e3 = (r3 = o3, ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(t4) {
                var e4 = r3.css("border" + t4 + "Radius"), n4 = e4.split(" ");
                return n4.length <= 1 && (n4[1] = n4[0]), n4.map(U2);
              })), n3 = ["Top", "Right", "Bottom", "Left"].map(function(t4, e4) {
                var n4 = o3.css("border" + t4 + "Style"), r4 = o3.color("border" + t4 + "Color");
                "inset" === n4 && r4.isBlack() && (r4 = new u2([255, 255, 255, r4.a]));
                var i4 = v2[n4] ? v2[n4][e4] : null;
                return { width: o3.cssInt("border" + t4 + "Width"), color: i4 ? r4[i4[0]](i4[1]) : r4, args: null };
              }), i3 = S2(t3, e3, n3);
              return { clip: this.parseBackgroundClip(o3, i3, n3, e3, t3), borders: b2(n3, t3, i3, e3) };
            }, i2.prototype.parseBackgroundClip = function(t3, e3, n3, r3, i3) {
              var o3 = [];
              switch (t3.css("backgroundClip")) {
                case "content-box":
                case "padding-box":
                  A2(o3, r3[0], r3[1], e3.topLeftInner, e3.topRightInner, i3.left + n3[3].width, i3.top + n3[0].width), A2(o3, r3[1], r3[2], e3.topRightInner, e3.bottomRightInner, i3.left + i3.width - n3[1].width, i3.top + n3[0].width), A2(o3, r3[2], r3[3], e3.bottomRightInner, e3.bottomLeftInner, i3.left + i3.width - n3[1].width, i3.top + i3.height - n3[2].width), A2(o3, r3[3], r3[0], e3.bottomLeftInner, e3.topLeftInner, i3.left + n3[3].width, i3.top + i3.height - n3[2].width);
                  break;
                default:
                  A2(o3, r3[0], r3[1], e3.topLeftOuter, e3.topRightOuter, i3.left, i3.top), A2(o3, r3[1], r3[2], e3.topRightOuter, e3.bottomRightOuter, i3.left + i3.width, i3.top), A2(o3, r3[2], r3[3], e3.bottomRightOuter, e3.bottomLeftOuter, i3.left + i3.width, i3.top + i3.height), A2(o3, r3[3], r3[0], e3.bottomLeftOuter, e3.topLeftOuter, i3.left, i3.top + i3.height);
              }
              return o3;
            }, e2.exports = i2;
          }, { "./color": 3, "./fontmetrics": 7, "./log": 13, "./nodecontainer": 14, "./pseudoelementcontainer": 18, "./stackingcontext": 21, "./textcontainer": 25, "./utils": 26, punycode: 1 }], 16: [function(t2, e2, n2) {
            var a2 = t2("./xhr"), r2 = t2("./utils"), s2 = t2("./log"), h2 = t2("./clone"), c2 = r2.decode64;
            function l2(t3, e3, n3) {
              var r3 = "withCredentials" in new XMLHttpRequest();
              if (!e3)
                return Promise.reject("No proxy configured");
              var i3 = f2(r3), o2 = d2(e3, t3, i3);
              return r3 ? a2(o2) : u2(n3, o2, i3).then(function(t4) {
                return c2(t4.content);
              });
            }
            var i2 = 0;
            function u2(i3, o2, a3) {
              return new Promise(function(e3, n3) {
                var t3 = i3.createElement("script"), r3 = function() {
                  delete window.html2canvas.proxy[a3], i3.body.removeChild(t3);
                };
                window.html2canvas.proxy[a3] = function(t4) {
                  r3(), e3(t4);
                }, t3.src = o2, t3.onerror = function(t4) {
                  r3(), n3(t4);
                }, i3.body.appendChild(t3);
              });
            }
            function f2(t3) {
              return t3 ? "" : "html2canvas_" + Date.now() + "_" + ++i2 + "_" + Math.round(1e5 * Math.random());
            }
            function d2(t3, e3, n3) {
              return t3 + "?url=" + encodeURIComponent(e3) + (n3.length ? "&callback=html2canvas.proxy." + n3 : "");
            }
            n2.Proxy = l2, n2.ProxyURL = function(t3, e3, n3) {
              var r3 = "crossOrigin" in new Image(), i3 = f2(r3), o2 = d2(e3, t3, i3);
              return r3 ? Promise.resolve(o2) : u2(n3, o2, i3).then(function(t4) {
                return "data:" + t4.type + ";base64," + t4.content;
              });
            }, n2.loadUrlDocument = function(t3, e3, n3, r3, i3, o2) {
              return new l2(t3, e3, window.document).then((a3 = t3, function(e4) {
                var n4, t4 = new DOMParser();
                try {
                  n4 = t4.parseFromString(e4, "text/html");
                } catch (t5) {
                  s2("DOMParser not supported, falling back to createHTMLDocument"), n4 = document.implementation.createHTMLDocument("");
                  try {
                    n4.open(), n4.write(e4), n4.close();
                  } catch (t6) {
                    s2("createHTMLDocument write not supported, falling back to document.body.innerHTML"), n4.body.innerHTML = e4;
                  }
                }
                var r4 = n4.querySelector("base");
                if (!r4 || !r4.href.host) {
                  var i4 = n4.createElement("base");
                  i4.href = a3, n4.head.insertBefore(i4, n4.head.firstChild);
                }
                return n4;
              })).then(function(t4) {
                return h2(t4, n3, r3, i3, o2, 0, 0);
              });
              var a3;
            };
          }, { "./clone": 2, "./log": 13, "./utils": 26, "./xhr": 28 }], 17: [function(t2, e2, n2) {
            var o2 = t2("./proxy").ProxyURL;
            e2.exports = function(n3, r2) {
              var t3 = document.createElement("a");
              t3.href = n3, n3 = t3.href, this.src = n3, this.image = new Image();
              var i2 = this;
              this.promise = new Promise(function(t4, e3) {
                i2.image.crossOrigin = "Anonymous", i2.image.onload = t4, i2.image.onerror = e3, new o2(n3, r2, document).then(function(t5) {
                  i2.image.src = t5;
                }).catch(e3);
              });
            };
          }, { "./proxy": 16 }], 18: [function(t2, e2, n2) {
            var r2 = t2("./nodecontainer");
            function i2(t3, e3, n3) {
              r2.call(this, t3, e3), this.isPseudoElement = true, this.before = ":before" === n3;
            }
            i2.prototype.cloneTo = function(t3) {
              i2.prototype.cloneTo.call(this, t3), t3.isPseudoElement = true, t3.before = this.before;
            }, (i2.prototype = Object.create(r2.prototype)).appendToDOM = function() {
              this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass();
            }, i2.prototype.cleanDOM = function() {
              this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "");
            }, i2.prototype.getHideClass = function() {
              return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")];
            }, i2.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", i2.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", e2.exports = i2;
          }, { "./nodecontainer": 14 }], 19: [function(t2, e2, n2) {
            var h2 = t2("./log");
            function r2(t3, e3, n3, r3, i2) {
              this.width = t3, this.height = e3, this.images = n3, this.options = r3, this.document = i2;
            }
            r2.prototype.renderImage = function(t3, e3, n3, r3) {
              var i2 = t3.cssInt("paddingLeft"), o2 = t3.cssInt("paddingTop"), a2 = t3.cssInt("paddingRight"), s2 = t3.cssInt("paddingBottom"), h3 = n3.borders, c2 = e3.width - (h3[1].width + h3[3].width + i2 + a2), l2 = e3.height - (h3[0].width + h3[2].width + o2 + s2);
              this.drawImage(r3, 0, 0, r3.image.width || c2, r3.image.height || l2, e3.left + i2 + h3[3].width, e3.top + o2 + h3[0].width, c2, l2);
            }, r2.prototype.renderBackground = function(t3, e3, n3) {
              0 < e3.height && 0 < e3.width && (this.renderBackgroundColor(t3, e3), this.renderBackgroundImage(t3, e3, n3));
            }, r2.prototype.renderBackgroundColor = function(t3, e3) {
              var n3 = t3.color("backgroundColor");
              n3.isTransparent() || this.rectangle(e3.left, e3.top, e3.width, e3.height, n3);
            }, r2.prototype.renderBorders = function(t3) {
              t3.forEach(this.renderBorder, this);
            }, r2.prototype.renderBorder = function(t3) {
              t3.color.isTransparent() || null === t3.args || this.drawShape(t3.args, t3.color);
            }, r2.prototype.renderBackgroundImage = function(o2, a2, s2) {
              o2.parseBackgroundImages().reverse().forEach(function(t3, e3, n3) {
                switch (t3.method) {
                  case "url":
                    var r3 = this.images.get(t3.args[0]);
                    r3 ? this.renderBackgroundRepeating(o2, a2, r3, n3.length - (e3 + 1), s2) : h2("Error loading background-image", t3.args[0]);
                    break;
                  case "linear-gradient":
                  case "gradient":
                    var i2 = this.images.get(t3.value);
                    i2 ? this.renderBackgroundGradient(i2, a2, s2) : h2("Error loading background-image", t3.args[0]);
                    break;
                  case "none":
                    break;
                  default:
                    h2("Unknown background-image type", t3.args[0]);
                }
              }, this);
            }, r2.prototype.renderBackgroundRepeating = function(t3, e3, n3, r3, i2) {
              var o2 = t3.parseBackgroundSize(e3, n3.image, r3), a2 = t3.parseBackgroundPosition(e3, n3.image, r3, o2);
              switch (t3.parseBackgroundRepeat(r3)) {
                case "repeat-x":
                case "repeat no-repeat":
                  this.backgroundRepeatShape(n3, a2, o2, e3, e3.left + i2[3], e3.top + a2.top + i2[0], 99999, o2.height, i2);
                  break;
                case "repeat-y":
                case "no-repeat repeat":
                  this.backgroundRepeatShape(n3, a2, o2, e3, e3.left + a2.left + i2[3], e3.top + i2[0], o2.width, 99999, i2);
                  break;
                case "no-repeat":
                  this.backgroundRepeatShape(n3, a2, o2, e3, e3.left + a2.left + i2[3], e3.top + a2.top + i2[0], o2.width, o2.height, i2);
                  break;
                default:
                  this.renderBackgroundRepeat(n3, a2, o2, { top: e3.top, left: e3.left }, i2[3], i2[0]);
              }
            }, e2.exports = r2;
          }, { "./log": 13 }], 20: [function(t2, e2, n2) {
            var r2 = t2("../renderer"), i2 = t2("../lineargradientcontainer"), o2 = t2("../log");
            function a2(t3, e3) {
              r2.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = t3, this.canvas.height = e3), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, o2("Initialized CanvasRenderer with size", t3, "x", e3);
            }
            function s2(t3) {
              return 0 < t3.length;
            }
            (a2.prototype = Object.create(r2.prototype)).setFillStyle = function(t3) {
              return this.ctx.fillStyle = "object" == typeof t3 && t3.isColor ? t3.toString() : t3, this.ctx;
            }, a2.prototype.rectangle = function(t3, e3, n3, r3, i3) {
              this.setFillStyle(i3).fillRect(t3, e3, n3, r3);
            }, a2.prototype.circle = function(t3, e3, n3, r3) {
              this.setFillStyle(r3), this.ctx.beginPath(), this.ctx.arc(t3 + n3 / 2, e3 + n3 / 2, n3 / 2, 0, 2 * Math.PI, true), this.ctx.closePath(), this.ctx.fill();
            }, a2.prototype.circleStroke = function(t3, e3, n3, r3, i3, o3) {
              this.circle(t3, e3, n3, r3), this.ctx.strokeStyle = o3.toString(), this.ctx.stroke();
            }, a2.prototype.drawShape = function(t3, e3) {
              this.shape(t3), this.setFillStyle(e3).fill();
            }, a2.prototype.taints = function(e3) {
              if (null === e3.tainted) {
                this.taintCtx.drawImage(e3.image, 0, 0);
                try {
                  this.taintCtx.getImageData(0, 0, 1, 1), e3.tainted = false;
                } catch (t3) {
                  this.taintCtx = document.createElement("canvas").getContext("2d"), e3.tainted = true;
                }
              }
              return e3.tainted;
            }, a2.prototype.drawImage = function(t3, e3, n3, r3, i3, o3, a3, s3, h2) {
              this.taints(t3) && !this.options.allowTaint || this.ctx.drawImage(t3.image, e3, n3, r3, i3, o3, a3, s3, h2);
            }, a2.prototype.clip = function(t3, e3, n3) {
              this.ctx.save(), t3.filter(s2).forEach(function(t4) {
                this.shape(t4).clip();
              }, this), e3.call(n3), this.ctx.restore();
            }, a2.prototype.shape = function(t3) {
              return this.ctx.beginPath(), t3.forEach(function(t4, e3) {
                "rect" === t4[0] ? this.ctx.rect.apply(this.ctx, t4.slice(1)) : this.ctx[0 === e3 ? "moveTo" : t4[0] + "To"].apply(this.ctx, t4.slice(1));
              }, this), this.ctx.closePath(), this.ctx;
            }, a2.prototype.font = function(t3, e3, n3, r3, i3, o3) {
              this.setFillStyle(t3).font = [e3, n3, r3, i3, o3].join(" ").split(",")[0];
            }, a2.prototype.fontShadow = function(t3, e3, n3, r3) {
              this.setVariable("shadowColor", t3.toString()).setVariable("shadowOffsetY", e3).setVariable("shadowOffsetX", n3).setVariable("shadowBlur", r3);
            }, a2.prototype.clearShadow = function() {
              this.setVariable("shadowColor", "rgba(0,0,0,0)");
            }, a2.prototype.setOpacity = function(t3) {
              this.ctx.globalAlpha = t3;
            }, a2.prototype.setTransform = function(t3) {
              this.ctx.translate(t3.origin[0], t3.origin[1]), this.ctx.transform.apply(this.ctx, t3.matrix), this.ctx.translate(-t3.origin[0], -t3.origin[1]);
            }, a2.prototype.setVariable = function(t3, e3) {
              return this.variables[t3] !== e3 && (this.variables[t3] = this.ctx[t3] = e3), this;
            }, a2.prototype.text = function(t3, e3, n3) {
              this.ctx.fillText(t3, e3, n3);
            }, a2.prototype.backgroundRepeatShape = function(t3, e3, n3, r3, i3, o3, a3, s3, h2) {
              var c2 = [["line", Math.round(i3), Math.round(o3)], ["line", Math.round(i3 + a3), Math.round(o3)], ["line", Math.round(i3 + a3), Math.round(s3 + o3)], ["line", Math.round(i3), Math.round(s3 + o3)]];
              this.clip([c2], function() {
                this.renderBackgroundRepeat(t3, e3, n3, r3, h2[3], h2[0]);
              }, this);
            }, a2.prototype.renderBackgroundRepeat = function(t3, e3, n3, r3, i3, o3) {
              var a3 = Math.round(r3.left + e3.left + i3), s3 = Math.round(r3.top + e3.top + o3);
              this.setFillStyle(this.ctx.createPattern(this.resizeImage(t3, n3), "repeat")), this.ctx.translate(a3, s3), this.ctx.fill(), this.ctx.translate(-a3, -s3);
            }, a2.prototype.renderBackgroundGradient = function(t3, e3) {
              if (t3 instanceof i2) {
                var n3 = this.ctx.createLinearGradient(e3.left + e3.width * t3.x0, e3.top + e3.height * t3.y0, e3.left + e3.width * t3.x1, e3.top + e3.height * t3.y1);
                t3.colorStops.forEach(function(t4) {
                  n3.addColorStop(t4.stop, t4.color.toString());
                }), this.rectangle(e3.left, e3.top, e3.width, e3.height, n3);
              }
            }, a2.prototype.resizeImage = function(t3, e3) {
              var n3 = t3.image;
              if (n3.width === e3.width && n3.height === e3.height)
                return n3;
              var r3 = document.createElement("canvas");
              return r3.width = e3.width, r3.height = e3.height, r3.getContext("2d").drawImage(n3, 0, 0, n3.width, n3.height, 0, 0, e3.width, e3.height), r3;
            }, e2.exports = a2;
          }, { "../lineargradientcontainer": 12, "../log": 13, "../renderer": 19 }], 21: [function(t2, e2, n2) {
            var i2 = t2("./nodecontainer");
            function r2(t3, e3, n3, r3) {
              i2.call(this, n3, r3), this.ownStacking = t3, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e3;
            }
            (r2.prototype = Object.create(i2.prototype)).getParentStack = function(t3) {
              var e3 = this.parent ? this.parent.stack : null;
              return e3 ? e3.ownStacking ? e3 : e3.getParentStack(t3) : t3.stack;
            }, e2.exports = r2;
          }, { "./nodecontainer": 14 }], 22: [function(t2, e2, n2) {
            function r2(t3) {
              this.rangeBounds = this.testRangeBounds(t3), this.cors = this.testCORS(), this.svg = this.testSVG();
            }
            r2.prototype.testRangeBounds = function(t3) {
              var e3, n3, r3 = false;
              return t3.createRange && (e3 = t3.createRange()).getBoundingClientRect && ((n3 = t3.createElement("boundtest")).style.height = "123px", n3.style.display = "block", t3.body.appendChild(n3), e3.selectNode(n3), 123 === e3.getBoundingClientRect().height && (r3 = true), t3.body.removeChild(n3)), r3;
            }, r2.prototype.testCORS = function() {
              return void 0 !== new Image().crossOrigin;
            }, r2.prototype.testSVG = function() {
              var t3 = new Image(), e3 = document.createElement("canvas"), n3 = e3.getContext("2d");
              t3.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
              try {
                n3.drawImage(t3, 0, 0), e3.toDataURL();
              } catch (t4) {
                return false;
              }
              return true;
            }, e2.exports = r2;
          }, {}], 23: [function(t2, e2, n2) {
            var r2 = t2("./xhr"), i2 = t2("./utils").decode64;
            function o2(t3) {
              this.src = t3, this.image = null;
              var n3 = this;
              this.promise = this.hasFabric().then(function() {
                return n3.isInline(t3) ? Promise.resolve(n3.inlineFormatting(t3)) : r2(t3);
              }).then(function(e3) {
                return new Promise(function(t4) {
                  window.html2canvas.svg.fabric.loadSVGFromString(e3, n3.createCanvas.call(n3, t4));
                });
              });
            }
            o2.prototype.hasFabric = function() {
              return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"));
            }, o2.prototype.inlineFormatting = function(t3) {
              return /^data:image\/svg\+xml;base64,/.test(t3) ? this.decode64(this.removeContentType(t3)) : this.removeContentType(t3);
            }, o2.prototype.removeContentType = function(t3) {
              return t3.replace(/^data:image\/svg\+xml(;base64)?,/, "");
            }, o2.prototype.isInline = function(t3) {
              return /^data:image\/svg\+xml/i.test(t3);
            }, o2.prototype.createCanvas = function(r3) {
              var i3 = this;
              return function(t3, e3) {
                var n3 = new window.html2canvas.svg.fabric.StaticCanvas("c");
                i3.image = n3.lowerCanvasEl, n3.setWidth(e3.width).setHeight(e3.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(t3, e3)).renderAll(), r3(n3.lowerCanvasEl);
              };
            }, o2.prototype.decode64 = function(t3) {
              return "function" == typeof window.atob ? window.atob(t3) : i2(t3);
            }, e2.exports = o2;
          }, { "./utils": 26, "./xhr": 28 }], 24: [function(t2, e2, n2) {
            var r2 = t2("./svgcontainer");
            function i2(n3, t3) {
              this.src = n3, this.image = null;
              var r3 = this;
              this.promise = t3 ? new Promise(function(t4, e3) {
                r3.image = new Image(), r3.image.onload = t4, r3.image.onerror = e3, r3.image.src = "data:image/svg+xml," + new XMLSerializer().serializeToString(n3), true === r3.image.complete && t4(r3.image);
              }) : this.hasFabric().then(function() {
                return new Promise(function(t4) {
                  window.html2canvas.svg.fabric.parseSVGDocument(n3, r3.createCanvas.call(r3, t4));
                });
              });
            }
            i2.prototype = Object.create(r2.prototype), e2.exports = i2;
          }, { "./svgcontainer": 23 }], 25: [function(t2, e2, n2) {
            var r2 = t2("./nodecontainer");
            function i2(t3, e3) {
              r2.call(this, t3, e3);
            }
            function o2(t3, e3, n3) {
              if (0 < t3.length)
                return e3 + n3.toUpperCase();
            }
            (i2.prototype = Object.create(r2.prototype)).applyTextTransform = function() {
              this.node.data = this.transform(this.parent.css("textTransform"));
            }, i2.prototype.transform = function(t3) {
              var e3 = this.node.data;
              switch (t3) {
                case "lowercase":
                  return e3.toLowerCase();
                case "capitalize":
                  return e3.replace(/(^|\s|:|-|\(|\))([a-z])/g, o2);
                case "uppercase":
                  return e3.toUpperCase();
                default:
                  return e3;
              }
            }, e2.exports = i2;
          }, { "./nodecontainer": 14 }], 26: [function(t2, e2, n2) {
            n2.smallImage = function() {
              return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            }, n2.bind = function(t3, e3) {
              return function() {
                return t3.apply(e3, arguments);
              };
            }, /*
               * base64-arraybuffer
               * https://github.com/niklasvh/base64-arraybuffer
               *
               * Copyright (c) 2012 Niklas von Hertzen
               * Licensed under the MIT license.
               */
            n2.decode64 = function(t3) {
              var e3, n3, r2, i2, o2, a2, s2, h2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c2 = t3.length, l2 = "";
              for (e3 = 0; e3 < c2; e3 += 4)
                o2 = h2.indexOf(t3[e3]) << 2 | (n3 = h2.indexOf(t3[e3 + 1])) >> 4, a2 = (15 & n3) << 4 | (r2 = h2.indexOf(t3[e3 + 2])) >> 2, s2 = (3 & r2) << 6 | (i2 = h2.indexOf(t3[e3 + 3])), l2 += 64 === r2 ? String.fromCharCode(o2) : 64 === i2 || -1 === i2 ? String.fromCharCode(o2, a2) : String.fromCharCode(o2, a2, s2);
              return l2;
            }, n2.getBounds = function(t3) {
              if (t3.getBoundingClientRect) {
                var e3 = t3.getBoundingClientRect(), n3 = null == t3.offsetWidth ? e3.width : t3.offsetWidth;
                return { top: e3.top, bottom: e3.bottom || e3.top + e3.height, right: e3.left + n3, left: e3.left, width: n3, height: null == t3.offsetHeight ? e3.height : t3.offsetHeight };
              }
              return {};
            }, n2.offsetBounds = function(t3) {
              var e3 = t3.offsetParent ? n2.offsetBounds(t3.offsetParent) : { top: 0, left: 0 };
              return { top: t3.offsetTop + e3.top, bottom: t3.offsetTop + t3.offsetHeight + e3.top, right: t3.offsetLeft + e3.left + t3.offsetWidth, left: t3.offsetLeft + e3.left, width: t3.offsetWidth, height: t3.offsetHeight };
            }, n2.parseBackgrounds = function(t3) {
              var e3, n3, r2, i2, o2, a2, s2, h2 = [], c2 = 0, l2 = 0, u2 = function() {
                e3 && ('"' === n3.substr(0, 1) && (n3 = n3.substr(1, n3.length - 2)), n3 && s2.push(n3), "-" === e3.substr(0, 1) && 0 < (i2 = e3.indexOf("-", 1) + 1) && (r2 = e3.substr(0, i2), e3 = e3.substr(i2)), h2.push({ prefix: r2, method: e3.toLowerCase(), value: o2, args: s2, image: null })), s2 = [], e3 = r2 = n3 = o2 = "";
              };
              return s2 = [], e3 = r2 = n3 = o2 = "", t3.split("").forEach(function(t4) {
                if (!(0 === c2 && -1 < " \r\n	".indexOf(t4))) {
                  switch (t4) {
                    case '"':
                      a2 ? a2 === t4 && (a2 = null) : a2 = t4;
                      break;
                    case "(":
                      if (a2)
                        break;
                      if (0 === c2)
                        return c2 = 1, void (o2 += t4);
                      l2++;
                      break;
                    case ")":
                      if (a2)
                        break;
                      if (1 === c2) {
                        if (0 === l2)
                          return c2 = 0, o2 += t4, void u2();
                        l2--;
                      }
                      break;
                    case ",":
                      if (a2)
                        break;
                      if (0 === c2)
                        return void u2();
                      if (1 === c2 && 0 === l2 && !e3.match(/^url$/i))
                        return s2.push(n3), n3 = "", void (o2 += t4);
                  }
                  o2 += t4, 0 === c2 ? e3 += t4 : n3 += t4;
                }
              }), u2(), h2;
            };
          }, {}], 27: [function(t2, e2, n2) {
            var r2 = t2("./gradientcontainer");
            function i2(t3) {
              r2.apply(this, arguments), this.type = "linear" === t3.args[0] ? r2.TYPES.LINEAR : r2.TYPES.RADIAL;
            }
            i2.prototype = Object.create(r2.prototype), e2.exports = i2;
          }, { "./gradientcontainer": 9 }], 28: [function(t2, e2, n2) {
            e2.exports = function(r2) {
              return new Promise(function(t3, e3) {
                var n3 = new XMLHttpRequest();
                n3.open("GET", r2), n3.onload = function() {
                  200 === n3.status ? t3(n3.responseText) : e3(new Error(n3.statusText));
                }, n3.onerror = function() {
                  e3(new Error("Network Error"));
                }, n3.send();
              });
            };
          }, {}] }, {}, [4])(4);
        }), function(t2) {
          var n2 = "+".charCodeAt(0), r2 = "/".charCodeAt(0), i2 = "0".charCodeAt(0), o2 = "a".charCodeAt(0), a2 = "A".charCodeAt(0), s2 = "-".charCodeAt(0), h2 = "_".charCodeAt(0), l2 = function(t3) {
            var e3 = t3.charCodeAt(0);
            return e3 === n2 || e3 === s2 ? 62 : e3 === r2 || e3 === h2 ? 63 : e3 < i2 ? -1 : e3 < i2 + 10 ? e3 - i2 + 26 + 26 : e3 < a2 + 26 ? e3 - a2 : e3 < o2 + 26 ? e3 - o2 + 26 : void 0;
          };
          t2.API.TTFFont = function() {
            function i3(t3, e3, n3) {
              var r3;
              if (this.rawData = t3, r3 = this.contents = new X2(t3), this.contents.pos = 4, "ttcf" === r3.readString(4)) {
                if (!e3)
                  throw new Error("Must specify a font name for TTC files.");
                throw new Error("Font " + e3 + " not found in TTC file.");
              }
              r3.pos = 0, this.parse(), this.subset = new T2(this), this.registerTTF();
            }
            return i3.open = function(t3, e3, n3, r3) {
              return new i3(function(t4) {
                var e4, n4, r4, i4, o3, a3;
                if (0 < t4.length % 4)
                  throw new Error("Invalid string. Length must be a multiple of 4");
                var s3 = t4.length;
                o3 = "=" === t4.charAt(s3 - 2) ? 2 : "=" === t4.charAt(s3 - 1) ? 1 : 0, a3 = new Uint8Array(3 * t4.length / 4 - o3), r4 = 0 < o3 ? t4.length - 4 : t4.length;
                var h3 = 0;
                function c3(t5) {
                  a3[h3++] = t5;
                }
                for (n4 = e4 = 0; e4 < r4; e4 += 4, n4 += 3)
                  c3((16711680 & (i4 = l2(t4.charAt(e4)) << 18 | l2(t4.charAt(e4 + 1)) << 12 | l2(t4.charAt(e4 + 2)) << 6 | l2(t4.charAt(e4 + 3)))) >> 16), c3((65280 & i4) >> 8), c3(255 & i4);
                return 2 === o3 ? c3(255 & (i4 = l2(t4.charAt(e4)) << 2 | l2(t4.charAt(e4 + 1)) >> 4)) : 1 === o3 && (c3((i4 = l2(t4.charAt(e4)) << 10 | l2(t4.charAt(e4 + 1)) << 4 | l2(t4.charAt(e4 + 2)) >> 2) >> 8 & 255), c3(255 & i4)), a3;
              }(n3), e3, r3);
            }, i3.prototype.parse = function() {
              return this.directory = new e2(this.contents), this.head = new d2(this), this.name = new b2(this), this.cmap = new m2(this), this.hhea = new g2(this), this.maxp = new x2(this), this.hmtx = new S2(this), this.post = new y2(this), this.os2 = new w2(this), this.loca = new C2(this), this.glyf = new _2(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
            }, i3.prototype.registerTTF = function() {
              var i4, t3, e3, n3, r3;
              if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
                var t4, e4, n4, r4;
                for (r4 = [], t4 = 0, e4 = (n4 = this.bbox).length; t4 < e4; t4++)
                  i4 = n4[t4], r4.push(Math.round(i4 * this.scaleFactor));
                return r4;
              }.call(this), this.stemV = 0, this.post.exists ? (e3 = 255 & (n3 = this.post.italic_angle), true & (t3 = n3 >> 16) && (t3 = -(1 + (65535 ^ t3))), this.italicAngle = +(t3 + "." + e3)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (r3 = this.familyClass) || 2 === r3 || 3 === r3 || 4 === r3 || 5 === r3 || 7 === r3, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode)
                throw new Error("No unicode cmap for font");
            }, i3.prototype.characterToGlyph = function(t3) {
              var e3;
              return (null != (e3 = this.cmap.unicode) ? e3.codeMap[t3] : void 0) || 0;
            }, i3.prototype.widthOfGlyph = function(t3) {
              var e3;
              return e3 = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t3).advance * e3;
            }, i3.prototype.widthOfString = function(t3, e3, n3) {
              var r3, i4, o3, a3, s3;
              for (i4 = a3 = o3 = 0, s3 = (t3 = "" + t3).length; 0 <= s3 ? a3 < s3 : s3 < a3; i4 = 0 <= s3 ? ++a3 : --a3)
                r3 = t3.charCodeAt(i4), o3 += this.widthOfGlyph(this.characterToGlyph(r3)) + n3 * (1e3 / e3) || 0;
              return o3 * (e3 / 1e3);
            }, i3.prototype.lineHeight = function(t3, e3) {
              var n3;
              return null == e3 && (e3 = false), n3 = e3 ? this.lineGap : 0, (this.ascender + n3 - this.decender) / 1e3 * t3;
            }, i3;
          }();
          var c2, X2 = function() {
            function t3(t4) {
              this.data = null != t4 ? t4 : [], this.pos = 0, this.length = this.data.length;
            }
            return t3.prototype.readByte = function() {
              return this.data[this.pos++];
            }, t3.prototype.writeByte = function(t4) {
              return this.data[this.pos++] = t4;
            }, t3.prototype.readUInt32 = function() {
              return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
            }, t3.prototype.writeUInt32 = function(t4) {
              return this.writeByte(t4 >>> 24 & 255), this.writeByte(t4 >> 16 & 255), this.writeByte(t4 >> 8 & 255), this.writeByte(255 & t4);
            }, t3.prototype.readInt32 = function() {
              var t4;
              return 2147483648 <= (t4 = this.readUInt32()) ? t4 - 4294967296 : t4;
            }, t3.prototype.writeInt32 = function(t4) {
              return t4 < 0 && (t4 += 4294967296), this.writeUInt32(t4);
            }, t3.prototype.readUInt16 = function() {
              return this.readByte() << 8 | this.readByte();
            }, t3.prototype.writeUInt16 = function(t4) {
              return this.writeByte(t4 >> 8 & 255), this.writeByte(255 & t4);
            }, t3.prototype.readInt16 = function() {
              var t4;
              return 32768 <= (t4 = this.readUInt16()) ? t4 - 65536 : t4;
            }, t3.prototype.writeInt16 = function(t4) {
              return t4 < 0 && (t4 += 65536), this.writeUInt16(t4);
            }, t3.prototype.readString = function(t4) {
              var e3, n3, r3;
              for (n3 = [], e3 = r3 = 0; 0 <= t4 ? r3 < t4 : t4 < r3; e3 = 0 <= t4 ? ++r3 : --r3)
                n3[e3] = String.fromCharCode(this.readByte());
              return n3.join("");
            }, t3.prototype.writeString = function(t4) {
              var e3, n3, r3, i3;
              for (i3 = [], e3 = n3 = 0, r3 = t4.length; 0 <= r3 ? n3 < r3 : r3 < n3; e3 = 0 <= r3 ? ++n3 : --n3)
                i3.push(this.writeByte(t4.charCodeAt(e3)));
              return i3;
            }, t3.prototype.readShort = function() {
              return this.readInt16();
            }, t3.prototype.writeShort = function(t4) {
              return this.writeInt16(t4);
            }, t3.prototype.readLongLong = function() {
              var t4, e3, n3, r3, i3, o3, a3, s3;
              return t4 = this.readByte(), e3 = this.readByte(), n3 = this.readByte(), r3 = this.readByte(), i3 = this.readByte(), o3 = this.readByte(), a3 = this.readByte(), s3 = this.readByte(), 128 & t4 ? -1 * (72057594037927940 * (255 ^ t4) + 281474976710656 * (255 ^ e3) + 1099511627776 * (255 ^ n3) + 4294967296 * (255 ^ r3) + 16777216 * (255 ^ i3) + 65536 * (255 ^ o3) + 256 * (255 ^ a3) + (255 ^ s3) + 1) : 72057594037927940 * t4 + 281474976710656 * e3 + 1099511627776 * n3 + 4294967296 * r3 + 16777216 * i3 + 65536 * o3 + 256 * a3 + s3;
            }, t3.prototype.readInt = function() {
              return this.readInt32();
            }, t3.prototype.writeInt = function(t4) {
              return this.writeInt32(t4);
            }, t3.prototype.read = function(t4) {
              var e3, n3;
              for (e3 = [], n3 = 0; 0 <= t4 ? n3 < t4 : t4 < n3; 0 <= t4 ? ++n3 : --n3)
                e3.push(this.readByte());
              return e3;
            }, t3.prototype.write = function(t4) {
              var e3, n3, r3, i3;
              for (i3 = [], n3 = 0, r3 = t4.length; n3 < r3; n3++)
                e3 = t4[n3], i3.push(this.writeByte(e3));
              return i3;
            }, t3;
          }(), e2 = function() {
            var p3;
            function t3(t4) {
              var e3, n3, r3;
              for (this.scalarType = t4.readInt(), this.tableCount = t4.readShort(), this.searchRange = t4.readShort(), this.entrySelector = t4.readShort(), this.rangeShift = t4.readShort(), this.tables = {}, n3 = 0, r3 = this.tableCount; 0 <= r3 ? n3 < r3 : r3 < n3; 0 <= r3 ? ++n3 : --n3)
                e3 = { tag: t4.readString(4), checksum: t4.readInt(), offset: t4.readInt(), length: t4.readInt() }, this.tables[e3.tag] = e3;
            }
            return t3.prototype.encode = function(t4) {
              var e3, n3, r3, i3, o3, a3, s3, h3, c3, l3, u3, f3, d3;
              for (d3 in u3 = Object.keys(t4).length, a3 = Math.log(2), c3 = 16 * Math.floor(Math.log(u3) / a3), i3 = Math.floor(c3 / a3), h3 = 16 * u3 - c3, (n3 = new X2()).writeInt(this.scalarType), n3.writeShort(u3), n3.writeShort(c3), n3.writeShort(i3), n3.writeShort(h3), r3 = 16 * u3, s3 = n3.pos + r3, o3 = null, f3 = [], t4)
                for (l3 = t4[d3], n3.writeString(d3), n3.writeInt(p3(l3)), n3.writeInt(s3), n3.writeInt(l3.length), f3 = f3.concat(l3), "head" === d3 && (o3 = s3), s3 += l3.length; s3 % 4; )
                  f3.push(0), s3++;
              return n3.write(f3), e3 = 2981146554 - p3(n3.data), n3.pos = o3 + 8, n3.writeUInt32(e3), n3.data;
            }, p3 = function(t4) {
              var e3, n3, r3, i3;
              for (t4 = k2.call(t4); t4.length % 4; )
                t4.push(0);
              for (n3 = new X2(t4), r3 = e3 = 0, i3 = t4.length; r3 < i3; r3 += 4)
                e3 += n3.readUInt32();
              return 4294967295 & e3;
            }, t3;
          }(), u2 = {}.hasOwnProperty, f2 = function(t3, e3) {
            for (var n3 in e3)
              u2.call(e3, n3) && (t3[n3] = e3[n3]);
            function r3() {
              this.constructor = t3;
            }
            return r3.prototype = e3.prototype, t3.prototype = new r3(), t3.__super__ = e3.prototype, t3;
          };
          c2 = function() {
            function t3(t4) {
              var e3;
              this.file = t4, e3 = this.file.directory.tables[this.tag], this.exists = !!e3, e3 && (this.offset = e3.offset, this.length = e3.length, this.parse(this.file.contents));
            }
            return t3.prototype.parse = function() {
            }, t3.prototype.encode = function() {
            }, t3.prototype.raw = function() {
              return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
            }, t3;
          }();
          var d2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "head", e3.prototype.parse = function(t4) {
              return t4.pos = this.offset, this.version = t4.readInt(), this.revision = t4.readInt(), this.checkSumAdjustment = t4.readInt(), this.magicNumber = t4.readInt(), this.flags = t4.readShort(), this.unitsPerEm = t4.readShort(), this.created = t4.readLongLong(), this.modified = t4.readLongLong(), this.xMin = t4.readShort(), this.yMin = t4.readShort(), this.xMax = t4.readShort(), this.yMax = t4.readShort(), this.macStyle = t4.readShort(), this.lowestRecPPEM = t4.readShort(), this.fontDirectionHint = t4.readShort(), this.indexToLocFormat = t4.readShort(), this.glyphDataFormat = t4.readShort();
            }, e3;
          }(), p2 = function() {
            function t3(n3, t4) {
              var e3, r3, i3, o3, a3, s3, h3, c3, l3, u3, f3, d3, p3, g3, m3, w3, y3, v3;
              switch (this.platformID = n3.readUInt16(), this.encodingID = n3.readShort(), this.offset = t4 + n3.readInt(), l3 = n3.pos, n3.pos = this.offset, this.format = n3.readUInt16(), this.length = n3.readUInt16(), this.language = n3.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
                case 0:
                  for (s3 = m3 = 0; m3 < 256; s3 = ++m3)
                    this.codeMap[s3] = n3.readByte();
                  break;
                case 4:
                  for (f3 = n3.readUInt16(), u3 = f3 / 2, n3.pos += 6, i3 = function() {
                    var t5, e4;
                    for (e4 = [], s3 = t5 = 0; 0 <= u3 ? t5 < u3 : u3 < t5; s3 = 0 <= u3 ? ++t5 : --t5)
                      e4.push(n3.readUInt16());
                    return e4;
                  }(), n3.pos += 2, p3 = function() {
                    var t5, e4;
                    for (e4 = [], s3 = t5 = 0; 0 <= u3 ? t5 < u3 : u3 < t5; s3 = 0 <= u3 ? ++t5 : --t5)
                      e4.push(n3.readUInt16());
                    return e4;
                  }(), h3 = function() {
                    var t5, e4;
                    for (e4 = [], s3 = t5 = 0; 0 <= u3 ? t5 < u3 : u3 < t5; s3 = 0 <= u3 ? ++t5 : --t5)
                      e4.push(n3.readUInt16());
                    return e4;
                  }(), c3 = function() {
                    var t5, e4;
                    for (e4 = [], s3 = t5 = 0; 0 <= u3 ? t5 < u3 : u3 < t5; s3 = 0 <= u3 ? ++t5 : --t5)
                      e4.push(n3.readUInt16());
                    return e4;
                  }(), r3 = (this.length - n3.pos + this.offset) / 2, a3 = function() {
                    var t5, e4;
                    for (e4 = [], s3 = t5 = 0; 0 <= r3 ? t5 < r3 : r3 < t5; s3 = 0 <= r3 ? ++t5 : --t5)
                      e4.push(n3.readUInt16());
                    return e4;
                  }(), s3 = w3 = 0, v3 = i3.length; w3 < v3; s3 = ++w3)
                    for (g3 = i3[s3], e3 = y3 = d3 = p3[s3]; d3 <= g3 ? y3 <= g3 : g3 <= y3; e3 = d3 <= g3 ? ++y3 : --y3)
                      0 === c3[s3] ? o3 = e3 + h3[s3] : 0 !== (o3 = a3[c3[s3] / 2 + (e3 - d3) - (u3 - s3)] || 0) && (o3 += h3[s3]), this.codeMap[e3] = 65535 & o3;
              }
              n3.pos = l3;
            }
            return t3.encode = function(t4, e3) {
              var n3, r3, i3, o3, a3, s3, h3, c3, l3, u3, f3, d3, p3, g3, m3, w3, y3, v3, b3, x3, S3, k3, _3, A3, I3, C3, T3, F2, P2, E2, q2, O2, B2, R2, j2, D2, M2, U2, N2, z2, L2, H2, W2, G2, V2, Y2;
              switch (F2 = new X2(), o3 = Object.keys(t4).sort(function(t5, e4) {
                return t5 - e4;
              }), e3) {
                case "macroman":
                  for (p3 = 0, g3 = function() {
                    var t5, e4;
                    for (e4 = [], d3 = t5 = 0; t5 < 256; d3 = ++t5)
                      e4.push(0);
                    return e4;
                  }(), w3 = { 0: 0 }, i3 = {}, P2 = 0, B2 = o3.length; P2 < B2; P2++)
                    null == w3[W2 = t4[r3 = o3[P2]]] && (w3[W2] = ++p3), i3[r3] = { old: t4[r3], new: w3[t4[r3]] }, g3[r3] = w3[t4[r3]];
                  return F2.writeUInt16(1), F2.writeUInt16(0), F2.writeUInt32(12), F2.writeUInt16(0), F2.writeUInt16(262), F2.writeUInt16(0), F2.write(g3), { charMap: i3, subtable: F2.data, maxGlyphID: p3 + 1 };
                case "unicode":
                  for (C3 = [], l3 = [], w3 = {}, n3 = {}, m3 = h3 = null, E2 = y3 = 0, R2 = o3.length; E2 < R2; E2++)
                    null == w3[b3 = t4[r3 = o3[E2]]] && (w3[b3] = ++y3), n3[r3] = { old: b3, new: w3[b3] }, a3 = w3[b3] - r3, null != m3 && a3 === h3 || (m3 && l3.push(m3), C3.push(r3), h3 = a3), m3 = r3;
                  for (m3 && l3.push(m3), l3.push(65535), C3.push(65535), A3 = 2 * (_3 = C3.length), k3 = 2 * Math.pow(Math.log(_3) / Math.LN2, 2), u3 = Math.log(k3 / 2) / Math.LN2, S3 = 2 * _3 - k3, s3 = [], x3 = [], f3 = [], d3 = q2 = 0, j2 = C3.length; q2 < j2; d3 = ++q2) {
                    if (I3 = C3[d3], c3 = l3[d3], 65535 === I3) {
                      s3.push(0), x3.push(0);
                      break;
                    }
                    if (32768 <= I3 - (T3 = n3[I3].new))
                      for (s3.push(0), x3.push(2 * (f3.length + _3 - d3)), r3 = O2 = I3; I3 <= c3 ? O2 <= c3 : c3 <= O2; r3 = I3 <= c3 ? ++O2 : --O2)
                        f3.push(n3[r3].new);
                    else
                      s3.push(T3 - I3), x3.push(0);
                  }
                  for (F2.writeUInt16(3), F2.writeUInt16(1), F2.writeUInt32(12), F2.writeUInt16(4), F2.writeUInt16(16 + 8 * _3 + 2 * f3.length), F2.writeUInt16(0), F2.writeUInt16(A3), F2.writeUInt16(k3), F2.writeUInt16(u3), F2.writeUInt16(S3), L2 = 0, D2 = l3.length; L2 < D2; L2++)
                    r3 = l3[L2], F2.writeUInt16(r3);
                  for (F2.writeUInt16(0), H2 = 0, M2 = C3.length; H2 < M2; H2++)
                    r3 = C3[H2], F2.writeUInt16(r3);
                  for (G2 = 0, U2 = s3.length; G2 < U2; G2++)
                    a3 = s3[G2], F2.writeUInt16(a3);
                  for (V2 = 0, N2 = x3.length; V2 < N2; V2++)
                    v3 = x3[V2], F2.writeUInt16(v3);
                  for (Y2 = 0, z2 = f3.length; Y2 < z2; Y2++)
                    p3 = f3[Y2], F2.writeUInt16(p3);
                  return { charMap: n3, subtable: F2.data, maxGlyphID: y3 + 1 };
              }
            }, t3;
          }(), m2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "cmap", e3.prototype.parse = function(t4) {
              var e4, n3, r3;
              for (t4.pos = this.offset, this.version = t4.readUInt16(), n3 = t4.readUInt16(), this.tables = [], this.unicode = null, r3 = 0; 0 <= n3 ? r3 < n3 : n3 < r3; 0 <= n3 ? ++r3 : --r3)
                e4 = new p2(t4, this.offset), this.tables.push(e4), e4.isUnicode && null == this.unicode && (this.unicode = e4);
              return true;
            }, e3.encode = function(t4, e4) {
              var n3, r3;
              return null == e4 && (e4 = "macroman"), n3 = p2.encode(t4, e4), (r3 = new X2()).writeUInt16(0), r3.writeUInt16(1), n3.table = r3.data.concat(n3.subtable), n3;
            }, e3;
          }(), g2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "hhea", e3.prototype.parse = function(t4) {
              return t4.pos = this.offset, this.version = t4.readInt(), this.ascender = t4.readShort(), this.decender = t4.readShort(), this.lineGap = t4.readShort(), this.advanceWidthMax = t4.readShort(), this.minLeftSideBearing = t4.readShort(), this.minRightSideBearing = t4.readShort(), this.xMaxExtent = t4.readShort(), this.caretSlopeRise = t4.readShort(), this.caretSlopeRun = t4.readShort(), this.caretOffset = t4.readShort(), t4.pos += 8, this.metricDataFormat = t4.readShort(), this.numberOfMetrics = t4.readUInt16();
            }, e3;
          }(), w2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "OS/2", e3.prototype.parse = function(n3) {
              if (n3.pos = this.offset, this.version = n3.readUInt16(), this.averageCharWidth = n3.readShort(), this.weightClass = n3.readUInt16(), this.widthClass = n3.readUInt16(), this.type = n3.readShort(), this.ySubscriptXSize = n3.readShort(), this.ySubscriptYSize = n3.readShort(), this.ySubscriptXOffset = n3.readShort(), this.ySubscriptYOffset = n3.readShort(), this.ySuperscriptXSize = n3.readShort(), this.ySuperscriptYSize = n3.readShort(), this.ySuperscriptXOffset = n3.readShort(), this.ySuperscriptYOffset = n3.readShort(), this.yStrikeoutSize = n3.readShort(), this.yStrikeoutPosition = n3.readShort(), this.familyClass = n3.readShort(), this.panose = function() {
                var t4, e4;
                for (e4 = [], t4 = 0; t4 < 10; ++t4)
                  e4.push(n3.readByte());
                return e4;
              }(), this.charRange = function() {
                var t4, e4;
                for (e4 = [], t4 = 0; t4 < 4; ++t4)
                  e4.push(n3.readInt());
                return e4;
              }(), this.vendorID = n3.readString(4), this.selection = n3.readShort(), this.firstCharIndex = n3.readShort(), this.lastCharIndex = n3.readShort(), 0 < this.version && (this.ascent = n3.readShort(), this.descent = n3.readShort(), this.lineGap = n3.readShort(), this.winAscent = n3.readShort(), this.winDescent = n3.readShort(), this.codePageRange = function() {
                var t4, e4;
                for (e4 = [], t4 = 0; t4 < 2; ++t4)
                  e4.push(n3.readInt());
                return e4;
              }(), 1 < this.version))
                return this.xHeight = n3.readShort(), this.capHeight = n3.readShort(), this.defaultChar = n3.readShort(), this.breakChar = n3.readShort(), this.maxContext = n3.readShort();
            }, e3;
          }(), y2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "post", e3.prototype.parse = function(r3) {
              var t4, e4, n3, i3;
              switch (r3.pos = this.offset, this.format = r3.readInt(), this.italicAngle = r3.readInt(), this.underlinePosition = r3.readShort(), this.underlineThickness = r3.readShort(), this.isFixedPitch = r3.readInt(), this.minMemType42 = r3.readInt(), this.maxMemType42 = r3.readInt(), this.minMemType1 = r3.readInt(), this.maxMemType1 = r3.readInt(), this.format) {
                case 65536:
                  break;
                case 131072:
                  for (e4 = r3.readUInt16(), this.glyphNameIndex = [], n3 = 0; 0 <= e4 ? n3 < e4 : e4 < n3; 0 <= e4 ? ++n3 : --n3)
                    this.glyphNameIndex.push(r3.readUInt16());
                  for (this.names = [], i3 = []; r3.pos < this.offset + this.length; )
                    t4 = r3.readByte(), i3.push(this.names.push(r3.readString(t4)));
                  return i3;
                case 151552:
                  return e4 = r3.readUInt16(), this.offsets = r3.read(e4);
                case 196608:
                  break;
                case 262144:
                  return this.map = function() {
                    var t5, e5, n4;
                    for (n4 = [], t5 = 0, e5 = this.file.maxp.numGlyphs; 0 <= e5 ? t5 < e5 : e5 < t5; 0 <= e5 ? ++t5 : --t5)
                      n4.push(r3.readUInt32());
                    return n4;
                  }.call(this);
              }
            }, e3;
          }(), v2 = function(t3, e3) {
            this.raw = t3, this.length = t3.length, this.platformID = e3.platformID, this.encodingID = e3.encodingID, this.languageID = e3.languageID;
          }, b2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "name", e3.prototype.parse = function(t4) {
              var e4, n3, r3, i3, o3, a3, s3, h3, c3, l3, u3, f3;
              for (t4.pos = this.offset, t4.readShort(), e4 = t4.readShort(), a3 = t4.readShort(), n3 = [], i3 = c3 = 0; 0 <= e4 ? c3 < e4 : e4 < c3; i3 = 0 <= e4 ? ++c3 : --c3)
                n3.push({ platformID: t4.readShort(), encodingID: t4.readShort(), languageID: t4.readShort(), nameID: t4.readShort(), length: t4.readShort(), offset: this.offset + a3 + t4.readShort() });
              for (s3 = {}, i3 = l3 = 0, u3 = n3.length; l3 < u3; i3 = ++l3)
                r3 = n3[i3], t4.pos = r3.offset, h3 = t4.readString(r3.length), o3 = new v2(h3, r3), null == s3[f3 = r3.nameID] && (s3[f3] = []), s3[r3.nameID].push(o3);
              return this.strings = s3, this.copyright = s3[0], this.fontFamily = s3[1], this.fontSubfamily = s3[2], this.uniqueSubfamily = s3[3], this.fontName = s3[4], this.version = s3[5], this.postscriptName = s3[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, ""), this.trademark = s3[7], this.manufacturer = s3[8], this.designer = s3[9], this.description = s3[10], this.vendorUrl = s3[11], this.designerUrl = s3[12], this.license = s3[13], this.licenseUrl = s3[14], this.preferredFamily = s3[15], this.preferredSubfamily = s3[17], this.compatibleFull = s3[18], this.sampleText = s3[19];
            }, e3;
          }(), x2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "maxp", e3.prototype.parse = function(t4) {
              return t4.pos = this.offset, this.version = t4.readInt(), this.numGlyphs = t4.readUInt16(), this.maxPoints = t4.readUInt16(), this.maxContours = t4.readUInt16(), this.maxCompositePoints = t4.readUInt16(), this.maxComponentContours = t4.readUInt16(), this.maxZones = t4.readUInt16(), this.maxTwilightPoints = t4.readUInt16(), this.maxStorage = t4.readUInt16(), this.maxFunctionDefs = t4.readUInt16(), this.maxInstructionDefs = t4.readUInt16(), this.maxStackElements = t4.readUInt16(), this.maxSizeOfInstructions = t4.readUInt16(), this.maxComponentElements = t4.readUInt16(), this.maxComponentDepth = t4.readUInt16();
            }, e3;
          }(), S2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "hmtx", e3.prototype.parse = function(n3) {
              var t4, r3, i3, e4, o3, a3, s3;
              for (n3.pos = this.offset, this.metrics = [], e4 = 0, a3 = this.file.hhea.numberOfMetrics; 0 <= a3 ? e4 < a3 : a3 < e4; 0 <= a3 ? ++e4 : --e4)
                this.metrics.push({ advance: n3.readUInt16(), lsb: n3.readInt16() });
              for (r3 = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
                var t5, e5;
                for (e5 = [], t5 = 0; 0 <= r3 ? t5 < r3 : r3 < t5; 0 <= r3 ? ++t5 : --t5)
                  e5.push(n3.readInt16());
                return e5;
              }(), this.widths = function() {
                var t5, e5, n4, r4;
                for (r4 = [], t5 = 0, e5 = (n4 = this.metrics).length; t5 < e5; t5++)
                  i3 = n4[t5], r4.push(i3.advance);
                return r4;
              }.call(this), t4 = this.widths[this.widths.length - 1], s3 = [], o3 = 0; 0 <= r3 ? o3 < r3 : r3 < o3; 0 <= r3 ? ++o3 : --o3)
                s3.push(this.widths.push(t4));
              return s3;
            }, e3.prototype.forGlyph = function(t4) {
              return t4 in this.metrics ? this.metrics[t4] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t4 - this.metrics.length] };
            }, e3;
          }(), k2 = [].slice, _2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "glyf", e3.prototype.parse = function(t4) {
              return this.cache = {};
            }, e3.prototype.glyphFor = function(t4) {
              var e4, n3, r3, i3, o3, a3, s3, h3, c3, l3;
              return (t4 = t4) in this.cache ? this.cache[t4] : (i3 = this.file.loca, e4 = this.file.contents, n3 = i3.indexOf(t4), 0 === (r3 = i3.lengthOf(t4)) ? this.cache[t4] = null : (e4.pos = this.offset + n3, o3 = (a3 = new X2(e4.read(r3))).readShort(), h3 = a3.readShort(), l3 = a3.readShort(), s3 = a3.readShort(), c3 = a3.readShort(), this.cache[t4] = -1 === o3 ? new I2(a3, h3, l3, s3, c3) : new A2(a3, o3, h3, l3, s3, c3), this.cache[t4]));
            }, e3.prototype.encode = function(t4, e4, n3) {
              var r3, i3, o3, a3, s3;
              for (o3 = [], i3 = [], a3 = 0, s3 = e4.length; a3 < s3; a3++)
                r3 = t4[e4[a3]], i3.push(o3.length), r3 && (o3 = o3.concat(r3.encode(n3)));
              return i3.push(o3.length), { table: o3, offsets: i3 };
            }, e3;
          }(), A2 = function() {
            function t3(t4, e3, n3, r3, i3, o3) {
              this.raw = t4, this.numberOfContours = e3, this.xMin = n3, this.yMin = r3, this.xMax = i3, this.yMax = o3, this.compound = false;
            }
            return t3.prototype.encode = function() {
              return this.raw.data;
            }, t3;
          }(), I2 = function() {
            function t3(t4, e3, n3, r3, i3) {
              var o3, a3;
              for (this.raw = t4, this.xMin = e3, this.yMin = n3, this.xMax = r3, this.yMax = i3, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], o3 = this.raw; a3 = o3.readShort(), this.glyphOffsets.push(o3.pos), this.glyphIDs.push(o3.readShort()), 32 & a3; )
                o3.pos += 1 & a3 ? 4 : 2, 128 & a3 ? o3.pos += 8 : 64 & a3 ? o3.pos += 4 : 8 & a3 && (o3.pos += 2);
            }
            return 1, 8, 32, 64, 128, t3.prototype.encode = function(t4) {
              var e3, n3, r3, i3, o3;
              for (n3 = new X2(k2.call(this.raw.data)), e3 = r3 = 0, i3 = (o3 = this.glyphIDs).length; r3 < i3; e3 = ++r3)
                o3[e3], n3.pos = this.glyphOffsets[e3];
              return n3.data;
            }, t3;
          }(), C2 = function(t3) {
            function e3() {
              return e3.__super__.constructor.apply(this, arguments);
            }
            return f2(e3, c2), e3.prototype.tag = "loca", e3.prototype.parse = function(r3) {
              var t4;
              return r3.pos = this.offset, t4 = this.file.head.indexToLocFormat, this.offsets = 0 === t4 ? function() {
                var t5, e4, n3;
                for (n3 = [], t5 = 0, e4 = this.length; t5 < e4; t5 += 2)
                  n3.push(2 * r3.readUInt16());
                return n3;
              }.call(this) : function() {
                var t5, e4, n3;
                for (n3 = [], t5 = 0, e4 = this.length; t5 < e4; t5 += 4)
                  n3.push(r3.readUInt32());
                return n3;
              }.call(this);
            }, e3.prototype.indexOf = function(t4) {
              return this.offsets[t4];
            }, e3.prototype.lengthOf = function(t4) {
              return this.offsets[t4 + 1] - this.offsets[t4];
            }, e3.prototype.encode = function(t4, e4) {
              for (var n3 = new Uint32Array(this.offsets.length), r3 = 0, i3 = 0, o3 = 0; o3 < n3.length; ++o3)
                if (n3[o3] = r3, i3 < e4.length && e4[i3] == o3) {
                  ++i3, n3[o3] = r3;
                  var a3 = this.offsets[o3], s3 = this.offsets[o3 + 1] - a3;
                  0 < s3 && (r3 += s3);
                }
              for (var h3 = new Array(4 * n3.length), c3 = 0; c3 < n3.length; ++c3)
                h3[4 * c3 + 3] = 255 & n3[c3], h3[4 * c3 + 2] = (65280 & n3[c3]) >> 8, h3[4 * c3 + 1] = (16711680 & n3[c3]) >> 16, h3[4 * c3] = (4278190080 & n3[c3]) >> 24;
              return h3;
            }, e3;
          }(), T2 = function() {
            function t3(t4) {
              this.font = t4, this.subset = {}, this.unicodes = {}, this.next = 33;
            }
            return t3.prototype.generateCmap = function() {
              var t4, e3, n3, r3, i3;
              for (e3 in r3 = this.font.cmap.tables[0].codeMap, t4 = {}, i3 = this.subset)
                n3 = i3[e3], t4[e3] = r3[n3];
              return t4;
            }, t3.prototype.glyphsFor = function(t4) {
              var e3, n3, r3, i3, o3, a3, s3;
              for (r3 = {}, o3 = 0, a3 = t4.length; o3 < a3; o3++)
                r3[i3 = t4[o3]] = this.font.glyf.glyphFor(i3);
              for (i3 in e3 = [], r3)
                (null != (n3 = r3[i3]) ? n3.compound : void 0) && e3.push.apply(e3, n3.glyphIDs);
              if (0 < e3.length)
                for (i3 in s3 = this.glyphsFor(e3))
                  n3 = s3[i3], r3[i3] = n3;
              return r3;
            }, t3.prototype.encode = function(t4) {
              var e3, n3, r3, i3, o3, a3, s3, h3, c3, l3, u3, f3, d3, p3, g3;
              for (n3 in e3 = m2.encode(this.generateCmap(), "unicode"), i3 = this.glyphsFor(t4), u3 = { 0: 0 }, g3 = e3.charMap)
                u3[(a3 = g3[n3]).old] = a3.new;
              for (f3 in l3 = e3.maxGlyphID, i3)
                f3 in u3 || (u3[f3] = l3++);
              return h3 = function(t5) {
                var e4, n4;
                for (e4 in n4 = {}, t5)
                  n4[t5[e4]] = e4;
                return n4;
              }(u3), c3 = Object.keys(h3).sort(function(t5, e4) {
                return t5 - e4;
              }), d3 = function() {
                var t5, e4, n4;
                for (n4 = [], t5 = 0, e4 = c3.length; t5 < e4; t5++)
                  o3 = c3[t5], n4.push(h3[o3]);
                return n4;
              }(), r3 = this.font.glyf.encode(i3, d3, u3), s3 = this.font.loca.encode(r3.offsets, d3), p3 = { cmap: this.font.cmap.raw(), glyf: r3.table, loca: s3, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.raw() }, this.font.os2.exists && (p3["OS/2"] = this.font.os2.raw()), this.font.directory.encode(p3);
            }, t3;
          }();
          t2.API.PDFObject = function() {
            var o3;
            function a3() {
            }
            return o3 = function(t3, e3) {
              return (Array(e3 + 1).join("0") + t3).slice(-e3);
            }, a3.convert = function(r3) {
              var i3, t3, e3, n3;
              if (Array.isArray(r3))
                return "[" + function() {
                  var t4, e4, n4;
                  for (n4 = [], t4 = 0, e4 = r3.length; t4 < e4; t4++)
                    i3 = r3[t4], n4.push(a3.convert(i3));
                  return n4;
                }().join(" ") + "]";
              if ("string" == typeof r3)
                return "/" + r3;
              if (null != r3 ? r3.isString : void 0)
                return "(" + r3 + ")";
              if (r3 instanceof Date)
                return "(D:" + o3(r3.getUTCFullYear(), 4) + o3(r3.getUTCMonth(), 2) + o3(r3.getUTCDate(), 2) + o3(r3.getUTCHours(), 2) + o3(r3.getUTCMinutes(), 2) + o3(r3.getUTCSeconds(), 2) + "Z)";
              if ("[object Object]" === {}.toString.call(r3)) {
                for (t3 in e3 = ["<<"], r3)
                  n3 = r3[t3], e3.push("/" + t3 + " " + a3.convert(n3));
                return e3.push(">>"), e3.join("\n");
              }
              return "" + r3;
            }, a3;
          }();
        }($), /*
          # PNG.js
          # Copyright (c) 2011 Devon Govett
          # MIT LICENSE
          # 
          # 
          */
        pt = "undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")(), gt = function() {
          var c2, n2, r2;
          function i2(t2) {
            var e2, n3, r3, i3, o2, a2, s2, h2, c3, l2, u2, f2, d2, p2;
            for (this.data = t2, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, a2 = null; ; ) {
              switch (e2 = this.readUInt32(), c3 = function() {
                var t3, e3;
                for (e3 = [], t3 = 0; t3 < 4; ++t3)
                  e3.push(String.fromCharCode(this.data[this.pos++]));
                return e3;
              }.call(this).join("")) {
                case "IHDR":
                  this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                  break;
                case "acTL":
                  this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
                  break;
                case "PLTE":
                  this.palette = this.read(e2);
                  break;
                case "fcTL":
                  a2 && this.animation.frames.push(a2), this.pos += 4, a2 = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, o2 = this.readUInt16(), i3 = this.readUInt16() || 100, a2.delay = 1e3 * o2 / i3, a2.disposeOp = this.data[this.pos++], a2.blendOp = this.data[this.pos++], a2.data = [];
                  break;
                case "IDAT":
                case "fdAT":
                  for ("fdAT" === c3 && (this.pos += 4, e2 -= 4), t2 = (null != a2 ? a2.data : void 0) || this.imgData, f2 = 0; 0 <= e2 ? f2 < e2 : e2 < f2; 0 <= e2 ? ++f2 : --f2)
                    t2.push(this.data[this.pos++]);
                  break;
                case "tRNS":
                  switch (this.transparency = {}, this.colorType) {
                    case 3:
                      if (r3 = this.palette.length / 3, this.transparency.indexed = this.read(e2), this.transparency.indexed.length > r3)
                        throw new Error("More transparent colors than palette size");
                      if (0 < (l2 = r3 - this.transparency.indexed.length))
                        for (d2 = 0; 0 <= l2 ? d2 < l2 : l2 < d2; 0 <= l2 ? ++d2 : --d2)
                          this.transparency.indexed.push(255);
                      break;
                    case 0:
                      this.transparency.grayscale = this.read(e2)[0];
                      break;
                    case 2:
                      this.transparency.rgb = this.read(e2);
                  }
                  break;
                case "tEXt":
                  s2 = (u2 = this.read(e2)).indexOf(0), h2 = String.fromCharCode.apply(String, u2.slice(0, s2)), this.text[h2] = String.fromCharCode.apply(String, u2.slice(s2 + 1));
                  break;
                case "IEND":
                  return a2 && this.animation.frames.push(a2), this.colors = function() {
                    switch (this.colorType) {
                      case 0:
                      case 3:
                      case 4:
                        return 1;
                      case 2:
                      case 6:
                        return 3;
                    }
                  }.call(this), this.hasAlphaChannel = 4 === (p2 = this.colorType) || 6 === p2, n3 = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n3, this.colorSpace = function() {
                    switch (this.colors) {
                      case 1:
                        return "DeviceGray";
                      case 3:
                        return "DeviceRGB";
                    }
                  }.call(this), void (this.imgData = new Uint8Array(this.imgData));
                default:
                  this.pos += e2;
              }
              if (this.pos += 4, this.pos > this.data.length)
                throw new Error("Incomplete or corrupt PNG file");
            }
          }
          i2.load = function(t2, e2, n3) {
            var r3;
            return "function" == typeof e2 && (n3 = e2), (r3 = new XMLHttpRequest()).open("GET", t2, true), r3.responseType = "arraybuffer", r3.onload = function() {
              var t3;
              return t3 = new i2(new Uint8Array(r3.response || r3.mozResponseArrayBuffer)), "function" == typeof (null != e2 ? e2.getContext : void 0) && t3.render(e2), "function" == typeof n3 ? n3(t3) : void 0;
            }, r3.send(null);
          }, i2.prototype.read = function(t2) {
            var e2, n3;
            for (n3 = [], e2 = 0; 0 <= t2 ? e2 < t2 : t2 < e2; 0 <= t2 ? ++e2 : --e2)
              n3.push(this.data[this.pos++]);
            return n3;
          }, i2.prototype.readUInt32 = function() {
            return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
          }, i2.prototype.readUInt16 = function() {
            return this.data[this.pos++] << 8 | this.data[this.pos++];
          }, i2.prototype.decodePixels = function(E2) {
            var q2 = this.pixelBitlength / 8, O2 = new Uint8Array(this.width * this.height * q2), B2 = 0, R2 = this;
            if (null == E2 && (E2 = this.imgData), 0 === E2.length)
              return new Uint8Array(0);
            function t2(t3, e2, n3, r3) {
              var i3, o2, a2, s2, h2, c3, l2, u2, f2, d2, p2, g2, m2, w2, y2, v2, b2, x2, S2, k2, _2, A2 = Math.ceil((R2.width - t3) / n3), I2 = Math.ceil((R2.height - e2) / r3), C2 = R2.width == A2 && R2.height == I2;
              for (w2 = q2 * A2, g2 = C2 ? O2 : new Uint8Array(w2 * I2), c3 = E2.length, o2 = m2 = 0; m2 < I2 && B2 < c3; ) {
                switch (E2[B2++]) {
                  case 0:
                    for (s2 = b2 = 0; b2 < w2; s2 = b2 += 1)
                      g2[o2++] = E2[B2++];
                    break;
                  case 1:
                    for (s2 = x2 = 0; x2 < w2; s2 = x2 += 1)
                      i3 = E2[B2++], h2 = s2 < q2 ? 0 : g2[o2 - q2], g2[o2++] = (i3 + h2) % 256;
                    break;
                  case 2:
                    for (s2 = S2 = 0; S2 < w2; s2 = S2 += 1)
                      i3 = E2[B2++], a2 = (s2 - s2 % q2) / q2, y2 = m2 && g2[(m2 - 1) * w2 + a2 * q2 + s2 % q2], g2[o2++] = (y2 + i3) % 256;
                    break;
                  case 3:
                    for (s2 = k2 = 0; k2 < w2; s2 = k2 += 1)
                      i3 = E2[B2++], a2 = (s2 - s2 % q2) / q2, h2 = s2 < q2 ? 0 : g2[o2 - q2], y2 = m2 && g2[(m2 - 1) * w2 + a2 * q2 + s2 % q2], g2[o2++] = (i3 + Math.floor((h2 + y2) / 2)) % 256;
                    break;
                  case 4:
                    for (s2 = _2 = 0; _2 < w2; s2 = _2 += 1)
                      i3 = E2[B2++], a2 = (s2 - s2 % q2) / q2, h2 = s2 < q2 ? 0 : g2[o2 - q2], 0 === m2 ? y2 = v2 = 0 : (y2 = g2[(m2 - 1) * w2 + a2 * q2 + s2 % q2], v2 = a2 && g2[(m2 - 1) * w2 + (a2 - 1) * q2 + s2 % q2]), l2 = h2 + y2 - v2, u2 = Math.abs(l2 - h2), d2 = Math.abs(l2 - y2), p2 = Math.abs(l2 - v2), f2 = u2 <= d2 && u2 <= p2 ? h2 : d2 <= p2 ? y2 : v2, g2[o2++] = (i3 + f2) % 256;
                    break;
                  default:
                    throw new Error("Invalid filter algorithm: " + E2[B2 - 1]);
                }
                if (!C2) {
                  var T2 = ((e2 + m2 * r3) * R2.width + t3) * q2, F2 = m2 * w2;
                  for (s2 = 0; s2 < A2; s2 += 1) {
                    for (var P2 = 0; P2 < q2; P2 += 1)
                      O2[T2++] = g2[F2++];
                    T2 += (n3 - 1) * q2;
                  }
                }
                m2++;
              }
            }
            return E2 = (E2 = new kt(E2)).getBytes(), 1 == R2.interlaceMethod ? (t2(0, 0, 8, 8), t2(4, 0, 8, 8), t2(0, 4, 4, 8), t2(2, 0, 4, 4), t2(0, 2, 2, 4), t2(1, 0, 2, 2), t2(0, 1, 1, 2)) : t2(0, 0, 1, 1), O2;
          }, i2.prototype.decodePalette = function() {
            var t2, e2, n3, r3, i3, o2, a2, s2, h2;
            for (n3 = this.palette, o2 = this.transparency.indexed || [], i3 = new Uint8Array((o2.length || 0) + n3.length), r3 = 0, n3.length, e2 = a2 = t2 = 0, s2 = n3.length; a2 < s2; e2 = a2 += 3)
              i3[r3++] = n3[e2], i3[r3++] = n3[e2 + 1], i3[r3++] = n3[e2 + 2], i3[r3++] = null != (h2 = o2[t2++]) ? h2 : 255;
            return i3;
          }, i2.prototype.copyToImageData = function(t2, e2) {
            var n3, r3, i3, o2, a2, s2, h2, c3, l2, u2, f2;
            if (r3 = this.colors, l2 = null, n3 = this.hasAlphaChannel, this.palette.length && (l2 = null != (f2 = this._decodedPalette) ? f2 : this._decodedPalette = this.decodePalette(), r3 = 4, n3 = true), c3 = (i3 = t2.data || t2).length, a2 = l2 || e2, o2 = s2 = 0, 1 === r3)
              for (; o2 < c3; )
                h2 = l2 ? 4 * e2[o2 / 4] : s2, u2 = a2[h2++], i3[o2++] = u2, i3[o2++] = u2, i3[o2++] = u2, i3[o2++] = n3 ? a2[h2++] : 255, s2 = h2;
            else
              for (; o2 < c3; )
                h2 = l2 ? 4 * e2[o2 / 4] : s2, i3[o2++] = a2[h2++], i3[o2++] = a2[h2++], i3[o2++] = a2[h2++], i3[o2++] = n3 ? a2[h2++] : 255, s2 = h2;
          }, i2.prototype.decode = function() {
            var t2;
            return t2 = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t2, this.decodePixels()), t2;
          };
          try {
            n2 = pt.document.createElement("canvas"), r2 = n2.getContext("2d");
          } catch (t2) {
            return -1;
          }
          return c2 = function(t2) {
            var e2;
            return r2.width = t2.width, r2.height = t2.height, r2.clearRect(0, 0, t2.width, t2.height), r2.putImageData(t2, 0, 0), (e2 = new Image()).src = n2.toDataURL(), e2;
          }, i2.prototype.decodeFrames = function(t2) {
            var e2, n3, r3, i3, o2, a2, s2, h2;
            if (this.animation) {
              for (h2 = [], n3 = o2 = 0, a2 = (s2 = this.animation.frames).length; o2 < a2; n3 = ++o2)
                e2 = s2[n3], r3 = t2.createImageData(e2.width, e2.height), i3 = this.decodePixels(new Uint8Array(e2.data)), this.copyToImageData(r3, i3), e2.imageData = r3, h2.push(e2.image = c2(r3));
              return h2;
            }
          }, i2.prototype.renderFrame = function(t2, e2) {
            var n3, r3, i3;
            return n3 = (r3 = this.animation.frames)[e2], i3 = r3[e2 - 1], 0 === e2 && t2.clearRect(0, 0, this.width, this.height), 1 === (null != i3 ? i3.disposeOp : void 0) ? t2.clearRect(i3.xOffset, i3.yOffset, i3.width, i3.height) : 2 === (null != i3 ? i3.disposeOp : void 0) && t2.putImageData(i3.imageData, i3.xOffset, i3.yOffset), 0 === n3.blendOp && t2.clearRect(n3.xOffset, n3.yOffset, n3.width, n3.height), t2.drawImage(n3.image, n3.xOffset, n3.yOffset);
          }, i2.prototype.animate = function(n3) {
            var r3, i3, o2, a2, s2, t2, h2 = this;
            return i3 = 0, t2 = this.animation, a2 = t2.numFrames, o2 = t2.frames, s2 = t2.numPlays, (r3 = function() {
              var t3, e2;
              if (t3 = i3++ % a2, e2 = o2[t3], h2.renderFrame(n3, t3), 1 < a2 && i3 / a2 < s2)
                return h2.animation._timeout = setTimeout(r3, e2.delay);
            })();
          }, i2.prototype.stopAnimation = function() {
            var t2;
            return clearTimeout(null != (t2 = this.animation) ? t2._timeout : void 0);
          }, i2.prototype.render = function(t2) {
            var e2, n3;
            return t2._png && t2._png.stopAnimation(), t2._png = this, t2.width = this.width, t2.height = this.height, e2 = t2.getContext("2d"), this.animation ? (this.decodeFrames(e2), this.animate(e2)) : (n3 = e2.createImageData(this.width, this.height), this.copyToImageData(n3, this.decodePixels()), e2.putImageData(n3, 0, 0));
          }, i2;
        }(), pt.PNG = gt;
        var St = function() {
          function t2() {
            this.pos = 0, this.bufferLength = 0, this.eof = false, this.buffer = null;
          }
          return t2.prototype = { ensureBuffer: function(t3) {
            var e2 = this.buffer, n2 = e2 ? e2.byteLength : 0;
            if (t3 < n2)
              return e2;
            for (var r2 = 512; r2 < t3; )
              r2 <<= 1;
            for (var i2 = new Uint8Array(r2), o2 = 0; o2 < n2; ++o2)
              i2[o2] = e2[o2];
            return this.buffer = i2;
          }, getByte: function() {
            for (var t3 = this.pos; this.bufferLength <= t3; ) {
              if (this.eof)
                return null;
              this.readBlock();
            }
            return this.buffer[this.pos++];
          }, getBytes: function(t3) {
            var e2 = this.pos;
            if (t3) {
              this.ensureBuffer(e2 + t3);
              for (var n2 = e2 + t3; !this.eof && this.bufferLength < n2; )
                this.readBlock();
              var r2 = this.bufferLength;
              r2 < n2 && (n2 = r2);
            } else {
              for (; !this.eof; )
                this.readBlock();
              n2 = this.bufferLength;
            }
            return this.pos = n2, this.buffer.subarray(e2, n2);
          }, lookChar: function() {
            for (var t3 = this.pos; this.bufferLength <= t3; ) {
              if (this.eof)
                return null;
              this.readBlock();
            }
            return String.fromCharCode(this.buffer[this.pos]);
          }, getChar: function() {
            for (var t3 = this.pos; this.bufferLength <= t3; ) {
              if (this.eof)
                return null;
              this.readBlock();
            }
            return String.fromCharCode(this.buffer[this.pos++]);
          }, makeSubStream: function(t3, e2, n2) {
            for (var r2 = t3 + e2; this.bufferLength <= r2 && !this.eof; )
              this.readBlock();
            return new Stream(this.buffer, t3, e2, n2);
          }, skip: function(t3) {
            t3 || (t3 = 1), this.pos += t3;
          }, reset: function() {
            this.pos = 0;
          } }, t2;
        }(), kt = function() {
          if ("undefined" != typeof Uint32Array) {
            var F2 = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), P2 = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), E2 = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), q2 = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], O2 = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
            return (t2.prototype = Object.create(St.prototype)).getBits = function(t3) {
              for (var e2, n2 = this.codeSize, r2 = this.codeBuf, i2 = this.bytes, o2 = this.bytesPos; n2 < t3; )
                void 0 === (e2 = i2[o2++]) && B2("Bad encoding in flate stream"), r2 |= e2 << n2, n2 += 8;
              return e2 = r2 & (1 << t3) - 1, this.codeBuf = r2 >> t3, this.codeSize = n2 -= t3, this.bytesPos = o2, e2;
            }, t2.prototype.getCode = function(t3) {
              for (var e2 = t3[0], n2 = t3[1], r2 = this.codeSize, i2 = this.codeBuf, o2 = this.bytes, a2 = this.bytesPos; r2 < n2; ) {
                var s2;
                void 0 === (s2 = o2[a2++]) && B2("Bad encoding in flate stream"), i2 |= s2 << r2, r2 += 8;
              }
              var h2 = e2[i2 & (1 << n2) - 1], c2 = h2 >> 16, l2 = 65535 & h2;
              return (0 == r2 || r2 < c2 || 0 == c2) && B2("Bad encoding in flate stream"), this.codeBuf = i2 >> c2, this.codeSize = r2 - c2, this.bytesPos = a2, l2;
            }, t2.prototype.generateHuffmanTable = function(t3) {
              for (var e2 = t3.length, n2 = 0, r2 = 0; r2 < e2; ++r2)
                t3[r2] > n2 && (n2 = t3[r2]);
              for (var i2 = 1 << n2, o2 = new Uint32Array(i2), a2 = 1, s2 = 0, h2 = 2; a2 <= n2; ++a2, s2 <<= 1, h2 <<= 1)
                for (var c2 = 0; c2 < e2; ++c2)
                  if (t3[c2] == a2) {
                    var l2 = 0, u2 = s2;
                    for (r2 = 0; r2 < a2; ++r2)
                      l2 = l2 << 1 | 1 & u2, u2 >>= 1;
                    for (r2 = l2; r2 < i2; r2 += h2)
                      o2[r2] = a2 << 16 | c2;
                    ++s2;
                  }
              return [o2, n2];
            }, t2.prototype.readBlock = function() {
              function t3(t4, e3, n3, r3, i3) {
                for (var o3 = t4.getBits(n3) + r3; 0 < o3--; )
                  e3[h2++] = i3;
              }
              var e2 = this.getBits(3);
              if (1 & e2 && (this.eof = true), 0 != (e2 >>= 1)) {
                var n2, r2;
                if (1 == e2)
                  n2 = q2, r2 = O2;
                else if (2 == e2) {
                  for (var i2 = this.getBits(5) + 257, o2 = this.getBits(5) + 1, a2 = this.getBits(4) + 4, s2 = Array(F2.length), h2 = 0; h2 < a2; )
                    s2[F2[h2++]] = this.getBits(3);
                  for (var c2 = this.generateHuffmanTable(s2), l2 = 0, u2 = (h2 = 0, i2 + o2), f2 = new Array(u2); h2 < u2; ) {
                    var d2 = this.getCode(c2);
                    16 == d2 ? t3(this, f2, 2, 3, l2) : 17 == d2 ? t3(this, f2, 3, 3, l2 = 0) : 18 == d2 ? t3(this, f2, 7, 11, l2 = 0) : f2[h2++] = l2 = d2;
                  }
                  n2 = this.generateHuffmanTable(f2.slice(0, i2)), r2 = this.generateHuffmanTable(f2.slice(i2, u2));
                } else
                  B2("Unknown block type in flate stream");
                for (var p2 = (I2 = this.buffer) ? I2.length : 0, g2 = this.bufferLength; ; ) {
                  var m2 = this.getCode(n2);
                  if (m2 < 256)
                    p2 <= g2 + 1 && (p2 = (I2 = this.ensureBuffer(g2 + 1)).length), I2[g2++] = m2;
                  else {
                    if (256 == m2)
                      return void (this.bufferLength = g2);
                    var w2 = (m2 = P2[m2 -= 257]) >> 16;
                    0 < w2 && (w2 = this.getBits(w2));
                    l2 = (65535 & m2) + w2;
                    m2 = this.getCode(r2), 0 < (w2 = (m2 = E2[m2]) >> 16) && (w2 = this.getBits(w2));
                    var y2 = (65535 & m2) + w2;
                    p2 <= g2 + l2 && (p2 = (I2 = this.ensureBuffer(g2 + l2)).length);
                    for (var v2 = 0; v2 < l2; ++v2, ++g2)
                      I2[g2] = I2[g2 - y2];
                  }
                }
              } else {
                var b2, x2 = this.bytes, S2 = this.bytesPos;
                void 0 === (b2 = x2[S2++]) && B2("Bad block header in flate stream");
                var k2 = b2;
                void 0 === (b2 = x2[S2++]) && B2("Bad block header in flate stream"), k2 |= b2 << 8, void 0 === (b2 = x2[S2++]) && B2("Bad block header in flate stream");
                var _2 = b2;
                void 0 === (b2 = x2[S2++]) && B2("Bad block header in flate stream"), (_2 |= b2 << 8) != (65535 & ~k2) && B2("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
                var A2 = this.bufferLength, I2 = this.ensureBuffer(A2 + k2), C2 = A2 + k2;
                this.bufferLength = C2;
                for (var T2 = A2; T2 < C2; ++T2) {
                  if (void 0 === (b2 = x2[S2++])) {
                    this.eof = true;
                    break;
                  }
                  I2[T2] = b2;
                }
                this.bytesPos = S2;
              }
            }, t2;
          }
          function B2(t3) {
            throw new Error(t3);
          }
          function t2(t3) {
            var e2 = 0, n2 = t3[e2++], r2 = t3[e2++];
            -1 != n2 && -1 != r2 || B2("Invalid header in flate stream"), 8 != (15 & n2) && B2("Unknown compression method in flate stream"), ((n2 << 8) + r2) % 31 != 0 && B2("Bad FCHECK in flate stream"), 32 & r2 && B2("FDICT bit set in flate stream"), this.bytes = t3, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, St.call(this);
          }
        }();
        return function(t2) {
          if ("object" != typeof t2.console) {
            t2.console = {};
            for (var e2, n2, r2 = t2.console, i2 = function() {
            }, o2 = ["memory"], a2 = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); e2 = o2.pop(); )
              r2[e2] || (r2[e2] = {});
            for (; n2 = a2.pop(); )
              r2[n2] || (r2[n2] = i2);
          }
          var s2, h2, c2, l2, u2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          void 0 === t2.btoa && (t2.btoa = function(t3) {
            var e3, n3, r3, i3, o3, a3 = 0, s3 = 0, h3 = "", c3 = [];
            if (!t3)
              return t3;
            for (; e3 = (o3 = t3.charCodeAt(a3++) << 16 | t3.charCodeAt(a3++) << 8 | t3.charCodeAt(a3++)) >> 18 & 63, n3 = o3 >> 12 & 63, r3 = o3 >> 6 & 63, i3 = 63 & o3, c3[s3++] = u2.charAt(e3) + u2.charAt(n3) + u2.charAt(r3) + u2.charAt(i3), a3 < t3.length; )
              ;
            h3 = c3.join("");
            var l3 = t3.length % 3;
            return (l3 ? h3.slice(0, l3 - 3) : h3) + "===".slice(l3 || 3);
          }), void 0 === t2.atob && (t2.atob = function(t3) {
            var e3, n3, r3, i3, o3, a3, s3 = 0, h3 = 0, c3 = [];
            if (!t3)
              return t3;
            for (t3 += ""; e3 = (a3 = u2.indexOf(t3.charAt(s3++)) << 18 | u2.indexOf(t3.charAt(s3++)) << 12 | (i3 = u2.indexOf(t3.charAt(s3++))) << 6 | (o3 = u2.indexOf(t3.charAt(s3++)))) >> 16 & 255, n3 = a3 >> 8 & 255, r3 = 255 & a3, c3[h3++] = 64 == i3 ? String.fromCharCode(e3) : 64 == o3 ? String.fromCharCode(e3, n3) : String.fromCharCode(e3, n3, r3), s3 < t3.length; )
              ;
            return c3.join("");
          }), Array.prototype.map || (Array.prototype.map = function(t3) {
            if (null == this || "function" != typeof t3)
              throw new TypeError();
            for (var e3 = Object(this), n3 = e3.length >>> 0, r3 = new Array(n3), i3 = 1 < arguments.length ? arguments[1] : void 0, o3 = 0; o3 < n3; o3++)
              o3 in e3 && (r3[o3] = t3.call(i3, e3[o3], o3, e3));
            return r3;
          }), Array.isArray || (Array.isArray = function(t3) {
            return "[object Array]" === Object.prototype.toString.call(t3);
          }), Array.prototype.forEach || (Array.prototype.forEach = function(t3, e3) {
            if (null == this || "function" != typeof t3)
              throw new TypeError();
            for (var n3 = Object(this), r3 = n3.length >>> 0, i3 = 0; i3 < r3; i3++)
              i3 in n3 && t3.call(e3, n3[i3], i3, n3);
          }), Object.keys || (Object.keys = (s2 = Object.prototype.hasOwnProperty, h2 = !{ toString: null }.propertyIsEnumerable("toString"), l2 = (c2 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(t3) {
            if ("object" != typeof t3 && ("function" != typeof t3 || null === t3))
              throw new TypeError();
            var e3, n3, r3 = [];
            for (e3 in t3)
              s2.call(t3, e3) && r3.push(e3);
            if (h2)
              for (n3 = 0; n3 < l2; n3++)
                s2.call(t3, c2[n3]) && r3.push(c2[n3]);
            return r3;
          })), "function" != typeof Object.assign && (Object.assign = function(t3) {
            if (null == t3)
              throw new TypeError("Cannot convert undefined or null to object");
            t3 = Object(t3);
            for (var e3 = 1; e3 < arguments.length; e3++) {
              var n3 = arguments[e3];
              if (null != n3)
                for (var r3 in n3)
                  Object.prototype.hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
            }
            return t3;
          }), String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "");
          }), String.prototype.trimLeft || (String.prototype.trimLeft = function() {
            return this.replace(/^\s+/g, "");
          }), String.prototype.trimRight || (String.prototype.trimRight = function() {
            return this.replace(/\s+$/g, "");
          });
        }("undefined" != typeof self && self || "undefined" != typeof window && window || "undefined" != typeof global && global || Function('return typeof this === "object" && this.content')() || Function("return this")()), $;
      });
    }
  });

  // node_modules/html2canvas/dist/html2canvas.js
  var require_html2canvas = __commonJS({
    "node_modules/html2canvas/dist/html2canvas.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.html2canvas = factory());
      })(exports, function() {
        "use strict";
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
              s = arguments[i2];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e2) {
                reject(e2);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e2) {
                reject(e2);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f2, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e2) {
                op = [6, e2];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        function __spreadArray(to, from, pack2) {
          if (pack2 || arguments.length === 2)
            for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
              if (ar || !(i2 in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i2);
                ar[i2] = from[i2];
              }
            }
          return to.concat(ar || from);
        }
        var Bounds = (
          /** @class */
          function() {
            function Bounds2(left, top, width, height) {
              this.left = left;
              this.top = top;
              this.width = width;
              this.height = height;
            }
            Bounds2.prototype.add = function(x, y, w, h) {
              return new Bounds2(this.left + x, this.top + y, this.width + w, this.height + h);
            };
            Bounds2.fromClientRect = function(context, clientRect) {
              return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
            };
            Bounds2.fromDOMRectList = function(context, domRectList) {
              var domRect = Array.from(domRectList).find(function(rect) {
                return rect.width !== 0;
              });
              return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
            };
            Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
            return Bounds2;
          }()
        );
        var parseBounds = function(context, node) {
          return Bounds.fromClientRect(context, node.getBoundingClientRect());
        };
        var parseDocumentSize = function(document2) {
          var body = document2.body;
          var documentElement = document2.documentElement;
          if (!body || !documentElement) {
            throw new Error("Unable to get document size");
          }
          var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
          var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
          return new Bounds(0, 0, width, height);
        };
        var toCodePoints$1 = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint$1 = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
          lookup$2[chars$2.charCodeAt(i$2)] = i$2;
        }
        var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
          lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
        }
        var decode$1 = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1$1[base642.charCodeAt(i2 + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var polyUint32Array$1 = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var UTRIE2_SHIFT_2$1 = 5;
        var UTRIE2_SHIFT_1$1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT$1 = 2;
        var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
        var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
        var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
        var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
        var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
        var slice16$1 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32$1 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64$1 = function(base642, _byteLength) {
          var buffer = decode$1(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie$1 = (
          /** @class */
          function() {
            function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
              this.initialValue = initialValue;
              this.errorValue = errorValue;
              this.highStart = highStart;
              this.highValueIndex = highValueIndex;
              this.index = index;
              this.data = data;
            }
            Trie2.prototype.get = function(codePoint) {
              var ix;
              if (codePoint >= 0) {
                if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                  ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint <= 65535) {
                  ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint < this.highStart) {
                  ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                  ix = this.index[ix];
                  ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
                  ix = this.index[ix];
                  ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                  return this.data[ix];
                }
                if (codePoint <= 1114111) {
                  return this.data[this.highValueIndex];
                }
              }
              return this.errorValue;
            };
            return Trie2;
          }()
        );
        var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
          lookup$3[chars$3.charCodeAt(i$3)] = i$3;
        }
        var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
        var LETTER_NUMBER_MODIFIER = 50;
        var BK = 1;
        var CR$1 = 2;
        var LF$1 = 3;
        var CM = 4;
        var NL = 5;
        var WJ = 7;
        var ZW = 8;
        var GL = 9;
        var SP = 10;
        var ZWJ$1 = 11;
        var B2 = 12;
        var BA = 13;
        var BB = 14;
        var HY = 15;
        var CB = 16;
        var CL = 17;
        var CP = 18;
        var EX = 19;
        var IN = 20;
        var NS = 21;
        var OP = 22;
        var QU = 23;
        var IS = 24;
        var NU = 25;
        var PO = 26;
        var PR = 27;
        var SY = 28;
        var AI = 29;
        var AL = 30;
        var CJ = 31;
        var EB = 32;
        var EM = 33;
        var H2 = 34;
        var H3 = 35;
        var HL = 36;
        var ID = 37;
        var JL = 38;
        var JV = 39;
        var JT = 40;
        var RI$1 = 41;
        var SA = 42;
        var XX = 43;
        var ea_OP = [9001, 65288];
        var BREAK_MANDATORY = "!";
        var BREAK_NOT_ALLOWED$1 = "\xD7";
        var BREAK_ALLOWED$1 = "\xF7";
        var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
        var ALPHABETICS = [AL, HL];
        var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
        var SPACE$1 = [SP, ZW];
        var PREFIX_POSTFIX = [PR, PO];
        var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
        var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
        var HYPHEN = [HY, BA];
        var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
          if (lineBreak2 === void 0) {
            lineBreak2 = "strict";
          }
          var types = [];
          var indices = [];
          var categories = [];
          codePoints.forEach(function(codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
              categories.push(true);
              classType -= LETTER_NUMBER_MODIFIER;
            } else {
              categories.push(false);
            }
            if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
              if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
                indices.push(index);
                return types.push(CB);
              }
            }
            if (classType === CM || classType === ZWJ$1) {
              if (index === 0) {
                indices.push(index);
                return types.push(AL);
              }
              var prev = types[index - 1];
              if (LINE_BREAKS.indexOf(prev) === -1) {
                indices.push(indices[index - 1]);
                return types.push(prev);
              }
              indices.push(index);
              return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) {
              return types.push(lineBreak2 === "strict" ? NS : ID);
            }
            if (classType === SA) {
              return types.push(AL);
            }
            if (classType === AI) {
              return types.push(AL);
            }
            if (classType === XX) {
              if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
                return types.push(ID);
              } else {
                return types.push(AL);
              }
            }
            types.push(classType);
          });
          return [indices, types, categories];
        };
        var isAdjacentWithSpaceIgnored = function(a2, b, currentIndex, classTypes) {
          var current = classTypes[currentIndex];
          if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
            var i2 = currentIndex;
            while (i2 <= classTypes.length) {
              i2++;
              var next = classTypes[i2];
              if (next === b) {
                return true;
              }
              if (next !== SP) {
                break;
              }
            }
          }
          if (current === SP) {
            var i2 = currentIndex;
            while (i2 > 0) {
              i2--;
              var prev = classTypes[i2];
              if (Array.isArray(a2) ? a2.indexOf(prev) !== -1 : a2 === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                  n++;
                  var next = classTypes[n];
                  if (next === b) {
                    return true;
                  }
                  if (next !== SP) {
                    break;
                  }
                }
              }
              if (prev !== SP) {
                break;
              }
            }
          }
          return false;
        };
        var previousNonSpaceClassType = function(currentIndex, classTypes) {
          var i2 = currentIndex;
          while (i2 >= 0) {
            var type = classTypes[i2];
            if (type === SP) {
              i2--;
            } else {
              return type;
            }
          }
          return 0;
        };
        var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
          if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
          }
          var currentIndex = index - 1;
          if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
          }
          var beforeIndex = currentIndex - 1;
          var afterIndex = currentIndex + 1;
          var current = classTypes[currentIndex];
          var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
          var next = classTypes[afterIndex];
          if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
          }
          if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
          }
          if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SP) {
            return BREAK_ALLOWED$1;
          }
          if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
          }
          if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (
            // (PR | PO) × ( OP | HY )? NU
            [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
            [OP, HY].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
            current === NU && [NU, SY, IS].indexOf(next) !== -1
          ) {
            return BREAK_NOT_ALLOWED$1;
          }
          if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];
              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          }
          if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
            return BREAK_NOT_ALLOWED$1;
          }
          if (current === RI$1 && next === RI$1) {
            var i2 = indicies[currentIndex];
            var count = 1;
            while (i2 > 0) {
              i2--;
              if (classTypes[i2] === RI$1) {
                count++;
              } else {
                break;
              }
            }
            if (count % 2 !== 0) {
              return BREAK_NOT_ALLOWED$1;
            }
          }
          if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
          }
          return BREAK_ALLOWED$1;
        };
        var cssFormattedClasses = function(codePoints, options) {
          if (!options) {
            options = { lineBreak: "normal", wordBreak: "normal" };
          }
          var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
          if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
            classTypes = classTypes.map(function(type) {
              return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
            });
          }
          var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i2) {
            return letterNumber && codePoints[i2] >= 19968 && codePoints[i2] <= 40959;
          }) : void 0;
          return [indicies, classTypes, forbiddenBreakpoints];
        };
        var Break = (
          /** @class */
          function() {
            function Break2(codePoints, lineBreak2, start, end) {
              this.codePoints = codePoints;
              this.required = lineBreak2 === BREAK_MANDATORY;
              this.start = start;
              this.end = end;
            }
            Break2.prototype.slice = function() {
              return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
            };
            return Break2;
          }()
        );
        var LineBreaker = function(str, options) {
          var codePoints = toCodePoints$1(str);
          var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
          var length = codePoints.length;
          var lastEnd = 0;
          var nextIndex = 0;
          return {
            next: function() {
              if (nextIndex >= length) {
                return { done: true, value: null };
              }
              var lineBreak2 = BREAK_NOT_ALLOWED$1;
              while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
              }
              if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var FLAG_UNRESTRICTED = 1 << 0;
        var FLAG_ID = 1 << 1;
        var FLAG_INTEGER = 1 << 2;
        var FLAG_NUMBER = 1 << 3;
        var LINE_FEED = 10;
        var SOLIDUS = 47;
        var REVERSE_SOLIDUS = 92;
        var CHARACTER_TABULATION = 9;
        var SPACE = 32;
        var QUOTATION_MARK = 34;
        var EQUALS_SIGN = 61;
        var NUMBER_SIGN = 35;
        var DOLLAR_SIGN = 36;
        var PERCENTAGE_SIGN = 37;
        var APOSTROPHE = 39;
        var LEFT_PARENTHESIS = 40;
        var RIGHT_PARENTHESIS = 41;
        var LOW_LINE = 95;
        var HYPHEN_MINUS = 45;
        var EXCLAMATION_MARK = 33;
        var LESS_THAN_SIGN = 60;
        var GREATER_THAN_SIGN = 62;
        var COMMERCIAL_AT = 64;
        var LEFT_SQUARE_BRACKET = 91;
        var RIGHT_SQUARE_BRACKET = 93;
        var CIRCUMFLEX_ACCENT = 61;
        var LEFT_CURLY_BRACKET = 123;
        var QUESTION_MARK = 63;
        var RIGHT_CURLY_BRACKET = 125;
        var VERTICAL_LINE = 124;
        var TILDE = 126;
        var CONTROL = 128;
        var REPLACEMENT_CHARACTER = 65533;
        var ASTERISK = 42;
        var PLUS_SIGN = 43;
        var COMMA = 44;
        var COLON = 58;
        var SEMICOLON = 59;
        var FULL_STOP = 46;
        var NULL = 0;
        var BACKSPACE = 8;
        var LINE_TABULATION = 11;
        var SHIFT_OUT = 14;
        var INFORMATION_SEPARATOR_ONE = 31;
        var DELETE = 127;
        var EOF = -1;
        var ZERO = 48;
        var a = 97;
        var e = 101;
        var f = 102;
        var u = 117;
        var z = 122;
        var A = 65;
        var E = 69;
        var F = 70;
        var U = 85;
        var Z = 90;
        var isDigit = function(codePoint) {
          return codePoint >= ZERO && codePoint <= 57;
        };
        var isSurrogateCodePoint = function(codePoint) {
          return codePoint >= 55296 && codePoint <= 57343;
        };
        var isHex = function(codePoint) {
          return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
        };
        var isLowerCaseLetter = function(codePoint) {
          return codePoint >= a && codePoint <= z;
        };
        var isUpperCaseLetter = function(codePoint) {
          return codePoint >= A && codePoint <= Z;
        };
        var isLetter = function(codePoint) {
          return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
        };
        var isNonASCIICodePoint = function(codePoint) {
          return codePoint >= CONTROL;
        };
        var isWhiteSpace = function(codePoint) {
          return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
        };
        var isNameStartCodePoint = function(codePoint) {
          return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
        };
        var isNameCodePoint = function(codePoint) {
          return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
        };
        var isNonPrintableCodePoint = function(codePoint) {
          return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
        };
        var isValidEscape = function(c1, c2) {
          if (c1 !== REVERSE_SOLIDUS) {
            return false;
          }
          return c2 !== LINE_FEED;
        };
        var isIdentifierStart = function(c1, c2, c3) {
          if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
          } else if (isNameStartCodePoint(c1)) {
            return true;
          } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
          }
          return false;
        };
        var isNumberStart = function(c1, c2, c3) {
          if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
              return true;
            }
            return c2 === FULL_STOP && isDigit(c3);
          }
          if (c1 === FULL_STOP) {
            return isDigit(c2);
          }
          return isDigit(c1);
        };
        var stringToNumber = function(codePoints) {
          var c = 0;
          var sign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              sign = -1;
            }
            c++;
          }
          var integers = [];
          while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
          }
          var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
          if (codePoints[c] === FULL_STOP) {
            c++;
          }
          var fraction = [];
          while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
          }
          var fracd = fraction.length;
          var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
          if (codePoints[c] === E || codePoints[c] === e) {
            c++;
          }
          var expsign = 1;
          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              expsign = -1;
            }
            c++;
          }
          var exponent = [];
          while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
          }
          var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
          return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
        };
        var LEFT_PARENTHESIS_TOKEN = {
          type: 2
          /* LEFT_PARENTHESIS_TOKEN */
        };
        var RIGHT_PARENTHESIS_TOKEN = {
          type: 3
          /* RIGHT_PARENTHESIS_TOKEN */
        };
        var COMMA_TOKEN = {
          type: 4
          /* COMMA_TOKEN */
        };
        var SUFFIX_MATCH_TOKEN = {
          type: 13
          /* SUFFIX_MATCH_TOKEN */
        };
        var PREFIX_MATCH_TOKEN = {
          type: 8
          /* PREFIX_MATCH_TOKEN */
        };
        var COLUMN_TOKEN = {
          type: 21
          /* COLUMN_TOKEN */
        };
        var DASH_MATCH_TOKEN = {
          type: 9
          /* DASH_MATCH_TOKEN */
        };
        var INCLUDE_MATCH_TOKEN = {
          type: 10
          /* INCLUDE_MATCH_TOKEN */
        };
        var LEFT_CURLY_BRACKET_TOKEN = {
          type: 11
          /* LEFT_CURLY_BRACKET_TOKEN */
        };
        var RIGHT_CURLY_BRACKET_TOKEN = {
          type: 12
          /* RIGHT_CURLY_BRACKET_TOKEN */
        };
        var SUBSTRING_MATCH_TOKEN = {
          type: 14
          /* SUBSTRING_MATCH_TOKEN */
        };
        var BAD_URL_TOKEN = {
          type: 23
          /* BAD_URL_TOKEN */
        };
        var BAD_STRING_TOKEN = {
          type: 1
          /* BAD_STRING_TOKEN */
        };
        var CDO_TOKEN = {
          type: 25
          /* CDO_TOKEN */
        };
        var CDC_TOKEN = {
          type: 24
          /* CDC_TOKEN */
        };
        var COLON_TOKEN = {
          type: 26
          /* COLON_TOKEN */
        };
        var SEMICOLON_TOKEN = {
          type: 27
          /* SEMICOLON_TOKEN */
        };
        var LEFT_SQUARE_BRACKET_TOKEN = {
          type: 28
          /* LEFT_SQUARE_BRACKET_TOKEN */
        };
        var RIGHT_SQUARE_BRACKET_TOKEN = {
          type: 29
          /* RIGHT_SQUARE_BRACKET_TOKEN */
        };
        var WHITESPACE_TOKEN = {
          type: 31
          /* WHITESPACE_TOKEN */
        };
        var EOF_TOKEN = {
          type: 32
          /* EOF_TOKEN */
        };
        var Tokenizer = (
          /** @class */
          function() {
            function Tokenizer2() {
              this._value = [];
            }
            Tokenizer2.prototype.write = function(chunk) {
              this._value = this._value.concat(toCodePoints$1(chunk));
            };
            Tokenizer2.prototype.read = function() {
              var tokens = [];
              var token = this.consumeToken();
              while (token !== EOF_TOKEN) {
                tokens.push(token);
                token = this.consumeToken();
              }
              return tokens;
            };
            Tokenizer2.prototype.consumeToken = function() {
              var codePoint = this.consumeCodePoint();
              switch (codePoint) {
                case QUOTATION_MARK:
                  return this.consumeStringToken(QUOTATION_MARK);
                case NUMBER_SIGN:
                  var c1 = this.peekCodePoint(0);
                  var c2 = this.peekCodePoint(1);
                  var c3 = this.peekCodePoint(2);
                  if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                    var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                    var value = this.consumeName();
                    return { type: 5, value, flags };
                  }
                  break;
                case DOLLAR_SIGN:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUFFIX_MATCH_TOKEN;
                  }
                  break;
                case APOSTROPHE:
                  return this.consumeStringToken(APOSTROPHE);
                case LEFT_PARENTHESIS:
                  return LEFT_PARENTHESIS_TOKEN;
                case RIGHT_PARENTHESIS:
                  return RIGHT_PARENTHESIS_TOKEN;
                case ASTERISK:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return SUBSTRING_MATCH_TOKEN;
                  }
                  break;
                case PLUS_SIGN:
                  if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  break;
                case COMMA:
                  return COMMA_TOKEN;
                case HYPHEN_MINUS:
                  var e1 = codePoint;
                  var e2 = this.peekCodePoint(0);
                  var e3 = this.peekCodePoint(1);
                  if (isNumberStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  if (isIdentifierStart(e1, e2, e3)) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                  }
                  if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDC_TOKEN;
                  }
                  break;
                case FULL_STOP:
                  if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeNumericToken();
                  }
                  break;
                case SOLIDUS:
                  if (this.peekCodePoint(0) === ASTERISK) {
                    this.consumeCodePoint();
                    while (true) {
                      var c = this.consumeCodePoint();
                      if (c === ASTERISK) {
                        c = this.consumeCodePoint();
                        if (c === SOLIDUS) {
                          return this.consumeToken();
                        }
                      }
                      if (c === EOF) {
                        return this.consumeToken();
                      }
                    }
                  }
                  break;
                case COLON:
                  return COLON_TOKEN;
                case SEMICOLON:
                  return SEMICOLON_TOKEN;
                case LESS_THAN_SIGN:
                  if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
                    this.consumeCodePoint();
                    this.consumeCodePoint();
                    return CDO_TOKEN;
                  }
                  break;
                case COMMERCIAL_AT:
                  var a1 = this.peekCodePoint(0);
                  var a2 = this.peekCodePoint(1);
                  var a3 = this.peekCodePoint(2);
                  if (isIdentifierStart(a1, a2, a3)) {
                    var value = this.consumeName();
                    return { type: 7, value };
                  }
                  break;
                case LEFT_SQUARE_BRACKET:
                  return LEFT_SQUARE_BRACKET_TOKEN;
                case REVERSE_SOLIDUS:
                  if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                  }
                  break;
                case RIGHT_SQUARE_BRACKET:
                  return RIGHT_SQUARE_BRACKET_TOKEN;
                case CIRCUMFLEX_ACCENT:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return PREFIX_MATCH_TOKEN;
                  }
                  break;
                case LEFT_CURLY_BRACKET:
                  return LEFT_CURLY_BRACKET_TOKEN;
                case RIGHT_CURLY_BRACKET:
                  return RIGHT_CURLY_BRACKET_TOKEN;
                case u:
                case U:
                  var u1 = this.peekCodePoint(0);
                  var u2 = this.peekCodePoint(1);
                  if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                    this.consumeCodePoint();
                    this.consumeUnicodeRangeToken();
                  }
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeIdentLikeToken();
                case VERTICAL_LINE:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return DASH_MATCH_TOKEN;
                  }
                  if (this.peekCodePoint(0) === VERTICAL_LINE) {
                    this.consumeCodePoint();
                    return COLUMN_TOKEN;
                  }
                  break;
                case TILDE:
                  if (this.peekCodePoint(0) === EQUALS_SIGN) {
                    this.consumeCodePoint();
                    return INCLUDE_MATCH_TOKEN;
                  }
                  break;
                case EOF:
                  return EOF_TOKEN;
              }
              if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                return WHITESPACE_TOKEN;
              }
              if (isDigit(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeNumericToken();
              }
              if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
              }
              return { type: 6, value: fromCodePoint$1(codePoint) };
            };
            Tokenizer2.prototype.consumeCodePoint = function() {
              var value = this._value.shift();
              return typeof value === "undefined" ? -1 : value;
            };
            Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
              this._value.unshift(codePoint);
            };
            Tokenizer2.prototype.peekCodePoint = function(delta) {
              if (delta >= this._value.length) {
                return -1;
              }
              return this._value[delta];
            };
            Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
              var digits = [];
              var codePoint = this.consumeCodePoint();
              while (isHex(codePoint) && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
              }
              var questionMarks = false;
              while (codePoint === QUESTION_MARK && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
                questionMarks = true;
              }
              if (questionMarks) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                  return digit === QUESTION_MARK ? ZERO : digit;
                })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
                  return digit === QUESTION_MARK ? F : digit;
                })), 16);
                return { type: 30, start: start_1, end };
              }
              var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
              if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var endDigits = [];
                while (isHex(codePoint) && endDigits.length < 6) {
                  endDigits.push(codePoint);
                  codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return { type: 30, start, end };
              } else {
                return { type: 30, start, end: start };
              }
            };
            Tokenizer2.prototype.consumeIdentLikeToken = function() {
              var value = this.consumeName();
              if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return this.consumeUrlToken();
              } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return { type: 19, value };
              }
              return { type: 20, value };
            };
            Tokenizer2.prototype.consumeUrlToken = function() {
              var value = [];
              this.consumeWhiteSpace();
              if (this.peekCodePoint(0) === EOF) {
                return { type: 22, value: "" };
              }
              var next = this.peekCodePoint(0);
              if (next === APOSTROPHE || next === QUOTATION_MARK) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.type === 0) {
                  this.consumeWhiteSpace();
                  if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22, value: stringToken.value };
                  }
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
              }
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                  return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
                } else if (isWhiteSpace(codePoint)) {
                  this.consumeWhiteSpace();
                  if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                    this.consumeCodePoint();
                    return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
                  }
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                } else if (codePoint === REVERSE_SOLIDUS) {
                  if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    value.push(this.consumeEscapedCodePoint());
                  } else {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                  }
                } else {
                  value.push(codePoint);
                }
              }
            };
            Tokenizer2.prototype.consumeWhiteSpace = function() {
              while (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
              }
            };
            Tokenizer2.prototype.consumeBadUrlRemnants = function() {
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                  return;
                }
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  this.consumeEscapedCodePoint();
                }
              }
            };
            Tokenizer2.prototype.consumeStringSlice = function(count) {
              var SLICE_STACK_SIZE = 5e4;
              var value = "";
              while (count > 0) {
                var amount = Math.min(SLICE_STACK_SIZE, count);
                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                count -= amount;
              }
              this._value.shift();
              return value;
            };
            Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
              var value = "";
              var i2 = 0;
              do {
                var codePoint = this._value[i2];
                if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
                  value += this.consumeStringSlice(i2);
                  return { type: 0, value };
                }
                if (codePoint === LINE_FEED) {
                  this._value.splice(0, i2);
                  return BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                  var next = this._value[i2 + 1];
                  if (next !== EOF && next !== void 0) {
                    if (next === LINE_FEED) {
                      value += this.consumeStringSlice(i2);
                      i2 = -1;
                      this._value.shift();
                    } else if (isValidEscape(codePoint, next)) {
                      value += this.consumeStringSlice(i2);
                      value += fromCodePoint$1(this.consumeEscapedCodePoint());
                      i2 = -1;
                    }
                  }
                }
                i2++;
              } while (true);
            };
            Tokenizer2.prototype.consumeNumber = function() {
              var repr = [];
              var type = FLAG_INTEGER;
              var c1 = this.peekCodePoint(0);
              if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                repr.push(this.consumeCodePoint());
              }
              while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
              }
              c1 = this.peekCodePoint(0);
              var c2 = this.peekCodePoint(1);
              if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                  repr.push(this.consumeCodePoint());
                }
              }
              c1 = this.peekCodePoint(0);
              c2 = this.peekCodePoint(1);
              var c3 = this.peekCodePoint(2);
              if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                  repr.push(this.consumeCodePoint());
                }
              }
              return [stringToNumber(repr), type];
            };
            Tokenizer2.prototype.consumeNumericToken = function() {
              var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
              var c1 = this.peekCodePoint(0);
              var c2 = this.peekCodePoint(1);
              var c3 = this.peekCodePoint(2);
              if (isIdentifierStart(c1, c2, c3)) {
                var unit = this.consumeName();
                return { type: 15, number, flags, unit };
              }
              if (c1 === PERCENTAGE_SIGN) {
                this.consumeCodePoint();
                return { type: 16, number, flags };
              }
              return { type: 17, number, flags };
            };
            Tokenizer2.prototype.consumeEscapedCodePoint = function() {
              var codePoint = this.consumeCodePoint();
              if (isHex(codePoint)) {
                var hex = fromCodePoint$1(codePoint);
                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                  hex += fromCodePoint$1(this.consumeCodePoint());
                }
                if (isWhiteSpace(this.peekCodePoint(0))) {
                  this.consumeCodePoint();
                }
                var hexCodePoint = parseInt(hex, 16);
                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
                  return REPLACEMENT_CHARACTER;
                }
                return hexCodePoint;
              }
              if (codePoint === EOF) {
                return REPLACEMENT_CHARACTER;
              }
              return codePoint;
            };
            Tokenizer2.prototype.consumeName = function() {
              var result = "";
              while (true) {
                var codePoint = this.consumeCodePoint();
                if (isNameCodePoint(codePoint)) {
                  result += fromCodePoint$1(codePoint);
                } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  result += fromCodePoint$1(this.consumeEscapedCodePoint());
                } else {
                  this.reconsumeCodePoint(codePoint);
                  return result;
                }
              }
            };
            return Tokenizer2;
          }()
        );
        var Parser = (
          /** @class */
          function() {
            function Parser2(tokens) {
              this._tokens = tokens;
            }
            Parser2.create = function(value) {
              var tokenizer = new Tokenizer();
              tokenizer.write(value);
              return new Parser2(tokenizer.read());
            };
            Parser2.parseValue = function(value) {
              return Parser2.create(value).parseComponentValue();
            };
            Parser2.parseValues = function(value) {
              return Parser2.create(value).parseComponentValues();
            };
            Parser2.prototype.parseComponentValue = function() {
              var token = this.consumeToken();
              while (token.type === 31) {
                token = this.consumeToken();
              }
              if (token.type === 32) {
                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
              }
              this.reconsumeToken(token);
              var value = this.consumeComponentValue();
              do {
                token = this.consumeToken();
              } while (token.type === 31);
              if (token.type === 32) {
                return value;
              }
              throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
            };
            Parser2.prototype.parseComponentValues = function() {
              var values = [];
              while (true) {
                var value = this.consumeComponentValue();
                if (value.type === 32) {
                  return values;
                }
                values.push(value);
                values.push();
              }
            };
            Parser2.prototype.consumeComponentValue = function() {
              var token = this.consumeToken();
              switch (token.type) {
                case 11:
                case 28:
                case 2:
                  return this.consumeSimpleBlock(token.type);
                case 19:
                  return this.consumeFunction(token);
              }
              return token;
            };
            Parser2.prototype.consumeSimpleBlock = function(type) {
              var block = { type, values: [] };
              var token = this.consumeToken();
              while (true) {
                if (token.type === 32 || isEndingTokenFor(token, type)) {
                  return block;
                }
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
              }
            };
            Parser2.prototype.consumeFunction = function(functionToken) {
              var cssFunction = {
                name: functionToken.value,
                values: [],
                type: 18
                /* FUNCTION */
              };
              while (true) {
                var token = this.consumeToken();
                if (token.type === 32 || token.type === 3) {
                  return cssFunction;
                }
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
              }
            };
            Parser2.prototype.consumeToken = function() {
              var token = this._tokens.shift();
              return typeof token === "undefined" ? EOF_TOKEN : token;
            };
            Parser2.prototype.reconsumeToken = function(token) {
              this._tokens.unshift(token);
            };
            return Parser2;
          }()
        );
        var isDimensionToken = function(token) {
          return token.type === 15;
        };
        var isNumberToken = function(token) {
          return token.type === 17;
        };
        var isIdentToken = function(token) {
          return token.type === 20;
        };
        var isStringToken = function(token) {
          return token.type === 0;
        };
        var isIdentWithValue = function(token, value) {
          return isIdentToken(token) && token.value === value;
        };
        var nonWhiteSpace = function(token) {
          return token.type !== 31;
        };
        var nonFunctionArgSeparator = function(token) {
          return token.type !== 31 && token.type !== 4;
        };
        var parseFunctionArgs = function(tokens) {
          var args = [];
          var arg = [];
          tokens.forEach(function(token) {
            if (token.type === 4) {
              if (arg.length === 0) {
                throw new Error("Error parsing function args, zero tokens for arg");
              }
              args.push(arg);
              arg = [];
              return;
            }
            if (token.type !== 31) {
              arg.push(token);
            }
          });
          if (arg.length) {
            args.push(arg);
          }
          return args;
        };
        var isEndingTokenFor = function(token, type) {
          if (type === 11 && token.type === 12) {
            return true;
          }
          if (type === 28 && token.type === 29) {
            return true;
          }
          return type === 2 && token.type === 3;
        };
        var isLength = function(token) {
          return token.type === 17 || token.type === 15;
        };
        var isLengthPercentage = function(token) {
          return token.type === 16 || isLength(token);
        };
        var parseLengthPercentageTuple = function(tokens) {
          return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
        };
        var ZERO_LENGTH = {
          type: 17,
          number: 0,
          flags: FLAG_INTEGER
        };
        var FIFTY_PERCENT = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var HUNDRED_PERCENT = {
          type: 16,
          number: 100,
          flags: FLAG_INTEGER
        };
        var getAbsoluteValueForTuple = function(tuple, width, height) {
          var x = tuple[0], y = tuple[1];
          return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== "undefined" ? y : x, height)];
        };
        var getAbsoluteValue = function(token, parent) {
          if (token.type === 16) {
            return token.number / 100 * parent;
          }
          if (isDimensionToken(token)) {
            switch (token.unit) {
              case "rem":
              case "em":
                return 16 * token.number;
              case "px":
              default:
                return token.number;
            }
          }
          return token.number;
        };
        var DEG = "deg";
        var GRAD = "grad";
        var RAD = "rad";
        var TURN = "turn";
        var angle = {
          name: "angle",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit) {
                case DEG:
                  return Math.PI * value.number / 180;
                case GRAD:
                  return Math.PI / 200 * value.number;
                case RAD:
                  return value.number;
                case TURN:
                  return Math.PI * 2 * value.number;
              }
            }
            throw new Error("Unsupported angle type");
          }
        };
        var isAngle = function(value) {
          if (value.type === 15) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
              return true;
            }
          }
          return false;
        };
        var parseNamedSide = function(tokens) {
          var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
            return ident.value;
          }).join(" ");
          switch (sideOrCorner) {
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
              return [ZERO_LENGTH, ZERO_LENGTH];
            case "to top":
            case "bottom":
              return deg(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
              return [ZERO_LENGTH, HUNDRED_PERCENT];
            case "to right":
            case "left":
              return deg(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
              return [HUNDRED_PERCENT, HUNDRED_PERCENT];
            case "to bottom":
            case "top":
              return deg(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
              return [HUNDRED_PERCENT, ZERO_LENGTH];
            case "to left":
            case "right":
              return deg(270);
          }
          return 0;
        };
        var deg = function(deg2) {
          return Math.PI * deg2 / 180;
        };
        var color$1 = {
          name: "color",
          parse: function(context, value) {
            if (value.type === 18) {
              var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
              if (typeof colorFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
              }
              return colorFunction(context, value.values);
            }
            if (value.type === 5) {
              if (value.value.length === 3) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
              }
              if (value.value.length === 4) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                var a2 = value.value.substring(3, 4);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a2 + a2, 16) / 255);
              }
              if (value.value.length === 6) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
              }
              if (value.value.length === 8) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                var a2 = value.value.substring(6, 8);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a2, 16) / 255);
              }
            }
            if (value.type === 20) {
              var namedColor = COLORS[value.value.toUpperCase()];
              if (typeof namedColor !== "undefined") {
                return namedColor;
              }
            }
            return COLORS.TRANSPARENT;
          }
        };
        var isTransparent = function(color2) {
          return (255 & color2) === 0;
        };
        var asString = function(color2) {
          var alpha = 255 & color2;
          var blue = 255 & color2 >> 8;
          var green = 255 & color2 >> 16;
          var red = 255 & color2 >> 24;
          return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
        };
        var pack = function(r, g, b, a2) {
          return (r << 24 | g << 16 | b << 8 | Math.round(a2 * 255) << 0) >>> 0;
        };
        var getTokenColorValue = function(token, i2) {
          if (token.type === 17) {
            return token.number;
          }
          if (token.type === 16) {
            var max = i2 === 3 ? 1 : 255;
            return i2 === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
          }
          return 0;
        };
        var rgb = function(_context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
          }
          if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a2 = _b[3];
            return pack(r, g, b, a2);
          }
          return 0;
        };
        function hue2rgb(t1, t2, hue) {
          if (hue < 0) {
            hue += 1;
          }
          if (hue >= 1) {
            hue -= 1;
          }
          if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
          } else if (hue < 1 / 2) {
            return t2;
          } else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
          } else {
            return t1;
          }
        }
        var hsl = function(context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
          var h = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
          var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
          var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
          var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
          if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
          }
          var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          var t1 = l * 2 - t2;
          var r = hue2rgb(t1, t2, h + 1 / 3);
          var g = hue2rgb(t1, t2, h);
          var b = hue2rgb(t1, t2, h - 1 / 3);
          return pack(r * 255, g * 255, b * 255, a2);
        };
        var SUPPORTED_COLOR_FUNCTIONS = {
          hsl,
          hsla: hsl,
          rgb,
          rgba: rgb
        };
        var parseColor = function(context, value) {
          return color$1.parse(context, Parser.create(value).parseComponentValue());
        };
        var COLORS = {
          ALICEBLUE: 4042850303,
          ANTIQUEWHITE: 4209760255,
          AQUA: 16777215,
          AQUAMARINE: 2147472639,
          AZURE: 4043309055,
          BEIGE: 4126530815,
          BISQUE: 4293182719,
          BLACK: 255,
          BLANCHEDALMOND: 4293643775,
          BLUE: 65535,
          BLUEVIOLET: 2318131967,
          BROWN: 2771004159,
          BURLYWOOD: 3736635391,
          CADETBLUE: 1604231423,
          CHARTREUSE: 2147418367,
          CHOCOLATE: 3530104575,
          CORAL: 4286533887,
          CORNFLOWERBLUE: 1687547391,
          CORNSILK: 4294499583,
          CRIMSON: 3692313855,
          CYAN: 16777215,
          DARKBLUE: 35839,
          DARKCYAN: 9145343,
          DARKGOLDENROD: 3095837695,
          DARKGRAY: 2846468607,
          DARKGREEN: 6553855,
          DARKGREY: 2846468607,
          DARKKHAKI: 3182914559,
          DARKMAGENTA: 2332068863,
          DARKOLIVEGREEN: 1433087999,
          DARKORANGE: 4287365375,
          DARKORCHID: 2570243327,
          DARKRED: 2332033279,
          DARKSALMON: 3918953215,
          DARKSEAGREEN: 2411499519,
          DARKSLATEBLUE: 1211993087,
          DARKSLATEGRAY: 793726975,
          DARKSLATEGREY: 793726975,
          DARKTURQUOISE: 13554175,
          DARKVIOLET: 2483082239,
          DEEPPINK: 4279538687,
          DEEPSKYBLUE: 12582911,
          DIMGRAY: 1768516095,
          DIMGREY: 1768516095,
          DODGERBLUE: 512819199,
          FIREBRICK: 2988581631,
          FLORALWHITE: 4294635775,
          FORESTGREEN: 579543807,
          FUCHSIA: 4278255615,
          GAINSBORO: 3705462015,
          GHOSTWHITE: 4177068031,
          GOLD: 4292280575,
          GOLDENROD: 3668254975,
          GRAY: 2155905279,
          GREEN: 8388863,
          GREENYELLOW: 2919182335,
          GREY: 2155905279,
          HONEYDEW: 4043305215,
          HOTPINK: 4285117695,
          INDIANRED: 3445382399,
          INDIGO: 1258324735,
          IVORY: 4294963455,
          KHAKI: 4041641215,
          LAVENDER: 3873897215,
          LAVENDERBLUSH: 4293981695,
          LAWNGREEN: 2096890111,
          LEMONCHIFFON: 4294626815,
          LIGHTBLUE: 2916673279,
          LIGHTCORAL: 4034953471,
          LIGHTCYAN: 3774873599,
          LIGHTGOLDENRODYELLOW: 4210742015,
          LIGHTGRAY: 3553874943,
          LIGHTGREEN: 2431553791,
          LIGHTGREY: 3553874943,
          LIGHTPINK: 4290167295,
          LIGHTSALMON: 4288707327,
          LIGHTSEAGREEN: 548580095,
          LIGHTSKYBLUE: 2278488831,
          LIGHTSLATEGRAY: 2005441023,
          LIGHTSLATEGREY: 2005441023,
          LIGHTSTEELBLUE: 2965692159,
          LIGHTYELLOW: 4294959359,
          LIME: 16711935,
          LIMEGREEN: 852308735,
          LINEN: 4210091775,
          MAGENTA: 4278255615,
          MAROON: 2147483903,
          MEDIUMAQUAMARINE: 1724754687,
          MEDIUMBLUE: 52735,
          MEDIUMORCHID: 3126187007,
          MEDIUMPURPLE: 2473647103,
          MEDIUMSEAGREEN: 1018393087,
          MEDIUMSLATEBLUE: 2070474495,
          MEDIUMSPRINGGREEN: 16423679,
          MEDIUMTURQUOISE: 1221709055,
          MEDIUMVIOLETRED: 3340076543,
          MIDNIGHTBLUE: 421097727,
          MINTCREAM: 4127193855,
          MISTYROSE: 4293190143,
          MOCCASIN: 4293178879,
          NAVAJOWHITE: 4292783615,
          NAVY: 33023,
          OLDLACE: 4260751103,
          OLIVE: 2155872511,
          OLIVEDRAB: 1804477439,
          ORANGE: 4289003775,
          ORANGERED: 4282712319,
          ORCHID: 3664828159,
          PALEGOLDENROD: 4008225535,
          PALEGREEN: 2566625535,
          PALETURQUOISE: 2951671551,
          PALEVIOLETRED: 3681588223,
          PAPAYAWHIP: 4293907967,
          PEACHPUFF: 4292524543,
          PERU: 3448061951,
          PINK: 4290825215,
          PLUM: 3718307327,
          POWDERBLUE: 2967529215,
          PURPLE: 2147516671,
          REBECCAPURPLE: 1714657791,
          RED: 4278190335,
          ROSYBROWN: 3163525119,
          ROYALBLUE: 1097458175,
          SADDLEBROWN: 2336560127,
          SALMON: 4202722047,
          SANDYBROWN: 4104413439,
          SEAGREEN: 780883967,
          SEASHELL: 4294307583,
          SIENNA: 2689740287,
          SILVER: 3233857791,
          SKYBLUE: 2278484991,
          SLATEBLUE: 1784335871,
          SLATEGRAY: 1887473919,
          SLATEGREY: 1887473919,
          SNOW: 4294638335,
          SPRINGGREEN: 16744447,
          STEELBLUE: 1182971135,
          TAN: 3535047935,
          TEAL: 8421631,
          THISTLE: 3636451583,
          TOMATO: 4284696575,
          TRANSPARENT: 0,
          TURQUOISE: 1088475391,
          VIOLET: 4001558271,
          WHEAT: 4125012991,
          WHITE: 4294967295,
          WHITESMOKE: 4126537215,
          YELLOW: 4294902015,
          YELLOWGREEN: 2597139199
        };
        var backgroundClip = {
          name: "background-clip",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundColor = {
          name: "background-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var parseColorStop = function(context, args) {
          var color2 = color$1.parse(context, args[0]);
          var stop = args[1];
          return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
        };
        var processColorStops = function(stops, lineLength) {
          var first = stops[0];
          var last = stops[stops.length - 1];
          if (first.stop === null) {
            first.stop = ZERO_LENGTH;
          }
          if (last.stop === null) {
            last.stop = HUNDRED_PERCENT;
          }
          var processStops = [];
          var previous = 0;
          for (var i2 = 0; i2 < stops.length; i2++) {
            var stop_1 = stops[i2].stop;
            if (stop_1 !== null) {
              var absoluteValue = getAbsoluteValue(stop_1, lineLength);
              if (absoluteValue > previous) {
                processStops.push(absoluteValue);
              } else {
                processStops.push(previous);
              }
              previous = absoluteValue;
            } else {
              processStops.push(null);
            }
          }
          var gapBegin = null;
          for (var i2 = 0; i2 < processStops.length; i2++) {
            var stop_2 = processStops[i2];
            if (stop_2 === null) {
              if (gapBegin === null) {
                gapBegin = i2;
              }
            } else if (gapBegin !== null) {
              var gapLength = i2 - gapBegin;
              var beforeGap = processStops[gapBegin - 1];
              var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
              for (var g = 1; g <= gapLength; g++) {
                processStops[gapBegin + g - 1] = gapValue * g;
              }
              gapBegin = null;
            }
          }
          return stops.map(function(_a, i3) {
            var color2 = _a.color;
            return { color: color2, stop: Math.max(Math.min(1, processStops[i3] / lineLength), 0) };
          });
        };
        var getAngleFromCorner = function(corner, width, height) {
          var centerX = width / 2;
          var centerY = height / 2;
          var x = getAbsoluteValue(corner[0], width) - centerX;
          var y = centerY - getAbsoluteValue(corner[1], height);
          return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
        };
        var calculateGradientDirection = function(angle2, width, height) {
          var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
          var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
          var halfWidth = width / 2;
          var halfHeight = height / 2;
          var halfLineLength = lineLength / 2;
          var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
          var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
          return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
        };
        var distance = function(a2, b) {
          return Math.sqrt(a2 * a2 + b * b);
        };
        var findCorner = function(width, height, x, y, closest) {
          var corners = [
            [0, 0],
            [0, height],
            [width, 0],
            [width, height]
          ];
          return corners.reduce(function(stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
              return {
                optimumCorner: corner,
                optimumDistance: d
              };
            }
            return stat;
          }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
          }).optimumCorner;
        };
        var calculateRadius = function(gradient, x, y, width, height) {
          var rx = 0;
          var ry = 0;
          switch (gradient.size) {
            case 0:
              if (gradient.shape === 0) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.min(Math.abs(x), Math.abs(x - width));
                ry = Math.min(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 2:
              if (gradient.shape === 0) {
                rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
            case 1:
              if (gradient.shape === 0) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1) {
                rx = Math.max(Math.abs(x), Math.abs(x - width));
                ry = Math.max(Math.abs(y), Math.abs(y - height));
              }
              break;
            case 3:
              if (gradient.shape === 0) {
                rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1) {
                var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }
              break;
          }
          if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
          }
          return [rx, ry];
        };
        var linearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && firstToken.value === "to") {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = angle.parse(context, firstToken);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops,
            type: 1
            /* LINEAR_GRADIENT */
          };
        };
        var prefixLinearGradient = function(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            if (i2 === 0) {
              var firstToken = arg[0];
              if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                return;
              }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops,
            type: 1
            /* LINEAR_GRADIENT */
          };
        };
        var webkitGradient = function(context, tokens) {
          var angle2 = deg(180);
          var stops = [];
          var type = 1;
          var shape = 0;
          var size = 3;
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var firstToken = arg[0];
            if (i2 === 0) {
              if (isIdentToken(firstToken) && firstToken.value === "linear") {
                type = 1;
                return;
              } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
                type = 2;
                return;
              }
            }
            if (firstToken.type === 18) {
              if (firstToken.name === "from") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: ZERO_LENGTH, color: color2 });
              } else if (firstToken.name === "to") {
                var color2 = color$1.parse(context, firstToken.values[0]);
                stops.push({ stop: HUNDRED_PERCENT, color: color2 });
              } else if (firstToken.name === "color-stop") {
                var values = firstToken.values.filter(nonFunctionArgSeparator);
                if (values.length === 2) {
                  var color2 = color$1.parse(context, values[1]);
                  var stop_1 = values[0];
                  if (isNumberToken(stop_1)) {
                    stops.push({
                      stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
                      color: color2
                    });
                  }
                }
              }
            }
          });
          return type === 1 ? {
            angle: (angle2 + deg(180)) % deg(360),
            stops,
            type
          } : { size, shape, stops, position: position2, type };
        };
        var CLOSEST_SIDE = "closest-side";
        var FARTHEST_SIDE = "farthest-side";
        var CLOSEST_CORNER = "closest-corner";
        var FARTHEST_CORNER = "farthest-corner";
        var CIRCLE = "circle";
        var ELLIPSE = "ellipse";
        var COVER = "cover";
        var CONTAIN = "contain";
        var radialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              var isAtPosition_1 = false;
              isColorStop = arg.reduce(function(acc, token) {
                if (isAtPosition_1) {
                  if (isIdentToken(token)) {
                    switch (token.value) {
                      case "center":
                        position2.push(FIFTY_PERCENT);
                        return acc;
                      case "top":
                      case "left":
                        position2.push(ZERO_LENGTH);
                        return acc;
                      case "right":
                      case "bottom":
                        position2.push(HUNDRED_PERCENT);
                        return acc;
                    }
                  } else if (isLengthPercentage(token) || isLength(token)) {
                    position2.push(token);
                  }
                } else if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case "at":
                      isAtPosition_1 = true;
                      return false;
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case COVER:
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size,
            shape,
            stops,
            position: position2,
            type: 2
            /* RADIAL_GRADIENT */
          };
        };
        var prefixRadialGradient = function(context, tokens) {
          var shape = 0;
          var size = 3;
          var stops = [];
          var position2 = [];
          parseFunctionArgs(tokens).forEach(function(arg, i2) {
            var isColorStop = true;
            if (i2 === 0) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case "center":
                      position2.push(FIFTY_PERCENT);
                      return false;
                    case "top":
                    case "left":
                      position2.push(ZERO_LENGTH);
                      return false;
                    case "right":
                    case "bottom":
                      position2.push(HUNDRED_PERCENT);
                      return false;
                  }
                } else if (isLengthPercentage(token) || isLength(token)) {
                  position2.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            } else if (i2 === 1) {
              isColorStop = arg.reduce(function(acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0;
                      return false;
                    case ELLIPSE:
                      shape = 1;
                      return false;
                    case CONTAIN:
                    case CLOSEST_SIDE:
                      size = 0;
                      return false;
                    case FARTHEST_SIDE:
                      size = 1;
                      return false;
                    case CLOSEST_CORNER:
                      size = 2;
                      return false;
                    case COVER:
                    case FARTHEST_CORNER:
                      size = 3;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }
                  size.push(token);
                  return false;
                }
                return acc;
              }, isColorStop);
            }
            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size,
            shape,
            stops,
            position: position2,
            type: 2
            /* RADIAL_GRADIENT */
          };
        };
        var isLinearGradient = function(background) {
          return background.type === 1;
        };
        var isRadialGradient = function(background) {
          return background.type === 2;
        };
        var image = {
          name: "image",
          parse: function(context, value) {
            if (value.type === 22) {
              var image_1 = {
                url: value.value,
                type: 0
                /* URL */
              };
              context.cache.addImage(value.value);
              return image_1;
            }
            if (value.type === 18) {
              var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
              if (typeof imageFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
              }
              return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
          }
        };
        function isSupportedImage(value) {
          return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
        }
        var SUPPORTED_IMAGE_FUNCTIONS = {
          "linear-gradient": linearGradient,
          "-moz-linear-gradient": prefixLinearGradient,
          "-ms-linear-gradient": prefixLinearGradient,
          "-o-linear-gradient": prefixLinearGradient,
          "-webkit-linear-gradient": prefixLinearGradient,
          "radial-gradient": radialGradient,
          "-moz-radial-gradient": prefixRadialGradient,
          "-ms-radial-gradient": prefixRadialGradient,
          "-o-radial-gradient": prefixRadialGradient,
          "-webkit-radial-gradient": prefixRadialGradient,
          "-webkit-gradient": webkitGradient
        };
        var backgroundImage = {
          name: "background-image",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens.filter(function(value) {
              return nonFunctionArgSeparator(value) && isSupportedImage(value);
            }).map(function(value) {
              return image.parse(context, value);
            });
          }
        };
        var backgroundOrigin = {
          name: "background-origin",
          initialValue: "border-box",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.map(function(token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              }
              return 0;
            });
          }
        };
        var backgroundPosition = {
          name: "background-position",
          initialValue: "0% 0%",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isLengthPercentage);
            }).map(parseLengthPercentageTuple);
          }
        };
        var backgroundRepeat = {
          name: "background-repeat",
          initialValue: "repeat",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isIdentToken).map(function(token) {
                return token.value;
              }).join(" ");
            }).map(parseBackgroundRepeat);
          }
        };
        var parseBackgroundRepeat = function(value) {
          switch (value) {
            case "no-repeat":
              return 1;
            case "repeat-x":
            case "repeat no-repeat":
              return 2;
            case "repeat-y":
            case "no-repeat repeat":
              return 3;
            case "repeat":
            default:
              return 0;
          }
        };
        var BACKGROUND_SIZE;
        (function(BACKGROUND_SIZE2) {
          BACKGROUND_SIZE2["AUTO"] = "auto";
          BACKGROUND_SIZE2["CONTAIN"] = "contain";
          BACKGROUND_SIZE2["COVER"] = "cover";
        })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
        var backgroundSize = {
          name: "background-size",
          initialValue: "0",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return parseFunctionArgs(tokens).map(function(values) {
              return values.filter(isBackgroundSizeInfoToken);
            });
          }
        };
        var isBackgroundSizeInfoToken = function(value) {
          return isIdentToken(value) || isLengthPercentage(value);
        };
        var borderColorForSide = function(side) {
          return {
            name: "border-" + side + "-color",
            initialValue: "transparent",
            prefix: false,
            type: 3,
            format: "color"
          };
        };
        var borderTopColor = borderColorForSide("top");
        var borderRightColor = borderColorForSide("right");
        var borderBottomColor = borderColorForSide("bottom");
        var borderLeftColor = borderColorForSide("left");
        var borderRadiusForSide = function(side) {
          return {
            name: "border-radius-" + side,
            initialValue: "0 0",
            prefix: false,
            type: 1,
            parse: function(_context, tokens) {
              return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
            }
          };
        };
        var borderTopLeftRadius = borderRadiusForSide("top-left");
        var borderTopRightRadius = borderRadiusForSide("top-right");
        var borderBottomRightRadius = borderRadiusForSide("bottom-right");
        var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
        var borderStyleForSide = function(side) {
          return {
            name: "border-" + side + "-style",
            initialValue: "solid",
            prefix: false,
            type: 2,
            parse: function(_context, style) {
              switch (style) {
                case "none":
                  return 0;
                case "dashed":
                  return 2;
                case "dotted":
                  return 3;
                case "double":
                  return 4;
              }
              return 1;
            }
          };
        };
        var borderTopStyle = borderStyleForSide("top");
        var borderRightStyle = borderStyleForSide("right");
        var borderBottomStyle = borderStyleForSide("bottom");
        var borderLeftStyle = borderStyleForSide("left");
        var borderWidthForSide = function(side) {
          return {
            name: "border-" + side + "-width",
            initialValue: "0",
            type: 0,
            prefix: false,
            parse: function(_context, token) {
              if (isDimensionToken(token)) {
                return token.number;
              }
              return 0;
            }
          };
        };
        var borderTopWidth = borderWidthForSide("top");
        var borderRightWidth = borderWidthForSide("right");
        var borderBottomWidth = borderWidthForSide("bottom");
        var borderLeftWidth = borderWidthForSide("left");
        var color = {
          name: "color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var direction = {
          name: "direction",
          initialValue: "ltr",
          prefix: false,
          type: 2,
          parse: function(_context, direction2) {
            switch (direction2) {
              case "rtl":
                return 1;
              case "ltr":
              default:
                return 0;
            }
          }
        };
        var display = {
          name: "display",
          initialValue: "inline-block",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).reduce(
              function(bit, token) {
                return bit | parseDisplayValue(token.value);
              },
              0
              /* NONE */
            );
          }
        };
        var parseDisplayValue = function(display2) {
          switch (display2) {
            case "block":
            case "-webkit-box":
              return 2;
            case "inline":
              return 4;
            case "run-in":
              return 8;
            case "flow":
              return 16;
            case "flow-root":
              return 32;
            case "table":
              return 64;
            case "flex":
            case "-webkit-flex":
              return 128;
            case "grid":
            case "-ms-grid":
              return 256;
            case "ruby":
              return 512;
            case "subgrid":
              return 1024;
            case "list-item":
              return 2048;
            case "table-row-group":
              return 4096;
            case "table-header-group":
              return 8192;
            case "table-footer-group":
              return 16384;
            case "table-row":
              return 32768;
            case "table-cell":
              return 65536;
            case "table-column-group":
              return 131072;
            case "table-column":
              return 262144;
            case "table-caption":
              return 524288;
            case "ruby-base":
              return 1048576;
            case "ruby-text":
              return 2097152;
            case "ruby-base-container":
              return 4194304;
            case "ruby-text-container":
              return 8388608;
            case "contents":
              return 16777216;
            case "inline-block":
              return 33554432;
            case "inline-list-item":
              return 67108864;
            case "inline-table":
              return 134217728;
            case "inline-flex":
              return 268435456;
            case "inline-grid":
              return 536870912;
          }
          return 0;
        };
        var float = {
          name: "float",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, float2) {
            switch (float2) {
              case "left":
                return 1;
              case "right":
                return 2;
              case "inline-start":
                return 3;
              case "inline-end":
                return 4;
            }
            return 0;
          }
        };
        var letterSpacing = {
          name: "letter-spacing",
          initialValue: "0",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "normal") {
              return 0;
            }
            if (token.type === 17) {
              return token.number;
            }
            if (token.type === 15) {
              return token.number;
            }
            return 0;
          }
        };
        var LINE_BREAK;
        (function(LINE_BREAK2) {
          LINE_BREAK2["NORMAL"] = "normal";
          LINE_BREAK2["STRICT"] = "strict";
        })(LINE_BREAK || (LINE_BREAK = {}));
        var lineBreak = {
          name: "line-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, lineBreak2) {
            switch (lineBreak2) {
              case "strict":
                return LINE_BREAK.STRICT;
              case "normal":
              default:
                return LINE_BREAK.NORMAL;
            }
          }
        };
        var lineHeight = {
          name: "line-height",
          initialValue: "normal",
          prefix: false,
          type: 4
          /* TOKEN_VALUE */
        };
        var computeLineHeight = function(token, fontSize2) {
          if (isIdentToken(token) && token.value === "normal") {
            return 1.2 * fontSize2;
          } else if (token.type === 17) {
            return fontSize2 * token.number;
          } else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize2);
          }
          return fontSize2;
        };
        var listStyleImage = {
          name: "list-style-image",
          initialValue: "none",
          type: 0,
          prefix: false,
          parse: function(context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            return image.parse(context, token);
          }
        };
        var listStylePosition = {
          name: "list-style-position",
          initialValue: "outside",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "inside":
                return 0;
              case "outside":
              default:
                return 1;
            }
          }
        };
        var listStyleType = {
          name: "list-style-type",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, type) {
            switch (type) {
              case "disc":
                return 0;
              case "circle":
                return 1;
              case "square":
                return 2;
              case "decimal":
                return 3;
              case "cjk-decimal":
                return 4;
              case "decimal-leading-zero":
                return 5;
              case "lower-roman":
                return 6;
              case "upper-roman":
                return 7;
              case "lower-greek":
                return 8;
              case "lower-alpha":
                return 9;
              case "upper-alpha":
                return 10;
              case "arabic-indic":
                return 11;
              case "armenian":
                return 12;
              case "bengali":
                return 13;
              case "cambodian":
                return 14;
              case "cjk-earthly-branch":
                return 15;
              case "cjk-heavenly-stem":
                return 16;
              case "cjk-ideographic":
                return 17;
              case "devanagari":
                return 18;
              case "ethiopic-numeric":
                return 19;
              case "georgian":
                return 20;
              case "gujarati":
                return 21;
              case "gurmukhi":
                return 22;
              case "hebrew":
                return 22;
              case "hiragana":
                return 23;
              case "hiragana-iroha":
                return 24;
              case "japanese-formal":
                return 25;
              case "japanese-informal":
                return 26;
              case "kannada":
                return 27;
              case "katakana":
                return 28;
              case "katakana-iroha":
                return 29;
              case "khmer":
                return 30;
              case "korean-hangul-formal":
                return 31;
              case "korean-hanja-formal":
                return 32;
              case "korean-hanja-informal":
                return 33;
              case "lao":
                return 34;
              case "lower-armenian":
                return 35;
              case "malayalam":
                return 36;
              case "mongolian":
                return 37;
              case "myanmar":
                return 38;
              case "oriya":
                return 39;
              case "persian":
                return 40;
              case "simp-chinese-formal":
                return 41;
              case "simp-chinese-informal":
                return 42;
              case "tamil":
                return 43;
              case "telugu":
                return 44;
              case "thai":
                return 45;
              case "tibetan":
                return 46;
              case "trad-chinese-formal":
                return 47;
              case "trad-chinese-informal":
                return 48;
              case "upper-armenian":
                return 49;
              case "disclosure-open":
                return 50;
              case "disclosure-closed":
                return 51;
              case "none":
              default:
                return -1;
            }
          }
        };
        var marginForSide = function(side) {
          return {
            name: "margin-" + side,
            initialValue: "0",
            prefix: false,
            type: 4
            /* TOKEN_VALUE */
          };
        };
        var marginTop = marginForSide("top");
        var marginRight = marginForSide("right");
        var marginBottom = marginForSide("bottom");
        var marginLeft = marginForSide("left");
        var overflow = {
          name: "overflow",
          initialValue: "visible",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(overflow2) {
              switch (overflow2.value) {
                case "hidden":
                  return 1;
                case "scroll":
                  return 2;
                case "clip":
                  return 3;
                case "auto":
                  return 4;
                case "visible":
                default:
                  return 0;
              }
            });
          }
        };
        var overflowWrap = {
          name: "overflow-wrap",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "break-word":
                return "break-word";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var paddingForSide = function(side) {
          return {
            name: "padding-" + side,
            initialValue: "0",
            prefix: false,
            type: 3,
            format: "length-percentage"
          };
        };
        var paddingTop = paddingForSide("top");
        var paddingRight = paddingForSide("right");
        var paddingBottom = paddingForSide("bottom");
        var paddingLeft = paddingForSide("left");
        var textAlign = {
          name: "text-align",
          initialValue: "left",
          prefix: false,
          type: 2,
          parse: function(_context, textAlign2) {
            switch (textAlign2) {
              case "right":
                return 2;
              case "center":
              case "justify":
                return 1;
              case "left":
              default:
                return 0;
            }
          }
        };
        var position = {
          name: "position",
          initialValue: "static",
          prefix: false,
          type: 2,
          parse: function(_context, position2) {
            switch (position2) {
              case "relative":
                return 1;
              case "absolute":
                return 2;
              case "fixed":
                return 3;
              case "sticky":
                return 4;
            }
            return 0;
          }
        };
        var textShadow = {
          name: "text-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: COLORS.TRANSPARENT,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else {
                    shadow.blur = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var textTransform = {
          name: "text-transform",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, textTransform2) {
            switch (textTransform2) {
              case "uppercase":
                return 2;
              case "lowercase":
                return 1;
              case "capitalize":
                return 3;
            }
            return 0;
          }
        };
        var transform$1 = {
          name: "transform",
          initialValue: "none",
          prefix: true,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20 && token.value === "none") {
              return null;
            }
            if (token.type === 18) {
              var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
              if (typeof transformFunction === "undefined") {
                throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
              }
              return transformFunction(token.values);
            }
            return null;
          }
        };
        var matrix = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          return values.length === 6 ? values : null;
        };
        var matrix3d = function(args) {
          var values = args.filter(function(arg) {
            return arg.type === 17;
          }).map(function(arg) {
            return arg.number;
          });
          var a1 = values[0], b1 = values[1];
          values[2];
          values[3];
          var a2 = values[4], b2 = values[5];
          values[6];
          values[7];
          values[8];
          values[9];
          values[10];
          values[11];
          var a4 = values[12], b4 = values[13];
          values[14];
          values[15];
          return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
        };
        var SUPPORTED_TRANSFORM_FUNCTIONS = {
          matrix,
          matrix3d
        };
        var DEFAULT_VALUE = {
          type: 16,
          number: 50,
          flags: FLAG_INTEGER
        };
        var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
        var transformOrigin = {
          name: "transform-origin",
          initialValue: "50% 50%",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) {
              return DEFAULT;
            }
            return [origins[0], origins[1]];
          }
        };
        var visibility = {
          name: "visible",
          initialValue: "none",
          prefix: false,
          type: 2,
          parse: function(_context, visibility2) {
            switch (visibility2) {
              case "hidden":
                return 1;
              case "collapse":
                return 2;
              case "visible":
              default:
                return 0;
            }
          }
        };
        var WORD_BREAK;
        (function(WORD_BREAK2) {
          WORD_BREAK2["NORMAL"] = "normal";
          WORD_BREAK2["BREAK_ALL"] = "break-all";
          WORD_BREAK2["KEEP_ALL"] = "keep-all";
        })(WORD_BREAK || (WORD_BREAK = {}));
        var wordBreak = {
          name: "word-break",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, wordBreak2) {
            switch (wordBreak2) {
              case "break-all":
                return WORD_BREAK.BREAK_ALL;
              case "keep-all":
                return WORD_BREAK.KEEP_ALL;
              case "normal":
              default:
                return WORD_BREAK.NORMAL;
            }
          }
        };
        var zIndex = {
          name: "z-index",
          initialValue: "auto",
          prefix: false,
          type: 0,
          parse: function(_context, token) {
            if (token.type === 20) {
              return { auto: true, order: 0 };
            }
            if (isNumberToken(token)) {
              return { auto: false, order: token.number };
            }
            throw new Error("Invalid z-index number parsed");
          }
        };
        var time = {
          name: "time",
          parse: function(_context, value) {
            if (value.type === 15) {
              switch (value.unit.toLowerCase()) {
                case "s":
                  return 1e3 * value.number;
                case "ms":
                  return value.number;
              }
            }
            throw new Error("Unsupported time type");
          }
        };
        var opacity = {
          name: "opacity",
          initialValue: "1",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            return 1;
          }
        };
        var textDecorationColor = {
          name: "text-decoration-color",
          initialValue: "transparent",
          prefix: false,
          type: 3,
          format: "color"
        };
        var textDecorationLine = {
          name: "text-decoration-line",
          initialValue: "none",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              switch (token.value) {
                case "underline":
                  return 1;
                case "overline":
                  return 2;
                case "line-through":
                  return 3;
                case "none":
                  return 4;
              }
              return 0;
            }).filter(function(line) {
              return line !== 0;
            });
          }
        };
        var fontFamily = {
          name: "font-family",
          initialValue: "",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function(token) {
              switch (token.type) {
                case 20:
                case 0:
                  accumulator.push(token.value);
                  break;
                case 17:
                  accumulator.push(token.number.toString());
                  break;
                case 4:
                  results.push(accumulator.join(" "));
                  accumulator.length = 0;
                  break;
              }
            });
            if (accumulator.length) {
              results.push(accumulator.join(" "));
            }
            return results.map(function(result) {
              return result.indexOf(" ") === -1 ? result : "'" + result + "'";
            });
          }
        };
        var fontSize = {
          name: "font-size",
          initialValue: "0",
          prefix: false,
          type: 3,
          format: "length"
        };
        var fontWeight = {
          name: "font-weight",
          initialValue: "normal",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }
            if (isIdentToken(token)) {
              switch (token.value) {
                case "bold":
                  return 700;
                case "normal":
                default:
                  return 400;
              }
            }
            return 400;
          }
        };
        var fontVariant = {
          name: "font-variant",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            return tokens.filter(isIdentToken).map(function(token) {
              return token.value;
            });
          }
        };
        var fontStyle = {
          name: "font-style",
          initialValue: "normal",
          prefix: false,
          type: 2,
          parse: function(_context, overflow2) {
            switch (overflow2) {
              case "oblique":
                return "oblique";
              case "italic":
                return "italic";
              case "normal":
              default:
                return "normal";
            }
          }
        };
        var contains = function(bit, value) {
          return (bit & value) !== 0;
        };
        var content = {
          name: "content",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return [];
            }
            return tokens;
          }
        };
        var counterIncrement = {
          name: "counter-increment",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (counter.type === 20) {
                var increment = next && isNumberToken(next) ? next.number : 1;
                increments.push({ counter: counter.value, increment });
              }
            }
            return increments;
          }
        };
        var counterReset = {
          name: "counter-reset",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i2 = 0; i2 < filtered.length; i2++) {
              var counter = filtered[i2];
              var next = filtered[i2 + 1];
              if (isIdentToken(counter) && counter.value !== "none") {
                var reset = next && isNumberToken(next) ? next.number : 0;
                resets.push({ counter: counter.value, reset });
              }
            }
            return resets;
          }
        };
        var duration = {
          name: "duration",
          initialValue: "0s",
          prefix: false,
          type: 1,
          parse: function(context, tokens) {
            return tokens.filter(isDimensionToken).map(function(token) {
              return time.parse(context, token);
            });
          }
        };
        var quotes = {
          name: "quotes",
          initialValue: "none",
          prefix: true,
          type: 1,
          parse: function(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }
            var first = tokens[0];
            if (first.type === 20 && first.value === "none") {
              return null;
            }
            var quotes2 = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) {
              return null;
            }
            for (var i2 = 0; i2 < filtered.length; i2 += 2) {
              var open_1 = filtered[i2].value;
              var close_1 = filtered[i2 + 1].value;
              quotes2.push({ open: open_1, close: close_1 });
            }
            return quotes2;
          }
        };
        var getQuote = function(quotes2, depth, open) {
          if (!quotes2) {
            return "";
          }
          var quote = quotes2[Math.min(depth, quotes2.length - 1)];
          if (!quote) {
            return "";
          }
          return open ? quote.open : quote.close;
        };
        var boxShadow = {
          name: "box-shadow",
          initialValue: "none",
          type: 1,
          prefix: false,
          parse: function(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
              return [];
            }
            return parseFunctionArgs(tokens).map(function(values) {
              var shadow = {
                color: 255,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH,
                spread: ZERO_LENGTH,
                inset: false
              };
              var c = 0;
              for (var i2 = 0; i2 < values.length; i2++) {
                var token = values[i2];
                if (isIdentWithValue(token, "inset")) {
                  shadow.inset = true;
                } else if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else if (c === 2) {
                    shadow.blur = token;
                  } else {
                    shadow.spread = token;
                  }
                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }
              return shadow;
            });
          }
        };
        var paintOrder = {
          name: "paint-order",
          initialValue: "normal",
          prefix: false,
          type: 1,
          parse: function(_context, tokens) {
            var DEFAULT_VALUE2 = [
              0,
              1,
              2
              /* MARKERS */
            ];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function(token) {
              switch (token.value) {
                case "stroke":
                  layers.push(
                    1
                    /* STROKE */
                  );
                  break;
                case "fill":
                  layers.push(
                    0
                    /* FILL */
                  );
                  break;
                case "markers":
                  layers.push(
                    2
                    /* MARKERS */
                  );
                  break;
              }
            });
            DEFAULT_VALUE2.forEach(function(value) {
              if (layers.indexOf(value) === -1) {
                layers.push(value);
              }
            });
            return layers;
          }
        };
        var webkitTextStrokeColor = {
          name: "-webkit-text-stroke-color",
          initialValue: "currentcolor",
          prefix: false,
          type: 3,
          format: "color"
        };
        var webkitTextStrokeWidth = {
          name: "-webkit-text-stroke-width",
          initialValue: "0",
          type: 0,
          prefix: false,
          parse: function(_context, token) {
            if (isDimensionToken(token)) {
              return token.number;
            }
            return 0;
          }
        };
        var CSSParsedDeclaration = (
          /** @class */
          function() {
            function CSSParsedDeclaration2(context, declaration) {
              var _a, _b;
              this.animationDuration = parse(context, duration, declaration.animationDuration);
              this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
              this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
              this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
              this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
              this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
              this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
              this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
              this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
              this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
              this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
              this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
              this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
              this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
              this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
              this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
              this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
              this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
              this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
              this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
              this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
              this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
              this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
              this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
              this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
              this.color = parse(context, color, declaration.color);
              this.direction = parse(context, direction, declaration.direction);
              this.display = parse(context, display, declaration.display);
              this.float = parse(context, float, declaration.cssFloat);
              this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
              this.fontSize = parse(context, fontSize, declaration.fontSize);
              this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
              this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
              this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
              this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
              this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
              this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
              this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
              this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
              this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
              this.marginTop = parse(context, marginTop, declaration.marginTop);
              this.marginRight = parse(context, marginRight, declaration.marginRight);
              this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
              this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
              this.opacity = parse(context, opacity, declaration.opacity);
              var overflowTuple = parse(context, overflow, declaration.overflow);
              this.overflowX = overflowTuple[0];
              this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
              this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
              this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
              this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
              this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
              this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
              this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
              this.position = parse(context, position, declaration.position);
              this.textAlign = parse(context, textAlign, declaration.textAlign);
              this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
              this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
              this.textShadow = parse(context, textShadow, declaration.textShadow);
              this.textTransform = parse(context, textTransform, declaration.textTransform);
              this.transform = parse(context, transform$1, declaration.transform);
              this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
              this.visibility = parse(context, visibility, declaration.visibility);
              this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
              this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
              this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
              this.zIndex = parse(context, zIndex, declaration.zIndex);
            }
            CSSParsedDeclaration2.prototype.isVisible = function() {
              return this.display > 0 && this.opacity > 0 && this.visibility === 0;
            };
            CSSParsedDeclaration2.prototype.isTransparent = function() {
              return isTransparent(this.backgroundColor);
            };
            CSSParsedDeclaration2.prototype.isTransformed = function() {
              return this.transform !== null;
            };
            CSSParsedDeclaration2.prototype.isPositioned = function() {
              return this.position !== 0;
            };
            CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
              return this.isPositioned() && !this.zIndex.auto;
            };
            CSSParsedDeclaration2.prototype.isFloating = function() {
              return this.float !== 0;
            };
            CSSParsedDeclaration2.prototype.isInlineLevel = function() {
              return contains(
                this.display,
                4
                /* INLINE */
              ) || contains(
                this.display,
                33554432
                /* INLINE_BLOCK */
              ) || contains(
                this.display,
                268435456
                /* INLINE_FLEX */
              ) || contains(
                this.display,
                536870912
                /* INLINE_GRID */
              ) || contains(
                this.display,
                67108864
                /* INLINE_LIST_ITEM */
              ) || contains(
                this.display,
                134217728
                /* INLINE_TABLE */
              );
            };
            return CSSParsedDeclaration2;
          }()
        );
        var CSSParsedPseudoDeclaration = (
          /** @class */
          function() {
            function CSSParsedPseudoDeclaration2(context, declaration) {
              this.content = parse(context, content, declaration.content);
              this.quotes = parse(context, quotes, declaration.quotes);
            }
            return CSSParsedPseudoDeclaration2;
          }()
        );
        var CSSParsedCounterDeclaration = (
          /** @class */
          function() {
            function CSSParsedCounterDeclaration2(context, declaration) {
              this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
              this.counterReset = parse(context, counterReset, declaration.counterReset);
            }
            return CSSParsedCounterDeclaration2;
          }()
        );
        var parse = function(context, descriptor, style) {
          var tokenizer = new Tokenizer();
          var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
          tokenizer.write(value);
          var parser = new Parser(tokenizer.read());
          switch (descriptor.type) {
            case 2:
              var token = parser.parseComponentValue();
              return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0:
              return descriptor.parse(context, parser.parseComponentValue());
            case 1:
              return descriptor.parse(context, parser.parseComponentValues());
            case 4:
              return parser.parseComponentValue();
            case 3:
              switch (descriptor.format) {
                case "angle":
                  return angle.parse(context, parser.parseComponentValue());
                case "color":
                  return color$1.parse(context, parser.parseComponentValue());
                case "image":
                  return image.parse(context, parser.parseComponentValue());
                case "length":
                  var length_1 = parser.parseComponentValue();
                  return isLength(length_1) ? length_1 : ZERO_LENGTH;
                case "length-percentage":
                  var value_1 = parser.parseComponentValue();
                  return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                case "time":
                  return time.parse(context, parser.parseComponentValue());
              }
              break;
          }
        };
        var elementDebuggerAttribute = "data-html2canvas-debug";
        var getElementDebugType = function(element) {
          var attribute = element.getAttribute(elementDebuggerAttribute);
          switch (attribute) {
            case "all":
              return 1;
            case "clone":
              return 2;
            case "parse":
              return 3;
            case "render":
              return 4;
            default:
              return 0;
          }
        };
        var isDebugging = function(element, type) {
          var elementType = getElementDebugType(element);
          return elementType === 1 || type === elementType;
        };
        var ElementContainer = (
          /** @class */
          function() {
            function ElementContainer2(context, element) {
              this.context = context;
              this.textNodes = [];
              this.elements = [];
              this.flags = 0;
              if (isDebugging(
                element,
                3
                /* PARSE */
              )) {
                debugger;
              }
              this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
              if (isHTMLElementNode(element)) {
                if (this.styles.animationDuration.some(function(duration2) {
                  return duration2 > 0;
                })) {
                  element.style.animationDuration = "0s";
                }
                if (this.styles.transform !== null) {
                  element.style.transform = "none";
                }
              }
              this.bounds = parseBounds(this.context, element);
              if (isDebugging(
                element,
                4
                /* RENDER */
              )) {
                this.flags |= 16;
              }
            }
            return ElementContainer2;
          }()
        );
        var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
        var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
          lookup$1[chars$1.charCodeAt(i$1)] = i$1;
        }
        var decode = function(base642) {
          var bufferLength = base642.length * 0.75, len = base642.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
          if (base642[base642.length - 1] === "=") {
            bufferLength--;
            if (base642[base642.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
          for (i2 = 0; i2 < len; i2 += 4) {
            encoded1 = lookup$1[base642.charCodeAt(i2)];
            encoded2 = lookup$1[base642.charCodeAt(i2 + 1)];
            encoded3 = lookup$1[base642.charCodeAt(i2 + 2)];
            encoded4 = lookup$1[base642.charCodeAt(i2 + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        };
        var polyUint16Array = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 2) {
            bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var polyUint32Array = function(buffer) {
          var length = buffer.length;
          var bytes = [];
          for (var i2 = 0; i2 < length; i2 += 4) {
            bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
          }
          return bytes;
        };
        var UTRIE2_SHIFT_2 = 5;
        var UTRIE2_SHIFT_1 = 6 + 5;
        var UTRIE2_INDEX_SHIFT = 2;
        var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
        var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
        var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
        var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
        var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
        var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
        var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
        var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
        var slice16 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };
        var slice32 = function(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }
          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };
        var createTrieFromBase64 = function(base642, _byteLength) {
          var buffer = decode(base642);
          var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
        };
        var Trie = (
          /** @class */
          function() {
            function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
              this.initialValue = initialValue;
              this.errorValue = errorValue;
              this.highStart = highStart;
              this.highValueIndex = highValueIndex;
              this.index = index;
              this.data = data;
            }
            Trie2.prototype.get = function(codePoint) {
              var ix;
              if (codePoint >= 0) {
                if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
                  ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint <= 65535) {
                  ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint < this.highStart) {
                  ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                  ix = this.index[ix];
                  ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                  ix = this.index[ix];
                  ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                  return this.data[ix];
                }
                if (codePoint <= 1114111) {
                  return this.data[this.highValueIndex];
                }
              }
              return this.errorValue;
            };
            return Trie2;
          }()
        );
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
        for (var i = 0; i < chars.length; i++) {
          lookup[chars.charCodeAt(i)] = i;
        }
        var Prepend = 1;
        var CR = 2;
        var LF = 3;
        var Control = 4;
        var Extend = 5;
        var SpacingMark = 7;
        var L = 8;
        var V = 9;
        var T = 10;
        var LV = 11;
        var LVT = 12;
        var ZWJ = 13;
        var Extended_Pictographic = 14;
        var RI = 15;
        var toCodePoints = function(str) {
          var codePoints = [];
          var i2 = 0;
          var length = str.length;
          while (i2 < length) {
            var value = str.charCodeAt(i2++);
            if (value >= 55296 && value <= 56319 && i2 < length) {
              var extra = str.charCodeAt(i2++);
              if ((extra & 64512) === 56320) {
                codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                codePoints.push(value);
                i2--;
              }
            } else {
              codePoints.push(value);
            }
          }
          return codePoints;
        };
        var fromCodePoint = function() {
          var codePoints = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }
          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }
          var length = codePoints.length;
          if (!length) {
            return "";
          }
          var codeUnits = [];
          var index = -1;
          var result = "";
          while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
            }
            if (index + 1 === length || codeUnits.length > 16384) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
        var UnicodeTrie = createTrieFromBase64(base64);
        var BREAK_NOT_ALLOWED = "\xD7";
        var BREAK_ALLOWED = "\xF7";
        var codePointToClass = function(codePoint) {
          return UnicodeTrie.get(codePoint);
        };
        var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
          var prevIndex = index - 2;
          var prev = classTypes[prevIndex];
          var current = classTypes[index - 1];
          var next = classTypes[index];
          if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
          }
          if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
          }
          if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
          }
          if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
          }
          if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
          }
          if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
              prev = classTypes[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
              return BREAK_NOT_ALLOWED;
            }
          }
          if (current === RI && next === RI) {
            var countRI = 0;
            while (prev === RI) {
              countRI++;
              prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) {
              return BREAK_NOT_ALLOWED;
            }
          }
          return BREAK_ALLOWED;
        };
        var GraphemeBreaker = function(str) {
          var codePoints = toCodePoints(str);
          var length = codePoints.length;
          var index = 0;
          var lastEnd = 0;
          var classTypes = codePoints.map(codePointToClass);
          return {
            next: function() {
              if (index >= length) {
                return { done: true, value: null };
              }
              var graphemeBreak = BREAK_NOT_ALLOWED;
              while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
              }
              if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                lastEnd = index;
                return { value, done: false };
              }
              return { done: true, value: null };
            }
          };
        };
        var splitGraphemes = function(str) {
          var breaker = GraphemeBreaker(str);
          var graphemes = [];
          var bk;
          while (!(bk = breaker.next()).done) {
            if (bk.value) {
              graphemes.push(bk.value.slice());
            }
          }
          return graphemes;
        };
        var testRangeBounds = function(document2) {
          var TEST_HEIGHT = 123;
          if (document2.createRange) {
            var range = document2.createRange();
            if (range.getBoundingClientRect) {
              var testElement = document2.createElement("boundtest");
              testElement.style.height = TEST_HEIGHT + "px";
              testElement.style.display = "block";
              document2.body.appendChild(testElement);
              range.selectNode(testElement);
              var rangeBounds = range.getBoundingClientRect();
              var rangeHeight = Math.round(rangeBounds.height);
              document2.body.removeChild(testElement);
              if (rangeHeight === TEST_HEIGHT) {
                return true;
              }
            }
          }
          return false;
        };
        var testIOSLineBreak = function(document2) {
          var testElement = document2.createElement("boundtest");
          testElement.style.width = "50px";
          testElement.style.display = "block";
          testElement.style.fontSize = "12px";
          testElement.style.letterSpacing = "0px";
          testElement.style.wordSpacing = "0px";
          document2.body.appendChild(testElement);
          var range = document2.createRange();
          testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
          var node = testElement.firstChild;
          var textList = toCodePoints$1(node.data).map(function(i2) {
            return fromCodePoint$1(i2);
          });
          var offset = 0;
          var prev = {};
          var supports = textList.every(function(text, i2) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i2 === 0) {
              return true;
            }
            return boundAhead;
          });
          document2.body.removeChild(testElement);
          return supports;
        };
        var testCORS = function() {
          return typeof new Image().crossOrigin !== "undefined";
        };
        var testResponseType = function() {
          return typeof new XMLHttpRequest().responseType === "string";
        };
        var testSVG = function(document2) {
          var img = new Image();
          var canvas = document2.createElement("canvas");
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return false;
          }
          img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
          try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
          } catch (e2) {
            return false;
          }
          return true;
        };
        var isGreenPixel = function(data) {
          return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
        };
        var testForeignObject = function(document2) {
          var canvas = document2.createElement("canvas");
          var size = 100;
          canvas.width = size;
          canvas.height = size;
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return Promise.reject(false);
          }
          ctx.fillStyle = "rgb(0, 255, 0)";
          ctx.fillRect(0, 0, size, size);
          var img = new Image();
          var greenImageSrc = canvas.toDataURL();
          img.src = greenImageSrc;
          var svg = createForeignObjectSVG(size, size, 0, 0, img);
          ctx.fillStyle = "red";
          ctx.fillRect(0, 0, size, size);
          return loadSerializedSVG$1(svg).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, size, size);
            var node = document2.createElement("div");
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
          }).then(function(img2) {
            ctx.drawImage(img2, 0, 0);
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
          }).catch(function() {
            return false;
          });
        };
        var createForeignObjectSVG = function(width, height, x, y, node) {
          var xmlns = "http://www.w3.org/2000/svg";
          var svg = document.createElementNS(xmlns, "svg");
          var foreignObject = document.createElementNS(xmlns, "foreignObject");
          svg.setAttributeNS(null, "width", width.toString());
          svg.setAttributeNS(null, "height", height.toString());
          foreignObject.setAttributeNS(null, "width", "100%");
          foreignObject.setAttributeNS(null, "height", "100%");
          foreignObject.setAttributeNS(null, "x", x.toString());
          foreignObject.setAttributeNS(null, "y", y.toString());
          foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
          svg.appendChild(foreignObject);
          foreignObject.appendChild(node);
          return svg;
        };
        var loadSerializedSVG$1 = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              return resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var FEATURES = {
          get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
            return value;
          },
          get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
            return value;
          },
          get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
            return value;
          },
          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
            return value;
          },
          get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
            return value;
          },
          get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
            return value;
          },
          get SUPPORT_CORS_XHR() {
            var value = "withCredentials" in new XMLHttpRequest();
            Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
            return value;
          },
          get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
            Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
            return value;
          }
        };
        var TextBounds = (
          /** @class */
          function() {
            function TextBounds2(text, bounds) {
              this.text = text;
              this.bounds = bounds;
            }
            return TextBounds2;
          }()
        );
        var parseTextBounds = function(context, value, styles, node) {
          var textList = breakText(value, styles);
          var textBounds = [];
          var offset = 0;
          textList.forEach(function(text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
              if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                var clientRects = createRange(node, offset, text.length).getClientRects();
                if (clientRects.length > 1) {
                  var subSegments = segmentGraphemes(text);
                  var subOffset_1 = 0;
                  subSegments.forEach(function(subSegment) {
                    textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                    subOffset_1 += subSegment.length;
                  });
                } else {
                  textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                }
              } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                node = replacementNode;
              }
            } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
              node = node.splitText(text.length);
            }
            offset += text.length;
          });
          return textBounds;
        };
        var getWrapperBounds = function(context, node) {
          var ownerDocument = node.ownerDocument;
          if (ownerDocument) {
            var wrapper = ownerDocument.createElement("html2canvaswrapper");
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
              parentNode.replaceChild(wrapper, node);
              var bounds = parseBounds(context, wrapper);
              if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
              }
              return bounds;
            }
          }
          return Bounds.EMPTY;
        };
        var createRange = function(node, offset, length) {
          var ownerDocument = node.ownerDocument;
          if (!ownerDocument) {
            throw new Error("Node has no owner document");
          }
          var range = ownerDocument.createRange();
          range.setStart(node, offset);
          range.setEnd(node, offset + length);
          return range;
        };
        var segmentGraphemes = function(value) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return splitGraphemes(value);
        };
        var segmentWords = function(value, styles) {
          if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var segmenter = new Intl.Segmenter(void 0, {
              granularity: "word"
            });
            return Array.from(segmenter.segment(value)).map(function(segment) {
              return segment.segment;
            });
          }
          return breakWords(value, styles);
        };
        var breakText = function(value, styles) {
          return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
        };
        var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
        var breakWords = function(str, styles) {
          var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
          });
          var words = [];
          var bk;
          var _loop_1 = function() {
            if (bk.value) {
              var value = bk.value.slice();
              var codePoints = toCodePoints$1(value);
              var word_1 = "";
              codePoints.forEach(function(codePoint) {
                if (wordSeparators.indexOf(codePoint) === -1) {
                  word_1 += fromCodePoint$1(codePoint);
                } else {
                  if (word_1.length) {
                    words.push(word_1);
                  }
                  words.push(fromCodePoint$1(codePoint));
                  word_1 = "";
                }
              });
              if (word_1.length) {
                words.push(word_1);
              }
            }
          };
          while (!(bk = breaker.next()).done) {
            _loop_1();
          }
          return words;
        };
        var TextContainer = (
          /** @class */
          function() {
            function TextContainer2(context, node, styles) {
              this.text = transform(node.data, styles.textTransform);
              this.textBounds = parseTextBounds(context, this.text, styles, node);
            }
            return TextContainer2;
          }()
        );
        var transform = function(text, transform2) {
          switch (transform2) {
            case 1:
              return text.toLowerCase();
            case 3:
              return text.replace(CAPITALIZE, capitalize);
            case 2:
              return text.toUpperCase();
            default:
              return text;
          }
        };
        var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
        var capitalize = function(m, p1, p2) {
          if (m.length > 0) {
            return p1 + p2.toUpperCase();
          }
          return m;
        };
        var ImageElementContainer = (
          /** @class */
          function(_super) {
            __extends(ImageElementContainer2, _super);
            function ImageElementContainer2(context, img) {
              var _this = _super.call(this, context, img) || this;
              _this.src = img.currentSrc || img.src;
              _this.intrinsicWidth = img.naturalWidth;
              _this.intrinsicHeight = img.naturalHeight;
              _this.context.cache.addImage(_this.src);
              return _this;
            }
            return ImageElementContainer2;
          }(ElementContainer)
        );
        var CanvasElementContainer = (
          /** @class */
          function(_super) {
            __extends(CanvasElementContainer2, _super);
            function CanvasElementContainer2(context, canvas) {
              var _this = _super.call(this, context, canvas) || this;
              _this.canvas = canvas;
              _this.intrinsicWidth = canvas.width;
              _this.intrinsicHeight = canvas.height;
              return _this;
            }
            return CanvasElementContainer2;
          }(ElementContainer)
        );
        var SVGElementContainer = (
          /** @class */
          function(_super) {
            __extends(SVGElementContainer2, _super);
            function SVGElementContainer2(context, img) {
              var _this = _super.call(this, context, img) || this;
              var s = new XMLSerializer();
              var bounds = parseBounds(context, img);
              img.setAttribute("width", bounds.width + "px");
              img.setAttribute("height", bounds.height + "px");
              _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
              _this.intrinsicWidth = img.width.baseVal.value;
              _this.intrinsicHeight = img.height.baseVal.value;
              _this.context.cache.addImage(_this.svg);
              return _this;
            }
            return SVGElementContainer2;
          }(ElementContainer)
        );
        var LIElementContainer = (
          /** @class */
          function(_super) {
            __extends(LIElementContainer2, _super);
            function LIElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.value = element.value;
              return _this;
            }
            return LIElementContainer2;
          }(ElementContainer)
        );
        var OLElementContainer = (
          /** @class */
          function(_super) {
            __extends(OLElementContainer2, _super);
            function OLElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.start = element.start;
              _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
              return _this;
            }
            return OLElementContainer2;
          }(ElementContainer)
        );
        var CHECKBOX_BORDER_RADIUS = [
          {
            type: 15,
            flags: 0,
            unit: "px",
            number: 3
          }
        ];
        var RADIO_BORDER_RADIUS = [
          {
            type: 16,
            flags: 0,
            number: 50
          }
        ];
        var reformatInputBounds = function(bounds) {
          if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
          } else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
          }
          return bounds;
        };
        var getInputValue = function(node) {
          var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
          return value.length === 0 ? node.placeholder || "" : value;
        };
        var CHECKBOX = "checkbox";
        var RADIO = "radio";
        var PASSWORD = "password";
        var INPUT_COLOR = 707406591;
        var InputElementContainer = (
          /** @class */
          function(_super) {
            __extends(InputElementContainer2, _super);
            function InputElementContainer2(context, input) {
              var _this = _super.call(this, context, input) || this;
              _this.type = input.type.toLowerCase();
              _this.checked = input.checked;
              _this.value = getInputValue(input);
              if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 3739148031;
                _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
                _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
                _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
                _this.styles.backgroundClip = [
                  0
                  /* BORDER_BOX */
                ];
                _this.styles.backgroundOrigin = [
                  0
                  /* BORDER_BOX */
                ];
                _this.bounds = reformatInputBounds(_this.bounds);
              }
              switch (_this.type) {
                case CHECKBOX:
                  _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                  break;
                case RADIO:
                  _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
                  break;
              }
              return _this;
            }
            return InputElementContainer2;
          }(ElementContainer)
        );
        var SelectElementContainer = (
          /** @class */
          function(_super) {
            __extends(SelectElementContainer2, _super);
            function SelectElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              var option = element.options[element.selectedIndex || 0];
              _this.value = option ? option.text || "" : "";
              return _this;
            }
            return SelectElementContainer2;
          }(ElementContainer)
        );
        var TextareaElementContainer = (
          /** @class */
          function(_super) {
            __extends(TextareaElementContainer2, _super);
            function TextareaElementContainer2(context, element) {
              var _this = _super.call(this, context, element) || this;
              _this.value = element.value;
              return _this;
            }
            return TextareaElementContainer2;
          }(ElementContainer)
        );
        var IFrameElementContainer = (
          /** @class */
          function(_super) {
            __extends(IFrameElementContainer2, _super);
            function IFrameElementContainer2(context, iframe) {
              var _this = _super.call(this, context, iframe) || this;
              _this.src = iframe.src;
              _this.width = parseInt(iframe.width, 10) || 0;
              _this.height = parseInt(iframe.height, 10) || 0;
              _this.backgroundColor = _this.styles.backgroundColor;
              try {
                if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
                  _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                  var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                  var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
                  _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
                }
              } catch (e2) {
              }
              return _this;
            }
            return IFrameElementContainer2;
          }(ElementContainer)
        );
        var LIST_OWNERS = ["OL", "UL", "MENU"];
        var parseNodeTree = function(context, node, parent, root) {
          for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
              parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            } else if (isElementNode(childNode)) {
              if (isSlotElement(childNode) && childNode.assignedNodes) {
                childNode.assignedNodes().forEach(function(childNode2) {
                  return parseNodeTree(context, childNode2, parent, root);
                });
              } else {
                var container = createContainer(context, childNode);
                if (container.styles.isVisible()) {
                  if (createsRealStackingContext(childNode, container, root)) {
                    container.flags |= 4;
                  } else if (createsStackingContext(container.styles)) {
                    container.flags |= 2;
                  }
                  if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                    container.flags |= 8;
                  }
                  parent.elements.push(container);
                  childNode.slot;
                  if (childNode.shadowRoot) {
                    parseNodeTree(context, childNode.shadowRoot, container, root);
                  } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
                    parseNodeTree(context, childNode, container, root);
                  }
                }
              }
            }
          }
        };
        var createContainer = function(context, element) {
          if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
          }
          if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
          }
          if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
          }
          if (isLIElement(element)) {
            return new LIElementContainer(context, element);
          }
          if (isOLElement(element)) {
            return new OLElementContainer(context, element);
          }
          if (isInputElement(element)) {
            return new InputElementContainer(context, element);
          }
          if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
          }
          if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
          }
          if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
          }
          return new ElementContainer(context, element);
        };
        var parseTree = function(context, element) {
          var container = createContainer(context, element);
          container.flags |= 4;
          parseNodeTree(context, element, container, container);
          return container;
        };
        var createsRealStackingContext = function(node, container, root) {
          return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
        };
        var createsStackingContext = function(styles) {
          return styles.isPositioned() || styles.isFloating();
        };
        var isTextNode = function(node) {
          return node.nodeType === Node.TEXT_NODE;
        };
        var isElementNode = function(node) {
          return node.nodeType === Node.ELEMENT_NODE;
        };
        var isHTMLElementNode = function(node) {
          return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
        };
        var isSVGElementNode = function(element) {
          return typeof element.className === "object";
        };
        var isLIElement = function(node) {
          return node.tagName === "LI";
        };
        var isOLElement = function(node) {
          return node.tagName === "OL";
        };
        var isInputElement = function(node) {
          return node.tagName === "INPUT";
        };
        var isHTMLElement = function(node) {
          return node.tagName === "HTML";
        };
        var isSVGElement = function(node) {
          return node.tagName === "svg";
        };
        var isBodyElement = function(node) {
          return node.tagName === "BODY";
        };
        var isCanvasElement = function(node) {
          return node.tagName === "CANVAS";
        };
        var isVideoElement = function(node) {
          return node.tagName === "VIDEO";
        };
        var isImageElement = function(node) {
          return node.tagName === "IMG";
        };
        var isIFrameElement = function(node) {
          return node.tagName === "IFRAME";
        };
        var isStyleElement = function(node) {
          return node.tagName === "STYLE";
        };
        var isScriptElement = function(node) {
          return node.tagName === "SCRIPT";
        };
        var isTextareaElement = function(node) {
          return node.tagName === "TEXTAREA";
        };
        var isSelectElement = function(node) {
          return node.tagName === "SELECT";
        };
        var isSlotElement = function(node) {
          return node.tagName === "SLOT";
        };
        var isCustomElement = function(node) {
          return node.tagName.indexOf("-") > 0;
        };
        var CounterState = (
          /** @class */
          function() {
            function CounterState2() {
              this.counters = {};
            }
            CounterState2.prototype.getCounterValue = function(name) {
              var counter = this.counters[name];
              if (counter && counter.length) {
                return counter[counter.length - 1];
              }
              return 1;
            };
            CounterState2.prototype.getCounterValues = function(name) {
              var counter = this.counters[name];
              return counter ? counter : [];
            };
            CounterState2.prototype.pop = function(counters) {
              var _this = this;
              counters.forEach(function(counter) {
                return _this.counters[counter].pop();
              });
            };
            CounterState2.prototype.parse = function(style) {
              var _this = this;
              var counterIncrement2 = style.counterIncrement;
              var counterReset2 = style.counterReset;
              var canReset = true;
              if (counterIncrement2 !== null) {
                counterIncrement2.forEach(function(entry) {
                  var counter = _this.counters[entry.counter];
                  if (counter && entry.increment !== 0) {
                    canReset = false;
                    if (!counter.length) {
                      counter.push(1);
                    }
                    counter[Math.max(0, counter.length - 1)] += entry.increment;
                  }
                });
              }
              var counterNames = [];
              if (canReset) {
                counterReset2.forEach(function(entry) {
                  var counter = _this.counters[entry.counter];
                  counterNames.push(entry.counter);
                  if (!counter) {
                    counter = _this.counters[entry.counter] = [];
                  }
                  counter.push(entry.reset);
                });
              }
              return counterNames;
            };
            return CounterState2;
          }()
        );
        var ROMAN_UPPER = {
          integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        };
        var ARMENIAN = {
          integers: [
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u0554",
            "\u0553",
            "\u0552",
            "\u0551",
            "\u0550",
            "\u054F",
            "\u054E",
            "\u054D",
            "\u054C",
            "\u054B",
            "\u054A",
            "\u0549",
            "\u0548",
            "\u0547",
            "\u0546",
            "\u0545",
            "\u0544",
            "\u0543",
            "\u0542",
            "\u0541",
            "\u0540",
            "\u053F",
            "\u053E",
            "\u053D",
            "\u053C",
            "\u053B",
            "\u053A",
            "\u0539",
            "\u0538",
            "\u0537",
            "\u0536",
            "\u0535",
            "\u0534",
            "\u0533",
            "\u0532",
            "\u0531"
          ]
        };
        var HEBREW = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            19,
            18,
            17,
            16,
            15,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u05D9\u05F3",
            "\u05D8\u05F3",
            "\u05D7\u05F3",
            "\u05D6\u05F3",
            "\u05D5\u05F3",
            "\u05D4\u05F3",
            "\u05D3\u05F3",
            "\u05D2\u05F3",
            "\u05D1\u05F3",
            "\u05D0\u05F3",
            "\u05EA",
            "\u05E9",
            "\u05E8",
            "\u05E7",
            "\u05E6",
            "\u05E4",
            "\u05E2",
            "\u05E1",
            "\u05E0",
            "\u05DE",
            "\u05DC",
            "\u05DB",
            "\u05D9\u05D8",
            "\u05D9\u05D7",
            "\u05D9\u05D6",
            "\u05D8\u05D6",
            "\u05D8\u05D5",
            "\u05D9",
            "\u05D8",
            "\u05D7",
            "\u05D6",
            "\u05D5",
            "\u05D4",
            "\u05D3",
            "\u05D2",
            "\u05D1",
            "\u05D0"
          ]
        };
        var GEORGIAN = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            "\u10F5",
            "\u10F0",
            "\u10EF",
            "\u10F4",
            "\u10EE",
            "\u10ED",
            "\u10EC",
            "\u10EB",
            "\u10EA",
            "\u10E9",
            "\u10E8",
            "\u10E7",
            "\u10E6",
            "\u10E5",
            "\u10E4",
            "\u10F3",
            "\u10E2",
            "\u10E1",
            "\u10E0",
            "\u10DF",
            "\u10DE",
            "\u10DD",
            "\u10F2",
            "\u10DC",
            "\u10DB",
            "\u10DA",
            "\u10D9",
            "\u10D8",
            "\u10D7",
            "\u10F1",
            "\u10D6",
            "\u10D5",
            "\u10D4",
            "\u10D3",
            "\u10D2",
            "\u10D1",
            "\u10D0"
          ]
        };
        var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
          if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
          }
          return symbols.integers.reduce(function(string, integer, index) {
            while (value >= integer) {
              value -= integer;
              string += symbols.values[index];
            }
            return string;
          }, "") + suffix;
        };
        var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
          var string = "";
          do {
            if (!isNumeric) {
              value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
          } while (value * codePointRangeLength >= codePointRangeLength);
          return string;
        };
        var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
          var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
          return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
            return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
          }) + suffix);
        };
        var createCounterStyleFromSymbols = function(value, symbols, suffix) {
          if (suffix === void 0) {
            suffix = ". ";
          }
          var codePointRangeLength = symbols.length;
          return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
          }) + suffix;
        };
        var CJK_ZEROS = 1 << 0;
        var CJK_TEN_COEFFICIENTS = 1 << 1;
        var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
        var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
        var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
          if (value < -9999 || value > 9999) {
            return createCounterText(value, 4, suffix.length > 0);
          }
          var tmp = Math.abs(value);
          var string = suffix;
          if (tmp === 0) {
            return numbers[0] + string;
          }
          for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
              string = numbers[coefficient] + string;
            } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
              string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
            } else if (coefficient === 1 && digit > 0) {
              string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
          }
          return (value < 0 ? negativeSign : "") + string;
        };
        var CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C";
        var CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C";
        var JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9";
        var KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4";
        var createCounterText = function(value, type, appendSuffix) {
          var defaultSuffix = appendSuffix ? ". " : "";
          var cjkSuffix = appendSuffix ? "\u3001" : "";
          var koreanSuffix = appendSuffix ? ", " : "";
          var spaceSuffix = appendSuffix ? " " : "";
          switch (type) {
            case 0:
              return "\u2022" + spaceSuffix;
            case 1:
              return "\u25E6" + spaceSuffix;
            case 2:
              return "\u25FE" + spaceSuffix;
            case 5:
              var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
              return string.length < 4 ? "0" + string : string;
            case 4:
              return createCounterStyleFromSymbols(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", cjkSuffix);
            case 6:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
            case 7:
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
            case 8:
              return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9:
              return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10:
              return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11:
              return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12:
            case 49:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
            case 35:
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
            case 13:
              return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14:
            case 30:
              return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15:
              return createCounterStyleFromSymbols(value, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", cjkSuffix);
            case 16:
              return createCounterStyleFromSymbols(value, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", cjkSuffix);
            case 17:
            case 48:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41:
              return createCJKCounter(value, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26:
              return createCJKCounter(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25:
              return createCJKCounter(value, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31:
              return createCJKCounter(value, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33:
              return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32:
              return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18:
              return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
            case 20:
              return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
            case 21:
              return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
            case 22:
              return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
            case 22:
              return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
            case 23:
              return createCounterStyleFromSymbols(value, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
            case 24:
              return createCounterStyleFromSymbols(value, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
            case 27:
              return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
            case 28:
              return createCounterStyleFromSymbols(value, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", cjkSuffix);
            case 29:
              return createCounterStyleFromSymbols(value, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", cjkSuffix);
            case 34:
              return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
            case 37:
              return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
            case 38:
              return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
            case 39:
              return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
            case 40:
              return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
            case 43:
              return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
            case 44:
              return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
            case 45:
              return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
            case 46:
              return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
            case 3:
            default:
              return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
          }
        };
        var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
        var DocumentCloner = (
          /** @class */
          function() {
            function DocumentCloner2(context, element, options) {
              this.context = context;
              this.options = options;
              this.scrolledElements = [];
              this.referenceElement = element;
              this.counters = new CounterState();
              this.quoteDepth = 0;
              if (!element.ownerDocument) {
                throw new Error("Cloned element does not have an owner document");
              }
              this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
            }
            DocumentCloner2.prototype.toIFrame = function(ownerDocument, windowSize) {
              var _this = this;
              var iframe = createIFrameContainer(ownerDocument, windowSize);
              if (!iframe.contentWindow) {
                return Promise.reject("Unable to find iframe window");
              }
              var scrollX = ownerDocument.defaultView.pageXOffset;
              var scrollY = ownerDocument.defaultView.pageYOffset;
              var cloneWindow = iframe.contentWindow;
              var documentClone = cloneWindow.document;
              var iframeLoad = iframeLoader(iframe).then(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var onclone, referenceElement;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                      case 0:
                        this.scrolledElements.forEach(restoreNodeScroll);
                        if (cloneWindow) {
                          cloneWindow.scrollTo(windowSize.left, windowSize.top);
                          if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                            this.context.logger.warn("Unable to restore scroll position for cloned document");
                            this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                          }
                        }
                        onclone = this.options.onclone;
                        referenceElement = this.clonedReferenceElement;
                        if (typeof referenceElement === "undefined") {
                          return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                        }
                        if (!(documentClone.fonts && documentClone.fonts.ready))
                          return [3, 2];
                        return [4, documentClone.fonts.ready];
                      case 1:
                        _a.sent();
                        _a.label = 2;
                      case 2:
                        if (!/(AppleWebKit)/g.test(navigator.userAgent))
                          return [3, 4];
                        return [4, imagesReady(documentClone)];
                      case 3:
                        _a.sent();
                        _a.label = 4;
                      case 4:
                        if (typeof onclone === "function") {
                          return [2, Promise.resolve().then(function() {
                            return onclone(documentClone, referenceElement);
                          }).then(function() {
                            return iframe;
                          })];
                        }
                        return [2, iframe];
                    }
                  });
                });
              });
              documentClone.open();
              documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
              restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
              documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
              documentClone.close();
              return iframeLoad;
            };
            DocumentCloner2.prototype.createElementClone = function(node) {
              if (isDebugging(
                node,
                2
                /* CLONE */
              )) {
                debugger;
              }
              if (isCanvasElement(node)) {
                return this.createCanvasClone(node);
              }
              if (isVideoElement(node)) {
                return this.createVideoClone(node);
              }
              if (isStyleElement(node)) {
                return this.createStyleClone(node);
              }
              var clone = node.cloneNode(false);
              if (isImageElement(clone)) {
                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                  clone.src = node.currentSrc;
                  clone.srcset = "";
                }
                if (clone.loading === "lazy") {
                  clone.loading = "eager";
                }
              }
              if (isCustomElement(clone)) {
                return this.createCustomElementClone(clone);
              }
              return clone;
            };
            DocumentCloner2.prototype.createCustomElementClone = function(node) {
              var clone = document.createElement("html2canvascustomelement");
              copyCSSStyles(node.style, clone);
              return clone;
            };
            DocumentCloner2.prototype.createStyleClone = function(node) {
              try {
                var sheet = node.sheet;
                if (sheet && sheet.cssRules) {
                  var css = [].slice.call(sheet.cssRules, 0).reduce(function(css2, rule) {
                    if (rule && typeof rule.cssText === "string") {
                      return css2 + rule.cssText;
                    }
                    return css2;
                  }, "");
                  var style = node.cloneNode(false);
                  style.textContent = css;
                  return style;
                }
              } catch (e2) {
                this.context.logger.error("Unable to access cssRules property", e2);
                if (e2.name !== "SecurityError") {
                  throw e2;
                }
              }
              return node.cloneNode(false);
            };
            DocumentCloner2.prototype.createCanvasClone = function(canvas) {
              var _a;
              if (this.options.inlineImages && canvas.ownerDocument) {
                var img = canvas.ownerDocument.createElement("img");
                try {
                  img.src = canvas.toDataURL();
                  return img;
                } catch (e2) {
                  this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                }
              }
              var clonedCanvas = canvas.cloneNode(false);
              try {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext("2d");
                var clonedCtx = clonedCanvas.getContext("2d");
                if (clonedCtx) {
                  if (!this.options.allowTaint && ctx) {
                    clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                  } else {
                    var gl = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
                    if (gl) {
                      var attribs = gl.getContextAttributes();
                      if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                        this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
                      }
                    }
                    clonedCtx.drawImage(canvas, 0, 0);
                  }
                }
                return clonedCanvas;
              } catch (e2) {
                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
              }
              return clonedCanvas;
            };
            DocumentCloner2.prototype.createVideoClone = function(video) {
              var canvas = video.ownerDocument.createElement("canvas");
              canvas.width = video.offsetWidth;
              canvas.height = video.offsetHeight;
              var ctx = canvas.getContext("2d");
              try {
                if (ctx) {
                  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                  if (!this.options.allowTaint) {
                    ctx.getImageData(0, 0, canvas.width, canvas.height);
                  }
                }
                return canvas;
              } catch (e2) {
                this.context.logger.info("Unable to clone video as it is tainted", video);
              }
              var blankCanvas = video.ownerDocument.createElement("canvas");
              blankCanvas.width = video.offsetWidth;
              blankCanvas.height = video.offsetHeight;
              return blankCanvas;
            };
            DocumentCloner2.prototype.appendChildNode = function(clone, child, copyStyles) {
              if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                  clone.appendChild(this.cloneNode(child, copyStyles));
                }
              }
            };
            DocumentCloner2.prototype.cloneChildNodes = function(node, clone, copyStyles) {
              var _this = this;
              for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
                  var assignedNodes = child.assignedNodes();
                  if (assignedNodes.length) {
                    assignedNodes.forEach(function(assignedNode) {
                      return _this.appendChildNode(clone, assignedNode, copyStyles);
                    });
                  }
                } else {
                  this.appendChildNode(clone, child, copyStyles);
                }
              }
            };
            DocumentCloner2.prototype.cloneNode = function(node, copyStyles) {
              if (isTextNode(node)) {
                return document.createTextNode(node.data);
              }
              if (!node.ownerDocument) {
                return node.cloneNode(false);
              }
              var window2 = node.ownerDocument.defaultView;
              if (window2 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                var clone = this.createElementClone(node);
                clone.style.transitionProperty = "none";
                var style = window2.getComputedStyle(node);
                var styleBefore = window2.getComputedStyle(node, ":before");
                var styleAfter = window2.getComputedStyle(node, ":after");
                if (this.referenceElement === node && isHTMLElementNode(clone)) {
                  this.clonedReferenceElement = clone;
                }
                if (isBodyElement(clone)) {
                  createPseudoHideStyles(clone);
                }
                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (isCustomElement(node)) {
                  copyStyles = true;
                }
                if (!isVideoElement(node)) {
                  this.cloneChildNodes(node, clone, copyStyles);
                }
                if (before) {
                  clone.insertBefore(before, clone.firstChild);
                }
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                if (after) {
                  clone.appendChild(after);
                }
                this.counters.pop(counters);
                if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
                  copyCSSStyles(style, clone);
                }
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                  this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
                  clone.value = node.value;
                }
                return clone;
              }
              return node.cloneNode(false);
            };
            DocumentCloner2.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
              var _this = this;
              if (!style) {
                return;
              }
              var value = style.content;
              var document2 = clone.ownerDocument;
              if (!document2 || !value || value === "none" || value === "-moz-alt-content" || style.display === "none") {
                return;
              }
              this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
              var declaration = new CSSParsedPseudoDeclaration(this.context, style);
              var anonymousReplacedElement = document2.createElement("html2canvaspseudoelement");
              copyCSSStyles(style, anonymousReplacedElement);
              declaration.content.forEach(function(token) {
                if (token.type === 0) {
                  anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
                } else if (token.type === 22) {
                  var img = document2.createElement("img");
                  img.src = token.value;
                  img.style.opacity = "1";
                  anonymousReplacedElement.appendChild(img);
                } else if (token.type === 18) {
                  if (token.name === "attr") {
                    var attr = token.values.filter(isIdentToken);
                    if (attr.length) {
                      anonymousReplacedElement.appendChild(document2.createTextNode(node.getAttribute(attr[0].value) || ""));
                    }
                  } else if (token.name === "counter") {
                    var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                    if (counter && isIdentToken(counter)) {
                      var counterState = _this.counters.getCounterValue(counter.value);
                      var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                      anonymousReplacedElement.appendChild(document2.createTextNode(createCounterText(counterState, counterType, false)));
                    }
                  } else if (token.name === "counters") {
                    var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                    if (counter && isIdentToken(counter)) {
                      var counterStates = _this.counters.getCounterValues(counter.value);
                      var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
                      var separator = delim && delim.type === 0 ? delim.value : "";
                      var text = counterStates.map(function(value2) {
                        return createCounterText(value2, counterType_1, false);
                      }).join(separator);
                      anonymousReplacedElement.appendChild(document2.createTextNode(text));
                    }
                  } else
                    ;
                } else if (token.type === 20) {
                  switch (token.value) {
                    case "open-quote":
                      anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                      break;
                    case "close-quote":
                      anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                      break;
                    default:
                      anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
                  }
                }
              });
              anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
              var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
              if (isSVGElementNode(clone)) {
                clone.className.baseValue += newClassName;
              } else {
                clone.className += newClassName;
              }
              return anonymousReplacedElement;
            };
            DocumentCloner2.destroy = function(container) {
              if (container.parentNode) {
                container.parentNode.removeChild(container);
                return true;
              }
              return false;
            };
            return DocumentCloner2;
          }()
        );
        var PseudoElementType;
        (function(PseudoElementType2) {
          PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
          PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
        })(PseudoElementType || (PseudoElementType = {}));
        var createIFrameContainer = function(ownerDocument, bounds) {
          var cloneIframeContainer = ownerDocument.createElement("iframe");
          cloneIframeContainer.className = "html2canvas-container";
          cloneIframeContainer.style.visibility = "hidden";
          cloneIframeContainer.style.position = "fixed";
          cloneIframeContainer.style.left = "-10000px";
          cloneIframeContainer.style.top = "0px";
          cloneIframeContainer.style.border = "0";
          cloneIframeContainer.width = bounds.width.toString();
          cloneIframeContainer.height = bounds.height.toString();
          cloneIframeContainer.scrolling = "no";
          cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
          ownerDocument.body.appendChild(cloneIframeContainer);
          return cloneIframeContainer;
        };
        var imageReady = function(img) {
          return new Promise(function(resolve) {
            if (img.complete) {
              resolve();
              return;
            }
            if (!img.src) {
              resolve();
              return;
            }
            img.onload = resolve;
            img.onerror = resolve;
          });
        };
        var imagesReady = function(document2) {
          return Promise.all([].slice.call(document2.images, 0).map(imageReady));
        };
        var iframeLoader = function(iframe) {
          return new Promise(function(resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) {
              return reject("No window assigned for iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function() {
              cloneWindow.onload = iframe.onload = null;
              var interval = setInterval(function() {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
                  clearInterval(interval);
                  resolve(iframe);
                }
              }, 50);
            };
          });
        };
        var ignoredStyleProperties = [
          "all",
          "d",
          "content"
          // Safari shows pseudoelements if content is set
        ];
        var copyCSSStyles = function(style, target) {
          for (var i2 = style.length - 1; i2 >= 0; i2--) {
            var property = style.item(i2);
            if (ignoredStyleProperties.indexOf(property) === -1) {
              target.style.setProperty(property, style.getPropertyValue(property));
            }
          }
          return target;
        };
        var serializeDoctype = function(doctype) {
          var str = "";
          if (doctype) {
            str += "<!DOCTYPE ";
            if (doctype.name) {
              str += doctype.name;
            }
            if (doctype.internalSubset) {
              str += doctype.internalSubset;
            }
            if (doctype.publicId) {
              str += '"' + doctype.publicId + '"';
            }
            if (doctype.systemId) {
              str += '"' + doctype.systemId + '"';
            }
            str += ">";
          }
          return str;
        };
        var restoreOwnerScroll = function(ownerDocument, x, y) {
          if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
          }
        };
        var restoreNodeScroll = function(_a) {
          var element = _a[0], x = _a[1], y = _a[2];
          element.scrollLeft = x;
          element.scrollTop = y;
        };
        var PSEUDO_BEFORE = ":before";
        var PSEUDO_AFTER = ":after";
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
        var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
        var createPseudoHideStyles = function(body) {
          createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };
        var createStyles = function(body, styles) {
          var document2 = body.ownerDocument;
          if (document2) {
            var style = document2.createElement("style");
            style.textContent = styles;
            body.appendChild(style);
          }
        };
        var CacheStorage = (
          /** @class */
          function() {
            function CacheStorage2() {
            }
            CacheStorage2.getOrigin = function(url) {
              var link = CacheStorage2._link;
              if (!link) {
                return "about:blank";
              }
              link.href = url;
              link.href = link.href;
              return link.protocol + link.hostname + link.port;
            };
            CacheStorage2.isSameOrigin = function(src) {
              return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
            };
            CacheStorage2.setContext = function(window2) {
              CacheStorage2._link = window2.document.createElement("a");
              CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
            };
            CacheStorage2._origin = "about:blank";
            return CacheStorage2;
          }()
        );
        var Cache = (
          /** @class */
          function() {
            function Cache2(context, _options) {
              this.context = context;
              this._options = _options;
              this._cache = {};
            }
            Cache2.prototype.addImage = function(src) {
              var result = Promise.resolve();
              if (this.has(src)) {
                return result;
              }
              if (isBlobImage(src) || isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(function() {
                });
                return result;
              }
              return result;
            };
            Cache2.prototype.match = function(src) {
              return this._cache[src];
            };
            Cache2.prototype.loadImage = function(key) {
              return __awaiter(this, void 0, void 0, function() {
                var isSameOrigin, useCORS, useProxy, src;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      isSameOrigin = CacheStorage.isSameOrigin(key);
                      useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                      useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
                      if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                        return [
                          2
                          /*return*/
                        ];
                      }
                      src = key;
                      if (!useProxy)
                        return [3, 2];
                      return [4, this.proxy(src)];
                    case 1:
                      src = _a.sent();
                      _a.label = 2;
                    case 2:
                      this.context.logger.debug("Added image " + key.substring(0, 256));
                      return [4, new Promise(function(resolve, reject) {
                        var img = new Image();
                        img.onload = function() {
                          return resolve(img);
                        };
                        img.onerror = reject;
                        if (isInlineBase64Image(src) || useCORS) {
                          img.crossOrigin = "anonymous";
                        }
                        img.src = src;
                        if (img.complete === true) {
                          setTimeout(function() {
                            return resolve(img);
                          }, 500);
                        }
                        if (_this._options.imageTimeout > 0) {
                          setTimeout(function() {
                            return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                          }, _this._options.imageTimeout);
                        }
                      })];
                    case 3:
                      return [2, _a.sent()];
                  }
                });
              });
            };
            Cache2.prototype.has = function(key) {
              return typeof this._cache[key] !== "undefined";
            };
            Cache2.prototype.keys = function() {
              return Promise.resolve(Object.keys(this._cache));
            };
            Cache2.prototype.proxy = function(src) {
              var _this = this;
              var proxy = this._options.proxy;
              if (!proxy) {
                throw new Error("No proxy defined");
              }
              var key = src.substring(0, 256);
              return new Promise(function(resolve, reject) {
                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                  if (xhr.status === 200) {
                    if (responseType === "text") {
                      resolve(xhr.response);
                    } else {
                      var reader_1 = new FileReader();
                      reader_1.addEventListener("load", function() {
                        return resolve(reader_1.result);
                      }, false);
                      reader_1.addEventListener("error", function(e2) {
                        return reject(e2);
                      }, false);
                      reader_1.readAsDataURL(xhr.response);
                    }
                  } else {
                    reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                  }
                };
                xhr.onerror = reject;
                var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
                xhr.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== "text" && xhr instanceof XMLHttpRequest) {
                  xhr.responseType = responseType;
                }
                if (_this._options.imageTimeout) {
                  var timeout_1 = _this._options.imageTimeout;
                  xhr.timeout = timeout_1;
                  xhr.ontimeout = function() {
                    return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                  };
                }
                xhr.send();
              });
            };
            return Cache2;
          }()
        );
        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;
        var isRenderable = function(src) {
          return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
        };
        var isInlineImage = function(src) {
          return INLINE_IMG.test(src);
        };
        var isInlineBase64Image = function(src) {
          return INLINE_BASE64.test(src);
        };
        var isBlobImage = function(src) {
          return src.substr(0, 4) === "blob";
        };
        var isSVG = function(src) {
          return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
        };
        var Vector = (
          /** @class */
          function() {
            function Vector2(x, y) {
              this.type = 0;
              this.x = x;
              this.y = y;
            }
            Vector2.prototype.add = function(deltaX, deltaY) {
              return new Vector2(this.x + deltaX, this.y + deltaY);
            };
            return Vector2;
          }()
        );
        var lerp = function(a2, b, t) {
          return new Vector(a2.x + (b.x - a2.x) * t, a2.y + (b.y - a2.y) * t);
        };
        var BezierCurve = (
          /** @class */
          function() {
            function BezierCurve2(start, startControl, endControl, end) {
              this.type = 1;
              this.start = start;
              this.startControl = startControl;
              this.endControl = endControl;
              this.end = end;
            }
            BezierCurve2.prototype.subdivide = function(t, firstHalf) {
              var ab = lerp(this.start, this.startControl, t);
              var bc = lerp(this.startControl, this.endControl, t);
              var cd = lerp(this.endControl, this.end, t);
              var abbc = lerp(ab, bc, t);
              var bccd = lerp(bc, cd, t);
              var dest = lerp(abbc, bccd, t);
              return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd, this.end);
            };
            BezierCurve2.prototype.add = function(deltaX, deltaY) {
              return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
            };
            BezierCurve2.prototype.reverse = function() {
              return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
            };
            return BezierCurve2;
          }()
        );
        var isBezierCurve = function(path) {
          return path.type === 1;
        };
        var BoundCurves = (
          /** @class */
          function() {
            function BoundCurves2(element) {
              var styles = element.styles;
              var bounds = element.bounds;
              var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
              var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
              var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
              var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
              var factors = [];
              factors.push((tlh + trh) / bounds.width);
              factors.push((blh + brh) / bounds.width);
              factors.push((tlv + blv) / bounds.height);
              factors.push((trv + brv) / bounds.height);
              var maxFactor = Math.max.apply(Math, factors);
              if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
              }
              var topWidth = bounds.width - trh;
              var rightHeight = bounds.height - brv;
              var bottomWidth = bounds.width - brh;
              var leftHeight = bounds.height - blv;
              var borderTopWidth2 = styles.borderTopWidth;
              var borderRightWidth2 = styles.borderRightWidth;
              var borderBottomWidth2 = styles.borderBottomWidth;
              var borderLeftWidth2 = styles.borderLeftWidth;
              var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
              var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
              var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
              var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
              this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
              this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
              this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
              this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
              this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
              this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
              this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
              this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
              this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
              this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
              this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
              this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
              this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
              this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
              this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
              this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
              this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
              this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
              this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
              this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
              this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
              this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
              this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
              this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
            }
            return BoundCurves2;
          }()
        );
        var CORNER;
        (function(CORNER2) {
          CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
          CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
          CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
          CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
        })(CORNER || (CORNER = {}));
        var getCurvePoints = function(x, y, r1, r2, position2) {
          var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
          var ox = r1 * kappa;
          var oy = r2 * kappa;
          var xm = x + r1;
          var ym = y + r2;
          switch (position2) {
            case CORNER.TOP_LEFT:
              return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
              return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
              return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
              return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
          }
        };
        var calculateBorderBoxPath = function(curves) {
          return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
        };
        var calculateContentBoxPath = function(curves) {
          return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
          ];
        };
        var calculatePaddingBoxPath = function(curves) {
          return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
          ];
        };
        var TransformEffect = (
          /** @class */
          function() {
            function TransformEffect2(offsetX, offsetY, matrix2) {
              this.offsetX = offsetX;
              this.offsetY = offsetY;
              this.matrix = matrix2;
              this.type = 0;
              this.target = 2 | 4;
            }
            return TransformEffect2;
          }()
        );
        var ClipEffect = (
          /** @class */
          function() {
            function ClipEffect2(path, target) {
              this.path = path;
              this.target = target;
              this.type = 1;
            }
            return ClipEffect2;
          }()
        );
        var OpacityEffect = (
          /** @class */
          function() {
            function OpacityEffect2(opacity2) {
              this.opacity = opacity2;
              this.type = 2;
              this.target = 2 | 4;
            }
            return OpacityEffect2;
          }()
        );
        var isTransformEffect = function(effect) {
          return effect.type === 0;
        };
        var isClipEffect = function(effect) {
          return effect.type === 1;
        };
        var isOpacityEffect = function(effect) {
          return effect.type === 2;
        };
        var equalPath = function(a2, b) {
          if (a2.length === b.length) {
            return a2.some(function(v, i2) {
              return v === b[i2];
            });
          }
          return false;
        };
        var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
          return path.map(function(point, index) {
            switch (index) {
              case 0:
                return point.add(deltaX, deltaY);
              case 1:
                return point.add(deltaX + deltaW, deltaY);
              case 2:
                return point.add(deltaX + deltaW, deltaY + deltaH);
              case 3:
                return point.add(deltaX, deltaY + deltaH);
            }
            return point;
          });
        };
        var StackingContext = (
          /** @class */
          function() {
            function StackingContext2(container) {
              this.element = container;
              this.inlineLevel = [];
              this.nonInlineLevel = [];
              this.negativeZIndex = [];
              this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
              this.positiveZIndex = [];
              this.nonPositionedFloats = [];
              this.nonPositionedInlineLevel = [];
            }
            return StackingContext2;
          }()
        );
        var ElementPaint = (
          /** @class */
          function() {
            function ElementPaint2(container, parent) {
              this.container = container;
              this.parent = parent;
              this.effects = [];
              this.curves = new BoundCurves(this.container);
              if (this.container.styles.opacity < 1) {
                this.effects.push(new OpacityEffect(this.container.styles.opacity));
              }
              if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                var matrix2 = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
              }
              if (this.container.styles.overflowX !== 0) {
                var borderBox = calculateBorderBoxPath(this.curves);
                var paddingBox2 = calculatePaddingBoxPath(this.curves);
                if (equalPath(borderBox, paddingBox2)) {
                  this.effects.push(new ClipEffect(
                    borderBox,
                    2 | 4
                    /* CONTENT */
                  ));
                } else {
                  this.effects.push(new ClipEffect(
                    borderBox,
                    2
                    /* BACKGROUND_BORDERS */
                  ));
                  this.effects.push(new ClipEffect(
                    paddingBox2,
                    4
                    /* CONTENT */
                  ));
                }
              }
            }
            ElementPaint2.prototype.getEffects = function(target) {
              var inFlow = [
                2,
                3
                /* FIXED */
              ].indexOf(this.container.styles.position) === -1;
              var parent = this.parent;
              var effects = this.effects.slice(0);
              while (parent) {
                var croplessEffects = parent.effects.filter(function(effect) {
                  return !isClipEffect(effect);
                });
                if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
                  effects.unshift.apply(effects, croplessEffects);
                  inFlow = [
                    2,
                    3
                    /* FIXED */
                  ].indexOf(parent.container.styles.position) === -1;
                  if (parent.container.styles.overflowX !== 0) {
                    var borderBox = calculateBorderBoxPath(parent.curves);
                    var paddingBox2 = calculatePaddingBoxPath(parent.curves);
                    if (!equalPath(borderBox, paddingBox2)) {
                      effects.unshift(new ClipEffect(
                        paddingBox2,
                        2 | 4
                        /* CONTENT */
                      ));
                    }
                  }
                } else {
                  effects.unshift.apply(effects, croplessEffects);
                }
                parent = parent.parent;
              }
              return effects.filter(function(effect) {
                return contains(effect.target, target);
              });
            };
            return ElementPaint2;
          }()
        );
        var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
          parent.container.elements.forEach(function(child) {
            var treatAsRealStackingContext = contains(
              child.flags,
              4
              /* CREATES_REAL_STACKING_CONTEXT */
            );
            var createsStackingContext2 = contains(
              child.flags,
              2
              /* CREATES_STACKING_CONTEXT */
            );
            var paintContainer = new ElementPaint(child, parent);
            if (contains(
              child.styles.display,
              2048
              /* LIST_ITEM */
            )) {
              listItems.push(paintContainer);
            }
            var listOwnerItems = contains(
              child.flags,
              8
              /* IS_LIST_OWNER */
            ) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext2) {
              var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
              var stack = new StackingContext(paintContainer);
              if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                var order_1 = child.styles.zIndex.order;
                if (order_1 < 0) {
                  var index_1 = 0;
                  parentStack.negativeZIndex.some(function(current, i2) {
                    if (order_1 > current.element.container.styles.zIndex.order) {
                      index_1 = i2;
                      return false;
                    } else if (index_1 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.negativeZIndex.splice(index_1, 0, stack);
                } else if (order_1 > 0) {
                  var index_2 = 0;
                  parentStack.positiveZIndex.some(function(current, i2) {
                    if (order_1 >= current.element.container.styles.zIndex.order) {
                      index_2 = i2 + 1;
                      return false;
                    } else if (index_2 > 0) {
                      return true;
                    }
                    return false;
                  });
                  parentStack.positiveZIndex.splice(index_2, 0, stack);
                } else {
                  parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                }
              } else {
                if (child.styles.isFloating()) {
                  parentStack.nonPositionedFloats.push(stack);
                } else {
                  parentStack.nonPositionedInlineLevel.push(stack);
                }
              }
              parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            } else {
              if (child.styles.isInlineLevel()) {
                stackingContext.inlineLevel.push(paintContainer);
              } else {
                stackingContext.nonInlineLevel.push(paintContainer);
              }
              parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(
              child.flags,
              8
              /* IS_LIST_OWNER */
            )) {
              processListItems(child, listOwnerItems);
            }
          });
        };
        var processListItems = function(owner, elements) {
          var numbering = owner instanceof OLElementContainer ? owner.start : 1;
          var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
          for (var i2 = 0; i2 < elements.length; i2++) {
            var item = elements[i2];
            if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
              numbering = item.container.value;
            }
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
          }
        };
        var parseStackingContexts = function(container) {
          var paintContainer = new ElementPaint(container, null);
          var root = new StackingContext(paintContainer);
          var listItems = [];
          parseStackTree(paintContainer, root, root, listItems);
          processListItems(paintContainer.container, listItems);
          return root;
        };
        var parsePathForBorder = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderDoubleOuter = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
          }
        };
        var parsePathForBorderDoubleInner = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
              return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
              return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
          }
        };
        var parsePathForBorderStroke = function(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
              return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
              return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
              return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
          }
        };
        var createStrokePathFromCurves = function(outer1, outer2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          return path;
        };
        var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
          var path = [];
          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }
          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }
          if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
          } else {
            path.push(inner2);
          }
          if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
          } else {
            path.push(inner1);
          }
          return path;
        };
        var paddingBox = function(element) {
          var bounds = element.bounds;
          var styles = element.styles;
          return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
        };
        var contentBox = function(element) {
          var styles = element.styles;
          var bounds = element.bounds;
          var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
          var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
          var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
          var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
          return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
        };
        var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
          if (backgroundOrigin2 === 0) {
            return element.bounds;
          }
          if (backgroundOrigin2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
          if (backgroundClip2 === 0) {
            return element.bounds;
          }
          if (backgroundClip2 === 2) {
            return contentBox(element);
          }
          return paddingBox(element);
        };
        var calculateBackgroundRendering = function(container, index, intrinsicSize) {
          var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
          var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
          var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
          var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
          var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
          var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
          var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
          var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
          return [path, offsetX, offsetY, sizeWidth, sizeHeight];
        };
        var isAuto = function(token) {
          return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
        };
        var hasIntrinsicValue = function(value) {
          return typeof value === "number";
        };
        var calculateBackgroundSize = function(size, _a, bounds) {
          var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
          var first = size[0], second = size[1];
          if (!first) {
            return [0, 0];
          }
          if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
          }
          var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
          if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
              var targetRatio = bounds.width / bounds.height;
              return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
            }
            return [bounds.width, bounds.height];
          }
          var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
          var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
          var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
          if (isAuto(first) && (!second || isAuto(second))) {
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
              return [intrinsicWidth, intrinsicHeight];
            }
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
              return [bounds.width, bounds.height];
            }
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
              var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
              var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
              return [width_1, height_1];
            }
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
          }
          if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) {
              width_3 = getAbsoluteValue(first, bounds.width);
            } else if (isLengthPercentage(second)) {
              height_3 = getAbsoluteValue(second, bounds.height);
            }
            if (isAuto(first)) {
              width_3 = height_3 * intrinsicProportion;
            } else if (!second || isAuto(second)) {
              height_3 = width_3 / intrinsicProportion;
            }
            return [width_3, height_3];
          }
          var width = null;
          var height = null;
          if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
          } else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
          }
          if (width !== null && (!second || isAuto(second))) {
            height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
          }
          if (height !== null && isAuto(first)) {
            width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
          }
          if (width !== null && height !== null) {
            return [width, height];
          }
          throw new Error("Unable to calculate background-size for element");
        };
        var getBackgroundValueForIndex = function(values, index) {
          var value = values[index];
          if (typeof value === "undefined") {
            return values[0];
          }
          return value;
        };
        var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
          var x = _a[0], y = _a[1];
          var width = _b[0], height = _b[1];
          switch (repeat) {
            case 2:
              return [
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
              ];
            case 3:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
              ];
            case 1:
              return [
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
              ];
            default:
              return [
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
              ];
          }
        };
        var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        var SAMPLE_TEXT = "Hidden Text";
        var FontMetrics = (
          /** @class */
          function() {
            function FontMetrics2(document2) {
              this._data = {};
              this._document = document2;
            }
            FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
              var container = this._document.createElement("div");
              var img = this._document.createElement("img");
              var span = this._document.createElement("span");
              var body = this._document.body;
              container.style.visibility = "hidden";
              container.style.fontFamily = fontFamily2;
              container.style.fontSize = fontSize2;
              container.style.margin = "0";
              container.style.padding = "0";
              container.style.whiteSpace = "nowrap";
              body.appendChild(container);
              img.src = SMALL_IMAGE;
              img.width = 1;
              img.height = 1;
              img.style.margin = "0";
              img.style.padding = "0";
              img.style.verticalAlign = "baseline";
              span.style.fontFamily = fontFamily2;
              span.style.fontSize = fontSize2;
              span.style.margin = "0";
              span.style.padding = "0";
              span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
              container.appendChild(span);
              container.appendChild(img);
              var baseline = img.offsetTop - span.offsetTop + 2;
              container.removeChild(span);
              container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
              container.style.lineHeight = "normal";
              img.style.verticalAlign = "super";
              var middle = img.offsetTop - container.offsetTop + 2;
              body.removeChild(container);
              return { baseline, middle };
            };
            FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
              var key = fontFamily2 + " " + fontSize2;
              if (typeof this._data[key] === "undefined") {
                this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
              }
              return this._data[key];
            };
            return FontMetrics2;
          }()
        );
        var Renderer = (
          /** @class */
          function() {
            function Renderer2(context, options) {
              this.context = context;
              this.options = options;
            }
            return Renderer2;
          }()
        );
        var MASK_OFFSET = 1e4;
        var CanvasRenderer = (
          /** @class */
          function(_super) {
            __extends(CanvasRenderer2, _super);
            function CanvasRenderer2(context, options) {
              var _this = _super.call(this, context, options) || this;
              _this._activeEffects = [];
              _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
              _this.ctx = _this.canvas.getContext("2d");
              if (!options.canvas) {
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
              }
              _this.fontMetrics = new FontMetrics(document);
              _this.ctx.scale(_this.options.scale, _this.options.scale);
              _this.ctx.translate(-options.x, -options.y);
              _this.ctx.textBaseline = "bottom";
              _this._activeEffects = [];
              _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
              return _this;
            }
            CanvasRenderer2.prototype.applyEffects = function(effects) {
              var _this = this;
              while (this._activeEffects.length) {
                this.popEffect();
              }
              effects.forEach(function(effect) {
                return _this.applyEffect(effect);
              });
            };
            CanvasRenderer2.prototype.applyEffect = function(effect) {
              this.ctx.save();
              if (isOpacityEffect(effect)) {
                this.ctx.globalAlpha = effect.opacity;
              }
              if (isTransformEffect(effect)) {
                this.ctx.translate(effect.offsetX, effect.offsetY);
                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
              }
              if (isClipEffect(effect)) {
                this.path(effect.path);
                this.ctx.clip();
              }
              this._activeEffects.push(effect);
            };
            CanvasRenderer2.prototype.popEffect = function() {
              this._activeEffects.pop();
              this.ctx.restore();
            };
            CanvasRenderer2.prototype.renderStack = function(stack) {
              return __awaiter(this, void 0, void 0, function() {
                var styles;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      styles = stack.element.container.styles;
                      if (!styles.isVisible())
                        return [3, 2];
                      return [4, this.renderStackContent(stack)];
                    case 1:
                      _a.sent();
                      _a.label = 2;
                    case 2:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderNode = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (contains(
                        paint.container.flags,
                        16
                        /* DEBUG_RENDER */
                      )) {
                        debugger;
                      }
                      if (!paint.container.styles.isVisible())
                        return [3, 3];
                      return [4, this.renderNodeBackgroundAndBorders(paint)];
                    case 1:
                      _a.sent();
                      return [4, this.renderNodeContent(paint)];
                    case 2:
                      _a.sent();
                      _a.label = 3;
                    case 3:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderTextWithLetterSpacing = function(text, letterSpacing2, baseline) {
              var _this = this;
              if (letterSpacing2 === 0) {
                this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
              } else {
                var letters = segmentGraphemes(text.text);
                letters.reduce(function(left, letter) {
                  _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                  return left + _this.ctx.measureText(letter).width;
                }, text.bounds.left);
              }
            };
            CanvasRenderer2.prototype.createFontStyle = function(styles) {
              var fontVariant2 = styles.fontVariant.filter(function(variant) {
                return variant === "normal" || variant === "small-caps";
              }).join("");
              var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
              var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
              return [
                [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
                fontFamily2,
                fontSize2
              ];
            };
            CanvasRenderer2.prototype.renderTextNode = function(text, styles) {
              return __awaiter(this, void 0, void 0, function() {
                var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
                var _this = this;
                return __generator(this, function(_c) {
                  _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
                  this.ctx.font = font;
                  this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
                  this.ctx.textAlign = "left";
                  this.ctx.textBaseline = "alphabetic";
                  _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
                  paintOrder2 = styles.paintOrder;
                  text.textBounds.forEach(function(text2) {
                    paintOrder2.forEach(function(paintOrderLayer) {
                      switch (paintOrderLayer) {
                        case 0:
                          _this.ctx.fillStyle = asString(styles.color);
                          _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                          var textShadows = styles.textShadow;
                          if (textShadows.length && text2.text.trim().length) {
                            textShadows.slice(0).reverse().forEach(function(textShadow2) {
                              _this.ctx.shadowColor = asString(textShadow2.color);
                              _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                              _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                              _this.ctx.shadowBlur = textShadow2.blur.number;
                              _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                            });
                            _this.ctx.shadowColor = "";
                            _this.ctx.shadowOffsetX = 0;
                            _this.ctx.shadowOffsetY = 0;
                            _this.ctx.shadowBlur = 0;
                          }
                          if (styles.textDecorationLine.length) {
                            _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                            styles.textDecorationLine.forEach(function(textDecorationLine2) {
                              switch (textDecorationLine2) {
                                case 1:
                                  _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top + baseline), text2.bounds.width, 1);
                                  break;
                                case 2:
                                  _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top), text2.bounds.width, 1);
                                  break;
                                case 3:
                                  _this.ctx.fillRect(text2.bounds.left, Math.ceil(text2.bounds.top + middle), text2.bounds.width, 1);
                                  break;
                              }
                            });
                          }
                          break;
                        case 1:
                          if (styles.webkitTextStrokeWidth && text2.text.trim().length) {
                            _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                            _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                            _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                            _this.ctx.strokeText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
                          }
                          _this.ctx.strokeStyle = "";
                          _this.ctx.lineWidth = 0;
                          _this.ctx.lineJoin = "miter";
                          break;
                      }
                    });
                  });
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.renderReplacedElement = function(container, curves, image2) {
              if (image2 && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box = contentBox(container);
                var path = calculatePaddingBoxPath(curves);
                this.path(path);
                this.ctx.save();
                this.ctx.clip();
                this.ctx.drawImage(image2, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                this.ctx.restore();
              }
            };
            CanvasRenderer2.prototype.renderNodeContent = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                var container, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x, textBounds, img, image2, url, fontFamily2, bounds;
                return __generator(this, function(_c) {
                  switch (_c.label) {
                    case 0:
                      this.applyEffects(paint.getEffects(
                        4
                        /* CONTENT */
                      ));
                      container = paint.container;
                      curves = paint.curves;
                      styles = container.styles;
                      _i = 0, _a = container.textNodes;
                      _c.label = 1;
                    case 1:
                      if (!(_i < _a.length))
                        return [3, 4];
                      child = _a[_i];
                      return [4, this.renderTextNode(child, styles)];
                    case 2:
                      _c.sent();
                      _c.label = 3;
                    case 3:
                      _i++;
                      return [3, 1];
                    case 4:
                      if (!(container instanceof ImageElementContainer))
                        return [3, 8];
                      _c.label = 5;
                    case 5:
                      _c.trys.push([5, 7, , 8]);
                      return [4, this.context.cache.match(container.src)];
                    case 6:
                      image2 = _c.sent();
                      this.renderReplacedElement(container, curves, image2);
                      return [3, 8];
                    case 7:
                      _c.sent();
                      this.context.logger.error("Error loading image " + container.src);
                      return [3, 8];
                    case 8:
                      if (container instanceof CanvasElementContainer) {
                        this.renderReplacedElement(container, curves, container.canvas);
                      }
                      if (!(container instanceof SVGElementContainer))
                        return [3, 12];
                      _c.label = 9;
                    case 9:
                      _c.trys.push([9, 11, , 12]);
                      return [4, this.context.cache.match(container.svg)];
                    case 10:
                      image2 = _c.sent();
                      this.renderReplacedElement(container, curves, image2);
                      return [3, 12];
                    case 11:
                      _c.sent();
                      this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                      return [3, 12];
                    case 12:
                      if (!(container instanceof IFrameElementContainer && container.tree))
                        return [3, 14];
                      iframeRenderer = new CanvasRenderer2(this.context, {
                        scale: this.options.scale,
                        backgroundColor: container.backgroundColor,
                        x: 0,
                        y: 0,
                        width: container.width,
                        height: container.height
                      });
                      return [4, iframeRenderer.render(container.tree)];
                    case 13:
                      canvas = _c.sent();
                      if (container.width && container.height) {
                        this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                      }
                      _c.label = 14;
                    case 14:
                      if (container instanceof InputElementContainer) {
                        size = Math.min(container.bounds.width, container.bounds.height);
                        if (container.type === CHECKBOX) {
                          if (container.checked) {
                            this.ctx.save();
                            this.path([
                              new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                              new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                              new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                              new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                              new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                              new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                              new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                            ]);
                            this.ctx.fillStyle = asString(INPUT_COLOR);
                            this.ctx.fill();
                            this.ctx.restore();
                          }
                        } else if (container.type === RADIO) {
                          if (container.checked) {
                            this.ctx.save();
                            this.ctx.beginPath();
                            this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                            this.ctx.fillStyle = asString(INPUT_COLOR);
                            this.ctx.fill();
                            this.ctx.restore();
                          }
                        }
                      }
                      if (isTextInputElement(container) && container.value.length) {
                        _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
                        baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
                        this.ctx.font = fontFamily2;
                        this.ctx.fillStyle = asString(styles.color);
                        this.ctx.textBaseline = "alphabetic";
                        this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                        bounds = contentBox(container);
                        x = 0;
                        switch (container.styles.textAlign) {
                          case 1:
                            x += bounds.width / 2;
                            break;
                          case 2:
                            x += bounds.width;
                            break;
                        }
                        textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                        this.ctx.save();
                        this.path([
                          new Vector(bounds.left, bounds.top),
                          new Vector(bounds.left + bounds.width, bounds.top),
                          new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                          new Vector(bounds.left, bounds.top + bounds.height)
                        ]);
                        this.ctx.clip();
                        this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                        this.ctx.restore();
                        this.ctx.textBaseline = "alphabetic";
                        this.ctx.textAlign = "left";
                      }
                      if (!contains(
                        container.styles.display,
                        2048
                        /* LIST_ITEM */
                      ))
                        return [3, 20];
                      if (!(container.styles.listStyleImage !== null))
                        return [3, 19];
                      img = container.styles.listStyleImage;
                      if (!(img.type === 0))
                        return [3, 18];
                      image2 = void 0;
                      url = img.url;
                      _c.label = 15;
                    case 15:
                      _c.trys.push([15, 17, , 18]);
                      return [4, this.context.cache.match(url)];
                    case 16:
                      image2 = _c.sent();
                      this.ctx.drawImage(image2, container.bounds.left - (image2.width + 10), container.bounds.top);
                      return [3, 18];
                    case 17:
                      _c.sent();
                      this.context.logger.error("Error loading list-style-image " + url);
                      return [3, 18];
                    case 18:
                      return [3, 20];
                    case 19:
                      if (paint.listValue && container.styles.listStyleType !== -1) {
                        fontFamily2 = this.createFontStyle(styles)[0];
                        this.ctx.font = fontFamily2;
                        this.ctx.fillStyle = asString(styles.color);
                        this.ctx.textBaseline = "middle";
                        this.ctx.textAlign = "right";
                        bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                        this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                        this.ctx.textBaseline = "bottom";
                        this.ctx.textAlign = "left";
                      }
                      _c.label = 20;
                    case 20:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderStackContent = function(stack) {
              return __awaiter(this, void 0, void 0, function() {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                return __generator(this, function(_p) {
                  switch (_p.label) {
                    case 0:
                      if (contains(
                        stack.element.container.flags,
                        16
                        /* DEBUG_RENDER */
                      )) {
                        debugger;
                      }
                      return [4, this.renderNodeBackgroundAndBorders(stack.element)];
                    case 1:
                      _p.sent();
                      _i = 0, _a = stack.negativeZIndex;
                      _p.label = 2;
                    case 2:
                      if (!(_i < _a.length))
                        return [3, 5];
                      child = _a[_i];
                      return [4, this.renderStack(child)];
                    case 3:
                      _p.sent();
                      _p.label = 4;
                    case 4:
                      _i++;
                      return [3, 2];
                    case 5:
                      return [4, this.renderNodeContent(stack.element)];
                    case 6:
                      _p.sent();
                      _b = 0, _c = stack.nonInlineLevel;
                      _p.label = 7;
                    case 7:
                      if (!(_b < _c.length))
                        return [3, 10];
                      child = _c[_b];
                      return [4, this.renderNode(child)];
                    case 8:
                      _p.sent();
                      _p.label = 9;
                    case 9:
                      _b++;
                      return [3, 7];
                    case 10:
                      _d = 0, _e = stack.nonPositionedFloats;
                      _p.label = 11;
                    case 11:
                      if (!(_d < _e.length))
                        return [3, 14];
                      child = _e[_d];
                      return [4, this.renderStack(child)];
                    case 12:
                      _p.sent();
                      _p.label = 13;
                    case 13:
                      _d++;
                      return [3, 11];
                    case 14:
                      _f = 0, _g = stack.nonPositionedInlineLevel;
                      _p.label = 15;
                    case 15:
                      if (!(_f < _g.length))
                        return [3, 18];
                      child = _g[_f];
                      return [4, this.renderStack(child)];
                    case 16:
                      _p.sent();
                      _p.label = 17;
                    case 17:
                      _f++;
                      return [3, 15];
                    case 18:
                      _h = 0, _j = stack.inlineLevel;
                      _p.label = 19;
                    case 19:
                      if (!(_h < _j.length))
                        return [3, 22];
                      child = _j[_h];
                      return [4, this.renderNode(child)];
                    case 20:
                      _p.sent();
                      _p.label = 21;
                    case 21:
                      _h++;
                      return [3, 19];
                    case 22:
                      _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                      _p.label = 23;
                    case 23:
                      if (!(_k < _l.length))
                        return [3, 26];
                      child = _l[_k];
                      return [4, this.renderStack(child)];
                    case 24:
                      _p.sent();
                      _p.label = 25;
                    case 25:
                      _k++;
                      return [3, 23];
                    case 26:
                      _m = 0, _o = stack.positiveZIndex;
                      _p.label = 27;
                    case 27:
                      if (!(_m < _o.length))
                        return [3, 30];
                      child = _o[_m];
                      return [4, this.renderStack(child)];
                    case 28:
                      _p.sent();
                      _p.label = 29;
                    case 29:
                      _m++;
                      return [3, 27];
                    case 30:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.mask = function(paths) {
              this.ctx.beginPath();
              this.ctx.moveTo(0, 0);
              this.ctx.lineTo(this.canvas.width, 0);
              this.ctx.lineTo(this.canvas.width, this.canvas.height);
              this.ctx.lineTo(0, this.canvas.height);
              this.ctx.lineTo(0, 0);
              this.formatPath(paths.slice(0).reverse());
              this.ctx.closePath();
            };
            CanvasRenderer2.prototype.path = function(paths) {
              this.ctx.beginPath();
              this.formatPath(paths);
              this.ctx.closePath();
            };
            CanvasRenderer2.prototype.formatPath = function(paths) {
              var _this = this;
              paths.forEach(function(point, index) {
                var start = isBezierCurve(point) ? point.start : point;
                if (index === 0) {
                  _this.ctx.moveTo(start.x, start.y);
                } else {
                  _this.ctx.lineTo(start.x, start.y);
                }
                if (isBezierCurve(point)) {
                  _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                }
              });
            };
            CanvasRenderer2.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
              this.path(path);
              this.ctx.fillStyle = pattern;
              this.ctx.translate(offsetX, offsetY);
              this.ctx.fill();
              this.ctx.translate(-offsetX, -offsetY);
            };
            CanvasRenderer2.prototype.resizeImage = function(image2, width, height) {
              var _a;
              if (image2.width === width && image2.height === height) {
                return image2;
              }
              var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
              var canvas = ownerDocument.createElement("canvas");
              canvas.width = Math.max(1, width);
              canvas.height = Math.max(1, height);
              var ctx = canvas.getContext("2d");
              ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
              return canvas;
            };
            CanvasRenderer2.prototype.renderBackgroundImage = function(container) {
              return __awaiter(this, void 0, void 0, function() {
                var index, _loop_1, this_1, _i, _a, backgroundImage2;
                return __generator(this, function(_b) {
                  switch (_b.label) {
                    case 0:
                      index = container.styles.backgroundImage.length - 1;
                      _loop_1 = function(backgroundImage3) {
                        var image2, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position2, x, y, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
                        return __generator(this, function(_h) {
                          switch (_h.label) {
                            case 0:
                              if (!(backgroundImage3.type === 0))
                                return [3, 5];
                              image2 = void 0;
                              url = backgroundImage3.url;
                              _h.label = 1;
                            case 1:
                              _h.trys.push([1, 3, , 4]);
                              return [4, this_1.context.cache.match(url)];
                            case 2:
                              image2 = _h.sent();
                              return [3, 4];
                            case 3:
                              _h.sent();
                              this_1.context.logger.error("Error loading background-image " + url);
                              return [3, 4];
                            case 4:
                              if (image2) {
                                _c = calculateBackgroundRendering(container, index, [
                                  image2.width,
                                  image2.height,
                                  image2.width / image2.height
                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                                this_1.renderRepeat(path, pattern, x, y);
                              }
                              return [3, 6];
                            case 5:
                              if (isLinearGradient(backgroundImage3)) {
                                _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                _e = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                canvas = document.createElement("canvas");
                                canvas.width = width;
                                canvas.height = height;
                                ctx = canvas.getContext("2d");
                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                                  return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                });
                                ctx.fillStyle = gradient_1;
                                ctx.fillRect(0, 0, width, height);
                                if (width > 0 && height > 0) {
                                  pattern = this_1.ctx.createPattern(canvas, "repeat");
                                  this_1.renderRepeat(path, pattern, x, y);
                                }
                              } else if (isRadialGradient(backgroundImage3)) {
                                _f = calculateBackgroundRendering(container, index, [
                                  null,
                                  null,
                                  null
                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                                x = getAbsoluteValue(position2[0], width);
                                y = getAbsoluteValue(position2[position2.length - 1], height);
                                _g = calculateRadius(backgroundImage3, x, y, width, height), rx = _g[0], ry = _g[1];
                                if (rx > 0 && ry > 0) {
                                  radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                  processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                                    return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                  });
                                  this_1.path(path);
                                  this_1.ctx.fillStyle = radialGradient_1;
                                  if (rx !== ry) {
                                    midX = container.bounds.left + 0.5 * container.bounds.width;
                                    midY = container.bounds.top + 0.5 * container.bounds.height;
                                    f2 = ry / rx;
                                    invF = 1 / f2;
                                    this_1.ctx.save();
                                    this_1.ctx.translate(midX, midY);
                                    this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                                    this_1.ctx.translate(-midX, -midY);
                                    this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                    this_1.ctx.restore();
                                  } else {
                                    this_1.ctx.fill();
                                  }
                                }
                              }
                              _h.label = 6;
                            case 6:
                              index--;
                              return [
                                2
                                /*return*/
                              ];
                          }
                        });
                      };
                      this_1 = this;
                      _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                      _b.label = 1;
                    case 1:
                      if (!(_i < _a.length))
                        return [3, 4];
                      backgroundImage2 = _a[_i];
                      return [5, _loop_1(backgroundImage2)];
                    case 2:
                      _b.sent();
                      _b.label = 3;
                    case 3:
                      _i++;
                      return [3, 1];
                    case 4:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderSolidBorder = function(color2, side, curvePoints) {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  this.path(parsePathForBorder(curvePoints, side));
                  this.ctx.fillStyle = asString(color2);
                  this.ctx.fill();
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
              return __awaiter(this, void 0, void 0, function() {
                var outerPaths, innerPaths;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (!(width < 3))
                        return [3, 2];
                      return [4, this.renderSolidBorder(color2, side, curvePoints)];
                    case 1:
                      _a.sent();
                      return [
                        2
                        /*return*/
                      ];
                    case 2:
                      outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                      this.path(outerPaths);
                      this.ctx.fillStyle = asString(color2);
                      this.ctx.fill();
                      innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                      this.path(innerPaths);
                      this.ctx.fill();
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderNodeBackgroundAndBorders = function(paint) {
              return __awaiter(this, void 0, void 0, function() {
                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      this.applyEffects(paint.getEffects(
                        2
                        /* BACKGROUND_BORDERS */
                      ));
                      styles = paint.container.styles;
                      hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                      borders = [
                        { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                        { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                        { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                        { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                      ];
                      backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                      if (!(hasBackground || styles.boxShadow.length))
                        return [3, 2];
                      this.ctx.save();
                      this.path(backgroundPaintingArea);
                      this.ctx.clip();
                      if (!isTransparent(styles.backgroundColor)) {
                        this.ctx.fillStyle = asString(styles.backgroundColor);
                        this.ctx.fill();
                      }
                      return [4, this.renderBackgroundImage(paint.container)];
                    case 1:
                      _a.sent();
                      this.ctx.restore();
                      styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
                        _this.ctx.save();
                        var borderBoxArea = calculateBorderBoxPath(paint.curves);
                        var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                        var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                        if (shadow.inset) {
                          _this.path(borderBoxArea);
                          _this.ctx.clip();
                          _this.mask(shadowPaintingArea);
                        } else {
                          _this.mask(borderBoxArea);
                          _this.ctx.clip();
                          _this.path(shadowPaintingArea);
                        }
                        _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                        _this.ctx.shadowOffsetY = shadow.offsetY.number;
                        _this.ctx.shadowColor = asString(shadow.color);
                        _this.ctx.shadowBlur = shadow.blur.number;
                        _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
                        _this.ctx.fill();
                        _this.ctx.restore();
                      });
                      _a.label = 2;
                    case 2:
                      side = 0;
                      _i = 0, borders_1 = borders;
                      _a.label = 3;
                    case 3:
                      if (!(_i < borders_1.length))
                        return [3, 13];
                      border = borders_1[_i];
                      if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0))
                        return [3, 11];
                      if (!(border.style === 2))
                        return [3, 5];
                      return [4, this.renderDashedDottedBorder(
                        border.color,
                        border.width,
                        side,
                        paint.curves,
                        2
                        /* DASHED */
                      )];
                    case 4:
                      _a.sent();
                      return [3, 11];
                    case 5:
                      if (!(border.style === 3))
                        return [3, 7];
                      return [4, this.renderDashedDottedBorder(
                        border.color,
                        border.width,
                        side,
                        paint.curves,
                        3
                        /* DOTTED */
                      )];
                    case 6:
                      _a.sent();
                      return [3, 11];
                    case 7:
                      if (!(border.style === 4))
                        return [3, 9];
                      return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                    case 8:
                      _a.sent();
                      return [3, 11];
                    case 9:
                      return [4, this.renderSolidBorder(border.color, side, paint.curves)];
                    case 10:
                      _a.sent();
                      _a.label = 11;
                    case 11:
                      side++;
                      _a.label = 12;
                    case 12:
                      _i++;
                      return [3, 3];
                    case 13:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            CanvasRenderer2.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style) {
              return __awaiter(this, void 0, void 0, function() {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(this, function(_a) {
                  this.ctx.save();
                  strokePaths = parsePathForBorderStroke(curvePoints, side);
                  boxPaths = parsePathForBorder(curvePoints, side);
                  if (style === 2) {
                    this.path(boxPaths);
                    this.ctx.clip();
                  }
                  if (isBezierCurve(boxPaths[0])) {
                    startX = boxPaths[0].start.x;
                    startY = boxPaths[0].start.y;
                  } else {
                    startX = boxPaths[0].x;
                    startY = boxPaths[0].y;
                  }
                  if (isBezierCurve(boxPaths[1])) {
                    endX = boxPaths[1].end.x;
                    endY = boxPaths[1].end.y;
                  } else {
                    endX = boxPaths[1].x;
                    endY = boxPaths[1].y;
                  }
                  if (side === 0 || side === 2) {
                    length = Math.abs(startX - endX);
                  } else {
                    length = Math.abs(startY - endY);
                  }
                  this.ctx.beginPath();
                  if (style === 3) {
                    this.formatPath(strokePaths);
                  } else {
                    this.formatPath(boxPaths.slice(0, 2));
                  }
                  dashLength = width < 3 ? width * 3 : width * 2;
                  spaceLength = width < 3 ? width * 2 : width;
                  if (style === 3) {
                    dashLength = width;
                    spaceLength = width;
                  }
                  useLineDash = true;
                  if (length <= dashLength * 2) {
                    useLineDash = false;
                  } else if (length <= dashLength * 2 + spaceLength) {
                    multiplier = length / (2 * dashLength + spaceLength);
                    dashLength *= multiplier;
                    spaceLength *= multiplier;
                  } else {
                    numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                    minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                    maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                    spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
                  }
                  if (useLineDash) {
                    if (style === 3) {
                      this.ctx.setLineDash([0, dashLength + spaceLength]);
                    } else {
                      this.ctx.setLineDash([dashLength, spaceLength]);
                    }
                  }
                  if (style === 3) {
                    this.ctx.lineCap = "round";
                    this.ctx.lineWidth = width;
                  } else {
                    this.ctx.lineWidth = width * 2 + 1.1;
                  }
                  this.ctx.strokeStyle = asString(color2);
                  this.ctx.stroke();
                  this.ctx.setLineDash([]);
                  if (style === 2) {
                    if (isBezierCurve(boxPaths[0])) {
                      path1 = boxPaths[3];
                      path2 = boxPaths[0];
                      this.ctx.beginPath();
                      this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                      this.ctx.stroke();
                    }
                    if (isBezierCurve(boxPaths[1])) {
                      path1 = boxPaths[1];
                      path2 = boxPaths[2];
                      this.ctx.beginPath();
                      this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                      this.ctx.stroke();
                    }
                  }
                  this.ctx.restore();
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            };
            CanvasRenderer2.prototype.render = function(element) {
              return __awaiter(this, void 0, void 0, function() {
                var stack;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      if (this.options.backgroundColor) {
                        this.ctx.fillStyle = asString(this.options.backgroundColor);
                        this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                      }
                      stack = parseStackingContexts(element);
                      return [4, this.renderStack(stack)];
                    case 1:
                      _a.sent();
                      this.applyEffects([]);
                      return [2, this.canvas];
                  }
                });
              });
            };
            return CanvasRenderer2;
          }(Renderer)
        );
        var isTextInputElement = function(container) {
          if (container instanceof TextareaElementContainer) {
            return true;
          } else if (container instanceof SelectElementContainer) {
            return true;
          } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
          }
          return false;
        };
        var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
          switch (clip) {
            case 0:
              return calculateBorderBoxPath(curves);
            case 2:
              return calculateContentBoxPath(curves);
            case 1:
            default:
              return calculatePaddingBoxPath(curves);
          }
        };
        var canvasTextAlign = function(textAlign2) {
          switch (textAlign2) {
            case 1:
              return "center";
            case 2:
              return "right";
            case 0:
            default:
              return "left";
          }
        };
        var iOSBrokenFonts = ["-apple-system", "system-ui"];
        var fixIOSSystemFonts = function(fontFamilies) {
          return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
            return iOSBrokenFonts.indexOf(fontFamily2) === -1;
          }) : fontFamilies;
        };
        var ForeignObjectRenderer = (
          /** @class */
          function(_super) {
            __extends(ForeignObjectRenderer2, _super);
            function ForeignObjectRenderer2(context, options) {
              var _this = _super.call(this, context, options) || this;
              _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
              _this.ctx = _this.canvas.getContext("2d");
              _this.options = options;
              _this.canvas.width = Math.floor(options.width * options.scale);
              _this.canvas.height = Math.floor(options.height * options.scale);
              _this.canvas.style.width = options.width + "px";
              _this.canvas.style.height = options.height + "px";
              _this.ctx.scale(_this.options.scale, _this.options.scale);
              _this.ctx.translate(-options.x, -options.y);
              _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
              return _this;
            }
            ForeignObjectRenderer2.prototype.render = function(element) {
              return __awaiter(this, void 0, void 0, function() {
                var svg, img;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                    case 0:
                      svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                      return [4, loadSerializedSVG(svg)];
                    case 1:
                      img = _a.sent();
                      if (this.options.backgroundColor) {
                        this.ctx.fillStyle = asString(this.options.backgroundColor);
                        this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                      }
                      this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                      return [2, this.canvas];
                  }
                });
              });
            };
            return ForeignObjectRenderer2;
          }(Renderer)
        );
        var loadSerializedSVG = function(svg) {
          return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };
        var Logger = (
          /** @class */
          function() {
            function Logger2(_a) {
              var id = _a.id, enabled = _a.enabled;
              this.id = id;
              this.enabled = enabled;
              this.start = Date.now();
            }
            Logger2.prototype.debug = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.debug === "function") {
                  console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.prototype.getTime = function() {
              return Date.now() - this.start;
            };
            Logger2.prototype.info = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.info === "function") {
                  console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
              }
            };
            Logger2.prototype.warn = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.warn === "function") {
                  console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.prototype.error = function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (this.enabled) {
                if (typeof window !== "undefined" && window.console && typeof console.error === "function") {
                  console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                } else {
                  this.info.apply(this, args);
                }
              }
            };
            Logger2.instances = {};
            return Logger2;
          }()
        );
        var Context = (
          /** @class */
          function() {
            function Context2(options, windowBounds) {
              var _a;
              this.windowBounds = windowBounds;
              this.instanceName = "#" + Context2.instanceCount++;
              this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
              this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
            }
            Context2.instanceCount = 1;
            return Context2;
          }()
        );
        var html2canvas2 = function(element, options) {
          if (options === void 0) {
            options = {};
          }
          return renderElement(element, options);
        };
        if (typeof window !== "undefined") {
          CacheStorage.setContext(window);
        }
        var renderElement = function(element, opts) {
          return __awaiter(void 0, void 0, void 0, function() {
            var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor2, renderOptions, canvas, renderer, root, renderer;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __generator(this, function(_u) {
              switch (_u.label) {
                case 0:
                  if (!element || typeof element !== "object") {
                    return [2, Promise.reject("Invalid element provided as first argument")];
                  }
                  ownerDocument = element.ownerDocument;
                  if (!ownerDocument) {
                    throw new Error("Element is not attached to a Document");
                  }
                  defaultView = ownerDocument.defaultView;
                  if (!defaultView) {
                    throw new Error("Document is not attached to a Window");
                  }
                  resourceOptions = {
                    allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                    imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15e3,
                    proxy: opts.proxy,
                    useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                  };
                  contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                  windowOptions = {
                    windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                    windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                    scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                    scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                  };
                  windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                  context = new Context(contextOptions, windowBounds);
                  foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                  cloneOptions = {
                    allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                    onclone: opts.onclone,
                    ignoreElements: opts.ignoreElements,
                    inlineImages: foreignObjectRendering,
                    copyStyles: foreignObjectRendering
                  };
                  context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                  documentCloner = new DocumentCloner(context, element, cloneOptions);
                  clonedElement = documentCloner.clonedReferenceElement;
                  if (!clonedElement) {
                    return [2, Promise.reject("Unable to find element in cloned iframe")];
                  }
                  return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
                case 1:
                  container = _u.sent();
                  _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                  backgroundColor2 = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                  renderOptions = {
                    canvas: opts.canvas,
                    backgroundColor: backgroundColor2,
                    scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                    x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                    y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                    width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                    height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                  };
                  if (!foreignObjectRendering)
                    return [3, 3];
                  context.logger.debug("Document cloned, using foreign object rendering");
                  renderer = new ForeignObjectRenderer(context, renderOptions);
                  return [4, renderer.render(clonedElement)];
                case 2:
                  canvas = _u.sent();
                  return [3, 5];
                case 3:
                  context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                  context.logger.debug("Starting DOM parsing");
                  root = parseTree(context, clonedElement);
                  if (backgroundColor2 === root.styles.backgroundColor) {
                    root.styles.backgroundColor = COLORS.TRANSPARENT;
                  }
                  context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                  renderer = new CanvasRenderer(context, renderOptions);
                  return [4, renderer.render(root)];
                case 4:
                  canvas = _u.sent();
                  _u.label = 5;
                case 5:
                  if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                    if (!DocumentCloner.destroy(container)) {
                      context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                    }
                  }
                  context.logger.debug("Finished rendering");
                  return [2, canvas];
              }
            });
          });
        };
        var parseBackgroundColor = function(context, element, backgroundColorOverride) {
          var ownerDocument = element.ownerDocument;
          var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
          var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 4294967295;
          return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
        };
        return html2canvas2;
      });
    }
  });

  // node_modules/html2pdf.js/dist/html2pdf.js
  var require_html2pdf = __commonJS({
    "node_modules/html2pdf.js/dist/html2pdf.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_jspdf_min(), require_html2canvas()) : typeof define === "function" && define.amd ? define(["jspdf", "html2canvas"], factory) : global2.html2pdf = factory(global2.jsPDF, global2.html2canvas);
      })(exports, function(jsPDF, html2canvas2) {
        "use strict";
        jsPDF = jsPDF && jsPDF.hasOwnProperty("default") ? jsPDF["default"] : jsPDF;
        html2canvas2 = html2canvas2 && html2canvas2.hasOwnProperty("default") ? html2canvas2["default"] : html2canvas2;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var objType = function objType2(obj) {
          var type = typeof obj === "undefined" ? "undefined" : _typeof(obj);
          if (type === "undefined")
            return "undefined";
          else if (type === "string" || obj instanceof String)
            return "string";
          else if (type === "number" || obj instanceof Number)
            return "number";
          else if (type === "function" || obj instanceof Function)
            return "function";
          else if (!!obj && obj.constructor === Array)
            return "array";
          else if (obj && obj.nodeType === 1)
            return "element";
          else if (type === "object")
            return "object";
          else
            return "unknown";
        };
        var createElement = function createElement2(tagName, opt) {
          var el = document.createElement(tagName);
          if (opt.className)
            el.className = opt.className;
          if (opt.innerHTML) {
            el.innerHTML = opt.innerHTML;
            var scripts = el.getElementsByTagName("script");
            for (var i = scripts.length; i-- > 0; null) {
              scripts[i].parentNode.removeChild(scripts[i]);
            }
          }
          for (var key in opt.style) {
            el.style[key] = opt.style[key];
          }
          return el;
        };
        var cloneNode = function cloneNode2(node, javascriptEnabled) {
          var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);
          for (var child = node.firstChild; child; child = child.nextSibling) {
            if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== "SCRIPT") {
              clone.appendChild(cloneNode2(child, javascriptEnabled));
            }
          }
          if (node.nodeType === 1) {
            if (node.nodeName === "CANVAS") {
              clone.width = node.width;
              clone.height = node.height;
              clone.getContext("2d").drawImage(node, 0, 0);
            } else if (node.nodeName === "TEXTAREA" || node.nodeName === "SELECT") {
              clone.value = node.value;
            }
            clone.addEventListener("load", function() {
              clone.scrollTop = node.scrollTop;
              clone.scrollLeft = node.scrollLeft;
            }, true);
          }
          return clone;
        };
        var unitConvert = function unitConvert2(obj, k) {
          if (objType(obj) === "number") {
            return obj * 72 / 96 / k;
          } else {
            var newObj = {};
            for (var key in obj) {
              newObj[key] = obj[key] * 72 / 96 / k;
            }
            return newObj;
          }
        };
        var toPx = function toPx2(val, k) {
          return Math.floor(val * k / 72 * 96);
        };
        var commonjsGlobal = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
        function commonjsRequire() {
          throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
        }
        function createCommonjsModule(fn, module2) {
          return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
        }
        var es6Promise = createCommonjsModule(function(module2, exports2) {
          (function(global2, factory) {
            module2.exports = factory();
          })(commonjsGlobal, function() {
            function objectOrFunction(x) {
              var type = typeof x;
              return x !== null && (type === "object" || type === "function");
            }
            function isFunction(x) {
              return typeof x === "function";
            }
            var _isArray = void 0;
            if (Array.isArray) {
              _isArray = Array.isArray;
            } else {
              _isArray = function(x) {
                return Object.prototype.toString.call(x) === "[object Array]";
              };
            }
            var isArray = _isArray;
            var len = 0;
            var vertxNext = void 0;
            var customSchedulerFn = void 0;
            var asap = function asap2(callback, arg) {
              queue[len] = callback;
              queue[len + 1] = arg;
              len += 2;
              if (len === 2) {
                if (customSchedulerFn) {
                  customSchedulerFn(flush);
                } else {
                  scheduleFlush();
                }
              }
            };
            function setScheduler(scheduleFn) {
              customSchedulerFn = scheduleFn;
            }
            function setAsap(asapFn) {
              asap = asapFn;
            }
            var browserWindow = typeof window !== "undefined" ? window : void 0;
            var browserGlobal = browserWindow || {};
            var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
            var isNode = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
            var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
            function useNextTick() {
              return function() {
                return process.nextTick(flush);
              };
            }
            function useVertxTimer() {
              if (typeof vertxNext !== "undefined") {
                return function() {
                  vertxNext(flush);
                };
              }
              return useSetTimeout();
            }
            function useMutationObserver() {
              var iterations = 0;
              var observer = new BrowserMutationObserver(flush);
              var node = document.createTextNode("");
              observer.observe(node, { characterData: true });
              return function() {
                node.data = iterations = ++iterations % 2;
              };
            }
            function useMessageChannel() {
              var channel = new MessageChannel();
              channel.port1.onmessage = flush;
              return function() {
                return channel.port2.postMessage(0);
              };
            }
            function useSetTimeout() {
              var globalSetTimeout = setTimeout;
              return function() {
                return globalSetTimeout(flush, 1);
              };
            }
            var queue = new Array(1e3);
            function flush() {
              for (var i = 0; i < len; i += 2) {
                var callback = queue[i];
                var arg = queue[i + 1];
                callback(arg);
                queue[i] = void 0;
                queue[i + 1] = void 0;
              }
              len = 0;
            }
            function attemptVertx() {
              try {
                var vertx = Function("return this")().require("vertx");
                vertxNext = vertx.runOnLoop || vertx.runOnContext;
                return useVertxTimer();
              } catch (e) {
                return useSetTimeout();
              }
            }
            var scheduleFlush = void 0;
            if (isNode) {
              scheduleFlush = useNextTick();
            } else if (BrowserMutationObserver) {
              scheduleFlush = useMutationObserver();
            } else if (isWorker) {
              scheduleFlush = useMessageChannel();
            } else if (browserWindow === void 0 && typeof commonjsRequire === "function") {
              scheduleFlush = attemptVertx();
            } else {
              scheduleFlush = useSetTimeout();
            }
            function then(onFulfillment, onRejection) {
              var parent = this;
              var child = new this.constructor(noop);
              if (child[PROMISE_ID] === void 0) {
                makePromise(child);
              }
              var _state = parent._state;
              if (_state) {
                var callback = arguments[_state - 1];
                asap(function() {
                  return invokeCallback(_state, child, callback, parent._result);
                });
              } else {
                subscribe(parent, child, onFulfillment, onRejection);
              }
              return child;
            }
            function resolve$1(object) {
              var Constructor = this;
              if (object && typeof object === "object" && object.constructor === Constructor) {
                return object;
              }
              var promise = new Constructor(noop);
              resolve(promise, object);
              return promise;
            }
            var PROMISE_ID = Math.random().toString(36).substring(2);
            function noop() {
            }
            var PENDING = void 0;
            var FULFILLED = 1;
            var REJECTED = 2;
            var TRY_CATCH_ERROR = { error: null };
            function selfFulfillment() {
              return new TypeError("You cannot resolve a promise with itself");
            }
            function cannotReturnOwn() {
              return new TypeError("A promises callback cannot return that same promise.");
            }
            function getThen(promise) {
              try {
                return promise.then;
              } catch (error) {
                TRY_CATCH_ERROR.error = error;
                return TRY_CATCH_ERROR;
              }
            }
            function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
              try {
                then$$1.call(value, fulfillmentHandler, rejectionHandler);
              } catch (e) {
                return e;
              }
            }
            function handleForeignThenable(promise, thenable, then$$1) {
              asap(function(promise2) {
                var sealed = false;
                var error = tryThen(then$$1, thenable, function(value) {
                  if (sealed) {
                    return;
                  }
                  sealed = true;
                  if (thenable !== value) {
                    resolve(promise2, value);
                  } else {
                    fulfill(promise2, value);
                  }
                }, function(reason) {
                  if (sealed) {
                    return;
                  }
                  sealed = true;
                  reject(promise2, reason);
                }, "Settle: " + (promise2._label || " unknown promise"));
                if (!sealed && error) {
                  sealed = true;
                  reject(promise2, error);
                }
              }, promise);
            }
            function handleOwnThenable(promise, thenable) {
              if (thenable._state === FULFILLED) {
                fulfill(promise, thenable._result);
              } else if (thenable._state === REJECTED) {
                reject(promise, thenable._result);
              } else {
                subscribe(thenable, void 0, function(value) {
                  return resolve(promise, value);
                }, function(reason) {
                  return reject(promise, reason);
                });
              }
            }
            function handleMaybeThenable(promise, maybeThenable, then$$1) {
              if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                handleOwnThenable(promise, maybeThenable);
              } else {
                if (then$$1 === TRY_CATCH_ERROR) {
                  reject(promise, TRY_CATCH_ERROR.error);
                  TRY_CATCH_ERROR.error = null;
                } else if (then$$1 === void 0) {
                  fulfill(promise, maybeThenable);
                } else if (isFunction(then$$1)) {
                  handleForeignThenable(promise, maybeThenable, then$$1);
                } else {
                  fulfill(promise, maybeThenable);
                }
              }
            }
            function resolve(promise, value) {
              if (promise === value) {
                reject(promise, selfFulfillment());
              } else if (objectOrFunction(value)) {
                handleMaybeThenable(promise, value, getThen(value));
              } else {
                fulfill(promise, value);
              }
            }
            function publishRejection(promise) {
              if (promise._onerror) {
                promise._onerror(promise._result);
              }
              publish(promise);
            }
            function fulfill(promise, value) {
              if (promise._state !== PENDING) {
                return;
              }
              promise._result = value;
              promise._state = FULFILLED;
              if (promise._subscribers.length !== 0) {
                asap(publish, promise);
              }
            }
            function reject(promise, reason) {
              if (promise._state !== PENDING) {
                return;
              }
              promise._state = REJECTED;
              promise._result = reason;
              asap(publishRejection, promise);
            }
            function subscribe(parent, child, onFulfillment, onRejection) {
              var _subscribers = parent._subscribers;
              var length = _subscribers.length;
              parent._onerror = null;
              _subscribers[length] = child;
              _subscribers[length + FULFILLED] = onFulfillment;
              _subscribers[length + REJECTED] = onRejection;
              if (length === 0 && parent._state) {
                asap(publish, parent);
              }
            }
            function publish(promise) {
              var subscribers = promise._subscribers;
              var settled = promise._state;
              if (subscribers.length === 0) {
                return;
              }
              var child = void 0, callback = void 0, detail = promise._result;
              for (var i = 0; i < subscribers.length; i += 3) {
                child = subscribers[i];
                callback = subscribers[i + settled];
                if (child) {
                  invokeCallback(settled, child, callback, detail);
                } else {
                  callback(detail);
                }
              }
              promise._subscribers.length = 0;
            }
            function tryCatch(callback, detail) {
              try {
                return callback(detail);
              } catch (e) {
                TRY_CATCH_ERROR.error = e;
                return TRY_CATCH_ERROR;
              }
            }
            function invokeCallback(settled, promise, callback, detail) {
              var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = void 0, failed = void 0;
              if (hasCallback) {
                value = tryCatch(callback, detail);
                if (value === TRY_CATCH_ERROR) {
                  failed = true;
                  error = value.error;
                  value.error = null;
                } else {
                  succeeded = true;
                }
                if (promise === value) {
                  reject(promise, cannotReturnOwn());
                  return;
                }
              } else {
                value = detail;
                succeeded = true;
              }
              if (promise._state !== PENDING) {
              } else if (hasCallback && succeeded) {
                resolve(promise, value);
              } else if (failed) {
                reject(promise, error);
              } else if (settled === FULFILLED) {
                fulfill(promise, value);
              } else if (settled === REJECTED) {
                reject(promise, value);
              }
            }
            function initializePromise(promise, resolver) {
              try {
                resolver(function resolvePromise(value) {
                  resolve(promise, value);
                }, function rejectPromise(reason) {
                  reject(promise, reason);
                });
              } catch (e) {
                reject(promise, e);
              }
            }
            var id = 0;
            function nextId() {
              return id++;
            }
            function makePromise(promise) {
              promise[PROMISE_ID] = id++;
              promise._state = void 0;
              promise._result = void 0;
              promise._subscribers = [];
            }
            function validationError() {
              return new Error("Array Methods must be provided an Array");
            }
            var Enumerator = function() {
              function Enumerator2(Constructor, input) {
                this._instanceConstructor = Constructor;
                this.promise = new Constructor(noop);
                if (!this.promise[PROMISE_ID]) {
                  makePromise(this.promise);
                }
                if (isArray(input)) {
                  this.length = input.length;
                  this._remaining = input.length;
                  this._result = new Array(this.length);
                  if (this.length === 0) {
                    fulfill(this.promise, this._result);
                  } else {
                    this.length = this.length || 0;
                    this._enumerate(input);
                    if (this._remaining === 0) {
                      fulfill(this.promise, this._result);
                    }
                  }
                } else {
                  reject(this.promise, validationError());
                }
              }
              Enumerator2.prototype._enumerate = function _enumerate(input) {
                for (var i = 0; this._state === PENDING && i < input.length; i++) {
                  this._eachEntry(input[i], i);
                }
              };
              Enumerator2.prototype._eachEntry = function _eachEntry(entry, i) {
                var c = this._instanceConstructor;
                var resolve$$1 = c.resolve;
                if (resolve$$1 === resolve$1) {
                  var _then = getThen(entry);
                  if (_then === then && entry._state !== PENDING) {
                    this._settledAt(entry._state, i, entry._result);
                  } else if (typeof _then !== "function") {
                    this._remaining--;
                    this._result[i] = entry;
                  } else if (c === Promise$12) {
                    var promise = new c(noop);
                    handleMaybeThenable(promise, entry, _then);
                    this._willSettleAt(promise, i);
                  } else {
                    this._willSettleAt(new c(function(resolve$$12) {
                      return resolve$$12(entry);
                    }), i);
                  }
                } else {
                  this._willSettleAt(resolve$$1(entry), i);
                }
              };
              Enumerator2.prototype._settledAt = function _settledAt(state, i, value) {
                var promise = this.promise;
                if (promise._state === PENDING) {
                  this._remaining--;
                  if (state === REJECTED) {
                    reject(promise, value);
                  } else {
                    this._result[i] = value;
                  }
                }
                if (this._remaining === 0) {
                  fulfill(promise, this._result);
                }
              };
              Enumerator2.prototype._willSettleAt = function _willSettleAt(promise, i) {
                var enumerator = this;
                subscribe(promise, void 0, function(value) {
                  return enumerator._settledAt(FULFILLED, i, value);
                }, function(reason) {
                  return enumerator._settledAt(REJECTED, i, reason);
                });
              };
              return Enumerator2;
            }();
            function all(entries) {
              return new Enumerator(this, entries).promise;
            }
            function race(entries) {
              var Constructor = this;
              if (!isArray(entries)) {
                return new Constructor(function(_, reject2) {
                  return reject2(new TypeError("You must pass an array to race."));
                });
              } else {
                return new Constructor(function(resolve2, reject2) {
                  var length = entries.length;
                  for (var i = 0; i < length; i++) {
                    Constructor.resolve(entries[i]).then(resolve2, reject2);
                  }
                });
              }
            }
            function reject$1(reason) {
              var Constructor = this;
              var promise = new Constructor(noop);
              reject(promise, reason);
              return promise;
            }
            function needsResolver() {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }
            function needsNew() {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }
            var Promise$12 = function() {
              function Promise2(resolver) {
                this[PROMISE_ID] = nextId();
                this._result = this._state = void 0;
                this._subscribers = [];
                if (noop !== resolver) {
                  typeof resolver !== "function" && needsResolver();
                  this instanceof Promise2 ? initializePromise(this, resolver) : needsNew();
                }
              }
              Promise2.prototype.catch = function _catch(onRejection) {
                return this.then(null, onRejection);
              };
              Promise2.prototype.finally = function _finally(callback) {
                var promise = this;
                var constructor = promise.constructor;
                if (isFunction(callback)) {
                  return promise.then(function(value) {
                    return constructor.resolve(callback()).then(function() {
                      return value;
                    });
                  }, function(reason) {
                    return constructor.resolve(callback()).then(function() {
                      throw reason;
                    });
                  });
                }
                return promise.then(callback, callback);
              };
              return Promise2;
            }();
            Promise$12.prototype.then = then;
            Promise$12.all = all;
            Promise$12.race = race;
            Promise$12.resolve = resolve$1;
            Promise$12.reject = reject$1;
            Promise$12._setScheduler = setScheduler;
            Promise$12._setAsap = setAsap;
            Promise$12._asap = asap;
            function polyfill() {
              var local = void 0;
              if (typeof commonjsGlobal !== "undefined") {
                local = commonjsGlobal;
              } else if (typeof self !== "undefined") {
                local = self;
              } else {
                try {
                  local = Function("return this")();
                } catch (e) {
                  throw new Error("polyfill failed because global object is unavailable in this environment");
                }
              }
              var P = local.Promise;
              if (P) {
                var promiseToString = null;
                try {
                  promiseToString = Object.prototype.toString.call(P.resolve());
                } catch (e) {
                }
                if (promiseToString === "[object Promise]" && !P.cast) {
                  return;
                }
              }
              local.Promise = Promise$12;
            }
            Promise$12.polyfill = polyfill;
            Promise$12.Promise = Promise$12;
            return Promise$12;
          });
        });
        var Promise$1 = es6Promise.Promise;
        var Worker = function Worker2(opt) {
          var root = _extends(Worker2.convert(Promise$1.resolve()), JSON.parse(JSON.stringify(Worker2.template)));
          var self2 = Worker2.convert(Promise$1.resolve(), root);
          self2 = self2.setProgress(1, Worker2, 1, [Worker2]);
          self2 = self2.set(opt);
          return self2;
        };
        Worker.prototype = Object.create(Promise$1.prototype);
        Worker.prototype.constructor = Worker;
        Worker.convert = function convert(promise, inherit) {
          promise.__proto__ = inherit || Worker.prototype;
          return promise;
        };
        Worker.template = {
          prop: {
            src: null,
            container: null,
            overlay: null,
            canvas: null,
            img: null,
            pdf: null,
            pageSize: null
          },
          progress: {
            val: 0,
            state: null,
            n: 0,
            stack: []
          },
          opt: {
            filename: "file.pdf",
            margin: [0, 0, 0, 0],
            image: { type: "jpeg", quality: 0.95 },
            enableLinks: true,
            html2canvas: {},
            jsPDF: {}
          }
        };
        Worker.prototype.from = function from(src, type) {
          function getType(src2) {
            switch (objType(src2)) {
              case "string":
                return "string";
              case "element":
                return src2.nodeName.toLowerCase === "canvas" ? "canvas" : "element";
              default:
                return "unknown";
            }
          }
          return this.then(function from_main() {
            type = type || getType(src);
            switch (type) {
              case "string":
                return this.set({ src: createElement("div", { innerHTML: src }) });
              case "element":
                return this.set({ src });
              case "canvas":
                return this.set({ canvas: src });
              case "img":
                return this.set({ img: src });
              default:
                return this.error("Unknown source type.");
            }
          });
        };
        Worker.prototype.to = function to(target) {
          switch (target) {
            case "container":
              return this.toContainer();
            case "canvas":
              return this.toCanvas();
            case "img":
              return this.toImg();
            case "pdf":
              return this.toPdf();
            default:
              return this.error("Invalid target.");
          }
        };
        Worker.prototype.toContainer = function toContainer() {
          var prereqs = [function checkSrc() {
            return this.prop.src || this.error("Cannot duplicate - no source HTML.");
          }, function checkPageSize() {
            return this.prop.pageSize || this.setPageSize();
          }];
          return this.thenList(prereqs).then(function toContainer_main() {
            var overlayCSS = {
              position: "fixed",
              overflow: "hidden",
              zIndex: 1e3,
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              backgroundColor: "rgba(0,0,0,0.8)"
            };
            var containerCSS = {
              position: "absolute",
              width: this.prop.pageSize.inner.width + this.prop.pageSize.unit,
              left: 0,
              right: 0,
              top: 0,
              height: "auto",
              margin: "auto",
              backgroundColor: "white"
            };
            overlayCSS.opacity = 0;
            var source = cloneNode(this.prop.src, this.opt.html2canvas.javascriptEnabled);
            this.prop.overlay = createElement("div", { className: "html2pdf__overlay", style: overlayCSS });
            this.prop.container = createElement("div", { className: "html2pdf__container", style: containerCSS });
            this.prop.container.appendChild(source);
            this.prop.overlay.appendChild(this.prop.container);
            document.body.appendChild(this.prop.overlay);
          });
        };
        Worker.prototype.toCanvas = function toCanvas() {
          var prereqs = [function checkContainer() {
            return document.body.contains(this.prop.container) || this.toContainer();
          }];
          return this.thenList(prereqs).then(function toCanvas_main() {
            var options = _extends({}, this.opt.html2canvas);
            delete options.onrendered;
            return html2canvas2(this.prop.container, options);
          }).then(function toCanvas_post(canvas) {
            var onRendered = this.opt.html2canvas.onrendered || function() {
            };
            onRendered(canvas);
            this.prop.canvas = canvas;
            document.body.removeChild(this.prop.overlay);
          });
        };
        Worker.prototype.toImg = function toImg() {
          var prereqs = [function checkCanvas() {
            return this.prop.canvas || this.toCanvas();
          }];
          return this.thenList(prereqs).then(function toImg_main() {
            var imgData = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
            this.prop.img = document.createElement("img");
            this.prop.img.src = imgData;
          });
        };
        Worker.prototype.toPdf = function toPdf() {
          var prereqs = [function checkCanvas() {
            return this.prop.canvas || this.toCanvas();
          }];
          return this.thenList(prereqs).then(function toPdf_main() {
            var canvas = this.prop.canvas;
            var opt = this.opt;
            var pxFullHeight = canvas.height;
            var pxPageHeight = Math.floor(canvas.width * this.prop.pageSize.inner.ratio);
            var nPages = Math.ceil(pxFullHeight / pxPageHeight);
            var pageHeight = this.prop.pageSize.inner.height;
            var pageCanvas = document.createElement("canvas");
            var pageCtx = pageCanvas.getContext("2d");
            pageCanvas.width = canvas.width;
            pageCanvas.height = pxPageHeight;
            this.prop.pdf = this.prop.pdf || new jsPDF(opt.jsPDF);
            for (var page = 0; page < nPages; page++) {
              if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
                pageCanvas.height = pxFullHeight % pxPageHeight;
                pageHeight = pageCanvas.height * this.prop.pageSize.inner.width / pageCanvas.width;
              }
              var w = pageCanvas.width;
              var h = pageCanvas.height;
              pageCtx.fillStyle = "white";
              pageCtx.fillRect(0, 0, w, h);
              pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
              if (page)
                this.prop.pdf.addPage();
              var imgData = pageCanvas.toDataURL("image/" + opt.image.type, opt.image.quality);
              this.prop.pdf.addImage(imgData, opt.image.type, opt.margin[1], opt.margin[0], this.prop.pageSize.inner.width, pageHeight);
            }
          });
        };
        Worker.prototype.output = function output(type, options, src) {
          src = src || "pdf";
          if (src.toLowerCase() === "img" || src.toLowerCase() === "image") {
            return this.outputImg(type, options);
          } else {
            return this.outputPdf(type, options);
          }
        };
        Worker.prototype.outputPdf = function outputPdf(type, options) {
          var prereqs = [function checkPdf() {
            return this.prop.pdf || this.toPdf();
          }];
          return this.thenList(prereqs).then(function outputPdf_main() {
            return this.prop.pdf.output(type, options);
          });
        };
        Worker.prototype.outputImg = function outputImg(type, options) {
          var prereqs = [function checkImg() {
            return this.prop.img || this.toImg();
          }];
          return this.thenList(prereqs).then(function outputImg_main() {
            switch (type) {
              case void 0:
              case "img":
                return this.prop.img;
              case "datauristring":
              case "dataurlstring":
                return this.prop.img.src;
              case "datauri":
              case "dataurl":
                return document.location.href = this.prop.img.src;
              default:
                throw 'Image output type "' + type + '" is not supported.';
            }
          });
        };
        Worker.prototype.save = function save(filename) {
          var prereqs = [function checkPdf() {
            return this.prop.pdf || this.toPdf();
          }];
          return this.thenList(prereqs).set(filename ? { filename } : null).then(function save_main() {
            this.prop.pdf.save(this.opt.filename);
          });
        };
        Worker.prototype.set = function set$$1(opt) {
          if (objType(opt) !== "object") {
            return this;
          }
          var fns = Object.keys(opt || {}).map(function(key) {
            if (key in Worker.template.prop) {
              return function set_prop() {
                this.prop[key] = opt[key];
              };
            } else {
              switch (key) {
                case "margin":
                  return this.setMargin.bind(this, opt.margin);
                case "jsPDF":
                  return function set_jsPDF() {
                    this.opt.jsPDF = opt.jsPDF;
                    return this.setPageSize();
                  };
                case "pageSize":
                  return this.setPageSize.bind(this, opt.pageSize);
                default:
                  return function set_opt() {
                    this.opt[key] = opt[key];
                  };
              }
            }
          }, this);
          return this.then(function set_main() {
            return this.thenList(fns);
          });
        };
        Worker.prototype.get = function get$$1(key, cbk) {
          return this.then(function get_main() {
            var val = key in Worker.template.prop ? this.prop[key] : this.opt[key];
            return cbk ? cbk(val) : val;
          });
        };
        Worker.prototype.setMargin = function setMargin(margin) {
          return this.then(function setMargin_main() {
            switch (objType(margin)) {
              case "number":
                margin = [margin, margin, margin, margin];
              case "array":
                if (margin.length === 2) {
                  margin = [margin[0], margin[1], margin[0], margin[1]];
                }
                if (margin.length === 4) {
                  break;
                }
              default:
                return this.error("Invalid margin array.");
            }
            this.opt.margin = margin;
          }).then(this.setPageSize);
        };
        Worker.prototype.setPageSize = function setPageSize(pageSize) {
          return this.then(function setPageSize_main() {
            pageSize = pageSize || jsPDF.getPageSize(this.opt.jsPDF);
            if (!pageSize.hasOwnProperty("inner")) {
              pageSize.inner = {
                width: pageSize.width - this.opt.margin[1] - this.opt.margin[3],
                height: pageSize.height - this.opt.margin[0] - this.opt.margin[2]
              };
              pageSize.inner.px = {
                width: toPx(pageSize.inner.width, pageSize.k),
                height: toPx(pageSize.inner.height, pageSize.k)
              };
              pageSize.inner.ratio = pageSize.inner.height / pageSize.inner.width;
            }
            this.prop.pageSize = pageSize;
          });
        };
        Worker.prototype.setProgress = function setProgress(val, state, n, stack) {
          if (val != null)
            this.progress.val = val;
          if (state != null)
            this.progress.state = state;
          if (n != null)
            this.progress.n = n;
          if (stack != null)
            this.progress.stack = stack;
          this.progress.ratio = this.progress.val / this.progress.state;
          return this;
        };
        Worker.prototype.updateProgress = function updateProgress(val, state, n, stack) {
          return this.setProgress(val ? this.progress.val + val : null, state ? state : null, n ? this.progress.n + n : null, stack ? this.progress.stack.concat(stack) : null);
        };
        Worker.prototype.then = function then(onFulfilled, onRejected) {
          var self2 = this;
          return this.thenCore(onFulfilled, onRejected, function then_main(onFulfilled2, onRejected2) {
            self2.updateProgress(null, null, 1, [onFulfilled2]);
            return Promise$1.prototype.then.call(this, function then_pre(val) {
              self2.updateProgress(null, onFulfilled2);
              return val;
            }).then(onFulfilled2, onRejected2).then(function then_post(val) {
              self2.updateProgress(1);
              return val;
            });
          });
        };
        Worker.prototype.thenCore = function thenCore(onFulfilled, onRejected, thenBase) {
          thenBase = thenBase || Promise$1.prototype.then;
          var self2 = this;
          if (onFulfilled) {
            onFulfilled = onFulfilled.bind(self2);
          }
          if (onRejected) {
            onRejected = onRejected.bind(self2);
          }
          var isNative = Promise$1.toString().indexOf("[native code]") !== -1 && Promise$1.name === "Promise";
          var selfPromise = isNative ? self2 : Worker.convert(_extends({}, self2), Promise$1.prototype);
          var returnVal = thenBase.call(selfPromise, onFulfilled, onRejected);
          return Worker.convert(returnVal, self2.__proto__);
        };
        Worker.prototype.thenExternal = function thenExternal(onFulfilled, onRejected) {
          return Promise$1.prototype.then.call(this, onFulfilled, onRejected);
        };
        Worker.prototype.thenList = function thenList(fns) {
          var self2 = this;
          fns.forEach(function thenList_forEach(fn) {
            self2 = self2.thenCore(fn);
          });
          return self2;
        };
        Worker.prototype["catch"] = function(onRejected) {
          if (onRejected) {
            onRejected = onRejected.bind(this);
          }
          var returnVal = Promise$1.prototype["catch"].call(this, onRejected);
          return Worker.convert(returnVal, this);
        };
        Worker.prototype.catchExternal = function catchExternal(onRejected) {
          return Promise$1.prototype["catch"].call(this, onRejected);
        };
        Worker.prototype.error = function error(msg) {
          return this.then(function error_main() {
            throw new Error(msg);
          });
        };
        Worker.prototype.using = Worker.prototype.set;
        Worker.prototype.saveAs = Worker.prototype.save;
        Worker.prototype.export = Worker.prototype.output;
        Worker.prototype.run = Worker.prototype.then;
        jsPDF.getPageSize = function(orientation, unit, format) {
          if ((typeof orientation === "undefined" ? "undefined" : _typeof(orientation)) === "object") {
            var options = orientation;
            orientation = options.orientation;
            unit = options.unit || unit;
            format = options.format || format;
          }
          unit = unit || "mm";
          format = format || "a4";
          orientation = ("" + (orientation || "P")).toLowerCase();
          var format_as_string = ("" + format).toLowerCase();
          var pageFormats = {
            "a0": [2383.94, 3370.39],
            "a1": [1683.78, 2383.94],
            "a2": [1190.55, 1683.78],
            "a3": [841.89, 1190.55],
            "a4": [595.28, 841.89],
            "a5": [419.53, 595.28],
            "a6": [297.64, 419.53],
            "a7": [209.76, 297.64],
            "a8": [147.4, 209.76],
            "a9": [104.88, 147.4],
            "a10": [73.7, 104.88],
            "b0": [2834.65, 4008.19],
            "b1": [2004.09, 2834.65],
            "b2": [1417.32, 2004.09],
            "b3": [1000.63, 1417.32],
            "b4": [708.66, 1000.63],
            "b5": [498.9, 708.66],
            "b6": [354.33, 498.9],
            "b7": [249.45, 354.33],
            "b8": [175.75, 249.45],
            "b9": [124.72, 175.75],
            "b10": [87.87, 124.72],
            "c0": [2599.37, 3676.54],
            "c1": [1836.85, 2599.37],
            "c2": [1298.27, 1836.85],
            "c3": [918.43, 1298.27],
            "c4": [649.13, 918.43],
            "c5": [459.21, 649.13],
            "c6": [323.15, 459.21],
            "c7": [229.61, 323.15],
            "c8": [161.57, 229.61],
            "c9": [113.39, 161.57],
            "c10": [79.37, 113.39],
            "dl": [311.81, 623.62],
            "letter": [612, 792],
            "government-letter": [576, 756],
            "legal": [612, 1008],
            "junior-legal": [576, 360],
            "ledger": [1224, 792],
            "tabloid": [792, 1224],
            "credit-card": [153, 243]
          };
          switch (unit) {
            case "pt":
              var k = 1;
              break;
            case "mm":
              var k = 72 / 25.4;
              break;
            case "cm":
              var k = 72 / 2.54;
              break;
            case "in":
              var k = 72;
              break;
            case "px":
              var k = 72 / 96;
              break;
            case "pc":
              var k = 12;
              break;
            case "em":
              var k = 12;
              break;
            case "ex":
              var k = 6;
              break;
            default:
              throw "Invalid unit: " + unit;
          }
          if (pageFormats.hasOwnProperty(format_as_string)) {
            var pageHeight = pageFormats[format_as_string][1] / k;
            var pageWidth = pageFormats[format_as_string][0] / k;
          } else {
            try {
              var pageHeight = format[1];
              var pageWidth = format[0];
            } catch (err) {
              throw new Error("Invalid format: " + format);
            }
          }
          if (orientation === "p" || orientation === "portrait") {
            orientation = "p";
            if (pageWidth > pageHeight) {
              var tmp = pageWidth;
              pageWidth = pageHeight;
              pageHeight = tmp;
            }
          } else if (orientation === "l" || orientation === "landscape") {
            orientation = "l";
            if (pageHeight > pageWidth) {
              var tmp = pageWidth;
              pageWidth = pageHeight;
              pageHeight = tmp;
            }
          } else {
            throw "Invalid orientation: " + orientation;
          }
          var info = { "width": pageWidth, "height": pageHeight, "unit": unit, "k": k };
          return info;
        };
        var orig = {
          toContainer: Worker.prototype.toContainer
        };
        Worker.template.opt.pagebreak = {
          mode: ["css", "legacy"],
          before: [],
          after: [],
          avoid: []
        };
        Worker.prototype.toContainer = function toContainer() {
          return orig.toContainer.call(this).then(function toContainer_pagebreak() {
            var root = this.prop.container;
            var pxPageHeight = this.prop.pageSize.inner.px.height;
            var modeSrc = [].concat(this.opt.pagebreak.mode);
            var mode = {
              avoidAll: modeSrc.indexOf("avoid-all") !== -1,
              css: modeSrc.indexOf("css") !== -1,
              legacy: modeSrc.indexOf("legacy") !== -1
            };
            var select = {};
            var self2 = this;
            ["before", "after", "avoid"].forEach(function(key) {
              var all = mode.avoidAll && key === "avoid";
              select[key] = all ? [] : [].concat(self2.opt.pagebreak[key] || []);
              if (select[key].length > 0) {
                select[key] = Array.prototype.slice.call(root.querySelectorAll(select[key].join(", ")));
              }
            });
            var legacyEls = root.querySelectorAll(".html2pdf__page-break");
            legacyEls = Array.prototype.slice.call(legacyEls);
            var els = root.querySelectorAll("*");
            Array.prototype.forEach.call(els, function pagebreak_loop(el) {
              var rules = {
                before: false,
                after: mode.legacy && legacyEls.indexOf(el) !== -1,
                avoid: mode.avoidAll
              };
              if (mode.css) {
                var style = window.getComputedStyle(el);
                var breakOpt = ["always", "page", "left", "right"];
                var avoidOpt = ["avoid", "avoid-page"];
                rules = {
                  before: rules.before || breakOpt.indexOf(style.breakBefore || style.pageBreakBefore) !== -1,
                  after: rules.after || breakOpt.indexOf(style.breakAfter || style.pageBreakAfter) !== -1,
                  avoid: rules.avoid || avoidOpt.indexOf(style.breakInside || style.pageBreakInside) !== -1
                };
              }
              Object.keys(rules).forEach(function(key) {
                rules[key] = rules[key] || select[key].indexOf(el) !== -1;
              });
              var clientRect = el.getBoundingClientRect();
              if (rules.avoid && !rules.before) {
                var startPage = Math.floor(clientRect.top / pxPageHeight);
                var endPage = Math.floor(clientRect.bottom / pxPageHeight);
                var nPages = Math.abs(clientRect.bottom - clientRect.top) / pxPageHeight;
                if (endPage !== startPage && nPages <= 1) {
                  rules.before = true;
                }
              }
              if (rules.before) {
                var pad = createElement("div", { style: {
                  display: "block",
                  height: pxPageHeight - clientRect.top % pxPageHeight + "px"
                } });
                el.parentNode.insertBefore(pad, el);
              }
              if (rules.after) {
                var pad = createElement("div", { style: {
                  display: "block",
                  height: pxPageHeight - clientRect.bottom % pxPageHeight + "px"
                } });
                el.parentNode.insertBefore(pad, el.nextSibling);
              }
            });
          });
        };
        var linkInfo = [];
        var orig$1 = {
          toContainer: Worker.prototype.toContainer,
          toPdf: Worker.prototype.toPdf
        };
        Worker.prototype.toContainer = function toContainer() {
          return orig$1.toContainer.call(this).then(function toContainer_hyperlink() {
            if (this.opt.enableLinks) {
              var container = this.prop.container;
              var links = container.querySelectorAll("a");
              var containerRect = unitConvert(container.getBoundingClientRect(), this.prop.pageSize.k);
              linkInfo = [];
              Array.prototype.forEach.call(links, function(link) {
                var clientRects = link.getClientRects();
                for (var i = 0; i < clientRects.length; i++) {
                  var clientRect = unitConvert(clientRects[i], this.prop.pageSize.k);
                  clientRect.left -= containerRect.left;
                  clientRect.top -= containerRect.top;
                  var page = Math.floor(clientRect.top / this.prop.pageSize.inner.height) + 1;
                  var top = this.opt.margin[0] + clientRect.top % this.prop.pageSize.inner.height;
                  var left = this.opt.margin[1] + clientRect.left;
                  linkInfo.push({ page, top, left, clientRect, link });
                }
              }, this);
            }
          });
        };
        Worker.prototype.toPdf = function toPdf() {
          return orig$1.toPdf.call(this).then(function toPdf_hyperlink() {
            if (this.opt.enableLinks) {
              linkInfo.forEach(function(l) {
                this.prop.pdf.setPage(l.page);
                this.prop.pdf.link(l.left, l.top, l.clientRect.width, l.clientRect.height, { url: l.link.href });
              }, this);
              var nPages = this.prop.pdf.internal.getNumberOfPages();
              this.prop.pdf.setPage(nPages);
            }
          });
        };
        var html2pdf2 = function html2pdf3(src, opt) {
          var worker = new html2pdf3.Worker(opt);
          if (src) {
            return worker.from(src).save();
          } else {
            return worker;
          }
        };
        html2pdf2.Worker = Worker;
        return html2pdf2;
      });
    }
  });

  // src/index.js
  var import_html2pdf = __toESM(require_html2pdf());
  console.log("Will it update?");
  async function updatePdf(renderOnce) {
    const content = editor.getValue();
    if (!renderOnce) {
      await (0, import_html2pdf.default)().from(content, "string").outputPdf("bloburi");
    }
    const pdfUrl = await (0, import_html2pdf.default)().from(content, "string").outputPdf("bloburi");
    document.getElementById("pdfContainer").data = pdfUrl;
    document.getElementById("pdfDisplayError").href = pdfUrl;
  }
  document.getElementById("htmlUpload").addEventListener("change", async () => {
    editor.setValue(await document.getElementById("htmlUpload").files[0].text());
    document.getElementById("filename").value = document.getElementById("htmlUpload").files[0].name.slice(0, -5);
    updatePdf();
  });
  var events = {
    mouseenter: (baseString) => {
      document.getElementById(`${baseString}DropDown`).classList.remove("hidden");
      document.getElementById(`${baseString}Toggle`).classList.add("bg-blue-600");
      baseStrings.filter((item) => item !== baseString).forEach((otherDropDown) => {
        document.getElementById(`${otherDropDown}DropDown`).classList.add("hidden");
        document.getElementById(`${otherDropDown}Toggle`).classList.remove("bg-blue-600");
      });
    },
    mouseleave: (baseString) => {
      document.getElementById(`${baseString}DropDown`).classList.add("hidden");
      document.getElementById(`${baseString}Toggle`).classList.remove("bg-blue-600");
    },
    click: (baseString) => {
      document.getElementById(`${baseString}DropDown`).classList.toggle("hidden");
      document.getElementById(`${baseString}Toggle`).classList.toggle("bg-blue-600");
      baseStrings.filter((item) => item !== baseString).forEach((otherDropDown) => {
        document.getElementById(`${otherDropDown}DropDown`).classList.add("hidden");
        document.getElementById(`${otherDropDown}Toggle`).classList.remove("bg-blue-600");
      });
    }
  };
  var baseStrings = ["upload", "download", "info"];
  baseStrings.forEach((baseString) => {
    document.getElementById(`${baseString}Container`).style.zIndex = 1;
    Object.keys(events).forEach((event) => {
      document.getElementById(`${baseString}Container`).addEventListener(event, () => {
        events[event](baseString);
      });
    });
  });
  var fileUrl = {
    html: () => URL.createObjectURL(new File([
      '<script src="https://cdn.tailwindcss.com"><\/script>' + editor.getValue()
    ], "temp", { type: "text/html" })),
    pdf: () => document.getElementById("pdfContainer").data
  };
  Object.keys(fileUrl).forEach((fileType) => {
    document.getElementById(`${fileType}Download`).addEventListener("click", () => {
      const triggerDownload = document.createElement("a");
      triggerDownload.href = fileUrl[fileType]();
      triggerDownload.download = `${document.getElementById("filename").value}.${fileType}`;
      triggerDownload.click();
    });
  });
  var delay;
  document.getElementById("vimMode").checked = localStorage.getItem("vimMode");
  document.getElementById("vimMode").addEventListener("change", () => {
    if (localStorage.getItem("vimMode")) {
      localStorage.removeItem("vimMode");
      editor.setOption("keyMap", "default");
    } else {
      localStorage.setItem("vimMode", true);
      editor.setOption("keyMap", "vim");
    }
  });
  var editor = CodeMirror(document.getElementById("newEditor"), {
    lineNumbers: true,
    tabSize: 2,
    mode: "text/html",
    extraKeys: {
      "Tab": "autocomplete"
      // Enable autocomplete with Ctrl+Space
    },
    hintOptions: {
      hint: CodeMirror.hint.html,
      // Use HTML-specific autocompletion
      completeSingle: true
    },
    keyMap: document.getElementById("vimMode").checked ? "vim" : "default",
    theme: "ayu-dark",
    autoCloseTags: true,
    matchTags: { bothTags: true },
    value: `<div class='m-4'>
  <div class='bg-orange-500 text-gray-300 p-8 text-4xl flex justify-center'>
    Hello World
  </div>
  <div class='m-4 bg-red-400 p-4 flex justify-between'>
    <h1 class='flex items-center'>SOME NEW CONTENT</h1>
    <a class='p-2 bg-blue-400' 
      href='https://www.google.com'
    >a link to google</a>
  </div>
</div>
<!-- Press Ctrl + Space for autocomplete -->`
  });
  document.getElementById("newEditor").children[0].style.height = "100%";
  document.getElementById("newEditor").children[0].style.zIndex = "auto";
  editor.on("change", () => {
    if (delay)
      clearTimeout(delay);
    delay = setTimeout(() => {
      updatePdf();
    }, 2e3);
  });
  updatePdf();
})();
/*! Bundled license information:

jspdf/dist/jspdf.min.js:
  (** @preserve
     * jsPDF - PDF Document creation from JavaScript
     * Version 1.4.1 Built on 2018-06-06T07:49:34.040Z
     *                           CommitID 3233f44044
     *
     * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
     *               2010 Aaron Spike, https://github.com/acspike
     *               2012 Willow Systems Corporation, willow-systems.com
     *               2012 Pablo Hess, https://github.com/pablohess
     *               2012 Florian Jenett, https://github.com/fjenett
     *               2013 Warren Weckesser, https://github.com/warrenweckesser
     *               2013 Youssef Beddad, https://github.com/lifof
     *               2013 Lee Driscoll, https://github.com/lsdriscoll
     *               2013 Stefan Slonevskiy, https://github.com/stefslon
     *               2013 Jeremy Morel, https://github.com/jmorel
     *               2013 Christoph Hartmann, https://github.com/chris-rock
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 James Makes, https://github.com/dollaruw
     *               2014 Diego Casorran, https://github.com/diegocr
     *               2014 Steven Spungin, https://github.com/Flamenco
     *               2014 Kenneth Glassey, https://github.com/Gavvers
     *
     * Licensed under the MIT License
     *
     * Contributor(s):
     *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
     *    kim3er, mfo, alnorth, Flamenco
     *)

html2canvas/dist/html2canvas.js:
  (*!
   * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
   * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
   * Released under MIT License
   *)
  (*! *****************************************************************************
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
      ***************************************************************************** *)

html2pdf.js/dist/html2pdf.js:
  (*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
   * @version   v4.2.5+7f2b526d
   *)
*/
