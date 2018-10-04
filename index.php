<?php include "header.php"; ?>
<script>
    var test_ = 0;
    var answ_ = 0;
</script>
<script type="text/javascript" src="tinymce/tiny_mce.js"></script>

<script type="text/javascript">
    tinyMCE.init({

        language: "ru",
        // General options
        mode: "specific_textareas",
        editor_selector: "mceEditor",
        editor_deselector: "mceNoEditor",
        theme: "advanced",

        theme_advanced_toolbar_location: "top",
        theme_advanced_toolbar_align: "left",
        skin: "o2k7"

    });

</script>


<div class="container">
    <div class="page">

        <div class="row">


            <div class="col-md-9 col-md-push-3">
                <?php
                $action = $_GET['action'];
                $id = $_GET['id'];

                if (isset($_GET['lecture'])) {
                    $lecture = $_GET['lecture'];
                }
                if ($action == "register"
                ) {
                    include "register.php";
                } else if ($action == "testlist") {
                    include "testlist.php";
                } else if ($action == "test" or
                    $action == "edittest" or
                    $action == "editquestions" or
                    $action == "editquestion" or
                    $action == "deletequestion" or
                    $action == "getresult"
                ) {
                    include "test.php";
                    myTest($action, $id, $isAdmin, $lecture, $db);
                } else
                    if ($action == "add") {
                        $name = $_POST['name'];
                        $area = $_POST['area'];
                        $link = translit($name);
                    if (isset($name) and isset($area)) {
                            $area = str_replace("'", "\"", $area);

                        $r = mysql_query("insert into lecture (name, txt, id_txt, dat, cuser) values ('$name', '$area', '$link', sysdate(), '$cuser')")or die("Invalid query: " . mysql_error());
                        $result = mysql_query("SELECT * FROM lecture where id_txt='$link'", $db);
                        $myrow = mysql_fetch_array($result);
                    if ($myrow == true) {
                    do {
                        ?>
                        <script>
                            window.location.href = "?lecture=<?php echo $link;?>&id=<?php echo $myrow['id'];?>";
                        </script>
                    <?php
                    }
                    while ($myrow = mysql_fetch_array($result));
                    }
                    }
                    ?>

                        <form method="post" action="?action=add">
                            <div class="word-wrapper">
                                <input name="id" type="hidden" value="0"/>
                                <span>Дәріс атауы</span><br>
                                <input name="name" style="width: 100%" type="text"
                                       value=""/>
                                <br><br>
                                <textarea style="width: 100%; height: 380px" class="mceEditor" id="area"
                                          name="area"></textarea>
                                <input type="submit" value="Сақтау" style="margin-top: 10px"
                                       class='btn btn-success'>
                            </div>
                        </form>
                    <br>
                    <?php
                    } else
                    if ($lecture) {


                    if ($isAdmin == 1) {
                    if ($action == "delete") {
                    $r = mysql_query("delete from lecture WHERE id = '$id'");
                    if ($r){
                    ?>
                        <script>
                            window.location.href = "?";
                        </script>
                    <?php
                    }
                    } else if (isset($_POST['name']) and isset($_POST['area'])) {
                        $name = $_POST['name'];
                        $area = $_POST['area'];
                        $link = translit($name);
                        
                            $area = str_replace("'", "\"", $area);
                        $r = mysql_query("UPDATE lecture SET name = '$name', txt = '$area', id_txt = '$link' WHERE id = '$id'")or die("Invalid query: " . mysql_error());

                    }
                    }

                    if ($action != "delete" && $action != "editor") {
                        mysql_query("insert into stat(lecture, cuser, dat) VALUES ('$id', '$cuser', sysdate() )", $db) or die("Invalid query: " . mysql_error());
                    }
                    $result = mysql_query("SELECT l.*, (select COUNT(1) FROM questions q WHERE q.test = l.id) questions FROM lecture l where id='$id'", $db)or die("Invalid query: " . mysql_error());
                    $myrow = mysql_fetch_array($result);
                    if ($myrow == true) {
                    do {
                    if ($action == "editor" && $isAdmin == 1) {

                    ?>
                        <form method="post" action="?lecture=<?php echo $lecture; ?>&id=<?php echo $id; ?>">
                            <div class="word-wrapper">
                                <input name="id" type="hidden" value="<?php echo $myrow['id']; ?>"/>
                                <span>Дәріс атауы</span><br>
                                <input name="name" style="width: 100%" type="text"
                                       value="<?php echo $myrow['name']; ?>"/>
                                <br><br>
                                <textarea style="width: 100%; height: 380px" class="mceEditor" id="area"
                                          name="area"><?php echo $myrow['txt']; ?></textarea>
                                <input type="submit" value="Сақтау" style="margin-top: 10px"
                                       class='btn btn-success'>
                            </div>
                        </form><br>

                        <?php

                    } else {
                    if ($isAdmin == 1) {
                        ?>
                        <a class="btn btn-success"
                           href="?action=editor&lecture=<?php echo $lecture; ?>&id=<?php echo $id; ?>">
                            <i class="fa fa-pencil"></i>&nbsp;&nbsp;Дәрісті өңдеу
                        </a>
                        <a class='btn btn-danger'
                           href="?action=delete&lecture=<?php echo $lecture; ?>&id=<?php echo $id; ?>">
                            <i class="fa fa-trash"></i>&nbsp;&nbsp;Дәрісті жою</a>
                        <a class='btn btn-primary'
                           href="?action=edittest&lecture=<?php echo $lecture; ?>&id=<?php echo $id; ?>">
                            <i class="fa fa-plus"></i>&nbsp;&nbsp;<?php if ( $myrow['test']) {echo "Сынақты өзгерту";} else {echo "Сынақ қосу";} ?></a>
                    <br><br>
                        <?php
                    }
                        ?>

                        <div style="color: blue; font-size: 22px; padding-left: 50px"><?php echo $myrow['name']; ?></div>
                    <br>
                        <p>
                            <?php echo $myrow['txt']; ?>
                        </p>
                        <?php
                    if ($myrow['test'] and $myrow['questions'] > 0) {
                        ?>
                    <br>
                        <a class='btn btn-info'
                           href="?action=test&lecture=<?php echo $lecture; ?>&id=<?php echo $id; ?>">
                            Дәріс бойынша сынақ өту </a>

                        <?php
                    }

                    }
                    } while ($myrow = mysql_fetch_array($result));
                        if ($action != "editor") {
                            include "comment.php";
                        }
                    } else {
                        include "all_lectures.php";
                    }
                    } else {
                        include "all_lectures.php";
                    }
                ?>
                <br>
            </div>


            <div class="col-md-3 col-md-pull-9">
                <div class="well well-sm smaller">
                    <?php include "left.php" ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="mobile-test" class="visible-xs"></div>
