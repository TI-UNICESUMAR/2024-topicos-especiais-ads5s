// Para rodar a api é necessário ter o node instalado e rodar o comando `node index.js`
// Fica disponível em http://localhost:3001

const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Requisição recebida: ', req.url)

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, PATCH')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(
    JSON.stringify([
      { nome: 'Fulano', idade: 30 },
      { nome: 'Ciclano', idade: 25 },
    ])
  )

  res.end()
})

server.listen({ port: 3001 }, () => {
  console.log('Servidor rodando na porta 3001')
})
