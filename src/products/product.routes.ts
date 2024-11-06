import { Router } from "express";
import { controller } from "../utils/controller";
import { findAll, create, sortBy } from "./product.controller";

const router = Router();

router.get('/', controller(findAll))
router.post('/', controller(create))
router.get('/sort', controller(sortBy))

export default router;