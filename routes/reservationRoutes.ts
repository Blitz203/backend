import express from "express";
import { signup, signin, refreshToken } from "../controllers/authController";
import { authenticateToken } from "../middlewares/authMiddleware";
import getDailyReservationAvailability from "../controllers/reservationController/getDailyReservationAvailability";
import getHourlyReservationAvailability from "../controllers/reservationController/getHourlyReservationAvailability";
import { getFutureReservations } from "../controllers/reservationController/getFutureReservations";
import { createNewReservation } from "../controllers/reservationController/createReservation";

const router = express.Router();

// Reservation Availability Endpoints
router.get("/range", getDailyReservationAvailability);
router.get("/day", getHourlyReservationAvailability);
router.get("/", getFutureReservations);

// Reservation CRUD Endpoints
router.post("/", createNewReservation);
router.get("/reservations/:id", authenticateToken);
router.patch("/reservations/:id", authenticateToken);
router.delete("/reservations/:id", authenticateToken);

export default router;
