var colorArray = [
    "blue",
    "red",
    "green",
    "purple",
    "yellow",
    "pink",
    "orange",
    "brown",
    "lime",
    "gray",
    "black",
    "light-blue",
    "lose"
];

var colorString = colorArray.join(' ');

var weightedRandom =  function(spec) {
    var i, sum=0, r=Math.random();
    for (i in spec) {
        sum += spec[i];
        if (r <= sum) return i;
    }
};

var paint = function() {
    $(this).removeClass(colorString);
    var position = weightedRandom({ 0:0.08295, 1:0.08295, 2:0.08295, 3:0.08295, 4:0.08295, 5:0.08295, 6:0.08295, 7:0.08295, 8:0.08295, 9:0.08295, 10:0.08295, 11:0.08295, 12:0.0046 });
    $(this).addClass(colorArray[position]);
    if (position == 12) {
        $(this).off('click', paint);
    }
};

$(document).ready(function() {
  $('.tile').on('click', paint);
});