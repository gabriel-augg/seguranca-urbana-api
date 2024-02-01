## SEGURANÇA URBANA API
Essa API foi desenvolvida com o objetivo de alertar as pessoas sobre a segurança urbana de determinados bairros, onde as pessoas podem colocar seus bairros e opinarem sobre a segurança urbana, com o intuito de promover a segurança. Quando o usuário faz a requisição, supondo que seja GET, a API retorna algumas informações importantes em formato JSON como: __Nome do bairro__, __Taxa de criminalidade__, __Iluminação pública__, __Presença policial__, __Recomendações de segurança__ e o __CEP__.

##### **IMPORTANTE!**

> Antes de dar deploy no projeto, certifique-se de que você tem o Node e o npm instalado. Para verificar, basta digitar e executar no terminal: **_node -v_** e **_npm -v_**. Se após executar o comando retornar a versão, está instalado. Caso contrário, você deverá instalar o node ou/e o npm. E por fim, execute o comando **_npm install_** para instalar todas as depêndencias para o projeto funcionar corretamente.

### Sobre a API

 A API foi desenvolvida utilizando as tecnologias do Express e FS, possuindo um CRUD completo constituido pelos métodos: /GET, /POST, /PUT e /DELETE.

 Como banco de dados, foi utilizado um arquivo JSON, onde é possível armazenar e retornar as informações. Isso só foi possível graças ao FS.

 Na organização da API, foi utilizado a arquitetura MVC, pela qual facilita a manutenção e organização da API.

 Para iniciar a API, digite no terminal: **_npm start_**

### Consumo da API

### **/GET**

#### Para fazer o consumo da API aplicando o método GET, você pode usar um CEP que foi adicionado ou então deverá usar um dos seguintes CEPs ficticios:

_12345678_, _23456789_, _34567890_, _45678901_, _56789012_, _67890123_, _78901234_, _89012345_, _90123456_, _01234567_ e _12345678_

#### No entanto, para fazer a requisição, você deverá usar um dos CEPS desejado em um dos endpoints abaixo:

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

#### Se tudo estiver funcionando corretamente e você fizer uma requisição de todos os dados através de uma ferramenta de debugging como **Insomnia** ou **Postman**, utilizando o primeiro CEP, o retorno deverá ser da sguinte forma:

##### Exemplo de retorno do corpo JSON

```
{
	"nomeBairro": "Centro",
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

### **/POST**

#### Para adicionar um bairro de desejo a aplicação, você deverá fazer o consumo da API aplicando o método POST, fornecendo um JSON com todas as informações necesserárias, como: nome do bairro, taxa de criminalidade, iluminação pública, presença policial, recomendações de segurança e o cep. 

Segue abaixo o endpoint e um exemplo do corpo JSON:


http://localhost:3000/adicionar


##### Exemplo do corpo JSON

```
{
	"nomeBairro": "América",
	"taxaCriminalidade": 2.2,
	"iluminacaoPublica": "Boa",
	"presencaPolicial": "Alta",
	"recomendacoesSeguranca": [
		"Manter pertences próximos"
	],
	"cep": "49032345"
}
```

### **/PUT**

#### Para atualizar um bairro existente, você deverá fazer o consumo da API aplicando o método PUT, fornecendo um JSON com as informações e o CEP do bairro que deseja atualizar. É possível atualizar todas as infromações ou então algumas específicas, no entanto a única informação que não é possível alterar é o CEP. 

#### Esse método só funcionará corretamente se os atributos do objetivo forem passado de forma correta. 

##### Atributos:

**nomeBairro**, **taxaCriminalidade**, **iluminacaoPublica**, **presencaPolicial** e **recomendacoesSeguranca**.

Segue abaixo o endpoint e um exemplo do corpo JSON:

http://localhost:3000/atualizar

##### Exemplo do corpo JSON

```
{
	"nomeBairro": "Industrial",
	"cep": "49032345"
}
```

### **/DELETE**

#### Para deletar um bairro existente, você deverá fazer o consumo da API aplicando o método DELETE, utilizando o endpoint com o CEP do bairro desejado como parâmetro.

Segue abaixo o endpoint com um exemplo de CEP como parâmetro:

http://localhost:3000/deletar/cep/49044274










