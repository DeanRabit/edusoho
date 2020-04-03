(window.webpackJsonp=window.webpackJsonp||[]).push([["login"],{"4eb5":function(e,t,n){var r=n("6981"),i={autoSetContainer:!1,appendToBody:!0},o={install:function(e){e.prototype.$clipboardConfig=i,e.prototype.$copyText=function(e,t){return new Promise((function(n,o){var a=document.createElement("button"),s=new r(a,{text:function(){return e},action:function(){return"copy"},container:"object"==typeof t?t:document.body});s.on("success",(function(e){s.destroy(),n(e)})),s.on("error",(function(e){s.destroy(),o(e)})),i.appendToBody&&document.body.appendChild(a),a.click(),i.appendToBody&&document.body.removeChild(a)}))},e.directive("clipboard",{bind:function(e,t,n){if("success"===t.arg)e._vClipboard_success=t.value;else if("error"===t.arg)e._vClipboard_error=t.value;else{var o=new r(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:i.autoSetContainer?e:void 0});o.on("success",(function(t){var n=e._vClipboard_success;n&&n(t)})),o.on("error",(function(t){var n=e._vClipboard_error;n&&n(t)})),e._vClipboard=o}},update:function(e,t){"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:(e._vClipboard.text=function(){return t.value},e._vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){"success"===t.arg?delete e._vClipboard_success:"error"===t.arg?delete e._vClipboard_error:(e._vClipboard.destroy(),delete e._vClipboard)}})},config:i};e.exports=o},6981:function(e,t,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(1)),a=c(n(3)),s=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===r(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,s.default)(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}();function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=u},function(e,t,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),s=(r=a)&&r.__esModule?r:{default:r},c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,s.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,s.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=c},function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(e),r.removeAllRanges(),r.addRange(i),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function i(){r.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,i=n.length;r<i;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],i=[];if(r&&t)for(var o=0,a=r.length;o<a;o++)r[o].fn!==t&&r[o].fn._!==t&&i.push(r[o]);return i.length?n[e]=i:delete n[e],this}},e.exports=n},function(e,t,n){var r=n(5),i=n(6);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return d=t,h=n,(f=e).addEventListener(d,h),{destroy:function(){f.removeEventListener(d,h)}};if(r.nodeList(e))return c=e,u=t,l=n,Array.prototype.forEach.call(c,(function(e){e.addEventListener(u,l)})),{destroy:function(){Array.prototype.forEach.call(c,(function(e){e.removeEventListener(u,l)}))}};if(r.string(e))return o=e,a=t,s=n,i(document.body,o,a,s);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,a,s,c,u,l,f,d,h}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(7);function i(e,t,n,i,o){var a=function(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,a,o),{destroy:function(){e.removeEventListener(n,a,o)}}}e.exports=function(e,t,n,r,o){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,n,r,o)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}}])},7067:function(e,t,n){"use strict";n("e17f");var r=n("2241"),i=(n("e7e5"),n("d399")),o=n("a026"),a=n("3ce7"),s=n("4eb5"),c=n.n(s);o.a.use(c.a);var u=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||n&&!t)i.a.fail("缺少分享参数");else{var s={domainUri:location.origin,itemUri:"",source:"h5"};a.a.marketingActivities({query:{activityId:e},data:s}).then((function(e){var a=-1!==e.url.indexOf("?")?"&":"?",s=n?"".concat(t).concat(a,"ticket=").concat(e.ticket):e.url;u?window.location.href=s:r.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{o.a.prototype.$copyText(s).then((function(){i.a.success("复制成功")}),(function(){i.a.fail("请更换浏览器复制")}))}catch(e){i.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){i.a.fail(e.message)}))}}},"89eb":function(e,t,n){"use strict";n.r(t),n("e7e5");var r=n("d399"),i=n("db72"),o=n("2f62"),a=n("3ce7"),s={data:function(){return{username:"",password:"",faceRegistered:0,errorMessage:{password:""}}},computed:{btnSubmitDisable:function(){return!this.username},btnDisable:function(){return!(this.username&&this.password)}},methods:Object(i.a)({},Object(o.b)(["userLogin"]),{onSubmitInfo:function(){var e,t=this;e=/^1\d{10}$/.test(this.username)?"mobile":/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.username)?"email":"nickname",a.a.getUserIsExisted({query:{type:this.username},params:{identifyType:e}}).then((function(e){e.id?"0"===e.faceRegistered?(t.faceRegistered=e.faceRegistered,Object(r.a)({duration:2e3,message:"初次使用请验证密码"})):t.$router.push({name:"verification",query:{redirect:t.$route.query.redirect||"",loginToken:t.$route.query.loginToken||"",type:"compare",faceRegistered:0,loginField:t.username}}):r.a.fail({duration:2e3,message:"用户不存在"})})).catch((function(e){r.a.fail(e.message)}))},checkName:function(){this.faceRegistered=0},onCheckExisted:function(){var e=this;this.userLogin({username:this.username,password:this.password}).then((function(t){e.$router.push({name:"verification",query:{redirect:e.$route.query.redirect||"",loginToken:e.$route.query.loginToken||"",type:"register",faceRegistered:1}})})).catch((function(e){r.a.fail(e.message)}))}})},c=n("a6c2"),u=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("span",{staticClass:"login-title"},[e._v("确认账号")]),n("van-field",{staticClass:"login-input e-input",attrs:{placeholder:"请输入邮箱/手机/用户名"},on:{input:e.checkName},model:{value:e.username,callback:function(t){e.username="string"==typeof t?t.trim():t},expression:"username"}}),e.faceRegistered?n("van-field",{staticClass:"login-input e-input",attrs:{"error-message":e.errorMessage.password,type:"password",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),e.faceRegistered?n("van-button",{staticClass:"primary-btn mb20",attrs:{disabled:e.btnDisable,type:"default"},on:{click:e.onCheckExisted}},[e._v("下一步")]):n("van-button",{staticClass:"primary-btn mb20",attrs:{disabled:e.btnSubmitDisable,type:"default"},on:{click:e.onSubmitInfo}},[e._v("下一步")])],1)}),[],!1,null,null,null);t.default=u.exports},a262:function(e,t,n){"use strict";var r=n("7067");t.a={methods:{activityHandle:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.a)(e,t,n)}}}},affc:function(e,t,n){"use strict";n.r(t),n("a481"),n("c5f6");var r=n("db72"),i=(n("e7e5"),n("d399")),o=(n("96cf"),n("3b8d")),a=(n("a262"),n("d863")),s=n("2f62"),c=n("3ce7"),u={mixins:[a.a],data:function(){return{username:"",password:"",errorMessage:{password:""},faceSetting:0,bodyHeight:520,loginConfig:{},cloudSetting:!1}},computed:{btnDisable:function(){return!(this.username&&this.password)},isWeixinBrowser:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},canloginConfig:function(){return!this.$route.query||!this.$route.query.forbidWxLogin}},created:function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$store.state.token){e.next=4;break}return i.a.loading({message:"请稍后"}),this.afterLogin(),e.abrupt("return");case 4:return e.next=6,c.a.getSettings({query:{type:"register"}}).catch((function(e){i.a.fail(e.message)}));case 6:this.registerSettings=e.sent,this.getsettingsCloud();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),mounted:function(){this.bodyHeight=document.documentElement.clientHeight-46,this.username=this.$route.params.username||this.$route.query.account||"",i.a.loading({message:"请稍后"}),this.faceLogin(),this.thirdPartyLogin()},methods:Object(r.a)({},Object(s.b)(["userLogin"]),{getsettingsCloud:function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.settingsCloud().then((function(e){t.cloudSetting=!!e.sms_enabled})).catch((function(e){i.a.fail(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onSubmit:function(e){var t=this;this.userLogin({username:this.username,password:this.password}).then((function(e){i.a.success({duration:2e3,message:"登录成功"}),t.afterLogin()})).catch((function(e){i.a.fail(e.message)}))},jumpRegister:function(){this.registerSettings&&"closed"!==this.registerSettings.mode&&"email"!==this.registerSettings.mode?this.$router.push({name:"register",query:{redirect:this.$route.query.redirect||"/"}}):Object(i.a)("网校未开启手机注册，请联系管理员")},faceLogin:function(){var e=this;c.a.settingsFace({}).then((function(t){Number(t.login.enabled)?e.faceSetting=Number(t.login.h5_enabled):e.faceSetting=0})).catch((function(e){i.a.fail(e.message)}))},thirdPartyLogin:function(){var e=this;this.canloginConfig&&c.a.loginConfig({}).then((function(t){i.a.clear(),e.loginConfig=t,Number(t.weixinmob_enabled)&&e.isWeixinBrowser&&e.wxLogin()})).catch((function(e){i.a.fail(e.message),i.a.clear()}))},wxLogin:function(){this.$router.replace({path:"/auth/social",query:{type:"wx",weixinmob_key:this.loginConfig.weixinmob_key,redirect:this.$route.query.redirect||"/",callbackType:this.$route.query.callbackType,activityId:this.$route.query.activityId}})},changeLogin:function(){this.$route.query.redirect?this.$router.push({name:"fastlogin",query:{redirect:this.$route.query.redirect}}):this.$router.push({name:"fastlogin"})}})},l=n("a6c2"),f=Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login",style:{height:e.bodyHeight+"px"}},[n("span",{staticClass:"login-title"},[e._v("登录账号")]),n("img",{staticClass:"login-avatarimg",attrs:{src:""}}),n("van-field",{staticClass:"login-input e-input",attrs:{autosize:{maxHeight:24},border:!1,type:"textarea",placeholder:"邮箱/手机/用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("van-field",{staticClass:"login-input e-input",attrs:{border:!1,"error-message":e.errorMessage.password,type:"password",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("van-button",{staticClass:"primary-btn mb20",attrs:{disabled:e.btnDisable,type:"default"},on:{click:e.onSubmit}},[e._v("登录")]),n("div",{staticClass:"login-bottom text-center"},[n("router-link",{staticClass:"login-account",attrs:{to:"/setting/password/reset"}},[e._v("忘记密码？  |")]),n("span",{staticClass:"login-account",on:{click:e.jumpRegister}},[e._v("  立即注册  ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.cloudSetting,expression:"cloudSetting"}],staticClass:"login-change",on:{click:e.changeLogin}},[n("img",{staticClass:"login_change-icon",attrs:{src:"static/images/login_change.png"}}),e._v("切换手机快捷登录\n    ")])],1)],1)}),[],!1,null,null,null);t.default=f.exports},d863:function(e,t,n){"use strict";n("a481");var r=n("7067");t.a={data:function(){return{redirect:""}},created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:{afterLogin:function(){var e=this,t=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",n=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",i=this.$route.query.callbackType,o=this.$route.query.activityId,a=decodeURIComponent(this.$route.query.callback);setTimeout((function(){if(i)switch(i){case"marketing":Object(r.a)(o,a)}else n?e.$router.replace({path:t,query:{backUrl:n}}):e.$router.replace({path:t})}),2e3)}}}}}]);