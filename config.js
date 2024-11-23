import {createPool} from "mysql2";

//Variables de entorno
import dotenv from "dotenv";
 dotenv.config();

 //configurar
 const config = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    keepAliveInitialDelay: 300000,
    enableKeepAlive: true

  });

  config.getConnection((err, connection) => {
    if(err){
        console.log("Error al conectar a la base de datos ", err);
    }
    if (connection) connection.release()
        console.log("Conexion Exitosa")
    return;
    

 })
 export default config;