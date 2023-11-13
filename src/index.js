const express = require('espress')

const add = express()

app.get('/', (req,res) => {
    res.send('Hi there!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})