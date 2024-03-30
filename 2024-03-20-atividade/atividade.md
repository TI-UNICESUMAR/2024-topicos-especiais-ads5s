Resolução da atividade anterior: https://snack.expo.dev/@satinp/navigation

Adicionar no package.json os pacotes: 
```json
  {
    "react-native-reanimated": "~3.6.2",
    "@react-navigation/bottom-tabs": "6.x",
    "@react-native-async-storage/async-storage": "1.21.0"
  }
```
A partir do arquivo da aula passada (link acima), realizar as seguintes alterações:

1. Criar um **BottomStackNavigator**, onde a **primeira Tab** seja a do **Squirtle** e a **segunda tab** chamada **Todo List**
2. A **primeira Tab** do Squirtle deverá **incorporar** a **Stack Navigation das Páginas do Squirtle e do Pokemon**
3. A **Segunda Tab** da Todo list deverá **incorporar somente** uma Stack Navigation que possui uma **unica Screen** de uma página da **TodoList**.
4. A página da **TodoList** deverá ter um **TextInput**, um **Botão** e um **Texto**, quando houver texto no input e clicar no Botão para salvar, o texto deverá ser salvo em um AsyncStorage.
5. A página deverá sempre **mostrar** o **texto salvo** no **AsyncStorage**.

OBS: O BottomTab Navigator vai substituir o atual Stack Navigator, onde a primeira Tab Screen será a Stack de navegação da tela do Squirtle e do Pokemon e a segunda Tab Screen será uma Stack com uma tela do Todo List.

Extra:

- Salvar e mostrar uma lista de itens no AsyncStorage
- Adicionar funcionalidade de editar/excluir um item

Documentações auxiliares:
https://reactnavigation.org/docs/bottom-tab-navigator/
https://react-native-async-storage.github.io/async-storage/
https://reactnative.dev/docs/asyncstorage
