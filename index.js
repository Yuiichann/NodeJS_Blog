const express = require('express')
const app = express()
const port = 3000

const text = '<h1>Hello world</h1>'
app.get('/home', (req, res) => res.send(text))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))