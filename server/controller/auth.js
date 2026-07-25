// server/controller/auth.js
import jwt from "jsonwebtoken";
import User from "../model/user.js";
import bcrypt from "bcryptjs"
import generateJWT from "../util/jwt.js";

const signUp = async(req,res)=>{
    try {
        const isUserExists = await  User.findOne({email});
        if(isUserExists){
           return res.status(409).json({
                success:false,
                error:true,
                message:`User already exists try signIn.`
            })
        }
        const hashedPass = await bcrypt.hashSync(password , 10)
        const newUser = await User.create({
            userName:name,
            email:email,
            password:hashedPass,
            phone:phone
        })
        const accessToken = generateJWT({name , email , password });
       return res.status(201)
        .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 24 * 60 * 60 * 1000 
    })
       .json({
                success:true,
                error:false,
                message: "User registered successfully."
            })
    } catch (error) {
        console.error(`Error in signUp controller: ${error.message}`);
       return res.status(500).json({
                success:false,
                error:true,
                message:`Server Error : ${error.message}`
            })
    }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(422).json({
        success: false,
        error: true,
        message: "Email and password are required."
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "User not found. Please sign up."
      });
    }

    // Compare password
    const isPasswordMatched = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "Invalid email or password."
      });
    }

    // Generate JWT
    const accessToken = generateJWT({
      id: user._id,
      email: user.email,
      name: user.userName
    });

    // Remove password from response
    const userData = user.toObject();
    delete userData.password;

    return res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 24 * 60 * 60 * 1000 // 60 days
      })
      .json({
        success: true,
        error: false,
        message: "Login successful.",
        accessToken,
        user: userData
      });

  } catch (error) {
    console.error("Error in signIn controller:", error);

    return res.status(500).json({
      success: false,
      error: true,
      message: "Internal Server Error"
    });
  }
};

export { signIn ,  signUp };