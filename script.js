document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links com a classe 'js-link'
    const links = document.querySelectorAll('.js-link');
    const delayInMilliseconds = 400; // Tempo de espera

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Impede a abertura imediata
            event.preventDefault(); 

            const targetUrl = link.getAttribute('href');
            // Verifica se o link deve abrir em uma nova guia
            const isBlank = link.getAttribute('target') === '_blank';

            // Adiciona a classe que mostra a imagem e afunda o botão no CSS
            link.classList.add('clicking');

            // Aguarda o tempo definido e depois abre o link
            setTimeout(() => {
                if (isBlank) {
                    // Abre num novo separador
                    window.open(targetUrl, '_blank');
                    // Remove a classe para que o botão volte ao normal
                    link.classList.remove('clicking');
                } else {
                    window.location.href = targetUrl;
                }
            }, delayInMilliseconds);
        });
    });
});