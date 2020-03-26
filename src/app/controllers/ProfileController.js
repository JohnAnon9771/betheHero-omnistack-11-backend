import Ongs from '../models/Ongs';
import Incidents from '../models/Incidents';

class ProfileController {
  async index(req, res) {
    try {
      const ongs_id = req.headers.authorization;
      const ongs = await Ongs.findAll({
        where: { ongs_id },
        include: { model: Incidents, as: 'incidents' },
      });
      return res.json(ongs);
    } catch (error) {
      return res.status(500).json({ error: { message: 'Error no servidor!' } });
    }
  }
}

export default new ProfileController();
