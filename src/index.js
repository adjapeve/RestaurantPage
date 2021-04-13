import pageLoad from './modules/pageLoad';
import createNav from './modules/navigator';
import createFooter from './modules/footer';
import loadHome from './modules/home';
import loadProducts from './modules/products';
import loadAbout from './modules/about';

const init=(function () {
    pageLoad();
    createNav();
    createFooter();
    loadHome();
    addNavEvents();
    function addNavEvents() {
        const homeBtn = document.querySelector("#homeBtn");
        const productsBtn = document.querySelector("#productsBtn");
        const aboutBtn = document.querySelector("#aboutBtn");
      
        homeBtn.addEventListener('click', loadHome);
        productsBtn.addEventListener('click', loadProducts);
        aboutBtn.addEventListener('click', loadAbout);
      }
})();