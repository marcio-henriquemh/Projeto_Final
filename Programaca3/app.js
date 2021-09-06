//Projeto final da disciplina de Programação 3
//Aluno Márcio Henrique

const express = require('express')
const server = express()
const dirSite = __dirname + '/views/'
const channelsModel = require('./dados/api.js')

server.use(express.static(dirSite))


//fazendo requisiçoes nas páginas HTML
server.get('/', (req, res) => {
    res.sendFile(dirSite+ 'index.html')
})

server.get('/api', (req, res) => {
    res.json({ channels: channelsModel })
})

server.get('/Sobre', (req, res) => {
    res.sendFile(dirSite+'Sobre.html')
})


//servidor rodando na porta 5000
server.listen(5000, () => {
    console.log('Servidor executando!')
    console.log('http://localhost:5000')
}) 
