function Menu() {

    const homeBtn = document.querySelector(".home");
    homeBtn.disabled = false;

    const aboutBtn = document.querySelector(".about");
    aboutBtn.disabled = false;

    const menuBtn = document.querySelector(".menu");
    menuBtn.disabled = true;

    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.innerHTML = "Menu"
    contentDiv.appendChild(mainContent);

}

export default Menu;