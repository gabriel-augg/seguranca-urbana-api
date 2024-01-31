import { Bairro } from "../models/bairroModels.js";
import { adicionarDados } from "./dbController.js";


function criarBairro(bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep){
    const novoBairro = new Bairro(bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep)
    adicionarDados(novoBairro)
    return novoBairro
}

export { criarBairro }