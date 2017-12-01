/// <reference path="../../app.d.ts" />

module Blank {

    export abstract class GenericService {

        private url: String;
        private http: ng.IHttpService;
        private generalParams: GeneralParams;
        private q: ng.IQService;

        constructor($http: ng.IHttpService, $generalParams: GeneralParams,
            $q: ng.IQService, $url: String) {
            this.url = $url;
            this.http = $http;
            this.generalParams = $generalParams;
            this.q = $q;
        }

        public save(data: any): ng.IPromise<any> {
            var defer = this.getQ().defer();
            this.http.put(this.baseUrl()+"/save", data).then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });
            
            return defer.promise;
        }

        public update(data: any): ng.IPromise<any> {
            var defer = this.getQ().defer();
            this.http.post(this.baseUrl()+"/update", data).then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });
            
            return defer.promise;
        }

        public deleteBy(entity: any): ng.IPromise<any> {
            var defer = this.getQ().defer();
            this.http.post(this.baseUrl()+"/delete", entity).then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });
            
            return defer.promise;
        }
        
        public findBy(id: Number): ng.IPromise<any> {
            var defer = this.getQ().defer();
            this.http.get(this.baseUrl()+"/find/"+id).then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });
            
            return defer.promise;
        }

        public findAll(): ng.IPromise<any> {
            var defer = this.getQ().defer();
            this.http.get(this.baseUrl()+"/findAll").then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });
            
            return defer.promise;
        }

        public filter(filter: any): ng.IPromise<any> {
            var defer = this.getQ().defer();
            this.http.post(this.baseUrl()+"/filter",filter).then((response) => {
                defer.resolve(response);
            }, (errResponse) => {
                defer.reject(errResponse);
            });
            
            return defer.promise;
        }

        public downloadFile(id: Number): ng.IPromise<any> {
            if (this.isDownloadFile()) {
                var defer = this.getQ().defer();
                this.http.get(this.baseUrl()+"/download-file/"+id).then((response) => {
                    defer.resolve(response);
                }, (errResponse) => {
                    defer.reject(errResponse);
                });
                
                return defer.promise;
            }

            return {} as ng.IPromise<any>;
        }

        public isDownloadFile(): boolean {
            return false;
        }

        public baseUrl(): String {
            return this.generalParams.baseUrl+ this.url;
        }

        public getQ(): ng.IQService {
            return this.q;
        }

        public getHttp(): ng.IHttpService {
            return this.http;
        }

        public getUrl(): String {
            return this.url;
        }

        public getGeneralParams(): GeneralParams {
            return this.generalParams;
        }
    }
}

app.service("GenericService", ['$http', 'GeneralParams', '$q', Blank.GenericService]);