const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const readLastLines = require('read-last-lines')

function getStaticFilePaths (staticDirectory) {
  return getFilePaths(staticDirectory).map(filename =>
    filename.slice(staticDirectory.length)
  )
}

function getFilePaths (dirPath) {
  const filenames = fs.readdirSync(dirPath)
  const filePaths = []

  for (let filename of filenames) {
    const filePath = path.join(dirPath, filename)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      filePaths.push.apply(filePaths, getFilePaths(filePath))
    } else {
      filePaths.push(filePath)
    }
  }

  return filePaths
}

const routers = [{
  path: '/api/logs',
  requestListener (req, res) {
    readLastLines.read('/var/log/shadowsocks.log', 500)
      .then(logs => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify({logs}))
        res.end()
      })
  }
}]

http.createServer((req, res) => {
  const urlPath = url.parse(req.url, true).path
  const staticDirectory = path.join(__dirname, 'dist')
  const staticFilePaths = getStaticFilePaths(staticDirectory)
  const matchFilePath = staticFilePaths.find(staticFilePath => {
    if (urlPath === '/') {
      return staticFilePath === '/index.html'
    }

    return staticFilePath === urlPath
  })

  if (matchFilePath) {
    res.write(fs.readFileSync(path.join(staticDirectory, matchFilePath)))
    res.end()

    return
  }

  routers.forEach(router => {
    if (router.path === urlPath) {
      router.requestListener(req, res)
    }
  })
}).listen(80)
