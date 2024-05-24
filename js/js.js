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
    } else {
        thumb.prepend(thumbItem[thumbItem.length - 1]);
        list.prepend(listItem[listItem.length - 1]);
    }
}