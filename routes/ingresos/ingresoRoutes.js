import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/ingresos/ingresoControllers.js";

const ingresoRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
ingresoRouter.get("/", allController);
ingresoRouter.get("/:id", findController);
ingresoRouter.post("/", createController);
ingresoRouter.put("/:id", updateController);
ingresoRouter.delete("/:id", deleteController);

export default ingresoRouter;