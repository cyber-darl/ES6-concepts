import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from './components/ProductPage/ProductPage'

function App() {

  return (
    <>
 <BrowserRouter>
 <Routes>
<Route path ="/" element = {<ProductPage/>} > {/* App renders path ="/" as the home page*/}
</Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
