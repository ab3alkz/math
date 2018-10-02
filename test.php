<?php
function myTest($action, $id, $role, $lecture, $db)
{
    $err404 = "<h1>Страница которую вы искали не найдена!</h1>";
    if ($action == 'delete') {
        $result = mysql_query("update  lecture set test = '' WHERE id='$id'", $db);
        $result = mysql_query("delete FROM questions WHERE test='$id'", $db);

    } else if ($action == 'deletequestion') {
        $idq = $_GET['idq'];
        $result = mysql_query("delete FROM questions WHERE id='$idq'", $db);
        echo "<script>
                      window.location.href='?action=editquestions&id=" . $id . "&lecture=" . $lecture . "' ;
            </script>";
    } else
        if ($id and $action == 'test') {
            $result = mysql_query("SELECT * FROM lecture WHERE id='$id'", $db);
            $myrow = mysql_fetch_array($result);
            if ($myrow == true) {
                do {
                    echo '<h3>' . $myrow['test'] . '</h3><br /><div class="test-wrapper" id="testwrapper"></div>';
                    ?>
                    <script>
                        window.onload = function () {
                            setTest(<?php echo $id; ?>);
                            loadQuestion();
                        }
                    </script>
                    <?php
                } while ($myrow = mysql_fetch_array($result));
            } else {
                echo $err404;
            }
        } else
            if ($action == 'editquestions') {
                $result = mysql_query("SELECT * FROM questions WHERE test = '$id'", $db);
                $myrow = mysql_fetch_array($result);
                echo '<a href="?action=edittest&id=' . $id . '&lecture=' . $lecture . '" 
                        class="btn btn-primary" title="Артқа қайту"><i class="fa fa-arrow-left"></i></a>';
                if ($myrow == true) {
                    echo "<div><table class='tests'>";
                    do {
                        echo '<tr align="left">
                    <th class="min130">' . htmlspecialchars($myrow['question']) . '</th>
                    <th class="min130">' . htmlspecialchars($myrow['answt']) . '</th>
                    <th class="min130">' . htmlspecialchars($myrow['answf1']) . '</th>
                    <th class="min130">' . htmlspecialchars($myrow['answf2']) . '</th>
                    <th class="min130">' . htmlspecialchars($myrow['answf3']) . '</th>
                    <th width="25">&nbsp;&nbsp;<a href="?action=editquestion&idq=' . $myrow['id'] . '&lecture=' . $lecture . '&id=' . $id . '"  class="btn btn-primary" title="Өзгерту"><i class="fa fa-pencil"></i></a></th>
                    <th width="25">&nbsp;&nbsp;<a href="?action=deletequestion&idq=' . $myrow['id'] . '&lecture=' . $lecture . '&id=' . $id . '"  class="btn btn-danger" title="Жою"><i class="fa fa-trash"></i></a></th>
                </tr>';
                    } while ($myrow = mysql_fetch_array($result));
                    echo "</table></div> ";
                }
                echo " <br></br><a href='?action=editquestion&idq=0&id=" . $id . "&lecture=" . $lecture . "' class='btn btn-primary'> Жаңа сұрақ қосу</a>";
            } else
                if ($action == 'getresult') {
                    $result = mysql_query("SELECT * FROM lecture WHERE id='$id'", $db);
                    $myrow = mysql_fetch_array($result);
                    if ($myrow == true) {
                        do {
                            echo '<h3>' . $myrow['test'] . '  бойынша сынақ нәтижелері</h3><br />';
                        } while ($myrow = mysql_fetch_array($result));
                    }

                    $result = mysql_query("SELECT t.date,l.fname,l.lname,l.mname,t.result FROM testresult t,users l WHERE l.id = t.cuser and test = '$id' order by date desc", $db);
                    $myrow = mysql_fetch_array($result);
                    echo "<table width='100%'>
                            <tr>
                                <th align='left' width='170' class='bbsilver'>Дата сдачи</th>
                                <th class='bbsilver' align='left'>Фамилия</th>
                                <th  class='bbsilver' align='left'>Имя</th>
                                <th class='bbsilver' align='left'>Отчество</th>
                                <th class='bbsilver' align='left' width='100'>Результат</th>
                            </tr>";
                    $idx = 1;
                    do {
                        $idx++;
                        $trBg = '';
                        if (bcmod($idx, 2) == 0) {
                            $trBg = " style= 'background: #f3f4f8'";
                        }
                        echo '<tr ' . $trBg . '>
                            <th align="left"  class="bbsilver font-normal">' . $myrow['date'] . '</th>
                            <th align="left"  class="bbsilver font-normal">' . $myrow['lname'] . '</th>
                            <th align="left" class="bbsilver font-normal">' . $myrow['fname'] . '</th>
                            <th align="left" class="bbsilver font-normal">' . $myrow['mname'] . '</th>
                            <th align="left" class="bbsilver font-normal">' . $myrow['result'] . '%</th>
                        </tr>';
                    } while ($myrow = mysql_fetch_array($result));
                    echo "</table>";
                } else
                    if ($action == 'editquestion' && isset($_GET['idq'])) {
                        $idQ = $_GET['idq'];
                        if (isset($_POST['id']) && isset($_POST['question']) && isset($_POST['answt']) && isset($_POST['answf1'])
                            && isset($_POST['answf2']) && isset($_POST['answf3'])
                        ) {
                            $question = $_POST['question'];
                            $answt = $_POST['answt'];
                            $answf1 = $_POST['answf1'];
                            $answf2 = $_POST['answf2'];
                            $answf3 = $_POST['answf3'];
                            if ($idQ == 0 || $idQ == '') {
                                $result = mysql_query("insert into questions (question,answt,answf1,answf2,answf3,test) values('$question','$answt','$answf1','$answf2','$answf3','$id')", $db);
                                if ($result == true) {
                                    echo "<script>alert('Сақталды');
                                                    window.location.href='?action=editquestions&id=" . $id . "&lecture=" . $lecture . "' ;
                                        </script>";
                                }
                            } else {
                                $result = mysql_query("update questions set question='$question',answt='$answt',answf1='$answf1',answf2='$answf2',answf3='$answf3' WHERE id = '$idQ'", $db);
                                if ($result == true) {
                                    echo "<span class='infosave'>Сақталды</span>";
                                }
                            }
                        }
                        $result = mysql_query("SELECT * FROM questions WHERE id = '$idQ'", $db);
                        $myrow = mysql_fetch_array($result);
                        if ($myrow == true) {
                            echo '<br /><br /><a href="?action=editquestions&id=' . $id . '&lecture=' . $lecture . '"  class="btn btn-primary" title="Артқа қайту"><i class="fa fa-arrow-left"></i></a>';
                            echo "<br /><br /><form action='?action=editquestion&id=" . $id . "&lecture=" . $lecture . "&idq=" . $idQ . "' method='post'><table class='tests editquestion'>";
                            do {
                                echo '<input type="hidden" name="id" value="' . $myrow['id'] . '">
                    <tr align="left"><th width="200">Сұрақ:</th><th style="width: 77%"><input type="text" required="required" name="question" value="' . htmlspecialchars($myrow['question']) . '"></th></tr>
                    <tr align="left"><th>Дұрыс жауап:</th><th><input type="text"  required="required" name="answt" value="' . htmlspecialchars($myrow['answt']) . '"></th></tr>
                    <tr align="left"><th>Дұрыс емес жауап 1:</th><th><input type="text"  required="required" name="answf1" value="' . htmlspecialchars($myrow['answf1']) . '"></th></tr>
                    <tr align="left"><th>Дұрыс емес жауап 2:</th><th><input type="text"  required="required" name="answf2" value="' . htmlspecialchars($myrow['answf2']) . '"></th></tr>
                    <tr align="left"><th>Дұрыс емес жауап 3:</th><th><input type="text"  required="required" name="answf3" value="' . htmlspecialchars($myrow['answf3']) . '"></th></tr>
                    <tr align="left"><th><input class="btn btn-success" value="Сақтау" type="submit"></th><th></th></tr>';
                            } while ($myrow = mysql_fetch_array($result));
                            echo "</table></form>";
                        } else {
                            echo '<br /><br /><a href="?action=editquestions&id=' . $id . '&lecture=' . $lecture . '"  class="btn btn-primary" title="Артқа қайту"><i class="fa fa-arrow-left"></i></a>';
                            echo "<br /><br /><form action='?action=editquestion&id=" . $id . "&lecture=" . $lecture . "&idq=" . $idQ . "' method='post'><table class=' tests editquestion'>";
                            echo '<input type="hidden" name="id" value="0">
                    <tr align="left"><th width="200">Сұрақ:</th><th  style="width: 77%"><input type="text" name="question"  required="required" value=""></th></tr>
                    <tr align="left"><th>Дұрыс жауап:</th><th><input type="text" name="answt"  required="required" value=""></th></tr>
                    <tr align="left"><th>Дұрыс емес жауап 1:</th><th><input type="text" name="answf1"  required="required" value=""></th></tr>
                    <tr align="left"><th>Дұрыс емес жауап 2:</th><th><input type="text" name="answf2"  required="required" value=""></th></tr>
                    <tr align="left"><th>Дұрыс емес жауап 3:</th><th><input type="text" name="answf3"  required="required" value=""></th></tr>
                    <tr align="left"><th><input class="btn btn-success" value="Сақтау" type="submit"></th><th></th></tr>';
                            echo "</table></form>";
                        }

                    } else {
                        if ($role == 1) {
                            if ($id && $action == 'edittest' && isset($_POST['test'])) {
                                $name_ = $_POST['test'];

                                $result = mysql_query("update  lecture set test = '$name_' WHERE id='$id'", $db);
                            }
                            echo '<a href="?id=' . $id . '&lecture=' . $lecture . '" 
                                class="btn btn-primary" title="Артқа қайту"><i class="fa fa-arrow-left"></i></a><br>';
                            $result = mysql_query("SELECT * FROM lecture where id = $id", $db);
                            $myrow = mysql_fetch_array($result);
                            if ($myrow == true) {
                                /*echo "<table class='tests'>";*/
                                do {
                                    /*  echo '<tr align="left"><th><a href="?page=tеst&id=' . $myrow['id'] . '">' . $myrow['test'] . '</a></th>';
                                      if ($role == 1) {
                                          echo '<th width="25"><a href="?page=tеst&getresult=' . $myrow['id'] . '"  class="pencil" title="Посмотреть результаты"><img src="images/info.png" width="18px"  /></a></th>';
                                          echo '<th width="25"><a href="?page=tеst&editlist=' . $myrow['id'] . '"  class="pencil" title="Редактировать воросы"><img src="images/list.png" width="18px"  /></a></th>';
                                          echo '<th width="25"><a onclick="addTest(' . $myrow['id'] . ',\'' . $myrow['test'] . '\')"  class="pencil" title="Редактировать"><img src="images/pencil.png" width="18px"  /></a></th>';
                                          echo '<th width="25"><a href="?page=tеst&delete=' . $myrow['id'] . '"  class="delete" title="Удалить"><img src="images/delete.png" width="18px"  /></a></th>';
                                      }
                                      echo '</tr>';*/
                                    ?>
                                    <br/>
                                    <form action="?action=<?php echo $action ?>&lecture=<?php echo $lecture ?>&id=<?php echo $id; ?>"
                                          method="post">
                                        <span>Сынақ атауы:</span><br/>
                                        <input type="text"
                                               style="width: 100%"
                                               required="required"
                                               placeholder="Сынақ атауын енгізіңіз"
                                               name="test"
                                               value="<?php echo $myrow['test']; ?>">

                                        <br/><br/>
                                        <input type="submit" class="btn btn-success" value="Сақтау"></form>

                                    <br/>
                                    <?php if ($myrow['test']) { ?>
                                        <a class="btn-primary btn"
                                           href="?action=editquestions&lecture=<?php echo $lecture ?>&id=<?php echo $id; ?>">
                                            Сынақ сұрақтары</a>
                                        <?php
                                    }
                                } while ($myrow = mysql_fetch_array($result));
                            }
                            /*if ($role == 1) {
                                echo "<tr><th colspan='4' align='left'><a onclick='addTest(0,\"\")' class='btn btn-primary'>Добавить тест</a></th></tr>";
                            }
                            echo "</table>";*/
                        } else {
                            echo $err404;
                        }
                        echo '<div id="addDiv"></div>';
                    }
}

?>