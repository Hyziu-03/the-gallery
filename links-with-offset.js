var offer = document.getElementById('offer');
var contact = document.getElementById('contact');
var landingPage = document.getElementById('btn-hand-down');
var notableProgrammers = document.getElementById('notable-programmers');
var socialMediaCreators = document.getElementById('social-media-creators');
var notableDesigners = document.getElementById('notable-designers');
var famousCryptographers = document.getElementById('famous-cryptographers');
var headerOffset = document.getElementById('header').clientHeight * 1.5;

offer.addEventListener('click', function() {
    var categoriesSection = document.getElementById('categories-container');
    var targetPosition = categoriesSection.getBoundingClientRect().top;
    var scrollTarget = targetPosition - headerOffset;

    window.scrollTo({
        top: scrollTarget, 
        behavior: 'smooth'
    });
});

contact.addEventListener('click', function() {
    var form = document.getElementById('form-container');
    var targetPosition = form.getBoundingClientRect().top;
    var scrollTarget = targetPosition - headerOffset;

    window.scrollTo({
       top: scrollTarget,
       behavior: 'smooth' 
    });
});

landingPage.addEventListener('click', function() {
    var categoriesSection = document.getElementById('categories-container');
    var targetPosition = categoriesSection.getBoundingClientRect().top;
    var scrollTarget = targetPosition - headerOffset;

    window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
    });
});

notableProgrammers.addEventListener('click', function() {
    window.location.href = '';
});

socialMediaCreators.addEventListener('click', function() {
    window.location.href = '';
});

notableDesigners.addEventListener('click', function() {
    window.location.href = '';
});

famousCryptographers.addEventListener('click', function() {
    window.location.href = '';
});
