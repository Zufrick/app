class LocalStorageUtil {
    constructor(){
        this.keyname = 'products';
    }
    getProducts() {
        let productsLocalStorage = localStorage.getItem(this.keyname);
        if (productsLocalStorage != null) {
            return JSON.parse(productsLocalStorage);
        };
        return[];
    };
    addProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        let index = products.indexOf(id);
        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1)
            pushProduct = false;
        }
        localStorage.setItem(this.keyname, JSON.stringify(products))
        
        return {
            pushProduct,
            products,
        }
    };
}
const localStorageUtil = new LocalStorageUtil();