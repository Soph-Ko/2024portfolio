document.addEventListener('DOMContentLoaded', () => {
    const bgElements = document.querySelectorAll('.half-rec-bg'); // 배경 요소들

    window.addEventListener('scroll', () => {
        bgElements.forEach((bg) => {
            const img = bg.querySelector('img'); // 배경 안의 이미지
            const rect = bg.getBoundingClientRect(); // 배경 요소의 위치
            const viewportHeight = window.innerHeight; // 뷰포트 높이

            // 요소가 뷰포트 안에 들어오는지 확인
            if (rect.top < viewportHeight && rect.bottom > 0) {
                img.style.transform = 'scale(1)'; // 축소
            } else {
                img.style.transform = 'scale(1.2)'; // 확대 (기본 상태로 돌아감)
            }
        });
    });
});
