import { useNavigate } from "react-router-dom"
import { useContext, useRef } from "react"
import { UserContext, UserContextProps } from "../UserContext"
import "./ResumeCard.css"

interface ResumeCardProps {
  resumePath: string
  hasAiFeedback?: boolean
}

const ResumeCard = ({ resumePath, hasAiFeedback = false }: ResumeCardProps) => {
  const navigate = useNavigate()
  const { userData, setUserData } = useContext(UserContext) as UserContextProps
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFeedbackClick = () => {
    navigate("/resume-feedback")
  }
  
  const handleFilterJobs = () => {
    console.log("Showing AI matches")
  }
  
  const handleViewResume = () => {
    // If it's a PDF, we can open it in a new tab
    if (resumePath && resumePath.trim() !== '') {
      window.open(resumePath, '_blank')
    }
  }

  const handleChangeResume = () => {
    // Trigger the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    
    if (files && files.length > 0) {
      const file = files[0]
      
      // Create a URL for preview
      const fileUrl = URL.createObjectURL(file)
      
      // Update the resume URL in context
      setUserData({
        ...userData,
        resume: fileUrl
      })
    }
  }

  return (
    <div className="resume-card">
      <div className="resume-header">
        <h3>Resume</h3>
        {hasAiFeedback && <div className="ai-badge">AI</div>}
      </div>
      <div className="resume-preview" onClick={handleViewResume} style={{ cursor: 'pointer' }}>
        {resumePath ? (
          <embed 
            src={resumePath} 
            type="application/pdf" 
            width="100%" 
            height="100%"
          />
        ) : (
          <img src="/placeholder.svg" alt="Resume not uploaded" />
        )}
      </div>
      <div className="resume-actions">
        <button className="btn-secondary" onClick={handleFeedbackClick}>
          Get AI Feedback
        </button>
        {resumePath && (
          <button className="btn-primary view-resume" onClick={handleViewResume} style={{ marginTop: '8px' }}>
            View Resume
          </button>
        )}
        <button className="btn-outline change-resume" onClick={handleChangeResume} style={{ marginTop: '12px', fontSize: '15px' }}>
          Change Resume
        </button>
        {/* Hidden file input */}
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
        />
      </div>
    </div>
  )
}

export default ResumeCard