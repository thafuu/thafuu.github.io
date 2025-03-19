$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if ((userName == "6D74" && pwd == "1903") || (userName == "6d74" && pwd == "1903")) {
        $('#h').text("Loading...");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác");
    }
});
