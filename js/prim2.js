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
    //----------------------------------------------------------
      ids = [11, 12, 21, 22, 31, 32, 41, 42];


      arr = {};
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

    console.log(arr, resultObj)

    //---------------------------------------------
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
            + getHtmlBrackets(123456789)
        );

    return res;
}

function minusSqrObj(rrl, rrr) {
    var res = [];
    for (var i in rrl) {
        for (var j in rrr) {
            if (rrl[i].q == rrr[j].q) {
                var rr = mathRound(rrl[i].r - rrr[j].r);
                if (rr != 0) {
                    var obj = {v: rr, q: rrl[j].q}
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