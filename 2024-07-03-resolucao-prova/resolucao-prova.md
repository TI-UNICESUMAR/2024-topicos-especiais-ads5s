**Questão 01 - [1 ponto]** - Em um aplicativo React Native, costumamos precisar consumir dados de uma API externa para alimentar a interface do usuário. Para isso, você precisa realizar requisições HTTP. **EXPLIQUE** como realizar requisições HTTP em React Native utilizando o fetch, incluindo o tratamento de erros e respostas.

**_R: A request pode ser feita utilizando um useEffect com um array de dependências vazias, indicando que a request será feita somente uma vez, quando o componente for renderizado. O tratamento de erro e resposta pode ser feito através de um try catch ou promise.then e promise.catch, onde podemos armazenar o resultado de sucesso e erro em dois useState diferentes. Ex:_** 

```jsx
const [dado, setDado] = useState(null); 
const [carregando, setCarregando] = useState(true); 
const [erro, setErro] = useState(null); 

useEffect(() => { 
  fetch(‘https://api.com’) 
    .then(response => { 
      if (!response.ok) { 
        throw new Error('Resposta da api nao foi OK'); 
      } 
      return response.json(); 
    }) 
    .then(apiData => { 
      setDado(apiData); 
      setCarregando(false); 
    })
    .catch(error => { 
      setErro(error); 
      setCarregando(false); 
    }); 
}, []);
```

<br><br>

**Questão 02 - [0,5 ponto]** - Para acomodar diferentes tamanhos de tela, o React Native oferece suporte a algumas propriedades para criar layouts responsivos em diferentes tamanhos de tela, permitindo uma boa experiência do usuário em diversos dispositivos.

**ESCOLHA** a opção que faz parte das propriedades:  
A) ListView  
B) View  
C) Responsive  
D) Media query  
**_E) Flexbox_**  

<br><br>

**Questão 03 - [0,5 ponto]** - O Stack Navigator é um componente de navegação do React Navigation, amplamente utilizado em aplicativos React Native. Ele permite criar uma "pilha de telas", onde é possível navegar entre diferentes telas do aplicativo de forma intuitiva. Essa navegação pode ser feita através de métodos programáticos ou por botões de navegação padrão. Em relação a seu modelo de navegação, **ASSINALE** a alternativa correta: 

**_A) O Stack Navigator permite a navegação pelas telas do aplicativo por meio do método "navigate" ou do botão de voltar, inserido por padrão no topo de cada tela. Com isso, é possível acessar qualquer uma das telas que tenha sido incluída em seus "screens"'._**  
B) Após navegar para determinada tela, não é possível voltar à tela anterior sem antes recarregar todo o aplicativo.  
C) Os botões de navegação nesse modelo ficam, por padrão, alocados na parte inferior da tela.  
D) As opções de navegação ficam dispostas em um menu, que, por padrão, fica escondido à esquerda da tela.  
E) A navegação no modelo Stack Navigator é realizada apenas por meio do botão de voltar no topo da tela.  

<br><br>

**Questão 04 - [0,5 ponto]** - A API nativa AsyncStorage do React Native é muito utilizada no conceito de aplicações “Offline First”. **DESCREVA** para que serve o AsyncStorage e o **COMPARE** com uma API da Web.

**_R: AsyncStorage é uma API de armazenamento local, permitindo armazenar dados no dispositivo do usuário e persistir o dado durante múltiplos usos (abrir/ fechar app). Ele é usado para salvar informações de forma assíncrona, como preferências do usuário, tokens de autenticação, ou dados que precisam ser mantidos entre as sessões do aplicativo. AsyncStorage é similar ao localStorage da web, porém, diferentemente do localStorage, que é síncrono, o AsyncStorage é assíncrono._**

<br><br>

**Questão 05 - [0,5 ponto]** - Em React Native, o uso de hooks é uma prática comum para gerenciar estado e efeitos colaterais em componentes funcionais. **DESCREVA** a diferença entre _useState_ e _useEffect_ e forneça um exemplo de como cada um pode ser usado dentro de um componente funcional.

**_R: useState é um hook que permite adicionar estado a componentes funcionais._**

```jsx
const Contador = () => { 
  const [contador, setContador] = useState(0); 
  return ( 
    <View> 
      <Text>Count: {contador}</Text> 
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    </View> 
  ); 
};

```

**_useEffect é um hook que permite realizar efeitos colaterais em componentes funcionais, como fetch de dados, assinaturas, ou manipulações do DOM._**

