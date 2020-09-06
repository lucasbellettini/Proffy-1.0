const express = require('express')
const server = express()
const { pageGiveClasses, pageLanding, pageStudy, saveClasses } = require('./pages')

//configurando nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})


server
//receber os dados do query.body
.use(express.urlencoded({ extended: true }))
//configurando arquivos estáticos
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-class', saveClasses)
.listen(5500)