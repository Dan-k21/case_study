class Store {
    dogList;
    constructor() {
        this.dogList = JSON.parse(localStorage.getItem('dogList'));
    }
    addDog(newProduct) {
        this.dogList.push(newProduct)
        localStorage.setItem('dogList', JSON.stringify(this.dogList))
    }

    findAllDog() {
        this.dogList = JSON.parse(localStorage.getItem('dogList'))
        return this.listProduct
    }

    removeDog(index) {
        this.dogList.splice(index, 1)
        localStorage.setItem('dogList', JSON.stringify(this.dogList))
    }

    editDog(index, newProduct) {
        this.dogList[index] = newProduct;
        localStorage.setItem('dogList', JSON.stringify(this.dogList))
    }

    searchDog(value){
        let productsSearch = [];
        for (let i = 0; i < this.dogList.length; i++) {
            if(this.dogList[i].name.toLowerCase().includes(value.toLowerCase())) {
                productsSearch.push(this.dogList[i]);
            }
        }
        return productsSearch;
    }
}