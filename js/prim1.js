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
    document.getElementById('out').innerHTML = getFormula(k1, k2);
}

function getFormula(k1, k2) {
    return getFrame(
        getHtmlMain("y''(x)")
        + isNullDefVal(k1, getHtmlPlus(k1), getHtmlIdx(' + k', 1)) + getHtmlMain("y'")
        + isNullDefVal(k2, getHtmlPlus(k2), getHtmlIdx(' + k', 2))
        + getHtmlMain("y(x) = f(x)")
        )
        + getFrame(getHtmlMain("y(0) = 0 "))
        + getFrame(getHtmlMain("y'(0) = 0 "));
}

$(document).ready(function () {
    document.getElementById('mathFormula').innerHTML = getFormula();

});