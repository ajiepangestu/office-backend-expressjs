'use strict'

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {})
  Company.associate = (models) => {}
  return Company
}
