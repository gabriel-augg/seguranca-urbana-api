import { retornarBD } from "./dbController.js"

const bd = retornarBD() 

function retornarDados(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return dados
}

function retornarTaxaCriminalidade(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { nomeBairro: dados.nomeBairro, taxaCriminalidade: dados.taxaCriminalidade }
}

function retornarIluminacaoPublica(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { nomeBairro: dados.nomeBairro, iluminacaoPublica: dados.iluminacaoPublica }
}

function retornarPresencaPolicial(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { nomeBairro: dados.nomeBairro, presencaPolicial: dados.presencaPolicial }
}

function retornarRecomendacoes(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { nomeBairro: dados.nomeBairro, recomendacao: dados.recomendacoesSeguranca }
}


export {
  retornarDados,
  retornarTaxaCriminalidade,
  retornarIluminacaoPublica,
  retornarPresencaPolicial,
  retornarRecomendacoes
}