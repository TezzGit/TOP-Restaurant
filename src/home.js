function Home() {

    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.innerHTML = "Home"
    contentDiv.appendChild(mainContent);

}

export default Home;
