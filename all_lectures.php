<?php
if ($isAdmin == 1) {
    ?>
    <a class="btn btn-success" style="margin-bottom: 15px"
       href="?action=add"><i class="fa fa-plus"></i>&nbsp;&nbsp;Дәріс қосу</a>
    <?php
}
?>
<table class="table table-normal">
    <tbody>

    <?php
    $idx = 0;
    $result = mysql_query("SELECT l.*, (SELECT COUNT(1) from comments c WHERE c.lection = l.id) comments, (SELECT COUNT(1) from stat c WHERE c.lecture = l.id) stat FROM lecture l", $db);
    $myrow = mysql_fetch_array($result);
    if ($myrow == true) {
        do {
            /*    if ($action == "editor" && $role == 1) {
                }*/
            $idx++;
            ?>

            <tr style="vertical-align: top;" class="featured" bgcolor="<?php
            if (bcmod($idx, 2) == 0) {
                echo "#f3f4f8";
            } else {
                echo "#ffffff";
            } ?>">
                <td class="left" colspan="5">
                    <a href="?lecture=<?php echo $myrow['id_txt']; ?>&id=<?php echo $myrow['id']; ?>"><?php echo $myrow['name']; ?></a>

                    <div class="lectures-p">
                        <p style="word-break: break-all">
                            <?php echo mb_substr($myrow['txt'], 0, 235); ?>...
                        </p>
                    </div>
                    <div style="line-height: 38px;">
                        <div class="pull-right">
                        </div>
                        <div style="font-size: 14px; font-weight: bold">
                            <span>&nbsp;
                                <i class="fa fa-calendar-o" style="color: navy"></i>
                                <span style="color: navy;"><?php echo $myrow['dat']; ?></span>
                            </span>
                            &nbsp;&nbsp;<i class="fa fa-eye" style="color: #00ae5a"></i>
                            <span style="color: #00ae5a"><?php echo $myrow['stat'] ; ?></span>

                            &nbsp;&nbsp;<i class="fa fa-comments" style="color: orange"></i>
                            <span style="color: orange"><?php echo $myrow['comments'] ?></span>

                        </div>
                    </div>
                </td>
            </tr>
            <?php
        } while ($myrow = mysql_fetch_array($result));
    }
    ?>


    </tbody>
</table>
<style>
    tr.featured td .lectures-p * {
        font-size: 14px !important;
    }
</style>