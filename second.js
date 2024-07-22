const { 
  scale, 
  translate, 
  rotate, 
  originate,
  Turtle,
  rand,
  randInRange,
  randIntInRange,
  noise,
  bounds,
  setRandSeed,
} = blotToolkit;

const width = 125;
const height = 125;

setDocDimensions(width, height)
var i = 65;
var w = 30;
var inte = 10;
var sc = 0.5;
var low = -10;


const pugFace = [
  [
    [sc*(30+i), sc*(90+w)],
    [sc*(40+i), sc*(70+w)],
    [sc*(60+i), sc*(70+w)],
    [sc*(70+i), sc*(90+w)],
    [sc*(60+i), sc*(110+w)],
    [sc*(50+i), sc*(120+w)],
    [sc*(40+i), sc*(110+w)],
    [sc*(35+i), sc*(100+w)],
    [sc*(30+i), sc*(90+w)]
  ],
  [
    [sc*(30 + inte+i), sc*(90+w)],
    [sc*(40 + inte+i), sc*(70+w)],
    [sc*(60 + inte+i), sc*(70+w)],
    [sc*(70 + inte+i), sc*(90+w)],
    [sc*(60 + inte+i), sc*(110+w)],
    [sc*(50 + inte+i), sc*(120+w)],
    [sc*(40 + inte+i), sc*(110+w)],
    [sc*(35 + inte+i), sc*(100+w)],
    [sc*(30 + inte+i), sc*(90+w)]
  ],
  [
    [sc*(30+i + (inte / 2)), sc*(90 +w+ low)],
    [sc*(40+i + (inte / 2)), sc*(70 +w+low)],
    [sc*(60+i + (inte / 2)), sc*(70+w + low)],
    [sc*(70+i + (inte / 2)), sc*(90 +w+ low)],
    [sc*(60+i + (inte / 2)), sc*(110 +w+ low)],
    [sc*(50+i + (inte / 2)), sc*(120 +w+ low)],
    [sc*(40+i + (inte / 2)), sc*(110 +w+ low)],
    [sc*(35+i + (inte / 2)), sc*(100 +w+ low)],
    [sc*(30+i + (inte / 2)), sc*(90 +w+ low)]
  ]
];
drawLines(pugFace, {fill:'white'});
var i = 95;
var w = 60;
var inte = 10;
var sc = 0.4;
var low = -10;
const pugFace2 = [
  [
    [sc*(30+i), sc*(90+w)],
    [sc*(40+i), sc*(70+w)],
    [sc*(60+i), sc*(70+w)],
    [sc*(70+i), sc*(90+w)],
    [sc*(60+i), sc*(110+w)],
    [sc*(50+i), sc*(120+w)],
    [sc*(40+i), sc*(110+w)],
    [sc*(35+i), sc*(100+w)],
    [sc*(30+i), sc*(90+w)]
  ],
  [
    [sc*(30 + inte+i), sc*(90+w)],
    [sc*(40 + inte+i), sc*(70+w)],
    [sc*(60 + inte+i), sc*(70+w)],
    [sc*(70 + inte+i), sc*(90+w)],
    [sc*(60 + inte+i), sc*(110+w)],
    [sc*(50 + inte+i), sc*(120+w)],
    [sc*(40 + inte+i), sc*(110+w)],
    [sc*(35 + inte+i), sc*(100+w)],
    [sc*(30 + inte+i), sc*(90+w)]
  ],
  [
    [sc*(30+i + (inte / 2)), sc*(90 +w+ low)],
    [sc*(40+i + (inte / 2)), sc*(70 +w+low)],
    [sc*(60+i + (inte / 2)), sc*(70+w + low)],
    [sc*(70+i + (inte / 2)), sc*(90 +w+ low)],
    [sc*(60+i + (inte / 2)), sc*(110 +w+ low)],
    [sc*(50+i + (inte / 2)), sc*(120 +w+ low)],
    [sc*(40+i + (inte / 2)), sc*(110 +w+ low)],
    [sc*(35+i + (inte / 2)), sc*(100 +w+ low)],
    [sc*(30+i + (inte / 2)), sc*(90 +w+ low)]
  ]
];
drawLines(pugFace2);
