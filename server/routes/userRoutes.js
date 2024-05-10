import express from 'express';
import {google, signIn,signUp} from '../controllers/user.js';

const router=express.Router();
router.post('/signin',signIn);
router.post('/signup',signUp);
router.post('/google',google);

export default router;