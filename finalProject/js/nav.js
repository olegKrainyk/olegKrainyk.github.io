//render nav for html pages
class Nav {

    render() {

        const htmlNav = `
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="newrel.html">New Releases</a></li>
        <li><a href="men.html">Men</a></li>
        <li><a href="women.html">Women</a></li>
        </ul>
        `;
        document.querySelector('nav').innerHTML = htmlNav;
    }
}
const navigation = new Nav();

