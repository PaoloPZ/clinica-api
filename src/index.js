import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { API_PORT } from './config/env.config.js';
import { routerManager } from './router/index.js';
import Area from './entity/area.entity.js';
import User from './entity/user.entity.js';
import Professional from './entity/professional.entity.js';
import Patient from './entity/patient.entity.js';
import Appointment from './entity/appointment.entity.js';


Area.sync();
User.sync();
Professional.sync();
Patient.sync();
Appointment.sync();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

routerManager(app);

app.listen(API_PORT, () => {
  console.log(`Server is running on http://localhost:${API_PORT}/`);
})
