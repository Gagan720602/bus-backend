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

    let query = 'create table bus_info(bus_no varchar(5) primary key , source varchar(20) , desti varchar(20), bus_name varchar(20), departure varchar(10), duration varchar(10), rating varchar(10) ,seats varchar(5), fare varchar(10))';
  
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
export const insertLoginUser = async(bus_no, source, desti , bus_name, departure,  duration, rating, seats, fare) => {
  const client = await pool.connect();
  
  let query = `INSERT INTO bus_info(bus_no, source, desti , bus_name, departure,  duration, rating, seats, fare) VALUES('${bus_no}', '${source}', '${desti}', '${bus_name}','${departure}', '${duration}', '${rating}','${seats}', '${fare}'  ) RETURNING *`;

  try{
    let resp =  await client.query(query)
    console.log(resp);
    return { success : true , data: resp.rows };
  }
  catch(e){
    console.log(e.message)
        let message="some error not peace";
      return { success : false , message };
  }finally {
      client.release();
  }
}
//  insertLoginUser(1001,"Banglore","Mumbai","dulex bus","12:00 pm","6h 30m","4.5","7","400");
//  insertLoginUser(1002,"Banglore","Mumbai","dulex bus","12:00 pm","6h 30m","4.5","7","400");
//  insertLoginUser(1003,"Banglore","Mumbai","dulex bus","12:00 pm","6h 30m","4.5","7","400");
//  insertLoginUser(1004,"Banglore","Mumbai","dulex bus","12:00 pm","6h 30m","4.5","7","400");
 //   insertLoginUser(000,"Banglore","Mumbai","dulex bus","12:00 pm","6h 30m","4.5","7","400");
 //insertLoginUser(1015,"Banglore","Mumbai","dulex bus","6h 30m","4.5","7","400");

export const selectLoginUser = async() => {
  const client = await pool.connect();
  
  let query = `SELECT * FROM bus_info `;
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


// selectLoginUser();


