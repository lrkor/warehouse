const mysql = require('mysql');
const pool = mysql.createPool({
  host     :  'localhost',
  user     :  'root',
  password :  '123456',
  database :  'database'
});

let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
};

async function getData(sqlString) {
  let sql = sqlString;
  let data = await query( sql );
  console.log(data)
}
const query1 = 'SELECT * FROM user WHERE user_name="admin"';
const query2 = 'SELECT * FROM user';
getData(query1);
