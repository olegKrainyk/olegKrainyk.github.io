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

