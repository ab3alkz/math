/**
 * Created by a.amnzhol on 25.11.2017.
 */
function startPrim2(key) {
    if (document.getElementById('mathFormula')) {
        document.getElementById('mathFormula').innerHTML = getFormula()
            + getFrame(getHtmlMain("y(0) = 0 "))
            + getFrame(getHtmlMain("y'(0) = 0 "));
        document.getElementById('out').innerHTML = calcPrim2(key);
    }
}
$(document).ready(function () {

    var key = 'prim2'
    startPrim2(key);
    calcPrim2(key);
});


function calcPrim2(key) {

    var res = calcPrim1(key);
    res += '<h1>Сонымен:</h1>';
    res += getCramerF2(key, 1, resultObj[key].K1, resultObj[key].K2, 1, 0);

    document.getElementById('out').innerHTML = res;
}


function getCramerF2(key, Y_idx, k1, k2, y, y_) {
    var res = getBR(2) + "<hr>";

    var cc11 = (resultObj[key]["kramer1C1"] * resultObj[key].K1) * resultObj[key]["kramer2C1"];
    var cc12 = (resultObj[key]["kramer1C1"] * resultObj[key].K1) * resultObj[key]["kramer2C2"];

    var cc21 = (resultObj[key]["kramer1C2"] * resultObj[key].K2) * resultObj[key]["kramer2C1"];
    var cc22 = (resultObj[key]["kramer1C2"] * resultObj[key].K2) * resultObj[key]["kramer2C2"];

    var cc31 = (resultObj[key]["kramer2C1"] * resultObj[key].K1) * resultObj[key]["kramer1C1"];
    var cc32 = (resultObj[key]["kramer2C1"] * resultObj[key].K1) * resultObj[key]["kramer1C2"];

    var cc41 = (resultObj[key]["kramer2C2"] * resultObj[key].K2) * resultObj[key]["kramer1C1"];
    var cc42 = (resultObj[key]["kramer2C2"] * resultObj[key].K2) * resultObj[key]["kramer1C2"];

    var ccT = ((cc11 + cc12 + cc21 + cc22) - (cc31 + cc32 + cc41 + cc42));


    var sq11 = resultObj[key].K1 + resultObj[key].K1;
    var sq12 = resultObj[key].K1 + resultObj[key].K2;

    var sq21 = resultObj[key].K2 + resultObj[key].K1;
    var sq22 = resultObj[key].K2 + resultObj[key].K2;

    var sq31 = resultObj[key].K1 + resultObj[key].K1;
    var sq32 = resultObj[key].K1 + resultObj[key].K2;

    var sq41 = resultObj[key].K2 + resultObj[key].K1;
    var sq42 = resultObj[key].K2 + resultObj[key].K2;

    res += getBR(1) +
        getFrame(getHtmlMain("Δ(t) = ")
            + getDiv(
                getDiv(resultObj[key]["kramerY'1"] + getBR() + resultObj[key]["kramerY1"], 'cramer-left')
                + getDiv(resultObj[key]["kramerY'2"] + getBR() + resultObj[key]["kramerY2"], 'cramer-right'), "cramer-border math-inner")
            + getHtmlMain(getNbsp() + " = ("
                + cc11 + '^' + sq11
                + ' + '
                + cc12 + '^' + sq12
                + ' + '
                + cc21 + '^' + sq21
                + ' + '
                + cc22 + '^' + sq22
                + ') - ('
                + cc31
                + ' + '
                + cc32
                + ' + '
                + cc41
                + ' + '
                + cc42 + ') = ' + ccT
            )
        )
    ;

    return res;
}