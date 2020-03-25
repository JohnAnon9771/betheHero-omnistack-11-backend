import Sequelize, { Model } from 'sequelize';

class Ongs extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Incidents, { foreignKey: 'ongs_id', as: 'incidents' });
  }
}

export default Ongs;
