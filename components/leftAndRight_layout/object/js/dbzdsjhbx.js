webpackJsonp([1],{

/***/ "21kJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Detector__ = __webpack_require__("SWdK");

class CommonViewHandler {
    constructor(vm) {
        this.viewModel = vm;
    }
    beforeRenderElement() {
        //TODO check browVersion support
        //throw new Error('Method not implemented.');
    }
    domReady() {
        __WEBPACK_IMPORTED_MODULE_0__util_Detector__["Detector"].forceMobildLandscape();
        this.setLayout();
    }
    resize() {
        //throw new Error('Method not implemented.');
        // Detector.forceMobildLandscape();
        this.setLayout();
    }
    reset() {
        //throw new Error('Method not implemented.');
    }
    runTest() {
        //throw new Error('Method not implemented.');
    }
    pause() {
    }
    resume() {
    }
    destory() {
    }
    /**
     * 设置布局
     * 1.主内容区固定宽高，只在指定像素屏幕上放大1倍或者缩小一倍
     * 2.设置控制面板在移动端的隐藏，以及点击显示
     *
     */
    setLayout() {
        /*let mainViewContent:HTMLDivElement = (document.getElementsByClassName('view_div_content')[0] as HTMLDivElement);
        if(!mainViewContent){
            console.warn('view_div_content doesn't exist !');
            return;
        }
        let ratio = mainViewContent.getAttribute('data-ratio');
        if(!ratio){
            console.warn('view_div_content doesn't exist attribute data-ratio !');
            return;
        }
        let ratioW:number = Number.parseInt(ratio.split(':')[0]);
        let ratioH:number = Number.parseInt(ratio.split(':')[1]);

        let clientWidth = mainViewContent.clientWidth;
        let clientHeight = mainViewContent.clientHeight;
        console.log('clientWidth:'+clientWidth+' --  clientHeight:'+clientHeight);
        //if(clientWidth > clientHeight){
            let styleWith = ratioW/ratioH *clientHeight;
            mainViewContent.style.width = styleWith + 'px';
            console.log('width:'+styleWith);*/
        /*}else{
            let styleHeight = clientWidth*ratioH/ratioW;
            mainViewContent.style.height = styleHeight + 'px';
            console.log('height:'+styleHeight);
        }*/
    }
    hideControlElement() {
    }
    showControlElement() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommonViewHandler;



/***/ }),

/***/ "2u5R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue__ = __webpack_require__("jJ8/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_util_BrowserUtil__ = __webpack_require__("YTfv");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
/* tslint:disable:no-unused-expression */
__WEBPACK_IMPORTED_MODULE_2__src_util_BrowserUtil__["BrowserUtil"].domReady(() => {
    new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
        el: '#app',
        template: '<App/>',
        components: { App: __WEBPACK_IMPORTED_MODULE_1__main_vue__["a" /* default */] }
    });
});
/* tslint:enable:no-unused-expression */


/***/ }),

/***/ "2vxy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewController__ = __webpack_require__("yC1y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_images_chongzhi_png__ = __webpack_require__("PM8k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_images_chongzhi_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_images_chongzhi_png__);


const _ = __webpack_require__("M4fF");
/**
 *
 * UI适配类
 *@since 2.0
 *@author zhiguo
 *@Date 2018/7/25 14:15
 *
 */
class UIAdapter {
    constructor() {
    }
    createElement() {
        this.createResetElement();
    }
    /**
     * 创建重置按钮
     */
    createResetElement() {
        if (document.getElementById('reset')) {
            return;
        }
        const resetEle = `<div class="button_border control_div_resetBtn" id="reset">
                        <img src="${__WEBPACK_IMPORTED_MODULE_1__static_images_chongzhi_png__}" >
                </div>`;
        document.body.insertAdjacentHTML('beforeend', resetEle);
        document.getElementById('reset').addEventListener('click', () => {
            __WEBPACK_IMPORTED_MODULE_0__ViewController__["a" /* ViewController */].getInstance().viewHandler.reset();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UIAdapter;



/***/ }),

/***/ "5eRw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_BrowserUtil__ = __webpack_require__("YTfv");

/**
 *
 * 环境监测类
 *@since 2.0
 *@author zhiguo
 *@Date 2018/7/26 12:52
 */
class Environment {
    constructor() {
        this.browserInfo = __WEBPACK_IMPORTED_MODULE_0__util_BrowserUtil__["BrowserUtil"].getBrowserInfo();
        //mock data
        //(window as any).technology = ['threejs', 'webgl' , 'webgl2.0', 'gsap'];
        this.loadEditorInfo();
        this.loadMobileInfo();
    }
    /**
     * 加载编辑器硬件信息
     */
    loadEditorInfo() {
        // mock data
        /*(window as any).hardware = {
            cpu: 'Intel(R)_Xeon(R)_CPU_E5-1620_v4_@_3.50GHz',
            cpuLevel: '95',
            discreteGpu: true,
            totalMem: 8192,
            freeMem: 4622
        };*/
        const hardware = window.hardware;
        if (!hardware) {
            console.warn('no hardwareinfo');
        }
        this.hardware = hardware;
    }
    /**
     * 加载移动端信息
     */
    loadMobileInfo() {
        if (!this.browserInfo.isHuohuaPlayer && !this.browserInfo.isHuohuaApp) {
            return;
        }
        if (!window.hasOwnProperty('api') || !window.api.getDeviceInfo) {
            return;
        }
        this.mobileHardware = JSON.parse(window.api.getDeviceInfo());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Environment;



/***/ }),

/***/ "5mjE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__ = __webpack_require__("yC1y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_util_Detector__ = __webpack_require__("SWdK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_core_CommonViewHandler__ = __webpack_require__("21kJ");



class DbzdsjhbxViewHanlderForPC extends __WEBPACK_IMPORTED_MODULE_2__src_core_CommonViewHandler__["a" /* CommonViewHandler */] {
    constructor(vm) {
        super(vm);
    }
    beforeRenderElement() {
        //throw new Error('Method not implemented.');
    }
    domReady() {
        super.domReady();
        __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__["a" /* ViewController */].getInstance().hideLoading();
    }
    resize() {
        __WEBPACK_IMPORTED_MODULE_1__src_util_Detector__["Detector"].forceMobildLandscape();
    }
    playAnimation1() {
        document.getElementById('animationVideo1').play();
    }
    playAnimation2() {
        document.getElementById('animationVideo2').play();
    }
    playAnimation3() {
        document.getElementById('animationVideo3').play();
    }
    playAnimation4() {
        document.getElementById('animationVideo4').play();
    }
    resetAnimation1() {
        document.getElementById('animationVideo1').pause();
        document.getElementById('animationVideo1').currentTime = 0;
    }
    resetAnimation2() {
        document.getElementById('animationVideo2').pause();
        document.getElementById('animationVideo2').currentTime = 0;
    }
    resetAnimation3() {
        document.getElementById('animationVideo3').pause();
        document.getElementById('animationVideo3').currentTime = 0;
    }
    resetAnimation4() {
        document.getElementById('animationVideo4').pause();
        document.getElementById('animationVideo4').currentTime = 0;
    }
    reset() {
        this.viewModel.$data.show_Radio1 = false;
        this.viewModel.$data.show_Radio2 = false;
        this.viewModel.$data.vertical1 = '0';
        this.viewModel.$data.vertical2 = '0';
        this.viewModel.$data.ctrl1 = true;
        this.viewModel.$data.ctrl2 = false;
        this.viewModel.$data.ctrl3 = false;
        this.viewModel.$data.ctrl4 = false;
        this.viewModel.$data.ctrl5 = false;
        __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation1();
        __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation2();
        __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation3();
        __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation4();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DbzdsjhbxViewHanlderForPC;



/***/ }),

/***/ "7uR8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewController__ = __webpack_require__("yC1y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__ = __webpack_require__("HMpe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_images_expand_on_3x_png__ = __webpack_require__("NPKS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_images_expand_on_3x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_images_expand_on_3x_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_images_expand_off_3x_png__ = __webpack_require__("SENO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_images_expand_off_3x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_images_expand_off_3x_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_images_reset_new_3x_png__ = __webpack_require__("URJr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_images_reset_new_3x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_images_reset_new_3x_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("rxKx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SystemTip__ = __webpack_require__("AXO8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_BrowserUtil__ = __webpack_require__("YTfv");








const _ = __webpack_require__("M4fF");
/**
 *
 * 手机端适配类
 *@since 2.0
 *@author zhiguo
 *@Date 2018/7/25 14:15
 *
 */
class MobileAdapter {
    constructor() {
    }
    /**
     * 手机端打开时触发操作
     * 1.右侧的控件区域改为漂浮
     * 2.由于手机端高度有限控件区域按钮过多可能会出现滚动条，所以需要初始化滚动条组件
     * 3.当右侧空间区域改为漂浮时默认先收起
     * 4.创建操作右侧控件区的悬浮按钮
     */
    changeDeviceToMobile() {
        console.log('adaptation mobile');
        /*1.右侧控件面板改为全局漂浮*/
        if (document.getElementsByClassName('control-panel_div_rt').length === 1) {
            const controlPanel = document.getElementsByClassName('control-panel_div_rt')[0];
            controlPanel.classList.remove('control-panel_div_rt');
            controlPanel.classList.add('control-panel_div_floatRight');
        }
        //2.动态添加滚动条
        const container = document.querySelector('.control-panel_div_floatRight');
        if (container) {
            __WEBPACK_IMPORTED_MODULE_0__ViewController__["a" /* ViewController */].perfectScrollbar = new __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__["a" /* default */](container);
        }
        //4.插入展开按钮
        if (window.viewOption.showMobileExpandIco === true) {
            this.createExpandElement();
        }
        //创建重置按钮
        if (window.viewOption.showMobileResetIco === true) {
            this.createResetElement();
        }
        //3.隐藏右侧工具栏
        const controlRightPanel = document.getElementsByClassName('control-panel_div_floatRight')[0];
        if (controlRightPanel) {
            controlRightPanel.classList.add('mobile_right_control');
            if (window.viewOption.mobilePanelAlpha === false) {
                controlRightPanel.classList.add('mobile_blur');
                //controlRightPanel.classList.add('off');
            }
            setTimeout(() => {
                this.hidePanel();
            }, window.viewOption.controlPanelAnimationDelay);
        }
        //5.设置内容区域为全屏样式
        const contentDiv = document.getElementsByClassName('control-panel_div_content')[0];
        if (!contentDiv.classList.contains('fill_parent')) {
            contentDiv.classList.add('fill_parent');
        }
    }
    /**
     * 绑定移动端
     */
    createExpandElement() {
        const expandOpenBtn = '<img id="expandOpenBtn" class="control_div_expandBtn" src="' + __WEBPACK_IMPORTED_MODULE_3__static_images_expand_off_3x_png__ + '"/>';
        document.body.insertAdjacentHTML('beforeend', expandOpenBtn);
        const expandCloseBtn = '<img id="expandCloseBtn" class="control_div_expandBtn hide" src="' + __WEBPACK_IMPORTED_MODULE_2__static_images_expand_on_3x_png__ + '"/>';
        document.body.insertAdjacentHTML('beforeend', expandCloseBtn);
        const expandElement = document.getElementById('expandOpenBtn');
        const expandCloseElement = document.getElementById('expandCloseBtn');
        //7.绑定展开/关闭按钮事件
        expandElement.addEventListener('click', () => {
            this.showPanel();
        });
        expandCloseElement.addEventListener('click', () => {
            this.hidePanel();
        });
    }
    /**
     * 创建收起和展开按钮
     */
    createResetElement() {
        const resetBtn = '<img id="resetBtn" class="control_div_mobileResetBtn" src="' + __WEBPACK_IMPORTED_MODULE_4__static_images_reset_new_3x_png__ + '"/>';
        document.body.insertAdjacentHTML('beforeend', resetBtn);
        this.hidePcResetImg();
        const resetElement = document.getElementById('resetBtn');
        //8.绑定重置事件
        resetElement.addEventListener('click', () => {
            __WEBPACK_IMPORTED_MODULE_0__ViewController__["a" /* ViewController */].getInstance().viewHandler.reset();
        });
    }
    /**
     * 隐藏pc版重置图片
     */
    hidePcResetImg() {
        const imgs = document.getElementsByTagName('img');
        const index = _.findIndex(imgs, function (img) { return img.src.indexOf('chongzhi.png') > -1; });
        //隐藏pc上的重置图片
        if (index > -1) {
            imgs[index].classList.add('hide');
        }
        //隐藏重置图片的容器
        const resetDiv = document.getElementById('reset');
        if (resetDiv) {
            resetDiv.classList.add('hide');
        }
    }
    /**
     * 显示面板
     */
    showPanel() {
        __WEBPACK_IMPORTED_MODULE_0__ViewController__["a" /* ViewController */].getInstance().viewHandler.showControlElement();
        /*console.log('show');*/
        const expandElement = document.getElementById('expandOpenBtn');
        const expandCloseElement = document.getElementById('expandCloseBtn');
        const controlRightPanel = document.getElementsByClassName('control-panel_div_floatRight')[0];
        if (controlRightPanel) {
            if (window.viewOption.mobilePanelAlpha === true) {
                controlRightPanel.classList.remove('hide');
            }
            else {
                controlRightPanel.classList.remove('off');
            }
        }
        expandElement.classList.add('hide');
        expandCloseElement.classList.remove('hide');
    }
    /**
     * 隐藏面板
     */
    hidePanel() {
        /*console.log('hide');
*/
        __WEBPACK_IMPORTED_MODULE_0__ViewController__["a" /* ViewController */].getInstance().viewHandler.hideControlElement();
        const expandElement = document.getElementById('expandOpenBtn');
        const expandCloseElement = document.getElementById('expandCloseBtn');
        const controlRightPanel = document.getElementsByClassName('control-panel_div_floatRight')[0];
        if (controlRightPanel) {
            if (window.viewOption.mobilePanelAlpha === true) {
                controlRightPanel.classList.add('hide');
            }
            else {
                controlRightPanel.classList.add('off');
            }
        }
        if (expandCloseElement) {
            expandCloseElement.classList.add('hide');
        }
        if (expandCloseElement) {
            expandElement.classList.remove('hide');
        }
    }
    /** 手指缩放视图区域 **/
    scaleViewContent(element) {
        if (!element) {
            element = document.getElementsByClassName('view_div_content')[0];
        }
        console.log('绑定事件');
        const options = {};
        const hammertime = new __WEBPACK_IMPORTED_MODULE_5_hammerjs___default.a(element);
        console.log(hammertime);
        hammertime.get('pinch').set({ enable: true });
        hammertime.on('pinch', (ev) => {
            const orgScale = element.style.transform.split('(')[1].split(')')[0];
            console.log(ev);
            console.log('orgScale:' + orgScale);
            console.log('触控点数 :' + ev.pointers.length + ' scale： ' + ev.scale);
            const scale = 0.5 * ev.scale;
            console.log('scale:' + scale);
            element.style.transform = 'scale(' + ev.scale + ')';
            //document.dispatchEvent(ev.srcEvent);
        });
    }
    /**
     * 初始化视图内容区的点击事件
     */
    initViewContentClickEvent() {
    }
    forceMobildLandscape() {
        if (!__WEBPACK_IMPORTED_MODULE_7__util_BrowserUtil__["BrowserUtil"].getBrowserInfo().isMobile || __WEBPACK_IMPORTED_MODULE_7__util_BrowserUtil__["BrowserUtil"].getBrowserInfo().isHuohuaPlayer) {
            return;
        }
        const evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        window.addEventListener(evt, () => {
            //console.info('屏幕改变' , event , window.orientation );
            if (window.orientation === 90 || window.orientation === -90) {
                __WEBPACK_IMPORTED_MODULE_6__SystemTip__["a" /* SystemTip */].hideOrientationTip();
                //如果是通过竖屏旋转到横屏则显示提示
                __WEBPACK_IMPORTED_MODULE_6__SystemTip__["a" /* SystemTip */].showAdvice();
                setTimeout(() => {
                    window.viewHandler.resize();
                }, 30);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6__SystemTip__["a" /* SystemTip */].showOrientationTip();
            }
            //console.log(window.orientation)
            //this.changeOrientationEvt();
        }, false);
        this.changeOrientationEvt();
    }
    changeOrientationEvt() {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        const contentDOM = document.querySelector('.root_div_container');
        if (!contentDOM) {
            console.error('root_div_container 不存在');
            return;
        }
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
            __WEBPACK_IMPORTED_MODULE_6__SystemTip__["a" /* SystemTip */].showAdvice();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6__SystemTip__["a" /* SystemTip */].initOrientationTip();
            window['direction'] = 1;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MobileAdapter;



/***/ }),

/***/ "FqEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aspectration bg_white covered root_div_container "},[_c('leftAndRightLayout',{scopedSlots:_vm._u([{key:"controlPanel",fn:function(controlPanel){return [_c('div',{attrs:{"id":"controlPanel"}},[_c('div',{staticClass:"btn_Control1",attrs:{"id":"sj_btn"}},[_c('label',{on:{"click":function($event){_vm.sjEvent()}}},[_c('h_button',{class:{active:_vm.disabledSJ},staticStyle:{"width":"240px","height":"44px","margin-top":"14px","font-size":"16px"},attrs:{"title":"蛋白质水解"}})],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show_Radio1),expression:"show_Radio1"}],staticClass:"control-block_div_border ",staticStyle:{"margin-top":"20px"}},[_c('label',{staticStyle:{"display":"inline-block"},attrs:{"for":"b1"},on:{"click":function($event){_vm.resetAnimation()}}},[_c('label',{staticStyle:{"margin-left":"-8px","font-size":"14px"},attrs:{"for":"b1"}},[_vm._v("未水解")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vertical1),expression:"vertical1"}],staticClass:"radio-default",attrs:{"type":"radio","id":"b1","name":"radio-group","checked":"","value":"0"},domProps:{"checked":_vm._q(_vm.vertical1,"0")},on:{"change":function($event){_vm.vertical1="0"}}}),_vm._v(" "),_c('label',{staticStyle:{"display":"table-cell","vertical-align":"middle","height":"24px"},attrs:{"for":"b1"}})]),_vm._v(" "),_c('label',{staticStyle:{"display":"inline-block","margin-left":"calc(30% - 19px)"},attrs:{"for":"b2"},on:{"click":function($event){_vm.partHydrolysis()}}},[_c('label',{staticStyle:{"margin-left":"-18px","font-size":"14px"},attrs:{"for":"b2"}},[_vm._v("部分水解")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vertical1),expression:"vertical1"}],staticClass:"radio-default",attrs:{"type":"radio","id":"b2","name":"radio-group","value":"1"},domProps:{"checked":_vm._q(_vm.vertical1,"1")},on:{"change":function($event){_vm.vertical1="1"}}}),_vm._v(" "),_c('label',{staticStyle:{"display":"table-cell","vertical-align":"middle","height":"24px"},attrs:{"for":"b2"}})]),_vm._v(" "),_c('label',{staticStyle:{"display":"inline-block","float":"right"},attrs:{"for":"b3"},on:{"click":function($event){_vm.allHydrolysis()}}},[_c('label',{staticStyle:{"margin-left":"-18px","font-size":"14px"},attrs:{"for":"b3"}},[_vm._v("完全水解")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vertical1),expression:"vertical1"}],staticClass:"radio-default",attrs:{"type":"radio","id":"b3","name":"radio-group","value":"2"},domProps:{"checked":_vm._q(_vm.vertical1,"2")},on:{"change":function($event){_vm.vertical1="2"}}}),_vm._v(" "),_c('label',{staticStyle:{"display":"table-cell","vertical-align":"middle","height":"24px"},attrs:{"for":"b3"}})])]),_vm._v(" "),_c('div',{staticClass:"btn_Control2"},[_c('label',{on:{"click":function($event){_vm.bxEvent()}}},[_c('h_button',{class:{active:_vm.disabledBX},staticStyle:{"width":"240px","height":"44px","font-size":"16px"},attrs:{"title":"蛋白质变性"}})],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show_Radio2),expression:"show_Radio2"}],staticClass:"control-block_div_border ",staticStyle:{"margin-top":"20px"}},[_c('label',{staticStyle:{"display":"inline-block","margin-left":"25px"},attrs:{"for":"b4"},on:{"click":function($event){_vm.resetAnimation()}}},[_c('label',{staticStyle:{"margin-left":"-23px","font-size":"14px"},attrs:{"for":"b4"}},[_vm._v("活性蛋白质")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vertical2),expression:"vertical2"}],staticClass:"radio-default",attrs:{"type":"radio","id":"b4","name":"radio-group2","checked":"","value":"0"},domProps:{"checked":_vm._q(_vm.vertical2,"0")},on:{"change":function($event){_vm.vertical2="0"}}}),_vm._v(" "),_c('label',{staticStyle:{"display":"table-cell","vertical-align":"middle","height":"24px","margin-top":"20px"},attrs:{"for":"b4"}})]),_vm._v(" "),_c('label',{staticStyle:{"display":"inline-block","margin-left":"calc(30% - 26px)"},attrs:{"for":"b5"},on:{"click":function($event){_vm.partTranssexual()}}},[_c('label',{staticStyle:{"margin-left":"-3px","font-size":"14px"},attrs:{"for":"b5"}},[_vm._v("变性")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vertical2),expression:"vertical2"}],staticClass:"radio-default",attrs:{"type":"radio","id":"b5","name":"radio-group2","value":"1"},domProps:{"checked":_vm._q(_vm.vertical2,"1")},on:{"change":function($event){_vm.vertical2="1"}}}),_vm._v(" "),_c('label',{staticStyle:{"display":"table-cell","vertical-align":"middle","height":"24px"},attrs:{"for":"b5"}})]),_vm._v(" "),_c('label',{staticStyle:{"display":"inline-block","float":"right","margin-left":"10px"},attrs:{"for":"b6"},on:{"click":function($event){_vm.allTranssexual()}}},[_c('label',{staticStyle:{"margin-left":"-3px","font-size":"14px"},attrs:{"for":"b6"}},[_vm._v("复性")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.vertical2),expression:"vertical2"}],staticClass:"radio-default",attrs:{"type":"radio","id":"b6","name":"radio-group2","value":"2"},domProps:{"checked":_vm._q(_vm.vertical2,"2")},on:{"change":function($event){_vm.vertical2="2"}}}),_vm._v(" "),_c('label',{staticStyle:{"display":"table-cell","vertical-align":"middle","height":"24px"},attrs:{"for":"b6"}})])])])]}},{key:"viewBox",fn:function(viewBox){return [_c('span',{staticClass:"title_text",attrs:{"id":"title"}},[_vm._v("蛋白质的水解和变性")]),_vm._v(" "),_c('div',{class:{'set_scale': _vm.isMobile},staticStyle:{"width":"100%","height":"100%","display":"flex"},attrs:{"id":"3dContainer"}},[(_vm.isPC)?_c('div',{staticStyle:{"margin":"auto"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl1),expression:"ctrl1"}],staticStyle:{"width":"680px","height":"380px"},attrs:{"src":__webpack_require__("isjB")}}),_vm._v(" "),_c('video',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl2),expression:"ctrl2"}],staticStyle:{"width":"680px","height":"380px"},attrs:{"src":__webpack_require__("k34z"),"id":"animationVideo1"}}),_vm._v(" "),_c('video',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl3),expression:"ctrl3"}],staticStyle:{"width":"680px","height":"380px"},attrs:{"src":__webpack_require__("VhVh"),"id":"animationVideo2"}}),_vm._v(" "),_c('video',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl4),expression:"ctrl4"}],staticStyle:{"width":"680px","height":"380px"},attrs:{"src":__webpack_require__("as0q"),"id":"animationVideo3"}}),_vm._v(" "),_c('video',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl5),expression:"ctrl5"}],staticStyle:{"width":"680px","height":"380px"},attrs:{"src":__webpack_require__("nZ/E"),"id":"animationVideo4"}})]):_c('div',{staticStyle:{"margin":"auto"}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl1),expression:"ctrl1"}],staticStyle:{"width":"680px","height":"380px"},attrs:{"src":__webpack_require__("isjB")}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl2),expression:"ctrl2"}],staticClass:"part_hydrolysis"},[_c('keyFrameAnimation',_vm._b({ref:"hydrolysis1"},'keyFrameAnimation',_vm.part_hydrolysis,false))],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl3),expression:"ctrl3"}],staticClass:"all_hydrolysis"},[_c('keyFrameAnimation',_vm._b({ref:"hydrolysis2"},'keyFrameAnimation',_vm.all_hydrolysis,false))],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl4),expression:"ctrl4"}],staticClass:"part_transsexual"},[_c('keyFrameAnimation',_vm._b({ref:"transsexual1"},'keyFrameAnimation',_vm.part_transsexual,false))],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ctrl5),expression:"ctrl5"}],staticClass:"all_transsexual"},[_c('keyFrameAnimation',_vm._b({ref:"transsexual2"},'keyFrameAnimation',_vm.all_transsexual,false))],1)])])]}}])})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "HxIr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JVVu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 *  AlloyLever v1.0.2 By dntzhang
 *  Github: https://github.com/AlloyTeam/AlloyLever
 *  MIT Licensed.
 */
