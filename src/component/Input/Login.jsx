import { useState } from 'react';
import './Login.css';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        if (username.trim() === '') {
          setShowUsernameError(true);
        } else {
            setShowUsernameError(false)
        }
        if (password.trim() === '') {
          setShowPasswordError(true);
        } else {
            setShowPasswordError(false)
        }
      
      };
    return (
        <div className="container">
            <input 
                onChange={handleUsernameChange} 
                type="login" 
                placeholder="Login..."
                className={showUsernameError ? 'red' : 'green'}
            />
            {showUsernameError ? 'please complete...' : ''} 
            <input 
                onChange={handlePasswordChange} 
                type="password" 
                placeholder="Password..."
                className={showPasswordError ? 'red' : 'green'}
            />
            {showPasswordError ? 'please complete...' : ''} 
             
            <button onClick={handleLogin}>Submit</button>
        </div>

    )
}

export default Login;