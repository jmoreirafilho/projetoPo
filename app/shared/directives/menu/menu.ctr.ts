/// <reference path="../../../app.d.ts" />

module Blank {

    export class MenuController {

        private versaoSistema: string = this.generalParams.versaoSistema;
        private menusApp: any[];
        private usuario: any = {};

        constructor(private $scope: ng.IScope,
                    private $http: ng.IHttpService,
                    private generalParams: GeneralParams,
                    private $timeout: ng.ITimeoutService,
                    private $menuService: MenuService,
                    private $location: any) {
            this.getMenusApp();
        }

        public popup(): void {
            var avatar: any = angular.element('.ui.avatar.computer');
            avatar.popup({
                popup: angular.element('.ui.flowing.popup'),
                position: 'bottom right',
                hoverable: 'true',
                inverted: 'true'
            })
        }
        
        public accordion(): void {
            var mobileSubmenu: any = angular.element('.ui.accordion');
            mobileSubmenu.accordion();
        }

        private getMenusApp():void {
            if (sessionStorage.userCurrent) {
                this.usuario = angular.fromJson(sessionStorage.userCurrent);
            }
            
            if (sessionStorage.menu) {
                this.menusApp = angular.fromJson(sessionStorage.menu);
                this.setupMenu();
            } else {
                this.$menuService.mountMenu().then((response) => {
                    this.menusApp = response.data;
                    sessionStorage.menu = angular.toJson(response.data);
                    this.setupMenu();
                });
            }
        }

        public logout(): void {
            sessionStorage.removeItem("menu");
            sessionStorage.removeItem("userCurrent");

            this.$http({
                method: 'POST',
                url: this.generalParams.baseUrl+'/logout'
            }).then(() => {
                window.location.href = document.location.pathname;
            });

        }

        public changeRouter(action: any, containsMenu: boolean):void {
            if (containsMenu) {
                return;
            }

            if (action) {                
                this.$location.path(action);
            }
        }

        private setupMenu(): void {
             this.$timeout(() => {
                var drop: any = angular.element('.ui.dropdown');

                drop.dropdown({
                    on: 'hover'
                });  

                this.popup();
                this.accordion();

                var item: any = angular.element('.subMenu');
                var s: any = angular.element('.ui.sidebar');
                item.click(() => {
                    s.sidebar('hide');
                });
            });
        }
    }

}

app.controller('MenuController', ['$scope', '$http', 'GeneralParams', '$timeout', 'MenuService', '$location', Blank.MenuController]);