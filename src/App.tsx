import React, { useEffect, useState } from 'react';
import './App.css';
import MyPhoto from './assets/perfil-blue1.png';
import JSLogo from './assets/JS-logo.png';
import TSLogo from './assets/TS-logo.png';
import ReactLogo from './assets/react-logo.png';

function App() {

  const [photo, setPhoto] = useState<boolean>(true);
  const [thiago, setThiago] = useState<boolean>(false);
  const [education, setEducation] = useState<boolean>(false);
  const [projects, setProjects] = useState<boolean>(false);

  const buttonsArr: React.Dispatch<React.SetStateAction<boolean>>[] = [setThiago, setEducation, 
    setProjects];


  useEffect(() => {
    document.title = "Thiago Vaz <Frontend Dev />"
  }, [])

  useEffect(() => {
    if (!thiago && !education && !projects){
      setPhoto(true);
    }
  }, [thiago, education, projects])

  const activeButton = ( setButton:React.Dispatch<React.SetStateAction<boolean>>) => { 
    setButton(true);
    setPhoto(false);
    for (let button of buttonsArr){
      if (button !== setButton){
        button(false);
      }
    }
  };

  const deactiveButton = ( setButton:React.Dispatch<React.SetStateAction<boolean>>) => { 
    setButton(false);
  };
  
  return (
    <div className="App">
      <h1 className='my-name my-name-fadeIn'>Thiago Vaz</h1>

      <span className="frontend-dev">&#60;Frontend Dev /&#62;</span>

      <img className='js-logo icon' src={JSLogo} alt='JavaScript Logo' />
      <img className='ts-logo icon' src={TSLogo} alt='TypeScript Logo' />
      <img className='react-logo  icon' src={ReactLogo} alt='React.js Logo' />

      <div className="btn-div">
        {thiago? 
          <button className='btn-active' onClick={()=>deactiveButton(setThiago)}>THIAGO</button>
          :
          <button onClick={()=>activeButton(setThiago)}>THIAGO</button>
        }
        {education?
          <button className='btn-active' onClick={()=>deactiveButton(setEducation)}>EDUCAÇÃO</button>
          :
          <button onClick={()=>activeButton(setEducation)}>EDUCAÇÃO</button>
        }
        {projects?
          <button className='btn-active' onClick={()=>deactiveButton(setProjects)}>PROJETOS</button>
          :
          <button onClick={()=>activeButton(setProjects)}>PROJETOS</button>
        }

      </div>
      {photo? <img  className='my-photo' src={MyPhoto} alt='Foto de Perfil' /> : null}
    </div>
  );
}

export default App;
