const express = require('express')
const app = express()
const port = process.env.PORT;

app.set('view engine', 'ejs')
let pLanguages = [];

// Middleware
app.use(express.urlencoded( {exteded: true}))
app.use(express.static('public'))

// let pLanguages = [];

app.get('/', (req, res) => {
    res.render('index', {plName: pLanguages})
})
app.get('/contact', (req, res) => {
    res.render('contact', {})
})
app.post('/', (req, res) => {
    const pl = req.body.pLanguage;
    pLanguages.push(pl)
    res.redirect('/')
})

app.listen(port,()=>{
    console.log("App is running at ", port)
})
