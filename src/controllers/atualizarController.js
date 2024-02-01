import { atualizarDB, retornarBD } from "./dbController.js";

function atualizarBairro({nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep }){

    let bairros = retornarBD()

    for (const bairro of bairros){
        if (bairro.cep == cep){
            if(nomeBairro){
                bairro.nomeBairro = nomeBairro
            }
            if(taxaCriminalidade){
                bairro.taxaCriminalidade = taxaCriminalidade
            }
            if(iluminacaoPublica){
                bairro.iluminacaoPublica = iluminacaoPublica
            }
            if(presencaPolicial){
                bairro.presencaPolicial = presencaPolicial
            }
            if(recomendacoesSeguranca){
                bairro.recomendacoesSeguranca = recomendacoesSeguranca
            }
            return bairro
        }
    }
    atualizarDB(bairros)
}


export { atualizarBairro }