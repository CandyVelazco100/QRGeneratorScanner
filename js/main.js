const generatorTab = document.querySelector(".nav-gene");
const scannerTab = document.querySelector(".nav-scan");

/**
   * Toggle active state and show generator content, hide scanner content
**/
generatorTab.addEventListener("click", () => {
    generatorTab.classList.add("active");
    scannerTab.classList.remove("active");

    document.querySelector(".scanner").style.display = "none";
    document.querySelector(".generator").style.display = "block";
})

/**
   * Toggle active state and show scanner content, hide generator content
**/
scannerTab.addEventListener("click", () => {
    scannerTab.classList.add("active");
    generatorTab.classList.remove("active");

    document.querySelector(".scanner").style.display = "block";
    document.querySelector(".generator").style.display = "none";
})