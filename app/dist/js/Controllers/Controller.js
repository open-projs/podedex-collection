import { View } from '../Views/View.js';
export class Controller {
    constructor() {
        this._arquivos = document.querySelector("#files");
    }
    listarArquivos() {
    }
    processar() {
        let resultado;
        if (this._arquivos) {
            resultado = Array.from(this._arquivos.files).map((arquivo) => {
                return arquivo.name;
            });
            this._view = new View(resultado.sort());
        }
        this._view.renderizarPokemons();
    }
}
//# sourceMappingURL=Controller.js.map