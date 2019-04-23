'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});

  Author.associate = function(models) {
    // associations can be defined here
    // https://stackoverflow.com/a/55323664/5456204
    Author.hasMany(models.Post)
  };

  return Author;
};