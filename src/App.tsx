import React, { useEffect, useState } from 'react';
import './App.css';
import PhotoBlue from './assets/perfil-blue1.png';
import PhotoNormal from './assets/perfil-normal.png';
import JSLogo from './assets/JS-logo.png';
import TSLogo from './assets/TS-logo.png';
import ReactLogo from './assets/react-logo.png';
import GmailLogo from    './assets/gmail.png';
import WppLogo from './assets/whatsapp-logo.png';
import LinkedinLogo from './assets/linkedin.png';
import GithubLogo from './assets/github-white.png';
import Brasil from './assets/brasil.png';
import França from './assets/france.png';
import Usa from './assets/usa.png';

function App() {

  
  const [introIsPlaying, setIntroIsPlaying] = useState<boolean>(true);
  const [photo, setPhoto] = useState<boolean>(true);
  const [photoClass, setPhotoClass] = useState<string>('photo-blue');
  const [aboutMe, setAbout] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);
  const [projects, setProjects] = useState<boolean>(false);
  const [watcher, setWatcherBtn] = useState<boolean>(false);
  const [timemanager, setTimeBtn] = useState<boolean>(false);
  const [mainevent, setMainBtn] = useState<boolean>(false);
  const [mypage, setMyPageBtn] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('BRA');
  const [load, setLoad] = useState<number>(0);
  const [width, setWidth] = useState<number>(window.innerWidth);
  
  const badWidth = width <= 1030;

  const handleWindowSizeChange = ()=> {
    setWidth(window.innerWidth);
}

  const buttonsArr: React.Dispatch<React.SetStateAction<boolean>>[] = [setAbout, setContact, 
    setProjects];

  const childrenArr: React.Dispatch<React.SetStateAction<boolean>>[] = [setWatcherBtn, setTimeBtn, setMainBtn,
    setMyPageBtn]

  setTimeout(()=>setIntroIsPlaying(false), 4300);


  useEffect(() => {
    document.title = "Thiago Vaz <Frontend Dev />";

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }

  },[])

  useEffect(()=>{
    if (load < 100 && !badWidth){
    const interval = setInterval(()=>{
      setLoad(time => time+1);
    }, 27);
    return ()=>clearInterval(interval);
  }
  }, [load, badWidth])

  useEffect(() => {
    if (!projects){
      setWatcherBtn(false);
      setTimeBtn(false);
      setMainBtn(false);
      setMyPageBtn(false);
    }
  }, [projects])

  useEffect(() => {
    if (!aboutMe && !contact && !watcher && !timemanager && !mainevent && !mypage && !badWidth){
      setPhotoClass('photo-blue fade-in');
    }

  }, [aboutMe, contact, watcher, timemanager, mainevent, mypage, badWidth])

  useEffect(()=> {
    if (introIsPlaying && !badWidth) setPhotoClass('photo-blue glitch-intro')
  }, [introIsPlaying, badWidth]);

  const activeButton = ( setButton:React.Dispatch<React.SetStateAction<boolean>>, 
    arrOfButtons: React.Dispatch<React.SetStateAction<boolean>>[]) => {
      
      setButton(true);
      if (setButton !== setProjects) {
        setPhoto(false);
        setPhotoClass('photo-blue fade-out');
      }
      for (let button of arrOfButtons){
        if (button !== setButton){
          button(false);
        }
      }
  };

  const deactiveButton = ( setButton:React.Dispatch<React.SetStateAction<boolean>>) => { 
    setButton(false);
    setPhotoClass('photo-blue fade-in');
  };


  return (
    <div className="App">

      <h1 className='my-name my-name-fadeIn'>Thiago Vaz </h1>

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
        {!badWidth?
        <div className={introIsPlaying? 'hide':'show'}>
          <div className="projects-children-div">
            {projects? 
              <div className='children-active'>
                <button className={watcher? 'projects-btn watcher-btn btn-active': 'projects-btn watcher-btn'}
                  onClick={watcher? ()=>deactiveButton(setWatcherBtn) : ()=>activeButton(setWatcherBtn, childrenArr) }>Watcher</button>

                <button className={timemanager? 'projects-btn  btn-active timemanager-btn': 'projects-btn timemanager-btn'}
                  onClick={timemanager? ()=>deactiveButton(setTimeBtn) : ()=>activeButton(setTimeBtn, childrenArr)}>Time Manager</button>

                <button className={mainevent? 'projects-btn mainevent-btn btn-active': 'projects-btn mainevent-btn'}
                  onClick={mainevent? ()=>deactiveButton(setMainBtn) : ()=>activeButton(setMainBtn, childrenArr)}> Main Event</button>

                <button className={mypage? 'projects-btn mypage-btn btn-active': 'projects-btn mypage-btn'}
                  onClick={mypage? ()=>deactiveButton(setMyPageBtn) : ()=>activeButton(setMyPageBtn, childrenArr)}> Portfólio</button>

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
        :
        <div className={projects? "projects-children-div":'hide-element'}>
            
                <button className={watcher? 'projects-btn watcher-btn btn-active': 'projects-btn watcher-btn'}
                  onClick={watcher? ()=>deactiveButton(setWatcherBtn) : ()=>activeButton(setWatcherBtn, childrenArr) }>Watcher</button>

                <button className={timemanager? 'projects-btn timemanager-btn btn-active': 'projects-btn timemanager-btn'}
                  onClick={timemanager? ()=>deactiveButton(setTimeBtn) : ()=>activeButton(setTimeBtn, childrenArr)}>Time Manager</button>

                <button className={mainevent? 'projects-btn mainevent-btn btn-active': 'projects-btn mainevent-btn'}
                  onClick={mainevent? ()=>deactiveButton(setMainBtn) : ()=>activeButton(setMainBtn, childrenArr)}> Main Event</button>

                <button className={mypage? 'projects-btn mypage-btn btn-active': 'projects-btn mypage-btn'}
                  onClick={mypage? ()=>deactiveButton(setMyPageBtn) : ()=>activeButton(setMyPageBtn, childrenArr)}> Portfólio</button>

          </div>
        }
      </div>

        <img className={photo? 'photo-normal fade-in':'photo-normal fade-out'} src={PhotoNormal} alt='Foto de perfil' />
        <img className={photoClass} src={PhotoBlue} alt='Foto de perfil' />

        <h2 className={introIsPlaying? 'loading-text':'loading-text fade-out'}>{load}%</h2>

      <div className={introIsPlaying? 'hide':'show'}>
        <div className={aboutMe ? "aboutMe-tab enterTab" : 'aboutMe-tab exitTab'}>
        <img className='img-click flag' src={Brasil} alt='Bandeira do Brasil' onClick={()=> setLanguage('BRA')}/>
        <img className='img-click flag' src={França} alt='Bandeira da França' onClick={()=> setLanguage('FRA')} />
        <img className='img-click flag' src={Usa} alt='Bandeira dos EUA' onClick={()=> setLanguage('USA')} />
          {language==='BRA'?
          <div className='AboutMe-BRA'>
            <h3 className='tab-title about-title'>Quem sou?</h3>
            <p>    Sou formado em Engenharia Elétrica com ênfase em Computação pela Universidade Federal de Uberlândia (UFU). Apaixonado por linguagens de programação e línguas. Atualmente estudo tecnologias de desenvolvimento Frontend como JavaScript, TypeScript e React.js.</p>
          </div>:null}
          {language==='FRA'?
          <div className='AboutMe-FRA'>
            <h3 className='tab-title about-title'>Qui suis-je? </h3>
            <p>J'ai un baccalauréat en Ingénierie électrique avec une spécialisation en informatique à l'Université Fédéral d'Uberlândia (UFU). Passionné par l'apprentissage de la programmation et des languages, actuellement j'étudie les technologies de développement Frontend telles que JavaScript, TypeScript et React.js.</p>
          </div>:null}
          {language==='USA'?
          <div className='AboutMe-USA'>
            <h3 className='tab-title about-title'>Who am I?</h3>
            <p>I have a degree in Electrical Engineering with emphasis in Computer Engineering from the Universidade Federal de Uberlândia (UFU). Passionate about learning languages tor code and speak. I am currently studying Frontend development technologies such as JavaScript, TypeScript and React.js.</p>
          </div>:null}
        </div>
        <div className={contact ? "contact-tab enterTab" : 'contact-tab exitTab'}>


            <img className='whatsapp-logo sml-contact-logo' src={WppLogo} alt='Whatsapp logo'></img>
            <p className='whatsapp-label'>+55 34 99107-8564</p>

            <img className='gmail-logo  sml-contact-logo' src={GmailLogo} alt='Gmail Logo' 
              onClick={()=>window.location.href = 'mailto:thiago.vazss@gmail.com'}/>
            <p className='gmail-label'>thiago.vazss@gmail.com</p>

            <img className='linkedin-logo big-contact-logo' src={LinkedinLogo} alt='Linkedin Logo' 
              onClick={()=> window.open('https://www.linkedin.com/in/thiago-vaz-877804197/', '_blank')}/>
            <p className='linkedin-label'>linkedin.com/in/thiago-vaz-877804197/</p>

            <img className='github-logo  big-contact-logo' src={GithubLogo} alt='GitHub Logo' 
              onClick={()=> window.open('https://github.com/thiagaoz', "_blank")}/>
            <p className='github-label'>github.com/thiagaoz</p>

        </div>
        <div className={ watcher? "aboutMe-tab enterTab projects-child-tab" : 'aboutMe-tab exitTab projects-child-tab'}>
          <div className='tab-header'>
            <h3 className='tab-title watcher-h3'>Watcher</h3>
            <img className=' icon icon-on-tab1' src={JSLogo} alt='JavaScript Logo' />
            <img className=' icon icon-on-tab2' src={ReactLogo} alt='React.js Logo' /> 
            <img className='github-logo github-btn' src={GithubLogo} alt='GitHub Logo' 
            onClick={()=> window.open('https://github.com/thiagaoz/watcher', "_blank")}/>
          </div>
          <p>Watcher é um site para organizar filmes e séries. Ele consome a API do The Movie Database (TMDB) para prencher as informações técnicas dos filmes ou séries, mas o processo também pode ser feito de forma manual. É possível realizar CRUD nos itens registrados e ele também faz sugestões aleatórias de o que assitir baseado em nas preferências do usuário. </p>
        </div>
        <div className={timemanager ? 'aboutMe-tab enterTab  projects-child-tab' : 'aboutMe-tab exitTab  projects-child-tab'}>
        <div className='tab-header'>
            <h3 className='tab-title time-h3'>Time Manager</h3>
            <img className=' icon icon-on-tab1' src={TSLogo} alt='Typescript Logo' />
            <img className=' icon icon-on-tab2' src={ReactLogo} alt='React.js Logo' /> 
            <img className='github-logo github-btn' src={GithubLogo} alt='GitHub Logo' 
              onClick={()=> window.open('https://github.com/thiagaoz/timemanager', "_blank")}/>
          </div>
          <p>O objetivo desse projeto foi criar agenda semanal com inserção e edição de tarefas com dia, horário de início e fim. Os maiores desafios foram os testes de conflitos de horários com outras tarefas já cadastradas e tarefas que se estendiam de um dia para o outro</p>
        </div>
        <div className={ mainevent ? 'aboutMe-tab enterTab projects-child-tab' : 'aboutMe-tab exitTab projects-child-tab'}>
          <h3 className='tab-title main-h3'>Main Event</h3>
          <img className=' icon icon-on-tab1' src={TSLogo} alt='Typescript Logo' />
          <img className=' icon icon-on-tab2' src={ReactLogo} alt='React.js Logo' /> 
          <img className='github-logo github-btn' src={GithubLogo} alt='GitHub Logo' 
            onClick={()=> window.open('https://github.com/thiagaoz/mainevent', "_blank")}/>
          <p>Main Event é um mini jogo de RPG de turno, no estilo Final Fantasy, Pokemon RED, etc. Até o momento foi implementada a lógica de toda a customização do personagem (pontos de atributos e compra de equipamentos). Próximo passo é implementar o sistema de luta.</p>
        </div>
        <div className={ mypage ? 'aboutMe-tab enterTab projects-child-tab' : 'aboutMe-tab exitTab  projects-child-tab'}>
          <h3 className='tab-title mypage-h3'>Portfólio</h3>
          <img className=' icon icon-on-tab1' src={TSLogo} alt='Typescript Logo' />
          <img className=' icon icon-on-tab2' src={ReactLogo} alt='React.js Logo' /> 
          <img className='github-logo github-btn' src={GithubLogo} alt='GitHub Logo' 
            onClick={()=> window.open('https://github.com/thiagaoz/thiagaoz.github.io', "_blank")}/>
          <p>Esse é o meu portfolio. Me inspirei na estética do filme Blade Runner e elementos cyberpunk para fazer as animações e visual dos elementos que compõem a página. Ela está quase completa, falta apenas implementar as medias queries para responsividade com outros dispositivos e tamanhos de tela.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
