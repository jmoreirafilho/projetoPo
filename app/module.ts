/// <reference path="app.d.ts" />

var app = angular.module('Blank', ['ui.router'
                                        ,'pascalprecht.translate'
                                        ,'toastr'
                                        ,'angularNotify'
                                        ,'ui.mask'
                                        ,'angularMoment'
                                        ,'googlechart'
                                        , 'ngSanitize'], function($compileProvider){
})

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

var maskedInputValidation = function (value) {
    var dateMoment: any = moment(value, 'DDMMYYYY');
    return dateMoment.isValid() 
};
$.extend(true, $.fn.form.settings.rules, {maskDate: maskedInputValidation});
