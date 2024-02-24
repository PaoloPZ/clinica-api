import { Router } from "express";
import { createAppointment } from "../controller/appointment.controller.js";

const router = Router();

router.post('/', createAppointment);

export default router;
