// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { useAuth } from './hooks/useAuth'

function App() {
 const {user} = useAuth();
 console.log(user);
 
  return (<h1 className="text-3xl font-bold text-red-600">POS</h1>)
}

export default App
