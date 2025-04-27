import express from "express";
const router = express.Router();
import * as UserCtrl from "../Controller/UserCtrl.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

router.post("/register", UserCtrl.createUser);
router.post("/login", UserCtrl.loginUserCtrl);

router.post("/admin-login", UserCtrl.loginAdmin);
router.post("/cart", UserCtrl.userCart);
router.get("/getCart", UserCtrl.getUserCart);
router.delete("/empty-cart", authMiddleware, UserCtrl.emptyCart);
router.post("/cart/apply-coupon", UserCtrl.applyCoupon);
router.post("/cart/cash-order", authMiddleware, UserCtrl.createOrder);

router.post("/get-orders", authMiddleware, UserCtrl.getOrders);

router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  UserCtrl.updateOrderStatus
);
// -------------------------
router.get("/wishlist", authMiddleware, UserCtrl.getWishList);

router.put("/saved-address", authMiddleware, UserCtrl.saveAddress);
router.put("/update", authMiddleware, UserCtrl.UpdateSingleUser);

router.put("/refresh", UserCtrl.handleRefreshToken);
// -------------------------
router.post("/forget-password", UserCtrl.forgetPasswordToken);

router.put("/reset-password/:token", UserCtrl.resetPassword);

router.put("/password", authMiddleware, UserCtrl.UpdatePassword);
router.get("/getAllUser", UserCtrl.getAllUser);
router.get("/logout", UserCtrl.logout);

router.get("/:id", authMiddleware, isAdmin, UserCtrl.getSingleUser);
router.delete("/:id", UserCtrl.DeleteSingleUser);
router.put("/block-user/:id", authMiddleware, isAdmin, UserCtrl.blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, UserCtrl.unblockUser);

export default router;
