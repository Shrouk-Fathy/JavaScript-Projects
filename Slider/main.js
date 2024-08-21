// Image array for the slider
const images = ["images/photo1.jpg","images/photo2.jpg","images/photo3.jpg","images/photo4.jpg","images/photo5.jpg","images/photo6.jpg","images/photo7.jpg"];

// DOM elements
const currentImage = document.querySelector(".slider-container img");
const pagination = document.querySelector(".pagination");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

// Initialize the current image index
let Index = 0;

// Initialize first view
if(Index === 0){
    currentImage.style.opacity = "1";
    previous.classList.add("disabled");
    currentImage.src = images[Index];
}

// Create pagination items
for(let i = 0 ; i < images.length ;i++){
    const paginationItem = document.createElement("div");
    paginationItem.style.cursor = "pointer";
    paginationItem.className = "pagination-item";
    pagination.append(paginationItem);
}


// Handle previous button click
previous.addEventListener("click" , function(){
    next.classList.remove("disabled");
    if(Index > 0){
        Index--;
        paginationItems.forEach((item) =>{
            item.classList.remove("active");
        })
        paginationItems[Index].classList.add("active");
        if(Index === 0)previous.classList.add("disabled");
        else previous.classList.remove("disabled");
        
        currentImage.style.opacity = "1"; 
        currentImage.src = images[Index];
    }
})

// Handle next button click
next.addEventListener("click" , function(){
    previous.classList.remove("disabled");
    if(Index < images.length - 1){
        Index++;

        paginationItems.forEach((item) =>{
            item.classList.remove("active");
        })
        paginationItems[Index].classList.add("active");
        if(Index === images.length - 1)next.classList.add("disabled");
        else next.classList.remove("disabled");
        
        currentImage.style.opacity = "1"; 
        currentImage.src = images[Index];
    }
})

//Handle pagination  Items click
let paginationItems = document.querySelectorAll(".pagination div");
paginationItems[0].classList.add("active");

paginationItems.forEach((item , itemIndex)=>{
    item.addEventListener("click" , ()=>{
        Index = itemIndex;

        if(itemIndex === 0){
            previous.classList.add("disabled");
        }
        else if(itemIndex === images.length - 1)next.classList.add("disabled");
        else{
            previous.classList.remove("disabled");
            next.classList.remove("disabled");
        }

        paginationItems.forEach((i)=> { i.classList.remove("active")});
        currentImage.src = images[itemIndex];
        item.classList.add("active");
    })
})