class Products {
    handleSetLocationStorage(element, id) {
        let {pushProduct,products} = localStorageUtil.addProducts(id);
        if (pushProduct == true) {
            element.innerHTML = 'Удалить из корзины';
        } else {
            element.innerHTML = 'Добавить в корзину';
        }
        headerPage.render(products.length);
    };
    render() {
        let productsStore = localStorageUtil.getProducts();

        let htmlCatalog = ``;

        CATALOG.forEach(({id, name, price, img}) => {
            let activeText = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = 'Добавить в корзину';
            } else {
                activeText = 'Удалить из корзины';
            }
            htmlCatalog +=
            `<li class='products-element'>
                <span class = 'products-element__name'>${name}</span>
                <img class = 'products-element__img' src = ${img}>
                <span class = 'products-element__price'>Цена: ${price.toLocaleString()} ₽</span>
                <button class = 'products-element__button' onClick = 'productsPage.handleSetLocationStorage(this, "${id}")'>${activeText}</button>
            </li>`;
        });

        const html = `
            <ul class = 'products-container'>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}
const productsPage = new Products();
