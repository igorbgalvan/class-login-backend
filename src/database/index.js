import Sequelize  from "sequelize";
import database from '../config/database'

import User from "../models/User";

const sequelize = new Sequelize(database)

User.init(sequelize)

export default sequelize