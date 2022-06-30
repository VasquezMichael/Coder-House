const tbody = document.querySelector('.tbody');
const modalBody = document.querySelector('.modal-body');
const buttonEfectivo = document.querySelector('.button-pay-efectivo');
const buttonTarjeta = document.querySelector('.button-pay-tarjeta');
let carrito = [];

const addToCarritoItem = (e) => {
  const button = e.target;
  const item = button.closest('.card');
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  const newItem = {
    title: itemTitle,
    price: itemPrice,
    img: itemImg,
    cant: 1,
  };

  addItemCarrito(newItem);
};

function addItemCarrito(newItem) {
  const inputElement = tbody.getElementsByClassName('Input-value');
  for (let index = 0; index < carrito.length; index++) {
    if (carrito[index].title.trim() === newItem.title.trim()) {
      carrito[index].cant++;
      //const inputValue = inputElement[index];
      // inputValue.value++;
      inputElement[index].value++;
      precioTotal();
      return null;
    }
  }

  const addAlert = document.querySelector('.addAlert');
  setTimeout(() => {
    addAlert.classList.add('addAlert');
  }, 1000);
  addAlert.classList.remove('addAlert');

  carrito.push(newItem);
  renderCarrito();
}

function renderCarrito() {
  tbody.innerHTML = '';
  carrito.map((item) => {
    const tr = document.createElement('tr');
    tr.classList.add('ItemCarrito');
    const content = `
  
        <th scope="row">1</th>
        <td class="table__productos">
            <img src=${item.img} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__precio">
            <p>${item.price}</p>
        </td>
        <td class="table__cantidad">
            <input type="number" min="1" value=${item.cant} class ="Input-value">
            <button class="delete btn btn-danger">x</button>
        </td>
      
      `;
    tr.innerHTML = content;
    tbody.appendChild(tr);
    tr.querySelector('.delete').addEventListener('click', removeItemCarrito);
    tr.querySelector('.Input-value').addEventListener(
      'change',
      modificarCantidad
    );
  });
  precioTotal();
}

function precioTotal() {
  let total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal');
  console.log(itemCartTotal);
  carrito.forEach((element) => {
    const precio = parseInt(element.price.replace('$', ''));
    total = total + precio * element.cant;
  });

  itemCartTotal.innerHTML = `Total $${total}`;
  addLocalStorage();
}

function removeItemCarrito(e) {
  const buttomDelete = e.target;
  //obtenemos el componente padre del boton
  const tr = buttomDelete.closest('.ItemCarrito');
  const title = tr.querySelector('.title').textContent;
  carrito.forEach((element) => {
    if (element.title.trim() === title.trim()) {
      carrito.splice(carrito.indexOf(element), 1);
    }
  });
  tr.remove();
  //Una vez que removemos un elemento devemos volver a calcular el total
  precioTotal();

  const removeAlert = document.querySelector('.removeAlert');
  setTimeout(() => {
    removeAlert.classList.add('removeAlert');
  }, 1000);
  removeAlert.classList.remove('removeAlert');
}

function modificarCantidad(e) {
  const inputModificador = e.target;
  const tr = inputModificador.closest('.ItemCarrito');
  const title = tr.querySelector('.title').textContent;
  carrito.forEach((element) => {
    if (element.title.trim() === title.trim()) {
      if (inputModificador.value < 1) inputModificador.value = 1;
      element.cant = inputModificador.value;
      precioTotal();
    }
  });
}

function addLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function armarStringResumen() {
  resumen = resumen + document.querySelector('.itemCartTotal').innerHTML;
  return resumen;
}

const armarResumen = () => {
  const mostrarResumen = modalBody.querySelector('.resumen');

  mostrarResumen.innerHTML = '';
  carrito.forEach((element) => {
    const p = document.createElement('p');
    const resumen = `
        <p>${element.cant}x ${element.title} <br> </p>
    `;
    p.innerHTML = resumen;
    mostrarResumen.appendChild(p);
  });
  const montoTotal = document.createElement('p');
  montoTotal.innerHTML =
    '<hr>' + document.querySelector('.itemCartTotal').innerHTML;
  mostrarResumen.appendChild(montoTotal);
};

//Manejador de eventos para los botones de Efectivo y Tarjeta
buttonEfectivo.addEventListener('click', () => {
  Object.values(buttonEfectivo.classList).includes('btn-success')
    ? (buttonEfectivo.classList.remove('btn-success'),
      buttonEfectivo.classList.add('btn-secondary'))
    : (buttonEfectivo.classList.remove('btn-secondary'),
      buttonEfectivo.classList.add('btn-success'));
});

buttonTarjeta.addEventListener('click', () => {
  Object.values(buttonTarjeta.classList).includes('btn-success')
    ? (buttonTarjeta.classList.remove('btn-success'),
      buttonTarjeta.classList.add('btn-secondary'))
    : (buttonTarjeta.classList.remove('btn-secondary'),
      buttonTarjeta.classList.add('btn-success'));
});

window.onload = function () {
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if (storage) {
    carrito = storage;
    renderCarrito();
  }
};

export { addToCarritoItem, armarResumen };
