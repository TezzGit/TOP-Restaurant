import menuData from "./menu.json5";

function Menu() {

    // NAV FUNCTIONALITY
    const homeBtn = document.querySelector(".home");
    homeBtn.disabled = false;

    const aboutBtn = document.querySelector(".about");
    aboutBtn.disabled = false;

    const menuBtn = document.querySelector(".menu");
    menuBtn.disabled = true;

    // Menu Info
    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    // Div Menu Will Utilise
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    // Heading
    const contentHeading = document.createElement("h2");
    contentHeading.innerHTML = `${menuData.title}`;
    mainContent.appendChild(contentHeading);

    const jsonContent = menuData.content;

    for (let iter = 0; iter < jsonContent.length; iter++) {

        // Add Menu Section Heading
        const subHeadingDiv = document.createElement("h3");
        subHeadingDiv.classList.add('menu-section-heading');
        subHeadingDiv.innerHTML = `${jsonContent[iter].heading}`;
        mainContent.appendChild(subHeadingDiv);

        const sectionItems = jsonContent[iter].items;

        for (let subIter = 0; subIter < sectionItems.length; subIter++) {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            // Item Name
            const itemName = document.createElement('div');
            itemName.classList.add('item-name');
            itemName.innerHTML = `${sectionItems[subIter].name}`;
            menuItem.appendChild(itemName);

            // Item Description
            const itemDesc = document.createElement('div');
            itemDesc.classList.add('item-desc');
            itemDesc.innerHTML = `${sectionItems[subIter].desc}`;
            menuItem.appendChild(itemDesc);

            // Item Price
            const itemPrice = document.createElement('div');
            itemPrice.classList.add('item-price');
            itemPrice.innerHTML = `${sectionItems[subIter].price}`;
            menuItem.appendChild(itemPrice);

            mainContent.appendChild(menuItem);
        }
    }




    contentDiv.appendChild(mainContent);
}

export default Menu;