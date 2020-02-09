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
    descr.render();
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
                    <td  class="cartpopup__remove" onclick="descr.handleSetLocationStorage(this, '${id}'), descr.render(), cartPopUp.render();">&times;</td>
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

