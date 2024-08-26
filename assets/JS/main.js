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
// tìm kiếm
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
// menu
document.getElementById('toggle').addEventListener('click', function () {
  var navbarList = document.querySelector('.navbar-list');
  if (navbarList.style.display === 'none' || navbarList.style.display === '') {
    navbarList.style.display = 'block';
  } else {
    navbarList.style.display = 'none';
  }
});
// detailed slide
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const totalWidth = slideWidth * slideCount;

let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index++;
  if (index >= slideCount / 3) index = 0;
  updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
  index--;
  if (index < 0) index = Math.ceil(slideCount / 3) - 1;
  updateSlidePosition();
});

function updateSlidePosition() {
  const offset = -index * slideWidth * 3; // Di chuyển 3 ảnh một lần
  slides.style.transform = `translateX(${offset}px)`;
}

// Khi người dùng nhấp vào nút, di chuyển về đầu trang
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
