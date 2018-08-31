webpackJsonp([2],{

/***/ "2v80":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/orientation.png";

/***/ }),

/***/ "38uV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 *
 *@since 2.0
 *@author zhiguo
 *@Date 2018/4/8 13:36
 */
class CommonUtil {
    /**
     * 获取指定范围内整数
     * @param {number} n
     * @param {number} m
     * @returns {number}
     */
    static getRandomInt(n, m) {
        const c = m - n + 1;
        return Math.floor(Math.random() * c + n);
    }
    static unfreeze(o) {
        let oo = null;
        if (o instanceof Array) {
            oo = [];
            const clone = function (v) { oo.push(v); };
            o.forEach(clone);
        }
        else if (o instanceof String) {
            oo = o.toString();
        }
        else if (typeof o === 'object') {
            oo = {};
            for (const property in o) {
                if (!property) {
                    continue;
                }
                oo[property] = o[property];
            }
        }
        return oo;
    }
}
/* harmony export (immutable) */ __webpack_exports__["CommonUtil"] = CommonUtil;



/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("r413");
__webpack_require__("fFyB");
__webpack_require__("YTfv");
__webpack_require__("38uV");
module.exports = __webpack_require__("SWdK");


/***/ }),

/***/ "AXO8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_Loading__ = __webpack_require__("Ft12");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_images_orientation_png__ = __webpack_require__("2v80");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_images_orientation_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_images_orientation_png__);


/**
 *
 *@since 2.0
 *@author zhiguo
 *@Date 2018/7/25 18:30
 */
class SystemTip {
    constructor() {
        if (window.hasOwnProperty('customLoading')) {
            this.loading = window['customLoading'];
            //(window as any)['customLoading'].show();
            //由于调用父窗口加载框时会有跨域问题，所以注释此代码
            /*} else if (window.top.hasOwnProperty('customLoading')) {
                (window.top as any)['customLoading'].show();*/
        }
        else {
            //显示框架内加载框
            this.loading = new __WEBPACK_IMPORTED_MODULE_0__loading_Loading__["a" /* Loading */]().initLoading();
            //(window as any)['customLoading'].show();
        }
    }
    /**
     * 当用户第一次横屏时显示提示信息
     */
    static showAdvice() {
        const adviceEle = document.getElementById('browserAdvice');
        if (adviceEle) {
            return;
        }
        const adviceDiv = document.createElement('div');
        adviceDiv.classList.add('advice_div_tip');
        adviceDiv.id = 'browserAdvice';
        adviceDiv.innerHTML = '建议您在电脑或平板上打开，以获取最佳的演示效果';
        document.body.appendChild(adviceDiv);
        setTimeout(() => {
            adviceDiv.style.opacity = '0';
            adviceDiv.style.display = 'none';
        }, 3000);
    }
    /**
     * 显示横屏提示，提示用户强制横屏
     */
    static showOrientationTip() {
        if (document.getElementById('orientationTip')) {
            document.getElementById('orientationTip').style.display = 'block';
            document.getElementById('maskContent').style.display = 'block';
        }
        else {
            this.initOrientationTip();
        }
    }
    /**
     * 创建手机端竖屏提示
     */
    static initOrientationTip() {
        if (document.getElementById('orientationTip')) {
            return;
        }
        //提示图片
        const tipImg = new Image();
        tipImg.src = __WEBPACK_IMPORTED_MODULE_1__static_images_orientation_png__;
        const orienttatioDiv = document.createElement('div');
        orienttatioDiv.classList.add('orientation_div_tip');
        orienttatioDiv.appendChild(tipImg);
        orienttatioDiv.id = 'orientationTip';
        const tipTxt = document.createElement('div');
        tipTxt.innerHTML = '请将屏幕自动旋转功能打开<p></p>并横屏使用';
        orienttatioDiv.appendChild(tipTxt);
        //遮罩
        const maskDiv = document.createElement('div');
        maskDiv.classList.add('mask_div');
        maskDiv.id = 'maskContent';
        //maskDiv.appendChild(orienttatioDiv);
        document.body.appendChild(maskDiv);
        document.body.appendChild(orienttatioDiv);
    }
    /**
     * 隐藏横屏提示
     */
    static hideOrientationTip() {
        if (document.getElementById('orientationTip')) {
            document.getElementById('orientationTip').style.display = 'none';
            document.getElementById('maskContent').style.display = 'none';
        }
    }
    showLoading() {
        this.loading.show();
    }
    hideLoading() {
        this.loading.hide();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SystemTip;



/***/ }),

