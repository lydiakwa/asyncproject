const Sequelize = require('sequelize');
const db = require('./database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { STRING, VIRTUAL } = Sequelize;

const User = db.define('user', {
  email: {
    type: STRING,
    allownull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'email cannot be empty',
      },
    },
  },
  password: {
    type: STRING,
    allownull: false,
    validate: {
      notEmpty: false,
    },
  },
  profilePicture: {
    type: STRING,
    defaultValue:
      'https://static.wikia.nocookie.net/logopedia/images/8/81/Msn_messenger_logo.jpg/revision/latest?cb=20120529141927',
  },
  token: {
    type: VIRTUAL,
    get() {
      const token = jwt.sign({ userId: this.id }, process.env.JWT);
      return token;
    },
  },
});

User.byToken = async (token) => {
  try {
    const parsedToken = jwt.verify(token, process.env.JWT);
    if (parsedToken) {
      const user = await User.findByPk(parsedToken.userId);
      return user;
    }
  } catch (err) {
    const error = Error('bad credentials');
    error.status = 401;
    throw err;
  }
};

User.authenticate = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    }
  }
  const error = Error('bad credentials');
  error.status(401);
  throw error;
};

User.beforeCreate(async (user) => {
  const SALT_COUNT = 5;
  const hashedPw = await bcrypt.hash(user.password, SALT_COUNT);
  user.password = hashedPw;
});

User.prototype.toJSON = function () {
  return {
    token: this.token,
    email: this.email,
    profilePicture: this.profilePicture,
  };
};

module.exports = User;
