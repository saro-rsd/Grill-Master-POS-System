// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import "./App.css";
import { useAuth } from "./hooks/useAuth";
import AppRoutes from "./routers/AppRoutes";

export default function App() {
  return <AppRoutes />;
}
