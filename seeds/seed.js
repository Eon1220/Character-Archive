const sequelize = require('../config/connections');
const { User, Chara } = require('../models');

const userData = require('./userData.json');
const charaData = require('./charaData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const chara of charaData) {
    await Chara.create({
      ...chara,
    });
  }

  process.exit(0);
};

seedDatabase();
