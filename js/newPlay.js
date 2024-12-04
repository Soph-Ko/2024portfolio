document.addEventListener('DOMContentLoaded', () => {
    const numberOfImages = 5;
    const minimap = document.querySelector(".minimap .preview");
    const fullSizeContainer = document.querySelector(".newplay-images");

    minimap.innerHTML = '';
    fullSizeContainer.innerHTML = '';

    let activeThumbnail = null;
    const imageDescriptions = [
        'Glory Okra Logo, 2024', // 이미지 1에 대한 설명
        'Animal Bubble, 2024', // 이미지 2에 대한 설명
        'Blur Face, 2024', // 이미지 3에 대한 설명
        'Universe, 2021', // 이미지 4에 대한 설명
        'Typograph Poster, 2023'  // 이미지 5에 대한 설명
    ];

    for (let i = 1; i <= numberOfImages; i++) {
        // 이미지 경로 설정 (1-3번은 gif, 4-5번은 png)
        const imagePath = (i <= 3) ? `/asset/newPlay${i}.gif` : `/asset/newPlay${i}.png`;

        // 썸네일 div 생성
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.className = 'newplay-img-thumbnail';
        thumbnailDiv.style.opacity = 0.5;  // 초기 opacity 설정 (0.5)
        const imgThumbnail = document.createElement('img');
        imgThumbnail.className = 'newPlay-img-each';
        imgThumbnail.src = imagePath;
        thumbnailDiv.appendChild(imgThumbnail);
        minimap.appendChild(thumbnailDiv);

        // 전체 이미지 div 생성
        const imgDiv = document.createElement('div');
        imgDiv.className = 'newplay-img';
        
        const imgFull = document.createElement('img');
        imgFull.className = 'newPlay-img-each';
        imgFull.src = imagePath;

        // 첫 번째 이미지에만 링크 추가
        if (i === 1) {
            const link = document.createElement('a');
            link.href = "https://editor.p5js.org/Soph-Ko/full/3mN3XhmNs"; // 첫 번째 이미지에 링크 추가
            link.target = "_blank";  // 새 탭에서 열기
            link.appendChild(imgFull);  // 이미지를 링크 태그로 감쌈
            imgDiv.appendChild(link);  // imgDiv에 링크 추가
        } else {
            imgDiv.appendChild(imgFull);  // 링크가 없으면 그냥 이미지만 추가
        }

        // 설명 텍스트 추가
        const descriptionText = document.createElement('p');  // 설명 텍스트 추가
        descriptionText.className = 'image-description';  // 클래스 추가
        descriptionText.textContent = imageDescriptions[i - 1]; // 설명 텍스트 설정
        imgDiv.appendChild(descriptionText);

        fullSizeContainer.appendChild(imgDiv);

        // ScrollTrigger 설정
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imgDiv,
            start: "top+=5px center", // 이미지 상단이 화면 중앙 5px 아래에서 시작
            end: "bottom-=5px center", // 이미지 하단이 화면 중앙 5px 위에서 끝
            onToggle: self => {
                if (self.isActive) {
                    if (activeThumbnail && activeThumbnail !== thumbnailDiv) {
                        animateThumbnail(activeThumbnail, false);
                    }
                    animateThumbnail(thumbnailDiv, true);
                    activeThumbnail = thumbnailDiv;
                } else if (activeThumbnail === thumbnailDiv) {
                    animateThumbnail(thumbnailDiv, false);
                }
            }
        });
    }

    // 썸네일 애니메이션 함수
    function animateThumbnail(thumbnail, isActive) {
        gsap.to(thumbnail, {
            border: isActive ? '1px solid #fff' : 'none',
            opacity: isActive ? 1 : 0.5,  // isActive일 때 1로 변경, 아닐 때는 0.5
            scale: isActive ? 1.3 : 1,
            zIndex: isActive ? 10000 : 1,
            duration: 0.3
        });
    }
});
