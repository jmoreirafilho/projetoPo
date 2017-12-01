/// <reference path="../../app.d.ts" />

module Blank {

    export class Dashboard implements ng.IDirective {

        public templateUrl: string = 'assets/pages/templates/dashboard.tpl.html';

        constructor() {

        }

        public static factory(): Dashboard {
            return new Dashboard();
        }
    }

}

app.directive('dashboard', [Blank.Dashboard.factory]);