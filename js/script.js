
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

function readmore() {
  var moreText = document.getElementById("more");
  var linkText = document.getElementById("readLink");
  if (linkText.innerHTML === "Read more") {
    linkText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  } else {
      linkText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    }
};