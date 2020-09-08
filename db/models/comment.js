'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      }
    },
    body: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      }
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, { foreignKey: 'postId' });
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Comment;
};