const scannerDiv = document.querySelector(".scanner");

const camera = scannerDiv.querySelector("h1 .fa-camera");
const stopCam = scannerDiv.querySelector("h1 .fa-circle-stop");

const form = scannerDiv.querySelector(".scanner-form");
const fileInput = form.querySelector("input");
const p = form.querySelector("p");
const img = form.querySelector("img");
const video = form.querySelector("video");
const content = form.querySelector(".content");

const textarea = scannerDiv.querySelector(".scanner-details textarea");
const copyBtn = scannerDiv.querySelector(".scanner-details .copy");
const closeBtn = scannerDiv.querySelector(".scanner-details .close");

/**
 * Adds an event listener to the form element to trigger the file input click event.
 */
form.addEventListener("click", () => fileInput.click());

/**
 * Adds an event listener to the file input element to handle file changes.
*/
fileInput.addEventListener("change", e => {
    let file = e.target.files[0];
    if(!file) return;
    fetchRequest(file);
})

/**
 * Sends a POST request to the QR code API to scan the uploaded file.
 */
function fetchRequest(file){
    let formData = new FormData();
    formData.append("file", file);

    p.innerText = "Scanning QR Code...";
    fetch(`http://api.qrserver.com/v1/read-qr-code/`, {
        method: "POST", body: formData
    }).then(res => res.json()).then(result => {
        let text = result[0].symbol[0].data;

        if(!text)
            return p.innerText = "Couldn't Scan QR Code";
        
        scannerDiv.classList.add("active");
        form.classList.add("active-img");

        img.src = URL.createObjectURL(file);
        textarea.innerText = text;
    })
}

/**
 * Adds an event listener to the copy button element to copy the scanned QR code text to the clipboard.
 */
copyBtn.addEventListener("click", () => {
    let text = textarea.textContent;
    navigator.clipboard.writeText(text);
})