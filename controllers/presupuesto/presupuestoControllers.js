import {
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
    } from "../../db/presupuesto/presupuestoQueries.js";
    
    /**
    * Obtener todos las categotias de la base de datos
    */
    const allController = async (req, res) => {
    // Un bloque try-catch sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
    // Ejecutar la consulta en la base de datos
    const presupuesto = await queryAll();
    res.json(presupuesto);
    } catch (error) {
    res.status(500).send(error);
    }
};

/**
 * obtener el presupuesto con el ID especificado en la query / url
 * @param {*} req
 * @param {*} res
 */

const findController = async (req, res) => {
    try {
        //Ejecutar la consulta en la base de datos
        const presupuesto = await queryFind(req.params.id);
        res.json(presupuesto);
    } catch (error) {
        res.status(500).send(error);
    }
};

/**
 * Crear un presupuesto
 */

const createController = async (req, res) => {
    try {
        const resultado = await queryCreate(req.body);
        res.json({mensaje: "presupuesto creada con exito", id: resultado.insertId });
    } catch (error){
        res.status(500).send(error);
    }
};

/**
 * Actualizar los datos de una presupuesto
 */

const updateController = async (req, res) =>{
    try{
        
        const resultado = await queryUpdate(req.params.id, req.body);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: "presupuesto actualizado con exito", presupuesto: resultado});
        } else {
            res.status(404).json({mensaje: "presupuesto no encontrado"});
        }
    } catch (error){
        res.status(500).send(error);
    }
};
  
/**
 * Eliminar una presupuesto
 */

const deleteController = async (req, res) => {
    try {
        
        const resultado = await queryDelete(req.params.id);
        if (resultado.affectedRows > 0){
            res.json({ mensaje: "presupuesto eliminado con exito"});
        } else {
            res.status(404).json({mensaje: "presupuesto no encontrado"});
        } 
    } catch (error){
        res.status(500).json({ mensaje: "Error al eliminar el presupuesto", error: error.message});
    }
};

export {
    allController,
    findController,
    createController,
    updateController,
    deleteController
};