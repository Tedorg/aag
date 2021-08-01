import "./style.scss";

import { getUsers } from "./common/usersAPI";
import { Menu } from './menu';
import img from "./assets/images/c1.png"
// initialize the menu
new Menu(document.querySelector('.menu'));



document.addEventListener("DOMContentLoaded", function(event) {
  console.log(img);

  document.querySelectorAll(".image").forEach(e => e.src=img)
});

const links = document.querySelectorAll('.menu__item-link')
links.forEach(e =>{
  
  e.addEventListener('click', e => {
    e.preventDefault();
    console.log(e);
    if (e.target.classList.contains(".firstClicked")) {
      e.target.classList.remove(".firstClicked")
      console.log('second click');
      window.open('http://laurasigner.com', '_blank');
    } else {
      e.target.classList.add(".firstClicked")
      console.log('first click');

    }
  
    this.isSwiping = false;
  });
})
