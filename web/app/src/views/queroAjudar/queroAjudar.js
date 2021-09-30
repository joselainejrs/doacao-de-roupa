'use strict';


angular.module('myApp.src.views.queroAjudar', ['ngRoute'])

    .controller('QueroAjudarController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.disabledButton = true;

        $scope.hp = document.getElementById('hp').style.backgroundColor = 'grey';


        //Caso o usuario selecione o radio button habilita o select, para escolher a ongs
        //valida input se o preencimento estiver vazio
        $rootScope.valorOfertado = function (id) {
           let input =  document.getElementById(id)
           input.addEventListener('blur', function () {
                    document.querySelector('.select-ajuda')
                        .classList.toggle('hide2')
                });

            if (id.value) {
                $scope.disabledButton = true;
                $scope.hp = document.getElementById('hp').style.backgroundColor = 'grey';
            } else {
                $scope.disabledButton = false;
                $scope.hp = document.getElementById('hp').style.backgroundColor = '#0261FF';
                habilitarPagamento();
            }
            function habilitarPagamento() {
                document.querySelector('button[type="submit"]')
                    .addEventListener('click', function (e) {
                        document.querySelector('.campo-pagamento')
                            .classList.toggle('hide')
                        e.preventDefault();
                    })
            }

            id.preventDefault();
        }

        //habilitar e chamar QR code 1 chamada
        $scope.habilitarQrCodeChamada1 = function () {
            document.querySelector('.pagar').addEventListener('click', function () {
                var nome_qr = document.getElementById('nome').value;
                var email_qr = document.getElementById('email').value;

                document.querySelector('#qrcode').innerHTML = ''

                var qrcode = new QRCode(document.querySelector('#qrcode'), {
                    text: `${nome_qr && email_qr}`,
                    colorDark: `black`,
                    colorLight: `white`,

                    correctLevel: QRCode.CorrectLevel.H
                })
                qrcode.makeCode();
            })
        }
    }]);