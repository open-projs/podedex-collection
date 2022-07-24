import { View } from '../Views/View.js';

export class Controller {

    private _arquivos: HTMLInputElement;

    private _view: View;

    constructor() {
        this._arquivos = document.querySelector("#files") as HTMLInputElement;
    }



    public listarArquivos(): void {


    }


    public processar(): void {
        let resultado;
        if (this._arquivos) {
            resultado = Array.from(<FileList>this._arquivos.files).map((arquivo) => {
                return arquivo.name;
            });

            this._view = new View(resultado.sort());
        }
        this._view.renderizarPokemons();
    }



}