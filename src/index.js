import './style.css';
import Home from "./home";
import Menu from "./menu";
import About from "./about";
import logo from "./SliceofLifeLogobyDesigner.png"

const headerDiv = document.querySelector('header');
const myLogo = new Image();
myLogo.src = logo;
myLogo.classList.add('logo');
headerDiv.appendChild(myLogo);

const heading = document.querySelector('h1');
heading.innerHTML = "Slice of Life";

const HomeBtn = document.querySelector('.home');
HomeBtn.addEventListener("click", () => Home());

const MenuBtn = document.querySelector('.menu');
MenuBtn.addEventListener("click", () => Menu());

const AboutBtn = document.querySelector('.about');
AboutBtn.addEventListener("click", () => About());

Home();