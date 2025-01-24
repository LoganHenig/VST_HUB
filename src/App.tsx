import { BrowserRouter, Route, Routes } from 'react-router'

import { Landing } from './pages/landing/landing'
import { Search } from './pages/search/search'
import { Product } from './pages/product/product'

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/product:id' element={<Product />} />

        <Route path='*' element= { <div>tests</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
