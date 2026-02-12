import Submitted from './component/reportSubmitted.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home.jsx'

import Problem from './component/ReportProblem.jsx'
import ProblemReported from './component/ViewProblem.jsx'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/problem' element={<Problem/>} />
      <Route path='/problemreported' element={<ProblemReported/>}/>
      <Route path='/submitted' element ={<Submitted/>}/>
    </Routes>
  )
}

export default App
