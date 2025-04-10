import { useParams } from "react-router-dom";
import { useContext } from "react";
import { mockJobs } from "../assets/mockData";
import "./JobTeamPage.css";
import { ThemeContext } from "../ThemeContext";

const JobTeamPage = () => {
  const { jobId } = useParams();
  const job = mockJobs.find(job => job.id === jobId);
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!job) return <h2>Job not found</h2>;

  return (
    <div className={`team-page ${theme}`}>
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h2 className="team-heading">
        Hiring Team for {job.title} @ {job.company}
      </h2>

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
          );
        })}
      </div>
    </div>
  );
};

export default JobTeamPage;
