import { db } from '../config/db.config.js';
import { DataTypes, Model } from 'sequelize';
import Appointment from './appointment.entity.js';

export class Professional extends Model {}

Professional.init({
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  schedule: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'professional'
});

Professional.hasMany(Appointment, {as: 'appointments', foreignKey: 'professionalId', onDelete: 'CASCADE'});

export default Professional;
