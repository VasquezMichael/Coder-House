function Tarjeta(titular, numero, fechaVencimiento, cvc, cuotas) {
  this.titular = titular;
  this.numero = numero;
  this.fechaVencimiento = fechaVencimiento;
  this.cvc = cvc;
  this.cuotas = cuotas;
}

function Celular(modelo, color, precio, marca) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.precio = precio;
}

function Compra(producto, cuotas, tarjeta, precio) {
  this.producto = producto;
  this.fecha = new Date().toLocaleDateString();
  this.tarjeta = tarjeta;
  this.cuotas = cuotas;
  this.total = cuotas + 'x ' + '$ ' + precio;
}

function calcularInteres(cuotas, precio) {
  let final;
  if (cuotas <= 3) {
    final = precio;
  } else {
    final = precio + (precio * 3) / 100;
  }
  return final;
}

function imprimirProducto(prod) {
  console.log(
    'Marca: ' +
      prod.marca +
      ', Modelo: ' +
      prod.modelo +
      ', Color:' +
      prod.color +
      ', Precio: $' +
      prod.precio
  );
}

function listarProductos() {
  productos.forEach((element) => {
    console.log(element);
  });
}

function cargarDatosTarjeta() {
  let titular = prompt('Ingrese el titular de la tarjeta: ');
  let numero = prompt('Ingrese el numero de la tarjeta: ');
  let vencimiento = prompt('Ingrese la fecha de vencimiento: ');
  let cvc = prompt('Ingrese el cvc: ');
  let cuotas = parseInt(
    prompt('Ingrese la cantidad de cuotas, con maximo de 12: ')
  );
  let tarjeta = new Tarjeta(titular, numero, vencimiento, cvc, cuotas);
  return tarjeta;
}

function imprimirResumen(compra) {
  console.log(
    'Producto: ' +
      compra.producto +
      ', tarjeta: ' +
      compra.tarjeta +
      ', total: ' +
      compra.total
  );
}

let productos = [
  (cel1 = {
    marca: 'Samsung',
    modelo: 'A21s',
    color: 'blanco, negro ó azul',
    precio: 31.399,
  }),
  (cel2 = {
    marca: 'Iphone',
    modelo: '11 pro',
    color: 'blanco, negro ó azul',
    precio: 178.299,
  }),
  (cel3 = {
    marca: 'Motorola',
    modelo: 'Moto Z Play',
    color: 'blanco, negro ó azul',
    precio: 30.299,
  }),
];

let colores = ['blanco', 'negro', 'azul'];
let ok = true;

//Inicia el ingreso de datos.

listarProductos();
let selec = prompt(
  'Seleccione un producto:\n 1) Samsung A21s\n 2) Iphone 11 pro\n 3) Motorola Moto Z Play'
);
let celular = productos[selec - 1];

let color = prompt('Describa un color: ');
while (ok) {
  if (colores.includes(color)) {
    celular.color = color;
    ok = false;
  } else {
    color = prompt(
      'El color ingresado no esta disponible. Ingrese otro, por favor:'
    );
  }
}

console.log('');
console.log('Producto seleccionado: ');
imprimirProducto(celular);
console.log('');

console.log('A continuacion ingrese los datos de la tarjeta: ');
let tarjeta = cargarDatosTarjeta();
console.log('');
let compra = new Compra(
  celular.modelo,
  tarjeta.cuotas,
  tarjeta.numero,
  parseFloat(calcularInteres(tarjeta.cuotas, celular.precio) / tarjeta.cuotas)
);
console.log('Resumen de compra: ');
imprimirResumen(compra);
