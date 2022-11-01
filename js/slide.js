const slide = document.querySelector(".mv__slider");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".slide__prev-button");
const nextBtn = document.querySelector(".slide__next-button");

const slideImg = document.querySelectorAll(".slide__img");
const maxSlide = slideImg.length;

let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".slide__pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) {
    pagination.innerHTML += `<li class="active">●</li>`;
  } else {
    pagination.innerHTML += `<li>●</li>`;
  }
}

const paginationItems = document.querySelectorAll(".slide__pagination li");
console.log(paginationItems);

nextBtn.addEventListener("click", () => {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * (currSlide - 1);
    slideImg.forEach((img) => {
      img.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((item) => item.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide--;
  }
});

prevBtn.addEventListener("click", () => {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * (currSlide - 1);
    slideImg.forEach((img) => {
      img.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((item) => item.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide++;
  }
});

for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * (currSlide - 1);
    slideImg.forEach((img) => {
      img.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((item) => item.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}
