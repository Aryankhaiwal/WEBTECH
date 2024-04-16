

// let carts2 = document.querySelectorAll('.buy-now-info');



// for(let i=0; i< carts2.length; i++) {
//     carts2[i].addEventListener('click', () => {
//         cartNumbersBuy(products[i]);
//         totalCostBuy(products[i]);
//     });
// }

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if( productNumbers ) {
//         document.querySelector('.cartcount span').textContent = productNumbers;
//     }
// }

// function cartNumbersBuy(product, action) {
//     let productNumbers = localStorage.getItem('cartNumbersBuy');
//     productNumbers = parseInt(productNumbers);

//     let cartItemsBuy = localStorage.getItem('productsInCartBuy');
//     cartItemsBuy = JSON.parse(cartItemsBuy);

//     if( action ) {
//         localStorage.setItem("cartNumbersBuy", productNumbers - 1);
//         console.log("action running");
//     } else if( productNumbers ) {
//         localStorage.setItem("cartNumbersBuy", productNumbers + 1);
//     } else {
//         localStorage.setItem("cartNumbersBuy", 1);
//     }
//     setItemsBuy(product);
// }

// function setItemsBuy(product) {
//   // let productNumbers = localStorage.getItem('cartNumbers');
//   // productNumbers = parseInt(productNumbers);
//   let cartItemsBuy = localStorage.getItem('productsInCartBuy');
//   cartItemsBuy = JSON.parse(cartItemsBuy);

//   if(cartItemsBuy != null) {
//     let currentProduct = product.tag;
    
//         if( cartItemsBuy[currentProduct] == undefined ) {
//             cartItemsBuy = {
//                 ...cartItemsBuy,
//                 [currentProduct]: product
//             }
//         } 
//         cartItemsBuy[currentProduct].inCart += 1;
//   } else {
//       product.inCart = 1;
//       cartItemsBuy = { 
//           [product.tag]: product
//       };
//   }

//   localStorage.setItem('productsInCartBuy', JSON.stringify(cartItemsBuy));
// }

// function totalCostBuy( product, action ) {
//     let cart = localStorage.getItem("totalCostBuy");

//     if( action) {
//         cart = parseInt(cart);

//         localStorage.setItem("totalCostBuy", cart - product.price);
//     } else if(cart != null) {
        
//         cart = parseInt(cart);
//         localStorage.setItem("totalCostBuy", cart + product.price);
    
//     } else {
//         localStorage.setItem("totalCostBuy", product.price);
//     }
// }

// function onClickFunc(x) {
//     localStorage.removeItem('productsInCartBuy');
//     localStorage.removeItem('totalCostBuy');
//     localStorage.removeItem('cartNumbersBuy');
//     localStorage.removeItem('name');
//     localStorage.removeItem('phoneNo');
//     localStorage.removeItem('email');
//     localStorage.removeItem('pincode');
//     localStorage.removeItem('locality');
//     localStorage.removeItem('city');
//     localStorage.removeItem('state');
//     localStorage.removeItem('address');
// }

// /*document.getElementById("save").onclick=(e)=>{

//     let name=document.getElementById("name").value
//     localStorage.setItem("name",name)
//     let item=document.getElementById("phoneno").value
//     localStorage.setItem("phoneNo",item)
//     let bg1 = document.querySelector(".col-2")
//     bg1.style.display = "none";
//     e.preventDefault()

// }*/

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const phoneNo = document.getElementById('phoneno');
// const email = document.getElementById('email');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const nameValue = name.value.trim();
// 	const phonenoValue = phoneno.value.trim();
//     const emailValue = email.value.trim();
// 	var abcd = 0;

// 	if(nameValue === '') {
// 		setErrorFor(name, 'Name cannot be blank');
// 	} else {
// 		setSuccessFor(name);
// 		abcd++;
// 	}
	
// 	if(phonenoValue === '') {
// 		setErrorFor(phoneno, 'Phone No. cannot be blank');
// 	}else if(phonenoValue.length < '10') {
// 		setErrorFor(phoneno, 'Phone No. must be 10 characters');
// 	}
//      else {
// 		setSuccessFor(phoneno);
// 		abcd++;
// 	}

//     if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Enter a valid Email');
// 	} else {
// 		setSuccessFor(email);
// 		abcd++;
// 	}
// 	if (abcd == "3") {
        

//         let name=document.getElementById("name").value
//         localStorage.setItem("name",name)
//         let phoneno=document.getElementById("phoneno").value
//         localStorage.setItem("phoneNo",phoneno)
//         let email=document.getElementById("email").value
//         localStorage.setItem("email",email)
//         let bg1 = document.querySelector(".col-2")
//         bg1.style.display = "none";
//         let bg2 = document.querySelector(".col2text")
//         bg2.style.display = "none";
//         let afterhide = document.querySelector(".AfterDetails")
//         afterhide.style.display = "inline";
//         let da = document.querySelector(".row1")
//         da.style.display = "inline";
        
//         let AfterDetails = document.querySelector('.AfterDetails')
//         let name1 = localStorage.getItem("name");
//         let phoneno1 = localStorage.getItem("phoneNo");
//         let email1 = localStorage.getItem("email");
//         if (AfterDetails) {
//             AfterDetails.innerHTML += 
//             `<div style="display: flex;">
//                 <p>${name1}</p>
//                 <span>+91 ${phoneno1}</span>
//                 <span>${email1}</span>
//             </div>
//             <button id="changedetails" onClick="abcde()">Change</button>`;
//         }
//         paymenthide();
        
// 	}
//     displayCartBuy();
// }

// function abcde(e){ 
//     let bg1 = document.querySelector(".col-2")
//     bg1.style.display = "inline";
//     let bg2 = document.querySelector(".col2text")
//     bg2.style.display = "inline";
//     let da = document.querySelector(".row1")
//     da.style.display = "none";
//     const AfterDetails = document.querySelector('.AfterDetails')
//     if (AfterDetails) {
//         while (AfterDetails.firstChild) {
//             AfterDetails.removeChild(AfterDetails.firstChild);
//         }
//     }
//     paymenthide();
// }

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }

