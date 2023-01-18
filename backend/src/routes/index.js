import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getRooms } from "../controllers/Rooms.js";
import { getAvailableRooms } from "../controllers/Rooms.js";
// import { registrBooking } from "../controllers/Bookings.js";

const router = express.Router();

router.get("/rooms", verifyToken, getRooms);
router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/search", getAvailableRooms);

// router.post("/book", verifyToken, registrBooking);

export default router;
