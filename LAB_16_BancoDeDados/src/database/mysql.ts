import mysql, { Connection, QueryError } from 'mysql2';

const dbConfig = {
    host: 'localhost',
    port: 3306, 
    user: 'root', 
    password: 'root',
    database: 'vendas'
};

const mysqlConnection: Connection = mysql.createConnection(dbConfig);

mysqlConnection.connect((err) => {
    if(err){
        console.error('Erro ao conectar ao Banco de Dados');
        throw err;
    }
    console.log('Conexão bem-sucedida com o Banco de Dados MySQL');
});

export function executarComandoSQL(query: string, valores: any[], callback: (err: any, result: any) => void){
    mysqlConnection.query(query, valores, (err, resultado: any) => {
        if(err){
            console.error('Erro ao executar a query. ', err);
            throw err;
        }
        return callback(err, resultado);
    });
}
