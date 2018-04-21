/**
 * Created by a.amanzhol on 09.04.2018.
 */
function getHtmlSqr(x, xSqrt) {
    return getDiv(getDiv(x, 'main') + getDiv(xSqrt, 'sqr'), 'inner');

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

function nvl(val1, val2) {
    if (isNullOrEmpty(val1))
        return val2;
    else
        return val1;
}

function isCondition(condition, trueVal, falseVAl) {
    if (condition)
        return trueVal;
    else
        return falseVAl;
}

function isNullOrEmpty(e) {
    if (e == null || e == "" || e == undefined)
        return true;
    else
        return false;
}

function getBR() {
    return '<br />'
}

function getNbsp() {
    return '&nbsp;'
}

function getTab() {
    return getHtmlMain('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;');
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
    var val = '<table><tr class="math-fraction-top"><td>' + top + '</td></tr><tr><td class="math-fraction-bottom">' + bottom + '</td></tr></table>';
    return getDiv(val, "fraction");
}

function mathRound(num) {
    return Math.round(num * 10) / 10;
}

function getHtmlBraceLeft() {
    return getDiv('{', "brace")
}

function getHtmlBraceRight() {
    return getDiv('}', "brace")
}