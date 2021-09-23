'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.src.views.home',
  'myApp.src.views.login',
  'myApp.src.views.cadastro',
  'myApp.src.diretiva.bar',
  'myApp.src.diretiva.card',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider, $rootScope, $route, $routeParams, $location) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
    templateUrl: 'src/views/home/home.html',
    controllerAS:'wm',
    controller: 'HomeController'
  }),
  $routeProvider.when('/cadastro', {
    templateUrl: 'src/views/cadastro/cadastro.html',
    controllerAS:'wm',
    controller: 'CadastroController'
  }),
  $routeProvider.when('/login', {
    templateUrl: 'src/views/login/login.html',
    controllerAS:'wm',
    controller: 'LoginController'
  }),
  $routeProvider.when('/bar', {
    templateUrl: 'src/diretiva/bar/bar.html',
    controllerAS:'wm',
    controller: 'MenuController'
  }),
  $routeProvider.when('/card', {
    templateUrl: 'src/diretiva/card/card.html',
    controllerAS:'wm',
    controller: 'CardController'
  }),

  $routeProvider.otherwise({redirectTo: '/home'});
}])

// tela de bar
.directive('barDirective', [function (){
    return{
        templateUrl: 'src/diretiva/bar/bar.html'
    }


}]);

