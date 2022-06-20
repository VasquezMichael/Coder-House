let total = 0;
let butomsAdd = Array.from(document.getElementsByClassName('button-add'));
let buttomPay = document.getElementById('pay');

butomsAdd.forEach((element) => {
  element.addEventListener('click', () => {
    total += 500;
    buttomPay.innerHTML = `Pagar $${total}`;
  });
});

buttomPay.addEventListener('click', () => {
  alert('Total a pagar: ' + total);
});
