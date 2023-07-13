const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  phone: Number,
  email: String,
  profession: {
    type: String,
    enum: ['Developer', 'Marketing', 'Hr','Designer'], 
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
