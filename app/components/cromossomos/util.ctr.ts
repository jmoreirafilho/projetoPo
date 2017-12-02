/// <reference path="../../app.d.ts" />

module Blank {

    export class UtilController {

    	private todasAsCidades:any = [];

        private todasAsDistancias:any = [];

        constructor(private $scope: ng.IScope,
                    private $service: UtilService) {
        }

        public inicializa():void {
        	this.$service.carregaCidades().then((response) => {
        		this.todasAsCidades = response.data;
        	});

        	this.$service.carregaDistancias().then((response) => {
        		this.todasAsDistancias = response.data;
        	});
        }

        
    }

}

app.controller('UtilController', ['$scope', 'UtilService', Blank.UtilController]);