import express from "express";
import { getTask , testTask, createTask, editTask, getTaskForUser} from "../controler/controlerTask.js";

const router = express.Router();

router.get("/getTask",getTask);

router.post("/test",testTask);

router.put("/update/:id",editTask)

router.post("/userTask",getTaskForUser)

router.post("/create",createTask)

export default router;