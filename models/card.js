"use strict";
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      // Model attributes are defined here
      word: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      translation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
      },
      learned: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      // Other model options go here
    }
  );
  Card.associate = function (models) {
    Card.belongsToMany(models.Tag, { as: "tags", through: "card_tags" });
    Card.belongsTo(models.User);
  };
};
