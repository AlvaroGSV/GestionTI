const express = require('express');
const routes = express.Router();

// Importar el controlador
const Controller = require('../controllers/Controller');

//EDIFICIO
//GET
routes.get('/EDIFICIO/', Controller.listarEdificos);
routes.get('/EDIFICIO/:id', Controller.obtenerEdificio);
//POST
routes.post('/EDIFICIO/', Controller.nuevoEdificio);
//PUT
routes.put('/EDIFICIO/:id', Controller.editarEdificio);
//DELETE
routes.delete('/EDIFICIO/:id', Controller.eliminarEdificio);

//AULA
//GET
routes.get('/AULA/', Controller.listarAulas);
routes.get('/AULA/:id', Controller.obtenerAula);
//POST 
routes.post('/AULA/', Controller.nuevaAula);
//PUT
routes.put('/AULA/:id', Controller.editarAula);
//DELETE
routes.delete('/AULA/:id', Controller.eliminarAula);

//DOCUMENTACION
//GET
routes.get('/DOCUMENTACION/', Controller.listarDocumentaciones);
routes.get('/DOCUMENTACION/:id', Controller.obtenerDocumentacion);
//POST 
routes.post('/DOCUMENTACION/', Controller.nuevaDocumentacion);
//PUT
routes.put('/DOCUMENTACION/:id', Controller.editarDocumentacion);
//DELETE
routes.delete('/DOCUMENTACION/:id', Controller.eliminarDocumentacion);

//SOFTWARE
//GET
routes.get('/SOFTWARE/', Controller.listarSoftware);
routes.get('/SOFTWARE/:id', Controller.obtenerSoftware);
//POST 
routes.post('/SOFTWARE/', Controller.nuevoSoftware);
//PUT
routes.put('/SOFTWARE/:id', Controller.editarSoftware);
//DELETE
routes.delete('/SOFTWARE/:id', Controller.eliminarSoftware);

//LICENCIA
//GET
routes.get('/LICENCIA/', Controller.listarLicencias);
routes.get('/LICENCIA/:id', Controller.obtenerLicencia);
//POST 
routes.post('/LICENCIA/', Controller.nuevaLicencia);
//PUT
routes.put('/LICENCIA/:id', Controller.editarLicencia);
//DELETE
routes.delete('/LICENCIA/:id', Controller.eliminarLicencia);

//CATEGORIA DE INVENTARIO
//GET
routes.get('/CATINVENTARIO/', Controller.listarCatInventario);
routes.get('/CATINVENTARIO/:id', Controller.obtenerCatInventario);
//POST 
routes.post('/CATINVENTARIO/', Controller.nuevaCatInventario);
//PUT
routes.put('/CATINVENTARIO/:id', Controller.editarCatInventario);
//DELETE
routes.delete('/CATINVENTARIO/:id', Controller.eliminarCatInventario);

//PRODUCTO DE INVENTARIO
//GET
routes.get('/PRODINVENTARIO/', Controller.listarPInventario);
routes.get('/PRODINVENTARIO/:id', Controller.obtenerPInventario);
//POST 
routes.post('/PRODINVENTARIO/', Controller.nuevaPInventario);
//PUT
routes.put('/PRODINVENTARIO/:id', Controller.editarPInventario);
//DELETE
routes.delete('/PRODINVENTARIO/:id', Controller.eliminarPInventario);

//HARDWARE DE COMPUTADORA
//GET
routes.get('/HARDCOMPU/', Controller.listarHardComputadora);
routes.get('/HARDCOMPU/:id', Controller.obtenerHardComputadora);
//POST 
routes.post('/HARDCOMPU/', Controller.nuevoHardComputadora);
//PUT
routes.put('/HARDCOMPU/:id', Controller.editarHardComputadora);
//DELETE
routes.delete('/HARDCOMPU/:id', Controller.eliminarHardComputadora);

