
//   <-------------------Crauser-1 Start---------------------->
let imageCr1 = [
    "https://d32baadbbpueqt.cloudfront.net/Collection/fce94cf1-876b-4357-92d6-f299f4bbed63.jpg",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff2f896f0-0134-446d-b9ad-b35d2fe5267d.jpg&w=1920&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F5ea4489f-475c-4d13-856b-2afab919ffb5.gif&w=1920&q=75",
  ];
  
  document.querySelector(".btn1").addEventListener("click", moveRight);
  imgCounter = 0;
  function moveRight() {
    imgCounter++;
    if (imgCounter == imageCr1.length) {
      imgCounter = 0;
    }
    document.querySelector(".crauser1").src = imageCr1[imgCounter];
  }
  
  document.querySelector(".btn2").addEventListener("click", moveLeft);
  
  function moveLeft() {
    imgCounter--;
    if (imgCounter < 0) {
      imgCounter = imageCr1.length - 1;
    }
    document.querySelector(".crauser1").src = imageCr1[imgCounter];
  }
  //   <-------------------Crauser-1 End---------------------->
   //   <-------------------Crauser-2 Start---------------------->
   let imageCr2 = [
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F36ceb388-0c68-47be-b39d-c893aa6caed9.jpg&w=1920&q=75",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fb3fbeba-23b1-42cf-946d-d69c2a3f393f.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/10821512-ceff-4594-934a-86cbde6c6a44.jpg",
  ];
  
  document.querySelector(".btn3").addEventListener("click", moveR);
  imgCounter1 = 0;
  function moveR() {
    imgCounter1++;
    if (imgCounter1 == imageCr2.length) {
      imgCounter1 = 0;
    }
    document.querySelector(".crauser2").src = imageCr2[imgCounter1];
  }
  
  document.querySelector(".btn4").addEventListener("click", moveL);
  
  function moveL() {
    imgCounter1--;
    if (imgCounter1 < 0) {
      imgCounter1 = imageCr2.length - 1;
    }
    document.querySelector(".crauser2").src = imageCr2[imgCounter1];
  }
  //   <-------------------Crauser-2 end---------------------->
  //   <-------------------Crauser-3 Start---------------------->


  let imageCr3 = [
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7a6f082b-d4ba-4b93-93b7-aa79cc63d877.jpg&w=1920&q=75",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
  ];
  
  document.querySelector(".btn5").addEventListener("click", moveRs);
  imgCounter2 = 0;
  function moveRs() {
    imgCounter2++;
    if (imgCounter2 == imageCr3.length) {
      imgCounter2 = 0;
    }
    document.querySelector(".crauser3").src = imageCr3[imgCounter2];
  }
  
  document.querySelector(".btn6").addEventListener("click", moveLs);
  
  function moveLs() {
    imgCounter2--;
    if (imgCounter2 < 0) {
      imgCounter2 = imageCr3.length - 1;
    }
    document.querySelector(".crauser3").src = imageCr3[imgCounter2];
  }
  //   <-------------------Crauser-3 End---------------------->