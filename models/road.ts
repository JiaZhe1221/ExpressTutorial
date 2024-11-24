import { Model, DataTypes } from 'sequelize';
import sequelize from './sequilize';

class Road extends Model {
  public id!: number;
  public name!: string;
}

Road.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'road',
  freezeTableName: true,
  timestamps: false, // No automatic createdAt/updatedAt columns
});

export default Road;
