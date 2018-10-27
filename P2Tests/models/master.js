module.exports = function(sequelize, DataTypes) {
var Crawl = sequelize.define("Crawl", {
    crawlName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    crawlOrder: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Crawl;
};