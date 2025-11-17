import './App.css'
import AdminLogin from './pages/AdminLogin'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import FeedbackPage from './pages/FeedbackPage'
import Home from './pages/Home'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/admin' element={<Pnf/>} />
      </Routes>

    </>
  )
}

export default App
