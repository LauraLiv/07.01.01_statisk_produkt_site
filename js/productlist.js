fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("#productSmallTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector(".soldOut").classList.remove("hide");
  }

  if (product.discount) {
    let pris = (product.price / 100) * (100 - product.discount);
    let prisAfrund = Math.round(pris);
    copy.querySelector(".price").textContent = prisAfrund + " - " + " " + product.discount + "%";
  } else {
    copy.querySelector(".price").textContent = product.price;
  }

  copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);

  document.querySelector(".article").appendChild(copy);
}
