const images = document.querySelectorAll('.profile_img2'); // 모든 이미지 선택

window.addEventListener('scroll', function() 
    {
        const windowHeight = window.innerHeight;

        images.forEach(img => 
            {
                const rect = img.getBoundingClientRect();
                if(rect.top < windowHeight * 0.8) { // 화면 80% 지점에 들어오면
                    img.classList.add('active');
                }
            }
        );
    });//클래스 이름 같은 사진 여러개 액션 적용

//글자부분 액션
const hrs = document.querySelectorAll('.info_hr1'); // 모든 hr 선택

window.addEventListener('scroll', function() 
    {
        const windowHeight = window.innerHeight;

        hrs.forEach(hr => 
            {
                const rect = hr.getBoundingClientRect();
                if(rect.top < windowHeight * 0.8) {// 화면 80% 지점에 들어오면
                    hr.classList.add('active');
                }
            }
        );
    }
);//hr여러개라서 이렇게 써야함

window.addEventListener('scroll', function() 
    {
        const profileInfoLife = document.querySelector('.profile_info_life');
        const rect = profileInfoLife.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            profileInfoLife.classList.add('active');
        }
    }
);


window.addEventListener('scroll', function() 
    {
        const profileInfoAnimation = document.querySelector('.profile_info_animation');
        const rect = profileInfoAnimation.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            profileInfoAnimation.classList.add('active');
        }
    }
);

window.addEventListener('scroll', function() 
    {
        const profileInfoInterest = document.querySelector('.profile_info_interest');
        const rect = profileInfoInterest.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            profileInfoInterest.classList.add('active');
        }
    }
);

window.addEventListener('scroll', function() 
    {
        const profileInfoFood = document.querySelector('.profile_info_food');
        const rect = profileInfoFood.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            profileInfoFood.classList.add('active');
        }
    }
);

window.addEventListener('scroll', function() 
    {
        const profileInfoMusic = document.querySelector('.profile_info_music');
        const rect = profileInfoMusic.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            profileInfoMusic.classList.add('active');
        }
    }
);

window.addEventListener('scroll', function() 
    {
        const profileInfoLearn = document.querySelector('.profile_info_learn');
        const rect = profileInfoLearn.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            profileInfoLearn.classList.add('active');
        }
    }
);