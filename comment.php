<h3 style="border-top: 1px solid gray;margin-top: 25px; padding-top: 5px">Комментарилар:</h3>

<?php
if (isset($_POST['comment'])) {
    $comment = str_replace("'", "`", $_POST['comment']);

    mysql_query("insert into comments(comment, cuser, dat, lection) VALUES ('$comment', '$cuser', sysdate(), '$id' )", $db) or die("Invalid query: " . mysql_error());


}

$result = mysql_query("SELECT c.*, u.lname,u.fname, u.mname FROM comments c, users u where c.lection='$id' and u.id = c.cuser order by dat", $db);
$myrow = mysql_fetch_array($result);
$idx = 0;
if ($myrow == true) {
    do {
        $idx++;
        ?>
        <div style="margin-bottom: 10px; border: 1px solid silver;padding: 5px; border-radius: 5px; background: <?php
        if (bcmod($idx, 2) == 0) {
            echo '#f3f4f8';
        } else {
            echo '#ffffff';
        } ?>">
            <a href=""><?php echo $myrow['lname'] . " " . $myrow['fname']; ?></a>
            <div>
                <?php echo $myrow['comment']; ?>
            </div>
            <span>&nbsp;
                  <i class="fa fa-calendar-o" style="color: navy"></i>
                <span style="color: navy;"><?php echo $myrow['dat']; ?></span>
            </span>
            <span>&nbsp;
                  <a href="" class="fa fa-thumbs-up like-btn" style="color: #00ae5a"></a>
                <span style="color: #00ae5a;">5</span>
            </span>
            <span>&nbsp;
                  <a href="" class="fa fa-thumbs-down like-btn" style="color: orange"></a>
                <span style="color: orange;">1</span>
            </span>
        </div>
        <?php

    } while ($myrow = mysql_fetch_array($result));
}
if ($cuser) {
    ?>

    <form method="post" action="">
        <div class="word-wrapper areaComment" style="padding-top: 10px">

        <textarea style="width: 100%; height: 50px" class="mceEditor " maxlength="300" minlength="5" id="area"
                  name="comment"></textarea>
            <input type="submit" value="Сақтау" style="margin-top: 10px"
                   class='btn btn-success'>
        </div>
    </form>
    <?php
} else {
    ?>
        <div class="word-wrapper areaComment" style="padding-top: 10px">

        <textarea style="width: 100%; height: 50px" class="mceEditor " maxlength="300" minlength="5" id="area"
                  name="comment"></textarea>
            <input type="button" onclick="alert('Комментарии қалдыру үшін тіркелу керек!')" value="Сақтау" style="margin-top: 10px"
                   class='btn btn-success'>
        </div>

    <?php
}
?>
<style>
    .areaComment #area_toolbar2,
    .areaComment #area_justifycenter,
    .areaComment #area_justifyleft,
    .areaComment #area_justifyright,
    .areaComment #area_justifyfull,
    .areaComment #area_styleselect,
    .areaComment #area_formatselect,
    .areaComment #area_hr,
    .areaComment #area_removeformat,
    .areaComment #area_visualaid {
        display: none;
    }
</style>