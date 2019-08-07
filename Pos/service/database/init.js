const mysql = require('mysql');
const pool = mysql.createPool({
  host     :  '148.70.186.231',
  user     :  'root',
  password :  '123456',
  database :  'database'
});

exports.query = function( sql, values ) {
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

