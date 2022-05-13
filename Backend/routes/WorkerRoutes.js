const express = require("express");
const router = express.Router();

const worker_controller = require("../controllers/WorkerController");

router.get("/worker", worker_controller.worker_getall);
router.post("/worker", worker_controller.worker_create);
router.get("/worker/:id", worker_controller.worker_getById);
router.put("/worker/:id", worker_controller.worker_update);
router.delete("/worker/:id", worker_controller.worker_delete);


router.get("/worker//address/:id", worker_controller.worker_localities);
router.get("/worker/ocupation/:id", worker_controller.worker_ocupation);

router.get("/worker/info/:id", worker_controller.worker_getByEmailValidation);
router.get("/worker/data/:id", worker_controller.getUserinfo);

router.get("/worker/data//:localidad/:ocupacion", worker_controller.getWorker_Localities_Ocupation);

//------OBTENER LA PUBLICACION POR LOCALIDAD Y OCUPACION------//

router.get("/worker//:id/:id2", worker_controller.worker_localities_occupations);

module.exports = router;