const mongoose = require('mongoose')

const forumSchema = new mongoose.Schema({
    getsUpdates: {
      type: Boolean,
      default: false
    },
    ProfileName: {
      type: String,
      default: false
    },
    Body: {
      type: String,
      default: false
    } 
},{
  timestamps: true
})
module.exports = mongoose.model('Forum', forumSchema)