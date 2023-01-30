let canvas = 700;
let origin = canvas/2;
let faceCanvas;
let hatBaseCanvas;
let hatCoverCanvas;
let hatDecLineCanvas;
let hatDecBandCanvas;
let hatBodyCanvas;
let hatDecBallLeftCanvas;
let hatDecBallMiddleCanvas;
let hatDecBallRightCanvas;
let earOutlineCanvas;
let earInlineCanvas;
let flag1Canvas;
let flag2Canvas;
let flag3Canvas;
let cloakCanvas;
let cloakTie1Canvas;
let cloakTie2Canvas;
let coatCanvas;
let sleevesCanvas;
let cuffsCanvas;
let skirtHemCanvas;
let clotheCanvas;
let shoesCanvas;
let eyeLeftCanvas;
let eyeRightCanvas;
let eyebrowsLeft1Canvas;
let eyebrowsLeft2Canvas;
let eyebrowsLeft3Canvas;
let eyebrowsRight1Canvas;
let eyebrowsRight2Canvas;
let eyebrowsRight3Canvas;
let eyebrowsCenterCanvas;
let cheekLeftCanvas;
let cheekRightCanvas;
let noseCanvas;
let mouthCanvas;
let colorGroup = new Map();

function setup() {
  createCanvas(canvas, canvas);
  faceCanvas = createGraphics(158, 132);
  hatBaseCanvas = createGraphics(288, 76);
  hatCoverCanvas = createGraphics(242, 142);
  hatDecLineCanvas = createGraphics(212, 100);
  hatDecBandCanvas = createGraphics(224,122);
  hatBodyCanvas = createGraphics(232, 148);
  hatDecBallLeftCanvas = createGraphics(32,32);
  hatDecBallMiddleCanvas = createGraphics(46,46);
  hatDecBallRightCanvas = createGraphics(32,32);
  earOutlineCanvas = createGraphics(240,150);
  earInlineCanvas = createGraphics(185, 73);
  flag1Canvas = createGraphics(327, 123);
  flag2Canvas = createGraphics(298, 86);
  flag3Canvas = createGraphics(280, 67);
  cloakCanvas = createGraphics(220, 62);
  cloakTie1Canvas = createGraphics(38, 34);
  cloakTie2Canvas = createGraphics(64, 52);
  coatCanvas = createGraphics(248, 72);
  sleevesCanvas = createGraphics(226, 112);
  cuffsCanvas = createGraphics(172, 112);
  skirtHemCanvas = createGraphics(230, 170);
  clotheCanvas = createGraphics(228, 111);
  shoesCanvas = createGraphics(130, 32);
  eyeLeftCanvas = createGraphics(32, 33);
  eyeRightCanvas = createGraphics(32, 33);
  eyebrowsLeft1Canvas = createGraphics(3, 17);
  eyebrowsLeft2Canvas = createGraphics(4, 32);
  eyebrowsLeft3Canvas = createGraphics(4, 15);
  eyebrowsRight1Canvas = createGraphics(4, 16);
  eyebrowsRight2Canvas = createGraphics(6, 29);
  eyebrowsRight3Canvas = createGraphics(5, 21);
  eyebrowsCenterCanvas = createGraphics(6, 14);
  cheekLeftCanvas = createGraphics(15, 9);
  cheekRightCanvas = createGraphics(15, 10);
  noseCanvas = createGraphics(17, 12);
  mouthCanvas = createGraphics(30, 8);
  // fixed
  colorGroup.set("fur", color(255, 255, 255));
  colorGroup.set("skin", color(246, 195, 203));
  colorGroup.set("eyebrows", color(0, 0, 0));
  colorGroup.set("mouth", color(150, 150, 150));
  colorGroup.set("eye", color(0, 0, 0));
  // random
  colorGroup.set("main", color(191, 41, 55));
  colorGroup.set("dec", color(246, 194, 68));
  colorGroup.set("hat", color(59, 103, 157));
  colorGroup.set("ball", color(235, 50, 35));
  colorGroup.set("vice", color(50, 119, 198));
}

function draw() {
  background(220);
  // drawCoordinate();
  drawHatBody();
  drawFlag1();
  drawFlag2();
  drawFlag3();
  drawEarOutline();
  drawEarInline();
  drawHatDecBand();
  drawHatBase();
  drawHatDecLine();
  drawHatCover();
  drawHatDecBallLeft();
  drawHatDecBallMiddle();
  drawHatDecBallRight();
  drawShoes();
  drawSkirtHem();
  drawClothe();
  drawCuffs();
  drawSleeves();
  drawCoat();
  drawCloak();
  drawCloakTie2();
  drawCloakTie1();
  drawFace();
  drawEyeLeft();
  drawEyeRight();
  drawEyebrowsLeft1();
  drawEyebrowsLeft2();
  drawEyebrowsLeft3();
  drawEyebrowsRight1();
  drawEyebrowsRight2();
  drawEyebrowsRight3();
  drawEyebrowsCenter();
  drawCheekLeft();
  drawCheekRight();
  drawNose();
  drawMouth();
  
  noLoop();
  seed = random(1000);
  let name = "turye-" + seed + ".png";
  // save(name);
}

// components

function drawCoordinate() {
  push();
  fill(0,1);
  circle(origin, origin, 5);
  line(origin, 0, origin, canvas);
  line(0, origin, canvas, origin);
  pop();
}

function drawFace() {
  let distance = 40;
  push();
  ctx = faceCanvas.canvas.getContext("2d");
  faceSilhouette();
  ctx.clip();
  // fill whatever texture you want
  faceCanvas.background(colorGroup.get("fur"));
  
  pop();
  image(faceCanvas, origin-faceCanvas.width/2, origin+distance-faceCanvas.height);
  
  function faceSilhouette() {
// faceCanvas.fill("rgba(#FEEEE5, 0)")
faceCanvas.stroke('rgba(0,0,0,0)');
faceCanvas.strokeCap(PROJECT);
faceCanvas.strokeJoin(MITER);
faceCanvas.stroke("#000000");
faceCanvas.strokeCap(ROUND);
faceCanvas.beginShape();
faceCanvas.vertex(157,82.0559);
faceCanvas.bezierVertex(157,-26.5191,0.999831,-25.5184,1,82.0559);
faceCanvas.bezierVertex(1,106.573,11,112.577,20.5,118.081);
faceCanvas.bezierVertex(48.9998,134.592,112,136.005,138,118.081);
faceCanvas.bezierVertex(147,111.877,157,105.572,157,82.0559);
faceCanvas.endShape();
  }
}

function drawHatBase() {
  let distance = -28;
  push();
  ctx = hatBaseCanvas.canvas.getContext("2d");
  hatBaseSilhouette();
  ctx.clip();
  hatBaseCanvas.background(colorGroup.get("hat"));
  
  pop();
  image(hatBaseCanvas, origin-hatBaseCanvas.width/2, origin+distance);
  
  function hatBaseSilhouette() {
hatBaseCanvas.fill("rgba(0, 0, 0, 0)");
hatBaseCanvas.stroke('rgba(0,0,0,0)');
hatBaseCanvas.strokeCap(PROJECT);
hatBaseCanvas.strokeJoin(MITER);
hatBaseCanvas.stroke("#000000");
hatBaseCanvas.strokeCap(ROUND);
hatBaseCanvas.beginShape();
hatBaseCanvas.vertex(68.5001,67.0001);
hatBaseCanvas.bezierVertex(68.5001,67.0001,51.0001,74,40.438,74);
hatBaseCanvas.bezierVertex(-11.3954,74,-11.7716,1.00047,38.7505,1);
hatBaseCanvas.bezierVertex(51,0.99989,56.6865,9.41439,68.5001,9.50012);
hatBaseCanvas.bezierVertex(109.942,9.80085,171.228,9.35504,215.5,9.14154);
hatBaseCanvas.bezierVertex(228.186,9.08036,238,-5.96046e-8,248.5,1);
hatBaseCanvas.bezierVertex(298,1,299,74,243.286,74);
hatBaseCanvas.bezierVertex(235.816,74,226.269,67.0001,215.5,67.0001);
hatBaseCanvas.vertex(68.5001,67.0001);
hatBaseCanvas.bezierVertex(68.5001,67.0001,158.886,67.0001,215.5,67.0001);
hatBaseCanvas.vertex(68.5001,67.0001);
hatBaseCanvas.vertex(215.5,67.0001);
hatBaseCanvas.endShape();
  }
}

