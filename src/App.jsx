import React from 'react'
import Navbar from './components/NavBar/Navbar';
import Formu from './components/Formulario/Formu';
import TableR from './components/Tablas/TableR';
import Contact from './components/Formulario/Contact';
import Footer from './components/Footer/Footer';
import Imgproto from './components/Imgproto';
import Banner from './components/Banner/Banner';

const App = () => {
  return (

    <div className="App bg-[#F9F6F1] h-full w-full text-white font-sans">
      <Navbar />
      <Formu />
      {/* content-between buscar y comparar items-start */}
      {/* <div className=' grid grid-cols-1 lg:grid-cols-1 grid-row-2'></div> */}
      <TableR />
      <Banner/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App