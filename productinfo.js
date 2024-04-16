

//for top toggle menu

var MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight="0px";
function menutoggle(){
  if(MenuItems.style.maxHeight=="0px")
  {
    MenuItems.style.maxHeight="200px";
  }
  else
  {
    MenuItems.style.maxHeight="0px";
  }
}

/*$(".image").click(function(){
    $(this).children(".children").toggle();
});*/

$(".heading").click(function(e) {
    e.stopPropagation();
});

$(".image a").click(function(e) {
    e.stopPropagation();
});

$(".image").click(function()
	{
		jQuery('html,body').animate({scrollTop:0},1);
	})

//productlist list

//let carts = document.querySelectorAll('.add-cart');

let productlist = [
    {
        name: 'New Apple iPhone 12 Pro Max (256GB) - Gold',
        tag: 'newappleiphone12promax(256gb)-gold',
        price: 133990,
        description: '6.7-inch (17 cm diagonal) Super Retina XDR display<br/><br/>Ceramic Shield, tougher than any smartphone glass<br/><br/>A14 Bionic chip, the fastest chip ever in a smartphone<br/><br/>Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording<br/><br/>LiDAR Scanner for improved AR experiences, Night mode portraits<br/><br/>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording<br/><br/>Industry-leading IP68 water resistance<br/><br/>Supports MagSafe accessories for easy attach and faster wireless charging<br/><br/>iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more',
        inCart: 0
    },
    {
        name: 'OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)',
        tag: 'oneplus9r5g(lakeblue,12gbram,256gbstorage)',
        price: 43999,
        description: 'Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GPU for superb on-device experiences<br/><br/>Loaded with Quad rear camera module that features a 48 MP Main camera, 16 MP Ultra Wide angle Camera, 5 MP Macro camera and a 2 MP Monochrome camera. The device also comes with a 16 MP front Camera<br/><br/>6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate<br/><br/>A Powerful 4500 mAh with 65 Watt Warp charging capability<br/><br/>Oxygen OS based on Andriod 11<br/><br/>Hands-Free access to Alexa',
        inCart: 0
    },
    {
        name: 'Samsung Galaxy F62 (Laser Grey, 8GB RAM, 128GB Storage)',
        tag: 'samsunggalaxyf62(lasergrey,8gbram,128gbstorage)',
        price: 25999,
        description: '8 GB RAM | 128 GB ROM | Expandable Upto 1 TB<br/><br/>17.02 cm (6.7 inch) Full HD+ Display<br/><br/>64MP + 12MP + 5MP + 5MP | 32MP Front Camera<br/><br/>7000 mAh Lithium-ion Battery<br/><br/>Exynos 9825 Processor',
        inCart: 0
    },
    {
        name: 'Rog Phone 5 (12GB RAM,256GB Storage)',
        tag: 'rogphone5(12gbram,256gbstorage)',
        price: 57999,
        description: '* 12 GB RAM | 256 GB ROM<br/><br/>* 17.22cm(6.78") AMOLED HDR 10+ Display, (2488x1080), 144 Hz<br/><br/>* Qualcomm® Snapdragon™ 888 (5nm),Octa-core Processor<br/><br/>* Rear Cam-64MP + 13MP + 5MP, Front Cam- 24MP<br/><br/>* Android™ 11 with ROG UI<br/><br/>* Battery-3000 + 3000 mAh dual battery with ROG hyper charge 30W power adapter i',
        inCart: 0
    },
    {
        name: 'Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps',
        tag: 'samsunggalaxywatchactive2(bluetooth,44mm)-black,aluminiumdial,siliconstraps',
        price: 16570,
        description: 'country of origin:India<br/><br/>Super AMOLED display with customizable Always on Watch faces<br/><br/>24/7 Activity Tracking - 4 stage Sleep, Activity with continuous HRM and Stress monitoring<br/><br/>39 built in trackers with 50m Water Resistance<br/><br/>Connectivity - Bluetooth 5.0. Compatible with Android 5.0 or higher and RAM 1.5GB above. iPhone: iPhone 5 and above, iOS 9.0 or above<br/><br/>Display Size: 3.45cm (1.4"); Resolution: 360 x 360',
        inCart: 0
    },
    {
        name: 'Emporio Armani Analog Blue Dial Mens Watch-AR11238',
        tag: 'emporioarmanianalogbluedialmenswatch-ar11238',
        price: 24495,
        description: 'A captivating blue chronograph dial is displayed in exquisitely detailed stainless steel case for the Aviator collection by Emporio Armani. A flowing silver tone stainless steel mesh bracelet joins an aesthetically focused dial for this prized chronograph watch. This 43mm watch features a blue sunray dial with silver stick indexes, chronograph movement, date display and a stainless steel bracelet.',
        inCart: 0
    },
    {
        name: 'HUAWEI Band 6 Fitness Tracker Smartwatch for Men Women, 1.47inch AMOLED ColorScreen',
        tag: 'huaweiband6fitnesstrackersmartwatchformenwomen,1.47inchamoledcolorscreen',
        price: 5999,
        description: 'Spo2 Monitoring Throughout the Day<br/><br/>All Day Heart Rate Monitoring<br/><br/>1.47’’ FullView Screen: Huawei band 6 has a 1.47-inch amoled fullview screen, the size of the display area is 1.48 times larger, and a low-frame 64% screen-to-body ratio<br/><br/>2 Week Battery Life<br/><br/>96 Different Exercise modes',
        inCart: 0
    },
    {
        name: 'Fossil FB-01 Analog Black Dial Mens Watch-FS5836',
        tag: 'fossilfb-01analogblackdialmenswatch-fs5836',
        price: 10995,
        description: 'Case size: 42mm; Band size: 22mm; quartz movement with 3-hand date chronograph display; mineral crystal face<br/><br/> Gold plated stainless steel case; black dial with date window<br/><br/> Gold plated stainless steel bracelet with single pusher foldover clasp closure; interchangeable with Fossil 22mm watch straps<br/><br/> Water resistant to 330 feet (100 M): suitable for short periods of recreational swimming and showering, but not diving or snorkeling. Circumference - 200+/- 5MM<br/><br/> Warranty type:Manufacturer; 2 Years International Warranty',
        inCart: 0
    },
    {
        name: 'Nike Mens Zoom Winflo 8 Running Shoe',
        tag: 'nikemenszoomwinflo8runningshoe',
        price: 8295,
        description: 'Closure: Lace-Up<br/><br/>Shoe Width: Medium<br/><br/>Overlays at the toe add a layer of durability.<br/><br/>Item Weight ‏ : ‎ 500 g<br/><br/>Item Dimensions LxWxH ‏ : ‎ 26 x 8.5 x 9.5 Centimeters',
        inCart: 0
    },
    {
        name: 'Adidas Element Refresh 3 M Running Sports Shoes for Men',
        tag: 'adidaselementrefresh3mrunningsportsshoesformen',
        price: 5054,
        description: 'Sole: Rubber<br/><br/>Closure: Lace-Up<br/><br/>Shoe Width: Medium<br/><br/>Outer Material: Mesh , Inner Material: Cotton<br/><br/>Sole Material: Rubber<br/><br/>Color: Multi<br/><br/>Closure Type: Lace up<br/><br/>Adidas Sports Running Shoes for Men',
        inCart: 0
    },
    {
        name: 'one8 Prime Mid V3 Mens Shoes',
        tag: 'one8primemidv3mensshoes',
        price: 3599,
        description: 'Look fantastic with the one8 Prime Mid V3 Mens Shoes an all season favorite , perfect for leisure.<br/><br/>Syntethic Upper<br/><br/>Mid Top Construction<br/><br/>one8 Logo<br/><br/>Rubber Outsole',
        inCart: 0
    },
    {
        name: 'PUMA x UNIVERSAL Rudolf Dassler Legacy Unisex Sneakers',
        tag: 'pumaxuniversalrudolfdasslerlegacyunisexsneakers',
        price: 10999,
        description: 'Mid boot<br/><br/>Premium leather upper<br/><br/>Rubber midsole<br/><br/>Rubber outsole<br/><br/>Inside out tongue label<br/><br/>Removable textile laundry pick-up label on tongue',
        inCart: 0
    }
]

