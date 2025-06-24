import { Router } from "express";

import { getContacts } from "../controllers/contactControllers.js";

const router=Router();

router.route("/contact").post(getContacts);

export default router;