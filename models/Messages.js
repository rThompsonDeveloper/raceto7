const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  inbox: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      messages: [
        {
          message: { type: String, required: true },
          from: { type: Boolean, required: true },
          seen: { type: Boolean, required: true },
          date: { type: Date, default: Date.now() },
        },
      ],
    },
  ],
});

module.exports = Messages = mongoose.model("messages", MessagesSchema);
