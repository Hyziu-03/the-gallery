var learnMore = document.getElementById('learn-more');
var headerOffset = document.getElementById('header').clientHeight * 1.5;

learnMore.addEventListener('click', function () {
    var paragraph = document.querySelector('.paragraph-container');
    var targetPosition = paragraph.getBoundingClientRect().top;
    var scrollTarget = targetPosition - headerOffset;

    window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
    });
});
