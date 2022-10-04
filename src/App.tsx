import React, { useEffect, useState } from 'react';
import './App.css';
import PhotoBlue from './assets/perfil-blue1.png';
import PhotoNormal from './assets/perfil-normal.png';
import JSLogo from './assets/JS-logo.png';
import TSLogo from './assets/TS-logo.png';
import ReactLogo from './assets/react-logo.png';

function App() {

  const [introIsPlaying, setIntroIsPlaying] = useState<boolean>(true);
  const [photo, setPhoto] = useState<boolean>(false);
  const [photoFade, setPhotoFade] = useState<boolean>(true);
  const [thiago, setThiago] = useState<boolean>(false);
  const [education, setEducation] = useState<boolean>(false);
  const [projects, setProjects] = useState<boolean>(false);
  const [watcher, setWatcherBtn] = useState<boolean>(false);
  const [timemanager, setTimeBtn] = useState<boolean>(false);
  const [mainevent, setMainBtn] = useState<boolean>(false);

  const buttonsArr: React.Dispatch<React.SetStateAction<boolean>>[] = [setThiago, setEducation, 
    setProjects];

  const childrenArr: React.Dispatch<React.SetStateAction<boolean>>[] = [setWatcherBtn, setTimeBtn, setMainBtn]

  useEffect(() => {
    document.title = "Thiago Vaz <Frontend Dev />"
  }, [])

  useEffect(() => {
    if (!thiago && !education && !watcher && !timemanager && !mainevent){
      setPhoto(true);
    }
    if (!projects){
      setWatcherBtn(false);
      setTimeBtn(false);
      setMainBtn(false);
    }
  }, [thiago, education, projects, watcher, timemanager, mainevent])


  const activeButton = ( setButton:React.Dispatch<React.SetStateAction<boolean>>, 
    arrOfButtons: React.Dispatch<React.SetStateAction<boolean>>[]) => {
      setIntroIsPlaying(false) ;
      setButton(true);
      if (setButton !== setProjects) setPhoto(false);
      setPhotoFade(false);
      for (let button of arrOfButtons){
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
          <button className='btn-active thiago-btn' onClick={()=>deactiveButton(setThiago)}>THIAGO</button>
          :
          <button className='thiago-btn' onClick={()=>activeButton(setThiago, buttonsArr)}>THIAGO</button>
        }
        {education?
          <button className='btn-active education-btn' onClick={()=>deactiveButton(setEducation)}>EDUCAÇÃO</button>
          :
          <button className='education-btn' onClick={()=>activeButton(setEducation, buttonsArr)}>EDUCAÇÃO</button>
        }
        {projects?
          <button className='btn-active projects-btn' onClick={()=>deactiveButton(setProjects)}>PROJETOS</button>
          :
          <button className='projects-btn' onClick={()=>activeButton(setProjects, buttonsArr)}>PROJETOS</button>
        }
        <div className={introIsPlaying? 'hide':'show'}>
          <div className="projects-children-div">
            {projects? 
              <div className='children-active'>
                <button className={watcher? 'projects-btn watcher-btn btn-active': 'projects-btn watcher-btn'}
                  onClick={watcher? ()=>deactiveButton(setWatcherBtn) : ()=>activeButton(setWatcherBtn, childrenArr) }>Watcher</button>

                <button className={timemanager? 'projects-btn timemanager-btn btn-active': 'projects-btn timemanager-btn'}
                  onClick={timemanager? ()=>deactiveButton(setTimeBtn) : ()=>activeButton(setTimeBtn, childrenArr)}>Time Manager</button>

                <button className={mainevent? 'projects-btn mainevent-btn btn-active': 'projects-btn mainevent-btn'}
                  onClick={mainevent? ()=>deactiveButton(setMainBtn) : ()=>activeButton(setMainBtn, childrenArr)}> Main Event</button>

              </div>
              :
              <div className='children-deactive'>
                <button className={'projects-btn shrink-watcher'} >Watcher</button>
                <button className={'projects-btn shrink-timemanager'} >Time Manager</button>
                <button className={'projects-btn shrink-main'} > Main Event</button>
              </div>
               }
            
          </div>
        </div>
      </div>
      {photoFade?
        <div>
          <img className='photo-normal' src={PhotoNormal} alt='Foto de Perfil' />
          <img className='photo-blue' src={PhotoBlue} alt='Foto de Perfil com efeito neon azul' />
        </div> :null}

      <img  className={photo? 'photo-fixed fade-in':'photo-fixed fade-out' } src={PhotoBlue} alt='Foto de Perfil' />

      <div className={introIsPlaying? 'hide':'show'}>
        <div className={thiago ? "thiago-tab enterTab" : 'thiago-tab exitTab'}>
          <h3 className='tab-title'> Sobre mim</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={education ? "thiago-tab enterTab" : 'thiago-tab exitTab'}>
          <h3 className='tab-title'>Educação</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={ watcher? "thiago-tab enterTab" : 'thiago-tab exitTab'}>
          <h3 className='tab-title'>Watcher</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={timemanager ? "thiago-tab enterTab" : 'thiago-tab exitTab'}>
          <h3 className='tab-title'>Time Manager</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={ mainevent ? "thiago-tab enterTab" : 'thiago-tab exitTab'}>
          <h3 className='tab-title'>Main Event</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