for(let i=0; i< carts.length; i++) {
  
  cartNumbers1(productlist[i]);
  
}



function cartNumbers1(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers1');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productlistInCart');
  cartItems = JSON.parse(cartItems);
  setItems1(product);
}

function setItems1(product) {
  // let productNumbers = localStorage.getItem('cartNumbers1');
  // productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem('productlistInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
      let currentProduct = product.tag;
  
      if( cartItems[currentProduct] == undefined ) {
          cartItems = {
              ...cartItems,
              [currentProduct]: product
          }
      } 
      cartItems[currentProduct].inCart = 1;

  } else {
      product.inCart = 1;
      cartItems = { 
          [product.tag]: product
      };
  }

  localStorage.setItem('productlistInCart', JSON.stringify(cartItems));
}



function displayCart() {
  let cartItems = localStorage.getItem('productlistInCart');
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost1");
  cart = parseInt(cart);

  let productContainer = document.querySelector('.img-slider');

    /*var images2 = document.querySelectorAll('.image');
    let currentglide = 1;
    var productname;

    images2.forEach((col, i) => {
    col.addEventListener("click", () => {
        currentglide = i;
        console.log(currentglide)
        if(currentglide<5){
            productname='Mobiles';
            localStorage.setItem("productname", productname);
            console.log(productname);
        }else if(currentglide>=5&&currentglide<9){
            productname='Watches';
            localStorage.setItem("productname", productname);
            console.log(productname)
        }else{
            productname='Shoes';
            localStorage.setItem("productname", productname);
            console.log(productname)
        }
    });
    });

    let productname1 = localStorage.getItem("productname");*/

    let backoption = document.querySelector('.backoption');
    backoption.innerHTML =
    `<a href="products.html"><ion-icon name="arrow-back-outline"></ion-icon>Back to Shopping</a>`
  
  if( cartItems && productContainer ) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map( (item, index) => {
          productContainer.innerHTML += 
          `<div class="glide active">
                <div class="directory">
                    <a href="products.html" style="color: #22333b;">Products</a>
                    <a>/${item.name}</a>
                </div>
                <div class="info-container">
                    <div class="info-image">
                        <div class="large-img">
                            <img src="./images/${item.tag}.jpg" class="largeone"/>
                        </div>
                        <div class="small-img">
                            <img src="./images/${item.tag}.jpg" class="smallone"/>
                            <img src="./images/${item.tag}1.jpg" class="smallone"/>
                            <img src="./images/${item.tag}2.jpg" class="smallone"/>
                            <img src="./images/${item.tag}3.jpg" class="smallone"/>
                        </div>
                        <div class="addbuttons">
                            <a class="add-cart-info" href="cart.html"><i class="fa fa-shopping-cart"></i>Add To Cart</a>
                            <a class="buy-now-info" href="buynow.html"><i class="fa fa-bolt"></i>Buy Now</a>
                        </div>
                    </div>
                    <div class="info-description">
                        <h4 class="sm-hide">${item.name}</h4>
                        <h3>₹${item.price}.00</h3>
                        <p>Product details :</p>
                        <span>${item.description}</span> 
                    </div>
                </div>
           </div>`;
      });
  }
}




