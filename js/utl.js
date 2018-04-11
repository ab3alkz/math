/**
 * Created by a.amanzhol on 09.04.2018.
 */
function getHtmlSqrt(x, xSqrt) {
    return getDiv(getDiv(x, 'main') + getDiv(xSqrt, 'sqrt'), 'inner');

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

function getHtmlPlus(x) {
    return getDiv(getDiv(getMathPlus(x) + Math.abs(x), 'main'), 'inner');
}

function mathIsNumeric(n) {
    if(!$.isNumeric(n)) {
        console.log("'" + n + "' сан болуы керек");
        alert("'" + n + "' сан болуы керек");
        return false;
    }
    return true;
}