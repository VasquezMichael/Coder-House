const butomsAdd = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody');
let carrito = [];

butomsAdd.forEach((element) => {
  element.addEventListener('click', addToCarritoItem);
});

function addToCarritoItem(e) {
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
}

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
}

/*buttomPay.addEventListener('click', () => {
  alert('Total a pagar: ' + total);
});*/
