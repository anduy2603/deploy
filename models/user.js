const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://nguyenbuianduy26032003:anduyhd2003@cluster0.2exzgdt.mongodb.net/?retryWrites=true&w=majority"
);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: [String],
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "songs" }],
});

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };
