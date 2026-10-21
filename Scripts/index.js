/*const productGrid = document.getElementById("ProductGrid");
const detailsDiv = document.getElementById("detailsDiv");
const productsDiv = document.getElementById("ProductGrid");

const detailedProductName = document.getElementById("detailedProductName");
const detailedProductPrice = document.getElementById("detailedProductPrice");
const detailedProductDescription = document.getElementById("detailedProductDescription");
const detailedProductImage1 = document.getElementById("detailedProductImage1");
const detailedProductImage2 = document.getElementById("detailedProductImage2");
const btnGoBack = document.getElementById("btnGoBack");
const btnBuyNow = document.getElementById("btnBuyNow");

//New Product empty template:
//{"name":"","description":"", "price":"", "images":[{"src":""},{"src":""}], "buyNowLink":""}

const products = 
[
    {"name":"The Entire Ecosystem","description":"A full set of ALL models, new and old, offered by the campaign. Contains twenty (20) models, seven (7) random weapons and five (5) shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$150", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Dangerously Furry","description":"A full set of all models offered by the first campaign. Contains twelve (12) models, seven (7) random weapons and five (5) shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly ", "price":"$105","display":"landscape", "images":[{"src":"Media/Products/CC001.jpg"},{"src":""}], "buyNowLink":""},
    {"name":"An Absolute Unit","description":"A combined set of Command Critters and two (2) Furred and Fowl Followers sets. Contains thirteen (13) models, twelve (12) random weapons and ten (shields). <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$100", "images":[{"src":"Media/Products/CC002.jpg"},{"src":""}], "buyNowLink":""},
    {"name":"Beasty Boys","description":"Two sets of the Furred and Fowl. Contains ten (10) bodies and ten (10) random weapons and ten (10) shields. The bodies are based on the following animals: <br><br> Pronghorn, Goose, Lynx, Harp Seal, and a Skunk. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$80", "images":[{"src":"Media/Products/CC003.jpg"},{"src":""}], "buyNowLink":""},
    {"name":"Squeak Squad","description":"A combined set of Command Critters and Furred and Fowl Followers. Contains eight (8) models, seven (7) random weapons and five (5) shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$70", "images":[{"src":"Media/Products/CC004.jpg"},{"src":""}], "buyNowLink":""},
    {"name":"A New Fur Coat","description":"A full set of all models offered by the second campaign. Contains eight (8) models total. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$70", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Furred and Fowl","description":"A set of five (5) bodies and five (5) random weapons and five (5) shields. The bodies are based on the following animals: <br><br> Pronghorn, Goose, Lynx, Harp Seal, and a Skunk. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$50", "images":[{"src":"Media/Products/CC005.jpg"},{"src":""}], "buyNowLink":""},
    {"name":"Passel of Pain","description":"A set of five (5) models based on North America's murderous marsupials. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$50", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Trio de Héros","description":"One of each of the *new* Heros: Wolverine Champion, Centaur Big Horn and Owl Shaman. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$32", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Hero Trio","description":"One of each of the Heros: Racoon Shaman, Gooselord and the Battle Beaver. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. ", "price":"$30", "images":[{"src":"Media/Products/CC006.jpg"},{"src":""}], "buyNowLink":""},
    {"name":"Command Critters","description":"A set of Command Critters which includes a Tyrannical Turkey, a Opossum Standard Bearer, a Cacophonous Chipmunk and two (2) random weapons. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$30", "images":[{"src":"Media/Products/CC007.png"},{"src":""}], "buyNowLink":""},
    {"name":"Mighty Moose","description":"One Mighty Moose cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$22", "display":"square","images":[{"src":"Media/Products/CC008.png"},{"src":""}], "buyNowLink":""},
    {"name":"Centaur Big Horn","description":"One Centaur Big Horn cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$16", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Battle Beaver","description":"One Battle Beaver cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$12", "images":[{"src":"Media/Products/CC009.png"},{"src":""}], "buyNowLink":""},
    {"name":"Gooselord","description":"One Gooselord cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$12", "images":[{"src":"Media/Products/CC010.png"},{"src":""}], "buyNowLink":""},
    {"name":"Racoon Shaman","description":"One Racoon Shaman cast in high quality metal. <br><br> Model will require some cleaning and assembly. ", "price":"$12", "images":[{"src":"Media/Products/CC011.png"},{"src":""}], "buyNowLink":""},
    {"name":"Wolverine Warrior","description":"One Wolverine Warrior cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$12", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Owl Occultist","description":"One Owl Occultist cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$12", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Green Gang","description":"A full set of models perfect for any starter gang.  Contains twelve (13) models including their accompanying weapons/bits. <b><b> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$110", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Grunts and Goblins","description":"A set of three (3) orc bodies, two (2) goblins and their accompanying weapons/bits. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$50", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Bully Boys","description":"One of each of the Big Boys: Orc Shaman, Orc Boss and both Brutish Bowmen. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$40", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Troll","description":"One (1) troll cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$22", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Brutish Bowmen","description":"Two (2) orcs with ranged weapons: a bow and crossbow. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$20", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Spogs","description":"Two (2) spogs. <br><br> Models are cast in high quality metal and will require some cleaning and assembly.", "price":"$12", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Orc Boss","description":"One (1) orc boss cast in high quality metal. <br><br> Model will require some cleaning and assembly.", "price":"$12", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Orc Shaman","description":"One (1) orc shaman cast in high quality metal. <br><br> Model will require some cleaning and assembly", "price":"$12", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Knob Goblin","description":"One (1) cheeky goblin cast in high quality metal. <br><br> Model will require some cleaning and assembly", "price":"$8", "images":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"example4","description":"The nu-endtimes", "price":"9999.99", "images":[{"src":""},{"src":""}], "buyNowLink":""}
   

    
]

LoadProducts();

function LoadProducts()
{
    for(let i = 0; i < products.length; i++)
    {
        const productDiv = document.createElement ('div');
        const productImage = document.createElement ('img');
        const productTitle = document.createElement ('p');
        const productPrice = document.createElement ('p');


        productDiv.dataset.index = i;
        //Move this ot the css later
        productDiv.style.cursor = 'pointer';
        productDiv.onclick = ()=>{ShowProductDetails(productDiv.dataset.index)}
        productImage.src = products[i].images[0].src;
        productTitle.textContent = products [i].name;
        productPrice.textContent = products [i].price;

        if(products[i].display=="landscape")
            productImage.classList.add("display-image-landscape");
        else
            productImage.classList.add("display-image-square");

        productDiv.appendChild(productImage);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productPrice);

        productGrid.appendChild(productDiv);
    }    
}

function ShowProductDetails(index)

{
    console.log(`Showing details of product ${index}`);
    detailedProductName.textContent = products[index].name;
    detailedProductDescription.innerHTML = products[index].description;
    detailedProductPrice.textContent = products[index].price;
    detailedProductImage1.src = products[index].images[0].src;
    detailedProductImage2.src = products[index].images[1].src;
    btnBuyNow.dataset.address = products[index].buyNowLink;
    detailsDiv.hidden = false;
    productsDiv.hidden = true;
}

function GoBackToProducts()

{
    detailsDiv.hidden = true;
    productsDiv.hidden = false;
}

function GoToBuyNow()
{

}
*/