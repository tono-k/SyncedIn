import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./JobCard.css"

interface JobCardProps {
  id: string
  company: string
  title: string
  location: string
  description: string
  skills: string[]
  applied?: boolean
}

const JobCard = ({ id, company, title, location, description, skills, applied = false }: JobCardProps) => {
  const navigate = useNavigate()
  const [isApplied, setIsApplied] = useState(applied)

  const handleApply = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isApplied) {
      navigate(`/application`, {
        state: { 
          id,
          company,
          title,
          location,
          description, 
          skills 
        }
      });
    }
  }

  const handleCardClick = () => {
    navigate(`/job/${id}`)
  }

  const handleMeetTeamClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click
    navigate(`/team/${id}`)
  }

  return (
    <div className="job-card" onClick={handleCardClick}>
      <div className="job-card-header">
        <h3>{title}</h3>
      </div>
      <div className="job-card-company">{company}</div>
      <div className="job-card-location">{location}</div>
      <p className="job-card-description">{description}</p>
      <div className="job-card-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      <div className="job-card-footer">
        <button className={`apply-btn ${isApplied ? "applied" : ""}`} onClick={handleApply} disabled={isApplied}>
          {isApplied ? "Applied" : "Apply"}
        </button>
        <button className="meet-team-btn" onClick={handleMeetTeamClick}>
          Meet the Hiring Team
        </button>
      </div>
    </div>
  )
}

export default JobCard
