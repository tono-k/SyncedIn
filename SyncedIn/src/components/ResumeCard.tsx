import { useNavigate } from "react-router-dom"
import { useContext, useRef } from "react"
import { UserContext, UserContextProps } from "../UserContext"
import "./ResumeCard.css"

const ResumeCard = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useContext(UserContext) as UserContextProps
  const fileInputRef = useRef<HTMLInputElement>(null)
  const resumeFile = userData.resume

  const handleFeedbackClick = () => {
    navigate("/resume-feedback")
  }

  const handleViewResume = () => {
    if (resumeFile) {
      const fileUrl = URL.createObjectURL(resumeFile)
      window.open(fileUrl, '_blank')
      setTimeout(() => URL.revokeObjectURL(fileUrl), 1000)
    }
  }

  const handleChangeResume = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setUserData({
        ...userData,
        resume: file
      })
    }
  }

  return (
    <div className="resume-card">
      <div className="resume-header">
        <h3>Resume</h3>
        {resumeFile && <div className="ai-badge">AI</div>}
      </div>

      <div className="resume-preview" onClick={handleViewResume} style={{ cursor: 'pointer' }}>
        {resumeFile ? (
          resumeFile.type === "application/pdf" ? (
            <embed
              src={URL.createObjectURL(resumeFile)}
              type="application/pdf"
              className="resume-preview-embed"
            />
          ) : (
            <div className="resume-preview-thumbnail">
              <p>📄 {resumeFile.name}</p>
              <p>Preview not supported. Click to open.</p>
            </div>
          )
        ) : (
          <img src="/placeholder.svg" alt="Resume not uploaded" />
        )}
      </div>


      <div className="resume-actions">
        <button className="btn-secondary" onClick={handleFeedbackClick}>
          Get AI Feedback
        </button>

        {resumeFile && (
          <button
            className="btn-secondary view-resume"
            onClick={handleViewResume}
            style={{ marginTop: '8px' }}
          >
            View Resume
          </button>
        )}


        <button
          className="btn-outline change-resume"
          onClick={handleChangeResume}
          style={{ marginTop: '12px', fontSize: '15px' }}
        >
          Change Resume
        </button>

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
