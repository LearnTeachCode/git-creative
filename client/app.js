angular.module("gitCreative", ['ui.router']) // gitCreative must match ng-app in index.html else injection error

// look up ui.router vs ngRouter


.config(function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
  });

});