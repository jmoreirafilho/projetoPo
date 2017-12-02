/// <reference path="../../app.d.ts" />

module Blank {

    export class UtilService {

        constructor(private $http: ng.IHttpService,
            private $generalParams: GeneralParams,
            private $q: ng.IQService) {
        }

        public carregaCidades(): ng.IPromise<any> {
            var defer = this.$q.defer();
            this.$http.get("/jsons/cidades.json").then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });

            return defer.promise;
        }

        public carregaDistancias(): ng.IPromise<any> {
            var defer = this.$q.defer();
            this.$http.get("/jsons/distancias.json").then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });

            return defer.promise;
        }
    }
}
app.service('UtilService', ['$http', 'GeneralParams', '$q', Blank.UtilService]);