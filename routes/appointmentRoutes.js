const express = require("express");
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} = require("../controllers/appointmentController");

// CREATE Appointment
router.post("/", createAppointment);

// GET All Appointments
router.get("/", getAppointments);

// GET Single Appointment by ID
router.get("/:id", getAppointmentById);

// UPDATE Appointment
router.put("/:id", updateAppointment);

// DELETE Appointment
router.delete("/:id", deleteAppointment);

module.exports = router;