var VConsole = __webpack_require__("Lw6n");
;(function (root, factory) {
    if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["AlloyLever"] = factory();else root["AlloyLever"] = factory();
})(undefined, function () {
    var AlloyLever = {};
    AlloyLever.settings = {
        reportUrl: null,
        reportPrefix: '',
        reportKey: 'msg',
        otherReport: null,
        entry: null
    };

    AlloyLever.store = [];

    var methodList = ['log', 'info', 'warn', 'debug', 'error'];
    methodList.forEach(function (item) {
        var method = console[item];

        console[item] = function () {
            AlloyLever.store.push({
                logType: item,
                logs: arguments
            });

            method.apply(console, arguments);
        };
    });

    AlloyLever.logs = [];
    AlloyLever.config = function (config) {
        for (var i in config) {
            if (config.hasOwnProperty(i)) {
                AlloyLever.settings[i] = config[i];
            }
        }

        if (config.entry) {
            window.addEventListener('load', function () {
                AlloyLever.entry(config.entry);
            });
        }

        var parameter = getParameter('vconsole');

        if (parameter) {
            if (parameter === 'show') {
                AlloyLever.vConsole(true);
            } else {
                AlloyLever.vConsole(false);
            }
        }
    };

    AlloyLever.vConsole = function (show) {

        //support vconsole3.0
        if (typeof vConsole === 'undefined') {
            AlloyLever.vConsole = new VConsole({
                defaultPlugins: ['system', 'network', 'element', 'storage'],
                maxLogNumber: 5000
            });
        }

        var i = 0,
            len = AlloyLever.store.length;

        for (; i < len; i++) {
            var item = AlloyLever.store[i];
            //console[item.type].apply(console, item.logs)
            //prevent twice log
            item.noOrigin = true;
            AlloyLever.vConsole.pluginList.default.printLog(item);
        }

        if (show) {
            try {
                AlloyLever.vConsole.show();
            } catch (e) {}

            window.addEventListener('load', function () {
                AlloyLever.vConsole.show();
            });
        }
    };

    AlloyLever.entry = function (selector) {
        var count = 0,
            entry = document.querySelector(selector);
        if (entry) {
            entry.addEventListener('click', function () {
                count++;
                if (count > 5) {
                    count = -10000;
                    AlloyLever.vConsole(true);
                }
            });
        }
    };

    window.onerror = function (msg, url, line, col, error) {
        console.log('触发onerror');
        var newMsg = msg;

        if (error && error.stack) {
            newMsg = processStackMsg(error);
        }

        if (isOBJByType(newMsg, "Event")) {
            newMsg += newMsg.type ? "--" + newMsg.type + "--" + (newMsg.target ? newMsg.target.tagName + "::" + newMsg.target.src : "") : "";
        }

        newMsg = (newMsg + "" || "").substr(0, 500);

        AlloyLever.logs.push({
            msg: newMsg,
            target: url,
            rowNum: line,
            colNum: col
        });

        if (msg.toLowerCase().indexOf('script error') > -1) {
            console.error('Script Error: See Browser Console for Detail');
        } else {
            console.error(newMsg);
        }

        var ss = AlloyLever.settings;
        if (ss.reportUrl) {
            var src = ss.reportUrl + (ss.reportUrl.indexOf('?') > -1 ? '&' : '?') + ss.reportKey + '=' + (ss.reportPrefix ? '[' + ss.reportPrefix + ']' : '') + newMsg + '&t=' + new Date().getTime();
            if (ss.otherReport) {
                for (var i in ss.otherReport) {
                    if (ss.otherReport.hasOwnProperty(i)) {
                        src += '&' + i + '=' + ss.otherReport[i];
                    }
                }
            }
            new Image().src = src;
        }
    };

    function getParameter(n) {
        var m = window.location.hash.match(new RegExp('(?:#|&)' + n + '=([^&]*)(&|$)')),
            result = !m ? '' : decodeURIComponent(m[1]);
        return result || getParameterByName(n);
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function isOBJByType(o, type) {
        return Object.prototype.toString.call(o) === "[object " + (type || "Object") + "]";
    }

    function processStackMsg(error) {
        var stack = error.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, "");
        var msg = error.toString();
        if (stack.indexOf(msg) < 0) {
            stack = msg + "@" + stack;
        }
        return stack;
    }

    function getCookie(name) {
        var arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
    }

    AlloyLever.getCookie = getCookie;
    AlloyLever.getParameter = getParameter;

    return AlloyLever;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("3IRH")(module)))

