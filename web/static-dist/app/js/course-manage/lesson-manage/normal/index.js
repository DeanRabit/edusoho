!function(l){function t(t){for(var e,s,n=t[0],a=t[1],o=t[2],i=0,r=[];i<n.length;i++)s=n[i],Object.prototype.hasOwnProperty.call(u,s)&&u[s]&&r.push(u[s][0]),u[s]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(l[e]=a[e]);for(h&&h(t);r.length;)r.shift()();return d.push.apply(d,o||[]),c()}function c(){for(var t,e=0;e<d.length;e++){for(var s=d[e],n=!0,a=1;a<s.length;a++){var o=s[a];0!==u[o]&&(n=!1)}n&&(d.splice(e--,1),t=i(i.s=s[0]))}return t}var s={},u={123:0},d=[];function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=l,i.c=s,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var h=n;d.push([763,0]),c()}({133:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var n=function(t,e){$("body").on("click",t,function(t){function s(){cd.confirm({title:Translator.trans(e.title),content:Translator.trans(e.hint),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post(n.data("url"),function(t){t.success?(cd.message({type:"success",message:Translator.trans(e.success),delay:"1000"}),location.reload()):cd.message({type:"danger",message:Translator.trans(e.fail)+":"+t.message,delay:"5000"})})})}var n=$(t.target);n.data("preUrl")?$.post(n.data("preUrl"),function(t){var e;t.success?(e=cd.loading({isFixed:!0}),$("#modal").html(e).modal({backdrop:"static",keyboard:!1}).load(n.data("saveUrl"))):s()}):s()})}},153:function(t,e,s){"use strict";s.d(e,"b",function(){return a}),s.d(e,"c",function(){return i}),s.d(e,"d",function(){return r}),s.d(e,"a",function(){return l});var n=s(133),a=function(){$("body").on("click",".js-close-course",function(t){var e=$(t.currentTarget);cd.confirm({title:Translator.trans("site.close"),content:Translator.trans("course.manage.close_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post(e.data("checkUrl"),function(t){t.warn?cd.confirm({title:Translator.trans("site.close"),content:Translator.trans(t.message),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){o(e)}):o(e)})})})},o=function(t){$.post(t.data("url"),function(t){t.success?(cd.message({type:"success",message:Translator.trans("course.manage.close_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("course.manage.close_fail_hint")+":"+t.message})})},i=function(){$("body").on("click",".js-delete-course",function(t){cd.confirm({title:Translator.trans("site.delete"),content:Translator.trans("course.manage.delete_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post($(t.currentTarget).data("url"),function(t){t.success?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),t.redirect?window.location.href=t.redirect:location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")+":"+t.message})})})})},r=function(){Object(n.a)(".js-publish-course",{title:"course.manage.publish_title",hint:"course.manage.publish_hint",success:"course.manage.publish_success_hint",fail:"course.manage.publish_fail_hint"})},l=function(){var e,s=$(".js-task-list-header");s.length&&(e=s.offset().top,$(window).scroll(function(t){$(window).scrollTop()>=e?s.addClass("fixed"):s.removeClass("fixed")}))}},17:function(t,e){t.exports=jQuery},279:function(t,e,s){"use strict";s.d(e,"b",function(){return n}),s.d(e,"a",function(){return a});var n=function(){cd.onoff({el:".js-switch"}).on("change",function(t){var s=$(".js-switch"),e=s.data("url"),n=s.parent().hasClass("checked")?1:0,a=s.parent().hasClass("checked")?"on":"off";cd.confirm({title:Translator.trans("confirm.oper.tip"),content:Translator.trans("confirm.lesson.hidden.tip."+a),okText:Translator.trans("site.yes"),cancelText:Translator.trans("site.no")}).on("ok",function(){$.post(e,{status:n}).success(function(t){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),location.reload()}).error(function(t){cd.message({type:"danger",message:t.responseJSON.error.message})})}).on("cancel",function(t,e){s[0].checked=!s[0].checked,s.parent().toggleClass("checked")})})},a=function(){$("body").on("click",".js-lesson-create-btn",function(t){var e=$(t.currentTarget).data("url");$.get(e,{}).success(function(t){$("#modal").html(""),$("#modal").append(t.html),$("#modal").modal({backdrop:"static",show:!0})}).error(function(t){cd.message({type:"danger",message:Translator.trans(t.responseJSON.error.message)})})})}},315:function(t,e,s){"use strict";s.d(e,"a",function(){return c});var n=s(0),a=s.n(n),o=s(1),i=s.n(o),r=s(44),l=s(4),c=function(){function e(t){a()(this,e),this.$element=$(t),this._sort(),this._event()}return i()(e,[{key:"_event",value:function(){var s=this;this.$element.on("addItem",function(t,e){s.addItem(e),s.sortList()}),$("body").on("click","[data-position]",function(t){var e=$(this);s.position=e.data("position"),s.type=e.data("type")}),this._deleteChapter(),this._collapse(),this._publish(),this._createTask(),this._optional(),this._initLessonTaskAction()}},{key:"_collapse",value:function(){var o=['<i class="es-icon es-icon-chevronright cd-mr16"></i>','<i class="es-icon es-icon-keyboardarrowdown cd-mr16"></i>'];this.$element.on("click",".js-toggle-show",function(t){var e=$(t.currentTarget);e.toggleClass("toogle-hide");var s=e.closest(".task-manage-item"),n=s.hasClass("js-task-manage-chapter")?".js-task-manage-chapter":".js-task-manage-chapter,.js-task-manage-unit",a=s.nextUntil(n);e.hasClass("js-toggle-unit")?a.toggleClass("unit-hide"):a=a.not(".unit-hide"),a.stop().animate({height:"toggle",opacity:"toggle"},"fast"),e.hasClass("toogle-hide")?e.html(o[0]):e.html(o[1])})}},{key:"addItem",value:function(t){var e=$(t),s=$("#"+e.attr("id"));if(0<s.length)return s.replaceWith(e),void this.afterAddItem(e);switch(this.type){case"chapter":var n=this.$element.find("#chapter-"+this.position),a=n.nextUntil(".js-task-manage-chapter").last();0==a.length?n.after(e):a.after(e);break;case"task":this.$element.find("#chapter-"+this.position+" .js-lesson-box").append(e);var o=e.parents(".js-lesson-container");this._triggerAsTaskNumUpdated(o);break;case"lesson":var i=this.$element.find("#chapter-"+this.position),r=i.nextUntil(".js-task-manage-unit,.js-task-manage-chapter").last();0==r.length?i.after(e):r.after(e);break;default:this.$element.append(e)}$('[data-toggle="tooltip"]').tooltip(),this.handleEmptyShow(),this._flushTaskNumber(),this._flushPublishLessonNum(),this.clearPosition(),this.afterAddItem(e)}},{key:"clearPosition",value:function(){this.position="",this.type=""}},{key:"_deleteChapter",value:function(){var a=this;this.$element.on("click",".js-delete",function(t){var e=$(this),s=e.closest(".task-manage-item"),n=a._getDeleteText(e);cd.confirm({title:Translator.trans("site.delete"),content:n,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){"task"==e.data("type")&&0==s.siblings().length&&s.closest(".js-task-manage-lesson").remove();var t=s.parents(".js-lesson-container");s.remove(),a._triggerAsTaskNumUpdated(t),a.handleEmptyShow(),a._flushTaskNumber(),a._flushPublishLessonNum(),$.post(e.data("url"),function(t){Object(l.a)("success",Translator.trans("site.delete_success_hint")),a.sortList()})})})}},{key:"_getDeleteText",value:function(t){return"task"==t.data("type")?Translator.trans("course.manage.task_delete_hint",{taskName:t.data("name")}):Translator.trans("course.manage.chapter_delete_hint",{name:t.data("name")})}},{key:"_sort",value:function(){var o,s=this;Object(r.a)({element:s.$element,ajax:!1,group:"nested",placeholder:'<li class="placeholder task-dragged-placeholder"></li>',isValidTarget:function(t,e){return s._sortRules(t,e)},onDragStart:function(t,e,s){var n=t.offset(),a=e.rootGroup.pointer;o={left:a.left-n.left,top:a.top-n.top},s(t,e)},onDrag:function(t,e){var s=t.height();$(".task-dragged-placeholder").css({height:s,"background-color":"#eee"}),t.css({left:e.left-o.left,top:e.top-o.top})}},function(t){s.sortList()})}},{key:"_sortRules",value:function(t,e){return(!t.hasClass("js-task-manage-item")||e.target.closest(".js-task-manage-lesson").attr("id")==t.closest(".js-task-manage-lesson").attr("id"))&&(!((t.hasClass("js-task-manage-unit")||t.hasClass("js-task-manage-chapter"))&&!e.target.hasClass("sortable-list"))&&(!t.hasClass("js-task-manage-lesson")||!e.target.hasClass("js-lesson-box")))}},{key:"handleEmptyShow",value:function(){0===$("#sortable-list").find("li").length?$(".js-task-empty").removeClass("hidden"):$(".js-task-empty").addClass("hidden")}},{key:"sortList",value:function(){var t=[];this.$element.find(".task-manage-item").each(function(){t.push($(this).attr("id"))}),$.post(this.$element.data("sortUrl"),{ids:t},function(t){}),this.sortablelist()}},{key:"setShowNum",value:function(t){0==t.attr("show-num")?t.attr("show-num",1):t.attr("show-num",0)}},{key:"sortablelist",value:function(){for(var t=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter",".js-task-manage-item[show-num=1]",".js-task-manage-unit"],e=0;e<t.length;e++)this._sortNumberByClassName(t[e]);this._sortUnitNumber()}},{key:"_sortNumberByClassName",value:function(t){var e=1;this.$element.find(t).each(function(){$(this).find(".number").text(e++)})}},{key:"_sortUnitNumber",value:function(){var e;this.$element.find(".js-task-manage-chapter").each(function(){var t=$(this).nextUntil(".js-task-manage-chapter").filter(".js-task-manage-unit");e=1,t.each(function(){$(this).find(".number").text(e++)})})}},{key:"_publish",value:function(){var s=this,n=this,a={class:".js-publish-item, .js-delete, .js-lesson-unpublish-status",oppositeClas:".js-unpublish-item",isHideUnPublish:$("#isHideUnPublish").hasClass("checked"),flag:!1};this.$element.on("click",".js-unpublish-item",function(t){var e=$(t.target);a.success=Translator.trans("course.manage.task_unpublish_success_hint"),a.danger=Translator.trans("course.manage.task_unpublish_fail_hint")+":",s.toggleOptional(e,n,a)}),this.$element.on("click",".js-publish-item",function(t){var e=$(t.target);a.success=Translator.trans("course.manage.task_publish_success_hint"),a.danger=Translator.trans("course.manage.task_publish_fail_hint")+":",s.toggleOptional(e,n,a)})}},{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var t=$(".js-settings-item.active").length;this.$taskNumber.text(t)}},{key:"_flushPublishLessonNum",value:function(){var t=$(".js-settings-item.active").length,e=$(".js-lesson-unpublish-status.hidden").length,s=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:e,unpublishedNum:t-e});$(".js-lessons-publish-status").attr("data-content",s)}},{key:"_createTask",value:function(){this.$element.on("click",".js-create-task-btn",function(t){var e=$(this).data("url");$.get(e,function(t){t.code?($("#modal").html(""),$("#modal").append(t.html),$("#modal").modal({backdrop:"static",show:!0})):cd.message({type:"danger",message:Translator.trans(t.message)})}).fail(function(t){cd.message({type:"danger",message:t.responseJSON.error.message})})})}},{key:"_optional",value:function(){var s=this,n={class:".js-set-optional",oppositeClas:".js-unset-optional,.js-lesson-option-tag",success:Translator.trans("site.save_success_hint"),danger:Translator.trans("site.save_error_hint")+":",flag:!0};this.$element.on("click",".js-set-optional",function(t){var e=$(t.target);s.toggleOptional(e,s,n)}),this.$element.on("click",".js-unset-optional",function(t){var e=$(t.target);s.toggleOptional(e,s,n)})}},{key:"_initLessonTaskAction",value:function(){var e={"js-lesson-preview-btn":"js-hidden-lesson-preview-btn","js-lesson-edit-btn":"js-hidden-lesson-edit-btn","js-lesson-rename-btn":"js-hidden-lesson-rename-btn"};for(var t in e)!function(t){var a=e[t];$("#sortable-list").on("click","."+t,function(){var t=$(this).parents(".js-lesson-container"),e=t.find(".js-task-manage-item").attr("id").split("-")[1],s=t.find("."+a),n=s.data("url").replace("%7BtaskId%7D",e);s.data("url",n),s.data("toggle")?s.click():window.open(s.data("url"),"_blank")})}(t)}},{key:"toggleOptional",value:function(s,n,a){var o=this,i=s.closest(".task-manage-item"),r=i.find(a.class),l=i.find(a.oppositeClas),c=$("#isHideUnPublish").hasClass("checked");$.post(s.data("url"),function(t){var e=!0;c&&(e=n.checkShouldSetProperty(s,i)),r.toggleClass("hidden"),l.toggleClass("hidden"),(c&&e||!c&&a.flag)&&(i.find(".display-text").toggleClass("hidden"),n.setShowNum(i),n.sortList()),o._flushPublishLessonNum(),cd.message({type:"success",message:a.success})}).fail(function(t){cd.message({type:"danger",message:a.danger+t.responseJSON.error.message})})}},{key:"checkShouldSetProperty",value:function(t,e){var s=e.find(".js-publish-item"),n=e.find(".js-set-optional"),a=s.hasClass("hidden"),o=n.hasClass("hidden"),i=!0;return t.hasClass("js-unpublish-item")||t.hasClass("js-publish-item")?o&&(i=!1):(t.hasClass("js-set-optional")||t.hasClass("js-unset-optional"))&&(a||(i=!1)),i}},{key:"afterAddItem",value:function(){console.log("afterAddItem")}},{key:"_triggerAsTaskNumUpdated",value:function(t){var e=t.find(".js-lesson-box"),s=1<e.find(".js-task-manage-item").length;s?(e.removeClass("hidden"),t.find(".js-display-when-mul-tasks").removeClass("hidden"),t.find(".js-display-when-single-task").addClass("hidden")):(e.addClass("hidden"),t.find(".js-display-when-mul-tasks").addClass("hidden"),t.find(".js-display-when-single-task").removeClass("hidden"),t.find(".js-task-title").html(t.find(".js-lesson-title").html())),this._triggerLessonIconAsTaskNumUpdated(t,s)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(t,e){var s=t.find(".js-lesson-icon"),n="";n=e?s[0].classList:0==t.find(".js-lesson-box").find(".es-icon").length?[]:t.find(".js-lesson-box").find(".es-icon")[0].classList;for(var a=0;a<n.length;a++){var o=n[a];o.startsWith("es-icon-")&&(e?s.removeClass(o):s.addClass(o))}}}]),e}()},763:function(t,e,s){"use strict";s.r(e);var n=s(2),o=s.n(n),a=s(0),i=s.n(a),r=s(1),l=s.n(r),c=s(8),u=s.n(c),d=s(9),h=s.n(d),f=s(5),m=s.n(f),g=s(279),p=(s(138),function(){function t(){i()(this,t),this._defaultEvent()}return l()(t,[{key:"_defaultEvent",value:function(){void 0===store.get("NormalLessonIntro")&&(this.showAdImage(),store.set("NormalLessonIntro","1")),this.closeModal()}},{key:"closeModal",value:function(){$("#js-intro").on("click",function(t){$("#js-intro").modal("hide")})}},{key:"showAdImage",value:function(){var t=$("#js-intro"),e=new Image,s=$(".js-data-local").data("local");e.src="en"===s?"/assets/img/lessonintro/lessonintro-en.jpg":"/assets/img/lessonintro/lessonintro.jpg";var n=$(e);t.find(".modal-body").append(n),t.modal("show")}}]),t}()),k=s(315),v=s(153);function b(n){var a=function(){if("undefined"==typeof Reflect||!o.a)return!1;if(o.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e,s=m()(n);return e=a?(t=m()(this).constructor,o()(s,arguments,t)):s.apply(this,arguments),h()(this,e)}}new(function(t){u()(n,t);var s=b(n);function n(t){var e;return i()(this,n),e=s.call(this,t),new p,e}return l()(n,[{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var t=$(".js-task-manage-item:not(.drag)").length;this.$taskNumber.text(t)}},{key:"_flushPublishLessonNum",value:function(){var t=$(".js-task-manage-item:not(.drag)").length,e=$(".js-lesson-unpublish-status.hidden").length,s=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:e,unpublishedNum:t-e});$(".js-lessons-publish-status").attr("data-content",s)}},{key:"_triggerAsTaskNumUpdated",value:function(t){var e=t.find(".js-lesson-box"),s=1<e.find(".js-task-manage-item").length;s?e.removeClass("hidden"):e.addClass("hidden"),this._triggerLessonIconAsTaskNumUpdated(t,s)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(){}},{key:"sortablelist",value:function(){for(var t=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter"],e=0;e<t.length;e++)this._sortNumberByClassName(t[e]);this._sortUnitNumber(),this._sortTaskNumber()}},{key:"_sortTaskNumber",value:function(){var e;this.$element.find(".js-lesson-box").each(function(){var t=$(this).find(".js-task-manage-item");e=0,t.each(function(){$(this).find(".number").text(e++)})})}}]),n}(k.a))("#sortable-list"),Object(g.b)(),Object(g.a)(),Object(v.a)()}});