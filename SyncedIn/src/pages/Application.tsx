import "./Application.css"
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';


const Application = () => {
    const { state } = useLocation();
    //const [jobs, set] = useState(mockJobs)
    const {id} = useParams<{ id: string }>(); 
    const navig = useNavigate();

    //const job = jobs.find((job) => job.id == id);

    const handleRedirect = () => {
        navig("/onlineassessment"); 
    };

    return (
        <div className="app-container">
            <div className="job-details">
                <h1>{state.title}</h1>
                <p><span className="job-desc">Company:</span> {state.company}</p>
                <p><span className="job-desc">Location:</span> {state.location}</p>
                <p><span className="job-desc">Description:</span> {state.description}</p>
                <p><span className="job-desc">Skills:</span> {state.skills.join(", ")}</p>
            </div>

            <div className="github-input">
                
                <input type="url" name="github-link1" className="githublink" id="ghl1" placeholder="GitHub Project #1 Link"/>
                <p></p>
                <input type="url" name="github-link2" className="githublink" id="ghl2" placeholder="GitHub Project #2 Link"/>
            </div>

            <button onClick={handleRedirect} className="assessment-button">
                Proceed to online assessment!
            </button>
        </div>
    )
}

export default Application
