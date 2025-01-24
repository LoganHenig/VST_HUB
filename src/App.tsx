import { BrowserRouter, Route, Routes } from 'react-router'
import { PrimeReactProvider } from 'primereact/api';

import { Landing } from './pages/landing/landing'
import { Search } from './pages/search/search'
import { Product } from './pages/product/product'
import "primereact/resources/themes/lara-light-teal/theme.css"
import { NotFound } from './pages/notFound/notFound';

export const App = () => {
  const config = {
    ripple: true
  }

  return (
    <PrimeReactProvider value={config}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/search' element={<Search />} />
          <Route path='/product:id' element={<Product />} />
          <Route path='*' element= {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
