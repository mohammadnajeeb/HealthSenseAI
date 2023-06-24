import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    medicalHistory: {
      type: String,
    },
    familyHistory: {
      type: String,
    },
    lifestyle: {
      type: String,
    },
    vitalSigns: {
      type: String,
    },
    allergies: {
      type: String,
    },
    medication: {
      type: String,
    },
    immunizations: {
      type: String,
    },
    testResults: {
      type: String,
    },
    emergencyContacts: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", schema);
