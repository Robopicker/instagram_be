const { Sequelize } = require('sequelize');

const db = { }
let sequelize;
sequelize = new Sequelize("instagram_schema", "admin", "qwertyuiop", {
    host: 'instagram-instance-test.cglxcrsqtvzm.ap-south-1.rds.amazonaws.com',
    dialect: 'mysql'
}
);

db.dbInstance = sequelize;
db.Sequelize = Sequelize;
module.exports = db;