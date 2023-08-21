localStorage.setItem('catList', JSON.stringify([]));
let store = new Store();
let productInStoreCat = store.findAllCat()

function showAllCat() {
    let str = ''
    for (let i = 0; i < productInStoreCat.length; i++) {
        str += `
        <table>
            <tr>
                <th><img style="width: 100px; height: 100px" src="${productInStoreCat[i].img}"></th>
            </tr>
            <tr>
                <th>${productInStoreCat[i].name}</th>
            </tr>
            <tr>
                <th style="color: red; font-family: 'Ubuntu', sans-serif; font-size: 25px">${productInStoreCat[i].price} VND</th>
            </tr>
            <tr>
                <th>
                    <button onclick="showFormEditCat(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/128/edit-icon.png"></button>
                    <button onclick="removeCat(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/128/delete-icon.png"></button>
                </th>
            </tr>
        </table>
        `
    }
    document.getElementById('products2').innerHTML = str
}

showAllCat()

function showFormAddCat() {
    document.getElementById('form2').innerHTML = `
    <center>
        <table style="border: 2px solid">
            <tr>
                <td>Ảnh:</td>
                <td><input type="text" id="img3"></td>
            </tr>
            <tr>
                <td>Tên:</td>
                <td><input type="text" id="name3"></td>
            </tr>
            <tr>
                <td>Giá:</td>
                <td><input type="text" id="price3"></td>
            </tr>
            <tr>
                <td><button onclick="addNewCat()">Thêm</button></td>
            </tr>
        </table>
    </center>
    `
}

function addNewCat() {
    let img = document.getElementById('img3').value;
    let name = document.getElementById('name3').value;
    let price = document.getElementById('price3').value;
    let newProduct = new Product(img, name, price)
    store.addCat(newProduct)
    showAllCat()
    document.getElementById('form2').innerHTML = ''
}

function removeCat(index) {
    let isConfirm = confirm('Bạn có muốn xóa không ?')
    if (isConfirm) {
        store.removeCat(index)
        showAllCat()
    }
}

function showFormEditCat(index) {
    document.getElementById('products2').innerHTML = `
    <center>
        <table style="border: 2px solid">
            <tr>
                <td>Ảnh:</td>
                <td><input type="text" id="img4"></td>
            </tr>
            <tr>
                <td>Tên:</td>
                <td><input type="text" id="name4"></td>
            </tr>
            <tr>
                <td>Giá:</td>
                <td><input type="text" id="price4"></td>
            </tr>
            <tr>
                <td><button onclick="editCat(${index})">Lưu</button></td>
            </tr>
        </table>
    </center>
    `
}

function editCat(index) {
    let img = document.getElementById('img4').value;
    let name = document.getElementById('name4').value;
    let price = document.getElementById('price4').value;
    let editProduct = new Product(img, name, price);
    store.editCat(index, editProduct);
    showAllCat()
    document.getElementById('form2').innerHTML = ''
}

function searchCat() {
    let value = document.getElementById('inputSearch2').value;
    let productOfStore = store.searchCat(value);
    let str = ''
    for (let i = 0; i < productOfStore.length; i++) {
        str = `
            <table>
                <tr>
                    <td><img src="${productOfStore[i].img}"></td>
                </tr>
                <tr>
                    <td>${productOfStore[i].name}</td>
                </tr>
                <tr>
                    <td style="color: red; font-family: 'Ubuntu', sans-serif; font-size: 25px">${productOfStore[i].price} VND</td>
                </tr>
                <tr>
                    <th>
                        <button onclick="showFormEditCat(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/128/edit-icon.png"></button>
                        <button onclick="removeCat(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/128/delete-icon.png"></button>
                    </th>
                </tr>
            </table>
            `
    }
    document.getElementById('products2').innerHTML = str
}