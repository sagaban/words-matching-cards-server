"use strict";
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define(
    "Card",
    {
      // Model attributes are defined here
      word: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      translation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
      },
    },
    {
      // Other model options go here
    }
  );
  Card.associate = function (models) {
    Card.belongsToMany(models.Tag, { through: "card_tags" });
  };
};
