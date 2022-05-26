if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express');
//app é executado pelo módulo express
const app = express();

app.get('/', (req,res) => {
    res.end('Servidor ativo')
})

//app traz função listen do express
app.listen(process.env.PORT)