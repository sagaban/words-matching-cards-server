"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Cards", "learned", {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      })
      // .then(function () {
        // queryInterface.bulkUpdate("Cards", { learned: false }, {});
      // });
  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn("Cards", "learned");
  },
};
