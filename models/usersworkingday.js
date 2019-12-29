'use strict'

module.exports = (sequelize, DataTypes) => {
  const UserWorkingDay = sequelize.define('UserWorkingDay', {
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {})
  UserWorkingDay.associate = (models) => {
    UserWorkingDay.belongsTo(models.User, {foreignKey: 'userId'})
    UserWorkingDay.belongsTo(models.WorkingDay, {foreignKey: 'workingDayId'})
  }
  return UserWorkingDay
};
