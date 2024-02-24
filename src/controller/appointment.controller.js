import Appointment from '../entity/appointment.entity.js';

export const createAppointment = async (req, res) => {
  const { startDateTime, endDateTime, professionalId, patientId } = req.body;

  try {
    const startDatetime = new Date(startDateTime);
    const endDatetime = new Date(endDateTime);

    const appointment = await Appointment.create({
      startDatetime,
      endDatetime,
      professionalId,
      patientId,
      status: 'PENDING',
    });

    res.status(201).json({ message: 'Appointment created', appointment });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
