$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],

    });
    $(document).ready(function () {
        let audio = $('audio')[0];
    
        // Chờ người dùng click vào bất kỳ đâu rồi mới phát nhạc
        $(document).one('click', function () {
            audio.play();
        });
    
        // Nếu cần, có thể hiển thị nút "Bật nhạc" để nhắc người dùng
        $('.begin').click(function () {
            audio.play();
        });
    });
});