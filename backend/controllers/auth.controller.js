import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Password don not match"});// validation
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "Username already exist"});// validation
        }

        // HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //https://avatar-placeholder.iran.liara.run
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender, 
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            // Generate JWT Token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
    
        } else {
            return res.status(400).json({error: "Invalid user data received"});
        }

    } catch (error) {
        console.log('Error in signup', error.message);
        return res.status(500).json({error: "Internal Server Error"});// validation
    }
}

export const login = (req, res) => {
    res.send('Login user');
}

export const logout = (req, res) => {
    res.send('Logout User');
}

