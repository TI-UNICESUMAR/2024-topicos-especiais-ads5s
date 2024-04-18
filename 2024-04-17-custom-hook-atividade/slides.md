---
marp: true
author: Pedro Satin
title: React Native
class: invert
paginate: true
size: 4:3
backgroundImage: 'linear-gradient(to bottom, #1111, #4444)'
---

<style> 
  * {
    color: rgb(250, 250, 250, 0.85);
  }

  section {
    width: 960px;
    height: 720px;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 0;
    text-decoration: underline;
    color: #fff;
    text-align: center;
  }

  strong {
    color: rgb(255, 255, 255, 1);
  }

  strong > em {
    color: rgb(255, 255, 255, 1);
  }

  p {
    margin: 1rem 0;
  }
</style>

### Custom hooks

<!-- _footer: pedro.mateus@unicesumar.edu.br -->

Os **_custom hooks_** são funções JavaScript que utilizam hooks do React, e podem ser reutilizadas em vários componentes funcionais. Suas principais características são:

1. Prefixo com **_use_**, exemplo: `useFetch`, `useTheme`, etc;
2. Devem utilizar outros hooks do React, caso contrário podem ser funções normais;
3. Um custom hook pode gerenciar seu próprio estado, lógica e efeitos colaterais;
4. Não renderiza componentes, apenas encapsula lógica.

---

São, resumidamente, funções que utilizam hooks do React, e podem ser reutilizadas em vários componentes funcionais.

Comumente utilizados quando possuímos lógica compartilhada entre vários componentes, por exemplo, uma função que realiza uma requisição HTTP:

---

```jsx
import React from 'react'

const useFetch = (url) => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}
```

---

```jsx
import React from 'react'
import { View, Text } from 'react-native'
import useFetch from './useFetch' // Importe o hook

const ReactComponent = () => {
  const { data, isLoading, error } = useFetch('https://api.example.com/data')

  if (isLoading) {
    return <Text>Carregando...</Text>
  }

  if (error) {
    return <Text>Houve um erro: {error.message}</Text>
  }

  return (
    <View>
      <Text>Retorno da chamada: {JSON.stringify(data)}</Text>
    </View>
  )
}

export default ReactComponent
```

---

Links úteis:

[Reusando logica com custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

<!-- _footer: pedro.mateus@unicesumar.edu.br -->
