import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('username',username);
        localStorage.setItem('password',password)
        navigate('/home');
    }
  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:'1rem'}}>
            <label>Username:</label>
            <input 
                type="text"
                minLength='5'
                maxLength='15'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
            />
         </div>
         <div style={{marginBottom:'1rem'}}>
            <label>Password:</label>
            <input 
                type="password"
                minLength='4'
                maxLength='15'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
            />
         </div>
         <div>
            <button type="submit">Login</button>
         </div>
      </form>
    </div>
  )
}

export default Login
