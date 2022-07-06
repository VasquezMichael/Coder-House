function renderProductos() {
  console.log(fetch('productos.json'));
}

renderProductos();
/*
function renderProductos() {
  const xhr = new XMLHttpRequest();

  // abrimos la conexion
  xhr.open('GET', 'productos.json', true);

  //al cargar la pagina
  xhr.onload = function () {
    //404 = no ha sido encontrada
    //403 = prohibida
    //200 = ha sido encontrada

    if (this.status === 200) {
      console.log('todo ok');
    } else {
      console.log('hay error');
    }
  };

  xhr.send();
}*/
