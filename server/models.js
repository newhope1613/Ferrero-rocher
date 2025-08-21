import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: true, validate: { isEmail: true } },
    phone: { type: DataTypes.STRING, unique: true, allowNull: true },
    password: { type: DataTypes.STRING, allowNull: true },
    address: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING, allowNull: true }
})

const Prize = sequelize.define("prize", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    prize: {
        type: DataTypes.ENUM("digital", "physical", "empty")
    }
})

const Game = sequelize.define("game", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: {
        type: DataTypes.INTEGER, allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
    prize_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Prize,
            key: "id"
        }
    },
    result: {
        type: DataTypes.ENUM("empty", "physical", "digital"),
        allowNull: false
    }
})



// User ↔ Game (1 ко многим)
User.hasMany(Game, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Game.belongsTo(User, { foreignKey: 'user_id' });

// Prize ↔ Game (1 ко многим: в одной игре максимум один приз)
Prize.hasMany(Game, { foreignKey: 'prize_id' });
Game.belongsTo(Prize, { foreignKey: 'prize_id' });

export default { User, Game }