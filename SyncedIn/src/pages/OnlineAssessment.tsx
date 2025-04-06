import Editor from "@monaco-editor/react";
import './OnlineAssessment.css';

function OnlineAssessment() {
    return (
      <> 
        <div className="assessmentBox">
            <Editor
                height="500px"
                width="1200px"
                defaultLanguage="typescript"
                defaultValue={`/* ONLINE ASSESSMENT \n \nGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. \n- You may assume that each input would have exactly one solution, and you may not use the same element twice. \n- You can return the answer in any order. \n \nexample: https://leetcode.com/problems/two-sum/description/ \n \n*/ \n \nfunction twosum(nums: number[], target: number): number[] {\n  // TODO: code a solution \n  return [];\n}`}
                theme="vs-dark"
                options={{
                    quickSuggestions: false,
                }}
            />
        </div>
        <div className="submitButton"> Submit </div>
      </>
    );
  }
  
export default OnlineAssessment;