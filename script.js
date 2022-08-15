let selectedDish = [];
let selectedDrink = [];
let selectedDessert = [];

function selectDish(option) {
    if (selectedDish[2] !== undefined) {
        selectedDish[2].classList.remove('is-selected');
    }

    option.classList.add('is-selected');

    if (selectedDrink[2] !== undefined && selectedDessert[2] !== undefined) {
        activateFooterBtn();
    }

    selectedDish = [document.querySelector('.dishes .is-selected h3'), document.querySelector('.dishes .is-selected span'), document.querySelector('.dishes .is-selected')];

    console.log(selectedDish);
}

function selectDrink(option) {
    if (selectedDrink[2] !== undefined) {
        selectedDrink[2].classList.remove('is-selected');
    }

    option.classList.add('is-selected');

    if (selectedDish[2] !== undefined && selectedDessert[2] !== undefined) {
        activateFooterBtn();
    }

    selectedDrink = [document.querySelector('.drinks .is-selected h3'), document.querySelector('.drinks .is-selected span'), document.querySelector('.drinks .is-selected')];
}

function selectDessert(option) {
    if (selectedDessert[2] !== undefined) {
        selectedDessert[2].classList.remove('is-selected');
    }

    option.classList.add('is-selected');

    if (selectedDish[2] !== undefined && selectedDrink[2] !== undefined) {
        activateFooterBtn();
    }

    selectedDessert = [document.querySelector('.desserts .is-selected h3'), document.querySelector('.desserts .is-selected span'), document.querySelector('.desserts .is-selected')];
}

function activateFooterBtn() {
    const btn = document.querySelector('footer .c-btn');
    btn.innerHTML = 'Fechar pedido';
    btn.classList.add('c-btn-active');
}
let total = 0;

function checkRequest() {
    const ready = document.querySelector('.c-btn-active');

    if (ready !== null) {
        const confirmation = document.querySelector('.confirmation');
        confirmation.classList.toggle('is-disabled');
        
        const displayedDish = [document.querySelector('.confirmation--food p:first-child'), document.querySelector('.confirmation--food p:last-child')];
        const displayedDrink = [document.querySelector('.confirmation--drink p:first-child'), document.querySelector('.confirmation--drink p:last-child')];
        const displayedDessert = [document.querySelector('.confirmation--dessert p:first-child'), document.querySelector('.confirmation--dessert p:last-child')];

        const dishPrice = Number(selectedDish[1].innerHTML.replace(',', '.'));
        const drinkPrice = Number(selectedDrink[1].innerHTML.replace(',', '.'));
        const dessertPrice = Number(selectedDessert[1].innerHTML.replace(',', '.'));

        displayedDish[0].innerHTML = selectedDish[0].innerHTML;
        displayedDish[1].innerHTML = selectedDish[1].innerHTML;
        displayedDrink[0].innerHTML = selectedDrink[0].innerHTML;
        displayedDrink[1].innerHTML = selectedDrink[1].innerHTML;
        displayedDessert[0].innerHTML = selectedDessert[0].innerHTML;
        displayedDessert[1].innerHTML = selectedDessert[1].innerHTML;

        total = dishPrice + drinkPrice + dessertPrice;
        const displayedTotal = document.querySelector('.confirmation--total span');
        displayedTotal.innerHTML = total.toFixed(2).replace('.', ',');
    }
}

function finishRequest() {
    const name = prompt('Qual é o seu nome?');
    const address = prompt('Qual é o seu endereço?');

    window.open('https://wa.me/5534992919292?text=' + encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${selectedDish[0].innerHTML}
- Bebida: ${selectedDrink[0].innerHTML}
- Sobremesa: ${selectedDessert[0].innerHTML}
Total: R$ ${total.toFixed(2)}

Nome: ${name}
Endereço: ${address}`), '_blank').focus();
}