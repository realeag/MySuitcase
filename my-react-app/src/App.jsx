import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Form from './components/formulario/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App container-fluid">
      
        <Navbar />
        <Intro presentation="¡Bienvenidos! Mi nombre es Alan Reale y soy Frontend Developer." proyect="My Suitcase es un portfolio para que puedan ver los proyectos que he realizado." />
        <Form />
        <Footer copyright='© My Suitcase. Todos los derechos reservados 2023'/>

    </div>
  );
}

export default App;
