window.addEventListener('scroll', function() 
    {
        const mainImg2 = document.querySelector('.main_img2');
        const rect = mainImg2.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            mainImg2.classList.add('active');
        }
    }
);

window.addEventListener('scroll', function() 
    {
        const mainImg3 = document.querySelector('.main_img3');
        const rect = mainImg3.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            mainImg3.classList.add('active');
        }
    }
);

window.addEventListener('scroll', function() 
    {
        const mainImg4 = document.querySelector('.main_img4');
        const rect = mainImg4.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            mainImg4.classList.add('active');
        }
    }
);