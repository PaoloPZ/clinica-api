import Area from '../entity/area.entity.js';
import Professional from '../entity/professional.entity.js';
import Appointment from '../entity/appointment.entity.js';
import { Op } from 'sequelize';

export const createArea = async (req, res) => {
  const { name } = req.body;

  try {
    const area = await Area.create({ name });

    res.status(201).json({ message: 'Area created', area });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

export const getAreaAvailability = async (req, res) => {
  const { areaId } = req.params;

  try {
    const currentDatetime = new Date();
    const currentDay = currentDatetime.getDay();

    const firstWeekDay = new Date(currentDatetime);
    firstWeekDay.setDate(firstWeekDay.getDate() - currentDay + 1);
    firstWeekDay.setHours(0, 0, 0, 0);

    const lastWeekDay = new Date(currentDatetime);
    lastWeekDay.setDate(lastWeekDay.getDate() - currentDay + 7);
    lastWeekDay.setHours(23, 59, 59, 999);

    const area = await Area.findByPk(areaId, { include: [
      {
        model: Professional,
        as: 'professionals',
      }
    ] });

    const appointments = await Appointment.findAll({
      where: {
        professionalId: {
          [Op.in]: area.professionals.map(professional => professional.userId)
        },
      }
    });

    const availability = [];

    //Filter

    res.status(200).json({ message: 'Area availability', area });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}
