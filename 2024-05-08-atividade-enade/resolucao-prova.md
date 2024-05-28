**Questão 1 - [1 ponto] -** Você está desenvolvendo um aplicativo móvel com React Native e precisa exibir uma lista de dados em um componente. O componente recebe a lista de dados como prop (parâmetro). **SELECIONE** a maneira mais adequada para renderizar cada item da lista na interface gráfica.  
(A) Usando um laço de repetição for.  
(B) Usando a função map do JavaScript.  
**_(C) Usando o componente FlatList do React Native._**  
(D) Usando o componente SectionList do React Native.

---

**Questão 2 - [1 ponto] -** Ao escolher a melhor forma de criar sua aplicação, é fundamental entender as diferenças entre desenvolvimento mobile nativo e híbrido.
**DEFINA** o que é desenvolvimento mobile nativo e híbrido. **EXPLIQUE** três diferenças entre os dois tipos de desenvolvimento, destacando as vantagens e desvantagens de cada um.

#### Resposta:

Nativo: Cria aplicativos utilizando as tecnologias específicas de uma plataforma, Xcode com Objective-C / Swift. Android Studio com Java / Kotlin.
Híbrido: Criação de aplicativos utilizando, geralmente, tecnologias WEB, com frameworks como o React Native, podendo desenvolver um único código que funciona em várias plataformas.

Funcionalidades do dispositivo:

- Nativo: Acesso completo às funcionalidades, principalmente as novas, permitindo uma integração mais profunda de recursos dos celulares.
- Híbrido: Costumam depender de atualizações de frameworks/bibliotecas para ter acesso a funcionalidades nativas, podendo atrasar muito o acesso de novidades.

Custo de desenvolvimento:

- Nativo: É necessário mais de um time para desenvolver apps em diferentes plataformas, e funcionalidades precisam ser escritas mais de uma vez.
- Híbrido: Uma única base de código que compila para diversas plataformas, com a mesma linguagem e ambiente de desenvolvimento.

Experiência de usuário:

- Nativo: A melhor disponível, pois utiliza os recursos nativos de hardware e de User Interface.
- Híbrido: Desempenho pode ser um pouco inferior e os componentes muitas vezes serão os mesmos para as diferentes plataformas mobile, causando uma pequena piora na UX.

---

**Questão 3 - [1 ponto] -** O React Native oferece uma ampla gama de componentes prontos para o desenvolvimento de interfaces de usuário, facilitando a criação de interfaces interativas e intuitivas, reduzindo o tempo e esforço dos desenvolvedores. **LISTE** 3 componentes do React Native e explique suas funções básicas. Em sua resposta, apresente exemplos concretos do código de como cada componente pode ser utilizado para construir interfaces de usuário interativas e intuitivas.

#### Resposta:

View: Componente básico que serve como um container para outros componentes, auxiliando na organização e estruturação do layout, como uma div do HTML. Ex:

```jsx
<View>
  {outros componentes}
</View>
```

Text: Componente para exibir textos na tela. Ex:

```jsx
<Text> Essa prova é top! </Text>
```

Button: Componente que permite a interação com interface, gerando ações quando pressionados. Ex:

```jsx
<Button
    title=”Pressione para executar uma função”
    onPress={() => alert(“Função executada”)}
/>
```

---

**Questão 4 - [2 ponto] -** Um dos principais responsáveis pela performance do React Native é o Virtual DOM, uma tecnologia inovadora que otimiza o processo de atualização da interface gráfica.
**EXPLIQUE** o conceito de Virtual DOM no React Native e como ele contribui para a performance da aplicação. **DESCREVA** como o Virtual DOM otimiza o processo de atualização da interface gráfica, reduzindo o tempo de resposta e o consumo de recursos.

#### Resposta:

É o mesmo conceito do ReactJS, sendo uma representação do Document Object Model em memória, mais rápido de manipular e renderizar o conteúdo. Toda vez que ocorre alguma atualização no estado da aplicação, o react faz uma comparação entre o Virtual DOM e o DOM real. Ex:

Um estado (useState) é atualizado;  
O React compara a DOM dessa nova atualização com a DOM anterior (reconciliação);  
Identifica as mudanças;  
Atualiza o Dom Real com as mudanças, refletindo na tela;

---

**Questão 5 - [0,5 ponto] -** O React Native oferece diversas ferramentas para estilizar as interfaces de usuário das aplicações. Uma das mais importantes é o StyleSheet, que permite definir estilos de forma centralizada e reutilizável.
**APRESENTE** dois dos principais conceitos de estilização com objetos StyleSheet no React Native.

