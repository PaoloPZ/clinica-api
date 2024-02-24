import { db } from '../config/db.config.js';
import { DataTypes, Model } from 'sequelize';
import { Professional } from './professional.entity.js';

class Area extends Model {}

Area.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'area'
});

Area.hasMany(Professional, {as: 'professionals', foreignKey: 'areaId', onDelete: 'CASCADE'});


export default Area;
