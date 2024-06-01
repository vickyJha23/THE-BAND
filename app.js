console.log("har har mahadev");
const classChangerBtn = document.querySelector('.bars');
const leftSideBar = document.querySelector(".left_side_of_bar");
classChangerBtn.addEventListener("click", (e) => {
// contains work on array where as includes work on String..
     if(leftSideBar.classList.contains("change_nav_bar")){
            leftSideBar.classList.remove("change_nav_bar");
     }
     else{
        leftSideBar.classList.add("change_nav_bar");
     }
});
const MerchBtn = document.querySelector(".merch");
MerchBtn.addEventListener("click", (e) => {
     leftSideBar.classList.remove("change_nav_bar");
})
const slides = [
    {
    id: 1,
    img: 'https://www.w3schools.com/w3images/la.jpg',
    caption_heading: 'Los Angeles',
    caption_detail: "We had the best time playing at Venice Beach!"
    },
    {
    id: 2,
    img: 'https://www.w3schools.com/w3images/ny.jpg',
    caption_heading: 'New York',
    caption_detail: "The atmosphere in New York is lorem ipsum."
    },
    {
    id: 3,
    img: 'https://www.w3schools.com/w3images/chicago.jpg',
    caption_heading: 'Chicago',
    caption_detail: "Thank you, Chicago - A night we won't forget."
   } 
];
const slide_container  = document.querySelector(".slideShow");
console.log(slide_container);

function displaySlideItems(slides_item) {
    const slide_items = slides_item.map((item) => {
        return `<div class="slides">
        <img id="slide_img" src=${item.img} style="width: 100%;">
        <div class="slide_caption">
        <h3 id="caption_header">${item.caption_heading}</h3>
        <p id="caption_detail">${item.caption_detail}</p>
        </div>
        </div>`        
    }).join(" ");
    slide_container.innerHTML = slide_items;      
 }
 displaySlideItems(slides);
 let slideIndex = 0;
 function showSlides(){
    const slides = document.querySelectorAll(".slides");
    slides.forEach((slide) => {
        slide.style.display = "none"
    });
    slideIndex++;
    if(slideIndex > slides.length){
          slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
 }
 showSlides();  

 const bookBtn = document.querySelectorAll(".product_info > button");
//  console.log(bookBtn);
 const ticketModal = document.getElementById("ticketModal");
 bookBtn.forEach((btn) => {
         btn.addEventListener("click", (e) => {
                 ticketModal.classList.toggle("show_ticketModal");
         })
 });
 const timeBtn = document.querySelector(".times");
 console.log(timeBtn);
 timeBtn.addEventListener("click", () => {
      ticketModal.classList.remove("show_ticketModal");    
 });
