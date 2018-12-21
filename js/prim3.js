/**
 * Created by a.amanzhol on 21.12.2018.
 */
function startPrim3(key) {
    if (document.getElementById('mathFormula')) {
        document.getElementById('mathFormula').innerHTML = getFormula3()
            + getFrame(getHtmlMain("y(0) = 0 "))
            + getFrame(getHtmlMain("y'(0) = 0 "));
         calcPrim3(key);
    }
}

function getFormula3(key) {
    var k1 = document.getElementById('n1').value;
    var k2 = document.getElementById('n2').value;

    resultObj[key] = {};

    if (!$.isNumeric(k1)) {
        alert("1 коэфицент: '" + k1 + "' сан болуы керек");
        return;
    }
    if (!$.isNumeric(k2)) {
        alert("2 коэфицент: '" + k2 + "' сан болуы керек");
        return;
    }

    return getFrame(
        getHtmlMain("y''(x)")
        + isCondition(!isNullOrEmpty(k1), getHtmlPlus(k1), getHtmlIdx(' + k', 1)) + getHtmlMain("y'")
        + isCondition(!isNullOrEmpty(k2), getHtmlPlus(k2), getHtmlIdx(' + k', 2))
        + getHtmlMain("y(x) = 0")
    );
}


function calcPrim3(key) {
    var res = ' '+key;
  /*  res = getPrim1(key);
    if (resultObj[key].D > 0) {
        res += '<h1>Сонымен:</h1>';
        res += getCramerF2(key);
        res += getBR(2) + '<h1>Сондықтан:</h1>';

        res += getFunc(key);
    }*/
    document.getElementById('out').innerHTML = res;
}
