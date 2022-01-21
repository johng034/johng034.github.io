function readMore() {
    var dots = document.getElementById("dots0");
    // var tag = dots.getAttributeNames
    var moreText = document.getElementById("languageMore");
    var btnText = document.getElementById("languageReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}