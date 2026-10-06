import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainComp from './MainComp.jsx'

function App() {

  const baseUrl="https://pqtfnfqiyxqlloczwuvl.supabase.co/rest/v1/users"

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(baseUrl, {
      method: 'GET',
      headers: {
        'apikey': 'sb_publishable_3ohLtThqgHT3Fec-TcRp9g_qIZXtG56'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <Header />
      <MainComp users={users} />
      <Footer />
    </>
  )
}

export default App
