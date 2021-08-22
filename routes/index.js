const express = require('express');
const route = express.Router();

module.exports = ()=>{
    
    route.get('/',(req,res)=>{
        res.render('template')
    })

    return route
}
