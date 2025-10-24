import express from "express"
import usersControllers from '../controllers/users.controller.js'
import validationMiddleware from "../middleware/validation.middleware.js"

const router = express.Router()

router.get("/users", usersControllers.getUsers)
router.post("/users", validationMiddleware.validateUser, usersControllers.postUser)
router.get("/users/age/:range", usersControllers.getUsersByAgeRange)
router.patch("/users/:id", validationMiddleware.validateUser, usersControllers.patchUser)

export default router