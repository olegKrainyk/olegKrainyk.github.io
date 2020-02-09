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