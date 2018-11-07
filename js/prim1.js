/**
 * Created by a.amnzhol on 25.11.2017.
 */

var resultObj = {};

function startPrim1(key) {
    if (document.getElementById('mathFormula')) {
        document.getElementById('mathFormula').innerHTML = getFormula()
            + getFrame(getHtmlMain("y(0) = 0 "))
            + getFrame(getHtmlMain("y'(0) = 0 "));
        document.getElementById('out').innerHTML = calcPrim1(key);
    }
}

function calcPrim1(key) {
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
    return startCalc(k1, k2, key);
}

function getFormula(k1, k2) {
    return getFrame(
        getHtmlMain("y''(x)")
        + isCondition(!isNullOrEmpty(k1), getHtmlPlus(k1), getHtmlIdx(' + k', 1)) + getHtmlMain("y'")
        + isCondition(!isNullOrEmpty(k2), getHtmlPlus(k2), getHtmlIdx(' + k', 2))
        + getHtmlMain("y(x) = 0")
    );
}

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


    res += getCramer(key, 1, k1, k2, 1, 0);
    res += getCramer(key, 2, k1, k2, 0, 1);
    return res;
}

function getCramer(key, Y_idx, k1, k2, y, y_) {

    var res = getBR(2) + "<hr>" + getHtmlBraceLeft(
        getFrame(
            getHtmlIdx('y', Y_idx) + getHtmlMain("(0) = ")
            + getHtmlIdx('c', 1)
            + getHtmlIdx(' + c', 2) + getHtmlMain(' = ' + y)
        )
        + getFrame(
        getHtmlIdx("y'", Y_idx) + getHtmlMain("(0) = ")
        + getHtmlIdx(isCondition(k1 == 1, '', k1) + 'c', 1)
        + getHtmlMain(' + ')
        + getHtmlIdx(isCondition(k2 == 1, '', k2) + 'c', 2) + getHtmlMain(' = ' + y_)
        )
    );

    var delta = mathRound(1 * k2 - k1 * 1);
    res += getBR(1) +
        getFrame(
            getHtmlMain("Δ = ")
            + getDiv(
            getDiv(1 + getBR() + k1, 'cramer-left')
            + getDiv(1 + getBR() + k2, 'cramer-right')
            , "cramer-border math-inner")

            + getHtmlMain(getNbsp() + " = 1 * " + k2 + " - " + getMathMultiplication(k1) + " * 1 = ")
            + getHtmlMain(getNbsp() + delta)
        );

    var delta_1 = mathRound(y * 1 - y_ * 1);
    res += getBR(1) +
        getFrame(
            getHtmlIdx("Δ", 1) + getHtmlMain(" = ")
            + getDiv(
            getDiv(y + getBR() + y_, 'cramer-left')
            + getDiv(1 + getBR() + 1, 'cramer-right'), "cramer-border math-inner")
            + getHtmlMain(getNbsp() + " = " + delta_1)
        );

    var delta_2 = mathRound(k2 * y_ - k1 * y);
    res += getBR(1) +
        getFrame(
            getHtmlIdx("Δ", 2) + getHtmlMain(" = ")
            + getDiv(
            getDiv(k2 + getBR() + k1, 'cramer-left')
            + getDiv(y + getBR() + y_, 'cramer-right'), "cramer-border math-inner")
            + getHtmlMain(getNbsp() + " = " + delta_2)
        );

    var C1 = mathRound(delta_1 / delta);
    resultObj[key]["kramer" + Y_idx + 'C1'] = C1;
    res += getBR(2) +
        getFrame(
            getHtmlIdx("C", 1) + getHtmlMain(" = ")
            + getFraction(getHtmlIdx("Δ", 1), "Δ")
            + getHtmlMain(getNbsp() + " = " + C1)
        );

    var C2 = mathRound(delta_2 / delta);
    resultObj[key]["kramer" + Y_idx + 'C2'] = C2;

    res += getBR(1) +
        getFrame(
            getHtmlIdx("C", 2) + getHtmlMain(" = ")
            + getFraction(getHtmlIdx("Δ", 2), "Δ")
            + getHtmlMain(getNbsp() + " = " + C2)
        );

    resultObj[key]["kramerY" + Y_idx] = getFrame(getKramerY(C1, C2, 't', k1, k2, key, Y_idx));
    resultObj[key]["kramerY" + Y_idx + 'x'] = getFrame(getKramerY(C1, C2, 'x', k1, k2, key, Y_idx));
    res += getBR(2) +
        getFrame(getHtmlIdx('y', Y_idx)
            + getHtmlMain("(x) = ") + getKramerY(C1, C2, 'x', k1, k2, key, Y_idx));

    resultObj[key]["kramerY'" + Y_idx] = getFrame(getKramerY_(C1, C2, 't', k1, k2));
    resultObj[key]["kramerY'" + Y_idx + 'x'] = getFrame(getKramerY_(C1, C2, 'x', k1, k2));
    res += getBR(2) +
        getFrame(getHtmlIdx("y'", Y_idx)
            + getHtmlMain("(x) = ") + getKramerY_(C1, C2, 'x', k1, k2));

    return res;
}

function getKramerY(C1, C2, x, k1, k2, key, Y_idx) {

    var cL = {v: C1, e: "e", q: k1, x: x};
    var cR = {v: C2, e: "e", q: k2, x: x};
    var obj = {cL: cL, cR: cR};

    resultObj[key]["kramerY" + Y_idx + 'x' + x] = obj;

    return getHtmlMain(C1) + getHtmlSqr("e", isCondition(k1 == 1, '', k1) + x)
        + getHtmlMain(" + " + getNbsp())
        + getHtmlMain(C2) + getHtmlSqr("e", isCondition(k2 == 1, '', k2) + x);

}

function getKramerY_(C1, C2, x, k1, k2) {
    return getHtmlMain(getMathMultiplication(mathRound(k1 * C1)))
        + getHtmlSqr("e", isCondition(k1 == 1, '', k1) + x)
        + getHtmlMain(" + " + getNbsp())
        + getHtmlMain(getMathMultiplication(mathRound(k2 * C2))) + getHtmlSqr("e", isCondition(k2 == 1, '', k2) + x);

}