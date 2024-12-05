function setupPreLoader() {
    // 세션 스토리지에서 'preloaderShown' 값 확인
    if (sessionStorage.getItem('preloaderShown') === 'true') {
        // 'preloaderShown'이 true일 경우, 프리로더를 표시하지 않음
        removePreLoader();
        return;
    }

    let counterElement = document.querySelector(".count p");
    let currentValue = 0;

    // 헤더 숨기기
    const header = document.querySelector(".new_header");
    if (header) {
        header.style.opacity = 0; // 시작할 때 헤더 숨기기
        header.style.visibility = "hidden"; // 헤더를 보이지 않게 설정
    }

    function updateCounter() {
        if (currentValue < 100) {
            let increment = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counterElement.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        } else {
            // 카운터가 100에 도달해도 프리로더 제거는 하지 않음
        }
    }

    updateCounter();
    gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.5 });

    let textWrapper = document.querySelector(".ml16");
    textWrapper.innerHTML = textWrapper.textContent.replace(/./g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.ml16 .letter',
            translateY: [-100, 0],
            easing: "easeOutExpo",
            duration: 1500,
            delay: (el, i) => 30 * i
        })
        .add({
            targets: '.ml16 .letter',
            translateY: [0, 100],
            easing: "easeOutExpo",
            duration: 3000,
            delay: (el, i) => 2000 + 30 * i
        })
        .add({
            // 모든 애니메이션이 완료된 후 프리로더 제거
            complete: removePreLoader
        });

    gsap.to(".pre-loader", {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 2,
        delay: 3
    });

    gsap.to(".loader", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75
    });

    gsap.to(".loader-bg", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4
    });

    gsap.to(".new_main_title", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4.5,
        stagger: 0.25
    });

    gsap.to(".new_header", {
        opacity: 1,
        visibility: "visible",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4.5
    });
}

function removePreLoader() {
    // 프리로더 요소와 관련된 콘텐츠 숨기기
    const preloader = document.querySelector(".pre-loader-container");
    const loaderContent = document.querySelector(".loader-content");
    
    if (preloader) {
        preloader.style.display = "none"; // 프리로더 숨기기
    }

    if (loaderContent) {
        loaderContent.style.display = "none"; // 로더 콘텐츠 숨기기
    }

    // 헤더 보이게 하기
    const header = document.querySelector(".new_header");
    if (header) {
        header.style.opacity = 1; // 헤더 보이게 하기
        header.style.visibility = "visible"; // 헤더를 다시 보이게 설정
    }

    // 세션 스토리지에 'preloaderShown' 값 저장 (한 번만 보이도록 설정)
    sessionStorage.setItem('preloaderShown', 'true');
}

// 모듈 초기화
setupPreLoader();
