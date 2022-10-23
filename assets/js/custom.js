function readMore(clicked_id) {
    // Select the correct project
    let projects = document.getElementsByClassName("project-info");
    let relevantInfo = projects[clicked_id];

    // Get the information we are looking for
    var dots = relevantInfo.getElementsByClassName("dots")[0];
    var hiddenText = relevantInfo.getElementsByClassName("hidden-text")[0];
    var buttonText = relevantInfo.getElementsByClassName("read-more-button")[0];

    // Show or hide text
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        buttonText.innerHTML = "Read more";
        hiddenText.style.display = "none";
    } else {
        dots.style.display = "none";
        buttonText.innerHTML = "Read less";
        hiddenText.style.display = "inline";
    }
}