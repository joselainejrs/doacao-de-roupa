'use strict';

// const { initialConfig } = require("ngx-mask");

angular.module('myApp.src.views.cadastro', ['ngRoute'])

    .controller('CadastroController', ['$scope', function ($scope) {

        $scope.disabledButton = true;

        $scope.nome = document.getElementById('nome').value,
            $scope.email = document.getElementById('email').value,
            $scope.senha = document.getElementById('senha').value,
            $scope.cep = document.getElementById('cep').value,
            $scope.logradouro = document.getElementById('logradouro').value,
            $scope.bairro = document.getElementById('bairro').value,
            $scope.numero = document.getElementById('numero').value,
            $scope.localidade = document.getElementById('localidade').value,
            $scope.mensagem = document.getElementById('mensagem').style.backgroundColor = 'grey';

        //icon que exibe ou não a senha
        $scope.icon = function () {
            var tipo = document.getElementById("senha");
            if (tipo.type == "password") {
                tipo.type = "text"
            } else {
                tipo.type = "password"
            }
        }
        //INICIO da chamada de Api de CEP
        const cepSelect = document.querySelector('input[name=cep]')

        const datas = (result) => {
            for (const campo in result) {
                if (document.querySelector("#" + campo)) {
                    document.querySelector("#" + campo).value = result[campo]
                }
            }
        }
        cepSelect.addEventListener('blur', (e) => {

            
            // if(!checkchar(e)){
            //     e.preventDefault
            // }

            // passando os valores para pega a API de CEP
            let cep = cepSelect.value.replace("-", "")
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            }

            fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
                .then(res => {
                    res.json()
                        .then(data => datas(data))
                })
                .catch(e => console.log);
        });
        //FIM da chamada de Api de CEP

        //evitar caracteres especias digitados
        // function checkchar(e){
            
        //     const formataCep = String.fromCharCode(e.keyCode);
   
        //     pattern = '[0-9]+$'

        //     if(char.match(pattern)){
        //         console.log(formataCep);
        //         return true;
        //     }
        // }

        $scope.validaCampo = function () {
            if (
                (
                    document.getElementById('nome').value &&
                    document.getElementById('email').value &&
                    document.getElementById('senha').value &&
                    document.getElementById('cep').value &&
                    document.getElementById('logradouro').value &&
                    document.getElementById('bairro').value &&
                    document.getElementById('numero').value &&
                    document.getElementById('localidade').value
                ) == "") {
                $scope.disabledButton = true;
                $scope.mensagem = document.getElementById('mensagem').style.backgroundColor = 'grey';
            } else {
                $scope.disabledButton = false;
                $scope.mensagem = document.getElementById('mensagem').style.backgroundColor = '#7433FF';
            }
        }


        //INICIO salvar dados no localStorage
        $scope.save = function (e) {
            let formData = JSON.parse(localStorage.getItem('formData')) || [];

            //verificar caso já exista um cadastro na base 
            let exist = formData.length && JSON.parse(localStorage.getItem('formData'))
                .some(data => data.email.toLowerCase() == document.getElementById('email').value
                    .toLowerCase() && data.nome.toLowerCase() == document.getElementById('nome').value.toLowerCase());

            if (!exist) {
                //passando os campo para localStorage
                formData.push({
                    nome: $scope.nome,
                    email: $scope.email,
                    senha: $scope.senha,
                    cep: $scope.cep,
                    logradouro: $scope.logradouro,
                    bairro: $scope.bairro,
                    numero: $scope.numero,
                    localidade: $scope.localidade
                });
                //armazena
                localStorage.setItem('formData', JSON.stringify(formData));
                console.log(localStorage.getItem('formData'))

                Swal.fire({
                    title: 'Obrigada por fazer parte dessa força!',
                    html:
                        '<img src="assets/img/logoBar.png" alt="Logo"/>' +
                        '<p>Cadastro realizado com sucesso!</p>',
                });

            } else {
                // exibir o aviso caso o usuario já tenha cadastro
                Swal.fire(`E-mail já cadastrado!`)

            }
            //FIM salvar dados no localStorage

            //ação do submit
            document.querySelector("form")
                .addEventListener("submit", e => {
                    //não envia o formulario
                    e.preventDefault()
                })

            //FIM
            //não enviar evento
            e.preventDefault();

        }



    }]);