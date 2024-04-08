function Menu() {

    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.innerHTML = "Menu"
    contentDiv.appendChild(mainContent);

}

export default Menu;