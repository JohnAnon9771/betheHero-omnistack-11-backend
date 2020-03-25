import crypto from 'crypto';
import Ongs from '../models/Ongs';

class OngsController {
  async store(req, res) {
    try {
      const id = crypto.randomBytes(4).toString('hex');
      await Ongs.create({ id, ...req.body });
      return res.json(id);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new OngsController();
