import React from 'react';
import './App.css';
import MyPhoto from './assets/perfil-blue1.png';
import JSLogo from './assets/JS-logo.png';
import TSLogo from './assets/TS-logo.png';
import ReactLogo from './assets/react-logo.png';

function App() {
  return (
    <div className="App">
      <h1 className='my-name my-name-fadeIn'>Thiago Vaz</h1>
      <h1 className='my-name my-name-fadeOut'>Thiago Vaz</h1>
      <div className="my-title-div">
        <span className="frontend-dev">&#60;Frontend Dev /&#62;</span>
        <img className='js-logo' src={JSLogo} />
        <img className='ts-logo' src={TSLogo} />
        <img className='react-logo' src={ReactLogo} />
      </div>
      <div className="btn-div">
        <button>ABOUT ME</button>
        <button>EDUCAÇÃO</button>
        <button>PROJETOS</button>
      </div>
      <img  className='my-photo' src={MyPhoto} alt='Foto de Perfil' />
    </div>
  );
}

export default App;
