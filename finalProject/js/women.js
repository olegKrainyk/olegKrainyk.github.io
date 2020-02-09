let currentCatalog = CATALOG.filter(el => el.gender == "women");

//filter and show only women models
document.addEventListener("DOMContentLoaded", productsPage.render(currentCatalog));