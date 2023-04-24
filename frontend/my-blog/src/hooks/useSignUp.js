// import { useState, useNavigate } from "react";
// import { useAuthContext } from "../hooks/useAuthContext";
// import axios from "axios";
// export const useSignup = () => {
//   const [isLoading, setIsLoading] = useState(null);
//   const [error, setError] = useState(null);
//   const { dispatch } = useAuthContext();
//   const navigate = useNavigate()
//   const signup = async (names, email, password) => {
//     setIsLoading(true);
//     setError(null);
//     const res = await axios.post(
//       `${process.env.REACT_APP_BASE_URL}/api/user/signup`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "Application/json" },
//         body: JSON.stringify({ names, email, password }),
//       }
//     );
//     const json = await res.data;
//     if (!json.ok) {
//       setError(json.error);
//       setIsLoading(false);
//     }
//     if (json.ok) {
//       // save the user to localestorage===>
//       localStorage.setItem("user", JSON.stringify(json));
//       // update the auth context
//       dispatch({ type: "LOGGED_IN", payload: json });
//       setIsLoading(false);
//       setError(null);
//         navigate("/login")
//     }
//   }
//   return { signup, isLoading, error };
// };
