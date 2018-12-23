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
    /*  res = getPrim1(key);
      if (resultObj[key].D > 0) {
          res += '<h1>Сонымен:</h1>';
          res += getCramerF2(key);
          res += getBR(2) + '<h1>Сондықтан:</h1>';

          res += getFunc(key);
      }*/

    res += getDiv('(1) - (3) есептің шішімі', 'title');
    res += getFrame(
        getHtmlMain("y(x) = h(0)")
        + getHtmlIdx("y", 1)
        + getHtmlMain("(x) + h'(0)")
        + getHtmlIdx("y", 2)
        + getHtmlMain("(x)")
    );

    res += getDiv('түрінде болады', 'title');


    document.getElementById('out').innerHTML = res;
}
