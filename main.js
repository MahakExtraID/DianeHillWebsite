// JavaScript Functions for Popup Box 1
function showPopup1() {
  document.querySelector("#popup1").style.display = "block";
}

function closePopup1() {
  document.querySelector("#popup1").style.display = "none";
}

// JavaScript Functions for Popup Box 2
function showPopup2() {
  document.querySelector("#popup2").style.display = "block";
}

function closePopup2() {
  document.querySelector("#popup2").style.display = "none";
}

// JavaScript Functions for Popup Box 3
function showPopup3() {
  document.querySelector("#popup3").style.display = "block";
}

function closePopup3() {
  document.querySelector("#popup3").style.display = "none";
}

// JavaScript Functions for Popup Box 4
function showPopup4() {
  document.querySelector("#popup4").style.display = "block";
}

function closePopup4() {
  document.querySelector("#popup4").style.display = "none";
}

// JavaScript Functions for Popup Box 5
function showPopup5() {
  document.querySelector("#popup5").style.display = "block";
}

// this is for showing only an image instead of a pdf for cv preview
document.addEventListener("DOMContentLoaded", function () {
  function updatePdfSrc() {
    const embedElement = document.getElementById("pdfPreview");
    if (window.matchMedia("(max-width: 700px)").matches) {
      embedElement.src = "./images/cv_phone.png";
      embedElement.type = "image/png";
    } else {
      embedElement.src =
        "./images/Diane_Hill_Final_Portfolio_Dev_PLAR_CV_2013.pdf";
    }
  }

  // Initial check
  updatePdfSrc();

  // Listen for window resize events
  window.addEventListener("resize", updatePdfSrc);
});

function closePopup5() {
  document.querySelector("#popup5").style.display = "none";
}
