let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

btnBack.onclick = function() {
    moveItemOnClick('back');
};
btnNext.onclick = function() {
    moveItemOnClick('next');
};

function moveItemOnClick(type) {
    let listItem = document.querySelectorAll('.list .list-item');
    let thumbItem = document.querySelectorAll('.thumb .list-thumb');

    if (type === 'next') {
        thumb.appendChild(thumbItem[0]);
        list.appendChild(listItem[0]);
        container.classlist.add('next')
    } else {
        thumb.prepend(thumbItem[thumbItem.length - 1]);
        list.prepend(listItem[listItem.length - 1]);
        container.classlist.add('back')
    }

    setTimeout(() => {
        container.classlist.remove('next')
        container.classlist.remove('back')
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

        });
    });