"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define(
    "Word",
    {
      // Model attributes are defined here
      word: {
        type: DataTypes.STRING,
        allowNull: false,
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
  Word.associate = function (models) {
    Word.belongsToMany(models.Tag, { through: "word_tags" });
  };
};
