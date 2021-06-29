import { selectLoginUser, insertLoginUser } from '../models/test.js';

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