// const form2 = document.getElementById('form2');
// const pincode = document.getElementById('pincode');
// const locality = document.getElementById('locality');
// const city = document.getElementById('city');
// const state = document.getElementById('state');
// const address = document.getElementById('address');

// form2.addEventListener('submit', e => {
// 	e.preventDefault();
// 	checkInputs1();
// });

// function checkInputs1() {
// 	// trim to remove the whitespaces
// 	const pincodeValue = pincode.value.trim();
// 	const localityValue = locality.value.trim();
//     const cityValue = city.value.trim();
//     const stateValue = state.value.trim();
//     const addressValue = address.value.trim();
// 	var ab = 0;

// 	if(pincodeValue === '') {
// 		setErrorFor(pincode, 'Pincode cannot be blank');
// 	} else {
// 		setSuccessFor(pincode);
// 		ab++;
// 	}
	
// 	if(localityValue === '') {
// 		setErrorFor(locality, 'Locality cannot be blank');
// 	}else {
// 		setSuccessFor(locality);
// 		ab++;
// 	}

//     if(cityValue === '') {
// 		setErrorFor(city, 'City cannot be blank');
// 	}else {
// 		setSuccessFor(city);
// 		ab++;
// 	}

//     if(stateValue === '') {
// 		setErrorFor(state, 'state cannot be blank');
// 	}else {
// 		setSuccessFor(state);
// 		ab++;
// 	}

//     if(addressValue === '') {
// 		setErrorFor(address, 'Address cannot be blank');
// 	}else {
// 		setSuccessFor(address);
// 		ab++;
// 	}

// 	if (ab == "5") {
        

//         let pincode=document.getElementById("pincode").value
//         localStorage.setItem("pincode",pincode)
//         let locality=document.getElementById("locality").value
//         localStorage.setItem("locality",locality)
//         let city=document.getElementById("city").value
//         localStorage.setItem("city",city)
//         let state=document.getElementById("state").value
//         localStorage.setItem("state",state)
//         let address=document.getElementById("address").value
//         localStorage.setItem("address",address)
//         let bg11 = document.querySelector("#form2")
//         bg11.style.display = "none";
//         let afterhide1 = document.querySelector(".AfterDetails1")
//         afterhide1.style.display = "flex";
//         let os = document.querySelector(".row2")
//         os.style.display = "inline";
        
//         let AfterDetails1 = document.querySelector('.AfterDetails1')
//         let pincode1 = localStorage.getItem("pincode");
//         let locality1 = localStorage.getItem("locality");
//         let city1 = localStorage.getItem("city");
//         let state1 = localStorage.getItem("state");
//         let address1 = localStorage.getItem("address");
//         if (AfterDetails1) {
//             AfterDetails1.innerHTML += 
//             `
//             <span>${address1} , ${locality1} , ${city1} , ${state1} - ${pincode1}</span>
//             <button id="changedetails1" onClick="abcdef()">Change</button>`;
//         }
//         paymenthide();
        
// 	}
// }

