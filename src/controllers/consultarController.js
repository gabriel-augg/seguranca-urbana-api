import { retornarBD } from "./dbController.js"

const bd = retornarBD() 

function retornarDados(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return dados
}

function retornarTaxaCriminalidade(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { bairro: dados.bairro, taxaCriminalidade: dados.taxaCriminalidade }
}

function retornarIluminacaoPublica(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { bairro: dados.bairro, iluminacaoPublica: dados.iluminacaoPublica }
}

function retornarPresencaPolicial(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { bairro: dados.bairro, presencaPolicial: dados.presencaPolicial }
}

function retornarRecomendacoes(cep) {
  let dados = bd.find(dado => dado.cep == cep)
  return { bairro: dados.bairro, recomendacao: dados.recomendacoesSeguranca }
}


export {
  retornarDados,
  retornarTaxaCriminalidade,
  retornarIluminacaoPublica,
  retornarPresencaPolicial,
  retornarRecomendacoes
}