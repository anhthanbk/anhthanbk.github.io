// Khai báo biến
const listImage = document.querySelector(".list-images");
const imgs = listImage.getElementsByTagName("img");
const btnLeft = document.querySelector(".arrow-left");
const btnRight = document.querySelector(".arrow-right");
const length = imgs.length;
let current = 0;

// Khai bao biến bằng các công thức
const handleChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(0px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  }
};
let handleEvent = setInterval(handleChangeSlide, 4000);

// Chạy các công thức
btnRight.addEventListener("click", () => {
  clearInterval(handleEvent);
  handleChangeSlide();
  handleEvent = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener("click", () => {
  clearInterval(handleEvent);
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  }
  handleEvent = setInterval(handleChangeSlide, 4000);
});

// tìm kiếm
function search() {
  // Lấy giá trị tìm kiếm từ input
  let searchTerm = document.getElementById("search-input").value.toLowerCase();

  // Xóa các phần nổi bật trước đó
  let paragraphs = document.getElementsByTagName("p");
  for (let paragraph of paragraphs) {
    paragraph.innerHTML = paragraph.innerHTML.replace(
      /<span class="highlight">|<\/span>/g,
      ""
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
document.getElementById("toggle").addEventListener("click", function () {
  var navbarList = document.querySelector(".navbar-list");
  if (navbarList.style.display === "none" || navbarList.style.display === "") {
    navbarList.style.display = "block";
  } else {
    navbarList.style.display = "none";
  }
});

// detailed slide
// slide 1
const slides1 = document.querySelector(".sld-1");
const slideCount1 = document.querySelectorAll(".slide").length;
const slideWidth1 = document.querySelector(".slide").clientWidth;
const totalWidth1 = slideWidth1 * slideCount1;

let index1 = 0;

document.querySelector(".nxt-1").addEventListener("click", () => {
  index1++;
  if (index1 >= slideCount1 / 3) index1 = 0;
  updateSlidePosition1();
});

document.querySelector(".pr-1").addEventListener("click", () => {
  index1--;
  if (index1 < 0) index1 = Math.ceil(slideCount1 / 3) - 1;
  updateSlidePosition1();
});
function updateSlidePosition1() {
  const offset1 = -index1 * slideWidth1; // Di chuyển 3 ảnh một lần
  slides1.style.transform = `translateX(${offset1 + 20}px)`;
}

// slide 2
const slides2 = document.querySelector(".sld-2");
const slideCount2 = document.querySelectorAll(".slide").length;
const slideWidth2 = document.querySelector(".slide").clientWidth;
const totalWidth2 = slideWidth2 * slideCount2;

let index2 = 0;

document.querySelector(".nxt-2").addEventListener("click", () => {
  index2++;
  if (index2 >= slideCount2 / 3) index2 = 0;
  updateSlidePosition2();
});

document.querySelector(".pr-2").addEventListener("click", () => {
  index2--;
  if (index2 < 0) index2 = Math.ceil(slideCount2 / 3) - 1;
  updateSlidePosition2();
});
function updateSlidePosition2() {
  const offset2 = -index2 * slideWidth2; // Di chuyển 3 ảnh một lần
  slides2.style.transform = `translateX(${offset2 + 20}px)`;
}
// Khi người dùng nhấp vào nút, di chuyển về đầu trang
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