//LISTA DE COMPONENTES DE COMPUTADORA
//GET
routes.get('/LISTHARDCOMPCOMPU/', Controller.listaComponentesComputadora);
routes.get('/LISTHARDCOMPCOMPU/:id', Controller.obtenerComponenteComputadora);
//POST 
routes.post('/LISTHARDCOMPCOMPU/', Controller.nuevaListaComponentesComputadora);
//PUT
routes.put('/LISTHARDCOMPCOMPU/:id', Controller.editarComponenteComputadora);
//DELETE
routes.delete('/LISTHARDCOMPCOMPU/:id', Controller.eliminarComponenteComputadora);

//SOFTWARE BASE DE COMPUTADORA
//GET
routes.get('/SFTWBASECOMPU/', Controller.listaSftwBaseComputadora);
routes.get('/SFTWBASECOMPU/:id', Controller.obtenerSftwBaseComputadora);
//POST 
routes.post('/SFTWBASECOMPU/', Controller.nuevaSftwBaseComputadora);
//PUT
routes.put('/SFTWBASECOMPU/:id', Controller.editarSftwBaseComputadora);
//DELETE
routes.delete('/SFTWBASECOMPU/:id', Controller.eliminarSftwBaseComputadora);

//CONFIGURACION DE SOFTWARE DE COMPUTADORA
//GET
routes.get('/CONFIGSFTWCOMPU/', Controller.listaConfigSftwCompu);
routes.get('/CONFIGSFTWCOMPU/:id', Controller.obtenerConfigSftwCompu);
//POST 
routes.post('/CONFIGSFTWCOMPU/', Controller.nuevaConfigSftwCompu);
//PUT
routes.put('/CONFIGSFTWCOMPU/:id', Controller.editarConfigSftwCompu);
//DELETE
routes.delete('/CONFIGSFTWCOMPU/:id', Controller.eliminarConfigSftwCompu);

//ELEMENTO DE ONFIGURACION DE SOFTWARE
//GET
routes.get('/ELEMENTSOFTCONF/', Controller.listaElementSoftConfig);
routes.get('/ELEMENTSOFTCONF/:id', Controller.obtenerElementSoftConfig);
//POST 
routes.post('/ELEMENTSOFTCONF/', Controller.nuevoElementSoftConfig);
//PUT
routes.put('/ELEMENTSOFTCONF/:id', Controller.editarElementSoftConfig);
//DELETE
routes.delete('/ELEMENTSOFTCONF/:id', Controller.eliminarElementSoftConfig);

//COMPUTADORA
//GET
routes.get('/COMPU/', Controller.listaComputadoras);
routes.get('/COMPU/:id', Controller.obtenerComputadora);
//POST 
routes.post('/COMPU/', Controller.nuevaComputadora);
//PUT
routes.put('/COMPU/:id', Controller.editarComputadora);
//DELETE
routes.delete('/COMPU/:id', Controller.eliminarComputadora);

//REDES
//GET
routes.get('/NET/', Controller.listaRedes);
routes.get('/NET/:id', Controller.obtenerRed);
//POST 
routes.post('/NET/', Controller.nuevaRed);
//PUT
routes.put('/NET/:id', Controller.editarRed);
//DELETE
routes.delete('/NET/:id', Controller.eliminarRed);

//DISPOSITIVOS DE RED
//GET
routes.get('/NETDEVICE/', Controller.listaDispositivosRed);
routes.get('/NETDEVICE/:id', Controller.obtenerDispositivoRed);
//POST 
routes.post('/NETDEVICE/', Controller.nuevoDispositivoRed);
//PUT
routes.put('/NETDEVICE/:id', Controller.editarDispositivoRed);
//DELETE
routes.delete('/NETDEVICE/:id', Controller.eliminarDispositivoRed);

//OTROS DISPOSITIVOS
//GET
routes.get('/OD/', Controller.listaOtrosDispositivos);
routes.get('/OD/:id', Controller.obtenerOtroDispositivo);
//POST 
routes.post('/OD/', Controller.nuevoOtroDispositivo);
//PUT
routes.put('/OD/:id', Controller.editarOtroDispositivo);
//DELETE
routes.delete('/OD/:id', Controller.eliminarOtroDispositivo);

