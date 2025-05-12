import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const username=localStorage.getItem('username');
    const navigate=useNavigate();
    const handleLogOut=()=>{
        localStorage.clear();
        navigate('/')
    }
    useEffect(()=>{
        let timeout;
        const resetTimer=()=>{
            clearTimeout(timeout);
            timeout=setTimeout(()=>{
                alert('You have been logged out due to inactivity.')
                handleLogOut();
            },5*60*1000);
        };
        const events=['keydown','keypress','load','click','scroll','mousemove','mousedown'];
        events.forEach((event)=>window.addEventListener(event,resetTimer));
        resetTimer();
        return()=>{
            clearTimeout(timeout);
            events.forEach((event)=>window.removeEventListener(event,resetTimer));
        };
    },[])
  return (
    <div>
      <h1>Welcome, {username}</h1>
      <p>This is the Home page</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Home;
