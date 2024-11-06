import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
'dbname',
'username',
'password',
  {
    host: "host",
    dialect: 'postgres',
    port:  5432,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  
  }
);

export default sequelize;
