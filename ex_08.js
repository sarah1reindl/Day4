document.addEventListener('DOMContentLoaded', function () {
    var productName = document.getElementById("productName");
    productName.textContent = "Samsung 22";
    var productDescription = document.getElementById("description");
    productDescription.innerHTML = `
        <p>Never miss that perfect shot again.</p>
        <p>Designed to revolutionise video and photography, with beyond cinematic 16K resolution.</p>
        <p>Get yours now!</p>`;
    var productImage = document.querySelector('img');
    productImage.src = 'Samsung22.png'; 
    var cartCount = 0;
    var cartInfo = document.createElement('p');
    cartInfo.innerHTML = `In cart: <span id="cartCount">0</span>`;
    document.querySelector('.content').appendChild(cartInfo);
    var cartButton = document.querySelector('.cart-btn');
    cartButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        cartCount++; 
        document.getElementById('cartCount').textContent = cartCount; 
    });
});
