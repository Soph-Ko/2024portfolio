const images = [
    '/asset/alarm_solution_research1.svg',
    '/asset/alarm_solution_research2.svg'
];

let currentIndex = 0;

function changeImage(event) {
    const imgElement = document.querySelector('.final-img'); // 이미지 요소 선택

    const isRightSideClick = event.clientX > window.innerWidth / 2; // 클릭 위치 판단
    let nextIndex;

    if (isRightSideClick) {
        // 오른쪽 클릭 시
        nextIndex = (currentIndex + 1) % images.length;

        imgElement.style.transform = 'translateX(-100%)'; // 왼쪽으로 슬라이드 아웃
        setTimeout(() => {
            imgElement.src = images[nextIndex]; // 새로운 이미지 로드
            imgElement.style.transition = 'none'; // 애니메이션 제거
            imgElement.style.transform = 'translateX(100%)'; // 오른쪽으로 초기화

            setTimeout(() => {
                imgElement.style.transition = 'transform 0.5s ease'; // 애니메이션 복원
                imgElement.style.transform = 'translateX(0)'; // 중앙으로 슬라이드 인
            }, 50);

            currentIndex = nextIndex; // 현재 인덱스 업데이트
        }, 500);
    } else {
        // 왼쪽 클릭 시
        nextIndex = (currentIndex - 1 + images.length) % images.length;

        imgElement.style.transform = 'translateX(100%)'; // 오른쪽으로 슬라이드 아웃
        setTimeout(() => {
            imgElement.src = images[nextIndex]; // 새로운 이미지 로드
            imgElement.style.transition = 'none'; // 애니메이션 제거
            imgElement.style.transform = 'translateX(-100%)'; // 왼쪽으로 초기화

            setTimeout(() => {
                imgElement.style.transition = 'transform 0.5s ease'; // 애니메이션 복원
                imgElement.style.transform = 'translateX(0)'; // 중앙으로 슬라이드 인
            }, 50);

            currentIndex = nextIndex; // 현재 인덱스 업데이트
        }, 500);
    }
}
