//================= slide show
// Khai báo biến
const listImage = document.querySelector('.list-images');
const imgs = listImage.getElementsByTagName('img');
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const length = imgs.length;
let current = 0;

// Khai bao biến bằng các công thức
const handleChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  }
};
let handleEvent = setInterval(handleChangeSlide, 4000);

// Chạy các công thức
btnRight.addEventListener('click', () => {
  clearInterval(handleEvent);
  handleChangeSlide();
  handleEvent = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener('click', () => {
  clearInterval(handleEvent);
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index-item-' + current).classList.add('active');
  }
  handleEvent = setInterval(handleChangeSlide, 4000);
});

//===================== tìm kiếm
function search() {
  // Lấy giá trị tìm kiếm từ input
  let searchTerm = document.getElementById('search-input').value.toLowerCase();

  // Xóa các phần nổi bật trước đó
  let paragraphs = document.getElementsByTagName('p');
  for (let paragraph of paragraphs) {
    paragraph.innerHTML = paragraph.innerHTML.replace(
      /<span class="highlight">|<\/span>/g,
      ''
    );
  }

  // Nếu không có từ khóa, thoát hàm
  if (!searchTerm) return;

  // Tìm kiếm và làm nổi bật
  for (let paragraph of paragraphs) {
    let text = paragraph.innerHTML.toLowerCase();
    let highlightedText = paragraph.innerHTML;

    // Tìm vị trí của từ khóa trong đoạn văn bản
    let index = text.indexOf(searchTerm);

    // Làm nổi bật tất cả các vị trí khớp từ khóa
    while (index !== -1) {
      let originalText = paragraph.innerHTML.substr(index, searchTerm.length);
      highlightedText = highlightedText.replace(
        originalText,
        `<span class="highlight">${originalText}</span>`
      );
      text = text.substr(index + searchTerm.length);
      index = text.indexOf(searchTerm);
    }

    // Cập nhật lại nội dung đoạn văn bản
    paragraph.innerHTML = highlightedText;
  }
}

//=========== detailed slide
// Slide 1
const initSlider = (sliderClass, btnLeftClass, btnRightClass) => {
  const listImage1 = document.querySelector(sliderClass);
  const imgs1 = listImage1.getElementsByTagName('img');
  const btnLeft1 = document.querySelector(btnLeftClass);
  const btnRight1 = document.querySelector(btnRightClass);
  const length1 = imgs1.length;
  let current1 = 0;

  const handleChangeSlide1 = () => {
    if (current1 == length1 - 1) {
      current1 = 0;
      let width1 = imgs1[0].offsetWidth;
      listImage1.style.transform = `translateX(0px)`;
    } else {
      current1++;
      let width1 = imgs1[0].offsetWidth;
      listImage1.style.transform = `translateX(${width1 * -1 * current1}px)`;
    }
  };

  btnRight1.addEventListener('click', () => {
    handleChangeSlide1();
  });

  btnLeft1.addEventListener('click', () => {
    if (current1 == 0) {
      current1 = length1 - 1;
      let width1 = imgs1[0].offsetWidth;
      listImage1.style.transform = `translateX(${width1 * -1 * current1}px)`;
    } else {
      current1--;
      let width1 = imgs1[0].offsetWidth;
      listImage1.style.transform = `translateX(${width1 * -1 * current1}px)`;
    }
  });
};

//Khởi tạo 2 slide khác nhau
initSlider('.sld-1', '.pr-1', '.nxt-1');
initSlider('.sld-2', '.pr-2', '.nxt-2');
initSlider('.sld-3', '.pr-3', '.nxt-3');
initSlider('.sld-4', '.pr-4', '.nxt-4');
initSlider('.sld-5', '.pr-5', '.nxt-5');
initSlider('.sld-6', '.pr-6', '.nxt-6');

//========= Khi người dùng nhấp vào nút, di chuyển về đầu trang
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =======cuộn đến class chỉ định trong trang
const scrollToClass = (scrollTarget) => {
  const element = document.querySelector(scrollTarget);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
// ===========nút gọi điện
function makeCall() {
  window.location.href = 'tel:+84819931165';
}
// ===========nút gọi điện
function makeEmail() {
  window.location.href = `mailto:'canhdephue@gmail.com`;
}
