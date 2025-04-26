import express from "express";
const router = express.Router();
import * as UserCtrl from "../Controller/UserCtrl.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

router.post("/register", UserCtrl.createUser);
router.post("/forget-password", UserCtrl.forgetPasswordToken);
// Not Done
router.put("/reset-password/:token", UserCtrl.resetPassword);

router.put("/password", authMiddleware, UserCtrl.UpdatePassword);
router.post("/login", UserCtrl.loginUserCtrl);
router.get("/getAllUser", UserCtrl.getAllUser);
router.get("/refresh", UserCtrl.handleRefreshToken);
router.get("/logout", UserCtrl.logout);

router.get("/:id", authMiddleware, isAdmin, UserCtrl.getSingleUser);
router.delete("/:id", UserCtrl.DeleteSingleUser);
router.put("/edit-user", authMiddleware, UserCtrl.UpdateSingleUser);
router.put("/block-user/:id", authMiddleware, isAdmin, UserCtrl.blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, UserCtrl.unblockUser);

export default router;
