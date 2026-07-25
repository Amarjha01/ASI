import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    medicalInfo: {
      bloodGroup: {
        type: String,
      },

      allergies: [
        {
          type: String,
        },
      ],

      diseases: [
        {
          type: String,
        },
      ],

      medications: [
        {
          type: String,
        },
      ],

      disability: {
        type: String,
      },

      doctorName: {
        type: String,
      },

      doctorPhone: {
        type: String,
      },
    },

    emergencyContacts: [
      {
        name: String,
        relation: String,
        phone: String,
      },
    ],

    deviceInfo: {
      deviceId: String,
      deviceType: {
        type: String,
        enum: ["watch", "phone", "band", "other"],
      },
    },

    role: {
      type: String,
      enum: ["USER", "ADMIN", "SUPER_ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

export default User;