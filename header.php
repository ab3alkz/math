<?php include "db.php"; ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title> Фундаменталдық математика</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="57x57" href="/static/images/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/static/images/apple-icon-144x144.png">
    <link rel="manifest" href="/manifest.json">
    <meta property="og:country-name" content="Kazakh">
    <meta property="og:type" content="website">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/projects.rss">
    <meta name="twitter:image:src" content="/static/images/logo/freelancehunt-ru@2x.png">
    <meta property="og:image" content="/static/images/freelancehunt-header.jpg">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ESEPTE.KZ">
    <link rel="stylesheet" href="css/css.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/utl.css" type="text/css" media="screen">
    <link rel="stylesheet"
          href="./css/bootstrap.min.css"
          type="text/css" media="screen">
    <link rel="stylesheet"
          href="./css/vendor-all.5db340b3.css"
          media="screen">
    <link rel="stylesheet"
          href="./css/freelancehunt-all.7c168467.css"
          media="screen">

    <style type="text/css"></style>
    <script src="js/utl.js" defer></script><!--
    <script src="js/prim1.js" defer></script>-->
</head>
<body data-ng-app="fhApp">
<div id="top-nav">
    <div class="container">
        <div class="row" style="position: relative;">
            <div class="col-md-5" style="padding-top: 5px">
                <a href="index.php"
                   class="hidden-xs hidden-sm img-responsive pull-left marker-no-tooltip logo-komekshi"
                   id="header-logo">ESEPTE.KZ</a>

                <a href="/"
                   class="visible-xs visible-sm img-responsive pull-left marker-no-tooltip logo-komekshi"
                   id="header-logo-sm ">ESEPTE.KZ</a>
                <div class="clearfix"></div>
                <span class="logo-komekshi-span">Фундаменталдық математика бағытындағы есептерді шешу</span>
            </div>

            <div id="top-ushki">
                <div class="btn-group">
                    <?php
                    if (isset($cuser)) {
                        ?>
                        <a class="btn btn-default btn-sm" href="profile.php">
                            <img src="./img/imediasun.png" width="15" height="15" class="vertical avatar img-rounded " style="margin-right: 3px"> <?php echo $username; ?>
                        </a>
                        <a class="btn btn-default btn-sm" href="?exit">
                            <i class="fa fa-sign-out-alt"></i>
                            <span>Шығу</span>
                        </a>
                        <?php
                    } else {
                        ?>
                        <a class="btn btn-default btn-sm" href="?action=register">
                            <i class="fa fa-plus"></i>
                            <span>Тіркелу</span>
                        </a>
                        <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"
                           href="/projects/skill/veb-programmirovanie/99.html#">
                            <i class="fa fa-key"></i><span> Кіру</span>
                            <span class="caret"></span>
                        </a>
                        <div class="dropdown-menu">
                            <form method="post" action="" id="login-form">
                                <input type="text" name="login" id="login" placeholder="Логин" class="form-control"
                                       style="margin-bottom: 15px;" value="">
                                <input type="password" name="password" id="password" class="form-control"
                                       placeholder="Пароль" style="margin-bottom: 15px;">
                                <!--   <input type="checkbox" name="remember-me" id="remember-me" value="1" title=""
                                          checked="checked" style="margin-right: 10px;" class="pull-left"
                                          data-original-title="Запомнить меня">
                                   <label for="remember-me"> Запомнить меня</label>-->
                                <button class="btn btn-default btn-primary form-control" type="submit" id="dologin">Кіру
                                </button>
                            </form>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>

            <div class="pull-right hidden-xs top-menu">
                <a href="index.php" class="btn btn-success"><i class="fa fa-book"></i>&nbsp;Дәрістер</a>
                <a href="index.php?action=testlist" class="btn btn-success"><i class="fa fa-trophy"></i>Сынақтар</a>
                <!--<a href="/freelancers" class="btn btn-success"><i class="fa fa-users"></i>&nbsp;Фрилансеры</a>
                <a href="/showcase" class="btn btn-success"><i
                            class="fa fa-picture-o"></i><span class="hidden-sm">&nbsp;Работы</span></a>-->
            </div>
            <div class="pull-right visible-xs top-menu">
                <a href="index.php" class="btn btn-success" title=""
                   data-original-title="Дәрістер"><i class="fa fa-book"></i></a>
                <a href="index.php?action=testlist" class="btn btn-success" title=""
                   data-original-title="Сынақтар"><i class="fa fa-trophy"></i></a>
                <!--<a href="/freelancers" class="btn btn-success" title=""
                   data-original-title="Фрилансеры"><i class="fa fa-users"></i></a>
                <a href="/showcase" class="btn btn-success" title=""
                   data-original-title="Работы"><i class="fa fa-picture-o"></i></a>-->
            </div>
        </div>
    </div>
</div>