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

  list.watches = []
  list.display = displayWatches,
  list.search = searchByName,
  list.addToList= addToList
  // list.wishList= wishList,
  list.add = addtoCart

  return list
}
function addToList(name,type,image,price){

  var watch = Product(name,type,image,price)
  this.watches.push(watch)

}

// 

function displayWatches (){
  var images = document.getElementsByClassName("watch") // a collection of div tags
  var names =  document.getElementsByClassName("name")
  for (let index = 0; index < images.length; index++) {
    images[index].style.backgroundImage = `url('${instance.watches[index].image}')`;
    names[index].innerHTML = instance.watches[index].name;
  }
}
 
// I tried to make it work for hours ... 

function searchByName() {
  var input = document.querySelector('input[type="search"]');
  var searchFor = input.value.trim().toLowerCase();

  if (searchFor === "") {
      console.log("Please enter a valid watch name");
      return;
  }

  var foundWatch = null;
  for (let i = 0; i < instance.watches.length; i++) {
      if (instance.watches[i].name.toLowerCase() === searchFor) {
          foundWatch = instance.watches[i];
          break;
      }
  }

  if (!foundWatch) {
      console.log("Watch not found!");
      return;
  }

  var NewImages = document.querySelectorAll('.watch');
  for (let j = 0; j < NewImages.length; j++) {
      var nameElement = NewImages[j].querySelector('.name');
      if (nameElement.innerHTML.toLowerCase() === searchFor) {
          NewImages[j].style.display = 'flex';
      } else {
          NewImages[j].style.display = 'none';
      }
  }
}

// function addtoCart(){
//   var sum = 0
//   var buttons = getElementsByClassName("btn");
 
//     for (let index = 0; index < buttons.length; index++) {
//       buttons[i].addEventListener('click', function() {

//         sum += instance.watches[i].price;
//       });
//     }
//       return '$' + (sum).toString();
//   }



// // function wishList(){
// //   var wishes = {}


// }


var instance = WatchList()

instance.addToList("Doxa","Mechanical","https://wamadajewellery.com.au/cdn/shop/files/DOXA_SUB_300B_830_10_351_10_800x_d5d54a44-2066-4349-b6c0-07b2fe1070b8_1024x1024.png?v=1708822571",3.795)
instance.addToList("TISSOT","Quartz","https://wamadajewellery.com.au/cdn/shop/products/T137.210.11.351.00_R_1_1024x1024@2x.webp?v=1652683077",610.00)
instance.addToList("Seiko Prospex","Automatic","https://wamadajewellery.com.au/cdn/shop/files/SPB409J_1024x1024@2x.png?v=1695874875",2.200)
instance.addToList("Seiko Astron","Solar","https://wamadajewellery.com.au/cdn/shop/files/SSH135J_1024x1024@2x.png?v=1694406459",4.050 )
instance.addToList("SEVENFRIDAY","Automatic","https://wamadajewellery.com.au/cdn/shop/products/SEVENFRIDAY_WATCHES_PS2_WebAssets_SOLDIER_72dpi_800x800_c269fdca-2fc6-41f5-911e-6a095004c1a4_1024x1024@2x.webp?v=1654134700",1.950)
instance.addToList("TISSOT","POWERMATIC 80","https://wamadajewellery.com.au/cdn/shop/files/DAT-T137_407_33_021_00_1024x1024@2x.webp?v=1697415365",1,335)

displayWatches();


console.log(instance.watches);
