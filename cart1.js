
// let carts1 = document.querySelectorAll('.add-cart-info');




// for(let i=0; i< carts1.length; i++) {
//     carts1[i].addEventListener('click', () => {
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     });
// }

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if( productNumbers ) {
//         document.querySelector('.cartcount span').textContent = productNumbers;
//     }
// }

// function cartNumbers(product, action) {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);

//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if( action ) {
//         localStorage.setItem("cartNumbers", productNumbers - 1);
//         document.querySelector('.cartcount span').textContent = productNumbers - 1;
//         console.log("action running");
//     } else if( productNumbers ) {
//         localStorage.setItem("cartNumbers", productNumbers + 1);
//         document.querySelector('.cartcount span').textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem("cartNumbers", 1);
//         document.querySelector('.cartcount span').textContent = 1;
//     }
//     setItems(product);
// }

// function setItems(product) {
//     // let productNumbers = localStorage.getItem('cartNumbers');
//     // productNumbers = parseInt(productNumbers);
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null) {
//         let currentProduct = product.tag;
    
//         if( cartItems[currentProduct] == undefined ) {
//             cartItems = {
//                 ...cartItems,
//                 [currentProduct]: product
//             }
//         } 
//         cartItems[currentProduct].inCart += 1;

//     } else {
//         product.inCart = 1;
//         cartItems = { 
//             [product.tag]: product
//         };
//     }

//     localStorage.setItem('productsInCart', JSON.stringify(cartItems));
// }

// function totalCost( product, action ) {
//     let cart = localStorage.getItem("totalCost");

//     if( action) {
//         cart = parseInt(cart);

//         localStorage.setItem("totalCost", cart - product.price);
//     } else if(cart != null) {
        
//         cart = parseInt(cart);
//         localStorage.setItem("totalCost", cart + product.price);
    
//     } else {
//         localStorage.setItem("totalCost", product.price);
//     }
// }

// function displayCart() {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     let cart = localStorage.getItem("totalCost");
//     cart = parseInt(cart);

//     let productContainer = document.querySelector('.products');
    
//     if( cartItems && productContainer ) {
//         productContainer.innerHTML = '';
//         Object.values(cartItems).map( (item, index) => {
//             productContainer.innerHTML += 
//             `<div class="productsinner">   
//                 <div class="product"> <i class="fa fa-trash-o"></i><img src="./images/${item.tag}.jpg" />
//                     <span class="sm-hide">${item.name}</span>
//                 </div>
//                 <div class="price sm-hide">₹${item.price}.00</div>
//                 <div class="quantity">
//                     <i class="decrease fa fa-chevron-circle-left"></i>
//                         <span>${item.inCart}</span>
//                         <i class="increase fa fa-chevron-circle-right"></i>   
//                 </div>
//                 <div class="total">₹${item.inCart * item.price}.00</div>
//             </div>`;
//         });

//         productContainer.innerHTML += 
//         `<div class="basketTotalContainer">
//             <h4 class="basketTotalTitle">Total Price</h4>
//             <h4 style="padding-right: 5%;">
//             :
//             </h4>
//             <h4 class="basketTotal">₹${cart}.00</h4>
//         </div>`

//         deleteButtons();
//         manageQuantity();
//     }
// }

// function manageQuantity() {
//     let decreaseButtons = document.querySelectorAll('.decrease');
//     let increaseButtons = document.querySelectorAll('.increase');
//     let currentQuantity = 0;
//     let currentProduct = '';
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     for(let i=0; i < increaseButtons.length; i++) {
//         decreaseButtons[i].addEventListener('click', () => {
//             console.log(cartItems);
//             currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
//             console.log(currentQuantity);
//             currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
//             console.log(currentProduct);

//             if( cartItems[currentProduct].inCart > 1 ) {
//                 cartItems[currentProduct].inCart -= 1;
//                 cartNumbers(cartItems[currentProduct], "decrease");
//                 totalCost(cartItems[currentProduct], "decrease");
//                 localStorage.setItem('productsInCart', JSON.stringify(cartItems));
//                 displayCart();
//             }
//         });

//         increaseButtons[i].addEventListener('click', () => {
//             console.log(cartItems);
//             currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
//             console.log(currentQuantity);
//             currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
//             console.log(currentProduct);

//             cartItems[currentProduct].inCart += 1;
//             cartNumbers(cartItems[currentProduct]);
//             totalCost(cartItems[currentProduct]);
//             localStorage.setItem('productsInCart', JSON.stringify(cartItems));
//             displayCart();
//         });
//     }
// }

// function deleteButtons() {
//     let deleteButtons = document.querySelectorAll('.product i');
//     let placeorder = document.querySelector('.placeorder');
//     let productNumbers = localStorage.getItem('cartNumbers');
//     let cartCost = localStorage.getItem("totalCost");
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     let productName;
//     console.log(cartItems);

//     let cartemptyheader = document.querySelector(".product-header")
//     let cartemptytotal = document.querySelector(".products")
//     let cartfooter = document.querySelector(".cartfooter")
//     let cartfootershow = document.querySelector(".cartfootershow")

//     for(let i=0; i < deleteButtons.length; i++) {
//         deleteButtons[i].addEventListener('click', () => {
//             productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
//             localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
//             localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

//             delete cartItems[productName];
//             localStorage.setItem('productsInCart', JSON.stringify(cartItems));

//             displayCart();
//             onLoadCartNumbers();
//         })
//     }
//     if(deleteButtons.length==0) {
//         placeorder.style.display = "none";
//         cartemptyheader.style.display = "none";
//         cartfooter.style.display = "none";
//         cartemptytotal.style.display = "none";
//         cartfootershow.style.display = "inline";
//     } else {
//         placeorder.style.display = "inline";
//     }
// }


// function directcartbuynow() {
//     window.location.href = "cartbuynow.html"
// }


// onLoadCartNumbers();
// displayCart();