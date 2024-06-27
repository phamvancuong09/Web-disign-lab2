// icon menu-----------------------------------------------
document.getElementById('menu-icon').onclick = function () {
    var nav = document.querySelector('.header-menu'); // Sử dụng querySelector thay vì getElementsByClassName
    if (nav.style.display === 'block' || nav.style.display === '') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

// thu gọn , hiển thị chi tiết content------------------------
function toggleContent() {
    const content = document.querySelector('.content-dot');
    const toggleButton = document.querySelector('.info-content-thugon');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.innerHTML = 'Thu gọn <i class="fa fa-caret-up" aria-hidden="true"></i>';
    } else {
        content.style.display = 'none';
        toggleButton.innerHTML = 'Hiển thị chi tiết <i class="fa fa-caret-down" aria-hidden="true"></i>';
    }
}

// addresss -----------------------------------------------------
function toggleAddress() {
    const giaoTanNoi = document.getElementById('giaotannoi');
    const SieuThi = document.getElementById('sieuthi');
    const infoCusAddressCiTY = document.getElementById('cus-address-cty');

    if (giaoTanNoi.checked) {
        infoCusAddressCiTY.style.display = 'block';
    } 
    
    else if(SieuThi.checked){   
        infoCusAddressCiTY.style.display = 'none';
    }else {
        infoCusAddressCiTY.style.display = 'none';
    }
}

// ------------phone ----------------------------------------------------
function TogglePhone() {
    const callPhone = document.getElementById('call-phone');
    const infoCustomKH = document.getElementById('info-customKH1');

    if (callPhone.checked) {
        infoCustomKH.style.display = 'block';
    } else {
        infoCustomKH.style.display = 'none';
    }
}
// Initialize on page load
window.onload = function() {
    TogglePhone();
}

// ------------------hóa đơn-------------------------------------------
function ToggleHoadon() {
    const Xhoadon = document.getElementById('Xhoadon');
    const infoHoaDonCus = document.getElementById('info-hoadon-cus');

    if (Xhoadon.checked) {
        infoHoaDonCus.style.display = 'block';
    } else {
        infoHoaDonCus.style.display = 'none';
    }
}
// Initialize on page load
window.onload = function() {
    togglePhone();
}