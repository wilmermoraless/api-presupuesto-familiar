import { Router } from "express";


import{
    allController,
    findController,
    createController,
    updateController,
    deleteController
} from "../../controllers/ahorros/ahorroControllers.js";

const ahorroRouter = Router();

//Proteger todas las rutas de este archivo
//POR EL MOMENTO SE COMENTA PARA PODER PROBAR LAS RUTAS SIN NECESIDAD DE UN TOKEN
//notasRouter.use(verifytoken);

// Rutas para la entidad de notas
ahorroRouter.get("/", allController);
ahorroRouter.get("/:id", findController);
ahorroRouter.post("/", createController);
ahorroRouter.put("/:id", updateController);
ahorroRouter.delete("/:id", deleteController);

export default ahorroRouter;