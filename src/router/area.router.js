import { Router } from "express";
import { createArea, getAreaAvailability } from "../controller/area.controller.js";

const router = Router();

router.post('/', createArea);
router.get('/:areaId/availability', getAreaAvailability);

export default router;
