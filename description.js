const detail = document.querySelector(".details");
const product = JSON.parse(localStorage.getItem('block'));

detail.innerHTML = `<div class="box">
<img src=${product.image}>
<p>Name: ${product.name}</p>
<p>Price: ${product.price}</p>
<p>Description: ${product.description}</p>
</div>`;