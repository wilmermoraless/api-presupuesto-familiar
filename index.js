import express from "express";
import cors from "cors";

//cargar las variables de entorno
import dotenv from "dotenv";
dotenv.config();

//importar las rutas
import notasRouter from "./routes/gastos/gastoRoutes.js";
import notasRouter from "./routes/ingresos/ingresoRoutes.js";

//crear la app de express
const app = express();

//Habilitar la captura de datos mediante post / formularios
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//configurar CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-type,Authorization",
    exposedHeaders: "Content-Length,X-Knowledge",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Apply CORS middleware globally
app.use(cors(corsOptions));

//configurar el puerto
const port = 3000;

//Usar las rutas
app.use("/gastos", notasRouter); //NOTAS
app.use("/ingresos", notasRouter); //NOTAS

//Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

