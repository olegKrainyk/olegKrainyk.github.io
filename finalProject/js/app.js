//responsive menu + render(footer, nav)
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




//class for rendering cart popUp
class CartPopUp {

    handleClear() {
        document.getElementById("cartpopup").innerHTML = '';
    }

    render() {

        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sum = 0;

        CATALOG.forEach(({ id, name, price, img }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td><img class="cartpopup__img" src="${img}" /></td>
                    <td class="cartpopup__name">${name}</td>
                    <td  class="cartpopup__price">${price.toLocaleString()} $</td>
                    <td  class="cartpopup__remove" onclick="productsPage.handleSetLocationStorage(this, '${id}'), productsPage.render(CATALOG), cartPopUp.render();">&times;</td>
                </tr>
                `;
                sum += price;
            }
        });

        const html = `
        <div class="cratpopup__container">
            <span class="cartpopup__close" onclick="cartPopUp.handleClear()">&times;</span>
            <table>
                ${htmlCatalog}
                <tr>
                <td class="cartpopup__invisible"></td>
                <td class="cartpopup__name cartpopup__sum"> Together </td>
                <td  class="cartpopup__price cartpopup__sum">${sum.toLocaleString()} $</td>
                </tr>
            </table>
            <button id="confirmorder" class="confirm_order" onclick="formRender();">Confirm Order</button>
        </div>
        `;

        document.getElementById("cartpopup").innerHTML = html;
    }
}

const cartPopUp = new CartPopUp();


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
