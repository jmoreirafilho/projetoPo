/// <reference path="app.d.ts" />

module Blank {

	app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/algoritmoGenetico');
        
        $stateProvider
        .state('algoritmoGenetico', {
        	url: '/algoritmoGenetico',
        	templateUrl: 'assets/pages/templates/algoritmoGenetico.tpl.html'
        })
		;
    });
    
}