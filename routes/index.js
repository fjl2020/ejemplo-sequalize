/* Controllers */
const registroController = require('../controllers/registries');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'Example project did not give you access to the api web services',
   }));
//    app.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);
   app.get('/api/registros/list', registroController.list);
   app.get('/api/registros/contar',registroController.contar)
//    app.get('/api/usuario/find/username/:username', usuarioController.find);
};