function drawHatCover() {
  let distance = 29;
  push();
  ctx = hatCoverCanvas.canvas.getContext("2d");
  hatCoverSilhouette();
  ctx.clip();
  hatCoverCanvas.background(colorGroup.get("dec"));
  
  pop();
  image(hatCoverCanvas, origin-hatCoverCanvas.width/2, origin-hatCoverCanvas.height+distance);
  
  function hatCoverSilhouette() {
hatCoverCanvas.fill("rgba(0, 0, 0, 0)");
hatCoverCanvas.stroke('rgba(0,0,0,0)');
hatCoverCanvas.strokeCap(PROJECT);
hatCoverCanvas.strokeJoin(MITER);
hatCoverCanvas.stroke("#000000");
hatCoverCanvas.strokeCap(ROUND);
hatCoverCanvas.beginShape();
hatCoverCanvas.vertex(18.9998,141.5);
hatCoverCanvas.bezierVertex(-1.40017,141.5,-0.833502,121.5,1.99983,111.5);
hatCoverCanvas.bezierVertex(1.99983,111.5,7.5,112,10.5,112.5);
hatCoverCanvas.bezierVertex(4.5,127,21.5,137.5,30.5,126);
hatCoverCanvas.bezierVertex(42.9,107.2,25.8333,96.6667,15,93);
hatCoverCanvas.vertex(17.5,87.5);
hatCoverCanvas.vertex(29,93);
hatCoverCanvas.bezierVertex(31,77,39,54.5,47,43.5);
hatCoverCanvas.vertex(40,37);
hatCoverCanvas.vertex(44,33);
hatCoverCanvas.vertex(50.5,39);
hatCoverCanvas.bezierVertex(73.3001,13.8,104.333,9.5,117,10.5);
hatCoverCanvas.vertex(117,1);
hatCoverCanvas.vertex(123.5,1);
hatCoverCanvas.vertex(123.5,10.5);
hatCoverCanvas.bezierVertex(161.1,10.9,183.5,29.6667,190,39);
hatCoverCanvas.vertex(197,32);
hatCoverCanvas.vertex(200.5,35.5);
hatCoverCanvas.vertex(192.5,43);
hatCoverCanvas.bezierVertex(205.3,56.2,209.167,84.1667,209.5,96.5);
hatCoverCanvas.vertex(227,87.5);
hatCoverCanvas.vertex(230,93.5);
hatCoverCanvas.bezierVertex(217.5,96.5,197,117,212,129);
hatCoverCanvas.bezierVertex(228,140,235,124,231.5,112.5);
hatCoverCanvas.vertex(239,110.5);
hatCoverCanvas.bezierVertex(241,120,243,142,220,142);
hatCoverCanvas.bezierVertex(201.6,142,191.833,122.5,188,112.5);
hatCoverCanvas.vertex(50.5,112.5);
hatCoverCanvas.bezierVertex(49.4999,122.5,39.3998,141.5,18.9998,141.5);
hatCoverCanvas.endShape();

  }
}

function drawHatDecLine() {
  let distance = -12;
  push();
  ctx = hatDecLineCanvas.canvas.getContext("2d");
  hatDecLineSilhouette();
  ctx.clip();
  hatDecLineCanvas.background(colorGroup.get("hat"));
  
  pop();
  image(hatDecLineCanvas, origin-hatDecLineCanvas.width/2, origin-hatDecLineCanvas.height+distance);
  
  function hatDecLineSilhouette() {
    hatDecLineCanvas.fill("rgba(0, 0, 0, 0)");
    hatDecLineCanvas.stroke('rgba(0,0,0,0)');
    hatDecLineCanvas.strokeCap(PROJECT);
    hatDecLineCanvas.strokeJoin(MITER);
    hatDecLineCanvas.stroke("#000000");
    hatDecLineCanvas.strokeCap(ROUND);
    hatDecLineCanvas.beginShape();
    hatDecLineCanvas.vertex(1.5,80.5);
    hatDecLineCanvas.vertex(3,89);
    hatDecLineCanvas.vertex(15.5,93.5);
    hatDecLineCanvas.vertex(189.5,99);
    hatDecLineCanvas.vertex(211,87.5);
    hatDecLineCanvas.vertex(208,80);
    hatDecLineCanvas.bezierVertex(208,80,204,83,199,83.0003);
    hatDecLineCanvas.bezierVertex(191,-27.9995,20,-25.5001,9.5,83.5001);
    hatDecLineCanvas.bezierVertex(6.35861,82.3754,1.5,80.5,1.5,80.5);
    hatDecLineCanvas.endShape();
  }
}

function drawHatDecBand() {
  let distance = -18;
  push();
  ctx = hatDecBandCanvas.canvas.getContext("2d");
  hatDecBandSilhouette();
  ctx.clip();
  hatDecBandCanvas.background(colorGroup.get("dec"));
  
  pop();
  image(hatDecBandCanvas, origin-hatDecBandCanvas.width/2, origin-hatDecBandCanvas.height+distance);
  
  function hatDecBandSilhouette() {
hatDecBandCanvas.fill("rgba(0, 0, 0, 0)");
hatDecBandCanvas.stroke('rgba(0,0,0,0)');
hatDecBandCanvas.strokeCap(PROJECT);
hatDecBandCanvas.strokeJoin(MITER);
hatDecBandCanvas.stroke("#000000");
hatDecBandCanvas.strokeCap(ROUND);
hatDecBandCanvas.beginShape();
hatDecBandCanvas.vertex(111,0.999939);
hatDecBandCanvas.bezierVertex(51.1891,1.50203,1,51.2173,1,120.506);
hatDecBandCanvas.vertex(221,120.506);
hatDecBandCanvas.bezierVertex(221,49.2089,170.811,0.497845,111,0.999939);
hatDecBandCanvas.endShape();

  }
}

function drawHatBody() {
  let distance = -8;
  push();
  ctx = hatBodyCanvas.canvas.getContext("2d");
  hatBodySilhouette();
  ctx.clip();
  hatBodyCanvas.background(colorGroup.get("hat"));
  pop();
  image(hatBodyCanvas, origin-hatBodyCanvas.width/2, origin+distance-hatBodyCanvas.height);

  function hatBodySilhouette(){
    hatBodyCanvas.fill("rgba(0, 0, 0, 0)");
    hatBodyCanvas.stroke('rgba(0,0,0,0)');
    hatBodyCanvas.strokeCap(PROJECT);
    hatBodyCanvas.strokeJoin(MITER);
    hatBodyCanvas.stroke("#000000");
    hatBodyCanvas.strokeJoin(ROUND);
    hatBodyCanvas.beginShape();
    hatBodyCanvas.vertex(115.5,1);
    hatBodyCanvas.bezierVertex(5,1,0.999797,129.073,1,151);
    hatBodyCanvas.vertex(230,151);
    hatBodyCanvas.bezierVertex(230,112.628,211.532,1,115.5,1);
    hatBodyCanvas.endShape();
  }
}

function drawHatDecBallLeft() {
  let distanceWidth = -72;
  let distanceHeight = -84;
  push();
  ctx = hatDecBallLeftCanvas.canvas.getContext("2d");
  hatDecBallLeft();
  ctx.clip();
  hatDecBallLeftCanvas.background(colorGroup.get("ball"));
  pop();
  image(hatDecBallLeftCanvas, origin+distanceWidth-hatDecBallLeftCanvas.width, origin+distanceHeight-hatDecBallLeftCanvas.height/2);
  
  function hatDecBallLeft() {
hatDecBallLeftCanvas.fill("rgba(0, 0, 0, 0)");
hatDecBallLeftCanvas.stroke('rgba(0,0,0,0)');
hatDecBallLeftCanvas.strokeCap(PROJECT);
hatDecBallLeftCanvas.strokeJoin(MITER);
hatDecBallLeftCanvas.stroke(colorGroup.get("ball"));
hatDecBallLeftCanvas.circle(hatDecBallLeftCanvas.width/2,hatDecBallLeftCanvas.height/2,31);

  }
}

