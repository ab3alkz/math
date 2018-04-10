/**
 * Created by a.amnzhol on 25.11.2017.
 */
function plus() {

    var k1 = document.getElementById('n1').value;
    var k2 = document.getElementById('n2').value;
    document.getElementById('out').innerHTML = getFormula(k1,k2)
}

function setFormula() {

    document.getElementById('mathFormula').innerHTML = getFormula();
}


function getFormula(k1, k2) {

    return getFrame(
        getHtmlMain("y''(x) + ")
        + isNullDefVal(k1,getHtmlMain(k1),getHtmlIndex('k', 1)) + getHtmlMain("y' + ")
        + isNullDefVal(k2, getHtmlMain(k2), getHtmlIndex('k', 2))
        + getHtmlMain("y(x) = f(x)"))
        + getFrame(getHtmlMain("y(0) = 0 "))
        + getFrame(getHtmlMain("y'(0) = 0 "))
    ;
}

$( document ).ready(function() {
    setFormula()
});