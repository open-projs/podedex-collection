
export class View {

    private _fotos: string[];
    private _formPesquisa: HTMLInputElement;
    private _quantidadeItensPagina: HTMLInputElement;
    private _numeroPagina: HTMLInputElement;
    private readonly _caminho = './dist/fotos/';
    private _modelo: string;

    constructor(fotos: string[]) {
        this._fotos = fotos;
        this._formPesquisa = <HTMLInputElement>document.querySelector('#pokedex>.row');
        this._quantidadeItensPagina = document.querySelector('#quantidadeItensPagina') as HTMLInputElement;
        this._numeroPagina = document.querySelector('#pagina') as HTMLInputElement;
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

    public paginar(apresentacao: string[], numeroPagina: number, quantidadeItens: number): string[] {
        let index = numeroPagina === 1 ? 0 : (numeroPagina - 1) * quantidadeItens;
        return apresentacao.slice(index, (index + quantidadeItens));
    }

    public limparElemento(elemento: HTMLElement): void {
        elemento.innerHTML = "";
    }

    public getQuantidadeItensPagina(): number {
        if (this._quantidadeItensPagina) {
            return parseInt(this._quantidadeItensPagina.value);
        } else {
            return 1;
        }
    }

    public getNumeroPagina(): number {
        if (this._numeroPagina) {
            return parseInt(this._numeroPagina.value);
        } else {
            return 1;
        }
    }


}