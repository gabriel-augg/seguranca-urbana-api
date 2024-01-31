import { deletarDadoDB } from "./dbController.js";

function deletarBairro(cep){
    deletarDadoDB(cep)
}

export { deletarBairro }