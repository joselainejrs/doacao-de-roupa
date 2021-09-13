'use strict';

angular.module('myApp.views.home', ['ngRoute'])

// tela de bar
.directive('barDirective', [function (){
    return{
        templateUrl: 'diretiva/bar/bar.html'
    };
}])

// tela de card
.directive('cardDirective', [function (){
    return{
        templateUrl: 'diretiva/card/card.html'
    };
}])

// controller da home
.controller('HomeController', [function() {

}]);