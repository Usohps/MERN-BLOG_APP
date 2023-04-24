import { createContext,useState} from "react";

export const AuthContext = createContext()
export function AuthProvider({children}){
    const [user,setUser]= useState(localStorage.getItem("user"))
    const isLoggedIn = Boolean(user);
    function Login(newUser) {
        setUser(newUser);
        localStorage.setItem('user', newUser);
      }
      function Logout(){
        setUser("")
        localStorage.removeItem("user")
      }
      return(
        <AuthContext.Provider value={{Login,isLoggedIn,Logout}}>{children}</AuthContext.Provider>
      )
}