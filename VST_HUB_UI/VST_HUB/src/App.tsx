import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Chips } from 'primereact/chips';
import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


function App() {
  const [count, setCount] = useState(0)

  return (
    <PrimeReactProvider>
      <div>TEST</div>
      
      
    </PrimeReactProvider>
  )
}

export default App
