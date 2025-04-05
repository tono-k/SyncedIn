import "./Application.css"
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import {useState} from 'react';

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

const Application = () => {
    const [jobs, set] = useState(mockJobs)
    const {id} = useParams<{ id: string }>(); 
    const navig = useNavigate();

    const job = jobs.find((job) => job.id == id);

    const handleRedirect = () => {
        navig("/onlineassessment"); 
    };


    if (job == undefined){
        return <div>Yeet</div>
    }
    return (
        <div className="app-container">
            <div className="job-details">
                <h1>{job.title}</h1>
                <p><span className="job-desc">Company:</span> {job.company}</p>
                <p><span className="job-desc">Location:</span> {job.location}</p>
                <p><span className="job-desc">Description:</span> {job.description}</p>
                <p><span className="job-desc">Skills:</span> {job.skills.join(", ")}</p>
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
