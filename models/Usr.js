var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var Usr = sequelize.define("Usr", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        pword: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: False,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        av_image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Usr;

};