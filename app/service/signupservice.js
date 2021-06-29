import { selectLoginUserSignup, insertLoginUserSignup } from '../models/testsignup.js';

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