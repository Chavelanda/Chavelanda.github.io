// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
var x = window.matchMedia("(max-width: 700px)")

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    if (x.matches) {
      document.getElementById("header_1").style.gridColumn = "2 / span 3";
      document.getElementById("header_2").style.display = "none";
      document.getElementById("about_h").style.gridColumn = "8";
      document.getElementById("projects_h").style.gridColumn = "9";
      document.getElementById("contacts_h").style.gridColumn = "10";
      } else {
      document.getElementById("header_1").style.gridColumn = "1 / span 3";
      document.getElementById("header_2").style.gridColumn = "4 / span 3";
      document.getElementById("about_h").style.gridColumn = "8";
      document.getElementById("projects_h").style.gridColumn = "9";
      document.getElementById("contacts_h").style.gridColumn = "10";
    }

    document.getElementById("header").style.height = "100px";
    document.getElementById("header_4").style.display = "none";
    document.getElementById("header_5").style.display = "none";

    document.getElementById("project-name").style.fontSize = "large";
    document.getElementById("project-tagline").style.display = "none";
    document.getElementById("me").style.margin = "0";
    document.getElementById("me").style.width = "60px";
    document.getElementById("me").style.height = "60px";

  } else {
    document.getElementById("header").style.height = "100%";
    document.getElementById("header_1").style.gridColumn = "1 / span 11";
    document.getElementById("header_2").style.display = "block";
    document.getElementById("header_2").style.gridColumn = "1 / span 11";
    document.getElementById("about_h").style.gridColumn = "5";
    document.getElementById("projects_h").style.gridColumn = "6";
    document.getElementById("contacts_h").style.gridColumn = "7";
    document.getElementById("header_4").style.display = "revert";
    document.getElementById("header_5").style.display = "revert";

    document.getElementById("project-name").style.fontSize = "xx-large";
    document.getElementById("project-tagline").style.display = "revert";
    document.getElementById("me").style.width = "200px";
    document.getElementById("me").style.height = "200px";
    document.getElementById("me").style.margin = "30px";

  }

}
