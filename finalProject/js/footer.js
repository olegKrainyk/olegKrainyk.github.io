
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
                <li><a href="https://www.instagram.com/whyiamthere/" target="blank">Instagram</a></li>
                <li><a href="https://www.google.com.ua/maps/place/%D0%9B%D0%BE%D1%81-%D0%90%D0%BD%D0%B4%D0%B6%D0%B5%D0%BB%D0%B5%D1%81,+%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D1%8F,+%D0%A1%D0%A8%D0%90/@34.0201613,-118.6919256,10z/data=!3m1!4b1!4m5!3m4!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0526594!4d-118.2458496?hl=ru" target="blank">Location: LA, California, US</a></li>
                <li><a href="mailto:ballersshoes@gmail.com" target="blank">E-mail: ballersshoes@gmail.com</a></li>
            </ul>
        </div>

        <div class="footer_about">
            About Us
            <p>
                We are the best shop with basketball stuff located in Los-Angeles, CA.
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