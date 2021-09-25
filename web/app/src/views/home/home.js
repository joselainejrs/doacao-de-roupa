'use strict';

angular.module('myApp.src.views.home', ['ngRoute',])

// componente da tela do  card
.directive('cardDirective', [function (){
    return{
        templateUrl: 'src/diretiva/card/card.html'
    };
}])

// controller da home
.controller('HomeController', ['$scope', '$location', function($scope, $location) {

    $scope.direcione = function(){
        $location.path('/queroAjudar');
        // window.location.replace('/#!/login');
    }

}]);