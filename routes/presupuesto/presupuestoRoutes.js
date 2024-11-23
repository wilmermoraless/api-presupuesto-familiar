import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/presupuesto/presupuestoControllers.js";

const presupuestoRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
presupuestoRouter.get("/", allController);
presupuestoRouter.get("/:id", findController);
presupuestoRouter.post("/", createController);
presupuestoRouter.put("/:id", updateController);
presupuestoRouter.delete("/:id", deleteController);

export default presupuestoRouter;