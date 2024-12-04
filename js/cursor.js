// cursor.js
function setupCustomCursor() {
    const cursorParent = document.getElementById('mouse-cursor');
    const cursorChild = cursorParent.children[0];
    let scale = 1;
    let stage = '';
    let cursorX = 0, cursorY = 0;
    let isMouseMoving = false;
    let slideImageDirection = '';

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e) {
        cursorX = e.clientX - cursorParent.offsetWidth / 2;
        cursorY = e.clientY - cursorParent.offsetHeight / 2;
        isMouseMoving = true;

        const currentCursorType = e.target.getAttribute('data-cursor');
        if (currentCursorType !== stage) {
            stage = currentCursorType;
            updateCursorScaleAndName(currentCursorType, e.target.getAttribute('data-name'));
        }
        if (currentCursorType === 'final-img') {
            const direction = cursorX < window.innerWidth / 2 ? 'Prev' : 'Next';
            cursorChild.setAttribute('data-name', direction);
            stage = currentCursorType;
            updateCursorScaleAndName(currentCursorType, direction);
        } else if (currentCursorType !== stage) {
            // 다른 커서 타입일 경우, 기본 설정으로 리셋
            stage = currentCursorType;
            updateCursorScaleAndName(currentCursorType, '');
        }

        
        // 커서 위치 업데이트
        requestAnimationFrame(updateCursorPosition);
    }

    function updateCursorPosition() {
        if (isMouseMoving) {
            cursorParent.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
            isMouseMoving = false; // 한번 업데이트 한 후 false로 설정
        }
    }

    function updateCursorScaleAndName(cursorType, dataName) {
        switch (cursorType) {
            case 'oneimg':
                scale = 5;
                cursorChild.setAttribute('data-name', dataName);
                break;
            case 'link':
                scale = 5;
                cursorChild.setAttribute('data-name', '');
                break;

            case 'final-img':
                scale = 5;
                // 현재 마우스 위치가 final-img 요소의 왼쪽에 있는지 오른쪽에 있는지 체크
                slideImageDirection = cursorX < window.innerWidth / 2 ? 'Prev' : 'Next';
                cursorChild.setAttribute('data-name', slideImageDirection); // 'Prev' 또는 'Next' 설정
                break;

            default:
                scale = 1;
                cursorChild.setAttribute('data-name', '');
                break;
        }
        cursorChild.style.setProperty('--cursor-scale', scale);
    }

    function onMouseDown() {
        scale *= 0.8;
        cursorChild.style.setProperty('--cursor-scale', scale);
    }

    function onMouseUp() {
        scale *= 1.25;
        cursorChild.style.setProperty('--cursor-scale', scale);
    }
}

setupCustomCursor();
