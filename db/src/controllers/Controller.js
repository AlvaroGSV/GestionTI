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
    eliminarComponenteComputadora
}