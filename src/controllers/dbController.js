import fs from "fs"
import { URL } from "url"

const caminhoArquivo = new URL('../db/dados.json', import.meta.url)  


function retornarBD(){
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8')
    const bairros = JSON.parse(dados)
    return bairros
}

function validar(cep){
    const bairros = retornarBD()
    const bairro = bairros.filter( obj => obj.cep == cep )
    if(bairro.length){
        return true
    }
    return false
}

function atualizarDB(bairro){
    let bairros = retornarBD()
    bairros.push(bairro)
    try {
        fs.writeFileSync(caminhoArquivo, JSON.stringify(bairros, null, 2))
    } catch(err){
        console.log(err)
    }
}

function deletarDadoDB(cep){
    let bairros = retornarBD()
    const index = bairros.findIndex( obj => obj.cep == cep)
    bairros.splice(index, 1)
    try {
        fs.writeFileSync(caminhoArquivo, JSON.stringify(bairros, null, 2))
    } catch(err){
        console.log(err)
    }
}

export { retornarBD, atualizarDB, validar, deletarDadoDB }



