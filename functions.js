var Iframe = document.getElementById("pdfviewer")
var Button = document.getElementById("Toggler")
let showingArabic = false;

function Testing() {
    if (showingArabic) {
        Iframe.src = "./sources/pdf/English.pdf";
        showingArabic = false;
    } else {
        Iframe.src = "./sources/pdf/Arabic.pdf";
        showingArabic = true;
    }
}