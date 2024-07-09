function Product(name,type,image,price){

var watch ={}

watch.name = name

watch.type = type

// Mechanical(manual-wind) / POWERMATIC 80(auto-wind) / Automatic(auto-wind) / Quartz(battery) / Solar(solar/energy)

watch.price = price

watch.image = image

return watch

}

function WatchList(){
  var list = {}
list.searchFor = null;
  list.watches     = []
  list.display     = displayWatches
  list.search      = searchByName
  list.addToList   = addToList
  // list.wishList= wishList,
  list.addtoCart   = addtoCart
  // list.displayCart = displayCart

  return list
}
function addToList(name,type,image,price){

  var watch = Product(name,type,image,price)
  this.watches.push(watch)

}

function displayWatches (){

  var images = document.getElementsByClassName("watch") // a collection of div tags
  var names  = document.getElementsByClassName("name")
  var price  = document.getElementsByClassName("price")

  for (let index = 0; index < images.length; index++) {
    images[index].style.backgroundImage = `url('${instance.watches[index].image}')`;
    names[index].innerHTML = instance.watches[index].name;
    price[index].innerHTML = "$"+(instance.watches[index].price).toString()+"0"
  }

}


// document.getElementById("Btn_Search").onclick = 
function searchByName() {
  var input = document.querySelector('input[type="search"]');
  var searchFor = input.value.trim(); // reminder trim() is to remove any unacessary added spaces 
console.log("mysearch:",searchFor);
if (searchFor === "") {
      console.log("Please enter a valid watch name" );
  }

  var foundWatch ;

    for (var i = 0; i < this.watches.length; i++) {
      if ((this.watches[i].name).toLowerCase() ===(searchFor).toLowerCase()) {
          foundWatch = this.watches[i];
          break;
      }

  }
  if (!foundWatch) {
    var msg =  document.getElementById("msg")
    msg.innerText = "Watch not found !"; 
    console.log("Watch not found !");
    return  msg;
    
}
  
  
  // hiding all unecessary watches that shouldn't be displayed in the search input

  var NewImages = document.querySelectorAll('.watch');
  for (var j = 0; j < NewImages.length; j++) {
      var nameElement = NewImages[j].querySelector('.name');

      if (nameElement.innerHTML.toLowerCase() === searchFor) {
          NewImages[j].style.display = 'flex';
      } else {
          NewImages[j].style.display = 'none';
      }
  }
  this.watches= foundWatch
  this.displayWatches()
}






function addtoCart(){

  var sum = 0
  var buttons = getElementsByClassName("btn");
 
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {

        alert("added to cart");
        sum += this.watches[i].price;
      });
    } console.log(`${sum}`)
      return '$' + (sum).toString();

  }

  

  // function displayCart () {
  //   var button = getElementsByClassName("btnc");
  //   button =  addtoCart();
  // }



// // function wishList(){
// //   var wishes = {}


// }

// pop function ..

// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }



var instance = WatchList()

instance.addToList("Doxa","Mechanical","https://wamadajewellery.com.au/cdn/shop/files/DOXA_SUB_300B_830_10_351_10_800x_d5d54a44-2066-4349-b6c0-07b2fe1070b8_1024x1024.png?v=1708822571",3.795)
instance.addToList("TISSOT","Quartz","https://wamadajewellery.com.au/cdn/shop/products/T137.210.11.351.00_R_1_1024x1024@2x.webp?v=1652683077",6.100)
instance.addToList("Seiko Prospex","Automatic","https://wamadajewellery.com.au/cdn/shop/files/SPB409J_1024x1024@2x.png?v=1695874875",2.200)
instance.addToList("Seiko Astron","Solar","https://wamadajewellery.com.au/cdn/shop/files/SSH135J_1024x1024@2x.png?v=1694406459",4.050 )
instance.addToList("SEVENFRIDAY","Automatic","https://wamadajewellery.com.au/cdn/shop/products/SEVENFRIDAY_WATCHES_PS2_WebAssets_SOLDIER_72dpi_800x800_c269fdca-2fc6-41f5-911e-6a095004c1a4_1024x1024@2x.webp?v=1654134700",1.950)
instance.addToList("TISSOT","POWERMATIC 80","https://wamadajewellery.com.au/cdn/shop/files/DAT-T137_407_33_021_00_1024x1024@2x.webp?v=1697415365",1.335)

displayWatches();
document.getElementById("Btn_Search").onclick = displayWatches.searchByName

console.log(instance.watches);
