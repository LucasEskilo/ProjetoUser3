// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-c73046e0d0e5b4a5619cad753d211861dcb55c40.cppnjdtsmtpk.eu-west-2.rds.amazonaws.com',
            port: 3306,
            name: 'BDWebApp',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'Aurelio14'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}