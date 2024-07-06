const generatorDiv = document.querySelector(".generator");
const generateBtn = document.querySelector(".generator-form button");
const qrInput = document.querySelector(".generator-form input");
const qrImg = document.querySelector(".generator-img img");
const downloadBtn = document.querySelector(".generator-btn .btn-link");

let imgURL = ' ';

/**
 * Handles the generate button click event.
**/
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue.trim()) return;

    generateBtn.innerText = "Generating QR Code... ";

    imgURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.src = imgURL;

    qrImg.addEventListener("load", () => {
        generatorDiv.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    })
    
    console.log(imgURL);
})