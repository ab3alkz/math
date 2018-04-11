/**
 * Created by a.amanzhol on 09.04.2018.
 */
function getHtmlSqrt(x, xSqrt) {
    return getDiv(getDiv(x, 'main') + getDiv(xSqrt, 'index'), 'sqrt');

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

function isNullDefVal(emptyVal, val, defVal) {
    if (isNullOrEmpty(emptyVal))
        return defVal;
    else
        return val;
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