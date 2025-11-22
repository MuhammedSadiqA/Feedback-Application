import './App.css'
import { Routes, Route } from 'react-router-dom'
import FeedbackPage from './pages/FeedbackPage'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import ViewFeedback from './pages/ViewFeedback'
import AdminLogin from './pages/AdminLogin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/view-feedback' element={<ViewFeedback />} />
        <Route path='/give-feedback' element={<FeedbackPage />} />
        <Route path='/*' element={<Pnf />} />

      </Routes>

    </>
  )
}

export default App
