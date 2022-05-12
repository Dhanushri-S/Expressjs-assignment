const express = require('express')
const app = express()
const port = 4090
const path= require('path')
const hbs=require('hbs')


app.set('view engine','hbs')
app.set('views')

const ImagesPath= path.join(__dirname,'./Images')
app.use(express.static(ImagesPath))

const stylePath= path.join(__dirname,'./Public')
app.use(express.static(stylePath))

const componentPath= path.join(__dirname,'./component')
hbs.registerPartials(componentPath)

app.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'})
})

app.get ('/About',(req,res)=>{
    res.render('About',{title: 'About Page'})
})

app.post('/',(req,res)=>{
    console.log(req.body);
})

app.listen(4090, () => 
    console.log(`Listening to port ${port}!`))