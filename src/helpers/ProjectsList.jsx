import EasyShop from '../assets/EasyShop.png';
import ImageGalley from '../assets/ImageGalley.png';
import movieim from '../assets/movieim.png';
import Qrcode from '../assets/Qrcode.png';
import weather2 from '../assets/weather2.png' 
import socialmedia from '../assets/socialmedia.png';


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
    name:"imdb clone ",
    AboutTheProject : " ",
    image: movieim,
    skills: "JavaScript , HTML , CSS , React , Tailwind-CSS , TMDB-API",
    githubLink : "https://github.com/Mukesh39/imdb",
    deployedLink:"https://imdbmovieapplication.netlify.app",

}

,

{
    name:"Easy-Shop Ecommerce ",
    AboutTheProject : " ",
    image:EasyShop,
    skills: "JavaScript , HTML , CSS , React , Redux",
    githubLink : "https://github.com/Mukesh39/EasyShop--E-commerce-Application",
    deployedLink:"https://easyshopecommerce.netlify.app/",
}

,

{   
    name:"Weather Application",
    AboutTheProject : " ",
    image: weather2,
    skills: "JavaScript , HTML , CSS , ReactJs",
    githubLink : "https://github.com/Mukesh39/weatherapp",
    deployedLink:"https://weatherforecast24by7.netlify.app",
}


,

{
    name:"Image Gallery - Infinite Scroll",
    AboutTheProject : " ",
    image: ImageGalley,
    skills: "JavaScript , HTML , CSS , ReactJs",
    githubLink : "https://github.com/Mukesh39/Image-Gallery-UnSplash-Api-",
    deployedLink:"https://imagegalleryapplication.netlify.app" ,
}
,

{
    name:"QrCodeGenerator",
    AboutTheProject : " ",
    image:Qrcode,
    skills: "JavaScript , HTML , CSS , ReactJs ",
    githubLink : "https://github.com/Mukesh39/QrcodeGenerator",
    deployedLink:"https://uniqueqrcodegenerator.netlify.app" ,
} 


,{
    name:"socialmediaapp - UI ",
    AboutTheProject : " ",
    image:socialmedia,
    skills: "JavaScript , HTML , CSS , ReactJs , Animation  ",
    githubLink : "https://github.com/Mukesh39/socialmediapp",
    deployedLink:"https://socialmediaappui.netlify.app" ,
} 


]



