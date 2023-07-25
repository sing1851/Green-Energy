// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/img1.jpg",
        "./img/img2.jpg",
        "./img/img3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

// Complete your resource-object that will store the dynamic content.

const resources = {
    content1: {
        headingContent: "Creative Sustainability",
        bodyText: "Cup packaging plays a significant role in promoting energy conservation and sustainability. By employing innovative designs and eco-friendly materials, cup packaging reduces the overall energy consumption during production, transportation, and disposal stages. Furthermore, the use of recyclable or biodegradable materials in cup packaging minimizes environmental impact and fosters a circular economy. Embracing these practices not only conserves vital resources but also contributes to a greener future, making cup packaging an essential step towards a more sustainable and environmentally responsible approach to consumer goods..",
        imgUrl: "./img/img1.jpg",
        imgAlt: "solution1"
    },
    content2: {
        headingContent: "Biophilic Buildings",
        bodyText: "Clean energy refers to renewable energy sources that have minimal or zero greenhouse gas emissions, making them environmentally friendly and sustainable. Examples of clean energy include solar power, wind energy, hydropower, and geothermal energy. Embracing clean energy solutions is crucial for mitigating climate change, reducing air pollution, and preserving natural resources. By transitioning from fossil fuels to clean energy alternatives, we can create a healthier planet and foster a more sustainable and prosperous future for generations to come..",
        imgUrl: "./img/img2.jpg",
        imgAlt: "solution2"
    },
    content3: {
        headingContent: "Solar Jute",
        bodyText: "Solar panels play a vital role in the production of jute, an eco-friendly and versatile natural fiber. By harnessing solar energy, jute manufacturing facilities can significantly reduce their reliance on conventional fossil fuels, thereby lowering greenhouse gas emissions and environmental impact. Solar power provides a clean and sustainable energy source for various stages of jute production, including processing, weaving, and drying. This renewable energy not only contributes to cost savings but also enhances the overall sustainability of the jute industry, making it an essential step towards a greener and more environmentally conscious approach to jute production.",
        imgUrl: "./img/img3.jpg",
        imgAlt: "solution3"
    }
};


// Get the reference to your HTML-container that will be dynamically loaded from the resource-object.
const contentContainer = document.querySelector(".content");

// The first button in a NODE LIST of buttons will initially have the id: active-button (this will uniquely style the active button - CSS rule).
const buttons = document.querySelectorAll(".buttons button");
buttons[0].id = "active-button";

// The first content from the resource-object will be loaded on the page load.
contentContainer.innerHTML = `
    <h2>${resources.content1.headingContent}</h2>
    <img src="${resources.content1.imgUrl}" alt="${resources.content1.imgAlt}">
    <p>${resources.content1.bodyText}</p>
`;

// Start your handleSelection function here.
// function handleSelection(event) {
//     console.log(event.target);

//     // Remove the id active-button from the element that contains it prior to the click-event.
//     for (const button of buttons) {
//         if (button.hasAttribute("id")) {
//             button.removeAttribute("id");
//         }
//     }

//     // Use the element-object method setAttribute() to set the id active-button to the currently clicked button.
//     event.target.setAttribute("id", "active-button");

//     // Use conditional and event-object to check which button is clicked and based on that, create HTML with the data inside the backticks and assign this content to your HTML-container.
//     const buttonClass = event.target.classList;
//     console.log(buttonClass);
//     if(buttonClass.contains('content1')) {
//         contentContainer.innerHTML = `
//         <h2>${resources[content1].headingContent}</h2>
//         <img src="${resources[content1].imgUrl}" alt="${resources[content1].imgAlt}">
//         <p>${resources[content1].bodyText}</p>
//     `;
//     }
//     elseif(buttonClass.contains('content2')) {
//         contentContainer.innerHTML = `
//         <h2>${resources[content2].headingContent}</h2>
//         <img src="${resources[content2].imgUrl}" alt="${resources[content2].imgAlt}">
//         <p>${resources[content2].bodyText}</p>
//     `;
//     }
//     elseif(buttonClass.contains('content3')) {
//         contentContainer.innerHTML = `
//         <h2>${resources[content3].headingContent}</h2>
//         <img src="${resources[content3].imgUrl}" alt="${resources[content3].imgAlt}">
//         <p>${resources[content3].bodyText}</p>
//     `;
//     }

// }

function handleSelection(event) {
    event.preventDefault();
    console.log(event.target.parentElement.classList);
    let currentButton = event.target.parentElement.classList;
    let content = document.querySelector('.content');
    if (document.querySelector('button#active-button')) {
        document.querySelector('button#active-button').removeAttribute('id');
    }
    if (currentButton.contains('content1')) {
        content.innerHTML = `
        <img src="${resources.content1.imgUrl}" alt="${resources.content1.imgAlt}">
        <h1>${resources.content1.headingContent}</h1>
        <p>${resources.content1.bodyText}</p>`;
        document.querySelector('button.content1').setAttribute('id', 'active-button');
    } else if (currentButton.contains('content2')) {
        content.innerHTML = `<img src="${resources.content2.imgUrl}" alt="${resources.content2.imgAlt}">
        <h1>${resources.content2.headingContent}</h1>
        <p>${resources.content2.bodyText}</p>`;
        document.querySelector('button.content2').setAttribute('id', 'active-button');
    } else if (currentButton.contains('content3')) {
        content.innerHTML = `
        <img src="${resources.content3.imgUrl}" alt="${resources.content3.imgAlt}">
        <h1>${resources.content3.headingContent}</h1>
        <p>${resources.content3.bodyText}</p>`;
        document.querySelector('button.content3').setAttribute('id', 'active-button');
    }
}


document.querySelector('.content').innerHTML =
    `<img src="${resources.content1.imgUrl}" alt="${resources.content1.imgAlt}">
<h1>${resources.content1.headingContent}</h1>
<p>${resources.content1.bodyText}</p>`;


// Register all buttons to the click event.
// call the function handlesSelection on click of each anchor tag inside the switch-buttons div
for (let btn of buttons) {
    btn.setAttribute('onClick', 'handleSelection(event)');
}