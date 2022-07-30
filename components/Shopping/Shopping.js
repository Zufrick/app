class Shopping {
    handleClear(){
        ROOT_SHOPPING.innerHTML = "";
    }
    render() {
        let productsStore = localStorageUtil.getProducts();
        let htmlCatalog = ``;
        let sumCatalog = 0;
        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog +=            
                    `
                    <tr>
                        <td class = "shopping-container__name">${name}</td>
                        <td class = "shopping-container__price">${price.toLocaleString()} ₽</td>
                    </tr>
                    `
                sumCatalog += price;
            }
        })
        const html = 
        `
            <div class = "shopping-container">
                <div class = "shopping__close" onclick = "shoppingPage.handleClear()"></div>
                <table class = "shopping-table">
                    ${htmlCatalog}
                    <tr>
                    <td class = "shopping-container__sum-name">Сумма:</td>
                    <td class = "shopping-container__sum-number">${sumCatalog.toLocaleString()} ₽</td>
                </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
};
const shoppingPage = new Shopping();
