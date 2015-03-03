"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      userId:{
        type: DataTypes.INTEGER,
        references: 'Users',
        referencesKey: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Tasks").done(done);
  }
};