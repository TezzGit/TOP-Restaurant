function About() {

    const homeBtn = document.querySelector(".home");
    homeBtn.disabled = false;

    const aboutBtn = document.querySelector(".about");
    aboutBtn.disabled = true;

    const menuBtn = document.querySelector(".menu");
    menuBtn.disabled = false;

    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.innerHTML = "About"
    contentDiv.appendChild(mainContent);

}

export default About;