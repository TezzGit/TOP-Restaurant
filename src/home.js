function Home() {

    const homeBtn = document.querySelector(".home");
    homeBtn.disabled = true;

    const aboutBtn = document.querySelector(".about");
    aboutBtn.disabled = false;

    const menuBtn = document.querySelector(".menu");
    menuBtn.disabled = false;


    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.innerHTML = "Home"
    contentDiv.appendChild(mainContent);

}

export default Home;
