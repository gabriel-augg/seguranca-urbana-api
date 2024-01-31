import { Bairro } from "../models/bairroModels.js";
import { atualizarDB } from "./dbController.js";


function criarBairro(bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep){
    const novoBairro = new Bairro(bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep)
    atualizarDB(novoBairro)
    return novoBairro
}

export { criarBairro }