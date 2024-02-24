import express from 'express';
import UserRouter from './user.router.js';
import AreaRouter from './area.router.js';
import AppointmentRouter from './appointment.router.js';

export const routerManager = (app) => {
  const router = express.Router();
  app.use('/clinica/api', router);
  router.use('/users', UserRouter);
  router.use('/areas', AreaRouter);
  router.use('/appointments', AppointmentRouter);
};
