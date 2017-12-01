/// <reference path="../../app.d.ts" />

module Blank {

    export class DashboardService {
        constructor(private $http: ng.IHttpService,
            private $generalParams: GeneralParams,
            private $q: ng.IQService) {
        }

        public getIndicator(): ng.IPromise<any> {
            var defer = this.$q.defer();
            if (typeof sessionStorage.dashboardData === 'undefined') {
                this.$http.get("indicadores.json").then((response) => {
                    defer.resolve(response);
                }, (errResponse) => {
                    defer.reject(errResponse);
                });
            } else {
                defer.resolve(angular.fromJson(sessionStorage.dashboardData).data);
            }

            return defer.promise;
        }

        public getDetail(parent:any, detail:any): ng.IPromise<any> {
            var defer = this.$q.defer();
            // Busca pelos filhos do data
            // this.$http.post('url_da_query_para_buscar_filhos')

            // Afilia o pai, dentro do detalhe
            detail.parent = parent;

            defer.resolve(detail);

            // Define o detalhe como sendo o dashboardData da sessionStorage
            // sessionStorage.dashboardData = angular.toJson(detail);

            // Devido o mock, retorno o proprio conteudo, que ja está carregado
            return defer.promise;
        }

        public getCurrentUser(): ng.IPromise<any> {
            var defer = this.$q.defer();
            this.$http.get(this.$generalParams.baseUrl+'/login/getCurrentUser')
            .then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });

            return defer.promise;
        }

        public getVersions(): ng.IPromisse<any> {
            var defer = this.$q.defer();
            this.$http.get(this.$generalParams.baseUrl+'/query/VERSION_SYSTEM')
            .then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });

            return defer.promise;
        }

        public submitLogin(version: any) {
            var defer = this.$q.defer();
            this.$http({
                method: 'POST',
                url: this.$generalParams.baseUrl+'/login/',
                headers: {'Content-Type': 'application/json'},
                data: {"version":  version}
            }).then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });

            return defer.promise;
        }
    }
}
app.service('DashboardService', ['$http', 'GeneralParams', '$q', Blank.DashboardService]);