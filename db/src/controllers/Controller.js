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
function editarAula(req, res){
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
function eliminarAula(req, res){
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


module.exports = {
}