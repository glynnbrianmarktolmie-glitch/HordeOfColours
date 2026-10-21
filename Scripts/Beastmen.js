const productGrid = document.getElementById("ProductGrid");
const detailsDiv = document.getElementById("detailsDiv");
const productsDiv = document.getElementById("ProductGrid");

const detailedProductName = document.getElementById("detailedProductName");
const detailedProductPrice = document.getElementById("detailedProductPrice");
const detailedProductDescription = document.getElementById("detailedProductDescription");
const featuredImage = document.getElementById("featuredImage");
const btnGoBack = document.getElementById("btnGoBack");
const btnBuyNow = document.getElementById("btnBuyNow");
const carouselContainer = document.getElementsByClassName("carousel-container")[0];
const carouselSlidesContainer = document.getElementsByClassName("slideshow-container")[0];
const carouselButtonsContainer = document.getElementsByClassName("dot-container")[0];

let slides = [];
let activeSlides = [];
let dots = [];
let activeDots = [];

let slideIndex = 1;

//New Product empty template:
//{"name":"","description":"", "price":"","featuredImage":"", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""}

const products = 
[
    {"name":"The EntirE Ecosystem","description":"A full set of both 2025 and 2026's releases at a discounted price.  Contains twenty (20) models and their accompanying weapons/shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> CC012", "price":"$170","featuredImage":"Media/Products/CC001",  "crouselImages":[{"src":"Media/Products/CC006.jpg"},{"src":"Media/Products/CC008.jpg"},{"src":"Media/Products/CC007.jpg"},{"src":"Media/Products/CC005.jpg"},{"src":"Media/Products/CC015.jpg"},{"src":"Media/Products/CC014.jpg"}], "buyNowLink":""},
    {"name":"Dangerously Furry","description":"A full set of all models offered by the 2025 campaign at a discounted price.  Contains twelve (12) models and their accompanying weapons/shields.<br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> CC001 ", "price":"$120","featuredImage":"Media/Products/CC001.jpg",  "crouselImages":[{"src":"Media/Products/CC006.jpg"},{"src":"Media/Products/CC008.jpg"},{"src":"Media/Products/CC007.jpg"},{"src":"Media/Products/CC005.jpg"}], "buyNowLink":""},
    {"name":"An Absolute Unit","description":"A combined set of Command Critters and two (2) Furred and Fowl Followers sets from the 2025 campaign at a discounted price.   Contains twelve (13) models and their accompanying weapons/shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br>CC002", "price":"$120","featuredImage":"Media/Products/CC002.jpg",  "crouselImages":[{"src":"Media/Products/CC007.jpg"},{"src":"Media/Products/CC003.jpg"}], "buyNowLink":""},
    {"name":"Beasty Boys","description":"A combined two (2) sets of the Furred and Fowl from the 2025 campaign at a discounted price. Contains ten (10) bodies and their accompanying weapons/shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> CC003", "price":"$100","featuredImage":"Media/Products/CC003.jpg",  "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Squeak Squad","description":"A combined set of Command Critters and Furred and Fowl Followers from the 2025 campaign at a discounted price. Contains eight (8) models and their accompanying weapons/shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> CC004", "price":"$80", "featuredImage":"Media/Products/CC004.jpg", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"A New Fur Coat","description":"A full set of all models offered by the 2026 campaign at a discounted price.  Contains eight (8) models total. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> CC013", "price":"$75","featuredImage":"Media/Products/CC013.jpg",  "crouselImages":[{"src":"Media/Products/CC015.jpg"},{"src":"Media/Products/CC016.jpg"},{"src":"Media/Products/CC017.jpg"},{"src":"Media/Products/CC018.jpg"},{"src":"Media/Products/CC014.jpg"}], "buyNowLink":""},
    {"name":"Furred and Fowl","description":"A set of five (5) bodies and accompanying shields/weapons from the 2025 campaign.  The bodies are based on the following animals: Pronghorn, Goose, Lynx, Harp Seal, and a Skunk.<br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br>CC005", "price":"$55","featuredImage":"Media/Products/CC005.jpg",  "crouselImages":[{"src":"Media/Products/CC0051.jpg"},{"src":"Media/Products/CC0052.jpg"},{"src":"Media/Products/CC0053.jpg"}], "buyNowLink":""},
    {"name":"Passel of Pain","description":"A set of five (5)  opossum models from the 2026 campaign.  <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br>CC014", "price":"$45", "featuredImage":"Media/Products/CC014.jpg", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Triple Threat","description":"A discounted bundle of the 2026 campaign heroes. Includes three (3) (Wolverine Warrior, Owl Occultist, and a Centaur Big Horn) models.<br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br>CC015", "price":"$38","featuredImage":"Media/Products/CC015.jpg", "crouselImages":[{"src":"Media/Products/CC018.jpg"},{"src":"Media/Products/CC016.jpg"},{"src":"Media/Products/CC017.jpg"}], "buyNowLink":""},
    {"name":"Hero Trio","description":"A discounted bundle of the 2025 campaign heroes. Includes three (3)(Gooselord, Raccoon Shaman, and a Battle Beaver (including Shield))  models.<br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br>CC006", "price":"$36", "featuredImage":"Media/Products/CC006.jpg","crouselImages":[{"src":"Media/Products/CC011.jpg"},{"src":"Media/Products/CC010.jpg"},{"src":"Media/Products/CC009.jpg"}], "buyNowLink":""},
    {"name":"Command Critters","description":"A bundle of three models (3) and their accompanying weapons (Turkey Tyrant, Opossum Standard 	and a Cacophonous Chipmunk) from the 2025 campaign<br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> CC007", "price":"$36","featuredImage":"Media/Products/CC007.jpg", "crouselImages":[{"src":"Media/Products/CC0071.jpg"},{"src":"Media/Products/CC0072.jpg"},{"src":"Media/Products/CC0073.jpg"}], "buyNowLink":""},
    {"name":"Mighty Moose","description":"A single model from the 2025 campaign. <br><br> Model will require some cleaning and assembly. <br><br>CC008", "price":"$24", "display":"square","featuredImage":"Media/Products/CC008.jpg","crouselImages":[{"src":"Media/Products/CC0081.jpg"},{"src":"Media/Products/CC0082.jpg"},{"src":"Media/Products/CC0083.jpg"},{"src":"Media/Products/CC0084.jpg"}], "buyNowLink":""},
    {"name":"Centaur Big Horn","description":"A single model from the 2026 campaign. <br><br> Model will require some cleaning and assembly. <br><br>CC016", "price":"$16", "featuredImage":"Media/Products/CC016.jpg","crouselImages":[{"src":"Media/Products/CC0161.jpg"},{"src":"Media/Products/CC0162.jpg"},{"src":"Media/Products/CC0163.jpg"}], "buyNowLink":""},
    {"name":"Battle Beaver","description":"A single model from the 2025 campaign. <br><br> Model will require some cleaning and assembly. <br><br> CC009", "price":"$13","featuredImage":"Media/Products/CC009.jpg", "crouselImages":[{"src":"Media/Products/CC0091.jpg"},{"src":"Media/Products/CC0092.jpg"},{"src":"Media/Products/CC0093.jpg"}], "buyNowLink":""},
    {"name":"Gooselord","description":"A single model from the 2025 campaign. <br><br> Model will require some cleaning and assembly. <br><br> CC010", "price":"$13","featuredImage":"Media/Products/CC010.jpg", "crouselImages":[{"src":"Media/Products/CC0101.jpg"},{"src":"Media/Products/CC0102.jpg"},{"src":"Media/Products/CC0103.jpg"}], "buyNowLink":""},
    {"name":"Racoon Shaman","description":"A single model from the 2025 campaign. <br><br> Model will require some cleaning and assembly. <br><br> CC011 ", "price":"$13", "featuredImage":"Media/Products/CC011.jpg","crouselImages":[{"src":"Media/Products/CC0111.jpg"},{"src":"Media/Products/CC0112.jpg"},{"src":"Media/Products/CC0113.jpg"}], "buyNowLink":""},
    {"name":"Wolverine Warrior","description":"A single model from the 2026 campaign. <br><br> Model will require some cleaning and assembly. <br><br> CC017", "price":"$13", "featuredImage":"Media/Products/CC017.jpg","crouselImages":[{"src":"Media/Products/CC0171.jpg"},{"src":"Media/Products/CC0172.jpg"},{"src":"Media/Products/CC0173.jpg"}], "buyNowLink":""},
    {"name":"Owl Occultist","description":"A single model from the 2026 campaign. <br><br> Model will require some cleaning and assembly. <br><br> CC0018", "price":"$13","featuredImage":"Media/Products/CC018.jpg", "crouselImages":[{"src":"Media/Products/CC0181.jpg"},{"src":"Media/Products/CC0182.jpg"},{"src":"Media/Products/CC0183.jpg"}], "buyNowLink":""},
    
   

   
 
]

function GoToBuyNow()
{
   window.open('index.html', '_blank');
}

LoadProducts();

function LoadProducts()
{
    for(let i = 0; i < products.length; i++)
    {
        const productDiv = document.createElement ('div');
        const productImage = document.createElement ('img');
        const productTitle = document.createElement ('p');
        const productPrice = document.createElement ('p');

        productDiv.classList.add("product-card");


        productDiv.dataset.index = i;
        //Move this ot the css later
        productDiv.onclick = ()=>{ShowProductDetails(productDiv.dataset.index)}
        productImage.src = products[i].featuredImage;
        productTitle.textContent = products [i].name;
        productPrice.textContent = products [i].price;
        productImage.classList.add("display-image");
        productTitle.classList.add("product-title");
        productPrice.classList.add("product-price");


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
    featuredImage.src = products[index].featuredImage;
    btnBuyNow.dataset.address = products[index].buyNowLink;

    carouselContainer.display = "none";
    if(setUpSlides(index))
    {
      carouselContainer.display = "block";
      slideIndex = 1;
      showSlides(slideIndex);
    }

    ShowElementFlex(detailsDiv);
    HideElement(productsDiv);
    
    
}

function GoBackToProducts()
{
    HideElement(detailsDiv);
    ShowElementFlex(productsDiv);
}


function ShowElementFlex(element)
{
    element.classList.remove("hide");
    element.classList.add("show-flex");
}
function HideElement(element)
{
    element.classList.add("hide");
    element.classList.remove("show-flex");
}



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function setUpSlides(productIndex){
  const product = products[productIndex];
  clearSlides();
  clearDots();

  let i = 1;
  product.crouselImages.forEach((img,index) => {
    if(img.src != ""){
      let slide = getSlide();
      slide.slide.slideImage.src = img.src;
      activeSlides.push(slide.slide.slideDiv);
      let dot = getDot();
      dot.dot.onclick = () =>{
        currentSlide(index + 1);
      }
      activeDots.push(dot.dot);
      
      i++;
    }
  });
  if(i == 1)
    return false;
  else
    return true;
}

function showSlides(n) {
  if(activeSlides.length <= 0)
    return;
  let i;
  if (n > activeSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < activeSlides.length; i++) {
    activeSlides[i].style.display = "none";
  }
  for (i = 0; i < activeDots.length; i++) {
    activeDots[i].className = activeDots[i].className.replace(" active", "");
  }
  
  activeSlides[slideIndex-1].style.display = "block";
  activeDots[slideIndex-1].className += " active";
}

function clearSlides(){
  slides.forEach(s=>{
    s.active = false;
    s.slide.slideImage.src = "";
    s.slide.display = "none";
  });
  activeSlides = [];
}

function getSlide() {
  if(slides.length <= 0)
  {
    let slide = {
    active:true,
    slide:createSlide()
    };
    
    slides.push(slide);
    return slide;
  }
  for(let i = 0; i < slides.length; i++)
  {
    const s = slides[i];
    if(!s.active)
    {
      s.active = true;
      s.slide.display = "block";
      return s;
    }
  }

  let slide = {
    active:true,
    slide:createSlide()
  };
  slides.push(slide);
  return slide;
}

function createSlide() {

  

  const slideDiv = document.createElement('div');
  const numberDiv = document.createElement('div');
  const slideImage = document.createElement('img');
  const captionText = document.createElement('div');

  slideDiv.classList.add('mySlides','fade');
  numberDiv.classList.add("numbertext");
  slideImage.style.width = '100%';
  captionText.classList.add("text");

  slideDiv.appendChild(numberDiv);
  slideDiv.appendChild(slideImage);
  slideDiv.appendChild(captionText);

  let newSlide = {
    slideDiv:slideDiv,
    numberDiv:numberDiv,
    slideImage:slideImage,
    captionText:captionText
  };
  carouselSlidesContainer.appendChild(slideDiv);

  return newSlide;
}

function getDot(){
  if(dots.length <= 0)
  {
    let helper = {
      dot:createDot(),
      active:true,
    };
    dots.push(helper);
    return helper;
  }
  for(let i = 1; i < dots.length; i++)
  {
    const d = dots[i];
    if(!d.active)
    {
      d.active=true;
      d.dot.style.display="inline-block";
      return d;
    }
  }

  let helper = {
    dot:createDot(),
    active:true,
  };
  dots.push(helper);
  return helper;
}

function createDot(){
  let newDot = document.createElement('span');
  newDot.classList.add("dot");
  newDot.style.display = "inline-block";
  newDot.onclick=null;
  carouselButtonsContainer.appendChild(newDot);
  return newDot;
}

function clearDots(){
  dots.forEach(d =>{
    d.active = false;
    d.dot.style.display ="none";
    d.dot.onclick = null;
    d.dot.className = d.dot.className.replace(" active", "");
  })
  activeDots = [];

}
