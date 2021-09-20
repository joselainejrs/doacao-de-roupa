'use strict';

angular.module('myApp.diretiva.bar', ['ngRoute'])


.controller('BarController', ['$scope','$location', function($scope, $location) {

    $scope.direcione = function (){
        $location.path('/#!/login');
        // window.location.replace('/#!/login');

    }

}]);