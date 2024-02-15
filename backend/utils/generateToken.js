import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId },  process.env.JWT_SECRET, {
		expiresIn: '15d'
	});

	res.cookie('jwt', token, {
		maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
		httpOnly: true, // Prevent XSS attacks cross site scripting attacks,
		sameSite: 'strict', // Prevent CSRF attacks cross sute request forgery attacks
		secure: process.env.NODE_ENV !== "development", // Enable HTTPS in production
	});
}

export default generateTokenAndSetCookie;