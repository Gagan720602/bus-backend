import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
import { selectController, insertController } from './controller/testcontroller.js';
import { selectControllerSignup ,insertControllerSignup } from './controller/signupcontroller.js'

const router = new Router();

const defaultRouter = combineRouters( router);

router.get('/ultra', selectController);
router.post('/create', insertController);
router.get('/fetch',selectControllerSignup );
router.post('/signup',insertControllerSignup);



export default defaultRouter;