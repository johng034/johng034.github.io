function languageReadMore() {
    var dots = document.getElementById("dots0");
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

function twitterReadMore() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("twitterMore");
    var btnText = document.getElementById("twitterReadMore");

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

function customerReadMore() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("customerMore");
    var btnText = document.getElementById("customerReadMore");

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

function booksReadMore() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("booksMore");
    var btnText = document.getElementById("booksReadMore");

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