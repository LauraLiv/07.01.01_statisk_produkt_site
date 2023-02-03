//kea-alt-del.dk/t7/api/products/1165

https: fetch("https://kea-alt-del.dk/t7/api/products/1165")
  .then((Response) => Response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".productInfo .name").textContent = product.productdisplayname;
  document.querySelector(".productInfo .brand").textContent = product.brandname;
  document.querySelector(".productInfo .usage").textContent = product.usagetype;
  document.querySelector(".productInfo .price").textContent = product.price;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
