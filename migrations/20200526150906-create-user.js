"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        provider: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.bulkInsert("Users", [
          {
            name: "Fake User",
            provider: "fake",
            email: "fake@email.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ])
      )
      .then(() =>
        queryInterface.addColumn("Cards", "UserId", {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          allowNull: false,
          defaultValue: 1,
        })
      )
      .then(() =>
        queryInterface.addColumn("Tags", "UserId", {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          allowNull: false,
          defaultValue: 1,
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.dropTable("Users", { transaction: t }),
        queryInterface.removeColumn("Cards", "UserId", { transaction: t }),
        queryInterface.removeColumn("Tags", "UserId", { transaction: t }),
      ]);
    });
  },
};
