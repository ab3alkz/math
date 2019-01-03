/**
 * Created by a.amanzhol on 21.12.2018.
 */
function startPrim3(key) {
    if (document.getElementById('mathFormula')) {
        document.getElementById('mathFormula').innerHTML = getFormula3()
            + getFrame(getHtmlMain("0 < x < 1 "));
        calcPrim3(key);
    }
}

function getFormula3(key) {

    resultObj[key] = {};


    return getFrame(
        getHtmlMain("y''(x)") + getHtmlIdx(' + p', 1)
        + getHtmlMain("y'(x)") + getHtmlIdx(' + p', 2)
        + getHtmlMain("y(x) = 0")
        )
        + getFrame(getHtmlMain("y(0) = h(0), "))
        + getFrame(getHtmlMain("y'(0) = h'(0) "));

}


function calcPrim3(key) {

    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;

    resultObj[key] = {};

    if (!$.isNumeric(p1)) {
        alert("p1 коэфицент: '" + p1 + "' сан болуы керек");
        return;
    }
    if (!$.isNumeric(p2)) {
        alert("p2 коэфицент: '" + p2 + "' сан болуы керек");
        return;
    }


    var res = '';
    res += getFrame(
        getHtmlMain("y''(x) ") + getHtmlPlus(p1)
        + getHtmlMain("y'(x) ") + getHtmlPlus(p2)
        + getHtmlMain("y(x) = 0")
    );
    res += getDiscriminant(1, p1, p2, key);

    res += getBR() + getDiv('Ортақ шешімі:', 'title');
    if (resultObj[key].D < 0) {
        res += commonDecisionLeastZero(resultObj[key].K1, resultObj[key].K2, k1, k2, key);
    } else {
        res += commonDecision(resultObj[key].K1, resultObj[key].K2, key);
    }

    if (resultObj[key].D > 0) {
        res += getBR() + "<hr>" + getDiv('Сонымен:', 'title');
    }
    document.getElementById('out').innerHTML = res;
}
