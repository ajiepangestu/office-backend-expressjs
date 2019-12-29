'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    deleted: DataTypes.INTEGER
  }, {})
  User.associate = (models) => {
    User.belongsTo(models.Company, {foreignKey: 'companyId'})
    User.belongsToMany(models.WorkingDay, {through: 'UserWorkingDay', foreignKey: 'userId'})
  }
  return User
}
