import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
  },
  phone: { type: DataTypes.STRING, unique: true, allowNull: true },
  password: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: true },
  name: { type: DataTypes.STRING, allowNull: true },
});

const Game = sequelize.define("game", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  attempts: { type: DataTypes.INTEGER, defaultValue: 0 },
  is_winner: { type: DataTypes.BOOLEAN, defaultValue: false },
  result: {
    type: DataTypes.ENUM("empty", "physical", "digital"),
    allowNull: false,
    defaultValue: "empty",
  },
});

User.hasMany(Game, { foreignKey: "user_id", onDelete: "CASCADE" });
Game.belongsTo(User, { foreignKey: "user_id" });

export default { User, Game };
