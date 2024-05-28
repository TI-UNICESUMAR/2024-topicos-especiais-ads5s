A partir da resolução da atividade da semana passada: https://snack.expo.dev/@satinp/15-05, ou pelo repositório: https://github.com/satinP/topicos-especiais-app

Implementar a seguinte funcionalidade:

Criar uma tela de login e privar a tab de Todo para usuários "logados":

- Criar uma nova tela de Login, LoginScreen, que tenha inputs de usuário e senha e um botão de fazer login;
- Adicionar uma validação na ToDoListStackNavigator, que mostre essa tela de Login para quem não estiver autenticado;
- A autenticação será uma simulação, utilizando um dado no AsyncStorage, caso não tenha esse valor no AyncStorage, mostre a tela de login, caso exista o valor, mostre a TodoListScreen.

Utilize o hook useAsyncStorage para verificar e atualizar o dado de usuário logado.

Documentação sobre Autenticação utilizando o React Navigation: https://reactnavigation.org/docs/auth-flow/