function drawHatDecBallMiddle() {
  let distance = -107;
  push();
  ctx = hatDecBallMiddleCanvas.canvas.getContext("2d");
  hatDecBallMiddle();
  ctx.clip();
  hatDecBallMiddleCanvas.background(colorGroup.get("ball"));
  pop();
  image(hatDecBallMiddleCanvas, origin-hatDecBallMiddleCanvas.width/2, origin+distance-hatDecBallMiddleCanvas.height);
  
  function hatDecBallMiddle() {
hatDecBallMiddleCanvas.fill("rgba(0, 0, 0, 0)");
hatDecBallMiddleCanvas.stroke('rgba(0,0,0,0)');
hatDecBallMiddleCanvas.strokeCap(PROJECT);
hatDecBallMiddleCanvas.strokeJoin(MITER);
hatDecBallMiddleCanvas.stroke(colorGroup.get("ball"));
hatDecBallMiddleCanvas.circle(hatDecBallMiddleCanvas.width/2,hatDecBallMiddleCanvas.height/2,45);

  }
}

function drawHatDecBallRight() {
  let distanceWidth = 70;
  let distanceHeight = -70;
  push();
  ctx = hatDecBallRightCanvas.canvas.getContext("2d");
  hatDecBallRight();
  ctx.clip();
  hatDecBallRightCanvas.background(colorGroup.get("ball"));
  pop();
  image(hatDecBallRightCanvas, origin+distanceWidth, origin+distanceHeight-hatDecBallRightCanvas.height);
  
  function hatDecBallRight() {
hatDecBallRightCanvas.fill("rgba(0, 0, 0, 0)");
hatDecBallRightCanvas.stroke('rgba(0,0,0,0)');
hatDecBallRightCanvas.strokeCap(PROJECT);
hatDecBallRightCanvas.strokeJoin(MITER);
hatDecBallRightCanvas.stroke(colorGroup.get("ball"));
hatDecBallRightCanvas.circle(hatDecBallRightCanvas.width/2,hatDecBallRightCanvas.height/2,31);

  }
}

function drawEarOutline() {
  let distance = -97;
  push();
  ctx = earOutlineCanvas.canvas.getContext("2d");
  earOutlineSilhouette();
  ctx.clip();
  earOutlineCanvas.background(colorGroup.get("fur"));
  pop();
  image(earOutlineCanvas, origin-earOutlineCanvas.width/2, origin-earOutlineCanvas.height+distance);
  
  function earOutlineSilhouette() {
    earOutlineCanvas.fill("rgba(0, 0, 0, 0)");
    earOutlineCanvas.stroke('rgba(0,0,0,0)');
    earOutlineCanvas.strokeCap(PROJECT);
    earOutlineCanvas.strokeJoin(MITER);
    earOutlineCanvas.stroke("#000000");
    earOutlineCanvas.beginShape();
    earOutlineCanvas.vertex(1.4999,22.5);
    earOutlineCanvas.bezierVertex(5.54023,51.6334,23,136,54.5,138.5);
    earOutlineCanvas.vertex(188,138.5);
    earOutlineCanvas.bezierVertex(223.5,129,238,21.4065,238,15.8811);
    earOutlineCanvas.bezierVertex(238,10.3557,238,-9.23395,216.79,7.84426);
    earOutlineCanvas.bezierVertex(173.561,48.4302,147.5,84,151.5,124.5);
    earOutlineCanvas.bezierVertex(124.027,116.865,97.9669,121.319,84.5,124.5);
    earOutlineCanvas.bezierVertex(96.5,87.5,35.8409,20.993,28.7706,13.4586);
    earOutlineCanvas.bezierVertex(21.7001,5.92411,-3.47294,-13.3575,1.4999,22.5);
    earOutlineCanvas.endShape();
  }
  
}

function drawEarInline() {
  let distance = -118;
  push();
  ctx = earInlineCanvas.canvas.getContext("2d");
  earInlineSilhouette();
  ctx.clip();
  earInlineCanvas.background(colorGroup.get("skin"));
  pop();
  image(earInlineCanvas, origin-earInlineCanvas.width/2, origin+distance-earInlineCanvas.height);
  
  function earInlineSilhouette() {
earInlineCanvas.fill("rgba(0, 0, 0, 0)");
earInlineCanvas.stroke('rgba(0,0,0,0)');
earInlineCanvas.strokeCap(PROJECT);
earInlineCanvas.strokeJoin(MITER);
earInlineCanvas.stroke(colorGroup.get("skin"));
earInlineCanvas.beginShape();
earInlineCanvas.vertex(146,72.1117);
earInlineCanvas.bezierVertex(163,72.1117,179,35.2246,182,21.6123);
earInlineCanvas.bezierVertex(185,8,184.458,-10.1954,163,9.61226);
earInlineCanvas.bezierVertex(143.5,27.6123,136,57.6119,140.5,67.6119);
earInlineCanvas.vertex(47.5,67.6119);
earInlineCanvas.bezierVertex(51.5,43.1119,21.5,8.61199,14,5.11199);
earInlineCanvas.bezierVertex(6.5,1.61199,1,1.61193,1,13.1119);
earInlineCanvas.bezierVertex(1,31.112,17,73.1119,37,73.1119);
earInlineCanvas.bezierVertex(47.5,73.1119,129,72.1117,146,72.1117);
earInlineCanvas.endShape();

  }
}

function drawFlag1() {
  let distance = -20;
  push();
  ctx = flag1Canvas.canvas.getContext("2d");
  flag1Silhouette();
  ctx.clip();
  flag1Canvas.background(colorGroup.get("main"));
  pop();
  image(flag1Canvas, origin-flag1Canvas.width/2, origin+distance-flag1Canvas.height);
  
  function flag1Silhouette() {
flag1Canvas.fill("rgba(0, 0, 0, 0)");
flag1Canvas.stroke('rgba(0,0,0,0)');
flag1Canvas.strokeCap(PROJECT);
flag1Canvas.strokeJoin(MITER);
flag1Canvas.stroke("#000000");
flag1Canvas.strokeJoin(ROUND);
flag1Canvas.beginShape();
flag1Canvas.vertex(1.43083,113.648);
flag1Canvas.vertex(43.5003,3.71979);
flag1Canvas.bezierVertex(44.4532,1.22993,47.9376,1.12701,49.0358,3.55628);
flag1Canvas.vertex(69.812,49.5151);
flag1Canvas.bezierVertex(70.2975,50.5892,71.3669,51.2794,72.5456,51.2794);
flag1Canvas.vertex(249.058,51.2794);
flag1Canvas.bezierVertex(250.18,51.2794,251.209,50.6532,251.724,49.6564);
flag1Canvas.vertex(275.854,2.94938);
flag1Canvas.bezierVertex(277.044,0.647383,280.395,0.83422,281.321,3.25414);
flag1Canvas.vertex(323.511,113.497);
flag1Canvas.bezierVertex(324.452,115.956,321.997,118.347,319.565,117.343);
flag1Canvas.vertex(267.46,95.8263);
flag1Canvas.bezierVertex(267.096,95.6764,266.707,95.5992,266.315,95.5992);
flag1Canvas.vertex(61.6632,95.5992);
flag1Canvas.bezierVertex(61.2877,95.5992,60.9155,95.6697,60.566,95.807);
flag1Canvas.vertex(5.32986,117.513);
flag1Canvas.bezierVertex(2.90307,118.466,0.498882,116.083,1.43083,113.648);
flag1Canvas.endShape();
  }
}

