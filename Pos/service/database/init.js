const mysql = require('mysql');
const devHost = 'localhost';
const proHost = '148.70.186.231';
const pool = mysql.createPool({
  host     :  proHost,
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

