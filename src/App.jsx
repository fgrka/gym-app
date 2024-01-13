import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from "./components/UI/Layout"
import Navbar from "./components/UI/Navbar"
import Exercises from './pages/Exercises'
import Workout from './pages/Workout'


function App() {
 
  return (
    <> 
    <Navbar />
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercises" element={<Exercises/>} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </Layout>

    </>
  )
}

export default App
