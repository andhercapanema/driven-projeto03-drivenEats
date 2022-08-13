function selectDish(option) {
    const clickedItem = document.querySelector(option);
    const selectedDish = document.querySelector('.dishes .is-selected');
    const selectedDrink = document.querySelector('.drinks .is-selected');
    const selectedDessert = document.querySelector('.desserts .is-selected');

    if (selectedDish !== null) {
        selectedDish.classList.remove('is-selected');
    }

    clickedItem.classList.add('is-selected');

    const updatedDish = document.querySelector('.dishes .is-selected');
    if (updatedDish !== null && selectedDrink !== null && selectedDessert !== null) {
        activateFooterBtn();
    }
}

function selectDrink(option) {
    const clickedItem = document.querySelector(option);
    const selectedDish = document.querySelector('.dishes .is-selected');
    const selectedDrink = document.querySelector('.drinks .is-selected');
    const selectedDessert = document.querySelector('.desserts .is-selected');

    if (selectedDrink !== null) {
        selectedDrink.classList.remove('is-selected');
    }

    clickedItem.classList.add('is-selected');

    const updatedDrink = document.querySelector('.drinks .is-selected');

    if (selectedDish !== null && updatedDrink !== null && selectedDessert !== null) {
        activateFooterBtn();
    }
}

function selectDessert(option) {
    const clickedItem = document.querySelector(option);
    const selectedDish = document.querySelector('.dishes .is-selected');
    const selectedDrink = document.querySelector('.drinks .is-selected');
    const selectedDessert = document.querySelector('.desserts .is-selected');

    if (selectedDessert !== null) {
        selectedDessert.classList.remove('is-selected');
    }

    clickedItem.classList.add('is-selected');

    const updatedDessert = document.querySelector('.desserts .is-selected');
    if (selectedDish !== null && selectedDrink !== null && updatedDessert !== null) {
        activateFooterBtn();
    }
}

function activateFooterBtn() {
    const btn = document.querySelector('footer .c-btn');
    btn.innerHTML = 'Fechar pedido';
    btn.classList.add('c-btn-active');
}

function checkRequest() {
    const ready = document.querySelector('.c-btn-active');

    if (ready !== null) {
        const confirmation = document.querySelector('.confirmation');
        confirmation.classList.toggle('is-disabled');

        const selectedDish = [document.querySelector('.dishes .is-selected h3'), document.querySelector('.dishes .is-selected span')];
        const selectedDrink = [document.querySelector('.drinks .is-selected h3'), document.querySelector('.drinks .is-selected span')];
        const selectedDessert = [document.querySelector('.desserts .is-selected h3'), document.querySelector('.desserts .is-selected span')];

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

        const total = dishPrice + drinkPrice + dessertPrice;
        const displayedTotal = document.querySelector('.confirmation--total span');
        displayedTotal.innerHTML = total.toFixed(2).replace('.', ',');
    }
}

function finishRequest() {
    const name = prompt('Qual é o seu nome?');
    const address = prompt('Qual é o seu endereço?');
    const total = document.querySelector('.confirmation--total span').innerHTML.replace(',', '.');
    const selectedDish = document.querySelector('.dishes .is-selected h3').innerHTML;
    const selectedDrink = document.querySelector('.drinks .is-selected h3').innerHTML;
    const selectedDessert = document.querySelector('.desserts .is-selected h3').innerHTML;


    window.open('https://wa.me/?text=' + encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${selectedDish}
- Bebida: ${selectedDrink}
- Sobremesa: ${selectedDessert}
Total: R$ ${total}

Nome: ${name}
Endereço: ${address}`), '_blank').focus();
}