#### Resposta:

O StyleSheet nos permite utilizar um subconjunto das propriedades CSS para aplicar estilos aos componentes, eles são criados através de objetos que possuem propriedades e valores. Dessa maneira, podemos definir estilos de forma centralizada, reutilizável. Torna-se mais fácil a manutenção, pois os estilos passam a ter nomes com a chave do objeto.

Ele é importado do “react-native”, para definir os estilos, utilizamos o StyleSheet.create. Ex:

```jsx
<View style={styles.container}> {...} </View>

const styles = StyleSheet.create({container: flex: 1})
```

---

**Questão 6 - [1 ponto] -** O React possui diversos hooks internos que auxiliam no desenvolvimento das aplicações, alguns dos seus hooks principais são o useState e useEffect. **DESCREVA** o funcionamento do useState hook e **DEMONSTRE** como ele pode ser utilizado para controlar o estado de um componente.

#### Resposta:

É um hook que retorna um array com dois elementos, o primeiro sendo o estado atual e o segundo sendo uma função que atualiza o estado, ao atualizar, faz com que o componente seja renderizado novamente. Exemplo:

```jsx
const [count, setCount] = React.useState(0)

<Button
  title="Incrementar estado count"
  onPress={() => setCount((prev) => prev++)}
/>
```

---

**Questão 7 - [1 ponto] -** O Flexbox é um layout system que permite organizar elementos na tela de forma flexível e responsiva. Tanto o navegador web quanto o React Native oferecem suporte ao Flexbox, mas existem algumas diferenças importantes entre as duas implementações.
**CITE** duas diferenças entre o Flexbox da Web e o do React Native.

#### Resposta:

Direção principal:

- Web: A flex direction padrão é row, da esquerda para a direita.
- React Native: A flex direction padrão é column, de cima para baixo.

Propriedade flex:

- Web: Flex aceita até 3 valores como abreviação para grow, shrink e basis.
- React Native: Aceita apenas um valor, definindo o espaço que irá preencher.

---

**Questão 8 - [0,5 ponto] -** Os hooks são uma adição poderosa ao React e ao React Native. Eles permitem que você use o estado e outras funcionalidades do React sem escrever classes. Sobre o hook useEffect, **ASSINALE** a alternativa que descreve uma maneira que ele é utilizado.  
**_(A) Executar um efeito colateral em um componente React Native._**  
(B) Atualizar o estado de um componente.  
(C) Renderizar um componente condicionalmente.  
(D) Navegar entre diferentes telas.

---

**Questão 9 - [0,5 ponto] -** O Flexbox é uma técnica de layout amplamente utilizada em React Native para criar interfaces consistentes e responsivas. **APRESENTE** três dos principais atributos do Flexbox e explique como utilizá-los para estilizar layouts em React Native.

#### Resposta:

`flexDirection`: Indica qual a direção principal dos elementos que estarão dentro do container flex, importante para definir se os flex itens ficarão dispostos na vertical ou na horizontal.

`justifyContent`: Define como os itens serão alinhados no eixo principal. Caso a flexDirection seja ‘column’, o justifyContent alinhará os itens no eixo vertical.

`alignItems`: Define como os itens serão alinhados no eixo secundário. Caso a flexDirection seja ‘column’, o alignItems alinhará os itens no eixo horizontal.

---

**Questão 10 - [0,5 ponto] -** Projetos de desenvolvimento começam com uma pequena base de código e vão crescendo ao longo do tempo. Pensando em organização e nomenclatura dos estilos, **INDIQUE** qual a melhor maneira de estilizar componentes em React Native.

(A) Usando estilos inline.  
(B) Usando folhas de estilo CSS.  
**_(C) Usando o StyleSheet do React Native._**  
(D) Usando uma biblioteca de terceiros para estilização.  
(E) Usando uma combinação de estilos inline, folhas de estilo CSS e o StyleSheet do React Native

---

**Questão 11 - [1 ponto] -** Conforme aprendido e utilizado durante as aulas, a estilização dos componentes pode ser feita de diferentes maneiras. Utilizando um objeto de estilos com o StyleSheet do React Native, **CRIE** um estilo onde a chave desse objeto se chame button e seus estilos sejam: fundo azul (#0000FF), texto branco (#FFFFFF) e um raio de borda de 10px

#### Resposta:

```jsx
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0000FF',
    color: '#FFFFFF',
    borderRadius: 10,
  },
})
```
