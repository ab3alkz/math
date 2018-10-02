<?php
include_once("db.php");
if (isset($_POST['id']) && isset($_POST['q']) && isset($_POST['answ'])) {
    $id = $_POST['id'];
    $q = $_POST['q'];
    $answer = $_POST['answ'];


    $result = mysql_query("SELECT count(*) FROM questions WHERE test = '$id'  ", $db);
    $myrow = mysql_fetch_array($result);
    $cnt = $myrow[0];
    if ($q < $cnt) {
        $result = mysql_query("SELECT * FROM questions WHERE test = '$id'  limit $q,1 ", $db);
        $myrow = mysql_fetch_array($result);
        if ($myrow == true) {
            $answ[1] = "";
            $answ[2] = "";
            $answ[3] = "";
            $answ[4] = "";
            do {
                echo "<h2>" . $myrow['question'] . "</h2><br />";
                $answ[1] = $myrow['answt'];
                $answ[2] = $myrow['answf1'];
                $answ[3] = $myrow['answf2'];
                $answ[4] = $myrow['answf3'];
            } while ($myrow = mysql_fetch_array($result));

            $a[1] = "";
            $a[2] = "";
            $a[3] = "";
            $a[4] = "";
            $x = 1;
            for ($i = 1; $i <= 4; $i++) {
                $j = rand(1, 4);
                if ($a[$j] == "") {
                    $a[$j] = "asd";
                    $x = $i;
                    echo '<div class="answ' . $j . ' answ" onclick="valid_(' . $j . ')">' . $answ[$j] . '</div>';
                }
                $i = $x;
            }

            ?>
            <div class="progress-wrap">
                <div id="progress"></div>
            </div><br/>
            <div style="padding-bottom: 10px">Сұрақ: <?php echo $q + 1; ?> из <?php echo $cnt; ?><a class="btn btn-success"
                                                                       onclick="loadQuestionClick()"
                                                                       style="float: right; margin-right: 5px;">
                    <i class="fa fa-forward"></i>
                </a>
                <div id="loadQuestionAction"></div>
            </div>
            <script type="text/javascript">
                $(document).ready(function () {
                    testTimer();
                });

            </script>
            <?php

        } else {
            echo "<h1>ошибка при загрузке данных</h1>";
        }
    } else {
        $res = (100 / $cnt * $answer);
        $result = mysql_query("insert into testresult (test,cuser,result) VALUES ('$id','$cuser','$res') ", $db);

        echo "<br /><br /><br /> <h2  class='text-center'>Сынақ аяқталды!</h2> <br /><h3  class='text-center'>Сіздің нәтиже: <b class='cl-navy'>$res%</b> 
            <br /><br /><b class='cl-navy'>$cnt</b> сұрақтан <b class='cl-navy'>$answer</b> дұрыс</h3>";
    }
} else {
    echo "<h1>Не предвиденная ошибка</h1>";
}