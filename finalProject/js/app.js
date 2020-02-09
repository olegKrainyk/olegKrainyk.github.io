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
    footer.render();
};



//render products and filter methods for them
class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
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


    sortDef() {
        productsPage.filterMen();
    }
    sortExCh() {
        let sortedCatalog = CATALOG.filter(el => el.gender == "men").sort((a, b) => b.price - a.price);
        this.render(sortedCatalog);
    }

    sortChEx() {
        let sortedCatalog = CATALOG.filter(el => el.gender == "men").sort((a, b) => a.price - b.price);
        this.render(sortedCatalog);
    }


    filterMen() {
        let filteredcatalog = CATALOG.filter(el => el.gender == "men");
        this.render(filteredcatalog);
    }


    filterLifestyle() {
        let filteredcatalog = CATALOG.filter(el => el.type == "lifestyle");
        this.render(filteredcatalog);
    }
    filterBasketball() {
        let filteredcatalog = CATALOG.filter(el => el.type == "basketball");
        this.render(filteredcatalog);
    }
    filterNew() {
        let filteredcatalog = CATALOG.filter(el => el.new == "new");
        this.render(filteredcatalog);
    }


    //sorting for women
    filterWomen() {
        let filteredcatalog = CATALOG.filter(el => el.gender == "women");
        this.render(filteredcatalog);
    }
    sortWomenDef() {
        productsPage.filterWomen();
    }
    sortWomenExCh() {
        let sortedCatalog = CATALOG.filter(el => el.gender == "women").sort((a, b) => b.price - a.price);
        this.render(sortedCatalog);
    }
    sortWomenChEx() {
        let sortedCatalog = CATALOG.filter(el => el.gender == "women").sort((a, b) => a.price - b.price);
        this.render(sortedCatalog);
    }
    filterLifestyleWomen() {
        let filteredcatalog = CATALOG.filter(el => el.gender == "women").filter(el => el.type == "lifestyle-women");
        this.render(filteredcatalog);
    }
    filterBasketballWomen() {
        let filteredcatalog = CATALOG.filter(el => el.gender == "women").filter(el => el.type == "basketball-women");
        this.render(filteredcatalog);
    }


    //sorting for new releases
    sortNewDef() {
        productsPage.filterNew();
    }
    sortNewExCh() {
        let sortedCatalog = CATALOG.filter(el => el.new == "new").sort((a, b) => b.price - a.price);
        this.render(sortedCatalog);
    }
    sortNewChEx() {
        let sortedCatalog = CATALOG.filter(el => el.new == "new").sort((a, b) => a.price - b.price);
        this.render(sortedCatalog);
    }
    filterLifestyleNew() {
        let filteredcatalog = CATALOG.filter(el => el.new == "new").filter(el => el.type == "lifestyle-women");
        this.render(filteredcatalog);
    }
    filterBasketballNew() {
        let filteredcatalog = CATALOG.filter(el => el.new == "new").filter(el => el.type == "basketball-women");
        this.render(filteredcatalog);
    }



    render(catalog) {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        catalog.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeText = this.labelRemove;
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
                <li class='products-element'>
                    <a href="description.html#${id}">
                        <img class='products-element__img' src="${img}" />
                        <span class='products-element__name'>${name}</span>
                        <span class='products-element__price'>${price.toLocaleString()} $</span>
                    </a>
                    <button class='products-element__btn${activeClass}' onclick="productsPage.handleSetLocationStorage(this, '${id}');" title="Cart is on top">${activeText}</button>
                </li>
            `;
        });

        const html = `
            <ul class='products-container'>
                ${htmlCatalog}
            </ul>
        `;

        document.getElementById("goods").innerHTML = html;
    }
}

const productsPage = new Products();



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


//search with products names
$('#search-men').on('keyup', (e) => {
    let search = $(e.currentTarget).val();
    let result = CATALOG.filter(el => el.gender == "men").filter(el => {
        let name = el.name.toLowerCase();
        let lowerSearch = search.toLowerCase();
        return name.indexOf(lowerSearch) >= 0;
    });
    productsPage.render(result);
});
$('#search-women').on('keyup', (e) => {
    let search = $(e.currentTarget).val();
    let result = CATALOG.filter(el => el.gender == "women").filter(el => {
        let name = el.name.toLowerCase();
        let lowerSearch = search.toLowerCase();
        return name.indexOf(lowerSearch) >= 0;
    });
    productsPage.render(result);
});
$('#search-new').on('keyup', (e) => {
    let search = $(e.currentTarget).val();
    let result = CATALOG.filter(el => el.new == "new").filter(el => {
        let name = el.name.toLowerCase();
        let lowerSearch = search.toLowerCase();
        return name.indexOf(lowerSearch) >= 0;
    });
    productsPage.render(result);
});



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
