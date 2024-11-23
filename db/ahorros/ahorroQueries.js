import config from "../../config.js"

//funcion que ayuda a manejar la respuesta de la base de datos
const respuesta = (err, result, resolve, reject) => {
    if (err) {
        console.log(err);
        reject(err);
    } else {
        resolve(result);
    }
};

/**
 * Carga la lista de ahorro
 */

const queryAll = () => {
    // una promesa es una forma de que siempre se devuelva un resultado al quin llama (sea error o exito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razon
    return new Promise((resolve, reject) => {
        config.query("SELECT * FROM ahorros", (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });

    });
};

/**
 * Buscar un articulo por su ID (llave primaria)
 */

const queryFind = (id) =>{
    return new Promise((resolve, reject) => {
        config.query("SELECT * FROM ahorros WHERE id = ? LIMIT 1", [id], (err, filas) => {
            respuesta(err, filas, resolve, reject);
        });

    });
};

/**
 * Guardar un nuevo ahorro
 */

const queryCreate = async (ahorro) =>{
    const {meta, monto_meta, monto_ahorrrado, fecha_inicio, fecha_fin } = ahorro;
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO ahorros (meta, monto_meta, monto_ahorrrado, fecha_inicio, fecha_fin) VALUES (?,?,?,?)"; 
        config.query(sql, [meta, monto_meta, monto_ahorrrado, fecha_inicio, fecha_fin], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

/**
 * Actualizar un ahorro por su ID
 */

const queryUpdate = (id, ahorro) =>{
    const {meta, monto_meta, monto_ahorrrado, fecha_inicio, fecha_fin } = ahorro;
    return new Promise((resolve, reject) => {
        const sql = "UPDATE ahorros SET meta = ?, monto_meta = ?, monto_ahorrado = ?, fecha_inicio = ?, fecha_fin = ? WHERE id = ?"; 
        config.query(sql, [meta, monto_meta, monto_ahorrrado, fecha_inicio, fecha_fin, id],  (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

/**
 * Eliminar un ahorro por su ID
 */

const queryDelete = (id) =>{
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM ahorros WHERE id = ?"; 
        config.query(sql, [id], (err, resultado) => {
            respuesta(err, resultado, resolve, reject);
        });

    });
};

//Exportar todas las funciones definidas ene este archivo

export{
    queryAll,
    queryFind,
    queryCreate,
    queryUpdate,
    queryDelete
}
