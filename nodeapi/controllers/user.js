import { user } from "../models/user.js";
import bcrypt from 'bcrypt';
import { sendCookie } from "../utils/features.js";

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    const existingUser = await user.findOne({ email }).select("+password");

    if (!existingUser)
        return res.status(404).json({
          success: false,
          message: "Invalid Email or Password.",
        });
    
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch)
        return res.status(404).json({
          success: false,
          message: "Invalid Email or Password.",
        });

    sendCookie(existingUser, res, `Welcome back, ${existingUser.name}`, 200);

};

export const register = async (req, res) => {
    const { name, email, password } = req.body;
  
    let existingUser = await user.findOne({ email });
  
    if (existingUser)
      return res.status(404).json({
        success: false,
        message: "The email already exists.",
      });
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    existingUser = await user.create({ name, email, password: hashedPassword });
  
    sendCookie(existingUser,res,"User created successfully",201);
  };

export const getMyProfile = (req, res) => {
   res.status(200).json({
        success:true,
        existingUser:req.existingUser,
    });
};

export const logout = (req, res) => {
    res
        .status(200)
        .cookie("token", "",{expires: new Date(Date.now())})
        .json({
            success : true,
            existingUser : req.existingUser,
        });
};
