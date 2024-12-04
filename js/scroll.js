document.addEventListener('DOMContentLoaded', function () {
    const scrollToSummaryButton = document.querySelector('.scroll-to-work');
    const summaryBoxContents = document.querySelector('.summary_box_contents');

    if (scrollToSummaryButton && summaryBoxContents) {
        scrollToSummaryButton.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 링크 클릭 동작 방지
            summaryBoxContents.scrollIntoView({
                behavior: 'smooth' // 부드러운 스크롤
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const scrollToSummaryButton = document.querySelector('.scroll-to-about');
    const summaryBoxContents = document.querySelector('.about_box');

    if (scrollToSummaryButton && summaryBoxContents) {
        scrollToSummaryButton.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 링크 클릭 동작 방지
            summaryBoxContents.scrollIntoView({
                behavior: 'smooth' // 부드러운 스크롤
            });
        });
    }
});

