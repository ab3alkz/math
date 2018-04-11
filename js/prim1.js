/**
 * Created by a.amnzhol on 25.11.2017.
 */
function calcPrim1() {
    var k1 = document.getElementById('n1').value;
    var k2 = document.getElementById('n2').value;

    if (!$.isNumeric(k1)) {
        alert("1 коэфицент: '" + k1 + "' сан болуы керек");
        return;
    }
    if (!$.isNumeric(k2)) {
        alert("2 коэфицент: '" + k2 + "' сан болуы керек");
        return;
    }
    document.getElementById('out').innerHTML = step1(k1, k2);
}

function getFormula(k1, k2) {
    return getFrame(
        getHtmlMain("y''(x)")
        + isCondition(!isNullOrEmpty(k1), getHtmlPlus(k1), getHtmlIdx(' + k', 1)) + getHtmlMain("y'")
        + isCondition(!isNullOrEmpty(k2), getHtmlPlus(k2), getHtmlIdx(' + k', 2))
        + getHtmlMain("y(x) = f(x)")
    );
}

$(document).ready(function () {
    document.getElementById('mathFormula').innerHTML = getFormula()
        + getFrame(getHtmlMain("y(0) = 0 "))
        + getFrame(getHtmlMain("y'(0) = 0 "));
    calcPrim1();
});

function step1(k1, k2) {
    var res = getFormula(k1, k2);
    res += getDiv('Дискриминант:', 'title');
    res += discriminant(1, k1, k2);
    return res;
}

function discriminant(a, b, c) {
    if (!mathIsNumeric(a) || !mathIsNumeric(b) || !mathIsNumeric(c)) {
        return;
    }
    var res = getFrame(
        isCondition(a == 1, '', getHtmlMain(a)) + getHtmlSqrt('k', 2)
        + isCondition(b == 1, '', getHtmlPlus(b)) + getHtmlMain('k')
        + isCondition(c == 1, '', getHtmlPlus(c)) + getHtmlMain(' = 0')
        + getTab() + getHtmlMain(' [ ≠ 0 ]'));

    res += getFrame(getHtmlMain('D =' + getNbsp()) + isCondition(b == 1, '', getHtmlMain(b * b))
        + getHtmlMinus(4) + getHtmlMain(' * ')
        + isCondition(a == 1, '', getHtmlMain(getMathMultiplication(a)))
        + isCondition(c == 1, '', getHtmlMain(getMathMultiplication(c))));


    return res;
}