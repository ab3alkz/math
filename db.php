<?php
session_start();
$db = mysql_connect("localhost", "root", "password");
mysql_select_db("math", $db);
mysql_set_charset("utf8");
$cuser = null;
$username = null;
$isAdmin = null;
if (isset($_SESSION['cuser']) && isset($_SESSION['username']) && isset($_SESSION['is_admin'])) {
    $cuser = $_SESSION['cuser'];
    $username = $_SESSION['username'];
    $isAdmin = $_SESSION['is_admin'];
} else {
    include "login.php";
}
if (isset($_GET['exit'])) {
    unset($_SESSION["cuser"]);
    unset($_SESSION["username"]);
    unset($_SESSION["is_admin"]);
    echo '<script type="text/javascript">window.location.href="index.php";</script>';
}


?>