/***/ "Ft12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommonLoading__ = __webpack_require__("pkW1");

class Loading {
    constructor() {
    }
    initLoading() {
        return new __WEBPACK_IMPORTED_MODULE_0__CommonLoading__["a" /* CommonLoading */]();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Loading;



/***/ }),

/***/ "SWdK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserUtil__ = __webpack_require__("YTfv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_SystemTip__ = __webpack_require__("AXO8");
/**
 * 设备监测类
 *@since 2.0
 *@author zhiguo
 *@Date 2018/2/6 15:27
 */


class Detector {
    /*   canvas =  !! window.CanvasRenderingContext2D,*/
    static webgl() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') ||
                canvas.getContext('experimental-webgl')));
        }
        catch (e) {
            return false;
        }
    }
    /**
     * 强制横屏
     */
    static forceMobildLandscape() {
        if (!__WEBPACK_IMPORTED_MODULE_0__BrowserUtil__["BrowserUtil"].getBrowserInfo().isMobile || __WEBPACK_IMPORTED_MODULE_0__BrowserUtil__["BrowserUtil"].getBrowserInfo().isHuohuaPlayer) {
            return;
        }
        //document.querySelector('.aspectration').classList.add("mobile")
        //移动端适配方案1：全屏下可以强制横屏，但是qq和weixin不支持
        /*(document as any).documentElement.webkitRequestFullscreen()
        (window as any).screen.orientation.lock('landscape-primary').then((result: any) => {
            console.log(result);
        }).catch((error: any) => {
            console.log(error);
        });*/
        const evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        window.addEventListener(evt, () => {
            //console.info('屏幕改变' , event , window.orientation );
            if (window.orientation === 90 || window.orientation === -90) {
                __WEBPACK_IMPORTED_MODULE_1__core_SystemTip__["a" /* SystemTip */].hideOrientationTip();
                //如果是通过竖屏旋转到横屏则显示提示
                __WEBPACK_IMPORTED_MODULE_1__core_SystemTip__["a" /* SystemTip */].showAdvice();
                setTimeout(() => {
                    window.viewHandler.resize();
                }, 30);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1__core_SystemTip__["a" /* SystemTip */].showOrientationTip();
            }
            //console.log(window.orientation)
            //this.changeOrientationEvt();
        }, false);
        this.changeOrientationEvt();
    }
    /**
     * 强制横屏
     */
    static changeOrientationEvt() {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        const contentDOM = document.querySelector('.root_div_container');
        //const contentDOM = document.body as HTMLDivElement;
        //alert('width: ' + width + ' height: ' + height)
        if (width > height) { // 横屏
            window['direction'] = 0;
            contentDOM.style.width = width + 'px';
            contentDOM.style.height = height + 'px';
            contentDOM.style.top = '0px';
            contentDOM.style.left = '0px';
            contentDOM.style.transform = 'none';
            console.log('横屏');
            //如果第一次进来是横屏则直接显示横屏提示
            __WEBPACK_IMPORTED_MODULE_1__core_SystemTip__["a" /* SystemTip */].showAdvice();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1__core_SystemTip__["a" /* SystemTip */].initOrientationTip();
            window['direction'] = 1;
            /* contentDOM.style.width = height + 'px';
              contentDOM.style.height = width + 'px';
              contentDOM.style.top = (height - width) / 2 + 'px';
              contentDOM.style.left = 0 - (height - width) / 2 + 'px';
              contentDOM.style.transform = 'rotate(90deg)';*/
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["Detector"] = Detector;



/***/ }),