```jsx
const FetchData = () => { 
  const [dado, setDado] = useState(null); 
  useEffect(() => { 
    fetch('https://api.example.com/dadps') 
      .then(response => response.json()) 
      .then(apiData => setDado(apiData)); 
  }, []);

  return ( 
    <View> 
      <Text>Dados: {JSON.stringify(dado)}</Text> 
    </View> 
  ); 
};
```

<br><br>

**Questão 06 - [0,5 ponto]** - O código a seguir mostra um componente React Native que utiliza hooks para gerenciar estado e exibir um contador que pode ser incrementado e decrementado.

```
const Counter = () => {  
  const [count, setCount] = useState(0);  
  
  const incr = () => setCount(count + 1)  
  const decr = () => setCount(count - 1)  
  
  return (  
    <View>  
      <Text>Count: {count}</Text>  
      <Button title="Increment" onPress={incr} />  
      <Button title="Decrement" onPress={decr} />  
    </View>  
  );  
};
```

**EXPLIQUE** o funcionamento do componente Counter e **DESCREVA** o que acontece quando os botões "Increment" e "Decrement" são pressionados.


**_R: O componente Counter usa o hook useState para gerenciar o estado do contador, de nome count. Quando o botão "Increment" é pressionado, a função incr é chamada, que incrementa o valor de count em 1 e causa um re-render na tela por ser executar setState (setCount), mostrando o valor atualizado no componente Text. Quando o botão "Decrement" é pressionado, a função decr é chamada, que decrementa o valor de count em 1, também causando re-render e atualizando o texto._**

<br><br>

**Questão 07 - [1 ponto]** - Docker é amplamente utilizado para criar, executar e gerenciar contêineres de software. Duas ferramentas essenciais no ecossistema Docker são o Dockerfile e o Docker Compose. CITE duas diferenças entre o Dockerfile e o docker-compose.

**_R: O Dockerfile é usado para definir o processo de construção de uma única imagem Docker, especificando todas as etapas necessárias para criar essa imagem. Já o Docker Compose é usado para definir e orquestrar múltiplos contêineres que formam uma aplicação, especificando como eles interagem entre si._**

**_O Dockerfile é escrito em um formato específico de Dockerfile com instruções como FROM, COPY, RUN, etc. O Docker Compose usa um arquivo YAML (docker-compose.yml) para definir serviços, redes e volumes._**

<br><br>

**Questão 08 - [0,5 ponto]** - O Docker é uma plataforma de virtualização que permite a criação de containers, que são leves, portáteis e consistem em tudo o que é necessário para executar um software, incluindo código, runtime, bibliotecas e configurações. As imagens Docker são um componente fundamental dessa plataforma. **ASSINALE** a alternativa que indica o que é uma imagem Docker. 

A) Um ambiente de desenvolvimento completo  
B) Um container em execução  
**_C) Um modelo para criar containers_** 
D) Um software para gerenciar containers  

<br><br>

**Questão 09 - [0,5 ponto]** - O gerenciamento de contêineres Docker pode ser realizado inteiramente via linha de comando, a plataforma docker disponibiliza diversos comandos que permitem o gerenciamento desses contêineres.
**INDIQUE** qual comando é utilizado para iniciar um container no Docker.

**_R: O comando utilizado para iniciar um container no Docker é o docker run._** 
**_Ex: docker run -it ubuntu_**

<br><br>

**Questão 10 - [0,5 ponto]** - O código a seguir mostra um exemplo básico de um Dockerfile para uma aplicação Node.js.

```
  FROM node:14 
  WORKDIR /app 
  COPY package.json . 
  RUN npm install 
  COPY . . 
  CMD ["node", "index.js"]
```

**INTERPRETE** o Dockerfile acima e **EXPLIQUE** o que cada instrução faz no processo de construção da imagem Docker.


**_R: FROM node:14: Define a imagem base como Node.js versão 14._** 

**_WORKDIR /app: Define o diretório de trabalho dentro do contêiner como /app._**

**_COPY package.json .: Copia o arquivo package.json do diretório atual no host para o diretório de trabalho no contêiner._** 

**_RUN npm install: Executa o comando npm install para instalar as dependências listadas no package.json._** 

**_COPY . .: Copia todos os arquivos do diretório atual no host para o diretório de trabalho no contêiner._** 

**_CMD ["node", "index.js"]: Define o comando a ser executado quando o contêiner é iniciado, que neste caso é node index.js._**
