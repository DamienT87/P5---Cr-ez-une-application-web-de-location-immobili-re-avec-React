import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRouter from "./router/index.jsx";
import "./styles/main.scss";

function App() {

  return (
    <div className="site">
      <Header />

      <div className="site__content">
        <AppRouter />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
