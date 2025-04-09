import "./Application.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, ChangeEvent } from "react";

const Application = () => {
  const { state } = useLocation();
  //const [jobs, set] = useState(mockJobs)
  const { id } = useParams<{ id: string }>();
  const navig = useNavigate();

  //const job = jobs.find((job) => job.id == id);

  const handleRedirect = () => {
    navig("/onlineassessment");
  };

  const [fileName, setFileName] = useState("");
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  // Handle checkbox change with event type
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div className="app-container">
      <div className="left-container">
        <div className="job-details">
          <h1>{state.title} Application</h1>
          <p>
            <span className="job-desc">Company:</span> {state.company}
          </p>
          <p>
            <span className="job-desc">Location:</span> {state.location}
          </p>
          <p>
            <span className="job-desc">Description:</span> {state.description}
          </p>
          <p>
            <span className="job-desc">Skills:</span> {state.skills.join(", ")}
          </p>
        </div>
        <div className="github-input">
          <input type="url" name="github-link1" className="githublink" id="ghl1" placeholder="GitHub Project #1 Link"/>
          <p></p>
          <input type="url" name="github-link2" className="githublink" id="ghl2" placeholder="GitHub Project #2 Link"/>
        </div>
        
        <div className="questions">
          <div className="question">
            <label htmlFor="worked-before">Have you worked at {state.company} before? </label>
            <select id="worked-before" name="worked-before">
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="question">
          <label htmlFor="referral">Were you referred by anyone at {state.company}? </label>
            <select id="referral" name="referral">
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="question">
            <label htmlFor="remote-work">Are you willing to work remotely, if the position allows for remote work?</label>
            <select id="remote-work" name="remote-work">
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Maybe</option>
            </select>
          </div>

        </div>

      </div>

      <div className="right-container">
        <div className="doc-box">
          <h2>Upload Your Cover Letter</h2>
          <p>Accepted formats: .pdf .docx .txt</p>
          <input className="file-input" type="file" id="document-upload" onChange={handleFileChange} accept=".pdf,.docx,.txt"/>
          {fileName && (
            <div className="file-info">
              <strong>Uploaded Document:</strong> {fileName}
            </div>
          )}
        </div>
        <div className="terms">
            <input type="checkbox" id="terms" required checked={termsAccepted} onChange={handleCheckboxChange}/>
            <label htmlFor="terms">
                I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer"><span className="terms-style">terms and conditions</span></a>
            </label>
        </div>
        <div className="OA-button">
            

          <button onClick={handleRedirect} className="assessment-button" disabled={!termsAccepted}>
            Proceed to online assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
