// ウィンドウのドラッグ機能
const windowElement = document.querySelector('.window');
let isDragging = false;
let offsetX, offsetY;

windowElement.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - windowElement.offsetLeft;
    offsetY = e.clientY - windowElement.offsetTop;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        windowElement.style.left = e.clientX - offsetX + 'px';
        windowElement.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});
