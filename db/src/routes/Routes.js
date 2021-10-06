const express = require('express');
const routes = express.Router();

// Importar el controlador
const Controller = require('../controllers/Controller');

//GET
routes.get('/autos/', Controller.listarAutos);
routes.get('/vendedor/', Controller.listarVendedores);
routes.get('/venta/', Controller.listarVentas);
routes.get('/vendedor/', Controller.logIn);

routes.get('/vendedor/:id', Controller.obtenerVendedor);
routes.get('/autos/:id', Controller.obtenerAuto);
routes.get('/venta/:id', Controller.obtenerVentaDeAuto);

//POST
routes.post('/autos/', Controller.altaAuto);
routes.post('/vendedor/', Controller.nuevoVendedor);
routes.post('/venta/', Controller.venta);

//PUT
routes.put('/autos/:id', Controller.editarAuto);
routes.put('/vendedor/:id', Controller.editarVendedor);
routes.put('/venta/:id', Controller.editarVenta);

//DELETE
routes.delete('/autos/:id', Controller.eliminarAuto);
routes.delete('/vendedor/:id', Controller.eliminarVendedor);


module.exports = routes;