//LOG IN
//GET
routes.get('/logIn/:id', Controller.logIn);

//USUARIOS
//GET
routes.get('/USUARIOS/', Controller.listaUsuarios);
routes.get('/USUARIOS/:id', Controller.obtenerUsuario);
//POST 
routes.post('/USUARIOS/', Controller.nuevoUsuario);
//PUT
routes.put('/USUARIOS/:id', Controller.editarUsuario);
//DELETE
routes.delete('/USUARIOS/:id', Controller.eliminarUsuario);

//TECNICOS
//GET
routes.get('/TECNICOS/', Controller.listaTecnicos);
routes.get('/TECNICOS/:id', Controller.obtenerTecnico);
//POST 
routes.post('/TECNICOS/', Controller.nuevoTecnico);
//PUT
routes.put('/TECNICOS/:id', Controller.editarTecnico);
//DELETE
routes.delete('/TECNICOS/:id', Controller.eliminarTecnico);

//INCIDENTE
//GET
routes.get('/INCIDENTE/', Controller.listaIncidentes);
routes.get('/INCIDENTE/:id', Controller.obtenerIncidente);
//POST 
routes.post('/INCIDENTE/', Controller.nuevoIncidente);
//PUT
routes.put('/INCIDENTE/:id', Controller.editarIncidente);
//DELETE
routes.delete('/INCIDENTE/:id', Controller.eliminarIncidente);

//INCIDENTETECNCICO
//GET
routes.get('/INCIDENTETECNCICO/', Controller.listaRelacionesIncidentesTecncios);
routes.get('/INCIDENTETECNCICO/:id', Controller.obtenerRelacionIncidenteTecncio);
//POST 
routes.post('/INCIDENTETECNCICO/', Controller.nuevaRelacionIncidenteTecncio);
//PUT
routes.put('/INCIDENTETECNCICO/:id', Controller.editarRelacionIncidenteTecncio);
//DELETE
routes.delete('/INCIDENTETECNCICO/:id', Controller.eliminarRelacionIncidenteTecncio);

//SERVICIOTECNICO
//GET
routes.get('/SERVICIOTECNICO/', Controller.listaServicioTecnico);
routes.get('/SERVICIOTECNICO/:id', Controller.obtenerServicioTecnico);
//POST 
routes.post('/SERVICIOTECNICO/', Controller.nuevoServicioTecnico);
//PUT
routes.put('/SERVICIOTECNICO/:id', Controller.editarServicioTecnico);
//DELETE
routes.delete('/SERVICIOTECNICO/:id', Controller.eliminarServicioTecnico);

//PASOSERVICIOTECNICO
//GET
routes.get('/PASOSERVICIOTECNICO/', Controller.listarPasosServicioTecnico);
routes.get('/PASOSERVICIOTECNICO/:id', Controller.listarPasoServicioTecnico);
//POST 
routes.post('/PASOSERVICIOTECNICO/', Controller.nuevoPasoServicioTecnico);
//PUT
routes.put('/PASOSERVICIOTECNICO/:id', Controller.editarPasoServicioTecnico);
//DELETE
routes.delete('/PASOSERVICIOTECNICO/:id', Controller.eliminarPasoServicioTecnico);

//AVANCEINCIDENTE
//GET
routes.get('/AVANCEINCIDENTE/:id', Controller.listarAvancesDeIncidencia);
//POST 
routes.post('/AVANCEINCIDENTE/', Controller.nuevoAvanceDeIncidencia);
//PUT
routes.put('/AVANCEINCIDENTE/:id', Controller.editarAvanceDeIncidencia);
//DELETE
routes.delete('/AVANCEINCIDENTE/:id', Controller.eliminarAvanceDeIncidencia);

module.exports = routes;