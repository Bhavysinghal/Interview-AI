const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const authRouter = Router();

/**
 *@route POST /api/auth/register
 *@description Register a new User
 *@access Public
 */

authRouter.post("/register", authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @description login user with email and password
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 *@route GET /api/auth/logout
 *@description Logout user by blacklisting the token
 *@access Public
 */
authRouter.get("/logout", authController.logoutUserController);

module.exports = authRouter;
