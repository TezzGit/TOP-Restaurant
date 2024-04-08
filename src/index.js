import './style.css';
import Home from "./home";
import Menu from "./menu";
import About from "./about";

const HomeBtn = document.querySelector('.home');
HomeBtn.addEventListener("click", () => Home());

const MenuBtn = document.querySelector('.menu');
MenuBtn.addEventListener("click", () => Menu());

const AboutBtn = document.querySelector('.about');
AboutBtn.addEventListener("click", () => About());

Home();