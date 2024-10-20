import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Instrumentos from './pages/Instrumentos';
import Endereco from './pages/Endereco';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import Styled from '../src/components/Header.module.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename='/loja-violao'>
      <Header className={Styled.header} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/instrumentos" element={<Instrumentos />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;