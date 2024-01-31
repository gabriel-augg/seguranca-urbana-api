## SEGURANÇA URBANA API
Essa api foi desenvolvida com o objetivo de alertar as pessoas sobre a segurança urbana de determinadas regiões (fictícias), com o objetivo de promover a segurança. Quando o usuário faz a requisição, a api retorna algumas informações importantes em formato JSON como: __Nome do bairro__, __Taxa de criminalidade__, __Iluminação pública__, __Presença policial__, __Recomendações de segurança__ e o __CEP__.

##### **IMPORTANTE!**

> Antes de dar deploy no projeto, certifique-se de que você tem o Node e o npm instalado. Para verificar, basta digitar e executar no terminal: **_node -v_** e **_npm -v_**. Se após executar o comando retornar a versão, está instalado. Caso contrário, você deverá instalar o node ou/e o npm. E por fim, execute o comando **_npm install_** para instalar todas as depêndencias para o projeto funcionar corretamente.

### Consumo da API

#### Para fazer o consumo da API, você deverá usar um dos seguintes CEPs fictícios:

_12345678_, _23456789_, _34567890_, _45678901_, _56789012_, _67890123_, _78901234_, _89012345_, _90123456_, _01234567_ e _12345678_

#### E para fazer a requisição, você deverá usar um dos CEPS desejado em um dos endpoints abaixo utilizando o método http GET:

_Rotorno de todos os dados_

http://localhost:3000/consultar/cep/12345678

_Retorno da taxa de criminalidade e o nome do bairro_

http://localhost:3000/consultar/taxa-criminalidade/cep/12345678

_Retorno da iluminação pública e o nome do bairro_

http://localhost:3000/consultar/iluminacao-publica/cep/12345678

_Retorno da presença policial e o nome do bairro_

http://localhost:3000/consultar/presenca-policial/cep/12345678

_Retorno das recomendações de segurança e o nome do bairro_

http://localhost:3000/consultar/recomendacoes/cep/12345678

#### Se tudo estiver funcionando corretamente e você fizer uma requisição de todos os dados através de uma ferramenta de debugging como **Insomnia** ou **Postman**, utilizando o primeiro CEP, o retorno deverá ser assim:


```
{
	"bairro": "Centro",
	"taxaCriminalidade": 5.2,
	"iluminacaoPublica": "Boa",
	"presencaPolicial": "Alta",
	"recomendacoesSeguranca": [
		"Evitar andar sozinho à noite",
		"Manter pertences próximos"
	],
	"cep": "12345678"
}
```









