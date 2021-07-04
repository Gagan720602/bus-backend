import { insertserviceSignup,selectserviceSignup ,checkserviceCredentials} from "../service/signupservice.js";

export const selectControllerSignup = async(ctx) => {

    try{
      const response = await selectserviceSignup();
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
      console.log(e.message)
      ctx.status = 500;
      ctx.body = { success : false, message: e.message };
    }
  }

  export const insertControllerSignup = async(ctx) => {

    try{
      const params = ctx.request.body;
      const user_id =    params.userId;
      const first_name =    params.firstName;
      const last_name =     params.lastName;
      const password =  params.password;
      const mobile = params.mobile;
      const email =  params.email; 
      const gender =    params.gender;
      
      
      //const {mobile, name, email} = params; 

  //const response = await insertservice("mobile" :"123456789", "name" : "chandan", "email" : "abc12@gmail.com", "college" : "rit", "city" : "blr", "gender" : "male");
 
      const response = await insertserviceSignup(user_id, first_name, last_name, password, mobile, email, gender);
      
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

  export const checkCredentials= async(ctx) =>{
    try{
      const params = ctx.request.body;
        console.log('credentials',params)
      const user_id = params.userId;
      const password =params.password;

      const response =await checkserviceCredentials(user_id,password)
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
        console.log(e.message)
        ctx.status = 500;
        ctx.body = { success : false, message: e.message };
    }
  }