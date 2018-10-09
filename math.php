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

                <p>1 коэфицент: <input type="number" id="n1" value="2"></p>
                <p>2 коэфицент: <input type="number" id="n2" value="-3"></p>
                <br/><br/><!--
                <p>функция: <input type="text" id="n3"></p>
                <button onclick="calcPrim1()">Есепте</button>-->

                <button onclick="calcPrim2()"> Есептелу жолы</button>

                <hr>
                <p id="out"></p>
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