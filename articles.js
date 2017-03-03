const express = require('express')
const app = express()
const articles = [{'title': 'article'}]
const bodyParser = require('body-parser')

app.get('/articles', (req, res, next) => {
  res.send(articles)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/articles', (req, res, next) => {
  const article = {title: req.body.title}
  articles.push(article)
  res.send(article)
})

app.get('/articles/:id', (req, res, next) => {
  console.log(req)
  const id = req.params.id
  console.log('Fetching: ', id)
  res.send(articles[id])
})

app.delete('/articles/:id', (req, res, next) => {
  const id  = req.params.id
  console.log('Deleting: ', id)
  console.log('before ', articles)
  delete articles[id]
  console.log('after ', articles)
  res.send({message: 'Deleted'})
})

app.listen(process.env.PORT || 3000)

module.exports = app
