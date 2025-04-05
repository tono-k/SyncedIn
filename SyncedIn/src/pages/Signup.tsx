import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext, UserContextProps} from '../UserContext'; 
import Layout from './Layout';
import './Signup.css';

function Signup() {
  const {setUserData} = useContext(UserContext) as UserContextProps; 
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [resume, setResume] = useState('');

  const allInterests = [
    "Java", "C++", "C#", "Frontend", "UML Designer",
    "JavaScript", "MERN", "Python", "ML", "Backend", "Database" // should add/remove more...
  ];

  const changeInterests = (interest: string) => {
    setInterests((prevListOfInterests) => {
      if (prevListOfInterests.includes(interest)) 
        return prevListOfInterests.filter((i) => i !== interest)
      else 
        return prevListOfInterests.concat(interest);     
    });
  };

  const CompleteSignUp = () => {
    if (!fullName || !email || interests.length == 0 || !isChecked) {
      alert('Please fill out all the information before signing up');
    }
    else {
      setUserData({email, fullName,resume, interests});
      navigate('/homepage');
    }
  };

  return (
    <>
      <Layout/>
      
      <div className="main">
        <div className="formBox">
          <div className="formTitle"> SyncedIn Inc. </div>

          <label> Full Name </label>
          <input
            type="text"
            className="inputBox"
            value={fullName}
            onChange={(name) => setFullName(name.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            className="inputBox"
            value={email}
            onChange={(em) => setEmail(em.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            className="inputBox"
          />

          <label> Resume</label>
          <input
            type="file"
            className="inputBox"
            value ={resume}
            onChange={(res) => setResume(res.target.value)}
            ></input>

          <label> Interests </label>
          <div className="interestsBody">
            {allInterests.map((interest) => (
              <div key={interest}>
                <input
                  type="checkbox"
                  checked={interests.includes(interest)}
                  onChange={() => changeInterests(interest)}
                />
                {interest}
              </div>
            ))}
          </div>

          <div className="checkboxBody">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div> I have read and agreed to the Privacy Policy </div>
          </div>

          <button className="signupButton" onClick={CompleteSignUp}>
            <div> Sign up </div>
          </button>

        </div>
      </div>

    </>
  );
}

export default Signup;