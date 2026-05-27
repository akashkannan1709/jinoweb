import jwt from "jsonwebtoken";

export function generateUserToken(user) {
    return jwt.sign({user}, process.env.JWT_SECRET,{
         expiresIn: "1d"
    })
}

export const generateOwnerToken = (owner) => {
    const { role, _id } = owner;
    return jwt.sign({ id: _id.toString(), role }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}
