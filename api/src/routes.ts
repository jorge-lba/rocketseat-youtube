import { Router, request, response } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/user', (request, response) => {
    return createUserController.handler(request, response)
})

export { router }