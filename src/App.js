import './App.css';
import Conteudo from './conteudos/Conteudo';
import Wathsapp from './conteudos/Wathsapp';
import Funcoes from './conteudos/Funcoes';
import Form from './conteudos/Form';
import Rodape from './conteudos/Rodape';
import logo from  "./img/perfil.jpg"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx9i7dV4bF5MS70dWzI0QMLfOX1O67W3E",
  authDomain: "jonnasdev.firebaseapp.com",
  projectId: "jonnasdev",
  storageBucket: "jonnasdev.appspot.com",
  messagingSenderId: "292487830888",
  appId: "1:292487830888:web:13d8c6cb49a1ca0ecb4add",
  measurementId: "G-004ZRWNKKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (

    <div>
    
    <div className="App">

<div className="main">

        <div className="center">
          <div className="menu">

            <div className="logo">
              <h3>JONNYWF</h3>
           </div>

           <div className="item-menu">
             <a href="https://api.whatsapp.com/send?phone=5571999697820&text=Ol%C3%A1%2C%20vim%20pela%20sua%20p%C3%A1gina" target="_blank" >Contato</a> 
           </div>
    
           </div>

            </div>

            

      </div>

      <div className="presentation">
        <section class="about" id="about">
      <div class="content">
        <div class="title-wrapper-about">
  
        </div>
        <br/>
        <div class="about-content">
          <div class="left">
            <img src= {logo}  alt="Logo" width="100%" height="100%" />
          </div>
          <div class="right">
            <h3>Então, Quem sou eu ?</h3>
            <p>
              Bem, meu nome é Jonnas Willian, atualmente tenho 22 anos e estou no 6º semestre de ciência da computação,
              realizo aplicações Web, criação de site, criação de sistemas e Aplicativos, tenho habilidades em C#, Java, JavaScript,
              ReactJS, React-Native e Expo. <br></br>
              Além disso realizo trabalhos com SEO, Copy, integrações de Api, Conexão com GoogleAds e crio anúncios convidativos e diretos
              para o GoogleAds
            </p>
          </div>
        </div>
      </div>
    </section>
      </div>

    </div>
    
    <Wathsapp/>

    <Funcoes/>

    <Conteudo/>



    <Rodape/>

    </div>
  );
  
}

export default App;
