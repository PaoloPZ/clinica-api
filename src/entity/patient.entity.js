import { db } from '../config/db.config.js';
import { DataTypes, Model } from 'sequelize';
import Appointment from './appointment.entity.js';

class Patient extends Model {}

Patient.init({
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  sequelize: db,
  modelName: 'patient'
});

Patient.hasMany(Appointment, {as: 'appointments', foreignKey: 'patientId', onDelete: 'CASCADE'});


export default Patient;
