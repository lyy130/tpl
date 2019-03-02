/*链接*/
(function (global, factory) {
    global.vhome = factory();
}(window, (function () {
    'use strict';
    var _this = {
        name: 'vlink', version: '1.0.0'
    };

    _this.init = function(){
        _this.bindSwitchEye('.eye-group');
    };
    // 切换眼睛s
    _this.bindSwitchEye = function (clsName) {
        // .eye-group input
        $(clsName+' .eye').click(function(){
            var eyenode = $(this);
            var inputnode = $(this).prev();
            if( eyenode.hasClass('on') ){
                inputnode.attr('type', 'password');
                eyenode.removeClass('on');
                eyenode.addClass('off');
            }else{
                inputnode.attr('type', 'text');
                eyenode.removeClass('off');
                eyenode.addClass('on');
            }
        });
    };

    // 切换导航
    _this.switchNav = function () {

    };
    return _this;
})));
