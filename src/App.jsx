import './App.css'
import Details from './component/Details/Details'
import Header from './component/Header/Header'
import Home from './component/Home/Home'


function App() {
  

  return (
    <>
    <Header></Header>
    <div className='flex  mx-auto'>
      
      <Home></Home>
      <Details></Details>
      
      </div>
    </>
  )
}

export default App
