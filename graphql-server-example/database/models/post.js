'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});

  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Author, { foreignKey: 'authorId' })
  };

  return Post;
};