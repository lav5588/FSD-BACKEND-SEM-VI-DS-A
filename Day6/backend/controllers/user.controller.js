import UserModel from "../models/user.model.js";

export const registerUser = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:'Please fill all the fields'})
        }

        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User already exists with this email'})
        }

        const user =await UserModel.create({
            name,
            email,
            password
        })
        
        if(!user){
            return res.status(400).json({message:'User registration failed'})
        }
        console.log(user)
        res.status(200).json({message:'User registered successfully',user})
    } catch (error) {
        console.error("error in user registration: ",error);
        res.status(500).json({message:'Internal server error'})

    }
}