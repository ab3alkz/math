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

<?php include "header.php"; ?>


<div class="container">
    <div class="page">
        <div style="text-align: left">
        </div>
        <?php include "breadcrumb.php" ?>
        <div class="row">
            <div class="col-md-9 col-md-push-3">
                <div id="projects-html" data-is-filter-active="1" data-page="1">
                    <div id="mathFormula">
                    </div>

                </div>

                <BR/>

                <!--
                 <p>функция: <input type="text" id="n3"></p>
                 <button onclick="calcPrim1()">Есепте</button>-->
                <div class="areaMath">
                    <?php
                    $prim = null;
                    if (isset($_GET['prim'])) {
                        $prim = $_GET['prim'];

                    }
                    if ($prim == null || $prim == 0) {
                        $prim = 1;
                    }
                    $primresult = mysql_query("SELECT * FROM prim Where id= $prim", $db) or die("Invalid query: " . mysql_error());
                    $primmyrow = mysql_fetch_array($primresult);
                    if ($primmyrow == true) {
                        do {
                            ?>

                            <?php
                            echo $primmyrow['form'] . ' <br/><br/>';
                            echo '<button onclick="' . $primmyrow['fnc'] . '"> Есептелу жолы</button>';
                        } while ($primmyrow = mysql_fetch_array($primresult));
                    }
                    ?>
                </div>

                <hr>
                <p id="out"></p>
                <br>
                <div class="clearfix"></div>
                <br><br>
                <div class="clearfix"></div>
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

<style>
    .areaMath #functionArea_toolbar1,
    .areaMath #functionArea_toolbar2,
    .areaMath #functionArea_hr,
    .areaMath #functionArea_visualaid {
        display: none;
    }
</style>