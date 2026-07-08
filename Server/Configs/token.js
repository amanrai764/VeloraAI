import jwt from "jsonwebtoken"
//fixing all issues
export const genToken = async (userId) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" })
        return token
    } catch (error) {
        console.log(error)

    }
}