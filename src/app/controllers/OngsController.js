import crypto from 'crypto';

import Ongs from '../models/Ongs';
import Incidents from '../models/Incidents';

class OngsController {
  async index(req, res) {
    try {
      const ongs = await Ongs.findAll({
        include: { model: Incidents, as: 'incidents' },
      });
      return res.json(ongs);
    } catch (error) {
      return res.status(500).json({ error: { message: 'Error no servidor!' } });
    }
  }

  async store(req, res) {
    try {
      const id = crypto.randomBytes(4).toString('hex');
      await Ongs.create({ id, ...req.body });
      return res.json({ id });
    } catch (error) {
      return res.status(500).json({ error: { message: 'Error no servidor!' } });
    }
  }
}

export default new OngsController();
