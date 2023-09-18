import { Schema, model, connect } from 'mongoose';
const bcrypt = require('bcryptjs');

const profileSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,

    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    emailAddress: {
      type: String,

      required: true
    },
    profilePicture: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg'
    },
    getsUpdates: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    }
   
}, {
  timestamps: true
})

profileSchema.pre("save", function (next: (arg0: undefined) => void) {
  const user = this

  if (this.isModified("password",) || this.isNew) {
    bcrypt.genSalt(10, function (saltError: any, salt: any) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError: any, hash: any) {
          if (hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})


profileSchema.methods.comparePassword = function(password: any, callback: (arg0: null, arg1: undefined) => void) {
  bcrypt.compare(password, this.password, function(error: any, isMatch: any) {
    if (error) {
      return callback(error)
    } else {
      callback(null, isMatch)
    }
  })
}



module.exports = mongoose.model('Profile', profileSchema)
