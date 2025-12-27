const Appointment = require("../models/Appointment");

// CREATE Appointment
const createAppointment = async (req, res) => {
  try {
    const {
      clinic,
      city,
      service,
      date,
      time,
      name,
      phone,
      gender,
      age,
      weight,
      message,
      amount,
      status
    } = req.body;

    const newAppointment = new Appointment({
      clinic,
      city,
      service,
      date,
      time,
      name,
      phone,
      gender,
      age,
      weight,
      message,
      amount,
      status
    });

    await newAppointment.save();
    res.status(201).json({ success: true, message: "Appointment saved successfully" });
  } catch (error) {
    console.error("Error saving appointment:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET All Appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET Single Appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ success: false, message: "Appointment not found" });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE Appointment
const updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Appointment not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE Appointment
const deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Appointment not found" });
    res.status(200).json({ success: true, message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
};
