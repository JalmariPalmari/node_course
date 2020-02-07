//const mysql      = require('mysql');

/* 
 INSERT some new book data to mysql database.
 Then show inserted data by select query.
 DELETE inserted data from the database.
*/

// Setting MySQL connection details
const mydb = {
    host : 'localhost',
    user : 'root',
    pwd  : 'root66',
    database : 'nodedemo',
    bookTable : 'Book'
}

/*const connectionOld = mysql.createConnection({
  host     : mydb.host,
  user     : mydb.user,
  password : mydb.pwd,
  database : mydb.database
});
*/

const mysql = require('mysql2/promise');
const connection = mysql.createPool({
  host: mydb.host,
  user: mydb.user,
  password : mydb.pwd,
  database: mydb.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const mysqlQueries = async() => {

  try {
    // Create database connection
    //await connection.connect();
    //console.log(connection)

    const insertData  = {"bid":6,"name":"Node.js in Action","price":44.99,"authors":"Mike Cantelon, Marc Harter"}

    // Insert data into the database
    const query = await connection.query('INSERT INTO ' + mydb.bookTable + ' SET ?', insertData)
    //console.log(query.sql);


    // Delete some data from the database
     const deleteQuery = await connection.query('DELETE FROM ' + mydb.bookTable + ' WHERE id > 5');
     
    console.log("After delete")
    const [rows, cols] = await connection.query('SELECT * from Book');
    console.log(rows)

    /*await connection.query('SELECT * from ' + mydb.bookTable, 
    (err, rows, fields) => {
    if (!err) {
      console.log('MySQL query results');
      console.log(JSON.stringify(rows));
    }
   });*/
     
    
   } catch (err) {
      console.log(err);
  } finally {
      connection.end();
  }
}

mysqlQueries()