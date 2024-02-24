import User from '../entity/user.entity.js';
import Patient from '../entity/patient.entity.js';
import Professional from '../entity/professional.entity.js';

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, schedule, role, areaId } = req.body;

  try {
    const user = await User.create({ firstName, lastName, email, password });
    if (role === 'patient') {
      await Patient.create({ userId: user.id });
    } else {
      await Professional.create({ userId: user.id, schedule, areaId });
    }

    res.status(201).json({ message: 'User created', user });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}
