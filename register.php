<h3>Сайтқа тіркелу</h3>
<br>
<form method="post">
    <input type="hidden" name="REFERER" value="<?php echo  $_SERVER['HTTP_REFERER'];?>">
    <div class="register">
        <span>Логин:</span><input type="text" name="login">
    </div>
    <div class="register">
        <span>Тегі:</span><input type="text" name="lname">
    </div>
    <div class="register">
        <span>Аты:</span><input type="text" name="fname">
    </div>
    <div class="register">
        <span>Әкесінің аты:</span><input type="text" name="mname">
    </div>
    <br>
    <div class="register">
        <span>Құпия сөз:</span><input type="password" name="password">
    </div>
    <div class="register">
        <span>Құпия сөзді қайталаңыз:</span><input type="password" name="password2">
    </div>
    <br>
    <input type="submit" class="btn btn-success" value="Сақтау">
</form>