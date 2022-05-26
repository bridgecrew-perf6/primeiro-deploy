//arq p redirecionar as rotas
//index primeira rota

const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.end('Servidor ativo - Router implantado')
})


//exporta p outro arquivo 
module.exports = router
