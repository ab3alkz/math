/**
 * Created by Anar on 25.11.2017.
 */
function plus() {
    var num1, num2, result, t=0, x1=0, x2=0, D, y1 = 0, y2 = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0, s = 0, s1 = 0, s2 = 0,
        yt1 = 0, yt2 = 0, T = 0, y11 = 0, y22 = 0, K = 0, Y = 0, f, h = 0;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    f = document.getElementById('n3').value;

    D = num1 * num1 - 4 * num2;
    if (D > 0) {
        x1 = (-num1 - Math.sqrt(D)) / 2;
        x2 = (-num1 + Math.sqrt(D)) / 2;
    }
    else if (D == 0) {
        x = -num1 / 2;
    }
    else {
    }

    s = x2 - x1;
    s1 = x2;
    s2 = (-x1);
    c1 = s1 / s;
    c2 = s2 / s;
    c3 = (-1) / s;
    c4 = 1 / s;

    y1 = c1 * Math.exp(x1 * t) + c2 * Math.exp(x2 * t);
    y2 = c3 * Math.exp(x1 * t) + c4 * Math.exp(x2 * t);

    yt1 = x1 * c1 * Math.exp(x1 * t) + x2 * c2 * Math.exp(x2 * t);
    yt2 = x1 * c3 * Math.exp(x1 * t) + x2 * c4 * Math.exp(x2 * t);

    T = yt1 * y2 - yt2 * y1;

    y11 = c1 * Math.exp(x1 * h) + c2 * Math.exp(x2 * h);
    y22 = c3 * Math.exp(x1 * h) + c4 * Math.exp(x2 * h);

    K = (1 / T) * (y11 * y2 - y22 * y1);

    Y = Math.Integrate[K * f, (0, h)];

    document.getElementById('out').innerHTML = Y;
}