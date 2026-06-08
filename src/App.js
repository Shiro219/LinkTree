import './App.css';
import profilePic from './pic.jpg';
import Switch from './Switch';
import  { 
  FaGithub, 
  FaLinkedin, 
  FaFilePdf, 
  FaFacebook,
  FaLocationArrow,
 
} 
  from 'react-icons/fa';

function App() {

  const socialMediaLinks = [
    {

    url: 'https://github.com/Shiro219',
    title: 'Github',
    icon: <FaGithub />

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

  /* Switch component for theme toggling, can change the theme of the app */
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
