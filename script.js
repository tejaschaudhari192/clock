var secondKata = document.getElementById("second-kata");
var minuteKata = document.getElementById("minute-kata");
var hourKata = document.getElementById("hour-kata");

var time = new Date();
var seconds = time.getSeconds();
var minutes = time.getMinutes();
var hours = time.getHours();

secondKata.style.rotate = `${6 * seconds}deg`;
hourKata.style.rotate = `${30 * hours + 0.5 * minutes}deg`;

var s = seconds;
var m = 6 * minutes + 0.1 * seconds
var h = 30 * hours + 0.5 * minutes;
setInterval(function () {

    secondKata.style.rotate = `${6 * s}deg`;
    minuteKata.style.rotate = `${m}deg`;
    hourKata.style.rotate = `${h}deg`;
    console.log(h);
    s += 1;
    m += 0.1;
    h += 0.00833333333333333333333333333333;
}, 1000);

// aakde

var angle = 30;

for (let i = 1; i <= 12; i++) {
    var css = `.char-${i} {

        rotate: ${angle - 2}deg;
        &  p {
            rotate: -${angle}deg;
        }

    };`

    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var div = document.createElement("div");
    div.className = `nums char-${i}`;

    var p = document.createElement("p");
    p.innerHTML = `${i}`;
    div.appendChild(p);

    document.querySelector('#num-container').appendChild(div);
    document.querySelector('#num-container').appendChild(div);

    angle += 30;

}

// marks


for (let i = 0; i <= 360; i += 6) {

    if (i % 30 == 0) {
        var fontMajor = 'font-size: 30px; top: -13px;'
        var angleMajor = `rotate: ${i - 4}deg;`
    }
    else {
        var fontMajor = ''
        var angleMajor = ''
    }

    var css = `.mark-${i} {

        rotate: ${i - 2}deg;
        ${angleMajor}

        &  p {
            top: -5px;
            ${fontMajor}
            rotate: -${90 - 4}deg;
        }

    };`

    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var div = document.createElement("div");
    div.className = `marks mark-${i}`;

    var p = document.createElement("p");
    p.innerHTML = `-`;
    div.appendChild(p);

    document.querySelector('#num-container').appendChild(div);
    document.querySelector('#num-container').appendChild(div);
}

