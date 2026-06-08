import logo from './logo.svg';
import './App.css';
import profilePic from './pic.jpg';
/* import { ReactComponent as Location } from "./Location.svg"; */
import Switch from './Switch';
import  { 
  FaGithub, 
  FaLinkedin, 
  FaPortfolio,
  FaFilePdf, 
  FaFacebook,
  FaLocationArrow,
 
} 
  from 'react-icons/fa';
import { CgDarkMode } from 'react-icons/cg';

function App() {

  // My social media links

  const socialMediaLinks = [
    {

    url: 'https://github.com/Shiro219',
    title: 'Github',
    icon: <FaGithub />


    //github: 'https://github.com/Shiro219',
    // linkedin: 'linkedin.com/in/rull-mendez-083272332',
    // portfolio: 'https://rullmendez.github.io/Portfolio/',
    // resume: 'https://docs.google.com/document/d/1n9s8Xo2l3m5v6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o/edit?usp=sharing',
    //  facebook: 'https://www.facebook.com/rullanthony.mendezquispe',
  },
  {
    url: 'https://www.linkedin.com/in/rull-mendez-083272332/',
    title: 'LinkedIn',
    icon: <FaLinkedin />
  },
  {
    url: 'https://github.com/Project3Team5',
    title: 'Team Project',
    icon: <FaGithub />
  },
  {
    url: 'Resume.pdf',
    title: 'resume',
    icon: <FaFilePdf />
  },
  {
    url: 'https://www.facebook.com/rullanthony.mendezquispe',
    title: 'Facebook',
    icon: <FaFacebook />
  }


  ];




  return ( 

    <div className="App">
      
      <div className="App-header container mx-auto">
        
        <Switch  />
        <img src={profilePic} className="profile-picture w-20 h-20 mb-4 rounded-full" alt="profile picture" />
        <div className="name text-2xl font-bold mb-2">Rull Anthony Mendez Quispe</div>
        <div className="description text-md mb-4">Aspiring Software Developer | Progress may be slow, but I'm always moving forward </div>


        <div className="location flex items-center gap-2 text-lg font-semibold mb-4" > <FaLocationArrow className="w-5 h-5" /> Hollister, California</div>
        <ul className="flex flex-col w-full">
    
        {
          socialMediaLinks.map((link,index) => (
            <li key= {index} className = 'w-full max-w-md mx-auto m-2 py-3 border-black border-2 text-sm md:text-md text-slate-900' >
                <a href={link.url} className='flex items-center justify-center gap-2' title={link.title} target="_blank" rel="noreferrer"> 
                   {link.icon} <p className = 'font-bold ml-3'> {link.title} </p> </a> 
               </li>
          ))
        }
        </ul>
      </div>
    </div>
       
    
  );
}

export default App;
