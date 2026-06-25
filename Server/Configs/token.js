import jwt from "jsonwebtoken"

export const genToken = async (userId) => {//we need userid and jwt_secret to generate a token
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" })//creating token using jwt sign method
        return token
    } catch (error) {
        console.log(error)

    }
}