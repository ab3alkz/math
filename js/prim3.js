/**
 * Created by a.amanzhol on 21.12.2018.
 */
function startPrim3(key) {
    if (document.getElementById('mathFormula')) {
        document.getElementById('mathFormula').innerHTML = getFormula3()
            + getDiv(getFrame(getHtmlMain("0 < x < 1 ")), "zhagdai1")
            + getDiv(getFrame(getHtmlMain("0 < x < c - 0, c + 0 < x < 1 ")), "zhagdai2");
        calcPrim3(key);
    }
}

function getFormula3(key) {
    onchange05();
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

    if (!mathIsNumeric(p1)) {
        return;
    }
    if (!mathIsNumeric(p2)) {
        return;
    }


    var res = '';
    //[y]1/2
    res += getFrame(
        getHtmlIdx("[y]", getFraction(1, 2))
    );

    document.getElementById('out').innerHTML = res;
    return res;
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

function onchange05() {
    var y05 = document.getElementById("y05").value;
    var y_05 = document.getElementById("y_05").value;
    if (!isNullOrEmpty(y05) || !isNullOrEmpty(y_05)) {
        $(".math-zhagdai2").show();
        $(".math-zhagdai1").hide();
    } else {
        $(".math-zhagdai2").hide();
        $(".math-zhagdai1").show();
    }


    if (isNullOrEmpty(y05) || isNullOrEmpty(y_05)) {

        return;
    }
    if (!mathIsNumeric(y05)) {
        return;
    }
    if (!mathIsNumeric(y_05)) {
        return;
    }


    console.log(y05, y_05)
}