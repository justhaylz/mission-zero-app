import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import NewsCard from './components/NewsCard'

function App() {
  const [category, setCategory] = useState ("general")


  return (
    <div>
    <NavBar setCategory={setCategory}/>
    <NewsCard category={category} />
    </div>
  )
}

export default App
