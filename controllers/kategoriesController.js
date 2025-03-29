import Kategories from "../models/Kategories.js";

export const getKategories = async (request,response)=> {
   const datas = await Kategories.find().limit(7)
   if(datas.length)
      response.json({
         code: 200,
         status: "OK",
         messgaes: "success",
         datas
      })
   else 
      response.json({
         code: 404,
         status: 'NOT_FOUND',
         messages: "No Data Found !"
      })
}
