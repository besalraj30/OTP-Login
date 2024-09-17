import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import OTPLogin from './components/OTPLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    OTP LOGIN
      <OTPLogin />
    </>
  )
}

export default App
