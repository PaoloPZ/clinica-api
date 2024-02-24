import { db } from '../config/db.config.js';
import { DataTypes, Model } from 'sequelize';

class Appointment extends Model {}

Appointment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  startDatetime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDatetime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'ATTENDED', 'CANCELLED', 'RESCHEDULED'),
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'appointment'
});

export default Appointment;
