
let cartCount = 0;

function addToCart(value) {
    price.push(value)
    const TotalPrice = price.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    }, 0)
    console.log(TotalPrice)
}


function addToCart(price, itemId) {
    cartCount++;
    document.querySelector(".cart-display").textContent = `🛒 Cart (${cartCount})`;

    const element = document.getElementById(itemId)
    const elementPrice = element.dataset.price
    const elementName = element.dataset.name
    const elementImage = element.dataset.image

    const data = {
        elementImage, elementName, elementPrice
    }
    const cartOptions = JSON.parse(localStorage.getItem("cart"))

    if (!cartOptions) {
        localStorage.setItem("cart", JSON.stringify([data]))
    }else{
        const newElement = [...cartOptions, data]
        localStorage.setItem("cart", JSON.stringify(newElement))
    }
}

function navigate(site) {
    window.location.href = site
}


function addtoCartArray(object) {
    cartOptions.push(object)
}


