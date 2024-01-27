import  express,{Router} from "express";
import Controller from "./Classes/Controller.js";

const control = new Controller();

const {getUser,getUsers}:Controller = control;

const router:Router = express.Router();

router.get("/:userId",getUser.bind(control));

router.get("/",getUsers.bind(control));

export default router