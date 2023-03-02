// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("header").style.height = "100px";
    document.getElementById("header_2").style.gridColumn = "2";
    document.getElementById("header_3").style.gridColumn = "3";
    document.getElementById("project-name").style.fontSize = "large";
    document.getElementById("project-tagline").style.display = "none";
    document.getElementById("me").style.width = "60px";
    document.getElementById("me").style.height = "60px";
    document.getElementById("me").style.margin = "0";
    document.getElementById("header_4").style.display = "none";
  } else {
    document.getElementById("header").style.height = "100%";
    document.getElementById("header_2").style.gridColumn = "1";
    document.getElementById("header_3").style.gridColumn = "1";
    document.getElementById("project-name").style.fontSize = "xx-large";
    document.getElementById("project-tagline").style.display = "revert";
    document.getElementById("me").style.width = "200px";
    document.getElementById("me").style.height = "200px";
    document.getElementById("me").style.margin = "30px";
    document.getElementById("header_4").style.display = "revert";
  }

}
