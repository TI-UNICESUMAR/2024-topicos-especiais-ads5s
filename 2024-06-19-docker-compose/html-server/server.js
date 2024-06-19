var http = require('http'),
  fs = require('fs')

fs.readFile('./index.html', (err, html) => {
  http
    .createServer(function (req, res) {
      res.writeHeader(200, { 'Content-Type': 'text/html' })
      res.write(html)
      res.end()
    })
    .listen(8000)
})
