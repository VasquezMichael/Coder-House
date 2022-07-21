const butomsAdd = document.querySelectorAll('.button');
const buttonBuy = document.querySelector('.button-buy');
const buttonRealizarPedido = document.querySelector('.button-realizar-pedido');
//const buttonEfectivo = document.querySelector('.button-pay-efectivo');
//const buttonTarjeta = document.querySelector('.button-pay-tarjeta');
//const tbody = document.querySelector('.tbody');

import { addToCarritoItem, armarResumen, realizarPedido } from './funciones.js';

//let carrito = [];
butomsAdd.forEach((element) => {
  element.addEventListener('click', addToCarritoItem);
});

buttonBuy.addEventListener('click', armarResumen);

buttonRealizarPedido.addEventListener('click', realizarPedido);