/***/ "YTfv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Detector__ = __webpack_require__("SWdK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_BrowserInfo__ = __webpack_require__("yzvR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_SystemTip__ = __webpack_require__("AXO8");
/**
 *
 *@since 2.0
 *@author zhiguo
 *@Date 2018/2/6 16:17
 */



class BrowserUtil {
    static getBrowserInfo() {
        const ua = navigator.userAgent;
        const boInfo = {
            browser: '',
            browserVersion: '',
            os: '',
            osVersion: ''
        };
        let tem;
        let bsInfo = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(bsInfo[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            bsInfo[1] = 'IE';
            bsInfo[2] = tem[1] || ''; // IE浏览器版本
        }
        if (bsInfo[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) {
                // return tem.slice(1).join(' ').replace('OPR', 'Opera');
                bsInfo[1] = 'Opera';
                bsInfo[2] = tem[1] || '';
            }
        }
        bsInfo = bsInfo[2] ? [bsInfo[1], bsInfo[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            bsInfo.splice(1, 1, tem[1]);
        }
        const clientStrings = [
            { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
            { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
            { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
            { s: 'Windows Vista', r: /Windows NT 6.0/ },
            { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
            { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
            { s: 'Android', r: /Android/ },
            { s: 'Open BSD', r: /OpenBSD/ },
            { s: 'Sun OS', r: /SunOS/ },
            { s: 'Linux', r: /(Linux|X11)/ },
            { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
            { s: 'Mac OS X', r: /Mac OS X/ },
            { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: 'QNX', r: /QNX/ },
            { s: 'UNIX', r: /UNIX/ },
            { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
        ];
        let os = '';
        let osVersion = [];
        let osVersionStr = '';
        for (const id in clientStrings) {
            /*if (clientStrings.hasOwnProperty(id)) {
                continue;
            }*/
            if (!id) {
                continue;
            }
            const cs = clientStrings[id];
            // 注意不要用ua，ua是小写化
            if (cs.r.test(navigator.userAgent)) {
                os = cs.s;
                break;
            }
        }
        if (/Windows/.test(os)) {
            osVersionStr = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }
        switch (os) {
            case 'Mac OS X':
                osVersionStr = /Mac OS X (10[\.\_\d]+)/.exec(ua)[1];
                break;
            case 'Android':
                osVersionStr = /Android ([\.\_\d]+)/.exec(ua)[1];
                break;
            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion);
                osVersionStr = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] || 0);
                break;
        }
        if (os === 'Mac OS X' || os === 'Windows') {
        }
        boInfo.browser = bsInfo[0];
        boInfo.browserVersion = bsInfo[1];
        boInfo.os = os;
        boInfo.osVersion = osVersionStr;
        const browserInfo = new __WEBPACK_IMPORTED_MODULE_1__model_BrowserInfo__["BrowserInfo"]();
        browserInfo.userAgent = window.navigator.userAgent;
        browserInfo.isMobile = !!ua.match(/.*Mobile.*/) /* || BrowserUtil.isQQBroswer() || BrowserUtil.isRunWechat()*/;
        browserInfo.browser = boInfo.browser;
        browserInfo.version = boInfo.browserVersion;
        browserInfo.os = boInfo.os;
        browserInfo.osVersion = boInfo.osVersion;
        browserInfo.isQQ = BrowserUtil.isQQBroswer();
        browserInfo.isWechat = BrowserUtil.isRunWechat();
        browserInfo.isElectron = BrowserUtil.isEditor();
        browserInfo.isHuohuaPlayer = this.isHuohuaPlayer();
        browserInfo.isHuohuaApp = this.isHuohuaApp();
        browserInfo.devicePixelRatio = window.devicePixelRatio;
        browserInfo.screenResolution = window.screen.width + 'x' + window.screen.height;
        browserInfo.windowSize = document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight;
        browserInfo.supportWebgl = __WEBPACK_IMPORTED_MODULE_0__Detector__["Detector"].webgl();
        browserInfo.orientation = BrowserUtil.getOrientation();
        browserInfo.isIpad = !!ua.match(/.*iPad.*/);
        browserInfo.isIphone = !!ua.match(/.*iPhone.*/);
        browserInfo.isSmallDevice = window.screen.width <= 610 || window.screen.height <= 610;
        return browserInfo;
    }
    //判断浏览器 横屏landscape  竖屏portrait
    static getOrientation() {
        let orientation = '';
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        if (window.hasOwnProperty('orientation') === false) {
            if (width > height) {
                orientation = 'landscape';
            }
            else {
                orientation = 'portrait';
            }
        }
        else {
            const orientationNum = Number.parseInt(window.orientation);
            if (orientationNum === 0 || orientationNum === 180) {
                //竖屏
                orientation = 'portrait';
            }
            else if (orientationNum === 90 || orientationNum === -90) {
                //横屏
                orientation = 'landscape';
            }
        }
        return orientation;
    }
    static isQQBroswer() {
        return navigator.userAgent.indexOf('MQQBrowser') > -1; //是否QQ;
    }
    static isRunWechat() {
        return navigator.userAgent.indexOf('MicroMessenger') > -1;
    }
    //移动端ua
    static isHuohuaPlayer() {
        return navigator.userAgent.indexOf('huohua_app') > -1;
    }
    static isHuohuaApp() {
        return navigator.userAgent.indexOf('phone_huohua') > -1;
    }
    static isEditor() {
        return navigator.userAgent.indexOf('Electron') > -1;
    }
    /**
     * 浏览器准备好后执行的函数
     * @param {Function} readyCall
     */
    static domReady(readyCall) {
        if (!document.documentElement.clientWidth || document.documentElement.clientWidth === 0) {
            requestAnimationFrame(() => {
                BrowserUtil.domReady(readyCall);
            });
            return;
        }
        /**
         * 1.判断是否是手机端；
         * 2.如果是手机端判断是否是竖屏；
         * 3.如果是竖屏显示提示信息，并不执行readyCall
         * 4.如果旋转至横屏则隐藏提示信息并执行readyCall
         */
        // 如果手机在竖屏状态下打开微件，然后切换至横屏状态，微件会以竖屏的方式加载出来，为了解决此问题，实现了如下方法
        // 首先判断是否是手机端，
        // 如果是竖屏，给出操作提示并且不让页面加载并重新执行domready方法，
        // 如果是横屏，隐藏提示并且将页面加载出来
        if (this.getOrientation() === 'portrait' && (this.getBrowserInfo().isMobile || this.getBrowserInfo().isIphone)) {
            __WEBPACK_IMPORTED_MODULE_2__core_SystemTip__["a" /* SystemTip */].showOrientationTip();
            document.getElementById('orientationTip').style.zIndex = '1000';
            document.getElementById('maskContent').style.zIndex = '1000';
            requestAnimationFrame(() => {
                BrowserUtil.domReady(readyCall);
            });
            return;
        }
        else if (this.getOrientation() === 'landscape' && (this.getBrowserInfo().isMobile || this.getBrowserInfo().isIphone)) {
            __WEBPACK_IMPORTED_MODULE_2__core_SystemTip__["a" /* SystemTip */].hideOrientationTip();
        }
        setTimeout(() => {
            readyCall();
        }, 100);
    }
}
/* harmony export (immutable) */ __webpack_exports__["BrowserUtil"] = BrowserUtil;



/***/ }),

/***/ "fFyB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 *
 *@since 2.0
 *@author zhiguo
 *@Date 2018/7/26 13:42
 */
class BrowserApiUtil {
    static isSupportWebGl() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') ||
                canvas.getContext('experimental-webgl')));
        }
        catch (e) {
            return false;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["BrowserApiUtil"] = BrowserApiUtil;



/***/ }),

/***/ "pkW1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_images_ic_loading_png__ = __webpack_require__("x3Sa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_images_ic_loading_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_images_ic_loading_png__);

class CommonLoading {
    constructor() {
        this.init();
    }
    hide() {
        document.getElementById('loading').style.display = 'none';
    }
    init() {
        console.log(__WEBPACK_IMPORTED_MODULE_0__static_images_ic_loading_png__);
        document.getElementById('loading').innerHTML = `<div class='ui-flex justify-center center' style='width: 100%;height: 100%;'>
<img src='${__WEBPACK_IMPORTED_MODULE_0__static_images_ic_loading_png__}' class='common_loading_img rotate_animate'/></div>`;
    }
    show() {
        //document.getElementById('loading').style.display = 'block';
    }
    isShown() {
        return false;
    }
    destory() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommonLoading;



/***/ }),

