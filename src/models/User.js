import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: 6
        }
      }
    }, {
      hooks: {
        beforeValidate: async (user, options) => {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      sequelize
    })
  }

  static generateJwt(user) {
    return jwt.sign({ id: user.id }, process.env.API_SALT, {
      expiresIn: "15m"
    });
  }
}
export default User;