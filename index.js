const express = require('express')
const app = express()
const port =process.env.PORT || 3000

app.use(express.static('resume1'))

app.get('/', (req, res) => res.sendFile(__dirname + '/resume1/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))