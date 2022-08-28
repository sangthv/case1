const btn = document.querySelectorAll("button")
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            let btnItem = event.target;
            let product = btnItem.parentElement;
            let productImg = product.querySelector("img").src;
            let productName = product.querySelector("h4").innerText;
            let productPrice = product.querySelector("span").innerText;
            addcart(productPrice, productImg, productName)
        }
    })
})
function addcart(productPrice, productImg, productName) {
    let addtr = document.createElement("tr");
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let producctT = document.querySelectorAll(".title")
        if (producctT[i].innerHTML === productName) {
            alert("sản phẩm của bạn đã có trong giỏ hàng")
            return;
        }
    }
    let trcontent = ' <tr>\n' +
        '                <td style="display: flex; align-items: center"><img style="width: 70px" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td>\n' +
        '                <td><span class="prices">' + productPrice + '</span><sup>đ</sup></td>\n' +
        '                <td><input style="width: 40px; outline: none" type="number" value="1" min="1"></td>\n' +
        '                <td style="cursor: pointer"><span class="cart-delete">Xóa</span></td>\n' +
        '            </tr>'
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector("tbody");
    cartTable.append(addtr)
    carttotal();
    deleteCart()
}
// ...............tính tổng..............
function carttotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    let totalC = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        let productPrice = cartItem[i].querySelector(".prices").innerHTML
        let totalA = inputValue * productPrice * 1000;
        totalC = totalC + totalA

    }
    let cartTotalA = document.querySelector(".price-total span");
    let cartPrice = document.querySelector(".other img ")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}
// .....xóa..........
function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let producctT = document.querySelectorAll(".cart-delete")
        producctT[i].addEventListener("click", function (event) {
            let cartDelete = event.target;
            let cartItemR = cartDelete.parentElement.parentElement
            console.log(cartItemR)
            cartItemR.remove()
            carttotal()
        })
    }
}
// ..............thêm ô input..........
function inputchange() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            carttotal()
        })
    }
}
// .........icon.........
function showCart() {
    document.getElementById("cart").style.visibility = 'visible';
}
function blockCart() {
    document.getElementById("cart").style.visibility = 'hidden';
}