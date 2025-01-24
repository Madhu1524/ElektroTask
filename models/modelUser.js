// Importing mongoose 
import mongoose from "mongoose";

// Creating schema
const User = mongoose.Schema(
    // Adding the fielleds and their type
    {
        userNumber:{type:Number},
        user:{type:String},
        descriction: { type: String },
    }
  );
  
  // Exporting schema
  const users = mongoose.model("User", User);
  export default users;