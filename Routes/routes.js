import { Router } from "express";
import {
  getAllPersons,
  getPersonById,
  createPerson,
  deletePerson,
} from "../controllers/personcontroller.js";
//const router = express.Router()
const router = new Router();
router.get("/", getAllPersons);
router.get("/:id",getPersonById);
router.post("/", createPerson);
router.delete("/:id", deletePerson);
// router.patch("/:id", personcontroller.updateTour);
export default router;
