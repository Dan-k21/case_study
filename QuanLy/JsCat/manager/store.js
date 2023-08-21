class Store {
    catList;
    constructor() {
        this.catList = JSON.parse(localStorage.getItem('catList'));
    }
    addCat(newProduct) {
        this.catList.push(newProduct)
        localStorage.setItem('catList', JSON.stringify(this.catList))
    }

    findAllCat() {
        this.catList = JSON.parse(localStorage.getItem('catList'))
        return this.listProduct
    }

    removeCat(index) {
        this.catList.splice(index, 1)
        localStorage.setItem('catList', JSON.stringify(this.catList))
    }

    editCat(index, newProduct) {
        this.catList[index] = newProduct;
        localStorage.setItem('catList', JSON.stringify(this.catList))
    }

    searchCat(value){
        let productsSearch = [];
        for (let i = 0; i < this.catList.length; i++) {
            if(this.catList[i].name.toLowerCase().includes(value.toLowerCase())) {
                productsSearch.push(this.catList[i]);
            }
        }
        return productsSearch;
    }
}