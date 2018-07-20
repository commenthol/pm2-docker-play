const http = require('http')
const argv = process.argv.slice(2)

const isPm2Master = process.argv.includes('--master')
const isPm2 = ('NODE_APP_INSTANCE' in process.env)

function run () {
  const o = {
    pid: process.pid,
    date: new Date().toISOString(),
    argv,
    isPm2Master,
    isPm2
  }
  console.log(o)
  setTimeout(() => run(), 1000)
}

run()

http.createServer((req, res) => {
  const {method, url} = req
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({method, url}))
  res.end()
}).listen(3000)