/***/ "r413":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class Animation {
    constructor(callback, fpsInterval) {
        this.now = 0;
        this.then = 0;
        this.isCancle = false;
        this.fpsInterval = 60;
        this.fpsInterval = fpsInterval ? fpsInterval : this.fpsInterval;
        this.callback = callback;
    }
    run() {
        // console.info('abc' , this);
        // request another frame
        if (this.isCancle) {
            this.isCancle = false;
            return;
        }
        requestAnimationFrame(() => {
            this.run();
        });
        // calc elapsed time since last loop
        this.now = Date.now();
        const elapsed = this.now - this.then;
        // if enough time has elapsed, draw the next frame
        if (elapsed > this.fpsInterval) {
            // Get ready for next frame by setting then=now, but also adjust for your
            // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            this.then = this.now - (elapsed % this.fpsInterval);
            // Put your drawing code here
            this.callback();
        }
    }
    cancle() {
        this.isCancle = true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Animation"] = Animation;



/***/ }),

/***/ "x3Sa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/ic_loading.png";

/***/ }),

/***/ "yzvR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 *
 *@since 2.0
 *@author zhiguo
 *@Date 2018/2/6 10:13
 */
class BrowserInfo {
    print() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["BrowserInfo"] = BrowserInfo;

var BrowserType;
(function (BrowserType) {
    BrowserType[BrowserType["ie"] = 0] = "ie";
    BrowserType[BrowserType["chrome"] = 1] = "chrome";
    BrowserType[BrowserType["safari"] = 2] = "safari";
    BrowserType[BrowserType["firefox"] = 3] = "firefox";
})(BrowserType || (BrowserType = {}));
var OSType;
(function (OSType) {
    OSType[OSType["Windows_10"] = 0] = "Windows_10";
    OSType[OSType["Windows_8_1"] = 1] = "Windows_8_1";
    OSType[OSType["Windows_8"] = 2] = "Windows_8";
    OSType[OSType["Windows_7"] = 3] = "Windows_7";
    OSType[OSType["Windows_Vista"] = 4] = "Windows_Vista";
    OSType[OSType["Windows_Server"] = 5] = "Windows_Server";
    OSType[OSType["Windows_XP"] = 6] = "Windows_XP";
    OSType[OSType["Android"] = 7] = "Android";
    OSType[OSType["Open_BSD"] = 8] = "Open_BSD";
    OSType[OSType["Sun_OS"] = 9] = "Sun_OS";
    OSType[OSType["Linux"] = 10] = "Linux";
    OSType[OSType["iOS"] = 11] = "iOS";
    OSType[OSType["Mac_OS_X"] = 12] = "Mac_OS_X";
    OSType[OSType["Mac_OS"] = 13] = "Mac_OS";
    OSType[OSType["QNX"] = 14] = "QNX";
    OSType[OSType["UNIX"] = 15] = "UNIX";
    OSType[OSType["Search_Bot"] = 16] = "Search_Bot";
})(OSType || (OSType = {}));


/***/ })

},[5]);