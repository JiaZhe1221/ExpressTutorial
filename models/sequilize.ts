import { Sequelize } from "sequelize";

const schema = "tutorial_sequelize";
const username = "root";
const password = "Janson!@@!";

const sequelize = new Sequelize(schema, username, password, {
  host: "localhost",
  dialect: "mysql",
  username: 'root',  // Your DB username
  password: 'password', // Your DB password
  database: 'your_database_name', // Your DB name
});
sequelize.authenticate()
  .then(() => console.log(`connect datasource success`))
  .catch((e: any) => console.log(`datasource failed`, e));

export default sequelize;