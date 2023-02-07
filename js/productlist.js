https: fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => showProduct(data));
