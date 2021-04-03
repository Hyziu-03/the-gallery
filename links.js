var header = document.getElementById('logo');
header.addEventListener('click', function () {
    window.location.href = 'index.html';
});

var aboutUs = document.getElementById('about-us');
aboutUs.addEventListener('click', function () {
    window.location.href = '';
});

var offer = document.getElementById('offer');
var categories = document.getElementById('categories-container');
offer.addEventListener('click', function () {
    categories.scrollIntoView({
        behavior: 'smooth'
    });
});

var contact = document.getElementById('contact');
var form = document.getElementById('form-container');
contact.addEventListener('click', function () {
    form.scrollIntoView({
        behavior: 'smooth'
    });
});
