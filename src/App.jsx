import { useState } from 'react'
import './App.css'

import { retrieveConfigDetails } from './requests/auth'

function App() {
  // const [count, setCount] = useState(0)
  retrieveConfigDetails();

  return (
    <>
      <div className='flex flex-col'>
        <span className="text-3xl">Request result</span>
      </div>
    </>
  )
}

export default App
