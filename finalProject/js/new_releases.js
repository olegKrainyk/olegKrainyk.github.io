let currentCatalog = CATALOG.filter(el => el.new == "new");

//filter and show only new models for New Releases page
document.addEventListener("DOMContentLoaded", productsPage.render(currentCatalog));

