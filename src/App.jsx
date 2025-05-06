import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
