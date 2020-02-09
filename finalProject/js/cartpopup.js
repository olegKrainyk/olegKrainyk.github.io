
//for rendering cart number of products 
class CartNum {

    handleOpenCartPopUp() {
        cartPopUp.render();
    }

    render(count) {
        const html = `
        <div class="cart-wrap">
        <div class="cart" onclick="cartNum.handleOpenCartPopUp();">
        <span class="quantity">${count}</span>
        </div>
        </div>
        `;

        document.getElementById("cart").innerHTML = html;
    }
}

const cartNum = new CartNum();

const productsStore = localStorageUtil.getProducts();
cartNum.render(productsStore.length);

