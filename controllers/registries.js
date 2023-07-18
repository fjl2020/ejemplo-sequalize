const Sequelize     = require('sequelize');
// const usuario       = require('../models').usuario;
const registries       = require('../models').registries;
module.exports = {
//  create(req, res) {
//     return registry
//         .create ({
//              username: req.params.username,
//              status: req.params.status
//         })
//         .then(usuario => res.status(200).send(usuario))
//         .catch(error => res.status(400).send(error))
//  },
 list(_, res) {
     return registries.findAll({})
        .then(registries => res.status(200).send(registries))
        .catch(error => res.status(400).send(error))
 },
 contar(_, res) {
    t=Date.now()
    console.log(t);
    return registries.findAll({attributes: ['id','inicio','final']})
       .then(async registries => { 
        
        reg=await registries.map(function(r){
            var robj={}
            robj[r.id]=r.final-r.inicio
            return robj
        })

        res.status(200).send(reg)
    })
       .catch(error => res.status(400).send(error))
},
contar2(_, res) {
    t=Date.now()
    console.log(t);
    return registries.findAll({attributes: ['id','inicio','final']})
       .then(async registries => { 
        
        reg=await registries.map(function(r){
            var robj={}
            robj[r.id]=r.final-r.inicio
            return robj
        })

        res.status(200).send(reg)
    })
       .catch(error => res.status(400).send(error))
},
 find (req, res) {
     return registries.findAll({
         where: {
            registries: req.params.registries,
         }
     })
     .then(registries => res.status(200).send(registries))
     .catch(error => res.status(400).send(error))
  },
};