// Navbar highlight
var lis = document.querySelectorAll('.navbar-site-links li');

var currentUrl = window.location.pathname;

for (var i = 0; i < lis.length; i++) {
    var anchor = lis[i].querySelector('a');
    
  if (anchor.getAttribute('href') === currentUrl) {
    lis[i].classList.add('active');
  }
}


// Footer position

if (document.body.clientHeight < window.innerHeight) {
    document.querySelector('.footer').style.position = 'fixed';
    document.querySelector('.footer').style.bottom = "0";
}
