'use strict';

angular.module('myApp.src.diretiva.bar', ['ngRoute',])


.controller('MenuController', ['$scope', '$location', function($scope, $location) {

    $scope.direcione = function(){
        $location.path('/login');
        // window.location.replace('/#!/login');
    }
}]);