var theParent = document.querySelector(".container1")
theParent.addEventListener("click", doSomething, false)
var theParent = document.querySelector(".container2")
theParent.addEventListener("click", doSomething, false)
var theParent = document.querySelector(".container3")
theParent.addEventListener("click", doSomething, false)
let glideshow = document.querySelector(".productinfo")
let imagehide = document.querySelector(".productslistcontainer")
let footerhide = document.querySelector(".footer")

function doSomething(e) {
    if(e.target !==e.currentTarget) {
        glideshow.style.display = "inline";
        imagehide.style.display = "none";
        footerhide.style.display = "none";
    }
    e.stopPropagation();
}

/*var productimg = document.getElementById("largeone");
var smallimg = document.getElementsByClassName("smallone");*/




function imagechange(){

    var targetdiv = document.getElementsByClassName("largeone")
    var targetdiv1 = document.getElementsByClassName("smallone")

    var images12 = document.querySelectorAll('.smallone');
    let currentglide2 = 1;

    images12.forEach((col, i) => {
    col.addEventListener("click", () => {
        currentglide2 = i;
        if(currentglide2<=3) {
            {
                targetdiv[0].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>3 && currentglide2<=7) {
            {
                targetdiv[1].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>7 && currentglide2<=11) {
            {
                targetdiv[2].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>11 && currentglide2<=15) {
            {
                targetdiv[3].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>15 && currentglide2<=19) {
            {
                targetdiv[4].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>19 && currentglide2<=23) {
            {
                targetdiv[5].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>23 && currentglide2<=27) {
            {
                targetdiv[6].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>27 && currentglide2<=31) {
            {
                targetdiv[7].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>31 && currentglide2<=35) {
            {
                targetdiv[8].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>35 && currentglide2<=39) {
            {
                targetdiv[9].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>39 && currentglide2<=43) {
            {
                targetdiv[10].src = targetdiv1[currentglide2].src;
            }
        }else if(currentglide2>43 && currentglide2<=47) {
            {
                targetdiv[11].src = targetdiv1[currentglide2].src;
            }
        }
    });
    });
    
        
    
    

    /*if(document.glidelist.classList.contains('active')) {
        targetdiv1[0].onclick = function()
        {
            targetdiv.src = targetdiv1[0].src;
        }
        targetdiv1[1].onclick = function()
        {
            targetdiv.src = targetdiv1[1].src;
        }
        targetdiv1[2].onclick = function()
        {
            targetdiv.src = targetdiv1[2].src;
        }
        targetdiv1[3].onclick = function()
        {
            targetdiv.src = targetdiv1[3].src;
        }
    }*/

}
/*smallimg[0].onclick = function()
{
    productimg.src = smallimg[0].src;
}*/


displayCart();
imagechange();

/*This is a JavaScript code for an online shopping website. The code does several things:

It creates a menu toggle function that opens and closes the navigation menu when the user clicks on the menu icon.

It uses jQuery to add event listeners to different elements of the web page. For example, it stops the propagation of the click event on the headings and image links.

It creates an array of product objects that contains information about each product such as the name, price, description, and inCart value.

It also creates HTML code for each product, including the product name, image, price, and description, and displays them on the webpage.

It adds functionality to the "Add to cart" button that updates the inCart property of the corresponding product object and displays the number of items in the cart.

It updates the total price and number of items in the cart each time a product is added or removed.

It creates an order summary modal that displays the list of items in the cart, the total price, and the option to proceed to checkout.
*/