/// <reference path="../../app.d.ts" />

module Blank {

    export class GeneralParams {

        public versaoSistema: string = "1.0.0";
        public baseUrl: string = "";
        public clientBaseUrl: string = "";

        constructor(private $window: ng.IWindowService,
            private $translate: ng.translate.ITranslateService,
            private $q: ng.IQService) {
            this.getUrl();
        }
        
        public getUrl(): void {
            var url = this.$window.location.href;
            var novaUrl = url.substring(0, url.indexOf("//") + 2);
            url = this.$window.location.href;
            url = url.substring(url.indexOf("//") + 2);
            novaUrl += url.substring(0, url.indexOf("/") + 1);
            this.clientBaseUrl = novaUrl;

            // Local
            novaUrl = novaUrl.substring(0, novaUrl.indexOf(":"+this.$window.location.port)) + ":8080/teia-rest";

            // Weblogic
            //novaUrl += "teia-rest";

            this.baseUrl = novaUrl;
        }
    }

}

app.service("GeneralParams", ['$window', '$translate', '$q', Blank.GeneralParams]);