import jwt from "jsonwebtoken";

const generateJWT = async(payload)=>{
    try {
        const {name , email , userID } = payload;

    if (!name || !email || !userID) {
        console.error(`all fields are required in generateJWT`);
        return;
    }
    const accessToken = jwt.sign(payload , process.env.JWTSECRET , {expiresIn:'60d'});
    return accessToken;
    } catch (error) {
        console.error(`server error in generateJWT : ${error.message}`);
    }
    
}

export default generateJWT;