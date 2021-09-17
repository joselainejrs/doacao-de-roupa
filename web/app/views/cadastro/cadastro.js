'use strict';

angular.module('myApp.views.cadastro', ['ngRoute'])

    .controller('CadastroController', [function () {

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

    }]);