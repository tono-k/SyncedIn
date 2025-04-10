import { useParams } from "react-router-dom";
import { mockJobs } from "../assets/mockData";
import "./JobTeamPage.css";

const JobTeamPage = () => {
  const { jobId } = useParams();
  const job = mockJobs.find(job => job.id === jobId);

  if (!job) return <h2>Job not found</h2>;

  return (
    <div className="team-page">
      <h2 style={{ color: "#977d58" }}>Hiring Team for {job.title} @ {job.company}</h2>
      <div className="team-list">
        {job.hiringTeam.map((member, index) => {
          const initials = member.name.split(" ").map(n => n[0]).join("");
          return (
            <div key={index} className="team-card">
              <div className="avatar">{initials}</div>
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className="team-card-actions">
                <a href={`mailto:${member.email}`}>Message</a>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default JobTeamPage;
