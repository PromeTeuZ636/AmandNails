document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.js-link');
    const delayInMilliseconds = 400;

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            link.classList.add('clicking');

            setTimeout(() => {

                // BOTÃO WHATSAPP
                if (link.id === "btn-whatsapp") {
                    const msg = "Olá, Amanda! Vim pelo site e gostaria de agendar um horário para atendimento. Poderia me informar os horários disponíveis? <3";
                    const url = "https://wa.me/557582893391?text=" + encodeURIComponent(msg);
                    window.open(url, '_blank');
                    link.classList.remove('clicking');
                    return;
                }

                // OUTROS LINKS
                const targetUrl = link.getAttribute('href');
                const isBlank = link.getAttribute('target') === '_blank';

                if (isBlank) {
                    window.open(targetUrl, '_blank');
                    link.classList.remove('clicking');
                } else {
                    window.location.href = targetUrl;
                }

            }, delayInMilliseconds);
        });
    });
});
