function applyStyles() {
    const header = document.querySelector("#title");
    const firstParagraph = document.querySelector("#myDiv").getElementsByTagName('p')[0];
    const secondParagraph = document.querySelector("#myDiv").getElementsByTagName('p')[1];
    const thirdParagraph = document.querySelector("#myDiv").getElementsByTagName('p')[2];
    const fourthParagraph = document.querySelector("#myDiv").lastElementChild;
    const unorderedList = document.querySelector("#myList");
    const span = document.querySelector("span");
    header.style.backgroundColor = "lightgreen";
    firstParagraph.style.fontWeight = "700";
    secondParagraph.style.color = "red";
    if (thirdParagraph !== null) {
        thirdParagraph.style.textDecoration = "underline";
    }
    fourthParagraph.style.fontStyle = "italic";
    unorderedList.style.display = "flex";
    unorderedList.style.listStyle = "none";
    span.style.display = "none";
}

applyStyles();

module.exports = applyStyles;