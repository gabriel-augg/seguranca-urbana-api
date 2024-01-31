
function db() {
  return [
    {
      bairro: "Centro",
      taxaCriminalidade: 5.2,
      iluminacaoPublica: "Boa",
      presencaPolicial: "Alta",
      recomendacoesSeguranca: ["Evitar andar sozinho à noite", "Manter pertences próximos"],
      cep: "12345678"
    },
    {
      bairro: "Jardim das Flores",
      taxaCriminalidade: 2.1,
      iluminacaoPublica: "Moderada",
      presencaPolicial: "Média",
      recomendacoesSeguranca: ["Cuidado com áreas isoladas", "Reportar atividades suspeitas"],
      cep: "23456789"
    },
    {
      bairro: "Vila Nova",
      taxaCriminalidade: 7.4,
      iluminacaoPublica: "Ruim",
      presencaPolicial: "Baixa",
      recomendacoesSeguranca: ["Evitar ruas mal iluminadas", "Não exibir objetos de valor"],
      cep: "34567890"
    },
    {
      bairro: "Parque das Aves",
      taxaCriminalidade: 1.5,
      iluminacaoPublica: "Boa",
      presencaPolicial: "Alta",
      recomendacoesSeguranca: ["Área segura para famílias", "Parques bem patrulhados"],
      cep: "45678901"
    },
    {
      bairro: "Cidade Industrial",
      taxaCriminalidade: 8.9,
      iluminacaoPublica: "Moderada",
      presencaPolicial: "Média",
      recomendacoesSeguranca: ["Evitar áreas industriais à noite", "Aumentar a vigilância pessoal"],
      cep: "56789012"
    },
    {
      bairro: "Praia do Sol",
      taxaCriminalidade: 3.2,
      iluminacaoPublica: "Boa",
      presencaPolicial: "Alta",
      recomendacoesSeguranca: ["Praias seguras durante o dia", "Evitar áreas desertas à noite"],
      cep: "67890123"
    },
    {
      bairro: "Alto da Colina",
      taxaCriminalidade: 4.3,
      iluminacaoPublica: "Boa",
      presencaPolicial: "Moderada",
      recomendacoesSeguranca: ["Ficar atento em áreas de mirante", "Evitar locais com pouca visibilidade"],
      cep: "78901234"
    },
    {
      bairro: "Bosque das Árvores",
      taxaCriminalidade: 2.8,
      iluminacaoPublica: "Boa",
      presencaPolicial: "Alta",
      recomendacoesSeguranca: ["Aproveitar áreas verdes", "Caminhar em trilhas designadas"],
      cep: "89012345"
    },
    {
      bairro: "Nova Esperança",
      taxaCriminalidade: 3.9,
      iluminacaoPublica: "Moderada",
      presencaPolicial: "Baixa",
      recomendacoesSeguranca: ["Participar de programas comunitários", "Conhecer os vizinhos"],
      cep: "90123456"
    },
    {
      bairro: "Vista Mar",
      taxaCriminalidade: 1.7,
      iluminacaoPublica: "Boa",
      presencaPolicial: "Alta",
      recomendacoesSeguranca: ["Aproveitar a vista costeira", "Evitar praias após o anoitecer"],
      cep: "01234567"
    },
    {
      bairro: "Monte Verde",
      taxaCriminalidade: 5.5,
      iluminacaoPublica: "Ruim",
      presencaPolicial: "Média",
      recomendacoesSeguranca: ["Evitar trilhas isoladas", "Manter contato durante atividades ao ar livre"],
      cep: "12345678"
    }
  ];
}

db().map( cep => console.log(cep.cep))

console.log('☝️  Consulte os CEPS acima')

export { db }