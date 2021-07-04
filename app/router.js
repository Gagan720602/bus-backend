import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
import { selectController, insertController ,locController } from './controller/testcontroller.js';
import { selectControllerSignup ,insertControllerSignup ,checkCredentials} from './controller/signupcontroller.js'

const router = new Router();

const defaultRouter = combineRouters( router);

router.get('/ultra', selectController);     // bus api
router.post('/create', insertController);
router.post('/loc',locController);

router.get('/fetch',selectControllerSignup );
router.post('/signup',insertControllerSignup);  //sign up api

router.post('/login',checkCredentials) //log in api



export default defaultRouter;