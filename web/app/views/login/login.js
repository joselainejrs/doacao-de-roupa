'use strict';

angular.module('myApp.views.login', ['ngRoute'])

    .controller('LoginController', ["$scope", function ($scope) {
        if (localStorage.email) {
            document.getElementById('email').value = localStorage.email;
        }
        if (localStorage.senha) {
            document.getElementById('senha').value = localStorage.senha;
        }

        //INICIO

        // criação de alerta se caso não for preenchido os campos
        const fields = document.querySelectorAll("[required]")

        // console.log(fields)
        function validation(e) {
            //pega dados e valia
            const field = e.target

            // console.log(field.validity )

            //logica para verificar se existe outro erros a não ser o "que foi customizado" 
            //-- declarando uma função
            function verificarErros() {
                // ao iniciar 
                let erro = false;

                //verificar se há realmente um erro (valida por elemento)
                for (let error in field.validity) {
                    //se não for customError
                    //então verifica se tem erro e também verificar se o validity é verdadeiro
                    if (error != "customError" && field.validity[error]) {
                        //se tem erro -- exibe(true) e mostre o nome do erro
                        erro = error;
                    }
                }
                return erro;
            }
            //executando 
            const error = verificarErros()
            console.log("Error Exists:", error);

            if (error) {
                //trocar a mensagens de required
                field.setCustomValidity("Esse campo é obrigatório");
            } else {
                //trocar a mensagens de required
                field.setCustomValidity("");
            }

        }

        for (let field of fields) {
            // passa o validation dentro do for
            field.addEventListener("invalid", validation)
        }

        //ação do submit
        document.querySelector("form")
            .addEventListener("submit", e => {
                console.log("enviar p formulario")
                //não envia o formulario
                e.preventDefault()
            })

        //FIM
    }]);