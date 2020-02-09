let currentCatalog = CATALOG.filter(el => el.gender == "men");

//filter and show only men models 
document.addEventListener("DOMContentLoaded", productsPage.render(currentCatalog));