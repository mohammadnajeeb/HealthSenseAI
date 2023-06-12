import { user } from "../models/user.js";
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) => {

    // const id="myid";

    const {token} = req.cookies;

    if(!token)
        return res.status(404).json({
            success: false,
            message: "Login First.",
        });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.existingUser = await user.findById(decoded._id);
    next();

};