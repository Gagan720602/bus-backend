import pkg from 'pg';
const {Pool} = pkg;
import {psqlConfig} from '../config/postgresConfig.js';

const pool = new Pool({
    connectionString: psqlConfig,
  });
pool.on('error', (error)=>{
    console.info("Unexpected error on idle client",error);
    process.exit(-1);
})
export const createTestDB = async() => {
    const client = await pool.connect();

    let query = 'create table signup_info(user_id varchar(20) primary key , first_name varchar(20), last_name varchar(20), password varchar(20) ,mobile varchar(10), email varchar(20), gender varchar(10) )';
  
    try{
      let resp =  await client.query(query)
      console.log(resp);
      return resp;
    }
    catch(e){
      console.log(e.message)
      return false;

    }
    finally {
        client.release();
    }
}
//createTestDB()
export const insertLoginUserSignup = async(user_id, first_name, last_name ,password, mobile,  email,  gender) => {
  const client = await pool.connect();
  
  let query = `INSERT INTO signup_info(user_id, first_name, last_name ,password, mobile,  email,  gender) VALUES('${user_id}', '${first_name}', '${last_name}','${password}', '${mobile}', '${email}','${gender}' ) RETURNING *`;

  try{
    let resp =  await client.query(query)
    console.log(resp);
    return {success : true , data: resp.rows[0]};;
  }
  catch(e){
        let message="some error occured";
      return {success : false , message};
  }finally {
      client.release();
  }
}
 //insertLoginUserSignup("abcd","gagan","r","959155","9591557009","sdfsdfsd@mail.com","male");

export const selectLoginUserSignup = async() => {
  const client = await pool.connect();
  
  let query = `SELECT * FROM signup_info `;
  try{
      let resp =  await client.query(query)
     console.log(resp.rows);
      return {success : true , data: resp.rows};;
   }
  catch(e){
         let message = "Some Error occured"
         return {success : false , message};
      }
  finally {
      client.release();
  }
}


//selectLoginUser();


