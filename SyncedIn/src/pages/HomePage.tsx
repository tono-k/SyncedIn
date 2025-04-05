import { useState, useEffect } from "react"
import ProfileSidebar from "../components/ProfileSidebar.tsx"
import JobCard from "../components/JobCard.tsx"
import "./HomePage.css"
import { useContext } from "react";
import { UserContext } from "../UserContext";

// Mock data for jobs
const mockJobs = [
  {
    id: "1",
    company: "TechCorp",
    title: "Frontend Developer",
    location: "San Francisco, CA (Remote)",
    description:
      "We are looking for a skilled Frontend Developer to join our team and help build amazing user experiences.",
    skills: ["React", "TypeScript", "CSS", "HTML"],
    applied: false,
  },
  {
    id: "2",
    company: "DataSystems",
    title: "Full Stack Engineer",
    location: "New York, NY (Hybrid)",
    description: "Join our engineering team to build scalable web applications using modern technologies.",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    applied: true,
  },
  {
    id: "3",
    company: "InnovateTech",
    title: "Software Engineer",
    location: "Seattle, WA (On-site)",
    description: "Looking for a passionate Software Engineer to help us build the next generation of our platform.",
    skills: ["JavaScript", "Python", "Docker", "Kubernetes"],
    applied: false,
  },
  {
    id: "4",
    company: "CloudNine",
    title: "Frontend Architect",
    location: "Austin, TX (Remote)",
    description: "Help us design and implement the frontend architecture for our growing SaaS platform.",
    skills: ["React", "Redux", "TypeScript", "Design Systems"],
    applied: false,
  },
]

const HomePage = () => {
  const [jobs, setJobs] = useState(mockJobs)
  const [loading, setLoading] = useState(true)
  const { userData } = useContext(UserContext)!;


  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="home-page">
      <div className="home-sidebar">
      <ProfileSidebar user={{
          name: userData.fullName,
          resume: userData.resume
        }} />
      </div>
      <div className="home-content">
        <div className="jobs-header">
          <h2>Job Recommendations</h2>
          <div className="jobs-filter">
            <select defaultValue="relevance">
              <option value="relevance">Most Relevant</option>
              <option value="recent">Most Recent</option>
              <option value="salary">Highest Salary</option>
            </select>
          </div>
        </div>

        <div className="jobs-grid">
          {loading ? (
            <div className="loading-jobs">Loading jobs...</div>
          ) : (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                company={job.company}
                title={job.title}
                location={job.location}
                description={job.description}
                skills={job.skills}
                applied={job.applied}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage

