// 모든 아코디언 버튼 선택 //이 부분은 접었다 폈다 자시고 하는 부분입니다
const accordionButtons = document.querySelectorAll('.etc_lyrics_mold_title_btn');

accordionButtons.forEach(btn => 
    {
        btn.addEventListener('click', function() 
            {
                // 버튼 바로 다음 형제 요소 중에서 etc_lyrics_mold_lyrics 클래스를 가진 요소 선택
                const content = this.nextElementSibling;
                if(content.classList.contains('etc_lyrics_mold_lyrics')) {
                    content.classList.toggle('active'); // active 클래스 붙였다 떼었다
                }
            }
        );
    }
);

window.addEventListener('scroll', function() 
    {
        const etc2024 = document.querySelector('.etc_2024');
        const rect = etc2024.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            etc2024.classList.add('active');
        }
    }
);

window.addEventListener('scroll', function() 
    {
        const etc2023 = document.querySelector('.etc_2023');
        const rect = etc2023.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if(rect.top < windowHeight * 0.8) 
        { // 화면 80% 지점에 들어오면
            etc2023.classList.add('active');
        }
    }
);