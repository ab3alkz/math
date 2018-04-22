/**
 * Created by a.amnzhol on 25.11.2017.
 */

var resultObj = {};

function calcPrim1() {
    var k1 = document.getElementById('n1').value;
    var k2 = document.getElementById('n2').value;

    var key = 'prim1'
    resultObj[key] = {};

    if (!$.isNumeric(k1)) {
        alert("1 коэфицент: '" + k1 + "' сан болуы керек");
        return;
    }
    if (!$.isNumeric(k2)) {
        alert("2 коэфицент: '" + k2 + "' сан болуы керек");
        return;
    }
    document.getElementById('out').innerHTML = startCalc(k1, k2, key);
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

function startCalc(k1, k2, key) {

    var res = getFormula(k1, k2);

    res += getDiv('Дискриминант:', 'title');
    res += getDiscriminant(1, k1, k2, key);

    res += getBR() + getDiv('Ортақ шешімі:', 'title');
    res += commonDecision(resultObj[key].K1, resultObj[key].K2, key);
    return res;
}

function getDiscriminant(a, b, c, key) {
    if (!mathIsNumeric(a) || !mathIsNumeric(b) || !mathIsNumeric(c)) {
        return;
    }
    resultObj[key].D = b * b - 4 * c;

    var res = getFrame(
        isCondition(a == 1, '', getHtmlMain(a)) + getHtmlSqr('k', 2)
        + isCondition(b == 1, '', getHtmlPlus(b)) + getHtmlMain('k')
        + isCondition(c == 1, '', getHtmlPlus(c)) + getHtmlMain(' = 0')
        + getHtmlTab() + getHtmlMain(' [ ≠ 0 ]'));

    res += getFrame(getHtmlMain('D =' + getNbsp()) + isCondition(b == 1, '', getHtmlMain(b * b))
        + getHtmlMinus(4) + getHtmlMain(' * ')
        + isCondition(a == 1, '', getHtmlMain(getMathMultiplication(a)))
        + isCondition(c == 1, '', getHtmlMain(getMathMultiplication(c)))
        + getHtmlMain(getNbsp() + ' = ')
        + isCondition(b == 1, '', getHtmlMain(b * b)) + getHtmlMinus(4 * c)

        + getHtmlMain(getNbsp() + ' = ') + getHtmlMain(resultObj[key].D)
    );


    resultObj[key].K1 = mathRound((-2 - Math.sqrt(resultObj[key].D)) / 2);
    res += getFrame(getHtmlMain(' ')) + getFrame(
            getHtmlIdx('k', 1) + getHtmlMain(getNbsp() + ' = ') + getFraction(getHtmlMain('-' + b) + getHtmlMain(' - ') + getHtmlSqrt(resultObj[key].D), getHtmlMain(2)) + getHtmlMain(getNbsp() + ' = ') + getHtmlMain(resultObj[key].K1)
        );


    resultObj[key].K2 = mathRound((-2 + Math.sqrt(resultObj[key].D)) / 2);
    res += getFrame(getHtmlMain(' ')) + getFrame(
            getHtmlIdx('k', 2) + getHtmlMain(getNbsp() + ' = ') + getFraction(getHtmlMain('-' + b) + getHtmlMain(' + ') + getHtmlSqrt(resultObj[key].D), getHtmlMain(2)) + getHtmlMain(getNbsp() + ' = ') + getHtmlMain(resultObj[key].K2)
        );

    return res;
}


function commonDecision(k1, k2, key) {
    var res = getFrame(
        getHtmlIdx('y', 1) + getHtmlMain("(x) = ")
        + getHtmlIdx('c', 1) + getHtmlSqr('e', isCondition(k1 == 1, 'x', k1 + 'x'))
        + getHtmlIdx(' + c', 2) + getHtmlSqr('e', isCondition(k2 == 1, 'x', k2 + 'x'))
    );

    res += getFrame(
        getHtmlIdx("y'", 1) + getHtmlMain("(x) = ")
        + getHtmlIdx(isCondition(k1 == 1, '', k1) + 'c', 1) + getHtmlSqr('e', isCondition(k1 == 1, 'x', k1 + 'x'))
        + getHtmlIdx(isCondition(k2 < 0, ' - ', ' + ') + isCondition(k2 == 1, '', k2) + 'c', 2)
        + getHtmlSqr('e', isCondition(k2 == 1, 'x', k2 + 'x'))
    );

    res = getHtmlBraceRight(res, getFrame(getHtmlIdx('c', 1) + getHtmlIdx(', c', 2) + getHtmlMain(' - кез келген тұрақтылар')));


    res += getBR(2) + getHtmlBraceLeft(
            getFrame(
                getHtmlIdx('y', 1) + getHtmlMain("(0) = ")
                + getHtmlIdx('c', 1)
                + getHtmlIdx(' + c', 2) + getHtmlMain(' = 1 ')
            )
            + getFrame(
                getHtmlIdx("y'", 1) + getHtmlMain("(0) = ")
                + getHtmlIdx(isCondition(k1 == 1, '', k1) + 'c', 1)
                + getHtmlMain(' + ')
                + getHtmlIdx(isCondition(k2 == 1, '', k2) + 'c', 2) + getHtmlMain(' = 1 ')
            )
        );

    res += getCramer(key);
    return res;
}

function getCramer(key) {
    var res = getBR(1) +
        getFrame(
            getHtmlMain("Δ = ")
            + getDiv(
                getDiv(1 + getBR() + '-3', 'cramer-left')
                + getDiv(1 + getBR() + '15568', 'cramer-right')
                , "cramer-border math-inner")
        )

    return res;
}