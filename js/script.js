function Counter() {
    var count = 0,
        c = {};

    function increment() { count++; }

    c.countClicks = function(element) {
        element.onclick = increment;
    };

    c.clicks = function() { return count; }

    return c;
}

var c1 = Counter();

c1.countClicks(document.getElementById('click1'));

document.getElementById('tell1').onclick = function() {
    alert(c1.clicks());
};

var c2 = Counter();

c2.countClicks(document.getElementById('click2'));

document.getElementById('tell2').onclick = function() {
    alert(c2.clicks());
};