import homeData from "./home.json5";

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
    mainContent.classList.add('home-content');

    const missionDiv = document.createElement("div");
    missionDiv.innerHTML = `"${homeData.content.statement}"`;
    missionDiv.classList.add('mission-statement');

    mainContent.appendChild(missionDiv);

    const specialsDiv = document.createElement("div");
    specialsDiv.classList.add("special-div");

    const specialsTitle = document.createElement("div");
    specialsTitle.classList.add("specials-title");
    specialsTitle.innerHTML = "This Week's Specials"
    specialsDiv.appendChild(specialsTitle);
    
    const specials = [...homeData.content.specials];
    specials.forEach((element) => {
        const specialDiv = document.createElement("div");
        specialDiv.classList.add("special");
        
        const specialName = document.createElement("div");
        specialName.classList.add("special-title");
        specialName.innerHTML = `${element.title}`;
        specialDiv.appendChild(specialName);

        const specialDesc = document.createElement("div");
        specialDesc.classList.add("special-desc");
        specialDesc.innerHTML = `${element.desc}`;
        specialDiv.appendChild(specialDesc);

        const specialPrice = document.createElement("div");
        specialPrice.classList.add("special-price");
        specialPrice.innerHTML = `${element.price}`;
        specialDiv.appendChild(specialPrice);

        specialsDiv.appendChild(specialDiv);
    })

    mainContent.appendChild(specialsDiv);

    contentDiv.appendChild(mainContent);

}

export default Home;
