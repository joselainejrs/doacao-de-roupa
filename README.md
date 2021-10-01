
<p align="center">
  <img  src="https://github.com/joselainejrs/doacao_roupa_PDI/blob/main/web/app/assets/img/logoBar.png" alt="Imagem">
</p>

<h4 align="center">
Project developed has as intention o apprenticeship from Framework AngularJS
</h4>

<h5 align="center">
 The idea is a site what centralize the ONGS and that they can get donation with clothes.
</h5>

## Installation

#### Web
```
$ npm install
```

######  Run the application
```
$ npm start
```
######  Run the Dependencies 
```
$ npm install angular-route
$ npm install --global http-server
$ npm install --save ngx-mask
$ npm install --save sweetalert2
```
## Description project

When starting the first page and Home, what contains active campaigns from ONGs access and the option de #IWantToHelp

Clicking menu have the option "How to help", has 3 forms to help ONGs
    
   - How to help (by payment);
   - Location (Open a map to Google from location of the ONGs) In progress :warning:;
   - Register (The ONGs can register to be found ).
   

Clicking at the button "IWantToHelp", o user can you see the options from values, clicking in the RadioButton and habilitado o input para seleciona ONG what wish help the payment is by QR Code `library used is qrcode.js`

To do login at the user click button what stay on the top bar. Need email is password registered.

Case not tenha access the ONGS can perform the registration. 

To filling in the data, exist an API that queries the address from CEP, Site `https://viacep.com.br/`.

The user cadastrado, have in the data saved in localStorage, is verified at login.

Case field is empty to button still disabled, when filling out, forget about a field, it has the border red.

### Expected to do project

https://user-images.githubusercontent.com/55799037/135692101-12454039-ebf5-48e3-926d-077e0fe9a261.mp4

<h4 align="center">
Project develop by: Joselaine Romão Soares
</h4>




