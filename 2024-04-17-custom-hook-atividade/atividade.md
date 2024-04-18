A partir da atividade: [Expo snack](https://snack.expo.dev/@git/github.com/satinP/topicos-especiais-app), acrescentar as seguintes funcionalidades:
[Código no Github](https://github.com/satinP/topicos-especiais-app)

[Doc de como utilizar custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

1. Criar um custom hook, chamado useAsyncStorage para controlar como recuperamos e salvamos os dados no AsyncStorage. O hook deverá aceitar dois parâmetros, um para a chave do AsyncStorage, e outro com o valor inicial.

2. Extrair a FlatList para um componente separado e a envelopar em um React.memo, para evitar Rerenders. Esse processo ficará mais fácil de ser aplicado utilizando o hook useAsyncStorage, que já vai ter os dados da lista.
