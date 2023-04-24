import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
function PageHeader() {
    const navigate = useNavigate()
    const {isLoggedIn}=useContext(AuthContext)
    const {Logout}= useContext(AuthContext)
    function handleLogout(){
        Logout()
        navigate("/")
    }
  return (
    <nav className='container flex justify-around items-center border shadow-xl m-auto p-4'>
        <div>
            <Link to={"/"}><h1 className='font-bold text-lg italic'>CozyBlog</h1></Link>
        </div>
        
        {isLoggedIn ?(
           <div>
           <button onClick={handleLogout} className="font-medium">LOG OUT</button>
       </div> 
        ):(
            <div className='flex font-medium justify-between items-center gap-5'>
            <div>
                <Link to="/register"><button>SIGN UP</button></Link>
            </div>
            <div>
                <Link to={"login"}><button>LOG IN</button></Link>
            </div>
        </div>
        )}
        
    </nav>
  )
}

export default PageHeader