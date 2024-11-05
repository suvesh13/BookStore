import express from "express"
// Example import statement in user.route.js
import {login, signup} from '../controller/user.controller.js';

const router = express.Router();
router.post("/signup",signup);
router.post("/login",login);

export default router;
