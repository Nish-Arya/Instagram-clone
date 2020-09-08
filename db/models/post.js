'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isUrl: true,
        len: [10, 255],
      }
    },
    caption: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      }
    }
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: 'userId' });
    Post.hasMany(models.Comment, { foreignKey: 'postId' });
  };
  return Post;
};