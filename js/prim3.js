/**
 * Created by a.amanzhol on 21.12.2018.
 */
function startPrim3(key) {
    if (document.getElementById('mathFormula')) {

        document.getElementById('mathFormula').innerHTML = getFormula3()
            + getDiv(getFrame(getHtmlMain("0 < x < 1 ")), "zhagdai1")
            + getDiv(getFrame(getHtmlMain("0 < x < c - 0, c + 0 < x < 1 ")), "zhagdai2");
        // calcPrim3(key);
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


function isSekiris() {
    var y05 = document.getElementById("y05").value;
    var y_05 = document.getElementById("y_05").value;
    if (!isNullOrEmpty(y05) || !isNullOrEmpty(y_05)) {
        return true;
    }
    return false;
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

function calcPrim3(key) {

    onchange05();
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;

    var h0 = document.getElementById('h0').value;
    var h_0 = document.getElementById('h_0').value;

    var y05 = document.getElementById('y05').value;
    var y_05 = document.getElementById('y_05').value;

    resultObj[key] = {};

    if (!mathIsNumeric(p1)) {
        return;
    }
    if (!mathIsNumeric(p2)) {
        return;
    }
    if (!mathIsNumeric(h0)) {
        return;
    }
    if (!mathIsNumeric(h_0)) {
        return;
    }
    if (!isNullOrEmpty(y05) && !mathIsNumeric(y05)) {
        return;
    }
    if (!isNullOrEmpty(y_05) && !mathIsNumeric(y_05)) {
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

    /*
    if (resultObj[key].D > 0) {
          res += getBR() + "<hr>" + getDiv('Сонымен:', 'title');
    }
    */


    res += getBR() + "<hr>";
    if (isSekiris()) {

        res += getFrame(
            getHtmlMain(getBR() + "y(x) =  " + getNbsp())
            + getHtmlMain(getBR() + "h(0)") + getHtmlIdx(getBR() + "y", getBR(2) + "1") + getHtmlMain(getBR() + "(x)")
            + getHtmlMain(getBR() + getNbsp() + " + " + getNbsp())
            + getHtmlMain(getBR() + "h'(0)") + getHtmlIdx(getBR() + "y", getBR(2) + 2) + getHtmlMain(getBR() + getNbsp() + "(x) + " + getNbsp())
            +
            getHtmlBraceLeft(
                getHtmlMain("0, 0 < x < c - 0") + getClearfix()
                + getHtmlIdx("k'", "t") + getHtmlMain("(x,c)")
                + getHtmlIdx("[h]", "c")
                + getHtmlIdx("- p", 1)
                + getHtmlMain("k(x,c)")
                + getHtmlIdx("[h]", "c")
                + getHtmlMain(" - k(x,c)")
                + getHtmlIdx("[h']", "c")
                + getHtmlMain(", c + 0 < x < 1 ")
            )
        );

        res +=
            getFrame(getBR(2) +
                getHtmlMain(getDiv(" = " + getNbsp(), " margin-top-12px"))
                + getHtmlMain(getDiv(h0, " margin-top-12px"))
                + getHtmlBrackets(resultObj[key].kramerY1x)
                + getHtmlMain(getDiv(getNbsp() + getMathPlus(h_0)  + getNbsp() + Math.abs(h_0), " margin-top-12px"))
                + getHtmlBrackets(resultObj[key].kramerY2x)
                + getClearfix() + getBR(2)
                + getHtmlMain(getBR(2) + getNbsp() + " + " + getNbsp())
                + getHtmlBraceLeft(
                    getHtmlMain(getBR(2) + y05 + " * ")
                    + getFraction(
                    getDiv(
                        getDiv(getHtmlIdx("y", 1) + getHtmlMain("(x)") + getBR() + getDiv(getHtmlIdx("y'", 1) + getHtmlMain("(c)"), "floatleft"), 'cramer-left')
                        + getDiv(getHtmlIdx("y", 2) + getHtmlMain("(x)") + getBR() + getDiv(getHtmlIdx("y'", 2) + getHtmlMain("(c)"), "floatleft"), 'cramer-right'), "cramer-border math-inner")
                    + getNbsp(),
                    getDiv(
                        getDiv(getHtmlIdx("y'", 1) + getHtmlMain("(c)") + getBR() + getDiv(getHtmlIdx("y", 1) + getHtmlMain("(c)"), "floatleft"), 'cramer-left')
                        + getDiv(getHtmlIdx("y'", 2) + getHtmlMain("(c)") + getBR() + getDiv(getHtmlIdx("y", 2) + getHtmlMain("(c)"), "floatleft"), 'cramer-right'), "cramer-border math-inner")
                    ) +
                    getHtmlMain(getBR(2) + getNbsp() + getMathPlus(y_05) + getNbsp() + Math.abs(y_05) + " * ")
                    + getFraction(
                    getDiv(
                        getDiv(getHtmlIdx("y", 1) + getHtmlMain("(x)") + getBR() + getDiv(getHtmlIdx("y'", 1) + getHtmlMain("(c)"), "floatleft"), 'cramer-left')
                        + getDiv(getHtmlIdx("y", 2) + getHtmlMain("(x)") + getBR() + getDiv(getHtmlIdx("y'", 2) + getHtmlMain("(c)"), "floatleft"), 'cramer-right'), "cramer-border math-inner")
                    + getNbsp()
                    ,
                    getDiv(
                        getDiv(getHtmlIdx("y'", 1) + getHtmlMain("(c)") + getBR() + getDiv(getHtmlIdx("y", 1) + getHtmlMain("(c)"), "floatleft"), 'cramer-left')
                        + getDiv(getHtmlIdx("y'", 2) + getHtmlMain("(c)") + getBR() + getDiv(getHtmlIdx("y", 2) + getHtmlMain("(c)"), "floatleft"), 'cramer-right'), "cramer-border math-inner")
                    )
                    , "", "height175"
                )
            );


    } else {
        res += getFrame(
            getHtmlMain("y(x) =  " + getNbsp())
            + getHtmlMain("h(0)") + getHtmlIdx("y", 1) + getHtmlMain("(x)")
            + getHtmlMain(getNbsp() + " + " + getNbsp())
            + getHtmlMain("h'(0)") + getHtmlIdx("y", 2) + getHtmlMain("(x)")
            + getHtmlMain(getNbsp() + " = ")
        );

        res += getBR() +
            getFrame(
                getHtmlMain(getDiv(" = " + getNbsp(), " margin-top-12px"))
                + getHtmlMain(getDiv(h0, " margin-top-12px"))
                + getHtmlBrackets(resultObj[key].kramerY1x)
                + getHtmlMain(getDiv(getNbsp() + getMathPlus(h_0)  + getNbsp() + Math.abs(h_0), " margin-top-12px"))
                + getHtmlBrackets(resultObj[key].kramerY2x)
            );

    }

    document.getElementById('out').innerHTML = res;
}
