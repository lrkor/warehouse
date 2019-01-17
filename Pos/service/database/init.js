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

async function getData(sql1) {
  // let sql = 'SELECT * FROM user';
  let sql = sql1;
  let data = await query( sql );
  console.log(data)
}
getData('SELECT * FROM user');
