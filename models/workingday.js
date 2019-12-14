'use strict'

module.exports = (sequelize, DataTypes) => {
  const WorkingDay = sequelize.define('WorkingDay', {
    weekDay: DataTypes.STRING,
    workingDate: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN
  }, {})
  WorkingDay.associate = (models) => {}
  return WorkingDay
}