function drawFlag2() {
  let distance = -36;
  push();
  ctx = flag2Canvas.canvas.getContext("2d");
  flag2Silhouette();
  ctx.clip();
  flag2Canvas.background(colorGroup.get("dec"));
  pop();
  image(flag2Canvas, origin-flag2Canvas.width/2, origin+distance-flag2Canvas.height);
  
  function flag2Silhouette() {
flag2Canvas.fill("rgba(0, 0, 0, 0)");
flag2Canvas.stroke('rgba(0,0,0,0)');
flag2Canvas.strokeCap(PROJECT);
flag2Canvas.strokeJoin(MITER);
flag2Canvas.stroke("#000000");
flag2Canvas.strokeJoin(ROUND);
flag2Canvas.beginShape();
flag2Canvas.vertex(1.51262,75.1247);
flag2Canvas.vertex(29.973,2.91169);
flag2Canvas.bezierVertex(30.9342,0.472933,34.341,0.353159,35.471,2.71839);
flag2Canvas.vertex(53.1846,39.7933);
flag2Canvas.bezierVertex(53.6828,40.8361,54.7358,41.5,55.8915,41.5);
flag2Canvas.vertex(236.734,41.5);
flag2Canvas.bezierVertex(237.852,41.5,238.878,40.878,239.394,39.8862);
flag2Canvas.vertex(258.94,2.37339);
flag2Canvas.bezierVertex(260.132,0.085938,263.463,0.26939,264.397,2.67387);
flag2Canvas.vertex(292.416,74.8444);
flag2Canvas.bezierVertex(293.378,77.3222,290.881,79.7346,288.438,78.6876);
flag2Canvas.vertex(243.066,59.2426);
flag2Canvas.bezierVertex(242.693,59.0825,242.291,59,241.884,59);
flag2Canvas.vertex(57.5615,59);
flag2Canvas.bezierVertex(57.1904,59,56.8225,59.0689,56.4765,59.2031);
flag2Canvas.vertex(5.38868,79.0216);
flag2Canvas.bezierVertex(2.95036,79.9675,0.553646,77.5579,1.51262,75.1247);
flag2Canvas.endShape();
  }
}

function drawFlag3() {
  let distance = -45;
  push();
  ctx = flag3Canvas.canvas.getContext("2d");
  flag3Silhouette();
  ctx.clip();
  flag3Canvas.background(colorGroup.get("main"));
  pop();
  image(flag3Canvas, origin-flag3Canvas.width/2, origin+distance-flag3Canvas.height);
  
  function flag3Silhouette() {
flag3Canvas.fill("rgba(0, 0, 0, 0)");
flag3Canvas.stroke('rgba(0,0,0,0)');
flag3Canvas.strokeCap(PROJECT);
flag3Canvas.strokeJoin(MITER);
flag3Canvas.stroke("#000000");
flag3Canvas.strokeJoin(ROUND);
flag3Canvas.beginShape();
flag3Canvas.vertex(0.962592,56.1262);
flag3Canvas.vertex(21.4521,3.09446);
flag3Canvas.bezierVertex(22.4064,0.624564,25.8592,0.511868,26.9725,2.91428);
flag3Canvas.vertex(42.1943,35.7614);
flag3Canvas.bezierVertex(42.6856,36.8216,43.7477,37.5,44.9162,37.5);
flag3Canvas.vertex(229.196,37.5);
flag3Canvas.bezierVertex(230.306,37.5,231.325,36.8871,231.846,35.9067);
flag3Canvas.vertex(249.42,2.80272);
flag3Canvas.bezierVertex(250.625,0.532093,253.941,0.730206,254.868,3.12819);
flag3Canvas.vertex(275.408,56.2906);
flag3Canvas.bezierVertex(276.368,58.7771,273.851,61.1879,271.409,60.121);
flag3Canvas.vertex(235.082,44.2541);
flag3Canvas.bezierVertex(234.698,44.0865,234.284,44.0011,233.865,44.0033);
flag3Canvas.vertex(43.5606,44.9971);
flag3Canvas.bezierVertex(43.1901,44.999,42.8231,45.0696,42.4783,45.2052);
flag3Canvas.vertex(4.85891,59.9993);
flag3Canvas.bezierVertex(2.42779,60.9554,0.0211011,58.563,0.962592,56.1262);
flag3Canvas.endShape();
  }
}

function drawCloak() {
  let distance = 6;
  push();
  ctx = cloakCanvas.canvas.getContext("2d");
  cloakSilhouette();
  ctx.clip();
  cloakCanvas.background(colorGroup.get("vice"));
  pop();
  image(cloakCanvas, origin-cloakCanvas.width/2, origin+10);
  
  function cloakSilhouette() {
cloakCanvas.fill("rgba(0, 0, 0, 0)");
cloakCanvas.stroke('rgba(0,0,0,0)');
cloakCanvas.strokeCap(PROJECT);
cloakCanvas.strokeJoin(MITER);
cloakCanvas.stroke("#000000");
cloakCanvas.beginShape();
cloakCanvas.vertex(1.07866,54.9999);
cloakCanvas.bezierVertex(-0.982023,43.6659,38.0783,4.99993,44.0783,1.99993);
cloakCanvas.bezierVertex(85.9117,0.999931,170.378,-0.40001,173.578,1.99999);
cloakCanvas.bezierVertex(177.578,4.99999,220.078,41.5,219.078,55);
cloakCanvas.bezierVertex(218.583,61.6857,119.5,64,110,54.9999);
cloakCanvas.bezierVertex(100.5,63.9999,2.08816,60.5523,1.07866,54.9999);
cloakCanvas.endShape();
  }
}

function drawCloakTie1 () {
  let distance = 34;
  push();
  ctx = cloakTie1Canvas.canvas.getContext("2d");
  cloakTie1Silhouette();
  ctx.clip();
  cloakTie1Canvas.background(colorGroup.get("vice"));
  pop();
  image(cloakTie1Canvas, origin-cloakTie1Canvas.width/2, origin+distance);
  
  function cloakTie1Silhouette() {
cloakTie1Canvas.fill("rgba(0, 0, 0, 0)");
cloakTie1Canvas.stroke('rgba(0,0,0,0)');
cloakTie1Canvas.strokeCap(PROJECT);
cloakTie1Canvas.strokeJoin(MITER);
cloakTie1Canvas.stroke("#000000");
cloakTie1Canvas.beginShape();
cloakTie1Canvas.vertex(1.63661,16.3498);
cloakTie1Canvas.bezierVertex(-0.363389,13.8498,2.63672,3.71932,6.63661,2.84977);
cloakTie1Canvas.bezierVertex(41.1366,-4.65023,35.6367,12.8498,37.1367,16.3498);
cloakTie1Canvas.bezierVertex(38.6367,19.8498,31.1367,25.3498,31.6367,30.3498);
cloakTie1Canvas.bezierVertex(32.1367,35.3498,11.1367,28.8498,6.63661,26.8498);
cloakTie1Canvas.bezierVertex(2.13657,24.8498,6.63661,23.8498,8.13666,23.3498);
cloakTie1Canvas.bezierVertex(9.6367,22.8498,3.63661,18.8498,1.63661,16.3498);
cloakTie1Canvas.endShape();
  }
}

function drawCloakTie2 () {
  let distance = 53;
  push();
  ctx = cloakTie2Canvas.canvas.getContext("2d");
  cloakTie2Silhouette();
  ctx.clip();
  cloakTie2Canvas.background(colorGroup.get("vice"));
  pop();
  image(cloakTie2Canvas, origin-cloakTie2Canvas.width/2, origin+distance);
  
  function cloakTie2Silhouette() {
cloakTie2Canvas.fill("rgba(0, 0, 0, 0)");
cloakTie2Canvas.stroke('rgba(0,0,0,0)');
cloakTie2Canvas.strokeCap(PROJECT);
cloakTie2Canvas.strokeJoin(MITER);
cloakTie2Canvas.stroke("#000000");
cloakTie2Canvas.beginShape();
cloakTie2Canvas.vertex(6.49978,50);
cloakTie2Canvas.bezierVertex(-7.50022,24,10.4998,8,17.4998,7);
cloakTie2Canvas.vertex(41.5,1.5);
cloakTie2Canvas.bezierVertex(62.3,9.1,63.5,32.3333,61.5,43);
cloakTie2Canvas.bezierVertex(30.7,43,31.8727,22,31.5,7);
cloakTie2Canvas.bezierVertex(32.3945,43,20.3332,50.1667,6.49978,50);
cloakTie2Canvas.endShape();
  }
}

