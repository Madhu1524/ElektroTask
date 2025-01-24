import users from "../models/modelUser.js";

export const createUser = async (req,res) => {
    const {user,descriction} = req.body;
    const userNumber=Math.floor((Math.random() * 1000) + 0)
    const posted = await users.create({userNumber,user,descriction});
        if(posted){
            res.status(201).json({mes:"created",posted})
        }else{
            res.status(500).json({mes:"not created"})
        }

}