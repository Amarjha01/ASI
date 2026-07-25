import express from 'express';
import { signupValidator } from '../validators/authValidator.js';
import validate from '../middleware/validate.js';
import {signUp , signIn} from '../controller/auth.js';


const authRoutes = express.Router();

authRoutes.post("/signup", signupValidator, validate, signUp);

export default authRoutes;