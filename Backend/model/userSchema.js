import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  displayName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

// const UserSchema = new mongoose.Schema(
//   {
//     googleId: {
//       type: String,
//       unique: true,
//       sparse: true,
//     },
//     displayName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: function() {
//         return !this.googleId;
//       },
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: function() {
//         return !this.googleId;
//       },
//     },
//     image: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// const userSchema = new mongoose.Schema(
//   {
//     googleId: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     displayName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     image: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

const Userdb = mongoose.model("users", UserSchema);

export {Userdb as User}