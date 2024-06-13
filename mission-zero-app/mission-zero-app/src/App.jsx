import './App.css'
import NavBar from './components/NavBar'
import NewsCard from './components/NewsCard'


function App() {
const fetchedData = '../public/data.json'


  return (
    <div>
    <NavBar />
    <NewsCard data={fetchedData} />
    </div>
  )
}

export default App
