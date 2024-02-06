import User from "../models/user.model.js";

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


    } catch (error) {}
}

export const login = (req, res) => {
    res.send('Login user');
}

export const logout = (req, res) => {
    res.send('Logout User');
}

