
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Footer } from "./components/footer"
import { Avaliacoes } from "./components/avaliacoes"
import { ConclusaoAvaliacoes } from "./components/conclusaoAvaliacoes"
import { Conclusao } from "./components/conclusao"
import { Desenvolvimento } from "./components/desenvolvimento"
import { Introducao } from "./components/introducao"
import { Funcionalidades } from "./components/funcionalidades"
import Menu from './components/menu/Menu'; // Verifique o caminho correto
import * as styles from './components/menu/styles';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');

  const handleMenuItemClick = (section: string) => {
    setCurrentSection(section);
    scrollToSection(section);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div style={styles.menuStyles}>
        <span style={styles.menuItemStyles} onClick={() => handleMenuItemClick('home')}>Home</span>
        <span style={styles.menuItemStyles} onClick={() => handleMenuItemClick('introducao')}>Introdução</span>
        <span style={styles.menuItemStyles} onClick={() => handleMenuItemClick('desenvolvimento')}>Desenvolvimento</span>
        <span style={styles.menuItemStyles} onClick={() => handleMenuItemClick('funcionalidades')}>Funcionalidades</span>
        <span style={styles.menuItemStyles} onClick={() => handleMenuItemClick('conclusao')}>Conclusão</span>
        <span style={styles.menuItemStyles} onClick={() => handleMenuItemClick('conclusaoAvaliacoes')}>Conclusão Avaliações</span>
      </div>
      <div id="home">
        {currentSection === 'home' && <div></div>}
      </div>
      <div id="introducao">
        {currentSection === 'introducao' && <Introducao />}
      </div>
      <div id="desenvolvimento">
        {currentSection === 'desenvolvimento' && <Desenvolvimento />}
      </div>
      <div id="funcionalidades">
        {currentSection === 'funcionalidades' && <Funcionalidades />}
      </div>
      <div id="conclusao">
        {currentSection === 'conclusao' && <Conclusao />}
      </div>
      <div id="conclusaoAvaliacoes">
        {currentSection === 'conclusaoAvaliacoes' && <ConclusaoAvaliacoes />}
      </div>
      <>
        <Introducao />
        <Desenvolvimento />
        <Funcionalidades />
        <Avaliacoes />
        <ConclusaoAvaliacoes />
        <Conclusao />
        <Footer />
      </>
    </div>
  );
};

// Renderize o componente App no ponto de entrada do seu aplicativo
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
