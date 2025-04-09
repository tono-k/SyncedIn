import { useState, ChangeEvent } from "react";
import Editor from "@monaco-editor/react";
import './OnlineAssessment.css';
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext, UserContextProps } from "../UserContext";

// Define job interface
interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  description: string;
  skills: string[];
}

// Define location state interface
interface LocationState {
  id: string;
  company: string;
  title: string;
  location: string;
  description: string;
  skills: string[];
}

function OnlineAssessment() {
  const { addJobToUser } = useContext(UserContext) as UserContextProps;
  const navigate = useNavigate();
  
  // Type assertion for location.state
  const location = useLocation();
  const state = location.state as LocationState;
  
  const [code, setCode] = useState<string>(`/* ONLINE ASSESSMENT \n \nGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. \n- You may assume that each input would have exactly one solution, and you may not use the same element twice. \n- You can return the answer in any order. \n \nexample: https://leetcode.com/problems/two-sum/description/ \n \n*/ \n \nfunction twosum(nums: number[], target: number): number[] {\n  // TODO: code a solution \n  return [];\n}`);
  
  const [language, setLanguage] = useState<string>("typescript");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleEditorChange = (value: string | undefined): void => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (): void => {
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Create applied job object
      const appliedJob: Job = {
        id: state.id,
        company: state.company,
        title: state.title,
        location: state.location,
        description: state.description,
        skills: state.skills,
      };
      
      // Add job to user context
      addJobToUser(appliedJob);
      
      // Show success message
      alert("Application successfully submitted");
      
      // Navigate to homepage
      navigate("/homepage");
    }, 1500);
  };

  return (
    <div className="assessment-container">
      <div className="assessment-header">
        <div className="problem-title">
          <h1>Two Sum</h1>
          <div className="problem-difficulty easy">Easy</div>
        </div>
        <div className="language-selector">
          <label htmlFor="language-select">Language:</label>
          <select 
            id="language-select" 
            value={language} 
            onChange={handleLanguageChange}
          >
            <option value="typescript">TypeScript</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>
      </div>

      <div className="problem-description">
        <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
        <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
        <p>You can return the answer in any order.</p>
        
        <div className="example-container">
          <div className="example">
            <h3>Example 1:</h3>
            <pre>
              <strong>Input:</strong> nums = [2,7,11,15], target = 9
              <strong>Output:</strong> [0,1]
              <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
            </pre>
          </div>
          
          <div className="example">
            <h3>Example 2:</h3>
            <pre>
              <strong>Input:</strong> nums = [3,2,4], target = 6
              <strong>Output:</strong> [1,2]
            </pre>
          </div>
        </div>
      </div>

      <div className="editor-container">
        <div className="editor-header">
          <span>Solution</span>
          <button 
            className="reset-btn" 
            onClick={() => setCode(`/* ONLINE ASSESSMENT \n \nGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. \n- You may assume that each input would have exactly one solution, and you may not use the same element twice. \n- You can return the answer in any order. \n \nexample: https://leetcode.com/problems/two-sum/description/ \n \n*/ \n \nfunction twosum(nums: number[], target: number): number[] {\n  // TODO: code a solution \n  return [];\n}`)}
          >
            Reset
          </button>
        </div>
        <Editor
          height="400px"
          width="100%"
          language={language}
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            lineNumbers: "on",
            renderLineHighlight: "all",
            quickSuggestions: true,
            folding: true,
            automaticLayout: true,
          }}
        />
      </div>

      <div className="assessment-footer">
        <div className="assessment-actions">
          <button 
            className="run-btn"
            onClick={() => console.log("Running code...")}
          >
            Run Code
          </button>
          <button 
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Solution'}
          </button>
        </div>
      </div>
    </div>
  );
}
  
export default OnlineAssessment;