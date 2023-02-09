//kea-alt-del.dk/t7/api/products/1165
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

https: fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".productInfo .name").textContent = product.productdisplayname;
  document.querySelector(".productInfo .brand").textContent = product.brandname;
  document.querySelector(".productInfo .usage").textContent = product.usagetype;
  document.querySelector(".productInfo .price").textContent = product.price;
  document.querySelector(".image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
