import { insertservice,selectservice } from "../service/testservice.js";
export const selectController = async(ctx) => {

    try{
      const response = await selectservice();
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
      console.log(e.message)
      ctx.status = 500;
      ctx.body = { success : false, message: e.message };
    }
  }

  export const insertController = async(ctx) => {

    try{
      const params = ctx.request.body;
      
      const bus_no =    params.bus_no;
      const source =    params.source;
      const desti =     params.desti;
      const bus_name =  params.bus_name;
      const departure = params.departure;
      const duration =  params.duration; 
      const rating =    params.rating;
      const seats =     params.seats;
      const fare =      params.fare;
      //const {mobile, name, email} = params; 

      //const response = await insertservice("mobile" :"123456789", "name" : "chandan", "email" : "abc12@gmail.com", "college" : "rit", "city" : "blr", "gender" : "male");
      const response = await insertservice(bus_no, source, desti, bus_name, departure, duration, rating, seats, fare);
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
      console.log(e.message)
      console.log('p')
      ctx.status = 500;
      ctx.body = { success : false, message: e.message };
    }
  }