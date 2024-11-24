import { Model, DataTypes } from 'sequelize';
import sequelize from './sequilize';

class PersonHasRoad extends Model {
  public person_id!: number;
  public road_id!: number;
}

PersonHasRoad.init({
  person_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'person', // Points to the Person table
      key: 'id',
    },
  },
  road_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'road', // Points to the Road table
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'person_has_road',
  tableName: 'person_has_road',
  freezeTableName: true,
  timestamps: false,
});

export default PersonHasRoad;
