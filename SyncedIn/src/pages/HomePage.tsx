import { useState, useEffect } from "react"
import ProfileSidebar from "../components/ProfileSidebar.tsx"
import JobCard from "../components/JobCard.tsx"
import "./HomePage.css"
import { useContext } from "react";
import { UserContext } from "../UserContext";

// Mock data for jobs
import { mockJobs } from "../assets/mockData.tsx";

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
              <option value="location">Filter Based On Resume</option>
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
                applied={userData.AppliedJobs.some((appliedJob) => appliedJob.id === job.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage

