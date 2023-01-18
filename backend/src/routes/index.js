import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getRooms, getAvailableRooms } from "../controllers/Rooms.js";
import { getUserBookings, registerBooking } from "../controllers/Bookings.js";

const router = express.Router();

router.get("/rooms", verifyToken, getRooms);
router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.post("/search", getAvailableRooms);
router.get("/bookings", getUserBookings);
router.post("/book", registerBooking);

// router.post("/book", verifyToken, registrBooking);

export default router;
