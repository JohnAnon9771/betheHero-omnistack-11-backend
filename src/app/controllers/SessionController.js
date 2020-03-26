import Ongs from '../models/Ongs';

class SessionController {
  async store(req, res) {
    try {
      const { id } = req.body;
      const ong = await Ongs.findByPk(id, { attributes: ['name'] });
      if (!ong) {
        return res
          .status(400)
          .json({ error: { message: 'No ONG found with this ID' } });
      }

      return res.json(ong);
    } catch (error) {
      return res.status(500).json({ error: { message: 'Error no servidor!' } });
    }
  }
}

export default new SessionController();
