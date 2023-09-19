
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'


function App() {
  
  return (
    <>
    <Header></Header>
    <div className='w-[1440px] mx-auto flex justify-center gap-10'>
      
      <Home ></Home>
      
      
      </div>
    </>
  )
}

export default App
