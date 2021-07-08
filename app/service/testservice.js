import { selectLoginUser, insertLoginUser } from '../models/test.js';

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


export const selectservice = async()=>{
    let response = await selectLoginUser()
    console.log(response);
    return response;
}

export const insertservice  = async(bus_no, source, desti, bus_name, departure, duration, rating, seats, fare) => {
   try{
    let response = await insertLoginUser(bus_no, source, desti, bus_name, departure, duration, rating, seats, fare)
    

    console.log(response);
    return response;
   }
   catch(e)
   {
       console.log(e.message)
   }
}

//selectservice();

export  const locService =async (source,desti) =>{
    const client = await pool.connect();
    
    let query=`SELECT * FROM bus_info WHERE source = '${source}' AND desti='${desti}'`;
     

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

//===============================================================book=====================================//
export  const bookService =async (bus,seat) =>{
    const client = await pool.connect();
    
    let query=`UPDATE bus_info SET seats='${seat}' where bus_no='${bus}'`;
     

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

//==========================================fetch book seats service================================================//
export  const seatinfo =async (bus) =>{
    const client = await pool.connect();
    
    let query=`SELECT * FROM bus_info WHERE bus_no = '${bus}' `;
     

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