
module.exports = function(sequelize, DataTypes) {
  var Customer_Order = sequelize.define("Customer_Order", {
  cust_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our burger_name is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
  burger_id: {
      type: DataTypes.INTEGER,
	  allowNull: false,
    },
 burger_qty: {
      type: DataTypes.INTEGER,
	  allowNull: false,
  },
  devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  freezeTableName: true,

    // define the table's name
    tableName: 'customer_orders',

    classMethods: {
      associate: function(models) {
        Customer_Order.hasMany(models.Burger)
      }
    }
  });

  return Customer_Order;
};