// function abcdef(e){ 
//     let bg11 = document.querySelector("#form2")
//     bg11.style.display = "flex";
//     let os = document.querySelector(".row2")
//     os.style.display = "none";
//     const AfterDetails1 = document.querySelector('.AfterDetails1')
//     if (AfterDetails1) {
//         while (AfterDetails1.firstChild) {
//             AfterDetails1.removeChild(AfterDetails1.firstChild);
//         }
//     }
//     paymenthide();
// }


// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }


// function displayCartBuy() {
//     let cartItemsBuy = localStorage.getItem('productsInCartBuy');
//     cartItemsBuy = JSON.parse(cartItemsBuy);

//     let cart = localStorage.getItem("totalCostBuy");
//     cart = parseInt(cart);

//     let email1 = localStorage.getItem("email");

//     let productContainer = document.querySelector('.productsbuynow');

//     let pricecontainer = document.querySelector('.pricecontainer')

//     let productNumbers = localStorage.getItem('cartNumbersBuy');
//     productNumbers = parseInt(productNumbers);
    
//     if( cartItemsBuy && productContainer ) {
//         productContainer.innerHTML = '';
//         Object.values(cartItemsBuy).map( (item, index) => {
//             productContainer.innerHTML += 
//             `<div class="product"> <i class="fa fa-trash-o"></i><img src="./images/${item.tag}.jpg" />
//                 <span class="sm-hide">${item.name}</span>
//             </div>
//             <div class="price sm-hide">₹${item.price}.00</div>
//             <div class="quantity">
//                 <i class="decrease fa fa-chevron-circle-left"></i>
//                     <span>${item.inCart}</span>
//                     <i class="increase fa fa-chevron-circle-right"></i>   
//             </div>
//             <div class="total">₹${item.inCart * item.price}.00</div>
//             <button id="save2" onClick="ordersummaryhide()">Continue</button>`;
//         });

//         productContainer.innerHTML += `
//             <div class="basketcontainer">
//                 <div class="basketTotalContainer">
//                     <h4 class="basketTotalTitle">Total Price</h4>
//                     <h4 style="padding-right: 5%;">
//                         :
//                     </h4>
//                     <h4 class="basketTotal">₹${cart}.00</h4>
//                 </div>
//                 <div style="padding: 10px; margin: auto; display: flex">
//                     <span>An email confirmation will be sent to &nbsp;</span>
//                     <p style="font-weight:bolder;">${email1}</p>
//                 </div>
//             </div>`

//         pricecontainer.innerHTML = `
//             <div style="border-bottom: 1px solid lightgrey">
//                 <h4>PRICE DETAILS</h4>
//             </div>
//             <div>
//                 <p>Price (${productNumbers} items)</p>
//                 <span>₹${cart}</span>
//             </div>
//             <div>
//                 <p>Delivery Charges</p>
//                 <span style="color: #13df68">FREE</span>
//             </div>
//             <div class="amountpayable">
//                 <h5>Amount Payable</h5>
//                 <h5>₹${cart}</h5>
//             </div>`;

//         manageQuantity();
//         deleteButtons();
//     }
// }

// function ordersummaryhide() {
//     let os1 = document.querySelector(".products-container")
//     os1.style.display = "none";
//     let po = document.querySelector(".row3")
//     po.style.display = "inline";

//     let AfterDetails2 = document.querySelector('.AfterDetails2')
//     let productNumbers = localStorage.getItem('cartNumbersBuy');
//     productNumbers = parseInt(productNumbers);

//     if (AfterDetails2) {
//         AfterDetails2.innerHTML += 
//         `
//         <span>${productNumbers} Items</span>
//         <button id="changedetails2" onClick="ordersummarychange()">Change</button>`;
        
//     }
//     paymenthide();

// }

// function displayCartBuy1() {
//     let cartItemsBuy = localStorage.getItem('productsInCartBuy');
//     cartItemsBuy = JSON.parse(cartItemsBuy);

//     let cart = localStorage.getItem("totalCostBuy");
//     cart = parseInt(cart);

//     let productContainer = document.querySelector('.productsbuynow');

//     let pricecontainer = document.querySelector('.pricecontainer')

//     let productNumbers = localStorage.getItem('cartNumbersBuy');
//     productNumbers = parseInt(productNumbers);
    
//     if( cartItemsBuy && productContainer ) {
        
