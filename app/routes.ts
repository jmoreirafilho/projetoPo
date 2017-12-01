/// <reference path="app.d.ts" />

module Blank {

	app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        
        $stateProvider
        .state('login', {
        	url: '/login',
        	controller:'LoginController',
        	controllerAs: 'ctrl',
        	templateUrl: 'assets/pages/templates/login.tpl.html'
        })
		;
    });
    
}