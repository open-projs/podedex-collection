import { Controller } from './Controllers/Controller.js';
const controller = new Controller();
const acao = document.querySelector('form');
const anchor = document.querySelectorAll('a');
const pagina = document.querySelector('#pagina');
if (acao) {
    acao.addEventListener('submit', (evento) => {
        evento.preventDefault();
        controller.processar();
    });
}
if (anchor) {
    anchor.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            let target = evento.target.dataset;
            if (target.anterior != undefined) {
                console.log("anterior");
            }
            if (target.proximo != undefined) {
                console.log("proximo");
            }
            if (target.play != undefined) {
                if (parseInt(pagina.value) <= 0 || pagina.value == '') {
                    pagina.value = '1';
                }
            }
        });
    });
}
//# sourceMappingURL=app.js.map