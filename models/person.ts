import { Model, DataTypes } from 'sequelize';
import sequelize from './sequilize'; // Assuming you have a `sequelize` instance setup

class Person extends Model {}

Person.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },  
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
  sequelize,
  modelName: 'person',
  freezeTableName: true,
  timestamps: false, // No automatic createdAt/updatedAt columns
});

export default Person;
