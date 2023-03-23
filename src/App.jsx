import { HashRouter, Routes, Route } from "react-router-dom"
import Landing from "./components/index"
import Dashboard from './components/dashboard/index'

const App = () => {
  return (
    <HashRouter>
        <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path='/' element={<Dashboard />} />
        </Routes>
    </HashRouter>
  )
}

export default App