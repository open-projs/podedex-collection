export class View {
    constructor(fotos) {
        this._caminho = './dist/fotos/';
        this._fotos = fotos;
        this._formPesquisa = document.querySelector('#pokedex>.row');
        this._quantidadeItensPagina = document.querySelector('#quantidadeItensPagina');
        this._numeroPagina = document.querySelector('#pagina');
    }
    renderizarPokemons() {
        this.limparElemento(this._formPesquisa);
        let apresentacao = this.paginar(this._fotos, this.getNumeroPagina(), this.getQuantidadeItensPagina());
        console.log(`${this.getQuantidadeItensPagina()}, ${this.getNumeroPagina()}`);
        for (const item of apresentacao) {
            this._modelo =
                `<div class="col-lg-2 col-xl-2 col-md-3 col-sm-3 col-xs-3 text-center">
                    <figure class="figure">
                        <img src="${this._caminho}${item}" class="figure-img rounded img-thumbnail">
                        <figcaption class="figure-caption text-center text-white bg-black"><strong>${item.replace(".png", "").replace("-", " - ")}</strong></figcaption>
                    </figure>
                </div>`;
            if (this._formPesquisa)
                this._formPesquisa.innerHTML += this._modelo;
        }
    }
    paginar(apresentacao, numeroPagina, quantidadeItens) {
        let index = numeroPagina === 1 ? 0 : (numeroPagina - 1) * quantidadeItens;
        return apresentacao.slice(index, (index + quantidadeItens));
    }
    limparElemento(elemento) {
        elemento.innerHTML = "";
    }
    getQuantidadeItensPagina() {
        if (this._quantidadeItensPagina) {
            return parseInt(this._quantidadeItensPagina.value);
        }
        else {
            return 1;
        }
    }
    getNumeroPagina() {
        if (this._numeroPagina) {
            return parseInt(this._numeroPagina.value);
        }
        else {
            return 1;
        }
    }
}
//# sourceMappingURL=View.js.map