<script src="jquery.min.js"></script>
<script>
    $.ajax({
        async : false,
        type: 'GET',
        url: 'http://api2.jirengu.com/getWeather.php',
        data:{city:'瓦房店市'},
        dataType: 'JSON',
        error: function () {
            alert('网络错误');
        },
        success: function (res) {
            console.log(res)
        }
    });
</script>