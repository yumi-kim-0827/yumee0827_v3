$(document).ready(function () {
     
      // // 로딩페이지
          // HTML에서 아이디가 load인 엘리먼트를 가져옵니다.
         const loadElement = document.getElementById('load');

          // 투명도를 조절할 초기값과 변경량을 정의합니다.
          let opacityValue = 1;
          const opacityIncrement = 0.05;
          window.addEventListener('load', () => {
          // 일정 시간마다 투명도를 감소시키는 함수를 정의합니다.
          function decreaseOpacity() {
            // 투명도 값을 감소시킵니다.
            opacityValue -= opacityIncrement;
            // 아이디가 load인 엘리먼트의 투명도를 변경합니다.
            loadElement.style.opacity = opacityValue;

            // 투명도가 0이 될 때까지 일정 시간마다 함수를 호출합니다.
            if (opacityValue > 0) {
              setTimeout(decreaseOpacity, 50);
            } else {
              // 투명도가 0이 되면 엘리먼트를 숨깁니다.
              loadElement.style.display = 'none';
            }
          }

          // decreaseOpacity 함수를 호출하여 투명도를 감소시킵니다.
          setTimeout(decreaseOpacity, 3000);

        });
   
      // 프로젝트 리스트 갤러리 썸네일 호버
            // 썸네일 요소들을 모두 선택합니다.
            const thumbnails = document.querySelectorAll(".project");

            // 각 썸네일 요소에 대해 반복문을 수행합니다.
            thumbnails.forEach((thumbnail) => {
              // 마우스 호버 이벤트 리스너를 등록합니다.
              thumbnail.addEventListener("mouseover", () => {
                // 해당 썸네일 요소 내부의 설명 요소를 찾습니다.
                const description = thumbnail.querySelector(".thumb_txt");
                // 설명 요소를 보여줍니다.
                description.style.display = "block";
               });
              
              // 마우스 이탈 이벤트 리스너를 등록합니다.
                thumbnail.addEventListener("mouseout", () => {
                  // 해당 썸네일 요소 내부의 설명 요소를 찾습니다.
                  const description = thumbnail.querySelector(".thumb_txt");
                  // 설명 요소를 숨깁니다.
                  description.style.display = "none";
                });
              });




      // 메인 비쥬얼 각 슬라이드 스크롤 크기 이벤트
          // 이미지 요소1를 선택합니다.
          const image1 = document.querySelector(".main_slide .swiper-slide:nth-child(1) .img_container img");

          // 이미지 요소의 기본 높이를 저장합니다.
          const defaultHeight = image1.clientHeight;

          // 스크롤 이벤트 리스너를 등록합니다.
          window.addEventListener("scroll", () => {
          // 스크롤 위치를 계산합니다.
          const scrollTop = window.scrollY || window.pageYOffset;

          // 이미지 요소의 크기를 조절합니다.
          image1.style.transform = `scale(${1 + scrollTop / defaultHeight / 2})`;
          });

        
          // 이미지 요소2를 선택합니다.
          const image2 = document.querySelector(".main_slide .swiper-slide:nth-child(2) .img_container img");

          // 이미지 요소의 기본 높이를 저장합니다.
          const defaultHeight2 = image2.clientHeight;

          // 스크롤 이벤트 리스너를 등록합니다.
          window.addEventListener("scroll", () => {
          // 스크롤 위치를 계산합니다.
          const scrollTop = window.scrollY || window.pageYOffset;

          // 이미지 요소의 크기를 조절합니다.
          image2.style.transform = `scale(${1 + scrollTop / defaultHeight2 / 2})`;
          });


          // 이미지 요소3를 선택합니다.
          const image3 = document.querySelector(".main_slide .swiper-slide:nth-child(3) .img_container img");

          // 이미지 요소의 기본 높이를 저장합니다.
          const defaultHeight3 = image3.clientHeight;

          // 스크롤 이벤트 리스너를 등록합니다.
          window.addEventListener("scroll", () => {
          // 스크롤 위치를 계산합니다.
          const scrollTop = window.scrollY || window.pageYOffset;

          // 이미지 요소의 크기를 조절합니다.
          image3.style.transform = `scale(${1 + scrollTop / defaultHeight3 / 2})`;
          });


          // 미디어쿼리 매칭 객체 생성
          var mq = window.matchMedia('(max-width:991px)');

          // 매칭 상태 변경 시 이벤트 핸들러 등록
          mq.addListener(handleMediaQuery);

          // 페이지 로드 시 초기 실행
          handleMediaQuery(mq);

          // 미디어쿼리 매칭 상태에 따라 요소의 클래스명 변경
          function handleMediaQuery(mq) {
            var element = document.getElementById('v-pills-tab');
            if (mq.matches) {
              // 일정한 크기 이하일 때 클래스명 제거
              element.classList.remove('flex-column');
            } else {
              // 일정한 크기 이상일 때 클래스명 추가
              element.classList.add('flex-column');
            }
          }

});