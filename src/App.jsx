import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainComp from './MainComp.jsx'

function App() {

  const baseUrl="https://pqtfnfqiyxqlloczwuvl.supabase.co/rest/v1/users"

  return (
    <>
      <Header />
      <MainComp />
      <Footer />
    </>
  )
}

export default App
