'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.views.home',
  'myApp.views.cadastro',
  'myApp.diretiva.bar',
  'myApp.diretiva.card',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controllerAS:'wm',
    controller: 'HomeController'
  }),
  $routeProvider.when('/cadastro', {
    templateUrl: 'views/cadastro/cadastro.html',
    controllerAS:'wm',
    controller: 'CadastroController'
  }),
  $routeProvider.when('/bar', {
    templateUrl: 'diretiva/bar/bar.html',
    controllerAS:'wm',
    controller: 'BarController'
  }),
  $routeProvider.when('/card', {
    templateUrl: 'diretiva/card/card.html',
    controllerAS:'wm',
    controller: 'CardController'
  }),

  $routeProvider.otherwise({redirectTo: '/home'});
}]);

