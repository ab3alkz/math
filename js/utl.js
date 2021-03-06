/**
 * Created by a.amanzhol on 09.04.2018.
 */
function getHtmlSqr(x, xSqr) {
    return getDiv(getDiv(x, 'main') + getDiv(xSqr, 'sqr'), 'inner');

}

function getHtmlSqrt(x) {
    return getDiv(getDiv(getHtmlMain('√') + getHtmlMain(getDiv(x, 'sqrt-inner')), 'main'), 'inner');

}

function getHtmlIdx(x, xIdx) {
    return getDiv(getDiv(x, 'main') + getDiv(xIdx, 'index'), 'inner');
}

function getHtmlMain(x) {
    return getDiv(getDiv(x, 'main'), 'inner');
}

function getDiv(val, class_) {
    if (isNullOrEmpty(class_))
        return '<div>' + val + '</div>';
    else
        return '<div class="math-' + class_ + '">' + val +
            '</div>';
}

function getClearfix() {

    return '<div class="clearfix"></div>';
}

function nvl(val1, val2) {
    if (isNullOrEmpty(val1))
        return val2;
    else
        return val1;
}

function isCondition(condition, trueVal, falseVal) {
    if (condition)
        return trueVal;
    else
        return falseVal;
}

function isNullOrEmpty(e) {
    if (e == null || e == "" || e == undefined)
        return true;
    else
        return false;
}

function getBR(xCnt) {
    if (nvl(xCnt, 0) > 1) {
        var xBr = '';
        for (var i = 1; i <= xCnt; i++) {
            xBr += '<br />';
        }
        return xBr;
    } else {
        return '<br />';
    }
}

function getNbsp() {
    return '&nbsp;'
}

function getHtmlTab() {
    return getTab();
}

function getTab() {
    return '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;';
}

function getFrame(val) {
    return getDiv(val, "frame");
}

function getMathPlus(x) {
    if (!isNullOrEmpty(x) && x < 0) {
        return ' - ';
    }
    return ' + ';
}

function getMathMinus(x) {
    if (!isNullOrEmpty(x) && x < 0) {
        return ' + ';
    }
    return ' - ';
}

/**
 * кобейту
 * @param x
 * @returns {string}
 */
function getMathMultiplication(x) {
    if (!isNullOrEmpty(x) && x < 0) {
        return '(' + x + ')';
    }
    return x;
}

function getHtmlPlus(x) {
    return getDiv(getDiv(getMathPlus(x) + Math.abs(x), 'main'), 'inner');
}

function getHtmlMinus(x) {
    return getDiv(getDiv(getMathMinus(x) + Math.abs(x), 'main'), 'inner');
}

function mathIsNumeric(n) {
    if (!$.isNumeric(n)) {
        console.log("'" + n + "' сан болуы керек");
        alert("'" + n + "' сан болуы керек");
        return false;
    }
    return true;
}

function getFraction(top, bottom) {
    var val = '<table><tr class="math-fraction-top"><td>' + top + '</td></tr><tr class="math-fraction-bottom"><td >' + bottom + '</td></tr></table>';
    return getDiv(val, "fraction");
}

function mathRound(num) {
    return Math.round(num * 100) / 100;
}

function mathRound3(num) {
    return Math.round(num * 1000) / 1000;
}

function mathRound4(num) {
    return Math.round(num * 10000) / 10000;
}

function getHtmlBraceLeft(val, braceTxt, class_) {
    return getDiv(nvl(braceTxt, ''), 'brace-left '+class_) + getDiv(val, "brace") + getClearfix()
}

function getHtmlBraceRight(val, braceTxt) {
    return getDiv(val, "brace") + getDiv(braceTxt, 'brace-rigth') + getClearfix()
}

function getHtmlBrackets(v) {
    return getDiv(getDiv(getDiv(v), 'main math-brackets'), 'inner')
}

function getHtmlIntegral(v) {
    return getDiv(getDiv('x', 'integral-top clearfix')
        + getDiv('', ' clearfix')
        + getDiv(v, 'main math-integral clearfix')
        + getDiv('', ' clearfix')
        + getDiv('0', 'integral-bottom clearfix'), 'integral-wrapper')
}