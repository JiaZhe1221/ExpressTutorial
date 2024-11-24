import { Model, DataTypes } from "sequelize";
import sequelize from "./sequilize"; // Import your sequelize instance

class Prophecy extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
}

Prophecy.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
	tableName: 'prophecy',
    modelName: "prophecy",
  }
);

export default Prophecy;
