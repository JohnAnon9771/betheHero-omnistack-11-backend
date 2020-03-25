import Sequelize, { Model } from 'sequelize';

class Incidents extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Ongs, { foreignKey: 'ongs_id', as: 'ongs' });
  }
}

export default Incidents;
