import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json("User already exists");
        }

        if(!fullname){
            return res.status(404).json("Fullname is required");
        }

        if(!email){
            return res.status(404).json("email is required");
        }


        if(!password){
            return res.status(404).json("password is required");
        }

        const hashPassword = await bcryptjs.hash(password,10)

        const createdUser = new User({
            fullname,
            email,
            password:hashPassword,
        });

        await createdUser.save();
        res.status(201).json({message:"User creared successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        }});
    } catch (error) {   
        console.log("Error:",error.message);
        res.status(500).json({message:"Internal server error"})
    }
}

export const login = async(req,res)=>{
    /* step for check login  */
    //1) check email
    //2) ckeck password
    //3) check in database
    try {
        const {email,password} = req.body;

        if(!email){
            return res.json(400).json({message:"Enter Email"});
        }

        if(!password){
            return res.status(400).json({message:"Enter password"});
        }

        const user =await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User is not present"});
        }

        const isPasswordValid = await bcryptjs.compare(password,user.password)

        if(!isPasswordValid){
            return res.status(401).json({message:"Password is Invalid"});
        }
        ///////////////
        return res.status(200).json({message:"User Login Sucessfully!!",user:{_id:user._id,fullname:user.fullname,email:user.email}})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong when Login"})
    }
}

