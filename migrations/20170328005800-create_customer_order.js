'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('customer_order', {
  cust_name: {
      type: Sequelize.STRING,
      allowNull: false,
      // len is a validation that checks that our burger_name is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
  burger_id: {
      type: Sequelize.INTEGER,
	  allowNull: false,
	  references: {
            model: 'burgers',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
 burger_qty: {
      type: Sequelize.INTEGER,
	  allowNull: false,
  },
  devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
    
  });
},

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('customer_order')
  }
};
