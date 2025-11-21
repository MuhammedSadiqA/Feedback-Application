import commonAPI from "./commonApi";
import ServerURL from "./ServerURL";

// add
export const addFeedbackAPI=async(feedback)=>{
   return await commonAPI(`${ServerURL}/feedbacks`,"POST",feedback)
}
// get 
export const getAllFeedbackAPI= async()=>{
   return await commonAPI(`${ServerURL}/feedbacks`,"GET",null)
}
// Delete
export const deleteFeedbackAPI=async(id)=>{
   return await commonAPI(`${ServerURL}/feedbacks/${id}`,"DELETE",null)
   console.log("API CALLED:", `${ServerURL}/feedbacks/${id}`);
}
// update
export const updateFeedbackAPI = async (id, data) => {
  return await commonAPI(`${ServerURL}/feedbacks/${id}`, "PUT", data);
};

