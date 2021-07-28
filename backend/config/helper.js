var  mysqli  =  require( 'mysqli' ) 

//pass in json 
let  conn  =  new  mysqli ( { 
  host : 'localhost' ,  // IP/domain name 
  post : 3306 ,  //port, default 3306 
  user : 'root' ,  //user name 
  passwd : '' ,  //password 
  charset : '' ,  // database encoding, default utf8mb4 [optional] 
  db : 'mega_shop'  // can specify the database or not [optional] 
} ) 

let db = conn.emit(false, '');

module.exports = {
    database: db
}