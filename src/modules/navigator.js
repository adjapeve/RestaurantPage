const createNav = function () {
    const navigator=document.querySelector("nav");

    const btnContainer=document.createElement("ul")

    const homeButton=document.createElement("li");
    homeButton.setAttribute("id","homeBtn");
    homeButton.textContent="Home";

    const productsButton=document.createElement("li");
    productsButton.setAttribute("id","productsBtn");
    productsButton.textContent="Products";

    const aboutButton=document.createElement("li");
    aboutButton.setAttribute("id","aboutBtn");
    aboutButton.textContent="About Us";

    btnContainer.appendChild(homeButton);
    btnContainer.appendChild(productsButton);
    btnContainer.appendChild(aboutButton);

    navigator.appendChild(btnContainer);
};
export default createNav