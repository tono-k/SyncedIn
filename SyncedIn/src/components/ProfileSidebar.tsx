"use client"

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

  const handleFilterJobs = () => {
    // In a real app, this would apply filters
    console.log("Filtering jobs")
  }

  const handleFilterMatches = () => {
    // In a real app, this would show AI matches
    console.log("Showing AI matches")
  }

  return (
    <div className="profile-sidebar">
      <div className="profile-info">
        <div className="profile-avatar">
          <div className="avatar-placeholder"></div>
        </div>
      </div>
      <ResumeCard resumePath={user.resume} hasAiFeedback={true} />
      <div className="filter-actions">
        <button className="btn-secondary filter-btn" onClick={handleFilterJobs}>
          Filter Jobs
        </button>
        <button className="btn-secondary filter-btn" onClick={handleFilterMatches}>
          Filter Matches
        </button>
      </div>
    </div>
  )
}

export default ProfileSidebar

