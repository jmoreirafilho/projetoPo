/// <reference path="../../app.d.ts" />

module Blank {

    export class LoginService {
        constructor(private $http: ng.IHttpService,
            private $generalParams: GeneralParams,
            private $q: ng.IQService) {
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
app.service('LoginService', ['$http', 'GeneralParams', '$q', Blank.LoginService]);