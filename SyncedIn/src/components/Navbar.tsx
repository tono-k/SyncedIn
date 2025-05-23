import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

function Navbar (){
  const location = useLocation()
  const isSignup = location.pathname === "/";

  return (
    <div className="navbar">
      <div className="navbar-container"> 
        {/* only navigate to homescreen if you're not in the signup page*/}
        {!isSignup ?  
          (<Link to="/homepage"> <div> SyncedIn </div> </Link>) 
        :
          (<div style={{ color: "white" }}>SyncedIn</div>)
        }
      </div>
    </div>
  )
}

export default Navbar;