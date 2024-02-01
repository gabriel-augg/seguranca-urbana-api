import fs from "fs"
import { URL } from "url"

const caminhoDB = new URL('../db/dados.json', import.meta.url)  


function retornarBD(){
    const dadosDB = fs.readFileSync(caminhoDB, 'utf-8')
    const bairros = JSON.parse(dadosDB)
    return bairros
}

function validarSeExiste(cep){
    const bairros = retornarBD()
    const bairroEncontrado = bairros.filter( bairro => bairro.cep == cep )
    if(bairroEncontrado.length){
        return true
    }
    return false
}

function atualizarDB(bairro){
    let bairros = retornarBD()
    bairros.push(bairro)
    try {
        fs.writeFileSync(caminhoDB, JSON.stringify(bairros, null, 2))
    } catch(err){
        console.log(err)
    }
}

function deletarDadoDB(cep){
    let bairros = retornarBD()
    const index = bairros.findIndex( bairro => bairro.cep == cep)
    bairros.splice(index, 1)
    try {
        fs.writeFileSync(caminhoDB, JSON.stringify(bairros, null, 2))
    } catch(err){
        console.log(err)
    }
}

export { retornarBD, atualizarDB, validarSeExiste, deletarDadoDB }



