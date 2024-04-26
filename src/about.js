import aboutData from "./about.json5"

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
    mainContent.classList.add('about-content');
    
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-statement");
    aboutDiv.innerHTML = `${aboutData.content.about}`
    mainContent.appendChild(aboutDiv);

    const locationsDiv = document.createElement("div");
    locationsDiv.classList.add("locations");
    const locations = [...aboutData.content.loc_info];

    locations.forEach((element) => {
        const location = document.createElement("div");
        location.classList.add("location");

        const locName = document.createElement("div");
        locName.classList.add("location-name");
        locName.innerHTML = `${element.loc_name}`;
        location.appendChild(locName);

        const locAdd = document.createElement("div");
        locAdd.classList.add("address");
        locAdd.innerHTML = `${element.loc_add}`;
        location.appendChild(locAdd);

        const locPhone = document.createElement("div");
        locPhone.classList.add("phone-numner");
        locPhone.innerHTML = `${element.loc_phone}`;
        location.appendChild(locPhone);

        const locEmail = document.createElement("div");
        locEmail.classList.add("email");
        locEmail.innerHTML = `${element.loc_email}`;
        location.appendChild(locEmail);

        const tradingDiv = document.createElement("div");
        tradingDiv.classList.add("trading");
        const hours = [...element.trading];

        hours.forEach((subElem)=> {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("trading-day");
            
            const dayName = document.createElement("div");
            dayName.classList.add("day-name");
            dayName.innerHTML = `${subElem.day}`;
            dayDiv.appendChild(dayName);

            const dayHours = document.createElement("div");
            dayHours.classList.add("hours");
            dayHours.innerHTML = `${subElem.hours}`;
            dayDiv.appendChild(dayHours);

            tradingDiv.appendChild(dayDiv);
        })

        location.appendChild(tradingDiv);

        locationsDiv.appendChild(location);
    })
    mainContent.appendChild(locationsDiv);
    contentDiv.appendChild(mainContent);
}

export default About;