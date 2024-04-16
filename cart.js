let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'New Apple iPhone 12 Pro Max (256GB) - Gold',
        tag: 'newappleiphone12promax(256gb)-gold',
        price: 133990,
        inCart: 0
    },
    {
        name: 'OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)',
        tag: 'oneplus9r5g(lakeblue,12gbram,256gbstorage)',
        price: 43999,
        inCart: 0
    },
    {
        name: 'Samsung Galaxy F62 (Laser Grey, 8GB RAM, 128GB Storage)',
        tag: 'samsunggalaxyf62(lasergrey,8gbram,128gbstorage)',
        price: 25999,
        inCart: 0
    },
    {
        name: 'Rog Phone 5 (12GB RAM,256GB Storage)',
        tag: 'rogphone5(12gbram,256gbstorage)',
        price: 57999,
        inCart: 0
    },
    {
        name: 'Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps',
        tag: 'samsunggalaxywatchactive2(bluetooth,44mm)-black,aluminiumdial,siliconstraps',
        price: 16570,
        inCart: 0
    },
    {
        name: 'Emporio Armani Analog Blue Dial Mens Watch-AR11238',
        tag: 'emporioarmanianalogbluedialmenswatch-ar11238',
        price: 24495,
        inCart: 0
    },
    {
        name: 'HUAWEI Band 6 Fitness Tracker Smartwatch for Men Women, 1.47inch AMOLED ColorScreen',
        tag: 'huaweiband6fitnesstrackersmartwatchformenwomen,1.47inchamoledcolorscreen',
        price: 5999,
        inCart: 0
    },
    {
        name: 'Fossil FB-01 Analog Black Dial Mens Watch-FS5836',
        tag: 'fossilfb-01analogblackdialmenswatch-fs5836',
        price: 10995,
        inCart: 0
    },
    {
        name: 'Nike Mens Zoom Winflo 8 Running Shoe',
        tag: 'nikemenszoomwinflo8runningshoe',
        price: 8295,
        inCart: 0
    },
    {
        name: 'Adidas Element Refresh 3 M Running Sports Shoes for Men',
        tag: 'adidaselementrefresh3mrunningsportsshoesformen',
        price: 5054,
        inCart: 0
    },
    {
        name: 'one8 Prime Mid V3 Mens Shoes',
        tag: 'one8primemidv3mensshoes',
        price: 3599,
        inCart: 0
    },
    {
        name: 'PUMA x UNIVERSAL Rudolf Dassler Legacy Unisex Sneakers',
        tag: 'pumaxuniversalrudolfdasslerlegacyunisexsneakers',
        price: 10999,
        inCart: 0
    }
]


for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cartcount span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cartcount span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cartcount span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cartcount span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    // let productNumbers = localStorage.getItem('cartNumbers');
    // productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="productsinner">   
                <div class="product"> <i class="fa fa-trash-o"></i><img src="./images/${item.tag}.jpg" />
                    <span class="sm-hide">${item.name}</span>
                </div>
                <div class="price sm-hide">₹${item.price}.00</div>
                <div class="quantity">
                    <i class="decrease fa fa-chevron-circle-left"></i>
                        <span>${item.inCart}</span>
                        <i class="increase fa fa-chevron-circle-right"></i>   
                </div>
                <div class="total">₹${item.inCart * item.price}.00</div>
            </div>`;
        });

        productContainer.innerHTML += 
        `<div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Total Price</h4>
            <h4 style="padding-right: 5%;">
            :
            </h4>
            <h4 class="basketTotal">₹${cart}.00</h4>
        </div>`

        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product i');
    let placeorder = document.querySelector('.placeorder');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    let cartemptyheader = document.querySelector(".product-header")
    let cartemptytotal = document.querySelector(".products")
    let cartfooter = document.querySelector(".cartfooter")
    let cartfootershow = document.querySelector(".cartfootershow")

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
    if(deleteButtons.length==0) {
        placeorder.style.display = "none";
        cartemptyheader.style.display = "none";
        cartfooter.style.display = "none";
        cartemptytotal.style.display = "none";
        cartfootershow.style.display = "inline";
    } else {
        placeorder.style.display = "inline";
    }
}

function directcartbuynow() {
    window.location.href = "cartbuynow.html"
}

// This will let href # offset down the header

// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}
// This will capture hash changes while on the page
$(window).on("hashchange", function () {
    offsetAnchor();
});
// Let the page finish loading.
$(document).ready(function() {
    offsetAnchor();
});

onLoadCartNumbers();
displayCart();