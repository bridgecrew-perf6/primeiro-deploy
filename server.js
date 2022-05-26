if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express');
//app é executado pelo módulo express
const app = express();


//importando router

const indexRouter = require('./routes/index')

const produtosRouter = require('./routes/produtos')

app.use('/', indexRouter)
app.use('/produtos', produtosRouter)

//app traz função listen do express
app.listen(process.env.PORT)