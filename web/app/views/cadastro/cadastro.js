'use strict';

// const { initialConfig } = require("ngx-mask");

angular.module('myApp.views.cadastro', ['ngRoute'])

    .controller('CadastroController', ['$scope', function ($scope) {

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
                .catch(e => console.log)
        });
        //FIM da chamada de Api de CEP

        // //salvar dados no localStorage
        // $scope.save = function(){
        //     //obter caixa de entrada do formulário de dados
        //     var new_data = document.getElementById('nome').value

        //     //se não houver nada salvo no início, salve um array vazio
        //     if(localStorage.getItem('data') == null){
        //         localStorage.setItem('data', '[]');
        //     }

        //     //obter dados antigos e aplicá-los aos novos dados
        //     var old_data = JSON.parse(localStorage.getItem('data'));
        //     old_data.push(new_data);

        //     //salve os dados antigos + novos no armazenamento local
        //     localStorage.setItem('data', JSON.stringify(old_data));
        // }

        //Um novo modelo para salvar dados loccalStorage

        $scope.save = function (e) {
            let formData = JSON.parse(localStorage.getItem('formData')) || [];

            //verificar caso já exista um cadastro na base 
            let exist = formData.length && JSON.parse(localStorage.getItem('formData'))
                .some(data => data.email.toLowerCase() == document.getElementById('email').value
                    .toLowerCase() && data.nome.toLowerCase() == document.getElementById('nome').value.toLowerCase());
                        
            if (!exist) {
                //passando os campo para localStorage
                formData.push({
                    nome: document.getElementById('nome').value,
                    email: document.getElementById('email').value,
                    senha: document.getElementById('senha').value,
                    cep: document.getElementById('cep').value,
                    logradouro: document.getElementById('logradouro').value,
                    bairro: document.getElementById('bairro').value,
                    numero: document.getElementById('numero').value,
                    localidade: document.getElementById('localidade').value
                });
                //armazena
                localStorage.setItem('formData', JSON.stringify(formData));
                console.log(localStorage.getItem('formData'))
            }else{
                // exibir o aviso caso o usuario já tenha cadastro
                alert(`Usuario já possui cadastro, no e-mail: ${JSON.stringify(email.value)}`)
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
            //não enviar evento
            e.preventDefault();
        }



    }]);