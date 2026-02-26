import React from 'react'
import Header from './Header'
import Footer from './Footer'

function App() {
  const a="Tushar"
  function nm(str){
    return str
  }
  return (
    <div className='App'>
    <Header/>
        <h1>Hello TJ</h1>
        <h3>{a}</h3>
        <h3>{nm("Jana")}</h3>
        
        <Footer />
        </div>
  )
}

export default App