import firebase from './firebaseInit';

const loadProducts = function () {
    getProducts();
    function getProducts(){
        var database = firebase.database().ref().child("products");
        database.on('value', (snap) => {
            const products = JSON.parse(JSON.stringify(snap.val(),null,3));
            renderProducts(products);
          });
    }
    function renderProducts(products){
        const main=document.querySelector("main");
        while (main.firstChild) {
            main.removeChild(main.lastChild);
        }
    
        const productsDiv=document.createElement("div");
        productsDiv.setAttribute("id","products");
        productsDiv.classList.add("whiteBackground");
    
        const welcomeP=document.createElement("p");
        welcomeP.classList.add("welcomeHeaderDarker");
        welcomeP.textContent="Welcome";
    
        const h1=document.createElement("h1");
        h1.classList.add("blackH1");
        h1.textContent="PRODUCTS"
    
        const divider=document.createElement("hr");
    
        productsDiv.appendChild(welcomeP);
        productsDiv.appendChild(h1);
        productsDiv.appendChild(divider);
    
        for(let product of products){
            const productDiv=document.createElement("div");
            const productDivider=document.createElement("hr");
            for(let key in product){
                if(key=="_name"||key=="price"){
                    const h2=document.createElement("h2");
                    h2.classList.add("name_price");
                    h2.textContent=product[key];
                    productDiv.appendChild(h2);
                }else{
                const p=document.createElement("p");
                p.textContent=product[key];
                productDiv.appendChild(p);
                }
            }
            productsDiv.appendChild(productDiv);
            productsDiv.appendChild(productDivider);
        }               
        main.appendChild(productsDiv);

    }
}
export default loadProducts