const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required to be added to blacklist"],
    },
  },
  {
    timestamps: true, // ✅ Correct place
  },
);

const tokenBlacklistModel = mongoose.model(
  "tokenBlacklists",
  blacklistTokenSchema,
);

module.exports = tokenBlacklistModel;
