Forms: https://forms.gle/TDgdLVv49QCXSjtr8

A partir da resolução da atividade do dia 27, disponível em: https://snack.expo.dev/@satinp/squirtle-todo-tab-navigation, adicionar as seguintes funcionalidades:

1. Salvar uma lista de itens da todo list no AsyncStorage (atualmente só salva um item);
2. Adicionar a funcionalidade de deletar o item da lista, ao clicar em cima dele;

Sugestões:
O AsyncStorage só salva strings, então antes de salvar a lista é necessário utilizar a função JSON.stringfy() para que o array seja transformado em string, ex:

**const lista = [1,2,3]**
**AsyncStorage.setItem('chave', JSON.stringify(lista))**

E para recuperar a lista do AsyncStorage, utilizar o JSON.parse() que irá transformar a string em uma lista, ex:

**const asItem = AsyncStorage.getItem('chave')** **_// "[1,2,3]"_**
**const parsedItem = JSON.parse(asItem)** **_// [1,2,3]_**
