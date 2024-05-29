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

### Exemplos de chamadas fetch

Conforme mencionado anteriormente, a função **_fetch_** é utilizada para realizar requisições HTTP, e pode ser utilizada para diversos tipos de chamadas, como GET, POST, PUT, DELETE, etc.

```javascript
// GET
try {
  const response = await fetch('www.get-url.com')
  const data = await response.json()
  console.log(data)
} catch (error) {
  console.error(error)
}
```

---

O método fetch aceita um segundo argumento, um objeto de opções, que pode ser utilizado para configurar a requisição, como método, headers, body, etc.

```javascript
// POST
try {
  const response = await fetch('www.post-url.com', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value' }),
  })
} catch (error) {
  console.error(error)
}
```

---

```javascript
// DELETE
try {
  const id = 1
  const response = await fetch(`www.delete-url.com/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
} catch (error) {
  console.error(error)
}
```

---

```javascript
// PUT
try {
  const id = 1
  const response = await fetch(`www.put-url.com/${id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value' }),
  })
} catch (error) {
  console.error(error)
}
```
