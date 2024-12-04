const images = [
    '/asset/img_process_1.svg',
    '/asset/img_process_2.svg', 
    '/asset/img_process_3.svg',
    '/asset/img_process_4.png'
    
];
let currentIndex = 0;

function changeImage(event) {
    const imgElement = document.querySelector('.final-img');
    const processIndexElement = document.querySelector('.process-index');  // Process (1 / 3) 부분 선택
    const processDetails = document.querySelectorAll('.process-detail');  // 모든 process-detail 요소들

    const isRightSideClick = event.clientX > window.innerWidth / 2;
    
    let nextIndex;
    if (isRightSideClick) {
        nextIndex = (currentIndex + 1) % images.length;

        imgElement.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            imgElement.src = images[nextIndex];
            imgElement.style.transition = 'none';
            imgElement.style.transform = 'translateX(100%)';
            
            setTimeout(() => {
                imgElement.style.transition = 'transform 0.5s ease';
                imgElement.style.transform = 'translateX(0)';
            }, 50);

            currentIndex = nextIndex;

            // Process (1 / 3) 텍스트 업데이트
            processIndexElement.textContent = `(${currentIndex + 1} / ${images.length})`;

            // 현재 인덱스에 해당하는 process-detail을 보여주기
            processDetails.forEach((detail, index) => {
                detail.style.display = index === currentIndex ? 'block' : 'none';
            });
        }, 500);
    } else {
        nextIndex = (currentIndex - 1 + images.length) % images.length;

        imgElement.style.transform = 'translateX(100%)';
        setTimeout(() => {
            imgElement.src = images[nextIndex];
            imgElement.style.transition = 'none';
            imgElement.style.transform = 'translateX(-100%)';

            setTimeout(() => {
                imgElement.style.transition = 'transform 0.5s ease';
                imgElement.style.transform = 'translateX(0)';
            }, 50);

            currentIndex = nextIndex;

            // Process (1 / 3) 텍스트 업데이트
            processIndexElement.textContent = `(${currentIndex + 1} / ${images.length})`;

            // 현재 인덱스에 해당하는 process-detail을 보여주기
            processDetails.forEach((detail, index) => {
                detail.style.display = index === currentIndex ? 'block' : 'none';
            });
        }, 500);
    } 
}
