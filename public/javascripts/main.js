var colorArray = [
    "blue",
    "red",
    "green",
    "purple",
    "yellow",
    "pink",
    "orange",
    "white",
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

$(document).ready(function() {
  $('.tile').on('click', function() {
      $(this).removeClass(colorString);
      $(this).addClass(colorArray[weightedRandom({ 0:0.083, 1:0.083, 2:0.083, 3:0.083, 4:0.083, 5:0.083, 6:0.083, 7:0.083, 8:0.083, 9:0.083, 10:0.083, 11:0.083, 12:0.004 })]);
  });
});