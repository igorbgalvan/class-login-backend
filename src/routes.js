import express from "express";
import UserController from "./controllers/UserController";

const routes = express.Router()


routes.get("/users", UserController.list)
routes.post("/users", UserController.create)
routes.patch("/user/:id", UserController.update)
routes.delete("/user/:id", UserController.delete)


export default routes