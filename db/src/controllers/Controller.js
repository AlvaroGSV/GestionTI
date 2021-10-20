const { json } = require('body-parser');
const connection = require('../config/connection');

//INICIO DE FUNCIONES DE EDIFICIOS
//AGREGAR EDIFICIO
function nuevoEdificio(req, res){
    if(connection){
        const edificio = req.body;

        if(!edificio.idEdificio){
            return res.status(400).send({error: true, mensaje: "El ID es obligatorio"})
        }
    
        let sql = 'INSERT INTO edificios set ?';
        connection.query(sql, [edificio], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "edificio registrado con éxito"})
            }
        })
    }
}
//VER TODOS LOS EDIFICIOS
function listarEdificos(req, res) {
    if(connection){
        let sql = 'select * from edificios';
        connection.query(sql, (err, edificio) => {
            if(err){
                res.send(err)
            } else {
                console.log(edificios);
                res.json(edificios);
            }
        })
    }
}
//VER TAL EDIFICIO
function obtenerEdificio(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM edificios WHERE idEdificio= ${connection.escape(id)}`;
        connection.query(sql, (err, edificio) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(edificio === undefined || edificio.length === 0)
                mensaje = "Edificio no encontrado";

                res.json({error: false, data: edificio, mensaje: mensaje})
            }
        })
    }
}
//EDITAR EDIFICIO
function editarEdificio(req, res){
    if(connection){
        const { id } = req.params;
        const edificio = req.body;
        let sql = 'UPDATE edificios set ? where idEdificio = ?';
        connection.query(sql, [edificio, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información del edificio modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR EDIFICIO
function eliminarEdificio(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM edificios WHERE idEdificio = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Edificio no encontrada"
                else 
                    mensaje= "Edificio eliminado con exito"

                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE EDIFICIOS


//INICIO DE FUNCIONES DE AULAS
//AGREGAR AULA
function nuevaAula(req, res){
    if(connection){
        const aula = req.body;

        if(!aula.aulaNum){
            return res.status(400).send({error: true, mensaje: "El aula es obligatorio"})
        }
        if(!aula.idEdificio){
            return res.status(400).send({error: true, mensaje: "El edificio es obligatorio"})
        }
    
        let sql = 'INSERT INTO aula set ?';
        connection.query(sql, [edificio], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Aula registrada con éxito"})
            }
        })
    }
}
//VER TODOS LAS AULAS
function listarAulas(req, res) {
    if(connection){
        let sql = 'select * from aula';
        connection.query(sql, (err, aula) => {
            if(err){
                res.send(err)
            } else {
                console.log(aula);
                res.json(aula);
            }
        })
    }
}
//VER TAL AULA
function obtenerAula(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM aula WHERE aulaNum= ${connection.escape(id)}`;
        connection.query(sql, (err, aula) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(aula === undefined || aula.length === 0)
                mensaje = "Aula no encontrado";

                res.json({error: false, data: aula, mensaje: mensaje})
            }
        })
    }
}
//EDITAR AULA
function editarAula(req, res){
    if(connection){
        const { id } = req.params;
        const aula = req.body;
        let sql = 'UPDATE aula set ? where aulaNum = ?';
        connection.query(sql, [edificio, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información del aula modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR AULA
function eliminarAula(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM aula WHERE aulaNum = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Aula no encontrada"
                else 
                    mensaje= "Aula eliminada con exito"

                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE AULAS


//INICIO DE FUNCIONES DE DOCUMENTACION
//AGREGAR DOCUMENTACION
function nuevaDocumentacion(req, res){
    if(connection){
        const documentacion = req.body;

        if(!documentacion.idDocumentacion){
            return res.status(400).send({error: true, mensaje: "El aula es obligatorio"})
        }
        if(!documentacion.manual){
            return res.status(400).send({error: true, mensaje: "La posibilidad de la existencia de manual es importante"})
        }
        if(!documentacion.archivoManual){
            return res.status(400).send({error: true, mensaje: "El archivo donde se guardo el manual es importante"})
        }
        if(!documentacion.garantia){
            return res.status(400).send({error: true, mensaje: "La posibilidad de la existencia de la grantia es importante"})
        }
        if(!documentacion.archivoGarantia){
            return res.status(400).send({error: true, mensaje: "El archivo donde se guardo la garantia es importante"})
        }
    
        let sql = 'INSERT INTO documentacion set ?';
        connection.query(sql, [documentacion], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Documentacion registrada con éxito"})
            }
        })
    }
}
//VER TODOS LAS DOCUMENTACIONES
function listarDocumentaciones(req, res) {
    if(connection){
        let sql = 'select * from documentacion';
        connection.query(sql, (err, documentacion) => {
            if(err){
                res.send(err)
            } else {
                console.log(documentacion);
                res.json(documentacion);
            }
        })
    }
}
//VER TAL DOUMENTAION
function obtenerDocumentacion(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM documentacion WHERE idDocumentacion= ${connection.escape(id)}`;
        connection.query(sql, (err, documentacion) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(documentacion === undefined || documentacion.length === 0)
                mensaje = "Documentacion no encontrada";
                res.json({error: false, data: documentacion, mensaje: mensaje})
            }
        })
    }
}
//EDITAR DOCUMENTACION
function editarDocumentacion(req, res){
    if(connection){
        const { id } = req.params;
        const documentacion = req.body;
        let sql = 'UPDATE documentacion set ? where idDocumentacion = ?';
        connection.query(sql, [documentacion, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información de la documentacion modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR DOCUMENTACION
function eliminarDocumentacion(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM documentacion WHERE idDocumentacion = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Documentacion no encontrada"
                else 
                    mensaje= "Documentacion eliminada con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE DOCUMENTACION


//INICIO DE FUNCIONES DE SOFTWARE
//AGREGAR SOFTWARE
function nuevoSoftware(req, res){
    if(connection){
        const software = req.body;

        if(!software.idSoftware){
            return res.status(400).send({error: true, mensaje: "El id del software es obligatorio"})
        }
        if(!software.Nombre){
            return res.status(400).send({error: true, mensaje: "El nombre del software es obligatorio"})
        }
        if(!software.Desarrollador){
            return res.status(400).send({error: true, mensaje: "El nombre del desarrollador es obligatorio"})
        }
        if(!software.Version){
            return res.status(400).send({error: true, mensaje: "La version del software es obligatorio"})
        }
        if(!software.sistemaOperativo){
            return res.status(400).send({error: true, mensaje: "El sistema operativo en el que opera es obligatorio"})
        }
        if(!software.pesoMb){
            return res.status(400).send({error: true, mensaje: "El peso en MB es obligatorio"})
        }
    
        let sql = 'INSERT INTO software set ?';
        connection.query(sql, [software], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Software registrada con éxito"})
            }
        })
    }
}
//VER TODOS LOS SOFTWARES
function listarSoftware(req, res) {
    if(connection){
        let sql = 'select * from software';
        connection.query(sql, (err, software) => {
            if(err){
                res.send(err)
            } else {
                console.log(software);
                res.json(software);
            }
        })
    }
}
//VER TAL SOFTWARE
function obtenerSoftware(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM software WHERE idSoftware = ${connection.escape(id)}`;
        connection.query(sql, (err, software) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(software === undefined || software.length === 0)
                mensaje = "Software no encontrada";
                res.json({error: false, data: software, mensaje: mensaje})
            }
        })
    }
}
//EDITAR SOFTWARE
function editarSoftware(req, res){
    if(connection){
        const { id } = req.params;
        const software = req.body;
        let sql = 'UPDATE software set ? where idSoftware = ?';
        connection.query(sql, [software, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información del software modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR SOFTWARE
function eliminarSoftware(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM software WHERE idSoftware = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Software no encontrado"
                else 
                    mensaje= "Software eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE SOFTWARE


//INICIO DE FUNCIONES DE LICENCIA
//AGREGAR LICENCIA
function nuevaLicencia(req, res){
    if(connection){
        const licencia = req.body;

        if(!licencia.idLicencia){
            return res.status(400).send({error: true, mensaje: "El id del licencia es obligatorio"})
        }
        if(!licencia.serialNum){
            return res.status(400).send({error: true, mensaje: "El numero serial es obligatorio"})
        }
        if(!licencia.idSoftware){
            return res.status(400).send({error: true, mensaje: "El id del software al que pertenee la licencia es obligatorio"})
        }
        if(!licencia.ocuped){
            return res.status(400).send({error: true, mensaje: "La ocupacion actual de la licencia del software es obligatorio"})
        }
        let sql = 'INSERT INTO licencia set ?';
        connection.query(sql, [licencia], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Licencia registrada con éxito"})
            }
        })
    }
}
//VER TODAS LOS LICENCIAS
function listarLicencias(req, res) {
    if(connection){
        let sql = 'select * from licencia';
        connection.query(sql, (err, licencia) => {
            if(err){
                res.send(err)
            } else {
                console.log(licencia);
                res.json(licencia);
            }
        })
    }
}
//VER TAL LICENCIA
function obtenerLicencia(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM licencia WHERE idLicencia = ${connection.escape(id)}`;
        connection.query(sql, (err, licencia) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(licencia === undefined || licencia.length === 0)
                mensaje = "Licencia no encontrada";
                res.json({error: false, data: licencia, mensaje: mensaje})
            }
        })
    }
}
//EDITAR LICENCIA
function editarLicencia(req, res){
    if(connection){
        const { id } = req.params;
        const licencia = req.body;
        let sql = 'UPDATE licencia set ? where idLicencia = ?';
        connection.query(sql, [licencia, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información de la licencia modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR LICENCIA
function eliminarLicencia(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM licencia WHERE idLicencia = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Licencia no encontrado"
                else 
                    mensaje= "Licencia eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE LICENCIA


//INICIO DE FUNCIONES DE CATEGORIAS DE INVENTARIO
//AGREGAR CATEGORIA DE INVENTARIO
function nuevaCatInventario(req, res){
    if(connection){
        const categoriaInventario = req.body;

        if(!categoriaInventario.idCategoria){
            return res.status(400).send({error: true, mensaje: "El id de categoria es obligatorio"})
        }
        if(!categoriaInventario.nameCategoria){
            return res.status(400).send({error: true, mensaje: "El nombre de categoria es obligatorio"})
        }
        let sql = 'INSERT INTO categoriaInventario set ?';
        connection.query(sql, [categoriaInventario], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Categoria registrada con éxito"})
            }
        })
    }
}
//VER TODAS LOS CATEGORIAS DE INVENTARIO
function listarCatInventario(req, res) {
    if(connection){
        let sql = 'select * from categoriaInventario';
        connection.query(sql, (err, categoriaInventario) => {
            if(err){
                res.send(err)
            } else {
                console.log(categoriaInventario);
                res.json(categoriaInventario);
            }
        })
    }
}
//VER TAL CATEGORIA DE INVENTARIO
function obtenerCatInventario(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM categoriaInventario WHERE idCategoria = ${connection.escape(id)}`;
        connection.query(sql, (err, categoriaInventario) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(categoriaInventario === undefined || categoriaInventario.length === 0)
                mensaje = "Categoria de Inventario no encontrada";
                res.json({error: false, data: categoriaInventario, mensaje: mensaje})
            }
        })
    }
}
//EDITAR CATEGORIA DE INVENTARIO
function editarCatInventario(req, res){
    if(connection){
        const { id } = req.params;
        const categoriaInventario = req.body;
        let sql = 'UPDATE categoriaInventario set ? where idCategoria = ?';
        connection.query(sql, [categoriaInventario, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información de la categoria de inventario modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR CATEGORIA DE INVENTARIO
function eliminarCatInventario(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM categoriaInventario WHERE idCategoria = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Categoria de inventario no encontrado"
                else 
                    mensaje= "Categoria de inventario eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE CATEGORIA DE INVENTARIO


//INICIO DE FUNCIONES DE INVENTARIO
//AGREGAR INVENTARIO
function nuevaPInventario(req, res){
    if(connection){
        const inventario = req.body;

        if(!inventario.idProduto){
            return res.status(400).send({error: true, mensaje: "El id de producto es obligatorio"})
        }
        if(!inventario.idCategoria){
            return res.status(400).send({error: true, mensaje: "El id de categoria es obligatorio"})
        }
        if(!inventario.altura){
            return res.status(400).send({error: true, mensaje: "La altura de producto es obligatorio"})
        }
        if(!inventario.ancho){
            return res.status(400).send({error: true, mensaje: "El ancho de producto es obligatorio"})
        }
        if(!inventario.largo){
            return res.status(400).send({error: true, mensaje: "El largo de producto es obligatorio"})
        }
        if(!inventario.marca){
            return res.status(400).send({error: true, mensaje: "La marca de producto es obligatorio"})
        }
        if(!inventario.capacidadMB){
            return res.status(400).send({error: true, mensaje: "La capacidad en MB de producto es obligatorio"})
        }
        if(!inventario.tipoPuerto){
            return res.status(400).send({error: true, mensaje: "El tipo de puerto de producto es obligatorio"})
        }
        let sql = 'INSERT INTO inventario set ?';
        connection.query(sql, [inventario], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Producto agregado al inventario con éxito"})
            }
        })
    }
}
//VER TODO EL INVENTARIO
function listarPInventario(req, res) {
    if(connection){
        let sql = 'select * from inventario';
        connection.query(sql, (err, inventario) => {
            if(err){
                res.send(err)
            } else {
                console.log(inventario);
                res.json(inventario);
            }
        })
    }
}
//VER TAL PARTE DEL INVENTARIO
function obtenerPInventario(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM inventario WHERE idProduto = ${connection.escape(id)}`;
        connection.query(sql, (err, inventario) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(inventario === undefined || inventario.length === 0)
                mensaje = "Producto no encontrado en inventario";
                res.json({error: false, data: inventario, mensaje: mensaje})
            }
        })
    }
}
//EDITAR INVENTARIO
function editarPInventario(req, res){
    if(connection){
        const { id } = req.params;
        const inventario = req.body;
        let sql = 'UPDATE inventario set ? where idProduto = ?';
        connection.query(sql, [inventario, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información del producto modificado con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR PARTE DEL INVENTARIO
function eliminarPInventario(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM inventario WHERE idProduto = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Producto de inventario no encontrado"
                else 
                    mensaje= "Producto de inventario eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE INVENTARIO


//INICIO DE FUNCIONES DE HARDWARE DE COMPUTADORA
//AGREGAR HARDWARE DE COMPUTADORA
function nuevoHardComputadora(req, res){
    if(connection){
        const computerHard = req.body;

        if(!computerHard.idHard){
            return res.status(400).send({error: true, mensaje: "El id de hardware es obligatorio"})
        }
        if(!computerHard.salidaVideo){
            return res.status(400).send({error: true, mensaje: "La salida de video es obligatorio"})
        }
        if(!computerHard.salidaAudio){
            return res.status(400).send({error: true, mensaje: "La salida de audio es obligatorio"})
        }
        if(!computerHard.procesador){
            return res.status(400).send({error: true, mensaje: "La marca de procesador es obligatorio"})
        }
        if(!computerHard.familiaProcesador){
            return res.status(400).send({error: true, mensaje: "La familia de procesador es obligatorio"})
        }
        if(!computerHard.tarjetaMadre){
            return res.status(400).send({error: true, mensaje: "La tarjeta madre es obligatorio"})
        }
        if(!computerHard.ventilador){
            return res.status(400).send({error: true, mensaje: "La existecnia de ventilador es obligatorio"})
        }
        let sql = 'INSERT INTO computerHard set ?';
        connection.query(sql, [computerHard], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Hardware de computadora agregado con éxito"})
            }
        })
    }
}
//VER TODO EL HARDWARE DE LA COMPUTADORA
function listarHardComputadora(req, res) {
    if(connection){
        let sql = 'select * from computerHard';
        connection.query(sql, (err, computerHard) => {
            if(err){
                res.send(err)
            } else {
                console.log(computerHard);
                res.json(computerHard);
            }
        })
    }
}
//VER TAL PARTE DE HARDWARE DE LA COMPUTADORA
function obtenerHardComputadora(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM computerHard WHERE idHard = ${connection.escape(id)}`;
        connection.query(sql, (err, computerHard) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(computerHard === undefined || computerHard.length === 0)
                mensaje = "Hardware de computadora no encontrado";
                res.json({error: false, data: computerHard, mensaje: mensaje})
            }
        })
    }
}
//EDITAR HARDWARE DE LA COMPUTADORA
function editarHardComputadora(req, res){
    if(connection){
        const { id } = req.params;
        const computerHard = req.body;
        let sql = 'UPDATE computerHard set ? where idHard = ?';
        connection.query(sql, [computerHard, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Hardware de computadora modificado con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR PARTE DEL HARDWARE DE LA COMPUTADORA
function eliminarHardComputadora(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM computerHard WHERE idHard = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Hardware de computadora no encontrado"
                else 
                    mensaje= "Hardware de computadora eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE HARDWARE DE LA COMPUTADORA


//INICIO DE FUNCIONES DE LISTA DE COMPONENTES DE COMPUTADORA
//AGREGAR COMPONENTES DE COMPUTADORA
function nuevaListaComponentesComputadora(req, res){
    if(connection){
        const computerComponentList = req.body;

        if(!computerComponentList.idHard){
            return res.status(400).send({error: true, mensaje: "El id de hardware es obligatorio"})
        }
        if(!computerComponentList.idProduto){
            return res.status(400).send({error: true, mensaje: "El id de producto de inventario es obligatorio"})
        }
        let sql = 'INSERT INTO computerComponentList set ?';
        connection.query(sql, [computerComponentList], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Componentes añadidos"})
            }
        })
    }
}
//VER TODOS LOS COMPONENTES DE COMPUTADORA
function listaComponentesComputadora(req, res) {
    if(connection){
        let sql = 'select * from computerComponentList';
        connection.query(sql, (err, computerComponentList) => {
            if(err){
                res.send(err)
            } else {
                console.log(computerComponentList);
                res.json(computerComponentList);
            }
        })
    }
}
//VER TAL COMPONENTES DE COMPUTADORA
function obtenerComponenteComputadora(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM computerComponentList WHERE idHard = ${connection.escape(id)}`;
        connection.query(sql, (err, computerComponentList) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(computerComponentList === undefined || computerComponentList.length === 0)
                mensaje = "Componentes de computadora no encontrado";
                res.json({error: false, data: computerComponentList, mensaje: mensaje})
            }
        })
    }
}
//EDITAR COMPONENTES DE COMPUTADORA
function editarComponenteComputadora(req, res){
    if(connection){
        const { id } = req.params;
        const computerComponentList = req.body;
        let sql = 'UPDATE computerComponentList set ? where idHard = ?';
        connection.query(sql, [computerComponentList, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Componente de computadora modificado con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR COMPONENTES DE COMPUTADORA
function eliminarComponenteComputadora(req, res){
    if(connection){
        const { idHard } = req.params;
        const idProduto = req.body;
        let sql = 'DELETE FROM computerComponentList WHERE idHard = ? AND idProduto = ? ';
        connection.query(sql, [idHard, idProduto], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Lista de componentes no encontrado"
                else 
                    mensaje= "Lista de componentes eliminada con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE HARDWARE DE LA COMPUTADORA


//INICIO DE FUNCIONES DE CONFIGURACION DE SOFTWARE DE COMPUTADORA
//AGREGAR SOFTWARE DE CONFIGURACION DE SOFTWARE DE COMPUTADORA
function nuevaConfigSftwCompu(req, res){
    if(connection){
        const softConfig = req.body;
        if(!softConfig.idConfig){
            return res.status(400).send({error: true, mensaje: "El id de configuracion es obligatorio"})
        }
        if(!softConfig.nameConfig){
            return res.status(400).send({error: true, mensaje: "El nombre de la configuracion es obligatorio"})
        }
        if(!softConfig.customized){
            return res.status(400).send({error: true, mensaje: "La peronalizacion actual es obligatorio"})
        }
        let sql = 'INSERT INTO softConfig set ?';
        connection.query(sql, [softConfig], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Configuracion añadida"})
            }
        })
    }
}

//VER TODAS LAS CONFIGURACIONES DE SOFTWARE DE COMPUTADORA
function listaConfigSftwCompu(req, res) {
    if(connection){
        let sql = 'select * from softConfig';
        connection.query(sql, (err, softConfig) => {
            if(err){
                res.send(err)
            } else {
                console.log(softConfig);
                res.json(softConfig);
            }
        })
    }
}
//VER TAL CONFIGURACION DE SOFTWARE DE COMPUTADORA
function obtenerConfigSftwCompu(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM softConfig WHERE idConfig = ${connection.escape(id)}`;
        connection.query(sql, (err, softConfig) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(softConfig === undefined || softConfig.length === 0)
                mensaje = "Configuracion base de software de la computadora no encontrada";
                res.json({error: false, data: softConfig, mensaje: mensaje})
            }
        })
    }
}
//EDITAR CONFIGURACION DE SOFTWARE DE COMPUTADORA
function editarConfigSftwCompu(req, res){
    if(connection){
        const { id } = req.params;
        const softConfig = req.body;
        let sql = 'UPDATE softConfig set ? where idConfig = ?';
        connection.query(sql, [softConfig, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Configuracion base de software de la computadora modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR CONFIGURACION DE SOFTWARE DE COMPUTADORA
function eliminarConfigSftwCompu(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM softConfig WHERE idSoft = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Configuracion base de computadora no encontrada"
                else 
                    mensaje= "Configuracion base de software de la computadora eliminada con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE CONFIGURACION DE SOFTWARE DE COMPUTADORA


//INICIO DE FUNCIONES DE LISTA DE SOFTWARE POR CONFIGURACION
//AGREGAR ELEMENTO A LA LISTA DE SOFTWARE POR CONFIGURACION
function nuevoElementSoftConfig(req, res){
    if(connection){
        const listSoftConfig = req.body;
        if(!listSoftConfig.idConfig){
            return res.status(400).send({error: true, mensaje: "El id de configuracion es obligatorio"})
        }
        if(!listSoftConfig.idSoftware){
            return res.status(400).send({error: true, mensaje: "El id del software es obligatorio"})
        }
        let sql = 'INSERT INTO listSoftConfig set ?';
        connection.query(sql, [listSoftConfig], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Configuracion añadida"})
            }
        })
    }
}
//VER TODOS LOS ELEMENTOS DE LA LISTA DE SOFTWARE POR CONFIGURACION
function listaElementSoftConfig(req, res) {
    if(connection){
        let sql = 'select * from listSoftConfig';
        connection.query(sql, (err, listSoftConfig) => {
            if(err){
                res.send(err)
            } else {
                console.log(listSoftConfig);
                res.json(listSoftConfig);
            }
        })
    }
}
//VER TAL ELEMENTO DE LA LISTA DE SOFTWARE POR CONFIGURACION
function obtenerElementSoftConfig(req, res) {
    if(connection){
        const { id } = req.params;
        const listSoftConfig = req.body;
        let sql = `SELECT * FROM listSoftConfig WHERE idConfig = ${connection.escape(id)} AND idSoftware = ${connection.escape(listSoftConfig)}`;
        connection.query(sql, (err, listSoftConfig) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(listSoftConfig === undefined || listSoftConfig.length === 0)
                mensaje = "Software de la computadora no encontrada en la configuracion";
                res.json({error: false, data: listSoftConfig, mensaje: mensaje})
            }
        })
    }
}
//EDITAR ELEMENTO DE LA LISTA DE SOFTWARE POR CONFIGURACION
function editarElementSoftConfig(req, res){
    if(connection){
        const { id } = req.params;
        const listSoftConfig = req.body;
        let sql = 'UPDATE listSoftConfig set ? where idConfig = ? AND idSoftware = ?';
        connection.query(sql, [listSoftConfig, id, listSoftConfig], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Software de la computadora modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR ELEMENTO DE LA LISTA DE SOFTWARE POR CONFIGURACION
function eliminarElementSoftConfig(req, res){
    if(connection){
        const { id } = req.params;
        const listSoftConfig = req.body;
        let sql = 'DELETE FROM listSoftConfig WHERE idSoft = ? AND idSoftware = ?';
        connection.query(sql, [id, listSoftConfig], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Configuracion de software de computadora no encontrada"
                else 
                    mensaje= "Configuracion de software de la computadora eliminada con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE LISTA DE SOFTWARE POR CONFIGURACION


//INICIO DE FUNCIONES DE SOFTWARE DE COMPUTADORA
//AGREGAR SOFTWARE DE COMPUTADORA
function nuevaSftwBaseComputadora(req, res){
    if(connection){
        const computerSoft = req.body;

        if(!computerSoft.idSoft){
            return res.status(400).send({error: true, mensaje: "El id de software es obligatorio"})
        }
        if(!computerSoft.sistemaOperativo){
            return res.status(400).send({error: true, mensaje: "El sistema operativo usado es obligatorio"})
        }
        if(!computerSoft.BIOSname){
            return res.status(400).send({error: true, mensaje: "El tipo de BIOS es obligatorio"})
        }
        if(!computerSoft.BIOSverson){
            return res.status(400).send({error: true, mensaje: "La version de BIOS es obligatorio"})
        }
        if(!computerSoft.Navegador){
            return res.status(400).send({error: true, mensaje: "El navegador usado es obligatorio"})
        }
        if(!computerSoft.deepFreze){
            return res.status(400).send({error: true, mensaje: "El estado de freezeo actual es obligatorio"})
        }
        if(!computerSoft.idConfig){
            return res.status(400).send({error: true, mensaje: "El id de configuracion es obligatorio"})
        }
        let sql = 'INSERT INTO computerSoft set ?';
        connection.query(sql, [computerSoft], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Componentes añadidos"})
            }
        })
    }
}
//VER TODOS LOS SOFTWARE DE COMPUTADORA
function listaSftwBaseComputadora(req, res) {
    if(connection){
        let sql = 'select * from computerSoft';
        connection.query(sql, (err, computerSoft) => {
            if(err){
                res.send(err)
            } else {
                console.log(computerSoft);
                res.json(computerSoft);
            }
        })
    }
}
//VER TAL SOFTWARE DE COMPUTADORA
function obtenerSftwBaseComputadora(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM computerSoft WHERE idSoft = ${connection.escape(id)}`;
        connection.query(sql, (err, computerSoft) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(computerSoft === undefined || computerSoft.length === 0)
                mensaje = "Configuracion base de computadora no encontrada";
                res.json({error: false, data: computerSoft, mensaje: mensaje})
            }
        })
    }
}
//EDITAR SOFTWARE DE COMPUTADORA
function editarSftwBaseComputadora(req, res){
    if(connection){
        const { id } = req.params;
        const computerSoft = req.body;
        let sql = 'UPDATE computerSoft set ? where idSoft = ?';
        connection.query(sql, [computerSoft, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Configuracion base de computadora modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR SOFTWARE DE COMPUTADORA
function eliminarSftwBaseComputadora(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM computerSoft WHERE idSoft = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Configuracion base de computadora no encontrada"
                else 
                    mensaje= "Configuracion base de computadora eliminada con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE SOFTWARE DE COMPUTADORA


//INICIO DE FUNCIONES DE COMPUTADORA
//AGREGAR COMPUTADORA
function nuevaComputadora(req, res){
    if(connection){
        const computer = req.body;

        if(!computer.idCompu){
            return res.status(400).send({error: true, mensaje: "El id de computadora es obligatorio"})
        }
        if(!computer.addressMAC){
            return res.status(400).send({error: true, mensaje: "La dirreccion MAC obligatoria"})
        }
        if(!computer.edificio){
            return res.status(400).send({error: true, mensaje: "El edificio es obligatorio"})
        }
        if(!computer.aulaNum){
            return res.status(400).send({error: true, mensaje: "El aula es obligatoria"})
        }
        if(!computer.razonUso){
            return res.status(400).send({error: true, mensaje: "La razon de uso es obligatoria"})
        }
        if(!computer.estatusUso){
            return res.status(400).send({error: true, mensaje: "El estatus de uso es obligatorio"})
        }
        if(!computer.softwareEspecializado){
            return res.status(400).send({error: true, mensaje: "El software espacializado sera usado es obligatorio"})
        }
        if(!computer.idHard){
            return res.status(400).send({error: true, mensaje: "El listado de hardware es obligatorio"})
        }
        if(!computer.idSoft){
            return res.status(400).send({error: true, mensaje: "El listado de software es obligatorio"})
        }
        let sql = 'INSERT INTO computer set ?';
        connection.query(sql, [computer], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Computadora añadida"})
            }
        })
    }
}
//VER TODAS LAS COMPUTADORA
function listaComputadoras(req, res) {
    if(connection){
        let sql = 'select * from computer';
        connection.query(sql, (err, computer) => {
            if(err){
                res.send(err)
            } else {
                console.log(computer);
                res.json(computer);
            }
        })
    }
}
//VER TAL COMPUTADORA
function obtenerComputadora(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM computer WHERE idCompu = ${connection.escape(id)}`;
        connection.query(sql, (err, computer) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(computer === undefined || computer.length === 0)
                mensaje = "Computadora no encontrada";
                res.json({error: false, data: computer, mensaje: mensaje})
            }
        })
    }
}
//EDITAR COMPUTADORA
function editarComputadora(req, res){
    if(connection){
        const { id } = req.params;
        const computer = req.body;
        let sql = 'UPDATE computer set ? where idCompu = ?';
        connection.query(sql, [computer, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Computadora modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR COMPUTADORA
function eliminarComputadora(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM computer WHERE idCompu = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Computadora no encontrada"
                else 
                    mensaje= "Computadora eliminada con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE COMPUTADORA


//INICIO DE FUNCIONES DE DISPOSITIVOS REDES
//AGREGAR DISPOSITIVO RED
function nuevoDispositivoRed(req, res){
    if(connection){
        const NetworkDevices = req.body;
        if(!NetworkDevices.deviceID){
            return res.status(400).send({error: true, mensaje: "El id del dispositivo de red es obligatorio"})
        }
        if(!NetworkDevices.idNetwork){
            return res.status(400).send({error: true, mensaje: "El id de la red es obligatorio"})
        }
        if(!NetworkDevices.networkType){
            return res.status(400).send({error: true, mensaje: "El tipo de red es obligatorio"})
        }
        if(!NetworkDevices.exposure){
            return res.status(400).send({error: true, mensaje: "El tipo de exposicion al ambiente es obligatorio"})
        }
        if(!NetworkDevices.edificio){
            return res.status(400).send({error: true, mensaje: "El edificio de ubicacion es obligatorio"})
        }
        if(!NetworkDevices.aulaNum){
            return res.status(400).send({error: true, mensaje: "El aula de ubicacion es obligatoria"})
        }
        let sql = 'INSERT INTO NetworkDevices set ?';
        connection.query(sql, [NetworkDevices], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Dispositivo de res añadido"})
            }
        })
    }
}
//VER TODOS LOS DISPOSITIVOS REDES
function listaDispositivosRed(req, res) {
    if(connection){
        let sql = 'select * from NetworkDevices';
        connection.query(sql, (err, NetworkDevices) => {
            if(err){
                res.send(err)
            } else {
                console.log(NetworkDevices);
                res.json(NetworkDevices);
            }
        })
    }
}
//VER TAL DISPOSITIVO RED
function obtenerDispositivoRed(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM NetworkDevices WHERE deviceID = ${connection.escape(id)}`;
        connection.query(sql, (err, NetworkDevices) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(NetworkDevices === undefined || NetworkDevices.length === 0)
                mensaje = "Dispositivo de red no encontrada";
                res.json({error: false, data: NetworkDevices, mensaje: mensaje})
            }
        })
    }
}
//EDITAR DISPOSITIVO RED
function editarDispositivoRed(req, res){
    if(connection){
        const { id } = req.params;
        const NetworkDevices = req.body;
        let sql = 'UPDATE NetworkDevices set ? where deviceID = ?';
        connection.query(sql, [NetworkDevices, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Dispositivo de red con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR DISPOSITIVO RED
function eliminarDispositivoRed(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM NetworkDevices WHERE deviceID = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Dispositivo de red no encontrado"
                else 
                    mensaje= "Dispositivo de red eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE DISPOSITIVO RED


//INICIO DE FUNCIONES DE REDES
//AGREGAR RED
function nuevaRed(req, res){
    if(connection){
        const Network = req.body;
        if(!Network.idNetwork){
            return res.status(400).send({error: true, mensaje: "El id de red es obligatorio"})
        }
        if(!Network.networkName){
            return res.status(400).send({error: true, mensaje: "El nombre de la red es obligatorio"})
        }
        if(!Network.networkType){
            return res.status(400).send({error: true, mensaje: "El tipo de red es obligatorio"})
        }
        if(!Network.netowrkSpeedMB){
            return res.status(400).send({error: true, mensaje: "La velocidad es obligatoria"})
        }
        let sql = 'INSERT INTO Network set ?';
        connection.query(sql, [Network], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Red añadida"})
            }
        })
    }
}
//VER TODAS LAS REDES
function listaRedes(req, res) {
    if(connection){
        let sql = 'select * from Network';
        connection.query(sql, (err, Network) => {
            if(err){
                res.send(err)
            } else {
                console.log(Network);
                res.json(Network);
            }
        })
    }
}
//VER TAL RED
function obtenerRed(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM Network WHERE idNetwork = ${connection.escape(id)}`;
        connection.query(sql, (err, Network) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(Network === undefined || Network.length === 0)
                mensaje = "Red no encontrada";
                res.json({error: false, data: Network, mensaje: mensaje})
            }
        })
    }
}
//EDITAR RED
function editarRed(req, res){
    if(connection){
        const { id } = req.params;
        const Network = req.body;
        let sql = 'UPDATE Network set ? where idNetwork = ?';
        connection.query(sql, [Network, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Red con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR RED
function eliminarRed(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM Network WHERE idNetwork = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Computadora no encontrada"
                else 
                    mensaje= "Computadora eliminada con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE RED


//INICIO DE FUNCIONES DE TECNICOS
//AGREGAR TECNICO
function nuevoTecnico(req, res){
    if(connection){
        const Tecnicos = req.body;
        if(!Tecnicos.nControl){
            return res.status(400).send({error: true, mensaje: "El numero de control es obligatorio"})
        }
        if(!Tecnicos.primerNombre){
            return res.status(400).send({error: true, mensaje: "El primer nombre obligatorio"})
        }
        if(!Tecnicos.segundoNombre){
            return res.status(400).send({error: true, mensaje: "El segundo nombre obligatorio"})
        }
        if(!Tecnicos.primerApellido){
            return res.status(400).send({error: true, mensaje: "El primer apellido obligatorio"})
        }
        if(!Tecnicos.segundoApellido){
            return res.status(400).send({error: true, mensaje: "El segundo apellido obligatorio"})
        }
        if(!Tecnicos.passkey){
            return res.status(400).send({error: true, mensaje: "La contraseña es obligatoria"})
        }
        if(!Tecnicos.numIncidentesActuales){
            return res.status(400).send({error: true, mensaje: "El numero de incidentes actuales obligatorio"})
        }
        if(!Tecnicos.numIncidentesResueltos){
            return res.status(400).send({error: true, mensaje: "El numero de incidentes resueltos obligatorio"})
        }
        if(!Tecnicos.experienceLvl){
            return res.status(400).send({error: true, mensaje: "El nivel de experiencia es obligatorio"})
        }
        let sql = 'INSERT INTO Tecnicos set ?';
        connection.query(sql, [Tecnicos], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Tecnico añadido"})
            }
        })
    }
}
//VER TODOS LOS TECNICOS
function listaTecnicos(req, res) {
    if(connection){
        let sql = 'select * from Tecnicos';
        connection.query(sql, (err, Tecnicos) => {
            if(err){
                res.send(err)
            } else {
                console.log(Tecnicos);
                res.json(Tecnicos);
            }
        })
    }
}
//VER TAL TECNICO
function obtenerTecnico(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM Tecnicos WHERE nControl = ${connection.escape(id)}`;
        connection.query(sql, (err, Tecnicos) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(Tecnicos === undefined || Tecnicos.length === 0)
                mensaje = "Tecnico no encontrado";
                res.json({error: false, data: Tecnicos, mensaje: mensaje})
            }
        })
    }
}
//EDITAR TECNICO
function editarTecnico(req, res){
    if(connection){
        const { id } = req.params;
        const Tecnicos = req.body;
        let sql = 'UPDATE Tecnicos set ? where nControl = ?';
        connection.query(sql, [Tecnicos, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Tecnico editado con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR TECNICO
function eliminarTecnico(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM Tecnicos WHERE nControl = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Tecnico no encontrado"
                else 
                    mensaje= "Tecnico eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE TECNICOS


//INICIO DE FUNCIONES DE OTROS DISPOSITIVOS
//AGREGAR OTRO DISPOSITIVO
function nuevoOtroDispositivo(req, res){
    if(connection){
        const otrosDispositivos = req.body;
        if(!otrosDispositivos.idDispositivo){
            return res.status(400).send({error: true, mensaje: "El id de dispositivo es obligatorio"})
        }
        if(!otrosDispositivos.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre obligatorio"})
        }
        if(!otrosDispositivos.idDocumentacion){
            return res.status(400).send({error: true, mensaje: "El id de la documentacion obligatorio"})
        }
        if(!otrosDispositivos.tiempoVida){
            return res.status(400).send({error: true, mensaje: "El tiempo de vida obligatorio"})
        }
        if(!otrosDispositivos.mantenimientoMinimo){
            return res.status(400).send({error: true, mensaje: "El tiempo de mantenimeinto minimo obligatorio"})
        }
        if(!otrosDispositivos.mantenimientoMaximo){
            return res.status(400).send({error: true, mensaje: "El tiempo de mantenimeinto maximo obligatorio"})
        }
        if(!otrosDispositivos.ultimoMantenimiento){
            return res.status(400).send({error: true, mensaje: "El tiempo del ultimo mantenimeinto es obligatorio"})
        }
        if(!otrosDispositivos.aulaNum){
            return res.status(400).send({error: true, mensaje: "El aula donde se instalara es obligatorio"})
        }
        let sql = 'INSERT INTO otrosDispositivos set ?';
        connection.query(sql, [otrosDispositivos], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Nuevo dispositivo añadido"})
            }
        })
    }
}
//VER TODOS LOS OTROS DISPOSITIVOS
function listaOtrosDispositivos(req, res) {
    if(connection){
        let sql = 'select * from otrosDispositivos';
        connection.query(sql, (err, otrosDispositivos) => {
            if(err){
                res.send(err)
            } else {
                console.log(otrosDispositivos);
                res.json(otrosDispositivos);
            }
        })
    }
}
//VER TAL OTRO DISPOSITIVO
function obtenerOtroDispositivo(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM otrosDispositivos WHERE idDispositivo = ${connection.escape(id)}`;
        connection.query(sql, (err, otrosDispositivos) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(otrosDispositivos === undefined || otrosDispositivos.length === 0)
                mensaje = "Otro Dispositivo no encontrado";
                res.json({error: false, data: otrosDispositivos, mensaje: mensaje})
            }
        })
    }
}
//EDITAR TECNICO
function editarOtroDispositivo(req, res){
    if(connection){
        const { id } = req.params;
        const otrosDispositivos = req.body;
        let sql = 'UPDATE otrosDispositivos set ? where idDispositivo = ?';
        connection.query(sql, [otrosDispositivos, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Otro dispositivo editado con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}
//ELIMINAR TECNICO
function eliminarOtroDispositivo(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM otrosDispositivos WHERE idDispositivo = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Otro dispositivo no encontrado"
                else 
                    mensaje= "Otro Dispositvio eliminado con exito"
                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

//LOGIN
function logIn(req, res) {
    if(connection){
        const { id } = req.params;
        const pass = req.body;
        let sql = `select nControl, passkey from Tecnicos where nControl= ${connection.escape(id)} and passkey= ${connection.escape(pass)};`
        
        connection.query(sql, [id, pass], (err) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(otrosDispositivos === undefined || otrosDispositivos.length === 0)
                mensaje = "Otro Dispositivo no encontrado";
                res.json({error: false, data: otrosDispositivos, mensaje: mensaje})
            }
        })
    }
}

//FIN DE FUNCIONES DE TECNICOS


//EXPORTACION DE CONTROLADORES

module.exports = {
    nuevoEdificio,
    listarEdificos,
    obtenerEdificio,
    editarEdificio,
    eliminarEdificio,

    nuevaAula,
    listarAulas,
    obtenerAula,
    editarAula,
    eliminarAula,

    nuevaDocumentacion,
    listarDocumentaciones,
    obtenerDocumentacion,
    editarDocumentacion,
    eliminarDocumentacion,

    nuevoSoftware,
    listarSoftware,
    obtenerSoftware,
    editarSoftware,
    eliminarSoftware,

    nuevaLicencia,
    listarLicencias,
    obtenerLicencia,
    editarLicencia,
    eliminarLicencia,
    
    nuevaCatInventario,
    listarCatInventario,
    obtenerCatInventario,
    editarCatInventario,
    eliminarCatInventario,

    nuevaPInventario,
    listarPInventario,
    obtenerPInventario,
    editarPInventario,
    eliminarPInventario,

    nuevoHardComputadora,
    listarHardComputadora,
    obtenerHardComputadora,
    editarHardComputadora,
    eliminarHardComputadora,

    nuevaListaComponentesComputadora,
    listaComponentesComputadora,
    obtenerComponenteComputadora,
    editarComponenteComputadora,
    eliminarComponenteComputadora,

    nuevaSftwBaseComputadora,
    listaSftwBaseComputadora,
    obtenerSftwBaseComputadora,
    editarSftwBaseComputadora,
    eliminarSftwBaseComputadora,

    nuevaConfigSftwCompu,
    listaConfigSftwCompu,
    obtenerConfigSftwCompu,
    editarConfigSftwCompu,
    eliminarConfigSftwCompu,

    nuevoElementSoftConfig,
    listaElementSoftConfig,
    obtenerElementSoftConfig,
    editarElementSoftConfig,
    eliminarElementSoftConfig,

    nuevaComputadora,
    listaComputadoras,
    obtenerComputadora,
    editarComputadora,
    eliminarComputadora,

    nuevaRed,
    listaRedes,
    obtenerRed,
    editarRed,
    eliminarRed,

    nuevoDispositivoRed,
    listaDispositivosRed,
    obtenerDispositivoRed,
    editarDispositivoRed,
    eliminarDispositivoRed,

    nuevoTecnico,
    listaTecnicos,
    obtenerTecnico,
    editarTecnico,
    eliminarTecnico,
    
    nuevoOtroDispositivo,
    listaOtrosDispositivos,
    obtenerOtroDispositivo,
    editarOtroDispositivo,
    eliminarOtroDispositivo,

    logIn
}