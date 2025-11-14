import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRouter from "./router/index.jsx";

function App() {

  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
