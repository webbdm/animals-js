var croc = {
  
    name: "Crocodill-E",
    description: "description",
    price:  "$20",
    url:  "",
}

var wiggly = {
  
    name: "Piggly wiggly",
    description: "description",
    price:  "$20",
    url:  "",
}

var rat = {
  
    name: "Ratatouille",
    description: "wolf description",
    price:  "$20",
    url:  "",
}

var monkey = {
  
    name: "TRNK Monkey",
    description: "Our official toyTRNK mascot ",
    price:  "$20",
    url:  "",
}

var rintin = {
  
    name: "Rin Tin Tin",
    description: "description",
    price:  "$20",
    url:  "",
}

var stardust = {
  
    name: "Stardust",
    description: "description",
    price:  "$20",
    url:  "",
}

var rhino = {
  
    name: "Rhino",
    description: "Mighty horns, defends their territory at all costs",
    price:  "$20",
    url:  "",
}

var bear = {
  
    name: "Bear",
    description: "Small but magestic Black Bear found in the Smoky Mountains",
    price:  "$20",
    url:  "", 
}

var shark = {
  
    name: "Shark",
    description: "Great White with mighty jaws",
    price:  "",
    url:  "",
}
  


var products = [croc, wiggly, rat, monkey, rintin, stardust, rhino, bear, shark];
var info = document.getElementsByClassName("info"); // divs where objects plugin 

//console.log(products[8].name);


// Loop


for (var i = 0; i < products.length; i++) {
  
       var cardContent = ""; // Stores the += and writes objects into the cardholder
  
       cardContent += '<img src="' + products[i].url + '"/>';
       cardContent += '<h3>' + products[i].name + '</h3>';
       cardContent += '<p class="animal-description">' + products[i].description + '</p>';
       cardContent += '<p class="animal-price">' + products[i].price + '</p>';
       info[i].innerHTML = cardContent;
       
       console.log(cardContent);
}

// console.log(cardContent);


// Only works for hard keyed IDs, great as a test.

//  for (var i = 0; i < products.length; i++) {
  
//        document.getElementById("a").innerHTML = products[i].name;  
//        document.getElementById("b").innerHTML = products[i].description;  
//        document.getElementById("c").innerHTML = products[i].price;  
//        document.getElementById("d").innerHTML = products[i].url;
  
// }
