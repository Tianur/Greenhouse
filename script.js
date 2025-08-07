// Get current sensor readings when the page loads  
window.addEventListener('load', getReadings);


// Create Temperature Gauge
var gaugeTemp = new RadialGauge({
  renderTo: 'gauge-temperature',
  width: 300,
  height: 300,
  units: "Temperature C",
  minValue: 0,
  maxValue: 50,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0",
      "10",
      "20",
      "30",
      "40",
      "50"

  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      
          { from: 0, to: 25, color: "#FFEB3B" },     // Rendah
          { from: 25, to: 30, color: "#4CAF50" },    // Normal
          { from: 30, to: 50, color: "#FF5722" }    // Tinggi
      
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#007F80",
  colorNeedleEnd: "#007F80",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#007F80",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();
  
// Create Humidity Gauge
var gaugeHum = new RadialGauge({
  renderTo: 'gauge-humidity',
  width: 300,
  height: 300,
  units: "Humidity (%)",
  minValue: 0,
  maxValue: 100,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0",
      "20",
      "40",
      "60",
      "80",
      "100"

  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 80,
          "to": 100,
          "color": "#03C0C1"
      }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#007F80",
  colorNeedleEnd: "#007F80",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#007F80",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

// Gauge Tekanan Udara
var gaugePressure = new RadialGauge({
  renderTo: 'gauge-pressure',
  width: 300,
  height: 300,
  units: "Tekanan (hPa)",
  minValue: 950,
  maxValue: 1050,
  majorTicks: [
      "950",
      "970",
      "990",
      "1010",
      "1030",
      "1050"
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
    { from: 950, to: 980, color: "#FF5722" },     // Rendah
    { from: 980, to: 1010, color: "#FFEB3B" },    // Normal
    { from: 1010, to: 1050, color: "#4CAF50" }    // Tinggi
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  colorNeedle: "#003366",
  colorNeedleEnd: "#003366",
  needleCircleOuter: true,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

// Gauge Intensitas Cahaya
var gaugeLight = new RadialGauge({
  renderTo: 'gauge-light',
  width: 300,
  height: 300,
  units: "Cahaya (Lux)",
  minValue: 0,
  maxValue: 10000,
  majorTicks: [
      "0",
      "2000",
      "4000",
      "6000",
      "8000",
      "10000"
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
    { from: 0, to: 1000, color: "#37474F" },      // Gelap
    { from: 1000, to: 5000, color: "#FFEB3B" },   // Terang Sedang
    { from: 5000, to: 10000, color: "#FFC107" }   // Terang
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  colorNeedle: "#FFA500",
  colorNeedleEnd: "#FFA500",
  needleCircleOuter: true,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

// Gauge Kelembaban Tanah
var gaugeSoil = new RadialGauge({
  renderTo: 'gauge-soil-moisture',
  width: 300,
  height: 300,
  units: "Tanah (%)",
  minValue: 0,
  maxValue: 100,
  majorTicks: [
      "0",
      "20",
      "40",
      "60",
      "80",
      "100"
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
    { from: 0, to: 20, color: "#F44336" },    // Kering
    { from: 20, to: 50, color: "#FF9800" },   // Kurang
    { from: 50, to: 80, color: "#8BC34A" },   // Optimal
    { from: 80, to: 100, color: "#2196F3" }   // Basah
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  colorNeedle: "#795548",
  colorNeedleEnd: "#795548",
  needleCircleOuter: true,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();
gaugeTemp.value = 28.5;     // Suhu
gaugeHum.value = 67.2;      // Kelembaban udara
gaugePressure.value = 1008; // Tekanan udara
gaugeLight.value = 4200;    // Intensitas cahaya
gaugeSoil.value = 58.0;     // Kelembaban tanah


// Function to get current readings on the webpage when it loads for the first time
function getReadings(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
      var temp = myObj.temperature;
      var hum = myObj.humidity;
      gaugeTemp.value = temp;
      gaugeHum.value = hum;
    }
  }; 
  xhr.open("GET", "/readings", true);
  xhr.send();
}

if (!!window.EventSource) {
  var source = new EventSource('/events');
  
  source.addEventListener('open', function(e) {
    console.log("Events Connected");
  }, false);

  source.addEventListener('error', function(e) {
    if (e.target.readyState != EventSource.OPEN) {
      console.log("Events Disconnected");
    }
  }, false);
  
  source.addEventListener('message', function(e) {
    console.log("message", e.data);
  }, false);
  
  source.addEventListener('new_readings', function(e) {
    console.log("new_readings", e.data);
    var myObj = JSON.parse(e.data);
    console.log(myObj);
    gaugeTemp.value = myObj.temperature;
    gaugeHum.value = myObj.humidity;
  }, false);
}
