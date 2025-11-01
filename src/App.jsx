import { useState } from 'react'
import Header from "./components/Header"
import AppRouter from "./router/index.jsx";

function App() {

  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
