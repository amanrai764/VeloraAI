//controller like working fan and route like"/" is button of fan 
import { genToken } from "../Configs/token.js"
import User from "../Models/user.model.js"



export const googleAuth = async (req,res) => {//async arrow googleAuth function for authentiction
    try {
        const {name , email} = req.body
        if(!name || !email) {//agar name ya email kuchh na mila this is frontend error //frontend error-400-500,server error:500-600,status ok:200-300
            return res.status(400).json({message:"Name and Email are required"})
        }
        let user = await User.findOne({email})//agar name and email mil gaya hai no need to signup again
        if(!user){
            user = await User.create({
                name , email
            })
        }
        const token = await genToken(user._id)//if user find than we need a token and store into cookies and we need user_id to generate token
        res.cookie("token" , token , {
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge: 7 * 24 * 60 * 60 * 1000//means  agle 7 din tak login karne ki jaroorat nahi hai ab 1000 for ms
        } )

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({message:`Google auth error ${error}`})
    }
}

export const logOut = async (req,res) => {
    try {
        await res.clearCookie("token" , {//at logout clear the cookie 
            httpOnly:true,
            secure:false,
            sameSite:"strict"
        })
         return res.status(200).json({message:"LogOut Sucessfully"})
    } catch (error) {
         return res.status(500).json({message:`LogOut Failed ${error}`})
    }
}