function drawCoat() {
  let distance = 54;
  push();
  ctx = coatCanvas.canvas.getContext("2d");
  coatSilhouette();
  ctx.clip();
  coatCanvas.background(colorGroup.get("dec"));
  pop();
  image(coatCanvas, origin-coatCanvas.width/2, origin+distance);
  
  function coatSilhouette() {
coatCanvas.fill("rgba(0, 0, 0, 0)");
coatCanvas.stroke('rgba(0,0,0,0)');
coatCanvas.strokeCap(PROJECT);
coatCanvas.strokeJoin(MITER);
coatCanvas.stroke("#000000");
coatCanvas.beginShape();
coatCanvas.vertex(3.15954,70.5193);
coatCanvas.bezierVertex(-5.19971,49.2592,12.5077,10.6883,25.5551,1.33571);
coatCanvas.bezierVertex(25.8761,1.10567,26.251,1,26.6459,1);
coatCanvas.vertex(216.76,1);
coatCanvas.bezierVertex(216.946,1,217.126,1.02343,217.304,1.07814);
coatCanvas.bezierVertex(234.184,6.27907,253.232,48.3014,244.948,70.3861);
coatCanvas.bezierVertex(244.522,71.524,243.141,71.8923,242.134,71.212);
coatCanvas.vertex(171.972,23.8191);
coatCanvas.bezierVertex(171.664,23.6105,171.419,23.3198,171.267,22.9799);
coatCanvas.vertex(165.53,10.1819);
coatCanvas.bezierVertex(165.207,9.46278,164.493,9,163.705,9);
coatCanvas.vertex(97.0331,9);
coatCanvas.bezierVertex(95.5972,9,94.0759,10.6123,93.4248,11.892);
coatCanvas.bezierVertex(91.6763,15.3281,87.111,20.2288,85.2641,23.0751);
coatCanvas.bezierVertex(85.0844,23.3521,84.8521,23.5895,84.5696,23.7605);
coatCanvas.vertex(5.89516,71.3774);
coatCanvas.bezierVertex(4.89586,71.9822,3.58697,71.6064,3.15954,70.5193);
coatCanvas.endShape();
  }
}

function drawSleeves() {
  let distance = 58;
  push();
  ctx = sleevesCanvas.canvas.getContext("2d");
  sleevesSilhouette();
  ctx.clip();
  sleevesCanvas.background(colorGroup.get("main"));
  pop();
  image(sleevesCanvas, origin-sleevesCanvas.width/2, origin+distance);
  
  function sleevesSilhouette() {
sleevesCanvas.fill("rgba(0, 0, 0, 0)");
sleevesCanvas.stroke('rgba(0,0,0,0)');
sleevesCanvas.strokeCap(PROJECT);
sleevesCanvas.strokeJoin(MITER);
sleevesCanvas.stroke("#000000");
sleevesCanvas.beginShape();
sleevesCanvas.vertex(31.8825,109.879);
sleevesCanvas.bezierVertex(-13.0116,78.1256,0.578883,25.6075,13.6928,1.99097);
sleevesCanvas.bezierVertex(14.0405,1.36494,14.694,1,15.4101,1);
sleevesCanvas.vertex(208.969,1);
sleevesCanvas.bezierVertex(209.751,1,210.473,1.48003,210.795,2.19254);
sleevesCanvas.bezierVertex(242.06,71.3798,215.206,101.529,196.164,108.834);
sleevesCanvas.bezierVertex(195.123,109.233,193.995,108.632,193.656,107.57);
sleevesCanvas.bezierVertex(184.175,77.8574,159.604,43.5644,147.539,28.9468);
sleevesCanvas.bezierVertex(147.053,28.3581,146.95,27.5597,147.435,26.9703);
sleevesCanvas.bezierVertex(150.189,23.6252,159.439,17.1485,166.885,12.2629);
sleevesCanvas.bezierVertex(168.565,11.1606,167.788,8.5,165.779,8.5);
sleevesCanvas.vertex(54.7524,8.5);
sleevesCanvas.bezierVertex(56.622,8.5,72.6188,19.86,81.9126,26.6511);
sleevesCanvas.bezierVertex(82.889,27.3645,83.0026,28.7777,82.1736,29.658);
sleevesCanvas.bezierVertex(53.8439,59.7421,39.4571,93.1686,34.9834,108.761);
sleevesCanvas.bezierVertex(34.6016,110.091,33.0128,110.679,31.8825,109.879);
sleevesCanvas.endShape();
  }
}

function drawCuffs() {
  let distance = 80;
  push();
  ctx = cuffsCanvas.canvas.getContext("2d");
  cuffsSilhouette();
  ctx.clip();
  cuffsCanvas.background("white");
  pop();
  image(cuffsCanvas, origin-cuffsCanvas.width/2, origin+distance);
  
  function cuffsSilhouette(){
cuffsCanvas.fill("rgba(0, 0, 0, 0)");
cuffsCanvas.stroke('rgba(0,0,0,0)');
cuffsCanvas.strokeCap(PROJECT);
cuffsCanvas.strokeJoin(MITER);
cuffsCanvas.stroke("#000000");
cuffsCanvas.beginShape();
cuffsCanvas.vertex(66.6632,109.24);
cuffsCanvas.bezierVertex(79.4115,93.9316,85.5253,45.6114,87,23);
cuffsCanvas.bezierVertex(87,67.6297,97.8251,96.7278,105.32,107.098);
cuffsCanvas.bezierVertex(105.731,107.667,106.43,107.946,107.126,107.851);
cuffsCanvas.bezierVertex(140.91,103.243,167.86,87.6632,179.32,74.7823);
cuffsCanvas.bezierVertex(179.755,74.2931,179.902,73.6254,179.726,72.9948);
cuffsCanvas.bezierVertex(171.252,42.7285,143.68,12.8521,129.364,2.00466);
cuffsCanvas.bezierVertex(128.585,1.41421,127.502,1.50694,126.767,2.15218);
cuffsCanvas.bezierVertex(118.127,9.74208,99.12,17.6694,87.3469,20.9054);
cuffsCanvas.bezierVertex(87.1141,20.9694,86.8773,20.9887,86.6372,20.9626);
cuffsCanvas.bezierVertex(71.1805,19.2843,56.0414,6.81584,47.7561,1.74054);
cuffsCanvas.bezierVertex(47.012,1.28472,46.0665,1.40358,45.4372,2.00815);
cuffsCanvas.bezierVertex(21.3109,25.1871,6.16338,59.7526,1.26379,75.1571);
cuffsCanvas.bezierVertex(1.0904,75.7023,1.1641,76.2764,1.47567,76.7562);
cuffsCanvas.bezierVertex(12.9593,94.4396,46.6619,107.385,64.9967,109.873);
cuffsCanvas.bezierVertex(65.6339,109.959,66.2517,109.734,66.6632,109.24);
cuffsCanvas.endShape();
  }
}

