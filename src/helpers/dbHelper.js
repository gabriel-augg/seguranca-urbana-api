import fs from "fs"
import { URL } from "url"

const caminhoDB = new URL('../db/db_bairros.json', import.meta.url)  


function retornarBD(){
    const dadosDB = fs.readFileSync(caminhoDB, 'utf-8') 
    return JSON.parse(dadosDB)
}

function validarSeExiste(cep){

    const bairros = retornarBD()
    const bairroEncontrado = bairros.find( bairro => bairro.cep == cep )

    if(bairroEncontrado){
        return true
    }
    return false
}

function atualizarDB(bairro){

    const bairros = retornarBD()
    bairros.push(bairro)

    try {
        fs.writeFileSync(caminhoDB, JSON.stringify(bairros, null, 2))
    } catch(err){
        console.log(err)
    }
}

function deletarDadoDB(cep){

    const bairros = retornarBD()
    const index = bairros.findIndex( bairro => bairro.cep == cep)

    bairros.splice(index, 1)
    
    try {
        fs.writeFileSync(caminhoDB, JSON.stringify(bairros, null, 2))
    } catch(err){
        console.log(err)
    }
}

export { retornarBD, atualizarDB, validarSeExiste, deletarDadoDB }



