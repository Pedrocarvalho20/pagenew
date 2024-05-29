var currentVisibleId = null;

function toggleContent(id) {
    var conteudo = document.getElementById(id);

    // Se o conteúdo já está visível, oculte-o
    if (currentVisibleId === id) {
        conteudo.style.display = 'none';
        currentVisibleId = null;
    } else {
        // Oculta todos os outros conteúdos
        var conteudos = document.querySelectorAll('.conteudo');
        conteudos.forEach(function (c) {
            c.style.display = 'none';
            c.classList.remove('show');
        });

        // Mostra o conteúdo selecionado
        conteudo.style.display = 'block';
        conteudo.classList.add('show');
        conteudo.scrollTop = 0;
        window.scrollTo({ top: conteudo.offsetTop, behavior: 'smooth' });
        currentVisibleId = id;
    }
}

// Fecha o conteúdo ao clicar em qualquer lugar da tela
document.addEventListener('click', function () {
    if (currentVisibleId !== null) {
        var conteudo = document.getElementById(currentVisibleId);
        conteudo.style.display = 'none';
        conteudo.classList.remove('show');
        currentVisibleId = null;
    }
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