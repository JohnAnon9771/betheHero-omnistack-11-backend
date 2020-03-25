import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Ongs from '../app/models/Ongs';
import Incidents from '../app/models/Incidents';

const models = [Ongs, Incidents];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
