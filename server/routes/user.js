import express from 'express'
import { getUser, createUser, deleteUser } from '../controller/user.js';
import user from '../models/user.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;