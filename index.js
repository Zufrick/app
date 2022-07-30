function render(){
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}
spinnerPage.render();
let CATALOG = [];
//"http://myjson.dit.upm.es/api/bins/guva"
fetch('server/catalog.json')
    .then(result => result.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleClear();
        render(); 
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    })
