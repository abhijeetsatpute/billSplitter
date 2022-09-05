const path = require('path');

const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './index.html'));
})


app.post('/split', (req, res, next) => {
    const amount = req.body.amount;
    const numPeep = req.body.peeps;
    res.send(`Amount per person would be: ${amount/numPeep}`)
})

app.listen(80, ()=> {
    console.log("App listening on port 80");
})