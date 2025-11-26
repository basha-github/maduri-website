
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Others from './Others'
import Header from './Header'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/hm" element ={<Home/>}/>
        <Route path="/prd" element ={<Product/>}/>
        <Route path="/any" element ={<Others/>}/>
      </Routes>
      </BrowserRouter>



      
    </div>
  )
}
