'use strict';

angular.module('myApp.src.views.home', ['ngRoute',])


// tela de card
.directive('cardDirective', [function (){
    return{
        templateUrl: 'src/diretiva/card/card.html'
    };
}])

// controller da home
.controller('HomeController', [function() {

}]);