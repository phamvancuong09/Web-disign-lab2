// slick - slider
$(document).ready(function () {
    $('.slick-slider-img').slick({
        dots: true, //Hiển thị các chấm (dots navigation) để chỉ ra vị trí của từng slide
        infinite: true, //Cho phép lặp vô hạn giữa các slide.
        speed: 500, //Tốc độ chuyển đổi giữa các slide, tính bằng mili giây.
        slidesToShow: 1, //Số lượng slide hiển thị trên mỗi lần trượt.
        slidesToScroll: 1, //Số lượng slide được trượt qua mỗi lần di chuyển.
        lazyLoad: 'ondemand', //Tải ảnh lười biếng (lazy load) khi cần thiết, chỉ tải ảnh của slide hiện tại và những slide gần đây nhất.
        arrows: true, //Hiển thị các mũi tên điều hướng (prev/next arrows) để điều hướng qua các slide.
        autoplay: true, //Tự động chuyển đổi các slide
        autoplaySpeed: 2000, //Tốc độ chuyển đổi slide khi autoplay được bật
    });
});

// icon close card && bật giao diện giỏ hàng
$(document).ready(function () {
    // Bắt sự kiện click vào nút MUA NGAY
    $('.ic-buton-card').click(function () {
        $('.add-to-card').fadeIn(); // Hiển thị modal add-to-card
    });

    // Bắt sự kiện click vào nút đóng modal
    $('.close-icon').click(function () {
        $('.add-to-card').fadeOut(); // Ẩn modal add-to-card
    });
});

// Thu gọn, ẩn hiện chi tiết

$(document).ready(function () {
    // Bắt sự kiện click vào phần thu gọn/hiển thị chi tiết
    $('.card-footer-thugon a').click(function (e) {
        e.preventDefault();

        var listItems = $('.card-footer-list li'); // Chọn tất cả các mục trong list

        if ($(this).hasClass('collapsed')) {
            // Nếu đang ở trạng thái collapsed (đang thu gọn)
            listItems.hide(); // Ẩn tất cả các mục trong list
            $(this).removeClass('collapsed').addClass('expanded').html('Hiển thị chi tiết <i class="fa fa-sort-desc" aria-hidden="true"></i>');
        } else {
            // Nếu đang ở trạng thái expanded (đang hiển thị chi tiết)
            listItems.show(); // Hiển thị lại tất cả các mục trong list
            $(this).removeClass('expanded').addClass('collapsed').html('Thu gọn <i class="fa fa-sort-asc" aria-hidden="true"></i>');
        }
    });
});

// icon menu-----------------------------------------------
document.getElementById('menu-icon').onclick = function () {
    var nav = document.querySelector('.header-menu'); // Sử dụng querySelector thay vì getElementsByClassName
    if (nav.style.display === 'block' || nav.style.display === '') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}