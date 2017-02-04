var elephant = {
  
    name: "Elephant",
    description: "elephant description",
    price:  "$20",
    url:  "",
}

var giraffe = {
  
    name: "Giraffe",
    description: "giraffe description",
    price:  "$20",
    url:  "",
}

var wolf = {
  
    name: "Wolf",
    description: "wolf description",
    price:  "$20",
    url:  "",
}

var monkey = {
  
    name: "Monkey",
    description: "monkey description",
    price:  "$20",
    url:  "",
}

var tiger = {
  
    name: "Tiger",
    description: "Tiger description",
    price:  "$20",
    url:  "",
}

var lion = {
  
    name: "Lion",
    description: "King of the African Plains",
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
  


var products = [elephant, giraffe, wolf, monkey, tiger, lion, rhino, bear, shark];

var info = document.getElementsByClassName("info");

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