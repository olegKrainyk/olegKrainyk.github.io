
//responsive menu
window.onload = function () {
    let btn = document.querySelector('.mob-btn');
    let nav = document.querySelector('nav');
    let body = document.querySelector('body');

    btn.addEventListener('click', function () {
        if (document.documentElement.clientWidth <= 760) {
            nav.classList.toggle('hidden-nav');
            btn.classList.toggle('nav-btn-active');
            body.classList.toggle('scroll-h');
        }
    });

    $('nav ul li a').click(function () {
        if (document.documentElement.clientWidth <= 760) {
            nav.classList.toggle('hidden-nav');
            btn.classList.toggle('nav-btn-active');
            body.classList.toggle('scroll-h');
        }
    });
    navigation.render();
    descr.render();
    footer.render();
};



//render product block with hash of the page
class Description {
    constructor() {
        this.classNameActive = 'product-descr__btn_active';
        this.labelAdd = 'Add to cart';
        this.labelRemove = 'Remove';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        cartNum.render(products.length);
    }


    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlDescription = '';
        let hash = '';
        hash += `${window.location.hash.substring(1)}`;
        CATALOG.filter(el => el.id == hash).forEach(({ id, name, price, img }) => {

            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeText = this.labelRemove;
                activeClass = ' ' + this.classNameActive;
            }

            htmlDescription += `
                <div class='product-descr__container content'>
                    <img class='product-descr__img' src="${img}" />
                        <div class='product-descr__info'>
                                <span class='product-descr__name'>${name}</span>
                                <span class='product-descr__price'>${price.toLocaleString()} $</span>
                                <button class='product-descr__btn${activeClass}' onclick="descr.handleSetLocationStorage(this, '${id}');">${activeText}</button>
                        </div>
                </div>
                `;
                document.title =`${name}`;
            document.getElementById("descr").innerHTML = htmlDescription;
        });
    }
}
const descr = new Description;



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




//check if cart has products for buypopup
function formRender() {
    const productsStore = localStorageUtil.getProducts();

    if (productsStore.length == 0) {
        alert('Oops! Your Cart Is Empty!');
    } else {
        buyPopup.render();
    }
}



//add to form information about the order(id of products and sum)
function addCart() {
    let inputcart = document.createElement('input');
    let inputsum = document.createElement('input');
    const productsStore = localStorageUtil.getProducts();
    let sum = 0;
    let cartProducts = '';

    CATALOG.forEach(({ id, price }) => {
        if (productsStore.indexOf(id) !== -1) {
            cartProducts += `${id}----`;
            sum += price;
            return sum;
        }
    });

    inputcart.type = 'hidden';
    inputcart.name = 'Cart_items';
    inputcart.value = cartProducts;
    document.getElementById('form').appendChild(inputcart);

    inputsum.type = 'hidden';
    inputsum.name = 'Cart_Sum';
    inputsum.value = sum;
    document.getElementById('form').appendChild(inputsum);
}