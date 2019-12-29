'use strict'

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    deleted: DataTypes.INTEGER
  }, {})
  Company.associate = (models) => {}
  return Company
}
