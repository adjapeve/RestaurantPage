const loadAbout = function () {
    const main=document.querySelector("main");
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
    const footerDiv=document.createElement("div");
    footerDiv.classList.add("whiteBackground");

    const welcomeP=document.createElement("p");
    welcomeP.classList.add("welcomeHeaderDarker");
    welcomeP.textContent="Welcome";

    const h1=document.createElement("h1");
    h1.classList.add("blackH1");
    h1.textContent="ABOUT US"

    const divider=document.createElement("hr");

    const p=document.createElement("p");
    p.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    footerDiv.appendChild(welcomeP);
    footerDiv.appendChild(h1);
    footerDiv.appendChild(divider);
    footerDiv.appendChild(p);

    main.appendChild(footerDiv);
};
export default loadAbout