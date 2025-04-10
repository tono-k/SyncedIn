import { useContext, useEffect, useState } from "react";
import { UserContext, UserContextProps } from "../UserContext";
import { useNavigate } from "react-router-dom";
import "./ResumeFeedback.css";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const ResumeFeedback = () => {
  const { userData } = useContext(UserContext) as UserContextProps;
  const resumeFile = userData.resume;
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (resumeFile === undefined) return;

    if (!resumeFile) {
      navigate("/homepage");
      return;
    }

    const sendResumeToGPT = async () => {
      setLoading(true);
      try {
        const arrayBuffer = await resumeFile.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let extractedText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item: any) => item.str).join(" ");
          extractedText += pageText + "\n";
        }

        console.log(extractedText.slice(0, 500)); // log the first 500 characters

        const response = await fetch("http://localhost:3000/api/resume-feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resumeText: extractedText.slice(0, 12000), // optional trim for token limits
            fileName: resumeFile.name,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setFeedback(result.feedback);
        } else if (result.error && result.error.includes('too busy')) {
          setError("The model is currently too busy. Please try again later.");
        } else {
          setError("Something went wrong while analyzing your resume.");
        }
      } catch (err) {
        console.error("AI feedback error:", err);
        setError("Something went wrong while analyzing your resume.");
      } finally {
        setLoading(false);
      }
    };

    sendResumeToGPT();
  }, [resumeFile, navigate]);

  return (
    <div className="resume-feedback-page">
      <h2>Resume AI Feedback</h2>
      {loading ? (
        <p>Analyzing your resume with AI...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="feedback-box">
          <pre>{feedback}</pre>
        </div>
      )}
    </div>
  );
};

export default ResumeFeedback;
