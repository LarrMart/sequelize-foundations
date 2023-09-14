require('dotenv').config();

const dbConnectionData = {
  host     : process.env.HOST,
  port     : process.env.PORT,
  username : process.env.DB_USER,
  password : process.env.PASSWORD,
  database : process.env.DB_NAME,
  dialect  : process.env.DIALECT
}

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConnectionData);

const Person = sequelize.define('Person', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  // freezeTableName: true
  tableName: 'People',
  timestamps: false
})

async function main() {
  try {
  	await Person.sync({force: true});
  	await Person.bulkCreate(
      [
        {
          firstName : 'Guillermo',
          lastName  : 'Larroca'
        },
        {
          firstName : 'Barbara',
          lastName : 'Doe'
        },
        {
          firstName: 'Sofi',
          lastName: 'Jujuy'
        }
      ]
    );
	  const result = await Person.findAll();
    console.log(result.map(elem => elem.dataValues));
  
  } catch(error) {
    console.log(error);
  }
}

main();
