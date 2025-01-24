import { BrowserRouter, Route, Routes } from 'react-router'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import { Landing } from './pages/landing/landing'
import { Search } from './pages/search/search'
import { Product } from './pages/product/product'
import "primereact/resources/themes/lara-light-teal/theme.css"

export const App = () => {
  const value = {
    ripple: true
  }

  return (
    <PrimeReactProvider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/search' element={<Search />} />
          <Route path='/product:id' element={<Product />} />
          <Route path='*' element= { <div>tests</div>} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
