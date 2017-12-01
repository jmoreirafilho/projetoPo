/// <reference path="../../../app.d.ts" />

module Blank {

    export class MenuDirective implements ng.IDirective {

        public restrict: string = 'E';
        public templateUrl: string = 'assets/pages/templates/menu.tpl.html';

        constructor(private $http: ng.IHttpService) {
            
        }

        public static factory($http: ng.IHttpService): MenuDirective {
            return new MenuDirective($http);
        }

        public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element, attrs: any, ctrl: ng.INgModelController) => {
            setTimeout(() => {
                angular.element('.ui.dropdown').dropdown({
                    on: 'hover'
                });  

                scope.popup();
                scope.accordion();

                angular.element('.subMenu').click(() => {
                    angular.element('.ui.sidebar').sidebar('hide');
                });
            });

            scope.popup = (): void => {
                var avatar: any = angular.element('.ui.avatar.computer');
                avatar.popup({
                    popup: angular.element('.ui.flowing.popup'),
                    position: 'bottom right',
                    hoverable: 'true',
                    inverted: 'true'
                })
            };

            scope.accordion = (): void => {
                angular.element('.ui.accordion').accordion();
            };
        };
    }

}

app.directive('menu', ['$http', Blank.MenuDirective.factory]);