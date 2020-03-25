import Incidents from '../models/Incidents';
import Ongs from '../models/Ongs';

class IncidentController {
  async index(req, res) {
    try {
      const response = await Incidents.findAll({
        include: { model: Ongs, as: 'ongs' },
      });
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ error: { message: 'Error no servidor!' } });
    }
  }

  async store(req, res) {
    try {
      const ongs_id = req.headers.authorization;
      if (!ongs_id) {
        return res
          .status(401)
          .json({ error: { message: 'Usuário não autorizado!' } });
      }
      const response = await Incidents.create({ ongs_id, ...req.body });
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ error: { message: 'Error no servidor!' } });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const ongs_id = req.headers.authorization;
      if (!ongs_id) {
        return res
          .status(401)
          .json({ error: { message: 'Usuário não autorizado!' } });
      }
      const response = await Incidents.findOne({
        where: { id, ongs_id },
      });
      await response.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: { message: 'Error no servidor!' } });
    }
  }
}

export default new IncidentController();
