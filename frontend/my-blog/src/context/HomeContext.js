import { createContext, useState } from "react";
export const Homecontext = createContext();

export function HomeProvider({children}){
    const [uploads, setUploads]= useState([]);
    
   function SetUpload(data){
    setUploads([...data])
   } 
   function AddUpload(data){
    setUploads([data,...uploads])
   } 
   function Delete(id){
    setUploads(uploads.filter((upload)=>upload._id !== id))
   }
   return(
    <Homecontext.Provider value={{SetUpload,AddUpload,uploads,Delete}}>{children}</Homecontext.Provider>
   )
}