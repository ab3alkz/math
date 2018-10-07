<?php
if (isset($_POST['like']) && isset($_POST['lection']) && isset($_POST['cuser']) && isset($_POST['comment'])) {
    $like = $_POST['like'];
    $lection = $_POST['lection'];
    $cuser = $_POST['cuser'];
    $comment = $_POST['comment'];
    include "db.php";
    $query = mysql_query("insert into likes(like1, cuser, dat, lection, comment)
 VALUES ('$like', '$cuser', sysdate(), '$lection', '$comment' )", $db) or die("Invalid query: " . mysql_error());

    $result = mysql_query("select sum(l.like1) like_on,
            sum(case when l.like1 = 0 then 1 else 0 end) like_off 
            from likes l Where l.comment = $comment", $db) or die("Invalid query: " . mysql_error());

    $myrow = mysql_fetch_array($result);

    if ($myrow == true) {
        if ($like == 1) {
            echo $myrow['like_on'];
        } else {
            echo $myrow['like_off'];
        }
    }
}
?>