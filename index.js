"use strict";

const barBtn = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mob-menu");
const inputElement = document.querySelector("input");
const shortenBtn = document.querySelector(".Shorten__btn");
const sectionElement = document.querySelector(".container");
const divElement = document.createElement("div");
const resultBtn = document.querySelector(".result__btn");



barBtn.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("show");
})

shortenBtn.addEventListener("click", ()=>{
    console.log("I am clicked");
   creatingDiv(inputElement.value) 
    
})

// resultBtn.addEventListener("click", ()=>{
//     console.log("I am clicked");
//     resultBtn.style.backgroundColor  = "black";
//     resultBtn.innerHTML = "copied !";
// })

function creatingDiv(a){

    
    getData()
    console.log(a);
    divElement.classList.add("row")
    divElement.classList.add("result__row")
    divElement.innerHTML = `
    <div class="col">
    <p>${a}</p>
    </div>
    <hr>
    <div class="col">
    <p>${a}</p>
    <a class="btn result__btn">copy</a>
    </div>
    `;
    sectionElement.appendChild(divElement);
    
}


function getData(){
    const xhr = new XMLHttpRequest();
    const url = `https://rel.ink/api/links/?url=${inputElement.value}`;
    xhr.responseType = "json";
    xhr.onreadystatechange = ()=>{
    if (xhr.readyState === 4 && xhr.status === 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhr.response);
    } else {
        console.log("Something went wrong");
    }
    }   ;
    xhr.open("GET", url, true);
    xhr.send();

    
}



