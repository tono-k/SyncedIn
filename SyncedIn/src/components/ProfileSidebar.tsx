import { useNavigate } from "react-router-dom"
import ResumeCard from "./ResumeCard.tsx"
import "./ProfileSidebar.css"

interface ProfileSidebarProps {
  user: {
    name: string
    resume: string
  }
}

const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
  const navigate = useNavigate()

  return (
    <div className="profile-sidebar">
      <div className="profile-info">
        <h2 className="profile-name">{user.name}</h2>
        <div className="profile-avatar">
          <div className="avatar-placeholder"></div>
        </div>
      </div>
      <ResumeCard resumePath={user.resume} hasAiFeedback={true} />
    </div>
  )
}

export default ProfileSidebar