function drawSkirtHem() {
  let distance = 44;
  push();
  ctx = skirtHemCanvas.canvas.getContext("2d");
  skirtHemSilhouette();
  ctx.clip();
  skirtHemCanvas.background(colorGroup.get("vice"));
  pop();
  image(skirtHemCanvas, origin-skirtHemCanvas.width/2-1, origin+distance);
  
  function skirtHemSilhouette() {
skirtHemCanvas.fill("rgba(0, 0, 0, 0)");
skirtHemCanvas.stroke('rgba(0,0,0,0)');
skirtHemCanvas.strokeCap(PROJECT);
skirtHemCanvas.strokeJoin(MITER);
skirtHemCanvas.stroke("#000000");
skirtHemCanvas.beginShape();
skirtHemCanvas.vertex(26.4089,2.88284);
skirtHemCanvas.bezierVertex(7.47689,48.9724,-7.65932,153.575,6.67181,168.263);
skirtHemCanvas.bezierVertex(6.83848,168.434,6.98515,168.608,7.19534,168.721);
skirtHemCanvas.bezierVertex(11.1442,170.845,47.0242,168.5,50.4141,168.5);
skirtHemCanvas.bezierVertex(53.9141,168.5,55.9141,166,59.4141,166);
skirtHemCanvas.vertex(86.9141,166);
skirtHemCanvas.bezierVertex(90.9141,166,94.4141,168.5,98.9141,168.5);
skirtHemCanvas.vertex(135.414,168.5);
skirtHemCanvas.bezierVertex(139.414,168.5,142.914,166,146.914,166);
skirtHemCanvas.vertex(173.914,166);
skirtHemCanvas.bezierVertex(177.126,166,181.374,167.327,183.672,168.205);
skirtHemCanvas.bezierVertex(184.166,168.393,184.686,168.5,185.214,168.5);
skirtHemCanvas.vertex(221.413,168.5);
skirtHemCanvas.bezierVertex(223.191,168.5,224.759,167.356,225.186,165.629);
skirtHemCanvas.bezierVertex(237.949,114.084,206.69,12.7418,191.753,1.07053);
skirtHemCanvas.bezierVertex(191.203,0.640911,190.547,0.5,189.849,0.5);
skirtHemCanvas.vertex(30.0399,0.5);
skirtHemCanvas.bezierVertex(28.4456,0.5,27.0146,1.40813,26.4089,2.88284);
skirtHemCanvas.endShape();
  }
}

function drawClothe() {
  let distance = 44;
  push();
  ctx = clotheCanvas.canvas.getContext("2d");
  clotheSilhouette();
  ctx.clip();
  clotheCanvas.background(colorGroup.get("main"));
  pop();
  image(clotheCanvas, origin-clotheCanvas.width/2, origin+distance);
  
  function clotheSilhouette() {
clotheCanvas.fill("rgba(0, 0, 0, 0)");
clotheCanvas.stroke('rgba(0,0,0,0)');
clotheCanvas.strokeCap(PROJECT);
clotheCanvas.strokeJoin(MITER);
clotheCanvas.stroke("#000000");
clotheCanvas.beginShape();
clotheCanvas.vertex(187.849,0.5);
clotheCanvas.vertex(28.0397,0.5);
clotheCanvas.bezierVertex(26.4454,0.5,24.9994,1.4436,24.394,2.91848);
clotheCanvas.bezierVertex(14.008,28.2223,4.7665,71.1285,0.909513,107.123);
clotheCanvas.bezierVertex(0.657989,109.47,2.50708,111.5,4.8678,111.5);
clotheCanvas.vertex(220.166,111.5);
clotheCanvas.bezierVertex(222.552,111.5,224.409,109.425,224.106,107.058);
clotheCanvas.bezierVertex(218.033,59.6092,200.064,9.19929,189.783,1.09451);
clotheCanvas.bezierVertex(189.236,0.662515,188.547,0.5,187.849,0.5);
clotheCanvas.endShape();
  }
}

function drawShoes() {
  let distance = 202;
  push();
  ctx = shoesCanvas.canvas.getContext("2d");
  shoesSilhouette();
  ctx.clip();
  shoesCanvas.background("black");
  pop();
  image(shoesCanvas, origin-shoesCanvas.width/2+1, origin+distance);
  
  function shoesSilhouette() {
shoesCanvas.fill("rgba(0, 0, 0, 0)");
shoesCanvas.stroke('rgba(0,0,0,0)');
shoesCanvas.strokeCap(PROJECT);
shoesCanvas.strokeJoin(MITER);
shoesCanvas.stroke("#000000");
shoesCanvas.beginShape();
shoesCanvas.vertex(20.0002,30);
shoesCanvas.bezierVertex(3.20498,30,-0.766109,19.6509,2.37323,2.60289);
shoesCanvas.bezierVertex(2.54527,1.66865,3.36723,1,4.31719,1);
shoesCanvas.vertex(124.526,1);
shoesCanvas.bezierVertex(125.488,1,126.316,1.68582,126.484,2.63327);
shoesCanvas.bezierVertex(129.039,17.0006,129.115,30,105.685,30);
shoesCanvas.bezierVertex(86.5214,30,85.9602,17.6916,87.6995,7.93429);
shoesCanvas.bezierVertex(87.9235,6.6775,86.9775,5.5,85.7009,5.5);
shoesCanvas.vertex(43.4558,5.5);
shoesCanvas.bezierVertex(42.0919,5.5,41.1297,6.83771,41.4453,8.1646);
shoesCanvas.bezierVertex(44.0031,18.9167,40.319,30,20.0002,30);
shoesCanvas.endShape();
  }
}

function drawEyeLeft() {
  let distanceWidth = -23;
  let distanceHeight = -37;
  push();
  ctx = eyeLeftCanvas.canvas.getContext("2d");
  eyeLeftSilhouette();
  ctx.clip();
  eyeLeftCanvas.background(colorGroup.get("eye"));
  pop();
  image(eyeLeftCanvas, origin-eyeLeftCanvas.width+distanceWidth, origin+distanceHeight);
  
  function eyeLeftSilhouette() {
eyeLeftCanvas.fill("rgba(0, 0, 0, 0)");
eyeLeftCanvas.stroke('rgba(0,0,0,0)');
eyeLeftCanvas.strokeCap(PROJECT);
eyeLeftCanvas.strokeJoin(MITER);
eyeLeftCanvas.stroke(colorGroup.get("eye"));
eyeLeftCanvas.beginShape();
eyeLeftCanvas.vertex(22,10);
eyeLeftCanvas.bezierVertex(14.5033,6.25167,8,5,3,1.5);
eyeLeftCanvas.vertex(4.49621,9.28029);
eyeLeftCanvas.bezierVertex(4.84479,11.0929,2.76131,12.3699,1.30432,11.2367);
eyeLeftCanvas.vertex(1,11);
eyeLeftCanvas.bezierVertex(1,18,2,28.5,16.5,32);
eyeLeftCanvas.bezierVertex(23.5522,33.7023,29.7442,29.4637,30,23.5);
eyeLeftCanvas.bezierVertex(30.2701,17.2018,27,12.5,22,10);
eyeLeftCanvas.endShape();
  }
}

function drawEyeRight() {
  let distanceWidth = 23;
  let distanceHeight = -37;
  push();
  ctx = eyeRightCanvas.canvas.getContext("2d");
  eyeRightSilhouette();
  ctx.clip();
  eyeRightCanvas.background(colorGroup.get("eye"));
  pop();
  image(eyeRightCanvas, origin+distanceWidth, origin+distanceHeight);
  
  function eyeRightSilhouette() {
eyeRightCanvas.fill("rgba(0, 0, 0, 0)");
eyeRightCanvas.stroke('rgba(0,0,0,0)');
eyeRightCanvas.strokeCap(PROJECT);
eyeRightCanvas.strokeJoin(MITER);
eyeRightCanvas.stroke(colorGroup.get("eye"));
eyeRightCanvas.beginShape();
eyeRightCanvas.vertex(9.01562,10);
eyeRightCanvas.bezierVertex(16.5123,6.25167,23.0156,5,28.0156,1.5);
eyeRightCanvas.vertex(26.5194,9.28029);
eyeRightCanvas.bezierVertex(26.1708,11.0929,28.2543,12.3699,29.7113,11.2367);
eyeRightCanvas.vertex(30.0156,11);
eyeRightCanvas.bezierVertex(30.0156,18,29.0156,28.5,14.5156,32);
eyeRightCanvas.bezierVertex(7.46339,33.7023,1.27142,29.4637,1.01562,23.5);
eyeRightCanvas.bezierVertex(0.745481,17.2018,4.01562,12.5,9.01562,10);
eyeRightCanvas.endShape();
  }
}

