~~~html
<!--------------Typora的.md文件导出HTML，然后粘贴以下代码到</body>与</html>中间，即可生成html文档侧边栏目录----------->

<!-------------------------------------------------HTML------------------------------------------------>
<!--设置目录折叠与返回顶部按钮-->
<button onclick="topFunction()" id="topButton">返回顶部</button>
<button onclick="showOrCloseCategory()" id="foldOrUnfold">目录折叠</button>
<!--文章主体部分-->
<div class="book-body" id="book_body"> </div>
<!--目录栏，设置占用宽度为20%可以根据实际情况设置-->
<div class="book-summary" id="category" style="width:20%;display:block"></div>
<!-------------------------------------------------CSS------------------------------------------------>
<!--设置目录样式-->
<style type="text/css">
    @media (max-width: 1600px) {
        .book-body {
            /* padding-left: 200px; */
            padding-right: 0px;
        }
    }

    @media (max-width: 1400px) {
        .book-body {
            /* padding-left: 200px; */
            padding-right: 0px;
        }
    }

    @media (max-width: 1200px) {
        .book-body {
            /* padding-left: 300px; */
            padding-left: 0px;
        }
    }

    @media (max-width: 700px) {
        .book-body {
            padding-left: 0px;
        }
    }

    @media (min-width: 600px) {
        #category {
            /* 绝对定位 */
            position: fixed;
            /* 目录显示的位置 */
            left: 0px;
            top: 0;
            /* 目录栏的高度,这里设置为60%主要是为了不挡住返回顶部和折叠按钮 */
            height: 100%;
            /* 设置边框这样和正文对比比较明显 */
            border: 2px solid #eaeaea;
            /* 开启垂直滚动条 */
            overflow-y: scroll;
        }

        /* 返回顶部按钮样式 */
        #topButton {
            position: fixed;
            float: right;
            right: 20px;
            top: 95%;
        }

        /* 展开或者折叠 */
        #foldOrUnfold {
            position: fixed;
            float: right;
            right: 100px;
            top: 95%
        }

        /* 正文的样式 */
        #book_body {
            width: 90%;
            display: block;
        }
        img{
          display: block;
        }
        code,tt{
            color:#c7254e;
            background-color:#f9f2f4;
        }
    }

    @media (-webkit-max-device-pixel-ratio: 1) {
        ::-webkit-scrollbar-track-piece {
            background-color: #FFF
        }

        ::-webkit-scrollbar {
            width: 6px;
            height: 6px
        }

        ::-webkit-scrollbar-thumb {
            background-color: #c2c2c2;
            background-clip: padding-box;
            min-height: 28px
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #A0A0A0
        }
    }
</style>
<!-------------------------------------------------JS----------------------------------------------->
<!--以下代码生成带序号的标题侧边栏-->
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="http://yandex.st/highlightjs/6.2/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<!--标题序号生成代码-->
<script>
    //标题序号计数器
    var hCount = [0, 0, 0, 0, 0, 0];
    //设置计数器
    function setHCount(number) {
        //当前计数器加一
        hCount[number - 1]++;
        for (var i = number, length = hCount.length; i < length; i++) {
            //子目录计数器全部置零
            hCount[i] = 0;
        }
    }
    //重命名目录名称
    function setHTagValue(item, number) {
        //获取标题名
        var text = $(item).get(0).innerHTML;
        //初始化空字符串
        var before = "";
        //生成序号
        for (var i = 0, length = hCount.length; i < number; i++) {
            if (i < number - 1)
                before += hCount[i] + ".";
            else
                before += hCount[i] + " ";
        }
        //在标题前面加上序号
        $(item).get(0).innerHTML = before + text;
    }
    function renameHTag(item) {
        var tag = $(item).get(0).localName;
        if (tag === "h1") {
            setHCount(1);
           //console\.log("捕获到标签:%s", tag);
            setHTagValue(item, 1);
        }
        if (tag === "h2") {
            setHCount(2);
            //console.log("捕获到标签:%s", tag);
            setHTagValue(item, 2);
        }
        if (tag === "h3") {
            setHCount(3);
            //console.log("捕获到标签:%s", tag);
            setHTagValue(item, 3);
        }
        if (tag === "h4") {
            setHCount(4);
            //console.log("捕获到标签:%s", tag);
            setHTagValue(item, 4);
        }
        if (tag === "h5") {
            setHCount(5);
            //console.log("捕获到标签:%s", tag);
            setHTagValue(item, 5);
        }
        if (tag === "h6") {
            setHCount(6);
            //console.log("捕获到标签:%s", tag);
            setHTagValue(item, 6)
        }
    }
    $(document).ready(function () {
        $("h1,h2,h3,h4,h5,h6").each(function (i, item) {
            //给<H>类标签编号
            renameHTag(item);
        })
    })
</script>
<!--侧栏目录生成代码-->
<script>
    $(document).ready(function () {
        $("h1,h2,h3,h4,h5,h6").each(function (i, item) {
            //获取标签的名字,h1,还是h2
            var tag = $(item).get(0).localName;
            //为该标签设置id属性
            $(item).attr("id", "wow" + i);
            //添加一个页内超链接,并设置class选择器
            $("#category").append('<a class="new' + tag + '" href="#wow' + i + '">' + $(item).text() +
                '</a></br>');
            //为每一个标题超链接的class属性设置左边距
            $(".newh1").css("margin-left", 0);
            $(".newh2").css("margin-left", 20);
            $(".newh3").css("margin-left", 40);
            $(".newh4").css("margin-left", 60);
            $(".newh5").css("margin-left", 80);
            $(".newh6").css("margin-left", 100);
        });
        //设置class选择器为.book-body的html内容
        $(".book-body").html($(".book-body").nextAll())
    });
</script>
<!--按钮功能代码-->
<script>
    // 初始化页面状态
    var fo_btn = document.getElementById("foldOrUnfold");
    var con = document.getElementById("write");
    var id = document.getElementById("category");
    var book_body = document.getElementById("book_body");
    
    fo_btn.innerHTML = "目录展开"
    con.style.marginLeft="auto"
    id.style.display = 'none';
    id.style.width = "0%";
    book_body.style.width = "100%";
    book_body.style.paddingleft = 0;

    
    // 展开或者折叠目录功能
    function showOrCloseCategory() {    
        //如果展开了
        if (id.style.display == 'block') {
            //console.log("开始展开");
            id.style.display = 'none';
            id.style.width = "0%";
            book_body.style.width = "100%";
            book_body.style.paddingleft = 0;
            fo_btn.innerHTML = "目录展开" 
            con.style.marginLeft="auto"
        }
        //如果被折叠了
        else if (id.style.display == 'none') {
            //console.log("开始折叠");
            id.style.display = 'block';
            book_body.style.width = "90%";
            id.style.width = "20%"
            fo_btn.innerHTML = "目录折叠"
            con.style.marginLeft="20%"
        }
    }
    // 返回顶部功能
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
</script>
~~~

