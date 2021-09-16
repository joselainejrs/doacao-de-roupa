'use strict';

angular.module('myApp.views.home', ['ngRoute',])


// tela de card
.directive('cardDirective', [function (){
    return{
        templateUrl: 'diretiva/card/card.html'
    };
}])

// controller da home
.controller('HomeController', [function() {

}]);