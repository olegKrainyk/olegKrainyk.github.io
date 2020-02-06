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

    $('nav ul li').click(function () {
        if (document.documentElement.clientWidth <= 760) {
            nav.classList.toggle('hidden-nav');
            btn.classList.toggle('nav-btn-active');
            body.classList.toggle('scroll-h');
        }
    });
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
                    <img class='products-element__img' src="${img}" />
                    <span class='products-element__name'>${name}</span>
                    <span class='products-element__price'>${price.toLocaleString()} $</span>
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
        <div class="cart" onclick="cartNum.handleOpenCartPopUp();">
        <span class="quantity">${count}</span>
        </div>
        `;

        document.getElementById("cart").innerHTML = html;
    }
}

const cartNum = new CartNum();

const productsStore = localStorageUtil.getProducts();
cartNum.render(productsStore.length);




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





//class for rendering confirmation form 
class Buy {

    handleClear() {
        document.getElementById('buypopup').innerHTML = '';
    }


    render() {
        cartPopUp.handleClear();

        const productsStore = localStorageUtil.getProducts();
        let sum = 0;

        CATALOG.forEach(({ id, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                sum += price;
            }


        });

        const htmlForm = `
            <div class="form__container">

            <span class="form__title">Confirm Your Order</span>
            
            <span class="form__close" onclick="buyPopup.handleClear()">&times;</span>
            <span class="form__sum">Total: ${sum} $</span>


        <form action="mailto:ballersshoes@gmail.com" method="POST" name="confirmedorder" class="form" id="form" onsubmit="addCart()">

            <div class="form__name_wrap">
                <label><span class="form__name_title">Your name(latin):</span><input type="text" name="name" class="form__name" placeholder="Name" required pattern="[A-Za-z]{3,16}"></label>
            </div>

            <div class="form__tel_wrap">
                <label><span class="form__tel_title">Phone number(only numbers):</span><input type="text" name="tel" class="form__tel" placeholder="1 111 111 1111" required pattern="[0-9]{9,15}"></label>
            </div>

            <div class="form__size_wrap">
                <label><span class="form__tel_title">Size:</span>
                <select name="size" class="form__size" required>
                    <option disabled>Chose Your Size US</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                </select></label>
            </div>

            <div class="form__btns">
                <input type="reset" value="Reset" class="form__btn form__reset">
                <input type="submit" value="Submit" class="form__btn form__submit">
            </div>
        </form>

            </div>
        `;

        document.getElementById('buypopup').innerHTML = htmlForm;
    }
}

const buyPopup = new Buy();



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



//render footer for html pages
class Footer {

    render() {
        const htmlFooter = `
                
        <div class="footer_content">
        <div class="footer_links">
            <ul>
                Links:
                <li><a href="index.html">Home</a></li>
                <li><a href="newrel.html">New Releases</a></li>
                <li><a href="men.html">Men</a></li>
                <li><a href="women.html">Women</a></li>
            </ul>
        </div>

        <div class="footer_contacts">
            <ul>
                Contacts:
                <li><a href="tel:+1-768-446-5533">Tel: +1 768 446 5533</a> </li>
                <li><a href="https://www.google.com.ua/maps/place/%D0%9B%D0%BE%D1%81-%D0%90%D0%BD%D0%B4%D0%B6%D0%B5%D0%BB%D0%B5%D1%81,+%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D1%8F,+%D0%A1%D0%A8%D0%90/@34.0201613,-118.6919256,10z/data=!3m1!4b1!4m5!3m4!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0526594!4d-118.2458496?hl=ru" target="blank">Location: LA, California, US</a></li>
                <li><a href="mailto:ballersshoes@gmail.com" target="blank">E-mail: ballersshoes@gmail.com</a></li>
            </ul>
        </div>

        <div class="footer_about">
            About Us
            <p>
                We are best shop with basketball stuff located in Los-Angeles, CA.
                <br>
                Hope you had cool experience using our site :)
            </p>
        </div>

    </div>

    <div class="footer_rights">Copyright &#9400; 2020 Ballers Shoes</div>
        `;

        
        document.querySelector('footer').innerHTML = htmlFooter;
    }
}

const footer = new Footer();