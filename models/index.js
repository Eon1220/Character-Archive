const User = require('./User');
const Chara = require('./Chara');

User.hasMany(Chara, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Chara.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Chara };