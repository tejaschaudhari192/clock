var secondKata = document.getElementById("second-kata");
var minuteKata = document.getElementById("minute-kata");
var hourKata = document.getElementById("hour-kata");

var time = new Date();
var seconds = time.getSeconds();
secondKata.style.rotate = `${6 * seconds}deg`;


setInterval(function () {
    var time = new Date();
    var minutes = time.getMinutes();
    var hours = time.getHours();

    secondKata.style.rotate = `${6 * seconds}deg`;
    // minuteKata.style.rotate = `${6 * minutes}deg`;
    minuteKata.style.rotate = `${6 * minutes}deg`;

    console.log(minutes);
    hourKata.style.rotate = `${(hours + 30) + (minutes / 2)}deg`;
    seconds += 1;
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

