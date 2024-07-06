const generatorDiv = document.querySelector(".generator");
const generateBtn = document.querySelector(".generator-form button");
const qrInput = document.querySelector(".generator-form input");
const qrImg = document.querySelector(".generator-img img");
const downloadBtn = document.querySelector(".generator-btn .btn-link");

let imgURL = '';

/**
 * Handles the generate button click event.
**/
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue) return;

    generateBtn.innerText = "Generating QR Code...";

    imgURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.src = imgURL;

    qrImg.addEventListener("load", () => {
        generatorDiv.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

/**
 * Handles the download button click event.
 * Downloads the generated QR code image as a PNG file.
 */
downloadBtn.addEventListener("click", () => {
    if (!imgURL) return;
    fetchImage(imgURL);
});

/**
 * Fetches the QR code image from the API and downloads it as a file.
 */
function fetchImage(url) {
    fetch(url)
        .then(res => res.blob())
        .then(file => {
            let file_name = "qr_code";
            let extension = "png";
            download(URL.createObjectURL(file), file_name, extension);
        })
        .catch(() => imgURL = '');
}


/**
 * Downloads a file from a temporary URL.
 */
function download(tempFile, file_name, extension) {
    let a = document.createElement('a');
    a.href = tempFile;
    a.download = `${file_name}.${extension}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
}