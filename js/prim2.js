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
    var ids = [11, 12, 21, 22, 31, 32, 41, 42];
    var idsl = [11, 12, 21, 22];
    var idsr = [31, 32, 41, 42];

    var arr = {};
    for (var i in ids) {
        arr['c' + ids[i]] = {id: ids[i]};
    }

    arr['c11'].v = (resultObj[key]["kramer1C1"] * resultObj[key].K1) * resultObj[key]["kramer2C1"];
    arr['c12'].v = (resultObj[key]["kramer1C1"] * resultObj[key].K1) * resultObj[key]["kramer2C2"];

    arr['c21'].v = (resultObj[key]["kramer1C2"] * resultObj[key].K2) * resultObj[key]["kramer2C1"];
    arr['c22'].v = (resultObj[key]["kramer1C2"] * resultObj[key].K2) * resultObj[key]["kramer2C2"];

    arr['c31'].v = (resultObj[key]["kramer2C1"] * resultObj[key].K1) * resultObj[key]["kramer1C1"];
    arr['c32'].v = (resultObj[key]["kramer2C1"] * resultObj[key].K1) * resultObj[key]["kramer1C2"];

    arr['c41'].v = (resultObj[key]["kramer2C2"] * resultObj[key].K2) * resultObj[key]["kramer1C1"];
    arr['c42'].v = (resultObj[key]["kramer2C2"] * resultObj[key].K2) * resultObj[key]["kramer1C2"];


    arr['c11'].q = resultObj[key].K1 + resultObj[key].K1;
    arr['c12'].q = resultObj[key].K1 + resultObj[key].K2;

    arr['c21'].q = resultObj[key].K2 + resultObj[key].K1;
    arr['c22'].q = resultObj[key].K2 + resultObj[key].K2;

    arr['c31'].q = resultObj[key].K1 + resultObj[key].K1;
    arr['c32'].q = resultObj[key].K1 + resultObj[key].K2;

    arr['c41'].q = resultObj[key].K2 + resultObj[key].K1;
    arr['c42'].q = resultObj[key].K2 + resultObj[key].K2;

    console.log(arr)


    for (var i in idsl) {
        for (var j in idsr) {
            var l = arr['c' + idsl[i]];
            var r = arr['c' + idsr[j]];
            if (l != null && r != null && equalSqrObjects(l, r)) {
                arr = removeSqrObjectInArr(ids, arr, idsl[i]);
                ids = removeIdsObj(ids, idsl[i]);
                arr = removeSqrObjectInArr(ids, arr, idsr[j]);
                ids = removeIdsObj(ids, idsr[j]);
                continue;
            }
        }
    }

    var rrl = plusSqrObjects(arr, idsl);
    var rrr = plusSqrObjects(arr, idsr);


    var ss = minusSqrObj(rrl, rrr);
    var res_inner = '';
    var itr = 0;
    for (var i in ss) {
        if (itr > 0) {
            res_inner += '+';
        }
        ss[i].v = mathRound(ss[i].v);
        res_inner += getHtmlMain(getNbsp() +
            getHtmlSqr(
                isCondition(ss[i].v < 0, '-', '')
                + isCondition(Math.abs(ss[i].v) == 1, '', Math.abs(ss[i].v)) + "e",

                ss[i].q + 't'
            )
            + getNbsp())
    }


    res += getBR(1) +
        getFrame(getHtmlMain(getBR() + "Δ(t) = ")
            + getDiv(
                getDiv(resultObj[key]["kramerY'1"] + getBR() + resultObj[key]["kramerY1"], 'cramer-left')
                + getDiv(resultObj[key]["kramerY'2"] + getBR() + resultObj[key]["kramerY2"], 'cramer-right'), "cramer-border math-inner")
            + getHtmlMain(getBR() + getNbsp() + " =  ") + res_inner
        )
    ;
    resultObj[key]['Δ(t)'] = ss[0];

    res += getBR(6) +
        getFrame(
            getHtmlMain(getBR(2) + "k(x,t) = ")
            + getHtmlMain(getBR() + getFraction(1, res_inner))
            + getDiv(
            getDiv(resultObj[key]["kramerY1x"] + getBR() + resultObj[key]["kramerY1"], 'cramer-left')
            + getDiv(resultObj[key]["kramerY2x"] + getBR() + resultObj[key]["kramerY2"], 'cramer-right'), "cramer-border math-inner")
            + getHtmlMain(getBR() + getNbsp() + " =  ")
        );


    var kxt = resultObj[key]['Δ(t)'];
    kxt.q = 0 - kxt.q;
    res += getBR(5) +
        getFrame(
            getHtmlMain(getNbsp() + " =  " + getNbsp())
            + getHtmlSqr(
            isCondition(kxt.v < 0, '-', '')
            + isCondition(Math.abs(kxt.v) == 1, '', Math.abs(kxt.v)) + "e",
            kxt.q + 't'
            )
            + getHtmlBrackets(plusKxt(key))
            + getHtmlMain(getNbsp() + " = " + getNbsp())
        )
        + getBR(2)
        + getFrame(
            getHtmlMain(getNbsp() + " = " + getNbsp())
            + shortestKxtFinalPlus(key));

    return res;
}

function shortestKxt(arr) {
    var res = [];

    for (var i = 0; i < 8; i++) {
        var ex = false;
        for (var j = 0; j < 8; j++) {
            var aj = arr[j];
            if (i != j) {
                if (arr[i].v == aj.v
                    && arr[i].qx == aj.qx
                    && arr[i].qt == aj.qt) {
                    ex = true;
                }
            }
        }
        if (!ex) {
            res.push(arr[i]);
        }
    }

    return res
}

