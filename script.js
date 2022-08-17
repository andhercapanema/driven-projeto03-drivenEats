const selectedItems = [
    {
        element: [],
        category: 'dishes',
        name: '',
        amount: ''
    },
    {
        element: [],
        category: 'drinks',
        name: '',
        amount: ''
    },
    {
        element: [],
        category: 'desserts',
        name: '',
        amount: ''
    }
];

const selectedDish = selectedItems[0];
const selectedDrink = selectedItems[1];
const selectedDessert = selectedItems[2];

const products = [
    {
        name: 'Caldo',
        description: 'Vários sabores disponíveis',
        amount: 15,
        category: 'dishes'
    },
    {
        name: 'Espetinho',
        description: 'Bovino, frango ou linguiça',
        amount: 10,
        category: 'dishes'
    },
    {
        name: 'Cachorro-Quente',
        description: 'Pão, salsicha, molho de tomate, milho...',
        amount: 8,
        category: 'dishes'
    },
    {
        name: 'Milho Assado',
        description: 'Assado na manteiga temperada',
        amount: 6,
        category: 'dishes'
    },
    {
        name: 'Canjiquinha',
        description: 'Com costelinha de porco e bacon',
        amount: 12,
        category: 'dishes'
    },
    {
        name: 'Pamonha',
        description: 'De sal de doce ou temperada',
        amount: 7,
        category: 'dishes'
    },
    {
        name: 'Quentão',
        description: 'Para se aquecer nesse frio!',
        amount: 7,
        category: 'drinks'
    },
    {
        name: 'Suco de Milho',
        description: 'Milho em seu estado líquido',
        amount: 4,
        category: 'drinks'
    },
    {
        name: 'Vinho Quente',
        description: 'Um pouco mais quente que o Sol',
        amount: 6,
        category: 'drinks'
    },
    {
        name: 'Chocolate Quente',
        description: 'Se dá pra esquentar, a gente esquenta!',
        amount: 5,
        category: 'drinks'
    },
    {
        name: 'Curau',
        description: 'Quem chama de canjica é louco!',
        amount: 6,
        category: 'desserts'
    },
    {
        name: 'Pé de Moleque',
        description: 'Ingredientes de 1ª qualidade',
        amount: 3.5,
        category: 'desserts'
    },
    {
        name: 'Maçã do Amor',
        description: 'Maçã, açúcar, palito de picolé',
        amount: 4,
        category: 'desserts'
    },
    {
        name: 'Arroz Doce',
        description: 'Nas opções com e sem chocolate',
        amount: 5.5,
        category: 'desserts'
    },
    {
        name: 'Paçoca',
        description: '3 un, é impossível comer só uma!',
        amount: 3,
        category: 'desserts'
    },
    {
        name: 'Pipoca Doce',
        description: 'Diferentes cores mas o mesmo sabor',
        amount: 2.5,
        category: 'desserts'
    }
]

const dishes = document.querySelector('.dishes');
const drinks = document.querySelector('.drinks');
const desserts = document.querySelector('.desserts');

products.forEach(item => {
    const projectEl = document.createElement('div');

    const btnOnclick = document.createAttribute('onclick');
    btnOnclick.value = 'selectItem(this)';
    projectEl.setAttributeNode(btnOnclick);

    projectEl.innerHTML = `<img src="./img/${item.category}/${item.name.toLowerCase().replace(/\s/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}.png" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p>R$ <span>${item.amount.toFixed(2).replace('.', ',')}</span></p>
    <ion-icon name="checkmark-circle"></ion-icon>`;

    // Havia feito da forma abaixo anteriormente para treinar os métodos do document

    /*     const img = document.createElement('img');
        const imgSrc = document.createAttribute('src');
        imgSrc.value = `./img/dishes/${item.name.toLowerCase().replace(' ', '-')}.png`;
        console.log(imgSrc.value);
        img.setAttributeNode(imgSrc);
        const imgAlt = document.createAttribute('alt');
        imgAlt.value = item.name;
        img.setAttributeNode(imgAlt);
        projectEl.appendChild(img);
    
        const name = document.createElement('h3');
        name.innerHTML = item.name;
        projectEl.appendChild(name);
    
        const description = document.createElement('p');
        description.innerHTML = item.description;
        projectEl.appendChild(description);
    
        const price = document.createElement('p');
        price.innerHTML = 'R$ ';
        const amount = document.createElement('span');
        amount.innerHTML = item.amount.toFixed(2).replace('.', ',');
        price.appendChild(amount);
        projectEl.appendChild(price);
    
        const checkMark = document.createElement('ion-icon');
        const checkMarkName = document.createAttribute('name');
        checkMarkName.value = 'checkmark-circle';
        checkMark.setAttributeNode(checkMarkName);
        projectEl.appendChild(checkMark); */

    switch (item.category) {
        case 'dishes':
            dishes.appendChild(projectEl);
            break;
        case 'drinks':
            drinks.appendChild(projectEl);
            break;
        case 'desserts':
            desserts.appendChild(projectEl);
            break;
        default:
            console.log('Erro no switch-case de construção do menu!');
    }
})

function selectItem(item) {
    /* O '.querySelector' pode ser utilizado em outros elementos que não o 'document'. Como no exemplo abaixo */

    const clicked = item.querySelector('h3');

    products.forEach(prod => {
        if (clicked.innerHTML === prod.name) {
            selectedItems.forEach(selected => {
                if (selected.category === prod.category) {
                    const prevSelected = item.parentNode.querySelector('.is-selected');

                    if (prevSelected !== null) {
                        prevSelected.classList.remove('is-selected');
                    }

                    selected.element = item;
                    selected.name = prod.name;
                    selected.amount = prod.amount;
                }
            })
        }
    })

    item.classList.add('is-selected');

    if (selectedItems[0].name !== '' && selectedItems[1].name !== '' && selectedItems[2].name !== '') {
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

        total = selectedDish.amount + selectedDrink.amount + selectedDessert.amount;

        confirmation.innerHTML = `<div>
        <p><strong>Confirme seu pedido</strong></p>
        <div class="confirmation--dish">
            <p>${selectedDish.name}</p>
            <p>${selectedDish.amount.toFixed(2).replace('.', ',')}</p>
        </div>
        <div class="confirmation--drink">
            <p>${selectedDrink.name}</p>
            <p>${selectedDrink.amount.toFixed(2).replace('.', ',')}</p>
        </div>
        <div class="confirmation--dessert">
            <p>${selectedDessert.name}</p>
            <p>${selectedDessert.amount.toFixed(2).replace('.', ',')}</p>
        </div>
        <div class="confirmation--total">
            <p><strong>TOTAL</strong></p>
            <p><strong>R$ <span>${total.toFixed(2).replace('.', ',')}</span></strong></p>
        </div>
        <button onclick="finishRequest()" class="c-btn"><strong>Tudo certo, pode pedir!</strong></button>
        <button onclick="checkRequest()" class="c-btn"><strong>Cancelar</strong></button>
    </div>`;
    }
}

function finishRequest() {
    const name = prompt('Qual é o seu nome?');
    const address = prompt('Qual é o seu endereço?');

    window.open('https://wa.me/5534999999999?text=' + encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${selectedDish.name}
- Bebida: ${selectedDrink.name}
- Sobremesa: ${selectedDessert.name}
Total: R$ ${total.toFixed(2)}

Nome: ${name}
Endereço: ${address}`), '_blank').focus();
}