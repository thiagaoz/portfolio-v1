import React, { useEffect, useState } from 'react';
import './App.css';
import PhotoBlue from './assets/perfil-blue1.png';
import PhotoNormal from './assets/perfil-normal.png';
import JSLogo from './assets/JS-logo.png';
import TSLogo from './assets/TS-logo.png';
import ReactLogo from './assets/react-logo.png';
import GmailLogo from    './assets/gmail.png';
import LinkedinLogo from './assets/linkedin.png';
import GithubLogo from './assets/github-white.png';
import Brasil from './assets/brasil.png';
import França from './assets/france.png';
import Usa from './assets/usa.png';

function App() {

  const [introIsPlaying, setIntroIsPlaying] = useState<boolean>(true);
  const [photo, setPhoto] = useState<boolean>(false);
  const [photoFade, setPhotoFade] = useState<boolean>(true);
  const [aboutMe, setAbout] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);
  const [projects, setProjects] = useState<boolean>(false);
  const [watcher, setWatcherBtn] = useState<boolean>(false);
  const [timemanager, setTimeBtn] = useState<boolean>(false);
  const [mainevent, setMainBtn] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('BRA');

  const buttonsArr: React.Dispatch<React.SetStateAction<boolean>>[] = [setAbout, setContact, 
    setProjects];

  const childrenArr: React.Dispatch<React.SetStateAction<boolean>>[] = [setWatcherBtn, setTimeBtn, setMainBtn]

  useEffect(() => {
    document.title = "Thiago Vaz <Frontend Dev />"
  }, [])

  useEffect(() => {
    if (!aboutMe && !contact && !watcher && !timemanager && !mainevent){
      setPhoto(true);
    }
    if (!projects){
      setWatcherBtn(false);
      setTimeBtn(false);
      setMainBtn(false);
    }
  }, [aboutMe, contact, projects, watcher, timemanager, mainevent])


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
        {aboutMe? 
          <button className='btn-active aboutMe-btn' onClick={()=>deactiveButton(setAbout)}>ABOUT</button>
          :
          <button className='aboutMe-btn' onClick={()=>activeButton(setAbout, buttonsArr)}>ABOUT</button>
        }
        {contact?
          <button className='btn-active contact-btn' onClick={()=>deactiveButton(setContact)}>CONTATO</button>
          :
          <button className='contact-btn' onClick={()=>activeButton(setContact, buttonsArr)}>CONTATO</button>
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
        <div className={aboutMe ? "aboutMe-tab enterTab" : 'aboutMe-tab exitTab'}>
        <img className='img-click flag' src={Brasil} alt='Bandeira do Brasil' onClick={()=> setLanguage('BRA')}/>
        <img className='img-click flag' src={França} alt='Bandeira da França' onClick={()=> setLanguage('FRA')} />
        <img className='img-click flag' src={Usa} alt='Bandeira dos EUA' onClick={()=> setLanguage('USA')} />
          {language==='BRA'?
          <div className='AboutMe-BRA'>
            <h3 className='tab-title'>Quem sou?</h3>
            <p>Sou formado em Engenharia Elétrica com ênfase em Computação pela Universidade Federal de Uberlânida (UFU). Apaixonado por linguagens de programação e línguas. Atualmente estudo tecnologias de desenvolvimento Frontend como JavaScript, TypeScript e React.js.</p>
          </div>:null}
          {language==='FRA'?
          <div className='AboutMe-FRA'>
            <h3 className='tab-title'>Qui suis-je? </h3>
            <p>J'ai un diplôme en génie électrique avec une spécialisation en informatique de l'Université fédérale d'Uberlânida (UFU). Passionné par les langages de programmation et les langages. J'étudie actuellement les technologies de développement Frontend telles que JavaScript, TypeScript et React.js.</p>
          </div>:null}
          {language==='USA'?
          <div className='AboutMe-USA'>
            <h3 className='tab-title'>Who am I?</h3>
            <p>Sou formado em Engenharia Elétrica com ênfase em Computação pela Universidade Federal de Uberlânida (UFU). Apaixonado por linguagens de programação e línguas. Atualmente estudo tecnologias de desenvolvimento Frontend como JavaScript, TypeScript e React.js.</p>
          </div>:null}
        </div>
        <div className={contact ? "contact-tab enterTab" : 'contact-tab exitTab'}>
          
          <div><img className='gmail-logo' src={GmailLogo} alt='Gmail Logo' 
            onClick={()=>window.location.href = 'mailto:thiago.vazss@gmail.com'}/></div>
          <div><p>thiago.vazss@gmail.com</p></div>
          <div><img className='linkedin-logo' src={LinkedinLogo} alt='Linkedin Logo' 
            onClick={()=> window.open('https://www.linkedin.com/in/thiago-vaz-877804197/', '_blank')}/></div>
          <div><p>linkedin.com/in/thiago-vaz-877804197/</p></div>
          <div><img className='github-logo' src={GithubLogo} alt='GitHub Logo' 
            onClick={()=> window.open('https://github.com/thiagaoz', "_blank")}/></div>
          <div><p>github.com/thiagaoz</p></div>
        </div>
        <div className={ watcher? "aboutMe-tab enterTab" : 'aboutMe-tab exitTab'}>
          <h3 className='tab-title'>Watcher</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={timemanager ? "aboutMe-tab enterTab" : 'aboutMe-tab exitTab'}>
          <h3 className='tab-title'>Time Manager</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={ mainevent ? "aboutMe-tab enterTab" : 'aboutMe-tab exitTab'}>
          <h3 className='tab-title'>Main Event</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
