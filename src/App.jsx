import './App.css'
import { Routes, Route } from 'react-router-dom'
import FeedbackPage from './pages/FeedbackPage'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import ViewFeedback from './pages/ViewFeedback'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/give-feedback' element={<FeedbackPage />} />
        <Route path='/admin' element={<Pnf/>} />
        <Route path='/view-feedback' element={<ViewFeedback/>} />
      </Routes>

    </>
  )
}

export default App
