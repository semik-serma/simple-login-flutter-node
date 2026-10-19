import bcrypt from 'bcrypt'

export const hashpass=async(password)=>{
    try {
        return await bcrypt.hash(password,10)
    } catch (error) {
        console.log("Error while trying to hash password")
    }
}