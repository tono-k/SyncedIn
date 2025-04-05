"use client"

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
      navigate(`/application/${id}`)
    }
  }

  const handleCardClick = () => {
    navigate(`/job/${id}`)
  }

  return (
    <div className="job-card" onClick={handleCardClick}>
      <div className="job-card-header">
        <h3>{title}</h3>
        <div className={`job-status ${isApplied ? "applied" : ""}`}>{isApplied ? "Applied" : ""}</div>
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
      </div>
    </div>
  )
}

export default JobCard

