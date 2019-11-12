function m() {
	return function() {}
}
function q(e) {
	return function(a) {
		this[e] = a
	}
}
function s(e) {
	return function() {
		return this[e]
	}
} (function() {
	var e = {};
	window.IMAP = window.LD = e;
	e.STATIC_URL = "http://172.192.100.26:35002/jsmap/2.0/";
	e.MapConfig = {
		API_REALM_NAME: e.STATIC_URL,
		_MAP_PCIMG_SIZE: 256,
		_MAP_PCBGIMG_URL: ["http://172.192.100.19:7777/tile?mid=basemap_day&f=png&cache=true&x={x}&y={y}&z={z}&scale=", []],
		_MAP_VECTOR_BGIMG_URL: "http://172.192.100.26:9999/style/day",
		_MAP_PCIMG_ERROR: "http://tile1.ishowchina.com/404.png",
		_MAP_PC_DATAS_URL: ["http://{s}.ishowchina.com/v3/hotspot/{z}/{x}/{y}.js?algorithm=tms&s=hotspot", ["hs1", "hs2", "hs3"]],
		_CONTROL_COPYRIGHT: "<span>©2016 ishowchina - GS(2014)6062号 - Data © Leador&NavInfo </span><span> | <a target='_blank' href='http://www.ishowchina.com' style='color: #44b79d;'>我秀中国</a> | <a target='_blank' href='http://dev.ishowchina.com' style='color: #44b79d;'>开放平台</a> | <a target='_blank' href='http://about.ishowchina.com' style='color: #44b79d;'>关于我们</a> </span>",
		_MAP_BGIMG_URL: "images/backgroundimg.png",
		_CONTROL_OVERVIEW_BTNIMG: "images/overview.png",
		_MAP_MARKER_PCICON: "images/point_1.png",
		_MAP_POINT_URL: "images/point_1.png",
		_MAP_IS_POINT_URL: "images/bubble.png",
		_MAP_IS_SEARCH_URL: "images/search_03.png",
		_MAP_IS_DEFIMG_URL: "images/img_1.gif",
		_MAP_CLOSE1_URL: "images/close_1.png",
		_MAP_CLOSE2_URL: "images/close_2.png",
		_MAP_OTHER_URL: "images/other.png",
		_MAP_SCALE_UNITS: [[1E3, "公里"], [1, "米"]],
		_MAP_HAND: ["images/cur/openhand.cur", "images/cur/closedhand.cur"],
		_MAP_NAVIIMAGE: ["images/navi.png", "images/newNavi.gif"],
		_MAP_TOUCHALL: "images/touch.png",
		_MAP_ICON_BLAND_URL: "images/blank.png",
		_MAP_HOTSPOT_RECT_IMG_URL: "images/mhotspot.png",
		_MAP_CUR: "images/cur/",
		_MAP_CLUSTER_ICON: "images/cluster/",
		_CONTROL_COPYRIGHT_LOGO: "images/logoCP.png",
		_PLUGINS_URL: "http://172.192.100.26:38080/webapi/auth/v2?v=3.0.2&t=jsmap&ak=ec85d3648154874552835438ac6a02b2&m=",
		_MAP_PANORAMA: {
			FLASH_DEPENDENTS_URL: "http://192.168.120.26:38080/jsmap/3.0.2/flash/",
			ROAD_URL: "http://websv1.ishowchina.com/v3/tile/{z}/{x}/{y}.png",
			MarkerServiceUrl: "",
			TrueVisionSeverUrl: "http://210.51.167.9:8081",
			panoramaMarkerIcon: "images/monkeys.png",
			panoramaControlIcon: "images/icon_b_01.gif"
		},
		_VERSIONS: "3.0.6",
		_COUNT: "",
		_VDATA: "vdata.amap.com"
	};
	e.SRV_URL = "http://172.192.100.26:55001/";
	e.SRVConfig = {
		SRV_POI_DETAILS_URL: e.SRV_URL + "/poim?",
		SRV_GEO_URL: e.SRV_URL + "v3/geo?",
		SRV_RGEO_URL: e.SRV_URL + "v3/rgeo?",
		SRV_POI_URL: e.SRV_URL + "v3/search/poi?",
		SRV_POI_AROUND_URL: e.SRV_URL + "v3/search/poi?",
		SRV_POI_BOX_URL: e.SRV_URL + "v3/search/poi?",
		SRV_SUGGEST_URL: e.SRV_URL + "v3/sug?",
		SRV_BUS_TRANSFER_URL: e.SRV_URL + "v3/route/bus?",
		SRV_BUS_LINE_ID_URL: e.SRV_URL + "v3/search/busline/byid?",
		SRV_BUS_LINE_NAME_URL: e.SRV_URL + "v3/search/busline/byname?",
		SRV_BUS_STATION_NAME_URL: e.SRV_URL + "v3/search/busstop/byname?",
		SRV_BUS_STATION_ID_URL: e.SRV_URL + "v3/search/busstop/byid?",
		SRV_DRIVING_URL: e.SRV_URL + "v3/route/car?",
		SRV_WALKING_URL: e.SRV_URL + "v3/route/walk?",
		SRV_BOUNDARY_URL: e.SRV_URL + "v3/search/district?",
		SRV_CONVERT_URL: e.SRV_URL + "v3/coord/convert?",
		SRV_AK: "ec85d3648154874552835438ac6a02b2"
	};
	e.Function = {
		isWebGL: function() {
			var a = document.createElement("canvas");
			return a.getContext ? a.getContext("webgl", {
				antialias: !0
			}) || a.getContext("experimental-webgl", {
				antialias: !0
			}) : !1
		},
		isInDocument: function(a) {
			return a.parentNode && 11 != a.parentNode.nodeType
		},
		getLngLatByOffset: function(a, b, c) {
			a.lng = Number(a.lng);
			a.lat = Number(a.lat);
			return new e.LngLat(a.lng + 360 * Math.asin(Math.sin(Math.round(b) / 12756274) / Math.cos(a.lat * Math.PI / 180)) / Math.PI, a.lat + 360 * Math.asin(Math.round(c) / 12756274) / Math.PI)
		},
		createElement: function(a) {
			var b = document.createElement(a.name);
			a.id && (b.id = a.id);
			a.cssText && (b.style.cssText = a.cssText);
			return b
		},
		createElementNS: function(a) {
			var b = document.createElementNS(a.xmlns, a.name);
			a.cssText && (b.style.cssText = a.cssText);
			a.id && b.setAttribute("id", a.id);
			return b
		},
		getElement: function(a) {
			"string" == typeof a && (a = document.getElementById(a));
			return a
		},
		getElementsByClassName: function(a, b, c) {
			var d = [],
			e = [],
			e = b instanceof Element ? b.getElementsByTagName(c || "*") : document.getElementsByTagName(c || "*");
			for (b = 0; b < e.length; b++) e[b].className.match(RegExp("(\\s|^)" + a + "(\\s|$)")) && (d[d.length] = e[b]);
			return d
		},
		isNotNull: function() {
			var a = arguments;
			null != a[0] && e.Function.isArray(a[0]) && (a = a[0]);
			for (var b = 0; b < a.length; b++) if (null == a[b]) return ! 1;
			return ! 0
		},
		isInstance: function(a) {
			var b = !1;
			if (a === String || a === Boolean || a === Number) b = !0;
			var c = arguments;
			null != c[1] && e.Function.isArray(c[1]) && (c = c[1]);
			if (null == a) return ! 1;
			for (var d = 1; d < c.length; d++) {
				if (null == c[d]) return ! 1;
				if (! (c[d] instanceof a)) if (b) {
					if (c[d].constructor.prototype !== a.prototype) return ! 1
				} else return ! 1
			}
			return ! 0
		},
		isArray: function(a) {
			return "[object Array]" === Object.prototype.toString.call(a)
		},
		convert2Param: function(a, b) {
			b = e.Function.isArray(b) || [];
			var c = "";
			if (null != a) if ("string" == typeof a) c = a;
			else if (a instanceof Object) {
				var d = {},
				f;
				for (f in b) {
					var g = a[b[f]];
					null != g && (d[b[f]] = g, delete a[b[f]])
				}
				for (f in a) null != a[f] && (c += "&" + f + "=" + a[f]);
				c = c.substr(1);
				e.Function.extend(a, d)
			}
			return c
		},
		unSelect: function(a) {
			"WebkitUserSelect" in document.documentElement.style ? (a.style.WebkitUserSelect = "none", a.style.onselectstart = "return false;") : "MozUserSelect" in document.documentElement.style ? a.style.MozUserSelect = "none": "OUserSelect" in document.documentElement.style ? a.style.rb = "none": "msUserSelect" in document.documentElement.style ? a.style.Ta = "none": (a.unselectable = "on", a.style.Ta = "none", a.onselectstart = "return false;")
		},
		pageSize: function(a) {
			return new e.Size(a.offsetWidth || document.body.clientWidth, a.offsetHeight || (e.Browser.isIE ? "CSS1Compat" == document.compatMode ? document.documentElement.offsetHeight: document.body.offsetHeight: self.innerHeight))
		},
		lastSeqID: 0,
		createUniqueID: function() {
			e.Function.lastSeqID += 1;
			return e.Function.lastSeqID
		},
		applyDefaults: function(a, b, c) {
			b = b || {};
			if (c) for (var d in b) a[c + d] = b[d];
			else for (d in b) a[d] = b[d]
		},
		extend: function(a, b) {
			if (a && b && "object" == typeof b) {
				for (var c in b) a[c] = b[c];
				c = "initialize hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
				for (var d = 0,
				e; d < c.length; d++) e = c[d],
				Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
			}
			return a
		},
		createInterval: function(a, b) {
			return window.setInterval(a, b)
		},
		clearInterval: function(a) {
			window.clearInterval(a)
		},
		setCapture: function(a) {
			a.setCapture && a.setCapture()
		},
		releaseCapture: function(a) {
			a.releaseCapture && a.releaseCapture()
		},
		distanceByPixel: function(a, b) {
			return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
		},
		distanceByLngLat: function(a, b) {
			var c = a.lat * Math.PI / 180,
			d = b.lat * Math.PI / 180;
			return parseFloat((12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin((c - d) / 2), 2) + Math.cos(c) * Math.cos(d) * Math.pow(Math.sin((a.lng - b.lng) * Math.PI / 180 / 2), 2)))).toFixed(2))
		},
		stringLength: function(a) {
			var b = a.match(/[^\x00-\xff]/ig);
			return a.length + (null == b ? 0 : b.length)
		},
		bind: function(a, b) {
			var c = Array.prototype.slice.apply(arguments, [2]);
			return function() {
				var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
				return a.apply(b, d)
			}
		},
		transform: function() {
			for (var a = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"], b = 0; b < a.length; b++) if (a[b] in document.documentElement.style) return a[b];
			return ! 1
		},
		deleteFromArray: function(a, b, c) {
			for (var d = a.length - 1; 0 <= d; d--) {
				var e = a[d];
				c && (e = a[d][c]);
				e == b && a.splice(d, 1)
			}
		},
		calculateArea: function(a) {
			for (var b = 0,
			c = a.length,
			d = 1; d < c; d++) b += (a[d].lng - a[d - 1].lng) * (a[d].lat + a[d - 1].lat) / 2;
			b += (a[0].lng - a[c - 1].lng) * (a[0].lat + a[c - 1].lat) / 2;
			return Number(parseFloat(1E4 * Math.abs(b), 10))
		},
		getCurrentStyle: function(a, b) {
			if (a.currentStyle) return a.currentStyle[b];
			if (a.style[b]) return a.style[b];
			if (document.defaultView && document.defaultView.getComputedStyle) var c = document.defaultView.getComputedStyle(a, null);
			else window.getComputedStyle && (c = window.getComputedStyle(a, null));
			return c ? c[b] || c.getPropertyValue(b) : null
		},
		calculateShortestDist: function(a, b, c, d) {
			for (var f = {
				dis: Number.MAX_VALUE
			},
			g = a.length - 1, h = 0, k = 0; k < g; k++) {
				if (!a[k]) return null;
				var l = this.Na([a[k], a[k + 1]], b);
				l.dis < f.dis && (h = k, f = {
					lnglat: new e.LngLat(l.lng, l.lat),
					dis: l.dis,
					i: k,
					lnglat1: a[k],
					lnglat2: a[k + 1]
				})
			}
			f.index = h;
			f.dis = Math.round(e.Function.distanceByLngLat(b, f.lnglat) / c);
			f.preDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[0] : f.lnglat1) / c);
			f.nextDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[g - 1] : f.lnglat2) / c);
			return f
		},
		Na: function(a, b) {
			var c = 0,
			d = 0,
			c = a[1].lng - a[0].lng,
			d = a[1].lat - a[0].lat,
			e = -(a[0].lat - b.lat) * d - (a[0].lng - b.lng) * c,
			g;
			0 >= e ? (c = a[0].lng, d = a[0].lat) : e >= (g = c * c + d * d) ? (c = a[1].lng, d = a[1].lat) : (c = a[0].lng + e * c / g, d = a[0].lat + e * d / g);
			return {
				lng: c,
				lat: d,
				dis: Math.pow(b.lng - c, 2) + Math.pow(b.lat - d, 2)
			}
		},
		calculatePedal: function(a, b) {
			for (var c = null,
			d = null,
			f = null,
			c = null,
			g = -1,
			h = d = -1,
			k = 1,
			l = a.length; k < l; k++) if (c = a[k - 1], d = a[k], c = e.Function.za(b, c, d), null != c && (d = e.Function.xa(b, c), -1 == g || d < g)) g = d,
			f = c,
			h = k;
			return [h, f]
		},
		za: function(a, b, c) {
			var d = e.Function.ga(e.Function.L(b.lng, b.lat, a.lng, a.lat), e.Function.L(b.lng, b.lat, c.lng, c.lat));
			if (90 < d || 90 < e.Function.ga(e.Function.L(c.lng, c.lat, a.lng, a.lat), e.Function.L(c.lng, c.lat, b.lng, b.lat))) return null;
			var f = Math.sqrt((c.lng - b.lng) * (c.lng - b.lng) + (c.lat - b.lat) * (c.lat - b.lat));
			a = Math.cos(d * Math.PI / 180) * Math.sqrt((a.lng - b.lng) * (a.lng - b.lng) + (a.lat - b.lat) * (a.lat - b.lat));
			return new e.LngLat(b.lng + (c.lng - b.lng) * a / f, b.lat + (c.lat - b.lat) * a / f)
		},
		xa: function(a, b) {
			var c = b.lng - a.lng,
			d = b.lat - a.lat;
			return Math.sqrt(c * c + d * d)
		},
		L: function(a, b, c, d) {
			a = Math.round(180 * Math.atan2(c - a, d - b) / Math.PI);
			return 0 > a ? a + 360 : a
		},
		ga: function(a, b) {
			if ( - 1 == a || -1 == b) return 0;
			var c = Math.abs(b - a);
			return 180 >= c ? c: 360 - c
		},
		split: function(a, b) {
			for (var c = [], d = [], f = e.Function.calculatePedal(a, b)[0], g = 0; g < f; ++g) c.push(a[g]);
			c.push(b);
			for (d.push(b); f < a.length; ++f) d.push(a[f]);
			return [c, d]
		},
		merge: function(a, b) {
			for (var c = [], d = 0; d < a.length - 1; ++d) c.push(a[d]);
			for (d = 0; d < b.length; ++d) c.push(b[d]);
			return c
		},
		getEventPosition: function(a, b) {
			try {
				if ("undefined" != typeof a.pageX) {
					var c = e.Function.getPageOffset(b);
					return [a.pageX - c[0], a.pageY - c[1]]
				}
				if ("undefined" != typeof a.offsetX) {
					for (var d = a.target || a.srcElement,
					c = [a.offsetX, a.offsetY]; d && d != b;) {
						var f = d.style.zoom;
						f && (c[0] *= f, c[1] *= f);
						0 == d.clientWidth && 0 == d.clientHeight && d.offsetParent && "TD" == d.offsetParent.nodeName || (c[0] += d.offsetLeft, c[1] += d.offsetTop);
						d = d.offsetParent
					}
					return c
				}
				return [0, 0]
			} catch(g) {}
		},
		getPageOffset: function(a) {
			var b = 0,
			c = 0;
			if (c = a.getBoundingClientRect()) {
				b = Math.floor(c.left) + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
				c = Math.floor(c.top) + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
				b -= document.documentElement.clientLeft;
				c -= document.documentElement.clientTop;
				if ("CSS1Compat" != document.compatMode && e.Browser.isIE()) {
					a = document.body.style.borderLeftWidth;
					var d = document.body.style.borderTopWidth,
					b = b - (isNaN(a) ? 2 : a),
					c = c - (isNaN(d) ? 2 : d)
				}
				return [b, c]
			}
			for (b = [0, 0]; a && a.offsetParent;) b[0] += a.offsetLeft,
			b[1] += a.offsetTop,
			a = a.offsetParent;
			return b
		},
		getOffset: function(a, b) {
			a = this.Ba(a);
			var c = new e.Pixel(a.offsetX, a.offsetY),
			d = a.target;
			if ( - 1 < "svg,path,circle,".indexOf(a.target.nodeName) && !e.Browser.isIE9()) {
				"svg" != d.nodeName && (d = d.parentNode);
				try {
					c.x = parseInt(d.style.left) + a.offsetX,
					c.y = parseInt(d.style.top) + a.offsetY
				} catch(f) {
					return c
				}
				d = d.parentNode
			}
			try {
				for (; d && "ldmapc" != d.id;) c.x += d.offsetLeft || 0,
				c.y += d.offsetTop || 0,
				d = d.offsetParent
			} catch(g) {} finally {
				return d || (c.x -= b.layerOffset.x, c.y -= b.layerOffset.y),
				c
			}
		},
		Ba: function(a) {
			e.Browser.isIE() && (a.charCode = "keypress" == a.type ? a.keyCode: 0, a.eventPhase = 2, a.isChar = 0 < a.charCode, a.pageX = a.clientX + document.body.scrollLeft, a.pageY = a.clientY + document.body.scrollTop, a.preventDefault = function() {
				this.returnValue = !1
			},
			"mouseout" == a.type ? a.relatedTarget = a.toElement: "mouseover" == a.type && (a.relatedTarget = a.fromElement), a.stopPropagation = function() {
				this.cancelBubble = !0
			},
			a.target = a.srcElement, a.time = (new Date).getTime());
			e.Browser.isFirefox() && (a.offsetX = a.layerX, a.offsetY = a.layerY);
			a.wheelDelta && (a.detail = a.wheelDelta);
			return a
		},
		getTouchEventOffset: function(a) {
			a = a.touches || a.mc;
			for (var b = {
				x: 0,
				y: 0
			},
			c = 0; c < a.length; c++) b.x += a[c].clientX,
			b.y += a[c].clientY;
			return b
		},
		getViewportElement: function() {
			var a = arguments.callee.Ua;
			void 0 == a && (a = e.Browser.isIE() && "CSS1Compat" != document.compatMode ? document.body: document.documentElement, arguments.callee.Ua = a);
			return a
		},
		pagePosition: function(a) {
			var b = [0, 0],
			c = e.Function.getViewportElement();
			if (!a || a == window || a == c) return b;
			var d = e.Browser.isFirefox() && document.getBoxObjectFor && "absolute" == a.style.position && ("" == a.style.top || "" == a.style.left),
			f = null;
			if (a.getBoundingClientRect) a = a.getBoundingClientRect(),
			d = window.pageYOffset || c.scrollTop,
			b[0] = a.left + (window.pageXOffset || c.scrollLeft),
			b[1] = a.top + d;
			else if (document.getBoxObjectFor && !d) a = document.getBoxObjectFor(a),
			c = document.getBoxObjectFor(c),
			b[0] = a.screenX - c.screenX,
			b[1] = a.screenY - c.screenY;
			else {
				b[0] = a.offsetLeft;
				b[1] = a.offsetTop;
				f = a.offsetParent;
				if (f != a) for (; f;) b[0] += f.offsetLeft,
				b[1] += f.offsetTop,
				f = f.offsetParent;
				if (e.Browser.isOpera() || e.Browser.isSafari() && "absolute" == a.style.position) b[1] -= document.body.offsetTop;
				for (f = a.offsetParent; f && f != document.body;) b[0] -= f.scrollLeft,
				e.Browser.isOpera() && "TR" == f.tagName || (b[1] -= f.scrollTop),
				f = f.offsetParent
			}
			return b
		},
		indexOf: function(a, b, c) {
			for (var d = 0,
			e = a.length; d < e; d++) {
				var g = a[d];
				if (g && (c && (g = g[c]), g == b)) return d
			}
			return - 1
		},
		getStyle: function(a, b) {
			a = e.Function.getElement(a);
			var c = null;
			if (a && a.style) {
				c = a.style[this.ha(b)];
				c || (document.defaultView && document.defaultView.getComputedStyle ? c = (c = document.defaultView.getComputedStyle(a, null)) ? c.getPropertyValue(b) : null: a.currentStyle && (c = a.currentStyle[this.ha(b)]));
				var d = ["left", "top", "right", "bottom"];
				window.opera && -1 != e.Function.indexOf(d, b) && "static" == e.Function.getStyle(a, "position") && (c = "auto")
			}
			return "auto" == c ? null: c
		},
		ha: function(a) {
			a = a.split("-");
			for (var b = a[0], c = 1, d = a.length; c < d; c++) var e = a[c],
			b = b + (e.charAt(0).toUpperCase() + e.substring(1));
			return b
		},
		testNumber: function(a) {
			var b = {};
			b.nonNum = isNaN(a);
			b.appointNum = /^[0-9]*$/.test(a);
			return b
		},
		getNumberLength: function(a) {
			return a.toString().length
		},
		cutStrLength: function(a, b) {
			for (var c = 0,
			d = 0,
			e = 0,
			g = 0; g < b; g++) {
				255 < a.charCodeAt(g) ? c += 2 : d += 1;
				e += 1;
				if (c + d == b) return a.substring(0, e);
				if (c + d > b) return a.substring(0, e - 1) + ""
			}
		},
		checkFieldLength: function(a, b) {
			var c = 0;
			for (i = 0; i < a.length; i++) c = 255 < a.charCodeAt(i) ? c + 2 : c + 1;
			return c > b ? this.cutStrLength(a, b) : a
		},
		formatNumber: function(a, b) {
			var c = a.toString(),
			d = c.indexOf(".");
			return 0 < d ? (c = c.substring(0, d + b + 1), eval(c)) : a
		},
		clone: function(a) {
			if ("object" != typeof a || null == a) return a;
			var b = {},
			c;
			for (c in a) b[c] = e.Function.clone(a[c]);
			return b
		},
		getRotation: function(a, b) {
			var c = 0,
			d = b.y - a.y,
			e = b.x - a.x;
			0 != b.x - a.x ? (c = Math.atan((b.y - a.y) / (b.x - a.x)), 0 <= d && 0 > e ? c = Math.PI + c: 0 > d && 0 >= e ? c = Math.PI + c: 0 > d && 0 <= e && (c = 2 * Math.PI + c)) : c = b.y > a.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return (180 * c / Math.PI).toFixed(1)
		},
		unique: function(a) {
			for (var b = [], c = {},
			d = 0, e; null != (e = a[d]); d++) c[e] || (b.push(e), c[e] = !0);
			return b
		},
		containsLngLat: function(a, b) {
			for (var c = a.lng,
			d = a.lat,
			e = !1,
			g = 0,
			h = b.length,
			k = h - 1; g < h; k = g, g++) {
				var l = b[g].lng,
				p = b[g].lat,
				n = b[k].lng,
				k = b[k].lat;
				if (l === c && p === d || n === c && k === d) return ! 0;
				if (p < d && k >= d || p >= d && k < d) {
					l += (d - p) * (n - l) / (k - p);
					if (l === c) return ! 0;
					l > c && (e = !e)
				}
			}
			return e
		}
	};
	e.Function.vendorPrefix = function() {
		function a(a) {
			return a ? a.replace(/([A-Z])/g,
			function(a) {
				return "-" + a.toLowerCase()
			}).replace(/^ms-/, "-ms-") : null
		}
		function b(a, b) {
			if (void 0 === h[b]) {
				var c, e = 0,
				f = d.length,
				g = "undefined" !== typeof a.cssText;
				for (h[b] = null; e < f; e++) if ((c = d[e]) ? (g || (c = c.toLowerCase()), c = c + b.charAt(0).toUpperCase() + b.slice(1)) : c = b, void 0 !== a[c]) {
					h[b] = c;
					break
				}
			}
			return h[b]
		}
		function c(a) {
			return b(e, a)
		}
		var d = ["", "O", "ms", "Moz", "Webkit"],
		e = document.createElement("div").style,
		g = {},
		h = {};
		return {
			css: function(b) {
				if (void 0 === g[b]) {
					var d = b.replace(/(-[\s\S])/g,
					function(a) {
						return a.charAt(1).toUpperCase()
					}),
					d = c(d);
					g[b] = a(d)
				}
				return g[b]
			},
			js: b,
			style: c,
			cssCache: g,
			jsCache: h
		}
	} ();
	e.Class = function() {
		function a() {
			arguments && arguments[0] != e.Class.ic && this.initialize && this.initialize.apply(this, arguments)
		}
		for (var b = {},
		c, d = 0,
		f = arguments.length; d < f; ++d)"function" == typeof arguments[d] ? (0 == d && 1 < f && (c = arguments[d].prototype.initialize, arguments[d].prototype.initialize = m(), b = new arguments[d], void 0 === c ? delete arguments[d].prototype.initialize: arguments[d].prototype.initialize = c), c = arguments[d].prototype) : c = arguments[d],
		e.Function.extend(b, c);
		a.prototype = b;
		return a
	};
	e.Class.ic = m();
	e.Ajax = function(a) {
		var b = a || {};
		if (b.success && b.url) {
			a = b.url + e.Function.convert2Param(b.data || {});
			var c = window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
			c.open(this.type || "POST", a, this.async || !1);
			c.onreadystatechange = function() {
				4 == c.readyState && (200 == c.status ? b.success(JSON.parse(c.responseText)) : b.error instanceof Function && b.error(c.status))
			};
			c.send()
		}
	};
	e.convert = function(a, b, c) {
		function d(a) {
			for (var b = [], c, d = 0, e = a.length; d < e; ++d) c = a[d],
			b.push(Number(c.lng).toFixed(6) + "," + Number(c.lat).toFixed(6));
			return b.join(";")
		}
		if (!c || !c[0]) return c;
		for (var f = [], g = c.length, h = [], k = 0; k < g; k += 360) f.push(c.slice(k, k + 360));
		a = {
			url: e.SRVConfig.SRV_CONVERT_URL + "ak=" + e.SRVConfig.SRV_AK + "&",
			data: {
				coord_type: a,
				out_coord_type: b
			},
			success: function(a) {
				a = a.result;
				for (var b = 0,
				c = a.length; b < c; ++b) h.push(new e.LngLat(Number(a[b].x), Number(a[b].y)))
			},
			error: function() {
				h = c
			}
		};
		b = 0;
		for (g = f.length; b < g; ++b) a.data.coords = d(f[b]),
		e.Ajax(a);
		return h
	};
	e.Browser = {
		ec: window.navigator,
		q: function() {
			return window.navigator.userAgent.toLowerCase()
		},
		isIE: function() {
			return /msie/i.test(this.q())
		},
		isIE6: function() {
			return /msie 6.0/i.test(this.q())
		},
		isIE7: function() {
			return /msie 7.0/i.test(this.q())
		},
		isIE8: function() {
			return /msie 8.0/i.test(this.q())
		},
		isIE9: function() {
			return /msie 9.0/i.test(this.q())
		},
		isIE10: function() {
			return /msie 10\.0/i.test(this.q())
		},
		isChrome: function() {
			return /chrome/i.test(this.q()) && /webkit/i.test(this.q()) && /mozilla/i.test(this.q())
		},
		isSafari: function() {
			return /webkit/i.test(this.q()) && !(/chrome/i.test(this.q()) && /webkit/i.test(this.q()) && /mozilla/i.test(this.q()))
		},
		isFirefox: function() {
			return /gecko/i.test(this.q()) && !/like gecko/i.test(this.q())
		},
		isOpera: function() {
			return /opera/i.test(this.q())
		},
		isSupportKeypress: function() {
			return ! this.ec.appVersion.match(/Konqueror|Safari|KHLDL/)
		}
	};
	e.Constants = {
		_SUCC_TYPE: 0,
		_ERROR_TYPE: -1,
		_REMOVE_TOOL: "removetool",
		_Click_Interval: 500,
		_DBLClick_Interval: 250,
		_TOUCH_START: "touchstart",
		_TOUCH_ZOOM: "touchzoom",
		_TOUCH_ZOOM_END: "touchzoomEnd",
		_TOUCH_MOVE: "touchmove",
		_TOUCH_DOWN: "touchstart",
		_TOUCH_UP: "touchend",
		_TOUCH_DBLCLICK: "touchDBLClick",
		_TOUCH_CLICK: "touchClick",
		LONGPRESS: "longpress",
		_GESTURE_START: "gesturedown",
		_GESTURE_CHANGE: "gesturemove",
		_GESTURE_END: "gestureup",
		_MOUSE_SCROLL: e.Browser.isFirefox() ? "DOMMouseScroll": "mousewheel",
		RESIZE: "resize",
		LOAD: "load",
		ADD_LAYER: "layeradd",
		CHAGE_BGLAYER: "changeBgLayer",
		REMOVE_LAYER: "layerremove",
		MOVE_START: "movestart",
		MOVING: "move",
		MOVE_END: "moveend",
		MOVE_ALONG_END: "moveAlongend",
		CLICK: "click",
		HOVER: "hover",
		CHANGED: "changed",
		CHANGE: "change",
		MOUSE_CONTEXTMENU: "contextmenu",
		DBLCLICK: "dblclick",
		DBCONTEXTMENU: "dbcontextmenu",
		MOUSE_DOWN: "mousedown",
		MOUSE_UP: "mouseup",
		MOUSE_MOVE: "mousemove",
		MOUSE_OVER: "mouseover",
		MOUSE_OUT: "mouseout",
		MOUSE_WHEEL: "mousewheel",
		KEY_DOWN: "keydown",
		KEY_UP: "keyup",
		DRAG_END: "dragend",
		DRAG_START: "dragstart",
		EDIT_START: "editstart",
		EDIT_ING: "editing",
		EDIT_END: "editend",
		DRAG_ING: "drag",
		ZOOM_START: "zoomstart",
		ZOOM_CHANGED: "zoom",
		ZOOM_END: "zoomend",
		ZOOM_LEVELS_CHANGED: "zoomLevelschange",
		ADD_OVERLAY: "addoverlay",
		REMOVE_OVERLAY: "removeoverlay",
		MENU_OPEN: "menuopen",
		MENU_CLOSE: "menuclose",
		TIP_CLOSE: "tipclose",
		TIP_CLICK: "tipclick",
		TIP_REMOVE: "removetip",
		CONTROL_OVERVIEW_OPEN: "overviewopen",
		CONTROL_OVERVIEW_CLOSE: "overviewclose",
		CONTROL_OVERVIEW_CHANGE: "overviewchange",
		LEFT_TOP: [0, 0],
		TOP_CENTER: [0.5, 0],
		RIGHT_TOP: [1, 0],
		RIGHT_CENTER: [1, 0.5],
		RIGHT_BOTTOM: [1, 1],
		BOTTOM_CENTER: [0.5, 1],
		LEFT_BOTTOM: [0, 1],
		LEFT_CENTER: [0, 0.5],
		CENTER: [0.5, 0.5],
		OVERLAY_LABEL_DEFAULT: 0,
		OVERLAY_LABEL_HTML: 1,
		OVERLAY_LABEL_TEXT: 0,
		OVERLAY_INFOWINDOW_DEFAULT: 0,
		OVERLAY_INFOWINDOW_CUSTOM: 1,
		OVERLAY_LINE_SOLID: "solid",
		OVERLAY_LINE_DASHED: "5, 5",
		OVERLAY_MARKER_POINT: 1,
		OVERLAY_MARKER_SQUAREANGLE: 2,
		OVERLAY_MARKER_CIRCLE: 3,
		NODE_MOVE: "nodemove",
		TOOL_ZOOM_IN: "zoomIn",
		TOOL_ZOOM_OUT: "zoomOut",
		TOOL_BOX_H: "toolboxh",
		TOOL_BOX_V: "toolboxv",
		CONTROL_NAVIGATION_LARGE: 0,
		CONTROL_NAVIGATION_SMALL: 1,
		CONTROL_NAVIGATION_PAN: 2,
		CONTROL_NAVIGATION_ZOOM: 3,
		CONTROL_NAVIGATION_ZOOMBAR: 4,
		LAYER_HOTSPOT_ICON_TYPE: 0,
		LAYER_HOTSPOT_RECT_TYPE: 1,
		LAYER_HOTSPOT_HAND_TYPE: 2,
		HOTSPOT_CLICK: "hotspotclick",
		HOTSPOT_OVER: "hotspotover",
		HOTSPOT_OUT: "hotspotout",
		DELETE_END: "deleteend",
		SPLIT_END: "splitend",
		DELETE_NODE_END: "deletenodeend",
		ADD_NODE_END: "addnodeend",
		ERROR: "error",
		SCALE_UNIT_METRIC: "metric",
		SCALE_UNIT_IMPERIAL: "imperial",
		INCHES_PER_UNIT: {
			inches: 1,
			ft: 12,
			mi: 63360,
			m: 39.37,
			km: 39370,
			dd: 4374754,
			yd: 36
		},
		DRIVING_POLICY_LEAST_TIME: 0,
		DRIVING_POLICY_LEAST_DISTANCE: 1,
		DRIVING_POLICY_AVOID_HIGHWAYS: 2,
		POINT_SIZE_SMALL: 1,
		POINT_SIZE_MIDDLE: 2,
		POINT_SIZE_BIG: 3,
		POINT_SHAPE_STAR: 1,
		POINT_SHAPE_CIRCLE: 2,
		POINT_SHAPE_SQUAREANGLE: 3,
		POINT_SHAPE_PONT: 4,
		GPS_WGS84: "wgs84",
		GPS_GCJ02: "gcj02",
		GPS_BD: "baidu"
	};
	e.Function = {
		isWebGL: function() {
			var a = document.createElement("canvas");
			return a.getContext ? a.getContext("webgl", {
				antialias: !0
			}) || a.getContext("experimental-webgl", {
				antialias: !0
			}) : !1
		},
		isInDocument: function(a) {
			return a.parentNode && 11 != a.parentNode.nodeType
		},
		getLngLatByOffset: function(a, b, c) {
			a.lng = Number(a.lng);
			a.lat = Number(a.lat);
			return new e.LngLat(a.lng + 360 * Math.asin(Math.sin(Math.round(b) / 12756274) / Math.cos(a.lat * Math.PI / 180)) / Math.PI, a.lat + 360 * Math.asin(Math.round(c) / 12756274) / Math.PI)
		},
		createElement: function(a) {
			var b = document.createElement(a.name);
			a.id && (b.id = a.id);
			a.cssText && (b.style.cssText = a.cssText);
			return b
		},
		createElementNS: function(a) {
			var b = document.createElementNS(a.xmlns, a.name);
			a.cssText && (b.style.cssText = a.cssText);
			a.id && b.setAttribute("id", a.id);
			return b
		},
		getElement: function(a) {
			"string" == typeof a && (a = document.getElementById(a));
			return a
		},
		getElementsByClassName: function(a, b, c) {
			var d = [],
			e = [],
			e = b instanceof Element ? b.getElementsByTagName(c || "*") : document.getElementsByTagName(c || "*");
			for (b = 0; b < e.length; b++) e[b].className.match(RegExp("(\\s|^)" + a + "(\\s|$)")) && (d[d.length] = e[b]);
			return d
		},
		isNotNull: function() {
			var a = arguments;
			null != a[0] && e.Function.isArray(a[0]) && (a = a[0]);
			for (var b = 0; b < a.length; b++) if (null == a[b]) return ! 1;
			return ! 0
		},
		isInstance: function(a) {
			var b = !1;
			if (a === String || a === Boolean || a === Number) b = !0;
			var c = arguments;
			null != c[1] && e.Function.isArray(c[1]) && (c = c[1]);
			if (null == a) return ! 1;
			for (var d = 1; d < c.length; d++) {
				if (null == c[d]) return ! 1;
				if (! (c[d] instanceof a)) if (b) {
					if (c[d].constructor.prototype !== a.prototype) return ! 1
				} else return ! 1
			}
			return ! 0
		},
		isArray: function(a) {
			return "[object Array]" === Object.prototype.toString.call(a)
		},
		convert2Param: function(a, b) {
			b = e.Function.isArray(b) || [];
			var c = "";
			if (null != a) if ("string" == typeof a) c = a;
			else if (a instanceof Object) {
				var d = {},
				f;
				for (f in b) {
					var g = a[b[f]];
					null != g && (d[b[f]] = g, delete a[b[f]])
				}
				for (f in a) null != a[f] && (c += "&" + f + "=" + a[f]);
				c = c.substr(1);
				e.Function.extend(a, d)
			}
			return c
		},
		unSelect: function(a) {
			"WebkitUserSelect" in document.documentElement.style ? (a.style.WebkitUserSelect = "none", a.style.onselectstart = "return false;") : "MozUserSelect" in document.documentElement.style ? a.style.MozUserSelect = "none": "OUserSelect" in document.documentElement.style ? a.style.rb = "none": "msUserSelect" in document.documentElement.style ? a.style.Ta = "none": (a.unselectable = "on", a.style.Ta = "none", a.onselectstart = "return false;")
		},
		pageSize: function(a) {
			return new e.Size(a.offsetWidth || document.body.clientWidth, a.offsetHeight || (e.Browser.isIE ? "CSS1Compat" == document.compatMode ? document.documentElement.offsetHeight: document.body.offsetHeight: self.innerHeight))
		},
		lastSeqID: 0,
		createUniqueID: function() {
			e.Function.lastSeqID += 1;
			return e.Function.lastSeqID
		},
		applyDefaults: function(a, b, c) {
			b = b || {};
			if (c) for (var d in b) a[c + d] = b[d];
			else for (d in b) a[d] = b[d]
		},
		extend: function(a, b) {
			if (a && b && "object" == typeof b) {
				for (var c in b) a[c] = b[c];
				c = "initialize hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
				for (var d = 0,
				e; d < c.length; d++) e = c[d],
				Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
			}
			return a
		},
		createInterval: function(a, b) {
			return window.setInterval(a, b)
		},
		clearInterval: function(a) {
			window.clearInterval(a)
		},
		setCapture: function(a) {
			a.setCapture && a.setCapture()
		},
		releaseCapture: function(a) {
			a.releaseCapture && a.releaseCapture()
		},
		distanceByPixel: function(a, b) {
			return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
		},
		distanceByLngLat: function(a, b) {
			var c = a.lat * Math.PI / 180,
			d = b.lat * Math.PI / 180;
			return parseFloat((12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin((c - d) / 2), 2) + Math.cos(c) * Math.cos(d) * Math.pow(Math.sin((a.lng - b.lng) * Math.PI / 180 / 2), 2)))).toFixed(2))
		},
		stringLength: function(a) {
			var b = a.match(/[^\x00-\xff]/ig);
			return a.length + (null == b ? 0 : b.length)
		},
		bind: function(a, b) {
			var c = Array.prototype.slice.apply(arguments, [2]);
			return function() {
				var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
				return a.apply(b, d)
			}
		},
		transform: function() {
			for (var a = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"], b = 0; b < a.length; b++) if (a[b] in document.documentElement.style) return a[b];
			return ! 1
		},
		deleteFromArray: function(a, b, c) {
			for (var d = a.length - 1; 0 <= d; d--) {
				var e = a[d];
				c && (e = a[d][c]);
				e == b && a.splice(d, 1)
			}
		},
		calculateArea: function(a) {
			for (var b = 0,
			c = a.length,
			d = 1; d < c; d++) b += (a[d].lng - a[d - 1].lng) * (a[d].lat + a[d - 1].lat) / 2;
			b += (a[0].lng - a[c - 1].lng) * (a[0].lat + a[c - 1].lat) / 2;
			return Number(parseFloat(1E4 * Math.abs(b), 10))
		},
		getCurrentStyle: function(a, b) {
			if (a.currentStyle) return a.currentStyle[b];
			if (a.style[b]) return a.style[b];
			if (document.defaultView && document.defaultView.getComputedStyle) var c = document.defaultView.getComputedStyle(a, null);
			else window.getComputedStyle && (c = window.getComputedStyle(a, null));
			return c ? c[b] || c.getPropertyValue(b) : null
		},
		calculateShortestDist: function(a, b, c, d) {
			for (var f = {
				dis: Number.MAX_VALUE
			},
			g = a.length - 1, h = 0, k = 0; k < g; k++) {
				if (!a[k]) return null;
				var l = this.Na([a[k], a[k + 1]], b);
				l.dis < f.dis && (h = k, f = {
					lnglat: new e.LngLat(l.lng, l.lat),
					dis: l.dis,
					i: k,
					lnglat1: a[k],
					lnglat2: a[k + 1]
				})
			}
			f.index = h;
			f.dis = Math.round(e.Function.distanceByLngLat(b, f.lnglat) / c);
			f.preDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[0] : f.lnglat1) / c);
			f.nextDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[g - 1] : f.lnglat2) / c);
			return f
		},
		Na: function(a, b) {
			var c = 0,
			d = 0,
			c = a[1].lng - a[0].lng,
			d = a[1].lat - a[0].lat,
			e = -(a[0].lat - b.lat) * d - (a[0].lng - b.lng) * c,
			g;
			0 >= e ? (c = a[0].lng, d = a[0].lat) : e >= (g = c * c + d * d) ? (c = a[1].lng, d = a[1].lat) : (c = a[0].lng + e * c / g, d = a[0].lat + e * d / g);
			return {
				lng: c,
				lat: d,
				dis: Math.pow(b.lng - c, 2) + Math.pow(b.lat - d, 2)
			}
		},
		calculatePedal: function(a, b) {
			for (var c = null,
			d = null,
			f = null,
			c = null,
			g = -1,
			h = d = -1,
			k = 1,
			l = a.length; k < l; k++) if (c = a[k - 1], d = a[k], c = e.Function.za(b, c, d), null != c && (d = e.Function.xa(b, c), -1 == g || d < g)) g = d,
			f = c,
			h = k;
			return [h, f]
		},
		za: function(a, b, c) {
			var d = e.Function.ga(e.Function.L(b.lng, b.lat, a.lng, a.lat), e.Function.L(b.lng, b.lat, c.lng, c.lat));
			if (90 < d || 90 < e.Function.ga(e.Function.L(c.lng, c.lat, a.lng, a.lat), e.Function.L(c.lng, c.lat, b.lng, b.lat))) return null;
			var f = Math.sqrt((c.lng - b.lng) * (c.lng - b.lng) + (c.lat - b.lat) * (c.lat - b.lat));
			a = Math.cos(d * Math.PI / 180) * Math.sqrt((a.lng - b.lng) * (a.lng - b.lng) + (a.lat - b.lat) * (a.lat - b.lat));
			return new e.LngLat(b.lng + (c.lng - b.lng) * a / f, b.lat + (c.lat - b.lat) * a / f)
		},
		xa: function(a, b) {
			var c = b.lng - a.lng,
			d = b.lat - a.lat;
			return Math.sqrt(c * c + d * d)
		},
		L: function(a, b, c, d) {
			a = Math.round(180 * Math.atan2(c - a, d - b) / Math.PI);
			return 0 > a ? a + 360 : a
		},
		ga: function(a, b) {
			if ( - 1 == a || -1 == b) return 0;
			var c = Math.abs(b - a);
			return 180 >= c ? c: 360 - c
		},
		split: function(a, b) {
			for (var c = [], d = [], f = e.Function.calculatePedal(a, b)[0], g = 0; g < f; ++g) c.push(a[g]);
			c.push(b);
			for (d.push(b); f < a.length; ++f) d.push(a[f]);
			return [c, d]
		},
		merge: function(a, b) {
			for (var c = [], d = 0; d < a.length - 1; ++d) c.push(a[d]);
			for (d = 0; d < b.length; ++d) c.push(b[d]);
			return c
		},
		getEventPosition: function(a, b) {
			try {
				if ("undefined" != typeof a.pageX) {
					var c = e.Function.getPageOffset(b);
					return [a.pageX - c[0], a.pageY - c[1]]
				}
				if ("undefined" != typeof a.offsetX) {
					for (var d = a.target || a.srcElement,
					c = [a.offsetX, a.offsetY]; d && d != b;) {
						var f = d.style.zoom;
						f && (c[0] *= f, c[1] *= f);
						0 == d.clientWidth && 0 == d.clientHeight && d.offsetParent && "TD" == d.offsetParent.nodeName || (c[0] += d.offsetLeft, c[1] += d.offsetTop);
						d = d.offsetParent
					}
					return c
				}
				return [0, 0]
			} catch(g) {}
		},
		getPageOffset: function(a) {
			var b = 0,
			c = 0;
			if (c = a.getBoundingClientRect()) {
				b = Math.floor(c.left) + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
				c = Math.floor(c.top) + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
				b -= document.documentElement.clientLeft;
				c -= document.documentElement.clientTop;
				if ("CSS1Compat" != document.compatMode && e.Browser.isIE()) {
					a = document.body.style.borderLeftWidth;
					var d = document.body.style.borderTopWidth,
					b = b - (isNaN(a) ? 2 : a),
					c = c - (isNaN(d) ? 2 : d)
				}
				return [b, c]
			}
			for (b = [0, 0]; a && a.offsetParent;) b[0] += a.offsetLeft,
			b[1] += a.offsetTop,
			a = a.offsetParent;
			return b
		},
		getOffset: function(a, b) {
			a = this.Ba(a);
			var c = new e.Pixel(a.offsetX, a.offsetY),
			d = a.target;
			if ( - 1 < "svg,path,circle,".indexOf(a.target.nodeName) && !e.Browser.isIE9()) {
				"svg" != d.nodeName && (d = d.parentNode);
				try {
					c.x = parseInt(d.style.left) + a.offsetX,
					c.y = parseInt(d.style.top) + a.offsetY
				} catch(f) {
					return c
				}
				d = d.parentNode
			}
			try {
				for (; d && "ldmapc" != d.id;) c.x += d.offsetLeft || 0,
				c.y += d.offsetTop || 0,
				d = d.offsetParent
			} catch(g) {} finally {
				return d || (c.x -= b.layerOffset.x, c.y -= b.layerOffset.y),
				c
			}
		},
		Ba: function(a) {
			e.Browser.isIE() && (a.charCode = "keypress" == a.type ? a.keyCode: 0, a.eventPhase = 2, a.isChar = 0 < a.charCode, a.pageX = a.clientX + document.body.scrollLeft, a.pageY = a.clientY + document.body.scrollTop, a.preventDefault = function() {
				this.returnValue = !1
			},
			"mouseout" == a.type ? a.relatedTarget = a.toElement: "mouseover" == a.type && (a.relatedTarget = a.fromElement), a.stopPropagation = function() {
				this.cancelBubble = !0
			},
			a.target = a.srcElement, a.time = (new Date).getTime());
			e.Browser.isFirefox() && (a.offsetX = a.layerX, a.offsetY = a.layerY);
			a.wheelDelta && (a.detail = a.wheelDelta);
			return a
		},
		getTouchEventOffset: function(a) {
			a = a.touches || a.mc;
			for (var b = {
				x: 0,
				y: 0
			},
			c = 0; c < a.length; c++) b.x += a[c].clientX,
			b.y += a[c].clientY;
			return b
		},
		getViewportElement: function() {
			var a = arguments.callee.Ua;
			void 0 == a && (a = e.Browser.isIE() && "CSS1Compat" != document.compatMode ? document.body: document.documentElement, arguments.callee.Ua = a);
			return a
		},
		pagePosition: function(a) {
			var b = [0, 0],
			c = e.Function.getViewportElement();
			if (!a || a == window || a == c) return b;
			var d = e.Browser.isFirefox() && document.getBoxObjectFor && "absolute" == a.style.position && ("" == a.style.top || "" == a.style.left),
			f = null;
			if (a.getBoundingClientRect) a = a.getBoundingClientRect(),
			d = window.pageYOffset || c.scrollTop,
			b[0] = a.left + (window.pageXOffset || c.scrollLeft),
			b[1] = a.top + d;
			else if (document.getBoxObjectFor && !d) a = document.getBoxObjectFor(a),
			c = document.getBoxObjectFor(c),
			b[0] = a.screenX - c.screenX,
			b[1] = a.screenY - c.screenY;
			else {
				b[0] = a.offsetLeft;
				b[1] = a.offsetTop;
				f = a.offsetParent;
				if (f != a) for (; f;) b[0] += f.offsetLeft,
				b[1] += f.offsetTop,
				f = f.offsetParent;
				if (e.Browser.isOpera() || e.Browser.isSafari() && "absolute" == a.style.position) b[1] -= document.body.offsetTop;
				for (f = a.offsetParent; f && f != document.body;) b[0] -= f.scrollLeft,
				e.Browser.isOpera() && "TR" == f.tagName || (b[1] -= f.scrollTop),
				f = f.offsetParent
			}
			return b
		},
		indexOf: function(a, b, c) {
			for (var d = 0,
			e = a.length; d < e; d++) {
				var g = a[d];
				if (g && (c && (g = g[c]), g == b)) return d
			}
			return - 1
		},
		getStyle: function(a, b) {
			a = e.Function.getElement(a);
			var c = null;
			if (a && a.style) {
				c = a.style[this.ha(b)];
				c || (document.defaultView && document.defaultView.getComputedStyle ? c = (c = document.defaultView.getComputedStyle(a, null)) ? c.getPropertyValue(b) : null: a.currentStyle && (c = a.currentStyle[this.ha(b)]));
				var d = ["left", "top", "right", "bottom"];
				window.opera && -1 != e.Function.indexOf(d, b) && "static" == e.Function.getStyle(a, "position") && (c = "auto")
			}
			return "auto" == c ? null: c
		},
		ha: function(a) {
			a = a.split("-");
			for (var b = a[0], c = 1, d = a.length; c < d; c++) var e = a[c],
			b = b + (e.charAt(0).toUpperCase() + e.substring(1));
			return b
		},
		testNumber: function(a) {
			var b = {};
			b.nonNum = isNaN(a);
			b.appointNum = /^[0-9]*$/.test(a);
			return b
		},
		getNumberLength: function(a) {
			return a.toString().length
		},
		cutStrLength: function(a, b) {
			for (var c = 0,
			d = 0,
			e = 0,
			g = 0; g < b; g++) {
				255 < a.charCodeAt(g) ? c += 2 : d += 1;
				e += 1;
				if (c + d == b) return a.substring(0, e);
				if (c + d > b) return a.substring(0, e - 1) + ""
			}
		},
		checkFieldLength: function(a, b) {
			var c = 0;
			for (i = 0; i < a.length; i++) c = 255 < a.charCodeAt(i) ? c + 2 : c + 1;
			return c > b ? this.cutStrLength(a, b) : a
		},
		formatNumber: function(a, b) {
			var c = a.toString(),
			d = c.indexOf(".");
			return 0 < d ? (c = c.substring(0, d + b + 1), eval(c)) : a
		},
		clone: function(a) {
			if ("object" != typeof a || null == a) return a;
			var b = {},
			c;
			for (c in a) b[c] = e.Function.clone(a[c]);
			return b
		},
		getRotation: function(a, b) {
			var c = 0,
			d = b.y - a.y,
			e = b.x - a.x;
			0 != b.x - a.x ? (c = Math.atan((b.y - a.y) / (b.x - a.x)), 0 <= d && 0 > e ? c = Math.PI + c: 0 > d && 0 >= e ? c = Math.PI + c: 0 > d && 0 <= e && (c = 2 * Math.PI + c)) : c = b.y > a.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return (180 * c / Math.PI).toFixed(1)
		},
		unique: function(a) {
			for (var b = [], c = {},
			d = 0, e; null != (e = a[d]); d++) c[e] || (b.push(e), c[e] = !0);
			return b
		},
		containsLngLat: function(a, b) {
			for (var c = a.lng,
			d = a.lat,
			e = !1,
			g = 0,
			h = b.length,
			k = h - 1; g < h; k = g, g++) {
				var l = b[g].lng,
				p = b[g].lat,
				n = b[k].lng,
				k = b[k].lat;
				if (l === c && p === d || n === c && k === d) return ! 0;
				if (p < d && k >= d || p >= d && k < d) {
					l += (d - p) * (n - l) / (k - p);
					if (l === c) return ! 0;
					l > c && (e = !e)
				}
			}
			return e
		}
	};
	e.Function.vendorPrefix = function() {
		function a(a) {
			return a ? a.replace(/([A-Z])/g,
			function(a) {
				return "-" + a.toLowerCase()
			}).replace(/^ms-/, "-ms-") : null
		}
		function b(a, b) {
			if (void 0 === h[b]) {
				var c, e = 0,
				f = d.length,
				g = "undefined" !== typeof a.cssText;
				for (h[b] = null; e < f; e++) if ((c = d[e]) ? (g || (c = c.toLowerCase()), c = c + b.charAt(0).toUpperCase() + b.slice(1)) : c = b, void 0 !== a[c]) {
					h[b] = c;
					break
				}
			}
			return h[b]
		}
		function c(a) {
			return b(e, a)
		}
		var d = ["", "O", "ms", "Moz", "Webkit"],
		e = document.createElement("div").style,
		g = {},
		h = {};
		return {
			css: function(b) {
				if (void 0 === g[b]) {
					var d = b.replace(/(-[\s\S])/g,
					function(a) {
						return a.charAt(1).toUpperCase()
					}),
					d = c(d);
					g[b] = a(d)
				}
				return g[b]
			},
			js: b,
			style: c,
			cssCache: g,
			jsCache: h
		}
	} ();
	e.Event = {
		isLeftClick: function(a) {
			return 2 != a.which && 1 == a.button || 0 == a.button
		},
		stop: function(a, b) {
			b || e.Event.preventDefault(a);
			a.stopPropagation ? (a.stopPropagation(), a.preventDefault()) : a.cancelBubble = !0
		},
		preventDefault: function(a) {
			a.preventDefault ? a.preventDefault() : a.returnValue = !1
		}
	};
	e.Events = e.Class({
		initialize: function() {
			this.H = {};
			this.Z = {}
		},
		addEventListener: function(a, b, c, d) {
			if (b && "function" === typeof b) {
				var e = this.H[a];
				e || (e = []);
				b = {
					obj: c || this,
					func: b,
					type: a,
					stop: d
				};
				e.push(b);
				this.H[a] = e;
				return b
			}
		},
		removeEventListener: function(a, b) {
			if (a) {
				var c, d = this.H[a.type];
				if (null != d) for (var e = 0,
				g = d.length; e < g; e++) if (c = d[e], a.func == c.func || b && a.obj == c.obj) {
					d.splice(e, 1);
					break
				}
			}
		},
		triggerEvent: function(a, b) {
			var c = this.H[a];
			if (c && 0 != c.length) {
				b || (b = {});
				for (var c = c.slice(), d, f = 0, g = c.length; f < g; ++f) d = c[f],
				b.stop = d.stop,
				d.func.apply(d.obj, [b]);
				e.Event.stop(b, !0)
			}
		},
		clearListener: function() {
			this.H = {}
		},
		getListeners: s("H")
	});
	e.DOMEvents = e.Class({
		initialize: function() {
			this.Z = {}
		},
		attachToElement: function(a) {
			for (var b, c = 0,
			d = a.length; c < d; ++c) b = a[c],
			this.Pb(b.element, b.name, this.U(b.callback, b.object, b.stop))
		},
		detachToElement: function(a) {
			for (var b, c = 0,
			d = a.length; c < d; ++c) b = a[c],
			this.ib(b.element, b.name)
		},
		Pb: function(a, b, c) {
			a = e.Function.getElement(a);
			"keypress" == b && (e.Browser.isSupportKeypress() || a.attachEvent) && (b = "keydown");
			a.qa || (a.qa = "eventCacheID_" + e.Function.createUniqueID());
			var d = a.qa;
			this.Z[d] || (this.Z[d] = []);
			this.Z[d].push({
				element: a,
				type: b,
				observer: c
			});
			a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		ib: function(a, b) {
			var c = a.qa,
			d = this.Z[c],
			e = !1;
			if (d) for (var g, h = 0,
			k = d.length; h < k; ++h) if (g = d[h], g.type == b) {
				d.splice(h, 1);
				0 == d.length && (this.Z[c] = null);
				e = !0;
				break
			}
			e && (a.removeEventListener ? a.removeEventListener(b, g.observer, !1) : a.detachEvent && a.detachEvent("on" + b, g.observer))
		},
		U: function(a, b, c) {
			return function(d) {
				d.stop = c || ("boolean" == typeof b.stop ? b.stop: !1);
				return a.call(b, d || window.event)
			}
		},
		jb: function(a) {
			a = e.Function.getElement(a);
			this.Ub(this.Z[a.qa])
		},
		Ub: function(a) {
			if (a) for (var b = a.length - 1; 0 <= b; b--) {
				var c = a[b];
				this.ib.apply(this, [c.element, c.type])
			}
		}
	});
	e.Loader = e.Class(e.DOMEvents, e.Events, {
		initialize: function() {
			this.mb = window;
			this._charset = "utf-8";
			this._name = "_OLR";
			this._url = null;
			e.DOMEvents.prototype.initialize.apply(this, []);
			e.Events.prototype.initialize.apply(this, [])
		},
		load: function(a) {
			var b = this;
			e.Function.applyDefaults(b, a, "_");
			var c = b.mb;
			b._alias = a.alias || null;
			b._name = a.name ? a.name + (a.nameCode || "") : b._name;
			c[b._name] = b._name;
			var d = b.Gb();
			e.Browser.isIE() ? d.onreadystatechange = function() {
				"loaded" != this.readyState && "complete" != this.readyState || b.Va(this, b._alias)
			}: d.onload = function() {
				b.Va(this, b._alias)
			};
			d.onerror = function() {
				b.triggerEvent("error", b._alias);
				b.running = !1
			};
			c.document.body.insertBefore(d, c.document.body.firstChild);
			setTimeout(function() {
				try {
					c[a.url + "done"] ? (c.document.body.removeChild(d), c[a.url + "done"] = null) : d = null
				} catch(b) {
					d = null,
					c[a.url + "done"] = null
				}
			},
			5E3);
			b.running = !0
		},
		Va: function(a, b) {
			var c = this.mb;
			a && (c[a.src + "done"] = !0, c[this._name] ? (b && (c[this._name].alias = b), this.triggerEvent("loaded", c[this._name]), c[this._name] = null) : this.triggerEvent("error", b), a && a.parentNode == c.document.body && a.removeAttribute("src"));
			this.running = !1
		},
		register: function(a, b, c, d) {
			if (b && "function" === typeof b) {
				var e = this.H[a];
				e || (e = []);
				b = {
					obj: c || this,
					func: b,
					type: a,
					stop: d
				};
				e.push(b);
				this.H[a] = e;
				return b
			}
		},
		triggerEvent: function(a, b) {
			var c = this.H[a];
			if (c && 0 != c.length) {
				b || (b = {});
				for (var c = c.slice(), d, f = 0, g = c.length; f < g; ++f) d = c[f],
				b.stop = d.stop,
				d.func.apply(d.obj, [b]);
				e.Event.stop(b, !0)
			}
		},
		clearListener: function() {
			this.H = {}
		},
		Gb: function() {
			var a = document.createElement("script");
			a.setAttribute("type", "text/javascript");
			a.setAttribute("src", this._url);
			a.setAttribute("charset", this._charset);
			a.alias = this._alias;
			return a
		}
	});
	e.LoaderManager = {
		Db: [],
		getEntity: function() {
			for (var a = this.Db,
			b, c = 0,
			d = a.length; c < d; ++c) if (!1 == a[c].running) {
				b = a[c];
				b.clearListener();
				break
			}
			b || (b = new e.Loader, a.push(b));
			return b
		}
	};
	e.LngLat = e.Class({
		lng: -1,
		lat: -1,
		initialize: function(a, b) {
			isNaN(a) || isNaN(b) || (this.lng = Number(Number(a).toFixed(5)), this.lat = Number(Number(b).toFixed(5)))
		},
		clone: function() {
			return new e.LngLat(this.lng, this.lat)
		},
		setLng: function(a) {
			isNaN(a) || (this.lng = a)
		},
		setLat: function(a) {
			isNaN(a) || (this.lat = a)
		},
		getLng: s("lng"),
		getLat: s("lat"),
		transform: function(a, b, c) {
			if (a != b) {
				a = proj4(Proj4js.defs[a], Proj4js.defs[b], [this.lng, this.lat]);
				a[0] = Number(Number(a[0]).toFixed(6));
				a[1] = Number(Number(a[1]).toFixed(6));
				if (c) return c = this.clone(),
				c.lng = a[0],
				c.lat = a[1],
				c;
				this.lng = a[0];
				this.lat = a[1]
			}
		},
		equals: function(a) {
			return "object" != typeof a || isNaN(a.lng) || isNaN(a.lat) ? !1 : a.lng == this.lng && a.lat == this.lat
		},
		toString: function(a) {
			return this.lng + (a || ",") + this.lat
		},
		isNull: function() {
			return ! ((this.lng && !isNaN(this.lng) || -1 == this.lng) && (this.lat && !isNaN(this.lat) || -1 == this.lat))
		},
		offset: function(a, b) {
			return isNaN(a) || isNaN(b) ? !1 : new e.LngLat(this.lng + 360 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.lat * Math.PI / 180)) / Math.PI, this.lat + 360 * Math.asin(Math.round(b) / 12756274) / Math.PI)
		}
	});
	e.Pixel = e.Class({
		x: 0,
		y: 0,
		initialize: function(a, b) {
			isNaN(a) || isNaN(b) || (this.x = Number(a), this.y = Number(b))
		},
		clone: function() {
			return new e.Pixel(this.x, this.y)
		},
		setX: function(a) {
			isNaN(a) || (this.x = a)
		},
		getX: s("x"),
		setY: function(a) {
			isNaN(a) || (this.y = a)
		},
		getY: s("y"),
		appendX: function(a) {
			this.x += a
		},
		appendY: function(a) {
			this.y += a
		},
		equals: function(a) {
			return "object" != typeof a || isNaN(a.x) || isNaN(a.y) ? !1 : a.x == this.x && a.y == this.y
		},
		isNull: function() {
			return ! ((this.x && !isNaN(this.x) || 0 == this.x) && (this.y && !isNaN(this.y) || 0 == this.y))
		},
		toString: function(a) {
			return this.x + (a || ",") + this.y
		}
	});
	e.LngLatBounds = e.Class({
		southwest: null,
		northeast: null,
		initialize: function(a, b) {
			if ("object" == typeof a || -1 == a.lng && -1 == a.lat && "object" == typeof b || -1 == b.lng && -1 == b.lat) this.southwest = a,
			this.northeast = b
		},
		equals: function(a) {
			return "object" != typeof a || "object" != typeof a.southwest || "object" != typeof a.northeast || isNaN(a.southwest.lng) || isNaN(a.southwest.lat) || isNaN(a.northeast.lng) || isNaN(a.northeast.lat) ? !1 : a.southwest.lng == this.southwest.lng && a.southwest.lat == this.southwest.lat && a.northeast.lng == this.northeast.lng && a.northeast.lat == this.northeast.lat
		},
		containsLngLat: function(a) {
			if ("object" != typeof a || isNaN(a.lng) || isNaN(a.lat)) return ! 1;
			var b = this.southwest,
			c = this.northeast;
			return a.lat >= b.lat && a.lat <= c.lat && a.lng >= b.lng && a.lng <= c.lng
		},
		containsBounds: function(a) {
			if ("object" != typeof a) return ! 1;
			var b = a.southwest;
			a = a.northeast;
			var c = this.southwest,
			d = this.northeast;
			return b.lat >= c.lat && a.lat <= d.lat && b.lng >= c.lng && a.lng <= d.lng
		},
		intersects: function(a) {
			var b = Math.min(a.northeast.lng, this.northeast.lng),
			c = Math.min(a.northeast.lat, this.northeast.lat),
			d = Math.max(a.southwest.lng, this.southwest.lng);
			a = Math.max(a.southwest.lat, this.southwest.lat);
			return b >= d && c >= a ? new e.LngLatBounds(new e.LngLat(d, a), new e.LngLat(b, a)) : null
		},
		getIntersection: function(a, b) {
			var c = [],
			d = this.northeast,
			f = this.southwest;
			if (a.lat == b.lat) {
				if (a.lng == b.lng) return c;
				if (a.lat >= f.lat && a.lat < d.lat) {
					var g = a.lng <= f.lng ? -1 : a.lng >= d.lng ? 1 : 0,
					h = b.lng <= f.lng ? -1 : b.lng >= d.lng ? 1 : 0;
					if (g == h) return c;
					0 >= g + h && c.push(new e.LngLat(f.lng, a.lat));
					0 <= g + h && c.push(new e.LngLat(d.lng, a.lat))
				}
				return c
			}
			if (a.lng == b.lng) {
				if (a.lng >= f.lng && a.lng < d.lng) {
					g = a.lat <= f.lat ? -1 : a.lat >= d.lat ? 1 : 0;
					h = b.lat <= f.lat ? -1 : b.lat >= d.lat ? 1 : 0;
					if (g == h) return c;
					0 >= g + h && c.push(new e.LngLat(a.lng, f.lat));
					0 <= g + h && c.push(new e.LngLat(a.lng, d.lat))
				}
				return c
			}
			g = (b.lat - a.lat) * (f.lng - a.lng) / (b.lng - a.lng) + a.lat;
			g >= f.lat && g < d.lat && 0 >= (g - a.lat) * (g - b.lat) && c.push(new e.LngLat(f.lng, g));
			g = (b.lat - a.lat) * (d.lng - a.lng) / (b.lng - a.lng) + a.lat;
			g >= f.lat && g < d.lat && 0 >= (g - a.lat) * (g - b.lat) && c.push(new e.LngLat(d.lng, g));
			g = (b.lng - a.lng) * (d.lat - a.lat) / (b.lat - a.lat) + a.lng;
			g >= f.lng && g < d.lng && 0 >= (g - a.lng) * (g - b.lng) && c.push(new e.LngLat(g, d.lat));
			g = (b.lng - a.lng) * (f.lat - a.lat) / (b.lat - a.lat) + a.lng;
			g >= f.lng && g < d.lng && 0 >= (g - a.lng) * (g - b.lng) && c.push(new e.LngLat(g, f.lat));
			2 == c.length && c[0].lng == c[1].lng && c.pop();
			return c
		},
		extend: function(a) {
			var b = this.southwest,
			c = this.northeast,
			d;
			if (a instanceof e.LngLat || a instanceof IMAP.LngLat) d = a;
			else if (a instanceof e.LngLatBounds || a instanceof IMAP.LngLatBounds) {
				if (d = a.southwest, a = a.northeast, !d || !a) return this
			} else return this;
			b || c ? (b.lat = Math.min(d.lat, b.lat), b.lng = Math.min(d.lng, b.lng), c.lat = Math.max(a.lat, c.lat), c.lng = Math.max(a.lng, c.lng)) : (this.southwest = new e.LngLat(d.lng, d.lat), this.northeast = new e.LngLat(a.lng, a.lat));
			return this
		},
		getCenter: function() {
			return new e.LngLat((this.southwest.lng + this.northeast.lng) / 2, (this.northeast.lat + this.southwest.lat) / 2)
		},
		setSouthWest: q("southwest"),
		getSouthWest: s("southwest"),
		setNorthEast: q("northeast"),
		getNorthEast: s("northeast"),
		getWidth: function() {
			return this.northeast.lng - this.southwest.lng
		},
		getHeight: function() {
			return this.northeast.lat - this.southwest.lat
		},
		clone: function() {
			return new e.LngLatBounds(this.southwest, this.northeast)
		}
	});
	e.Size = e.Class({
		width: 0,
		height: 0,
		initialize: function(a, b) {
			isNaN(a) && (a = 0);
			isNaN(b) && (b = 0);
			this.width = Number(a);
			this.height = Number(b)
		},
		getWidth: s("width"),
		getHeight: s("height"),
		equals: function(a) {
			return "object" != typeof a || isNaN(a.width) || isNaN(a.height) ? !1 : a.width == this.width && a.height == this.height
		},
		toString: function(a) {
			return this.width + (a || ",") + this.height
		}
	});
	e.Layer = e.Class({
		initialize: function(a) {
			a = a || {};
			this.cb = "";
			this.eb = 1;
			this.Q = a.visible = "boolean" == typeof a.visible ? a.visible: !0;
			this.ia = "ldlayer_" + e.Function.createUniqueID();
			this._options = a
		},
		getElement: s("F"),
		getOptions: s("_options"),
		setZIndex: function(a) {
			isNaN(a) || (this.Ra = a, this.F.style.zIndex = this.Ra)
		},
		getZIndex: s("Ra"),
		getId: s("ia"),
		setName: q("cb"),
		getName: s("cb"),
		destroy: m(),
		getMap: s("a"),
		setOpacity: function(a) {
			if (!isNaN(a)) {
				this.eb = a;
				for (var b = 0,
				c = this.F.childNodes.length; b < c; b++) e.Browser.isIE7() || e.Browser.isIE8() ? this.F.childNodes[b].style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * a + ")": this.F.childNodes[b].style.opacity = a
			}
		},
		getOpacity: s("eb"),
		visible: function(a) {
			this.Q = a;
			this.F && (this.F.style.display = a ? "block": "none")
		},
		getVisible: s("Q"),
		setType: q("Kb"),
		getType: s("Kb"),
		isLayerSwitcher: function() {
			return this._options.isLayerSwitcher
		},
		getTiles: s("uc")
	});
	e.LayerOptions = e.Class({
		hotspotOptions: null,
		maxZoom: null,
		minZoom: null,
		baseUrl: null,
		tileSize: null
	});
	e.OverlayOptions = e.Class({
		initialize: function() {
			this.visible = this.anchor = this.position = this.title = this.offset = null
		}
	});
	e.InfoWindowOptions = e.Class(e.OverlayOptions, {
		initialize: function() {
			this.autoPan = this.type = null;
			e.OverlayOptions.prototype.initialize.apply(this)
		}
	});
	e.LabelOptions = e.Class(e.OverlayOptions, {
		initialize: function() {
			this.zIndex = this.fontBold = this.fontSize = this.fontColor = this.fontName = this.type = null;
			e.OverlayOptions.prototype.initialize.apply(this)
		}
	});
	e.MarkerOptions = e.Class(e.OverlayOptions, {
		initialize: function() {
			this.angleOffsetX = this.raiseOnDrag = this.zIndex = this.pointAlpha = this.pointLineWdith = this.pointFillColor = this.pointStrokeColor = this.pointType = this.icon = null;
			e.OverlayOptions.prototype.initialize.apply(this)
		}
	});
	e.IconOptions = e.Class({
		initialize: function() {
			this.backgroundSize = this.offset = this.size = null
		}
	});
	e.PointCollectionOptions = e.Class({
		initialize: function() {
			this.opacity = this.fillColor = this.strokeWeight = this.strokeColor = this.shape = this.size = null
		}
	});
	e.Overlay = e.Class({
		initialize: function() {
			this.ia = "_ld_overlay_" + e.Function.createUniqueID();
			this.h = e.Constants.GPS_GCJ02;
			this.j = !1
		},
		N: m(),
		getMap: s("a"),
		getElement: s("n"),
		getOffset: function() {
			return this.b.offset
		},
		getAnchor: function() {
			return this.b.anchor
		},
		visible: function(a) {
			if (this.a) {
				var b = this.getElement();
				b && (b.style.visibility = a ? "inherit": "hidden")
			}
			this.b.visible = a
		},
		getId: s("ia"),
		addEventListener: function(a, b, c, d) {
			b = this.U(b, c || this, d, this);
			this.d.on(a, b, this);
			return {
				type: a,
				obj: c || this,
				func: b,
				stop: d
			}
		},
		o: function(a) {
			this.j && (a = e.convert(this.g, this.h, a));
			return a
		},
		C: function(a) {
			this.j && (a = e.convert(this.h, this.g, a));
			return a
		},
		U: function(a, b, c, d) {
			return function(f) {
				f.originalEvent && (f.originalEvent._stopped = c);
				var g = f.latlng ? new e.LngLat(f.latlng.lng, f.latlng.lat) : null,
				g = d.o([g])[0];
				return a.call(b, {
					stop: c || b.stop,
					type: f.type,
					target: d,
					lnglat: g
				})
			}
		},
		removeEventListener: function(a) {
			this.d.off(a.type, a.func, a.obj)
		},
		setPosition: function(a) {
			a && (this.b.position = a, this.d && (a = this.o([a])[0], this.d.setLatLng([a.lat, a.lng])))
		},
		getPosition: function(a) {
			if (this.a) {
				var b = this.d.getLatLng();
				a || (positiont = this.C([b])[0]);
				return new e.LngLat(b.lng, b.lat)
			}
			return this.b.position
		},
		ma: function() {
			this.d && (lnglat = this.getPosition(), lnglat = this.o([lnglat])[0], this.d.setLatLng([lnglat.lat, lnglat.lng]))
		},
		A: m(),
		_draw: m(),
		ba: function() {
			this.la();
			this.a = null;
			this.Ma = !1
		},
		getAttribute: s("b"),
		_reqOvarlayAsyn: m(),
		sc: m(),
		fa: function(a, b) {
			return new L.point(b.width * a[0], b.height * a[1])
		},
		O: function() {
			this.n = this.d.getElement()
		}
	});
	e.Icon = e.Class({
		initialize: function(a, b, c, d) {
			this.Ca = a || e.qb.nc + e.qb.qc;
			b = b || {};
			c || b.width ? (this.na = b || new e.Size(32, 32), this.ja = c || {
				x: 0,
				y: 1
			},
			this.oa = d || null) : (this.na = b.size || new e.Size(32, 32), this.ja = b.offset || {
				x: 0,
				y: 1
			},
			this.oa = b.backgroundSize || null);
			this.da = null
		},
		getElement: function() {
			var a = e.Function.createElement({
				name: "img",
				cssText: "position:absolute;left: " + this.ja.x + "px; top: " + this.ja.y + "px;z-index:-1;cursor:pointer;"
			});
			a.src = this.Ca;
			return this.da = a
		},
		getSize: s("na"),
		getSrc: s("Ca"),
		setSrc: function(a) {
			this.Ca = a;
			this.da && (this.da.src = a)
		},
		setOffset: function(a) {
			this.ja = a;
			this.da && (this.da.style.left = a.x + "px", this.da.style.top = a.y + "px")
		},
		getOffset: s("ja"),
		setSize: function(a) {
			this.na = a || this.na
		},
		setBackgroundSize: function(a) {
			this.oa = a || this.oa
		},
		getBackgroundSize: s("oa")
	});
	e.InfoWindow = e.Class(e.Overlay, {
		initialize: function(a, b) {
			b = b || {};
			var c = {
				offset: b.offset || new e.Pixel(0, 7),
				autoPan: b.autoPan || !1,
				position: b.position || null,
				anchor: b.anchor || e.Constants.BOTTOM_CENTER,
				visible: "boolean" == typeof b.visible ? b.visible: !0,
				type: b.type || e.Constants.OVERLAY_INFOWINDOW_DEFAULT
			};
			this.g = b.gpsType;
			if (b.size && c.type == e.Constants.OVERLAY_INFOWINDOW_DEFAULT) var d = Math.min(Math.max(b.size.width, 50), 600),
			f = Math.min(Math.max(b.size.height, 50), 600),
			d = new e.Size(d, f);
			else d = c.type == e.Constants.OVERLAY_INFOWINDOW_DEFAULT ? new e.Size(300, 200) : new e.Size(0, 0);
			c.size = d;
			c.title = b.title || "";
			this.b = c;
			this.w = a || "";
			e.Overlay.prototype.initialize.apply(this, []);
			c = this.b.offset;
			b = {
				autoPan: this.b.autoPan,
				keepInView: !1,
				closeOnClick: !1,
				offset: [c.x, c.y],
				zoomAnimation: !0,
				title: this.b.title,
				width: this.b.size.width,
				height: this.b.size.height,
				type: this.b.type,
				title: this.b.title,
				anchor: this.b.anchor
			};
			this.d = L.popup(b).setContent(this.w)
		},
		clone: function() {
			return new e.InfoWindow(this.w, this.b)
		},
		setTitle: function(a) {
			this.b.title = a;
			this.d.setTitle(a)
		},
		getTitle: function() {
			return this.b.title
		},
		setContent: function(a) {
			this.w = a;
			this.d.setContent(a)
		},
		getPosition: function() {
			return this.b.position
		},
		getContent: s("w"),
		setSize: function(a) {
			if (a instanceof e.Size) {
				var b = Math.min(Math.max(a.width, 50), 600),
				c = Math.min(Math.max(a.height, 50), 600);
				a = new e.Size(b, c);
				this.b.size = a;
				this.d.setSize(b, c);
				this.d.setContent(this.w)
			}
		},
		setAnchor: function(a) {
			a && (this.b.anchor = a, this.d.options.anchor = a, this.ma())
		},
		setOffset: function(a) {
			a instanceof e.Pixel && (this.b.offset = a, this.d.options.offset = [a.x, a.y], this.ma())
		},
		autoPan: function(a, b) {
			a = a || !1;
			this.b.autoPan = a;
			this.d.options.autoPan = a;
			this.d.update(b)
		},
		setType: function(a) {
			a && (this.b.type = a, this.d.options.type = a)
		},
		N: function(a) {
			a instanceof e.Map ? (this.a = a, a.getOverlayLayer(), this.d._source = this.a.mapObj, this.g = this.g || a.gpsType(), this.j = this.g != this.h, a = this.b.position, a = this.o([a])[0], this.a.mapObj.openPopup(this.d, a), this.O(), this.setAnchor(this.b.anchor), this.visible(this.b.visible)) : (this.ba(), this.a = null)
		},
		la: function() {
			this.d && this.a && this.a.mapObj.removeLayer(this.d, !1, !0)
		}
	});
	e.Marker = e.Class(e.Overlay, {
		initialize: function(a, b) {
			b = b || {};
			var c = {
				editabled: b.editabled || !1,
				anchor: b.anchor || e.Constants.BOTTOM_CENTER,
				icon: b.icon || null,
				offset: b.offset || new e.Pixel(0, 0),
				visible: "boolean" == typeof b.visible ? b.visible: !0,
				title: b.title ? e.Function.checkFieldLength(b.title, 50) : "",
				markerColor: b.markerColor || "#ff0000",
				shadow: b.shadow || !1,
				pointType: b.pointType || 1,
				pointWidth: b.pointWidth || 0,
				pointHeight: b.pointHeight || 0,
				pointStrokeColor: b.pointStrokeColor || "#4169D3",
				pointFillColor: b.pointFillColor || "#4169D3",
				pointLineWidth: b.pointLineWidth || "1",
				pointAlpha: b.pointAlpha || 1,
				raiseOnDrag: b.raiseOnDrag || !1,
				angleOffsetX: "number" == typeof b.angleOffsetX ? b.angleOffsetX: null,
				flagText: b.flagText || ""
			};
			c.position = a;
			this.g = b.gpsType;
			this.B = null;
			this.I = {};
			this.zIndex = isNaN(b.zIndex) || null == b.zIndex ? 2 : b.zIndex;
			this.b = c;
			this.na = c.icon ? c.icon.getSize() : new e.Size(21, 34);
			e.Overlay.prototype.initialize.apply(this, []);
			this.X = null;
			this.sizingMethod = 'SizingMethod="auto expand"';
			var d = c.icon;
			switch (parseInt(c.pointType)) {
			case 1:
				c.pointWidth = 0 == parseInt(c.pointWidth) ? 23 : c.pointWidth;
				c.pointHeight = 0 == parseInt(c.pointHeight) ? 36 : c.pointHeight;
				break;
			case 2:
			case 3:
				c.pointWidth = 0 == parseInt(c.pointWidth) ? 22 : c.pointWidth,
				c.pointHeight = 0 == parseInt(c.pointHeight) ? 22 : c.pointHeight
			}
			var f = this.fa(c.anchor, d ? d.getSize() : {
				width: c.pointWidth,
				height: c.pointHeight
			});
			if (d) {
				var g = d.getOffset(),
				h = d.getSize(),
				d = {
					iconUrl: d.getSrc(),
					iconSize: [h.width, h.height],
					iconPosition: [g.x, g.y],
					anchor: f,
					iconVisibility: c.visible,
					offset: [c.offset.x, c.offset.y],
					popupAnchor: [0, -h.height]
				};
				c.flagText ? (d.text = c.flagText.text, d.style = c.flagText.style, d = new L.TextDivIcon(d)) : d = new L.Icon(d)
			} else d = L.VectorIcon.icon({
				icon: "",
				iconSize: [c.pointWidth, c.pointHeight],
				prefix: "fa",
				markerColor: c.pointFillColor,
				strokewidth: c.pointLineWidth,
				strokecolor: c.pointStrokeColor,
				alpha: c.pointAlpha,
				iconVisibility: c.visible,
				offset: [c.offset.x, c.offset.y],
				anchor: f,
				spin: !0,
				type: c.pointType
			});
			c = {
				icon: d,
				draggable: c.editabled,
				title: this.getTitle(),
				riseOffset: 222,
				raiseOnDrag: c.raiseOnDrag,
				angleOffsetX: c.angleOffsetX,
				raiseUrl: e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_CLOSE1_URL,
				zIndexOffset: this.zIndex
			};
			this.d = new L.Marker(null, c)
		},
		clone: function() {
			return new e.Marker(this.b.position, this.b)
		},
		editable: function(a) {
			this.b.editabled = a;
			this.d.options.draggable = a;
			this.d.dragging && (a ? this.d.dragging.enable() : this.d.dragging.disable())
		},
		P: function(a) {
			this.d.setLatLng([a.lat, a.lng])
		},
		moveTo: function(a, b, c, d) {
			var f = this,
			g = f.a;
			if (g) {
				var h = 0,
				k = f.getPosition(!0);
				d || (a = f.o([a])[0]);
				var l = a.lng - k.lng,
				p = a.lat - k.lat,
				n = Math.round(3.6 * e.Function.distanceByLngLat(a, k) / b);
				b = new L.LatLng(a.lat, a.lng);
				var r = f.C([b])[0],
				t = this.d._map.latLngToContainerPoint(r),
				u = this.d._map.latLngToLayerPoint(r);
				if (0 == n) f.P(b),
				f.d.fire("moveend", {
					latlng: r,
					containerPoint: t,
					layerPoint: u
				});
				else {
					var v = (new e.Tween).Linear;
					f.B && e.Function.clearInterval(f.B);
					f.B = e.Function.createInterval(function() {
						h++;
						f.P({
							lng: v(h, k.lng, l, n),
							lat: v(h, k.lat, p, n)
						});
						h >= n && (f.P(a), e.Function.clearInterval(f.B), f.B = null, f.d.fire("moveend", {
							latlng: r,
							containerPoint: t,
							layerPoint: u
						}))
					},
					40)
				}
				c && f.rotate(e.Function.getRotation(g.lnglatToPixel(k), g.lnglatToPixel(a)));
				return n
			}
		},
		moveAlong: function(a, b, c, d) {
			var f = this,
			g = f.a;
			if (g) {
				a = f.o(a);
				var h = 1;
				f.I[0] ? f.I[1] ? (h = f.I[0], f.P(f.I[1])) : (f.P(a[0]), f.I[0] = h) : (f.P(a[0]), f.I[0] = h);
				f.M && (f.removeEventListener(f.M), f.M = null);
				f.M = f.addEventListener(e.Constants.MOVE_END,
				function() {
					h++;
					if (h < a.length) f.moveTo(a[h], b, d, !0),
					f.I[0] = h;
					else if (c) h = 1,
					f.I[0] = h,
					f.P(a[0]),
					f.moveTo(a[h], b, d, !0);
					else {
						f.I[0] = 0;
						f.M && (f.removeEventListener(f.M), f.M = null);
						f.va && (f.removeEventListener(f.va), f.va = null);
						var e = new L.LatLng(a[a.length - 1].lat, a[[a.length - 1]].lng),
						g = f.C([e])[0],
						p = this.d._map.latLngToContainerPoint(g),
						g = this.d._map.latLngToLayerPoint(g);
						f.d.fire("moveAlongend", {
							latlng: e,
							containerPoint: p,
							layerPoint: g
						})
					}
				},
				f);
				f.va && (f.va = g.addEventListener(e.Constants.ZOOM_END,
				function() {
					f.B && e.Function.clearInterval(f.B);
					1 < h ? f.P(a[h - 1]) : f.P(a[0]);
					h < a.length && f.moveTo(a[h], b, d, !0)
				}));
				a[h] && f.moveTo(a[h], b, d, !0)
			}
		},
		pauseMove: function() {
			this.B && (e.Function.clearInterval(this.B), this.B = null);
			this.I[1] = this.getPosition()
		},
		stopMove: function() {
			this.B && (e.Function.clearInterval(this.B), this.B = null);
			this.I[0] = 0
		},
		setAngleOffsetX: function(a) {
			a && (this.b.angleOffsetX = a)
		},
		getAngleOffsetX: function() {
			return this.b.angleOffsetX
		},
		setRaiseOnDrag: function(a) {
			this.b.raiseOnDrag = a
		},
		setAnchor: function(a) {
			a && (this.b.anchor = a, this.A())
		},
		setOffset: function(a) {
			a && (this.b.offset = a, this.A())
		},
		setTitle: function(a) {
			a = a ? e.Function.checkFieldLength(a, 50) : "";
			this.n.title = a;
			this.b.title = a;
			this.d.options.title = a;
			this.d.setIcon(this.d.getIcon())
		},
		getTitle: function() {
			return this.b.title
		},
		setZIndex: function(a) {
			this.zIndex = a || 2;
			this.d.setZIndexOffset(this.zIndex)
		},
		getZIndex: s("zIndex"),
		setIcon: function(a) {
			if (a) {
				this.b.icon = a;
				this._size = a.getSize();
				var b = a.getSize(),
				c = a.getOffset(),
				d = a.getSrc(),
				e = this.getAnchor();
				a = this.fa(e, a ? b: {
					width: 35,
					height: 30
				});
				e = this.d.options.icon;
				b = new L.Icon({
					iconUrl: d,
					iconSize: [b.width, b.height],
					iconPosition: [c.x, c.y],
					anchor: a,
					iconVisibility: e.options.iconVisibility,
					offset: e.options.offset
				});
				this.d = this.d.setIcon(b);
				this.O()
			}
		},
		getIcon: function() {
			return this.b.icon
		},
		setLabel: function(a, b) {
			var c = b || {},
			d = c.offset || {
				x: 0,
				y: 0
			},
			f = c.fontColor || "#000000",
			g = c.fontSize || 12,
			h = c.fontBold || !1,
			k = "boolean" == typeof c.visible ? c.visible: !0,
			l = this.getPosition(),
			c = {
				noHide: k,
				fontName: "宋体",
				fontColor: f,
				fontSize: g,
				fontBold: h,
				offset: d,
				position: l,
				type: c.type
			};
			this.removeLabel();
			this.ea = new e.Label(a, c);
			this.ea.a = this.a;
			c = this.d.bindLabel(this.ea.d, c).label;
			c.options.direction = "auto";
			c.options.offset = [d.x, d.y];
			this.a && (this.a.mapObj.addLayer(c), this.ea.a = this.a)
		},
		getInfoWindow: s("X"),
		getLabel: s("ea"),
		removeLabel: function() {
			this.ea && (this.d.unbindLabel(), delete this.ea)
		},
		openInfoWindow: function(a, b) {
			b = b || {};
			this.closeInfoWindow();
			b.position = this.getPosition();
			b.anchor = e.Constants.BOTTOM_CENTER;
			this.X = new e.InfoWindow(a, b);
			this.X.a = this.a;
			this.d.bindPopup(this.X.d).getPopup();
			var c = this.d.getLatLng();
			this.d.openPopup(this.X.d, c)
		},
		closeInfoWindow: function() {
			this.X && (this.d.closePopup(), this.d.unbindPopup(), delete this.X)
		},
		rotate: function(a) {
			isNaN(a) || (this.angle = a, this.d.rotate(a))
		},
		N: function(a) {
			if (a) {
				this.a = a;
				a.getOverlayLayer();
				this.g = this.g || a.gpsType();
				this.j = this.g != this.h;
				var b = this.b.position,
				b = this.o([b])[0];
				this.d._latlng = L.latLng([b.lat, b.lng]);
				a.mapObj.addLayer(this.d);
				this.O();
				this.visible(this.b.visible)
			} else this.ba(),
			this.a = null
		},
		la: function() {
			this.removeLabel();
			this.closeInfoWindow();
			this.d && this.a && this.a.mapObj.removeLayer(this.d);
			this.M && (this.removeEventListener(this.M), this.M = null)
		},
		A: function() {
			var a = this.d.getIcon(),
			b = this.b.icon ? this.b.icon.getSize() : {
				width: 30,
				height: 50
			},
			b = this.fa(this.b.anchor, b);
			a.options.anchor = b;
			a.options.offset = [this.b.offset.x, this.b.offset.y];
			a.updateIcon(this.n, "icon");
			this.rotate(self.angle)
		}
	});
	e.Label = e.Class(e.Overlay, {
		initialize: function(a, b) {
			b = b || {};
			this.b = {
				type: b.type || e.Constants.OVERLAY_LABEL_DEFAULT,
				anchor: b.anchor || e.Constants.BOTTOM_CENTER,
				offset: b.offset || new e.Pixel(0, 0),
				visible: "boolean" == typeof b.visible ? b.visible: !0,
				position: b.position || null,
				fontName: b.fontName || "宋体",
				fontColor: b.fontColor || "#000000",
				fontSize: b.fontSize || 12,
				fontBold: b.fontBold || !1
			};
			this.g = b.gpsType;
			this.Ea = new e.Size(0, 0);
			this.zIndex = b.zIndex || 2;
			this.w = a || "";
			e.Overlay.prototype.initialize.apply(this);
			var c = this.b.position,
			d = this.b.offset;
			this.d = (new L.Label({
				noHide: !1,
				offset: [d.x, d.y],
				title: this.b.title,
				fontColor: this.b.fontColor,
				fontName: this.b.fontName,
				fontSize: this.b.fontSize,
				fontBold: this.b.fontBold,
				type: this.b.type,
				pane: "markerPane"
			},
			this)).setContent(this.w).setLatLng([c.lat, c.lng])
		},
		clone: function() {
			return new e.Label(this.w, this.b)
		},
		setContent: function(a) {
			this.w = a || this.w;
			this.A()
		},
		getContent: s("w"),
		setFontColor: function(a) {
			this.b.fontColor = a;
			this.A()
		},
		getFontColor: function() {
			return this.b.fontColor
		},
		setFontName: function(a) {
			this.b.fontName = a;
			this.A()
		},
		getFontName: function() {
			return this.b.fontName
		},
		setFontSize: function(a) {
			isNaN(a) || (this.b.fontSize = a, this.A())
		},
		getFontSize: function() {
			return this.b.fontSize
		},
		setFontBold: function(a) {
			this.b.fontBold = a;
			this.A()
		},
		getFontBold: function() {
			return this.b.fontBold
		},
		setAnchor: function(a) {
			if (a) {
				this.b.anchor = a;
				var b = this.d;
				a = this.fa(a, this.Ea);
				b.options.anchor = a;
				this.ma()
			}
		},
		setOffset: function(a) {
			a && (this.b.offset = a, this.d.options.offset = [a.x, a.y], this.ma())
		},
		setZIndex: function(a) {
			this.zIndex = a;
			this.n.style.zIndex = a
		},
		getZIndex: s("zIndex"),
		setType: function(a) {
			this.b.type = this.d.options.type = a;
			this.setContent()
		},
		getType: function() {
			return this.b.type
		},
		N: function(a) {
			a ? (this.a = a, this.g = this.g || a.gpsType(), this.j = this.g != this.h, a.getOverlayLayer(), a.mapObj.addLayer(this.d), this.O(), this.visible(this.b.visible), a = this.d.getLabelSize(), this.Ea = new e.Size(a[0], a[1]), a = this.fa(this.b.anchor, this.Ea), this.d.options.anchor = a, this.ma()) : (this.ba(), this.a = null)
		},
		la: function() {
			this.d && this.a && this.a.mapObj.removeLayer(this.d)
		},
		A: function() {
			var a = this.b,
			b = this.d.getOptions();
			b.fontColor = a.fontColor;
			b.fontSize = a.fontSize;
			b.fontBold = a.fontBold;
			b.fontName = a.fontName;
			this.d && this.d.setContent(this.w)
		}
	});
	e.PointCollection = e.Class({
		Fa: !1,
		Ka: !1,
		Ia: !1,
		Ja: !1,
		Ga: !1,
		Ha: !1,
		initialize: function(a, b) {
			var c = b || {};
			this._options = {
				size: "number" == typeof c.size ? c.size: e.Constants.POINT_SIZE_SMALL,
				shape: "number" == typeof c.shape ? c.shape: e.Constants.POINT_SHAPE_PONT,
				strokeColor: "string" == typeof c.strokeColor ? c.strokeColor: "#4169D3",
				fillColor: "string" == typeof c.fillColor ? c.fillColor: "#4169D3",
				alpha: "number" == typeof c.alpha ? c.alpha: 1,
				visible: "boolean" == typeof c.visible ? c.visible: !0,
				strokeWeight: isNaN(c.strokeWeight) ? 3 : 1 > c.strokeWeight ? 1 : 8 < c.strokeWeight ? 8 : c.strokeWeight,
				icon: c.icon || null
			};
			this.g = c.gpsType;
			this.h = e.Constants.GPS_GCJ02;
			this.id = "_ld_overlay_" + e.Function.createUniqueID();
			this.V = a instanceof Array ? a: [];
			this.aa = null;
			this.l = [];
			this.nb = this.ob = 0;
			this.j = !1
		},
		o: function(a) {
			if (!map) return a;
			if (this.j) {
				for (var b = [], c, d = 0, f = a.length; d < f; ++d) c = a[d],
				b.push({
					lng: c.lnglat.lng,
					lat: c.lnglat.lat
				});
				b = e.convert(this.g, this.h, b);
				d = 0;
				for (f = a.length; d < f; ++d) c = a[d],
				c.lnglat = b[d]
			}
			return a
		},
		C: function(a) {
			if (a && this.j) {
				var b = {};
				e.Function.applyDefaults(b, a);
				a = {
					lng: a.lnglat.lng,
					lat: a.lnglat.lat
				};
				a = e.convert(this.h, this.g, [a])[0];
				b.lnglat = a;
				return b
			}
			return a
		},
		Ab: function() {
			this.xb()
		},
		xb: function() {
			var a = this.a;
			if (!this.n && a) {
				var b = e.Function.createElement({
					name: "div",
					cssText: "position:relative;left:0px;top:0px;border:0px;z-index:1000;width:0px;height:0px;"
				});
				this.n = b;
				var c = e.Function.createElement({
					id: this.id,
					name: "canvas",
					cssText: "background-color:rgba(0,0,0,0.0);display: block;position: absolute;top:0;left:0;"
				});
				this.vb = c.getContext("2d");
				this.ya = c;
				b.appendChild(c);
				e.Function.isInDocument(b) || a.getOverlayLayer().getElement().overlayPane.appendChild(b);
				this.ub(a);
				this.A()
			}
		},
		ub: function(a) {
			function b() {
				c.A()
			}
			var c = this,
			d = c.ya;
			c.Ia = a.addEventListener(e.Constants.MOVE_END, b);
			c.Fa = a.addEventListener(e.Constants.DRAG_END, b);
			c.Ka = a.addEventListener(e.Constants.ZOOM_START,
			function() {
				d.style.display = "none"
			});
			c.Ja = a.addEventListener(e.Constants.ZOOM_END,
			function() {
				b();
				d.style.display = "block"
			});
			d.addEventListener(e.Constants.MOUSE_MOVE,
			function(a) {
				var b = c._options;
				a = c.fc(this, a.clientX, a.clientY);
				for (var d = c.Rb,
				b = b.size + 5,
				k = 0; k < d.length; k++) {
					if (d[k].x + b > a.x && d[k].x - b < a.x && d[k].y + b > a.y && d[k].y - b < a.y) {
						this.style.cursor = "pointer";
						c.aa = k;
						break
					}
					k + 1 == d.length && (this.style.cursor = "url(" + (e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_HAND[0]) + "), auto", c.aa = null)
				}
			});
			c.Ga = a.addEventListener(e.Constants.MOUSE_DOWN,
			function(a) {
				"object" !== typeof c.aa && (c.nb = a.clientX, c.ob = a.clientY)
			});
			c.Ha = a.addEventListener(e.Constants.MOUSE_UP,
			function(a) {
				if (! ("object" === typeof c.aa || 0 < Math.abs(a.clientX - c.nb) || 0 < Math.abs(a.clientY - c.ob))) {
					a = c.V[c.aa];
					a = c.C(a);
					for (var b = 0; b < c.l.length; b++) c.l[b].callback(a)
				}
			})
		},
		Zb: function(a) {
			switch (a) {
			case 2:
				return 13;
			case 3:
				return 16;
			default:
				return 10
			}
		},
		fc: function(a, b, c) {
			var d = a.getBoundingClientRect();
			return {
				x: (b - d.left) * (a.width / d.width),
				y: (c - d.top) * (a.height / d.height)
			}
		},
		A: function(a) {
			if (!0 !== a) {
				a = this.a;
				var b = this.ya;
				if (a && b) {
					var c = this.V,
					d = a.getSize(),
					f = a.getBounds(),
					g;
					b.width = d.width;
					b.height = d.height;
					this.n.width = d.width;
					this.n.height = d.height;
					b = a.lnglatToLayerPixel(f.northeast);
					d = a.lnglatToLayerPixel(f.southwest);
					f = b.y;
					b = d.x;
					this.n.style.left = b + "px";
					this.n.style.top = f + "px";
					for (var d = [], h = 0, k = c.length; h < k; ++h) g = c[h],
					g = a.lnglatToLayerPixel(g.lnglat, !0),
					g = new e.Pixel(g.x - b, g.y - f),
					d.push(g),
					this.Bb(g.x, g.y);
					this.Rb = d;
					this.visible(this._options.visible)
				}
			}
		},
		update: function(a) {
			this.V = a instanceof Array ? a: [];
			this.V = this.o(this.V);
			this.A()
		},
		Bb: function(a, b) {
			var c = this,
			d = c._options,
			f = c.vb;
			if (!c.D) {
				var g = c.D = e.Function.createElement({
					id: c.id + "_cache",
					name: "canvas",
					cssText: ""
				});
				c.D.Sa = !0;
				var h = c.rc = g.getContext("2d"),
				k = c.Zb(d.size);
				if (d.icon) {
					var l = new Image,
					p = d.icon;
					l.src = p.getSrc();
					l.onload = function() {
						var a = l.height;
						g.width = l.width;
						g.height = a;
						h.globalAlpha = "number" == typeof d.alpha ? d.alpha: 1;
						var a = p.getSize(),
						b = p.getOffset();
						h.drawImage(this, b.x, b.y, a.width, a.height, 0, 0, a.width, a.height);
						c.D.Sa = !1
					}
				} else switch (c.D.Sa = !1, g.width = g.height = k, h.fillStyle = d.fillColor, h.globalAlpha = "number" == typeof d.alpha ? d.alpha: 1, d.shape) {
				case 1:
					var n = k / 2,
					r = Math.PI / 5 / 2,
					t = n * Math.tan(Math.PI / 5),
					u = k * Math.sin(r),
					k = k * Math.cos(r);
					h.translate(n, 0);
					h.lineTo(u, k);
					h.lineTo( - n, t);
					h.lineTo(n, t);
					h.lineTo( - u, k);
					h.lineTo(0, 0);
					h.closePath();
					h.fill();
					break;
				case 2:
					n = k / 2;
					h.arc(n, n, n, 0, 2 * Math.PI, !1);
					break;
				case 3:
					h.fillRect(0, 0, g.width, g.height);
					break;
				case 4:
					n = pointY = k / 2;
					g.height = 1.55 * n + n;
					h.fillStyle = d.fillColor;
					h.globalAlpha = "number" == typeof d.alpha ? d.alpha: 1;
					h.translate(n, pointY);
					h.arc(0, 0, n, 60 * Math.PI / 180, 120 * Math.PI / 180, !0);
					h.arc( - n, Math.sqrt(3) * n, n, 300 * Math.PI / 180, 360 * Math.PI / 180, !1);
					h.arc(n, Math.sqrt(3) * n, n, Math.PI, 4 * Math.PI / 3, !1);
					h.closePath();
					h.fill();
					break;
				default:
					h.fillRect(0, 0, g.width, g.height)
				}
				h.fill()
			}
			c.D.Sa ? setTimeout(function() {
				f.drawImage(c.D, a - c.D.width / 2, b - c.D.height / 2)
			},
			200) : f.drawImage(c.D, a - c.D.width / 2, b - c.D.height / 2)
		},
		getElement: s("n"),
		visible: function(a) {
			if (this.a) {
				var b = this.getElement();
				b && (b.style.visibility = a ? "inherit": "hidden")
			}
			this._options.visible = a
		},
		getId: s("id"),
		addEventListener: function(a, b) {
			a == e.Constants.MOUSE_UP && this.l.push({
				type: a,
				callback: b
			})
		},
		getMap: s("a"),
		destroy: function() {
			this.ba()
		},
		N: function(a) {
			a ? (this.a = a, a.getOverlayLayer(), this.g = this.g || a.gpsType(), this.j = this.g != this.h, this.V = this.o(this.V), this.Ab()) : (this.ba(), this.ya = this.n = this.a = this.aa = null)
		},
		ba: function() {
			var a = this.a;
			a && (a.removeEventListener(this.Fa), a.removeEventListener(this.Ka), a.removeEventListener(this.Ia), a.removeEventListener(this.Ja), a.removeEventListener(this.Ga), a.removeEventListener(this.Ha), this.Ha = this.Ga = this.Ja = this.Ia = this.Ka = this.Fa = null);
			this.la();
			this.a = null
		},
		la: function() {
			var a = this.getElement();
			a && a.parentNode && a.parentNode.removeChild(a)
		}
	});
	e.PolylineOptions = e.Class({
		editabled: null,
		strokeColor: null,
		strokeOpacity: null,
		strokeWeight: null,
		strokeStyle: null,
		arrow: null
	});
	e.PolygonOptions = e.Class({
		editabled: null,
		fillColor: null,
		fillOpacity: null,
		strokeColor: null,
		strokeOpacity: null,
		strokeWeight: null,
		strokeStyle: null
	});
	e.RectangleOptions = e.PolygonOptions;
	e.CircleOptions = e.PolygonOptions;
	e.EllipseOptions = e.PolygonOptions;
	LDVector = e.Class({
		initialize: function() {
			this._id = "_ld_overlay_" + e.Function.createUniqueID();
			this._bounds = null;
			this._visibleEditNode = this._visible = !0;
			this.zIndex = 2;
			this.La = null;
			this.h = e.Constants.GPS_GCJ02;
			this.j = !1
		},
		getMap: s("a"),
		getElement: s("n"),
		editable: function(a) { (this._options.editabled = a) ? this.Cb() : this.W();
			this.f.drag(a)
		},
		removeEditNodes: m(),
		getId: s("_id"),
		setTitle: function(a) {
			var b = this.getElement();
			b && (a ? b.setAttribute("title", a) : this._title && b.removeAttribute("title"));
			this._title = a
		},
		visible: function(a) {
			var b = this.getElement();
			this._visible = a;
			if (b) {
				var c = "inherit";
				a || (c = "hidden", this.f.editing && this.f.editing.disable());
				b.style.visibility = c
			}
		},
		addEventListener: function(a, b, c, d) {
			var e = this.f;
			b = this.U(b, c || this, d, this);
			c = {
				type: a,
				obj: c || this,
				func: b,
				stop: d
			};
			if (e) e.on(a, b, this);
			else this.l || (this.l = []),
			this.l.push(c);
			return c
		},
		U: function(a, b, c, d) {
			return function(f) {
				f.originalEvent && (f.originalEvent._stopped = c);
				var g = f.latlng ? new e.LngLat(f.latlng.lng, f.latlng.lat) : null;
				g && (g = d.C([g])[0]);
				return a.call(b, {
					stop: c || b.stop,
					type: f.type,
					target: d,
					lnglat: g
				})
			}
		},
		removeEventListener: function(a) {
			var b = this.f;
			if (b) b.off(a.type, a.func, a.obj);
			else if (b = this.l) for (var c = 0,
			d = b.length; c < d; ++c) if (a.type == b[c].type && a.obj == b[c].obj) {
				b.splice(c, 1);
				break
			}
		},
		setAttribute: function(a) {
			if (a) {
				var b = this._options;
				b.strokeColor = a.strokeColor || b.strokeColor;
				b.strokeOpacity = Math.min(Math.max(isNaN(a.strokeOpacity) ? b.strokeOpacity: a.strokeOpacity, 0), 1);
				b.strokeStyle = a.strokeStyle || b.strokeStyle;
				"undefined" != b.fillOpacity && (b.fillColor = a.fillColor || b.fillColor, b.fillOpacity = Math.min(Math.max(isNaN(a.fillOpacity) ? b.fillOpacity: a.fillOpacity, 0), 1));
				"undefined" != b.linearGradient && (b.linearGradient = a.linearGradient || b.linearGradient);
				b.strokeWeight = isNaN(a.strokeWeight) ? b.strokeWeight: 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : a.strokeWeight;
				this._options = b;
				this.ka()
			}
		},
		R: function(a) {
			var b = {
				color: a.strokeColor,
				weight: a.strokeWeight,
				opacity: a.strokeOpacity,
				dashArray: a.strokeStyle
			};
			a.fillColor && (b.fillColor = a.fillColor);
			a.fillOpacity && (b.fillOpacity = a.fillOpacity);
			return b
		},
		getAttribute: s("_options"),
		N: function(a) {
			a ? (this.a = a, this.g = this.g || a.gpsType(), this.j = this.g != this.h, this._overlayLayer = a.getOverlayLayer(), this._draw()) : (this._destroy(), delete this._render, delete this._renderRoot, delete this._overlayLayer, delete this.a)
		},
		ka: m(),
		_draw: m(),
		_destroy: function() {
			this._remove();
			delete this.a;
			this.Ma = !1
		},
		_remove: function() {
			var a = this.getElement();
			a && a.parentNode && (a.parentNode.removeChild(a), this.W())
		},
		$: function(a) {
			if (a && 0 != a.length) {
				for (var b = 0,
				c = [], d = a.length; b < d; b++) c.push(new L.LatLng(a[b].lat, a[b].lng));
				return c
			}
			return null
		},
		kb: function(a) {
			if (a && 0 != a.length) {
				for (var b = 0,
				c = [], d = a.length; b < d; b++) c.push(new e.LngLat(a[b].lng, a[b].lat));
				return c
			}
			return null
		},
		o: function(a) {
			this.j && (a = e.convert(this.g, this.h, a));
			return a
		},
		C: function(a) {
			this.j && (a = e.convert(this.h, this.g, a));
			return a
		},
		O: function(a) {
			var b = this.l;
			this.n = a.getElement();
			if (b) {
				for (var c = 0,
				d = b.length; c < d; ++c) {
					var e = b[c];
					a.on(e.type, e.func, e.obj, e.stop)
				}
				this.l = null
			}
		},
		Cb: function() {
			this.f.on("click", this.Wa, this.f);
			this.f.on("dragstart", this.bb, this.f);
			this.La = this.a.addEventListener("click", this.Mb, this.a)
		},
		W: function() {
			this.f.editing && (this.f.editing.disable(), this.f.off("click", this.Wa, this.f), this.f.off("dragstart", this.bb, this.f), this.a.removeEventListener(this.La), this.La = null)
		},
		Wa: function(a) {
			this.editing && this.editing.enable();
			a.originalEvent._stopped = !0
		},
		bb: function() {
			this.editing && this.editing.disable()
		},
		Mb: function() {
			var a = this.getOverlayLayer().getOverlays(),
			b;
			for (b in a) a[b] instanceof LDVector && a[b].f.editing.disable()
		}
	});
	e.Polyline = e.Class(LDVector, {
		initialize: function(a, b) {
			if (a instanceof Array) {
				b = b || {};
				var c = {
					editabled: b.editabled || !1,
					arrow: b.arrow || !1,
					strokeColor: b.strokeColor || "#4169D3",
					strokeStyle: b.strokeStyle || "solid",
					linearGradient: b.linearGradient || !0
				};
				this.g = b.gpsType;
				c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity: 1, 0), 1);
				c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
				this._options = c;
				this._path = a;
				LDVector.prototype.initialize.apply(this);
				this._calculateBounds(a);
				this._visible = "boolean" == typeof b.visible ? b.visible: !0
			}
		},
		clone: function() {
			return new e.Polyline(this._path, this._options)
		},
		arrow: function(a) {
			this._options.arrow = a;
			this.f && (this.f.options.arrow = a);
			this.setPath(this.getPath())
		},
		_calculateBounds: function(a) {
			var b = new e.LngLatBounds(1, 1);
			b.southwest = new e.LngLat(a[0].lng, a[0].lat);
			b.northeast = new e.LngLat(a[0].lng, a[0].lat);
			for (var c = b.southwest,
			d = b.northeast,
			f = 1,
			g = a.length; f < g; ++f) c.lng = Math.min(c.lng, a[f].lng),
			c.lat = Math.min(c.lat, a[f].lat),
			d.lng = Math.max(d.lng, a[f].lng),
			d.lat = Math.max(d.lat, a[f].lat);
			this._bounds = b
		},
		getBounds: s("_bounds"),
		ka: function() {
			this.f && this.f.setStyle(this.R(this._options))
		},
		setPath: function(a) {
			if (a) {
				var b = e.Function.indexOf(a, -1, "lng"),
				c = e.Function.indexOf(a, -1, "lat"); - 1 == b && -1 == c && (this._path = a, a = this.o(a), this._calculateBounds(this._path), this.f && (a = this.$(a), this.f.setLatLngs(a), this.W(), this.editable(this._options.editabled)))
			}
		},
		getPath: function() {
			var a = this._path;
			this.f && (a = this.kb(this.f.getLatLngs()));
			return this._path = this.C(a)
		},
		setPostionAt: function(a, b) {
			var c = this._path;
			c && a && (isNaN(b) ? c.push(a) : c.splice(Math.round(b), 0, a), this.setPath(c))
		},
		removeNodeAt: function(a) {
			var b = this._path; ! isNaN(a) && b && (b.splice(Math.round(a), 1), this.setPath(b))
		},
		getPathLength: function() {
			var a = this._path,
			b = 0;
			if (a && 0 < a.length) for (var c = 0,
			d = a.length; c < d; c++) a[c + 1] && (b += parseInt(e.Function.distanceByLngLat(a[c], a[c + 1])));
			return b
		},
		_draw: function() {
			var a = this._path;
			if (a) {
				var a = this.o(a),
				a = this.$(a),
				b = this.R(this._options);
				b.stroke = !0;
				b.arrow = this._options.arrow;
				this.f = new L.Polyline(a, b);
				this.a.mapObj.addLayer(this.f);
				this.O(this.f);
				this.editable(this._options.editabled);
				this.visible(this._visible)
			}
		}
	});
	e.Polygon = e.Class(LDVector, {
		initialize: function(a, b) {
			if (a instanceof Array) {
				b = b || {};
				var c = {
					editabled: b.editabled || !1,
					arrow: b.arrow || !1,
					strokeColor: b.strokeColor || "#4169D3",
					strokeStyle: b.strokeStyle || "solid",
					fillColor: b.fillColor || "#99FFCC"
				};
				this.g = b.gpsType;
				c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity: 1, 0), 1);
				c.fillOpacity = Math.min(Math.max(isNaN(b.fillOpacity) ? 0.6 : b.fillOpacity, 0), 1);
				c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
				this._options = c;
				this._path = a;
				LDVector.prototype.initialize.apply(this);
				this._calculateBounds(a);
				this._visible = "boolean" == typeof b.visible ? b.visible: !0
			}
		},
		clone: function() {
			return new e.Polygon(this._path, this._options)
		},
		_calculateBounds: function(a) {
			var b = new e.LngLatBounds(1, 1);
			b.southwest = new e.LngLat(a[0].lng, a[0].lat);
			b.northeast = new e.LngLat(a[0].lng, a[0].lat);
			for (var c = b.southwest,
			d = b.northeast,
			f = 1,
			g = a.length; f < g; ++f) c.lng = Math.min(c.lng, a[f].lng),
			c.lat = Math.min(c.lat, a[f].lat),
			d.lng = Math.max(d.lng, a[f].lng),
			d.lat = Math.max(d.lat, a[f].lat);
			this._bounds = b
		},
		ka: function() {
			this.f && this.f.setStyle(this.R(this._options))
		},
		setPath: function(a) {
			if (a) {
				var b = e.Function.indexOf(a, -1, "lng"),
				c = e.Function.indexOf(a, -1, "lat"); - 1 == b && -1 == c && (this._path = a, a = this.o(a), this._calculateBounds(this._path), this.f && (a = this.$(a), this.f.setLatLngs(a), this.W(), this.editable(this._options.editabled)))
			}
		},
		getPath: function() {
			var a = this._path;
			this.f && (a = this.kb(this.f.getLatLngs()[0]));
			return this._path = this.C(a)
		},
		getArea: function() {
			return e.Function.calculateArea(this._path)
		},
		getBounds: s("_bounds"),
		_draw: function() {
			var a = this.o(this._path);
			if (a = this.$(a)) {
				var b = this.R(this._options);
				b.stroke = !0;
				b.fill = !0;
				this.f = (new L.Polygon(a, b)).addTo(this.a.mapObj);
				this.O(this.f);
				this.visible(this._visible);
				this.editable(this._options.editabled);
				this.visible(this._visible)
			}
		}
	});
	e.Rectangle = e.Class(LDVector, {
		initialize: function(a, b) {
			if (a) {
				b = b || {};
				var c = {
					editabled: b.editabled || !1,
					fillColor: b.fillColor || "#99FFCC",
					strokeColor: b.strokeColor || "#4169D3",
					strokeStyle: b.strokeStyle || "solid"
				};
				this.g = b.gpsType;
				c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity: 1, 0), 1);
				c.fillOpacity = Math.min(Math.max(isNaN(b.fillOpacity) ? 0.6 : b.fillOpacity, 0), 1);
				c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
				this._options = c;
				LDVector.prototype.initialize.apply(this);
				this._bounds = a;
				this._visible = "boolean" == typeof b.visible ? b.visible: !0
			}
		},
		clone: function() {
			return new e.Rectangle(this._bounds, this._options)
		},
		ka: function() {
			this.f && this.f.setStyle(this.R(this._options))
		},
		setBounds: function(a) {
			a && (this._bounds = a, a = this.o([a.getSouthWest(), a.getNorthEast()]), a = new e.LngLatBounds(a[0], a[1]), this.f && (this.f.setBounds(this.$(a)), this.W(), this.editable(this._options.editabled)))
		},
		getBounds: function() {
			var a = this._bounds;
			if (!this.a) return a;
			this.f && (a = this.f.getBounds());
			var b = a.southwest,
			a = a.northeast,
			c = this.a.gpsType();
			return c != this.h ? (b = e.convert(this.h, c, [b, a]), new e.LngLatBounds(new e.LngLat(b[0].lng, b[0].lat), new e.LngLat(b[1].lng, b[1].lat))) : new e.LngLatBounds(new e.LngLat(b.lng, b.lat), new e.LngLat(a.lng, a.lat))
		},
		$: function(a) {
			if (a) {
				var b = a.getSouthWest();
				a = a.getNorthEast();
				return new L.LatLngBounds(new L.LatLng(b.lat, b.lng), new L.LatLng(a.lat, a.lng))
			}
			return null
		},
		_draw: function() {
			var a = this.o([this._bounds.getSouthWest(), this._bounds.getNorthEast()]),
			a = new e.LngLatBounds(a[0], a[1]);
			if (a = this.$(a)) {
				var b = this.R(this._options);
				b.stroke = !0;
				b.fill = !0;
				this.f = new L.Rectangle(a, b);
				this.a.mapObj.addLayer(this.f);
				this.O(this.f);
				this.visible(this._visible);
				this.editable(this._options.editabled)
			}
		}
	});
	e.Circle = e.Class(LDVector, {
		initialize: function(a, b, c) {
			a && !isNaN(b) && (c = c || {},
			this._center = a, this._radius = b || -1, a = {
				editabled: c.editabled || !1,
				fillColor: c.fillColor || "#99FFCC",
				strokeColor: c.strokeColor || "#4169D3",
				strokeStyle: c.strokeStyle || "solid"
			},
			this.g = c.gpsType, a.strokeOpacity = Math.min(Math.max(c.strokeOpacity && !isNaN(c.strokeOpacity) ? c.strokeOpacity: 1, 0), 1), a.fillOpacity = Math.min(Math.max(isNaN(c.fillOpacity) ? 0.6 : c.fillOpacity, 0), 1), a.strokeWeight = isNaN(c.strokeWeight) ? 3 : 1 > c.strokeWeight ? 1 : 8 < c.strokeWeight ? 8 : c.strokeWeight, this._options = a, this._units = "meter", LDVector.prototype.initialize.apply(this), this._visible = "boolean" == typeof c.visible ? c.visible: !0)
		},
		getBounds: function() {
			if (this.a) var a = this.f.getBounds(),
			a = this.C([a.southwest, a.northeast]);
			else var b = this.getRadius(),
			c = this.getCenter(),
			a = c.offset( - b, b),
			b = c.offset(b, -b),
			a = this.C([a, b]);
			return new e.LngLatBounds(a[0], a[1])
		},
		visibleEditNode: m(),
		setUnits: q("_units"),
		clone: function() {
			return new e.Circle(this._center, this._radius, this._options)
		},
		ka: function() {
			this.f && this.f.setStyle(this.R(this._options))
		},
		setCenter: function(a) {
			a && (this._center = a, a = this.o([a])[0], this.f && (this.f.setLatLng([a.lat, a.lng]), this.W(), this.editable(this._options.editabled)))
		},
		getCenter: function() {
			var a = this._center;
			this.f && (a = this.f.getLatLng());
			return a = this.C([a])[0]
		},
		setRadius: function(a) {
			isNaN(a) || (this._radius = a, this.f && (this.f.setRadius(a), this.W(), this.editable(this._options.editabled)))
		},
		getRadius: function() {
			this.f && this.f.getRadius();
			return this._radius
		},
		getVertex: function() {
			return e.Function.getLngLatByOffset(this._center, this._radius, 0)
		},
		_draw: function() {
			var a = this.R(this._options);
			a.fill = !0;
			a.radius = this._radius;
			a.stroke = !0;
			var b = this.o([this._center])[0];
			this.f = "meter" == this._units ? new L.Circle(b, a) : new L.circleMarker(b, a);
			this.a.mapObj.addLayer(this.f);
			this.O(this.f);
			this.visible(this._visible);
			this.editable(this._options.editabled)
		}
	});
	e.OverlayLayer = e.Class(e.Layer, {
		initialize: function(a) {
			e.Layer.prototype.initialize.apply(this, [a]);
			this.Ra = 1;
			this.J = {};
			this.setType(2);
			this.Pa = this.Oa = !1
		},
		setMap: function(a) {
			if (a instanceof e.Map) {
				if (this.a = a, !this.F) {
					a = this.a.mapObj.getPanes();
					var b = this.Q;
					this.F = a;
					a.shadowPane.style.display = b ? "block": "none";
					a.overlayPane.style.display = b ? "block": "none";
					a.markerPane.style.display = b ? "block": "none";
					a.popupPane.style.display = b ? "block": "none"
				}
			} else this.destroy(!0),
			this.a = null
		},
		visible: function(a) {
			this.Q = a;
			var b = this.F;
			b && (b.overlayPane.style.display = a ? "block": "none", b.markerPane.style.display = a ? "block": "none", b.popupPane.style.display = a ? "block": "none", b.shadowPane.style.display = a ? "block": "none")
		},
		getRenderRoot: s("Pa"),
		getRender: s("Oa"),
		injectRender: function(a) {
			this.Oa = a;
			this.Pa = a.createRoot();
			this.F.appendChild(this.Pa)
		},
		destroy: function() {
			if (this.a) {
				var a = this.F;
				a && mklay.parentNode && (a.parentNode.removeChild(a), delete this.n);
				lblay && lblay.parentNode && (lblay.parentNode.removeChild(lblay), delete this._lblay);
				this.J = {};
				delete this.a
			}
		},
		addOverlay: function(a, b) {
			var c = this.a;
			if (c && !this.J[a.getId()] && a) {
				a.N ? a.N(c) : a.setMap(c);
				this.J[a.getId()] = a;
				if (b) if (a instanceof LDVector) {
					var d = a.getBounds();
					if (d) {
						var f = d.southwest,
						d = d.northeast,
						g = [];
						g.push(f);
						g.push(new e.LngLat(f.lng, d.lat));
						g.push(d);
						g.push(new e.LngLat(d.lng, f.lat));
						c.setBestMap(g)
					}
				} else c.setCenter(a.getPosition());
				c.triggerEvent(e.Constants.ADD_OVERLAY, {
					type: e.Constants.ADD_OVERLAY,
					overlay: a,
					target: this
				})
			}
		},
		addOverlays: function(a, b) {
			var c = this.a;
			if (c) if (a instanceof Array) {
				for (var d = [], f, g = 0; g < a.length; g++) {
					f = a[g];
					if (b) if (f instanceof LDVector) {
						var h = f.getBounds();
						h && (f = h.southwest, h = h.northeast, d.push(f), d.push(new e.LngLat(f.lng, h.lat)), d.push(h), d.push(new e.LngLat(h.lng, f.lat)))
					} else d.push(f.getPosition());
					this.addOverlay(a[g], !1)
				}
				b && c.setBestMap(d, !0)
			} else this.addOverlay(a, b)
		},
		reloadOverlays: function() {
			if (this.a) {
				var a = this.Oa;
				a && "svg" == a.name && a.resize();
				for (var b in this.J) this.J[b]._redraw(!0)
			}
		},
		removeOverlay: function(a) {
			var b = this.a;
			if (a) {
				var c = "string" == typeof a ? a: a.getId ? a.getId() : null;
				c && (a = this.J[c]) && (a.N ? a.N(null) : a.setMap(null), delete this.J[c], b && b.triggerEvent(e.Constants.REMOVE_OVERLAY, {
					type: e.Constants.REMOVE_OVERLAY,
					overlayId: c,
					target: this
				}))
			}
		},
		clear: function(a) {
			if (null != a) for (var b in a) this.removeOverlay(a[b]);
			else for (var c in this.J) this.removeOverlay(this.J[c])
		},
		getOverlayById: function(a) {
			return this.J[a]
		},
		getOverlays: s("J")
	});
	e.TileLayer = e.Class(e.Layer, {
		initialize: function(a, b, c) {
			a = a || {};
			b = "number" == typeof b ? b: 1;
			a.hotspotOptions = a.hotspotOptions || null;
			a.tileSize = a.tileSize || e.MapConfig._MAP_PCIMG_SIZE;
			e.Function.applyDefaults(this, this._options);
			e.Layer.prototype.initialize.apply(this, [a]);
			var d = "boolean" == typeof a.isTileLayer ? a.isTileLayer: !0;
			this.setType(b); ! d && e.Function.isWebGL() ? (a.baseUrl = a.baseUrl || e.MapConfig._MAP_VECTOR_BGIMG_URL, window.Vmapt && (this.p = Vmapt.vmaptLayer({
				scene: a.baseUrl
			}))) : (a.baseUrl = a.baseUrl || e.MapConfig._MAP_PCBGIMG_URL, this.p = L.tileLayer(a.baseUrl[0], {
				visible: this.Q,
				minZoom: a.minZoom,
				maxZoom: a.maxZoom,
				tileSize: a.tileSize,
				subdomains: a.baseUrl[1],
				zIndex: c || 2
			}));
			this.p.type = b
		},
		setOpacity: function(a) {
			this.p.setOpacity(a)
		},
		getOpacity: function() {
			return this.p.getOpacity()
		},
		setZIndex: function(a) {
			isNaN(a) || this.p.setZIndex(a)
		},
		getZIndex: function() {
			return this.p.getZIndex()
		},
		visible: function(a) {
			var b = this.a,
			c = this.p;
			this.Q !== a && (this.Q = a, c.visible(a), b && c.getEvents && (a ? (b.mapObj.on(c.getEvents(), c), c._resetAll()) : b.mapObj.off(c.getEvents(), c)))
		},
		getVisible: function() {
			return this.p.getVisible()
		},
		getId: function() {
			return L.stamp(this.p)
		},
		zc: s("p"),
		setMap: function(a) {
			a ? (a.mapObj.addLayer(this.p), this._options.hotspotOptions && (this.v = e.HotspotManager.getEntity(a), this.v.injectLayer(this.getId(), this._options.hotspotOptions, this.l ? this.l.slice() : null)), this.a = a) : (this.a.mapObj.removeLayer(this.p), this.hotspot(!1), this.a = this.p = null)
		},
		hotspot: function(a, b) {
			a && (b || this._options.hotspotOptions) ? (b && (this._options.hotspotOptions = b), this.lb(!0)) : !a && this.v && (this.lb(!1), delete this.v)
		},
		lb: function(a) {
			a ? (this.v || (this.v = e.HotspotManager.getEntity(this.a)), this.l = this.l || [], this.v.injectLayer(this.getId(), this._options.hotspotOptions, this.l ? this.l.slice() : null)) : !a && this.v && this.v.removeTileLayer(this.getId())
		},
		setTileUrlFunc: function(a) {
			a && "function" == typeof a && this.p.setTileUrlFunc(a)
		},
		addHotspotEventListener: function(a, b, c) {
			a = {
				type: a,
				func: b,
				obj: c || this
			};
			this.v ? this.v.gc(this.getId(), a) : (this.l || (this.l = []), this.l.push(a));
			return a
		},
		removeHotspotEventListener: function(a) {
			if (this.v) this.v.lc(this.getId(), a);
			else {
				var b = this.l;
				if (b) for (var c = 0,
				d = b.length; c < d; ++c) if (a.type == b[c].type && a.obj == b[c].obj) {
					b.splice(c, 1);
					break
				}
			}
		},
		hc: function() {
			this.v && this.v.kc(this.getId())
		}
	});
	e.TileLayer.WMS = e.Class(e.TileLayer, {
		initialize: function(a, b, c) {
			a = a || {};
			if (!a.baseUrl) throw Error("未提供服务地址");
			b = "boolean" == typeof a.isBGLayer ? a.isBGLayer ? 0 : 1 : 1;
			a.isLayerSwitcher = a.isLayerSwitcher || !1;
			a.hotspotOptions = a.hotspotOptions || null;
			a.tileSize = a.tileSize || e.MapConfig._MAP_PCIMG_SIZE;
			e.Function.applyDefaults(this, this._options);
			e.TileLayer.prototype.initialize.apply(this, [a]);
			this.setType(b);
			c = {
				visible: this.Q,
				minZoom: a.minZoom || 4,
				maxZoom: a.maxZoom || 18,
				tileSize: a.tileSize || 256,
				zIndex: c || 2
			};
			a.service && (c.service = a.service);
			a.request && (c.request = a.request);
			a.version && (c.version = a.version);
			a.format && (c.format = a.format);
			a.layer && (c.layer = a.layer);
			this.p = L.tileLayer.wms(a.baseUrl, c);
			this.p.type = b
		}
	});
	e.TileLayer.WMTS = e.Class(e.TileLayer, {
		initialize: function(a, b, c) {
			a = a || {};
			if (!a.baseUrl) throw Error("未提供服务地址");
			b = "boolean" == typeof a.isBGLayer ? a.isBGLayer ? 0 : 1 : 1;
			a.isLayerSwitcher = a.isLayerSwitcher || !1;
			a.hotspotOptions = a.hotspotOptions || null;
			a.tileSize = a.tileSize || e.MapConfig._MAP_PCIMG_SIZE;
			e.Function.applyDefaults(this, this._options);
			e.TileLayer.prototype.initialize.apply(this, [a]);
			this.setType(b);
			c = {
				visible: this.Q,
				minZoom: a.minZoom || 4,
				maxZoom: a.maxZoom || 18,
				tileSize: a.tileSize,
				zIndex: c || 2
			};
			a.service && (c.service = a.service);
			a.request && (c.request = a.request);
			a.version && (c.version = a.version);
			a.format && (c.format = a.format);
			a.layer && (c.layer = a.layer);
			this.p = L.tileLayer.wmts(a.baseUrl, c);
			this.p.type = b
		}
	});
	e.BGTileLayer = e.Class(e.TileLayer, {
		initialize: function(a) {
			e.TileLayer.prototype.initialize.apply(this, [a, 0, 1])
		}
	});
	e.Template = e.Class({
		name: null,
		getDataUrl: function() {
			return null
		},
		formatDatas: function(a) {
			return a
		}
	});
	e.HotspotOptions = e.Class({
		type: null,
		labelField: null,
		iconUrl: null,
		iconSize: null,
		iconOffset: null,
		anchor: null,
		template: null
	});
	e.HotspotEntity = e.Class({
		Y: !1,
		initialize: function(a) {
			this.ta = [];
			this.ca = {};
			this.K = {};
			this.l = {};
			this.pa = [];
			this.a = a
		},
		Tb: function() {
			var a = this,
			b = a.a;
			a.Y || (a.Y = b.addEventListener(e.Constants.MOUSE_MOVE,
			function(c) {
				a.u && b.getOverlayLayer().removeOverlay(a.u, !0);
				a.u = null;
				var d = b.Jb(c.lnglat);
				a.Xb(c.pixel, d.x, d.y, d.z)
			},
			a), a.ua = b.addEventListener(e.Constants.ZOOM_START,
			function() {
				a.pa = [];
				a.u && b.getOverlayLayer().removeOverlay(a.u, !0);
				a.u = null
			},
			a))
		},
		Wb: function() {
			var a = this.a;
			this.Y && (a.removeEventListener(this.Y), a.removeEventListener(this.ua), delete this.Y, delete this.ua)
		},
		injectLayer: function(a, b, c) {
			this.ca[a] || (this.ta.push(a), this.ca[a] = b, c && (this.l[a] = c), this.Tb())
		},
		getTileLayerEvt: function(a) {
			return this.l[a]
		},
		removeTileLayer: function(a) {
			for (var b = this.ta,
			c = 0,
			d = b.length; c < d; ++c) a == b[c] && (this.K[b[c]] = null, this.ca[b[c]] = null, this.l[b[c]] = null, b.splice(c, 1));
			this.a && this.u && (this.a.getOverlayLayer().removeOverlay(this.u, !0), this.u = null);
			0 == b.length && this.Wb()
		},
		gc: function(a, b) {
			var c = this.l[a];
			c || (c = [], this.l[a] = c);
			c.push(b)
		},
		lc: function(a, b) {
			var c = this.l[a];
			if (c) for (var d = 0,
			e = c.length; d < e; ++d) if (b.type == c[d].type && b.obj == c[d].obj) {
				c.splice(d, 1);
				break
			}
		},
		kc: function(a) {
			this.K[a] && (this.K[a] = null)
		},
		clearTileDatas: function() {
			this.K = {}
		},
		destroy: function() {
			this.a.removeEventListener(this.Y);
			this.a.removeEventListener(this.ua);
			this.ua = this.Y = null;
			this.ta = [];
			this.ca = {};
			this.K = {}
		},
		Xa: function(a) {
			if ("string" == typeof a) for (var b = this.pa,
			c = b.length,
			d = 0; d < c; d++) if (a === b[d]) return ! 0;
			return ! 1
		},
		Xb: function(a, b, c, d) {
			for (var e = this.ta,
			g = this.K,
			h = this.ca,
			k = this.a.pixelToLnglat(a), l = 0, p = e.length; l < p; ++l) {
				var n = e[l];
				if (h[n]) {
					g[n] || (g[n] = {},
					this.K = g);
					var r = n + "_" + b + "_" + c + "_" + d;
					if (g[n][b + "_" + c + "_" + d] && !this.Xa(r)) {
						if (this.ab(a, k, n, g[n][b + "_" + c + "_" + d])) break
					} else this.Xa(r) || (this.pa.push(r), this.dc(b, c, d, h[n].template, a, k, n, r))
				}
			}
		},
		dc: function(a, b, c, d, f, g, h, k) {
			var l = this,
			p = e.LoaderManager.getEntity();
			p.register("loaded",
			function(n) {
				l.K[h] && (n = d.formatDatas(n), n._xy = a + "." + b, 0 < n.length ? (l.K[h][a + "_" + b + "_" + c] = n, l.ab(f, g, h, n)) : l.K[h][a + "_" + b + "_" + c] = n, e.Function.deleteFromArray(l.pa, k))
			},
			l);
			p.load({
				url: d.getDataUrl(a, b, c),
				name: d.name
			})
		},
		ab: function(a, b, c, d) {
			a = this.ca[c];
			var f = !1;
			if (b = this.Eb(b, d)) {
				switch (a.type) {
				case e.Constants.LAYER_HOTSPOT_ICON_TYPE:
					d = this.$a(c, a, b, d._xy);
					break;
				case e.Constants.LAYER_HOTSPOT_RECT_TYPE:
					d = this.zb(c, a, b, d._xy);
					break;
				default:
					d = this.$a(c, a, b, d._xy, e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_ICON_BLAND_URL)
				}
				this.u = d;
				b = b.datas;
				if (c = this.l[c]) for (c = c.slice(), a = 0, f = c.length; a < f; ++a) this.sb(c[a], d, b);
				f = !0
			}
			return f
		},
		Eb: function(a, b) {
			var c = null,
			d = b.length;
			if (0 < d) for (var e = 0; e < d; ++e) {
				var g = b[e];
				g.bounds.containsLngLat(a) && (c = g, c.datas.lnglat || (c.datas.lnglat = a))
			}
			return c
		},
		$a: function(a, b, c, d, f) {
			this.u && this.a.getOverlayLayer().removeOverlay(this.u);
			a = b.iconSize || c.iconSize;
			f = new e.Marker(c.datas.lnglat, {
				title: c.datas.title,
				offset: b.iconOffset || c.iconOffset,
				anchor: b.anchor || c.anchor,
				icon: new e.Icon(f ? f: c.iconName ? b.iconUrl + c.iconName: b.iconUrl, a)
			});
			d = {
				offset: {
					x: 7,
					y: 0
				},
				anchor: e.Constants.LEFT_BOTTOM,
				type: e.Constants.OVERLAY_LABEL_HTML,
				fontSize: 12,
				fontColor: "#000000",
				fontBold: !0
			};
			var g = '<div style="border:1px solid #000000;background-color:#ffffff;filter:alpha(opacity=80);-moz-opacity:0.8;-khtml-opacity: 0.8;opacity: 0.8;font-size: 12px;">' + c.datas.title + "</div>",
			h = document.createElement("div");
			h.innerHTML = g + "  ";
			f.setLabel(h, d);
			this.a.getOverlayLayer().addOverlay(f);
			b.labelField && f.setLabel('<div style="font-size:12px; opacity:0.9;border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 255, 255);">' + c[b.labelField] + "</div>", {
				offset: {
					x: a.width / 2 + 8,
					y: 10
				}
			});
			return this.u = f
		},
		zb: function(a, b, c) {
			b = e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_HOTSPOT_RECT_IMG_URL;
			this.u && this.a.getOverlayLayer().removeOverlay(this.u);
			a = c.bounds;
			var d = this.a.lnglatToLayerPixel(a.southwest),
			f = this.a.lnglatToLayerPixel(a.northeast);
			c = [Math.abs(parseInt(d.x) - parseInt(f.x)), Math.abs(parseInt(f.y) - parseInt(d.y)) + c.iconSize.height / 2];
			b = '<div style="height:' + c[1] + "px;width: " + c[0] + 'px;">' + ('<div style="background-image: url(' + b + ');background-position: 0 0;background-repeat: no-repeat;height: 6px;left: -3px;overflow: hidden;position: absolute;top: -4px;width: 7px; z-index: 90;"></div>' + ('<div style="width:' + c[0] + "px;height:7px;left:4px;top:-4px;background-image: url(" + b + ");background-repeat: no-repeat;background-position: -" + (208 - c[0]) + 'px 0;position: absolute; overflow: hidden;"></div>') + ('<div style="height:' + c[1] + "px;width:8px;left: -3px;top:2px;background-image: url(" + b + ");background-repeat: no-repeat;background-position: 0px -" + (108 - c[1]) + 'px;position: absolute; overflow: hidden;"></div>') + ('<div style="height:' + c[1] + "px;width:" + c[0] + "px;left:4px;right: 0;top:2px;background-image: url(" + b + ");background-repeat: no-repeat;background-position:-" + (208 - c[0]) + "px -" + (108 - c[1]) + 'px;position: absolute; overflow: hidden;"></div>')) + "</div>";
			d = document.createElement("div");
			d.innerHTML = b;
			a = new e.Label(d, {
				type: e.Constants.OVERLAY_LABEL_HTML,
				anchor: e.Constants.BOTTOM_CENTER,
				position: a.getCenter(),
				offset: {
					x: 0,
					y: c[1] / 2
				}
			});
			this.a.getOverlayLayer().addOverlay(a);
			return a
		},
		sb: function(a, b, c) {
			b.addEventListener(a.type,
			function() {
				a.func.apply(a.obj, [c, b.getPosition(), b])
			},
			b)
		}
	});
	e.HotspotManager = {
		Aa: [],
		getEntity: function(a) {
			this.Aa[a.getId()] || (this.Aa[a.getId()] = new e.HotspotEntity(a));
			return this.Aa[a.getId()]
		}
	};
	LDMapHotspotTemplate = e.Class(e.Template, {
		name: "_MAP_HOTSPOT",
		initialize: q("a"),
		getDataUrl: function(a, b, c) {
			var d = e.MapConfig._MAP_PC_DATAS_URL;
			return L.Util.template(d[0], {
				s: d[1][Math.abs(a + b) % d[1].length] || "",
				x: a,
				y: b,
				z: c
			})
		},
		formatDatas: function(a) {
			var b = [];
			if (a && (a = a.r)) {
				var c = a.length,
				d;
				if (0 < c) for (var f = 0; f < c; ++f) {
					var g = a[f];
					d = this.Fb(this.a.getZoom(), g.k);
					var h = g.c.split(",");
					h[0] = parseInt(h[0]);
					h[1] = parseInt(h[1]);
					var k = g.e.split(","),
					h = Math.min(k[0], k[2]),
					l = Math.min(k[3], k[1]),
					p = Math.max(k[0], k[2]),
					k = Math.max(k[3], k[1]),
					k = new e.LngLatBounds(new e.LngLat(h, l), new e.LngLat(p, k));
					b.push({
						bounds: k,
						iconSize: {
							width: d[0],
							height: d[1]
						},
						datas: g
					})
				}
			}
			return b
		},
		Fb: function(a, b) {
			switch (b) {
			case "819":
				var c = [25, 13];
				break;
			case "821":
				c = [23, 16];
				break;
			case "3":
				c = [28, 12];
				break;
			case "342":
				c = [8, 8];
				break;
			case "343":
				c = [8, 8];
				break;
			case "11":
			case "12":
			case "21":
			case "22":
			case "32":
			case "41":
			case "42":
			case "51":
			case "52":
			case "61":
			case "71":
			case "81":
			case "82":
			case "91":
				c = [16, 16];
				break;
			case "31":
			case "72":
			case "92":
			case "111":
			case "112":
			case "121":
			case "141":
			case "151":
			case "152":
				c = [16, 16];
				16 < a && (c = [20, 20]);
				break;
			case "131":
			case "171":
			case "191":
				c = [16, 9];
				16 < a && (c = [20, 11]);
				break;
			case "43":
			case "44":
			case "45":
			case "46":
				c = [17, 17];
				break;
			case "344":
				c = [12, 11];
				8 < a && (c = [14, 13]);
				break;
			default:
				c = [16, 16]
			}
			return c
		}
	});
	LS = {
		tips: function(a) {
			a || (a = {});
			window._MAP_HOTSPOT = a
		}
	};
	window.LS = LS;
	e.Tween = e.Class({
		Linear: function(a, b, c, d) {
			return c * a / d + b
		},
		oc: {
			wc: function(a, b, c, d) {
				return c * (a /= d) * a * a + b
			},
			yc: function(a, b, c, d) {
				return c * ((a = a / d - 1) * a * a + 1) + b
			},
			xc: function(a, b, c, d) {
				return 1 > (a /= d / 2) ? c / 2 * a * a * a + b: c / 2 * ((a -= 2) * a * a + 2) + b
			}
		}
	});
	e.Map = e.Class(e.Events, {
		initialize: function(a, b) {
			var c = this;
			b = b || {};
			var d = IMAP.MapConfig;
			c.cc = d._MAP_PCIMG_SIZE;
			var f = {
				backgoundImg: b.backgoundImg || d.API_REALM_NAME + d._MAP_BGIMG_URL,
				center: b.center || new e.LngLat(116.335602, 39.940804),
				keyboard: "boolean" == typeof b.keyboard ? b.keyboard: !0,
				dragable: "boolean" == typeof b.dragable ? b.dragable: !0,
				hotspot: "boolean" == typeof b.hotspot ? b.hotspot: !1,
				scrollWheel: "boolean" == typeof b.scrollWheel ? b.scrollWheel: !0,
				dblclickZoom: "boolean" == typeof b.dblclickZoom ? b.dblclickZoom: !0,
				animation: "boolean" == typeof b.animation ? b.animation: !0,
				baseLayer: "boolean" == typeof b.baseLayer ? b.baseLayer: !0,
				inertial: "boolean" == typeof b.inertial ? b.inertial: !0
			};
			c.g = b.gpsType || e.Constants.GPS_GCJ02;
			c.h = e.Constants.GPS_GCJ02;
			c.j = c.g != c.h;
			var g = !L.Browser.ie && e.Function.isWebGL() ? !0 : !1;
			f.isTileLayer = "boolean" == typeof b.isTileLayer ? b.isTileLayer: !0;
			var h = [];
			if (b.limitBounds instanceof Array) {
				f.limitBounds = b.limitBounds;
				var k = b.limitBounds[0],
				l = b.limitBounds[1]
			} else f.limitBounds = "object" == typeof b.limitBounds ? b.limitBounds: new e.LngLatBounds(new e.LngLat(73, 5), new e.LngLat(140, 55)),
			k = f.limitBounds.getSouthWest(),
			l = f.limitBounds.getNorthEast();
			c.j && (l = e.convert(c.g, c.h, [k, l]), k = l[0], l = l[1]);
			h[0] = [k.lat, k.lng];
			h[1] = [l.lat, l.lng];
			f.maxZoom = Math.min(parseInt(b.maxZoom) || 18, 22);
			f.minZoom = Math.max(parseInt(b.minZoom) || 4, 4);
			k = b.zoom ? parseInt(Math.min(Math.max(f.minZoom, b.zoom), parseInt(f.maxZoom))) : 4;
			c.Za = {
				changeBgLayer: "changeBgLayer",
				addoverlay: "addoverlay",
				removeoverlay: "removeoverlay"
			};
			h = L.map(a, {
				backgoundImg: f.backgoundImg,
				scrollWheelZoom: f.scrollWheel,
				dragging: f.dragable,
				doubleClickZoom: f.dblclickZoom,
				keyboard: f.keyboard,
				inertia: f.inertial,
				zoomAnimation: f.animation,
				vector: f.vector,
				pUrl: d._PLUGINS_URL,
				maxBounds: h,
				minZoom: f.minZoom,
				maxZoom: f.maxZoom
			});
			if (e.MapConfig._COUNT) h.on("load",
			function() {
				this.Ya("core")
			},
			this);
			c.j && (l = e.convert(c.g, c.h, [f.center]), f.center = l[0]);
			h.setView([f.center.lat, f.center.lng], k);
			this.mapObj = h;
			if (window._LD_user_access) h.on("changed",
			function(a) {
				window._LD_user_access({
					type: a.type,
					target: c
				})
			},
			c);
			h = new e.OverlayLayer({
				maxZoom: f.maxZoom,
				minZoom: f.minZoom
			});
			c.yb = h;
			c.addLayer(h);
			c._options = f;
			f.baseLayer && (f.isTileLayer ? (g = L.Browser.canvas && !e.Browser.isIE9() ? !0 : !1, f.vector = "boolean" == typeof b.vector ? b.vector ? g: !1 : !1, f.vector ? c.T = f.vector: -1 != d._MAP_PCBGIMG_URL[0].indexOf("scale") ? (f = 1, window.devicePixelRatio && 1 < window.devicePixelRatio && (f = 2), c.T = [d._MAP_PCBGIMG_URL[0] + f, d._MAP_PCBGIMG_URL[1]]) : c.T = d._MAP_PCBGIMG_URL, c.Da()) : g ? (c.T = d._MAP_VECTOR_BGIMG_URL, c.plugin(["vmap.min.js"], c.Da, e.STATIC_URL)) : (f.isTileLayer = !0, -1 != d._MAP_PCBGIMG_URL[0].indexOf("scale") ? (f = 1, window.devicePixelRatio && 1 < window.devicePixelRatio && (f = 2), c.T = [d._MAP_PCBGIMG_URL[0] + f, d._MAP_PCBGIMG_URL[1]]) : c.T = d._MAP_PCBGIMG_URL, c.T = d._MAP_PCBGIMG_URL, c.Da()));
			e.Events.prototype.initialize.apply(c, []);
			c.pb = 0;
			c.setLimitBounds = c.setMaxLimit;
			c.inertia = c.inertial;
			d = new e.CopyrightControl({
				anchor: e.Constants.LEFT_BOTTOM
			});
			c.addControl(d);
			c.wb = d
		},
		Da: function() {
			var a = this._options,
			a = new e.BGTileLayer({
				baseUrl: this.T,
				tileSize: this.cc,
				vectorlayer: a.vector,
				isTileLayer: a.isTileLayer,
				hotspotOptions: a.hotspot ? {
					template: new LDMapHotspotTemplate(this),
					type: e.Constants.LAYER_HOTSPOT_RECT_TYPE
				}: null
			});
			this.addLayer(a);
			this.S = a
		},
		getCopyrightControl: s("wb"),
		getDefaultBGTileLayer: s("S"),
		destroy: function() {
			this.mapObj && (this.mapObj.remove(), this.mapObj = null);
			this.pb = 1
		},
		getStatus: s("pb"),
		dragged: function(a) {
			this._options.dragable = a || !1;
			a ? this.mapObj.dragging.enable() : this.mapObj.dragging.disable()
		},
		dblclickZoom: function(a) {
			this._options.dblclickZoom = a || !1;
			a ? this.mapObj.doubleClickZoom.enable() : this.mapObj.doubleClickZoom.disable()
		},
		keyboard: function(a) {
			this._options.keyboard = a || !1;
			a ? this.mapObj.keyboard.enable() : this.mapObj.keyboard.disable()
		},
		scrollWheelZoom: function(a) {
			this._options.scrollWheelZoom = a || !1;
			a ? this.mapObj.scrollWheelZoom.enable() : this.mapObj.scrollWheelZoom.disable()
		},
		inertial: function(a) {
			this._options.inertial = a;
			this.mapObj.inertia(a)
		},
		hotspot: function(a) {
			var b = this.S;
			if (b) {
				b.hotspot(a, {
					template: new LDMapHotspotTemplate(this),
					type: e.Constants.LAYER_HOTSPOT_RECT_TYPE
				});
				var c = this.sa;
				if (a && c) for (var d = 0,
				f = c.length; d < f; ++d) {
					var g = c[d];
					b.addHotspotEventListener(g.type, g.func, g.obj)
				}
				b.hc()
			}
			this._options.hotspot = a
		},
		addHotspotEventListener: function(a, b, c) {
			var d = {
				type: a,
				obj: c || this,
				func: b
			};
			this.S && this.S.addHotspotEventListener(a, b, c);
			this.sa || (this.sa = []);
			this.sa.push(d);
			return d
		},
		removeHotspotEventListener: function(a) {
			if (this.S) this.S.removeHotspotEventListener(a);
			else {
				var b = this.sa;
				if (b) for (var c = 0,
				d = b.length; c < d; ++c) if (a.type == b[c].type && a.obj == b[c].obj) {
					b[c].splice(c, 1);
					break
				}
			}
		},
		lnglatToPixel: function(a) {
			this.j && (a = e.convert(this.g, this.h, [a])[0]);
			return this.mapObj.latLngToContainerPoint([a.lat, a.lng])
		},
		pixelToLnglat: function(a) {
			a = this.mapObj.containerPointToLatLng([a.x, a.y]);
			this.j && (a = e.convert(this.h, this.g, [a]), a = a[0]);
			return new e.LngLat(a.lng, a.lat)
		},
		lnglatToLayerPixel: function(a, b) {
			if (a) return ! b && this.j && (a = e.convert(this.g, this.h, [a]), a = a[0]),
			this.mapObj.latLngToLayerPoint([a.lat, a.lng])
		},
		layerPixelToLnglat: function(a) {
			if (a) return a = this.mapObj.containerPointToLatLng([a.x, a.y]),
			this.j && (a = e.convert(this.h, this.g, [a])[0]),
			new e.LngLat(a.lng, a.lat)
		},
		panBy: function(a, b) {
			this.mapObj.panBy([a, b])
		},
		panTo: function(a) {
			this.j && (a = e.convert(this.g, this.h, [a])[0]);
			this.mapObj.panTo([a.lat, a.lng])
		},
		zoomIn: function(a) {
			var b = null;
			a && (this.j && (a = e.convert(this.g, this.h, [a])[0]), b = {
				center: [a.lat, a.lng]
			});
			this.mapObj.zoomIn(null, b)
		},
		zoomOut: function(a) {
			var b = null;
			a && (this.j && (a = e.convert(this.g, this.h, [a])[0]), b = {
				center: [a.lat, a.lng]
			});
			this.mapObj.zoomOut(null, b)
		},
		autoResize: function() {
			this.mapObj.invalidateSize()
		},
		setZoom: function(a) {
			this.mapObj.setZoom(a, !1)
		},
		setZoomLevels: function(a, b, c) {
			this.mapObj.setZoomLevels(a, b, c)
		},
		setCenter: function(a, b) {
			this.j && (a = e.convert(this.g, this.h, [a])[0]);
			this.mapObj.setView([a.lat, a.lng], b)
		},
		setBestMap: function(a, b) {
			if (a instanceof Array && 0 < a.length) {
				var c = [],
				d = [],
				f;
				for (f in a) {
					var g = a[f];
					c.push(g.lng);
					d.push(g.lat)
				}
				f = Math.max.apply(Math, c);
				g = Math.max.apply(Math, d);
				c = Math.min.apply(Math, c);
				d = Math.min.apply(Math, d);
				d = new e.LngLatBounds(new e.LngLat(c, d), new e.LngLat(f, g));
				this.setBounds(d, b)
			}
		},
		setBounds: function(a, b) {
			var c = a.getSouthWest(),
			d = a.getNorthEast();
			this.j && (d = e.convert(this.g, this.h, [c, d]), c = d[0], d = d[1]);
			this.mapObj.fitBounds([[c.lat, c.lng], [d.lat, d.lng]], b)
		},
		setMaxLimit: function(a) {
			var b = [];
			if (a instanceof Array) var c = a[0],
			d = a[1];
			else "object" == typeof a && (c = a.getSouthWest(), d = a.getNorthEast());
			c && (this.j && (d = e.convert(this.g, this.h, [c, d]), c = d[0], d = d[1]), b[0] = [c.lat, c.lng], b[1] = [d.lat, d.lng], this._options.limitBounds = a, this.mapObj.setMaxBounds(b))
		},
		getLimitBounds: function() {
			return this._options.limitBounds
		},
		getZoom: function() {
			return this.mapObj.getZoom()
		},
		getCenter: function() {
			var a = this.mapObj.getCenter();
			this.j && (a = e.convert(this.h, this.g, [{
				lng: a.lng,
				lat: a.lat
			}])[0]);
			return new e.LngLat(a.lng, a.lat)
		},
		getId: function() {
			return this.mapObj._map_id
		},
		getSize: function() {
			var a = this.mapObj.getSize();
			return new e.Size(a.x, a.y)
		},
		getBounds: function() {
			var a = this.mapObj.getBounds(),
			b = new e.LngLat(a.getSouthWest().lng, a.getSouthWest().lat),
			a = new e.LngLat(a.getNorthEast().lng, a.getNorthEast().lat);
			this.j && (a = e.convert(this.h, this.g, [b, a]), b = a[0], a = a[1]);
			return new e.LngLatBounds(b, a)
		},
		getContainer: function() {
			return this.mapObj.getContainer()
		},
		getBoundsForZoom: function() {
			var a = this.mapObj.getBounds();
			return this.mapObj._getBoundsCenterZoom(a).zoom
		},
		getOverlayLayer: s("yb"),
		addLayer: function(a) {
			a.setMap(this)
		},
		removeLayer: function(a) {
			a.setMap(null)
		},
		getBGLayerIds: function() {
			return this.mapObj.getBGLayerIds()
		},
		layerToTop: function(a) {
			this.mapObj.layerToTop(a)
		},
		changeBGLayer: function(a) {
			this.mapObj.changeBGLayer(a.p) && (this.S = a, this.triggerEvent(e.Constants.CHAGE_BGLAYER, {
				layer: a
			}))
		},
		addControl: function(a) {
			a && a.setMap(this)
		},
		removeControl: function(a) {
			a && a.setMap(null)
		},
		addContextMenu: function(a) {
			a && a.setMap(this)
		},
		removeContextMenu: function(a) {
			a && a.setMap(null)
		},
		clearOverlays: function() {
			this.getOverlayLayer().clear()
		},
		addTool: function(a) {
			a && a.setMap(this)
		},
		removeTool: function(a) {
			a && a.setMap(null)
		},
		addEventListener: function(a, b, c, d) {
			if (this.Za[a]) return this.addEventListener.apply(this, [a, b, c, d]);
			b = this.U(b, c || this, d, this);
			this.mapObj.on(a, b);
			return {
				type: a,
				obj: c || this,
				func: b,
				stop: d
			}
		},
		U: function(a, b, c, d) {
			return function(f) {
				if (d.j && "mousemove" == f.type) {
					var g = d.mapObj;
					if (d.Qa) if (3 < e.Function.distanceByPixel(g.latLngToContainerPoint(d.Qa), g.latLngToContainerPoint(f.latlng))) d.Qa = f.latlng;
					else return;
					else d.Qa = f.latlng
				}
				f.originalEvent && (f.originalEvent._stopped = c);
				g = {
					stop: c || b.stop,
					type: f.type,
					zoom: d.getZoom(),
					center: d.getCenter()
				};
				if (f.latlng) {
					var h = new e.LngLat(f.latlng.lng, f.latlng.lat); (g.defaultLnglat = h) && d.j && (h = e.convert(d.h, d.g, [h])[0]);
					g.lnglat = h;
					g.pixel = new e.Pixel(f.containerPoint.x, f.containerPoint.y)
				}
				return a.call(b, g)
			}
		},
		removeEventListener: function(a) {
			a && (this.Za[a.type] ? this.removeEventListener.apply(this, [a]) : this.mapObj.off(a.type, a.func))
		},
		getOptions: s("_options"),
		Jb: function(a) {
			return this.mapObj._getTileId(a)
		},
		plugin: function(a, b, c) { - 1 < a.join(",").indexOf("VectorTileLayer") ? this.Lb(a, b, c, this) : this.fb(a, b, c, this)
		},
		fb: function(a, b, c, d) {
			d.mapObj.plugin(a,
			function() {
				e.MapConfig._COUNT && d.Ya(a.join("|"));
				b instanceof Function && b.call(d)
			},
			c)
		},
		Lb: function(a, b, c, d) {
			function f() {
				d.mapObj.plugin(["vmapcm.min.js"],
				function() {
					d.fb(a, b, c, d)
				},
				e.STATIC_URL)
			}
			window.Vmapt ? f() : d.mapObj.plugin(["vmap.min.js"],
			function() {
				f()
			},
			e.STATIC_URL)
		},
		Ya: function(a) {
			var b = window.location.href;
			0 !== b.indexOf("http") && window.parent && window.parent !== window && (b = window.parent.location.href);
			new L.Http.JSONP(e.MapConfig._COUNT + ["ak=" + e.SRVConfig.SRV_AK, "logJson=" + ('{"uc":"' + encodeURIComponent(b) + '","m":"' + a + '","ak":"' + e.SRVConfig.SRV_AK + '","pf":"' + L.Browser.pf + '","v":"' + e.MapConfig._VERSIONS + '"}')].join("&"))
		},
		gpsType: s("g")
	});
	e.MapOptions = e.Class({
		backgoundImg: null,
		center: new e.LngLat(120.65, 28.01),
		maxZoom: null,
		minZoom: null,
		keyboard: null,
		dragable: null,
		hotspot: null,
		scrollWheel: null,
		dblclickZoom: null,
		animation: null,
		inertial: null,
		zoom: null,
		projectionType: null
	});
	e.Control = e.Class({
		initialize: function(a) {
			this.Ma = !1;
			a = a || {};
			this.ia = "_ld_control_" + e.Function.createUniqueID();
			this._options = a
		},
		setMap: function(a) {
			a ? (this.a = a, this.t.addTo(a.mapObj)) : (this.t.remove(), this.a = null)
		},
		getMap: s("a"),
		setObject: q("t"),
		getElement: function() {
			return this.t.getContainer()
		},
		setAnchor: function(a) {
			this._options.position = a;
			this.t.setPosition(a)
		},
		getAnchor: function() {
			return this._options.position
		},
		setOffset: function(a) {
			"object" == typeof a && (this._options.offset = a, this.t.setOffset(a))
		},
		getOffset: function() {
			return this._options.offset
		},
		getId: s("ia"),
		visible: function(a) {
			this.t.visible(a)
		},
		isUsable: s("Ma")
	});
	e.ControlOptions = e.Class({
		anchor: null,
		offset: null
	});
	e.ScaleControl = e.Class(e.Control, {
		initialize: function(a) {
			a = a || {};
			a.position = a.anchor || e.Constants.LEFT_BOTTOM;
			a.offset = a.offset || {
				x: 5,
				y: -40
			};
			a.imperial = !1;
			e.Control.prototype.initialize.apply(this, [a]);
			this.t = new L.Control.Scale(a)
		}
	});
	e.NavigationControl = e.Class(e.Control, {
		initialize: function(a) {
			a = a || {};
			a.position = a.anchor || e.Constants.LEFT_TOP;
			a.offset = a.offset || {
				x: 10,
				y: 10
			};
			e.Control.prototype.initialize.apply(this, [a]);
			this.t = new L.Control.Zoom(a)
		},
		setType: m(),
		getType: m()
	});
	e.Copyright = e.Class({
		id: null,
		content: null
	});
	e.CopyrightControl = e.Class(e.Control, {
		initialize: function(a) {
			a = a || {};
			a.position = a.anchor || e.Constants.RIGHT_BOTTOM;
			a.offset = a.offset || {
				x: 5,
				y: -5
			};
			e.Control.prototype.initialize.apply(this, [a]);
			var b = {
				id: "ld_copyright",
				content: e.MapConfig._CONTROL_COPYRIGHT
			};
			this.t = new L.Control.Attribution(a);
			this.t.addAttribution(b)
		},
		addCopyright: function(a) {
			return this.t.addAttribution(a)
		},
		removeCopyright: function(a) {
			return this.t.removeAttribution(a)
		},
		getCopyright: function(a) {
			return this.t.getAttribution(a)
		},
		getCopyrights: function() {
			return this.t.getAttributions()
		}
	});
	e.MenuItem = e.Class(e.DOMEvents, {
		ac: "padding:3px 6px;color:#76766f;word-wrap:break-word;",
		bc: "padding:3px 6px;color:#d0d0d0;word-wrap:break-word;",
		Ob: "#f3f3f2",
		Nb: "#ffffff",
		initialize: function(a, b) {
			var c = this;
			b = b || {};
			var d = {
				width: 150,
				enabled: "boolean" == typeof b.enabled ? b.enabled: !0,
				iconSize: b.iconSize instanceof Array ? b.iconSize: [25, 15],
				content: "string" == typeof a ? a: "TransMap",
				iconUrl: "string" == typeof b.iconUrl ? b.iconUrl: null,
				callback: "function" == typeof b.callback ? b.callback: null
			};
			c.options = d;
			c.ra = d.iconUrl && 23 < b.iconSize[1] ? b.iconSize[1] : 23;
			c.tc = !1;
			var f = e.Function.createElement({
				name: "div",
				cssText: (d.enabled ? c.ac: c.bc) + "width:" + d.width + "px;height:" + c.ra + "px;line-height:" + c.ra + "px;cursor:" + (d.enabled ? "pointer;": "default;")
			});
			c.n = f;
			a && (a = e.Function.checkFieldLength(a, 100), c.gb(a), d.iconUrl && (a = '<table cellpadding="0"cellspacing="0"border="0"><tbody><tr><td height="' + d.iconSize[1] + 'px" width="' + d.iconSize[0] + 'px"><img src="' + d.iconUrl + '" style=" height: ' + d.iconSize[1] + "px; width:" + d.iconSize[0] + 'px;"/></td><td >&nbsp;' + a + "</td></tr></tbody></table>"), c.w = a, f.innerHTML = a);
			e.DOMEvents.prototype.initialize.apply(c, []);
			c.attachToElement([{
				name: e.Constants.MOUSE_OVER,
				element: f,
				callback: function(a) {
					e.Event.stop(a, !1);
					d.enabled && (f.style.backgroundColor = c.Ob)
				},
				object: c
			},
			{
				name: e.Constants.MOUSE_OUT,
				element: f,
				callback: function(a) {
					e.Event.stop(a, !1);
					d.enabled && (f.style.backgroundColor = c.Nb)
				},
				object: c
			},
			{
				name: e.Constants.MOUSE_DOWN,
				element: f,
				callback: function(a) {
					e.Event.stop(a, !1);
					d.enabled && "function" == typeof d.callback && (c._close(null), d.callback(c.Sb))
				},
				object: c
			}])
		},
		setContent: function(a, b) {
			if (a && "string" == typeof a) {
				a = e.Function.checkFieldLength(a, 100);
				b = b || {};
				var c = b.iconUrl,
				d = b.iconSize,
				f = this.options;
				this.gb(a);
				f.iconUrl = "string" == typeof c ? c: null;
				f.iconSize = d instanceof Array ? d: [25, 15];
				f.iconUrl && (a = '<table cellpadding="0"cellspacing="0"border="0"><tbody><tr><td height="' + f.iconSize[1] + 'px" width="' + f.iconSize[0] + 'px"><img src="' + f.iconUrl + '" style=" height: ' + f.iconSize[1] + "px; width:" + f.iconSize[0] + 'px;"/></td><td >&nbsp;' + a + "</td></tr></tbody></table>");
				this.n.innerHTML = a;
				this.options.content = a
			}
		},
		setCallback: function(a) {
			a && "function" == typeof a && (this.options.callback = a)
		},
		enabled: function(a) {
			"boolean" == typeof a && (this.options.enabled = a, this.n.style.cursor = a ? "pointer": "default", this.n.style.color = a ? "#76766f": "#d0d0d0")
		},
		getElement: s("n"),
		injectSeparator: q("separatorElement"),
		setPosition: q("Sb"),
		gb: function(a) {
			a = e.Function.stringLength(a);
			this.n.style.height = this.ra * Math.ceil(12 * a / 2 / (this.options.width - 6)) + "px"
		}
	});
	e.pc = e.Class({
		width: null,
		enabled: null,
		Bc: null,
		Ac: null,
		vc: null
	});
	e.ContextMenu = e.Class(e.Events, e.DOMEvents, {
		H: {},
		Yb: "height:1px;width:100%;border-top:1;background-color:#CCCCCC;overflow:hidden;margin:1px 0px 1px 0px;",
		$b: "-moz-user-select: none;position: absolute;border:1px solid #CCCCCC;padding:1px 1px 1px 1px;color:#000000;background-color:#ffffff;font-size:12px;display:none;z-index:1001; height:auto;border-radius: 3px 3px 3px 3px;font-size:12px;",
		initialize: function(a) {
			this.G = [];
			if (this._showLocation = "boolean" == typeof a ? a: !1) a = new e.MenuItem("loading......", {
				enabled: !1
			}),
			this.G.push(a);
			this._element = e.Function.createElement({
				name: "div",
				id: "contexMenu",
				cssText: this.$b
			});
			e.Events.prototype.initialize.apply(this, []);
			e.DOMEvents.prototype.initialize.apply(this, [])
		},
		addItem: function(a) {
			this._position && a.setPosition(this._position);
			this.G.push(a);
			this._resetMenuItems()
		},
		getItem: function(a) {
			return this.G[a - 1]
		},
		removeItem: function(a) {
			if (!isNaN(a)) {
				a = parseInt(a - 1);
				var b = this.G[a];
				b && (this.jb(b.getElement()), this._element.removeChild(b.getElement()), b.isSeparator && b.separatorElement && this._element.removeChild(b.separatorElement), this.G.splice(a, 1), 0 == a && (this._showLocation = !1), this._resetMenuItems())
			}
		},
		addSeparator: function(a) {
			if (a = this.G[a - 1]) a.isSeparator = !0,
			this._resetMenuItems()
		},
		removeSeparator: function(a) {
			if (a = this.G[a - 1]) a.isSeparator = !1,
			a._close = null,
			this._resetMenuItems()
		},
		setMap: function(a) { ! this._map && a ? (this._map = a, this.tb()) : !a && this._map && (this.Vb(), this._map = null)
		},
		_resetMenuItems: function() {
			var a = this._element,
			b, c = this.G;
			if (a) {
				for (; a.hasChildNodes();) a.removeChild(a.firstChild);
				for (var d = 0,
				f = c.length; d < f; ++d) if (b = c[d], b.options.callback && (b._close = e.Function.bind(this._close, this)), a.appendChild(c[d].getElement()), b.isSeparator) {
					var g = this.Hb();
					b.injectSeparator(g);
					a.appendChild(g)
				}
			}
		},
		hb: function(a) {
			var b = this._map;
			if (b) {
				var c = this._element,
				d = this.Ib();
				c.style.width = d[0] + "px";
				var e = b.getSize(),
				g = e.height - a.y;
				c.style.left = e.width - a.x < d[0] ? b.getContainer().scrollLeft + a.x - d[0] + "px": b.getContainer().scrollLeft + a.x + "px";
				c.style.top = g < d[1] ? b.getContainer().scrollTop + a.y - d[1] + "px": b.getContainer().scrollTop + a.y + "px";
				c.style.display = "block"
			}
		},
		Ib: function() {
			for (var a = 150,
			b = 23,
			c = this.G,
			d, e = 0,
			g = c.length; e < g; ++e) d = c[e],
			d.options.width > a && (a = d.options.width),
			b += d.ra;
			return [a + 12, b]
		},
		Hb: function() {
			return e.Function.createElement({
				name: "div",
				cssText: this.Yb
			})
		},
		Qb: function(a) {
			var b = this,
			c = a.pixel,
			d = b._map,
			f = a.lnglat,
			g = b.G;
			if (b._showLocation) {
				g[0].setContent("loading......");
				var h = function() {
					var a = d.gpsType(),
					h = new e.LngLat(f.lng, f.lat);
					a != e.Constants.GPS_GCJ02 && (h = e.convert(a, e.Constants.GPS_GCJ02, [h]), h = h[0]);
					b._geocoder.getAddress(h,
					function(a, d) {
						1 == a || 0 == d.result.length ? g[0].setContent(h.toString()) : g[0].setContent(d.result[0].formatted_address);
						b.hb(c)
					})
				};
				b._geocoder ? h() : d.plugin(["IMAP.Geocoder"],
				function() {
					b._geocoder = new e.Geocoder;
					h()
				})
			}
			a = 0;
			for (var k = g.length; a < k; ++a) g[a].setPosition(f);
			b._position = f;
			b.hb(c);
			b.triggerEvent(e.Constants.MENU_OPEN, {
				type: e.Constants.MENU_OPEN,
				lnglat: f,
				target: b
			});
			b.wa || (b.attachToElement([{
				name: e.Constants.MOUSE_DOWN,
				element: document,
				callback: b._close,
				object: b
			}]), b.wa = d.addEventListener(e.Constants.MOUSE_DOWN, b._close, b))
		},
		_close: function() {
			this.wa && (this.detachToElement([{
				name: e.Constants.MOUSE_DOWN,
				element: document
			}]), this._map.removeEventListener(this.wa), this.wa = null);
			this._element.style.display = "none";
			this._position = null;
			this.triggerEvent(e.Constants.MENU_CLOSE, {
				type: e.Constants.MENU_CLOSE,
				target: this
			})
		},
		tb: function() {
			this._map.getContainer().appendChild(this._element);
			this.jc = this._map.addEventListener(e.Constants.MOUSE_CONTEXTMENU, this.Qb, this)
		},
		Vb: function() {
			for (var a = this.G,
			b = 0,
			c = a.length; b < c; ++b) this.jb(a[b].getElement());
			this._map.getContainer().removeChild(this._element);
			this._map.removeEventListener(this.jc)
		}
	})
})();
