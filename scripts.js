// Supplier Portal - scripts.js //

// Displays the other locations for each supplier
function readMore(x) {
    var x = document.getElementById(x);
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else { x.style.display = "none"; }
}

// Displays the Meeting Request modal
var modal = document.getElementById('modal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Displays the container the user selects from the navbar
function display(x, z) {
    var x = document.getElementById(x);     // the content
    var z = document.getElementById(z);     // the navbar item
    var options = ["overview", "infractions", "agreements", "history", "notes"];
    var opts = ["ovr", "inf", "agr", "his", "not"];

    if (x.style.display === "none") {
        for (let i = 0; i < opts.length; i++) {
            if (document.getElementById(opts[i]).style.borderBottom != "none") {
                document.getElementById(opts[i]).style.borderBottom = "none";
                document.getElementById(opts[i]).style.color = "rgb(109, 109, 109)";
                document.getElementById(opts[i]).style.fontWeight = "normal";
            }
        }
        for (let i = 0; i < options.length; i++) {
            if (document.getElementById(options[i]).style.display != "none") {
                document.getElementById(options[i]).style.display = "none";
            }
        }
        z.style.borderBottom = "2px solid #51B5E0";
        z.style.color = "#51B5E0";
        z.style.fontWeight = "bold";
        x.style.display = "inline-block";
    }
}

// Displays the second container the user selects from the contacts navbar
function display2(x, z) {
    var x = document.getElementById(x);     // the content
    var z = document.getElementById(z);     // the navbar item
    var options = ["main", "audit", "supplier", "other"];
    var opts = ["man", "aud", "sup", "oth"];

    if (x.style.display === "none") {
        for (let i = 0; i < opts.length; i++) {
            if (document.getElementById(opts[i]).style.borderBottom != "none") {
                document.getElementById(opts[i]).style.borderBottom = "none";
                document.getElementById(opts[i]).style.color = "rgb(109, 109, 109)";
                document.getElementById(opts[i]).style.fontWeight = "normal";
            }
        }
        for (let i = 0; i < options.length; i++) {
            if (document.getElementById(options[i]).style.display != "none") {
                document.getElementById(options[i]).style.display = "none";
            }
        }
        z.style.borderBottom = "2px solid #51B5E0";
        z.style.color = "#51B5E0";
        z.style.fontWeight = "bold";
        x.style.display = "inline-block";
    }
}

// The Infractions slides
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("infSlides");
  if (n > slides.length) {slideIndex = 1}   
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "inline-block"; 
  dots[slideIndex-1].className += " active";
}
