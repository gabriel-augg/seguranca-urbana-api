import { Bairro } from "../models/bairroModels.js";
import { atualizarDB } from "./dbController.js";


function adicionarBairro(nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep){
    const novoBairro = new Bairro(nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep)
    atualizarDB(novoBairro)
    return novoBairro
}

export { adicionarBairro }