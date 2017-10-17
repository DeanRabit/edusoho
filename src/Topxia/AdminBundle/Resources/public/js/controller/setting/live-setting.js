define(function(require, exports, module) {

    var Notify = require('common/bootstrap-notify');
    var WebUploader = require('edusoho.webuploader');

    exports.run = function() {
        var $form = $("#live-setting-form");

        if($('#live-course-logo-upload').length>0) {
            var uploader = new WebUploader({
                element: '#live-course-logo-upload',
                accept: {  
                    title: 'Images',  
                    extensions: 'png',  
                    mimeTypes: 'image/png'  
                },
            });

            uploader.on('uploadSuccess', function(file, response ) {
                var url = $("#live-course-logo-upload").data("gotoUrl");

                $("#live-course-logo-container").html('<img src="' + response.url + '">');
                $form.find('[name=logo_path]').val(response.url);
                $form.find('[name=logo_file_id]').val(response.id);
                $("#live-course-logo-remove").show();
                Notify.success(Translator.trans('上传直播课程的LOGO成功！'));
                
            });

            $("#live-course-logo-remove").on('click', function(){
                if (!confirm(Translator.trans('确认要删除吗？'))) return false;
                var $btn = $(this);
                $.post($btn.data('url'), function(){
                    $("#live-course-logo-container").html('');
                    $form.find('[name=logo_path]').val('');
                    $btn.hide();
                    Notify.success(Translator.trans('删除直播课程LOGO成功！'));
                }).error(function(){
                    Notify.danger(Translator.trans('删除直播课程LOGO失败！'));
                });
            });
        }
    };

});