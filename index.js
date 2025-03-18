const sliders = [
    { 
        list: document.getElementById('slider'), 
        btnLeft: document.querySelector('.left'), 
        btnRight: document.querySelector('.right'),
        scrollAmount: 500
    },
    { 
        list: document.getElementById('movieList'), 
        btnLeft: document.querySelector('.nav-left'), 
        btnRight: document.querySelector('.nav-right'),
        scrollAmount: 500
    }
];

// Cập nhật trạng thái hiển thị của nút điều hướng
function updateNavButtons(slider) {
    const { list, btnLeft, btnRight } = slider;
    const isAtStart = Math.ceil(list.scrollLeft) <= 0;
    const isAtEnd = Math.ceil(list.scrollLeft) + list.clientWidth >= list.scrollWidth;

    btnLeft.style.display = isAtStart ? 'none' : 'block';
    btnRight.style.display = isAtEnd ? 'none' : 'block';
}

// Xử lý cuộn trái
function scrollLeftAction(slider) {
    slider.list.scrollBy({ left: -slider.scrollAmount, behavior: 'smooth' });
    setTimeout(() => updateNavButtons(slider), 300);
}

// Xử lý cuộn phải
function scrollRightAction(slider) {
    slider.list.scrollBy({ left: slider.scrollAmount, behavior: 'smooth' });
    setTimeout(() => updateNavButtons(slider), 300);
}

// Áp dụng sự kiện cho từng thanh trượt
sliders.forEach(slider => {
    if (slider.list && slider.btnLeft && slider.btnRight) {
        slider.list.addEventListener('scroll', () => updateNavButtons(slider));
        window.addEventListener('load', () => updateNavButtons(slider));
        
        slider.btnLeft.addEventListener('click', () => scrollLeftAction(slider));
        slider.btnRight.addEventListener('click', () => scrollRightAction(slider));

        // Debug thông tin thanh cuộn
        slider.list.addEventListener('scroll', () => {
            console.log(`🔹 [${slider.list.id}] Vị trí:`, slider.list.scrollLeft);
            console.log(`🔹 [${slider.list.id}] scrollWidth:`, slider.list.scrollWidth);
            console.log(`🔹 [${slider.list.id}] clientWidth:`, slider.list.clientWidth);
            console.log(`🔹 [${slider.list.id}] Có thể cuộn không:`, slider.list.scrollWidth > slider.list.clientWidth);
        });
    }
});