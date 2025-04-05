import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {
  const location = useLocation()
  return (
    <nav className="navbar">
         <div className="navbar-container">
         <Link to="/" className="navbar-logo">
          SyncedIn
        </Link>
      <Link to="/" className={`nav-link ${location.pathname === "/homepage" ? "active" : ""}`}>
        Home
      </Link>
      
      </div>
    </nav>
  )


}