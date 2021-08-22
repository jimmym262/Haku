const express = require('express');
const app = express();
const routes = require('./routes/index.js')
const path = require('path')

app.set('port',8080)
//motor de vista
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'static')))


app.use("/",routes())
app.listen(app.get('port'),()=>console.log('servidor iniciado correctamente'))

