import Submitted from './component/reportSubmitted.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home.jsx'
import Problem from './component/ReportProblem.jsx'
import ProblemReported from './component/ViewProblem.jsx'
import Navbar from './component/Navbar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/problem' element={<Problem />} />
          <Route path='/problemreported' element={<ProblemReported />} />
          <Route path='/submitted' element={<Submitted />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
