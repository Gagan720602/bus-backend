
import {selectLoginUserSignup,insertLoginUserSignup} from '../models/testsignup.js';

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


export const selectserviceSignup = async()=>{
    let response = await selectLoginUserSignup()
    console.log(response);
    return response;
}

export const insertserviceSignup  = async(user_id, first_name, last_name ,password, mobile,  email,  gender) => {
   try{
    let response = await insertLoginUserSignup(user_id, first_name, last_name ,password, mobile,  email,  gender)
    

    console.log(response);
    return response;
   }
   catch(e)
   {
       console.log(e.message)
   }
}

//selectservice();

export  const checkserviceCredentials =async (user_id,password) =>{
    const client = await pool.connect();
    
    let query=`SELECT * FROM signup_info WHERE user_id = '${user_id}' AND password='${password}'`;
     

    try{
        let resp =  await client.query(query)
       console.log(resp);
        return resp; 
      }
      catch(e)
      {
          console.log(e.message)
      }

}
