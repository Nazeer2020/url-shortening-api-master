"use strict";

const barBtn = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mob-menu");
const inputElement = document.querySelector("input");
const shortenBtn = document.querySelector(".Shorten__btn");
const sectionElement = document.querySelector(".container");
const divElement = document.createElement("div");


// showing mobile navigation menu

barBtn.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("show");
})

// calling the API function on shorten button


shortenBtn.addEventListener("click", ()=>{
    console.log("I am clicked");
   creatingDiv() 
    
})

// calling API and manipulating dom function

function creatingDiv(){

        let copyText;

        const xhr = new XMLHttpRequest();
        const url = `https://api.shrtco.de/v2/shorten?url=${inputElement.value}`
        xhr.responseType = "json";
        xhr.open("GET", url, true);
        xhr.onload = ()=>{
        console.log(xhr.response);
        divElement.classList.add("row")
        divElement.classList.add("result__row")
        divElement.innerHTML = `
        <div class="col">
        <p>${xhr.response.result.original_link}</p>
        </div>
        <hr>
        <div class="col">
        <p class="short__link">${xhr.response.result.full_short_link}</p>
        <a class="btn result__btn">copy</a>
        </div>
        `;
        sectionElement.appendChild(divElement);

        document.querySelector(".result__btn").addEventListener("click", ()=>{
            document.querySelector(".result__btn").style.backgroundColor  = "black";
            document.querySelector(".result__btn").innerHTML = "copied !";
            copyText = document.querySelector(".short__link");
            CopyMe(copyText.innerHTML)
        })
        }
        
        xhr.send();
    
}


// creating the copy text clipboard

function CopyMe(TextToCopy) {
    const TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
    
  }
