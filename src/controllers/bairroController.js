import Bairro from "../models/bairroModel.js";
import { atualizarDB, retornarBD, deletarDadoDB, validarSeExiste } from "../helpers/dbHelper.js";

export default class bairroController {

    static async consultar(req, res){

        const cep = req.params.cep
        const bairros = await retornarBD()

        const bairroEncontrado = bairros.find(bairro => bairro.cep == cep)

        if(bairroEncontrado){
            res.json(bairroEncontrado)
            return
        }
        res.status(404).json({ error: 'Bairro não encontrado' })
    }

    static async consultarTaxa(req, res){

        const cep = req.params.cep
        const bairros = await retornarBD()

        const bairroEncontrado = bairros.find(bairro => bairro.cep == cep)

        if(bairroEncontrado){
            res.json({ nomeBairro: bairroEncontrado.nomeBairro, taxaCriminalidade: bairroEncontrado.taxaCriminalidade })
            return
        }
        res.status(404).json({ error: 'Bairro não encontrado' })
    }

    static async consultarIluminacao(req, res){

        const cep = req.params.cep
        const bairros = await retornarBD()

        const bairroEncontrado = bairros.find(bairro => bairro.cep == cep)

        if(bairroEncontrado){
            res.json({ nomeBairro: bairroEncontrado.nomeBairro, iluminacaoPublica: bairroEncontrado.iluminacaoPublica })
            return
        }
        res.status(404).json({ error: 'Bairro não encontrado' })
    }

    static async consultarPresencaPolicial(req, res){

        const cep = req.params.cep
        const bairros = await retornarBD()

        const bairroEncontrado = bairros.find(bairro => bairro.cep == cep)

        if(bairroEncontrado){
            res.json({ nomeBairro: bairroEncontrado.nomeBairro, presencaPolicial: bairroEncontrado.presencaPolicial })
            return
        }
        res.status(404).json({ error: 'Bairro não encontrado' })
    }

    static async consultarRecomendacoes(req, res){

        const cep = req.params.cep
        const bairros = await retornarBD()

        const bairroEncontrado = bairros.find(bairro => bairro.cep == cep)

        if(bairroEncontrado){
            res.json({ nomeBairro: bairroEncontrado.nomeBairro, recomendacao: bairroEncontrado.recomendacoesSeguranca })
            return
        }
        res.status(404).json({ error: 'Bairro não encontrado' })
    }

    static async adicionar(req, res){

        const { nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep } = req.body

        const _cep = cep.toString()
        
        if(validarSeExiste(cep)){
            res.status(400).json({ error: 'O bairro não pode ser adicionar, pois já existe' })
            return
        }
        
        if (_cep.length != 8){
            res.status(400).json({ error: 'O bairro não pode ser adicionar, pois o tamanho do CEP é diferente de 8 caracteres.' })
            return
        }

        
        const novoBairro = new Bairro(nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep)

        await atualizarDB(novoBairro)

        res.json(novoBairro)
    }
    
    static async atualizar(req, res){

        const { nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep } = req.body

        if(!validarSeExiste(cep)){
            res.status(404).json({ error: 'Bairro não encontrado' })
            return 
        }

        let bairroAtualizado = null

        const bairros = await retornarBD()
    
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
                bairroAtualizado = bairro
            }
        }

        atualizarDB(bairros)
        res.json(bairroAtualizado)
    }

    static deletar(req, res){

        const cep = req.params.cep

        if(!validarSeExiste(cep)){
            res.status(404).json({ error: 'Bairro não encontrado' })
            return 
        }

        deletarDadoDB(cep)

        res.status(204).send()
    }
}
