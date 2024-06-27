var slideIndex = 0; // Biến này được sử dụng để theo dõi chỉ số của slide hiện tại.
var slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img"); // Lấy tất cả các phần tử <img> nằm trong phần tử có lớp CSS "carousel" đầu tiên và lưu chúng vào mảng slides.
showSlides(); // Gọi hàm showSlides() để bắt đầu hiển thị slide.

function showSlides() {
    // Ẩn tất cả các ảnh
    for (var i = 0; i < slides.length; i++) { // Bắt đầu một vòng lặp để duyệt qua tất cả các ảnh trong mảng slides.
        slides[i].style.display = "none"; // ẩn tất cả các ảnh bằng cách đặt thuộc tính display : none
    }

    // Hiển thị 2 ảnh tiếp theo
    slides[slideIndex].style.display = "block"; // Hiển thị ảnh hiện tại
    if (slideIndex + 1 < slides.length) {
        slides[slideIndex + 1].style.display = "block"; // Hiển thị ảnh kế tiếp nếu có
    }

    // Tự động chuyển ảnh sau 2,5 giây
    slideIndex += 2;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Quay lại ảnh đầu tiên nếu đã hiển thị tất cả ảnh
    }
    setTimeout(showSlides, 3500); // Thay đổi ảnh sau 2,5 giây
}

// Xử lý nút "Left" và "Right"
document.getElementById("prevBtn").addEventListener("click", function() {
    slideIndex -= 4;
    if (slideIndex < 0) {
        slideIndex = (slides.length - (slides.length % 2 ? 2 : 1)); // Điều chỉnh chỉ số để đảm bảo không bị lỗi
    }
    showSlides();
});

document.getElementById("nextBtn").addEventListener("click", function() {
    slideIndex += 2;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Quay lại ảnh đầu tiên nếu đã hiển thị tất cả ảnh
    }
    showSlides();
});

// Đợi cho tài liệu được tải hoàn toàn


