import { atualizarDB } from "./dbController.js";
import { retornarBD } from "./dbController.js";

function atualizarBairro({bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep }){

    let bairros = retornarBD()

    for (const obj of bairros){
        if (obj.cep == cep){
            if(bairro){
                obj.bairro = bairro
            }
            if(taxaCriminalidade){
                obj.taxaCriminalidade = taxaCriminalidade
            }
            if(iluminacaoPublica){
                obj.iluminacaoPublica = iluminacaoPublica
            }
            if(presencaPolicial){
                obj.presencaPolicial = presencaPolicial
            }
            if(recomendacoesSeguranca){
                obj.recomendacoesSeguranca = recomendacoesSeguranca
            }
            return obj
        }
    }
    atualizarDB(bairros)
}


export { atualizarBairro }