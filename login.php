<?php
$strCheckData = "";
if (isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['login']) && isset($_POST['password']) && isset($_POST['password2'])) {
    $strCheckData = "a";
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $mname = $_POST['mname'];
    $login = $_POST['login'];
    $password = md5($_POST['password']);
    $password2 = md5($_POST['password2']);
    if ($password2 == $password) {
        $result = mysql_query("insert into users(fname,lname,mname,u_name,password)VALUES ('$fname','$lname','$mname','$login','$password')", $db) or die("Invalid query: " . mysql_error());
        if ($result == true) {
            $strCheckData = "";
        } else {
            $strCheckData = "Не удалось Сақтау";
        }

    } else {
        $strCheckData = "Пароли не совпадают!";
    }
}
if (isset($_POST['login']) && isset($_POST['password'])) {
    $login = $_POST['login'];
    $password = md5($_POST['password']);
    $result = mysql_query("SELECT * from users WHERE u_name='$login' and password = '$password'", $db);
    $myrow = mysql_fetch_array($result);
    if ($myrow == true) {
        $_SESSION['cuser'] = $myrow['id'];
        $_SESSION['username'] = $myrow['lname'] . ' ' . $myrow['fname'] . ' ' . $myrow['mname'];
        $_SESSION['is_admin'] = $myrow['is_admin'];
        if(  isset($_POST['REFERER'])) {
            $referer = $_POST['REFERER'];
            echo '<script type="text/javascript">window.location.href="'.$referer.'";</script>';
        } else {
            echo '<script type="text/javascript">window.location.href="?";</script>';
        }
    } else {
        $strCheckData = "Не верный логин или пароль!";
    }
}
if ($strCheckData != "") {
    ?>
    <script> alert('<?php echo $strCheckData;?>')</script>
    <?php
}
?>