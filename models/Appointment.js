const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  clinic: { type: String, required: true },
  city: { type: String, required: true },   // ✅ added
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"] },
  age: { type: Number },   // ✅ added
  weight: { type: Number }, // ✅ added
  message: { type: String },
  amount: { type: Number, required: false },
  status: { 
    type: String, 
    enum: ["pending", "completed", "rejected"],
    default: "pending"
  }
}, {
  timestamps: true
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
