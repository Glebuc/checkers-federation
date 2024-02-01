const sequelize = require('../db')
const { Sequelize, DataTypes, STRING } = require('sequelize');



const User = sequelize.define('user', 
{id_user:{type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
login: {type: DataTypes.STRING, unique: true, comment: "Email пользователя"},
password: {type: DataTypes.STRING, unique: true, comment:"Пароль"},
first_name: {type: DataTypes.STRING, comment: "Имя пользователя"},
last_name: {type: DataTypes.STRING, comment: "Фамилия пользователя"},
roles: {type: DataTypes.ARRAY(STRING), comment:"Массив ролей пользователей"}})