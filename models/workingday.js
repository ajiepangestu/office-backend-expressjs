'use strict'

module.exports = (sequelize, DataTypes) => {
  const WorkingDay = sequelize.define('WorkingDay', {
    weekDay: DataTypes.STRING,
    workingDate: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN,
    deleted: DataTypes.INTEGER
  }, {})
  WorkingDay.associate = (models) => {
    WorkingDay.belongsToMany(models.Working, {through: 'UserWorkingDay', foreignKey: 'workingDayId'})
  }
  return WorkingDay
}
