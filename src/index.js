// How to connect to a local database.

require('dotenv').config()
const Sequelize = require('Sequelize');

const sequelize = new Sequelize({
	host     : process.env.HOST,
	port     : process.env.PORT,
	username : process.env.DB_USER,
	password : process.env.PASSWORD,
	database : process.env.DB_NAME,
	dialect  : 'mysql'
});

const database = () => {
	console.log(new Date())
	sequelize.authenticate()
		.then(() => {
			console.log('Connection succesful!');
			console.log(new Date())
		}).finally(() => {
			sequelize.close()
			console.log('Connection close!');
			console.log(new Date())
		})
	
	
};

database();


