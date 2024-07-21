import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

// const UserSchemaG = new mongoose.Schema({
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
//   },{ timestamps: true });


const UserModel = mongoose.model("User",UserSchema)
// const UserModelG = mongoose.model("users", UserSchemaG);


export {UserModel as User}
// export {UserModelG as userdb}
