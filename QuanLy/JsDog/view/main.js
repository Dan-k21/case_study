localStorage.setItem('dogList', JSON.stringify([]));
let store = new Store();
let productInStore = store.findAllDog()

function showAllDog() {
    let str = ''
    for (let i = 0; i < productInStore.length; i++) {
        str += `
        <table>
            <tr>
                <th><img style="width: 100px; height: 100px" src="${productInStore[i].img}" alt=""></th>
            </tr>
            <tr>
                <th>${productInStore[i].name}</th>
            </tr>
            <tr>
                <th style="color: red; font-family: 'Ubuntu', sans-serif; font-size: 25px">${productInStore[i].price} VND</th>
            </tr>
            <tr>
                <th>
                    <button onclick="showFormEditDog(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/128/edit-icon.png" alt=""></button>
                    <button onclick="removeDog(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/128/delete-icon.png" alt=""></button>
                </th>
            </tr>
        </table>
        `
    }
    document.getElementById('products1').innerHTML = str
}

showAllDog()

function showFormAddDog() {
    document.getElementById('form1').innerHTML = `
    <center>
        <table style="border: 2px solid">
            <tr>
                <td>Ảnh:</td>
                <td><input type="text" id="img1"></td>
            </tr>
            <tr>
                <td>Tên:</td>
                <td><input type="text" id="name1"></td>
            </tr>
            <tr>
                <td>Giá:</td>
                <td><input type="text" id="price1"></td>
            </tr>
            <tr>
                <td><button onclick="addNewDog()">Thêm</button></td>
            </tr>
        </table>
    </center>
    `
}

function addNewDog() {
    let img = document.getElementById('img1').value;
    let name = document.getElementById('name1').value;
    let price = document.getElementById('price1').value;
    let newProduct = new Product(img, name, price)
    store.addDog(newProduct)
    showAllDog()
    document.getElementById('form1').innerHTML = ''
}

function removeDog(index) {
    let isConfirm = confirm('Bạn có muốn xóa không ?')
    if (isConfirm) {
        store.removeDog(index)
        showAllDog()
    }
}

function showFormEditDog(index) {
    document.getElementById('products1').innerHTML = `
    <center>
        <table style="border: 2px solid">
            <tr>
                <td>Ảnh:</td>
                <td><input type="text" id="img2"></td>
            </tr>
            <tr>
                <td>Tên:</td>
                <td><input type="text" id="name2"></td>
            </tr>
            <tr>
                <td>Giá:</td>
                <td><input type="text" id="price2"></td>
            </tr>
            <tr>
                <td><button onclick="editDog(${index})">Lưu</button></td>
            </tr>
        </table>
    </center>
    `
}

function editDog(index) {
    let img = document.getElementById('img2').value;
    let name = document.getElementById('name2').value;
    let price = document.getElementById('price2').value;
    let editProduct = new Product(img, name, price);
    store.editDog(index, editProduct);
    showAllDog()
    document.getElementById('form1').innerHTML = ''
}

function searchDog() {
    let value = document.getElementById('inputSearch1').value;
    let productOfStore = store.searchDog(value);
    let str = ''
    for (let i = 0; i < productOfStore.length; i++) {
            str = `
            <table>
                <tr>
                    <td><img src="${productOfStore[i].img}" alt=""></td>
                </tr>
                <tr>
                    <td>${productOfStore[i].name}</td>
                </tr>
                <tr>
                    <td style="color: red; font-family: 'Ubuntu', sans-serif; font-size: 25px">${productOfStore[i].price} VND</td>
                </tr>
                <tr>
                    <th>
                        <button onclick="showFormEditDog(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/128/edit-icon.png" alt=""></button>
                        <button onclick="removeDog(${i})"><img width="10" height="10" src="https://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/128/delete-icon.png" alt=""></button>
                    </th>
                </tr>
            </table>
            `
    }
    document.getElementById('products1').innerHTML = str
}