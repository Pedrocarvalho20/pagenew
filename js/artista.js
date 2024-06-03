let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');

btnBack.onclick = function() {
    moveItemOnClick('back');
};
btnNext.onclick = function() {
    moveItemOnClick('next');
};

function moveItemOnClick(type) {
    let listItem = document.querySelectorAll('.list .list-item');

    if (type === 'next') {
        list.appendChild(listItem[0]);
        container.classList.add('next');
    } else {
        list.prepend(listItem[listItem.length - 1]);
        container.classList.add('back');
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".list-item");
    
    // Animação de entrada
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("fadeIn");
        }, index * 200); // Atraso entre cada item para animação em cascata
    });

    // Animação de saída ao clicar no botão "back"
    document.querySelector('.back').addEventListener('click', () => {
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("fade-out");
            }, index * 200); // Atraso entre cada item para animação em cascata
        });

        // Redirecionar ou realizar alguma ação após a animação de saída
        setTimeout(() => {
            window.history.back(); // Voltar para a página anterior
        }, listItems.length * 200 + 1000); // Tempo suficiente para a animação de saída concluir
    });
});