//         pricecontainer.innerHTML = `
//             <div style="border-bottom: 1px solid lightgrey">
//                 <h4>PRICE DETAILS</h4>
//             </div>
//             <div>
//                 <p>Price (${productNumbers} items)</p>
//                 <span>₹${cart}</span>
//             </div>
//             <div>
//                 <p>Delivery Charges</p>
//                 <span style="color: #13df68">FREE</span>
//             </div>
//             <div class="amountpayable">
//                 <h5>Amount Payable</h5>
//                 <h5>₹${cart}</h5>
//             </div>`;
//     }else{
//         pricecontainer.innerHTML = `
//         <div style="border-bottom: 1px solid lightgrey">
//             <h4>PRICE DETAILS</h4>
//         </div>
//         <div>
//             <p>Price (0 items)</p>
//             <span>₹0</span>
//         </div>
//         <div>
//             <p>Delivery Charges</p>
//             <span style="color: #13df68">FREE</span>
//         </div>
//         <div class="amountpayable">
//             <h5>Amount Payable</h5>
//             <h5>₹0</h5>
//         </div>`;
//     }
// }

// function ordersummarychange(e){ 
//     let os1 = document.querySelector(".products-container")
//     os1.style.display = "flex";
//     let po = document.querySelector(".row3")
//     po.style.display = "none";
//     const AfterDetails2 = document.querySelector('.AfterDetails2')
//     if (AfterDetails2) {
//         while (AfterDetails2.firstChild) {
//             AfterDetails2.removeChild(AfterDetails2.firstChild);
//         }
//     }
//     paymenthide();
// }

// function manageQuantity() {
//     let decreaseButtons = document.querySelectorAll('.decrease');
//     let increaseButtons = document.querySelectorAll('.increase');
//     let currentQuantity = 0;
//     let currentProduct = '';
//     let cartItemsBuy = localStorage.getItem('productsInCartBuy');
//     cartItemsBuy = JSON.parse(cartItemsBuy);

//     for(let i=0; i < increaseButtons.length; i++) {
//         decreaseButtons[i].addEventListener('click', () => {
//             console.log(cartItemsBuy);
//             currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
//             console.log(currentQuantity);
//             currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
//             console.log(currentProduct);

//             if( cartItemsBuy[currentProduct].inCart > 1 ) {
//                 cartItemsBuy[currentProduct].inCart -= 1;
//                 cartNumbersBuy(cartItemsBuy[currentProduct], "decrease");
//                 totalCostBuy(cartItemsBuy[currentProduct], "decrease");
//                 localStorage.setItem('productsInCartBuy', JSON.stringify(cartItemsBuy));
//                 displayCartBuy();
//             }
//         });

//         increaseButtons[i].addEventListener('click', () => {
//             console.log(cartItemsBuy);
//             currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
//             console.log(currentQuantity);
//             currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
//             console.log(currentProduct);

//             cartItemsBuy[currentProduct].inCart += 1;
//             cartNumbersBuy(cartItemsBuy[currentProduct]);
//             totalCostBuy(cartItemsBuy[currentProduct]);
//             localStorage.setItem('productsInCartBuy', JSON.stringify(cartItemsBuy));
//             displayCartBuy();
//         });
//     }
// }
// function deleteButtons() {
//     let deleteButtons = document.querySelectorAll('.product i');
//     let productNumbers = localStorage.getItem('cartNumbersBuy');
//     let cartCost = localStorage.getItem("totalCostBuy");
//     let cartItems = localStorage.getItem('productsInCartBuy');
//     cartItems = JSON.parse(cartItems);
//     let productName;
//     console.log(cartItems);

//     let basketcontainer = document.querySelector('.basketcontainer');

//     for(let i=0; i < deleteButtons.length; i++) {
//         deleteButtons[i].addEventListener('click', () => {
//             productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
//             localStorage.setItem('cartNumbersBuy', productNumbers - cartItems[productName].inCart);
//             localStorage.setItem('totalCostBuy', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

//             delete cartItems[productName];
//             localStorage.setItem('productsInCartBuy', JSON.stringify(cartItems));

//             displayCartBuy();
//             onLoadCartNumbers();
//         })
//     }
//     if(deleteButtons.length==0) {
//         basketcontainer.style.display = "none";
//     } else {
//         basketcontainer.style.display = "inline";
//     }
// }

// function paymenthide() {
//         let bg1 = document.querySelector(".col-2")
//         let bg2 = document.querySelector(".col2text")
//         let bg11 = document.querySelector("#form2")
//         let os1 = document.querySelector(".products-container")
//         let po = document.querySelector(".row3")
//         if(bg1.style.display !== "none" || bg2.style.display !== "none" || bg11.style.display !== "none" || os1.style.display !== "none"){
//             po.style.display = "none";
//         }else{
//             po.style.display = "flex";
//         }
// }


// onLoadCartNumbers();
// displayCartBuy1();

        

