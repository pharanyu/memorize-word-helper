const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: "User name can't be empty",
    unique: true
  },
  password: {
    type: String,
    required: "Password can't be empty",
    minlength: [6, "Password must be atleast 6 characters"]
  },
  saltSecret: String
});

// Event
UserSchema.pre("save", function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