/***/ }),

/***/ "Lw6n":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vConsole v3.2.0 (https://github.com/Tencent/vConsole)
 * 
 * Tencent is pleased to support the open source community by making vConsole available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VConsole=t():e.VConsole=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),o(1);var i=o(2),a=n(i),r=o(18),l=n(r);a["default"].VConsolePlugin=l["default"],t["default"]=a["default"],e.exports=t["default"]},function(e,t){"use strict";if("undefined"==typeof Symbol){window.Symbol=function(){};var o="__symbol_iterator_key";window.Symbol.iterator=o,Array.prototype[o]=function(){var e=this,t=0;return{next:function(){return{done:e.length===t,value:e.length===t?void 0:e[t++]}}}}}},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(3),c=i(l),s=o(4),d=n(s),u=o(5),v=i(u);o(7);var f=o(11),p=i(f),h=o(12),g=i(h),b=o(13),m=i(b),y=o(14),_=i(y),w=o(15),x=i(w),k=o(16),C=i(k),T=o(24),O=i(T),E=o(26),S=i(E),L=o(30),j=i(L),N=o(37),P=i(N),M="#__vconsole",A=function(){function e(t){if(a(this,e),v["default"].one(M))return void console.debug("vConsole is already exists.");var o=this;if(this.version=c["default"].version,this.$dom=null,this.isInited=!1,this.option={defaultPlugins:["system","network","element","storage"]},this.activedTab="",this.tabList=[],this.pluginList={},this.switchPos={x:10,y:10,startX:0,startY:0,endX:0,endY:0},this.tool=d,this.$=v["default"],d.isObject(t))for(var n in t)this.option[n]=t[n];this._addBuiltInPlugins();var i=function(){o.isInited||(o._render(),o._mockTap(),o._bindEvent(),o._autoRun())};void 0!==document?"complete"==document.readyState?i():v["default"].bind(window,"load",i):!function(){var e=void 0,t=function o(){document&&"complete"==document.readyState?(e&&clearTimeout(e),i()):e=setTimeout(o,1)};e=setTimeout(t,1)}()}return r(e,[{key:"_addBuiltInPlugins",value:function(){this.addPlugin(new C["default"]("default","Log"));var e=this.option.defaultPlugins,t={system:{proto:O["default"],name:"System"},network:{proto:S["default"],name:"Network"},element:{proto:j["default"],name:"Element"},storage:{proto:P["default"],name:"Storage"}};if(e&&d.isArray(e))for(var o=0;o<e.length;o++){var n=t[e[o]];n?this.addPlugin(new n.proto(e[o],n.name)):console.debug("Unrecognized default plugin ID:",e[o])}}},{key:"_render",value:function(){if(!v["default"].one(M)){var e=document.createElement("div");e.innerHTML=p["default"],document.documentElement.insertAdjacentElement("beforeend",e.children[0])}this.$dom=v["default"].one(M);var t=v["default"].one(".vc-switch",this.$dom),o=1*d.getStorage("switch_x"),n=1*d.getStorage("switch_y");(o||n)&&(o+t.offsetWidth>document.documentElement.offsetWidth&&(o=document.documentElement.offsetWidth-t.offsetWidth),n+t.offsetHeight>document.documentElement.offsetHeight&&(n=document.documentElement.offsetHeight-t.offsetHeight),0>o&&(o=0),0>n&&(n=0),this.switchPos.x=o,this.switchPos.y=n,v["default"].one(".vc-switch").style.right=o+"px",v["default"].one(".vc-switch").style.bottom=n+"px");var i=window.devicePixelRatio||1,a=document.querySelector('[name="viewport"]');if(a&&a.content){var r=a.content.match(/initial\-scale\=\d+(\.\d+)?/),l=r?parseFloat(r[0].split("=")[1]):1;1>l&&(this.$dom.style.fontSize=13*i+"px")}v["default"].one(".vc-mask",this.$dom).style.display="none"}},{key:"_mockTap",value:function(){var e=700,t=10,o=void 0,n=void 0,i=void 0,a=!1,r=null;this.$dom.addEventListener("touchstart",function(e){if(void 0===o){var t=e.targetTouches[0];n=t.pageX,i=t.pageY,o=e.timeStamp,r=e.target.nodeType===Node.TEXT_NODE?e.target.parentNode:e.target}},!1),this.$dom.addEventListener("touchmove",function(e){var o=e.changedTouches[0];(Math.abs(o.pageX-n)>t||Math.abs(o.pageY-i)>t)&&(a=!0)}),this.$dom.addEventListener("touchend",function(t){if(a===!1&&t.timeStamp-o<e&&null!=r){var n=r.tagName.toLowerCase(),i=!1;switch(n){case"textarea":i=!0;break;case"input":switch(r.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":i=!1;break;default:i=!r.disabled&&!r.readOnly}}i?r.focus():t.preventDefault();var l=t.changedTouches[0],c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,1,l.screenX,l.screenY,l.clientX,l.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,c.initEvent("click",!0,!0),r.dispatchEvent(c)}o=void 0,a=!1,r=null},!1)}},{key:"_bindEvent",value:function(){var e=this,t=v["default"].one(".vc-switch",e.$dom);v["default"].bind(t,"touchstart",function(t){e.switchPos.startX=t.touches[0].pageX,e.switchPos.startY=t.touches[0].pageY}),v["default"].bind(t,"touchend",function(t){e.switchPos.x=e.switchPos.endX,e.switchPos.y=e.switchPos.endY,e.switchPos.startX=0,e.switchPos.startY=0,e.switchPos.endX=0,e.switchPos.endY=0,d.setStorage("switch_x",e.switchPos.x),d.setStorage("switch_y",e.switchPos.y)}),v["default"].bind(t,"touchmove",function(o){if(o.touches.length>0){var n=o.touches[0].pageX-e.switchPos.startX,i=o.touches[0].pageY-e.switchPos.startY,a=e.switchPos.x-n,r=e.switchPos.y-i;a+t.offsetWidth>document.documentElement.offsetWidth&&(a=document.documentElement.offsetWidth-t.offsetWidth),r+t.offsetHeight>document.documentElement.offsetHeight&&(r=document.documentElement.offsetHeight-t.offsetHeight),0>a&&(a=0),0>r&&(r=0),t.style.right=a+"px",t.style.bottom=r+"px",e.switchPos.endX=a,e.switchPos.endY=r,o.preventDefault()}}),v["default"].bind(v["default"].one(".vc-switch",e.$dom),"click",function(){e.show()}),v["default"].bind(v["default"].one(".vc-hide",e.$dom),"click",function(){e.hide()}),v["default"].bind(v["default"].one(".vc-mask",e.$dom),"click",function(t){return t.target!=v["default"].one(".vc-mask")?!1:void e.hide()}),v["default"].delegate(v["default"].one(".vc-tabbar",e.$dom),"click",".vc-tab",function(t){var o=this.dataset.tab;o!=e.activedTab&&e.showTab(o)}),v["default"].bind(v["default"].one(".vc-panel",e.$dom),"transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){return t.target!=v["default"].one(".vc-panel")?!1:void(v["default"].hasClass(e.$dom,"vc-toggle")||(t.target.style.display="none"))});var o=v["default"].one(".vc-content",e.$dom),n=!1;v["default"].bind(o,"touchstart",function(e){var t=o.scrollTop,i=o.scrollHeight,a=t+o.offsetHeight;0===t?(o.scrollTop=1,0===o.scrollTop&&(v["default"].hasClass(e.target,"vc-cmd-input")||(n=!0))):a===i&&(o.scrollTop=t-1,o.scrollTop===t&&(v["default"].hasClass(e.target,"vc-cmd-input")||(n=!0)))}),v["default"].bind(o,"touchmove",function(e){n&&e.preventDefault()}),v["default"].bind(o,"touchend",function(e){n=!1})}},{key:"_autoRun",value:function(){this.isInited=!0;for(var e in this.pluginList)this._initPlugin(this.pluginList[e]);this.tabList.length>0&&this.showTab(this.tabList[0]),this.triggerEvent("ready")}},{key:"triggerEvent",value:function(e,t){e="on"+e.charAt(0).toUpperCase()+e.slice(1),d.isFunction(this.option[e])&&this.option[e].apply(this,t)}},{key:"_initPlugin",value:function(e){var t=this;e.vConsole=this,e.trigger("init"),e.trigger("renderTab",function(o){t.tabList.push(e.id);var n=v["default"].render(g["default"],{id:e.id,name:e.name});v["default"].one(".vc-tabbar",t.$dom).insertAdjacentElement("beforeend",n);var i=v["default"].render(m["default"],{id:e.id});o&&(d.isString(o)?i.innerHTML+=o:d.isFunction(o.appendTo)?o.appendTo(i):d.isElement(o)&&i.insertAdjacentElement("beforeend",o)),v["default"].one(".vc-content",t.$dom).insertAdjacentElement("beforeend",i)}),e.trigger("addTopBar",function(o){if(o)for(var n=v["default"].one(".vc-topbar",t.$dom),i=function(t){var i=o[t],a=v["default"].render(_["default"],{name:i.name||"Undefined",className:i.className||"",pluginID:e.id});if(i.data)for(var r in i.data)a.dataset[r]=i.data[r];d.isFunction(i.onClick)&&v["default"].bind(a,"click",function(t){var o=i.onClick.call(a);o===!1||(v["default"].removeClass(v["default"].all(".vc-topbar-"+e.id),"vc-actived"),v["default"].addClass(a,"vc-actived"))}),n.insertAdjacentElement("beforeend",a)},a=0;a<o.length;a++)i(a)}),e.trigger("addTool",function(o){if(o)for(var n=v["default"].one(".vc-tool-last",t.$dom),i=function(t){var i=o[t],a=v["default"].render(x["default"],{name:i.name||"Undefined",pluginID:e.id});1==i.global&&v["default"].addClass(a,"vc-global-tool"),d.isFunction(i.onClick)&&v["default"].bind(a,"click",function(e){i.onClick.call(a)}),n.parentNode.insertBefore(a,n)},a=0;a<o.length;a++)i(a)}),e.isReady=!0,e.trigger("ready")}},{key:"_triggerPluginsEvent",value:function(e){for(var t in this.pluginList)this.pluginList[t].isReady&&this.pluginList[t].trigger(e)}},{key:"_triggerPluginEvent",value:function(e,t){var o=this.pluginList[e];o&&o.isReady&&o.trigger(t)}},{key:"addPlugin",value:function(e){return void 0!==this.pluginList[e.id]?(console.debug("Plugin "+e.id+" has already been added."),!1):(this.pluginList[e.id]=e,this.isInited&&(this._initPlugin(e),1==this.tabList.length&&this.showTab(this.tabList[0])),!0)}},{key:"removePlugin",value:function(e){e=(e+"").toLowerCase();var t=this.pluginList[e];if(void 0===t)return console.debug("Plugin "+e+" does not exist."),!1;if(t.trigger("remove"),this.isInited){var o=v["default"].one("#__vc_tab_"+e);o&&o.parentNode.removeChild(o);for(var n=v["default"].all(".vc-topbar-"+e,this.$dom),i=0;i<n.length;i++)n[i].parentNode.removeChild(n[i]);var a=v["default"].one("#__vc_log_"+e);a&&a.parentNode.removeChild(a);for(var r=v["default"].all(".vc-tool-"+e,this.$dom),l=0;l<r.length;l++)r[l].parentNode.removeChild(r[l])}var c=this.tabList.indexOf(e);c>-1&&this.tabList.splice(c,1);try{delete this.pluginList[e]}catch(s){this.pluginList[e]=void 0}return this.activedTab==e&&this.tabList.length>0&&this.showTab(this.tabList[0]),!0}},{key:"show",value:function(){if(this.isInited){var e=this,t=v["default"].one(".vc-panel",this.$dom);t.style.display="block",setTimeout(function(){v["default"].addClass(e.$dom,"vc-toggle"),e._triggerPluginsEvent("showConsole");var t=v["default"].one(".vc-mask",e.$dom);t.style.display="block"},10)}}},{key:"hide",value:function(){if(this.isInited){v["default"].removeClass(this.$dom,"vc-toggle"),this._triggerPluginsEvent("hideConsole");var e=v["default"].one(".vc-mask",this.$dom),t=v["default"].one(".vc-panel",this.$dom);v["default"].bind(e,"transitionend",function(o){e.style.display="none",t.style.display="none"})}}},{key:"showSwitch",value:function(){if(this.isInited){var e=v["default"].one(".vc-switch",this.$dom);e.style.display="block"}}},{key:"hideSwitch",value:function(){if(this.isInited){var e=v["default"].one(".vc-switch",this.$dom);e.style.display="none"}}},{key:"showTab",value:function(e){if(this.isInited){var t=v["default"].one("#__vc_log_"+e);v["default"].removeClass(v["default"].all(".vc-tab",this.$dom),"vc-actived"),v["default"].addClass(v["default"].one("#__vc_tab_"+e),"vc-actived"),v["default"].removeClass(v["default"].all(".vc-logbox",this.$dom),"vc-actived"),v["default"].addClass(t,"vc-actived");var o=v["default"].all(".vc-topbar-"+e,this.$dom);v["default"].removeClass(v["default"].all(".vc-toptab",this.$dom),"vc-toggle"),v["default"].addClass(o,"vc-toggle"),o.length>0?v["default"].addClass(v["default"].one(".vc-content",this.$dom),"vc-has-topbar"):v["default"].removeClass(v["default"].one(".vc-content",this.$dom),"vc-has-topbar"),v["default"].removeClass(v["default"].all(".vc-tool",this.$dom),"vc-toggle"),v["default"].addClass(v["default"].all(".vc-tool-"+e,this.$dom),"vc-toggle"),this.activedTab&&this._triggerPluginEvent(this.activedTab,"hide"),this.activedTab=e,this._triggerPluginEvent(this.activedTab,"show")}}},{key:"setOption",value:function(e,t){if(d.isString(e))this.option[e]=t,this._triggerPluginsEvent("updateOption");else if(d.isObject(e)){for(var o in e)this.option[o]=e[o];this._triggerPluginsEvent("updateOption")}else console.debug("The first parameter of vConsole.setOption() must be a string or an object.")}},{key:"destroy",value:function(){if(this.isInited){for(var e=Object.keys(this.pluginList),t=e.length-1;t>=0;t--)this.removePlugin(e[t]);this.$dom.parentNode.removeChild(this.$dom)}}}]),e}();t["default"]=A,e.exports=t["default"]},function(e,t){e.exports={name:"vconsole",version:"3.2.0",description:"A lightweight, extendable front-end developer tool for mobile web page.",homepage:"https://github.com/Tencent/vConsole",main:"dist/vconsole.min.js",scripts:{test:"mocha",dist:"webpack"},keywords:["console","debug","mobile"],repository:{type:"git",url:"git+https://github.com/Tencent/vConsole.git"},dependencies:{},devDependencies:{"babel-core":"^6.7.7","babel-loader":"^6.2.4","babel-plugin-add-module-exports":"^0.1.4","babel-preset-es2015":"^6.6.0","babel-preset-stage-3":"^6.5.0",chai:"^3.5.0","css-loader":"^0.23.1","extract-text-webpack-plugin":"^1.0.1","html-loader":"^0.4.3",jsdom:"^9.2.1","json-loader":"^0.5.4",less:"^2.5.3","less-loader":"^2.2.3",mocha:"^2.5.3","style-loader":"^0.13.1",webpack:"~1.12.11"},author:"Tencent",license:"MIT"}},function(e,t){"use strict";function o(e){var t=e>0?new Date(e):new Date,o=t.getDate()<10?"0"+t.getDate():t.getDate(),n=t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1,i=t.getFullYear(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),l=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),c=t.getMilliseconds()<10?"0"+t.getMilliseconds():t.getMilliseconds();return 100>c&&(c="0"+c),{time:+t,year:i,month:n,day:o,hour:a,minute:r,second:l,millisecond:c}}function n(e){return"[object Number]"==Object.prototype.toString.call(e)}function i(e){return"[object String]"==Object.prototype.toString.call(e)}function a(e){return"[object Array]"==Object.prototype.toString.call(e)}function r(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function l(e){return"[object Undefined]"==Object.prototype.toString.call(e)}function c(e){return"[object Null]"==Object.prototype.toString.call(e)}function s(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function d(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(n(e)||i(e)||r(e)||a(e)||c(e)||u(e)||l(e)||s(e)))}function u(e){return"[object Function]"==Object.prototype.toString.call(e)}function v(e){return"object"===("undefined"==typeof HTMLElement?"undefined":w(HTMLElement))?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":w(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function f(e){var t=Object.prototype.toString.call(e);return"[object global]"==t||"[object Window]"==t||"[object DOMWindow]"==t}function p(e){var t=Object.prototype.hasOwnProperty;if(!e||"object"!==("undefined"==typeof e?"undefined":w(e))||e.nodeType||f(e))return!1;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(o){return!1}var n=void 0;for(n in e);return void 0===n||t.call(e,n)}function h(e){return document.createElement("a").appendChild(document.createTextNode(e)).parentNode.innerHTML}function g(e){var t=arguments.length<=1||void 0===arguments[1]?"	":arguments[1],o=arguments.length<=2||void 0===arguments[2]?"CIRCULAR_DEPENDECY_OBJECT":arguments[2],n=[],i=JSON.stringify(e,function(e,t){if("object"===("undefined"==typeof t?"undefined":w(t))&&null!==t){if(~n.indexOf(t))return o;n.push(t)}return t},t);return n=null,i}function b(e){if(!d(e)&&!a(e))return[];var t=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=[];for(var n in e)t.indexOf(n)<0&&o.push(n);return o=o.sort()}function m(e){return Object.prototype.toString.call(e).replace("[object ","").replace("]","")}function y(e,t){window.localStorage&&(e="vConsole_"+e,localStorage.setItem(e,t))}function _(e){return window.localStorage?(e="vConsole_"+e,localStorage.getItem(e)):void 0}Object.defineProperty(t,"__esModule",{value:!0});var w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.getDate=o,t.isNumber=n,t.isString=i,t.isArray=a,t.isBoolean=r,t.isUndefined=l,t.isNull=c,t.isSymbol=s,t.isObject=d,t.isFunction=u,t.isElement=v,t.isWindow=f,t.isPlainObject=p,t.htmlEncode=h,t.JSONStringify=g,t.getObjAllKeys=b,t.getObjName=m,t.setStorage=y,t.getStorage=_},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),a=o(6),r=n(a),l={};l.one=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l.all=function(e,t){var o=void 0,n=[];return o=t?t.querySelectorAll(e):document.querySelectorAll(e),o&&o.length>0&&(n=Array.prototype.slice.call(o)),n},l.addClass=function(e,t){if(e){(0,i.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){var n=e[o].className||"",a=n.split(" ");a.indexOf(t)>-1||(a.push(t),e[o].className=a.join(" "))}}},l.removeClass=function(e,t){if(e){(0,i.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){for(var n=e[o].className.split(" "),a=0;a<n.length;a++)n[a]==t&&(n[a]="");e[o].className=n.join(" ").trim()}}},l.hasClass=function(e,t){if(!e)return!1;for(var o=e.className.split(" "),n=0;n<o.length;n++)if(o[n]==t)return!0;return!1},l.bind=function(e,t,o,n){if(e){void 0===n&&(n=!1),(0,i.isArray)(e)||(e=[e]);for(var a=0;a<e.length;a++)e[a].addEventListener(t,o,n)}},l.delegate=function(e,t,o,n){e&&e.addEventListener(t,function(t){var i=l.all(o,e);if(i)e:for(var a=0;a<i.length;a++)for(var r=t.target;r;){if(r==i[a]){n.call(r,t);break e}if(r=r.parentNode,r==e)break}},!1)},l.render=r["default"],t["default"]=l,e.exports=t["default"]},function(e,t){"use strict";function o(e,t,o){var n=/\{\{([^\}]+)\}\}/g,i="",a="",r=0,l=[],c=function(e,t){""!==e&&(i+=t?e.match(/^ ?else/g)?"} "+e+" {\n":e.match(/\/(if|for|switch)/g)?"}\n":e.match(/^ ?if|for|switch/g)?e+" {\n":e.match(/^ ?(break|continue) ?$/g)?e+";\n":e.match(/^ ?(case|default)/g)?e+":\n":"arr.push("+e+");\n":'arr.push("'+e.replace(/"/g,'\\"')+'");\n')};for(window.__mito_data=t,window.__mito_code="",window.__mito_result="",e=e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g,"$1{{"),e=e.replace(/^[\r\n]/,"").replace(/\n/g,"\\\n").replace(/\r/g,"\\\r"),a="(function(){\n",i="var arr = [];\n";l=n.exec(e);)c(e.slice(r,l.index),!1),c(l[1],!0),r=l.index+l[0].length;c(e.substr(r,e.length-r),!1),i+='__mito_result = arr.join("");',i="with (__mito_data) {\n"+i+"\n}",a+=i,a+="})();";var s=document.getElementsByTagName("script"),d="";s.length>0&&(d=s[0].getAttribute("nonce")||"");var u=document.createElement("SCRIPT");u.innerHTML=a,u.setAttribute("nonce",d),document.documentElement.appendChild(u);var v=__mito_result;if(document.documentElement.removeChild(u),!o){var f=document.createElement("DIV");f.innerHTML=v,v=f.children[0]}return v}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o,e.exports=t["default"]},function(e,t,o){var n=o(8);"string"==typeof n&&(n=[[e.id,n,""]]);o(10)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(9)(),t.push([e.id,'#__vconsole{color:#000;font-size:13px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#__vconsole .vc-max-height{max-height:19.23076923em}#__vconsole .vc-max-height-line{max-height:3.38461538em}#__vconsole .vc-min-height{min-height:3.07692308em}#__vconsole dd,#__vconsole dl,#__vconsole pre{margin:0}#__vconsole .vc-switch{display:block;position:fixed;right:.76923077em;bottom:.76923077em;color:#fff;background-color:#04be02;line-height:1;font-size:1.07692308em;padding:.61538462em 1.23076923em;z-index:10000;border-radius:.30769231em;box-shadow:0 0 .61538462em rgba(0,0,0,.4)}#__vconsole .vc-mask{top:0;background:transparent;z-index:10001;transition:background .3s;-webkit-tap-highlight-color:transparent;overflow-y:scroll}#__vconsole .vc-mask,#__vconsole .vc-panel{display:none;position:fixed;left:0;right:0;bottom:0}#__vconsole .vc-panel{min-height:85%;z-index:10002;background-color:#efeff4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(100%);transform:translateY(100%)}#__vconsole .vc-tabbar{border-bottom:1px solid #d9d9d9;overflow-x:auto;height:3em;width:auto;white-space:nowrap}#__vconsole .vc-tabbar .vc-tab{display:inline-block;line-height:3em;padding:0 1.15384615em;border-right:1px solid #d9d9d9;text-decoration:none;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-tabbar .vc-tab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-tabbar .vc-tab.vc-actived{background-color:#fff}#__vconsole .vc-content{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:absolute;top:3.07692308em;left:0;right:0;bottom:3.07692308em;-webkit-overflow-scrolling:touch}#__vconsole .vc-content.vc-has-topbar{top:5.46153846em}#__vconsole .vc-topbar{background-color:#fbf9fe;display:flex;display:-webkit-box;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;width:100%}#__vconsole .vc-topbar .vc-toptab{display:none;flex:1;-webkit-box-flex:1;line-height:2.30769231em;padding:0 1.15384615em;border-bottom:1px solid #d9d9d9;text-decoration:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-topbar .vc-toptab.vc-toggle{display:block}#__vconsole .vc-topbar .vc-toptab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-topbar .vc-toptab.vc-actived{border-bottom:1px solid #3e82f7}#__vconsole .vc-logbox{display:none;position:relative;min-height:100%}#__vconsole .vc-logbox i{font-style:normal}#__vconsole .vc-logbox .vc-log{padding-bottom:3em;-webkit-tap-highlight-color:transparent}#__vconsole .vc-logbox .vc-log:empty:before{content:"Empty";color:#999;position:absolute;top:45%;left:0;right:0;bottom:0;font-size:1.15384615em;text-align:center}#__vconsole .vc-logbox .vc-item{margin:0;padding:.46153846em .61538462em;overflow:hidden;line-height:1.3;border-bottom:1px solid #eee;word-break:break-word}#__vconsole .vc-logbox .vc-item-info{color:#6a5acd}#__vconsole .vc-logbox .vc-item-debug{color:#daa520}#__vconsole .vc-logbox .vc-item-warn{color:orange;border-color:#ffb930;background-color:#fffacd}#__vconsole .vc-logbox .vc-item-error{color:#dc143c;border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item{display:none}#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error,#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn{display:block}#__vconsole .vc-logbox .vc-item .vc-item-content{margin-right:4.61538462em;display:block}#__vconsole .vc-logbox .vc-item .vc-item-meta{color:#888;float:right;width:4.61538462em;text-align:right}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-content{margin-right:0}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-meta{display:none}#__vconsole .vc-logbox .vc-item .vc-item-code{display:block;white-space:pre-wrap;overflow:auto;position:relative}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output{padding-left:.92307692em}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\203A";position:absolute;top:-.23076923em;left:0;font-size:1.23076923em;color:#6a5acd}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\2039"}#__vconsole .vc-logbox .vc-item .vc-fold{display:block;overflow:auto;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer{display:block;font-style:italic;padding-left:.76923077em;position:relative}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before{content:"";position:absolute;top:.30769231em;left:.15384615em;width:0;height:0;border:.30769231em solid transparent;border-left-color:#000}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before{top:.46153846em;left:0;border-top-color:#000;border-left-color:transparent}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner{display:none;margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle{display:block}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key{margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key{margin-left:0}#__vconsole .vc-logbox .vc-code-key{color:#905}#__vconsole .vc-logbox .vc-code-private-key{color:#d391b5}#__vconsole .vc-logbox .vc-code-function{color:#905;font-style:italic}#__vconsole .vc-logbox .vc-code-boolean,#__vconsole .vc-logbox .vc-code-number{color:#0086b3}#__vconsole .vc-logbox .vc-code-string{color:#183691}#__vconsole .vc-logbox .vc-code-null,#__vconsole .vc-logbox .vc-code-undefined{color:#666}#__vconsole .vc-logbox .vc-cmd{position:absolute;height:3.07692308em;left:0;right:0;bottom:0;border-top:1px solid #d9d9d9;display:block!important}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap{display:block;height:2.15384615em;margin-right:3.07692308em;padding:.46153846em .61538462em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input{width:100%;border:none;resize:none;outline:none;padding:0;font-size:.92307692em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder{line-height:2.15384615em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn{position:absolute;top:0;right:0;bottom:0;width:3.07692308em;border:none;background-color:#efeff4;outline:none;-webkit-touch-callout:none;font-size:1em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-logbox .vc-group .vc-group-preview{-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-group .vc-group-preview:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-group .vc-group-detail{display:none;padding:0 0 .76923077em 1.53846154em;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail{display:block;background-color:#fbf9fe}#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row{background-color:#fff}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview{background-color:#fbf9fe}#__vconsole .vc-logbox .vc-table .vc-table-row{display:flex;display:-webkit-flex;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;overflow:hidden;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border{border-left:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-col{flex:1;-webkit-box-flex:1;padding:.23076923em .30769231em;border-left:1px solid #eee;overflow:auto;white-space:pre-wrap;word-break:break-word;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-table .vc-table-col:first-child{border:none}#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col{padding:0 .30769231em;font-size:.92307692em}#__vconsole .vc-logbox .vc-table .vc-table-col-2{flex:2;-webkit-box-flex:2}#__vconsole .vc-logbox .vc-table .vc-table-col-3{flex:3;-webkit-box-flex:3}#__vconsole .vc-logbox .vc-table .vc-table-col-4{flex:4;-webkit-box-flex:4}#__vconsole .vc-logbox .vc-table .vc-table-col-5{flex:5;-webkit-box-flex:5}#__vconsole .vc-logbox .vc-table .vc-table-col-6{flex:6;-webkit-box-flex:6}#__vconsole .vc-logbox .vc-table .vc-table-row-error{border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col{color:#dc143c;border-color:#f4a0ab}#__vconsole .vc-logbox .vc-table .vc-table-col-title{font-weight:700}#__vconsole .vc-logbox.vc-actived{display:block}#__vconsole .vc-toolbar{border-top:1px solid #d9d9d9;line-height:3em;position:absolute;left:0;right:0;bottom:0;display:flex;display:-webkit-box;flex-direction:row;-webkit-box-direction:row}#__vconsole .vc-toolbar .vc-tool{display:none;text-decoration:none;color:#000;width:50%;flex:1;-webkit-box-flex:1;text-align:center;position:relative;-webkit-touch-callout:none}#__vconsole .vc-toolbar .vc-tool.vc-global-tool,#__vconsole .vc-toolbar .vc-tool.vc-toggle{display:block}#__vconsole .vc-toolbar .vc-tool:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-toolbar .vc-tool:after{content:" ";position:absolute;top:.53846154em;bottom:.53846154em;right:0;border-left:1px solid #d9d9d9}#__vconsole .vc-toolbar .vc-tool-last:after{border:none}#__vconsole.vc-toggle .vc-switch{display:none}#__vconsole.vc-toggle .vc-mask{background:rgba(0,0,0,.6);display:block}#__vconsole.vc-toggle .vc-panel{-webkit-transform:translate(0);transform:translate(0)}',""])},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(n[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&n[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=f[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(s(n.parts[a],t))}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(s(n.parts[a],t));f[n.id]={id:n.id,refs:1,parts:r}}}}function i(e){for(var t=[],o={},n=0;n<e.length;n++){var i=e[n],a=i[0],r=i[1],l=i[2],c=i[3],s={css:r,media:l,sourceMap:c};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function a(e,t){var o=g(),n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function s(e,t){var o,n,i;if(t.singleton){var a=m++;o=b||(b=l(t)),n=d.bind(null,o,a,!1),i=d.bind(null,o,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(t),n=v.bind(null,o),i=function(){r(o),o.href&&URL.revokeObjectURL(o.href)}):(o=l(t),n=u.bind(null,o),i=function(){r(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function d(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function u(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function v(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"
}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var a=[],r=0;r<o.length;r++){var l=o[r],c=f[l.id];c.refs--,a.push(c)}if(e){var s=i(e);n(s,t)}for(var r=0;r<a.length;r++){var c=a[r];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete f[c.id]}}}};var _=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports='<div id="__vconsole" class="">\n  <div class="vc-switch">vConsole</div>\n  <div class="vc-mask">\n  </div>\n  <div class="vc-panel">\n    <div class="vc-tabbar">\n    </div>\n    <div class="vc-topbar">\n    </div>\n    <div class="vc-content">\n    </div>\n    <div class="vc-toolbar">\n      <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a>\n    </div>\n  </div>\n</div>'},function(e,t){e.exports='<a class="vc-tab" data-tab="{{id}}" id="__vc_tab_{{id}}">{{name}}</a>'},function(e,t){e.exports='<div class="vc-logbox" id="__vc_log_{{id}}">\n  \n</div>'},function(e,t){e.exports='<a class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>'},function(e,t){e.exports='<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function w(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:w(i,t,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},d=o(5),u=i(d),v=o(4),f=n(v),p=o(17),h=i(p),g=o(22),b=i(g),m=o(23),y=i(m),_=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.tplTabbox=b["default"],l.windowOnError=null,l}return l(t,e),c(t,[{key:"onReady",value:function(){var e=this;s(Object.getPrototypeOf(t.prototype),"onReady",this).call(this),u["default"].bind(u["default"].one(".vc-cmd",this.$tabbox),"submit",function(t){t.preventDefault();var o=u["default"].one(".vc-cmd-input",t.target),n=o.value;o.value="",""!==n&&e.evalCommand(n)});var o="";o+="if (!!window) {",o+="window.__vConsole_cmd_result = undefined;",o+="window.__vConsole_cmd_error = false;",o+="}";var n=document.getElementsByTagName("script"),i="";n.length>0&&(i=n[0].getAttribute("nonce")||"");var a=document.createElement("SCRIPT");a.innerHTML=o,a.setAttribute("nonce",i),document.documentElement.appendChild(a),document.documentElement.removeChild(a)}},{key:"mockConsole",value:function(){s(Object.getPrototypeOf(t.prototype),"mockConsole",this).call(this);var e=this;f.isFunction(window.onerror)&&(this.windowOnError=window.onerror),window.onerror=function(t,o,n,i,a){var r=t;o&&(r+="\n"+o.replace(location.origin,"")),(n||i)&&(r+=":"+n+":"+i);var l=!!a&&!!a.stack,c=l&&a.stack.toString()||"";e.printLog({logType:"error",logs:[r,c],noOrigin:!0}),f.isFunction(e.windowOnError)&&e.windowOnError.call(window,t,o,n,i,a)}}},{key:"evalCommand",value:function(e){this.printLog({logType:"log",content:u["default"].render(y["default"],{content:e,type:"input"}),noMeta:!0,style:""});var t="";t+="try {\n",t+="window.__vConsole_cmd_result = (function() {\n",t+="return "+e+";\n",t+="})();\n",t+="window.__vConsole_cmd_error = false;\n",t+="} catch (e) {\n",t+="window.__vConsole_cmd_result = e.message;\n",t+="window.__vConsole_cmd_error = true;\n",t+="}";var o=document.getElementsByTagName("script"),n="";o.length>0&&(n=o[0].getAttribute("nonce")||"");var i=document.createElement("SCRIPT");i.innerHTML=t,i.setAttribute("nonce",n),document.documentElement.appendChild(i);var a=window.__vConsole_cmd_result,r=window.__vConsole_cmd_error;if(document.documentElement.removeChild(i),0==r){var l=void 0;f.isArray(a)||f.isObject(a)?l=this.getFoldedLine(a):(f.isNull(a)?a="null":f.isUndefined(a)?a="undefined":f.isFunction(a)?a="function()":f.isString(a)&&(a='"'+a+'"'),l=u["default"].render(y["default"],{content:a,type:"output"})),this.printLog({logType:"log",content:l,noMeta:!0,style:""})}else this.printLog({logType:"error",logs:[a],noMeta:!0,style:""})}}]),t}(h["default"]);t["default"]=_,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(4),u=i(d),v=o(5),f=n(v),p=o(18),h=n(p),g=o(19),b=n(g),m=o(20),y=n(m),_=o(21),w=n(_),x=1e3,k=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.tplTabbox="",l.allowUnformattedLog=!0,l.isReady=!1,l.isShow=!1,l.$tabbox=null,l.console={},l.logList=[],l.isInBottom=!0,l.maxLogNumber=x,l.logNumber=0,l.mockConsole(),l}return l(t,e),s(t,[{key:"onInit",value:function(){this.$tabbox=f["default"].render(this.tplTabbox,{}),this.updateMaxLogNumber()}},{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTopBar",value:function(e){for(var t=this,o=["All","Log","Info","Warn","Error"],n=[],i=0;i<o.length;i++)n.push({name:o[i],data:{type:o[i].toLowerCase()},className:"",onClick:function(){return f["default"].hasClass(this,"vc-actived")?!1:void t.showLogType(this.dataset.type||"all")}});n[0].className="vc-actived",e(n)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(){t.clearLog(),t.vConsole.triggerEvent("clearLog")}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0;var t=f["default"].all(".vc-subtab",e.$tabbox);f["default"].bind(t,"click",function(o){if(o.preventDefault(),f["default"].hasClass(this,"vc-actived"))return!1;f["default"].removeClass(t,"vc-actived"),f["default"].addClass(this,"vc-actived");var n=this.dataset.type,i=f["default"].one(".vc-log",e.$tabbox);f["default"].removeClass(i,"vc-log-partly-log"),f["default"].removeClass(i,"vc-log-partly-info"),f["default"].removeClass(i,"vc-log-partly-warn"),f["default"].removeClass(i,"vc-log-partly-error"),"all"==n?f["default"].removeClass(i,"vc-log-partly"):(f["default"].addClass(i,"vc-log-partly"),f["default"].addClass(i,"vc-log-partly-"+n))});var o=f["default"].one(".vc-content");f["default"].bind(o,"scroll",function(t){e.isShow&&(o.scrollTop+o.offsetHeight>=o.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)});for(var n=0;n<e.logList.length;n++)e.printLog(e.logList[n]);e.logList=[]}},{key:"onRemove",value:function(){window.console.log=this.console.log,window.console.info=this.console.info,window.console.warn=this.console.warn,window.console.debug=this.console.debug,window.console.error=this.console.error,window.console.time=this.console.time,window.console.timeEnd=this.console.timeEnd,window.console.clear=this.console.clear,this.console={}}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.autoScrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.autoScrollToBottom()}},{key:"onUpdateOption",value:function(){this.vConsole.option.maxLogNumber!=this.maxLogNumber&&(this.updateMaxLogNumber(),this.limitMaxLogs())}},{key:"updateMaxLogNumber",value:function(){this.maxLogNumber=this.vConsole.option.maxLogNumber||x,this.maxLogNumber=Math.max(1,this.maxLogNumber)}},{key:"limitMaxLogs",value:function(){if(this.isReady)for(;this.logNumber>this.maxLogNumber;){var e=f["default"].one(".vc-item",this.$tabbox);if(!e)break;e.parentNode.removeChild(e),this.logNumber--}}},{key:"showLogType",value:function(e){var t=f["default"].one(".vc-log",this.$tabbox);f["default"].removeClass(t,"vc-log-partly-log"),f["default"].removeClass(t,"vc-log-partly-info"),f["default"].removeClass(t,"vc-log-partly-warn"),f["default"].removeClass(t,"vc-log-partly-error"),"all"==e?f["default"].removeClass(t,"vc-log-partly"):(f["default"].addClass(t,"vc-log-partly"),f["default"].addClass(t,"vc-log-partly-"+e))}},{key:"autoScrollToBottom",value:function(){this.vConsole.option.disableLogScrolling||this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=f["default"].one(".vc-content");e&&(e.scrollTop=e.scrollHeight-e.offsetHeight)}},{key:"mockConsole",value:function(){var e=this,t=this,o=["log","info","warn","debug","error"];window.console?(o.map(function(e){t.console[e]=window.console[e]}),t.console.time=window.console.time,t.console.timeEnd=window.console.timeEnd,t.console.clear=window.console.clear):window.console={},o.map(function(t){window.console[t]=function(){for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];e.printLog({logType:t,logs:n})}});var n={};window.console.time=function(e){n[e]=Date.now()},window.console.timeEnd=function(e){var t=n[e];t?(console.log(e+":",Date.now()-t+"ms"),delete n[e]):console.log(e+": 0ms")},window.console.clear=function(){for(var e=arguments.length,o=Array(e),n=0;e>n;n++)o[n]=arguments[n];t.clearLog(),t.console.clear.apply(window.console,o)}}},{key:"clearLog",value:function(){f["default"].one(".vc-log",this.$tabbox).innerHTML=""}},{key:"printOriginLog",value:function(e){"function"==typeof this.console[e.logType]&&this.console[e.logType].apply(window.console,e.logs)}},{key:"printLog",value:function(e){var t=e.logs||[];if(t.length||e.content){t=[].slice.call(t||[]);var o=!0,n=/^\[(\w+)\]$/i,i="";if(u.isString(t[0])){var a=t[0].match(n);null!==a&&a.length>0&&(i=a[1].toLowerCase())}if(i?o=i==this.id:0==this.allowUnformattedLog&&(o=!1),!o)return void(e.noOrigin||this.printOriginLog(e));if(e.date||(e.date=+new Date),!this.isReady)return void this.logList.push(e);if(u.isString(t[0])&&(t[0]=t[0].replace(n,""),""===t[0]&&t.shift()),!e.meta){var r=u.getDate(e.date);e.meta=r.hour+":"+r.minute+":"+r.second}for(var l=f["default"].render(b["default"],{logType:e.logType,noMeta:!!e.noMeta,meta:e.meta,style:e.style||""}),s=f["default"].one(".vc-item-content",l),d=0;d<t.length;d++){var v=void 0;try{if(""===t[d])continue;v=u.isFunction(t[d])?"<span> "+t[d].toString()+"</span>":u.isObject(t[d])||u.isArray(t[d])?this.getFoldedLine(t[d]):"<span> "+u.htmlEncode(t[d]).replace(/\n/g,"<br/>")+"</span>"}catch(p){v="<span> ["+c(t[d])+"]</span>"}v&&("string"==typeof v?s.insertAdjacentHTML("beforeend",v):s.insertAdjacentElement("beforeend",v))}u.isObject(e.content)&&s.insertAdjacentElement("beforeend",e.content),f["default"].one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",l),this.logNumber++,this.limitMaxLogs(),this.isInBottom&&this.autoScrollToBottom(),e.noOrigin||this.printOriginLog(e)}}},{key:"getFoldedLine",value:function(e,t){var o=this;if(!t){var n=u.JSONStringify(e),i=n.substr(0,26);t=u.getObjName(e),n.length>26&&(i+="..."),t+=" "+i}var a=f["default"].render(y["default"],{outer:t,lineType:"obj"});return f["default"].bind(f["default"].one(".vc-fold-outer",a),"click",function(t){t.preventDefault(),t.stopPropagation(),f["default"].hasClass(a,"vc-toggle")?(f["default"].removeClass(a,"vc-toggle"),f["default"].removeClass(f["default"].one(".vc-fold-inner",a),"vc-toggle"),f["default"].removeClass(f["default"].one(".vc-fold-outer",a),"vc-toggle")):(f["default"].addClass(a,"vc-toggle"),f["default"].addClass(f["default"].one(".vc-fold-inner",a),"vc-toggle"),f["default"].addClass(f["default"].one(".vc-fold-outer",a),"vc-toggle"));var n=f["default"].one(".vc-fold-inner",a);if(0==n.children.length&&e){for(var i=u.getObjAllKeys(e),r=0;r<i.length;r++){var l=e[i[r]],c="undefined",s="";u.isString(l)?(c="string",l='"'+l+'"'):u.isNumber(l)?c="number":u.isBoolean(l)?c="boolean":u.isNull(l)?(c="null",l="null"):u.isUndefined(l)?(c="undefined",l="undefined"):u.isFunction(l)?(c="function",l="function()"):u.isSymbol(l)&&(c="symbol");var d=void 0;if(u.isArray(l)){var v=u.getObjName(l)+"["+l.length+"]";d=o.getFoldedLine(l,f["default"].render(w["default"],{key:i[r],keyType:s,value:v,valueType:"array"},!0))}else if(u.isObject(l)){var p=u.getObjName(l);d=o.getFoldedLine(l,f["default"].render(w["default"],{key:u.htmlEncode(i[r]),keyType:s,value:p,valueType:"object"},!0))}else{e.hasOwnProperty&&!e.hasOwnProperty(i[r])&&(s="private");var h={lineType:"kv",key:u.htmlEncode(i[r]),keyType:s,value:u.htmlEncode(l),valueType:c};d=f["default"].render(y["default"],h)}n.insertAdjacentElement("beforeend",d)}if(u.isObject(e)){var g=e.__proto__,b=void 0;b=u.isObject(g)?o.getFoldedLine(g,f["default"].render(w["default"],{key:"__proto__",keyType:"private",value:u.getObjName(g),valueType:"object"},!0)):f["default"].render(w["default"],{key:"__proto__",keyType:"private",value:"null",valueType:"null"}),n.insertAdjacentElement("beforeend",b)}}return!1}),a}}]),t}(h["default"]);t["default"]=k,e.exports=t["default"]},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?"newPlugin":arguments[1];o(this,e),this.id=t,this.name=n,this.isReady=!1,this.eventList={}}return n(e,[{key:"on",value:function(e,t){return this.eventList[e]=t,this}},{key:"trigger",value:function(e,t){if("function"==typeof this.eventList[e])this.eventList[e].call(this,t);else{var o="on"+e.charAt(0).toUpperCase()+e.slice(1);"function"==typeof this[o]&&this[o].call(this,t)}return this}},{key:"id",get:function(){return this._id},set:function(e){if(!e)throw"Plugin ID cannot be empty";this._id=e.toLowerCase()}},{key:"name",get:function(){return this._name},set:function(e){if(!e)throw"Plugin name cannot be empty";this._name=e}},{key:"vConsole",get:function(){return this._vConsole||void 0},set:function(e){if(!e)throw"vConsole cannot be empty";this._vConsole=e}}]),e}();t["default"]=i,e.exports=t["default"]},function(e,t){e.exports='<div class="vc-item vc-item-{{logType}} {{if (!noMeta)}}vc-item-nometa{{/if}} {{style}}">\n	<span class="vc-item-meta">{{if (!noMeta)}}{{meta}}{{/if}}</span>\n	<div class="vc-item-content"></div>\n</div>'},function(e,t){e.exports='<div class="vc-fold">\n  {{if (lineType == \'obj\')}}\n    <i class="vc-fold-outer">{{outer}}</i>\n    <div class="vc-fold-inner"></div>\n  {{else if (lineType == \'value\')}}\n    <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{else if (lineType == \'kv\')}}\n    <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{/if}}\n</div>'},function(e,t){e.exports='<span>\n  <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n</span>'},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n  <form class="vc-cmd">\n    <button class="vc-cmd-btn" type="submit">OK</button>\n    <div class="vc-cmd-input-wrap">\n      <textarea class="vc-cmd-input" placeholder="command..."></textarea>\n    </div>\n  </form>\n</div>'},function(e,t){e.exports='<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>'},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function g(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:g(i,t,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},d=o(4),u=(i(d),o(17)),v=n(u),f=o(25),p=n(f),h=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.tplTabbox=p["default"],l.allowUnformattedLog=!1,l}return l(t,e),c(t,[{key:"onInit",value:function(){s(Object.getPrototypeOf(t.prototype),"onInit",this).call(this),this.printSystemInfo()}},{key:"printSystemInfo",value:function(){var e=navigator.userAgent,t="",o=e.match(/(ipod).*\s([\d_]+)/i),n=e.match(/(ipad).*\s([\d_]+)/i),i=e.match(/(iphone)\sos\s([\d_]+)/i),a=e.match(/(android)\s([\d\.]+)/i);t="Unknown",a?t="Android "+a[2]:i?t="iPhone, iOS "+i[2].replace(/_/g,"."):n?t="iPad, iOS "+n[2].replace(/_/g,"."):o&&(t="iPod, iOS "+o[2].replace(/_/g,"."));var r=t,l=e.match(/MicroMessenger\/([\d\.]+)/i);t="Unknown",l&&l[1]?(t=l[1],r+=", WeChat "+t,console.info("[system]","System:",r)):console.info("[system]","System:",r),t="Unknown",t="https:"==location.protocol?"HTTPS":"http:"==location.protocol?"HTTP":location.protocol.replace(":",""),r=t;var c=e.toLowerCase().match(/ nettype\/([^ ]+)/g);t="Unknown",c&&c[0]?(c=c[0].split("/"),t=c[1],r+=", "+t,console.info("[system]","Network:",r)):console.info("[system]","Protocol:",r),console.info("[system]","UA:",e),setTimeout(function(){var e=window.performance||window.msPerformance||window.webkitPerformance;if(e&&e.timing){var t=e.timing;t.navigationStart&&console.info("[system]","navigationStart:",t.navigationStart),t.navigationStart&&t.domainLookupStart&&console.info("[system]","navigation:",t.domainLookupStart-t.navigationStart+"ms"),t.domainLookupEnd&&t.domainLookupStart&&console.info("[system]","dns:",t.domainLookupEnd-t.domainLookupStart+"ms"),t.connectEnd&&t.connectStart&&(t.connectEnd&&t.secureConnectionStart?console.info("[system]","tcp (ssl):",t.connectEnd-t.connectStart+"ms ("+(t.connectEnd-t.secureConnectionStart)+"ms)"):console.info("[system]","tcp:",t.connectEnd-t.connectStart+"ms")),t.responseStart&&t.requestStart&&console.info("[system]","request:",t.responseStart-t.requestStart+"ms"),t.responseEnd&&t.responseStart&&console.info("[system]","response:",t.responseEnd-t.responseStart+"ms"),t.domComplete&&t.domLoading&&(t.domContentLoadedEventStart&&t.domLoading?console.info("[system]","domComplete (domLoaded):",t.domComplete-t.domLoading+"ms ("+(t.domContentLoadedEventStart-t.domLoading)+"ms)"):console.info("[system]","domComplete:",t.domComplete-t.domLoading+"ms")),t.loadEventEnd&&t.loadEventStart&&console.info("[system]","loadEvent:",t.loadEventEnd-t.loadEventStart+"ms"),t.navigationStart&&t.loadEventEnd&&console.info("[system]","total (DOM):",t.loadEventEnd-t.navigationStart+"ms ("+(t.domComplete-t.navigationStart)+"ms)")}},0)}}]),t}(v["default"]);t["default"]=h,e.exports=t["default"]},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n</div>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(5),d=i(s),u=o(4),v=n(u),f=o(18),p=i(f),h=o(27),g=i(h),b=o(28),m=i(b),y=o(29),_=i(y),w=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.$tabbox=d["default"].render(g["default"],{}),l.$header=null,l.reqList={},l.domList={},l.isReady=!1,l.isShow=!1,l.isInBottom=!0,l._open=void 0,l._send=void 0,l.mockAjax(),l}return l(t,e),c(t,[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(e){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0,this.renderHeader(),d["default"].delegate(d["default"].one(".vc-log",this.$tabbox),"click",".vc-group-preview",function(t){var o=this.dataset.reqid,n=this.parentNode;d["default"].hasClass(n,"vc-actived")?(d["default"].removeClass(n,"vc-actived"),e.updateRequest(o,{actived:!1})):(d["default"].addClass(n,"vc-actived"),e.updateRequest(o,{actived:!0})),t.preventDefault()});var t=d["default"].one(".vc-content");d["default"].bind(t,"scroll",function(o){e.isShow&&(t.scrollTop+t.offsetHeight>=t.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)});for(var o in e.reqList)e.updateRequest(o,{})}},{key:"onRemove",value:function(){window.XMLHttpRequest&&(window.XMLHttpRequest.prototype.open=this._open,window.XMLHttpRequest.prototype.send=this._send,this._open=void 0,this._send=void 0)}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.scrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=d["default"].one(".vc-content");e.scrollTop=e.scrollHeight-e.offsetHeight}},{key:"clearLog",value:function(){this.reqList={};for(var e in this.domList)this.domList[e].remove(),this.domList[e]=void 0;this.domList={},this.renderHeader()}},{key:"renderHeader",value:function(){var e=Object.keys(this.reqList).length,t=d["default"].render(m["default"],{count:e}),o=d["default"].one(".vc-log",this.$tabbox);this.$header?this.$header.parentNode.replaceChild(t,this.$header):o.parentNode.insertBefore(t,o),this.$header=t}},{key:"updateRequest",value:function(e,t){var o=Object.keys(this.reqList).length,n=this.reqList[e]||{};for(var i in t)n[i]=t[i];if(this.reqList[e]=n,this.isReady){var a={id:e,url:n.url,status:n.status,method:n.method||"-",costTime:n.costTime>0?n.costTime+"ms":"-",header:n.header||null,getData:n.getData||null,postData:n.postData||null,response:null,actived:!!n.actived};switch(n.responseType){case"":case"text":if(v.isString(n.response))try{a.response=JSON.parse(n.response),a.response=JSON.stringify(a.response,null,1),a.response=v.htmlEncode(a.response)}catch(r){a.response=v.htmlEncode(n.response)}else"undefined"!=typeof n.response&&(a.response=Object.prototype.toString.call(n.response));break;case"json":"undefined"!=typeof n.response&&(a.response=JSON.stringify(n.response,null,1));break;case"blob":case"document":case"arraybuffer":default:"undefined"!=typeof n.response&&(a.response=Object.prototype.toString.call(n.response))}0==n.readyState||1==n.readyState?a.status="Pending":2==n.readyState||3==n.readyState?a.status="Loading":4==n.readyState||(a.status="Unknown");var l=d["default"].render(_["default"],a),c=this.domList[e];n.status>=400&&d["default"].addClass(d["default"].one(".vc-group-preview",l),"vc-table-row-error"),c?c.parentNode.replaceChild(l,c):d["default"].one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",l),this.domList[e]=l;var s=Object.keys(this.reqList).length;s!=o&&this.renderHeader(),this.isInBottom&&this.scrollToBottom()}}},{key:"mockAjax",value:function(){var e=window.XMLHttpRequest;if(e){var t=this,o=window.XMLHttpRequest.prototype.open,n=window.XMLHttpRequest.prototype.send;t._open=o,t._send=n,window.XMLHttpRequest.prototype.open=function(){var e=this,n=[].slice.call(arguments),i=n[0],a=n[1],r=t.getUniqueID(),l=null;e._requestID=r,e._method=i,e._url=a;var c=e.onreadystatechange||function(){},s=function(){var o=t.reqList[r]||{};if(o.readyState=e.readyState,o.status=0,e.readyState>1&&(o.status=e.status),o.responseType=e.responseType,0==e.readyState)o.startTime||(o.startTime=+new Date);else if(1==e.readyState)o.startTime||(o.startTime=+new Date);else if(2==e.readyState){o.header={};for(var n=e.getAllResponseHeaders()||"",i=n.split("\n"),a=0;a<i.length;a++){var s=i[a];if(s){var d=s.split(": "),u=d[0],v=d.slice(1).join(": ");o.header[u]=v}}}else 3==e.readyState||(4==e.readyState?(clearInterval(l),o.endTime=+new Date,o.costTime=o.endTime-(o.startTime||o.endTime),o.response=e.response):clearInterval(l));return e._noVConsole||t.updateRequest(r,o),c.apply(e,arguments)};e.onreadystatechange=s;var d=-1;return l=setInterval(function(){d!=e.readyState&&(d=e.readyState,s.call(e))},10),o.apply(e,n)},window.XMLHttpRequest.prototype.send=function(){var e=this,o=[].slice.call(arguments),i=o[0],a=t.reqList[e._requestID]||{};a.method=e._method.toUpperCase();var r=e._url.split("?");if(a.url=r.shift(),r.length>0){a.getData={},r=r.join("?"),r=r.split("&");var l=!0,c=!1,s=void 0;try{for(var d,u=r[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){var f=d.value;f=f.split("="),a.getData[f[0]]=f[1]}}catch(p){c=!0,s=p}finally{try{!l&&u["return"]&&u["return"]()}finally{if(c)throw s}}}if("POST"==a.method)if(v.isString(i)){var h=i.split("&");a.postData={};var g=!0,b=!1,m=void 0;try{for(var y,_=h[Symbol.iterator]();!(g=(y=_.next()).done);g=!0){var w=y.value;w=w.split("="),a.postData[w[0]]=w[1]}}catch(p){b=!0,m=p}finally{try{!g&&_["return"]&&_["return"]()}finally{if(b)throw m}}}else v.isPlainObject(i)&&(a.postData=i);return e._noVConsole||t.updateRequest(e._requestID,a),n.apply(e,o)}}}},{key:"getUniqueID",value:function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,o="x"==e?t:3&t|8;return o.toString(16)});return e}}]),t}(p["default"]);t["default"]=w,e.exports=t["default"]},function(e,t){e.exports='<div class="vc-table">\n  <div class="vc-log"></div>\n</div>'},function(e,t){e.exports='<dl class="vc-table-row">\n  <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\n  <dd class="vc-table-col">Method</dd>\n  <dd class="vc-table-col">Status</dd>\n  <dd class="vc-table-col">Time</dd>\n</dl>'},function(e,t){e.exports='<div class="vc-group {{actived ? \'vc-actived\' : \'\'}}">\n  <dl class="vc-table-row vc-group-preview" data-reqid="{{id}}">\n    <dd class="vc-table-col vc-table-col-4">{{url}}</dd>\n    <dd class="vc-table-col">{{method}}</dd>\n    <dd class="vc-table-col">{{status}}</dd>\n    <dd class="vc-table-col">{{costTime}}</dd>\n  </dl>\n  <div class="vc-group-detail">\n    {{if (header !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Headers</dt>\n      </dl>\n      {{for (var key in header)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (getData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Query String Parameters</dt>\n      </dl>\n      {{for (var key in getData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{getData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (postData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Form Data</dt>\n      </dl>\n      {{for (var key in postData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{postData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Response</dt>\n      </dl>\n      <div class="vc-table-row vc-left-border vc-small">\n        <pre class="vc-table-col vc-max-height vc-min-height">{{response || \'\'}}</pre>\n      </div>\n    </div>\n  </div>\n</div>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");
}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();o(31);var s=o(18),d=i(s),u=o(33),v=i(u),f=o(34),p=i(f),h=o(4),g=(n(h),o(5)),b=i(g),m=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n))),c=l;c.isInited=!1,c.node={},c.$tabbox=b["default"].render(v["default"],{}),c.nodes=[],c.activedElem={};var s=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;return c.observer=new s(function(e){for(var t=0;t<e.length;t++){var o=e[t];c._isInVConsole(o.target)||c.onMutation(o)}}),l}return l(t,e),c(t,[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Expend",global:!1,onClick:function(e){if(t.activedElem)if(b["default"].hasClass(t.activedElem,"vc-toggle"))for(var o=0;o<t.activedElem.childNodes.length;o++){var n=t.activedElem.childNodes[o];if(b["default"].hasClass(n,"vcelm-l")&&!b["default"].hasClass(n,"vcelm-noc")&&!b["default"].hasClass(n,"vc-toggle")){b["default"].one(".vcelm-node",n).click();break}}else b["default"].one(".vcelm-node",t.activedElem).click()}},{name:"Collapse",global:!1,onClick:function(e){t.activedElem&&(b["default"].hasClass(t.activedElem,"vc-toggle")?b["default"].one(".vcelm-node",t.activedElem).click():t.activedElem.parentNode&&b["default"].hasClass(t.activedElem.parentNode,"vcelm-l")&&b["default"].one(".vcelm-node",t.activedElem.parentNode).click())}}];e(o)}},{key:"onShow",value:function(){if(!this.isInited){this.isInited=!0,this.node=this.getNode(document.documentElement);var e=this.renderView(this.node,b["default"].one(".vc-log",this.$tabbox)),t=b["default"].one(".vcelm-node",e);t&&t.click();var o={attributes:!0,childList:!0,characterData:!0,subtree:!0};this.observer.observe(document.documentElement,o)}}},{key:"onRemove",value:function(){this.observer.disconnect()}},{key:"onMutation",value:function(e){switch(e.type){case"childList":e.removedNodes.length>0&&this.onChildRemove(e),e.addedNodes.length>0&&this.onChildAdd(e);break;case"attributes":this.onAttributesChange(e);break;case"characterData":this.onCharacterDataChange(e)}}},{key:"onChildRemove",value:function(e){var t=e.target,o=t.__vconsole_node;if(o){for(var n=0;n<e.removedNodes.length;n++){var i=e.removedNodes[n],a=i.__vconsole_node;a&&a.view&&a.view.parentNode.removeChild(a.view)}this.getNode(t)}}},{key:"onChildAdd",value:function(e){var t=e.target,o=t.__vconsole_node;if(o){this.getNode(t),o.view&&b["default"].removeClass(o.view,"vcelm-noc");for(var n=0;n<e.addedNodes.length;n++){var i=e.addedNodes[n],a=i.__vconsole_node;if(a)if(null!==e.nextSibling){var r=e.nextSibling.__vconsole_node;r.view&&this.renderView(a,r.view,"insertBefore")}else o.view&&(o.view.lastChild?this.renderView(a,o.view.lastChild,"insertBefore"):this.renderView(a,o.view))}}}},{key:"onAttributesChange",value:function(e){var t=e.target.__vconsole_node;t&&(t=this.getNode(e.target),t.view&&this.renderView(t,t.view,!0))}},{key:"onCharacterDataChange",value:function(e){var t=e.target.__vconsole_node;t&&(t=this.getNode(e.target),t.view&&this.renderView(t,t.view,!0))}},{key:"renderView",value:function(e,t,o){var n=this,i=new p["default"](e).get();switch(e.view=i,b["default"].delegate(i,"click",".vcelm-node",function(t){t.stopPropagation();var o=this.parentNode;if(!b["default"].hasClass(o,"vcelm-noc")){n.activedElem=o,b["default"].hasClass(o,"vc-toggle")?b["default"].removeClass(o,"vc-toggle"):b["default"].addClass(o,"vc-toggle");for(var i=-1,a=0;a<o.children.length;a++){var r=o.children[a];b["default"].hasClass(r,"vcelm-l")&&(i++,r.children.length>0||(e.childNodes[i]?n.renderView(e.childNodes[i],r,"replace"):r.style.display="none"))}}}),o){case"replace":t.parentNode.replaceChild(i,t);break;case"insertBefore":t.parentNode.insertBefore(i,t);break;default:t.appendChild(i)}return i}},{key:"getNode",value:function(e){if(!this._isIgnoredElement(e)){var t=e.__vconsole_node||{};if(t.nodeType=e.nodeType,t.nodeName=e.nodeName,t.tagName=e.tagName||"",t.textContent="",t.nodeType!=e.TEXT_NODE&&t.nodeType!=e.DOCUMENT_TYPE_NODE||(t.textContent=e.textContent),t.id=e.id||"",t.className=e.className||"",t.attributes=[],e.hasAttributes&&e.hasAttributes())for(var o=0;o<e.attributes.length;o++)t.attributes.push({name:e.attributes[o].name,value:e.attributes[o].value||""});if(t.childNodes=[],e.childNodes.length>0)for(var n=0;n<e.childNodes.length;n++){var i=this.getNode(e.childNodes[n]);i&&t.childNodes.push(i)}return e.__vconsole_node=t,t}}},{key:"_isIgnoredElement",value:function(e){return e.nodeType==e.TEXT_NODE&&""==e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g,"")}},{key:"_isInVConsole",value:function(e){for(var t=e;void 0!=t;){if("__vconsole"==t.id)return!0;t=t.parentNode||void 0}return!1}}]),t}(d["default"]);t["default"]=m,e.exports=t["default"]},function(e,t,o){var n=o(32);"string"==typeof n&&(n=[[e.id,n,""]]);o(10)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(9)(),t.push([e.id,'.vcelm-node{color:#183691}.vcelm-k{color:#0086b3}.vcelm-v{color:#905}.vcelm-l{padding-left:8px;position:relative;word-wrap:break-word;line-height:1}.vcelm-l.vc-toggle>.vcelm-node{display:block}.vcelm-l .vcelm-node:active{background-color:rgba(0,0,0,.15)}.vcelm-l.vcelm-noc .vcelm-node:active{background-color:transparent}.vcelm-t{white-space:pre-wrap;word-wrap:break-word}.vcelm-l .vcelm-l{display:none}.vcelm-l.vc-toggle>.vcelm-l{margin-left:4px;display:block}.vcelm-l:before{content:"";display:block;position:absolute;top:6px;left:3px;width:0;height:0;border:3px solid transparent;border-left-color:#000}.vcelm-l.vc-toggle:before{display:block;top:6px;left:0;border-top-color:#000;border-left-color:transparent}.vcelm-l.vcelm-noc:before{display:none}',""])},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n</div>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=["br","hr","img","input","link","meta"];return e=e?e.toLowerCase():"",t.indexOf(e)>-1}function l(e){return document.createTextNode(e)}function c(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(35),u=i(d),v=o(36),f=i(v),p=o(4),h=(n(p),o(5)),g=i(h),b=function(){function e(t){a(this,e),this.node=t,this.view=this._create(this.node)}return s(e,[{key:"get",value:function(){return this.view}},{key:"_create",value:function(e,t){var o=document.createElement("DIV");switch(g["default"].addClass(o,"vcelm-l"),e.nodeType){case o.ELEMENT_NODE:this._createElementNode(e,o);break;case o.TEXT_NODE:this._createTextNode(e,o);break;case o.COMMENT_NODE:case o.DOCUMENT_NODE:case o.DOCUMENT_TYPE_NODE:case o.DOCUMENT_FRAGMENT_NODE:}return o}},{key:"_createTextNode",value:function(e,t){g["default"].addClass(t,"vcelm-t vcelm-noc"),e.textContent&&t.appendChild(l(c(e.textContent)))}},{key:"_createElementNode",value:function(e,t){var o=r(e.tagName),n=o;0==e.childNodes.length&&(n=!0);var i=g["default"].render(u["default"],{node:e}),a=g["default"].render(f["default"],{node:e});if(n)g["default"].addClass(t,"vcelm-noc"),t.appendChild(i),o||t.appendChild(a);else{t.appendChild(i);for(var l=0;l<e.childNodes.length;l++){var c=document.createElement("DIV");g["default"].addClass(c,"vcelm-l"),t.appendChild(c)}o||t.appendChild(a)}}}]),e}();t["default"]=b,e.exports=t["default"]},function(e,t){e.exports='<span class="vcelm-node">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\n  <i class="vcelm-k">\n    {{for (var i = 0; i < node.attributes.length; i++)}}\n      {{if (node.attributes[i].value !== \'\')}}\n        {{node.attributes[i].name}}="<i class="vcelm-v">{{node.attributes[i].value}}</i>"{{else}}\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>'},function(e,t){e.exports='<span class="vcelm-node">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(18),d=i(s),u=o(38),v=i(u),f=o(39),p=i(f),h=o(4),g=n(h),b=o(5),m=i(b),y=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.$tabbox=m["default"].render(v["default"],{}),l.currentType="",l.typeNameMap={cookies:"Cookies",localstorage:"LocalStorage"},l}return l(t,e),c(t,[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTopBar",value:function(e){for(var t=this,o=["Cookies","LocalStorage"],n=[],i=0;i<o.length;i++)n.push({name:o[i],data:{type:o[i].toLowerCase()},className:"",onClick:function(){return m["default"].hasClass(this,"vc-actived")?!1:(t.currentType=this.dataset.type,void t.renderStorage())}});n[0].className="vc-actived",e(n)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Refresh",global:!1,onClick:function(e){t.renderStorage()}},{name:"Clear",global:!1,onClick:function(e){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){}},{key:"onShow",value:function(){""==this.currentType&&(this.currentType="cookies",this.renderStorage())}},{key:"clearLog",value:function(){if(this.currentType&&window.confirm){var e=window.confirm("Remove all "+this.typeNameMap[this.currentType]+"?");if(!e)return!1}switch(this.currentType){case"cookies":this.clearCookieList();break;case"localstorage":this.clearLocalStorageList();break;default:return!1}this.renderStorage()}},{key:"renderStorage",value:function(){var e=[];switch(this.currentType){case"cookies":e=this.getCookieList();break;case"localstorage":e=this.getLocalStorageList();break;default:return!1}var t=m["default"].one(".vc-log",this.$tabbox);if(0==e.length)t.innerHTML="";else{for(var o=0;o<e.length;o++)e[o].name=g.htmlEncode(e[o].name),e[o].value=g.htmlEncode(e[o].value);t.innerHTML=m["default"].render(p["default"],{list:e},!0)}}},{key:"getCookieList",value:function(){if(!document.cookie||!navigator.cookieEnabled)return[];for(var e=[],t=document.cookie.split(";"),o=0;o<t.length;o++){var n=t[o].split("="),i=n.shift().replace(/^ /,""),a=n.join("=");e.push({name:decodeURIComponent(i),value:decodeURIComponent(a)})}return e}},{key:"getLocalStorageList",value:function(){if(!window.localStorage)return[];try{for(var e=[],t=0;t<localStorage.length;t++){var o=localStorage.key(t),n=localStorage.getItem(o);e.push({name:o,value:n})}return e}catch(i){return[]}}},{key:"clearCookieList",value:function(){if(document.cookie&&navigator.cookieEnabled){for(var e=this.getCookieList(),t=0;t<e.length;t++)document.cookie=e[t].name+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";this.renderStorage()}}},{key:"clearLocalStorageList",value:function(){if(window.localStorage)try{localStorage.clear(),this.renderStorage()}catch(e){alert("localStorage.clear() fail.")}}}]),t}(d["default"]);t["default"]=y,e.exports=t["default"]},function(e,t){e.exports='<div class="vc-table">\n  <div class="vc-log"></div>\n</div>'},function(e,t){e.exports='<div>\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">Name</dd>\n    <dd class="vc-table-col vc-table-col-2">Value</dd>\n  </dl>\n  {{for (var i = 0; i < list.length; i++)}}\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">{{list[i].name}}</dd>\n    <dd class="vc-table-col vc-table-col-2">{{list[i].value}}</dd>\n  </dl>\n  {{/for}}\n</div>'}])});

/***/ }),

/***/ "NPKS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/expand_on@3x.png";

/***/ }),

/***/ "OeQm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_css_core_css__ = __webpack_require__("Ywob");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_assets_css_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_assets_css_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_assets_css_layout_css__ = __webpack_require__("Bko/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_assets_css_layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_assets_css_layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_component_ui_switch_vue__ = __webpack_require__("NVGz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_component_ui_button_vue__ = __webpack_require__("yljd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_DbzdsjhbxViewHanlder__ = __webpack_require__("QJ2r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_component_layout_leftAndRight_layout_vue__ = __webpack_require__("kwvR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__ = __webpack_require__("yC1y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_component_layout_keyFrameAnimation_vue__ = __webpack_require__("9yKi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_util_BrowserUtil__ = __webpack_require__("YTfv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_DbzdsjhbxViewHanlderForPC__ = __webpack_require__("5mjE");











/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].extend({
    data() {
        return {
            disabledSJ: false,
            disabledBX: false,
            show_Radio1: false,
            show_Radio2: false,
            isMobile: false,
            isPC: false,
            vertical1: '0',
            vertical2: '0',
            ctrl1: true,
            ctrl2: false,
            ctrl3: false,
            ctrl4: false,
            ctrl5: false,
            part_hydrolysis: {
                showSlider: false,
                animationName: 'step1',
                zipUrl: __webpack_require__("uVf1"),
                imageNum: 69,
            },
            all_hydrolysis: {
                showSlider: false,
                animationName: 'step2',
                zipUrl: __webpack_require__("rTnh"),
                imageNum: 51,
            },
            part_transsexual: {
                showSlider: false,
                animationName: 'step3',
                zipUrl: __webpack_require__("t/E2"),
                imageNum: 62,
            },
            all_transsexual: {
                showSlider: false,
                animationName: 'step4',
                zipUrl: __webpack_require__("wOdI"),
                imageNum: 62,
            },
        };
    },
    components: {
        h_switch: __WEBPACK_IMPORTED_MODULE_3__src_component_ui_switch_vue__["default"],
        h_button: __WEBPACK_IMPORTED_MODULE_4__src_component_ui_button_vue__["default"],
        leftAndRightLayout: __WEBPACK_IMPORTED_MODULE_6__src_component_layout_leftAndRight_layout_vue__["default"],
        keyFrameAnimation: __WEBPACK_IMPORTED_MODULE_8__src_component_layout_keyFrameAnimation_vue__["default"]
    },
    created() {
        if (__WEBPACK_IMPORTED_MODULE_9__src_util_BrowserUtil__["BrowserUtil"].getBrowserInfo().os === 'Windows') {
            this.isPC = true;
            __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance(new __WEBPACK_IMPORTED_MODULE_10__services_DbzdsjhbxViewHanlderForPC__["a" /* DbzdsjhbxViewHanlderForPC */](this));
        }
        else {
            this.isPC = false;
            __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance(new __WEBPACK_IMPORTED_MODULE_5__services_DbzdsjhbxViewHanlder__["a" /* DbzdsjhbxViewHanlder */](this));
        }
        __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.beforeRenderElement();
    },
    mounted() {
        if (__WEBPACK_IMPORTED_MODULE_9__src_util_BrowserUtil__["BrowserUtil"].getBrowserInfo().isSmallDevice) {
            this.isMobile = true;
            document.getElementById('sj_btn').style.marginTop = 120 + 'px';
        }
        __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().domReady();
    },
    watch: {},
    methods: {
        //蛋白质水解
        sjEvent() {
            this.show_Radio1 = true;
            this.show_Radio2 = false;
            this.vertical2 = '0';
            if ((this.ctrl4 === true && this.ctrl5 === false) || (this.ctrl4 === false && this.ctrl5 === true)) {
                this.ctrl1 = true;
                this.ctrl4 = false;
                this.ctrl5 = false;
                if (this.isPC) {
                    __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation3();
                    __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation4();
                }
                else {
                    this.$refs.transsexual1.reset();
                    this.$refs.transsexual2.reset();
                }
            }
        },
        //蛋白质变性
        bxEvent() {
            this.show_Radio1 = false;
            this.show_Radio2 = true;
            this.vertical1 = '0';
            if ((this.ctrl2 === true && this.ctrl3 === false) || (this.ctrl2 === false && this.ctrl3 === true)) {
                this.ctrl1 = true;
                this.ctrl2 = false;
                this.ctrl3 = false;
                if (this.isPC) {
                    __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation1();
                    __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation2();
                }
                else {
                    this.$refs.hydrolysis1.reset();
                    this.$refs.hydrolysis2.reset();
                }
            }
        },
        //部分水解
        partHydrolysis() {
            this.ctrl1 = false;
            this.ctrl2 = true;
            this.ctrl3 = false;
            this.ctrl4 = false;
            this.ctrl5 = false;
            if (this.isPC) {
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.playAnimation1();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation2();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation3();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation4();
            }
            else {
                this.$refs.hydrolysis1.reset();
                this.$refs.hydrolysis1.play();
            }
        },
        //完全水解
        allHydrolysis() {
            this.ctrl1 = false;
            this.ctrl2 = false;
            this.ctrl3 = true;
            this.ctrl4 = false;
            this.ctrl5 = false;
            if (this.isPC) {
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.playAnimation2();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation1();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation3();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation4();
            }
            else {
                this.$refs.hydrolysis2.reset();
                this.$refs.hydrolysis2.play();
            }
        },
        //部分变性
        partTranssexual() {
            this.ctrl1 = false;
            this.ctrl2 = false;
            this.ctrl3 = false;
            this.ctrl4 = true;
            this.ctrl5 = false;
            if (this.isPC) {
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.playAnimation3();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation1();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation2();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation4();
            }
            else {
                this.$refs.transsexual1.reset();
                this.$refs.transsexual1.play();
            }
        },
        //完全变性
        allTranssexual() {
            this.ctrl1 = false;
            this.ctrl2 = false;
            this.ctrl3 = false;
            this.ctrl4 = false;
            this.ctrl5 = true;
            if (this.isPC) {
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.playAnimation4();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation1();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation2();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation3();
            }
            else {
                this.$refs.transsexual2.reset();
                this.$refs.transsexual2.play();
            }
        },
        //未水解/未变性
        resetAnimation() {
            this.ctrl1 = true;
            this.ctrl2 = false;
            this.ctrl3 = false;
            this.ctrl4 = false;
            this.ctrl5 = false;
            if (this.isPC) {
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation1();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation2();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation3();
                __WEBPACK_IMPORTED_MODULE_7__src_core_ViewController__["a" /* ViewController */].getInstance().viewHandler.resetAnimation4();
            }
            else {
                this.$refs.hydrolysis1.reset();
                this.$refs.hydrolysis2.reset();
                this.$refs.transsexual1.reset();
                this.$refs.transsexual2.reset();
            }
        },
    }
}));


/***/ }),

/***/ "PM8k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/chongzhi.png";

/***/ }),

/***/ "QJ2r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__ = __webpack_require__("yC1y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_util_Detector__ = __webpack_require__("SWdK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_core_CommonViewHandler__ = __webpack_require__("21kJ");



class DbzdsjhbxViewHanlder extends __WEBPACK_IMPORTED_MODULE_2__src_core_CommonViewHandler__["a" /* CommonViewHandler */] {
    constructor(vm) {
        super(vm);
    }
    beforeRenderElement() {
        //throw new Error('Method not implemented.');
    }
    domReady() {
        super.domReady();
        __WEBPACK_IMPORTED_MODULE_0__src_core_ViewController__["a" /* ViewController */].getInstance().hideLoading();
    }
    resize() {
        __WEBPACK_IMPORTED_MODULE_1__src_util_Detector__["Detector"].forceMobildLandscape();
    }
    reset() {
        this.viewModel.$data.show_Radio1 = false;
        this.viewModel.$data.show_Radio2 = false;
        this.viewModel.$data.vertical1 = '0';
        this.viewModel.$data.vertical2 = '0';
        this.viewModel.$data.ctrl1 = true;
        this.viewModel.$data.ctrl2 = false;
        this.viewModel.$data.ctrl3 = false;
        this.viewModel.$data.ctrl4 = false;
        this.viewModel.$data.ctrl5 = false;
        this.viewModel.$refs.hydrolysis1.reset();
        this.viewModel.$refs.hydrolysis2.reset();
        this.viewModel.$refs.transsexual1.reset();
        this.viewModel.$refs.transsexual2.reset();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DbzdsjhbxViewHanlder;



/***/ }),

/***/ "SENO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/expand_off@3x.png";

/***/ }),

/***/ "URJr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/reset_new@3x.png";

/***/ }),

/***/ "VhVh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/all_hydrolysis.f42ebc2.mp4";

/***/ }),

/***/ "as0q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/part_transsexual.b074fc3.mp4";

/***/ }),

/***/ "isjB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "widget/chemistry/r15/dbzdsjhbx/sub_static/background.png";

/***/ }),

/***/ "jJ8/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__("OeQm");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a8af6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__("FqEo");
function injectStyle (ssrContext) {
  __webpack_require__("HxIr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-200a8af6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_tslint_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a8af6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "k34z":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/part_hydrolysis.eff50b0.mp4";

/***/ }),

/***/ "m5D7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nZ/E":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/all_transsexual.99bc4cc.mp4";

/***/ }),

/***/ "rTnh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "widget/chemistry/r15/dbzdsjhbx/sub_static/all_hydrolysis.zip";

/***/ }),

/***/ "rxKx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ "t/E2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "widget/chemistry/r15/dbzdsjhbx/sub_static/part_transsexual.zip";

/***/ }),

/***/ "uVGP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ViewOption {
    constructor() {
        //是否显示重置按钮
        this.showReset = true;
        /*以下属性为移动端参数*/
        //是否适配移动端
        this.adapterMobilePanel = true;
        //显示展开按钮
        this.showMobileExpandIco = true;
        //设置移动端面板透明
        this.mobilePanelAlpha = false;
        //显示重置按钮
        this.showMobileResetIco = true;
        //控制面板动画延迟时间
        this.controlPanelAnimationDelay = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewOption;



/***/ }),

