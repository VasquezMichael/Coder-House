const butomsAdd = document.querySelectorAll('.button');
const buttonBuy = document.querySelector('.button-buy');
const buttonEfectivo = document.querySelector('.button-pay-efectivo');
const buttonTarjeta = document.querySelector('.button-pay-tarjeta');
//const tbody = document.querySelector('.tbody');

import { addToCarritoItem, armarResumen } from './funciones.js';

//let carrito = [];
butomsAdd.forEach((element) => {
  element.addEventListener('click', addToCarritoItem);
});

buttonBuy.addEventListener('click', armarResumen);
