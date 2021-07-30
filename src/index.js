import "./style.scss";
import AOS from 'aos';
import './aos.scss'; // You can also use <link> for styles
import { getUsers } from "./common/usersAPI";
import { Menu } from './menu';
// initialize the menu
new Menu(document.querySelector('.menu'));

AOS.init();

  document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });
//getUsers().then(json => console.log(json));ws