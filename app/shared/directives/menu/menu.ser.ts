/// <reference path="../../../app.d.ts" />

module Blank {

    export class MenuService {
        constructor(private $http: ng.IHttpService,
            private $generalParams: GeneralParams,
            private $q: ng.IQService) {
        }

        public mountMenu(): ng.IPromise<any> {
            var defer = this.$q.defer();
            this.$http.get("/jsons/menu.json").then(function(response) {
                defer.resolve(response);
            }, function(errResponse) {
                defer.reject(errResponse);
            });
            
            return defer.promise;
        }
    }
}
app.service('MenuService', ['$http', 'GeneralParams', '$q', Blank.MenuService]);