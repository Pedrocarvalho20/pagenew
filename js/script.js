function showContent(id) {
    // Oculta todos os conteúdos
    var conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(function (conteudo) {
        conteudo.style.display = 'none';
    });

    // Mostra o conteúdo selecionado
    var conteudo = document.getElementById(id);
    conteudo.style.display = 'block';

    setTimeout(function() {
        conteudo.classList.add('show');
        conteudo.scrollTop = 0; 
        window.scrollTo({ top: conteudo.offsetTop, behavior: 'smooth' });
    }, 10);
}

// Fecha o parágrafo ao clicar em qualquer lugar da tela
document.addEventListener('click', function () {
    var conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(function (conteudo) {
        conteudo.style.display = 'none';
    });
});



// Impede o fechamento ao clicar no botão
document.querySelectorAll('.image-button').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

// Impede o fechamento ao clicar no conteúdo
document.querySelectorAll('.conteudo').forEach(function (conteudo) {
    conteudo.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
