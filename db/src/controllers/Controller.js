const { json } = require('body-parser');
const connection = require('../config/connection');

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
function listarSoftwares(req, res) {
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
function listarLicenciasSoftwares(req, res) {
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
function listarCategoriasInventario(req, res) {
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
function listarInventario(req, res) {
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
function listarHardware(req, res) {
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
function listarHardwareComputadora(req, res) {
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
function listarSoftwareSysComputadora(req, res) {
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



function obtenerAuto(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM Autos WHERE IDAuto= ${connection.escape(id)}`;
        connection.query(sql, (err, auto) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(auto === undefined || auto.length === 0)
                mensaje = "Auto no encontrado";

                res.json({error: false, data: auto, mensaje: mensaje})
            }
        })
    }
}

function obtenerVendedor(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM Vendedores WHERE IDVendedor= ${connection.escape(id)}`;
        connection.query(sql, (err, vendedor) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(vendedor === undefined || vendedor.length === 0)
                mensaje = "Vendedor no encontrado";

                res.json({error: false, data: vendedor, mensaje: mensaje})
            }
        })
    }
}

function logIn(req, res) {
    if(connection){
        const { IDVendedor } = req.params;
        const { password } = req.params;
        let sql = `SELECT * FROM Vendedores WHERE IDVendedor = ${connection.escape(IDVendedor)} and password = ${connection.escape(password)}`;
        connection.query(sql, (err, vendedor) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(vendedor === undefined || vendedor.length === 0)
                mensaje = "Vendedor no encontrado";

                res.json({error: false, data: vendedor, mensaje: mensaje})
            }
        })
    }
}

function obtenerVentaDeAuto(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM Ventas WHERE IDAuto= ${connection.escape(id)}`;
        connection.query(sql, (err, auto) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(auto === undefined || auto.length === 0)
                mensaje = "Venta de auto no encontrada";

                res.json({error: false, data: auto, mensaje: mensaje})
            }
        })
    }
}

function obtenerVentasDeVendedor(req, res) {
    if(connection){
        const { id } = req.params;
        let sql = `SELECT * FROM Ventas WHERE IDVendedor= ${connection.escape(id)}`;
        connection.query(sql, (err, vendedor) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(vendedor === undefined || vendedor.length === 0)
                mensaje = "El vendedor no a vendido ningun auto";

                res.json({error: false, data: vendedor, mensaje: mensaje})
            }
        })
    }
}

function altaAuto(req, res){
    if(connection){
        const auto = req.body;

        if(!auto.titulo){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"})
        }

        if(auto.anio && auto.anio.length !== 4) {
            return res.status(400).send({error: true, mensaje: "La longitud debe ser de 4."})
        }
    

        let sql = 'INSERT INTO Autos set ?';
        connection.query(sql, [auto], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Auto dado de alta con éxito"})
            }
        })
    }
}

function nuevoVendedor(req, res){
    if(connection){
        const vendedor = req.body;

        if(!vendedor.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"})
        }
    
        let sql = 'INSERT INTO Vendedores set ?';
        connection.query(sql, [vendedor], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "Vandedor registrado con éxito"})
            }
        })
    }
}

function venta(req, res){
    if(connection){
        const venta = req.body;

        if(!venta.nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"})
        }
    

        let sql = 'INSERT INTO Ventas set ?';
        connection.query(sql, [venta], (err, rows) => {
            if(err) {
                res.json(err)
            } else {
                res.json({error: false, data: rows, mensaje: "El auto se vendio con éxito"})
            }
        })
    }
}

function editarAuto(req, res){
    if(connection){
        const { id } = req.params;
        const auto = req.body;
        let sql = 'UPDATE Autos set ? where IDAuto = ?';
        connection.query(sql, [auto, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información del auto modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}

function editarVendedor(req, res){
    if(connection){
        const { id } = req.params;
        const vendedor = req.body;
        let sql = 'UPDATE Vendedores set ? where IDVendedor = ?';
        connection.query(sql, [vendedor, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información del vendedor modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}

function editarVenta(req, res){
    if(connection){
        const { id } = req.params;
        const venta = req.body;
        let sql = 'UPDATE Ventas set ? where IDVenta = ?';
        connection.query(sql, [venta, id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Información de la venta modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}

function eliminarAuto(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM Autos WHERE IDAuto = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Auto no encontrada"
                else 
                    mensaje= "Auto eliminado con exito"

                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

function eliminarVendedor(req, res){
    if(connection){
        const { id } = req.params;
        let sql = 'DELETE FROM Vendedores WHERE IDVendedor = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if (rows.affectedRows === 0)
                    mensaje = "Vendedor no encontrada"
                else 
                    mensaje= "Vendedor eliminado con exito"

                res.json({error: false, data: rows, mensaje})
            }
        })
    }
}

module.exports = {
    listarAutos,
    listarVendedores,
    listarVentas,
    obtenerAuto,
    obtenerVendedor,
    obtenerVentaDeAuto,
    obtenerVentasDeVendedor,
    altaAuto,
    nuevoVendedor,
    venta,
    editarAuto,
    editarVendedor,
    editarVenta,
    eliminarAuto,
    eliminarVendedor,
    logIn
}