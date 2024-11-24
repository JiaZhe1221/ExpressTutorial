import { DataTypes, Model } from "sequelize";
import sequelize from "./sequilize";

class Prophet extends Model {
  public id!: number | null;
  public name!: string | null;
};

Prophet.init({
  name: DataTypes.STRING,
}, { sequelize, 
	modelName: "prophet", 
	freezeTableName: true, 
	timestamps: false, 
});

export default Prophet;