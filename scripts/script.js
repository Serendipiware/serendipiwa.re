let blurBackground = document.querySelector("#blur");
let exploreButton = document.querySelector("#exploreButton");
let main = document.querySelector("#main");
const blurZoomAnimation = () => {
    blurBackground.style.width = "5000px";
    blurBackground.style.height = "5000px";
    main.style.opacity = "0%";
    setTimeout(() => {
        blurBackground.style.width = "0px";
        blurBackground.style.height = "0px";
        blurBackground.style.opacity = "0%";
        document.body.style.backgroundColor = "#FFFFFF";
    }, 1000)
    setTimeout(() => {
        location.href = "https://bento.me/serendipiware";
    }, 2000)
}
exploreButton.addEventListener("click", blurZoomAnimation);