import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})
// Hash the password before saving it to the database
// userSchema.pre('save', async function (next) {
//     const user = this;
//     if (!user.isModified('password')) return next();

//     try {
//         const salt = await bcrypt.genSalt();
//         user.password = await bcrypt.hash(user.password, salt);
//         next();
//     } catch (error) {
//         return next(error);
//     }
// });

// Compare the given password with the hashed password in the database
// userSchema.methods.comparePassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

const Users = mongoose.model('Users', userSchema);

export default Users;