import pageLoad from "./pageLoad";

const loadHome = function () {
    const main=document.querySelector("main");
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }

    const homeDiv=document.createElement("div");
    homeDiv.classList.add("homeClass");

    const welcomeP=document.createElement("p");
    welcomeP.classList.add("welcomeHeader");
    welcomeP.textContent="Welcome";

    const h1=document.createElement("h1");
    h1.classList.add("whiteH1");
    h1.textContent="HEALTHY BITES"

    const divider=document.createElement("hr");

    const contentP=document.createElement("p");
    contentP.textContent="And no, It's not just a bunch of veggies!!";

    homeDiv.appendChild(welcomeP);
    homeDiv.appendChild(h1);
    homeDiv.appendChild(divider);
    homeDiv.appendChild (contentP);

    main.appendChild(homeDiv);
};
export default loadHome