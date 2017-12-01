/// <reference path="../../app.d.ts" />

module Blank {

    export class LockpageDirective implements ng.IDirective {

        public restrict: string = 'E';
        public templateUrl: string = 'assets/pages/templates/lockpage.tpl.html';
        
        constructor(private $http: ng.IHttpService, 
                    private $generalParams:GeneralParams,
                    private $translate: ng.translate.ITranslateService,
                    private $toastr: any) {

        }

        public static factory($http: ng.IHttpService, 
                              $generalParams:GeneralParams,
                              $translate: ng.translate.ITranslateService,
                              $toastr: any): LockpageDirective {
            return new LockpageDirective($http, $generalParams, $translate, $toastr);
        }

        public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: any, attrs: any) => {
            scope['show'] = (): boolean => {
                if (this.$http.pendingRequests.length > 0) {
                    return true;
                } else {
                    return false;
                }

            }

            this.$http.get(this.$generalParams.baseUrl + '/home').then(()=> {}, () => {
                this.$toastr.error(this.$translate.instant('SERVER_NOT_FOUND'), this.$translate.instant('ERRO'), { closeButton: true });
            }); 
        }

    }

}

app.directive('lockpage', ['$http', 'GeneralParams', '$translate', 'toastr', Blank.LockpageDirective.factory]);