<br><br>
<?php include "footer.php" ?>
</body>
</html>
<?php
function translit($str)
{
    $textcyr = mb_convert_case($str, MB_CASE_LOWER, "UTF-8");
    $textlat = "I pone dotuk raboti!";
    $cyr = array('а', 'б', 'в', 'г', 'д', 'e', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у',
        'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь', 'ю', 'я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
        'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ь', 'Ю', 'Я', 'ы', 'Ы', ' ', 'қ', 'Қ', 'ә', 'Ә', 'ң', 'Ң', 'ү', 'Ү', 'ұ', 'Ұ');
    $lat = array('a', 'b', 'v', 'g', 'd', 'e', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u',
        'f', 'h', 'ts', 'ch', 'sh', 'sht', 'a', 'y', 'yu', 'ya', 'A', 'B', 'V', 'G', 'D', 'E', 'Zh',
        'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U',
        'F', 'H', 'Ts', 'Ch', 'Sh', 'Sht', 'A', 'Y', 'Yu', 'Ya', 'u', 'U', '-', 'k', 'K', 'a', 'A', 'n', 'N', 'y', 'Y', 'y', 'Y');
    $textcyr = str_replace($cyr, $lat, $textcyr);
    return $textcyr;
}

?>


<script>

    function getAnsw() {
        return answ_;
    }

    function setAnsw() {
        answ_ = getAnsw() + 1;
    }

    function getTest() {
        return test_;
    }

    function setTest(test) {
        test_ = test;
    }

    var thisQuestion = 0;
    var flag = false;
    var timer_ = null;
    var timer = null;

    function loadQuestionClick() {
        if (flag == false) {
            document.getElementById('loadQuestionAction').innerHTML = '<style>.next{opacity: 0.4}</style>';
            loadQuestion();
        }
    }

    function loadQuestion() {
        if (flag == false) {
            flag = true;
            if (timer != null) {
                clearInterval(timer);
            }
            if (timer_ != null) {
                clearInterval(timer_);
            }
            var t = getTest();
            $.ajax({
                url: "Question.php",
                type: "POST",
                data: {id: t, q: thisQuestion, answ: getAnsw()},

                success: function (html) {
                    thisQuestion++;
                    document.getElementById('forStyles').innerHTML = '';

                    $("#testwrapper").html(html);
                }
            });
        }
    }

    function valid_(val) {
        clearInterval(timer_);
        if (timer != null) {
            clearInterval(timer);
        }
        if (flag == true) {
            flag = false;
            var col = "red";
            if (val == 1) {
                col = "lime";
                setAnsw();
            }
            var tr_ = '';
            if (col == "red") {
                tr_ = '.answ1{background-color:yellow}';
            }
            document.getElementById('forStyles').innerHTML = '<style>.answ' + val + '{background-color:' + col + '}' + tr_ + '</style>';
            timer = setInterval(function () {
                loadQuestion();
                clearInterval(timer);
            }, 2000);
        }
    }

    var xxx = 0;

    function testTimer() {
        xxx++;
        var i = 250;
        if (timer != null) {
            clearInterval(timer);
        }
        timer_ = setInterval(function () {
            i--;
            var w = 100 / 250 * i;
            document.all.progress.style.width = w + '%';
            if (i == 0) {
                flag = false;
                answ_ = 0;
                document.getElementById('forStyles').innerHTML = '<style>.answ1{background-color:yellow;}</style>';
                timer = setInterval(function () {
                    loadQuestion();
                    clearInterval(timer);
                }, 2000);
                clearInterval(timer_);
            }
            console.log(xxx)
        }, 100);
    }


    function addTest(id, name) {
        document.getElementById('addDiv').innerHTML = '<br /><form action="?page=tеst" method="post"><input type="hidden"  name="id" value="' + id + '"><input type="text" required="required" placeholder="Введите название теста"  name="test" value="' + name + '"><input type="submit" class="btn  btn-success" value="Сақтау"></form>';
    }

    function playVideo(video_, btn) {
        var video = document.getElementById(video_);
        var button = document.getElementById(btn);
        if (video.paused) {
            video.play();
            button.src = "images/paused.png";
        } else {
            video.pause();
            button.src = "images/play.png";
        }
    }

    function skip(video_, value) {
        var video = document.getElementById(video_);
        video.currentTime += value;
    }

</script>
<div id="forStyles"></div>
<style>
    #area_toolbar1, #area_toolbar2, #area_toolbar3 {
        float: left;
    }
</style>