function plusKxtInner(t, b, k) {
    var res = {};
    res.v = t.v * b.v;
    res.qx = t.q;
    res.qt = b.q;
    res.k = k;

    return res;
}

function minusSqrObj(rrl, rrr) {
    var res = [];
    for (var i in rrl) {
        for (var j in rrr) {
            if (rrl[i].q == rrr[j].q) {
                var rr = mathRound(rrl[i].r - rrr[j].r);
                if (rr != 0) {
                    var obj = {v: rr, q: rrl[j].q};
                    res.push(obj);
                }
            }
        }
    }
    return res;
}


function plusSqrObjects(arr, ids) {
    var res = [];
    var ex;
    var rr;
    for (var i in ids) {
        rr = null;
        ex = false;
        var obj = arr['c' + ids[i]];
        if (obj != null) {
            for (var j in res) {
                var r = res[j];
                if (r.q == obj.q) {
                    ex = true;
                    rr = r;
                    continue;
                }
            }
            if (ex) {
                res = removeObjByid(res, rr.id);
                rr.r = nvl(rr.r, 0) + obj.v;
                res.push(rr);
            } else {
                obj.r = obj.v;
                res.push(obj);
            }
        }
    }
    return res;
}

function equalSqrObjects(obj1, obj2) {
    if (obj1 != null && obj2 != null && obj1.v == obj2.v && obj1.q == obj2.q && obj1.id != obj2.id) {
        return true;
    }
    return false;
}

function removeSqrObjectInArr(ids, arr, id) {
    var res1 = {}
    for (var i in ids) {
        var id_ = ids[i];
        if (id_ != null) {
            var obj = arr['c' + id_];
            if (obj != null && obj.id != id) {
                res1['c' + id_] = obj;
            }
        }
    }

    return res1;
}


function removeIdsObj(ids, id) {
    var res2 = []
    for (var i in ids) {
        if (ids[i] != id) {
            res2.push(ids[i]);
        }
    }

    return res2;
}

function removeObjByid(list, id) {
    var res2 = []
    for (var i in list) {
        if (list[i].id != id) {
            res2.push(list[i]);
        }
    }

    return res2;
}


function plusKxt(key) {
    var y1xx = resultObj[key]["kramerY1xx"];
    var y2xx = resultObj[key]["kramerY2xx"];
    var y1xt = resultObj[key]["kramerY1xt"];
    var y2xt = resultObj[key]["kramerY2xt"];

    var arr = [];
    var obj;

    obj = plusKxtInner(y1xx.cL, y2xt.cL, 'l');
    arr.push(obj);
    obj = plusKxtInner(y1xx.cL, y2xt.cR, 'l');
    arr.push(obj);

    obj = plusKxtInner(y1xx.cR, y2xt.cL, 'l');
    arr.push(obj);
    obj = plusKxtInner(y1xx.cR, y2xt.cR, 'l');
    arr.push(obj);

    obj = plusKxtInner(y2xx.cL, y1xt.cL, 'r');
    arr.push(obj);
    obj = plusKxtInner(y2xx.cL, y1xt.cR, 'r');
    arr.push(obj);

    obj = plusKxtInner(y2xx.cR, y1xt.cL, 'r');
    arr.push(obj);
    obj = plusKxtInner(y2xx.cR, y1xt.cR, 'r');
    arr.push(obj);
    arr = shortestKxt(arr);

    var res = '';


    var arrL = [];
    var arrR = [];
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i];
        if (a.k == 'l') {
            arrL.push(a);
        } else if (a.k == 'r') {
            a.v = 0 - a.v;
            arrR.push(a);
        }
    }

    for (var i = 0; i < arrL.length; i++) {
        var a = arrL[i];
        if (res != '') {
            res += getHtmlMain(getNbsp() + ' + ' + getNbsp());
        }
        res += getHtmlMain(getMathMultiplication(mathRound4(a.v)))
            + getHtmlSqr("e", isCondition(a.qx == 1, '', a.qx) + 'x')
            + getHtmlSqr("e", isCondition(a.qt == 1, '', a.qt) + 't')

    }

    for (var i = 0; i < arrR.length; i++) {
        var a = arrR[i];
        res += getHtmlMain(getNbsp()) + getHtmlPlus(mathRound4(a.v)) + getHtmlMain(getNbsp());

        res += getHtmlSqr("e", isCondition(a.qx == 1, '', a.qx) + 'x')
            + getHtmlSqr("e", isCondition(a.qt == 1, '', a.qt) + 't')

    }

    resultObj[key]["Kxt"] = {};
    resultObj[key]["Kxt"]['arrL'] = arrL;
    resultObj[key]["Kxt"]['arrR'] = arrR;


    return res;
}

function shortestKxtFinalPlus(key) {

    var arrL = resultObj[key]["Kxt"]['arrL'];
    var arrR = resultObj[key]["Kxt"]['arrR'];
    var res = '';
    var rr = [];
    for (var i = 0; i < arrL.length; i++) {
        var a = arrL[i];
        for (var j = 0; j < arrR.length; j++) {
            var b = arrR[j];
            if (a.qx == b.qx && a.qt == b.qt) {
                a.v += b.v;
            }

        }
        rr.push(a);

    }

    console.log(rr, arrL, arrR)


    for (var i = 0; i < rr.length; i++) {
        var a = rr[i];
        if (i == 0) {
            res += getHtmlMain(getNbsp() + mathRound4(a.v) + getNbsp());
        } else {
            res += getHtmlMain(getNbsp()) + getHtmlPlus(mathRound4(a.v)) + getHtmlMain(getNbsp());
        }

        res += getHtmlSqr("e", isCondition(a.qx == 1, '', a.qx) + 'x')
            + getHtmlSqr("e", isCondition(a.qt == 1, '', a.qt) + 't')

    }

    return res;
}