import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/gastos/gastoControllers.js";

const gastoRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
gastoRouter.get("/", allController);
gastoRouter.get("/:id", findController);
gastoRouter.post("/", createController);
gastoRouter.put("/:id", updateController);
gastoRouter.delete("/:id", deleteController);

export default gastoRouter;