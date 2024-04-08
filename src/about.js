function About() {

    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.innerHTML = "About"
    contentDiv.appendChild(mainContent);

}

export default About;