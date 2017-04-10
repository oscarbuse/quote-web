var express = require('express');

var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;
var html1 = "<br><br><br><center><h3>";
var html2 = "</h3></center>";

var oneliners = Array(
html1 + "Why is \"abbreviated\" such a long word?" + html2,
html1 + "Why is a boxing ring square?" + html2,
html1 + "Why is it that when you're driving and looking for an address, you turn down the volume on the radio?" + html2,
html1 + "Why is the man who invests all your money called a broker?" + html2,
html1 + "Save the whales. Collect the whole set!" + html2,
html1 + "Why is the time of day with the slowest traffic called rush hour?" + html2,
html1 + "Why is the word dictionary in the dictionary?" + html2,
html1 + "The light at the end of the tunnel is the headlight of an approaching train." + html2,
html1 + "Don't be so humble, you're not that great." + html2
);

// App
var app = express();
app.get('/', function (req, res) {
  res.send(oneliners[Math.floor(Math.random()*oneliners.length)]);
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
