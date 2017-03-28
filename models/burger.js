module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a burger_name from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our burger_name is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    }
  },{
    classMethods: {
      associate: function(models) {
        Burger.hasMany(models.Customer_Order, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Burger;
};