/***/ "uVf1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "widget/chemistry/r15/dbzdsjhbx/sub_static/part_hydrolysis.zip";

/***/ }),

/***/ "wOdI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "widget/chemistry/r15/dbzdsjhbx/sub_static/all_transsexual.zip";

/***/ }),

/***/ "yC1y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CoreInterface__ = __webpack_require__("uVGP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar_css_perfect_scrollbar_css__ = __webpack_require__("m5D7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar_css_perfect_scrollbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar_css_perfect_scrollbar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar__ = __webpack_require__("HMpe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_BrowserUtil__ = __webpack_require__("YTfv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adapter_MobileAdapter__ = __webpack_require__("7uR8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SystemTip__ = __webpack_require__("AXO8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Environment__ = __webpack_require__("5eRw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adapter_UIAdapter__ = __webpack_require__("2vxy");
/**
 * 试图控制启动类
 * 在vue 初始化(created)时 实例化此类
 *@since 2.0
 *@author zhiguo
 *@Date 2018/3/22 15:37
 */








const AllogLever = __webpack_require__("JVVu");
class ViewController {
    constructor(viewHandler, viewOption) {
        const clazz = this['constructor'];
        //为空时，表示浏览器不支持这样读取构造函数
        if (!clazz) {
            return;
        }
        // 防止重复实例化
        if (ViewController.classKeys.indexOf(clazz) !== -1) {
            throw new Error(this + ' 只允许实例化一次！');
        }
        else {
            ViewController.classKeys.push(clazz);
            ViewController.classValues.push(this);
        }
        if (!viewOption) {
            viewOption = new __WEBPACK_IMPORTED_MODULE_0__CoreInterface__["a" /* ViewOption */]();
        }
        //console.log('实例化');
        this.viewHandler = viewHandler;
        //提示类
        this.tip = new __WEBPACK_IMPORTED_MODULE_5__SystemTip__["a" /* SystemTip */]();
        this.uiAdapter = new __WEBPACK_IMPORTED_MODULE_7__adapter_UIAdapter__["a" /* UIAdapter */]();
        //手机适配器
        this.mobileAdapter = new __WEBPACK_IMPORTED_MODULE_4__adapter_MobileAdapter__["a" /* MobileAdapter */]();
        //环境信息类
        const env = new __WEBPACK_IMPORTED_MODULE_6__Environment__["a" /* Environment */]();
        window['env'] = env;
        window['viewOption'] = viewOption;
        this.showLoading();
        window['viewHandler'] = viewHandler;
    }
    static getInstance(viewHandler, viewOption) {
        if (!this.instance) {
            this.instance = new ViewController(viewHandler, viewOption);
        }
        return this.instance;
    }
    initWindowResize() {
        //console.warn('初始化windowResize 事件');
        //console.warn('init width:' + document.documentElement.clientWidth);
        window.onresize = () => {
            //console.log('width:' + document.documentElement.clientWidth);
            //当浏览器调整大小时，重新更新滚动条
            this.scrollerUpdate();
            //this.viewHandler.resize();
        };
    }
    scrollerUpdate() {
        if (ViewController.perfectScrollbar) {
            ViewController.perfectScrollbar.update();
        }
    }
    domReady() {
        this.uiAdapter.createElement();
        //适配手机
        this.adaptationMobile();
        //增加缩放
        //this.scaleViewContent();
        //vconsole 调试日志组件
        const config = {
            reportUrl: '//a.qq.com',
            reportPrefix: 'qun',
            reportKey: 'msg',
            otherReport: {
                uin: 491862102
            },
            entry: '#title' //请点击这个DOM元素6次召唤vConsole。//你可以通过AlloyLever.entry('#entry2')设置多个机关入口召唤神龙
        };
        AllogLever.config(config);
        //动态添加滚动条
        const container = document.querySelector('.control-panel_div_rt');
        if (container) {
            ViewController.perfectScrollbar = new __WEBPACK_IMPORTED_MODULE_2_perfect_scrollbar__["a" /* default */](container);
        }
        if (!document.documentElement.clientWidth || document.documentElement.clientWidth === 0) {
            requestAnimationFrame(ViewController.getInstance().domReady);
            // return;
        }
        ViewController.getInstance().initWindowResize();
        ViewController.getInstance().viewHandler.domReady();
        //ViewController.getInstance().hideLoading();
        /* const browserInfo = BrowserUtil.getBrowserInfo();
         (browserInfo as any)['hardware'] = {
             cpu: 'Intel(R)_Xeon(R)_CPU_E5-1620_v4_@_3.50GHz',
             cpuLevel: '95',
             discreteGpu: true,
             totalMem: 8192,
             freeMem: 4622
         };
         (browserInfo as any)['technology'] = ['threejs', 'webgl' , 'webgl2.0', 'gsap'];*/
    }
    /**
     * 初始化加载等待框
     */
    showLoading() {
        this.tip.showLoading();
    }
    /**
     * 隐藏等待框
     */
    hideLoading(time) {
        time = time ? time : 0;
        setTimeout(() => {
            this.tip.hideLoading();
        }, time);
    }
    /**
     * 适配手机端，
     * 当检查为手机端时增加手机端样式
     *
     */
    adaptationMobile() {
        if (window.viewOption.adapterMobilePanel === false) {
            return;
        }
        const browserInfo = __WEBPACK_IMPORTED_MODULE_3__util_BrowserUtil__["BrowserUtil"].getBrowserInfo();
        console.log(browserInfo);
        //只有iphone下，或者android设备并且是小屏幕尺寸
        if ((browserInfo.isIphone === true && browserInfo.os.toLowerCase() !== 'android' && browserInfo.isSmallDevice === true) ||
            (browserInfo.os.toLowerCase() === 'android' && browserInfo.isSmallDevice === true)) {
            this.mobileAdapter.changeDeviceToMobile();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewController;

ViewController.classKeys = [];
ViewController.classValues = [];


/***/ })

},["2u5R"]);