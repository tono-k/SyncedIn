import { useNavigate } from "react-router-dom"
import ResumeCard from "./ResumeCard.tsx"
import "./ProfileSidebar.css"

interface ProfileSidebarProps {
  user: {
    name: string
    title?: string
    location?: string
    connections?: number
    resume: string
    profileImage?: string
  }
}

const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
  const navigate = useNavigate()

  // Get user initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
  }

  return (
    <div className="profile-sidebar">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-cover"></div>
          <div className="profile-avatar">
            {user.profileImage ? (
              <img src={user.profileImage} alt={`${user.name}'s profile`} />
            ) : (
              <div className="avatar-placeholder">
                {getInitials(user.name)}
              </div>
            )}
          </div>
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">{user.name}</h2>
          {user.title && <p className="profile-title">{user.title}</p>}
          
          {user.location && (
            <div className="profile-meta">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                <circle cx="12" cy="9" r="2.5"></circle>
              </svg>
              <span>{user.location}</span>
            </div>
          )}
          
          {user.connections !== undefined && (
            <div className="profile-connections">
              <span className="connection-count">{user.connections}</span> connections
            </div>
          )}
        </div>
      </div>
      
      <ResumeCard resumePath={user.resume} hasAiFeedback={true} />
    </div>
  )
}

export default ProfileSidebar