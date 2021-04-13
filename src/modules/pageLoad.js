const pageLoad = function () {
    const wrapper=document.querySelector("#content");

    const menu = document.createElement("nav");
    const content=document.createElement("main");
    const footer=document.createElement("footer");

    wrapper.appendChild(menu);
    wrapper.appendChild(content);
    wrapper.appendChild(footer);
};
export default pageLoad