import './App.css';
import'./components/navbar/Navbar.css';
import './components/mylinks/MyLinks.css';
import './components/footer/footer.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Form from './components/formulario/Form';
import Footer from './components/footer/Footer';
import MyLinks from './components/mylinks/MyLinks';


const App = () => {
  return (
    <div className='container-fluid backColor'>
      <BrowserRouter>

        <Navbar />
        <Header presentation="¡Bienvenidos! Mi nombre es Alan Reale y soy Frontend Developer." proyect="My Suitcase es un portfolio para que puedan ver los proyectos que he realizado." />

        <Routes>
          <Route path='/contactame' element={<Form />} />
          <Route path='/mylinks' element={<MyLinks/>} />
        </Routes>

        <Footer copyright='© My Suitcase. Todos los derechos reservados 2023' />

      </BrowserRouter >
    </div>
  );
}

export default App;
