const express = require('express');
const routes = express.Router();

// Importar el controlador
const Controller = require('../controllers/Controller');

//EDIFICIO
//GET
routes.get('/EDIFICIO/', Controller.nuevoEdificio);
routes.get('/EDIFICIO/:id', Controller.listarEdificos);
//POST
routes.post('/EDIFICIO/', Controller.obtenerEdificio);
//PUT
routes.put('/EDIFICIO/:id', Controller.editarEdificio);
//DELETE
routes.delete('/EDIFICIO/:id', Controller.eliminarEdificio);


//AULA
//GET
routes.get('/AULA/', Controller.nuevaAula);
routes.get('/AULA/:id', Controller.listarAulas);
//POST
routes.post('/AULA/', Controller.obtenerAula);
//PUT
routes.put('/AULA/:id', Controller.editarAula);
//DELETE
routes.delete('/AULA/:id', Controller.eliminarAula);



module.exports = routes;