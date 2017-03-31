var app=angular.module("Bday",["ui.router"]);
app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	$stateProvider
	    .state('login', {
			url : '/login',
	        templateUrl : 'pages/login/login.html',
	        controller : 'LoginCtrl'
	    })
	     .state('dashboard', {
            url : '/dashboard',
            templateUrl : 'pages/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
	    })
	      .state('dashboard.friends', {
            url : '/friends',
            templateUrl : 'pages/friends/friends.html',
            controller: 'friendcontroller',
	    })
	        .state('dashboard.fotos', {
            url : '/friends',
            templateUrl : 'pages/fotos/fotos.html'
	    })
	$urlRouterProvider.otherwise('/login');
}])