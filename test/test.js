    const movieList = document.getElementById('slider');
    const btnLeft = document.querySelector('.left');
    const btnRight = document.querySelector('.right');
    function updateNavButtons() {
        const isAtStart = Math.ceil(movieList.scrollLeft) <= 0;
        const isAtEnd = Math.ceil(movieList.scrollLeft) + movieList.clientWidth >= movieList.scrollWidth;

        btnLeft.style.display = isAtStart ? 'none' : 'block';
        btnRight.style.display = isAtEnd ? 'none' : 'block';
    }
    movieList.addEventListener('scroll', updateNavButtons);
    window.addEventListener('load', updateNavButtons);
    function scrollLeftAction() {
        movieList.scrollBy({ left: -100, behavior: 'smooth' });
        setTimeout(updateNavButtons, 1);
    }

    function scrollRightAction() {
        movieList.scrollBy({ left: 100, behavior: 'smooth' });
        setTimeout(updateNavButtons, 1);
    }


    movieList.addEventListener('scroll', () => {
        console.log("Vị trí hiện tại của thanh trượt:", movieList.scrollLeft);
        console.log("scrollWidth:", movieList.scrollWidth);
        console.log("clientWidth:", movieList.clientWidth);
        console.log("Có thể cuộn không:", movieList.scrollWidth > movieList.clientWidth);
    });
