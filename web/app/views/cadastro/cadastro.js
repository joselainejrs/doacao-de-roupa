'use strict';

angular.module('myApp.views.cadastro', ['ngRoute'])

.directive('barDirective', [function (){
    return{
        templateUrl: 'diretiva/bar/bar.html'
    };
}])

.controller('CadastroController', [function() {

}]);