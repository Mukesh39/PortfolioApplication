import ImageGalley from "../assets/ImageGalley.png";
import movieim from "../assets/movieim.png";
import Qrcode from "../assets/Qrcode.png";
import weather2 from "../assets/weather2.png";
import socialmedia from "../assets/socialmedia.png";
import meShop from "../assets/meShop.png";
import portfolio from "../assets/portfolio.png";
import voteapp from "../assets/voteapp.png";
import restaurent from "../assets/rest.png";

//Read and understand

//similary You can import The Images of other Projects As well
//Also you can change the Description of The Project Item
//To access anywhere You can Do like That = const project = ProjectList[id];
//id can be Dynamic Thing - That Depends upon the user

export const ProjectList = [
  // {
  //     name:"Spotify Clone Website",
  //     image: Proj1,
  //     skills: "JavaScript , HTML , CSS",
  //     githubLink : "https://github.com"
  // }

  {
    name: "imdb clone ",
    AboutTheProject: " ",
    image: movieim,
    skills: "JavaScript , HTML , CSS , React , Tailwind-CSS , TMDB-API",
    githubLink: "https://github.com/Mukesh39/imdb",
    deployedLink: "https://imdbmovieapplication.netlify.app",
  },

  {
    name: "meShop Ecommerce App ",
    AboutTheProject: " ",
    image: meShop,
    skills: "JavaScript , HTML , CSS , React , Redux Toolkits",
    githubLink: "https://github.com/Mukesh39/meShop",
    deployedLink: "https://meshope.netlify.app",
  },

  {
    name: "Portfolio Application ",
    AboutTheProject: " ",
    image: portfolio,
    skills:
      "JavaScript , HTML , CSS , ReactJs , Material Ui , netlify , vertical components , Text Animations , React Bootstrap,npm ,giphy,  react-router,css3-animations, responsive-design , functional-components react-bootstrap-components ,animation-css,  reacthooks ",

    githubLink: "https://github.com/Mukesh39/PortfolioApplication",

    deployedLink: "https://portfolio-mukesh-kumar.netlify.app",
  },

  {
    name: "Image Gallery - Infinite Scroll",
    AboutTheProject: " ",
    image: ImageGalley,
    skills: "JavaScript , HTML , CSS , ReactJs",
    githubLink: "https://github.com/Mukesh39/Image-Gallery-UnSplash-Api-",
    deployedLink: "https://imagegalleryapplication.netlify.app",
  },
  {
    name: "Weather Application",
    AboutTheProject: " ",
    image: weather2,
    skills: "JavaScript , HTML , CSS , ReactJs",
    githubLink: "https://github.com/Mukesh39/weatherapp",
    deployedLink: "https://weatherforecast24by7.netlify.app",
  },

  {
    name: "QrCodeGenerator",
    AboutTheProject: " ",
    image: Qrcode,
    skills: "JavaScript , HTML , CSS , ReactJs ",
    githubLink: "https://github.com/Mukesh39/QrcodeGenerator",
    deployedLink: "https://uniqueqrcodegenerator.netlify.app",
  },

  {
    name: "socialmediaapp - UI ",
    AboutTheProject: " ",
    image: socialmedia,
    skills: "JavaScript , HTML , CSS , ReactJs , Animation  ",
    githubLink: "https://github.com/Mukesh39/socialmediapp",
    deployedLink: "https://socialmediaappui.netlify.app",
  },

  {
    name: " VotingApp Backend",
    AboutTheProject: " ",
    image: voteapp,
    skills:
      "JavaScript , Node.js , Express , PostMan for Testing , HTTP  , Passport , Jwt ,jwt-authentication, middlewares etc",
    githubLink: "https://github.com/Mukesh39/VoteApp",
    deployedLink: "https://github.com/Mukesh39/VoteApp",
  },

  {
    name: "Restaurent website(Frontend App)",
    AboutTheProject: " ",
    image: restaurent,
    skills: "JavaScript , CSS, HTML , Animations , Netlify , Single Page App ",
    githubLink: "https://github.com/Mukesh39/Restaurent-Website1",
    deployedLink: "https://restaurent247.netlify.app",
  },
];
