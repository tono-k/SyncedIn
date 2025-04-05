import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
  const location = useLocation()
  return (
    <nav className="navbar">
         <div className="navbar-container">
         <Link to="/homepage">
          SyncedIn
        </Link>
      <Link to="/homepage" className={`nav-link ${location.pathname === "/homepage" ? "active" : ""}`}>
        Home
      </Link>
      
      </div>
    </nav>
  )


}