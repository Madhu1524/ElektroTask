// Importing mongoose 
import mongoose from "mongoose";

// Creating schema
const Task = mongoose.Schema(
    // Adding the fielleds and their type
    {
        TaskID:{type:Number},
        AssignedBy:{type:Number},
        AssignedTo:{type:Number},
        CommenceDate:{type:String},
        CustomerName: { type: String },
        FinishedDate : {type : String },
        ProjectComments: { type: String },
        ProjectName: { type : String },
        ProjectStatus:{ type:Number},
        TaskName:{type:String},
        TaskPriority:{type:Number},
    }
  );
  
  // Exporting schema
  const Tasks = mongoose.model("task", Task);
  export default Tasks;