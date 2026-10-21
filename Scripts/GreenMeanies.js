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
    {"name":"Gang Green","description":"A full set of all models offered by the 2026 release at a discounted price. Contains eighteen (18) models and their accompanying weapons/shields. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> GG001", "price":"$160","featuredImage":"Media/Products/GG001.jpg",  "crouselImages":[{"src":"Media/Products/CC012.jpg"},{"src":"Media/Products/CC012.jpg"},{"src":"Media/Products/CC001.jpg"}], "buyNowLink":""},
    {"name":"Bully Boys","description":"A discounted bundle of the 2026 release heroes. Includes five (5) (Orcacle, Paladin, Crossboworc, Plinker and the Boss). 2026 release. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> GG002 ", "price":"$55","featuredImage":"Media/Products/CC001.jpg",  "crouselImages":[{"src":"Media/Products/CC012.jpg"},{"src":"Media/Products/CC001.jpg"}], "buyNowLink":""},
    {"name":"Rowdy Raiders","description":"A set of five (5) minions ready to cause havorc. Includes three (3) orcs, two (2) goblins and plenty of weapon options, shields and porcly pauldrons. 2026 release. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> GG003", "price":"$50","featuredImage":"Media/Products/CC002.jpg",  "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Facebiters","description":"A set of four (4)  mouthy monsters. 2026 release. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> GG004", "price":"$36","featuredImage":"Media/Products/GG004.jpg",  "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Mayhem Managers","description":"A discounted bundle of the melee and mage heroes. Includes three (3) (Orcacle, Paladin and Boss) models. 2026 release. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> GG005", "price":"$36", "featuredImage":"Media/Products/GG005.jpg", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Dastardly Duo","description":"A discounted bundle of the ranger heros. Includes two (2) (Plinker and Crossboworc) models. 2026 release. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br> GG006", "price":"$25","featuredImage":"Media/Products/GG006.jpg",  "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Troublesome Troll","description":"A single stinker. 2026 release.<br><br> Model will require some cleaning and assembly. <br><br>GG007", "price":"$24","featuredImage":"Media/Products/GG007.jpg",  "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Freespirits","description":"Two (2) lightly armoured models (A Knob-Goblin and an Orcibutionist). 2026 release. <br><br> Models are cast in high quality metal and will require some cleaning and assembly. <br><br>GG008", "price":"$20", "featuredImage":"Media/Products/GG008.jpg", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Porcly Rider","description":"A single orc rider and his steed. 2026 release.<br><br> Model will require some cleaning and assembly. <br><br>GG009", "price":"$16","featuredImage":"Media/Products/GG009.jpg", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Orcacle","description":"A single Hero model from the 2026 release.<br><br> Model will require some cleaning and assembly. <br><br>GG010", "price":"$13", "featuredImage":"Media/Products/GG010.jpg","crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Porcadin","description":"A single Hero model from the 2026 release.<br><br> Model will require some cleaning and assembly. <br><br> GG011", "price":"$13","featuredImage":"Media/Products/GG011.jpg", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Crossboworc","description":"A single Hero model from the 2026 release. <br><br> Model will require some cleaning and assembly. <br><br>GG012", "price":"$13", "display":"square","featuredImage":"Media/Products/CC008.jpg","crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Plinker","description":"A single Hero model from the 2026 release. <br><br> Model will require some cleaning and assembly. <br><br>GG013", "price":"$13", "featuredImage":"Media/Products/CC016.jpg","crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    {"name":"Boss","description":"A single Hero model from the 2026 release. <br><br> Model will require some cleaning and assembly. <br><br> GG014", "price":"$13","featuredImage":"Media/Products/CC009.jpg", "crouselImages":[{"src":""},{"src":""}], "buyNowLink":""},
    
   

   
 
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
