var resultado;
var nomes = [];
var links = [];

let intervalo = setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight);
}, 500);


function parando() {
    clearInterval(intervalo);

    resultado = Array.from(document.querySelectorAll('li[class=animating]')).map(function (valor) {
        let objeto =
        {
            numero: valor.querySelector('p').innerText,
            nome: valor.querySelector('h5').innerText
        };

        return objeto;
    });

    for (let item of resultado) {
        let numero = item.numero.replace(/#/g, '');

        nomes.push(`${numero}_${item.nome}`);

        for (let contador = 1; contador < 7; contador++) {
            if (contador != 1) {
                links.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}_f${contador}.png`);
            } else {
                links.push(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numero}.png`);
            }
        };
    };

    console.log(nomes);
    console.table(links);

    var ajax = new XMLHttpRequest();
    ajax.open('GET', "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", true);
    ajax.responseType = 'blob';
    ajax.send();


    const download = (path, filename) => {
        // Create a new link
        const anchor = document.createElement('a');
        //anchor.href = path;
        anchor.href = window.URL.createObjectURL(path);
        anchor.download = filename;
        anchor.target = "_blank";

        // Append to the DOM
        document.body.appendChild(anchor);

        // Trigger `click` event
        anchor.click();

        // Remove element from DOM
        //document.body.removeChild(anchor);
    };

    for (let index in links) {
        download(links[index], `${nomes[index]}.png`);
    };
};

let termino = setTimeout(parando, (1000 * 60 * 4));


