import { useNavigate } from "react-router-dom"
import "./ResumeCard.css"

interface ResumeCardProps {
  resumePath: string
  hasAiFeedback?: boolean
}

const ResumeCard = ({ resumePath, hasAiFeedback = false }: ResumeCardProps) => {
  const navigate = useNavigate()

  const handleFeedbackClick = () => {
    navigate("/resume-feedback")

  }
  const handleFilterJobs = () => {
    console.log("Showing AI matches")
  }
  

  return (
    <div className="resume-card">
      <div className="resume-header">
        <h3>Resume</h3>
        {hasAiFeedback && <div className="ai-badge">AI</div>}
      </div>
      <div className="resume-preview">
        <img src={resumePath || "/placeholder.svg"} alt="Resume preview" />
      </div>
      <div className="resume-actions">
        <button className="btn-secondary" onClick={handleFeedbackClick}>
          Get AI Feedback
        </button>
      </div>
    </div>
  )
}

export default ResumeCard