function drawEyebrowsLeft1() {
  let distanceWidth = -37;
  let distanceHeight = -42;
  push();
  ctx = eyebrowsLeft1Canvas.canvas.getContext("2d");
  eyebrowsLeft1Silhouette();
  ctx.clip();
  eyebrowsLeft1Canvas.background(colorGroup.get("eyebrows"));
  pop();
  image(eyebrowsLeft1Canvas, origin+distanceWidth-eyebrowsLeft1Canvas.width, origin+distanceHeight-eyebrowsLeft1Canvas.height);
  
  function eyebrowsLeft1Silhouette() {
    eyebrowsLeft1Canvas.fill("rgba(0, 0, 0, 0)");
    eyebrowsLeft1Canvas.stroke('rgba(0,0,0,0)');
    eyebrowsLeft1Canvas.strokeCap(PROJECT);
    eyebrowsLeft1Canvas.strokeJoin(MITER);
    eyebrowsLeft1Canvas.stroke(colorGroup.get("eyebrows"));
    eyebrowsLeft1Canvas.strokeJoin(ROUND);
    eyebrowsLeft1Canvas.beginShape();
    eyebrowsLeft1Canvas.vertex(1.05293,15.9881);
    eyebrowsLeft1Canvas.bezierVertex(0.623723,15.9708,0.690824,12.8332,1,10.5);
    eyebrowsLeft1Canvas.bezierVertex(1.30918,8.16683,2,3.5,2.30246,1.02636);
    eyebrowsLeft1Canvas.bezierVertex(2.13209,5.24168,1.7096,10.3851,1.63388,12.2586);
    eyebrowsLeft1Canvas.bezierVertex(1.55816,14.132,1.48214,16.0055,1.05293,15.9881);
    eyebrowsLeft1Canvas.endShape();
  }
}

function drawEyebrowsLeft2() {
  let distanceWidth = -32;
  let distanceHeight = -38;
  push();
  ctx = eyebrowsLeft2Canvas.canvas.getContext("2d");
  eyebrowsLeft2Silhouette();
  ctx.clip();
  eyebrowsLeft2Canvas.background(colorGroup.get("eyebrows"));
  pop();
  image(eyebrowsLeft2Canvas, origin+distanceWidth-eyebrowsLeft2Canvas.width, origin+distanceHeight-eyebrowsLeft2Canvas.height);

  
  function eyebrowsLeft2Silhouette() {
eyebrowsLeft2Canvas.fill("rgba(0, 0, 0, 0)");
eyebrowsLeft2Canvas.stroke('rgba(0,0,0,0)');
eyebrowsLeft2Canvas.strokeCap(PROJECT);
eyebrowsLeft2Canvas.strokeJoin(MITER);
eyebrowsLeft2Canvas.stroke(colorGroup.get("eyebrows"));
eyebrowsLeft2Canvas.strokeJoin(ROUND);
eyebrowsLeft2Canvas.beginShape();
eyebrowsLeft2Canvas.vertex(1.23202,18.5254);
eyebrowsLeft2Canvas.bezierVertex(0.878463,23.1645,0.878692,30.3809,1.5856,30.8963);
eyebrowsLeft2Canvas.bezierVertex(2.53434,31.5881,2.64644,28.8345,2.64644,22.1336);
eyebrowsLeft2Canvas.bezierVertex(2.64644,12.8554,2.29288,4.60818,3,1);
eyebrowsLeft2Canvas.bezierVertex(2.36633,5.29545,1.40831,14.8142,1.23202,18.5254);
eyebrowsLeft2Canvas.endShape();
  }
}

function drawEyebrowsLeft3() {
  let distanceWidth = -26;
  let distanceHeight = -42;
  push();
  ctx = eyebrowsLeft3Canvas.canvas.getContext("2d");
  eyebrowsLeft3Silhouette();
  ctx.clip();
  eyebrowsLeft3Canvas.background(colorGroup.get("eyebrows"));
  pop();
  image(eyebrowsLeft3Canvas, origin+distanceWidth-eyebrowsLeft3Canvas.width, origin+distanceHeight-eyebrowsLeft3Canvas.height);

  
  function eyebrowsLeft3Silhouette() {
eyebrowsLeft3Canvas.fill("rgba(0, 0, 0, 0)");
eyebrowsLeft3Canvas.stroke('rgba(0,0,0,0)');
eyebrowsLeft3Canvas.strokeCap(PROJECT);
eyebrowsLeft3Canvas.strokeJoin(MITER);
eyebrowsLeft3Canvas.stroke(colorGroup.get("eyebrows"));
eyebrowsLeft3Canvas.strokeJoin(ROUND);
eyebrowsLeft3Canvas.beginShape();
eyebrowsLeft3Canvas.vertex(1,11.6099);
eyebrowsLeft3Canvas.bezierVertex(1,10.4525,1.484,4.05438,1.726,1);
eyebrowsLeft3Canvas.bezierVertex(1.726,2.5,1.726,4.85816,1.968,9.68087);
eyebrowsLeft3Canvas.bezierVertex(2.21,14.5036,1,13.0568,1,11.6099);
eyebrowsLeft3Canvas.endShape();
  }
}

function drawEyebrowsRight1() {
  let distanceWidth = 27;
  let distanceHeight = -40;
  push();
  ctx = eyebrowsRight1Canvas.canvas.getContext("2d");
  eyebrowsRight1Silhouette();
  ctx.clip();
  eyebrowsRight1Canvas.background(colorGroup.get("eyebrows"));
  pop();
  image(eyebrowsRight1Canvas, origin+distanceWidth, origin+distanceHeight-eyebrowsRight1Canvas.height);
  
  function eyebrowsRight1Silhouette() {
eyebrowsRight1Canvas.fill("rgba(0, 0, 0, 0)");
eyebrowsRight1Canvas.stroke('rgba(0,0,0,0)');
eyebrowsRight1Canvas.strokeCap(PROJECT);
eyebrowsRight1Canvas.strokeJoin(MITER);
eyebrowsRight1Canvas.stroke(colorGroup.get("eyebrows"));
eyebrowsRight1Canvas.strokeJoin(ROUND);
eyebrowsRight1Canvas.beginShape();
eyebrowsRight1Canvas.vertex(2.16734,13.048);
eyebrowsRight1Canvas.bezierVertex(2.78421,11.5921,3.11366,4.14931,3.1131,1.08535);
eyebrowsRight1Canvas.bezierVertex(2.9949,2.58069,2.18134,6.52886,1.35436,11.0487);
eyebrowsRight1Canvas.bezierVertex(0.527388,15.5685,1.75608,14.0186,2.16734,13.048);
eyebrowsRight1Canvas.endShape();
  }
}

function drawEyebrowsRight2() {
  let distanceWidth = 32;
  let distanceHeight = -37;
  push();
  ctx = eyebrowsRight2Canvas.canvas.getContext("2d");
  eyebrowsRight2Silhouette();
  ctx.clip();
  eyebrowsRight2Canvas.background(colorGroup.get("eyebrows"));
  pop();
  image(eyebrowsRight2Canvas, origin+distanceWidth, origin+distanceHeight-eyebrowsRight2Canvas.height);
  
  function eyebrowsRight2Silhouette() {
eyebrowsRight2Canvas.fill("rgba(0, 0, 0, 0)");
eyebrowsRight2Canvas.stroke('rgba(0,0,0,0)');
eyebrowsRight2Canvas.strokeCap(PROJECT);
eyebrowsRight2Canvas.strokeJoin(MITER);
eyebrowsRight2Canvas.stroke(colorGroup.get("eyebrows"));
eyebrowsRight2Canvas.strokeJoin(ROUND);
eyebrowsRight2Canvas.beginShape();
eyebrowsRight2Canvas.vertex(2.5,25.5);
eyebrowsRight2Canvas.bezierVertex(3.38021,25.5,3.61727,21.2053,3.00031,16);
eyebrowsRight2Canvas.bezierVertex(2.74144,13.8159,2.50004,7.5,0.500038,1);
eyebrowsRight2Canvas.bezierVertex(2.65107,10,1.98912,15.7426,1.98912,18.4727);
eyebrowsRight2Canvas.bezierVertex(1.98912,21.7625,1.09339,25.5,2.5,25.5);
eyebrowsRight2Canvas.endShape();
  }
}

function drawEyebrowsRight3() {
  let distanceWidth = 36;
  let distanceHeight = -39;
  push();
  ctx = eyebrowsRight3Canvas.canvas.getContext("2d");
  eyebrowsRight3Silhouette();
  ctx.clip();
  eyebrowsRight3Canvas.background(colorGroup.get("eyebrows"));
  pop();
  image(eyebrowsRight3Canvas, origin+distanceWidth, origin+distanceHeight-eyebrowsRight3Canvas.height);
  
  function eyebrowsRight3Silhouette() {
eyebrowsRight3Canvas.fill("rgba(0, 0, 0, 0)");
eyebrowsRight3Canvas.stroke('rgba(0,0,0,0)');
eyebrowsRight3Canvas.strokeCap(PROJECT);
eyebrowsRight3Canvas.strokeJoin(MITER);
eyebrowsRight3Canvas.stroke(colorGroup.get("eyebrows"));
eyebrowsRight3Canvas.strokeJoin(ROUND);
eyebrowsRight3Canvas.beginShape();
eyebrowsRight3Canvas.vertex(3.42604,16);
eyebrowsRight3Canvas.bezierVertex(4.11903,16,3.77262,13.2429,3.4258,10.5);
eyebrowsRight3Canvas.bezierVertex(3.07897,7.75715,2.7328,6.02856,1.00024,1);
eyebrowsRight3Canvas.bezierVertex(2.20044,5.8,2.65543,10.4969,2.7329,12.2454);
eyebrowsRight3Canvas.bezierVertex(2.9658,14.4907,2.73305,16,3.42604,16);
eyebrowsRight3Canvas.endShape();
  }
}

function drawCheekLeft() {
  let distanceWidth = -36;
  let distanceHeight = 2;
  push();
  ctx = cheekLeftCanvas.canvas.getContext("2d");
  cheekLeftSilhouette();
  ctx.clip();
  cheekLeftCanvas.background(colorGroup.get("skin"));
  pop();
  image(cheekLeftCanvas, origin+distanceWidth-cheekLeftCanvas.width, origin+distanceHeight);

  function cheekLeftSilhouette() {
    cheekLeftCanvas.fill("rgba(0, 0, 0, 0)");
    cheekLeftCanvas.stroke('rgba(0,0,0,0)');
    cheekLeftCanvas.strokeCap(PROJECT);
    cheekLeftCanvas.strokeJoin(MITER);
    cheekLeftCanvas.stroke(colorGroup.get("skin"));
    cheekLeftCanvas.strokeJoin(ROUND);
    cheekLeftCanvas.beginShape();
    cheekLeftCanvas.vertex(6.98691,7.50793);
    cheekLeftCanvas.bezierVertex(-2.45567,5.37407,0.310648,-1.02753,8.09209,1.63982);
    cheekLeftCanvas.bezierVertex(15.8735,4.30718,16.4295,9.6418,6.98691,7.50793);
    cheekLeftCanvas.endShape();
  }
}

function drawCheekRight() {
  let distanceWidth = 41;
  let distanceHeight = 0;
  push();
  ctx = cheekRightCanvas.canvas.getContext("2d");
  cheekRightSilhouette();
  ctx.clip();
  cheekRightCanvas.background(colorGroup.get("skin"));
  pop();
  image(cheekRightCanvas, origin+distanceWidth, origin+distanceHeight);

  function cheekRightSilhouette() {
    cheekRightCanvas.fill("rgba(0, 0, 0, 0)");
    cheekRightCanvas.stroke('rgba(0,0,0,0)');
    cheekRightCanvas.strokeCap(PROJECT);
    cheekRightCanvas.strokeJoin(MITER);
    cheekRightCanvas.stroke(colorGroup.get("skin"));
    cheekRightCanvas.strokeJoin(ROUND);
    cheekRightCanvas.beginShape();
    cheekRightCanvas.vertex(8.10501,7.3681);
    cheekRightCanvas.bezierVertex(17.0915,4.36031,14.5917,-1.63984,6.99984,1.49999);
    cheekRightCanvas.bezierVertex(-0.592052,4.63981,-0.881441,10.3759,8.10501,7.3681);
    cheekRightCanvas.endShape();
  }

}

function drawEyebrowsCenter() {
  let distance = -30;
  push();
  ctx = eyebrowsCenterCanvas.canvas.getContext("2d");
  eyebrowsCenterSilhouette();
  ctx.clip();
  eyebrowsCenterCanvas.background(colorGroup.get("ball"));
  pop();
  image(eyebrowsCenterCanvas, origin-eyebrowsCenterCanvas.width/2, origin+distance-eyebrowsCenterCanvas.height);

  function eyebrowsCenterSilhouette() {
    eyebrowsCenterCanvas.fill("rgba(0, 0, 0, 0)");
    eyebrowsCenterCanvas.stroke('rgba(0,0,0,0)');
    eyebrowsCenterCanvas.strokeCap(PROJECT);
    eyebrowsCenterCanvas.strokeJoin(MITER);
    eyebrowsCenterCanvas.stroke(colorGroup.get("ball"));
    eyebrowsCenterCanvas.strokeJoin(ROUND);
    eyebrowsCenterCanvas.beginShape();
    eyebrowsCenterCanvas.vertex(3.11061,0.5);
    eyebrowsCenterCanvas.bezierVertex(1.11073,4.5,-0.189269,12.5,2.61076,12.5);
    eyebrowsCenterCanvas.bezierVertex(6.11079,12.5,4.61056,4.5,3.11061,0.5);
    eyebrowsCenterCanvas.endShape();
  }

}

function drawNose() {
  let distance = 3;
  push();
  ctx = noseCanvas.canvas.getContext("2d");
  noseSilhouette();
  ctx.clip();
  noseCanvas.background(colorGroup.get("skin"));
  pop();
  image(noseCanvas, origin-noseCanvas.width/2, origin+distance);

  function noseSilhouette() {
    noseCanvas.fill("rgba(0, 0, 0, 0)");
    noseCanvas.stroke('rgba(0,0,0,0)');
    noseCanvas.strokeCap(PROJECT);
    noseCanvas.strokeJoin(MITER);
    noseCanvas.stroke(colorGroup.get("skin"));
    noseCanvas.strokeJoin(ROUND);
    noseCanvas.beginShape();
    noseCanvas.vertex(8.50001,11.5);
    noseCanvas.bezierVertex(0.999902,9.5,-1.00005,1,3.5,1);
    noseCanvas.bezierVertex(5.49989,1,6.9999,2.5,8.9999,2.5);
    noseCanvas.bezierVertex(10.9999,2.5,12.4999,1,14.4999,1);
    noseCanvas.bezierVertex(17.4999,1,16.4999,10,8.50001,11.5);
    noseCanvas.endShape();
  }
}

function drawMouth() {
  let distance = 14;
  push();
  mouthCanvas.fill("rgba(0, 0, 0, 0)");
  mouthCanvas.stroke('rgba(0,0,0,0)');
  mouthCanvas.strokeCap(PROJECT);
  mouthCanvas.strokeJoin(MITER);
  mouthCanvas.stroke(colorGroup.get("mouth"));
  mouthCanvas.strokeJoin(ROUND);
  mouthCanvas.beginShape();
  mouthCanvas.vertex(1,5.42147);
  mouthCanvas.bezierVertex(3.8,7.29724,10.52,9.03903,15,1);
  mouthCanvas.bezierVertex(17.0222,4.3496,22.6533,9.68216,29,4.21561);
  mouthCanvas.endShape();
  pop();
  image(mouthCanvas, origin-mouthCanvas.width/2, origin+distance);
}