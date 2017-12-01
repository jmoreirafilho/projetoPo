/// <reference path="../../app.d.ts" />

module Blank {

    export class LoginController {

        private versaoSistema: string = this.generalParams.versaoSistema;
        private baseUrl: string = this.generalParams.baseUrl;
        public versions: any = [];
        private version: any = {};

        constructor(private $scope: ng.IScope,
                    private generalParams: GeneralParams,
                    private $timeout: ng.ITimeoutService,
                    private $http: ng.IHttpService,
                    private $loginService: LoginService,
                    private $location: any) {

            this.$scope.version = null;

            if (typeof sessionStorage.dashboardPath !== 'undefined') {
                window.location.href = "#!/home";
            }
        }

        public listVersions = () => {
            this.$loginService.getVersions().then((response) => {
                this.versions = response.data;
                this.$scope.versions = response.data;
            });
        }

        public submitLogin = () => {
            if (this.$scope.version !== null) {
                this.$loginService.submitLogin(this.$scope.version).then((response) => {
                    if (response.data.authenticated) {
                        sessionStorage.userCurrent = angular.toJson(response.data);
                        window.location.href = "#!/home";
                    }
                });
            }
        }
    }

}

app.controller('LoginController', ['$scope', 'GeneralParams', '$timeout', '$http', 'LoginService', '$location', Blank.LoginController]);